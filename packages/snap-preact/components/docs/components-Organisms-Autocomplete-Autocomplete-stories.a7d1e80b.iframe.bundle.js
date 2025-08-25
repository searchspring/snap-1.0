'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[9885],
	{
		'../../node_modules/dequal/dist/index.mjs': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { j: () => dequal });
			var has = Object.prototype.hasOwnProperty;
			function find(iter, tar, key) {
				for (key of iter.keys()) if (dequal(key, tar)) return key;
			}
			function dequal(foo, bar) {
				var ctor, len, tmp;
				if (foo === bar) return !0;
				if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
					if (ctor === Date) return foo.getTime() === bar.getTime();
					if (ctor === RegExp) return foo.toString() === bar.toString();
					if (ctor === Array) {
						if ((len = foo.length) === bar.length) for (; len-- && dequal(foo[len], bar[len]); );
						return -1 === len;
					}
					if (ctor === Set) {
						if (foo.size !== bar.size) return !1;
						for (len of foo) {
							if ((tmp = len) && 'object' == typeof tmp && !(tmp = find(bar, tmp))) return !1;
							if (!bar.has(tmp)) return !1;
						}
						return !0;
					}
					if (ctor === Map) {
						if (foo.size !== bar.size) return !1;
						for (len of foo) {
							if ((tmp = len[0]) && 'object' == typeof tmp && !(tmp = find(bar, tmp))) return !1;
							if (!dequal(len[1], bar.get(tmp))) return !1;
						}
						return !0;
					}
					if (ctor === ArrayBuffer) (foo = new Uint8Array(foo)), (bar = new Uint8Array(bar));
					else if (ctor === DataView) {
						if ((len = foo.byteLength) === bar.byteLength) for (; len-- && foo.getInt8(len) === bar.getInt8(len); );
						return -1 === len;
					}
					if (ArrayBuffer.isView(foo)) {
						if ((len = foo.byteLength) === bar.byteLength) for (; len-- && foo[len] === bar[len]; );
						return -1 === len;
					}
					if (!ctor || 'object' == typeof foo) {
						for (ctor in ((len = 0), foo)) {
							if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return !1;
							if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return !1;
						}
						return Object.keys(bar).length === len;
					}
				}
				return foo != foo && bar != bar;
			}
		},
		'./components/src/components/Atoms/Merchandising/Banner/Banner.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { l: () => Banner });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					'../snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'
				);
			const defaultStyles = () =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({
						' *': { boxSizing: 'border-box' },
						'& iframe, img': { maxWidth: '100%', height: 'auto' },
					}),
				Banner = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						defaultProps = { treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_5__.LU)() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('banner', globalTheme, defaultProps, properties),
						{ controller, type, className, internalClassName } = props,
						content = props.content || controller?.store?.merchandising.content;
					if (type === _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_7__.c.INLINE)
						return (
							console.warn(
								`BannerType '${_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_7__.c.INLINE}' is not supported in <Banner /> component`
							),
							(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
						);
					const styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)(props, defaultStyles);
					let bannerContent;
					return (
						content && content[type] && (bannerContent = content[type]),
						bannerContent && bannerContent.length
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_providers__WEBPACK_IMPORTED_MODULE_10__._, {
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', {
										className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__banner', `ss__banner--${type}`, className, internalClassName),
										...styling,
										dangerouslySetInnerHTML: { __html: bannerContent.join('') },
									}),
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
					);
				});
		},
		'./components/src/components/Atoms/Merchandising/InlineBanner/InlineBanner.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { _: () => InlineBanner });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_hooks_useA11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/types.ts');
			const defaultStyles = ({ width }) =>
				(0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					width,
					'&.ss__inline-banner--grid': { flexDirection: 'column' },
					'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
					'& iframe': { maxWidth: '100%' },
				});
			function InlineBanner(properties) {
				const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_3__.u)(),
					globalTreePath = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.LU)(),
					defaultProps = { layout: _types__WEBPACK_IMPORTED_MODULE_5__.VT.grid, width: 'auto', treePath: globalTreePath },
					props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('inlineBanner', globalTheme, defaultProps, properties),
					{ banner, className, internalClassName, disableA11y, layout, onClick } = props,
					styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.Z)(props, defaultStyles);
				return banner && banner.value
					? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_providers__WEBPACK_IMPORTED_MODULE_9__._, {
							children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', {
								onClick: (e) => {
									onClick && onClick(e, banner);
								},
								role: 'article',
								ref: (e) => (disableA11y ? null : (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_10__.iy)(e)),
								className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
									'ss__inline-banner',
									`ss__inline-banner--${layout}`,
									className,
									internalClassName
								),
								...styling,
								dangerouslySetInnerHTML: { __html: banner.value },
							}),
					  })
					: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
			}
		},
		'./components/src/components/Organisms/Autocomplete/Autocomplete.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => Autocomplete_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				Autocomplete = __webpack_require__('./components/src/components/Organisms/Autocomplete/Autocomplete.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				snapify = __webpack_require__('./components/src/utilities/snapify.ts');
			const Autocomplete_stories = {
					title: 'Organisms/Autocomplete',
					component: Autocomplete.j,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# Autocomplete\n\nRenders an autocomplete popup that binds to an `<input>` element.\n\nThe autocomplete layout renders terms, facets, banners, and results.\n\n## Components Used\n- Facets\n- Banner\n- Results\n- Icon\n\n## Usage\n\n### input\nThe required `input` prop expects either:\n\n- a string CSS selector that targets `<input>` element(s) to bind to\n\n- an `<input>` element to bind to\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} />\n```\n\n### controller\nThe required `controller` prop specifies a reference to the autocomplete controller.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} />\n```\n\n### width\nThe `width` prop specifies a width for the overall component. The default value is '100%'.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} width=\"800px\" />\n```\n\n### horizontalTerms\nThe `horizontalTerms` prop will alter autocomplete's CSS to display terms horizontally.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} horizontalTerms={true} />\n```\n\n### vertical\nThe `vertical` prop will alter autocomplete's CSS to display in a vertical layout.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} vertical={true} />\n```\n\n### termsTitle\nThe `termsTitle` prop will display the given text above the autocomplete terms area. The default value is blank and does not affect the trending terms title `trendingTitle`.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} termsTitle={'Terms'} />\n```\n\n### trendingTitle\nThe `trendingTitle` prop will display the given text above the autocomplete terms area when trending terms are displayed. The default value is 'Popular Searches' and does not affect non-trending terms title `termsTitle`. Also requires `controller.config.settings.trending.limit` to be configured)\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} trendingTitle={'Trending'} />\n```\n\n### historyTitle\nThe `historyTitle` prop will display the given text above the autocomplete historical terms area when historical terms are displayed. The default value is 'Previously Searched' and does not affect trending/non-trending terms title `termsTitle` & `trendingTitle`. Also requires `controller.config.settings.history.limit` to be configured.)\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} historyTitle={'History'} />\n```\n\n### facetsTitle\nThe `facetsTitle` prop will display the given text above the autocomplete facets area. (default is blank)\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} facetsTitle={'Filter By'} />\n```\n\n### contentTitle\nThe `contentTitle` prop will display the given text above the autocomplete content area. (default is blank)\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} contentTitle={'Results'} />\n```\n\n### seeMoreButtonText\nThe `seeMoreButtonText` prop will display the given text in the see more button.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} seeMoreButtonText={'See More!'} />\n```\n\nThe `seeMoreButtonText` prop can also take a function returning a string. The function is pased the Autocomplete controller. \n\n```jsx\n\nconst seeMoreButtonText = (controller) => {\n    const { pagination, filters, search } = controller.store;\n\n    return `See ${pagination.totalResults} ${filters.length > 0 ? 'filtered' : ''} result${pagination.totalResults == 1 ? '' : 's'} for \"${search.query?.string}\"`;\n}\n\n<Autocomplete controller={controller} input={'#searchInput'} seeMoreButtonText={seeMoreButtonText} />\n```\n\n### viewportMaxHeight\nThe `viewportMaxHeight` prop will restrict autocomplete from overflowing the viewport. The max height of autocomplete will always be visible in the viewport. \n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} viewportMaxHeight={true} />\n```\n\n### termsSlot\nThe `termsSlot` prop accepts a custom JSX element to render instead of the default terms section. This will also replace the trending terms.\n\nThe following props are available to be used within your custom component: `terms`, `trending`, `termsTitle`, `trendingTitle`, `showTrending`, `valueProps`, `emIfy`, `controller`\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} termsSlot={<CustomTermsComponent />} />\n```\n\n### facetsSlot\nThe `facetsSlot` prop accepts a custom JSX element to render instead of the default facets section. \n\nThe following props are available to be used within your custom component: `facets`, `merchandising`, `facetsTitle`, `hideBanners`, `controller`, `valueProps`\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} facetsSlot={<CustomFacetsComponent />} />\n```\n\n### contentSlot\nThe `contentSlot` prop accepts a custom JSX element to render instead of the default content section. \n\nThe following props are available to be used within your custom component: `results`, `merchandising`, `search`, `pagination`, `filters`, `controller`\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} contentSlot={<CustomContentComponent />} />\n```\n\n### resultsSlot\nThe `resultsSlot` prop accepts a custom JSX element to render instead of the default results section. \n\nThe following props are available to be used within your custom component: `results`, `contentTitle`, `controller`\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} resultsSlot={<CustomResultsComponent />} />\n```\n\n### resultComponent\nThe `resultComponent` prop specifies a custom result component to render.\n\n```jsx\n\nconst CustomResult = ({\n\tcontroller \n\tresult\n\ttheme\n}) => {\n\treturn <div>{result.mappings.core?.name}</div>\n}\n\n<Autocomplete controller={controller} input={'#searchInput'} resultComponent={CustomResult} />\n```\n\n### noResultsSlot\nThe `noResultsSlot` prop accepts a custom JSX element to render instead of the default no results section. \n\nThe following props are available to be used within your custom component: `search`, `pagination`, `controller`\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} noResultsSlot={<CustomNoResultsComponent />} />\n```\n\n### linkSlot\nThe `linkSlot` prop accepts a custom JSX element to render instead of the default \"see n results for keyword\" link section. \n\nThe following props are available to be used within your custom component: `search`, `results`, `pagination`, `filters`, `controller`\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} linkSlot={<CustomLinkComponent />} />\n```\n\n### hideFacets\nThe `hideFacets` prop specifies if the facets within autocomplete should be rendered.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} hideFacets={true} />\n```\n\n### hideTerms\nThe `hideTerms` prop specifies if the terms section within autocomplete should be rendered.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} hideTerms={true} />\n```\n\n### hideHistory\nThe `hideHistory` prop specifies if the historical terms and results within autocomplete should be rendered.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} hideHistory={true} />\n```\n\n### hideTrending\nThe `hideTrending` prop specifies if the trending terms and results within autocomplete should be rendered.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} hideTrending={true} />\n```\n\n### hideContent\nThe `hideContent` prop specifies if the content area within autocomplete should be rendered.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} hideContent={true} />\n```\n\n### hideBanners\nThe `hideBanners` prop specifies if the banners within autocomplete should be rendered. (inline banners not affected)\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} hideBanners={true} />\n```\n\n### hideLink\nThe `hideLink` prop specifies if the \"see n results for keyword\" text within autocomplete should be rendered.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} hideLink={true} />\n```\n\n### retainTrending\nThe `retainTrending` prop specifies if the trending terms within autocomplete should be rendered when there is a query.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} retainTrending={true} />\n```\n\n### retainHistory\nThe `retainHistory` prop specifies if the trending terms within autocomplete should be rendered when there is a query. \n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} retainHistory={true} />\n```\n\n### breakpoints\nThe `breakpoints` prop contains a breakpoints object that is passed to the `<Results />` sub-component.\nWhen the viewport is between the Object's key value, those props will be merged with any exisiting Autocomplete component props.\n\nDefault Autocomplete `breakpoints` object:\n\n```typescript\nconst breakpoints = {\n    0: {\n        columns: 2,\n        rows: 1,\n        hideFacets: true,\n        vertical: true,\n    },\n    540: {\n        columns: 3,\n        rows: 1,\n        vertical: true,\n    },\n    768: {\n        columns: 2,\n        rows: 3,\n    },\n};\n```\n\nSee `<Results />` component documentation for further details.\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} breakpoints={breakpoints} />\n```\n\n\n### onFacetOptionClick\nThe `onFacetOptionClick` prop contains a custom onClick event handler for facet options. Function is passed the click event. \n\n\n```typescript\nconst CustomOnClickFunc = (e) => {\n    console.log('You Clicked a Facet Option!' , e)\n};\n```\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} onFacetOptionClick={CustomOnClickFunc} />\n```\n\n\n\n### onTermClick\nThe `onTermClick` prop contains a custom onClick event handler for Suggested & Trending Terms. Function is passed the click event. \n\n\n```typescript\nconst customOnClickFunc = (e) => {\n    console.log('You Clicked a term!' , e)\n};\n```\n\n```jsx\n<Autocomplete controller={controller} input={'#searchInput'} onTermClick={customOnClickFunc} />\n```",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					decorators: [
						(Story) =>
							(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
								style: { maxWidth: '960px', position: 'relative' },
								children: [
									(0, emotion_react_jsx_runtime_browser_esm.Y)('input', {
										type: 'text',
										id: 'searchInput',
										placeholder: 'try me!',
										autoComplete: 'off',
										style: { width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #3a23ad' },
									}),
									(0, emotion_react_jsx_runtime_browser_esm.Y)(Story, {}),
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
						...componentArgs.F,
					},
				},
				snapInstance = snapify.p.autocomplete({
					id: 'Autocomplete',
					selector: '#searchInput',
					globals: { siteId: '8uyt2m' },
					settings: { trending: { limit: 5 } },
				}),
				Default = (args, { loaded: { controller } }) => (
					setTimeout(() => {
						controller.bind();
					}),
					(0, emotion_react_jsx_runtime_browser_esm.Y)(Autocomplete.j, { ...args, controller, input: controller?.config.selector })
				);
			(Default.loaders = [async () => ({ controller: await snapInstance })]),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: {
							originalSource:
								'(args: AutocompleteProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: AutocompleteController;\n  };\n}) => {\n  // bind after input exists\n  setTimeout(() => {\n    controller.bind();\n  });\n  return <Autocomplete {...args} controller={controller} input={controller?.config.selector} />;\n}',
							...Default.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default'];
		},
		'./components/src/components/Organisms/Facets/Facets.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { J: () => Facets });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_2__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_Facet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/components/Organisms/Facet/Facet.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts');
			const defaultStyles = () => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({}),
				Facets = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						globalTreePath = (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)(),
						defaultProps = { facets: properties.controller?.store?.facets, treePath: globalTreePath };
					let props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('facets', globalTheme, defaultProps, properties);
					const { limit, onFacetOptionClick, disableStyles, className, internalClassName, controller, treePath } = props,
						facetClickEvent = (e) => {
							onFacetOptionClick && onFacetOptionClick(e), controller?.setFocused && controller?.setFocused();
						},
						themeDefaults = {
							components: {
								facetGridOptions: { onClick: facetClickEvent },
								facetHierarchyOptions: { onClick: facetClickEvent },
								facetListOptions: { onClick: facetClickEvent },
								facetPaletteOptions: { onClick: facetClickEvent },
							},
						},
						theme = deepmerge__WEBPACK_IMPORTED_MODULE_2___default()(themeDefaults, props?.theme || {}, {
							arrayMerge: (destinationArray, sourceArray) => sourceArray,
						});
					props = { ...props, theme };
					let { facets } = props;
					limit && facets && limit > 0 && (facets = facets.slice(0, +limit));
					const subProps_facet = {
							internalClassName: 'ss__facets__facet',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)(props, defaultStyles);
					return facets && facets?.length > 0
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_providers__WEBPACK_IMPORTED_MODULE_11__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('div', {
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__facets', className, internalClassName),
									...styling,
									children: facets.map((facet) => {
										return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(
											_Facet__WEBPACK_IMPORTED_MODULE_12__.s,
											{ ...subProps_facet, facet, name: ((fieldName = facet.field), fieldName.replace(/_/g, '-').toLowerCase()) },
											facet.field
										);
										var fieldName;
									}),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Organisms/Results/Results.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { n: () => Results });
			var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
					'../snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'
				),
				_Atoms_Merchandising_InlineBanner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
					'./components/src/components/Atoms/Merchandising/InlineBanner/InlineBanner.tsx'
				),
				_Molecules_Result__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/components/Molecules/Result/Result.tsx'),
				_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/types.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/providers/withTracking.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/providers/snap.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks_useDisplaySettings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/hooks/useDisplaySettings.tsx'),
				_Trackers_ResultTracker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
					'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'
				),
				_hooks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/hooks/useComponent.tsx');
			const defaultStyles = ({ gapSize, columns }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						display: 'flex',
						flexFlow: 'row wrap',
						gap: gapSize,
						gridTemplateRows: 'auto',
						gridTemplateColumns: `repeat(${columns}, 1fr)`,
						'& .ss__result, & .ss__result-layout': {
							boxSizing: 'border-box',
							flex: '0 1 auto',
							width: `calc(${100 / columns}% - (${columns - 1} * ${gapSize} / ${columns} ) )`,
							marginRight: gapSize,
							marginBottom: gapSize,
							[`&:nth-of-type(${columns}n)`]: { marginRight: '0' },
							[`&:nth-last-of-type(-n+${columns})`]: { marginBottom: '0' },
						},
						'@supports (display: grid)': { display: 'grid', '& .ss__result, & .ss__result-layout': { width: 'initial', flex: void 0, margin: 0 } },
					}),
				TrackedResultComponent = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.W)(_Molecules_Result__WEBPACK_IMPORTED_MODULE_6__.Q),
				Results = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_7__.u)(),
						globalTreePath = (0, _providers__WEBPACK_IMPORTED_MODULE_8__.LU)(),
						defaultBreakpointsProps = {
							0: { columns: properties.columns || 1 },
							540: { columns: properties.columns || 2 },
							768: { columns: properties.columns || 3 },
							991: { columns: properties.columns || 4 },
						},
						defaultProps = {
							results: properties.controller?.store?.results,
							columns: 4,
							gapSize: '20px',
							layout: _types__WEBPACK_IMPORTED_MODULE_9__.VT.grid,
							breakpoints: defaultBreakpointsProps,
							treePath: globalTreePath,
						};
					let props = (0, _utilities__WEBPACK_IMPORTED_MODULE_10__.v6)('results', globalTheme, defaultProps, properties);
					if (!properties.theme?.name) {
						const displaySettings = (0, _hooks_useDisplaySettings__WEBPACK_IMPORTED_MODULE_11__.X)(props?.breakpoints || {}),
							theme = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(props?.theme || {}, displaySettings?.theme || {}, {
								arrayMerge: (destinationArray, sourceArray) => sourceArray,
							});
						props = { ...props, ...displaySettings, theme };
					}
					const { disableStyles, className, internalClassName, layout, theme, controller, treePath } = props;
					let { resultComponent } = props;
					const subProps_result = {
							internalClassName: 'ss__results__result',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_12__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_inlineBanner = {
							internalClassName: 'ss__results__inline-banner',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_12__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						};
					let results = props.results;
					props?.columns && props?.rows && props.columns > 0 && props.rows > 0 && (results = props.results?.slice(0, props.columns * props.rows));
					const styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_13__.Z)(
						{ ...props, columns: layout == _types__WEBPACK_IMPORTED_MODULE_9__.VT.list ? 1 : props.columns },
						defaultStyles
					);
					if ('string' == typeof resultComponent) {
						const snap = (0, _providers__WEBPACK_IMPORTED_MODULE_14__.uk)();
						if (
							snap?.templates?.library.import.component.result &&
							((resultComponent = (0, _hooks__WEBPACK_IMPORTED_MODULE_15__.x)(snap?.templates?.library.import.component.result, resultComponent)),
							!resultComponent)
						)
							return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
					}
					return results?.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Y)(_providers__WEBPACK_IMPORTED_MODULE_17__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
										'ss__results',
										`ss__results-${props.layout}`,
										className,
										internalClassName
									),
									children: results.map((result) =>
										(() => {
											if (result.type === _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_18__.c.BANNER)
												return (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.n)(_Atoms_Merchandising_InlineBanner__WEBPACK_IMPORTED_MODULE_19__._, {
													...subProps_inlineBanner,
													key: result.id,
													banner: result,
													layout: props.layout,
												});
											if (resultComponent && controller) {
												const ResultComponent = resultComponent;
												return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Y)(
													_Trackers_ResultTracker__WEBPACK_IMPORTED_MODULE_20__.o,
													{
														result,
														controller,
														children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Y)(
															ResultComponent,
															{ controller, result, theme, treePath },
															result.id
														),
													}
												);
											}
											return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Y)(
												TrackedResultComponent,
												{ ...subProps_result, result, layout: props.layout, controller },
												result.id
											);
										})()
									),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { o: () => ResultTracker });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/createImpressionObserver.ts');
			const CSS_ResultTracker = () => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_1__.AH)({}),
				ResultTracker = (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_3__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_4__.v6)('resultTracker', globalTheme, {}, properties),
						{ children, result, track, controller, className, internalClassName, disableStyles, style } = props,
						mergedTrack = { render: !0, impression: !0, click: !0, ...track },
						{ ref, inViewport } = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.Q)();
					inViewport && mergedTrack.impression && 'product' === result.type && controller?.track.product.impression(result);
					const styling = {};
					return (
						disableStyles ? style && (styling.css = [style]) : (styling.css = [CSS_ResultTracker(), style]),
						(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)('div', {
							className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
								'ss__result-tracker',
								`ss__${controller?.type}-result-tracker`,
								className,
								internalClassName
							),
							onClick: (e) => {
								'product' === result.type && mergedTrack.click && controller?.track.product.click(e, result);
							},
							ref,
							...styling,
							children,
						})
					);
				});
		},
		'./components/src/hooks/useDeepCompareEffect.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { I: () => useDeepCompareEffect, r: () => useDeepCompareMemoize });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				dequal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/dequal/dist/index.mjs');
			function useDeepCompareMemoize(value) {
				const ref = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(value),
					signalRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(0);
				return (
					(0, dequal__WEBPACK_IMPORTED_MODULE_1__.j)(value, ref.current) || ((ref.current = value), (signalRef.current += 1)),
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.Kr)(() => ref.current, [signalRef.current])
				);
			}
			function useDeepCompareEffect(callback, dependencies) {
				return (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(callback, [useDeepCompareMemoize(dependencies)]);
			}
		},
		'./components/src/hooks/useDisplaySettings.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { Q: () => getDisplaySettings, X: () => useDisplaySettings });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../snap-toolbox/dist/esm/debounce/debounce.js'),
				_useDeepCompareEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./components/src/hooks/useDeepCompareEffect.tsx');
			function useDisplaySettings(breakpointsObj) {
				if (!breakpointsObj || !Object.keys(breakpointsObj).length) return;
				const [displaySettings, setDisplaySettings] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(getDisplaySettings(breakpointsObj));
				let debouncedHandleResize;
				const resetResizeListener = () => {
					(debouncedHandleResize = (0, _searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_1__.s)(() => {
						!(function handleResize() {
							setDisplaySettings(getDisplaySettings(breakpointsObj));
						})();
					}, 50)),
						window.addEventListener('resize', debouncedHandleResize);
				};
				return (
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(
						() => (resetResizeListener(), () => window.removeEventListener('resize', debouncedHandleResize)),
						[]
					),
					(0, _useDeepCompareEffect__WEBPACK_IMPORTED_MODULE_2__.I)(() => {
						setDisplaySettings(getDisplaySettings(breakpointsObj)), resetResizeListener();
					}, [breakpointsObj]),
					displaySettings
				);
			}
			const getDisplaySettings = (breakpoints) => {
				let breakpointsSettings;
				const currentScreenWidth = window.innerWidth,
					sortedList = Object.keys(breakpoints)
						.map((str) => +str)
						.sort((a, b) => a - b)
						.map((vp) => ({ [vp]: breakpoints[vp] }));
				if (sortedList.length) {
					for (let i = 0; i < sortedList.length; i++) {
						const entry = sortedList[i],
							breakpoint = parseInt(Object.keys(entry)[0]);
						if (i + 1 === sortedList.length || (0 === i && currentScreenWidth < breakpoint)) {
							breakpointsSettings = sortedList[i][breakpoint];
							break;
						}
						{
							const nextBreakpoint = parseInt(Object.keys(sortedList[i + 1])[0]);
							if (currentScreenWidth >= breakpoint && currentScreenWidth < nextBreakpoint) {
								breakpointsSettings = sortedList[i][breakpoint];
								break;
							}
						}
					}
					return breakpointsSettings;
				}
				return breakpointsSettings;
			};
		},
		'./components/src/hooks/useIntersectionAdvanced.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { v: () => useIntersectionAdvanced });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			const useIntersectionAdvanced = (ref, options = {}) => {
				const { rootMargin = '0px', fireOnce = !1, threshold = 0, minVisibleTime = 0, resetKey } = options,
					[isIntersecting, setIntersecting] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(!1),
					visibleTimerRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(null),
					visibleStartRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(null),
					lastResetKeyRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(resetKey);
				return (
					resetKey !== lastResetKeyRef.current &&
						(setIntersecting(!1),
						visibleTimerRef.current && (window.clearTimeout(visibleTimerRef.current), (visibleTimerRef.current = null)),
						(visibleStartRef.current = null),
						(lastResetKeyRef.current = resetKey)),
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
						if ((setIntersecting(!1), !window.IntersectionObserver || !ref.current)) return;
						let observer = null;
						return (
							(observer = new IntersectionObserver(
								([entry]) => {
									entry.isIntersecting
										? minVisibleTime > 0
											? ((visibleStartRef.current = Date.now()),
											  visibleTimerRef.current && window.clearTimeout(visibleTimerRef.current),
											  (visibleTimerRef.current = window.setTimeout(() => {
													setIntersecting(!0), fireOnce && ref.current && observer && observer.unobserve(ref.current);
											  }, minVisibleTime)))
											: (setIntersecting(!0), fireOnce && ref.current && observer && observer.unobserve(ref.current))
										: (visibleTimerRef.current && window.clearTimeout(visibleTimerRef.current),
										  (visibleTimerRef.current = null),
										  (visibleStartRef.current = null),
										  setIntersecting(!1));
								},
								{ rootMargin, threshold }
							)),
							ref.current && observer.observe(ref.current),
							() => {
								setIntersecting(!1),
									visibleTimerRef.current && window.clearTimeout(visibleTimerRef.current),
									observer && ref.current && observer.unobserve(ref.current);
							}
						);
					}, [ref, resetKey]),
					isIntersecting
				);
			};
		},
		'./components/src/providers/withTracking.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { W: () => withTracking });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./components/src/utilities/createImpressionObserver.ts'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			function withTracking(WrappedComponent) {
				return (props) => {
					const { controller, result, ...restProps } = props;
					let resetKey;
					if (
						(controller || console.warn('Warning: No controller provided to withTracking'),
						result || console.warn('Warning: No result provided to withTracking'),
						'search' === controller?.type || 'autocomplete' === controller?.type)
					) {
						const urlManager = controller.urlManager;
						resetKey = JSON.stringify({
							q: urlManager.state.query,
							p: urlManager.state.page,
							ps: urlManager.state.pageSize,
							s: urlManager.state.sort,
							f: urlManager.state.filter,
						});
					} else if ('recommendation' === controller?.type) {
						const recStore = controller.store;
						resetKey = JSON.stringify({ tag: recStore.profile?.tag, ids: recStore.results.map((result) => result.id).join(',') });
					}
					const { ref, inViewport } = (0, _utilities__WEBPACK_IMPORTED_MODULE_1__.Q)({ resetKey });
					inViewport && 'product' === result?.type && controller?.track.product.impression(result);
					const currentRef = ref.current;
					if (currentRef) {
						const handleClick = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.hb)((e) => {
							controller?.track.product.click(e, result);
						}, []);
						currentRef.setAttribute('sstracking', 'true'),
							currentRef.removeEventListener('click', handleClick),
							currentRef.addEventListener('click', handleClick);
					}
					const trackingProps = { ...restProps, controller, result, trackingRef: ref };
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(WrappedComponent, { ...trackingProps });
				};
			}
		},
		'./components/src/utilities/createImpressionObserver.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { Q: () => createImpressionObserver });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./components/src/hooks/useIntersectionAdvanced.tsx');
			const IMPRESSION_VISIBILITY_THRESHOLD = 0.7,
				IMPRESSION_MIN_VISIBLE_TIME = 1e3;
			function createImpressionObserver(options) {
				const ref = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(null);
				return {
					ref,
					inViewport: (0, _hooks__WEBPACK_IMPORTED_MODULE_1__.v)(ref, {
						...options,
						fireOnce: !0,
						threshold: IMPRESSION_VISIBILITY_THRESHOLD,
						minVisibleTime: IMPRESSION_MIN_VISIBLE_TIME,
					}),
				};
			}
		},
	},
]);
