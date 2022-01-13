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
	const [formType, setFormType] = useState(false)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [message, setMessage] = useState('')

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

	const onChange = (label, e) => {
		const value = e.target.value
		console.log(value)
		if (label === 'username') {
			setUsername(value)
		}
		if (label === 'password') {
			setPassword(value)
		}
	}

	const onSubmit = () => {
		// e.preventDefault()
		signIn({ username, password }).then(result => {
			setMessage(ErrorMessage(result.errors))
		})
	}

	return (
		<div>
			<FormTitle>
				<h3>Sign In</h3>
			</FormTitle>
			<AuthForm onSubmit={handleSubmit(onSubmit)}>
				{errors.username && errors.username?.type === 'required'
					? toastErrors(
							<ErrorList>
								<p>Username is required.</p>
							</ErrorList>
					  )
					: errors.password && errors.password?.type === 'required'
					? toastErrors(
							<ErrorList>
								<p>Password is required.</p>
							</ErrorList>
					  )
					: message !== ''
					? toastErrors(message)
					: ''}

				<TextInput
					type='text'
					name='username'
					label='username'
					register={register}
					required
					watch={watch}
					onKeyUp={e => onChange('username', e)}
				/>

				<TextInput
					type='password'
					name='password'
					label='password'
					register={register}
					required
					watch={watch}
					onKeyUp={e => onChange('password', e)}
				/>
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
