import React, { useState } from 'react'
import Head from 'next/head'
import { useAuth } from 'lib/auth.js'
import { Authenticate } from 'components/forms'
import { SignOut } from 'components/inputs'

// const FeedQuery = gql`
// 	{
// 		episodeFeed(first: 50) {
// 			id
// 			title
// 			audio
// 			podcast {
// 				title
// 			}
// 		}
// 	}
// `

const EpisodeFeed = () => {
	// const { data } = useQuery(FeedQuery)
	// const { signOut } = useAuth()
	return (
		<div>
			{/* <h1>Episode Feed</h1>
			<ul>
				{data?.episodeFeed.map(v => {
					return <li key={v.id}>{v.title}</li>
				})}
			</ul>
       */}
			<SignOut label='Sign Out' />
			<p>You are logged in</p>
		</div>
	)
}

export default function Home() {
	const { isSignedIn } = useAuth()
	return (
		<div>
			<Head>
				<title>GRANDcast.FM</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<h1>GRANDcast.FM</h1>

				{!isSignedIn() && <Authenticate />}
				{isSignedIn() && <EpisodeFeed />}
			</main>
		</div>
	)
}
