import React from 'react'
// import { useAuth } from '@lib/auth'
import { useRouter } from 'next/router'
import { SignoutMutation } from '@graphql/mutations/authMutations'

const SignOut = () => {
	const router = useRouter()

	const signOutAction = async () => {}

	return <div onClick={signOutAction}>SignOut</div>
}

export default SignOut
