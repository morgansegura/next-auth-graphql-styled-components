import useStorage from '@hooks/useStorage'

const { getItem } = useStorage()

export const isLoggedIn = () => {
	return !!getItem('token')
}
