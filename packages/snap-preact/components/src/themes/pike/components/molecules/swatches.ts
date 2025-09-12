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
	const darkGray = custom.utils.darkenColor(custom.colors.gray02, 0.075);

	// light colors selector
	const swatchesPrefix = '&.ss__swatches__carousel__swatch';
	const lightColors = `${swatchesPrefix}--white, ${swatchesPrefix}--ivory, ${swatchesPrefix}--clear, ${swatchesPrefix}--transparent`;

	// shared styles for swatches
	const sharedStyles = css({
		margin: 0,
	});

	// carousel styles
	const carouselStyles = css([
		sharedStyles,
		{
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
					'& > .swiper-wrapper': {
						'& > .swiper-slide': {
							overflow: 'hidden',
							width: `${swatchSize}px`,
							height: `${swatchSize}px`,
							'&:has(.ss__swatches__carousel__swatch.ss__swatches__carousel__swatch--unavailable)': {
								'&:before': {
									content: '""',
									display: 'block',
									position: 'absolute',
									top: 0,
									bottom: 0,
									margin: 'auto',
									width: '100%',
									height: '1px',
									borderTop: `3px solid ${darkGray}`,
									transform: 'rotate(-45deg)',
								},
							},
						},
					},
				},
				'.swiper-container > .swiper-wrapper > .swiper-slide > *, .ss__swatches__carousel__swatch': {
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
					'&[style*="url"]': {
						backgroundRepeat: 'no-repeat !important',
						backgroundSize: 'cover !important',
						backgroundPosition: 'center !important',
						transition: 'transform 0.5s ease-in-out',
						'&:hover': {
							transform: 'scale(1.5)',
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
							borderColor: darkGray,
							opacity: 1,
						},
						'&:after': {
							borderColor: custom.colors.gray01,
						},
					},
					'&[style*="url"]': {
						'&:hover': {
							transform: 'none',
						},
					},
				},
				'.ss__swatches__carousel__swatch.ss__swatches__carousel__swatch--unavailable': {
					opacity: 1,
					cursor: 'not-allowed',
					pointerEvents: 'none',
				},
			},
		},
	]);

	// grid styles
	const gridStyles = css([
		sharedStyles,
		{
			'.ss__grid': {
				'.ss__grid__options': {
					gridTemplateColumns: `repeat(auto-fill, minmax(${swatchSize}px, 1fr))`,
					'.ss__grid__option': {
						maxHeight: `${swatchSize}px`,
					},
				},
			},
		},
	]);

	// return swatch styles
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
			type: 'grid',
		},
		'swatches carousel': {
			autoAdjustSlides: false,
			centerInsufficientSlides: false,
			slidesPerView: 'auto',
			slidesPerGroup: 3,
			spaceBetween: `${swatchSpacing}px`,
		},
	},
	desktop: {
		'swatches carousel': {
			slidesPerView: 'auto',
			slidesPerGroup: 2,
			spaceBetween: `${swatchSpacing}px`,
		},
	},
};
