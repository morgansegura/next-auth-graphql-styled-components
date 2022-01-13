import styled from 'styled-components'
import { motion } from '@styles/keyframes'

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${props => `${props.size * 2.5}${props.sizeUnit}`};
	height: ${props => `${props.size}${props.sizeUnit}`};
	overflow: hidden;
`

export const Bar = styled.div`
	position: absolute;
	top: ${props => `${props.y + props.size / 10}${props.sizeUnit}`};
	left: ${props => `${props.x}${props.sizeUnit}`};
	width: ${props => `${props.size / 5}${props.sizeUnit}`};
	height: ${props => `${props.size / 10}${props.sizeUnit}`};
	margin-top: ${props => `${props.size - props.size / 10}${props.sizeUnit}`};
	transform: skewY(0deg);
	background-color: ${props => props.color};
	animation: ${motion} 1.25s ease-in-out infinite;
	animation-delay: ${props => props.index * 0.15}s;
`
