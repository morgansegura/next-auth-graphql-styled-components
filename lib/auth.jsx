import React, { useState, useContext, createContext } from 'react'
import { Provider, useClient, Context } from 'urql'
import client from '@lib/client'

import useStorage from '@hooks/useStorage'
import { LOGIN_MUTATION } from '@graphql/mutations/authMutations'
import { GET_CURRENT_USER_QUERY } from '@graphql/queries/authQueries'

// import { ThemeConsumer } from 'styled-components'

const authContext = createContext()

export function AuthProvider({ children }) {
	const auth = useProvideAuth(client)

	return (
		<authContext.Provider value={auth}>
			<Provider value={client}>{children}</Provider>
		</authContext.Provider>
	)
}

export const useAuth = () => {
	return useContext(authContext)
}

function useProvideAuth(client) {
	const { setItem, getItem, removeItem } = useStorage()
	const [authToken, setAuthToken] = useState(null)
	const [userData, setUserData] = useState({})

	const isLoggedIn = () => {
		if (authToken || getItem('token')) {
			return true
		} else {
			return false
		}
	}

	const getCurrentUser = async () => {
		let user
		const { data } = await client.query(GET_CURRENT_USER_QUERY).toPromise()

		if (data?.me?.id) {
			user = data
		}
		return user
	}

	const login = async ({ email, password }) => {
		const {
			data: {
				login: { token }
			}
		} = await client
			.mutation(LOGIN_MUTATION, { email, password })
			.toPromise()

		if (token) {
			setAuthToken(token)
			setItem('token', token)
		}
	}

	const logout = () => {
		setAuthToken(null)
		removeItem('token')
	}

	return {
		setAuthToken,
		isLoggedIn,
		getCurrentUser,
		login,
		logout
	}
}
