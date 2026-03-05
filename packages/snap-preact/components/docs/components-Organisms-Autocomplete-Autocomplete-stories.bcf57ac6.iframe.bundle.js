(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9885],
		{
			'./components/src/components/Organisms/Autocomplete/Autocomplete.stories.tsx'(R, p, e) {
				'use strict';
				e.r(p), e.d(p, { Default: () => d, __namedExportsOrder: () => c, default: () => T });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					m = e('./components/src/components/Organisms/Autocomplete/Autocomplete.tsx'),
					o = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					r = e('./components/src/utilities/snapify.ts');
				const s =
					"# Autocomplete\n\nRenders an autocomplete popup that binds to an `<input>` element.\n\nThe autocomplete layout renders terms, facets, banners, and results.\n\n## Components Used\n- Facets\n- Banner\n- Results\n- Icon\n\n## Usage\n```jsx\nimport { Autocomplete } from '@athoscommerce/snap-preact/components';\n```\n\n### input\nThe required `input` prop expects either:\n\n- a string CSS selector that targets `<input>` element(s) to bind to\n\n- an `<input>` element to bind to\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} />\n```\n\n### controller\nThe required `controller` prop specifies a reference to the autocomplete controller.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} />\n```\n\n### width\nThe `width` prop specifies a width for the overall component. The default value is '100%'.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} width=\"800px\" />\n```\n\n### horizontalTerms\nThe `horizontalTerms` prop will alter autocomplete's CSS to display terms horizontally.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} horizontalTerms={true} />\n```\n\n### vertical\nThe `vertical` prop will alter autocomplete's CSS to display in a vertical layout.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} vertical={true} />\n```\n\n### termsTitle\nThe `termsTitle` prop will display the given text above the autocomplete terms area. The default value is blank and does not affect the trending terms title `trendingTitle`.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} termsTitle={'Terms'} />\n```\n\n### trendingTitle\nThe `trendingTitle` prop will display the given text above the autocomplete terms area when trending terms are displayed. The default value is 'Popular Searches' and does not affect non-trending terms title `termsTitle`. Also requires `controller.config.settings.trending.limit` to be configured)\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} trendingTitle={'Trending'} />\n```\n\n### historyTitle\nThe `historyTitle` prop will display the given text above the autocomplete historical terms area when historical terms are displayed. The default value is 'Previously Searched' and does not affect trending/non-trending terms title `termsTitle` & `trendingTitle`. Also requires `controller.config.settings.history.limit` to be configured.)\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} historyTitle={'History'} />\n```\n\n### facetsTitle\nThe `facetsTitle` prop will display the given text above the autocomplete facets area. (default is blank)\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} facetsTitle={'Filter By'} />\n```\n\n### contentTitle\nThe `contentTitle` prop will display the given text above the autocomplete content area. (default is blank)\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} contentTitle={'Results'} />\n```\n\n### seeMoreButtonIcon\nThe `seeMoreButtonIcon` prop will display the given icon in the see more button.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} seeMoreButtonIcon={'angle-right'} />\n```\n\n### seeMoreButtonText\nThe `seeMoreButtonText` prop will display the given text in the see more button. It can also take a function returning a string. The function is passed the Autocomplete controller. \n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} seeMoreButtonText={'See More!'} />\n```\n\nThe `seeMoreButtonText` prop can also take a function returning a string. The function is pased the Autocomplete controller. \n\n```jsx\n\nconst seeMoreButtonText = (controller) => {\n    const { pagination, filters, search } = controller.store;\n\n    return `See ${pagination.totalResults} ${filters.length > 0 ? 'filtered' : ''} result${pagination.totalResults == 1 ? '' : 's'} for \"${search.query?.string}\"`;\n}\n\n<Autocomplete controller={controller} input={'#searchInput'} seeMoreButtonText={seeMoreButtonText} />\n```\n\n### viewportMaxHeight\nThe `viewportMaxHeight` prop will restrict autocomplete from overflowing the viewport. The max height of autocomplete will always be visible in the viewport. \n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} viewportMaxHeight={true} />\n```\n\n### termsSlot\nThe `termsSlot` prop accepts a custom JSX element to render instead of the default terms section. This will also replace the trending terms.\n\nThe following props are available to be used within your custom component: `terms`, `trending`, `termsTitle`, `trendingTitle`, `showTrending`, `valueProps`, `emIfy`, `controller`\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} termsSlot={<CustomTermsComponent />} />\n```\n\n### facetsSlot\nThe `facetsSlot` prop accepts a custom JSX element to render instead of the default facets section. \n\nThe following props are available to be used within your custom component: `facets`, `merchandising`, `facetsTitle`, `hideBanners`, `controller`, `valueProps`\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} facetsSlot={<CustomFacetsComponent />} />\n```\n\n### contentSlot\nThe `contentSlot` prop accepts a custom JSX element to render instead of the default content section. \n\nThe following props are available to be used within your custom component: `results`, `merchandising`, `search`, `pagination`, `filters`, `controller`\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} contentSlot={<CustomContentComponent />} />\n```\n\n### resultsSlot\nThe `resultsSlot` prop accepts a custom JSX element to render instead of the default results section. \n\nThe following props are available to be used within your custom component: `results`, `contentTitle`, `controller`\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} resultsSlot={<CustomResultsComponent />} />\n```\n\n### resultComponent\nThe `resultComponent` prop specifies a custom result component to render.\n\n```jsx\n\nconst CustomResult = ({\n	controller \n	result\n	theme\n}) => {\n	return <div>{result.mappings.core?.name}</div>\n}\n\n<Autocomplete controller={controller} input={'#searchInput'} resultComponent={CustomResult} />\n```\n\n### noResultsSlot\nThe `noResultsSlot` prop accepts a custom JSX element to render instead of the default no results section. \n\nThe following props are available to be used within your custom component: `search`, `pagination`, `controller`\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} noResultsSlot={<CustomNoResultsComponent />} />\n```\n\n### linkSlot\nThe `linkSlot` prop accepts a custom JSX element to render instead of the default \"see n results for keyword\" link section. \n\nThe following props are available to be used within your custom component: `search`, `results`, `pagination`, `filters`, `controller`\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} linkSlot={<CustomLinkComponent />} />\n```\n\n### hideFacets\nThe `hideFacets` prop specifies if the facets within autocomplete should be rendered.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} hideFacets={true} />\n```\n\n### hideTerms\nThe `hideTerms` prop specifies if the terms section within autocomplete should be rendered.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} hideTerms={true} />\n```\n\n### hideHistory\nThe `hideHistory` prop specifies if the historical terms and results within autocomplete should be rendered.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} hideHistory={true} />\n```\n\n### hideTrending\nThe `hideTrending` prop specifies if the trending terms and results within autocomplete should be rendered.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} hideTrending={true} />\n```\n\n### hideContent\nThe `hideContent` prop specifies if the content area within autocomplete should be rendered.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} hideContent={true} />\n```\n\n### hideBanners\nThe `hideBanners` prop specifies if the banners within autocomplete should be rendered. (inline banners not affected)\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} hideBanners={true} />\n```\n\n### hideLink\nThe `hideLink` prop specifies if the \"see n results for keyword\" text within autocomplete should be rendered.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} hideLink={true} />\n```\n\n### retainTrending\nThe `retainTrending` prop specifies if the trending terms within autocomplete should be rendered when there is a query.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} retainTrending={true} />\n```\n\n### retainHistory\nThe `retainHistory` prop specifies if the trending terms within autocomplete should be rendered when there is a query. \n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} retainHistory={true} />\n```\n\n### breakpoints\nThe `breakpoints` prop contains a breakpoints object that is passed to the `<Results />` sub-component.\nWhen the viewport is between the Object's key value, those props will be merged with any exisiting Autocomplete component props.\n\nDefault Autocomplete `breakpoints` object:\n\n```js\nconst breakpoints = {\n    0: {\n        columns: 2,\n        rows: 1,\n        hideFacets: true,\n        vertical: true,\n    },\n    540: {\n        columns: 3,\n        rows: 1,\n        vertical: true,\n    },\n    768: {\n        columns: 2,\n        rows: 3,\n    },\n};\n```\n\nSee `<Results />` component documentation for further details.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} breakpoints={breakpoints} />\n```\n\n\n### onFacetOptionClick\nThe `onFacetOptionClick` prop contains a custom onClick event handler for facet options. Function is passed the click event. \n\n\n```js\nconst CustomOnClickFunc = (e) => {\n    console.log('You Clicked a Facet Option!' , e)\n};\n```\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} onFacetOptionClick={CustomOnClickFunc} />\n```\n\n### onTermClick\nThe `onTermClick` prop contains a custom onClick event handler for Suggested & Trending Terms. Function is passed the click event. \n\n\n```js\nconst customOnClickFunc = (e) => {\n    console.log('You Clicked a term!' , e)\n};\n```\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} onTermClick={customOnClickFunc} />\n```";
				var u = e('./components/src/components/Atoms/Icon/paths.tsx'),
					C = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const T = {
						title: 'Organisms/Autocomplete',
						component: m.j,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, n.FD)('div', {
										children: [(0, n.Y)(g.oz, { options: { overrides: { code: o.Z } }, children: s }), (0, n.Y)(g.uY, { story: g.h1 })],
									}),
							},
						},
						decorators: [
							(E) =>
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
										(0, n.Y)(E, {}),
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
							seeMoreButtonIcon: {
								description: 'See more button Icon',
								table: { type: { summary: 'string' } },
								options: [...Object.keys(u.c)],
								control: { type: 'select' },
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
					P = r.p.autocomplete({ id: 'Autocomplete', selector: '#searchInput', globals: { siteId: 'atkzs2' }, settings: { trending: { limit: 5 } } }),
					d = (E, { loaded: { controller: A } }) => {
						const [h, y] = (0, C.J0)(!1),
							_ = [
								{ active: h === 'dress', preview: () => y('dress'), value: 'dress', url: { href: '#' } },
								{ active: h === 'shirt', preview: () => y('shirt'), value: 'shirt', url: { href: '#' } },
								{ active: h === 'shoes', preview: () => y('shoes'), value: 'shoes', url: { href: '#' } },
								{ active: h === 'hat', preview: () => y('hat'), value: 'hat', url: { href: '#' } },
								{ active: h === 'pants', preview: () => y('pants'), value: 'pants', url: { href: '#' } },
								{ active: h === 'socks', preview: () => y('socks'), value: 'socks', url: { href: '#' } },
							];
						return (
							(A.store.history = _),
							setTimeout(() => {
								A.bind();
							}),
							(0, n.Y)(m.j, { ...E, controller: A, input: A?.config.selector })
						);
					};
				(d.loaders = [async () => ({ controller: await P })]),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
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
  const [termState, setTermState] = useState(false);
  const mockTerms: AutocompleteTermStore = [{
    active: termState === 'dress',
    preview: () => setTermState('dress'),
    value: 'dress',
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'shirt',
    preview: () => setTermState('shirt'),
    value: 'shirt',
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'shoes',
    preview: () => setTermState('shoes'),
    value: 'shoes',
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'hat',
    preview: () => setTermState('hat'),
    value: 'hat',
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'pants',
    preview: () => setTermState('pants'),
    value: 'pants',
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'socks',
    preview: () => setTermState('socks'),
    value: 'socks',
    url: {
      href: '#'
    } as UrlManager
  }];
  controller.store.history = mockTerms;
  setTimeout(() => {
    controller.bind();
  });
  return <Autocomplete {...args} controller={controller} input={controller?.config.selector} />;
}`,
								...d.parameters?.docs?.source,
							},
						},
					});
				const c = ['Default'];
			},
			'./components/src/components/Atoms/Banner/Banner.tsx'(R, p, e) {
				'use strict';
				e.d(p, { l: () => h });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					t = e.n(o),
					r = e('./components/src/providers/cache.tsx'),
					s = e('./components/src/providers/controller.tsx'),
					u = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					C = e('./components/src/providers/withTracking.tsx'),
					T = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/utilities/mergeProps.ts'),
					d = e('./components/src/utilities/mergeStyles.ts'),
					c = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					E = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const A = () => (0, m.AH)({ ' *': { boxSizing: 'border-box' }, '& iframe, img': { maxWidth: '100%', height: 'auto' } }),
					h = (0, s.Bk)(
						(0, g.PA)((y) => {
							const _ = (0, u.u)(),
								x = { treePath: (0, T.LU)() },
								v = (0, P.v6)('banner', _, x, y),
								{ controller: l, type: a, className: M, internalClassName: f } = v,
								i = v.content || l?.store?.merchandising.content;
							if (a === c.c.INLINE) return console.warn(`BannerType '${c.c.INLINE}' is not supported in <Banner /> component`), null;
							const I = (0, d.Z)(v, A),
								b = i?.[a]?.[0]?.value;
							if (!a || !b) return null;
							const W = (0, E.hb)(
								(0, C.W)((D) =>
									(0, n.Y)('div', {
										className: t()('ss__banner', `ss__banner--${a}`, M, f),
										...I,
										ref: D.trackingRef,
										dangerouslySetInnerHTML: { __html: typeof b == 'string' ? b : b.join('') },
									})
								),
								[b, a]
							);
							return (0, n.Y)(r._, { children: (0, n.Y)(W, { ...v }) });
						})
					);
			},
			'./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'(R, p, e) {
				'use strict';
				e.d(p, { _: () => h });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					o = e.n(m),
					t = e('./components/src/providers/cache.tsx'),
					r = e('./components/src/providers/controller.tsx'),
					s = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					u = e('./components/src/providers/withTracking.tsx'),
					C = e('./components/src/providers/treePath.tsx'),
					T = e('./components/src/utilities/mergeProps.ts'),
					P = e('./components/src/utilities/mergeStyles.ts'),
					d = e('./components/src/hooks/useA11y.tsx'),
					c = e('./components/src/types.ts'),
					E = e('../../node_modules/mobx-react-lite/es/index.js');
				const A = ({ width: y }) =>
						(0, g.AH)({
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: y,
							'&.ss__inline-banner--grid': { flexDirection: 'column' },
							'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
							'& iframe': { maxWidth: '100%' },
						}),
					h = (0, r.Bk)(
						(0, u.W)(
							(0, E.PA)((y) => {
								const _ = (0, s.u)(),
									O = (0, C.LU)(),
									x = { layout: c.V.grid, width: 'auto', treePath: O },
									v = (0, T.v6)('inlineBanner', _, x, y),
									{ banner: l, className: a, internalClassName: M, disableA11y: f, layout: i, onClick: I } = v,
									L = (0, P.Z)(v, A);
								return l && l.value
									? (0, n.Y)(t._, {
											children: (0, n.Y)('div', {
												onClick: (b) => {
													I && I(b, l);
												},
												role: 'article',
												ref: (b) => {
													f || (0, d.iy)(b), (y.trackingRef.current = b);
												},
												className: o()('ss__inline-banner', `ss__inline-banner--${i}`, a, M),
												...L,
												dangerouslySetInnerHTML: { __html: l.value },
											}),
									  })
									: null;
							})
						)
					);
			},
			'./components/src/components/Organisms/Facets/Facets.tsx'(R, p, e) {
				'use strict';
				e.d(p, { J: () => h });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					o = e.n(m),
					t = e('../../node_modules/deepmerge/dist/cjs.js'),
					r = e.n(t),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('./components/src/components/Organisms/Facet/Facet.tsx'),
					C = e('./components/src/providers/cache.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					P = e('./components/src/providers/treePath.tsx'),
					d = e('./components/src/utilities/defined.ts'),
					c = e('./components/src/utilities/mergeProps.ts'),
					E = e('./components/src/utilities/mergeStyles.ts');
				const A = () => (0, g.AH)({}),
					h = (0, s.PA)((y) => {
						const _ = (0, T.u)(),
							O = (0, P.LU)(),
							x = { facets: y.controller?.store?.facets, treePath: O };
						let v = (0, c.v6)('facets', _, x, y);
						const { limit: l, onFacetOptionClick: a, disableStyles: M, className: f, internalClassName: i, controller: I, treePath: L } = v,
							b = (S) => {
								a && a(S), I?.setFocused && I?.setFocused();
							},
							W = {
								components: {
									facetGridOptions: { onClick: b },
									facetHierarchyOptions: { onClick: b },
									facetListOptions: { onClick: b },
									facetPaletteOptions: { onClick: b },
								},
							},
							D = r()(W, v?.theme || {}, { arrayMerge: (S, V) => V });
						v = { ...v, theme: D };
						let { facets: j } = v;
						l && j && l > 0 && (j = j.slice(0, +l));
						const K = { facet: { internalClassName: 'ss__facets__facet', ...(0, d.s)({ disableStyles: M }), theme: v.theme, treePath: L } },
							k = (0, E.Z)(v, A);
						return j && j?.length > 0
							? (0, n.Y)(C._, {
									children: (0, n.Y)('div', {
										className: o()('ss__facets', f, i),
										...k,
										children: j.map((S) => (0, n.Y)(u.s, { ...K.facet, facet: S }, S.field)),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Organisms/Results/Results.tsx'(R, p, e) {
				'use strict';
				e.d(p, { n: () => f });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/classnames/index.js'),
					t = e.n(o),
					r = e('../../node_modules/deepmerge/dist/cjs.js'),
					s = e.n(r),
					u = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					C = e('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					T = e('./components/src/components/Molecules/Result/Result.tsx'),
					P = e('./components/src/types.ts'),
					d = e('./components/src/utilities/defined.ts'),
					c = e('./components/src/utilities/mergeProps.ts'),
					E = e('./components/src/utilities/mergeStyles.ts'),
					A = e('./components/src/providers/cache.tsx'),
					h = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/withTracking.tsx'),
					_ = e('./components/src/providers/snap.tsx'),
					O = e('./components/src/providers/treePath.tsx'),
					x = e('./components/src/hooks/useDisplaySettings.tsx'),
					v = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					l = e('./components/src/hooks/useComponent.tsx');
				const a = ({ gapSize: i, columns: I }) =>
						(0, g.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gap: i,
							gridTemplateRows: 'auto',
							gridTemplateColumns: `repeat(${I}, 1fr)`,
							'& .ss__result, & .ss__result-layout': {
								boxSizing: 'border-box',
								flex: '0 1 auto',
								width: `calc(${100 / I}% - (${I - 1} * ${i} / ${I} ) )`,
								marginRight: i,
								marginBottom: i,
								[`&:nth-of-type(${I}n)`]: { marginRight: '0' },
								[`&:nth-last-of-type(-n+${I})`]: { marginBottom: '0' },
							},
							'@supports (display: grid)': { display: 'grid', '& .ss__result, & .ss__result-layout': { width: 'initial', flex: void 0, margin: 0 } },
						}),
					M = (0, y.W)(T.Q),
					f = (0, m.PA)((i) => {
						const I = (0, h.u)(),
							L = (0, O.LU)(),
							b = {
								0: { columns: i.columns || 1 },
								540: { columns: i.columns || 2 },
								768: { columns: i.columns || 3 },
								991: { columns: i.columns || 4 },
							},
							W = { results: i.controller?.store?.results, columns: 4, gapSize: '20px', layout: P.V.grid, breakpoints: b, treePath: L };
						let D = (0, c.v6)('results', I, W, i);
						if (!i.theme?.name) {
							const B = (0, x.X)(D?.breakpoints || {}),
								Y = s()(D?.theme || {}, B?.theme || {}, { arrayMerge: (z, $) => $ });
							D = { ...D, ...B, theme: Y };
						}
						const { disableStyles: j, className: K, internalClassName: k, layout: S, theme: V, controller: w, treePath: N } = D;
						let { resultComponent: U } = D;
						const H = {
							result: { internalClassName: 'ss__results__result', ...(0, d.s)({ disableStyles: j }), theme: D?.theme, treePath: N },
							inlineBanner: {
								controller: w,
								internalClassName: 'ss__results__inline-banner',
								...(0, d.s)({ disableStyles: j }),
								theme: D?.theme,
								treePath: N,
							},
						};
						let F = D.results;
						D?.columns && D?.rows && D.columns > 0 && D.rows > 0 && (F = D.results?.slice(0, D.columns * D.rows));
						const J = (0, E.Z)({ ...D, columns: S == P.V.list ? 1 : D.columns }, a);
						if (typeof U == 'string') {
							const B = (0, _.uk)();
							if (B?.templates?.library.import.component.result && ((U = (0, l.x)(B?.templates?.library.import.component.result, U)), !U))
								return null;
						}
						return F?.length
							? (0, n.Y)(A._, {
									children: (0, n.Y)('div', {
										...J,
										className: t()('ss__results', `ss__results-${D.layout}`, K, k),
										children: F.map((B) =>
											(() => {
												switch (B.type) {
													case u.c.BANNER:
														return (0, g.n)(C._, { ...H.inlineBanner, key: B.id, banner: B, layout: D.layout });
													default:
														if (U && w) {
															const Y = U;
															return (0, n.Y)(v.o, {
																result: B,
																controller: w,
																children: (0, n.Y)(Y, { controller: w, result: B, theme: V, treePath: N }, B.id),
															});
														} else return (0, n.Y)(M, { ...H.result, result: B, layout: D.layout, controller: w }, B.id);
												}
											})()
										),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(R, p, e) {
				'use strict';
				e.d(p, { o: () => T });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/classnames/index.js'),
					t = e.n(o),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					s = e('./components/src/utilities/mergeProps.ts'),
					u = e('./components/src/utilities/createImpressionObserver.ts');
				const C = { ResultTracker: () => (0, g.AH)({}) },
					T = (0, m.PA)((P) => {
						const d = (0, r.u)(),
							c = (0, s.v6)('resultTracker', d, {}, P),
							E = { impression: !0, click: !0 },
							{ children: A, result: h, track: y, controller: _, className: O, internalClassName: x, disableStyles: v, style: l } = c,
							a = { ...E, ...y },
							{ ref: M, inViewport: f } = (0, u.Q)();
						f && a.impression && _?.track.product.impression(h);
						const i = {};
						return (
							v ? l && (i.css = [l]) : (i.css = [C.ResultTracker(), l]),
							(0, n.Y)('div', {
								className: t()('ss__result-tracker', `ss__${_?.type}-result-tracker`, O, x),
								onClick: (I) => {
									a.click && _?.track.product.click(I, h);
								},
								ref: M,
								...i,
								children: A,
							})
						);
					});
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(R, p, e) {
				'use strict';
				e.d(p, { v: () => m });
				var n = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const g = 250,
					m = (t, r = {}) => {
						const { rootMargin: s = '0px', fireOnce: u = !1, threshold: C = 0, minVisibleTime: T = 0 } = r,
							[P, d] = (0, n.J0)(!1),
							c = (0, n.li)(null),
							E = (0, n.li)(null),
							[A, h] = (0, n.J0)(0),
							y = (0, n.hb)((_) => {
								(t.current = _), h((O) => O + 1);
							}, []);
						return (
							(0, n.vJ)(() => {
								d(!1);
								let _ = null,
									O = null;
								if (!window.IntersectionObserver || !t.current) return;
								const x = () => {
										O && (window.clearInterval(O), (O = null));
									},
									v = () => {
										T > 0
											? ((E.current = Date.now()),
											  c.current && window.clearTimeout(c.current),
											  (c.current = window.setTimeout(() => {
													d(!0), u && t.current && _ && _.unobserve(t.current);
											  }, T)))
											: (d(!0), u && t.current && _ && _.unobserve(t.current));
									},
									l = () => {
										c.current && window.clearTimeout(c.current), (c.current = null), (E.current = null), d(!1);
									};
								return (
									(_ = new IntersectionObserver(
										([a]) => {
											a.isIntersecting
												? t.current && o(t.current)
													? (x(), v())
													: (l(),
													  O ||
															(O = window.setInterval(() => {
																if (!t.current) {
																	x();
																	return;
																}
																o(t.current) && (x(), v());
															}, g)))
												: (x(), l());
										},
										{ rootMargin: s, threshold: C }
									)),
									t.current && _.observe(t.current),
									() => {
										d(!1), x(), c.current && window.clearTimeout(c.current), _ && t.current && _.unobserve(t.current);
									}
								);
							}, [t, A]),
							{ inViewport: P, updateRef: y }
						);
					};
				function o(t) {
					return t && 'checkVisibility' in t ? t.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/providers/withTracking.tsx'(R, p, e) {
				'use strict';
				e.d(p, { N: () => o, W: () => t });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('./components/src/utilities/createImpressionObserver.ts'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const o = 'sstracking';
				function t(r) {
					const s = r;
					return (C) => {
						const { controller: T, result: P, banner: d, type: c, content: E, ...A } = C;
						if (C.trackingRef) return (0, n.Y)(s, { ...C });
						!T && (!c || !E) && console.warn('Warning: No controller provided to withTracking', C),
							!P && !d && (!c || !E) && console.warn('Warning: No result or banner provided to withTracking');
						const { ref: h, inViewport: y, updateRef: _ } = (0, g.Q)(),
							O = (P || d || (c && E?.[c]?.[0]))?.responseId,
							x = (0, m.li)(O),
							v = (0, m.li)(!1);
						x.current !== O && (v.current = !0),
							(0, m.vJ)(() => {
								x.current !== O && ((x.current = O), _(h.current));
							}, [O, _]),
							(0, m.vJ)(() => {
								v.current && !y && (v.current = !1);
							}, [y, O]);
						const l = c && E && !P && ['search', 'autocomplete'].includes(T?.type || '');
						y && !v.current && (l ? T?.track.banner.impression(E[c][0]) : P?.bundleSeed || T?.track.product.impression(P || d));
						const a = (0, m.hb)(
							(f) => {
								l ? T?.track.banner.click(f, E[c][0]) : T?.track.product.click(f, P || d);
							},
							[T, P, d, c, E]
						);
						(0, m.vJ)(() => {
							const f = h.current;
							if (f)
								return (
									f.setAttribute(o, 'true'),
									f.addEventListener('click', a, !0),
									() => {
										f.removeEventListener('click', a, !0);
									}
								);
						}, [a]);
						const M = {
							...A,
							controller: T,
							result: P,
							banner: d,
							type: c,
							content: E,
							trackingRef: (0, m.hb)(
								(f) => {
									_(f);
								},
								[_]
							),
						};
						return (0, n.Y)(s, { ...M });
					};
				}
			},
			'./components/src/utilities/componentArgs.ts'(R, p, e) {
				'use strict';
				e.d(p, { F: () => n });
				const n = {
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
			'./components/src/utilities/createImpressionObserver.ts'(R, p, e) {
				'use strict';
				e.d(p, { Q: () => t });
				var n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					g = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const m = 0.7,
					o = 1e3;
				function t(r) {
					const s = (0, n.li)(null),
						{ inViewport: u, updateRef: C } = (0, g.v)(s, { ...r, fireOnce: !0, threshold: m, minVisibleTime: o });
					return { ref: s, inViewport: u, updateRef: C };
				}
			},
			'./components/src/utilities/snapify.ts'(R, p, e) {
				'use strict';
				e.d(p, { p: () => _ });
				var n = e('../../node_modules/mobx/dist/mobx.esm.js'),
					g = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					m = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					o = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					r = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					s = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					u = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					C = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					T = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					P = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					d = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					c = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					E = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					A = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, n.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const h = {},
					y = { globals: { siteId: 'atkzs2' } };
				class _ {
					static recommendation(a) {
						const M = a.id;
						if (h[M]) return h[M];
						const f = (h[M] = x({ client: y, controller: a }));
						return (
							f.on('afterStore', async ({ controller: i }, I) => {
								i.log.debug('controller', i), i.log.debug('store', i.store.toJSON()), await I();
							}),
							f.init(),
							f
						);
					}
					static autocomplete(a) {
						const M = a.id;
						if (h[M]) return h[M];
						const f = (h[M] = v({ client: y, controller: a }));
						return (
							f.on('afterStore', async ({ controller: i }, I) => {
								i.log.debug('controller', i), i.log.debug('store', i.store.toJSON()), await I();
							}),
							f.init(),
							f
						);
					}
					static search(a) {
						const M = a.id;
						if (h[M]) return h[M];
						const f = (h[M] = O({ client: y, controller: a }));
						return (
							f.on('afterStore', async ({ controller: i }, I) => {
								i.log.debug('controller', i), i.log.debug('store', i.store.toJSON()), await I();
							}),
							f.init(),
							f
						);
					}
				}
				function O(l) {
					const a = new C.V(new P.E({ settings: { coreType: 'query', corePrefix: l.controller.id } }), T.X);
					return new g.Tp(l.controller, {
						client: new t.K(l.client.globals, l.client.config),
						store: new s.U(l.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new d.E(),
						profiler: new c.U(),
						logger: new E.V(),
						tracker: new A.J(l.client.globals),
					});
				}
				function x(l) {
					const a = new C.V(new P.E(), T.X).detach(!0);
					return new o.c(l.controller, {
						client: new t.K(l.client.globals, l.client.config),
						store: new u.t(l.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new d.E(),
						profiler: new c.U(),
						logger: new E.V(),
						tracker: new A.J(l.client.globals),
					});
				}
				function v(l) {
					const a = new C.V(new P.E(), T.X).detach();
					return new m.Z(l.controller, {
						client: new t.K(l.client.globals, l.client.config),
						store: new r.Y(l.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new d.E(),
						profiler: new c.U(),
						logger: new E.V(),
						tracker: new A.J(l.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(R, p, e) {
				'use strict';
				e.d(p, { Z: () => o });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const m = 'prism-block',
					o = (t) => {
						const r = (0, g.li)(null);
						return (
							(0, g.vJ)(() => {
								r.current && t.className?.includes('lang-') && !t.className?.includes(m) && window?.Prism?.highlightElement(r.current);
							}, [t.className, t.children, r]),
							(0, n.Y)('code', { ...t, ref: r, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/dequal/dist/index.mjs'(R, p, e) {
				'use strict';
				e.d(p, { j: () => m });
				var n = Object.prototype.hasOwnProperty;
				function g(o, t, r) {
					for (r of o.keys()) if (m(r, t)) return r;
				}
				function m(o, t) {
					var r, s, u;
					if (o === t) return !0;
					if (o && t && (r = o.constructor) === t.constructor) {
						if (r === Date) return o.getTime() === t.getTime();
						if (r === RegExp) return o.toString() === t.toString();
						if (r === Array) {
							if ((s = o.length) === t.length) for (; s-- && m(o[s], t[s]); );
							return s === -1;
						}
						if (r === Set) {
							if (o.size !== t.size) return !1;
							for (s of o) if (((u = s), (u && typeof u == 'object' && ((u = g(t, u)), !u)) || !t.has(u))) return !1;
							return !0;
						}
						if (r === Map) {
							if (o.size !== t.size) return !1;
							for (s of o) if (((u = s[0]), (u && typeof u == 'object' && ((u = g(t, u)), !u)) || !m(s[1], t.get(u)))) return !1;
							return !0;
						}
						if (r === ArrayBuffer) (o = new Uint8Array(o)), (t = new Uint8Array(t));
						else if (r === DataView) {
							if ((s = o.byteLength) === t.byteLength) for (; s-- && o.getInt8(s) === t.getInt8(s); );
							return s === -1;
						}
						if (ArrayBuffer.isView(o)) {
							if ((s = o.byteLength) === t.byteLength) for (; s-- && o[s] === t[s]; );
							return s === -1;
						}
						if (!r || typeof o == 'object') {
							s = 0;
							for (r in o) if ((n.call(o, r) && ++s && !n.call(t, r)) || !(r in t) || !m(o[r], t[r])) return !1;
							return Object.keys(t).length === s;
						}
					}
					return o !== o && t !== t;
				}
			},
			'../../node_modules/memoizerific sync recursive'(R) {
				function p(e) {
					var n = new Error("Cannot find module '" + e + "'");
					throw ((n.code = 'MODULE_NOT_FOUND'), n);
				}
				(p.keys = () => []), (p.resolve = p), (p.id = '../../node_modules/memoizerific sync recursive'), (R.exports = p);
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-Autocomplete-Autocomplete-stories.bcf57ac6.iframe.bundle.js.map
