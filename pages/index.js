import React, { useState } from 'react'
import Head from 'next/head'
import { isLoggedIn } from '@utils/token'

// Components
import { LoginForm } from 'components/forms'
import { Home } from '@components/layouts'

const HomePage = ({ props }) => {
	return (
		<div>
			<Head>
				<title>GRANDcast.FM</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<h1>GRANDcast.FM</h1>
				{!isLoggedIn() && <Home />}
				{isLoggedIn() && <LoginForm />}
			</main>
		</div>
	)
}

export default HomePage
