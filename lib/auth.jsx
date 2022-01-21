import React, { useState, useContext, useEffect, createContext } from 'react'
import { Provider, Client, defaultExchanges } from 'urql'

const client = new Client({
	url: 'http://localhost:5000/graphql',
	exchanges: defaultExchanges
})

export function AuthProvider({ children }) {
	return <Provider value={client}>{children}</Provider>
}
