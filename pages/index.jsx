import React, { useState } from 'react'
import Head from 'next/head'

// Components
import { LoginForm } from 'components/forms'
import { Home } from '@components/layouts'
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
				<h1>GRANDcast.FM</h1>

				{!isLoggedIn() && <LoginForm />}
				{isLoggedIn() && <Home />}
			</main>
		</>
	)
}

export default HomePage
