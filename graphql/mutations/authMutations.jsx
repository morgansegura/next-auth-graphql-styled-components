import { gql } from '@apollo/client'

export const SigninMutation = gql`
	mutation signIn($email: String!, $password: String!) {
		signIn(input: { email: $email, password: $password }) {
			token: accessToken
		}
	}
`

export const SignoutMutation = gql`
	mutation signOut {
		signOut {
			token: accessToken
		}
	}
`

export const SignupMutation = gql`
	mutation signIn($username: String!, $password: String!) {
		signIn(input: { username: $username, password: $password }) {
			username
		}
	}
`
