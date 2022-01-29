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
import { getToken } from 'next-auth/jwt'
import { removeDirectivesFromDocument } from 'apollo-utilities'

const ConfirmEmail = () => {
	const [successAction, setSuccessAction] = React.useState(false)
	const [errorAction, setErrorAction] = React.useState(false)
	const [userId, setUserId] = React.useState('')
	const [useToken, setUseToken] = React.useState('')

	// Storage
	const { getItem, setItem, removeItem } = useStorage()

	// Router
	const router = useRouter()
	const { token } = router.query

	// Auth Methods
	const { getCurrentUser } = useAuth()
	const { isCurrentUser, isEmailVerified, user } = getCurrentUser()

	const [resendConfirmationEmailResult, resendConfirmationLink] = useMutation(
		RESEND_CONFIRMIRMATION_EMAIL_MUTATION
	)
	const onResendConfirmationLink = () => {
		// removeItem('token')
		resendConfirmationLink({ id: userId }).then(result => {
			console.log({ result })
			console.log('clicked resend email')
		})
	}

	const [confrimEmailResult, confirmEmail] = useMutation(
		CONFIRM_EMAIL_MUTATION
	)

	const onConfirmEmail = () => {
		confirmEmail({
			token
		}).then(result => {
			console.log('confirm email result', result)

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

	const parseJwt = token => {
		try {
			return JSON.parse(atob(token.split('.')[1])).sub
		} catch (e) {
			return null
		}
	}

	React.useEffect(() => {
		if (router.asPath !== router.route) {
			// setItem('token', token)
		}

		console.log(
			{ isCurrentUser },
			{ isEmailVerified },
			{ user },
			{ errorAction },
			{ successAction },
			getItem('token')
		)
	}, [router])

	return (
		<div>
			{errorAction ? (
				<ActionMessage
					theme='warning'
					message='Your token has expired.'
					label='Resend verification email'
					action={onResendConfirmationLink}
				/>
			) : (
				<ActionMessage
					theme='warning'
					message='Please confirm your email account.'
					label='Confirm your email'
					action={onConfirmEmail}
				/>
			)}
			{successAction && (
				<ActionMessage
					theme='warning'
					message='Your email has been confirmed!'
					label='Login to your account'
					// action={sendToLoginPage}
				/>
			)}
		</div>
	)
}

export default ConfirmEmail
