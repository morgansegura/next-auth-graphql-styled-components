import React from 'react'
import { Button as ButtonType } from '@styles/Button'

const Button = ({ children, as = 'button', ...props }) => {
	return (
		<ButtonType as={as} {...props}>
			{children}
		</ButtonType>
	)
}

export default Button
