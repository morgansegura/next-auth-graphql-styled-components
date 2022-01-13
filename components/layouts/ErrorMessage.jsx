import { ErrorList } from '@styles/Form'

const ErrorMessage = ({ errors }) => {
	const cleanError = message => {
		const newError = message

		if (newError) {
			newError.replace('Error: ', '')
			const arr = newError.split(',')
			return arr.map((err, i) => <p key={i}>{err}</p>)
		}
	}

	return <ErrorList>{cleanError(errors)}</ErrorList>
}

export default ErrorMessage
