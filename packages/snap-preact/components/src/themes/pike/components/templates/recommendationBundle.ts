import { css } from '@emotion/react';
import type { RecommendationBundleProps } from '../../../../components/Templates/RecommendationBundle';
import { recommendationBundleThemeComponentProps } from '../../../themeComponents/recommendationBundle';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the RecommendationBundle component
const recommendationBundleStyleScript = (props: RecommendationBundleProps) => {
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

// RecommendationBundle component props come from Template export
export const recommendationBundle: ThemeComponent<'recommendationBundle', RecommendationBundleProps> = {
	default: {
		...recommendationBundleThemeComponentProps.default,
		recommendationBundle: {
			...(recommendationBundleThemeComponentProps.default?.['recommendationBundle'] || {}),
			separatorIcon: custom.icons.plus,
			ctaIcon: custom.icons.bag,
			themeStyleScript: recommendationBundleStyleScript,
		},
	},
	mobile: recommendationBundleThemeComponentProps.mobile,
	desktop: recommendationBundleThemeComponentProps.desktop,
	tablet: recommendationBundleThemeComponentProps.tablet,
};
