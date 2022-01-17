import React from 'react'
import { LoadingScreen } from '@components/layouts'
import { usePromise } from 'promise-hook'
import { useAuth } from '@lib/auth'
import { AuthUserQuery } from '@graphql/queries/authQueries'
import { onError } from 'apollo-link-error'

const Home = () => {
	const id = 'dc8f04a0-0495-41ab-9045-cdb9b17fe645'

	const { createApolloClient } = useAuth()
	const client = createApolloClient()

	const fetchAuthUser = id =>
		client.query({
			query: AuthUserQuery,
			variables: { id },
			errors: onError
		})

	const { data, error, isLoading } = usePromise(() => fetchAuthUser(id), {
		resolve: true,
		resolveCondition: [id]
	})

	const user = data?.data?.getUserById

	if (isLoading) return <LoadingScreen />
	if (error) return <h5>Something went wrong!</h5>

	return (
		<div>
			<div>
				<p>
					<b>ID:</b> {user?.id}
				</p>
				<p>
					<b>Username:</b> {user?.username}
				</p>
				<p>
					<b>Email:</b> {user?.email}
				</p>
			</div>
		</div>
	)
}

export default Home
