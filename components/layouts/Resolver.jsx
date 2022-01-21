import React from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks'

const Resolver = ({ children, type = 'query', gql, vars, rest }) => {
	if (type === 'mutation') {
		const { error, loading, data } = useMutation(gql, {
			variables: { vars }
		})
	} else {
		const { error, loading, data } = useQuery(gql, {
			variables: { vars }
		})
	}
	return <div {...rest}>{children}</div>
}

export default Resolver
