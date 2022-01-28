import styled, { css } from 'styled-components'
import * as include from '@styles/config/utilities'
import { rgba, readableColor } from 'polished'

export const Button = styled(props => props.as)`
	cursor: pointer;
	align-items: center;
	text-transform: uppercase;
	letter-spacing: 0.03857em;
	border: 1px solid transparent;
	transition: border-color 0.3s ease-out, color 0.3s ease-out,
		background-color 0.3s ease-out;

	&:hover {
	}
	&:active {
	}

	/* [Radius] */
	${({ radiusNone }) => radiusNone && include.radius['none']}
	${({ radiusSM }) => radiusSM && include.radius['none']}
	${({ radiusBase }) => radiusBase && include.radius['base']}
	${({ radiusMD }) => radiusMD && include.radius['md']}
	${({ radiusLG }) => radiusLG && include.radius['lg']}
	${({ radiusXL }) => radiusXL && include.radius['xl']}
	${({ radius2XL }) => radius2XL && include.radius['2xl']}
	${({ radius3XL }) => radius3XL && include.radius['3xl']}
	${({ radiusRound }) => radiusRound && include.radius['round']}

	${props =>
		props.inline
			? css`
					display: inline-flex;
			  `
			: css`
					display: flex;
			  `}

	/* [Size] */

	${props =>
		props.tiny
			? css`
					${include.fontSizing('10px', '24px', '600')};
					padding: 4px 12px;
			  `
			: props.small
			? css`
					${include.fontSizing('11px', '28px', '600')};
					padding: 6px 18px;
			  `
			: props.medium
			? css`
					${include.fontSizing('12px', '32px', '600')};
					padding: 8px 24px;
			  `
			: props.large
			? css`
					${include.fontSizing('14px', '36px', '600')};
					padding: 10px 50px;
			  `
			: props.extraLarge
			? css`
					${include.fontSizing('18px', '40px', '600')};
					padding: 10px 50px;
			  `
			: css`
					${include.fontSizing('12px', '24px', '600')};
					padding: 8px 16px;
			  `}


	/* [Color] */
	${props =>
		props.primary
			? css`
					background-color: ${include.colors.violet600};
					border: 1px solid ${include.colors.violet600};
					color: ${!props.outline
						? readableColor(include.colors.violet600)
						: include.colors.violet700};

					&:hover {
						background-color: ${props.outline
							? `transparent`
							: include.colors.violet500};
						color: ${!props.outline
							? readableColor(include.colors.violet600)
							: include.colors.violet500};
						border: 1px solid ${include.colors.violet500};
					}

					&:active {
						border: 1px solid ${include.colors.violet200};
						background-color: ${props.outline
							? `transparent`
							: include.colors.violet200};
					}
			  `
			: props.warning
			? css`
					background-color: ${include.colors.orange500};
					border: 1px solid ${include.colors.orange500};
					color: ${!props.outline
						? readableColor(include.colors.orange500)
						: include.colors.orange500};

					&:hover {
						background-color: ${props.outline
							? `transparent`
							: include.colors.orange400};
						color: ${!props.outline
							? readableColor(include.colors.orange400)
							: include.colors.orange400};
						border: 1px solid ${include.colors.orange400};
					}

					&:active {
						border: 1px solid ${include.colors.orange600};
						color: ${!props.outline
							? readableColor(include.colors.orange600)
							: include.colors.orange600};
						background-color: ${props.outline
							? `transparent`
							: include.colors.orange600};
					}
			  `
			: css`
					background-color: ${include.colors.zinc300};
					border: 1px solid
						${props.outline
							? include.colors.zinc600
							: include.colors.zinc300};
					color: ${!props.outline
						? readableColor(include.colors.zinc300)
						: include.colors.zinc600};

					&:hover {
						border: 1px solid
							${props.outline
								? include.colors.zinc400
								: include.colors.zinc200};
						background-color: ${props.outline
							? `transparent`
							: include.colors.zinc200};
					}

					&:active {
						border: 1px solid
							${props.outline
								? include.colors.zinc700
								: include.colors.zinc300};
						background-color: ${props.outline
							? `transparent`
							: include.colors.zinc300};
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
			background-color: ${include.colors.neutral10};
			border: 1px solid transparent;
			color: ${include.colors.neutral90};
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
