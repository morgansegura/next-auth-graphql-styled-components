import React from 'react'
import { useRouter } from 'next/router'

// GraphQL
import { useMutation } from 'urql'
import {
	CONFIRM_EMAIL_MUTATION,
	RESEND_CONFIRMIRMATION_EMAIL_MUTATION
} from '@graphql/mutations/authMutations'

// [Auth]
import useStorage from '@hooks/useStorage'
import { useAuth } from '@lib/auth'

// [Components]
import { ActionMessage } from '@components/forms'

const ConfirmEmail = () => {
	const [successAction, setSuccessAction] = React.useState(false)
	const [errorAction, setErrorAction] = React.useState(false)
	const [userId, setUserId] = React.useState('')

	// Storage
	const { getItem, setItem } = useStorage()

	// Router
	const router = useRouter()
	const { token } = router.query

	// Auth Methods
	const { getCurrentUser } = useAuth()
	const { isCurrentUser, isEmailVerified, user } = getCurrentUser()

	const [resendConfirmationEmailResult, resendConfirmEmail] = useMutation(
		RESEND_CONFIRMIRMATION_EMAIL_MUTATION
	)

	const [result, confirmEmail] = useMutation(CONFIRM_EMAIL_MUTATION)

	const resendEmailConfirmation = () => {
		resendConfirmEmail({ userId }).then(result => {
			console.log({ result })
		})
	}

	const parseJwt = token => {
		try {
			return JSON.parse(atob(token.split('.')[1])).sub
		} catch (e) {
			return null
		}
	}

	React.useEffect(() => {
		confirmEmail({ token })
			.then(result => {
				console.log('confirm email result', result)

				if (
					result?.error?.message ===
					'[GraphQL] Context creation failed: The token you provided was invalid.'
				) {
					setErrorAction(true)
				}

				if (result?.data?.confirmEmail) {
					setErrorAction(false)
					setSuccessAction(true)
				}
			})
			.catch(error => {
				console.log('confirm email errors', error)
			})
			.finally(() => {
				console.log('confirm email Finally')
			})

		if (token) {
			setItem('token', token)
			setUserId(parseJwt(token))
		}

		console.log({ isCurrentUser }, { isEmailVerified }, { user })
	}, [])

	return (
		<div>
			Hellow
			{errorAction && (
				<ActionMessage
					theme='warning'
					message='Your provided has expired.'
					label='Resend verification email'
					action={resendEmailConfirmation}
				/>
			)}
			{successAction && (
				<ActionMessage
					theme='warning'
					message='Your email has been confirmed!'
					label='Login to your account'
					action={sendToLoginPage}
				/>
			)}
		</div>
	)
}

export default ConfirmEmail
