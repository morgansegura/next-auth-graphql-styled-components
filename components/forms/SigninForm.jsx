import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@utils/helpers'

// Components
import { Button } from '@components/core'
import { TextInput } from '@components/inputs'
import { useAuth } from '@lib/auth'

// Styles
import { AuthForm, ToggleForm, FormTitle } from '@styles/Form'
import { ButtonContainer } from '@styles/Button'
import { ErrorList } from '@styles/Form'
import { toast } from 'react-toastify'

export const LoginForm = () => {
	const { signIn } = useAuth()

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
		signIn({
			email: watch('email'),
			password: watch('password')
		}).then(result => {
			if (result.errors.length) {
				toastErrors(
					<ErrorList>
						<p>Invalid email or password!</p>
					</ErrorList>
				)
			}
		})
	}

	return (
		<div>
			<FormTitle>
				<h3>Sign In</h3>
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
					<Button radius='sm' theme='primary' size='lg' type='submit'>
						Sign In
					</Button>
				</ButtonContainer>
			</AuthForm>
			<ToggleForm>
				<p>Don't have a membership?</p>
				<Button radius='3xl' theme='transparent'>
					Sign Up
				</Button>
			</ToggleForm>
		</div>
	)
}

export default LoginForm
