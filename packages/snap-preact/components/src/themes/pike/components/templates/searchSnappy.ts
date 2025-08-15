import { css } from '@emotion/react';
import type { SearchSnappyProps } from '../../../../components/Templates/SearchSnappy';
import { searchSnappyThemeComponentProps } from '../../../themeComponents/searchSnappy';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Search component
const searchSnappyStyleScript = (props: SearchSnappyProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		'.ss__search-snappy__header-section, .ss__search-snappy__main-section': {
			margin: `0 0 ${custom.spacing.x6}px 0`,
			'.ss__toolbar .ss__layout': {
				gap: `${custom.spacing.x4}px`,
			},
		},
		'.ss__search-snappy__main-section': {
			gap: `${custom.spacing.x6}px`,
			'.ss__search-snappy__sidebar, .ss__search-snappy__content': {
				minWidth: '1px',
			},
			'.ss__search-snappy__sidebar': {
				flex: '0 1 auto',
			},
			'.ss__search-snappy__content': {
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

// Search component props come from Template export
export const searchSnappy: ThemeComponent<'searchSnappy', SearchSnappyProps> = {
	default: {
		...searchSnappyThemeComponentProps.default,
		searchSnappy: {
			...(searchSnappyThemeComponentProps.default?.['searchSnappy'] || {}),
			themeStyleScript: searchSnappyStyleScript,
		},
		'searchSnappy sidebar': {
			hideTitleText: true,
		},
		'searchSnappy button.sidebar-toggle': {
			icon: custom.icons.filter,
		},
		'searchSnappy filterSummary': {
			hideTitle: false,
		},
		'searchSnappy toolbar.top': {
			layout: [['searchHeader'], ['banner.header'], ['button.sidebar-toggle', '_', 'sortBy', 'perPage', 'layoutSelector'], ['banner.banner']],
		},
		'searchSnappy toolbar.bottom': {
			layout: [['banner.footer'], ['paginationInfo', '_', 'pagination']],
		},
	},
	mobile: {
		...searchSnappyThemeComponentProps.mobile,
		searchSnappy: {
			...(searchSnappyThemeComponentProps.mobile?.['searchSnappy'] || {}),
		},
		'searchSnappy toolbar.top': {
			layout: [['searchHeader'], ['banner.header']],
		},
		'searchSnappy toolbar.middle': {
			layout: [['mobileSidebar', '_', 'paginationInfo', '_', 'layoutSelector'], ['banner.banner']],
		},
		'searchSnappy toolbar.bottom': {
			layout: [['banner.footer'], ['_', 'pagination', '_']],
		},
		'searchSnappy mobileSidebar': {
			layout: ['filterSummary', 'sortBy', 'perPage', 'facets', 'banner.left'],
		},
	},
	tablet: {
		...searchSnappyThemeComponentProps.tablet,
		searchSnappy: {
			...(searchSnappyThemeComponentProps.tablet?.['searchSnappy'] || {}),
		},
		'searchSnappy toolbar.top': {
			layout: [['searchHeader'], ['banner.header']],
		},
		'searchSnappy toolbar.middle': {
			layout: [['mobileSidebar', '_', 'sortBy', 'perPage', 'layoutSelector'], ['banner.banner']],
		},
		'searchSnappy toolbar.bottom': {
			layout: [['banner.footer'], ['paginationInfo', '_', 'pagination']],
		},
		'searchSnappy mobileSidebar': {
			layout: ['filterSummary', 'facets', 'banner.left'],
		},
	},
	desktop: {
		...searchSnappyThemeComponentProps.desktop,
		searchSnappy: {
			...(searchSnappyThemeComponentProps.desktop?.['searchSnappy'] || {}),
		},
		'searchSnappy toolbar.top': {
			layout: [['searchHeader'], ['banner.header'], ['button.sidebar-toggle', '_', 'sortBy', 'perPage', 'layoutSelector'], ['banner.banner']],
		},
		'searchSnappy toolbar.bottom': {
			layout: [['banner.footer'], ['paginationInfo', '_', 'pagination']],
		},
	},
};
