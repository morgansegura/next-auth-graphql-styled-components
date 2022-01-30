import styled from 'styled-components'
import * as include from '@styles/config/utilities'
import { rgba } from 'polished'

export const Scaffold = styled.div`
	--size: 'Small Mobile: 0 - 374px';
	--columns: 6;
	--color: hsla(204, 80%, 72%, 0.25);
	--max-width: calc(100% - (2 * var(--lane-gutter)));
	--grid-gutter: ${include.sp['2']};
	--lane-gutter: ${include.sp['3']};

	${include.media.sm`
        /* --size: 'Mobile: 375px - 639px'; */
        --size: 'Mobile: 375px - 639px';
    `}

	${include.media.md`
        --size: 'Tablet: 640px - 1023px';
        --lane-gutter: ${include.sp['8']};
    `}

    ${include.media.lg`
        --columns: 12;
        --size: 'Small Desktop: 1024px - 1366px';
    `}

    ${include.media.xl`
        --size: 'Desktop: 1376px - 1799px';
        --lane-gutter: 136px;
    `}

    ${include.media.xxl`
        --size: 'Large Desktop: 1800px - 1928px';
        --lane-gutter: 224px;
    `}

    ${include.above(include.contain['offset'])`
        --lane-gutter: ${include.sp['20']};
        --max-width: ${include.contain['xxl']} - (2 * var(--lane-gutter)));
        --size: '2256px and beyond';
    `}

    --repeating-width: calc(100% / var(--columns));
	--column-width: calc((100% / var(--columns)) - var(--grid-gutter));
	--background-width: calc(100% + var(--grid-gutter));
	--background-columns: repeating-linear-gradient(
		to right,
		var(--color),
		var(--color) var(--column-width),
		transparent var(--column-width),
		transparent var(--repeating-width)
	);

	position: fixed;
	z-index: 3001;
	top: 0;
	right: 0;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 100%;
	max-width: var(--max-width);
	background-image: var(--background-columns);
	background-size: var(--background-width) 100%;
	pointer-events: none;

	&::after {
		${include.tag['bold']};
		${include.shadow['card']};

		content: var(--size);
		position: absolute;
		top: auto;
		right: 0;
		bottom: ${include.sp[2.5]};
		left: auto;
		transform: translate(-50%);
		color: ${rgba(include.colors.black, 0.9)};
		background-color: ${rgba(include.colors.black, 0.7)};
		padding: ${include.sp[0.5]} ${include.sp[1]};
		${include.radius['sm']};
	}
`
