import React, { useState, useContext, createContext } from 'react'
import { Provider } from 'urql'
import client from '@lib/client'

import useStorage from '@hooks/useStorage'
import {
	LOGIN_MUTATION,
	SIGNUP_MUTATION
} from '@graphql/mutations/authMutations'
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

	const getCurrentUser = () => {
		const isCurrentUser = false
		const isEmailVerified = false
		let user

		const { data } = client.query(GET_CURRENT_USER_QUERY).toPromise()

		if (data?.me?.id) {
			const userData = data?.me
			user = data
			user.isEmailVerified = userData.isEmailVerified
			user.isCurrentUser = true
		}

		return {
			isCurrentUser,
			isEmailVerified,
			user
		}
	}
	const { isCurrentUser, user } = getCurrentUser()

	const isLoggedIn = () => {
		if (authToken) {
			return true
		} else {
			return false
		}
	}

	const signup = async ({ email, password }) => {
		const { data, error } = await client
			.mutation(SIGNUP_MUTATION, { email, password })
			.toPromise()

		return { data, error }
	}

	const login = async ({ email, password }) => {
		const { data, error } = await client
			.mutation(LOGIN_MUTATION, { email, password })
			.toPromise()

		if (data?.login?.token) {
			setAuthToken(true)
			setItem('token', data?.login?.token)
		}

		return { data, error }
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
		signup,
		logout
	}
}
