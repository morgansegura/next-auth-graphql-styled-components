import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

// Components
import { Button } from '@components/core'
import { TextInput } from '@components/inputs'
import { ErrorMessage } from '@utils/helpers'

// Auth
import { useAuth } from '@lib/auth'

// Styles
import { AuthForm, FormTitle } from '@styles/Form'
import { ButtonContainer } from '@styles/Button'

export const ProfileForm = () => {
	const [errorAction, setErrorAction] = React.useState(false)
	const [successAction, setSuccessAction] = React.useState(false)

	const { login } = useAuth()
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm()
	const router = useRouter()

	const fireToast = message => {
		toast(message)
	}

	const onSubmit = () => {
		login({
			email: watch('email'),
			password: watch('password')
		}).then(({ data, error }) => {
			if (error?.message) {
				setErrorAction(error?.message)
				if (errorAction) {
					toast(<ErrorMessage message={errorAction} />)
				}
			}

			if (data?.login) {
				setErrorAction(false)
				setSuccessAction(true)
				router.push('/')
			}
		})
	}

	return (
		<div>
			<FormTitle>
				<h3>Sign into your account</h3>
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
						Sign In
					</Button>
				</ButtonContainer>
			</AuthForm>
			{errors.email && errors.email?.type === 'required'
				? fireToast(<ErrorMessage message='Email is required.' />)
				: errors.password && errors.password?.type === 'required'
				? fireToast(<ErrorMessage message='Paddword is required.' />)
				: ''}
		</div>
	)
}

export default ProfileForm
