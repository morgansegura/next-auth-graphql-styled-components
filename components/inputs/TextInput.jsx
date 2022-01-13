import { useState, useEffect, forwardRef } from 'react'
import { TextField } from 'styles/Form'

const TextInput = forwardRef(({ label, type, ...rest }, ref) => {
	const [value, setValue] = useState('')
	const [focus, setFocus] = useState(false)
	const [blur, setBlur] = useState(true)

	const onFocus = e => {
		setFocus(true)
		setBlur(false)
	}

	const onBlur = e => {
		if (value.length > 0) {
			setFocus(true)
		} else {
			setFocus(false)
			setBlur(true)
		}
	}

	return (
		<>
			<TextField
				focus={focus}
				onKeyPress={e => setValue(e.target.value)}
				blur={blur}
				ref={ref}>
				<div>{label}</div>
				<input
					type={type}
					onFocus={onFocus}
					onBlur={onBlur}
					{...rest}
				/>
			</TextField>
		</>
	)
})

export default TextInput
