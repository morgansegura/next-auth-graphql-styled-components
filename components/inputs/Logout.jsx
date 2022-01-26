import React from 'react'
import { useRouter } from 'next/router'
import { Button } from '@components/core'
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

	React.useEffect(() => {}, [isLoggedIn])

	return (
		<Button size='xs' theme='primary' onClick={logoutAction}>
			Logout
		</Button>
	)
}

export default Logout
