import { css } from '@emotion/react';
import type { RecommendationGridProps } from '../../../../components/Templates/RecommendationGrid';
import { recommendationGridThemeComponentProps } from '../../../themeComponents/recommendationGrid';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the RecommendationBundle component
const recommendationGridStyleScript = (props: RecommendationGridProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const darkGray = custom.utils.darkenColor(variables?.colors?.text, 0.45);
	const lightGray = custom.utils.lightenColor(variables?.colors?.text, 0.65);

	return css({
		fontSize: `${custom.sizes.font}px`,
		'*, *:after, *:before': {
			boxSizing: 'border-box',
		},
		'p, ul li, a, input, input[type], textarea, button, div': {
			fontSize: custom.utils.convertPxToEm(14),
		},
		'p, ul li, a, input, input[type], textarea, select': {
			color: variables?.colors?.text,
		},
		'input, input[type], textarea': {
			'&::-webkit-input-placeholder': {
				color: lightGray,
			},
			'&::-ms-input-placeholder': {
				color: lightGray,
			},
			'&::placeholder': {
				color: lightGray,
			},
		},
		a: {
			textDecoration: 'none',
			'&:hover': {
				color: darkGray,
			},
		},
	});
};

// RecommendationGrid component props come from Template export
export const recommendationGrid: ThemeComponent<'recommendationGrid', RecommendationGridProps> = {
	default: {
		...recommendationGridThemeComponentProps.default,
		recommendationGrid: {
			...(recommendationGridThemeComponentProps.default?.['recommendationGrid'] || {}),
			themeStyleScript: recommendationGridStyleScript,
		},
	},
	mobile: recommendationGridThemeComponentProps.mobile,
	desktop: recommendationGridThemeComponentProps.desktop,
	tablet: recommendationGridThemeComponentProps.tablet,
};
