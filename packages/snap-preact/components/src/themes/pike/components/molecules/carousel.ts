import { css } from '@emotion/react';
import type { CarouselProps } from '../../../../components/Molecules/Carousel';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Carousel component
const carouselStyleScript = (props: CarouselProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
};

// Carousel component props
export const carousel: ThemeComponent<'carousel', CarouselProps> = {
	default: {
		carousel: {
			themeStyleScript: carouselStyleScript,
		},
		'carousel icon.prev': {
			icon: custom.icons.arrowLeft,
		},
		'carousel icon.next': {
			icon: custom.icons.arrowRight,
		},
	},
};
