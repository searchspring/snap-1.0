(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[9885],
		{
			'./components/src/components/Organisms/Autocomplete/Autocomplete.stories.tsx'(B, _, e) {
				'use strict';
				e.r(_), e.d(_, { Default: () => h, __namedExportsOrder: () => P, default: () => a });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					f = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					m = e('./components/src/components/Organisms/Autocomplete/Autocomplete.tsx'),
					o = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					r = e('./components/src/utilities/snapify.ts');
				const l =
						"# Autocomplete\n\nRenders an autocomplete popup that binds to an `<input>` element.\n\nThe autocomplete layout renders terms, facets, banners, and results.\n\n## Components Used\n- Facets\n- Banner\n- Results\n- Icon\n\n## Usage\n```jsx\nimport { Autocomplete } from '@searchspring/snap-preact-components';\n```\n\n### input\nThe required `input` prop expects either:\n\n- a string CSS selector that targets `<input>` element(s) to bind to\n\n- an `<input>` element to bind to\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} />\n```\n\n### controller\nThe required `controller` prop specifies a reference to the autocomplete controller.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} />\n```\n\n### width\nThe `width` prop specifies a width for the overall component. The default value is '100%'.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} width=\"800px\" />\n```\n\n### horizontalTerms\nThe `horizontalTerms` prop will alter autocomplete's CSS to display terms horizontally.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} horizontalTerms={true} />\n```\n\n### vertical\nThe `vertical` prop will alter autocomplete's CSS to display in a vertical layout.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} vertical={true} />\n```\n\n### termsTitle\nThe `termsTitle` prop will display the given text above the autocomplete terms area. The default value is blank and does not affect the trending terms title `trendingTitle`.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} termsTitle={'Terms'} />\n```\n\n### trendingTitle\nThe `trendingTitle` prop will display the given text above the autocomplete terms area when trending terms are displayed. The default value is 'Popular Searches' and does not affect non-trending terms title `termsTitle`. Also requires `controller.config.settings.trending.limit` to be configured)\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} trendingTitle={'Trending'} />\n```\n\n### historyTitle\nThe `historyTitle` prop will display the given text above the autocomplete historical terms area when historical terms are displayed. The default value is 'Previously Searched' and does not affect trending/non-trending terms title `termsTitle` & `trendingTitle`. Also requires `controller.config.settings.history.limit` to be configured.)\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} historyTitle={'History'} />\n```\n\n### facetsTitle\nThe `facetsTitle` prop will display the given text above the autocomplete facets area. (default is blank)\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} facetsTitle={'Filter By'} />\n```\n\n### contentTitle\nThe `contentTitle` prop will display the given text above the autocomplete content area. (default is blank)\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} contentTitle={'Results'} />\n```\n\n### seeMoreButtonText\nThe `seeMoreButtonText` prop will display the given text in the see more button.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} seeMoreButtonText={'See More!'} />\n```\n\nThe `seeMoreButtonText` prop can also take a function returning a string. The function is pased the Autocomplete controller. \n\n```jsx\n\nconst seeMoreButtonText = (controller) => {\n    const { pagination, filters, search } = controller.store;\n\n    return `See ${pagination.totalResults} ${filters.length > 0 ? 'filtered' : ''} result${pagination.totalResults == 1 ? '' : 's'} for \"${search.query?.string}\"`;\n}\n\n<Autocomplete controller={controller} input={'#searchInput'} seeMoreButtonText={seeMoreButtonText} />\n```\n\n### viewportMaxHeight\nThe `viewportMaxHeight` prop will restrict autocomplete from overflowing the viewport. The max height of autocomplete will always be visible in the viewport. \n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} viewportMaxHeight={true} />\n```\n\n### termsSlot\nThe `termsSlot` prop accepts a custom JSX element to render instead of the default terms section. This will also replace the trending terms.\n\nThe following props are available to be used within your custom component: `terms`, `trending`, `termsTitle`, `trendingTitle`, `showTrending`, `valueProps`, `emIfy`, `controller`\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} termsSlot={<CustomTermsComponent />} />\n```\n\n### facetsSlot\nThe `facetsSlot` prop accepts a custom JSX element to render instead of the default facets section. \n\nThe following props are available to be used within your custom component: `facets`, `merchandising`, `facetsTitle`, `hideBanners`, `controller`, `valueProps`\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} facetsSlot={<CustomFacetsComponent />} />\n```\n\n### contentSlot\nThe `contentSlot` prop accepts a custom JSX element to render instead of the default content section. \n\nThe following props are available to be used within your custom component: `results`, `merchandising`, `search`, `pagination`, `filters`, `controller`\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} contentSlot={<CustomContentComponent />} />\n```\n\n### resultsSlot\nThe `resultsSlot` prop accepts a custom JSX element to render instead of the default results section. \n\nThe following props are available to be used within your custom component: `results`, `contentTitle`, `controller`\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} resultsSlot={<CustomResultsComponent />} />\n```\n\n### resultComponent\nThe `resultComponent` prop specifies a custom result component to render.\n\n```jsx\n\nconst CustomResult = ({\n	controller \n	result\n	theme\n}) => {\n	return <div>{result.mappings.core?.name}</div>\n}\n\n<Autocomplete controller={controller} input={'#searchInput'} resultComponent={CustomResult} />\n```\n\n### noResultsSlot\nThe `noResultsSlot` prop accepts a custom JSX element to render instead of the default no results section. \n\nThe following props are available to be used within your custom component: `search`, `pagination`, `controller`\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} noResultsSlot={<CustomNoResultsComponent />} />\n```\n\n### linkSlot\nThe `linkSlot` prop accepts a custom JSX element to render instead of the default \"see n results for keyword\" link section. \n\nThe following props are available to be used within your custom component: `search`, `results`, `pagination`, `filters`, `controller`\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} linkSlot={<CustomLinkComponent />} />\n```\n\n### hideFacets\nThe `hideFacets` prop specifies if the facets within autocomplete should be rendered.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} hideFacets={true} />\n```\n\n### hideTerms\nThe `hideTerms` prop specifies if the terms section within autocomplete should be rendered.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} hideTerms={true} />\n```\n\n### hideHistory\nThe `hideHistory` prop specifies if the historical terms and results within autocomplete should be rendered.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} hideHistory={true} />\n```\n\n### hideTrending\nThe `hideTrending` prop specifies if the trending terms and results within autocomplete should be rendered.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} hideTrending={true} />\n```\n\n### hideContent\nThe `hideContent` prop specifies if the content area within autocomplete should be rendered.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} hideContent={true} />\n```\n\n### hideBanners\nThe `hideBanners` prop specifies if the banners within autocomplete should be rendered. (inline banners not affected)\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} hideBanners={true} />\n```\n\n### hideLink\nThe `hideLink` prop specifies if the \"see n results for keyword\" text within autocomplete should be rendered.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} hideLink={true} />\n```\n\n### retainTrending\nThe `retainTrending` prop specifies if the trending terms within autocomplete should be rendered when there is a query.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} retainTrending={true} />\n```\n\n### retainHistory\nThe `retainHistory` prop specifies if the trending terms within autocomplete should be rendered when there is a query. \n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} retainHistory={true} />\n```\n\n### breakpoints\nThe `breakpoints` prop contains a breakpoints object that is passed to the `<Results />` sub-component.\nWhen the viewport is between the Object's key value, those props will be merged with any exisiting Autocomplete component props.\n\nDefault Autocomplete `breakpoints` object:\n\n```js\nconst breakpoints = {\n    0: {\n        columns: 2,\n        rows: 1,\n        hideFacets: true,\n        vertical: true,\n    },\n    540: {\n        columns: 3,\n        rows: 1,\n        vertical: true,\n    },\n    768: {\n        columns: 2,\n        rows: 3,\n    },\n};\n```\n\nSee `<Results />` component documentation for further details.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} breakpoints={breakpoints} />\n```\n\n\n### onFacetOptionClick\nThe `onFacetOptionClick` prop contains a custom onClick event handler for facet options. Function is passed the click event. \n\n\n```js\nconst CustomOnClickFunc = (e) => {\n    console.log('You Clicked a Facet Option!' , e)\n};\n```\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} onFacetOptionClick={CustomOnClickFunc} />\n```\n\n\n\n### onTermClick\nThe `onTermClick` prop contains a custom onClick event handler for Suggested & Trending Terms. Function is passed the click event. \n\n\n```js\nconst customOnClickFunc = (e) => {\n    console.log('You Clicked a term!' , e)\n};\n```\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} onTermClick={customOnClickFunc} />\n```",
					a = {
						title: 'Organisms/Autocomplete',
						component: m.j,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, n.FD)('div', {
										children: [(0, n.Y)(f.oz, { options: { overrides: { code: o.Z } }, children: l }), (0, n.Y)(f.uY, { story: f.h1 })],
									}),
							},
						},
						decorators: [
							(p) =>
								(0, n.FD)('div', {
									style: { maxWidth: '960px', position: 'relative' },
									children: [
										(0, n.Y)('input', {
											type: 'text',
											id: 'searchInput',
											placeholder: 'try me!',
											autoComplete: 'off',
											style: { width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #3a23ad' },
										}),
										(0, n.Y)(p, {}),
									],
								}),
						],
						argTypes: {
							controller: {
								description: 'Autocomplete controller reference',
								type: { required: !0 },
								table: { type: { summary: 'Autocomplete controller object' } },
								control: { type: 'none' },
							},
							input: {
								description: 'input element reference',
								type: { required: !0 },
								table: { type: { summary: 'Element or String as CSS Selector' } },
								control: { type: 'none' },
							},
							width: {
								defaultValue: '100%',
								description: 'Change width of the component',
								table: { type: { summary: 'string' }, defaultValue: { summary: '100%' } },
								control: { type: 'text' },
							},
							hideTerms: {
								defaultValue: !1,
								description: 'prevent all terms from rendering (also applicable to trending and history terms)',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideHistory: {
								defaultValue: !1,
								description: 'prevent historical terms and results from rendering',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideTrending: {
								defaultValue: !1,
								description: 'prevent trending terms and results from rendering',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							retainHistory: {
								defaultValue: !1,
								description: 'allow history terms to render even when there is a query in the input',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							retainTrending: {
								defaultValue: !1,
								description: 'allow trending terms to render even when there is a query in the input',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideFacets: {
								defaultValue: !1,
								description: 'prevent facets from rendering',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideContent: {
								defaultValue: !1,
								description: 'prevent content area from rendering',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideBanners: {
								defaultValue: !1,
								description: 'prevent merchandising banners from rendering (inline banners not affected)',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideLink: {
								defaultValue: !1,
								description: 'prevent the "see n results for keyword" link from rendering (hideContent will also hide this)',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							horizontalTerms: {
								defaultValue: !1,
								description: 'display terms horizontally, (not required if vertical prop is true)',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							vertical: {
								defaultValue: !1,
								description: 'use a vertical (single column) layout',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							termsTitle: {
								defaultValue: '',
								description: 'Change terms header title',
								table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							trendingTitle: {
								defaultValue: 'Popular Searches',
								description: 'Change trending terms header title',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'Popular Searches' } },
								control: { type: 'text' },
							},
							historyTitle: {
								defaultValue: 'Previously Searched',
								description: 'Change historical terms header title',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'Previously Searched' } },
								control: { type: 'text' },
							},
							facetsTitle: {
								defaultValue: '',
								description: 'Change facets header title',
								table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							contentTitle: {
								defaultValue: '',
								description: 'Change content header title',
								table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							seeMoreButtonText: {
								defaultValue: 'See ${pagination.totalResults} results for "${search.query?.string}"',
								description: 'Text to render in the see more button',
								table: { type: { summary: 'string || function' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							viewportMaxHeight: {
								defaultValue: !1,
								description: 'Autocomplete fully visible in viewport',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							termsSlot: { description: 'Slot for custom terms component', table: { type: { summary: 'component' } }, control: { type: 'none' } },
							facetsSlot: { description: 'Slot for custom facets component', table: { type: { summary: 'component' } }, control: { type: 'none' } },
							contentSlot: { description: 'Slot for custom content component', table: { type: { summary: 'component' } }, control: { type: 'none' } },
							linkSlot: {
								description: 'Slot for custom "see n results for keyword" link component',
								table: { type: { summary: 'component' } },
								control: { type: 'none' },
							},
							resultsSlot: {
								description: 'Slot for custom results component & title.',
								table: { type: { summary: 'component' } },
								control: { type: 'none' },
							},
							resultComponent: { description: 'Slot for custom result component', table: { type: { summary: 'component' } } },
							noResultsSlot: {
								description: 'Slot for custom no-results component.',
								table: { type: { summary: 'component' } },
								control: { type: 'none' },
							},
							breakpoints: {
								description: 'Breakpoints options object',
								table: { type: { summary: 'object' }, defaultValue: { summary: 'Breakpoint object' } },
								control: { type: 'none' },
							},
							onFacetOptionClick: {
								description: 'Custom onClick event handler for facet options.',
								table: { type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onFacetOptionClick',
							},
							onTermClick: {
								description: 'Custom onClick event handler for Suggested & Trending Terms',
								table: { type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onTermClick',
							},
							...t.F,
						},
					},
					E = r.p.autocomplete({ id: 'Autocomplete', selector: '#searchInput', globals: { siteId: 'atkzs2' }, settings: { trending: { limit: 5 } } }),
					h = (p, { loaded: { controller: u } }) => (
						setTimeout(() => {
							u.bind();
						}),
						(0, n.Y)(m.j, { ...p, controller: u, input: u?.config.selector })
					);
				(h.loaders = [async () => ({ controller: await E })]),
					(h.parameters = {
						...h.parameters,
						docs: {
							...h.parameters?.docs,
							source: {
								originalSource: `(args: AutocompleteProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: AutocompleteController;
  };
}) => {
  // bind after input exists
  setTimeout(() => {
    controller.bind();
  });
  return <Autocomplete {...args} controller={controller} input={controller?.config.selector} />;
}`,
								...h.parameters?.docs?.source,
							},
						},
					});
				const P = ['Default'];
			},
			'./components/src/components/Atoms/Banner/Banner.tsx'(B, _, e) {
				'use strict';
				e.d(_, { l: () => C });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					f = e('../../node_modules/preact/dist/preact.module.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					t = e('../../node_modules/classnames/index.js'),
					r = e.n(t),
					l = e('./components/src/providers/cache.tsx'),
					a = e('./components/src/providers/controller.tsx'),
					E = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('./components/src/providers/withTracking.tsx'),
					P = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/utilities/mergeProps.ts'),
					u = e('./components/src/utilities/mergeStyles.ts'),
					A = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					I = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const g = () => (0, o.AH)({ ' *': { boxSizing: 'border-box' }, '& iframe, img': { maxWidth: '100%', height: 'auto' } }),
					C = (0, a.Bk)(
						(0, m.PA)((d) => {
							const O = (0, E.u)(),
								x = { treePath: (0, P.LU)() },
								s = (0, p.v6)('banner', O, x, d),
								{ controller: c, type: i, className: D, internalClassName: y } = s,
								T = s.content || c?.store?.merchandising.content;
							if (i === A.c.INLINE) return console.warn(`BannerType '${A.c.INLINE}' is not supported in <Banner /> component`), (0, n.Y)(f.FK, {});
							const R = (0, u.Z)(s, g),
								b = T?.[i]?.[0]?.value;
							if (!i || !b) return (0, n.Y)(f.FK, {});
							const W = (0, I.hb)(
								(0, h.W)((v) =>
									(0, n.Y)('div', {
										className: r()('ss__banner', `ss__banner--${i}`, D, y),
										...R,
										ref: v.trackingRef,
										dangerouslySetInnerHTML: { __html: typeof b == 'string' ? b : b.join('') },
									})
								),
								[b, i]
							);
							return (0, n.Y)(l._, { children: (0, n.Y)(W, { ...s }) });
						})
					);
			},
			'./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'(B, _, e) {
				'use strict';
				e.d(_, { _: () => C });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					f = e('../../node_modules/preact/dist/preact.module.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					t = e.n(o),
					r = e('./components/src/providers/cache.tsx'),
					l = e('./components/src/providers/controller.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					E = e('./components/src/providers/withTracking.tsx'),
					h = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/utilities/mergeProps.ts'),
					p = e('./components/src/utilities/mergeStyles.ts'),
					u = e('./components/src/hooks/useA11y.tsx'),
					A = e('./components/src/types.ts'),
					I = e('../../node_modules/mobx-react-lite/es/index.js');
				const g = ({ width: d }) =>
						(0, m.AH)({
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: d,
							'&.ss__inline-banner--grid': { flexDirection: 'column' },
							'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
							'& iframe': { maxWidth: '100%' },
						}),
					C = (0, l.Bk)(
						(0, E.W)(
							(0, I.PA)((d) => {
								const O = (0, a.u)(),
									M = (0, h.LU)(),
									x = { layout: A.V.grid, width: 'auto', treePath: M },
									s = (0, P.v6)('inlineBanner', O, x, d),
									{ banner: c, className: i, internalClassName: D, disableA11y: y, layout: T, onClick: R } = s,
									U = (0, p.Z)(s, g);
								return c && c.value
									? (0, n.Y)(r._, {
											children: (0, n.Y)('div', {
												onClick: (b) => {
													R && R(b, c);
												},
												role: 'article',
												ref: (b) => {
													y || (0, u.iy)(b), (d.trackingRef.current = b);
												},
												className: t()('ss__inline-banner', `ss__inline-banner--${T}`, i, D),
												...U,
												dangerouslySetInnerHTML: { __html: c.value },
											}),
									  })
									: (0, n.Y)(f.FK, {});
							})
						)
					);
			},
			'./components/src/components/Organisms/Facets/Facets.tsx'(B, _, e) {
				'use strict';
				e.d(_, { J: () => C });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					f = e('../../node_modules/preact/dist/preact.module.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					t = e.n(o),
					r = e('../../node_modules/deepmerge/dist/cjs.js'),
					l = e.n(r),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					E = e('./components/src/components/Organisms/Facet/Facet.tsx'),
					h = e('./components/src/providers/cache.tsx'),
					P = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					p = e('./components/src/providers/treePath.tsx'),
					u = e('./components/src/utilities/defined.ts'),
					A = e('./components/src/utilities/mergeProps.ts'),
					I = e('./components/src/utilities/mergeStyles.ts');
				const g = () => (0, m.AH)({}),
					C = (0, a.PA)((d) => {
						const O = (0, P.u)(),
							M = (0, p.LU)(),
							x = { facets: d.controller?.store?.facets, treePath: M };
						let s = (0, A.v6)('facets', O, x, d);
						const { limit: c, onFacetOptionClick: i, disableStyles: D, className: y, internalClassName: T, controller: R, treePath: U } = s,
							b = (S) => {
								i && i(S), R?.setFocused && R?.setFocused();
							},
							W = {
								components: {
									facetGridOptions: { onClick: b },
									facetHierarchyOptions: { onClick: b },
									facetListOptions: { onClick: b },
									facetPaletteOptions: { onClick: b },
								},
							},
							v = l()(W, s?.theme || {}, { arrayMerge: (S, N) => N });
						s = { ...s, theme: v };
						let { facets: L } = s;
						c && L && c > 0 && (L = L.slice(0, +c));
						const k = { facet: { internalClassName: 'ss__facets__facet', ...(0, u.s)({ disableStyles: D }), theme: s.theme, treePath: U } },
							V = (0, I.Z)(s, g);
						return L && L?.length > 0
							? (0, n.Y)(h._, {
									children: (0, n.Y)('div', {
										className: t()('ss__facets', y, T),
										...V,
										children: L.map((S) => (0, n.Y)(E.s, { ...k.facet, facet: S }, S.field)),
									}),
							  })
							: (0, n.Y)(f.FK, {});
					});
			},
			'./components/src/components/Organisms/Results/Results.tsx'(B, _, e) {
				'use strict';
				e.d(_, { n: () => y });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					f = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/preact/dist/preact.module.js'),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('../../node_modules/classnames/index.js'),
					r = e.n(t),
					l = e('../../node_modules/deepmerge/dist/cjs.js'),
					a = e.n(l),
					E = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					h = e('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					P = e('./components/src/components/Molecules/Result/Result.tsx'),
					p = e('./components/src/types.ts'),
					u = e('./components/src/utilities/defined.ts'),
					A = e('./components/src/utilities/mergeProps.ts'),
					I = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/providers/cache.tsx'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = e('./components/src/providers/withTracking.tsx'),
					O = e('./components/src/providers/snap.tsx'),
					M = e('./components/src/providers/treePath.tsx'),
					x = e('./components/src/hooks/useDisplaySettings.tsx'),
					s = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					c = e('./components/src/hooks/useComponent.tsx');
				const i = ({ gapSize: T, columns: R }) =>
						(0, f.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gap: T,
							gridTemplateRows: 'auto',
							gridTemplateColumns: `repeat(${R}, 1fr)`,
							'& .ss__result, & .ss__result-layout': {
								boxSizing: 'border-box',
								flex: '0 1 auto',
								width: `calc(${100 / R}% - (${R - 1} * ${T} / ${R} ) )`,
								marginRight: T,
								marginBottom: T,
								[`&:nth-of-type(${R}n)`]: { marginRight: '0' },
								[`&:nth-last-of-type(-n+${R})`]: { marginBottom: '0' },
							},
							'@supports (display: grid)': { display: 'grid', '& .ss__result, & .ss__result-layout': { width: 'initial', flex: void 0, margin: 0 } },
						}),
					D = (0, d.W)(P.Q),
					y = (0, o.PA)((T) => {
						const R = (0, C.u)(),
							U = (0, M.LU)(),
							b = {
								0: { columns: T.columns || 1 },
								540: { columns: T.columns || 2 },
								768: { columns: T.columns || 3 },
								991: { columns: T.columns || 4 },
							},
							W = { results: T.controller?.store?.results, columns: 4, gapSize: '20px', layout: p.V.grid, breakpoints: b, treePath: U };
						let v = (0, A.v6)('results', R, W, T);
						if (!T.theme?.name) {
							const j = (0, x.X)(v?.breakpoints || {}),
								H = a()(v?.theme || {}, j?.theme || {}, { arrayMerge: (X, z) => z });
							v = { ...v, ...j, theme: H };
						}
						const { disableStyles: L, className: k, internalClassName: V, layout: S, theme: N, controller: w, treePath: F } = v;
						let { resultComponent: K } = v;
						const J = {
							result: { internalClassName: 'ss__results__result', ...(0, u.s)({ disableStyles: L }), theme: v?.theme, treePath: F },
							inlineBanner: {
								controller: w,
								internalClassName: 'ss__results__inline-banner',
								...(0, u.s)({ disableStyles: L }),
								theme: v?.theme,
								treePath: F,
							},
						};
						let Y = v.results;
						v?.columns && v?.rows && v.columns > 0 && v.rows > 0 && (Y = v.results?.slice(0, v.columns * v.rows));
						const $ = (0, I.Z)({ ...v, columns: S == p.V.list ? 1 : v.columns }, i);
						if (typeof K == 'string') {
							const j = (0, O.uk)();
							if (j?.templates?.library.import.component.result && ((K = (0, c.x)(j?.templates?.library.import.component.result, K)), !K))
								return (0, n.Y)(m.FK, {});
						}
						return Y?.length
							? (0, n.Y)(g._, {
									children: (0, n.Y)('div', {
										...$,
										className: r()('ss__results', `ss__results-${v.layout}`, k, V),
										children: Y.map((j) =>
											(() => {
												switch (j.type) {
													case E.c.BANNER:
														return (0, f.n)(h._, { ...J.inlineBanner, key: j.id, banner: j, layout: v.layout });
													default:
														if (K && w) {
															const H = K;
															return (0, n.Y)(s.o, {
																result: j,
																controller: w,
																children: (0, n.Y)(H, { controller: w, result: j, theme: N, treePath: F }, j.id),
															});
														} else return (0, n.Y)(D, { ...J.result, result: j, layout: v.layout, controller: w }, j.id);
												}
											})()
										),
									}),
							  })
							: (0, n.Y)(m.FK, {});
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(B, _, e) {
				'use strict';
				e.d(_, { o: () => h });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					f = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					t = e.n(o),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					l = e('./components/src/utilities/mergeProps.ts'),
					a = e('./components/src/utilities/createImpressionObserver.ts');
				const E = { ResultTracker: () => (0, f.AH)({}) },
					h = (0, m.PA)((P) => {
						const p = (0, r.u)(),
							u = (0, l.v6)('resultTracker', p, {}, P),
							A = { impression: !0, click: !0 },
							{ children: I, result: g, track: C, controller: d, className: O, internalClassName: M, disableStyles: x, style: s } = u,
							c = { ...A, ...C },
							{ ref: i, inViewport: D } = (0, a.Q)();
						D && c.impression && d?.track.product.impression(g);
						const y = {};
						return (
							x ? s && (y.css = [s]) : (y.css = [E.ResultTracker(), s]),
							(0, n.Y)('div', {
								className: t()('ss__result-tracker', `ss__${d?.type}-result-tracker`, O, M),
								onClick: (T) => {
									c.click && d?.track.product.click(T, g);
								},
								ref: i,
								...y,
								children: I,
							})
						);
					});
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(B, _, e) {
				'use strict';
				e.d(_, { v: () => m });
				var n = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const f = 250,
					m = (t, r = {}) => {
						const { rootMargin: l = '0px', fireOnce: a = !1, threshold: E = 0, minVisibleTime: h = 0 } = r,
							[P, p] = (0, n.J0)(!1),
							u = (0, n.li)(null),
							A = (0, n.li)(null),
							[I, g] = (0, n.J0)(0),
							C = (0, n.hb)((d) => {
								(t.current = d), g((O) => O + 1);
							}, []);
						return (
							(0, n.vJ)(() => {
								p(!1);
								let d = null,
									O = null;
								if (!window.IntersectionObserver || !t.current) return;
								const M = () => {
										O && (window.clearInterval(O), (O = null));
									},
									x = () => {
										h > 0
											? ((A.current = Date.now()),
											  u.current && window.clearTimeout(u.current),
											  (u.current = window.setTimeout(() => {
													p(!0), a && t.current && d && d.unobserve(t.current);
											  }, h)))
											: (p(!0), a && t.current && d && d.unobserve(t.current));
									},
									s = () => {
										u.current && window.clearTimeout(u.current), (u.current = null), (A.current = null), p(!1);
									};
								return (
									(d = new IntersectionObserver(
										([c]) => {
											c.isIntersecting
												? t.current && o(t.current)
													? (M(), x())
													: (s(),
													  O ||
															(O = window.setInterval(() => {
																if (!t.current) {
																	M();
																	return;
																}
																o(t.current) && (M(), x());
															}, f)))
												: (M(), s());
										},
										{ rootMargin: l, threshold: E }
									)),
									t.current && d.observe(t.current),
									() => {
										p(!1), M(), u.current && window.clearTimeout(u.current), d && t.current && d.unobserve(t.current);
									}
								);
							}, [t, I]),
							{ inViewport: P, updateRef: C }
						);
					};
				function o(t) {
					return t && 'checkVisibility' in t ? t.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/providers/withTracking.tsx'(B, _, e) {
				'use strict';
				e.d(_, { N: () => o, W: () => t });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					f = e('./components/src/utilities/createImpressionObserver.ts'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const o = 'sstracking';
				function t(r) {
					return (a) => {
						const { controller: E, result: h, banner: P, type: p, content: u, ...A } = a;
						if (a.trackingRef) return (0, n.Y)(r, { ...a });
						!E && (!p || !u) && console.warn('Warning: No controller provided to withTracking', a),
							!h && !P && (!p || !u) && console.warn('Warning: No result or banner provided to withTracking');
						const { ref: I, inViewport: g, updateRef: C } = (0, f.Q)(),
							d = (h || P || (p && u?.[p]?.[0]))?.responseId,
							O = (0, m.li)(d),
							M = (0, m.li)(!1);
						O.current !== d && (M.current = !0),
							(0, m.vJ)(() => {
								O.current !== d && ((O.current = d), C(I.current));
							}, [d, C]),
							(0, m.vJ)(() => {
								M.current && !g && (M.current = !1);
							}, [g, d]);
						const x = p && u && !h && ['search', 'autocomplete'].includes(E?.type || '');
						g && !M.current && (x ? E?.track.banner.impression(u[p][0]) : h?.bundleSeed || E?.track.product.impression(h || P));
						const s = (0, m.hb)(
							(i) => {
								x ? E?.track.banner.click(i, u[p][0]) : E?.track.product.click(i, h || P);
							},
							[E, h, P, p, u]
						);
						(0, m.vJ)(() => {
							const i = I.current;
							if (i)
								return (
									i.setAttribute(o, 'true'),
									i.addEventListener('click', s, !0),
									() => {
										i.removeEventListener('click', s, !0);
									}
								);
						}, [s]);
						const c = {
							...A,
							controller: E,
							result: h,
							banner: P,
							type: p,
							content: u,
							trackingRef: (0, m.hb)(
								(i) => {
									C(i);
								},
								[C]
							),
						};
						return (0, n.Y)(r, { ...c });
					};
				}
			},
			'./components/src/utilities/componentArgs.ts'(B, _, e) {
				'use strict';
				e.d(_, { F: () => n });
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
			'./components/src/utilities/createImpressionObserver.ts'(B, _, e) {
				'use strict';
				e.d(_, { Q: () => t });
				var n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					f = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const m = 0.7,
					o = 1e3;
				function t(r) {
					const l = (0, n.li)(null),
						{ inViewport: a, updateRef: E } = (0, f.v)(l, { ...r, fireOnce: !0, threshold: m, minVisibleTime: o });
					return { ref: l, inViewport: a, updateRef: E };
				}
			},
			'./components/src/utilities/snapify.ts'(B, _, e) {
				'use strict';
				e.d(_, { p: () => d });
				var n = e('../../node_modules/mobx/dist/mobx.esm.js'),
					f = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					m = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					o = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					r = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					l = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					a = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					E = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					h = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					P = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					p = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					u = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					A = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					I = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, n.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const g = {},
					C = { globals: { siteId: '8uyt2m' } };
				class d {
					static recommendation(c) {
						const i = c.id;
						if (g[i]) return g[i];
						const D = (g[i] = M({ client: C, controller: c }));
						return (
							D.on('afterStore', async ({ controller: y }, T) => {
								y.log.debug('controller', y), y.log.debug('store', y.store.toJSON()), await T();
							}),
							D.init(),
							D
						);
					}
					static autocomplete(c) {
						const i = c.id;
						if (g[i]) return g[i];
						const D = (g[i] = x({ client: C, controller: c }));
						return (
							D.on('afterStore', async ({ controller: y }, T) => {
								y.log.debug('controller', y), y.log.debug('store', y.store.toJSON()), await T();
							}),
							D.init(),
							D
						);
					}
					static search(c) {
						const i = c.id;
						if (g[i]) return g[i];
						const D = (g[i] = O({ client: C, controller: c }));
						return (
							D.on('afterStore', async ({ controller: y }, T) => {
								y.log.debug('controller', y), y.log.debug('store', y.store.toJSON()), await T();
							}),
							D.init(),
							D
						);
					}
				}
				function O(s) {
					const c = new E.V(new P.E({ settings: { coreType: 'query', corePrefix: s.controller.id } }), h.X);
					return new f.Tp(s.controller, {
						client: new t.K(s.client.globals, s.client.config),
						store: new l.U(s.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new p.E(),
						profiler: new u.U(),
						logger: new A.V(),
						tracker: new I.J(s.client.globals),
					});
				}
				function M(s) {
					const c = new E.V(new P.E(), h.X).detach(!0);
					return new o.c(s.controller, {
						client: new t.K(s.client.globals, s.client.config),
						store: new a.t(s.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new p.E(),
						profiler: new u.U(),
						logger: new A.V(),
						tracker: new I.J(s.client.globals),
					});
				}
				function x(s) {
					const c = new E.V(new P.E(), h.X).detach();
					return new m.Z(s.controller, {
						client: new t.K(s.client.globals, s.client.config),
						store: new r.Y(s.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new p.E(),
						profiler: new u.U(),
						logger: new A.V(),
						tracker: new I.J(s.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(B, _, e) {
				'use strict';
				e.d(_, { Z: () => o });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					f = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const m = 'prism-block',
					o = (t) => {
						const r = (0, f.li)(null);
						return (
							(0, f.vJ)(() => {
								r.current && t.className?.includes('lang-') && !t.className?.includes(m) && window?.Prism?.highlightElement(r.current);
							}, [t.className, t.children, r]),
							(0, n.Y)('code', { ...t, ref: r, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/dequal/dist/index.mjs'(B, _, e) {
				'use strict';
				e.d(_, { j: () => m });
				var n = Object.prototype.hasOwnProperty;
				function f(o, t, r) {
					for (r of o.keys()) if (m(r, t)) return r;
				}
				function m(o, t) {
					var r, l, a;
					if (o === t) return !0;
					if (o && t && (r = o.constructor) === t.constructor) {
						if (r === Date) return o.getTime() === t.getTime();
						if (r === RegExp) return o.toString() === t.toString();
						if (r === Array) {
							if ((l = o.length) === t.length) for (; l-- && m(o[l], t[l]); );
							return l === -1;
						}
						if (r === Set) {
							if (o.size !== t.size) return !1;
							for (l of o) if (((a = l), (a && typeof a == 'object' && ((a = f(t, a)), !a)) || !t.has(a))) return !1;
							return !0;
						}
						if (r === Map) {
							if (o.size !== t.size) return !1;
							for (l of o) if (((a = l[0]), (a && typeof a == 'object' && ((a = f(t, a)), !a)) || !m(l[1], t.get(a)))) return !1;
							return !0;
						}
						if (r === ArrayBuffer) (o = new Uint8Array(o)), (t = new Uint8Array(t));
						else if (r === DataView) {
							if ((l = o.byteLength) === t.byteLength) for (; l-- && o.getInt8(l) === t.getInt8(l); );
							return l === -1;
						}
						if (ArrayBuffer.isView(o)) {
							if ((l = o.byteLength) === t.byteLength) for (; l-- && o[l] === t[l]; );
							return l === -1;
						}
						if (!r || typeof o == 'object') {
							l = 0;
							for (r in o) if ((n.call(o, r) && ++l && !n.call(t, r)) || !(r in t) || !m(o[r], t[r])) return !1;
							return Object.keys(t).length === l;
						}
					}
					return o !== o && t !== t;
				}
			},
			'../../node_modules/memoizerific sync recursive'(B) {
				function _(e) {
					var n = new Error("Cannot find module '" + e + "'");
					throw ((n.code = 'MODULE_NOT_FOUND'), n);
				}
				(_.keys = () => []), (_.resolve = _), (_.id = '../../node_modules/memoizerific sync recursive'), (B.exports = _);
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-Autocomplete-Autocomplete-stories.254def18.iframe.bundle.js.map
