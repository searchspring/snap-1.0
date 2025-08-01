import { css } from '@emotion/react';
import type { SearchSnappyProps } from '../../../../components/Templates/SearchSnappy';
import { searchSnappyThemeComponentProps } from '../../../themeComponents/searchSnappy';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Search component
const searchSnappyStyleScript = (props: SearchSnappyProps) => {
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
export const searchSnappy: ThemeComponent<'searchSnappy', SearchSnappyProps> = {
	default: {
		...searchSnappyThemeComponentProps.default,
		searchSnappy: {
			...(searchSnappyThemeComponentProps.default?.['searchSnappy'] || {}),
			themeStyleScript: searchSnappyStyleScript,
		},
		'searchSnappy button.sidebar-toggle': {
			icon: custom.icons.filter,
		},
		'searchSnappy filterSummary': {
			hideTitle: false,
		},
	},
	mobile: searchSnappyThemeComponentProps.mobile,
	desktop: searchSnappyThemeComponentProps.desktop,
	tablet: searchSnappyThemeComponentProps.tablet,
};
