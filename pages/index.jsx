import React from 'react'
import Head from 'next/head'

// Components
import { Home, Authorization } from '@components/layouts'
import { useAuth } from '@lib/auth'

const HomePage = () => {
	const { isLoggedIn } = useAuth()
	return (
		<>
			<Head>
				<title>GRANDcast.FM</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				{!isLoggedIn() && <Authorization form='signup' />}
				{isLoggedIn() && <Home />}
			</main>
		</>
	)
}

export default HomePage
