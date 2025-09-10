import { AutocompleteStoreConfigSettings, SearchStoreConfigSettings, StorageStore, StorageType } from '@searchspring/snap-store-mobx';
import { observable, makeObservable } from 'mobx';
import Color from 'color';
import deepmerge from 'deepmerge';

import { TemplatesStore, TEMPLATE_STORE_KEY, TargetMap, RecsTemplateTypes, TemplateTarget } from '../TemplateStore';
import { AutocompleteController, AutocompleteControllerConfig, SearchController, SearchControllerConfig } from '@searchspring/snap-controller';

import type { AbstractionGroup } from '../../../types';
import { ThemeVariables, ThemeVariablesPartial } from '../../../../components/src';
import { TargetStore } from '../TargetStore';
import { AutocompleteTargetConfig, SearchTargetConfig, SnapTemplatesConfig } from '../../SnapTemplates';
import { configUI, themeUI, searchControllerUI, autocompleteControllerUI, updateAutocompleteControllerState } from './uiAbstractions';
import { CurrencyCodes, LanguageCodes } from '../LibraryStore';

const THEME_VARIABLE_DEFAULTS: ThemeVariables = {
	breakpoints: {
		mobile: 600,
		tablet: 900,
		desktop: 1200,
	},
	colors: {
		text: '#333333',
		primary: '#1D4990',
		secondary: '#6187ae',
		accent: '#00AEEF',
	},
};

export type EditorTabs = 'templates' | 'configuration';

type EditorState = {
	hidden: boolean;
	activeTab: EditorTabs;
	activeDomSelector: string;
	searchSelector: string;
	autocompleteSelector: string;
};

type EditorControllerConfigs = {
	search?: SearchStoreConfigSettings;
	autocomplete?: AutocompleteStoreConfigSettings;
};

type EditorInitialThemeConfig = {
	extends: string;
	variables: ThemeVariables;
};

type EditorTargets = {
	search?: TemplateTarget[];
	autocomplete?: TemplateTarget[];
};

type EditorOverridesThemeConfig = {
	extends?: string;
	variables?: ThemeVariablesPartial;
};

export class TemplateEditorStore {
	storage: StorageStore;
	state: EditorState = {
		hidden: false,
		activeTab: 'configuration',
		activeDomSelector: '',
		searchSelector: '',
		autocompleteSelector: '',
	};
	overrides: {
		config: SnapTemplatesConfig['config'];
		controller: EditorControllerConfigs;
		theme: EditorOverridesThemeConfig;
		targets: EditorTargets;
	} = {
		config: {},
		controller: {},
		theme: {},
		targets: {},
	};
	initial: {
		config: SnapTemplatesConfig['config'] & { language: LanguageCodes; currency: CurrencyCodes };
		controller: EditorControllerConfigs;
		theme: EditorInitialThemeConfig;
		targets: EditorTargets;
	} = {
		config: {
			language: 'en',
			currency: 'usd',
		},
		controller: {},
		theme: {
			extends: 'base',
			variables: THEME_VARIABLE_DEFAULTS,
		},
		targets: {},
	};

	tabs: EditorTabs[] = ['templates', 'configuration'];

	templatesStore: TemplatesStore;

	uiAbstractions: {
		templates: {
			config: AbstractionGroup[];
			theme: AbstractionGroup[];
		};
		controllers: {
			search: AbstractionGroup<SearchController>[];
			autocomplete: AbstractionGroup<AutocompleteController>[];
		};
	} = {
		templates: {
			config: configUI(this),
			theme: themeUI(this),
		},
		controllers: {
			search: searchControllerUI(this),
			autocomplete: autocompleteControllerUI(this),
		},
	};

	constructor({ templatesStore }: { templatesStore: TemplatesStore }) {
		this.templatesStore = templatesStore;
		this.storage = new StorageStore({ type: StorageType.local, key: TEMPLATE_STORE_KEY });
		this.state = this.storage.get('editor') || this.state;
		this.overrides = this.storage.get('overrides') || this.overrides;

		// prevent empty objects in overrides
		this.overrides.config = this.overrides.config || {};
		this.overrides.controller = this.overrides.controller || {};
		this.overrides.theme = this.overrides.theme || {};

		this.initial.config = deepmerge(this.initial.config, templatesStore.config.config);
		this.initial.controller = {}; // set when registering controllers

		// set initial targets
		this.initial.targets.search = templatesStore.config.search?.targets ?? [];
		this.initial.targets.autocomplete = templatesStore.config.autocomplete?.targets ?? [];

		const themeConfig = JSON.parse(JSON.stringify(templatesStore.config.theme || {})) as SnapTemplatesConfig['theme'];
		delete themeConfig.style;
		delete themeConfig.overrides;
		this.initial.theme = deepmerge(this.initial.theme, themeConfig);

		// normalize all colors to hexadecimal format using the Color library
		Object.keys(this.initial.theme.variables.colors).forEach((key) => {
			const color = this.initial.theme.variables.colors[key as keyof typeof this.initial.theme.variables.colors];
			this.initial.theme.variables.colors[key as keyof typeof this.initial.theme.variables.colors] = Color(color).hex();
		});

		// switch to the theme set in the initial config if no override is set
		this.setTheme(this.overrides.theme.extends ?? this.initial.theme.extends);
		// initialize themes with overrides
		this.setThemeOverride({ path: [], value: undefined });

		this.storage.set('initial', this.initial);

		makeObservable(this, {
			state: observable,
			overrides: observable,
			initial: observable,
			uiAbstractions: observable,
		});

		// makeObservable(this.overrides.config, {
		// 	language: observable,
		// 	currency: observable,
		// });
	}

	switchTabs(tab: EditorTabs) {
		this.state.activeTab = tab;
		this.storage.set('editor', this.state);
	}

	toggleHide(hide: boolean) {
		this.state.hidden = hide;
		this.storage.set('editor', this.state);
	}

	setConfigOverride(obj: { path: string[]; value: unknown }) {
		const { path, value } = obj;

		// grab the initial config value using the path provided
		const initialValue = path.reduce((acc: any, key) => {
			return acc && acc[key as keyof typeof acc];
		}, this.initial.config);

		const configOverrides = generateObject<SnapTemplatesConfig['config']>(path, value == initialValue ? undefined : value);

		const updatedOverrides = removeEmptyObjects(deepmerge(this.overrides.config || {}, configOverrides));
		this.overrides.config = updatedOverrides;
		this.storage.set('overrides.config', updatedOverrides);

		// TODO: handle setting language and currency separately
		if (path[0] === 'language') {
			this.templatesStore.setLanguage((value || initialValue) as LanguageCodes).then(() => {
				this.storage.set('overrides.config', updatedOverrides);
			});
		} else if (path[0] === 'currency') {
			this.templatesStore.setCurrency((value || initialValue) as CurrencyCodes).then(() => {
				this.storage.set('overrides.config', updatedOverrides);
			});
		}
	}

	setTheme(themeName: string) {
		const updatedConfig: { extends?: string } = { extends: themeName };
		if (this.initial.theme.extends === themeName) {
			updatedConfig.extends = undefined;
		}

		this.overrides.theme = deepmerge(this.overrides.theme, updatedConfig);

		this.storage.set('overrides.theme', this.overrides.theme);

		// loop through all targets in templateStore and call setTheme on them all
		Object.keys(this.templatesStore.targets).forEach((feature) => {
			// loop through all the features (search, autocomplete, recommendations)
			if (feature == 'recommendation') {
				const recommendationObj = this.templatesStore.targets[feature as keyof typeof this.templatesStore.targets] as {
					[key in RecsTemplateTypes]: TargetMap;
				};
				Object.keys(recommendationObj).forEach((recType) => {
					const targetMap = recommendationObj[recType as keyof typeof recommendationObj];
					Object.keys(targetMap).forEach((target) => {
						const targetStore = targetMap[target as keyof typeof targetMap] as TargetStore;
						targetStore.setTheme(themeName, 'library');
					});
				});
			} else {
				const targetMap = this.templatesStore.targets[feature as keyof typeof this.templatesStore.targets] as TargetMap;
				Object.keys(targetMap).forEach((target) => {
					const targetStore = targetMap[target as keyof typeof targetMap] as TargetStore;
					targetStore.setTheme(themeName, 'library');
				});
			}
		});
	}

	setThemeOverride = (obj: { path: string[]; value: unknown }) => {
		const { path, value } = obj;

		// grab the initial config value using the path provided
		const initialValue = path.reduce((acc: any, key) => {
			return acc && acc[key as keyof typeof acc];
		}, this.initial.theme);

		const themeConfigOverrides = generateObject<EditorOverridesThemeConfig>(path, value == initialValue ? undefined : value);

		this.overrides.theme = removeEmptyObjects(deepmerge(this.overrides.theme || {}, themeConfigOverrides));
		this.storage.set('overrides.theme', this.overrides.theme);

		const mergedOverrides = deepmerge(this.initial.theme || {}, this.overrides.theme || {});

		// update all themes with the new overrides
		Object.keys(this.templatesStore.themes.library).forEach((themeName) => {
			const themeStore = this.templatesStore.themes.library[themeName];
			themeStore.setEditorOverrides({ variables: mergedOverrides.variables || {} });
		});
	};

	setControllerOverride<ControllerType extends SearchController | AutocompleteController>(obj: {
		path: string[];
		value?: unknown;
		controller: ControllerType;
	}) {
		const { path, value, controller } = obj;
		const type = controller.type as keyof EditorControllerConfigs;

		const controllerOverrides = {
			[type]: generateObject(path, value),
		};

		this.overrides.controller = deepmerge(this.overrides.controller || {}, controllerOverrides);

		// recursively remove empty objects and undefined values from this.overrides.controller
		this.overrides.controller = removeEmptyObjects(this.overrides.controller);

		this.storage.set(`overrides.controller.${type}`, this.overrides.controller[type]);

		const mergedConfig = deepmerge<any>(
			{
				settings: this.initial.controller[type] || {},
			},
			{
				settings: this.overrides.controller[type] || {},
			}
		);

		controller?.setConfig(mergedConfig);
	}

	// ['variables', 'colors', 'primary']
	// store.setThemeOverride({ path: ['variables', 'breakpoints', 'mobile'], value });
	// ['search', '[0]', 'selector']
	// store.setTargetOverride({ path: ['search', '[0]', 'selector'], value });
	// store.setTargetOverride({ path: ['search', '[0]'], value });  --- value = {...}
	setTargetOverride = (obj: { path: string[]; value: unknown }) => {
		const { path, value } = obj;

		/*

		this.initial.targets = {
			search: [
				{...},
				{...},
			]
		}

		*/

		// grab the initial config value using the path provided
		const initialValue = path.reduce((acc: any, key) => {
			// handle array index access
			// e.g., [0], [1], etc.
			// if the key is in the format of [index], convert it to a number and access the array
			// otherwise, access the object property as usual
			try {
				const keyIndex = Number(key.replace(/^\[(\d+)\]$/, '$1'));
				if (Number.isNaN(keyIndex)) {
					// not an index position
					return acc && acc[key as keyof typeof acc];
				} else {
					// we have a string key - use it to set the accumulator
					return acc && acc[keyIndex];
				}
			} catch (error) {
				// handle error
				console.error('Error accessing path in initial targets:', error);
				return undefined;
			}
		}, this.initial.targets);

		const targetOverrides = generateObject<EditorTargets>(path, value == initialValue ? undefined : value);

		this.overrides.targets = removeEmptyObjects(deepmerge(this.overrides.targets || {}, targetOverrides));
		this.storage.set('overrides.targets', this.overrides.targets);

		// const mergedOverrides = deepmerge(this.initial.targets || {}, this.overrides.targets || {});

		// TODO: something fancy around refreshing or re-targeting...

		// if the component or resultComponent changed we need to tell the targetStore about it via:
		// target.setComponent
		// target.setResultComponent
	};

	registerController<ControllerType extends SearchController | AutocompleteController>(controller: ControllerType) {
		const settingsCopy = JSON.parse(JSON.stringify(controller.config.settings)) as SearchStoreConfigSettings | AutocompleteStoreConfigSettings;

		const type = controller.type as keyof EditorControllerConfigs;

		this.initial.controller[type] = settingsCopy;

		this.storage.set(`initial.controller.${type}`, this.initial.controller[type]);

		if (type === 'autocomplete') {
			const mergedConfig = deepmerge<AutocompleteControllerConfig>(controller.config as AutocompleteControllerConfig, {
				settings: this.overrides.controller[type] || {},
			});

			controller.setConfig(mergedConfig);

			updateAutocompleteControllerState(controller as AutocompleteController);

			// update the store selector
			// TODO: move this to override
			this.state.autocompleteSelector = mergedConfig.selector || '';
			// create a targeter (since targeters are not created when in editMode)
		}

		if (type === 'search') {
			const mergedConfig = deepmerge<SearchControllerConfig>(controller.config as SearchControllerConfig, {
				settings: this.overrides.controller[type] || {},
			});

			controller.setConfig(mergedConfig);

			// @ts-ignore - accessing a private property
			const clientGlobals = controller.client.config.globals || {};

			// controller globals > client globals > templates config
			const siteId = controller.config.globals?.siteId || clientGlobals?.siteId || this.templatesStore.config.config.siteId || '';

			if (this.initial.config.siteId != siteId) {
				this.storage.set('overrides.config.siteId', siteId);
			}

			// this.state.searchSelector = controller.targeters[0];

			// create a targeter (since targeters are not created when in editMode)
		}
	}

	getTargets(feature?: 'search' | 'autocomplete') {
		console.log('this.templatesStore', this.templatesStore);
		const storeTargets = this.templatesStore.targets;
		const searchTargets = Object.keys(storeTargets.search || {}).map((target) => ({
			type: 'search',
			target,
			template: storeTargets.search[target],
			selector: storeTargets.search[target].selector,
		}));
		const autocompleteTargets = Object.keys(storeTargets.autocomplete || {}).map((target) => ({
			type: 'autocomplete',
			target,
			template: storeTargets.autocomplete[target],
			selector: storeTargets.autocomplete[target].selector,
		}));
		const recommendationBundleTargets = Object.keys(storeTargets.recommendation.bundle || {}).map((target) => ({
			type: 'recommendation/bundle',
			target,
			template: storeTargets.recommendation.bundle[target],
			selector: storeTargets.recommendation.bundle[target].selector,
		}));
		const recommendationDefaultTargets = Object.keys(storeTargets.recommendation.default || {}).map((target) => ({
			type: 'recommendation/default',
			target,
			template: storeTargets.recommendation.default[target],
			selector: storeTargets.recommendation.default[target].selector,
		}));
		const recommendationEmailTargets = Object.keys(storeTargets.recommendation.email || {}).map((target) => ({
			type: 'recommendation/email',
			target,
			template: storeTargets.recommendation.email[target],
			selector: storeTargets.recommendation.email[target].selector,
		}));

		if (feature === 'search') {
			return searchTargets;
		}

		if (feature === 'autocomplete') {
			return autocompleteTargets;
		}

		const targets = [
			...searchTargets,
			...autocompleteTargets,
			...recommendationBundleTargets,
			...recommendationDefaultTargets,
			...recommendationEmailTargets,
		];

		return targets;
	}

	generateTemplatesConfig(): SnapTemplatesConfig {
		const originalConfig = JSON.parse(JSON.stringify(this.templatesStore.config)) as SnapTemplatesConfig;
		delete originalConfig.search;
		delete originalConfig.autocomplete;
		delete originalConfig.recommendation;
		delete originalConfig.components;

		const storageConfigData = (this.storage.get('overrides.config') || {}) as SnapTemplatesConfig['config'];
		const themeConfigData = (this.storage.get('overrides.theme') || {}) as SnapTemplatesConfig['theme'];
		const overrideConfig: SnapTemplatesConfig = { config: storageConfigData, theme: themeConfigData };

		// const searchTargeterData = (this.storage.get('overrides.targeters.search') || {});

		const targets = this.getTargets();
		const searchTargets = targets
			.filter((target) => target.type === 'search')
			.map(
				(target) =>
					({
						selector: target.selector,
						component: target.template.component,
						resultComponent: target.template.resultComponent,
					} as SearchTargetConfig)
			);
		const autocompleteTargets = targets
			.filter((target) => target.type === 'autocomplete')
			.map(
				(target) =>
					({
						selector: target.selector,
						component: target.template.component,
						resultComponent: target.template.resultComponent,
					} as AutocompleteTargetConfig)
			);

		// add search controller settings
		if (searchTargets.length) {
			overrideConfig.search = {
				targets: searchTargets,
				settings: this.overrides.controller.search || {},
			};
		}

		// add autocomplete controller settings
		if (autocompleteTargets.length) {
			overrideConfig.autocomplete = {
				targets: autocompleteTargets,
				settings: this.overrides.controller.autocomplete || {},
			};
		}

		const config: SnapTemplatesConfig = deepmerge(originalConfig, overrideConfig);

		return config;
	}
}

function removeEmptyObjects(object: any) {
	// Create a recursive cleaning function that works with any object
	const cleanObj = (obj: any): any => {
		if (obj === null || typeof obj !== 'object') {
			return obj;
		}

		const result: Record<string, any> = {};

		Object.entries(obj).forEach(([key, value]) => {
			// Skip undefined values
			if (value === undefined) return;

			if (value !== null && typeof value === 'object') {
				// Recursively clean nested objects
				const cleanedValue = cleanObj(value);

				// Only add non-empty objects
				if (Object.keys(cleanedValue).length > 0) {
					result[key] = cleanedValue;
				}
			} else {
				// Keep non-object values
				result[key] = value;
			}
		});

		return result;
	};

	// Apply the cleaning function to our controller object
	return cleanObj(object);
}

function generateObject<T>(path: string[], value: unknown): T {
	// modify this function to handle array index access
	// e.g., [0], [1], etc.
	// if the key is in the format of [index], convert it to a number and create an array
	// otherwise, create an object property as usual
	// Example:
	// path = ['search', '[0]', 'selector'], value = '#new-selector'
	// returns { search: [ { selector: '#new-selector' } ] }
	// Example:
	// path = ['search', '[0]'], value = { selector: '#new-selector', component: 'Search' }
	// returns { search: [ { selector: '#new-selector', component: 'Search' } ] }
	// Example:
	// path = ['search', 'stuff', 'thing'], value = 'whatever'
	// returns { search: { stuff: { thing: 'whatever' } } }

	// Example:
	// path = ['[0]'], value = { selector: '#new-selector', component: 'Search' }
	// returns [ { selector: '#new-selector', component: 'Search' } ]

	return path
		.slice()
		.reverse()
		.reduce((res, key) => {
			// Check if key is array index notation like [0], [1], etc.
			const arrayIndexMatch = key.match(/^\[(\d+)\]$/);

			if (arrayIndexMatch) {
				// Extract the index number
				const index = parseInt(arrayIndexMatch[1], 10);
				// Create an array with the element at the specified index
				const arr: unknown[] = [];
				arr[index] = res;
				return arr;
			}

			// Regular object property
			return {
				[key]: res,
			};
		}, value ?? {}) as T;
}
