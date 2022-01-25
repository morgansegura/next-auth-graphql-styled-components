import { useMutation, useQuery } from 'urql'
import { loginMutation } from '@graphql/mutations/authMutations'
import { getCurrentUserQuery } from '@graphql/queries/authQueries'

export const getCurrentUser = () => {
	const [data, error, fetching] = useQuery({ query: getCurrentUserQuery })

	if (response.fetching) return <p>Loading...</p>
	if (response.error) return <p>Oh no... {result.error.message}</p>

	return <div>Morgan You did it!</div>
}

async function signUp({ email, password }) {
	const [result, signup] = useMutation(loginMutation)
	const response = await signUp({ email, password })

	return { error: result.error, result }
}

export default { getCurrentUser, signUp }
