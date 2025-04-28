import { SnapTemplates } from '@searchspring/snap-preact';
import { globalStyles } from './styles';
import deepmerge from 'deepmerge';
import { combineMerge } from '../../snap/src/middleware/functions';
import { SnapTemplatesConfig } from '@searchspring/snap-preact';

let config: SnapTemplatesConfig = {
	config: {
		siteId: '8uyt2m',
		language: 'en',
		currency: 'usd',
		platform: 'other',
	},
	components: {
		result: {
			CustomResult: async () => (await import('./components/Result')).CustomResult,
		},
	},
	themes: {
		global: {
			extends: 'base',
			variables: {
				breakpoints: [768, 1024, 1280],
				// colors: {
				// 	primary: '#6d7175',
				// 	secondary: '#202223',
				// 	accent: '#333333',
				// },
			},
			style: globalStyles,
			overrides: {
				components: {
					// "searchHorizontal toolbar.top": {
					// 	hideLayoutSelector: false,
					// },
					// 'toolbar.top': {
					// 	// layout: [['SearchHeader'], [ 'PaginationInfo', 'Separator', 'PerPage', 'SortBy','toggleSideBarButton']],
					// },
					// button: {},
					// recommendation: {
					// 	lazyRender: {
					// 		enabled: false,
					// 	},
					// },
					// recommendationBundle: {
					// 	lazyRender: {
					// 		enabled: false,
					// 	},
					// },
					// noResults: {
					// 	templates: {
					// 		recommendation: {
					// 			enabled: true,
					// 			component: 'Recommendation',
					// 			config: {
					// 				tag: 'similar',
					// 			},
					// 		},
					// 	},
					// },
					// toolbar: {
					// 	hidePerPage: true,
					// },
					// 'toolbar.top': {
					// 	hidePerPage: true,
					// 	hidePagination: true,
					// },
					// 'search toolbar.top': {
					// 	hidePerPage: false,
					// 	hidePagination: false,
					// },
					// 'search toolbar': {
					// 	hidePerPage: false,
					// },
					// 'search toolbar.bottom': {
					// 	hidePerPage: false,
					// 	hidePagination: false,
					// },
				},
				// layoutOptions: [
				// 	{
				// 		value: 2,
				// 		label: 'two',
				// 		overrides: {
				// 			components: {
				// 				toolbar: {
				// 					hideSortBy: true,
				// 				},
				// 				results: {
				// 					columns: 2,
				// 				},
				// 			},
				// 		},
				// 	},
				// 	{
				// 		value: 4,
				// 		label: 'four',
				// 		default: true,
				// 		overrides: {
				// 			components: {
				// 				results: {
				// 					columns: 4,
				// 				},
				// 			},
				// 		},
				// 	},
				// ],
			},
		},
	},
	recommendation: {
		email: {
			Email: {
				component: 'RecommendationEmail',
			},
		},
		default: {
			Default: {
				component: 'Recommendation',
			},
		},
	},
	search: {
		targets: [
			{
				selector: '#searchspring-layout',
				component: 'Search_Boca',
			},
		],
	},
	autocomplete: {
		targets: [
			{
				selector: 'input.searchspring-ac',
				component: 'AutocompleteTemplate',
			},
		],
	},
};

if (window.mergeSnapConfig) {
	config = deepmerge(config, window.mergeSnapConfig, { arrayMerge: combineMerge });
}

new SnapTemplates(config);
