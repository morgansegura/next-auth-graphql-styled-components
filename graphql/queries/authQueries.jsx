import { gql } from '@apollo/client'

export const AuthUserQuery = gql`
	query AuthUser($id: String!) {
		getUserById(id: $id) {
			username
			email
			# password
			id
			# accessToken
		}
	}
`
