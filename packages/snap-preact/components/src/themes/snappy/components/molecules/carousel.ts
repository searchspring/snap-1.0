import { css } from '@emotion/react';
import type { CarouselProps } from '../../../../components/Molecules/Carousel';

// CSS in JS style script for the Carousel component
const carouselStyleScript = ({ theme }: CarouselProps) => {
	const variables = theme?.variables;

	return css({
		'.swiper-pagination-bullet': {
			background: '#ccc',
			opacity: '.5',
			'&.swiper-pagination-bullet-active': {
				opacity: '1',
				background: variables?.colors?.accent || '#3A23AD',
			},
		},
	});
};

// Carousel component props
export const carousel: ThemeComponentProps<CarouselProps> = {
	default: {
		themeStyleScript: carouselStyleScript,
	},
	mobile: {},
	tablet: {},
	desktop: {},
};
