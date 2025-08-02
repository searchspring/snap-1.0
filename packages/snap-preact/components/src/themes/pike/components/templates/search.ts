import { css } from '@emotion/react';
import type { SearchProps } from '../../../../components/Templates/Search';
import { searchThemeComponentProps } from '../../../themeComponents/search';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Search component
const searchStyleScript = (props: SearchProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
};

// Search component props come from Template export
export const search: ThemeComponent<'search', SearchProps> = {
	default: {
		...searchThemeComponentProps.default,
		search: {
			...(searchThemeComponentProps.default?.['search'] || {}),
			themeStyleScript: searchStyleScript,
		},
		'search button.sidebar-toggle': {
			icon: custom.icons.filter,
		},
	},
	mobile: searchThemeComponentProps.mobile,
	desktop: searchThemeComponentProps.desktop,
	tablet: searchThemeComponentProps.tablet,
};
