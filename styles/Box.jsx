import styled, { css } from 'styled-components'
import * as include from '@styles/utilities'

/*
	[spread]
	flex: 1 0 auto

	[]
*/
const directionArr = ['row', 'row-reverse', 'column', 'column-reverse']

export const Box = styled.div`
	// Flexbox

	${({ inline }) =>
		inline
			? css`
					display: inline-flex;
			  `
			: css`
					display: flex;
			  `}

	${({ grow }) =>
		grow &&
		css`
			flex: 1 0 auto;
		`}

	${({ shrink }) =>
		shrink &&
		css`
			flex: 0 1 auto;
		`}


	${({ direction }) => {
		for (direction in directionArr) {
			return css`
				flex-direction: ${direction};
			`
		}
	}}


	${({ justifyContent }) =>
		justifyContent === 'center'
			? css`
					justify-content: center;
			  `
			: justifyContent === 'start'
			? css`
					justify-content: start;
			  `
			: justifyContent === 'end'
			? css`
					justify-content: end;
			  `
			: justifyContent === 'flex-start'
			? css`
					justify-content: flex-start;
			  `
			: justifyContent === 'flex-end'
			? css`
					justify-content: flex-end;
			  `
			: justifyContent === 'left'
			? css`
					justify-content: left;
			  `
			: justifyContent === 'right'
			? css`
					justify-content: right;
			  `
			: justifyContent === 'normal'
			? css`
					justify-content: normal;
			  `
			: justifyContent === 'space-between'
			? css`
					justify-content: space-between;
			  `
			: justifyContent === 'space-around'
			? css`
					justify-content: space-around;
			  `
			: justifyContent === 'space-evenly'
			? css`
					justify-content: space-evenly;
			  `
			: justifyContent === 'stretch'
			? css`
					justify-content: stretch;
			  `
			: justifyContent === 'safe center'
			? css`
					justify-content: safe center;
			  `
			: justifyContent === 'unsafe center'
			? css`
					justify-content: unsafe center;
			  `
			: justifyContent === 'inherit'
			? css`
					justify-content: inherit;
			  `
			: justifyContent === 'initial'
			? css`
					justify-content: initial;
			  `
			: justifyContent === 'revert'
			? css`
					justify-content: revert;
			  `
			: justifyContent === 'unset'
			? css`
					justify-content: unset;
			  `
			: css``}

	${({ justifySelf }) =>
		justifySelf === 'auto'
			? css`
					justify-self: auto;
			  `
			: justifySelf === 'normal'
			? css`
					justify-self: normal;
			  `
			: justifySelf === 'stretch'
			? css`
					justify-self: stretch;
			  `
			: justifySelf === 'center'
			? css`
					justify-self: center;
			  `
			: justifySelf === 'start'
			? css`
					justify-self: start;
			  `
			: justifySelf === 'end'
			? css`
					justify-self: end;
			  `
			: justifySelf === 'self-start'
			? css`
					justify-self: self-start;
			  `
			: justifySelf === 'self-end'
			? css`
					justify-self: self-end;
			  `
			: justifySelf === 'flex-start'
			? css`
					justify-self: flex-start;
			  `
			: justifySelf === 'flex-end'
			? css`
					justify-self: flex-end;
			  `
			: justifySelf === 'baseline'
			? css`
					justify-self: baseline;
			  `
			: justifySelf === 'first baseline'
			? css`
					justify-self: first baseline;
			  `
			: justifySelf === 'last baseline'
			? css`
					justify-self: last baseline;
			  `
			: justifySelf === 'safe center'
			? css`
					justify-self: safe center;
			  `
			: justifySelf === 'unsafe center'
			? css`
					justify-self: unsafe center;
			  `
			: justifySelf === 'inherit'
			? css`
					justify-self: inherit;
			  `
			: justifySelf === 'initial'
			? css`
					justify-self: initial;
			  `
			: justifySelf === 'revert'
			? css`
					justify-self: revert;
			  `
			: justifySelf === 'unset'
			? css`
					justify-self: unset;
			  `
			: css``}

	${({ alignItems }) =>
		alignItems === 'normal'
			? css`
					align-items: normal;
			  `
			: alignItems === 'stretch'
			? css`
					align-items: stretch;
			  `
			: alignItems === 'center'
			? css`
					align-items: center;
			  `
			: alignItems === 'start'
			? css`
					align-items: start;
			  `
			: alignItems === 'start'
			? css`
					align-items: start;
			  `
			: alignItems === 'end'
			? css`
					align-items: end;
			  `
			: alignItems === 'flex-start'
			? css`
					align-items: flex-start;
			  `
			: alignItems === 'flex-end'
			? css`
					align-items: flex-end;
			  `
			: alignItems === 'baseline'
			? css`
					align-items: baseline;
			  `
			: alignItems === 'first baseline'
			? css`
					align-items: first baseline;
			  `
			: alignItems === 'last baseline'
			? css`
					align-items: last baseline;
			  `
			: alignItems === 'safe center'
			? css`
					align-items: safe center;
			  `
			: alignItems === 'unsafe center'
			? css`
					align-items: unsafe center;
			  `
			: alignItems === 'inherit'
			? css`
					align-items: inherit;
			  `
			: alignItems === 'initial'
			? css`
					align-items: initial;
			  `
			: alignItems === 'revert'
			? css`
					align-items: revert;
			  `
			: alignItems === 'unset'
			? css`
					align-items: unset;
			  `
			: css``}

	${({ alignSelf }) =>
		alignSelf === 'auto'
			? css`
					align-self: auto;
			  `
			: alignSelf === 'normal'
			? css`
					align-self: normal;
			  `
			: alignSelf === 'stretch'
			? css`
					align-self: stretch;
			  `
			: alignSelf === 'center'
			? css`
					align-self: center;
			  `
			: alignSelf === 'start'
			? css`
					align-self: start;
			  `
			: alignSelf === 'end'
			? css`
					align-self: end;
			  `
			: alignSelf === 'self-start'
			? css`
					align-self: self-start;
			  `
			: alignSelf === 'self-end'
			? css`
					align-self: self-end;
			  `
			: alignSelf === 'flex-start'
			? css`
					align-self: flex-start;
			  `
			: alignSelf === 'baseline'
			? css`
					align-self: baseline;
			  `
			: alignSelf === 'first baseline'
			? css`
					align-self: first baseline;
			  `
			: alignSelf === 'last baseline'
			? css`
					align-self: last baseline;
			  `
			: alignSelf === 'safe center'
			? css`
					align-self: safe center;
			  `
			: alignSelf === 'unsafe center'
			? css`
					align-self: unsafe center;
			  `
			: alignSelf === 'inherit'
			? css`
					align-self: inherit;
			  `
			: alignSelf === 'initial'
			? css`
					align-self: initial;
			  `
			: alignSelf === 'revert'
			? css`
					align-self: revert;
			  `
			: alignSelf === 'unset'
			? css`
					align-self: unset;
			  `
			: css``}
`
