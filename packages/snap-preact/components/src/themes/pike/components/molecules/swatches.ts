import { css } from '@emotion/react';
import type { SwatchesProps } from '../../../../components/Molecules/Swatches';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// Swatch carousel sizes and spacing
const swatchSize = 30;
const swatchSpacing = custom.spacing.x1;

// CSS in JS style script for the Swatches component
const swatchesStyleScript = (props: SwatchesProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// light colors selector
	const swatchesPrefix = '&.ss__swatches__carousel__swatch';
	const lightColors = `${swatchesPrefix}--white, ${swatchesPrefix}--ivory, ${swatchesPrefix}--clear, ${swatchesPrefix}--transparent`;

	// carousel styles
	const carouselStyles = css({
		margin: 0,
		'.ss__carousel': {
			'& > div': {
				minWidth: '1px',
				flex: '0 1 auto',
			},
			'.ss__carousel__prev-wrapper, .ss__carousel__next-wrapper': {
				position: 'static',
				bottom: 0,
				width: `${swatchSize}px`,
				height: `${swatchSize}px`,
			},
			'.ss__carousel__prev-wrapper': {
				margin: `0 ${swatchSpacing}px 0 0`,
			},
			'.ss__carousel__next-wrapper': {
				margin: `0 0 0 ${swatchSpacing}px`,
			},
			'.swiper-container': {
				maxWidth: `calc(100% - ${swatchSize * 2 + swatchSpacing * 2}px)`,
				padding: '0 2px 0 0',
			},
			'.swiper > .swiper-wrapper > .swiper-slide > *, .ss__swatches__carousel__swatch': {
				width: '100%',
				height: `${swatchSize}px`,
				lineHeight: 0,
				border: 0,
			},
			'.ss__swatches__carousel__swatch': {
				position: 'relative',
				'&, &:before, &:after': {
					boxSizing: 'border-box',
				},
				'&:before, &:after': {
					content: '""',
					display: 'block',
					width: 'auto',
					height: 'auto',
					position: 'absolute',
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
					transform: 'none',
					opacity: 0,
					visibility: 'hidden',
				},
				'&:before': {
					border: `1px solid ${custom.colors.black}`,
				},
				'&:after': {
					border: `3px solid ${custom.colors.white}`,
					margin: '1px',
				},
				[`&:not([style]), ${lightColors}`]: {
					'&:before': {
						borderColor: custom.colors.gray02,
						opacity: 1,
						visibility: 'visible',
					},
				},
			},
			'.ss__swatches__carousel__swatch--selected': {
				'&:before, &:after': {
					visibility: 'visible',
				},
				'&:before': {
					opacity: 0.3,
				},
				'&:after': {
					opacity: 1,
				},
				[`&:not([style]), ${lightColors}`]: {
					'&:before': {
						borderColor: custom.colors.black,
						opacity: 0.3,
					},
					'&:after': {
						borderColor: custom.colors.gray01,
					},
				},
			},
		},
	});

	// grid styles
	const gridStyles = css({});

	// return variant selection styles
	if (props?.type == 'grid') {
		return gridStyles;
	} else {
		return carouselStyles;
	}
};

// Swatches component props
export const swatches: ThemeComponent<'swatches', SwatchesProps> = {
	default: {
		swatches: {
			themeStyleScript: swatchesStyleScript,
			type: 'grid', // carousel, grid, image
		},
		'swatches carousel': {
			autoAdjustSlides: false,
			centerInsufficientSlides: false,
			slidesPerView: 4,
			slidesPerGroup: 4,
			spaceBetween: `${swatchSpacing}px`,
		},
	},
	desktop: {
		'swatches carousel': {
			slidesPerView: 3,
			slidesPerGroup: 3,
			spaceBetween: `${swatchSpacing}px`,
		},
	},
};
