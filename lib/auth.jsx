import React, { useState, useContext, createContext } from 'react'
import { Provider, useClient, Context } from 'urql'
import client from '@lib/client'

import useStorage from '@hooks/useStorage'
import {
	LOGIN_MUTATION,
	SIGNUP_MUTATION
} from '@graphql/mutations/authMutations'
import { GET_CURRENT_USER_QUERY } from '@graphql/queries/authQueries'
import { errors } from '@lib/messages'

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
		if (getItem('token') && isCurrentUser) {
			return true
		} else {
			return false
		}
	}

	const login = async ({ email, password }) => {
		let message = null

		const { data, error } = await client
			.mutation(LOGIN_MUTATION, { email, password })
			.toPromise()

		if (error?.message) {
			if (error?.message === '[GraphQL] Please validate your email!') {
				message = errors.validateEmail
			} else {
				message = errors.undefinedError
			}
		}

		if (data?.login?.token) {
			setAuthToken(token)
			setItem('token', token)
			message = 'You have succcesfully logged in!'
		}
		return message
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
