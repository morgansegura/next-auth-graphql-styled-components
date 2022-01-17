import { useAuth } from '@lib/auth'
import { AuthUserQuery } from '@graphql/queries/authQueries'
import { onError } from 'apollo-link-error'

// export const useGetAuthUser = id => {
// 	const { createApolloClient } = useAuth()
// 	const client = createApolloClient()

// 	client.query({
// 		query: AuthUserQuery,
// 		variables: { id },
// 		errors: onError
// 	})
// }
