import { ErrorList } from '../styles/Form'

export const ErrorMessage = string => {
	let errorArray = string.split('.,')

	const prettierError = errorArray.map((err, i) => <p key={i}>{err}</p>)
	return <ErrorList>{prettierError}</ErrorList>
}
