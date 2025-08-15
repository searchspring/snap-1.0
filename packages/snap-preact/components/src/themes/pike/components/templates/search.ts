import { css } from '@emotion/react';
import type { SearchProps } from '../../../../components/Templates/Search';
import { searchThemeComponentProps } from '../../../themeComponents/search';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Search component
const searchStyleScript = (props: SearchProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const mobileBp = variables?.breakpoints?.mobile || 767;

	return css({
		'.ss__search__header-section, .ss__search__main-section': {
			margin: `0 0 ${custom.spacing.x6}px 0`,
		},
		'.ss__search__main-section': {
			gap: `${custom.spacing.x6}px`,
			'.ss__search__sidebar, .ss__search__content': {
				minWidth: '1px',
			},
			'.ss__search__sidebar': {
				flex: '0 1 auto',
			},
			'.ss__search__content': {
				flex: '1 1 0%',
				gap: `${custom.spacing.x4}px`,
			},
			'.ss__results': {
				margin: `0 0 ${custom.spacing.x2}px 0`,
			},
		},
		[`@media (max-width: ${mobileBp}px)`]: {
			'.ss__search__main-section': {
				'.ss__toolbar': {
					'.ss__select': {
						flex: '1 1 0%',
					},
				},
			},
		},
	});
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
		'search toolbar.top': {
			layout: [['searchHeader'], ['banner.header']],
		},
		'search toolbar.middle': {
			layout: [['button.sidebar-toggle', 'paginationInfo', '_', 'sortBy', 'perPage'], ['banner.banner']],
		},
		'search sidebar': {
			hideTitleText: true,
		},
	},
	mobile: {
		...searchThemeComponentProps.mobile,
		'search toolbar.middle': {
			layout: [['paginationInfo', '_', 'mobileSidebar'], ['sortBy', 'perPage'], ['banner.banner']],
		},
		'search toolbar.bottom': {
			layout: [['_', 'pagination', '_']],
		},
		'search mobileSidebar': {
			layout: ['filterSummary', 'facets', 'banner.left'],
		},
	},
	tablet: {
		...searchThemeComponentProps.tablet,
		'search toolbar.middle': {
			layout: [['mobileSidebar', 'paginationInfo', '_', 'sortBy', 'perPage'], ['banner.banner']],
		},
		'search mobileSidebar': {
			layout: ['filterSummary', 'facets', 'banner.left'],
		},
	},
	desktop: {
		...searchThemeComponentProps.desktop,
	},
};
