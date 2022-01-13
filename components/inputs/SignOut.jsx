import React from 'react'
import { useAuth } from 'lib/auth.js'

const SignOut = ({ label, ...rest }) => {
	const { signOut } = useAuth()
	return (
		<div onClick={() => signOut()} {...rest}>
			{label}
		</div>
	)
}

export default SignOut
