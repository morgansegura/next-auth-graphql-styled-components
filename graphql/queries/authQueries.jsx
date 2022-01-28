import { gql } from '@urql/core'

export const GET_CURRENT_USER_QUERY = gql`
	query {
		me {
			id
			username
			isEmailConfirmed
		}
	}
`
