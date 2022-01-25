import useStorage from '@hooks/useStorage'
import { useState, useEffect } from 'react'
import { isJwtExpired } from 'jwt-check-expiration'

const { removeItem, getItem } = useStorage()

export const isLoggedIn = (boolean = false) => {
	const [token, setToken] = useState(boolean)

	useEffect(() => {
		setToken(!!getItem('token'))
	}, [token, logout])

	return token ? true : false
}

export const logout = () => {
	removeItem('token')
}

export const hasValidToken = () => {
	const token = getItem('token')
	if (!token || isJwtExpired(token)) {
		return false
	} else {
		return true
	}
}
