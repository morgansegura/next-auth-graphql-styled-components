import React from 'react'
// [Components]
import { LoginForm, SignupForm } from '@components/forms'
import { Button, Box } from '@components/core'
// [Styles]
import { FormAnnotation } from '@styles/Form'

const Authorization = () => {
	const [setForm, useSetForm] = React.useState(false)

	const toggleForm = () => {
		useSetForm(!setForm)
	}

	return (
		<>
			{setForm ? (
				<>
					<SignupForm />
					<FormAnnotation>
						<p>Already have an account?</p>
						<Button onClick={toggleForm} tiny radiusBase>
							Signin
						</Button>
					</FormAnnotation>
				</>
			) : (
				<>
					<LoginForm />
					<FormAnnotation>
						<p>Don't have an account?</p>
						<Button onClick={toggleForm} tiny radiusBase>
							Signup
						</Button>
					</FormAnnotation>
				</>
			)}
		</>
	)
}

export default Authorization
