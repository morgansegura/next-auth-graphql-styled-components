import { getItem } from '@utils/utils'

export const isLoggedIn = () => {
	return !!getItem('token')
}
