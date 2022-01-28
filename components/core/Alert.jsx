import React from 'react'
import { Alert as AlertBox } from '@styles/Alert'

const Alert = ({ children, dismisable = 'false', ...rest }) => {
	return (
		<AlertBox as='div' {...rest}>
			{children}
		</AlertBox>
	)
}

export default Alert
