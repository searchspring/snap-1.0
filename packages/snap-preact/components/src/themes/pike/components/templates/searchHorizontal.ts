import { css } from '@emotion/react';
import type { SearchHorizontalProps } from '../../../../components/Templates/SearchHorizontal';
import { searchHorizontalThemeComponentProps } from '../../../themeComponents/searchHorizontal';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Search component
const searchsecondaryStylescript = (props: SearchHorizontalProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const mobileBp = variables?.breakpoints?.mobile || 767;

	return css({
		'.ss__search-horizontal__header-section, .ss__search-horizontal__main-section': {
			margin: `0 0 ${custom.spacing.x6}px 0`,
			'.ss__toolbar .ss__layout': {
				gap: `${custom.spacing.x4}px`,
				'.ss__layout__row': {
					'&:has(.ss__facets-horizontal)': {
						alignItems: 'flex-start',
						'& > *': {
							minWidth: '1px',
							flex: '0 1 auto',
						},
						'.ss__facets-horizontal': {
							flex: '1 1 0%',
						},
					},
				},
			},
		},
		'.ss__search-horizontal__header-section': {
			'.ss__search-header': {
				textAlign: 'center',
			},
		},
		'.ss__search-horizontal__main-section': {
			gap: `${custom.spacing.x6}px`,
			'.ss__search-horizontal__sidebar, .ss__search-horizontal__content': {
				minWidth: '1px',
			},
			'.ss__search-horizontal__sidebar': {
				flex: '0 1 auto',
			},
			'.ss__search-horizontal__content': {
				flex: '1 1 0%',
				gap: `${custom.spacing.x4}px`,
			},
		},
		[`@media (max-width: ${mobileBp}px)`]: {
			'.ss__search-horizontal__main-section': {
				'.ss__toolbar': {
					'.ss__select': {
						flex: '1 1 0%',
					},
				},
			},
		},
	});
};

export const searchHorizontal: ThemeComponent<'searchHorizontal', SearchHorizontalProps> = {
	default: {
		...searchHorizontalThemeComponentProps.default,
		searchHorizontal: {
			...(searchHorizontalThemeComponentProps.default?.['searchHorizontal'] || {}),
			themeStyleScript: searchsecondaryStylescript,
		},
		'searchHorizontal button.sidebar-toggle': {
			icon: custom.icons.filter,
		},
		'searchHorizontal toolbar.top': {
			layout: [['searchHeader'], ['banner.header']],
		},
		'searchHorizontal toolbar.middle': {
			layout: [['filterSummary'], ['facetsHorizontal'], ['paginationInfo', '_', 'sortBy', 'perPage'], ['banner.banner']],
		},
		'searchHorizontal toolbar.bottom': {
			layout: [['banner.footer'], ['_', 'pagination', '_']],
		},
		'searchHorizontal mobileSidebar': {
			layout: ['filterSummary', 'facets', 'banner.left'],
		},
	},
	mobile: {
		...searchHorizontalThemeComponentProps.mobile,
		searchHorizontal: {
			...(searchHorizontalThemeComponentProps.mobile?.['searchHorizontal'] || {}),
		},
		'searchHorizontal toolbar.top': {
			layout: [['searchHeader'], ['banner.header']],
		},
		'searchHorizontal toolbar.middle': {
			layout: [['paginationInfo', '_', 'mobileSidebar'], ['sortBy', 'perPage'], ['banner.banner']],
		},
		'searchHorizontal toolbar.bottom': {
			layout: [['banner.footer'], ['_', 'pagination', '_']],
		},
	},
	tablet: {
		...searchHorizontalThemeComponentProps.tablet,
		searchHorizontal: {
			...(searchHorizontalThemeComponentProps.tablet?.['searchHorizontal'] || {}),
		},
		'searchHorizontal toolbar.top': {
			layout: [['searchHeader'], ['banner.header']],
		},
		'searchHorizontal toolbar.middle': {
			layout: [['filterSummary'], ['facetsHorizontal'], ['paginationInfo', '_', 'sortBy', 'perPage'], ['banner.banner']],
		},
		'searchHorizontal toolbar.bottom': {
			layout: [['banner.footer'], ['_', 'pagination', '_']],
		},
	},
	desktop: {
		...searchHorizontalThemeComponentProps.desktop,
		searchHorizontal: {
			...(searchHorizontalThemeComponentProps.desktop?.['searchHorizontal'] || {}),
		},
		'searchHorizontal toolbar.top': {
			layout: [['searchHeader'], ['banner.header']],
		},
		'searchHorizontal toolbar.middle': {
			layout: [['filterSummary'], ['facetsHorizontal'], ['paginationInfo', '_', 'sortBy', 'perPage'], ['banner.banner']],
		},
		'searchHorizontal toolbar.bottom': {
			layout: [['banner.footer'], ['_', 'pagination', '_']],
		},
	},
};
