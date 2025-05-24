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

	// values font styles
	const valuesStyles = css({
		fontSize: `${custom.slider.values}px`,
		lineHeight: `${custom.slider.values}px`,
		color: fontColor,
	});

	// shared slider styles
	const sharedStyles = css({
		'&, *': {
			boxSizing: 'border-box',
		},
		'&, .ss__facet-slider__slider': {
			margin: 'auto',
		},
		'.ss__facet-slider__slider button, .ss__facet-slider__labels label': {
			margin: 0,
			padding: 0,
			'&:focus': {
				outline: 0,
			},
		},
		'.ss__facet-slider__slider': {
			display: 'block',
			top: 0,
			width: '100%',
			height: `${custom.slider.bar}px`,
			'.ss__facet-slider__segment, .ss__facet-slider__rail, .ss__facet-slider__handles': {
				height: '100%',
			},
			'.ss__facet-slider__tick': {
				'&:before, .ss__facet-slider__tick__label': {
					transform: 'translate(-50%, 0)',
				},
				'&:before': {
					top: `${custom.slider.ticks / 2}px`,
					backgroundColor: custom.colors.gray03,
				},
				'.ss__facet-slider__tick__label': {
					top: `${custom.slider.ticks}px`,
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
							backgroundColor: 'transparent',
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

	// spacing and size calculations
	const handlesSizeHalf = (custom.slider.handles - custom.slider.bar) / 2;
	const handlesSpacing = custom.slider.handles + custom.spacing.x2;
	const ticksSpacing = custom.slider.ticks + custom.spacing.x1;
	const stickySpacing = custom.slider.values + custom.spacing.x2;
	const handlesPlusSticky = handlesSizeHalf + stickySpacing;
	const ticksPlusSticky = ticksSpacing + stickySpacing;

	// spacing styles for different configurations
	// note: default for facet slider is no ticks, no stick handles, values bottom
	let spacingStyles = css({});

	if (hasTicks && hasStickyHandles) {
		spacingStyles = css({
			'.ss__facet-slider__slider': {
				margin: `${valuesTop ? handlesPlusSticky : handlesSizeHalf}px auto ${valuesTop ? ticksSpacing : ticksPlusSticky}px auto`,
				'.ss__facet-slider__handles button .ss__facet-slider__handle': {
					'.ss__facet-slider__handle__label.ss__facet-slider__handle__label--sticky': {
						top: valuesTop ? `auto` : `${handlesSizeHalf + ticksPlusSticky - custom.slider.bar}px`,
						bottom: valuesTop ? `${handlesSpacing}px` : ``,
					},
				},
			},
		});
	} else if (hasTicks && !hasStickyHandles) {
		spacingStyles = css({
			'.ss__facet-slider__slider': {
				margin: `${handlesSizeHalf}px auto ${ticksSpacing}px auto`,
			},
			'.ss__facet-slider__labels': {
				order: valuesTop ? -1 : '',
				margin: `${valuesTop ? 0 : custom.spacing.x2}px 0 ${valuesTop ? custom.spacing.x2 : 0}px 0`,
			},
		});
	} else if (!hasTicks && hasStickyHandles) {
		spacingStyles = css({
			'.ss__facet-slider__slider': {
				margin: `${valuesTop ? handlesPlusSticky : handlesSizeHalf}px auto ${valuesTop ? handlesSizeHalf : handlesPlusSticky}px auto`,
				'.ss__facet-slider__handles button .ss__facet-slider__handle': {
					'.ss__facet-slider__handle__label.ss__facet-slider__handle__label--sticky': {
						top: valuesTop ? 'auto' : `${handlesSpacing}px`,
						bottom: valuesTop ? `${handlesSpacing}px` : ``,
					},
				},
			},
		});
	} else {
		spacingStyles = css({
			'.ss__facet-slider__slider': {
				margin: `${handlesSizeHalf}px auto`,
			},
			'.ss__facet-slider__labels': {
				order: valuesTop ? -1 : '',
				margin: `${valuesTop ? 0 : custom.spacing.x2}px 0 ${valuesTop ? custom.spacing.x2 : 0}px 0`,
			},
		});
	}

	return css([sharedStyles, spacingStyles]);
};

// FacetSlider component props
export const facetSlider: ThemeComponent<'facetSlider', FacetSliderProps> = {
	default: {
		props: {
			themeStyleScript: facetSliderStyleScript,
		},
	},
};
