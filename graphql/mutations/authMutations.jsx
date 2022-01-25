import { gql } from '@apollo/client'

export const LOGIN_MUTATION = gql`
	mutation ($email: String!, $password: String!) {
		login(input: { email: $email, password: $password }) {
			token
		}
	}
`

export const SIGNUP_MUTATION = gql`
	mutation signIn($username: String!, $password: String!) {
		signIn(input: { username: $username, password: $password }) {
			username
		}
	}
`
