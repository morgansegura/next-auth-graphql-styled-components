import React from 'react'
import { Wrapper, Ball } from 'styles/spinners/Rotate'
import PropTypes from 'prop-types'

const getBalls = ({
	countBalls,
	radius,
	angle,
	color,
	size,
	ballSize,
	sizeUnit
}) => {
	const balls = []
	const offset = ballSize / 2
	for (let i = 0; i < countBalls; i++) {
		const y = Math.sin(angle * i * (Math.PI / 180)) * radius - offset
		const x = Math.cos(angle * i * (Math.PI / 180)) * radius - offset
		balls.push(
			<Ball
				color={color}
				ballSize={ballSize}
				size={size}
				x={y}
				y={x}
				key={i.toString()}
				index={i}
				sizeUnit={sizeUnit}
			/>
		)
	}
	return balls
}

export const RotateSpinner = ({ size, color, loading, sizeUnit, ...props }) => {
	const radius = size / 2
	const countBalls = 8
	const ballSize = size / 5
	const angle = 360 / countBalls
	return (
		loading && (
			<Wrapper size={size} sizeUnit={sizeUnit} {...props}>
				{getBalls({
					countBalls,
					radius,
					angle,
					color,
					size,
					ballSize,
					sizeUnit
				})}
			</Wrapper>
		)
	)
}

RotateSpinner.defaultProps = {
	loading: true,
	size: 45,
	color: '#00ff89',
	sizeUnit: 'px'
}

RotateSpinner.propTypes = {
	loading: PropTypes.bool,
	size: PropTypes.number,
	color: PropTypes.string,
	sizeUnit: PropTypes.string
}
