import React from 'react'
import Head from 'next/head'

import ConfirmEmail from '@components/layouts/ConfirmEmail'

const ConfirmEmailPage = () => {
	return (
		<>
			<Head>
				<title>GRANDcast.FM</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<ConfirmEmail />
		</>
	)
}

export default ConfirmEmailPage
