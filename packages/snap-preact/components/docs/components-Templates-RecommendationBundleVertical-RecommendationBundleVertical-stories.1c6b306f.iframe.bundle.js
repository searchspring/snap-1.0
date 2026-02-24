(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[6969],
		{
			'./components/src/components/Templates/RecommendationBundleVertical/RecommendationBundleVertical.stories.tsx'(w, o, e) {
				'use strict';
				e.r(o), e.d(o, { Default: () => s, __namedExportsOrder: () => d, default: () => m });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = e('./components/src/components/Templates/RecommendationBundleVertical/RecommendationBundleVertical.tsx'),
					p = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					i = e('./components/src/utilities/snapify.ts');
				const y =
					"# RecommendationBundleVertical\n\nVertically renders a recommended bundle of products with seed, recommendations and add to cart display.\n\n## Sub-components\n- RecommendationBundle\n\n## Usage\n\nAdditional [Swiper Component Props](https://swiperjs.com/react#swiper-props) can be specified, but may need to be camelCased where appropriate.\nAdditional [Swiper Modules](https://swiperjs.com/swiper-api#modules) can be provided via the `modules` prop; these may need additional props and or stylesheets.\n\n### controller\nThe required `controller` prop specifies a reference to the RecommendationController\n\n```jsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n### onAddToCart \nthe `onAddToCart` prop sets a the callback function for when a add to cart button is clicked. This function will be passed an array of selected item ids and their quantities. \n\n```jsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n### results\nThe `results` prop specifies a reference to the results store array to use instead of the default `controller.store.results`. Note the first result will be displayed as the `seed` product. \n\n```jsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} results={controller.store.results} />\n```\n\n### carousel \nThe `carousel` prop specifies an object of carousel settings. These settings will be merged with the default settings (listed below). All valid Carousel component props (and any non-documented SwiperJS props) can be used here. The below example uses the `prevButton`, `nextButton` and `loop` props from the Carousel:\n\n```jsx\ntype BundleCarouselProps = {\n	enabled: boolean;\n	seedInCarousel?: boolean;\n} & CarouselProps\n\nconst customCarouselProps = {\n	enabled: false\n}\n\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ customCarouselProps } />\n```\n\n### enabled\nThe `enabled` prop is a sub prop under the `carousel` prop. It specifies weather the bundle should render as a carousel or not.\n\n```jsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ enabled:true } />\n```\n\n### hideSeed\nThe `hideSeed` prop specifies if the seed result should be rendered or not.  \n\n```jsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideSeed={true} />\n```\n\n### seedInCarousel\nThe `seedInCarousel` prop is a sub prop under the `carousel` prop. It specifies if the seed product should be included in the carousel or not.  \n\n```jsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ seedInCarousel:true } />\n```\n\n### pagination\nThe `pagination` prop is a sub prop under the `carousel` prop. It specifies if the carousel should display pagination dots. \n\n```jsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ pagination:true } />\n```\n\n### hideButtons\nThe `hideButtons` is a sub prop under the `carousel` prop. It specifies if the carousel should hide prev/next buttons.\n\n```jsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ hideButtons:true }><Recommendation/>\n```\n\n### prevButton\nThe `prevButton` prop is a sub prop under the `carousel` prop. It specifies the previous button element of the carousel. This can be a string or JSX element. \n\n```jsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ prevButton: '<' } />\n```\n\n### nextButton\nThe `nextButton` prop  is a sub prop under the `carousel` prop. It specifies the next button element of the carousel. This can be a string or JSX element. \n\n```jsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ nextButton: '>' } />\n```\n\n### title\nThe `title` prop specifies the carousel title\n\n```jsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} title={'Recommended Bundle'} />\n```\n\n### resultComponent\nThe `resultComponent` prop allows for a custom result component to be rendered. This component will be passed the following props -\n\n```jsx\n	{ \n		result: Product, \n		seed: boolean, \n		selected: boolean, \n		onProductSelect: (result:Product) => void\n	}\n```\n\n```jsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} resultComponent={<ResultSlot />} />\n```\n\n### ctaButtonText\nThe `ctaButtonText` prop specifies the inner text to render in the add to cart button.\n\n```jsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonText={'Add Bundle'} />\n```\n\n### ctaButtonSuccessText\nThe `ctaButtonSuccessText` prop specifies text to temporarily render in the add to cart button after it is clicked.\n\n```jsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessText={'Thanks for Shopping!'} />\n```\n\n### ctaButtonSuccessTimeout\nThe `ctaButtonSuccessTimeout` prop specifies number of ms to show success text in add to cart button before reverting back to normal text\n\n```jsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessTimeout={1500} />\n```\n\n### ctaIcon\nThe `ctaIcon` prop specifies the icon to render in the CTA. Takes an object with `Icon` component props or a string.     \n\n```jsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaIcon={'bag'} />\n```\n\n### ctaSlot\nThe `ctaSlot` prop allows for a custom add to cart cta component to be rendered. This component will be passed the following props -\n\n```jsx	\n	{ \n		cartStore: CartStore;\n		onclick: (e:any) => void\n	}\n```\n\n```jsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaSlot={<CTASlot />} />\n```\n\n### preselectedCount\nThe `preselectedCount` prop specifies how many products in the bundle will be preselected. This number will include the seed. Example `preselectedCount={3}` would be `seed` + 2 preselected items. If not provided, this will default to however many products are initially visible. \n\n```jsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} preselectedCount={4} />\n```\n\n### seedText\nThe `seedText` prop specifies text to be rendered as a badge in the seed product.   \n\n```jsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} seedText={\"Main Product\"} />\n```\n\n### separatorIcon\nThe `separatorIcon` prop specifies the icon to render between products. Takes an object with `Icon` component props or a string.     \n\n```jsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} separatorIcon={'cog'} />\n```\n\n### separatorIconSeedOnly\nThe `separatorIconSeedOnly` prop specifies if the seperator Icon should only be rendered after the seed or after every product.     \n\n```jsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} separatorIconSeedOnly={true} />\n```\n\n\n### hideCheckboxes\nThe `hideCheckboxes` prop specifies if the bundle checkboxes should be rendered. \n\n```jsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideCheckboxes={true} />\n```\n\n### modules\nThe `modules` prop accepts additional [Swiper Modules](https://swiperjs.com/swiper-api#modules) - these may need additional props and or stylesheets to function. We include `Navigation` and `Pagination` modules by default.\n\n```jsx\nimport { Scrollbar } from 'swiper';\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} modules={[Scrollbar]} scrollbar={{ draggable: true }} />\n```\n\n### lazyRender \nThe `lazyRender` prop specifies an object of lazy rendering settings. The settings include an `enable` toggle (defaults to `true`) as well as an `offset` (default `\"10%\"`) to specify at what distance the component should start rendering relative to the bottom of the viewport.\n\n```jsx\nconst customLazyRenderProps = {\n	enabled: true,\n	offset: \"20px\" // any css margin values accepted - px, %, etc...\n}\n\n<RecommendationBundleVertical controller={controller} lazyRender={ customLazyRenderProps } onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n### breakpoints\nAn object that modifies the responsive behavior of the carousel at various viewports. \n\nThe object key specified the viewport for when the parameters will be applied. \n\nThe default configuration contains the following properties, however **`any BundleRecommendation props`**, or [Swiper API parameters](https://swiperjs.com/react#swiper-props) can also be specified. \n\n`slidesPerView` - number of products to display per page\n\n`slidesPerGroup` - number of products to scroll by when next/previous button is clicked\n\n`spaceBetween` - spacing between each product\n\n```typescript\nconst defaultRecommendationBreakpoints = {\n	0: {\n		carousel: {\n			enabled: false,\n		},\n		limit: 2\n	},\n	768: {\n		slidesPerView: 3,\n		slidesPerGroup: 3,\n		spaceBetween: 10,\n	},\n	1024: {\n		slidesPerView: 3,\n		slidesPerGroup: 3,\n		spaceBetween: 10,\n	},\n	1200: {\n		slidesPerView: 4,\n		slidesPerGroup: 4,\n		spaceBetween: 10,\n	},\n};\n```\n\n```jsx\n<RecommendationBundleVertical controller={controller} onAddToCart={(e, items)=>{console.log(items)}} breakpoints={defaultRecommendationBreakpoints} />\n```\n\n";
				var u = e('./components/src/components/Atoms/Icon/paths.tsx');
				const m = {
						title: 'Templates/RecommendationBundleVertical',
						component: a.a,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, n.FD)('div', {
										children: [(0, n.Y)(c.oz, { options: { overrides: { code: p.Z } }, children: y }), (0, n.Y)(c.uY, { story: c.h1 })],
									}),
							},
						},
						decorators: [(g) => (0, n.Y)('div', { style: { maxWidth: '300px', height: '500px' }, children: (0, n.Y)(g, {}) })],
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
							carousel: {
								description: 'Carousel settings object',
								defaultValue: { enabled: !0, loop: !1 },
								table: { type: { summary: 'object' }, defaultValue: { summary: 'Carousel settings object' } },
								control: { type: 'object' },
							},
							preselectedCount: {
								description: 'Number of results to have selected by default. (seed included)',
								table: { type: { summary: 'number' } },
								control: { type: 'number' },
							},
							hideCheckboxes: {
								defaultValue: !1,
								description: 'Hide/show bundle checkboxes in results',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							seedText: {
								description: 'Text to render in seed product badge',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'Seed Product' } },
								control: { type: 'text' },
							},
							hideSeed: {
								description: 'Hide/show seed result',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							separatorIconSeedOnly: {
								description: 'boolean to only have seperator Icon for the seed product',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							separatorIcon: {
								defaultValue: 'plus',
								description: 'Icon to render between results',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'plus' } },
								control: { type: 'select', options: [...Object.keys(u.c)] },
							},
							ctaButtonText: {
								description: 'text to render in add to cart button',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'Add All To Cart' } },
								control: { type: 'text' },
							},
							ctaIcon: {
								desciption: 'The `ctaIcon` prop specifies the icon to render in the CTA. Takes an object with `Icon` component props or a string.',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'bag' } },
								control: { type: 'select', options: [...Object.keys(u.c)] },
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
							ctaSlot: { description: 'Slot for custom add to cart component', table: { type: { summary: 'component' } } },
							lazyRender: {
								description: 'Lazy render settings object',
								defaultValue: { enabled: !0, offset: '10%' },
								table: { type: { summary: 'object' }, defaultValue: { summary: 'Lazy render settings object' } },
								control: { type: 'object' },
							},
							breakpoints: {
								defaultValue: void 0,
								description: 'Recommendation title',
								table: { type: { summary: 'object' }, defaultValue: { summary: 'Breakpoint object' } },
								control: { type: 'object' },
							},
							...t.F,
						},
					},
					T = { id: 'RecommendationBundle', tag: 'bundle', globals: { siteId: 'atkzs2', products: ['C-AD-W1-1869P'] } },
					x = i.p.recommendation(T),
					s = (g, { loaded: { controller: v } }) => (0, n.Y)(a.a, { ...g, controller: v, results: v.store.results });
				(s.loaders = [
					async () => (
						x.on('afterStore', async ({ controller: g }, v) => {
							g.store.results.forEach((h) => (h.mappings.core.url = 'javascript:void(0);')), await v();
						}),
						await x.search(),
						{ controller: x }
					),
				]),
					(s.args = { limit: 3 }),
					(s.parameters = {
						...s.parameters,
						docs: {
							...s.parameters?.docs,
							source: {
								originalSource: `(props: RecommendationBundleVerticalProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: RecommendationController;
  };
}) => {
  return <RecommendationBundleVertical {...props} controller={controller} results={controller.store.results} />;
}`,
								...s.parameters?.docs?.source,
							},
						},
					});
				const d = ['Default'];
			},
			'./components/src/components/Templates/RecommendationBundleVertical/RecommendationBundleVertical.tsx'(w, o, e) {
				'use strict';
				e.d(o, { a: () => u });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					p = e('./components/src/utilities/defined.ts'),
					t = e('./components/src/utilities/mergeStyles.ts'),
					i = e('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx');
				const y = () =>
						(0, c.AH)({
							'.ss__recommendation-bundle-vertical__wrapper': { flexDirection: 'column' },
							'.ss__recommendation-bundle-vertical__wrapper__cta': { textAlign: 'center' },
						}),
					u = (0, a.PA)((m) => {
						const T = { name: m.controller?.store?.profile?.tag?.toLowerCase(), ...m },
							{ treePath: x, disableStyles: s, controller: d, style: g, styleScript: v, themeStyleScript: h, ...E } = T,
							b = {
								recommendationBundle: {
									ctaInline: !1,
									carousel: { enabled: !1 },
									separatorIcon: !1,
									alias: 'recommendationBundleVertical',
									...(0, p.s)({ disableStyles: s }),
									theme: T?.theme,
									treePath: x,
								},
							},
							C = (0, t.Z)(T, y);
						return (0, n.Y)(i.g, { controller: d, ...C, ...b.recommendationBundle, ...E });
					});
			},
			'./components/src/hooks/useIntersection.tsx'(w, o, e) {
				'use strict';
				e.d(o, { v: () => c });
				var n = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = (a, p = '0px', t = !1) => {
					const [i, y] = (0, n.J0)(!1);
					return (
						(0, n.vJ)(() => {
							const u = new IntersectionObserver(
								([m]) => {
									y(m.isIntersecting), t && m.isIntersecting && u.unobserve(a.current);
								},
								{ rootMargin: p }
							);
							return (
								a.current && u.observe(a.current),
								() => {
									u.unobserve(a.current);
								}
							);
						}, []),
						i
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(w, o, e) {
				'use strict';
				e.d(o, { v: () => a });
				var n = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = 250,
					a = (t, i = {}) => {
						const { rootMargin: y = '0px', fireOnce: u = !1, threshold: m = 0, minVisibleTime: T = 0 } = i,
							[x, s] = (0, n.J0)(!1),
							d = (0, n.li)(null),
							g = (0, n.li)(null),
							[v, h] = (0, n.J0)(0),
							E = (0, n.hb)((b) => {
								(t.current = b), h((C) => C + 1);
							}, []);
						return (
							(0, n.vJ)(() => {
								s(!1);
								let b = null,
									C = null;
								if (!window.IntersectionObserver || !t.current) return;
								const I = () => {
										C && (window.clearInterval(C), (C = null));
									},
									j = () => {
										T > 0
											? ((g.current = Date.now()),
											  d.current && window.clearTimeout(d.current),
											  (d.current = window.setTimeout(() => {
													s(!0), u && t.current && b && b.unobserve(t.current);
											  }, T)))
											: (s(!0), u && t.current && b && b.unobserve(t.current));
									},
									r = () => {
										d.current && window.clearTimeout(d.current), (d.current = null), (g.current = null), s(!1);
									};
								return (
									(b = new IntersectionObserver(
										([l]) => {
											l.isIntersecting
												? t.current && p(t.current)
													? (I(), j())
													: (r(),
													  C ||
															(C = window.setInterval(() => {
																if (!t.current) {
																	I();
																	return;
																}
																p(t.current) && (I(), j());
															}, c)))
												: (I(), r());
										},
										{ rootMargin: y, threshold: m }
									)),
									t.current && b.observe(t.current),
									() => {
										s(!1), I(), d.current && window.clearTimeout(d.current), b && t.current && b.unobserve(t.current);
									}
								);
							}, [t, v]),
							{ inViewport: x, updateRef: E }
						);
					};
				function p(t) {
					return t && 'checkVisibility' in t ? t.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/utilities/componentArgs.ts'(w, o, e) {
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
			'./components/src/utilities/createImpressionObserver.ts'(w, o, e) {
				'use strict';
				e.d(o, { Q: () => t });
				var n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					c = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const a = 0.7,
					p = 1e3;
				function t(i) {
					const y = (0, n.li)(null),
						{ inViewport: u, updateRef: m } = (0, c.v)(y, { ...i, fireOnce: !0, threshold: a, minVisibleTime: p });
					return { ref: y, inViewport: u, updateRef: m };
				}
			},
			'./components/src/utilities/snapify.ts'(w, o, e) {
				'use strict';
				e.d(o, { p: () => b });
				var n = e('../../node_modules/mobx/dist/mobx.esm.js'),
					c = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					a = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					p = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					i = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					y = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					u = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					m = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					T = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					x = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					s = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					d = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					g = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					v = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, n.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const h = {},
					E = { globals: { siteId: '8uyt2m' } };
				class b {
					static recommendation(l) {
						const _ = l.id;
						if (h[_]) return h[_];
						const B = (h[_] = I({ client: E, controller: l }));
						return (
							B.on('afterStore', async ({ controller: f }, R) => {
								f.log.debug('controller', f), f.log.debug('store', f.store.toJSON()), await R();
							}),
							B.init(),
							B
						);
					}
					static autocomplete(l) {
						const _ = l.id;
						if (h[_]) return h[_];
						const B = (h[_] = j({ client: E, controller: l }));
						return (
							B.on('afterStore', async ({ controller: f }, R) => {
								f.log.debug('controller', f), f.log.debug('store', f.store.toJSON()), await R();
							}),
							B.init(),
							B
						);
					}
					static search(l) {
						const _ = l.id;
						if (h[_]) return h[_];
						const B = (h[_] = C({ client: E, controller: l }));
						return (
							B.on('afterStore', async ({ controller: f }, R) => {
								f.log.debug('controller', f), f.log.debug('store', f.store.toJSON()), await R();
							}),
							B.init(),
							B
						);
					}
				}
				function C(r) {
					const l = new m.V(new x.E({ settings: { coreType: 'query', corePrefix: r.controller.id } }), T.X);
					return new c.Tp(r.controller, {
						client: new t.K(r.client.globals, r.client.config),
						store: new y.U(r.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new s.E(),
						profiler: new d.U(),
						logger: new g.V(),
						tracker: new v.J(r.client.globals),
					});
				}
				function I(r) {
					const l = new m.V(new x.E(), T.X).detach(!0);
					return new p.c(r.controller, {
						client: new t.K(r.client.globals, r.client.config),
						store: new u.t(r.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new s.E(),
						profiler: new d.U(),
						logger: new g.V(),
						tracker: new v.J(r.client.globals),
					});
				}
				function j(r) {
					const l = new m.V(new x.E(), T.X).detach();
					return new a.Z(r.controller, {
						client: new t.K(r.client.globals, r.client.config),
						store: new i.Y(r.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new s.E(),
						profiler: new d.U(),
						logger: new g.V(),
						tracker: new v.J(r.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(w, o, e) {
				'use strict';
				e.d(o, { Z: () => p });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 'prism-block',
					p = (t) => {
						const i = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								i.current && t.className?.includes('lang-') && !t.className?.includes(a) && window?.Prism?.highlightElement(i.current);
							}, [t.className, t.children, i]),
							(0, n.Y)('code', { ...t, ref: i, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(w) {
				function o(e) {
					var n = new Error("Cannot find module '" + e + "'");
					throw ((n.code = 'MODULE_NOT_FOUND'), n);
				}
				(o.keys = () => []), (o.resolve = o), (o.id = '../../node_modules/memoizerific sync recursive'), (w.exports = o);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-RecommendationBundleVertical-RecommendationBundleVertical-stories.1c6b306f.iframe.bundle.js.map
