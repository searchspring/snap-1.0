(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9797],
		{
			'./components/src/components/Templates/RecommendationBundleList/RecommendationBundleList.stories.tsx'(I, l, e) {
				'use strict';
				e.r(l), e.d(l, { Default: () => i, __namedExportsOrder: () => p, default: () => b });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					m = e('./components/src/components/Templates/RecommendationBundleList/RecommendationBundleList.tsx'),
					h = e('./components/src/utilities/storybook.tsx'),
					n = e('./components/src/utilities/componentArgs.ts'),
					_ = e('./components/src/utilities/snapify.ts');
				const E =
					"# RecommendationBundleList\n\nRenders a recommended bundle of products with seed, recommendations in list form, and add to cart display.\n\n## Sub-components\n- RecommendationBundle\n\n### controller\nThe required `controller` prop specifies a reference to the RecommendationController\n\n```jsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n### onAddToCart \nthe `onAddToCart` prop sets a the callback function for when a add to cart button is clicked. This function will be passed an array of selected item ids and their quantities. \n\n```jsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n### results\nThe `results` prop specifies a reference to the results store array to use instead of the default `controller.store.results`. Note the first result will be displayed as the `seed` product. \n\n```jsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} results={controller.store.results} />\n```\n\n### title\nThe `title` prop specifies the bundle title\n\n```jsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} title={'Recommended Bundle'} />\n```\n\n### resultComponent\nThe `resultComponent` prop allows for a custom result component to be rendered. This component will be passed the following props -\n\n```jsx\n	{ \n		result: Product, \n		seed: boolean, \n		selected: boolean, \n		onProductSelect: (result:Product) => void\n	}\n```\n\n```jsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} resultComponent={<ResultSlot />} />\n```\n\n\n### hideSeed\nThe `hideSeed` prop specifies if the seed result should be rendered or not.  \n\n```jsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideSeed={true} />\n```\n\n### hideSeedText\nThe `hideSeedText` prop specifies if the seed result text should be rendered or not.  \n\n```jsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideSeedText={true} />\n```\n\n\n### hideCheckboxes\nThe `hideCheckboxes` prop specifies if the result checkboxes should be rendered or not.  \n\n```jsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideCheckboxes={true} />\n```\n\n### ctaButtonText\nThe `ctaButtonText` prop specifies the inner text to render in the add to cart button.\n\n```jsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonText={'Add Bundle'} />\n```\n\n### ctaButtonSuccessText\nThe `ctaButtonSuccessText` prop specifies text to temporarily render in the add to cart button after it is clicked.\n\n```jsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessText={'Thanks for Shopping!'} />\n```\n\n### ctaButtonSuccessTimeout\nThe `ctaButtonSuccessTimeout` prop specifies number of ms to show success text in add to cart button before reverting back to normal text\n\n```jsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessTimeout={1500} />\n```\n\n### ctaSlot\nThe `ctaSlot` prop allows for a custom add to cart cta component to be rendered. This component will be passed the following props -\n\n```jsx	\n	{ \n		cartStore: CartStore;\n		onclick: (e:any) => void\n	}\n```\n\n```jsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaSlot={<CTASlot />} />\n```\n\n### limit\nThe `limit` prop limits the number of results rendered\n\n```jsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} limit={5} />\n```\n\n### separatorIcon\nThe `separatorIcon` prop specifies the icon to render between products. Takes an object with `Icon` component props or a string.     \n\n```jsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} separatorIcon={'cog'} />\n```\n\n### separatorIconSeedOnly\nThe `separatorIconSeedOnly` prop specifies if the seperator Icon should only be rendered after the seed or after every product.     \n\n```jsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} separatorIconSeedOnly={true} />\n```\n\n### preselectedCount\nThe `preselectedCount` prop specifies how many products in the bundle will be preselected. This number will include the seed. Example `preselectedCount={3}` would be `seed` + 2 preselected items. If not provided, this will default to however many products are initially visible. \n\n```jsx\n<RecommendationBundleList controller={controller} onAddToCart={(e, items)=>{console.log(items)}} preselectedCount={4} />\n```\n\n### lazyRender \nThe `lazyRender` prop specifies an object of lazy rendering settings. The settings include an `enable` toggle (defaults to `true`) as well as an `offset` (default `\"10%\"`) to specify at what distance the component should start rendering relative to the bottom of the viewport.\n\n```jsx\nconst customLazyRenderProps = {\n	enabled: true,\n	offset: \"20px\" // any css margin values accepted - px, %, etc...\n}\n\n<RecommendationBundleList controller={controller} lazyRender={ customLazyRenderProps } onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n";
				var y = e('./components/src/components/Atoms/Icon/paths.tsx');
				const b = {
						title: 'Templates/RecommendationBundleList',
						component: m.a,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(u.oz, { options: { overrides: { code: h.Z } }, children: E }), (0, t.Y)(u.uY, { story: u.h1 })],
									}),
							},
						},
						decorators: [(T) => (0, t.Y)('div', { style: { maxWidth: '300px', height: '500px' }, children: (0, t.Y)(T, {}) })],
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
								table: { category: 'Templates Legal', type: { summary: 'string | JSX Element' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							onAddToCart: {
								description: 'onClick event handler for add bundle to cart button in CTA',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								action: 'onAddToCart',
							},
							limit: {
								description: 'limit the number of results rendered',
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							hideSeed: {
								description: 'Hide/show seed result',
								defaultValue: !1,
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideSeedText: {
								description: 'hide the seed text',
								table: { category: 'Templates Legal', type: { summary: 'boolean' } },
								control: { type: 'boolean' },
							},
							hideCheckboxes: {
								description: 'hide the checkboxes',
								table: { category: 'Templates Legal', type: { summary: 'boolean' } },
								control: { type: 'boolean' },
							},
							separatorIconSeedOnly: {
								description: 'boolean to only have seperator Icon for the seed product',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							separatorIcon: {
								defaultValue: 'plus',
								description: 'Icon to render between results',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'plus' } },
								control: { type: 'select', options: [...Object.keys(y.c)] },
							},
							preselectedCount: {
								description: 'Number of results to have selected by default. (seed included)',
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							ctaButtonText: {
								description: 'text to render in add to cart button',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Add All To Cart' } },
								control: { type: 'text' },
							},
							ctaButtonSuccessTimeout: {
								description: 'Number of ms to show success text in add to cart button before reverting back to normal text',
								defaultValue: 2e3,
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							ctaButtonSuccessText: {
								description: 'text to temporarily render in the add to cart button after it is clicked',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Bundle Added!' } },
								control: { type: 'text' },
							},
							ctaSlot: {
								description: 'Slot for custom add to cart component',
								table: { category: 'Templates Legal', type: { summary: 'component' } },
							},
							lazyRender: {
								description: 'Lazy render settings object',
								defaultValue: { enabled: !0, offset: '10%' },
								table: { category: 'Templates Legal', type: { summary: 'object' }, defaultValue: { summary: 'Lazy render settings object' } },
								control: { type: 'object' },
							},
							...n.F,
						},
					},
					C = { id: 'RecommendationBundle', tag: 'bundle', globals: { siteId: 'atkzs2', products: ['VW1982-UQZ-AS'] } },
					P = _.p.recommendation(C),
					i = (T, { loaded: { controller: v } }) => (0, t.Y)(m.a, { ...T, controller: v, results: v.store.results });
				(i.loaders = [
					async () => (
						P.on('afterStore', async ({ controller: T }, v) => {
							T.store.results.forEach((g) => (g.mappings.core.url = 'javascript:void(0);')), await v();
						}),
						await P.search(),
						{ controller: P }
					),
				]),
					(i.parameters = {
						...i.parameters,
						docs: {
							...i.parameters?.docs,
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
								...i.parameters?.docs?.source,
							},
						},
					});
				const p = ['Default'];
			},
			'./components/src/components/Templates/RecommendationBundleList/RecommendationBundleList.tsx'(I, l, e) {
				'use strict';
				e.d(l, { X: () => d, a: () => c });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('./components/src/utilities/defined.ts'),
					_ = e('./components/src/utilities/mergeProps.ts'),
					E = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'),
					b = e('./components/src/components/Atoms/Price/Price.tsx'),
					C = e('./components/src/components/Atoms/Button/Button.tsx'),
					P = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					i = e('./components/src/components/Atoms/Image/Image.tsx'),
					p = e('./components/src/components/Molecules/Result/Result.tsx'),
					T = e('./components/src/utilities/componentNameToClassName.ts'),
					v = e('../../node_modules/classnames/index.js'),
					g = e.n(v),
					B = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					f = e('../../node_modules/deepmerge/dist/cjs.js'),
					x = e.n(f),
					O = e('./components/src/hooks/useLang.tsx');
				const A = () =>
						(0, u.AH)({
							'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper': {
								display: 'flex',
								'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper__checkbox': { position: 'relative', minWidth: '20px' },
								'.ss__result__details': { textAlign: 'left' },
							},
							'.ss__recommendation-profile-tracker': { display: 'flex', flexDirection: 'column' },
							'.ss__recommendation-bundle-list__wrapper': { order: '3' },
							'.ss__recommendation-bundle-list__wrapper__cta': {
								order: '2',
								'.ss__button': { cursor: 'pointer' },
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
					r = 'recommendationBundleList',
					c = (0, h.PA)((o) => {
						const a = (0, m.u)(),
							s = { name: o.controller?.store?.profile?.tag?.toLowerCase(), ...o },
							{ treePath: L, disableStyles: w, controller: R, style: U, styleScript: S, themeStyleScript: D, ...M } = s,
							K = {
								recommendationBundle: {
									seedText: '',
									ctaInline: !1,
									limit: 5,
									preselectedCount: 2,
									carousel: { enabled: !1, seedInCarousel: !0 },
									ctaSlot: (j) => (0, t.Y)(d, { ...j }),
									resultComponent: (j) => (0, t.Y)(p.Q, { hideImage: !0, hideBadge: !0, ...j }),
									vertical: !0,
									separatorIcon: !1,
									alias: r,
									...(0, n.s)({ disableStyles: w }),
									theme: s?.theme,
									treePath: L,
								},
							},
							W = (0, _.v6)(r, a, {}, s),
							N = (0, E.Z)(W, A);
						return (0, t.Y)(y.g, { controller: R, ...N, ...K.recommendationBundle, ...M });
					}),
					d = (0, h.PA)((o) => {
						const a = o.cartStore,
							s = `ss__${(0, T.b)(r)}`;
						o.onAddToCart = (D) => {
							w(!0), o.onAddToCart(D), setTimeout(() => w(!1), o.ctaButtonSuccessTimeout);
						};
						const [L, w] = (0, B.J0)(!1);
						o.addedToCart = L;
						const R = {
								image: { className: `${s}__wrapper__cta__image`, theme: o?.theme, treePath: o.treePath },
								separatorIcon: {
									name: 'bundle-cart-separator',
									className: `${s}__wrapper__cta__icon--separator`,
									icon: 'plus',
									size: 12,
									theme: o?.theme,
									treePath: o.treePath,
								},
								icon: { name: 'bundle-cart', className: `${s}__wrapper__cta__icon`, size: 50, theme: o?.theme, treePath: o.treePath },
								subtotalStrike: { name: 'bundle-msrp', className: `${s}__wrapper__cta__price--strike`, theme: o?.theme, treePath: o.treePath },
								subtotalPrice: { className: `${s}__wrapper__cta__price`, name: 'bundle-price', theme: o?.theme, treePath: o.treePath },
								button: { className: `${s}__wrapper__cta__button`, theme: o?.theme, treePath: o.treePath },
							},
							U = x()({}, o.lang || {}),
							S = (0, O.u)(U, {});
						return (0, t.FD)(t.FK, {
							children: [
								(0, t.FD)('div', {
									className: `${s}__wrapper__cta__inner`,
									children: [
										(0, t.Y)('div', {
											className: `${s}__wrapper__cta__inner__images`,
											children: a.items.map((D) => {
												const M = D.display.mappings.core;
												return (0, t.FD)('div', {
													className: `${s}__wrapper__cta__inner__image-wrapper`,
													children: [
														(0, t.Y)('a', { href: M.url, children: (0, t.Y)(i._, { src: M.thumbnailImageUrl, alt: M.name, lazy: !1 }) }),
														(0, t.Y)(P.I, { ...R.separatorIcon }),
													],
												});
											}),
										}),
										(0, t.FD)('div', {
											className: `${s}__wrapper__cta__subtotal`,
											'aria-atomic': 'false',
											'aria-live': 'polite',
											children: [
												o.ctaIcon
													? (0, t.Y)('div', {
															className: `${s}__wrapper__cta__subtotal__icon__wrapper`,
															children: (0, t.Y)(P.I, { ...R.icon, ...(typeof o.ctaIcon == 'string' ? { icon: o.ctaIcon } : o.ctaIcon) }),
													  })
													: (0, t.Y)(t.FK, {}),
												(0, t.Y)('span', { className: `${s}__wrapper__cta__subtotal__title`, children: `Subtotal for ${a.count} items` }),
												(0, t.FD)('div', {
													className: `${s}__wrapper__cta__subtotal__prices`,
													children: [
														a.msrp && a.msrp !== a.price
															? (0, t.FD)('label', {
																	className: `${s}__wrapper__cta__subtotal__strike`,
																	children: ['Was ', (0, t.Y)(b.g, { ...R.subtotalStrike, lineThrough: !0, value: a.msrp })],
															  })
															: (0, t.Y)(t.FK, {}),
														(0, t.Y)('label', {
															className: `${s}__wrapper__cta__subtotal__price`,
															children: (0, t.Y)(b.g, { ...R.subtotalPrice, value: a.price }),
														}),
													],
												}),
											],
										}),
									],
								}),
								(0, t.Y)('div', {
									className: `${s}__cta__button__wrapper`,
									children: (0, t.Y)(C.$, {
										...R.button,
										disabled: a.items.length == 0,
										disableStyles: !0,
										internalClassName: g()(`${s}__cta__button`, { [`${s}__cta__button--added`]: L }),
										'aria-live': L,
										onClick: (D) => o.onAddToCart(D),
										...(L ? S.ctaButtonSuccessText?.all : S.ctaButtonText?.all),
										children: o.addedToCart ? o.ctaButtonSuccessText : o.ctaButtonText,
									}),
								}),
							],
						});
					});
			},
			'./components/src/hooks/useIntersection.tsx'(I, l, e) {
				'use strict';
				e.d(l, { v: () => u });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const u = (m, h = '0px', n = !1) => {
					const [_, E] = (0, t.J0)(!1);
					return (
						(0, t.vJ)(() => {
							const y = new IntersectionObserver(
								([b]) => {
									E(b.isIntersecting), n && b.isIntersecting && y.unobserve(m.current);
								},
								{ rootMargin: h }
							);
							return (
								m.current && y.observe(m.current),
								() => {
									y.unobserve(m.current);
								}
							);
						}, []),
						_
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(I, l, e) {
				'use strict';
				e.d(l, { v: () => m });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const u = 250,
					m = (n, _ = {}) => {
						const { rootMargin: E = '0px', fireOnce: y = !1, threshold: b = 0, minVisibleTime: C = 0 } = _,
							[P, i] = (0, t.J0)(!1),
							p = (0, t.li)(null),
							T = (0, t.li)(null),
							[v, g] = (0, t.J0)(0),
							B = (0, t.hb)((f) => {
								(n.current = f), g((x) => x + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								i(!1);
								let f = null,
									x = null;
								if (!window.IntersectionObserver || !n.current) return;
								const O = () => {
										x && (window.clearInterval(x), (x = null));
									},
									A = () => {
										C > 0
											? ((T.current = Date.now()),
											  p.current && window.clearTimeout(p.current),
											  (p.current = window.setTimeout(() => {
													i(!0), y && n.current && f && f.unobserve(n.current);
											  }, C)))
											: (i(!0), y && n.current && f && f.unobserve(n.current));
									},
									r = () => {
										p.current && window.clearTimeout(p.current), (p.current = null), (T.current = null), i(!1);
									};
								return (
									(f = new IntersectionObserver(
										([c]) => {
											c.isIntersecting
												? n.current && h(n.current)
													? (O(), A())
													: (r(),
													  x ||
															(x = window.setInterval(() => {
																if (!n.current) {
																	O();
																	return;
																}
																h(n.current) && (O(), A());
															}, u)))
												: (O(), r());
										},
										{ rootMargin: E, threshold: b }
									)),
									n.current && f.observe(n.current),
									() => {
										i(!1), O(), p.current && window.clearTimeout(p.current), f && n.current && f.unobserve(n.current);
									}
								);
							}, [n, v]),
							{ inViewport: P, updateRef: B }
						);
					};
				function h(n) {
					return n && 'checkVisibility' in n ? n.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/utilities/componentArgs.ts'(I, l, e) {
				'use strict';
				e.d(l, { F: () => t });
				const t = {
					className: {
						description: 'Class name appended to root element of component',
						table: { type: { summary: 'string' }, category: 'default Props', defaultValue: { summary: 'ss__${component-name}' } },
						control: { type: 'text' },
					},
					disableStyles: {
						defaultValue: !1,
						description: 'Disable all default styling',
						table: { type: { summary: 'boolean' }, category: 'default Props', defaultValue: { summary: !1 } },
						control: { type: 'boolean' },
					},
					style: {
						description: 'Inline style',
						table: { type: { summary: 'string, object' }, category: 'default Props' },
						control: { type: 'text' },
					},
					theme: {
						description: 'Specify specific sub component props',
						table: { type: { summary: 'object' }, category: 'default Props' },
						control: { type: 'none' },
					},
				};
			},
			'./components/src/utilities/createImpressionObserver.ts'(I, l, e) {
				'use strict';
				e.d(l, { Q: () => n });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					u = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const m = 0.7,
					h = 1e3;
				function n(_) {
					const E = (0, t.li)(null),
						{ inViewport: y, updateRef: b } = (0, u.v)(E, { ..._, fireOnce: !0, threshold: m, minVisibleTime: h });
					return { ref: E, inViewport: y, updateRef: b };
				}
			},
			'./components/src/utilities/snapify.ts'(I, l, e) {
				'use strict';
				e.d(l, { p: () => f });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					u = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					m = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					h = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					n = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					_ = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					E = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					y = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					b = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					C = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					P = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					i = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					p = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					T = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					v = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const g = {},
					B = { globals: { siteId: 'atkzs2' } };
				class f {
					static recommendation(c) {
						const d = c.id;
						if (g[d]) return g[d];
						const o = (g[d] = O({ client: B, controller: c }));
						return (
							o.on('afterStore', async ({ controller: a }, s) => {
								a.log.debug('controller', a), a.log.debug('store', a.store.toJSON()), await s();
							}),
							o.init(),
							o
						);
					}
					static autocomplete(c) {
						const d = c.id;
						if (g[d]) return g[d];
						const o = (g[d] = A({ client: B, controller: c }));
						return (
							o.on('afterStore', async ({ controller: a }, s) => {
								a.log.debug('controller', a), a.log.debug('store', a.store.toJSON()), await s();
							}),
							o.init(),
							o
						);
					}
					static search(c) {
						const d = c.id;
						if (g[d]) return g[d];
						const o = (g[d] = x({ client: B, controller: c }));
						return (
							o.on('afterStore', async ({ controller: a }, s) => {
								a.log.debug('controller', a), a.log.debug('store', a.store.toJSON()), await s();
							}),
							o.init(),
							o
						);
					}
				}
				function x(r) {
					const c = new b.V(new P.E({ settings: { coreType: 'query', corePrefix: r.controller.id } }), C.X);
					return new u.Tp(r.controller, {
						client: new n.K(r.client.globals, r.client.config),
						store: new E.U(r.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new i.E(),
						profiler: new p.U(),
						logger: new T.V(),
						tracker: new v.J(r.client.globals),
					});
				}
				function O(r) {
					const c = new b.V(new P.E(), C.X).detach(!0);
					return new h.c(r.controller, {
						client: new n.K(r.client.globals, r.client.config),
						store: new y.t(r.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new i.E(),
						profiler: new p.U(),
						logger: new T.V(),
						tracker: new v.J(r.client.globals),
					});
				}
				function A(r) {
					const c = new b.V(new P.E(), C.X).detach();
					return new m.Z(r.controller, {
						client: new n.K(r.client.globals, r.client.config),
						store: new _.Y(r.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new i.E(),
						profiler: new p.U(),
						logger: new T.V(),
						tracker: new v.J(r.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(I, l, e) {
				'use strict';
				e.d(l, { Z: () => h });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const m = 'prism-block',
					h = (n) => {
						const _ = (0, u.li)(null);
						return (
							(0, u.vJ)(() => {
								_.current && n.className?.includes('lang-') && !n.className?.includes(m) && window?.Prism?.highlightElement(_.current);
							}, [n.className, n.children, _]),
							(0, t.Y)('code', { ...n, ref: _, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(I) {
				function l(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (I.exports = l);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-RecommendationBundleList-RecommendationBundleList-stories.7b36019d.iframe.bundle.js.map
