(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[4901],
		{
			'./components/src/components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.stories.tsx'(R, o, e) {
				'use strict';
				e.r(o), e.d(o, { Default: () => l, __namedExportsOrder: () => d, default: () => m });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = e('./components/src/components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.tsx'),
					u = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					i = e('./components/src/utilities/snapify.ts');
				const E =
					"# RecommendationBundleEasyAdd\n\nRenders a single recommended product and bundle CTA section that includes a visually hidden seed product. Like all of the bundle components, the first result passed will be treated as the seed. The Seed will not be rendered, but will be included in the cartstore, bundle pricing, and items included when adding to the cart. \n\n## Sub-components\n- RecommendationBundle\n\n\n### controller\nThe required `controller` prop specifies a reference to the RecommendationController\n\n```jsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n### onAddToCart \nthe `onAddToCart` prop sets a the callback function for when a add to cart button is clicked. This function will be passed an array of selected item ids and their quantities. \n\n```jsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n### results\nThe `results` prop specifies a reference to the results store array to use instead of the default `controller.store.results`. Note the first result will be displayed as the `seed` product. \n\n```jsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} results={controller.store.results} />\n```\n\n### title\nThe `title` prop specifies the bundle title\n\n```jsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} title={'Recommended Bundle'} />\n```\n\n### resultComponent\nThe `resultComponent` prop allows for a custom result component to be rendered. This component will be passed the following props -\n\n```jsx\n	{ \n		result: Product, \n		seed: boolean, \n		selected: boolean, \n		onProductSelect: (result:Product) => void\n	}\n```\n\n```jsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} resultComponent={<ResultSlot />} />\n```\n\n### ctaButtonText\nThe `ctaButtonText` prop specifies the inner text to render in the add to cart button.\n\n```jsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonText={'Add Bundle'} />\n```\n\n### ctaButtonSuccessText\nThe `ctaButtonSuccessText` prop specifies text to temporarily render in the add to cart button after it is clicked.\n\n```jsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessText={'Thanks for Shopping!'} />\n```\n\n### ctaButtonSuccessTimeout\nThe `ctaButtonSuccessTimeout` prop specifies number of ms to show success text in add to cart button before reverting back to normal text\n\n```jsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessTimeout={1500} />\n```\n\n\n### ctaIcon\nThe `ctaIcon` prop specifies the icon to render in the CTA. Takes an object with `Icon` component props or a string.     \n\n```jsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaIcon={'bag'} />\n```\n\n### ctaInline\nThe `ctaInline` prop specifies if the add to cart display should be block or inline with the bundle.\n\n```jsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaInline={true} />\n```\n\n### ctaSlot\nThe `ctaSlot` prop allows for a custom add to cart cta component to be rendered. This component will be passed the following props -\n\n```jsx	\n	{ \n		cartStore: CartStore;\n		onclick: (e:any) => void\n	}\n```\n\n```jsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaSlot={<CTASlot />} />\n```\n\n### seedText\nThe `seedText` prop specifies text to be rendered as a badge in the seed product.   \n\n```jsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} seedText={\"Main Product\"} />\n```\n\n### vertical\nThe `vertical` prop sets the carousel scroll direction to vertical.\n\n```jsx\n<RecommendationBundleEasyAdd controller={controller} onAddToCart={(e, items)=>{console.log(items)}} vertical={true} />\n```\n\n### lazyRender \nThe `lazyRender` prop specifies an object of lazy rendering settings. The settings include an `enable` toggle (defaults to `true`) as well as an `offset` (default `\"10%\"`) to specify at what distance the component should start rendering relative to the bottom of the viewport.\n\n```jsx\nconst customLazyRenderProps = {\n	enabled: true,\n	offset: \"20px\" // any css margin values accepted - px, %, etc...\n}\n\n<RecommendationBundleEasyAdd controller={controller} lazyRender={ customLazyRenderProps } onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n";
				var p = e('./components/src/components/Atoms/Icon/paths.tsx');
				const m = {
						title: 'Templates/RecommendationBundleEasyAdd',
						component: a.F,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, n.FD)('div', {
										children: [(0, n.Y)(c.oz, { options: { overrides: { code: u.Z } }, children: E }), (0, n.Y)(c.uY, { story: c.h1 })],
									}),
							},
						},
						decorators: [(b) => (0, n.Y)('div', { style: { maxWidth: '300px', height: '500px' }, children: (0, n.Y)(b, {}) })],
						argTypes: {
							controller: {
								description: 'Controller reference',
								type: { required: !0 },
								table: { type: { summary: 'Controller' } },
								control: { type: 'none' },
							},
							results: {
								description: 'Results store reference, overrides controller.store.results',
								type: { required: !1 },
								table: { type: { summary: 'Results store object' } },
								control: { type: 'none' },
							},
							resultComponent: { description: 'Slot for custom result component', table: { type: { summary: 'component' } } },
							title: {
								description: 'recommendation title',
								table: { type: { summary: 'string | JSX Element' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							onAddToCart: {
								description: 'onClick event handler for add bundle to cart button in CTA',
								table: { type: { summary: 'function' } },
								action: 'onAddToCart',
							},
							seedText: {
								description: 'Text to render in seed product badge',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'Seed Product' } },
								control: { type: 'text' },
							},
							vertical: {
								description: 'set the recommendation to render vertically',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							ctaButtonText: {
								description: 'text to render in add to cart button',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'Add All To Cart' } },
								control: { type: 'text' },
							},
							ctaIcon: {
								desciption: 'The `ctaIcon` prop specifies the icon to render in the CTA. Takes an object with `Icon` component props or a string.',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'bag' } },
								control: { type: 'select', options: [...Object.keys(p.c)] },
							},
							ctaButtonSuccessText: {
								description: 'text to temporarily render in the add to cart button after it is clicked',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'Bundle Added!' } },
								control: { type: 'text' },
							},
							ctaButtonSuccessTimeout: {
								description: 'Number of ms to show success text in add to cart button before reverting back to normal text',
								defaultValue: 2e3,
								table: { type: { summary: 'number' } },
								control: { type: 'number' },
							},
							ctaInline: {
								description: 'boolean to enable the stacked add to cart button display',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							ctaSlot: { description: 'Slot for custom add to cart component', table: { type: { summary: 'component' } } },
							lazyRender: {
								description: 'Lazy render settings object',
								defaultValue: { enabled: !0, offset: '10%' },
								table: { type: { summary: 'object' }, defaultValue: { summary: 'Lazy render settings object' } },
								control: { type: 'object' },
							},
							...t.F,
						},
					},
					f = { id: 'RecommendationBundle', tag: 'bundle', globals: { siteId: 'atkzs2', products: ['C-AD-W1-1869P'] } },
					T = i.p.recommendation(f),
					l = (b, { loaded: { controller: A } }) => (0, n.Y)(a.F, { ...b, controller: A, results: A.store.results });
				(l.loaders = [
					async () => (
						T.on('afterStore', async ({ controller: b }, A) => {
							b.store.results.forEach((_) => (_.mappings.core.url = 'javascript:void(0);')), await A();
						}),
						await T.search(),
						{ controller: T }
					),
				]),
					(l.parameters = {
						...l.parameters,
						docs: {
							...l.parameters?.docs,
							source: {
								originalSource: `(props: RecommendationBundleEasyAddProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: RecommendationController;
  };
}) => {
  return <RecommendationBundleEasyAdd {...props} controller={controller} results={controller.store.results} />;
}`,
								...l.parameters?.docs?.source,
							},
						},
					});
				const d = ['Default'];
			},
			'./components/src/components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.tsx'(R, o, e) {
				'use strict';
				e.d(o, { F: () => p });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('./components/src/utilities/defined.ts'),
					t = e('./components/src/utilities/mergeStyles.ts'),
					i = e('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx');
				const E = () => (0, c.AH)({ '.ss__recommendation-bundle-easy-add__wrapper__cta': { textAlign: 'center' } }),
					p = (0, a.PA)((m) => {
						const f = { name: m.controller?.store?.profile?.tag?.toLowerCase(), ...m },
							{ treePath: T, disableStyles: l, controller: d, style: b, styleScript: A, themeStyleScript: _, ...I } = f,
							h = {
								recommendationBundle: {
									hideCheckboxes: !0,
									seedText: '',
									ctaButtonText: 'Add Both',
									ctaInline: !1,
									hideSeed: !0,
									alias: 'recommendationBundleEasyAdd',
									limit: 1,
									carousel: { enabled: !1 },
									separatorIcon: !1,
									...(0, u.s)({ disableStyles: l }),
									theme: f?.theme,
									treePath: T,
								},
							},
							v = (0, t.Z)(f, E);
						return (0, n.Y)(i.g, { controller: d, ...v, ...h.recommendationBundle, ...I });
					});
			},
			'./components/src/hooks/useIntersection.tsx'(R, o, e) {
				'use strict';
				e.d(o, { v: () => c });
				var n = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = (a, u = '0px', t = !1) => {
					const [i, E] = (0, n.J0)(!1);
					return (
						(0, n.vJ)(() => {
							const p = new IntersectionObserver(
								([m]) => {
									E(m.isIntersecting), t && m.isIntersecting && p.unobserve(a.current);
								},
								{ rootMargin: u }
							);
							return (
								a.current && p.observe(a.current),
								() => {
									p.unobserve(a.current);
								}
							);
						}, []),
						i
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(R, o, e) {
				'use strict';
				e.d(o, { v: () => a });
				var n = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = 250,
					a = (t, i = {}) => {
						const { rootMargin: E = '0px', fireOnce: p = !1, threshold: m = 0, minVisibleTime: f = 0 } = i,
							[T, l] = (0, n.J0)(!1),
							d = (0, n.li)(null),
							b = (0, n.li)(null),
							[A, _] = (0, n.J0)(0),
							I = (0, n.hb)((h) => {
								(t.current = h), _((v) => v + 1);
							}, []);
						return (
							(0, n.vJ)(() => {
								l(!1);
								let h = null,
									v = null;
								if (!window.IntersectionObserver || !t.current) return;
								const B = () => {
										v && (window.clearInterval(v), (v = null));
									},
									P = () => {
										f > 0
											? ((b.current = Date.now()),
											  d.current && window.clearTimeout(d.current),
											  (d.current = window.setTimeout(() => {
													l(!0), p && t.current && h && h.unobserve(t.current);
											  }, f)))
											: (l(!0), p && t.current && h && h.unobserve(t.current));
									},
									s = () => {
										d.current && window.clearTimeout(d.current), (d.current = null), (b.current = null), l(!1);
									};
								return (
									(h = new IntersectionObserver(
										([r]) => {
											r.isIntersecting
												? t.current && u(t.current)
													? (B(), P())
													: (s(),
													  v ||
															(v = window.setInterval(() => {
																if (!t.current) {
																	B();
																	return;
																}
																u(t.current) && (B(), P());
															}, c)))
												: (B(), s());
										},
										{ rootMargin: E, threshold: m }
									)),
									t.current && h.observe(t.current),
									() => {
										l(!1), B(), d.current && window.clearTimeout(d.current), h && t.current && h.unobserve(t.current);
									}
								);
							}, [t, A]),
							{ inViewport: T, updateRef: I }
						);
					};
				function u(t) {
					return t && 'checkVisibility' in t ? t.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/utilities/componentArgs.ts'(R, o, e) {
				'use strict';
				e.d(o, { F: () => n });
				const n = {
					className: {
						description: 'Class name appended to root element of component',
						table: { type: { summary: 'string' }, defaultValue: { summary: 'ss__${component-name}' } },
						control: { type: 'text' },
					},
					disableStyles: {
						defaultValue: !1,
						description: 'Disable all default styling',
						table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
						control: { type: 'boolean' },
					},
					style: { description: 'Inline style', table: { type: { summary: 'string, object' } }, control: { type: 'text' } },
					theme: { description: 'Specify specific sub component props', table: { type: { summary: 'object' } }, control: { type: 'none' } },
				};
			},
			'./components/src/utilities/createImpressionObserver.ts'(R, o, e) {
				'use strict';
				e.d(o, { Q: () => t });
				var n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					c = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const a = 0.7,
					u = 1e3;
				function t(i) {
					const E = (0, n.li)(null),
						{ inViewport: p, updateRef: m } = (0, c.v)(E, { ...i, fireOnce: !0, threshold: a, minVisibleTime: u });
					return { ref: E, inViewport: p, updateRef: m };
				}
			},
			'./components/src/utilities/snapify.ts'(R, o, e) {
				'use strict';
				e.d(o, { p: () => h });
				var n = e('../../node_modules/mobx/dist/mobx.esm.js'),
					c = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					a = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					u = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					i = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					E = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					p = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					m = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					f = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					T = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					l = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					d = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					b = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					A = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, n.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const _ = {},
					I = { globals: { siteId: '8uyt2m' } };
				class h {
					static recommendation(r) {
						const y = r.id;
						if (_[y]) return _[y];
						const x = (_[y] = B({ client: I, controller: r }));
						return (
							x.on('afterStore', async ({ controller: g }, C) => {
								g.log.debug('controller', g), g.log.debug('store', g.store.toJSON()), await C();
							}),
							x.init(),
							x
						);
					}
					static autocomplete(r) {
						const y = r.id;
						if (_[y]) return _[y];
						const x = (_[y] = P({ client: I, controller: r }));
						return (
							x.on('afterStore', async ({ controller: g }, C) => {
								g.log.debug('controller', g), g.log.debug('store', g.store.toJSON()), await C();
							}),
							x.init(),
							x
						);
					}
					static search(r) {
						const y = r.id;
						if (_[y]) return _[y];
						const x = (_[y] = v({ client: I, controller: r }));
						return (
							x.on('afterStore', async ({ controller: g }, C) => {
								g.log.debug('controller', g), g.log.debug('store', g.store.toJSON()), await C();
							}),
							x.init(),
							x
						);
					}
				}
				function v(s) {
					const r = new m.V(new T.E({ settings: { coreType: 'query', corePrefix: s.controller.id } }), f.X);
					return new c.Tp(s.controller, {
						client: new t.K(s.client.globals, s.client.config),
						store: new E.U(s.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new l.E(),
						profiler: new d.U(),
						logger: new b.V(),
						tracker: new A.J(s.client.globals),
					});
				}
				function B(s) {
					const r = new m.V(new T.E(), f.X).detach(!0);
					return new u.c(s.controller, {
						client: new t.K(s.client.globals, s.client.config),
						store: new p.t(s.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new l.E(),
						profiler: new d.U(),
						logger: new b.V(),
						tracker: new A.J(s.client.globals),
					});
				}
				function P(s) {
					const r = new m.V(new T.E(), f.X).detach();
					return new a.Z(s.controller, {
						client: new t.K(s.client.globals, s.client.config),
						store: new i.Y(s.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new l.E(),
						profiler: new d.U(),
						logger: new b.V(),
						tracker: new A.J(s.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(R, o, e) {
				'use strict';
				e.d(o, { Z: () => u });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 'prism-block',
					u = (t) => {
						const i = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								i.current && t.className?.includes('lang-') && !t.className?.includes(a) && window?.Prism?.highlightElement(i.current);
							}, [t.className, t.children, i]),
							(0, n.Y)('code', { ...t, ref: i, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(R) {
				function o(e) {
					var n = new Error("Cannot find module '" + e + "'");
					throw ((n.code = 'MODULE_NOT_FOUND'), n);
				}
				(o.keys = () => []), (o.resolve = o), (o.id = '../../node_modules/memoizerific sync recursive'), (R.exports = o);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-RecommendationBundleEasyAdd-RecommendationBundleEasyAdd-stories.2a8cae40.iframe.bundle.js.map
