import { css } from '@emotion/react';
import type { SearchBocaProps } from '../../../../components/Templates/SearchBoca';
import { searchBocaThemeComponentProps } from '../../../themeComponents/searchBoca';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Search component
const searchBocaStyleScript = (props: SearchBocaProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
};

export const searchBoca: ThemeComponent<'searchBoca', SearchBocaProps> = {
	default: {
		...searchBocaThemeComponentProps.default,
		searchBoca: {
			...(searchBocaThemeComponentProps.default?.['searchBoca'] || {}),
			themeStyleScript: searchBocaStyleScript,
		},
		'searchBoca button.sidebar-toggle': {
			icon: custom.icons.filter,
		},
	},
	mobile: searchBocaThemeComponentProps.mobile,
	desktop: searchBocaThemeComponentProps.desktop,
	tablet: searchBocaThemeComponentProps.tablet,
};
