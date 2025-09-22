import { SnapTemplates } from '@searchspring/snap-preact';
import { globalStyles } from './styles';
import deepmerge from 'deepmerge';
import { combineMerge } from '../../snap/src/middleware/functions';
import type { SnapTemplatesConfig } from '@searchspring/snap-preact';

let config: SnapTemplatesConfig = {
	config: {
		siteId: '8uyt2m', // prvb79 // 8uyt2m // c52bzz (for variant options)
		language: 'en',
		currency: 'usd',
		platform: 'other',
	},
	components: {
		// result: {
		// 	CustomResult: async () => (await import('./components/Result')).CustomResult,
		// },
	},
	theme: {
		extends: 'pike',
		//resultComponent: 'CustomResult',
		variables: {
			breakpoints: {
				mobile: 767,
				tablet: 1024,
				desktop: 1280,
			},
			// colors: {
			// 	primary: '#6d7175',
			// 	secondary: '#202223',
			// 	accent: '#333333',
			// },
		},
		style: globalStyles,
		overrides: {
			default: {
				// 'autocompleteLayout': {
				// 	className: '',
				// 	width: '200px',
				// },
				// 'toolbar.top': {
				// 	layout: ['facetsHorizontal']
				// }
				// 'toolbar.bottom': {
				// 	layout: ['loadMore']
				// }
			},
		},
	},
	recommendation: {
		email: {
			Email: {
				component: 'RecommendationEmail',
				//resultComponent: 'EmailResult',
			},
		},
		default: {
			Default: {
				component: 'Recommendation',
			},
		},
		bundle: {
			Bundle: {
				component: 'RecommendationBundleList',
			},
		},
	},
	search: {
		targets: [
			{
				selector: '#searchspring-layout',
				component: 'Search',
			},
		],
		settings: {
			variants: {
				field: 'ss_variants',
			},
			// infinite: {
			// 	backfill: 5,
			// },
		},
	},
	autocomplete: {
		targets: [
			{
				selector: 'input.searchspring-ac',
				component: 'AutocompleteFixed',
			},
		],
	},
};

if (window.mergeSnapConfig) {
	config = deepmerge(config, window.mergeSnapConfig, { arrayMerge: combineMerge });
}

new SnapTemplates(config);

/*

Overrides are taking priority over the theme layouts (responsive) specified within the Search component - but they shouldn't be.
Look into:
			overrides: {
				'toolbar.top': {
					layout: [
						['Banner.header'],
					]
				},
				'toolbar.middle': {
					layout: [
						['_', 'Pagination'],
						['Pagination'],
						['Pagination'],
						['Pagination'],
						['Pagination'],
						['Banner.banner']
					]
				},
			},

*/
