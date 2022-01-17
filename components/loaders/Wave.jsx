import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Bar } from 'styles/spinners/Wave'

const getBars = ({ countBars, color, size, sizeUnit }) => {
	const bars = []
	for (let i = 0; i < countBars; i++) {
		bars.push(
			<Bar
				color={color}
				size={size}
				x={i * (size / 5 + (size / 15 - size / 100))}
				y={0}
				key={i.toString()}
				index={i}
				sizeUnit={sizeUnit}
			/>
		)
	}
	return bars
}

export const WaveSpinner = ({ size, color, loading, sizeUnit }) => {
	const countBars = 10
	return (
		loading && (
			<Wrapper size={size} sizeUnit={sizeUnit}>
				{getBars({ countBars, color, size, sizeUnit })}
			</Wrapper>
		)
	)
}

WaveSpinner.defaultProps = {
	loading: true,
	size: 30,
	color: '#fff',
	sizeUnit: 'px'
}

WaveSpinner.propTypes = {
	loading: PropTypes.bool,
	size: PropTypes.number,
	color: PropTypes.string,
	sizeUnit: PropTypes.string
}
