import { SnapTemplates, SnapTemplatesConfig } from '@athoscommerce/snap-preact';
import deepmerge from 'deepmerge';
import { combineMerge } from '../../snap/src/middleware/functions';
import { globalStyles } from './styles';
import { getDemoConfig } from '../../shared/demoConfig';

const { siteId, clientConfig } = getDemoConfig();

let templatesConfig: SnapTemplatesConfig = {
	config: {
		siteId: siteId,
		language: 'en',
		currency: 'usd',
		platform: 'other',
		client: clientConfig,
	},

	plugins: {
		common: {
			addToCart: {
				function: (data) => console.log('added to cart!', data),
			},
		},
	},
	components: {
		result: {
			CustomResult: async () => (await import('./components/Result')).CustomResult,
		},
	},
	theme: {
		extends: 'base',
		variables: {
			// breakpoints: {
			// 	mobile: 767,
			// 	tablet: 1024,
			// 	desktop: 1280,
			// },
			// colors: {
			// 	primary: '#6d7175',
			// 	secondary: '#202223',
			// 	accent: '#333333',
			// },
		},
		style: globalStyles,
		overrides: {
			default: {
				// 'autocompleteFixed results': {
				// 	columns: 3,
				// 	rows: 2,
				// },
				searchCollapsible: {
					// hideTopToolbar: true,
					hideMiddleToolbar: true,
				},
				'searchCollapsible toolbar.top': {
					layout: [['_', 'searchHeader', '_'], ['banner.header'], ['button.sidebar-toggle', '_', 'paginationInfo', '_', 'sortBy'], ['banner.banner']],
				},
				'searchCollapsible results': {
					columns: 3,
				},
				pagination: {
					pages: 3,
				},
				paginationInfo: {
					infoText: (data) => `We found ${data.pagination?.totalResults} results`,
				},
				'button.sidebar-toggle': {
					icon: false,
					content: (
						<a href="#" className="toggle-btn utility-bar__item toggle-btn--revealed-desktop" data-toggle-filters="">
							<span className="button-icon">
								<svg width="23" height="19" viewBox="0 0 20 20" stroke-width="1.25" fill="none" xmlns="http://www.w3.org/2000/svg">
									<line x1="1" y1="6" x2="19" y2="6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></line>
									<line x1="1" y1="14" x2="19" y2="14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></line>
									<circle cx="7" cy="6" r="3" fill="none" stroke="currentColor"></circle>
									<circle cx="13" cy="14" r="3" fill="none" stroke="currentColor"></circle>
								</svg>
							</span>
							<span>Filter</span>

							<span className="toggle-btn__chevron">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="1.3"
									stroke-linecap="round"
									stroke-linejoin="round"
									className="feather feather-chevron-right"
								>
									<title>Right</title>
									<polyline points="9 18 15 12 9 6"></polyline>
								</svg>
							</span>
						</a>
					),
				},
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
		bundle: {
			Bundle: {
				component: 'RecommendationBundle',
			},
		},
	},
	search: {
		targets: [
			{
				selector: '#athos-layout',
				component: 'SearchCollapsible',
			},
		],
		settings: {
			variants: {
				showDisabledSelectionValues: true,
			},
			// infinite: {
			// 	backfill: 5,
			// },
		},
	},
	autocomplete: {
		targets: [
			{
				inputSelector: 'input.athos-ac',
				component: 'AutocompleteFixed',
			},
		],
		settings: {
			history: {
				limit: 6,
				showResults: true,
			},
			trending: {
				limit: 6,
				showResults: true,
			},
		},
	},
};

if (window.mergeSnapConfig) {
	templatesConfig = deepmerge(templatesConfig, window.mergeSnapConfig, { arrayMerge: combineMerge });
}

new SnapTemplates(templatesConfig);
