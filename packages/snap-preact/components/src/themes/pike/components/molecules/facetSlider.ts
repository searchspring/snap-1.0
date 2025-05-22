import { css } from '@emotion/react';
import type { FacetSliderProps } from '../../../../components/Molecules/FacetSlider';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';
import Color from 'color';

// CSS in JS style script for the FacetSlider component
const facetSliderStyleScript = (props: FacetSliderProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const valuesTop = custom.slider.valuesPosition == 'top' ? true : false;
	const valuesLeft = custom.slider.valuesAlign == 'left' ? true : false;
	const handleColor = new Color(props?.handleColor || variables?.colors?.primary);
	const handleInnerColor =
		handleColor.isDark() || handleColor.hex().toLowerCase() == '#00aeef' ? Color(custom.colors.white) : Color(custom.colors.black);

	// set slider height
	const sliderHeight = custom.slider.values + custom.slider.handles + custom.slider.handles / 2 + (props?.showTicks ? 20 : 0);

	// determine when to add top margin to slider
	let addTopMargin = false;
	if (props?.stickyHandleLabel) {
		if (props?.showTicks && !valuesTop) {
			addTopMargin = true;
		}
	}

	return css({
		height: `${sliderHeight}px`,
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
			marginTop: addTopMargin ? `${custom.slider.handles / 2}px` : '',
			'&, .ss__facet-slider__handles': {
				height: `${custom.slider.bar}px`,
			},
			'.ss__facet-slider__tick': {
				'.ss__facet-slider__tick__label': {
					color: props?.tickTextColor || variables?.colors?.text,
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
				margin: `0 ${custom.slider.handles / 2 - 1}px`,
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
							top: `${valuesTop ? '-' : ''}${valuesTop ? custom.slider.handles + custom.spacing.x1 : custom.slider.handles + custom.spacing.x5}px`,
							fontSize: `${custom.slider.values}px`,
							color: props?.valueTextColor || variables?.colors?.text,
						},
					},
				},
			},
		},
		'.ss__facet-slider__labels': {
			display: 'flex',
			flexFlow: 'row nowrap',
			alignItems: 'center',
			justifyContent: valuesLeft ? '' : 'center',
			fontSize: `${custom.slider.values}px`,
			lineHeight: `${custom.slider.values}px`,
			order: valuesTop ? -1 : '',
			margin: valuesTop ? `0 0 ${custom.spacing.x2}px 0` : `${custom.spacing.x2}px 0 0 0`,
			'.ss__facet-slider__label': {
				color: props?.valueTextColor || variables?.colors?.text,
				'&:after': {
					display: valuesLeft ? 'none' : '',
				},
				'& ~ .ss__facet-slider__label': {
					marginLeft: valuesLeft ? 'auto' : '',
				},
			},
		},
	});
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
