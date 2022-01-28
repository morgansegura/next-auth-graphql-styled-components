import { toast } from 'react-toastify'
import { ErrorList, SuccessList } from '@styles/Form'

export const ErrorMessage = ({ message }) => {
	const cleanMessage = message.replace('[GraphQL] ', '')

	return (
		<ErrorList>
			<p>{cleanMessage}</p>
		</ErrorList>
	)
}

export const SuccessMessage = ({ message }) => {
	return (
		<SuccessList>
			<p>{message}</p>
		</SuccessList>
	)
}
