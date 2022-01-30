import React from 'react'
import { WaveSpinner } from '@components/loaders/Wave'
import { LoadingContainer, LoadingContent, LoadingText } from '@styles/Loading'

const LoadingScreen = ({ children }) => {
	return (
		<LoadingContainer>
			<LoadingContent>
				<LoadingText>
					<span>L</span>
					<span>o</span>
					<span>a</span>
					<span>d</span>
					<span>i</span>
					<span>n</span>
					<span>g</span>
				</LoadingText>
				<WaveSpinner
					size={50}
					color='#4c1d95'
					style={{ marginRight: '0.5rem' }}
				/>
			</LoadingContent>
		</LoadingContainer>
	)
}

export default LoadingScreen
