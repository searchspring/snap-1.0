import { css } from '@emotion/react';
import type { SwatchesProps } from '../../../../components/Molecules/Swatches';
import { ThemeComponent } from '../../../../providers';
//import { custom } from '../../custom';

// CSS in JS style script for the Swatches component
const swatchesStyleScript = (props: SwatchesProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const buttonSize = 20;

	// light colors selector
	// const swatchesPrefix = '&.ss__swatches__carousel__swatch';
	// const lightColors = `${swatchesPrefix}--white, ${swatchesPrefix}--ivory, ${swatchesPrefix}--clear, ${swatchesPrefix}--transparent`;

	// carousel styles
	const carouselStyles = css({
		margin: 0,
		'.ss__carousel': {
			'.ss__carousel__prev-wrapper, .ss__carousel__next-wrapper': {
				bottom: 0,
				width: `${buttonSize}px`,
				height: 'auto',
				'& > div': {
					backgroundColor: 'transparent',
					color: variables?.colors?.text,
				},
			},
			'.ss__carousel__prev-wrapper': {
				'& > div': {
					alignItems: 'flex-start',
				},
			},
			'.ss__carousel__next-wrapper': {
				'& > div': {
					alignItems: 'flex-end',
				},
			},
			'.swiper-container': {
				margin: `0 ${buttonSize + 5}px`,
				'& > .swiper-wrapper': {
					'& > .swiper-slide': {
						// '& > *, .ss__result': {
						// 	padding: 0,
						// 	margin: 0,
						// 	width: 'auto',
						// 	height: '100%',
						// },
					},
				},
			},
			'.ss__swatches__carousel__swatch': {
				border: 0,
				position: 'relative',
				'&.ss__swatches__carousel__swatch--selected': {
					// '&:before': {
					// 	borderColor: custom.colors.black,
					// 	opacity: 0.3,
					// },
					// '&:after': {
					// 	visibility: 'visible',
					// 	opacity: 1,
					// },
					// '&[style*="background"]': {
					// 	'&:before': {
					// 		opacity: 0.3,
					// 	}
					// },
					// [lightColors]: {
					// 	'&:before': {
					// 		borderColor: custom.colors.black,
					// 		opacity: 0.3,
					// 	},
					// 	'&:after': {
					// 	}
					// },
				},
				// '&[style*="background"]': {
				// 	'&:before': {
				// 		borderColor: custom.colors.black,
				// 		visibility: 'hidden',
				// 		opacity: 0,
				// 	}
				// },
				// [lightColors]: {
				// 	'&:before': {
				// 		borderColor: custom.colors.gray02,
				// 		visibility: 'visible',
				// 		opacity: 1,
				// 	}
				// },
				// '&, &:before, &:after': {
				// 	boxSizing: 'border-box'
				// },
				// '&:before, &:after': {
				// 	content: '""',
				// 	display: 'block',
				// 	width: 'auto',
				// 	height: 'auto',
				// 	position: 'absolute',
				// 	top: 0,
				// 	bottom: 0,
				// 	left: 0,
				// 	right: 0,
				// 	transform: 'none',
				// },
				// '&:before': {
				// 	border: `1px solid ${custom.colors.gray02}`
				// },
				// '&:after': {
				// 	border: `3px solid ${custom.colors.white}`,
				// 	margin: '1px',
				// 	visibility: 'hidden',
				// 	opacity: 0,
				// }
			},
		},
	});

	return carouselStyles;
};

// Swatches component props
export const swatches: ThemeComponent<'swatches', SwatchesProps> = {
	default: {
		swatches: {
			themeStyleScript: swatchesStyleScript,
			type: 'carousel', // carousel, grid, image
		},
	},
};
