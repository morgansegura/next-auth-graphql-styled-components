import styled from 'styled-components'
import * as include from '@styles/utilities'

export const Header = styled.div`
	background-color: ${include.neutral['00']};
	margin-top: ${include.sp['1.5']};
	margin-bottom: ${include.sp['2.5']};
	${include.radius['md']};
	padding-top: ${include.sp['2']};
	padding-right: ${include.sp['3']};
	padding-bottom: ${include.sp['2']};
	padding-left: ${include.sp['3']};

	${include.media['lg']`
		padding-right: ${include.sp['4']};
		padding-left: ${include.sp['4']};
	`}

	${include.media['xl']`
		padding-right: ${include.sp['5']};
		padding-left: ${include.sp['5']};
	`}

	${include.media['xxl']`
		padding-right: ${include.sp['6']};
		padding-left: ${include.sp['6']};
	`}

	a {
		text-decoration: none;
	}
`
export const Menu = styled.div`
	display: flex;
	justify-content: space-between;
`
export const Logo = styled.div`
	${include.fontSizing('20px', '22px', '600')}
	color: ${include.neutral['90']};
`
export const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-self: flex-end;
	grid-gap: ${include.sp['1.5']};
`
export const NavItem = styled.span`
	${include.tag['bold']};
	color: ${include.neutral['70']};

	${({ active }) =>
		active &&
		`
        color: ${include.cyan['50']};
    `};
`
