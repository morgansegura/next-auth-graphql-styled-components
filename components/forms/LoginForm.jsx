import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

// Components
import { Button } from '@components/core'
import { TextInput } from '@components/inputs'
// import { LoadingScreen } from '@components/layouts'

// Auth
import { useAuth } from '@lib/auth'

// Styles
import { AuthForm, ErrorList, FormTitle } from '@styles/Form'
import { ButtonContainer } from '@styles/Button'

export const LoginForm = () => {
	const { login, getCurrentUser } = useAuth()
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm()

	const toastErrors = message => {
		toast(message)
	}

	const onSubmit = () => {
		login({
			email: watch('email'),
			password: watch('password')
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
				{errors.email && errors.email?.type === 'required'
					? toastErrors(
							<ErrorList>
								<p>Email is required.</p>
							</ErrorList>
					  )
					: errors.password && errors.password?.type === 'required'
					? toastErrors(
							<ErrorList>
								<p>Password is required.</p>
							</ErrorList>
					  )
					: ''}
				<ButtonContainer>
					<Button radiusBase primary large type='submit'>
						Sign In
					</Button>
				</ButtonContainer>
			</AuthForm>
		</div>
	)
}

export default LoginForm
