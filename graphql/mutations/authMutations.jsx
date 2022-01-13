import { gql } from '@apollo/client'

export const SigninMutation = gql`
	mutation signIn($username: String!, $password: String!) {
		signIn(input: { username: $username, password: $password }) {
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
