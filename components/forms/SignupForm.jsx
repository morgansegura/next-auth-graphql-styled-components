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
import { ErrorMessage, SuccessMessage } from '@utils/helpers'
import { ActionMessage } from '@components/forms'

// [Styles]
import { AuthForm, FormTitle } from '@styles/Form'
import { ButtonContainer } from '@styles/Button'

export const SignupForm = () => {
	const [errorAction, setErrorAction] = React.useState(false)
	const [successAction, setSuccessAction] = React.useState(false)
	const [email, setEmail] = React.useState()
	const [password, setPassword] = React.useState()
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
		setEmail(watch('email'))
		setPassword(watch('password'))

		signup({ email: watch('email'), password: watch('password') })
			.then(({ data, error }) => {
				if (error?.message) {
					setErrorAction(error?.message)
					console.log(error)
					if (errorAction) {
						toast(<ErrorMessage message={errorAction} />)
					}
				}
				if (data?.signup) {
					setErrorAction(false)
					setSuccessAction(true)
				}
			})
			.catch(error => {
				console.log('catch', error)
			})
			.finally(() => {
				setErrorAction(false)
				console.log('And then...')
			})
	}

	React.useEffect(() => {}, [])

	return (
		<div>
			{successAction ? (
				<ActionMessage message='Please check your email for a confirmation email!' />
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
							// onChange={e => setUsername(e.target.value)}
						/>
						<TextInput
							type='password'
							name='password'
							label='password'
							register={register}
							required
							watch={watch}
							// onKeyUp={e => setPassword(e.target.value)}
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
