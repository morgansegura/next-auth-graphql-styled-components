import React, { useState, useContext, useEffect, createContext } from 'react'
import {
	Provider,
	createClient,
	dedupExchange,
	cacheExchange,
	fetchExchange
} from 'urql'
import { authExchange } from '@urql/exchange-auth'
import useStorage from '@hooks/useStorage'

console.log(useStorage)
const { getItem } = useStorage()

const client = createClient({
	url: 'http://localhost:5000/graphql',
	exchanges: [
		dedupExchange,
		cacheExchange,
		// authExchange({
		// 	/* config */
		// }),
		fetchExchange
	],
	fetchOptions: () => {
		const token = getItem('token')
		console.log({ token })
		return token
			? {
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`
					}
			  }
			: {
					headers: {
						'Content-Type': 'application/json'
					}
			  }
	}
})

export function AuthProvider({ children }) {
	return <Provider value={client}>{children}</Provider>
}
