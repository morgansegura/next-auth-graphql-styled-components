import { gql } from '@apollo/client'
export const LoginMutation = gql`
	mutation signIn($username: String!, $password: String!) {
		signIn(input: { username: $username, password: $password }) {
			token: accessToken
		}
	}
`
