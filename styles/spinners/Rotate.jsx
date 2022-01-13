import styled from 'styled-components'
import { rotate } from '@styles/keyframes'

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${props => `${props.size}${props.sizeUnit}`};
	height: ${props => `${props.size}${props.sizeUnit}`};
`

export const Ball = styled.div`
	position: absolute;
	left: 50%;
	top: 0%;
	width: ${props => `${props.ballSize}${props.sizeUnit}`};
	height: ${props => `${props.ballSize}${props.sizeUnit}`};
	border-radius: 50%;
	background-color: ${props => props.color};
	transform: translateX(-50%) translateY(100%);
	transform-origin: 0 250% 0;
	animation: ${rotate} 4s both infinite;
	animation-timing-function: cubic-bezier(
		0.5,
		${props => props.index * 0.3},
		0.9,
		0.9
	);
`
