import React, { useState } from 'react'
import Head from 'next/head'
import { useAuth } from '@lib/auth'
import { SigninForm } from 'components/forms'
import { Home } from '@components/layouts'

const HomePage = ({ props }) => {
	const { isSignedIn } = useAuth()

	return (
		<div>
			<Head>
				<title>GRANDcast.FM</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<h1>GRANDcast.FM</h1>
				{!isSignedIn() && <SigninForm />}
				{isSignedIn() && <Home />}
			</main>
		</div>
	)
}

export default HomePage
