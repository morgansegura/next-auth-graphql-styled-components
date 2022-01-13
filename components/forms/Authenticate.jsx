import { useState } from 'react'
import { Button } from '@components/core'
import TextInput from '@components/inputs/TextInput'
import { useMutation } from '@apollo/client'
import { LoginMutation } from '@graphql/mutations/loginMutation'
import { useForm } from 'react-hook-form'

// Styles
import { AuthForm, ToggleForm, FormTitle } from '@styles/Form'
import { ButtonContainer } from '@styles/Button'
import { ErrorList } from '@styles/Form'

export const Authenticate = () => {
	const [formType, setFormType] = useState(false)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [catchError, setCatchError] = useState('')

	const signInOrSignup = e => {
		e.preventDefault()
		setFormType(!formType)
	}

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm()

	const [signIn, { data, loading, error }] = useMutation(LoginMutation, {
		variables: { username, password },
		onError: err => {
			console.log(err)
		}
	})

	const onSubmit = e => {
		// e.preventDefault()

		// if (result?.data?.signIn?.token) {
		// 	setAuthToken(result.data.signIn.token)
		// 	localStorage.setItem('user', result.data)
		// }

		signIn({ username, password })
	}

	return (
		<div>
			<AuthForm onSubmit={handleSubmit(onSubmit)}>
				<FormTitle>
					<h3>{!formType ? `Signup` : `Signin`}</h3>
				</FormTitle>

				{errors.username && (
					<ErrorList>
						{/* {errors.username?.type === 'required' && (
							<p>Username is required.</p>
						)} */}
						{errors.username?.type === 'minLength' && (
							<p>Username must have a minimum of 4 characters.</p>
						)}
						{errors.username?.type === 'maxLength' && (
							<p>
								Username must have a maximim of 20 characters.
							</p>
						)}
					</ErrorList>
				)}
				<TextInput
					{...register('username', {
						required: true,
						minLength: 4,
						maxLength: 20
					})}
					type='text'
					name='username'
					label='username'
					// onChange={e => setUsername(e.target.value)}
				/>
				{errors.password && (
					<ErrorList>
						<p>This field is required</p>
						{errors.password?.type === 'minLength' && (
							<p>
								Username must have a minimum of 4 characters.{' '}
								{console.log(errors.password.type)}
							</p>
						)}
						<p></p>
					</ErrorList>
				)}
				<TextInput
					{...register('password', { minLength: 8 })}
					type='password'
					name='password'
					label='password'
					// onChange={e => setPassword(e.target.value)}
				/>
				<ButtonContainer>
					<Button radius='sm' theme='primary' size='lg' type='submit'>
						{formType ? `Sign In` : `Sign up`}
					</Button>
				</ButtonContainer>
				<ToggleForm>
					<p>
						{!formType
							? `Don't have a membership?`
							: `Already a member?`}
					</p>
					<Button
						radius='3xl'
						theme='transparent'
						onClick={signInOrSignup}>
						{formType ? `Signup` : `Signin`}
					</Button>
				</ToggleForm>
			</AuthForm>
		</div>
	)
}

export default Authenticate
