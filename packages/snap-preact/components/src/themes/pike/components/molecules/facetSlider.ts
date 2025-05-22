import { css } from '@emotion/react';
import type { FacetSliderProps } from '../../../../components/Molecules/FacetSlider';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';
import Color from 'color';

// CSS in JS style script for the FacetSlider component
const facetSliderStyleScript = (props: FacetSliderProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const fontColor = props?.valueTextColor || variables?.colors?.text;
	const valuesTop = custom.slider.valuesPosition == 'top' ? true : false;
	const valuesSides = custom.slider.valuesAlign == 'sides' ? true : false;
	const hasTicks = props?.showTicks ? true : false;
	const hasStickyHandles = props?.stickyHandleLabel ? true : false;
	const handleColor = new Color(props?.handleColor || variables?.colors?.primary);
	const handleInnerColor =
		handleColor.isDark() || handleColor.hex().toLowerCase() == '#00aeef' ? Color(custom.colors.white) : Color(custom.colors.black);

	// // set slider height
	// const sliderHeight = custom.slider.values + custom.slider.handles + custom.slider.handles / 2 + (props?.showTicks ? 20 : 0);

	// // determine when to add top margin to slider
	// let addTopMargin = false;
	// if (props?.stickyHandleLabel) {
	// 	if (props?.showTicks && !valuesTop) {
	// 		addTopMargin = true;
	// 	}
	// }

	// values font styles
	const valuesStyles = css({
		fontSize: `${custom.slider.values}px`,
		lineHeight: `${custom.slider.values}px`,
		color: fontColor,
	});

	// shared slider styles
	const sharedStyles = css({
		//height: `${sliderHeight}px`,
		border: `1px solid #ff00ff`,
		'&, *': {
			boxSizing: 'border-box',
		},
		'&, .ss__facet-slider__slider': {
			margin: 'auto',
		},
		// '&:before': {
		// 	content: '""',
		// 	display: 'block',
		// 	height: '8px',
		// 	backgroundColor: 'red',
		// 	order: 0,
		// },
		// '&:after': {
		// 	content: '""',
		// 	display: 'block',
		// 	height: '8px',
		// 	backgroundColor: 'orange',
		// 	order: 2,
		// },
		'.ss__facet-slider__slider button, .ss__facet-slider__labels label': {
			margin: 0,
			padding: 0,
			'&:focus': {
				outline: 0,
			},
		},
		'.ss__facet-slider__slider': {
			border: `1px solid green`,
			display: 'block',
			top: 0,
			width: '100%',
			//border: `1px solid green`,
			//marginTop: addTopMargin ? `${custom.slider.handles / 2}px` : '',
			//order: 1,
			//margin: `7px auto`,
			//height: `${custom.slider.bar}px`,
			// '&, .ss__facet-slider__handles': {
			// },
			'.ss__facet-slider__segment, .ss__facet-slider__rail, .ss__facet-slider__handles': {
				height: `${custom.slider.bar}px`,
			},
			'.ss__facet-slider__tick': {
				'.ss__facet-slider__tick__label': {
					color: props?.tickTextColor || variables?.colors?.text,
					lineHeight: 1,
				},
			},
			'.ss__facet-slider__segment': {
				backgroundColor: props?.trackColor || custom.colors.gray01,
				border: `1px solid ${props?.trackColor || custom.colors.gray02}`,
				borderRadius: `${custom.slider.bar}px`,
			},
			'.ss__facet-slider__rail': {
				backgroundColor: props?.railColor || variables?.colors?.secondary,
				border: `1px solid ${props?.railColor || variables?.colors?.secondary}`,
			},
			'.ss__facet-slider__handles': {
				position: 'relative',
				margin: `0 ${custom.slider.handles / 2 - 2}px`,
				//height: '100%',
				button: {
					'.ss__facet-slider__handle': {
						transform: 'none',
						width: `${custom.slider.handles}px`,
						height: `${custom.slider.handles}px`,
						lineHeight: `${custom.slider.handles}px`,
						backgroundColor: handleColor.hex(),
						border: `1px solid ${handleColor.hex()}`,
						'&:after': {
							width: `${custom.slider.handles / 4}px`,
							height: `${custom.slider.handles / 4}px`,
							backgroundColor: handleInnerColor.hex(),
							border: `1px solid ${handleInnerColor.hex()}`,
						},
						'.ss__facet-slider__handle__label.ss__facet-slider__handle__label--sticky': {
							//top: `${valuesTop ? '-' : ''}${valuesTop ? custom.slider.handles + custom.spacing.x1 : custom.slider.handles + custom.spacing.x5}px`,
							'&': {
								...valuesStyles,
							},
						},
					},
				},
			},
		},
		'.ss__facet-slider__labels': {
			display: 'flex',
			flexFlow: 'row nowrap',
			alignItems: 'center',
			justifyContent: valuesSides ? '' : 'center',
			// order: valuesTop ? -1 : '',
			// margin: valuesTop ? `0 0 ${custom.spacing.x2}px 0` : `${custom.spacing.x2}px 0 0 0`,
			// order: 3,
			border: `1px solid blue`,
			'.ss__facet-slider__label': {
				'&': {
					...valuesStyles,
				},
				'&:after': {
					display: valuesSides ? 'none' : '',
					padding: `0 ${custom.spacing.x1}px`,
				},
				'& ~ .ss__facet-slider__label': {
					marginLeft: valuesSides ? 'auto' : '',
				},
			},
		},
	});

	// spacing calculations
	const handlesMinusBar = custom.slider.handles - custom.slider.bar;
	const handlesMinusBarHalf = handlesMinusBar / 2;
	const valuesPlusSpacing = custom.slider.values + custom.spacing.x2;

	// spacing styles for different configurations
	// note: default for facet slider is no ticks, no stick handles, values bottom
	let spacingStyles = css({
		'.ss__facet-slider__slider': {
			margin: `${handlesMinusBarHalf}px auto`,
		},
		'.ss__facet-slider__labels': {
			margin: `${custom.spacing.x2}px 0 0 0`,
		},
	});

	if (valuesTop) {
	} else {
		if (hasTicks && hasStickyHandles) {
			spacingStyles = css({
				'.ss__facet-slider__slider': {
					margin: `${handlesMinusBarHalf}px 0 ${custom.slider.ticks + valuesPlusSpacing}px 0`,
					'.ss__facet-slider__handles': {
						button: {
							'.ss__facet-slider__handle': {
								'.ss__facet-slider__handle__label.ss__facet-slider__handle__label--sticky': {
									top: 'auto',
									bottom: `-${custom.slider.ticks + custom.spacing.x2}px`,
								},
							},
						},
					},
				},
			});
		} else if (hasTicks && !hasStickyHandles) {
			spacingStyles = css({
				'.ss__facet-slider__slider': {
					padding: `${handlesMinusBarHalf}px 0 ${custom.slider.bar + custom.slider.ticks}px 0`,
				},
				'.ss__facet-slider__labels': {
					margin: `${custom.spacing.x2}px 0 0 0`,
				},
			});
		} else if (!hasTicks && hasStickyHandles) {
			spacingStyles = css({
				'.ss__facet-slider__slider': {
					padding: `${handlesMinusBarHalf}px 0 ${custom.slider.bar + handlesMinusBarHalf + valuesPlusSpacing}px 0`,
					'.ss__facet-slider__handles': {
						button: {
							'.ss__facet-slider__handle': {
								'.ss__facet-slider__handle__label.ss__facet-slider__handle__label--sticky': {
									top: 'auto',
									bottom: `-${valuesPlusSpacing}px`,
								},
							},
						},
					},
				},
			});
		} else {
			// don't do anything -- this is the default
		}
	}

	// spacingStyles = css({
	// 	'.ss__facet-slider__slider': {
	// 		'&, .ss__facet-slider__handles': {},
	// 		'.ss__facet-slider__tick': {
	// 			'.ss__facet-slider__tick__label': {},
	// 		},
	// 		'.ss__facet-slider__segment': {},
	// 		'.ss__facet-slider__rail': {},
	// 		'.ss__facet-slider__handles': {
	// 			button: {
	// 				'.ss__facet-slider__handle': {
	// 					'&:after': {},
	// 					'.ss__facet-slider__handle__label.ss__facet-slider__handle__label--sticky': {},
	// 				},
	// 			},
	// 		},
	// 	},
	// 	'.ss__facet-slider__labels': {
	// 		'.ss__facet-slider__label': {},
	// 	},
	// });

	return css([sharedStyles, spacingStyles]);
};

// FacetSlider component props
export const facetSlider: ThemeComponent<'facetSlider', FacetSliderProps> = {
	default: {
		props: {
			themeStyleScript: facetSliderStyleScript,
			showTicks: true,
			stickyHandleLabel: true,
		},
	},
};
