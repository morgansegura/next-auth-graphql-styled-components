import {
	makeOperation,
	createClient,
	dedupExchange,
	fetchExchange,
	cacheExchange
} from '@urql/core'

import { authExchange } from '@urql/exchange-auth'
import useStorage from '@hooks/useStorage'

import { getRefreshToken } from '@lib/authStore'

// const REFRESH_TOKEN_MUTATION = gql`
// 	mutation RefreshCredentials($refreshToken: String!) {
// 		refreshCredentials(refreshToken: $refreshToken) {
// 			refreshToken
// 			token
// 		}
// 	}
// `

let initialized = new Date().getTime()
const { getItem, setItem, removeItem } = useStorage()
const client = createClient({
	url: 'http://localhost:3001/graphql',
	exchanges: [
		dedupExchange,
		cacheExchange,
		authExchange({
			async getAuth({ authState, mutate }) {
				if (!authState) {
					const token = getItem('token')
					const refreshToken = getItem('refreshToken')

					if (token) {
						return { token }
					}
					// if (token && refreshToken) {
					// 	return { token, refreshToken }
					// }

					return null
				}

				// console.log('result')
				// console.log('authState.refreshToken', authState.refreshToken)
				// const result = await mutate(REFRESH_TOKEN_MUTATION, {
				// 	refreshToken: authState.refreshToken
				// })

				// if (result.data?.refreshCredentials) {
				// 	saveAuthData(result.data.refreshCredentials)

				// 	initialized = new Date().getTime()
				// 	return result.data.refreshCredentials
				// }

				// This is where auth has gone wrong and we need to clean up and redirect to a login page
				removeItem('token')
				window.location.reload()

				return null
			},

			addAuthToOperation({ authState, operation }) {
				if (!authState || !authState.token) {
					return operation
				}

				const fetchOptions =
					typeof operation.context.fetchOptions === 'function'
						? operation.context.fetchOptions()
						: operation.context.fetchOptions || {}

				return makeOperation(operation.kind, operation, {
					...operation.context,
					fetchOptions: {
						...fetchOptions,
						headers: {
							...fetchOptions.headers,
							Authorization: `Bearer ${authState.token}`
						}
					}
				})
			},

			didAuthError({ error }) {
				return error.graphQLErrors.some(
					e => e.extensions?.code === 'UNAUTHORIZED'
				)
			},

			willAuthError({ operation, authState }) {
				if (!authState) {
					// Detect our login mutation and let this operation through:
					return (
						operation.kind !== 'mutation' ||
						// Here we find any mutation definition with the "signin" field
						!operation.query.definitions.some(definition => {
							return (
								definition.kind === 'OperationDefinition' &&
								definition.selectionSet.selections.some(
									node => {
										// The field name is just an example, since register may also be an exception
										return (
											node.kind === 'Field' &&
											node.name.value === 'signin'
										)
									}
								)
							)
						})
					)
				} else
					return (
						operation.kind === 'query' &&
						new Date().getTime() - initialized > 5000
					)
			}
		}),
		fetchExchange
	]
})

export default client
