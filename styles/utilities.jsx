import { css } from 'styled-components'
import { em, rem, rgba } from 'polished'

// Font
export const font = {
	family: `'Lato', 'Graphik', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;`,
	base: '16px',
	'base-height': '4px'
}
// Spacing
export const sp = {
	'1p': '1px',
	'2p': '2px',
	0.5: '4px',
	1: '8px',
	1.5: '12px',
	2: '16px',
	2.5: '20px',
	3: '24px',
	3.5: '28px',
	4: '32px',
	5: '40px',
	6: '48px',
	7: '56px',
	8: '64px',
	9: '72px',
	10: '80px',
	11: '88px',
	15: '120px',
	20: '160px',
	30: '240px',
	40: '320px',
	60: '480px',
	80: '640px'
}
// Contain [max-width]
export const contain = {
	xs: '320px',
	sm: '639px',
	md: '1023px',
	lg: '1366px',
	xl: '1799px',
	xxl: '2256px',
	offset: '2384px'
}

// Device contain [min-width]
export const device = {
	mobile: '375px',
	tablet: '640px',
	'desktop-sm': '1024px',
	desktop: '1376px',
	'desktop-lg': '1800px'
}

// Colors
export const brand = {
	'primary-black': '#181d36',
	'primary-white': '#fff',
	primary: '#00b3e5',
	secondary: '#00b3e5'
}
export const neutral = {
	'00': brand['primary-white'],
	'05': '#f9fafc',
	'06': '#f6f8fa',
	'07': '#f3f5f8',
	'08': '#f0f2f5',
	'09': '#eceff3',
	10: '#e4e8ed',
	20: '#c1c9d0',
	30: '#a4abb7',
	40: '#89929e',
	50: '#6b7384',
	60: '#4f5669',
	70: '#3e4054',
	80: '#2a2f44',
	90: brand['primary-black']
}
export const alpha = {
	// System Neutral Alpha (Dark on Light BG)
	'90-a05': rgba(neutral['90'], 0.05),
	'90-a10': rgba(neutral['90'], 0.1),
	'90-a20': rgba(neutral['90'], 0.2),
	'90-a30': rgba(neutral['90'], 0.3),
	'90-a40': rgba(neutral['90'], 0.4),
	'90-a50': rgba(neutral['90'], 0.5),
	'90-a60': rgba(neutral['90'], 0.6),
	'90-a70': rgba(neutral['90'], 0.7),
	'90-a80': rgba(neutral['90'], 0.8),
	'90-a90': rgba(neutral['90'], 0.9),
	// System Neutral Alpha (Light on Dark BG)
	'00-a05': rgba(neutral['00'], 0.05),
	'00-a10': rgba(neutral['00'], 0.1),
	'00-a20': rgba(neutral['00'], 0.2),
	'00-a30': rgba(neutral['00'], 0.3),
	'00-a40': rgba(neutral['00'], 0.4),
	'00-a50': rgba(neutral['00'], 0.5),
	'00-a60': rgba(neutral['00'], 0.6),
	'00-a70': rgba(neutral['00'], 0.7),
	'00-a80': rgba(neutral['00'], 0.8),
	'00-a90': rgba(neutral['00'], 0.9)
}

export const red = {
	// System Red
	'05': '#fef8f4',
	10: '#f9e3de',
	20: '#f1b8b5',
	30: '#ea898c',
	40: '#dc6878',
	50: '#be4967',
	60: '#972a4e',
	70: '#751f40',
	80: '#561739',
	90: '#3c0a27'
}
export const orange = {
	// System Orange
	'05': '#fefaee',
	10: '#fae4c4',
	20: '#efba8d',
	30: '#e69565',
	40: '#d67552',
	50: '#b5543a',
	60: '#91362e',
	70: '#742626',
	80: '#57191f',
	90: '#3b1113'
}
export const yellow = {
	// System Yellow
	'05': '#fbf9eb',
	10: '#f5e5bd',
	20: '#e8c281',
	30: '#d99d52',
	40: '#cb7d33',
	50: '#af5922',
	60: '#8d3d17',
	70: '#6c2f14',
	80: '#502211',
	90: '#351609'
}
export const green = {
	// System Green
	'05': '#f2fef0',
	10: '#d3f2cd',
	20: '#97d69c',
	30: '#60bf87',
	40: '#4fa478',
	50: '#3a8060',
	60: '#2b6146',
	70: '#204b3c',
	80: '#173634',
	90: '#0e2227'
}
export const turquoise = {
	// System Turquoise
	'05': '#ecfbfe',
	10: '#b9eff7',
	20: '#87deea',
	30: '#4cc1d1',
	40: '#1f9cad',
	50: '#097d8d',
	60: '#00626f',
	70: '#004d58',
	80: '#00363e',
	90: '#002930'
}
export const cyan = {
	// System Cyan
	'05': '#effcfc',
	10: '#ccf1fa',
	20: '#91d1ea',
	30: '#69b4e2',
	40: '#5496cf',
	50: '#3678b4',
	60: '#245791',
	70: '#1b4575',
	80: '#15314f',
	90: '#0b2131'
}
export const blue = {
	// System Blue
	'05': '#f5fbff',
	10: '#d9ecfd',
	20: '#acccfb',
	30: '#85aaf1',
	40: '#728ce6',
	50: '#5869cd',
	60: '#404ca6',
	70: '#313c86',
	80: '#232c61',
	90: '#131e3f'
}
export const violet = {
	// System Violet
	'05': '#f8f9fe',
	10: '#e6e6fa',
	20: '#c4c3e8',
	30: '#aca1dc',
	40: '#9882d5',
	50: '#7e62bc',
	60: '#5d4897',
	70: '#47347e',
	80: '#332560',
	90: '#1d174b'
}
export const purple = {
	// System Purple
	'05': '#fdf8ff',
	10: '#f7e1f5',
	20: '#e6b6e1',
	30: '#d791d8',
	40: '#bd72cb',
	50: '#9855af',
	60: '#713c92',
	70: '#552d7d',
	80: '#3b1e66',
	90: '#280f52'
}
export const tan = {
	// System Tan
	'05': '#f9f7f1',
	10: '#efe8db',
	20: '#d7cab0',
	30: '#ba8',
	40: '#a3916e',
	50: '#816f4d',
	60: '#645537',
	70: '#504329',
	80: '#3b311c',
	90: '#251e11'
}
export const state = {
	// Success
	'success-10': green['10'],
	'success-50': green['50'],
	'success-70': green['70'],
	// Warning
	'warning-10': yellow['10'],
	'warning-50': yellow['50'],
	'warning-70': yellow['70'],
	// Danger
	'danger-10': red['10'],
	'danger-50': red['50'],
	'danger-70': red['70'],
	// Neutral
	'neutral-light': neutral['10'],
	neutral: neutral['50'],
	'neutral-dark': neutral['70'],
	// Disabled
	'disabled-light': neutral['10'],
	disabled: neutral['20'],
	'disabled-dark': neutral['30']
}
// Radius
export const radius = {
	circle: css`
		border-radius: 50%;
	`,
	sm: css`
		border-radius: ${sp[0.5]};
	`,
	md: css`
		border-radius: ${sp[1]};
	`,
	lg: css`
		border-radius: ${sp[2]};
	`,
	none: css`
		border-radius: 0;
	`
}

export const fontSizing = (fontSize, lineHeight, fontWeight = 400) => {
	return css`
		font-size: ${rem(fontSize)};
		line-height: ${em(lineHeight)};
		font-weight: ${fontWeight};
	`
}

export const above = amount => {
	return style => css`
		@media (min-width: ${amount}) {
			${style};
		}
	`
}

export const media = {
	sm: (...args) => css`
		@media (min-width: ${device['mobile']}) {
			${css(...args)};
		}
	`,
	md: (...args) => css`
		@media (min-width: ${device['tablet']}) {
			${css(...args)};
		}
	`,
	lg: (...args) => css`
		@media (min-width: ${device['desktop-sm']}) {
			${css(...args)};
		}
	`,
	xl: (...args) => css`
		@media (min-width: ${device['desktop']}) {
			${css(...args)};
		}
	`,
	xxl: (...args) => css`
		@media (min-width: ${device['desktop-lg']}) {
			${css(...args)};
		}
	`
}

// Mixins
export const base = css`
	font-size: ${font['base']};
`

export const h1 = css`
	font-size: ${rem('32px')};
	line-height: 1.15;
	font-weight: 600;

	${media.md`
		font-size: ${rem('48px')};
	`}

	${media.lg`
		font-size: ${rem('52px')};
	`}
`

export const h2 = css`
	font-size: ${rem('28px')};
	line-height: 1.15;
	font-weight: 600;

	${media.md`
		font-size: ${rem('40px')};
	`}

	${media.lg`
		font-size: ${rem('41px')};
	`}
`

export const h3 = css`
	font-size: ${rem('25px')};
	line-height: 1.15;
	font-weight: 600;

	${media.lg`
		font-size: ${rem('32px')};
	`}
`

export const h4 = css`
	font-size: ${rem('22px')};
	line-height: 1.2;
	font-weight: 600;

	${media.md`
		font-size: ${rem('25px')};
	`}
`

export const h5 = css`
	font-size: ${rem('18px')};
	line-height: 1.2;
	font-weight: 600;

	${media.md`
		font-size: ${rem('20px')};
		line-height: 1.4;
	`}
`

export const body = {
	base: css`
		font-size: ${rem('16px')};
		line-height: 1.5;
		font-weight: 400;

		${media.md`
			font-size: ${rem('18px')};
			line-height: 1.55;
		`}

		${media.lg`
			font-size: ${rem('20px')};
			line-height: 1.5;
		`}
	`,
	large: css`
		font-size: ${rem('25px')};
		line-height: 1.5;
		font-weight: 400;

		${media.lg`
			font-size: ${rem('28px')};
		`}
	`,
	bold: css`
		font-size: ${rem('16px')};
		line-height: 1.5;
		font-weight: 600;

		${media.md`
			font-size: ${rem('18px')};
			line-height: 1.55;
		`}

		${media.lg`
			font-size: ${rem('20px')};
			line-height: 1.5;
		`}
	`,
	small: css`
		font-size: ${rem('14px')};
		line-height: 1.5;
		font-weight: 400;

		${media.md`
			font-size: ${rem('16px')};
		`}
	`,
	'small-bold': css`
		font-size: ${rem('14px')};
		line-height: ${rem('24px')};
		font-weight: 600;

		${media.md`
			font-size: ${rem('16px')};
			line-height: 1.5r;
		`}
	`
}

// Breadcrumbs, buttons, icon labels, and tabs
export const callToAction = css`
	font-size: ${rem('15px')};
	line-height: 1.2;
	font-weight: 600;

	${media.md`
		font-size: ${rem('16px')};
	`}
`

export const label = css`
	font-size: ${rem('14px')};
	line-height: 1.2;
	font-weight: 400;
`

export const tag = {
	base: css`
		font-size: ${rem('14px')};
		line-height: ${rem('20px')};
		font-weight: 400;
	`,
	important: css`
		font-size: ${rem('12px')};
		line-height: 1.2;
		font-weight: 600;
		letter-spacing: 1px;
		text-transform: uppercase;
	`,
	bold: css`
		font-size: ${rem('14px')};
		line-height: ${rem('20px')};
		font-weight: 600;
	`
}

export const button = {
	sm: css``,
	md: css``,
	lg: css``,
	hero: css`
		font-size: ${rem(sp[2])};
		padding: ${rem(sp[1.5])};

		${media.md`
			font-size: ${rem('48px')};
		`}

		${media.lg`
			font-size: ${rem('48px')};
		`}

		${media.xl`
			font-size: ${rem('48px')};
		`}

		${media.xxl`
			font-size: ${rem('48px')};
		`}
	`
}

export const shadow = {
	card: css`
		box-shadow: 0 4.581080913543701px 22.905405044555664px 0 #a4abb71f,
			0 12.216216087341309px 18.324323654174805px 0 #6b738424,
			0 6.108108043670654px 7.635135173797607px 0 #3e405433;
	`,
	header: css`
		box-shadow: 0 2.2905404567718506px 10.689188957214355px 0 #a4abb71f,
			0 6.108108043670654px 7.635135173797607px 0 #6b738424,
			0 3.8175675868988037px 3.8175675868988037px 0 #3e405433;
	`,
	form: css`
		box-shadow: 0 3.8175675868988037px 16.79729652404785px 0 #a4abb71f,
			0 9.162161827087402px 12.979729652404785px 0 #6b738424,
			0 5.344594478607178px 6.108108043670654px 0 #3e405433;
	`,
	dropdown: css`
		box-shadow: 0 4.581080913543701px 22.905405044555664px 0 #a4abb71f,
			0 12.216216087341309px 18.324323654174805px 0 #6b738424,
			0 6.108108043670654px 7.635135173797607px 0 #3e405433;
	`
}

export const container = {
	xs: css`
		max-width: ${contain['xs']};
		margin-right: auto;
		margin-left: auto;
	`,
	sm: css`
		max-width: ${contain['sm']};
		margin-right: auto;
		margin-left: auto;
	`,
	md: css`
		max-width: ${contain['md']};
		margin-right: auto;
		margin-left: auto;
	`,
	lg: css`
		max-width: ${contain['lg']};
		margin-right: auto;
		margin-left: auto;
	`,
	xl: css`
		max-width: ${contain['xl']};
		margin-right: ${sp[2]};
		margin-left: ${sp[2]};

		${media.md`
			margin-right: ${sp[5]};
			margin-left: ${sp[5]};
		`}

		${media.xl`
			margin-right: ${sp[9]};
			margin-left: ${sp[9]};
		`}

		${media.xxl`
			margin-right: ${sp[20]};
			margin-left: ${sp[20]};
		`}

		${above(contain['offset'])`
			max-width: ${contain['xxl'] - sp[40]};
			margin-right: auto;
			margin-left: auto;
		`}
	`,
	xxl: css`
		max-width: ${contain['xxl']};
		margin-right: ${sp[1]};
		margin-left: ${sp[1]};

		${media.md`
			margin-right: ${sp[3]};
			margin-left: ${sp[3]};
		`}

		${media.xl`
			margin-right: ${sp[8]};
			margin-left: ${sp[8]};
		`}

		${above(contain['offset'])`
			margin-right: auto;
			margin-left: auto;
		`}
	`
}

export const invisible = `
	z-index: -1;
	opacity: 0;
	visibility: hidden;
	transition: visiblity 0.3s ease, opacity 0.3s ease;
`

export const visible = `
	position: relative;
	z-index: 1;
	opacity: 1;
	visibility: visible;
	transition: visiblity 0.3s ease, opacity 0.3s ease;
`

export const text = {
	light: css`
		color: ${neutral['00']};
	`
}

export const grid = (rows = '12', size = '1fr', gutter, rowGap) => {
	return css`
		display: grid;
		grid-template-columns: repeat(${rows}, ${size});
		column-gap: ${gutter || 'var(--grid-gutter)'};
		row-gap: ${rowGap || 'var(--grid-gutter)'};
	`
}
