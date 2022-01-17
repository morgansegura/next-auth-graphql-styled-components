import styled, { css } from 'styled-components'
import * as include from '@styles/config/utilities'
import { em, rem, rgba } from 'polished'

/*
	[spread]
	flex: 1 0 auto

	[]
*/
const directionArr = ['row', 'row-reverse', 'column', 'column-reverse']

export const Box = styled(props => props.as)`
	${({ maxwidth }) =>
		maxwidth &&
		css`
			max-width: ${include.contain[maxwidth]};
		`}
	${({ minwidth }) =>
		minwidth &&
		css`
			min-width: ${include.contain[minwidth]};
		`}
	${({ shadow }) =>
		shadow &&
		css`
			${include.shadow[shadow]}
		`}

	${({ radius }) =>
		radius &&
		css`
			${include.radius[radius]}
		`}

	${({ color }) =>
		color &&
		css`
			color: ${include.colors[color]};
		`}

	${({ bgcolor }) =>
		bgcolor &&
		css`
			background-color: ${include.colors[bgcolor]};
		`}

	${({ display }) =>
		display &&
		css`
			display: ${display};
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

	${({ direction }) =>
		direction &&
		css`
			flex-direction: ${direction};
		`}

	${({ justify }) =>
		justify &&
		css`
			justify-content: ${justify};
		`}

	${({ justifyself }) =>
		justifyself &&
		css`
			justify-self: ${justifyself};
		`}

	${({ align }) =>
		align &&
		css`
			align-items: ${align};
		`}

	${({ alignself }) =>
		alignself &&
		css`
			align-self: ${alignself};
		`}

	${({ m }) =>
		m &&
		css`
			margin-top: ${include.sp[m]};
			margin-right: ${include.sp[m]};
			margin-bottom: ${include.sp[m]};
			margin-left: ${include.sp[m]};
		`}

	${({ mx }) =>
		mx &&
		css`
			margin-right: ${include.sp[mx]};
			margin-left: ${include.sp[mx]};
		`}

	${({ my }) =>
		my &&
		css`
			margin-top: ${include.sp[my]};
			margin-bottom: ${include.sp[my]};
		`}

	${({ mt }) =>
		mt &&
		css`
			margin-top: ${include.sp[mt]};
		`}

	${({ mr }) =>
		mr &&
		css`
			margin-right: ${include.sp[mr]};
		`}

	${({ mb }) =>
		mb &&
		css`
			margin-bottom: ${include.sp[mb]};
		`}

	${({ ml }) =>
		ml &&
		css`
			margin-left: ${include.sp[ml]};
		`}

	${({ p }) =>
		p &&
		css`
			padding-top: ${include.sp[p]};
			padding-right: ${include.sp[p]};
			padding-bottom: ${include.sp[p]};
			padding-left: ${include.sp[p]};
		`}

	${({ px }) =>
		px &&
		css`
			padding-right: ${include.sp[px]};
			padding-left: ${include.sp[px]};
		`}

	${({ py }) =>
		py &&
		css`
			padding-top: ${include.sp[py]};
			padding-bottom: ${include.sp[py]};
		`}

	${({ pt }) =>
		pt &&
		css`
			padding-top: ${include.sp[pt]};
		`}

	${({ pr }) =>
		pr &&
		css`
			padding-right: ${include.sp[pr]};
		`}

	${({ pb }) =>
		pb &&
		css`
			padding-bottom: ${include.sp[pb]};
		`}

	${({ pl }) =>
		pl &&
		css`
			padding-left: ${include.sp[pl]};
		`}

	${({ fontsizing }) =>
		fontsizing &&
		css`
			${include.fontSizing(
				fontsizing[0],
				fontsizing[1] || 24,
				fontsizing[2] || 400
			)}
		`}

	${({ width }) =>
		width &&
		css`
			width: ${width};
		`}

	${({ height }) =>
		height &&
		css`
			height: ${height};
		`}

	${({ grid }) =>
		grid &&
		css`
			${include.grid(grid[0], grid[1], grid[2], grid[3])}
		`}

	${({ gridcolumn }) =>
		gridcolumn &&
		css`
			${include.gridcolumn(gridcolumn[0], gridcolumn[1])}
		`}

	${include.media.sm`
		${({ maxwidth_sm }) =>
			maxwidth_sm &&
			css`
				max-width: ${include.contain[maxwidth_sm]};
			`}
		${({ minwidth_sm }) =>
			minwidth_sm &&
			css`
				min-width: ${include.contain[minwidth_sm]};
			`}
		${({ shadow_sm }) =>
			shadow_sm &&
			css`
				${include.shadow[shadow_sm]}
			`}

		${({ radius_sm }) =>
			radius_sm &&
			css`
				${include.radius[radius_sm]}
			`}

		${({ color_sm }) =>
			color_sm &&
			css`
				color: ${include.colors[color_sm]};
			`}

		${({ bgcolor_sm }) =>
			bgcolor_sm &&
			css`
				background-color: ${include.colors[bgcolor_sm]};
			`}

		${({ display_sm }) =>
			display_sm &&
			css`
				display: ${display_sm};
			`}

		${({ grow_sm }) =>
			grow_sm &&
			css`
				flex: 1 0 auto;
			`}
		${({ shrink_sm }) =>
			shrink_sm &&
			css`
				flex: 0 1 auto;
			`}

		${({ direction_sm }) =>
			direction_sm &&
			css`
				flex-direction: ${direction_sm};
			`}

		${({ justify_sm }) =>
			justify_sm &&
			css`
				justify-content: ${justify_sm};
			`}

		${({ justifyself_sm }) =>
			justifyself_sm &&
			css`
				justify-self: ${justifyself_sm};
			`}

		${({ align_sm }) =>
			align_sm &&
			css`
				align-items: ${align_sm};
			`}

		${({ alignself_sm }) =>
			alignself_sm &&
			css`
				align-self: ${alignself_sm};
			`}

		${({ m_sm }) =>
			m_sm &&
			css`
				margin-top: ${include.sp[m_sm]};
				margin-right: ${include.sp[m_sm]};
				margin-bottom: ${include.sp[m_sm]};
				margin-left: ${include.sp[m_sm]};
			`}

		${({ mx_sm }) =>
			mx_sm &&
			css`
				margin-right: ${include.sp[mx_sm]};
				margin-left: ${include.sp[mx_sm]};
			`}

		${({ my_sm }) =>
			my_sm &&
			css`
				margin-top: ${include.sp[my_sm]};
				margin-bottom: ${include.sp[my_sm]};
			`}

		${({ mt_sm }) =>
			mt_sm &&
			css`
				margin-top: ${include.sp[mt_sm]};
			`}

		${({ mr_sm }) =>
			mr_sm &&
			css`
				margin-right: ${include.sp[mr_sm]};
			`}

		${({ mb_sm }) =>
			mb_sm &&
			css`
				margin-bottom: ${include.sp[mb_sm]};
			`}

		${({ ml_sm }) =>
			ml_sm &&
			css`
				margin-left: ${include.sp[ml_sm]};
			`}

		${({ p_sm }) =>
			p_sm &&
			css`
				padding-top: ${include.sp[p_sm]};
				padding-right: ${include.sp[p_sm]};
				padding-bottom: ${include.sp[p_sm]};
				padding-left: ${include.sp[p_sm]};
			`}

		${({ px_sm }) =>
			px_sm &&
			css`
				padding-right: ${include.sp[px_sm]};
				padding-left: ${include.sp[px_sm]};
			`}

		${({ py_sm }) =>
			py_sm &&
			css`
				padding-top: ${include.sp[py_sm]};
				padding-bottom: ${include.sp[py_sm]};
			`}

		${({ pt_sm }) =>
			pt_sm &&
			css`
				padding-top: ${include.sp[pt_sm]};
			`}

		${({ pr_sm }) =>
			pr_sm &&
			css`
				padding-right: ${include.sp[pr_sm]};
			`}

		${({ pb_sm }) =>
			pb_sm &&
			css`
				padding-bottom: ${include.sp[pb_sm]};
			`}

		${({ pl_sm }) =>
			pl_sm &&
			css`
				padding-left: ${include.sp[pl_sm]};
			`}

		${({ fontsizing_sm }) =>
			fontsizing_sm &&
			css`
				${include.fontSizing(
					fontsizing_sm[0],
					fontsizing_sm[1] || 24,
					fontsizing_sm[2] || 400
				)}
			`}
	`}

	${include.media.md`
		${({ maxwidth_md }) =>
			maxwidth_md &&
			css`
				max-width: ${include.contain[maxwidth_md]};
			`}
		${({ minwidth_md }) =>
			minwidth_md &&
			css`
				min-width: ${include.contain[minwidth_md]};
			`}
		${({ shadow_md }) =>
			shadow_md &&
			css`
				${include.shadow[shadow_md]}
			`}

		${({ radius_md }) =>
			radius_md &&
			css`
				${include.radius[radius_md]}
			`}

		${({ color_md }) =>
			color_md &&
			css`
				color: ${include.colors[color_md]};
			`}

		${({ bgcolor_md }) =>
			bgcolor_md &&
			css`
				background-color: ${include.colors[bgcolor_md]};
			`}

		${({ display_md }) =>
			display_md &&
			css`
				display: ${display_md};
			`}

		${({ grow_md }) =>
			grow_md &&
			css`
				flex: 1 0 auto;
			`}
		${({ shrink_md }) =>
			shrink_md &&
			css`
				flex: 0 1 auto;
			`}

		${({ direction_md }) =>
			direction_md &&
			css`
				flex-direction: ${direction_md};
			`}

		${({ justify_md }) =>
			justify_md &&
			css`
				justify-content: ${justify_md};
			`}

		${({ justifyself_md }) =>
			justifyself_md &&
			css`
				justify-self: ${justifyself_md};
			`}

		${({ align_md }) =>
			align_md &&
			css`
				align-items: ${align_md};
			`}

		${({ alignself_md }) =>
			alignself_md &&
			css`
				align-self: ${alignself_md};
			`}

		${({ m_md }) =>
			m_md &&
			css`
				margin-top: ${include.sp[m_md]};
				margin-right: ${include.sp[m_md]};
				margin-bottom: ${include.sp[m_md]};
				margin-left: ${include.sp[m_md]};
			`}

		${({ mx_md }) =>
			mx_md &&
			css`
				margin-right: ${include.sp[mx_md]};
				margin-left: ${include.sp[mx_md]};
			`}

		${({ my_md }) =>
			my_md &&
			css`
				margin-top: ${include.sp[my_md]};
				margin-bottom: ${include.sp[my_md]};
			`}

		${({ mt_md }) =>
			mt_md &&
			css`
				margin-top: ${include.sp[mt_md]};
			`}

		${({ mr_md }) =>
			mr_md &&
			css`
				margin-right: ${include.sp[mr_md]};
			`}

		${({ mb_md }) =>
			mb_md &&
			css`
				margin-bottom: ${include.sp[mb_md]};
			`}

		${({ ml_md }) =>
			ml_md &&
			css`
				margin-left: ${include.sp[ml_md]};
			`}

		${({ p_md }) =>
			p_md &&
			css`
				padding-top: ${include.sp[p_md]};
				padding-right: ${include.sp[p_md]};
				padding-bottom: ${include.sp[p_md]};
				padding-left: ${include.sp[p_md]};
			`}

		${({ px_md }) =>
			px_md &&
			css`
				padding-right: ${include.sp[px_md]};
				padding-left: ${include.sp[px_md]};
			`}

		${({ py_md }) =>
			py_md &&
			css`
				padding-top: ${include.sp[py_md]};
				padding-bottom: ${include.sp[py_md]};
			`}

		${({ pt_md }) =>
			pt_md &&
			css`
				padding-top: ${include.sp[pt_md]};
			`}

		${({ pr_md }) =>
			pr_md &&
			css`
				padding-right: ${include.sp[pr_md]};
			`}

		${({ pb_md }) =>
			pb_md &&
			css`
				padding-bottom: ${include.sp[pb_md]};
			`}

		${({ pl_md }) =>
			pl_md &&
			css`
				padding-left: ${include.sp[pl_md]};
			`}

		${({ fontsizing_md }) =>
			fontsizing_md &&
			css`
				${include.fontSizing(
					fontsizing_md[0],
					fontsizing_md[1] || 24,
					fontsizing_md[2] || 400
				)}
			`}
	`}

	${include.media.lg`
		${({ maxwidth_lg }) =>
			maxwidth_lg &&
			css`
				max-width: ${include.contain[maxwidth_lg]};
			`}
		${({ minwidth_lg }) =>
			minwidth_lg &&
			css`
				min-width: ${include.contain[minwidth_lg]};
			`}
		${({ shadow_lg }) =>
			shadow_lg &&
			css`
				${include.shadow[shadow_lg]}
			`}

		${({ radius_lg }) =>
			radius_lg &&
			css`
				${include.radius[radius_lg]}
			`}

		${({ color_lg }) =>
			color_lg &&
			css`
				color: ${include.colors[color_lg]};
			`}

		${({ bgcolor_lg }) =>
			bgcolor_lg &&
			css`
				background-color: ${include.colors[bgcolor_lg]};
			`}

		${({ display_lg }) =>
			display_lg &&
			css`
				display: ${display_lg};
			`}

		${({ grow_lg }) =>
			grow_lg &&
			css`
				flex: 1 0 auto;
			`}
		${({ shrink_lg }) =>
			shrink_lg &&
			css`
				flex: 0 1 auto;
			`}

		${({ direction_lg }) =>
			direction_lg &&
			css`
				flex-direction: ${direction_lg};
			`}

		${({ justify_lg }) =>
			justify_lg &&
			css`
				justify-content: ${justify_lg};
			`}

		${({ justifyself_lg }) =>
			justifyself_lg &&
			css`
				justify-self: ${justifyself_lg};
			`}

		${({ align_lg }) =>
			align_lg &&
			css`
				align-items: ${align_lg};
			`}

		${({ alignself_lg }) =>
			alignself_lg &&
			css`
				align-self: ${alignself_lg};
			`}

		${({ m_lg }) =>
			m_lg &&
			css`
				margin-top: ${include.sp[m_lg]};
				margin-right: ${include.sp[m_lg]};
				margin-bottom: ${include.sp[m_lg]};
				margin-left: ${include.sp[m_lg]};
			`}

		${({ mx_lg }) =>
			mx_lg &&
			css`
				margin-right: ${include.sp[mx_lg]};
				margin-left: ${include.sp[mx_lg]};
			`}

		${({ my_lg }) =>
			my_lg &&
			css`
				margin-top: ${include.sp[my_lg]};
				margin-bottom: ${include.sp[my_lg]};
			`}

		${({ mt_lg }) =>
			mt_lg &&
			css`
				margin-top: ${include.sp[mt_lg]};
			`}

		${({ mr_lg }) =>
			mr_lg &&
			css`
				margin-right: ${include.sp[mr_lg]};
			`}

		${({ mb_lg }) =>
			mb_lg &&
			css`
				margin-bottom: ${include.sp[mb_lg]};
			`}

		${({ ml_lg }) =>
			ml_lg &&
			css`
				margin-left: ${include.sp[ml_lg]};
			`}

		${({ p_lg }) =>
			p_lg &&
			css`
				padding-top: ${include.sp[p_lg]};
				padding-right: ${include.sp[p_lg]};
				padding-bottom: ${include.sp[p_lg]};
				padding-left: ${include.sp[p_lg]};
			`}

		${({ px_lg }) =>
			px_lg &&
			css`
				padding-right: ${include.sp[px_lg]};
				padding-left: ${include.sp[px_lg]};
			`}

		${({ py_lg }) =>
			py_lg &&
			css`
				padding-top: ${include.sp[py_lg]};
				padding-bottom: ${include.sp[py_lg]};
			`}

		${({ pt_lg }) =>
			pt_lg &&
			css`
				padding-top: ${include.sp[pt_lg]};
			`}

		${({ pr_lg }) =>
			pr_lg &&
			css`
				padding-right: ${include.sp[pr_lg]};
			`}

		${({ pb_lg }) =>
			pb_lg &&
			css`
				padding-bottom: ${include.sp[pb_lg]};
			`}

		${({ pl_lg }) =>
			pl_lg &&
			css`
				padding-left: ${include.sp[pl_lg]};
			`}

		${({ fontsizing_lg }) =>
			fontsizing_lg &&
			css`
				${include.fontSizing(
					fontsizing_lg[0],
					fontsizing_lg[1] || 24,
					fontsizing_lg[2] || 400
				)}
			`}
	`}

	${include.media.xl`
		${({ maxwidth_xl }) =>
			maxwidth_xl &&
			css`
				max-width: ${include.contain[maxwidth_xl]};
			`}
		${({ minwidth_xl }) =>
			minwidth_xl &&
			css`
				min-width: ${include.contain[minwidth_xl]};
			`}
		${({ shadow_xl }) =>
			shadow_xl &&
			css`
				${include.shadow[shadow_xl]}
			`}

		${({ radius_xl }) =>
			radius_xl &&
			css`
				${include.radius[radius_xl]}
			`}

		${({ color_xl }) =>
			color_xl &&
			css`
				color: ${include.colors[color_xl]};
			`}

		${({ bgcolor_xl }) =>
			bgcolor_xl &&
			css`
				background-color: ${include.colors[bgcolor_xl]};
			`}

		${({ display_xl }) =>
			display_xl &&
			css`
				display: ${display_xl};
			`}

		${({ grow_xl }) =>
			grow_xl &&
			css`
				flex: 1 0 auto;
			`}
		${({ shrink_xl }) =>
			shrink_xl &&
			css`
				flex: 0 1 auto;
			`}

		${({ direction_xl }) =>
			direction_xl &&
			css`
				flex-direction: ${direction_xl};
			`}

		${({ justify_xl }) =>
			justify_xl &&
			css`
				justify-content: ${justify_xl};
			`}

		${({ justifyself_xl }) =>
			justifyself_xl &&
			css`
				justify-self: ${justifyself_xl};
			`}

		${({ align_xl }) =>
			align_xl &&
			css`
				align-items: ${align_xl};
			`}

		${({ alignself_xl }) =>
			alignself_xl &&
			css`
				align-self: ${alignself_xl};
			`}

		${({ m_xl }) =>
			m_xl &&
			css`
				margin-top: ${include.sp[m_xl]};
				margin-right: ${include.sp[m_xl]};
				margin-bottom: ${include.sp[m_xl]};
				margin-left: ${include.sp[m_xl]};
			`}

		${({ mx_xl }) =>
			mx_xl &&
			css`
				margin-right: ${include.sp[mx_xl]};
				margin-left: ${include.sp[mx_xl]};
			`}

		${({ my_xl }) =>
			my_xl &&
			css`
				margin-top: ${include.sp[my_xl]};
				margin-bottom: ${include.sp[my_xl]};
			`}

		${({ mt_xl }) =>
			mt_xl &&
			css`
				margin-top: ${include.sp[mt_xl]};
			`}

		${({ mr_xl }) =>
			mr_xl &&
			css`
				margin-right: ${include.sp[mr_xl]};
			`}

		${({ mb_xl }) =>
			mb_xl &&
			css`
				margin-bottom: ${include.sp[mb_xl]};
			`}

		${({ ml_xl }) =>
			ml_xl &&
			css`
				margin-left: ${include.sp[ml_xl]};
			`}

		${({ p_xl }) =>
			p_xl &&
			css`
				padding-top: ${include.sp[p_xl]};
				padding-right: ${include.sp[p_xl]};
				padding-bottom: ${include.sp[p_xl]};
				padding-left: ${include.sp[p_xl]};
			`}

		${({ px_xl }) =>
			px_xl &&
			css`
				padding-right: ${include.sp[px_xl]};
				padding-left: ${include.sp[px_xl]};
			`}

		${({ py_xl }) =>
			py_xl &&
			css`
				padding-top: ${include.sp[py_xl]};
				padding-bottom: ${include.sp[py_xl]};
			`}

		${({ pt_xl }) =>
			pt_xl &&
			css`
				padding-top: ${include.sp[pt_xl]};
			`}

		${({ pr_xl }) =>
			pr_xl &&
			css`
				padding-right: ${include.sp[pr_xl]};
			`}

		${({ pb_xl }) =>
			pb_xl &&
			css`
				padding-bottom: ${include.sp[pb_xl]};
			`}

		${({ pl_xl }) =>
			pl_xl &&
			css`
				padding-left: ${include.sp[pl_xl]};
			`}

		${({ fontsizing_xl }) =>
			fontsizing_xl &&
			css`
				${include.fontSizing(
					fontsizing_xl[0],
					fontsizing_xl[1] || 24,
					fontsizing_xl[2] || 400
				)}
			`}
	`}

	${include.media.xxl`
		${({ maxwidth_xxl }) =>
			maxwidth_xxl &&
			css`
				max-width: ${include.contain[maxwidth_xxl]};
			`}
		${({ minwidth_xxl }) =>
			minwidth_xxl &&
			css`
				min-width: ${include.contain[minwidth_xxl]};
			`}
		${({ shadow_xxl }) =>
			shadow_xxl &&
			css`
				${include.shadow[shadow_xxl]}
			`}

		${({ radius_xxl }) =>
			radius_xxl &&
			css`
				${include.radius[radius_xxl]}
			`}

		${({ color_xxl }) =>
			color_xxl &&
			css`
				color: ${include.colors[color_xxl]};
			`}

		${({ bgcolor_xxl }) =>
			bgcolor_xxl &&
			css`
				background-color: ${include.colors[bgcolor_xxl]};
			`}

		${({ display_xxl }) =>
			display_xxl &&
			css`
				display: ${display_xxl};
			`}

		${({ grow_xxl }) =>
			grow_xxl &&
			css`
				flex: 1 0 auto;
			`}
		${({ shrink_xxl }) =>
			shrink_xxl &&
			css`
				flex: 0 1 auto;
			`}

		${({ direction_xxl }) =>
			direction_xxl &&
			css`
				flex-direction: ${direction_xxl};
			`}

		${({ justify_xxl }) =>
			justify_xxl &&
			css`
				justify-content: ${justify_xxl};
			`}

		${({ justifyself_xxl }) =>
			justifyself_xxl &&
			css`
				justify-self: ${justifyself_xxl};
			`}

		${({ align_xxl }) =>
			align_xxl &&
			css`
				align-items: ${align_xxl};
			`}

		${({ alignself_xxl }) =>
			alignself_xxl &&
			css`
				align-self: ${alignself_xxl};
			`}

		${({ m_xxl }) =>
			m_xxl &&
			css`
				margin-top: ${include.sp[m_xxl]};
				margin-right: ${include.sp[m_xxl]};
				margin-bottom: ${include.sp[m_xxl]};
				margin-left: ${include.sp[m_xxl]};
			`}

		${({ mx_xxl }) =>
			mx_xxl &&
			css`
				margin-right: ${include.sp[mx_xxl]};
				margin-left: ${include.sp[mx_xxl]};
			`}

		${({ my_xxl }) =>
			my_xxl &&
			css`
				margin-top: ${include.sp[my_xxl]};
				margin-bottom: ${include.sp[my_xxl]};
			`}

		${({ mt_xxl }) =>
			mt_xxl &&
			css`
				margin-top: ${include.sp[mt_xxl]};
			`}

		${({ mr_xxl }) =>
			mr_xxl &&
			css`
				margin-right: ${include.sp[mr_xxl]};
			`}

		${({ mb_xxl }) =>
			mb_xxl &&
			css`
				margin-bottom: ${include.sp[mb_xxl]};
			`}

		${({ ml_xxl }) =>
			ml_xxl &&
			css`
				margin-left: ${include.sp[ml_xxl]};
			`}

		${({ p_xxl }) =>
			p_xxl &&
			css`
				padding-top: ${include.sp[p_xxl]};
				padding-right: ${include.sp[p_xxl]};
				padding-bottom: ${include.sp[p_xxl]};
				padding-left: ${include.sp[p_xxl]};
			`}

		${({ px_xxl }) =>
			px_xxl &&
			css`
				padding-right: ${include.sp[px_xxl]};
				padding-left: ${include.sp[px_xxl]};
			`}

		${({ py_xxl }) =>
			py_xxl &&
			css`
				padding-top: ${include.sp[py_xxl]};
				padding-bottom: ${include.sp[py_xxl]};
			`}

		${({ pt_xxl }) =>
			pt_xxl &&
			css`
				padding-top: ${include.sp[pt_xxl]};
			`}

		${({ pr_xxl }) =>
			pr_xxl &&
			css`
				padding-right: ${include.sp[pr_xxl]};
			`}

		${({ pb_xxl }) =>
			pb_xxl &&
			css`
				padding-bottom: ${include.sp[pb_xxl]};
			`}

		${({ pl_xxl }) =>
			pl_xxl &&
			css`
				padding-left: ${include.sp[pl_xxl]};
			`}

		${({ fontsizing_xxl }) =>
			fontsizing_xxl &&
			css`
				${include.fontSizing(
					fontsizing_xxl[0],
					fontsizing_xxl[1] || 24,
					fontsizing_xxl[2] || 400
				)}
			`}
	`}
`
