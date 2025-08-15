import { css } from '@emotion/react';
import type { SearchBocaProps } from '../../../../components/Templates/SearchBoca';
import { searchBocaThemeComponentProps } from '../../../themeComponents/searchBoca';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Search component
const searchBocaStyleScript = (props: SearchBocaProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		'.ss__search-boca__header-section, .ss__search-boca__main-section': {
			margin: `0 0 ${custom.spacing.x6}px 0`,
			'.ss__toolbar .ss__layout': {
				gap: `${custom.spacing.x4}px`,
			},
		},
		'.ss__search-boca__header-section': {
			'.ss__search-header': {
				textAlign: 'center',
			},
		},
		'.ss__search-boca__main-section': {
			gap: `${custom.spacing.x6}px`,
			'.ss__search-boca__sidebar, .ss__search-boca__content': {
				minWidth: '1px',
			},
			'.ss__search-boca__sidebar': {
				flex: '0 1 auto',
			},
			'.ss__search-boca__content': {
				flex: '1 1 0%',
				gap: `${custom.spacing.x4}px`,
			},
		},
		'@media (max-width: 540px)': {
			'.ss__toolbar': {
				'.ss__pagination-info': {
					fontSize: custom.utils.convertPxToEm(16),
				},
			},
		},
	});
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
		'searchBoca sidebar': {
			hideTitleText: true,
		},
		'searchBoca toolbar.top': {
			layout: [['_', 'searchHeader', '_'], ['banner.header']],
		},
		'searchBoca toolbar.middle': {
			layout: [['button.sidebar-toggle', 'paginationInfo', '_', 'sortBy', 'perPage'], ['banner.banner']],
		},
	},
	mobile: {
		...searchBocaThemeComponentProps.mobile,
		searchBoca: {
			...(searchBocaThemeComponentProps.mobile?.['searchBoca'] || {}),
		},
		'searchBoca toolbar.top': {
			layout: [['_', 'searchHeader', '_'], ['banner.header']],
		},
		'searchBoca toolbar.middle': {
			layout: [['mobileSidebar', '_', 'paginationInfo', '_', 'layoutSelector'], ['banner.banner']],
		},
	},
	tablet: {
		...searchBocaThemeComponentProps.tablet,
		searchBoca: {
			...(searchBocaThemeComponentProps.tablet?.['searchBoca'] || {}),
		},
		'searchBoca toolbar.top': {
			layout: [['_', 'searchHeader', '_'], ['banner.header']],
		},
		'searchBoca toolbar.middle': {
			layout: [['mobileSidebar', '_', 'paginationInfo', '_', 'layoutSelector'], ['banner.banner']],
		},
	},
	desktop: {
		...searchBocaThemeComponentProps.desktop,
		searchBoca: {
			...(searchBocaThemeComponentProps.desktop?.['searchBoca'] || {}),
		},
		'searchBoca toolbar.top': {
			layout: [['_', 'searchHeader', '_'], ['banner.header']],
		},
		'searchBoca toolbar.middle': {
			layout: [['button.sidebar-toggle', 'paginationInfo', '_', 'sortBy', 'perPage'], ['banner.banner']],
		},
	},
};
