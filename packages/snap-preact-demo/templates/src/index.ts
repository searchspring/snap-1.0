import { SnapTemplates } from '@searchspring/snap-preact';
import { globalStyles } from './styles';
import deepmerge from 'deepmerge';
import { combineMerge } from '../../snap/src/middleware/functions';
import type { SnapTemplatesConfig } from '@searchspring/snap-preact';
import { url } from '@searchspring/snap-toolbox';
import { StorageStore } from '@searchspring/snap-store-mobx';

// storage for custom configuration
const configStore = new StorageStore({ type: 'local', key: 'ss-demo-config' });

/*
	configuration and instantiation
 */

let siteId = 'ck4bj7';
let chatWidgetId = 'test-mattel-demo';

// grab siteId out of the URL
const urlObj = url(window.location.href);
const urlSiteIdParam = urlObj.params.query.siteId || urlObj.params.query.siteid;
const urlSearchOriginParam = urlObj.params.query.searchOrigin;
const urlChatOriginParam = urlObj.params.query.chatOrigin;
const urlChatWidgetIdParam = urlObj.params.query.chatWidgetId;

// custom siteId
if (urlSiteIdParam && urlSiteIdParam.match(/[a-zA-Z0-9]{6}/)) {
	siteId = urlSiteIdParam;
	configStore.set('siteId', siteId);

	// clear previously stored storage
	window.localStorage.removeItem('ss-history');
	window.sessionStorage.removeItem('ss-controller-search');
	window.sessionStorage.removeItem('ss-controller-autocomplete');
} else {
	// use siteId from storage
	const storedSiteId = configStore.get('siteId');
	if (storedSiteId) siteId = storedSiteId;
}

// custom search origin
let customSearchOrigin = `https://${siteId}.a.searchspring.io`;
if (urlSearchOriginParam) {
	customSearchOrigin = urlSearchOriginParam;
	configStore.set('origin', urlSearchOriginParam);
} else {
	const storedOrigin = configStore.get('origin');
	if (storedOrigin) customSearchOrigin = storedOrigin;
}

// custom chat origin
let customChatOrigin;
if (urlChatOriginParam) {
	customChatOrigin = urlChatOriginParam;
	configStore.set('chatOrigin', urlChatOriginParam);
} else {
	const storedOrigin = configStore.get('chatOrigin');
	if (storedOrigin) customChatOrigin = storedOrigin;
}

// custom chat widget id
if (urlChatWidgetIdParam) {
	chatWidgetId = urlChatWidgetIdParam;
	configStore.set('chatWidgetId', chatWidgetId);
} else {
	const storedChatWidgetId = configStore.get('chatWidgetId');
	if (storedChatWidgetId) chatWidgetId = storedChatWidgetId;
}

const clientConfig = {
	meta: {
		origin: customSearchOrigin,
	},
	search: {
		origin: customSearchOrigin,
	},
	autocomplete: {
		requesters: {
			suggest: {
				origin: customSearchOrigin,
			},
			legacy: {
				origin: customSearchOrigin,
			},
		},
	},
	finder: {
		origin: customSearchOrigin,
	},
	recommend: {
		origin: customSearchOrigin,
	},
	suggest: {
		origin: customSearchOrigin,
	},
	chat: {},
};

if (customChatOrigin) {
	clientConfig.chat = {
		origin: customChatOrigin,
	};
}

// const siteId = '8uyt2m';

// const clientConfig = {
// 	meta: {
// 		origin: `https://${siteId}.a.searchspring.io`,
// 	},
// 	search: {
// 		origin: `https://${siteId}.a.searchspring.io`,
// 	},
// 	autocomplete: {
// 		requesters: {
// 			suggest: {
// 				origin: `https://${siteId}.a.searchspring.io`,
// 			},
// 			legacy: {
// 				origin: `https://${siteId}.a.searchspring.io`,
// 			},
// 		},
// 	},
// 	finder: {
// 		origin: `https://${siteId}.a.searchspring.io`,
// 	},
// 	recommend: {
// 		origin: `https://${siteId}.a.searchspring.io`,
// 	},
// 	suggest: {
// 		origin: `https://${siteId}.a.searchspring.io`,
// 	},
// };
let config: SnapTemplatesConfig = {
	config: {
		siteId,
		mode: 'development', // should be removed for 'production' usage
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
			breakpoints: {
				mobile: 768,
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
			// default: {
			// 	'facet': {
			// 		rangeInputs: true,
			// 		rangeInputsPrefix: "$",
			// 	}
			// }
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
				resultComponent: 'CustomResult',
			},
		},
	},
	search: {
		targets: [
			{
				selector: '#searchspring-layout',
				component: 'Search',
				resultComponent: 'CustomResult',
			},
		],
	},
	chat: {
		settings: {
			widgetId: chatWidgetId,
		},
		targets: [
			{
				selector: '#searchspring-chat',
				component: 'Chat',
			},
		],
		// settings: {
		// 	filters: {
		// 		fields: {
		// 			'price': {
		// 				filterFormatValue: '$%01.2f - $%01.2f'
		// 			},
		// 			'ss_category_hierarchy': {
		// 				enabled: true,
		// 			}
		// 		}
		// 	},
		// },
	},
	autocomplete: {
		targets: [
			{
				selector: 'input.searchspring-ac',
				component: 'AutocompleteFixed',
				resultComponent: 'CustomResult',
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
