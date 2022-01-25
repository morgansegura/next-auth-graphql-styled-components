import { gql } from '@apollo/client'

export const getCurrentUserQuery = gql`
	query {
		me {
			id
			username
		}
	}
`
