import { css } from '@emotion/react';
import type { SearchSnapncoProps } from '../../../../components/Templates/SearchSnapnco';
import { searchSnapncoThemeComponentProps } from '../../../themeComponents/searchSnapnco';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Search component
const searchSnapncoStyleScript = (props: SearchSnapncoProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		'.ss__search-snapnco__header-section, .ss__search-snapnco__main-section': {
			margin: `0 0 ${custom.spacing.x6}px 0`,
			'.ss__toolbar .ss__layout': {
				gap: `${custom.spacing.x4}px`,
			},
		},
		'.ss__search-snapnco__main-section': {
			gap: `${custom.spacing.x6}px`,
			'.ss__search-snapnco__sidebar, .ss__search-snapnco__content': {
				minWidth: '1px',
			},
			'.ss__search-snapnco__sidebar': {
				flex: '0 1 auto',
			},
			'.ss__search-snapnco__content': {
				flex: '1 1 0%',
				gap: `${custom.spacing.x4}px`,
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
		'searchSnapnco sidebar': {
			hideTitleText: true,
		},
	},
	mobile: {
		...searchSnapncoThemeComponentProps.mobile,
	},
	tablet: {
		...searchSnapncoThemeComponentProps.tablet,
	},
	desktop: {
		...searchSnapncoThemeComponentProps.desktop,
	},
};
