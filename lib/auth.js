import React, { useState, useContext, useEffect, createContext } from 'react'
import { setContext } from '@apollo/client/link/context'

import {
	ApolloProvider,
	ApolloClient,
	InMemoryCache,
	HttpLink,
	ApolloLink
} from '@apollo/client'
import { onError } from 'apollo-link-error'
import { isJwtExpired } from 'jwt-check-expiration'

// Graphql
import {
	SigninMutation,
	SignoutMutation
} from '@graphql/mutations/authMutations'

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

	const createApolloClient = () => {
		const link = new HttpLink({
			uri: 'http://localhost:5000/graphql',
			headers: {
				'Content-Type': 'application/json'
			},
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
					Authorization: token ? `Bearer ${token}` : ''
				}
			}
		})

		return new ApolloClient({
			link: authLink.concat(link),
			cache: new InMemoryCache()
		})
	}

	const signIn = async ({ email, password }) => {
		const client = createApolloClient()
		let errors = ''

		const response = await client
			.mutate({
				mutation: SigninMutation,
				variables: { email, password },
				errors: onError
			})
			.then(result => {
				if (result.data?.signIn?.token) {
					setAuthToken(result.data.signIn.token)
					localStorage.setItem('token', result.data.signIn.token)
				}
			})
			.catch(err => {
				errors = err.message
			})

		return { errors }
	}

	const hasValidToken = () => {
		const token = localStorage.getItem('token')
		if (!token || isJwtExpired(token)) {
			return false
		} else {
			return true
		}
	}

	useEffect(() => {
		const loggedInUser = localStorage.getItem('token')

		if (loggedInUser) {
			const foundUser = loggedInUser
			setUser(foundUser)
			setAccess(loggedInUser)
			setAuthToken(authToken)
		} else {
			setUser('')
			setAccess('')
		}
	}, [signIn])

	return {
		setAuthToken,
		isSignedIn,
		signIn,
		hasValidToken,
		createApolloClient
	}
}
