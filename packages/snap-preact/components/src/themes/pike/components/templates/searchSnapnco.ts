import { css } from '@emotion/react';
import type { SearchSnapncoProps } from '../../../../components/Templates/SearchSnapnco';
import { searchSnapncoThemeComponentProps } from '../../../themeComponents/searchSnapnco';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Search component
const searchSnapncoStyleScript = (props: SearchSnapncoProps) => {
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

// Search component props come from Template export
export const searchSnapnco: ThemeComponent<'searchSnapnco', SearchSnapncoProps> = {
	default: {
		...searchSnapncoThemeComponentProps.default,
		searchSnapnco: {
			...(searchSnapncoThemeComponentProps.default?.['searchSnapnco'] || {}),
			themeStyleScript: searchSnapncoStyleScript,
		},
		'searchSnapnco button.sidebar-toggle': {
			icon: custom.icons.filter,
		},
		'searchSnapnco filterSummary': {
			hideTitle: false,
		},
	},
	mobile: searchSnapncoThemeComponentProps.mobile,
	desktop: searchSnapncoThemeComponentProps.desktop,
	tablet: searchSnapncoThemeComponentProps.tablet,
};
