import { LoginMutation } from '@graphql/mutations/authMutations'
import { useMutation } from 'urql'

export const logout = () => {
	removeItem('token')
}
