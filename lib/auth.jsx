import React, { useState, useContext, createContext } from 'react'
import {
	ApolloProvider,
	ApolloClient,
	InMemoryCache,
	HttpLink,
	gql
} from '@apollo/client'
import useStorage from '@hooks/useStorage'
import { LOGIN_MUTATION } from '@graphql/mutations/authMutations'

const authContext = createContext()

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

export const useAuth = () => {
	return useContext(authContext)
}

function useProvideAuth() {
	const { setItem, getItem, removeItem } = useStorage()
	const [authToken, setAuthToken] = useState(null)

	const isLoggedIn = () => {
		if (authToken || getItem('token')) {
			return true
		} else {
			console.log(`IS NOT logged in`)
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
			headers: getAuthHeaders()
		})

		return new ApolloClient({
			link,
			cache: new InMemoryCache()
		})
	}

	const login = async ({ email, password }) => {
		const client = createApolloClient()

		const result = await client.mutate({
			mutation: LOGIN_MUTATION,
			variables: { email, password }
		})

		if (result?.data?.login?.token) {
			setAuthToken(result.data.login.token)
			setItem('token', result.data.login.token)
		}
	}

	const logout = () => {
		setAuthToken(null)
		removeItem('token')
	}

	return {
		setAuthToken,
		isLoggedIn,
		login,
		logout,
		createApolloClient
	}
}
