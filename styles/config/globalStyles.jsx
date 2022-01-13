import { createGlobalStyle } from 'styled-components'
import * as style from '@styles/config/utilities'

export const GlobalStyle = createGlobalStyle`

	 html,
	body {
		padding: 0;
		margin: 0;
		background-color: ${style.colors.neutral['100']};
	}

	div,
	span,
	applet,
	object,
	iframe,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	a,
	abbr,
	acronym,
	address,
	big,
	cite,
	code,
	del,
	dfn,
	em,
	img,
	ins,
	kbd,
	q,
	s,
	samp,
	small,
	strike,
	strong,
	sub,
	sup,
	tt,
	var,
	b,
	u,
	i,
	center,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	canvas,
	details,
	embed,
	figure,
	figcaption,
	footer,
	header,
	hgroup,
	menu,
	nav,
	output,
	ruby,
	section,
	summary,
	time,
	mark,
	audio,
	video {
		font-family: ${style.font.family.sans};
		-webkit-text-size-adjust: 100%;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		padding: 0;
		margin: 0;
	}


	h1 {
		${style.h1};
	}

	h2 {
		${style.h2};
	}

	h3 {
		${style.h3};
	}

	h4 {
		${style.h4};
	}

	h5 {
		${style.h5};
	}

	label {
		${style.label};
	}

	img {
		width: 100%;
	}

	:root {
		--grid-gutter: ${style.sp['2']};

		${style.media.md`
			--grid-gutter: ${style.sp['3']};
		`}

		${style.media.xl`
			--grid-gutter: ${style.sp['4']};
		`}

		${style.media.xxl`
			--grid-gutter: ${style.sp['4']};
		`}

		${style.above(style.contain['offset'])`
			--grid-gutter: ${style.sp['4']};
		`}
	}

`
