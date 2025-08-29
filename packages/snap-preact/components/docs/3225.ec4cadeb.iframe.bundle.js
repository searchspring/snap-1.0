'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[3225],
	{
		'./src/Templates/Stores/TemplateEditor/TemplateEditorStore.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { TemplateEditorStore: () => TemplateEditorStore });
			var StorageStore = __webpack_require__('../snap-store-mobx/dist/esm/Storage/StorageStore.js'),
				mobx_esm = __webpack_require__('../../node_modules/mobx/dist/mobx.esm.js'),
				node_modules_color = __webpack_require__('../../node_modules/color/index.js'),
				color_default = __webpack_require__.n(node_modules_color),
				cjs = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				cjs_default = __webpack_require__.n(cjs),
				TemplateStore = __webpack_require__('./src/Templates/Stores/TemplateStore.ts');
			var debounce = __webpack_require__('../snap-toolbox/dist/esm/debounce/debounce.js');
			function themeUI(store) {
				return [
					{
						controls: [
							{
								type: 'dropdown',
								label: 'Theme',
								description: 'Theme for styling the templates',
								getDisplayState: () => 'visible',
								getOptions: () => [{ options: Object.keys(store.templatesStore.themes.library).map((theme) => ({ value: theme })) }],
								getValue: () => store.overrides.theme.extends ?? store.initial.theme.extends ?? 'global',
								shouldShowReset: () => void 0 !== store.overrides.theme.extends,
								onValueChange: (value) => {
									store.setTheme(value);
								},
								onReset: () => {
									store.setTheme(store.initial.theme.extends);
								},
							},
						],
					},
					{
						title: 'Breakpoints',
						controls: [
							{
								type: 'number',
								label: 'Mobile Breakpoint',
								description: 'Mobile breakpoint for responsive design',
								getDisplayState: () => 'visible',
								getValue: () => store.overrides.theme.variables?.breakpoints?.mobile ?? store.initial.theme.variables?.breakpoints?.mobile ?? '',
								shouldShowReset: () => void 0 !== store.overrides.theme.variables?.breakpoints?.mobile,
								onValueChange: (value) => {
									store.setThemeOverride({ path: ['variables', 'breakpoints', 'mobile'], value });
								},
								onReset: () => {
									store.setThemeOverride({ path: ['variables', 'breakpoints', 'mobile'], value: void 0 });
								},
							},
							{
								type: 'number',
								label: 'Tablet Breakpoint',
								description: 'Tablet breakpoint for responsive design',
								getDisplayState: () => 'visible',
								getValue: () => store.overrides.theme.variables?.breakpoints?.tablet ?? store.initial.theme.variables?.breakpoints?.tablet ?? '',
								shouldShowReset: () => void 0 !== store.overrides.theme.variables?.breakpoints?.tablet,
								onValueChange: (value) => {
									store.setThemeOverride({ path: ['variables', 'breakpoints', 'tablet'], value });
								},
								onReset: () => {
									store.setThemeOverride({ path: ['variables', 'breakpoints', 'tablet'], value: void 0 });
								},
							},
							{
								type: 'number',
								label: 'Desktop Breakpoint',
								description: 'Desktop breakpoint for responsive design',
								getDisplayState: () => 'visible',
								getValue: () => store.overrides.theme.variables?.breakpoints?.desktop ?? store.initial.theme.variables?.breakpoints?.desktop ?? '',
								shouldShowReset: () => void 0 !== store.overrides.theme.variables?.breakpoints?.desktop,
								onValueChange: (value) => {
									store.setThemeOverride({ path: ['variables', 'breakpoints', 'desktop'], value });
								},
								onReset: () => {
									store.setThemeOverride({ path: ['variables', 'breakpoints', 'desktop'], value: void 0 });
								},
							},
						],
					},
					{
						title: 'Colors',
						controls: [
							{
								type: 'color',
								label: 'Text Color',
								description: 'Text color for the theme',
								getDisplayState: () => 'visible',
								getValue: () => store.overrides.theme.variables?.colors?.text ?? store.initial.theme.variables?.colors?.text ?? '',
								shouldShowReset: () => void 0 !== store.overrides.theme.variables?.colors?.text,
								onValueChange: (0, debounce.s)((value) => {
									store.setThemeOverride({ path: ['variables', 'colors', 'text'], value });
								}, 50),
								onReset: () => {
									store.setThemeOverride({ path: ['variables', 'colors', 'text'], value: void 0 });
								},
							},
							{
								type: 'color',
								label: 'Primary Color',
								description: 'Primary color for the theme',
								getDisplayState: () => 'visible',
								getValue: () => store.overrides.theme.variables?.colors?.primary ?? store.initial.theme.variables?.colors?.primary ?? '',
								shouldShowReset: () => void 0 !== store.overrides.theme.variables?.colors?.primary,
								onValueChange: (0, debounce.s)((value) => {
									store.setThemeOverride({ path: ['variables', 'colors', 'primary'], value });
								}, 50),
								onReset: () => {
									store.setThemeOverride({ path: ['variables', 'colors', 'primary'], value: void 0 });
								},
							},
							{
								type: 'color',
								label: 'Secondary Color',
								description: 'Secondary color for the theme',
								getDisplayState: () => 'visible',
								getValue: () => store.overrides.theme.variables?.colors?.secondary ?? store.initial.theme.variables?.colors?.secondary ?? '',
								shouldShowReset: () => void 0 !== store.overrides.theme.variables?.colors?.secondary,
								onValueChange: (0, debounce.s)((value) => {
									store.setThemeOverride({ path: ['variables', 'colors', 'secondary'], value });
								}, 50),
								onReset: () => {
									store.setThemeOverride({ path: ['variables', 'colors', 'secondary'], value: void 0 });
								},
							},
							{
								type: 'color',
								label: 'Accent Color',
								description: 'Accent color for the theme',
								getDisplayState: () => 'visible',
								getValue: () => store.overrides.theme.variables?.colors?.accent ?? store.initial.theme.variables?.colors?.accent ?? '',
								shouldShowReset: () =>
									Boolean(store.overrides.theme.variables?.colors?.accent) &&
									store.overrides.theme.variables?.colors?.accent !== store.initial.theme.variables?.colors?.accent,
								onValueChange: (0, debounce.s)((value) => {
									store.setThemeOverride({ path: ['variables', 'colors', 'accent'], value });
								}, 50),
								onReset: () => {
									store.setThemeOverride({ path: ['variables', 'colors', 'accent'], value: void 0 });
								},
							},
						],
					},
				];
			}
			function searchControllerUI(store) {
				return [
					{
						title: 'Result Display Options',
						description: '',
						collapsible: !0,
						controls: [
							{
								type: 'checkbox',
								label: 'Infinite Scroll',
								description: 'Enable infinite scroll',
								getValue: (controller) =>
									!!controller?.store.config.settings?.infinite &&
									(void 0 === controller.store.config.settings?.infinite?.enabled || controller.store.config.settings.infinite.enabled),
								shouldShowReset: () => {
									const initialConfig = store.initial.controller.search?.infinite,
										initialEnabled = Boolean(void 0 !== initialConfig?.enabled ? initialConfig.enabled : initialConfig);
									return (
										Boolean(void 0 !== store.overrides.controller.search?.infinite?.enabled) &&
										initialEnabled !== store.overrides.controller.search?.infinite?.enabled
									);
								},
								onValueChange: (value, controller) => {
									void 0 !== value && controller && store.setControllerOverride({ path: ['infinite', 'enabled'], value: Boolean(value), controller });
								},
								onReset: (controller) => {
									controller && store.setControllerOverride({ path: ['infinite'], controller });
								},
							},
						],
					},
				];
			}
			function autocompleteControllerUI(store) {
				return [
					{
						title: 'Terms',
						description: '',
						controls: [
							{
								type: 'dropdown',
								label: 'History Terms',
								description: '',
								getOptions: () => [
									{
										options: [
											{ value: 'Disabled' },
											{ value: 1 },
											{ value: 2 },
											{ value: 3 },
											{ value: 4 },
											{ value: 5 },
											{ value: 6 },
											{ value: 7 },
											{ value: 8 },
											{ value: 9 },
											{ value: 10 },
										],
									},
								],
								getValue: (controller) =>
									controller?.store.config.settings?.history?.enabled ? controller.store.config.settings.history.limit ?? 'Disabled' : 'Disabled',
								shouldShowReset: () => {
									const initialConfig = store.initial.controller.autocomplete?.history,
										initialEnabled = Boolean(
											void 0 !== initialConfig?.enabled ? initialConfig.enabled : initialConfig?.limit && initialConfig.limit > 0
										),
										overrideConfig = store.overrides.controller.autocomplete?.history,
										overrideEnabled = Boolean(void 0 !== overrideConfig?.enabled);
									return (overrideEnabled && initialEnabled !== overrideEnabled) || initialConfig?.limit !== overrideConfig?.limit;
								},
								onValueChange: (value, controller) => {
									if (void 0 === value || !controller) return;
									const initialConfig = store.initial.controller.autocomplete?.history,
										initialValue = initialConfig?.enabled ? initialConfig?.limit : 'Disabled';
									'Disabled' === value && 'Disabled' !== initialValue
										? store.setControllerOverride({ path: ['history'], value: { enabled: !1, limit: void 0, showResults: void 0 }, controller })
										: 'Disabled' !== value && 'Disabled' === initialValue
										? store.setControllerOverride({ path: ['history'], value: { enabled: !0, limit: Number(value) }, controller })
										: store.setControllerOverride({ path: ['history'], value: { enabled: void 0, limit: void 0, showResults: void 0 }, controller }),
										updateAutocompleteControllerState(controller);
								},
								onReset: (controller) => {
									if (!controller) return;
									const resetValues = { enabled: void 0, limit: void 0, showResults: void 0 };
									store.initial.controller.autocomplete?.history?.enabled && delete resetValues.showResults,
										store.setControllerOverride({ path: ['history'], value: resetValues, controller }),
										updateAutocompleteControllerState(controller);
								},
							},
							{
								type: 'dropdown',
								label: 'Trending Terms',
								description: '',
								getOptions: () => [
									{
										options: [
											{ value: 'Disabled' },
											{ value: 1 },
											{ value: 2 },
											{ value: 3 },
											{ value: 4 },
											{ value: 5 },
											{ value: 6 },
											{ value: 7 },
											{ value: 8 },
											{ value: 9 },
											{ value: 10 },
										],
									},
								],
								getValue: (controller) =>
									controller?.store.config.settings?.trending?.enabled ? controller.store.config.settings.trending.limit ?? 'Disabled' : 'Disabled',
								shouldShowReset: () => {
									const initialConfig = store.initial.controller.autocomplete?.trending,
										initialEnabled = Boolean(
											void 0 !== initialConfig?.enabled ? initialConfig.enabled : initialConfig?.limit && initialConfig.limit > 0
										),
										overrideConfig = store.overrides.controller.autocomplete?.trending,
										overrideEnabled = Boolean(void 0 !== overrideConfig?.enabled);
									return overrideEnabled && (initialEnabled !== overrideEnabled || initialConfig?.limit !== overrideConfig?.limit);
								},
								onValueChange: async (value, controller) => {
									if (void 0 === value || !controller) return;
									const initialConfig = store.initial.controller.autocomplete?.trending,
										initialValue = initialConfig?.enabled ? initialConfig?.limit : 'Disabled';
									'Disabled' === value && 'Disabled' !== initialValue
										? store.setControllerOverride({ path: ['trending'], value: { enabled: !1, limit: void 0, showResults: void 0 }, controller })
										: ('Disabled' !== value && 'Disabled' === initialValue) || ('Disabled' !== value && initialValue !== value)
										? store.setControllerOverride({ path: ['trending'], value: { enabled: !0, limit: Number(value) }, controller })
										: store.setControllerOverride({ path: ['trending'], value: { enabled: void 0, limit: void 0, showResults: void 0 }, controller }),
										updateAutocompleteControllerState(controller);
								},
								onReset: (controller) => {
									if (!controller) return;
									const resetValues = { enabled: void 0, limit: void 0, showResults: void 0 };
									store.initial.controller.autocomplete?.trending?.enabled && delete resetValues.showResults,
										store.setControllerOverride({ path: ['trending'], value: resetValues, controller }),
										updateAutocompleteControllerState(controller);
								},
							},
							{
								type: 'dropdown',
								label: 'Initial Results',
								description: '',
								getDisplayState: (controller) =>
									controller?.store.config.settings?.history?.enabled || controller?.store.config.settings?.trending?.enabled
										? 'visible'
										: 'disabled',
								getOptions: (controller) => {
									const historyEnabled = controller?.store.config.settings?.history?.enabled,
										trendingEnabled = controller?.store.config.settings?.trending?.enabled,
										opts = [{ value: 'Disabled' }];
									return historyEnabled && opts.push({ value: 'History' }), trendingEnabled && opts.push({ value: 'Trending' }), [{ options: opts }];
								},
								getValue: (controller) =>
									controller?.store.config.settings?.trending?.showResults
										? 'Trending'
										: controller?.store.config.settings?.history?.showResults
										? 'History'
										: 'Disabled',
								shouldShowReset: () => {
									let initialValue = 'Disabled';
									const initialConfig = store.initial.controller.autocomplete;
									initialConfig?.trending?.showResults && !1 !== initialConfig?.trending?.enabled
										? (initialValue = 'Trending')
										: initialConfig?.history?.showResults && !1 !== initialConfig?.history?.enabled && (initialValue = 'History');
									let overrideValue = 'Disabled';
									const overrideConfig = store.overrides.controller.autocomplete;
									return (
										overrideConfig?.trending?.showResults && !1 !== overrideConfig?.trending?.enabled
											? (overrideValue = 'Trending')
											: overrideConfig?.history?.showResults && !1 !== overrideConfig?.history?.enabled && (overrideValue = 'History'),
										initialValue !== overrideValue
									);
								},
								onValueChange: (value, controller) => {
									void 0 !== value &&
										controller &&
										('Disabled' === value
											? (store.setControllerOverride({ path: ['history', 'showResults'], controller }),
											  store.setControllerOverride({ path: ['trending', 'showResults'], controller }))
											: 'History' === value
											? (store.setControllerOverride({ path: ['history', 'showResults'], value: !0, controller }),
											  store.setControllerOverride({ path: ['trending', 'showResults'], controller }))
											: 'Trending' === value &&
											  (store.setControllerOverride({ path: ['history', 'showResults'], controller }),
											  store.setControllerOverride({ path: ['trending', 'showResults'], value: !0, controller })),
										updateAutocompleteControllerState(controller));
								},
								onReset: (controller) => {
									controller &&
										(store.setControllerOverride({ path: ['history', 'showResults'], controller }),
										store.setControllerOverride({ path: ['trending', 'showResults'], controller }),
										updateAutocompleteControllerState(controller));
								},
							},
						],
					},
				];
			}
			async function updateAutocompleteControllerState(controller) {
				controller.reset(), controller.store.initHistory();
				const trendingResultsEnabled =
						controller.config.settings?.trending?.enabled ||
						(controller.config.settings?.trending && null == controller.config.settings?.trending?.enabled),
					historyResultsEnabled =
						controller.config.settings?.history?.enabled ||
						(controller.config.settings?.history && null == controller.config.settings?.history?.enabled);
				trendingResultsEnabled
					? (await controller.searchTrending({ limit: controller.config.settings?.trending?.limit }),
					  controller.config.settings?.trending?.showResults &&
							controller.store.trending.length &&
							!controller.store.results &&
							controller.store.trending[0].preview())
					: controller.store.updateTrendingTerms({ trending: { queries: [] } }),
					!trendingResultsEnabled &&
						historyResultsEnabled &&
						controller.config.settings?.history?.showResults &&
						controller.store.history.length &&
						!controller.store.results &&
						controller.store.history[0].preview();
			}
			const THEME_VARIABLE_DEFAULTS = {
				breakpoints: { mobile: 600, tablet: 900, desktop: 1200 },
				colors: { text: '#333333', primary: '#1D4990', secondary: '#6187ae', accent: '#00AEEF' },
			};
			class TemplateEditorStore {
				constructor({ templatesStore }) {
					var store;
					(this.state = { hidden: !1, activeTab: 'configuration' }),
						(this.overrides = { config: {}, controller: {}, theme: {} }),
						(this.initial = {
							config: { language: 'en', currency: 'usd' },
							controller: {},
							theme: { extends: 'base', variables: THEME_VARIABLE_DEFAULTS },
						}),
						(this.tabs = ['templates', 'configuration']),
						(this.uiAbstractions = {
							templates: {
								config:
									((store = this),
									[
										{
											description: '',
											controls: [
												{
													type: 'text',
													label: 'SiteId',
													description: 'site id used to connect to the searchspring service',
													getDisplayState: () => 'disabled',
													getValue: () => store.overrides.config.siteId ?? store.initial.config.siteId ?? '',
													shouldShowReset: () => void 0 !== store.overrides.config.siteId,
													onValueChange: (value) => {
														store.setConfigOverride({ path: ['siteId'], value });
													},
													onReset: () => {
														store.setConfigOverride({ path: ['siteId'], value: void 0 });
													},
												},
												{
													type: 'dropdown',
													label: 'Platform',
													description: 'Storefront platform used for the project',
													getDisplayState: () => 'disabled',
													getOptions: () => [
														{
															options: [
																{ label: 'Shopify', value: 'shopify' },
																{ label: 'BigCommerce', value: 'bigCommerce' },
																{ label: 'Magento 2', value: 'magento2' },
																{ label: 'Other', value: 'other' },
															],
														},
													],
													getValue: () => store.overrides.config.platform || store.initial.config.platform || 'other',
													shouldShowReset: () => void 0 !== store.overrides.config.platform,
													onValueChange: (value) => {
														store.setConfigOverride({ path: ['platform'], value });
													},
													onReset: () => {
														store.setConfigOverride({ path: ['platform'], value: void 0 });
													},
												},
												{
													type: 'dropdown',
													label: 'Language',
													description: 'Language used for the project',
													getDisplayState: () => 'visible',
													getOptions: () => [
														{
															options: [
																{ label: 'English', value: 'en' },
																{ label: 'French', value: 'fr' },
																{ label: 'Spanish', value: 'es' },
															],
														},
													],
													getValue: () => store.overrides.config.language || store.initial.config.language || 'en',
													shouldShowReset: () => void 0 !== store.overrides.config.language,
													onValueChange: (value) => {
														store.setConfigOverride({ path: ['language'], value });
													},
													onReset: async () => {
														store.setConfigOverride({ path: ['language'], value: void 0 });
													},
												},
												{
													type: 'dropdown',
													label: 'Currency',
													description: 'Currency used for the project',
													getDisplayState: () => 'visible',
													getOptions: () => [
														{
															options: [
																{ label: 'USD', value: 'usd' },
																{ label: 'EUR', value: 'eur' },
																{ label: 'AUD', value: 'aud' },
															],
														},
													],
													getValue: () => store.overrides.config.currency || store.initial.config.currency || 'usd',
													shouldShowReset: () => void 0 !== store.overrides.config.currency,
													onValueChange: async (value) => {
														store.setConfigOverride({ path: ['currency'], value });
													},
													onReset: async () => {
														store.setConfigOverride({ path: ['currency'], value: void 0 });
													},
												},
											],
										},
									]),
								theme: themeUI(this),
							},
							controllers: { search: searchControllerUI(this), autocomplete: autocompleteControllerUI(this) },
						}),
						(this.setThemeOverride = (obj) => {
							const { path, value } = obj,
								initialValue = path.reduce((acc, key) => acc && acc[key], this.initial.theme),
								themeConfigOverrides = generateObject(path, value == initialValue ? void 0 : value);
							(this.overrides.theme = removeEmptyObjects(cjs_default()(this.overrides.theme || {}, themeConfigOverrides))),
								this.storage.set('overrides.theme', this.overrides.theme);
							const mergedOverrides = cjs_default()(this.initial.theme || {}, this.overrides.theme || {});
							Object.keys(this.templatesStore.themes.library).forEach((themeName) => {
								this.templatesStore.themes.library[themeName].setEditorOverrides({ variables: mergedOverrides.variables || {} });
							});
						}),
						(this.templatesStore = templatesStore),
						(this.storage = new StorageStore.t({ type: StorageStore.e.local, key: TemplateStore.NG })),
						(this.state = this.storage.get('editor') || this.state),
						(this.overrides = this.storage.get('overrides') || this.overrides),
						(this.overrides.config = this.overrides.config || {}),
						(this.overrides.controller = this.overrides.controller || {}),
						(this.overrides.theme = this.overrides.theme || {}),
						(this.initial.config = cjs_default()(this.initial.config, templatesStore.config.config)),
						(this.initial.controller = {});
					const themeConfig = JSON.parse(JSON.stringify(templatesStore.config.theme || {}));
					delete themeConfig.style,
						delete themeConfig.overrides,
						(this.initial.theme = cjs_default()(this.initial.theme, themeConfig)),
						Object.keys(this.initial.theme.variables.colors).forEach((key) => {
							const color = this.initial.theme.variables.colors[key];
							this.initial.theme.variables.colors[key] = color_default()(color).hex();
						}),
						this.setTheme(this.overrides.theme.extends ?? this.initial.theme.extends),
						this.setThemeOverride({ path: [], value: void 0 }),
						this.storage.set('initial', this.initial),
						(0, mobx_esm.Gn)(this, { state: mobx_esm.sH, overrides: mobx_esm.sH, initial: mobx_esm.sH, uiAbstractions: mobx_esm.sH });
				}
				switchTabs(tab) {
					(this.state.activeTab = tab), this.storage.set('editor', this.state);
				}
				toggleHide(hide) {
					(this.state.hidden = hide), this.storage.set('editor', this.state);
				}
				setConfigOverride(obj) {
					const { path, value } = obj,
						initialValue = path.reduce((acc, key) => acc && acc[key], this.initial.config),
						configOverrides = generateObject(path, value == initialValue ? void 0 : value),
						updatedOverrides = removeEmptyObjects(cjs_default()(this.overrides.config || {}, configOverrides));
					(this.overrides.config = updatedOverrides),
						this.storage.set('overrides.config', updatedOverrides),
						'language' === path[0]
							? this.templatesStore.setLanguage(value || initialValue).then(() => {
									this.storage.set('overrides.config', updatedOverrides);
							  })
							: 'currency' === path[0] &&
							  this.templatesStore.setCurrency(value || initialValue).then(() => {
									this.storage.set('overrides.config', updatedOverrides);
							  });
				}
				setTheme(themeName) {
					const updatedConfig = { extends: themeName };
					this.initial.theme.extends === themeName && (updatedConfig.extends = void 0),
						(this.overrides.theme = cjs_default()(this.overrides.theme, updatedConfig)),
						this.storage.set('overrides.theme', this.overrides.theme),
						Object.keys(this.templatesStore.targets).forEach((feature) => {
							if ('recommendation' == feature) {
								const recommendationObj = this.templatesStore.targets[feature];
								Object.keys(recommendationObj).forEach((recType) => {
									const targetMap = recommendationObj[recType];
									Object.keys(targetMap).forEach((target) => {
										targetMap[target].setTheme(themeName, 'library');
									});
								});
							} else {
								const targetMap = this.templatesStore.targets[feature];
								Object.keys(targetMap).forEach((target) => {
									targetMap[target].setTheme(themeName, 'library');
								});
							}
						});
				}
				setControllerOverride(obj) {
					const { path, value, controller } = obj,
						type = controller.type,
						controllerOverrides = { [type]: generateObject(path, value) };
					(this.overrides.controller = cjs_default()(this.overrides.controller || {}, controllerOverrides)),
						(this.overrides.controller = removeEmptyObjects(this.overrides.controller)),
						this.storage.set(`overrides.controller.${type}`, this.overrides.controller[type]);
					const mergedConfig = cjs_default()({ settings: this.initial.controller[type] || {} }, { settings: this.overrides.controller[type] || {} });
					controller?.setConfig(mergedConfig);
				}
				registerController(controller) {
					const settingsCopy = JSON.parse(JSON.stringify(controller.config.settings)),
						type = controller.type;
					(this.initial.controller[type] = settingsCopy), this.storage.set(`initial.controller.${type}`, this.initial.controller[type]);
					const mergedConfig = cjs_default()(controller.config, { settings: this.overrides.controller[type] || {} });
					if ((controller.setConfig(mergedConfig), 'autocomplete' === type && updateAutocompleteControllerState(controller), 'search' === type)) {
						const clientGlobals = controller.client.config.globals || {},
							siteId = controller.config.globals?.siteId || clientGlobals?.siteId || this.templatesStore.config.config.siteId || '';
						this.initial.config.siteId != siteId && this.storage.set('overrides.config.siteId', siteId);
					}
				}
				getTargets() {
					const storeTargets = this.templatesStore.targets;
					return [
						...Object.keys(storeTargets.search || {}).map((target) => ({
							type: 'search',
							target,
							template: storeTargets.search[target],
							selector: storeTargets.search[target].selector,
						})),
						...Object.keys(storeTargets.autocomplete || {}).map((target) => ({
							type: 'autocomplete',
							target,
							template: storeTargets.autocomplete[target],
							selector: storeTargets.autocomplete[target].selector,
						})),
						...Object.keys(storeTargets.recommendation.bundle || {}).map((target) => ({
							type: 'recommendation/bundle',
							target,
							template: storeTargets.recommendation.bundle[target],
							selector: storeTargets.recommendation.bundle[target].selector,
						})),
						...Object.keys(storeTargets.recommendation.default || {}).map((target) => ({
							type: 'recommendation/default',
							target,
							template: storeTargets.recommendation.default[target],
							selector: storeTargets.recommendation.default[target].selector,
						})),
						...Object.keys(storeTargets.recommendation.email || {}).map((target) => ({
							type: 'recommendation/email',
							target,
							template: storeTargets.recommendation.email[target],
							selector: storeTargets.recommendation.email[target].selector,
						})),
					];
				}
				generateTemplatesConfig() {
					const originalConfig = JSON.parse(JSON.stringify(this.templatesStore.config));
					delete originalConfig.search, delete originalConfig.autocomplete, delete originalConfig.recommendation, delete originalConfig.components;
					const overrideConfig = { config: this.storage.get('overrides.config') || {}, theme: this.storage.get('overrides.theme') || {} },
						targets = this.getTargets(),
						searchTargets = targets
							.filter((target) => 'search' === target.type)
							.map((target) => ({
								selector: target.selector,
								component: target.template.component,
								resultComponent: target.template.resultComponent,
							})),
						autocompleteTargets = targets
							.filter((target) => 'autocomplete' === target.type)
							.map((target) => ({
								selector: target.selector,
								component: target.template.component,
								resultComponent: target.template.resultComponent,
							}));
					searchTargets.length && (overrideConfig.search = { targets: searchTargets, settings: this.overrides.controller.search || {} }),
						autocompleteTargets.length &&
							(overrideConfig.autocomplete = { targets: autocompleteTargets, settings: this.overrides.controller.autocomplete || {} });
					return cjs_default()(originalConfig, overrideConfig);
				}
			}
			function removeEmptyObjects(object) {
				const cleanObj = (obj) => {
					if (null === obj || 'object' != typeof obj) return obj;
					const result = {};
					return (
						Object.entries(obj).forEach(([key, value]) => {
							if (void 0 !== value)
								if (null !== value && 'object' == typeof value) {
									const cleanedValue = cleanObj(value);
									Object.keys(cleanedValue).length > 0 && (result[key] = cleanedValue);
								} else result[key] = value;
						}),
						result
					);
				};
				return cleanObj(object);
			}
			function generateObject(path, value) {
				return path
					.slice()
					.reverse()
					.reduce((res, key, index) => (0 === index ? { [key]: value } : { [key]: res }), {});
			}
		},
	},
]);
