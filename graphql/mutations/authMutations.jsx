import { gql } from '@urql/core'

export const LOGIN_MUTATION = gql`
	mutation ($email: String!, $password: String!) {
		login(input: { email: $email, password: $password }) {
			token
		}
	}
`

export const SIGNUP_MUTATION = gql`
	mutation ($email: String!, $password: String!) {
		signup(input: { email: $email, password: $password }) {
			username
		}
	}
`

export const CONFIRM_EMAIL_MUTATION = gql`
	mutation ($token: String!) {
		confirmEmail(token: $token)
	}
`

export const RESEND_CONFIRMIRMATION_EMAIL_MUTATION = gql`
	mutation ($id: String!) {
		resendConfirmationLink(id: $id)
	}
`
