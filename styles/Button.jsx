import styled, { css } from 'styled-components'
import * as include from '@styles/config/utilities'
import { rgba, readableColor } from 'polished'

export const ButtonType = styled(props => props.as)`
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	text-transform: uppercase;
	letter-spacing: 0.02857em;
	transition: border-color 0.3s ease-out, color 0.3s ease-out,
		background-color 0.3s ease-out;

	// Radius
	${({ radius }) => radius && include.radius[radius]}

	${({ size }) =>
		size === 'xs'
			? css`
					${include.fontSizing('12px', '24px', '600')};
					padding: 2px 8px;
			  `
			: size === 'sm'
			? css`
					${include.fontSizing('13px', '26px', '600')};
					padding: 4px 10px;
			  `
			: size === 'lg'
			? css`
					${include.fontSizing('15px', '28px', '600')};
					padding: 6px 16px;
			  `
			: css`
					${include.fontSizing('14px', '28px', '600')};
					padding: 6px 16px;
			  `}

	${props =>
		props.theme === 'primary'
			? css`
					background-color: ${include.colors.violet['600']};
					border: 1px solid ${include.colors.violet['600']};
					color: ${!props.outline
						? readableColor(include.colors.violet['600'])
						: include.colors.violet['700']};

					&:hover {
						background-color: ${props.outline
							? `transparent`
							: include.colors.violet['500']};
						color: ${!props.outline
							? readableColor(include.colors.violet['600'])
							: include.colors.violet['500']};
						border: 1px solid ${include.colors.violet['500']};
					}

					&:active {
						border: 1px solid ${include.colors.violet['200']};
						background-color: ${props.outline
							? `transparent`
							: include.colors.violet['200']};
					}
			  `
			: css`
					background-color: ${include.colors.neutral['100']};
					border: 1px solid
						${props.outline
							? include.colors.neutral['600']
							: include.colors.neutral['100']};
					color: ${!props.outline
						? readableColor(include.colors.neutral['100'])
						: include.colors.neutral['600']};

					&:hover {
						border: 1px solid
							${props.outline
								? include.colors.neutral['400']
								: include.colors.neutral['200']};
						background-color: ${props.outline
							? `transparent`
							: include.colors.neutral['200']};
					}

					&:active {
						border: 1px solid
							${props.outline
								? include.colors.neutral['600']
								: include.colors.neutral['300']};
						background-color: ${props.outline
							? `transparent`
							: include.colors.neutral['300']};
					}
			  `}

	${({ loading }) =>
		loading === true &&
		css`
			pointer-events: none;
		`}

	${({ disabled }) =>
		disabled === true &&
		css`
			pointer-events: none;
			background-color: ${include.colors.neutral['10']};
			border: 1px solid transparent;
			color: ${include.colors.neutral['90']};
		`}

	${({ outline }) =>
		outline
			? css`
					background-color: transparent;
			  `
			: css``}

	${({ important }) =>
		important
			? css`
					text-transform: uppercase;
					letter-spacing: 0.02857em;
			  `
			: css``}
`

export const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	gap: ${include.sp['1.5']};
`
