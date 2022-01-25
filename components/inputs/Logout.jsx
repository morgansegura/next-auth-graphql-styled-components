import React from 'react'
import { useRouter } from 'next/router'
import { ButtonType } from '@styles/Button'
import { useAuth } from '@lib/auth'

const Logout = () => {
	const router = useRouter()
	const { isLoggedIn, logout } = useAuth()

	const logoutAction = () => {
		logout()

		if (!isLoggedIn()) {
			router.push('/')
		}
	}

	React.useEffect(() => {}, [logoutAction])

	return (
		<ButtonType
			as='button'
			size='xs'
			radius='sm'
			theme='primary'
			onClick={logout}>
			Logout
		</ButtonType>
	)
}

export default Logout
