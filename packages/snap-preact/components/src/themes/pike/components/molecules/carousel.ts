import { css } from '@emotion/react';
import type { CarouselProps } from '../../../../components/Molecules/Carousel';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Carousel component
const carouselStyleScript = (props: CarouselProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		'&, .ss__carousel__navigation': {
			'.ss__carousel__prev-wrapper .swiper-button-disabled, .ss__carousel__next-wrapper .swiper-button-disabled, .ss__carousel__prev-wrapper--hidden div, .ss__carousel__next-wrapper--hidden div':
				{
					cursor: 'not-allowed',
					opacity: 0.5,
				},
		},
		'.swiper-container': {
			margin: '0 auto',
			'&:has(.swiper-pagination)': {
				paddingBottom: `${custom.spacing.x5}px`,
			},
			'& > .swiper-wrapper': {
				'& > .swiper-slide': {
					'& > *, .ss__result': {
						padding: 0,
						margin: 0,
						width: 'auto',
						height: '100%',
					},
				},
			},
			'& > .swiper-pagination': {
				position: 'absolute',
				bottom: 0,
				left: 0,
				right: 0,
				margin: 'auto',
				'.swiper-pagination-bullet': {
					margin: `0 ${custom.spacing.x1 / 2}px`,
					width: '12px',
					height: '12px',
					minWidth: '1px',
					flex: '0 1 auto',
					backgroundColor: custom.colors.gray01,
					border: `1px solid ${custom.colors.gray02}`,
					opacity: 1,
				},
				'.swiper-pagination-bullet-active': {
					backgroundColor: variables?.colors?.primary,
					borderColor: variables?.colors?.primary,
				},
			},
		},
	});
};

// Carousel component props
export const carousel: ThemeComponent<'carousel', CarouselProps> = {
	default: {
		carousel: {
			themeStyleScript: carouselStyleScript,
		},
	},
};
