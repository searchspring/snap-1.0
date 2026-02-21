import { css } from '@emotion/react';
import type { CarouselProps } from '../../../../components/Molecules/Carousel';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const carouselSpacing = custom.spacing.x2;
const carouselButtonSize = 32;
const carouselPaginationSize = 12;
const carouselPaginationSpacing = carouselSpacing + carouselPaginationSize;

// CSS in JS style script for the Carousel component
const carouselStyleScript = (props: CarouselProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// carousel styles
	const carouselStyles = css({
		position: 'relative',
		width: '100%',
		minWidth: '1px',
		...custom.styles.boxSizing('carousel', props?.treePath, props?.name),
		'.ss__carousel__prev-wrapper--hidden > div, .ss__carousel__next-wrapper--hidden > div': {
			...custom.styles.disabled(),
		},
		'.ss__carousel__prev-wrapper, .ss__carousel__next-wrapper': {
			width: `${carouselButtonSize}px`,
			height: `${carouselButtonSize}px`,
			display: 'block',
			position: 'absolute',
			top: 0,
			bottom: 0,
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
			'& > div .ss__icon': {
				left: '-1.5px',
			},
		},
		'.ss__carousel__next-wrapper': {
			right: 0,
			'& > div .ss__icon': {
				right: '-1.5px',
			},
		},
		'.swiper-container': {
			margin: '0 auto',
			'&:has(.swiper-pagination)': {
				paddingBottom: `${carouselPaginationSpacing}px`,
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
					opacity: 1,
					flex: '0 1 auto',
					width: `${carouselPaginationSize}px`,
					height: `${carouselPaginationSize}px`,
					lineHeight: `${carouselPaginationSize}px`,
					minWidth: '1px',
					margin: 0,
					...custom.styles.box('', 0, false),
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
			spaceBetween: carouselSpacing,
			autoAdjustSlides: false,
			centerInsufficientSlides: false,
		},
		'carousel icon': {
			size: `${custom.sizes.icon08}px`,
			width: `${custom.sizes.icon08}px`,
			height: `${custom.sizes.icon08}px`,
		},
		'carousel icon.prev': {
			icon: custom.icons.arrowLeft,
		},
		'carousel icon.next': {
			icon: custom.icons.arrowRight,
		},
	},
};
