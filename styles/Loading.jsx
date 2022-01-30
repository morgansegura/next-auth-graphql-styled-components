import styled from 'styled-components'
import * as include from '@styles/config/utilities'
import { rgba } from 'polished'
import { spreadUp, spreadDown, flicker } from '@styles/keyframes'

export const LoadingContainer = styled.div`
	z-index: 1;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* justify-content: center; */
	background: ${include.colors.violet300};
	background: radial-gradient(
		circle,
		${rgba(include.colors.violet100, 1)} 0%,
		${rgba(include.colors.violet300, 0.95)} 100%
	);
	/* background: linear-gradient(
		${include.colors.violet300} 0%,
		${include.colors.violet200} 25%,
		${rgba(include.colors.violet100, 0.9)} 40%,
		${rgba(include.colors.violet100, 0.9)} 60%,
		${include.colors.violet200} 75%,
		${include.colors.violet300} 100%
	); */
`

export const LoadingContent = styled.div`
	position: absolute;
	top: 35%;
`

export const LoadingText = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	text-transform: uppercase;
	font-weight: 800;
	color: ${include.colors.violet900};
	/* margin-top: ${include.sp['3']}; */

	span {
		display: flex;
		align-items: center;
		justify-content: center;
		transition: opacity 0.3s ease;

		&:nth-child(1) {
			animation: ${spreadDown} 2.103s infinite;
		}
		&:nth-child(2) {
			animation: ${spreadDown} 2.104s infinite;
		}
		&:nth-child(3) {
			animation: ${spreadDown} 2.105s infinite;
		}
		&:nth-child(4) {
			animation: ${spreadDown} 2.106s infinite;
		}
		&:nth-child(5) {
			animation: ${spreadDown} 2.107s infinite;
		}
		&:nth-child(6) {
			animation: ${spreadDown} 2.108s infinite;
		}
		&:nth-child(7) {
			animation: ${spreadDown} 2.109s infinite;
		}
	}
`
