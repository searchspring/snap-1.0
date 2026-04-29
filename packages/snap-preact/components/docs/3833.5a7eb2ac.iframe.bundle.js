'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[3833],
		{
			'./src/Templates/Stores/TemplateEditor/TemplateEditorStore.ts'(P, E, p) {
				p.r(E), p.d(E, { TemplateEditorStore: () => $ });
				var V = p('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Storage/StorageStore.js'),
					m = p('../../node_modules/mobx/dist/mobx.esm.js'),
					D = p('../../node_modules/color/index.js'),
					I = p.n(D),
					j = p('../../node_modules/deepmerge/dist/cjs.js'),
					g = p.n(j),
					A = p('./src/Templates/Stores/TemplateStore.ts');
				const H = (t) => [
					{
						description: '',
						controls: [
							{
								type: 'text',
								label: 'SiteId',
								description: 'site id used to connect to the athos service',
								getDisplayState: () => 'disabled',
								getValue: () => t.overrides.config.siteId ?? t.initial.config.siteId ?? '',
								shouldShowReset: () => typeof t.overrides.config.siteId < 'u',
								onValueChange: (e) => {
									t.setConfigOverride({ path: ['siteId'], value: e });
								},
								onReset: () => {
									t.setConfigOverride({ path: ['siteId'], value: void 0 });
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
								getValue: () => t.overrides.config.platform || t.initial.config.platform || 'other',
								shouldShowReset: () => {
									const e = t.initial.config.platform || 'other',
										i = t.overrides.config.platform;
									return typeof i < 'u' && e != i;
								},
								onValueChange: (e) => {
									t.setConfigOverride({ path: ['platform'], value: e });
								},
								onReset: () => {
									t.setConfigOverride({ path: ['platform'], value: void 0 });
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
								getValue: () => t.overrides.config.language || t.initial.config.language || 'en',
								shouldShowReset: () => {
									const e = t.initial.config.language || 'en',
										i = t.overrides.config.language;
									return typeof i < 'u' && e != i;
								},
								onValueChange: (e) => {
									t.setConfigOverride({ path: ['language'], value: e });
								},
								onReset: async () => {
									t.setConfigOverride({ path: ['language'], value: void 0 });
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
								getValue: () => t.overrides.config.currency || t.initial.config.currency || 'usd',
								shouldShowReset: () => {
									const e = t.initial.config.currency || 'usd',
										i = t.overrides.config.currency;
									return typeof i < 'u' && e != i;
								},
								onValueChange: async (e) => {
									t.setConfigOverride({ path: ['currency'], value: e });
								},
								onReset: async () => {
									t.setConfigOverride({ path: ['currency'], value: void 0 });
								},
							},
						],
					},
				];
				var T = p('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js');
				function B(t) {
					return [
						{
							controls: [
								{
									type: 'dropdown',
									label: 'Theme',
									description: 'Theme for styling the templates',
									getDisplayState: () => 'visible',
									getOptions: () => [{ options: Object.keys(t.templatesStore.themes.library).map((r) => ({ value: r })) }],
									getValue: () => t.overrides.theme.extends ?? t.initial.theme.extends ?? 'global',
									shouldShowReset: () => typeof t.overrides.theme.extends < 'u',
									onValueChange: (e) => {
										t.setTheme(e);
									},
									onReset: () => {
										t.setTheme(t.initial.theme.extends);
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
									getValue: () => t.overrides.theme.variables?.breakpoints?.mobile ?? t.initial.theme.variables?.breakpoints?.mobile ?? '',
									shouldShowReset: () => {
										const e = t.initial.theme.variables?.breakpoints?.mobile,
											i = t.overrides.theme.variables?.breakpoints?.mobile;
										return typeof i < 'u' && e != i;
									},
									onValueChange: (e) => {
										t.setThemeOverride({ path: ['variables', 'breakpoints', 'mobile'], value: e });
									},
									onReset: () => {
										t.setThemeOverride({ path: ['variables', 'breakpoints', 'mobile'], value: void 0 });
									},
								},
								{
									type: 'number',
									label: 'Tablet Breakpoint',
									description: 'Tablet breakpoint for responsive design',
									getDisplayState: () => 'visible',
									getValue: () => t.overrides.theme.variables?.breakpoints?.tablet ?? t.initial.theme.variables?.breakpoints?.tablet ?? '',
									shouldShowReset: () => {
										const e = t.initial.theme.variables?.breakpoints?.tablet,
											i = t.overrides.theme.variables?.breakpoints?.tablet;
										return typeof i < 'u' && e != i;
									},
									onValueChange: (e) => {
										t.setThemeOverride({ path: ['variables', 'breakpoints', 'tablet'], value: e });
									},
									onReset: () => {
										t.setThemeOverride({ path: ['variables', 'breakpoints', 'tablet'], value: void 0 });
									},
								},
								{
									type: 'number',
									label: 'Desktop Breakpoint',
									description: 'Desktop breakpoint for responsive design',
									getDisplayState: () => 'visible',
									getValue: () => t.overrides.theme.variables?.breakpoints?.desktop ?? t.initial.theme.variables?.breakpoints?.desktop ?? '',
									shouldShowReset: () => {
										const e = t.initial.theme.variables?.breakpoints?.desktop,
											i = t.overrides.theme.variables?.breakpoints?.desktop;
										return typeof i < 'u' && e != i;
									},
									onValueChange: (e) => {
										t.setThemeOverride({ path: ['variables', 'breakpoints', 'desktop'], value: e });
									},
									onReset: () => {
										t.setThemeOverride({ path: ['variables', 'breakpoints', 'desktop'], value: void 0 });
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
									getValue: () => t.overrides.theme.variables?.colors?.text ?? t.initial.theme.variables?.colors?.text ?? '',
									shouldShowReset: () => {
										const e = t.initial.theme.variables?.colors?.text?.toUpperCase(),
											i = t.overrides.theme.variables?.colors?.text?.toUpperCase();
										return typeof i < 'u' && e != i;
									},
									onValueChange: (0, T.s)((e) => {
										t.setThemeOverride({ path: ['variables', 'colors', 'text'], value: e });
									}, 50),
									onReset: () => {
										t.setThemeOverride({ path: ['variables', 'colors', 'text'], value: void 0 });
									},
								},
								{
									type: 'color',
									label: 'Primary Color',
									description: 'Primary color for the theme',
									getDisplayState: () => 'visible',
									getValue: () => t.overrides.theme.variables?.colors?.primary ?? t.initial.theme.variables?.colors?.primary ?? '',
									shouldShowReset: () => {
										const e = t.initial.theme.variables?.colors?.primary?.toUpperCase(),
											i = t.overrides.theme.variables?.colors?.primary?.toUpperCase();
										return typeof i < 'u' && e != i;
									},
									onValueChange: (0, T.s)((e) => {
										t.setThemeOverride({ path: ['variables', 'colors', 'primary'], value: e });
									}, 50),
									onReset: () => {
										t.setThemeOverride({ path: ['variables', 'colors', 'primary'], value: void 0 });
									},
								},
								{
									type: 'color',
									label: 'Secondary Color',
									description: 'Secondary color for the theme',
									getDisplayState: () => 'visible',
									getValue: () => t.overrides.theme.variables?.colors?.secondary ?? t.initial.theme.variables?.colors?.secondary ?? '',
									shouldShowReset: () => {
										const e = t.initial.theme.variables?.colors?.secondary?.toUpperCase(),
											i = t.overrides.theme.variables?.colors?.secondary?.toUpperCase();
										return typeof i < 'u' && e != i;
									},
									onValueChange: (0, T.s)((e) => {
										t.setThemeOverride({ path: ['variables', 'colors', 'secondary'], value: e });
									}, 50),
									onReset: () => {
										t.setThemeOverride({ path: ['variables', 'colors', 'secondary'], value: void 0 });
									},
								},
								{
									type: 'color',
									label: 'Accent Color',
									description: 'Accent color for the theme',
									getDisplayState: () => 'visible',
									getValue: () => t.overrides.theme.variables?.colors?.accent ?? t.initial.theme.variables?.colors?.accent ?? '',
									shouldShowReset: () => {
										const e = t.initial.theme.variables?.colors?.accent?.toUpperCase(),
											i = t.overrides.theme.variables?.colors?.accent?.toUpperCase();
										return typeof i < 'u' && e != i;
									},
									onValueChange: (0, T.s)((e) => {
										t.setThemeOverride({ path: ['variables', 'colors', 'accent'], value: e });
									}, 50),
									onReset: () => {
										t.setThemeOverride({ path: ['variables', 'colors', 'accent'], value: void 0 });
									},
								},
							],
						},
					];
				}
				function U(t) {
					return [
						{
							description: '',
							collapsible: !0,
							controls: [
								{
									type: 'dropdown',
									label: 'Component',
									description: 'Template component to render',
									getValue: (e) => t.templatesStore.targets?.search[e]?.component,
									getOptions: () => [{ options: Object.keys(t.templatesStore.library.components.search).map((i) => ({ value: i })) }],
									shouldShowReset: (e) => {
										const i = t.initial.targets?.search?.[e],
											r = t.overrides.targets?.search?.[e];
										return !!i?.component && !!r?.component && i.component != r.component;
									},
									onValueChange: (e, i) => {
										t.setTargetOverride({ path: ['search', `[${i}]`, 'component'], value: e });
									},
									onReset: (e) => {
										t.setTargetOverride({ path: ['search', `[${e}]`, 'component'], value: void 0 });
									},
								},
							],
						},
					];
				}
				function M(t) {
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
									getValue: (e) =>
										e?.store.config.settings?.infinite
											? e.store.config.settings?.infinite?.enabled !== void 0
												? e.store.config.settings.infinite.enabled
												: !0
											: !1,
									shouldShowReset: () => {
										const e = t.initial.controller.search?.infinite,
											i = !!(e?.enabled !== void 0 ? e.enabled : e);
										return t.overrides.controller.search?.infinite?.enabled !== void 0 && i !== t.overrides.controller.search?.infinite?.enabled;
									},
									onValueChange: (e, i) => {
										if (typeof e > 'u' || !i) return;
										const r = t.initial.controller.search?.infinite;
										e == r?.enabled || (e === !1 && !r)
											? t.setControllerOverride({ path: ['infinite'], controller: i })
											: t.setControllerOverride({ path: ['infinite', 'enabled'], value: !!e, controller: i });
									},
									onReset: (e) => {
										e && t.setControllerOverride({ path: ['infinite'], controller: e });
									},
								},
							],
						},
					];
				}
				function N(t) {
					return [
						{
							description: '',
							collapsible: !0,
							controls: [
								{
									type: 'dropdown',
									label: 'Component',
									description: 'Template component to render',
									getValue: (e) => t.templatesStore.targets?.autocomplete[e]?.component,
									getOptions: () => [{ options: Object.keys(t.templatesStore.library.components.autocomplete).map((i) => ({ value: i })) }],
									shouldShowReset: (e) => {
										const i = t.initial.targets?.autocomplete?.[e],
											r = t.overrides.targets?.autocomplete?.[e];
										return !!i?.component && !!r?.component && i.component != r.component;
									},
									onValueChange: (e, i) => {
										t.setTargetOverride({ path: ['autocomplete', `[${i}]`, 'component'], value: e });
									},
									onReset: (e) => {
										t.setTargetOverride({ path: ['autocomplete', `[${e}]`, 'component'], value: void 0 });
									},
								},
							],
						},
					];
				}
				function L(t) {
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
									getValue: (e) => (e?.store.config.settings?.history?.enabled ? e.store.config.settings.history.limit ?? 'Disabled' : 'Disabled'),
									shouldShowReset: () => {
										const e = t.initial.controller.autocomplete?.history,
											i = !!(e?.enabled !== void 0 ? e.enabled : e?.limit && e.limit > 0),
											r = t.overrides.controller.autocomplete?.history;
										if (r?.enabled === void 0 && r?.limit === void 0) return !1;
										const s = !!(r?.enabled !== void 0 ? r.enabled : r?.limit && r.limit > 0);
										return i !== s || e?.limit !== r?.limit;
									},
									onValueChange: (e, i) => {
										if (typeof e > 'u' || !i) return;
										const r = t.initial.controller.autocomplete?.history,
											s = r?.enabled ? r?.limit : 'Disabled';
										e === s
											? t.setControllerOverride({ path: ['history'], controller: i })
											: e === 'Disabled'
											? t.setControllerOverride({ path: ['history'], value: { enabled: !1, limit: void 0, showResults: void 0 }, controller: i })
											: t.setControllerOverride({ path: ['history'], value: { enabled: !0, limit: Number(e) }, controller: i }),
											y(i);
									},
									onReset: (e) => {
										e && (t.setControllerOverride({ path: ['history'], controller: e }), y(e));
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
									getValue: (e) => (e?.store.config.settings?.trending?.enabled ? e.store.config.settings.trending.limit ?? 'Disabled' : 'Disabled'),
									shouldShowReset: () => {
										const e = t.initial.controller.autocomplete?.trending,
											i = !!(e?.enabled !== void 0 ? e.enabled : e?.limit && e.limit > 0),
											r = t.overrides.controller.autocomplete?.trending;
										if (r?.enabled === void 0 && r?.limit === void 0) return !1;
										const s = !!(r?.enabled !== void 0 ? r.enabled : r?.limit && r.limit > 0);
										return i !== s || e?.limit !== r?.limit;
									},
									onValueChange: async (e, i) => {
										if (typeof e > 'u' || !i) return;
										const r = t.initial.controller.autocomplete?.trending,
											s = r?.enabled ? r?.limit : 'Disabled';
										e === s
											? t.setControllerOverride({ path: ['trending'], controller: i })
											: e === 'Disabled'
											? t.setControllerOverride({ path: ['trending'], value: { enabled: !1, limit: void 0, showResults: void 0 }, controller: i })
											: t.setControllerOverride({ path: ['trending'], value: { enabled: !0, limit: Number(e) }, controller: i }),
											y(i);
									},
									onReset: (e) => {
										e && (t.setControllerOverride({ path: ['trending'], controller: e }), y(e));
									},
								},
								{
									type: 'dropdown',
									label: 'Initial Results',
									description: '',
									getDisplayState: (e) =>
										e?.store.config.settings?.history?.enabled || e?.store.config.settings?.trending?.enabled ? 'visible' : 'disabled',
									getOptions: (e) => {
										const i = e?.store.config.settings?.history?.enabled,
											r = e?.store.config.settings?.trending?.enabled,
											s = [{ value: 'Disabled' }];
										return i && s.push({ value: 'History' }), r && s.push({ value: 'Trending' }), [{ options: s }];
									},
									getValue: (e) => {
										const i = e?.store.config.settings?.history?.enabled;
										return e?.store.config.settings?.trending?.enabled && e?.store.config.settings?.trending?.showResults
											? 'Trending'
											: i && e?.store.config.settings?.history?.showResults
											? 'History'
											: 'Disabled';
									},
									shouldShowReset: () => {
										const e = t.initial.controller.autocomplete,
											i = e?.history?.enabled && e?.history?.showResults,
											r = e?.trending?.enabled && e?.trending?.showResults,
											s = r ? 'Trending' : i ? 'History' : 'Disabled',
											a = t.overrides.controller.autocomplete,
											o = a?.history?.enabled !== !1 && a?.history?.showResults,
											d = a?.trending?.enabled !== !1 && a?.trending?.showResults,
											h =
												a?.history?.showResults === !1 && a?.trending?.showResults === !1 && (i || r)
													? 'Disabled'
													: d
													? 'Trending'
													: o
													? 'History'
													: void 0;
										return h !== void 0 && s !== h;
									},
									onValueChange: (e, i) => {
										typeof e > 'u' ||
											!i ||
											(t.setControllerOverride({ path: ['history', 'showResults'], value: e === 'History', controller: i }),
											t.setControllerOverride({ path: ['trending', 'showResults'], value: e === 'Trending', controller: i }),
											y(i));
									},
									onReset: (e) => {
										e &&
											(t.setControllerOverride({ path: ['history', 'showResults'], controller: e }),
											t.setControllerOverride({ path: ['trending', 'showResults'], controller: e }),
											y(e));
									},
								},
							],
						},
					];
				}
				async function y(t) {
					t.reset(), t.store.initHistory();
					const e = t.config.settings?.trending?.enabled || (t.config.settings?.trending && t.config.settings?.trending?.enabled == null),
						i = t.config.settings?.history?.enabled || (t.config.settings?.history && t.config.settings?.history?.enabled == null);
					e
						? (await t.searchTrending({ limit: t.config.settings?.trending?.limit }),
						  t.config.settings?.trending?.showResults && t.store.trending.length && !t.store.results && t.store.trending[0].preview())
						: t.store.updateTrendingTerms({ trending: { queries: [] } }),
						!e && i && t.config.settings?.history?.showResults && t.store.history.length && !t.store.results && t.store.history[0].preview();
				}
				var k = p('./src/utils/combineMerge.ts');
				const J = {
					breakpoints: { mobile: 600, tablet: 900, desktop: 1200 },
					colors: { text: '#333333', primary: '#1D4990', secondary: '#6187ae', accent: '#00AEEF' },
				};
				class $ {
					constructor({ templatesStore: e }) {
						(this.storedState = { hidden: !1, activeTab: 'configuration' }),
							(this.state = { activeDomSelector: '' }),
							(this.overrides = { config: {}, controller: {}, theme: {}, targets: { search: [], autocomplete: [] } }),
							(this.initial = {
								config: { language: 'en', currency: 'usd' },
								targets: { search: [], autocomplete: [] },
								controller: {},
								theme: { extends: 'base', variables: J },
							}),
							(this.tabs = ['templates', 'configuration']),
							(this.uiAbstractions = {
								templates: { config: H(this), theme: B(this) },
								controllers: { search: M(this), autocomplete: L(this) },
								targets: { search: U(this), autocomplete: N(this) },
							}),
							(this.setThemeOverride = (s) => {
								const { path: a, value: o } = s,
									d = a.reduce((b, f) => b && b[f], this.initial.theme),
									n = C(a, o == d ? void 0 : o);
								(this.overrides.theme = S(g()(this.overrides.theme || {}, n || {}))), this.storage.set('overrides.theme', this.overrides.theme);
								const h = g()(this.initial.theme || {}, this.overrides.theme || {}),
									v = x(h);
								Object.keys(this.templatesStore.themes.library).forEach((b) => {
									this.templatesStore.themes.library[b].setEditorOverrides(v);
								});
							}),
							(this.setTargetOverride = (s) => {
								const a = s.path;
								let o = s.value;
								const d = a[0];
								let n = -1;
								const h = a.reduce((l, c) => {
										try {
											const u = Number(c.replace(/^\[(\d+)\]$/, '$1'));
											return Number.isNaN(u) ? l && l[c] : ((n = u), l && l[u]);
										} catch (u) {
											console.error('Error accessing path in initial targets:', u);
											return;
										}
									}, this.initial.targets),
									v = C(a, o == h ? void 0 : o),
									b = g()((0, m.HO)(this.overrides.targets) || {}, (0, m.HO)(v) || {}, { arrayMerge: k.a });
								(this.overrides.targets = S(b)), this.storage.set('overrides.targets', this.overrides.targets);
								const f = g()((0, m.HO)(this.initial.targets) || {}, (0, m.HO)(this.overrides.targets) || {}, { arrayMerge: k.a }),
									R = a[a.length - 1];
								if (R == 'selector' && n > -1) {
									if ((typeof o > 'u' && (o = h), typeof o == 'string' && o.length > 1 && document.querySelector(o))) {
										const l = Object.keys(window.athos.controller[d].targeters)[n];
										if (l) {
											const c = window.athos.controller[d].targeters[l].targets[0].selector,
												u = document.querySelector(c || '');
											if (d == 'search' && u) {
												const w = u.cloneNode(!0);
												(w.innerHTML = ''), u.insertAdjacentElement('afterend', w), u.remove();
											}
											(window.athos.controller[d].targeters[l].targets[0].selector = o), window.athos.controller[d].retarget();
										}
									}
								} else if (R == 'inputSelector' && n > -1) {
									const l = Object.keys(window.athos.controller[d].targeters)[n];
									(window.athos.controller[d].targeters[l].targets[0].props.input = o), window.athos.controller[d].retarget();
								}
								const O = this.templatesStore.targets[d];
								if (O && n != -1) {
									const l = O[n],
										c = f[d][n];
									Object.keys(c).forEach((u) => {
										const w = c[u];
										l.setValue(u, w);
									});
								}
							}),
							(this.templatesStore = e),
							(this.storage = new V.t({ type: V.e.local, key: A.NG })),
							(this.storedState = this.storage.get('editor') || this.storedState),
							(this.initial.config = g()(this.initial.config, e.config.config)),
							(this.initial.controller = {}),
							e.config.search?.targets && (this.initial.targets.search = e.config.search?.targets),
							e.config.autocomplete?.targets && (this.initial.targets.autocomplete = e.config.autocomplete?.targets);
						const i = JSON.parse(JSON.stringify(e.config.theme || {}));
						delete i.style, (this.initial.theme = g()(this.initial.theme, i));
						const r = this.storage.get('overrides') || {};
						this.setOverrides({
							config: r.config,
							theme: r.theme,
							search: { targets: r.targets?.search, settings: r.controller?.search },
							autocomplete: { targets: r.targets?.autocomplete, settings: r.controller?.autocomplete },
						}),
							this.storage.set('initial', this.initial),
							(0, m.Gn)(this, { storedState: m.sH, state: m.sH, overrides: m.sH, initial: m.sH, uiAbstractions: m.sH });
					}
					switchTabs(e) {
						(this.storedState.activeTab = e), this.storage.set('editor', this.storedState);
					}
					toggleHide(e) {
						(this.storedState.hidden = e), this.storage.set('editor', this.storedState);
					}
					setOverrides(e) {
						(this.overrides.config = e.config || {}),
							(this.overrides.controller = { search: e.search?.settings, autocomplete: e.autocomplete?.settings }),
							(this.overrides.theme = e.theme || {}),
							(this.overrides.targets = { search: e.search?.targets || [], autocomplete: e.autocomplete?.targets || [] }),
							this.storage.set('overrides.config', this.overrides.config),
							this.storage.set('overrides.controller', this.overrides.controller),
							this.storage.set('overrides.targets', this.overrides.targets);
						const i = this.overrides.config.language || this.initial.config.language,
							r = this.overrides.config.currency || this.initial.config.currency;
						this.templatesStore.setLanguage(i),
							this.templatesStore.setCurrency(r),
							['search', 'autocomplete'].forEach((s) => {
								const a = window.athos?.controller?.[s];
								if (a && this.initial.controller[s]) {
									const o = { ...a.config, settings: JSON.parse(JSON.stringify(this.initial.controller[s])) },
										d = g()(o, { settings: this.overrides.controller[s] || {} });
									a.setConfig(d);
								}
							}),
							['search', 'autocomplete'].forEach((s) => {
								const a = this.templatesStore.targets[s],
									o = g()((0, m.HO)(this.initial.targets[s]) || [], (0, m.HO)(this.overrides.targets[s]) || [], { arrayMerge: k.a });
								a.forEach((d, n) => {
									const h = o[n];
									h &&
										Object.keys(h).forEach((v) => {
											d.setValue(v, h[v]);
										});
								});
							}),
							this.setTheme(this.overrides.theme.extends ?? this.initial.theme.extends);
					}
					resetOverrides() {
						this.storage.set('overrides', void 0), this.setOverrides({});
					}
					setActiveDomSelector(e) {
						e?.length ? ((this.state.activeDomSelector = e), this.toggleHide(!0)) : ((this.state.activeDomSelector = ''), this.toggleHide(!1));
					}
					setConfigOverride(e) {
						const { path: i, value: r } = e,
							s = i.reduce((d, n) => d && d[n], this.initial.config),
							a = C(i, r == s ? void 0 : r),
							o = S(g()(this.overrides.config || {}, a));
						(this.overrides.config = o),
							this.storage.set('overrides.config', o),
							i[0] === 'language'
								? this.templatesStore.setLanguage(r || s).then(() => {
										this.storage.set('overrides.config', o);
								  })
								: i[0] === 'currency' &&
								  this.templatesStore.setCurrency(r || s).then(() => {
										this.storage.set('overrides.config', o);
								  });
					}
					setTheme(e) {
						const i = { extends: e };
						this.initial.theme.extends === e && (i.extends = void 0),
							(this.overrides.theme = g()(this.overrides.theme, i)),
							this.storage.set('overrides.theme', this.overrides.theme);
						const r = this.templatesStore.library.themes[e];
						if (r) {
							const o = JSON.parse(JSON.stringify(this.templatesStore.config.theme || {}));
							delete o.style,
								(this.initial.theme.variables = g()(r.variables || {}, o.variables || {})),
								Object.keys(this.initial.theme.variables.colors).forEach((d) => {
									const n = this.initial.theme.variables.colors[d];
									this.initial.theme.variables.colors[d] = I()(n).hex();
								}),
								this.storage.set('initial', this.initial);
						}
						const s = g()(this.initial.theme || {}, this.overrides.theme || {}),
							a = x(s);
						Object.keys(this.templatesStore.themes.library).forEach((o) => {
							this.templatesStore.themes.library[o].setEditorOverrides(a);
						}),
							Object.keys(this.templatesStore.targets).forEach((o) => {
								if (o == 'recommendation') {
									const d = this.templatesStore.targets.recommendation;
									Object.keys(d).forEach((n) => {
										d[n].forEach((v) => {
											v.setTheme(e, 'library');
										});
									});
								} else
									this.templatesStore.targets[o].forEach((n) => {
										n.setTheme(e, 'library');
									});
							});
					}
					setControllerOverride(e) {
						const { path: i, value: r, controller: s } = e,
							a = s.type,
							o = { [a]: C(i, r) };
						(this.overrides.controller = g()(this.overrides.controller || {}, o)),
							(this.overrides.controller = S(this.overrides.controller)),
							this.storage.set(`overrides.controller.${a}`, this.overrides.controller[a]);
						const d = g()({ settings: this.initial.controller[a] || {} }, { settings: this.overrides.controller[a] || {} });
						s?.setConfig(d);
					}
					registerController(e) {
						const i = JSON.parse(JSON.stringify(e.config.settings)),
							r = e.type;
						(this.initial.controller[r] = i), this.storage.set(`initial.controller.${r}`, this.initial.controller[r]);
						const s = g()(e.config, { settings: this.overrides.controller[r] || {} });
						if ((e.setConfig(s), r === 'autocomplete' && y(e), r === 'search')) {
							const a = e.client.config.globals || {},
								o = e.config.globals?.siteId || a?.siteId || this.templatesStore.config.config.siteId || '';
							this.initial.config.siteId != o && this.storage.set('overrides.config.siteId', o);
						}
					}
					getTargets() {
						const e = this.templatesStore.targets,
							i = e.search.map((n) => ({ type: 'search', target: n, template: n.component, selector: n.selector })),
							r = e.autocomplete.map((n) => ({ type: 'autocomplete', target: n, template: n.component, selector: n.selector })),
							s = e.recommendation.bundle.map((n) => ({ type: 'recommendation/bundle', target: n, template: n.component, selector: n.selector })),
							a = e.recommendation.default.map((n) => ({ type: 'recommendation/default', target: n, template: n.component, selector: n.selector })),
							o = e.recommendation.email.map((n) => ({ type: 'recommendation/email', target: n, template: n.component, selector: n.selector }));
						return [...i, ...r, ...s, ...a, ...o];
					}
					generateTemplatesConfig(e) {
						const i = (l) =>
								l === void 0 || l === !0
									? { initial: !0, overrides: !0 }
									: l === !1
									? { initial: !1, overrides: !1 }
									: { initial: l.initial ?? !0, overrides: l.overrides ?? !0 },
							r = i(e?.config);
						let s, a, o;
						e?.theme === void 0 || e?.theme === !0
							? ((s = { initial: !0, overrides: !0 }), (a = { initial: !0, overrides: !0 }), (o = { initial: !0, overrides: !0 }))
							: e?.theme === !1
							? ((s = { initial: !1, overrides: !1 }), (a = { initial: !1, overrides: !1 }), (o = { initial: !1, overrides: !1 }))
							: ((s = i(e.theme.extends)), (a = i(e.theme.variables)), (o = i(e.theme.overrides)));
						const d = s.initial || s.overrides || a.initial || a.overrides || o.initial || o.overrides,
							n = JSON.parse(JSON.stringify(this.templatesStore.config));
						delete n.search,
							delete n.autocomplete,
							delete n.recommendation,
							delete n.components,
							r.initial || delete n.config,
							d
								? n.theme && (s.initial || delete n.theme.extends, a.initial || delete n.theme.variables, o.initial || delete n.theme.overrides)
								: delete n.theme;
						const h = {};
						if ((r.overrides && (h.config = this.storage.get('overrides.config') || {}), d)) {
							const l = this.storage.get('overrides.theme') || {},
								c = {};
							s.overrides && l.extends !== void 0 && (c.extends = l.extends),
								a.overrides && l.variables !== void 0 && (c.variables = l.variables),
								o.overrides && l.overrides !== void 0 && (c.overrides = l.overrides),
								Object.keys(c).length && (h.theme = c);
						}
						const v = this.getTargets();
						if (e?.search !== !1) {
							const l = v.filter((c) => c.type === 'search').map((c) => ({ selector: c.selector, component: c.target.component }));
							l.length && (h.search = { targets: l, settings: this.overrides.controller.search || {} });
						}
						if (e?.autocomplete !== !1) {
							const l = v.filter((c) => c.type === 'autocomplete').map((c) => ({ selector: c.selector, component: c.target.component }));
							l.length && (h.autocomplete = { targets: l, settings: this.overrides.controller.autocomplete || {} });
						}
						const b = g()(n, h),
							f = S(b);
						e?.unlocked || delete f.unlocked;
						const R = ['unlocked', 'config', 'theme', 'search', 'autocomplete'],
							O = {};
						for (const l of R) l in f && (O[l] = f[l]);
						for (const l of Object.keys(f)) l in O || (O[l] = f[l]);
						return O;
					}
				}
				function S(t) {
					const e = (i) => {
						if (i === null || typeof i != 'object') return i;
						if (Array.isArray(i))
							return i
								.map((s) => e(s))
								.filter((s) => (s == null ? !1 : typeof s == 'object' ? (Array.isArray(s) ? s.length > 0 : Object.keys(s).length > 0) : !0));
						const r = {};
						return (
							Object.entries(i).forEach(([s, a]) => {
								if (a !== void 0)
									if (a !== null && typeof a == 'object') {
										const o = e(a);
										(Array.isArray(o) ? o.length > 0 : Object.keys(o).length > 0) && (r[s] = o);
									} else r[s] = a;
							}),
							r
						);
					};
					return e(t);
				}
				function C(t, e) {
					return t
						.slice()
						.reverse()
						.reduce((i, r) => {
							const s = r.match(/^\[(\d+)\]$/);
							if (s) {
								const a = parseInt(s[1], 10),
									o = [];
								return (o[a] = i), o;
							}
							return { [r]: i };
						}, e);
				}
				function x(t) {
					const { overrides: e, variables: i } = t,
						r = {};
					return (
						i && (r.variables = i),
						e?.default && (r.components = e.default),
						(e?.mobile || e?.tablet || e?.desktop) && (r.responsive = { mobile: e?.mobile, tablet: e?.tablet, desktop: e?.desktop }),
						r
					);
				}
			},
		},
	]);
})();
