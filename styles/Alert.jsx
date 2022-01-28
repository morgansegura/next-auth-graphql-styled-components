import styled, { css } from 'styled-components'
import * as include from '@styles/config/utilities'
import { rgba, readableColor } from 'polished'

export const Alert = styled.div`
	display: flex;
	align-items: center;
	padding: ${include.sp['3']};
	margin-bottom: ${include.sp['4']};
	${include.radius.md}
	${include.shadow.sm}

	${({ danger, warning, success }) =>
		!danger &&
		!warning &&
		!success &&
		css`
			background-color: ${include.colors.white};
			border: 1px solid ${include.colors.zinc100};
			color: ${include.colors.zinc700};
		`}

	${({ danger }) =>
		danger &&
		css`
			background-color: ${include.colors.red100};
			border: 1px solid ${include.colors.red200};
			color: ${include.colors.red700};
		`}

	${({ warning }) =>
		warning &&
		css`
			background-color: ${include.colors.orange100};
			border: 1px solid ${include.colors.orange200};
			color: ${include.colors.orange700};
		`}

	${({ success }) =>
		success &&
		css`
			background-color: ${include.colors.green100};
			border: 1px solid ${include.colors.green200};
			color: ${include.colors.green700};
		`}
`
