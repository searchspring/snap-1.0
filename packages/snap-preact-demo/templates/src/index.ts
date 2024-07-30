import { SnapTemplates } from '@searchspring/snap-preact';
import { CustomResult } from './components/Result';
import { globalStyles } from './styles';

// import { en_translation, fr_translation } from '@searchspring/snap-preact/translations';

new SnapTemplates({
	config: {
		siteId: '8uyt2m',
		language: 'en',
		currency: 'usd',
		// translations: {
		// 	en: en_translation,
		// 	fr: fr_translation,
		// }
	},
	components: {
		result: {
			CustomResult: () => CustomResult,
			CustomResultSecondary: async () => (await import('./components/Result')).CustomResultSecondary,
		},
		badge: {
			// CustomPill: async () => (await import('./components/Result')).Result,
		},
	},
	themes: {
		myTheme: {
			extends: 'pike',
		},
		global: {
			extends: 'bocachica',
			variables: {
				color: {
					primary: 'red',
					secondary: 'blue',
				},
				breakpoints: [0, 768, 1024, 1280],
			},
			style: globalStyles,
			overrides: {
				components: {
					toolbar: {
						named: {
							topToolBar: {
								hidePagination: true,
							},
							bottomToolBar: {
								hideFilterSummary: false,
								hidePerPage: false,
								hideSortBy: false,
								hideLayoutSelector: false,
							},
						},
					},
				},
				layoutOptions: [
					{
						value: 2,
						label: 'two',
						overrides: {
							components: {
								toolbar: {
									hideSortBy: true,
								},
								results: {
									named: {
										searchResults: { columns: 2 },
									},
								},
							},
						},
					},
					{
						value: 4,
						label: 'four',
						default: true,
						overrides: {
							components: {
								results: {
									named: {
										searchResults: { columns: 4 },
									},
								},
							},
						},
					},
				],
				responsive: [
					{
						components: {
							pagination: {
								hideLast: true,
							},
						},
						// layoutOptions: [],
					},
					{
						// layoutOptions: [],
					},
					{},
					{},
				],
			},
		},
		otherTheme: {
			extends: 'pike',
		},
	},
	search: {
		targets: [
			{
				selector: '#searchspring-layout',
				component: 'Search',
				resultComponent: 'CustomResultSecondary',
			},
		],
	},
	recommendation: {
		settings: {
			branch: BRANCHNAME,
		},
		templates: {
			Recs: {
				component: 'Recommendation',
				// resultComponent: 'CustomResultSecondary',
			},
		},
	},
	autocomplete: {
		inputSelector: 'input.searchspring-ac, .thing2',
		targets: [
			{
				// does this force usage to after the input only?
				selector: 'input.searchspring-ac',
				theme: 'myTheme',
				component: 'Autocomplete',
				// resultComponent: 'CustomResult',
			},
		],
	},
});
