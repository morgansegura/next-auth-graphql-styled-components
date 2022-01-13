import React, { useState, useContext, useEffect, createContext } from 'react'
import { setContext } from '@apollo/client/link/context'
import {
	ApolloProvider,
	ApolloClient,
	InMemoryCache,
	HttpLink,
	gql,
	ApolloLink,
	useMutation
} from '@apollo/client'
import { onError } from 'apollo-link-error'
import { ErrorMessage } from '@components/layouts'

// Graphql
import {
	SigninMutation,
	SignoutMutation
} from '@graphql/mutations/authMutations'

// libs
import { toast } from 'react-toastify'

// Create Context
const authContext = createContext()

// Setup useAuth
export const useAuth = () => {
	return useContext(authContext)
}

export function AuthProvider({ children }) {
	const auth = useProvideAuth()

	return (
		<authContext.Provider value={auth}>
			<ApolloProvider client={auth.createApolloClient()}>
				{children}
			</ApolloProvider>
		</authContext.Provider>
	)
}

function useProvideAuth() {
	const [authToken, setAuthToken] = useState(null)
	const [user, setUser] = useState()
	const [access, setAccess] = useState()
	const [printErrors, setPrintErrors] = useState()

	const isSignedIn = () => {
		if (access) {
			return true
		} else {
			return false
		}
	}

	const getAuthHeaders = () => {
		if (!authToken) return null

		return {
			authorization: `Bearer ${authToken}`
		}
	}

	const createApolloClient = () => {
		const link = new HttpLink({
			uri: 'http://localhost:5000/graphql',
			headers: getAuthHeaders(),
			credentials: 'include'
		})

		const authLink = setContext((_, { headers }) => {
			// get the authentication token from local storage if it exists
			const token = localStorage.getItem('token')

			if (token) {
				setAccess(true)
			}

			// return the headers to the context so httpLink can read them
			return {
				headers: {
					...headers,
					authorization: token ? `Bearer ${token}` : ''
				}
			}
		})

		return new ApolloClient({
			link: ApolloLink.from([
				onError(({ graphQLErrors, networkError }) => {
					if (graphQLErrors)
						graphQLErrors.map(({ message, locations, path }) => {
							setPrintErrors(message)
							// console.log(
							// 	`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
							// )
						})

					if (networkError) {
						// console.log(`[Network error]: ${networkError}`)
					}
				}),
				authLink.concat(link)
			]),
			cache: new InMemoryCache()
		})
	}

	const signIn = async ({ username, password }) => {
		const client = createApolloClient()
		let errors = ''

		const response = await client
			.mutate({
				mutation: SigninMutation,
				variables: { username, password },
				errors: onError
			})
			.then(result => {
				if (result.data?.signIn?.token) {
					setAuthToken(result.data.signIn.token)
					localStorage.setItem('user', result.data)
				}
			})
			.catch(err => {
				errors = err.message
			})

		return { errors }
	}

	const signOut = async () => {
		const client = createApolloClient()

		const result = await client.mutate({
			mutation: SignoutMutation
		})

		setAuthToken(null)
		localStorage.removeItem('user')
	}

	useEffect(() => {
		const loggedInUser = localStorage.getItem('user')
		if (loggedInUser) {
			const foundUser = loggedInUser
			setUser(foundUser)
			setAccess(loggedInUser)
			setAuthToken(loggedInUser)
		} else {
			setUser('')
			setAccess('')
		}
	}, [signIn, signOut])

	return {
		setAuthToken,
		isSignedIn,
		signIn,
		signOut,
		createApolloClient
	}
}
