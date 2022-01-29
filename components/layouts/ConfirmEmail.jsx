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

// [Components]
import { ActionMessage } from '@components/forms'

const ConfirmEmail = () => {
	const [successAction, setSuccessAction] = React.useState(false)
	const [errorAction, setErrorAction] = React.useState(false)
	const [userId, setUserId] = React.useState('')

	// Storage
	const { getItem } = useStorage()

	// Router
	const router = useRouter()
	const { token } = router.query

	const [_1, resendConfirmationLink] = useMutation(
		RESEND_CONFIRMIRMATION_EMAIL_MUTATION
	)
	const onResendConfirmationLink = () => {
		resendConfirmationLink({ id: userId })
	}

	const [_2, confirmEmail] = useMutation(CONFIRM_EMAIL_MUTATION)

	const onConfirmEmail = () => {
		confirmEmail({
			token
		}).then(result => {
			if (result?.error?.message) {
				setErrorAction(true)
			}

			if (result?.data?.confirmEmail) {
				setErrorAction(false)
				setSuccessAction(true)
			}
			if (getItem('token')) {
				setUserId(parseJwt(token))
			}
		})
	}

	const sendToLogin = () => {
		router.push('/')
	}

	const parseJwt = token => {
		try {
			return JSON.parse(atob(token.split('.')[1])).sub
		} catch (e) {
			return null
		}
	}

	return (
		<div>
			{errorAction ? (
				<ActionMessage
					theme='warning'
					message='Your token has expired.'
					label='Resend verification email'
					action={onResendConfirmationLink}
				/>
			) : successAction ? (
				<ActionMessage
					theme='warning'
					message='Your email has been confirmed!'
					label='Login to your account'
					action={sendToLogin}
				/>
			) : (
				<ActionMessage
					theme='warning'
					message='Please confirm your email account.'
					label='Confirm your email'
					action={onConfirmEmail}
				/>
			)}
		</div>
	)
}

export default ConfirmEmail
