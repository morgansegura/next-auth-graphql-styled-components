import styled, { css } from 'styled-components'
import * as include from '@styles/config/utilities'

export const AuthForm = styled.form`
	display: flex;
	flex-direction: column;
	max-width: ${include.contain.sm};
	margin: ${include.sp['6']} auto;
	gap: ${include.sp['3']};
	background-color: ${include.colors.white};
	padding: ${include.sp['6']} ${include.sp['6']} ${include.sp['8']}
		${include.sp['6']};
	${include.shadow.xl}
	${include.radius.md}


	button:nth-child(1) {
		flex: 1;
		justify-content: center;
		padding-top: ${include.sp['2.5']};
		padding-bottom: ${include.sp['2.5']};
	}
`
export const TextField = styled.div`
	position: relative;
	display: inline-flex;
	z-index: 1;
	align-items: center;
	overflow: hidden;
	background-color: ${include.colors.white};
	${include.radius['sm']};

	${({ focus }) =>
		focus &&
		css`
			div {
				opacity: 0;
			}
			input {
				outline-color: ${include.colors.violet300};
			}
		`}

	${({ blur }) =>
		blur &&
		css`
			div {
				opacity: 1;
			}
			input {
				outline-color: transparent;
			}
		`}

	div {
		position: absolute;
		z-index: 1;
		${include.fontSizing('16px', '16px')}
		padding-left: ${include.sp['3.5']};
		padding-right: ${include.sp['3.5']};
		user-select: none;
	}

	input {
		z-index: 2;
		flex: 1;
		display: flex;
		border-color: transparent;
		padding: ${include.sp['3.5']};
		background-color: transparent;
		border: 1px solid ${include.colors.neutral200};
		transition: outline-color 0.3s ease-out;
	}
`

export const FormTitle = styled.div`
	display: flex;
	justify-content: center;
	padding-top: ${include.sp['9']};
	padding-bottom: ${include.sp['3']};
`

export const ToggleForm = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: ${include.sp['3']};

	p {
		text-align: center;
		justify-self: center;
	}

	button {
		padding-top: ${include.sp['1']};
		padding-bottom: ${include.sp['1']};
	}
`

export const ErrorList = styled.div`
	p {
		color: ${include.colors.red600};

		&:not(:nth-child(1)) {
			padding-top: ${include.sp['3']};
		}
	}
`

export const SuccessList = styled.div`
	p {
		color: ${include.colors.green600};

		&:not(:nth-child(1)) {
			padding-top: ${include.sp['3']};
		}
	}
`
export const MessageDisplay = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h3 {
		margin-top: ${include.sp['9']};
	}

	button {
		margin-top: ${include.sp['6']};
	}
`
export const FormAnnotation = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: ${include.sp['4']};
	margin-bottom: ${include.sp['4']};

	button {
		margin-left: ${include.sp['4']};
	}
`
