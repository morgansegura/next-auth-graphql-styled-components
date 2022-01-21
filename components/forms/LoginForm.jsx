import React from 'react'
import { useMutation } from 'urql'
import { useForm } from 'react-hook-form'
// Components
import { Button } from '@components/core'
import { TextInput } from '@components/inputs'

// Styles
import { AuthForm, FormTitle } from '@styles/Form'
import { ButtonContainer } from '@styles/Button'
import { ErrorList } from '@styles/Form'
import { toast } from 'react-toastify'
import { LoginMutation } from '@graphql/mutations/authMutations'
import { setToken } from '@utils/utils'

export const LoginForm = ({ setIsAuthenticated }) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm()

	const toastErrors = message => {
		toast(message)
	}

	const [data, login] = useMutation(LoginMutation)

	const onSubmit = () => {
		login({
			email: watch('email'),
			password: watch('password')
		}).then(({ data }) => {
			console.log(data)
			console.log('Anything')
			if (data.login) {
				setToken({ token })
				setIsAuthenticated(true)
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
		</div>
	)
}

export default LoginForm
