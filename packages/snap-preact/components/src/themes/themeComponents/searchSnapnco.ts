import { SearchSnapncoProps } from '../../components/Templates/SearchSnapnco';
import { ThemeComponent } from '../../providers';

export const searchSnapncoThemeComponentProps: ThemeComponent<'searchSnapnco', SearchSnapncoProps> = {
	default: {
		searchSnapnco: {
			lang: {
				toggleSidebarButtonText: {
					value: ({ sidebarOpenState }) => (sidebarOpenState ? `Close Filters` : 'Show Filters'),
				},
			},
		},
		'searchSnapnco filterSummary': {
			hideTitle: true,
		},
		'searchSnapnco sidebar': {
			layout: [['filterSummary'], ['facets'], ['banner.left']],
		},
		'searchSnapnco button.sidebar-toggle': {
			icon: 'close-thin',
		},
		'searchSnapnco toolbar.top': {
			layout: ['banner.header'],
		},
		'searchSnapnco toolbar.middle': {
			layout: [['banner.banner'], ['searchHeader', '_', 'paginationInfo', 'sortBy']],
		},
		'searchSnapnco toolbar.bottom': {
			layout: [['banner.footer'], ['_', 'pagination', '_']],
		},
		'searchSnapnco results': {
			columns: 4,
		},
	},
	mobile: {
		'searchSnapnco mobileSidebar': {
			openButtonText: 'Filters',
			hideOpenButtonText: false,
		},
		'searchSnapnco toolbar.top': {
			layout: [['banner.header'], ['searchHeader'], ['paginationInfo'], ['banner.banner']],
		},
		'searchSnapnco toolbar.middle': {
			layout: [['mobileSidebar', '_', 'sortBy']],
		},
		'searchSnapnco results': {
			columns: 2,
		},
	},
	tablet: {
		'searchSnapnco toolbar.top': {
			layout: [['banner.header'], ['searchHeader']],
		},
		'searchSnapnco toolbar.middle': {
			layout: [['banner.banner'], ['paginationInfo', '_', 'mobileSidebar'], ['filterSummary']],
		},
		'searchSnapnco sidebar': {
			layout: [['facets'], ['banner.left']],
		},
		'searchSnapnco results': {
			columns: 3,
		},
	},
	desktop: {},
};
