import { useState, useEffect, forwardRef } from 'react'
import { TextField } from 'styles/Form'

const TextInput = ({
	label,
	register,
	required = false,
	watch,
	name,
	...rest
}) => {
	// const [value, setValue] = useState('')
	const [focus, setFocus] = useState(false)
	const [blur, setBlur] = useState(true)

	const onFocus = e => {
		setFocus(true)
		setBlur(false)
	}

	const onBlur = e => {
		if (watch(name).length > 0) {
			setFocus(true)
		} else {
			setFocus(false)
			setBlur(true)
		}
	}

	return (
		<>
			<TextField focus={focus} blur={blur}>
				<div>{label}</div>
				<input
					name={name}
					onFocus={onFocus}
					onBlur={onBlur}
					{...register(name, { required })}
					{...rest}
				/>
			</TextField>
		</>
	)
}

export default TextInput
