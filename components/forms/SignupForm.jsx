import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import useStorage from '@hooks/useStorage'

// [GraphQL]
import { useMutation } from 'urql'
import { SIGNUP_MUTATION } from '@graphql/mutations/authMutations'

// [Components]
import { Button } from '@components/core'
import { TextInput } from '@components/inputs'
import { ErrorMessage } from '@utils/helpers'
import { ActionMessage } from '@components/forms'

// [Styles]
import { AuthForm, FormTitle } from '@styles/Form'
import { ButtonContainer } from '@styles/Button'

export const SignupForm = () => {
	const [errorAction, setErrorAction] = React.useState(false)
	const [successAction, setSuccessAction] = React.useState(false)

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm()

	const fireToast = message => {
		toast(message)
	}

	const { removeItem } = useStorage()

	const [data, signup] = useMutation(SIGNUP_MUTATION)

	const onSubmit = () => {
		removeItem('token')

		signup({ email: watch('email'), password: watch('password') }).then(
			({ data, error }) => {
				if (error?.message) {
					setErrorAction(error?.message)
					if (errorAction) {
						toast(<ErrorMessage message={errorAction} />)
					}
				}
				if (data?.signup) {
					setErrorAction(false)
					setSuccessAction(true)
				}
			}
		)
	}

	return (
		<div>
			{successAction ? (
				<ActionMessage message='Please check your email inbox for a confirmation email!' />
			) : (
				<>
					<FormTitle>
						<h3>Create an account</h3>
					</FormTitle>
					<AuthForm onSubmit={handleSubmit(onSubmit)}>
						<TextInput
							type='email'
							name='email'
							label='email'
							register={register}
							required
							watch={watch}
						/>
						<TextInput
							type='password'
							name='password'
							label='password'
							register={register}
							required
							watch={watch}
						/>
						<ButtonContainer>
							<Button radiusBase primary large type='submit'>
								Sign Up
							</Button>
						</ButtonContainer>
					</AuthForm>
					{errors.email && errors.email?.type === 'required'
						? fireToast(
								<ErrorMessage message='Email is required.' />
						  )
						: errors.password &&
						  errors.password?.type === 'required'
						? fireToast(
								<ErrorMessage message='Password is required.' />
						  )
						: ''}
				</>
			)}
		</div>
	)
}

export default SignupForm
