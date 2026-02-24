(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[9797],
		{
			'./components/src/components/Templates/RecommendationBundleList/RecommendationBundleList.stories.tsx'(B, a, e) {
				'use strict';
				e.r(a), e.d(a, { Default: () => d, __namedExportsOrder: () => _, default: () => p });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					i = e('./components/src/components/Templates/RecommendationBundleList/RecommendationBundleList.tsx'),
					b = e('./components/src/utilities/storybook.tsx'),
					o = e('./components/src/utilities/componentArgs.ts'),
					u = e('./components/src/utilities/snapify.ts');
				const T =
					"# RecommendationBundleList\n\nRenders a recommended bundle of products with seed, recommendations in list form, and add to cart display.\n\n## Sub-components\n- RecommendationBundle\n\n### controller\nThe required `controller` prop specifies a reference to the RecommendationController\n\n```jsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n### onAddToCart \nthe `onAddToCart` prop sets a the callback function for when a add to cart button is clicked. This function will be passed an array of selected item ids and their quantities. \n\n```jsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n### results\nThe `results` prop specifies a reference to the results store array to use instead of the default `controller.store.results`. Note the first result will be displayed as the `seed` product. \n\n```jsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} results={controller.store.results} />\n```\n\n### title\nThe `title` prop specifies the bundle title\n\n```jsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} title={'Recommended Bundle'} />\n```\n\n### resultComponent\nThe `resultComponent` prop allows for a custom result component to be rendered. This component will be passed the following props -\n\n```jsx\n	{ \n		result: Product, \n		seed: boolean, \n		selected: boolean, \n		onProductSelect: (result:Product) => void\n	}\n```\n\n```jsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} resultComponent={<ResultSlot />} />\n```\n\n\n### hideSeed\nThe `hideSeed` prop specifies if the seed result should be rendered or not.  \n\n```jsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideSeed={true} />\n```\n\n### hideSeedText\nThe `hideSeedText` prop specifies if the seed result text should be rendered or not.  \n\n```jsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideSeedText={true} />\n```\n\n\n### hideCheckboxes\nThe `hideCheckboxes` prop specifies if the result checkboxes should be rendered or not.  \n\n```jsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideCheckboxes={true} />\n```\n\n### ctaButtonText\nThe `ctaButtonText` prop specifies the inner text to render in the add to cart button.\n\n```jsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonText={'Add Bundle'} />\n```\n\n### ctaButtonSuccessText\nThe `ctaButtonSuccessText` prop specifies text to temporarily render in the add to cart button after it is clicked.\n\n```jsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessText={'Thanks for Shopping!'} />\n```\n\n### ctaButtonSuccessTimeout\nThe `ctaButtonSuccessTimeout` prop specifies number of ms to show success text in add to cart button before reverting back to normal text\n\n```jsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessTimeout={1500} />\n```\n\n### ctaSlot\nThe `ctaSlot` prop allows for a custom add to cart cta component to be rendered. This component will be passed the following props -\n\n```jsx	\n	{ \n		cartStore: CartStore;\n		onclick: (e:any) => void\n	}\n```\n\n```jsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaSlot={<CTASlot />} />\n```\n\n### limit\nThe `limit` prop limits the number of results rendered\n\n```jsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} limit={5} />\n```\n\n### separatorIcon\nThe `separatorIcon` prop specifies the icon to render between products. Takes an object with `Icon` component props or a string.     \n\n```jsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} separatorIcon={'cog'} />\n```\n\n### separatorIconSeedOnly\nThe `separatorIconSeedOnly` prop specifies if the seperator Icon should only be rendered after the seed or after every product.     \n\n```jsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} separatorIconSeedOnly={true} />\n```\n\n### preselectedCount\nThe `preselectedCount` prop specifies how many products in the bundle will be preselected. This number will include the seed. Example `preselectedCount={3}` would be `seed` + 2 preselected items. If not provided, this will default to however many products are initially visible. \n\n```jsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} preselectedCount={4} />\n```\n\n### lazyRender \nThe `lazyRender` prop specifies an object of lazy rendering settings. The settings include an `enable` toggle (defaults to `true`) as well as an `offset` (default `\"10%\"`) to specify at what distance the component should start rendering relative to the bottom of the viewport.\n\n```jsx\nconst customLazyRenderProps = {\n	enabled: true,\n	offset: \"20px\" // any css margin values accepted - px, %, etc...\n}\n\n<RecommendationBundleList controller={controller} lazyRender={ customLazyRenderProps } onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n";
				var g = e('./components/src/components/Atoms/Icon/paths.tsx');
				const p = {
						title: 'Templates/RecommendationBundleList',
						component: i.a,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(m.oz, { options: { overrides: { code: b.Z } }, children: T }), (0, t.Y)(m.uY, { story: m.h1 })],
									}),
							},
						},
						decorators: [(y) => (0, t.Y)('div', { style: { maxWidth: '300px', height: '500px' }, children: (0, t.Y)(y, {}) })],
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
							limit: { description: 'limit the number of results rendered', table: { type: { summary: 'number' } }, control: { type: 'number' } },
							hideSeed: {
								description: 'Hide/show seed result',
								defaultValue: !1,
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideSeedText: { description: 'hide the seed text', table: { type: { summary: 'boolean' } }, control: { type: 'boolean' } },
							hideCheckboxes: { description: 'hide the checkboxes', table: { type: { summary: 'boolean' } }, control: { type: 'boolean' } },
							separatorIconSeedOnly: {
								description: 'boolean to only have seperator Icon for the seed product',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							separatorIcon: {
								defaultValue: 'plus',
								description: 'Icon to render between results',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'plus' } },
								control: { type: 'select', options: [...Object.keys(g.c)] },
							},
							preselectedCount: {
								description: 'Number of results to have selected by default. (seed included)',
								table: { type: { summary: 'number' } },
								control: { type: 'number' },
							},
							ctaButtonText: {
								description: 'text to render in add to cart button',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'Add All To Cart' } },
								control: { type: 'text' },
							},
							ctaButtonSuccessTimeout: {
								description: 'Number of ms to show success text in add to cart button before reverting back to normal text',
								defaultValue: 2e3,
								table: { type: { summary: 'number' } },
								control: { type: 'number' },
							},
							ctaButtonSuccessText: {
								description: 'text to temporarily render in the add to cart button after it is clicked',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'Bundle Added!' } },
								control: { type: 'text' },
							},
							ctaSlot: { description: 'Slot for custom add to cart component', table: { type: { summary: 'component' } } },
							lazyRender: {
								description: 'Lazy render settings object',
								defaultValue: { enabled: !0, offset: '10%' },
								table: { type: { summary: 'object' }, defaultValue: { summary: 'Lazy render settings object' } },
								control: { type: 'object' },
							},
							...o.F,
						},
					},
					P = { id: 'RecommendationBundle', tag: 'bundle', globals: { siteId: 'atkzs2', products: ['C-AD-W1-1869P'] } },
					v = u.p.recommendation(P),
					d = (y, { loaded: { controller: E } }) => (0, t.Y)(i.a, { ...y, controller: E, results: E.store.results });
				(d.loaders = [
					async () => (
						v.on('afterStore', async ({ controller: y }, E) => {
							y.store.results.forEach((h) => (h.mappings.core.url = 'javascript:void(0);')), await E();
						}),
						await v.search(),
						{ controller: v }
					),
				]),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
							source: {
								originalSource: `(props: RecommendationBundleListProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: RecommendationController;
  };
}) => {
  return <RecommendationBundleList {...props} controller={controller} results={controller.store.results} />;
}`,
								...d.parameters?.docs?.source,
							},
						},
					});
				const _ = ['Default'];
			},
			'./components/src/components/Templates/RecommendationBundleList/RecommendationBundleList.tsx'(B, a, e) {
				'use strict';
				e.d(a, { X: () => l, a: () => A });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					b = e('./components/src/utilities/defined.ts'),
					o = e('./components/src/utilities/mergeStyles.ts'),
					u = e('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'),
					T = e('./components/src/components/Atoms/Price/Price.tsx'),
					g = e('./components/src/components/Atoms/Button/Button.tsx'),
					p = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					P = e('./components/src/components/Atoms/Image/Image.tsx'),
					v = e('./components/src/components/Molecules/Result/Result.tsx'),
					d = e('./components/src/utilities/componentNameToClassName.ts'),
					_ = e('../../node_modules/classnames/index.js'),
					y = e.n(_),
					E = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					h = e('../../node_modules/deepmerge/dist/cjs.js'),
					R = e.n(h),
					f = e('./components/src/hooks/useLang.tsx');
				const x = () =>
						(0, m.AH)({
							'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper': {
								display: 'flex',
								'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper__checkbox': { position: 'relative', minWidth: '20px' },
								'.ss__result__details': { textAlign: 'left' },
							},
							'.ss__recommendation-profile-tracker': { display: 'flex', flexDirection: 'column' },
							'.ss__recommendation-bundle-list__wrapper': { order: '3' },
							'.ss__recommendation-bundle-list__wrapper__cta': {
								order: '2',
								'.ss__button': { cursor: 'pointer', border: '1px solid black' },
								'.ss__recommendation-bundle-list__wrapper__cta__inner__images': { display: 'flex', flexDirection: 'row' },
								'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper .ss__icon': {
									top: '50%',
									position: 'absolute',
									right: '-0.5em',
								},
								'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper:last-of-type .ss__icon': { display: 'none' },
								'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper': { padding: '0px 15px', position: 'relative' },
							},
						}),
					C = 'recommendationBundleList',
					A = (0, i.PA)((n) => {
						const r = { name: n.controller?.store?.profile?.tag?.toLowerCase(), ...n },
							{ treePath: s, disableStyles: c, controller: I, style: D, styleScript: S, themeStyleScript: L, ...O } = r,
							M = {
								recommendationBundle: {
									seedText: '',
									ctaInline: !1,
									limit: 5,
									preselectedCount: 2,
									carousel: { enabled: !1, seedInCarousel: !0 },
									ctaSlot: (w) => (0, t.Y)(l, { ...w }),
									resultComponent: (w) => (0, t.Y)(v.Q, { hideImage: !0, hideBadge: !0, ...w }),
									vertical: !0,
									separatorIcon: !1,
									alias: C,
									...(0, b.s)({ disableStyles: c }),
									theme: r?.theme,
									treePath: s,
								},
							},
							j = (0, o.Z)(r, x);
						return (0, t.Y)(u.g, { controller: I, ...j, ...M.recommendationBundle, ...O });
					}),
					l = (0, i.PA)((n) => {
						const r = n.cartStore,
							s = `ss__${(0, d.b)(C)}`;
						n.onAddToCart = (O) => {
							I(!0), n.onAddToCart(O), setTimeout(() => I(!1), n.ctaButtonSuccessTimeout);
						};
						const [c, I] = (0, E.J0)(!1);
						n.addedToCart = c;
						const D = {
								image: { className: `${s}__wrapper__cta__image`, theme: n?.theme, treePath: n.treePath },
								separatorIcon: {
									name: 'bundle-cart-separator',
									className: `${s}__wrapper__cta__icon--separator`,
									icon: 'plus',
									size: 12,
									theme: n?.theme,
									treePath: n.treePath,
								},
								icon: { name: 'bundle-cart', className: `${s}__wrapper__cta__icon`, size: 50, theme: n?.theme, treePath: n.treePath },
								subtotalStrike: { name: 'bundle-msrp', className: `${s}__wrapper__cta__price--strike`, theme: n?.theme, treePath: n.treePath },
								subtotalPrice: { className: `${s}__wrapper__cta__price`, name: 'bundle-price', theme: n?.theme, treePath: n.treePath },
								button: { className: `${s}__wrapper__cta__button`, theme: n?.theme, treePath: n.treePath },
							},
							S = R()({}, n.lang || {}),
							L = (0, f.u)(S, {});
						return (0, t.FD)('div', {
							className: `${s}__wrapper__cta`,
							children: [
								(0, t.FD)('div', {
									className: `${s}__wrapper__cta__inner`,
									children: [
										(0, t.Y)('div', {
											className: `${s}__wrapper__cta__inner__images`,
											children: r.items.map((O) => {
												const M = O.display.mappings.core;
												return (0, t.FD)('div', {
													className: `${s}__wrapper__cta__inner__image-wrapper`,
													children: [
														(0, t.Y)('a', { href: M.url, children: (0, t.Y)(P._, { src: M.thumbnailImageUrl, alt: M.name, lazy: !1 }) }),
														(0, t.Y)(p.I, { ...D.separatorIcon }),
													],
												});
											}),
										}),
										(0, t.FD)('div', {
											className: `${s}__wrapper__cta__subtotal`,
											'aria-atomic': 'false',
											'aria-live': 'polite',
											children: [
												n.ctaIcon
													? (0, t.Y)('div', {
															className: `${s}__wrapper__cta__subtotal__icon__wrapper`,
															children: (0, t.Y)(p.I, { ...D.icon, ...(typeof n.ctaIcon == 'string' ? { icon: n.ctaIcon } : n.ctaIcon) }),
													  })
													: (0, t.Y)(t.FK, {}),
												(0, t.Y)('span', { className: `${s}__wrapper__cta__subtotal__title`, children: `Subtotal for ${r.count} items` }),
												(0, t.FD)('div', {
													className: `${s}__wrapper__cta__subtotal__prices`,
													children: [
														r.msrp && r.msrp !== r.price
															? (0, t.FD)('label', {
																	className: `${s}__wrapper__cta__subtotal__strike`,
																	children: ['Was ', (0, t.Y)(T.g, { ...D.subtotalStrike, lineThrough: !0, value: r.msrp })],
															  })
															: (0, t.Y)(t.FK, {}),
														(0, t.Y)('label', {
															className: `${s}__wrapper__cta__subtotal__price`,
															children: (0, t.Y)(T.g, { ...D.subtotalPrice, value: r.price }),
														}),
													],
												}),
											],
										}),
									],
								}),
								(0, t.Y)('div', {
									children: (0, t.Y)(g.$, {
										...D.button,
										disabled: r.items.length == 0,
										disableStyles: !0,
										internalClassName: y()(`${s}__wrapper__cta__button`, { [`${s}__wrapper__cta__button--added`]: c }),
										'aria-live': c,
										onClick: (O) => n.onAddToCart(O),
										...(c ? L.ctaButtonSuccessText?.all : L.ctaButtonText?.all),
										children: n.addedToCart ? n.ctaButtonSuccessText : n.ctaButtonText,
									}),
								}),
							],
						});
					});
			},
			'./components/src/hooks/useIntersection.tsx'(B, a, e) {
				'use strict';
				e.d(a, { v: () => m });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const m = (i, b = '0px', o = !1) => {
					const [u, T] = (0, t.J0)(!1);
					return (
						(0, t.vJ)(() => {
							const g = new IntersectionObserver(
								([p]) => {
									T(p.isIntersecting), o && p.isIntersecting && g.unobserve(i.current);
								},
								{ rootMargin: b }
							);
							return (
								i.current && g.observe(i.current),
								() => {
									g.unobserve(i.current);
								}
							);
						}, []),
						u
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(B, a, e) {
				'use strict';
				e.d(a, { v: () => i });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const m = 250,
					i = (o, u = {}) => {
						const { rootMargin: T = '0px', fireOnce: g = !1, threshold: p = 0, minVisibleTime: P = 0 } = u,
							[v, d] = (0, t.J0)(!1),
							_ = (0, t.li)(null),
							y = (0, t.li)(null),
							[E, h] = (0, t.J0)(0),
							R = (0, t.hb)((f) => {
								(o.current = f), h((x) => x + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								d(!1);
								let f = null,
									x = null;
								if (!window.IntersectionObserver || !o.current) return;
								const C = () => {
										x && (window.clearInterval(x), (x = null));
									},
									A = () => {
										P > 0
											? ((y.current = Date.now()),
											  _.current && window.clearTimeout(_.current),
											  (_.current = window.setTimeout(() => {
													d(!0), g && o.current && f && f.unobserve(o.current);
											  }, P)))
											: (d(!0), g && o.current && f && f.unobserve(o.current));
									},
									l = () => {
										_.current && window.clearTimeout(_.current), (_.current = null), (y.current = null), d(!1);
									};
								return (
									(f = new IntersectionObserver(
										([n]) => {
											n.isIntersecting
												? o.current && b(o.current)
													? (C(), A())
													: (l(),
													  x ||
															(x = window.setInterval(() => {
																if (!o.current) {
																	C();
																	return;
																}
																b(o.current) && (C(), A());
															}, m)))
												: (C(), l());
										},
										{ rootMargin: T, threshold: p }
									)),
									o.current && f.observe(o.current),
									() => {
										d(!1), C(), _.current && window.clearTimeout(_.current), f && o.current && f.unobserve(o.current);
									}
								);
							}, [o, E]),
							{ inViewport: v, updateRef: R }
						);
					};
				function b(o) {
					return o && 'checkVisibility' in o ? o.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/utilities/componentArgs.ts'(B, a, e) {
				'use strict';
				e.d(a, { F: () => t });
				const t = {
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
			'./components/src/utilities/createImpressionObserver.ts'(B, a, e) {
				'use strict';
				e.d(a, { Q: () => o });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const i = 0.7,
					b = 1e3;
				function o(u) {
					const T = (0, t.li)(null),
						{ inViewport: g, updateRef: p } = (0, m.v)(T, { ...u, fireOnce: !0, threshold: i, minVisibleTime: b });
					return { ref: T, inViewport: g, updateRef: p };
				}
			},
			'./components/src/utilities/snapify.ts'(B, a, e) {
				'use strict';
				e.d(a, { p: () => f });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					m = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					i = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					b = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					o = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					u = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					T = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					g = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					p = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					P = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					v = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					d = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					_ = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					y = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					E = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const h = {},
					R = { globals: { siteId: '8uyt2m' } };
				class f {
					static recommendation(n) {
						const r = n.id;
						if (h[r]) return h[r];
						const s = (h[r] = C({ client: R, controller: n }));
						return (
							s.on('afterStore', async ({ controller: c }, I) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await I();
							}),
							s.init(),
							s
						);
					}
					static autocomplete(n) {
						const r = n.id;
						if (h[r]) return h[r];
						const s = (h[r] = A({ client: R, controller: n }));
						return (
							s.on('afterStore', async ({ controller: c }, I) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await I();
							}),
							s.init(),
							s
						);
					}
					static search(n) {
						const r = n.id;
						if (h[r]) return h[r];
						const s = (h[r] = x({ client: R, controller: n }));
						return (
							s.on('afterStore', async ({ controller: c }, I) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await I();
							}),
							s.init(),
							s
						);
					}
				}
				function x(l) {
					const n = new p.V(new v.E({ settings: { coreType: 'query', corePrefix: l.controller.id } }), P.X);
					return new m.Tp(l.controller, {
						client: new o.K(l.client.globals, l.client.config),
						store: new T.U(l.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new d.E(),
						profiler: new _.U(),
						logger: new y.V(),
						tracker: new E.J(l.client.globals),
					});
				}
				function C(l) {
					const n = new p.V(new v.E(), P.X).detach(!0);
					return new b.c(l.controller, {
						client: new o.K(l.client.globals, l.client.config),
						store: new g.t(l.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new d.E(),
						profiler: new _.U(),
						logger: new y.V(),
						tracker: new E.J(l.client.globals),
					});
				}
				function A(l) {
					const n = new p.V(new v.E(), P.X).detach();
					return new i.Z(l.controller, {
						client: new o.K(l.client.globals, l.client.config),
						store: new u.Y(l.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new d.E(),
						profiler: new _.U(),
						logger: new y.V(),
						tracker: new E.J(l.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(B, a, e) {
				'use strict';
				e.d(a, { Z: () => b });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const i = 'prism-block',
					b = (o) => {
						const u = (0, m.li)(null);
						return (
							(0, m.vJ)(() => {
								u.current && o.className?.includes('lang-') && !o.className?.includes(i) && window?.Prism?.highlightElement(u.current);
							}, [o.className, o.children, u]),
							(0, t.Y)('code', { ...o, ref: u, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(B) {
				function a(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (B.exports = a);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-RecommendationBundleList-RecommendationBundleList-stories.3c201e62.iframe.bundle.js.map
