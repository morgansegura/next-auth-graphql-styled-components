import React from 'react'
import { Box as BoxContainer } from '@styles/Box'

const Box = ({ as = 'div', children, ...rest }) => {
	return (
		<BoxContainer as={as} {...rest}>
			{children}
		</BoxContainer>
	)
}

export default Box
