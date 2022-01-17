import React from 'react'
import { useAuth } from '@lib/auth'
import { useRouter } from 'next/router'
import { SignoutMutation } from '@graphql/mutations/authMutations'

const SignOut = () => {
	const router = useRouter()
	const { createApolloClient } = useAuth()
	const client = createApolloClient()

	const signOutAction = async () => {
		const client = createApolloClient()

		const result = await client.mutate({
			mutation: SignoutMutation
		})

		localStorage.removeItem('token')
		router.push('/')
	}

	return <div onClick={signOutAction}>SignOut</div>
}

export default SignOut
