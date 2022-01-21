import { useEffect } from 'react'

export const getItem = async name => {
	const getItemStorage = () => localStorage.getItem(name)

	return getItemStorage
}

export const setItem = async (name, value) => {
	const setItemStorage = () => localStorage.setItem(name, value)

	return setItemStorage
}

export const deleteItem = async name => {
	const deleteItemStorage = () => localStorage.deleteItem(name)

	return deleteItemStorage
}
