import { css } from '@emotion/react';
import type { CarouselProps } from '../../../../components/Molecules/Carousel';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Carousel component
const carouselStyleScript = (props: CarouselProps) => {
	const variables = props?.theme?.variables;

	// carousel styles
	const carouselStyles = css({
		position: 'relative',
		width: '100%',
		minWidth: '1px',
		...custom.styles.boxSizing(),
		'.ss__carousel__prev-wrapper--hidden > div, .ss__carousel__next-wrapper--hidden > div': {
			...custom.styles.disabled(),
		},
		'.ss__carousel__prev-wrapper, .ss__carousel__next-wrapper': {
			width: '32px',
			height: '32px',
			display: 'block',
			position: 'absolute',
			top: 0,
			bottom: 'calc(10.25rem - 10px)',
			zIndex: 2,
			margin: 'auto',
			'& > div': {
				display: 'flex',
				flexFlow: 'column nowrap',
				alignItems: 'center',
				justifyContent: 'center',
				padding: 0,
				width: '100%',
				height: '100%',
				lineHeight: 1,
				backgroundColor: variables?.colors?.primary,
				color: custom.colors.white,
			},
			'.swiper-button-disabled': {
				...custom.styles.disabled(),
			},
		},
		'.ss__carousel__prev-wrapper': {
			left: 0,
		},
		'.ss__carousel__next-wrapper': {
			right: 0,
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
				gap: `${custom.spacing.x1}px`,
				'.swiper-pagination-bullet': {
					width: '12px',
					height: '12px',
					minWidth: '1px',
					margin: 0,
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
		'.swiper-grid-column': {
			'& > .swiper-wrapper': {
				flexFlow: 'row wrap',
				'& > .swiper-slide': {
					height: 'auto !important',
					marginTop: '0 !important',
					marginBottom: `${custom.spacing.x4}px`,
				},
			},
		},
	});

	return carouselStyles;
};

// Carousel component props
export const carousel: ThemeComponent<'carousel', CarouselProps> = {
	default: {
		carousel: {
			themeStyleScript: carouselStyleScript,
			speed: 600,
		},
		'carousel icon.prev': {
			icon: custom.icons.arrowLeft,
			size: `${custom.sizes.icon12}px`,
		},
		'carousel icon.next': {
			icon: custom.icons.arrowRight,
			size: `${custom.sizes.icon12}px`,
		},
	},
};
