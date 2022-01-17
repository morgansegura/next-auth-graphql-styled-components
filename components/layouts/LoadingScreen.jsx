import React from 'react'
import { Box } from '@components/core'
import { WaveSpinner } from '@components/loaders/Wave'

const LoadingScreen = () => {
	return (
		<Box display='flex' direction='column' align='center' justify='center'>
			<WaveSpinner
				size={50}
				color='orange'
				style={{ marginRight: '0.5rem' }}
			/>
			<Box>Loading...</Box>
		</Box>
	)
}

export default LoadingScreen
