'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[8595],
	{
		'./components/src/components/Templates/SearchHorizontal/SearchHorizontal.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					NoResults: () => SearchHorizontal_stories_NoResults,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => SearchHorizontal_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				snapify = __webpack_require__('./components/src/utilities/snapify.ts');
			var es = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				emotion_react_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames_default = __webpack_require__.n(classnames),
				Results = __webpack_require__('./components/src/components/Organisms/Results/Results.tsx'),
				mergeProps = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				defined = __webpack_require__('./components/src/utilities/defined.ts'),
				emotion_element_5486c51c_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				cache = __webpack_require__('./components/src/providers/cache.tsx'),
				Toolbar = __webpack_require__('./components/src/components/Organisms/Toolbar/Toolbar.tsx'),
				SearchHeader = __webpack_require__('./components/src/components/Atoms/SearchHeader/SearchHeader.tsx'),
				NoResults = __webpack_require__('./components/src/components/Atoms/NoResults/NoResults.tsx'),
				Banner = __webpack_require__('./components/src/components/Atoms/Merchandising/Banner/Banner.tsx'),
				SearchMerchandisingStore = __webpack_require__('../snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
				FacetsHorizontal = __webpack_require__('./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx');
			const CSS_SearchHorizontal = ({}) => (0, emotion_react_browser_esm.AH)({}),
				SearchHorizontal = (0, es.PA)((properties) => {
					const globalTheme = (0, emotion_element_5486c51c_browser_esm.u)(),
						props = (0, mergeProps.v6)('searchHorizontal', globalTheme, {}, properties),
						{
							disableStyles,
							className,
							controller,
							style,
							styleScript,
							hideSearchHeader,
							hideMerchandisingBanners,
							hideTopToolbar,
							hideMiddleToolbar,
							resultComponent,
							hideBottomToolBar,
							treePath,
						} = props,
						store = controller.store,
						subProps_FacetsHorizontal = { ...(0, defined.s)({ disableStyles }), theme: props.theme, treePath },
						subProps_Banner = { ...(0, defined.s)({ disableStyles }), theme: props.theme, treePath },
						subProps_TopToolbar = {
							name: 'top',
							hideFilterSummary: !1,
							hideLayoutSelector: !0,
							hideSortBy: !0,
							hidePagination: !0,
							hidePerPage: !0,
							...(0, defined.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_MiddleToolbar = {
							name: 'middle',
							hideFilterSummary: !0,
							hidePagination: !0,
							hideSortBy: !1,
							hidePerPage: !1,
							...(0, defined.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_BottomToolbar = {
							name: 'bottom',
							hideFilterSummary: !0,
							hidePerPage: !0,
							hideSortBy: !0,
							...(0, defined.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_SearchHeader = { ...(0, defined.s)({ disableStyles }), theme: props.theme, treePath },
						subProps_Results = { name: 'search', resultComponent, ...(0, defined.s)({ disableStyles }), theme: props.theme, treePath },
						subProps_NoResults = { ...(0, defined.s)({ disableStyles }), theme: props.theme, treePath },
						styling = { 'ss-name': props.name },
						stylingProps = props;
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS_SearchHorizontal(stylingProps), style]);
					const merchandising = controller.store.merchandising;
					let hideHeaderBanner, hideBannerBanner, hideFooterBanner;
					return (
						hideMerchandisingBanners &&
							('boolean' == typeof hideMerchandisingBanners
								? ((hideHeaderBanner = !0), (hideBannerBanner = !0), (hideFooterBanner = !0))
								: 'object' == typeof hideMerchandisingBanners &&
								  hideMerchandisingBanners.map((type) => {
										'banner' == type.toLowerCase() && (hideBannerBanner = !0),
											'header' == type.toLowerCase() && (hideHeaderBanner = !0),
											'footer' == type.toLowerCase() && (hideFooterBanner = !0);
								  })),
						(0, emotion_react_jsx_runtime_browser_esm.Y)(cache._, {
							children: (0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
								...styling,
								className: classnames_default()('ss__search-horizontal', className),
								children: [
									!hideSearchHeader && (0, emotion_react_jsx_runtime_browser_esm.Y)(SearchHeader.w, { ...subProps_SearchHeader, controller }),
									!hideTopToolbar &&
										store.pagination.totalResults > 0 &&
										(0, emotion_react_jsx_runtime_browser_esm.Y)(Toolbar.M, {
											...subProps_TopToolbar,
											className: 'ss__search-horizontal__content__toolbar--top-toolbar',
											controller,
										}),
									(0, emotion_react_jsx_runtime_browser_esm.Y)(FacetsHorizontal.b, {
										...subProps_FacetsHorizontal,
										facets: store.facets,
										controller,
									}),
									(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
										className: classnames_default()('ss__search-horizontal__content'),
										children: [
											!hideHeaderBanner &&
												(0, emotion_react_jsx_runtime_browser_esm.Y)(Banner.l, {
													...subProps_Banner,
													content: merchandising.content,
													type: SearchMerchandisingStore.c.HEADER,
													name: 'header',
												}),
											!hideBannerBanner &&
												(0, emotion_react_jsx_runtime_browser_esm.Y)(Banner.l, {
													...subProps_Banner,
													content: merchandising.content,
													type: SearchMerchandisingStore.c.BANNER,
													name: 'banner',
												}),
											!hideMiddleToolbar &&
												store.pagination.totalResults > 0 &&
												(0, emotion_react_jsx_runtime_browser_esm.Y)(Toolbar.M, {
													...subProps_MiddleToolbar,
													className: 'ss__search-horizontal__content__toolbar--middle-toolbar',
													controller,
												}),
											(0, emotion_react_jsx_runtime_browser_esm.Y)('div', { className: 'clear' }),
											store.pagination.totalResults
												? (0, emotion_react_jsx_runtime_browser_esm.Y)(Results.n, { ...subProps_Results, controller, breakpoints: {} })
												: 0 === store.pagination.totalResults &&
												  (0, emotion_react_jsx_runtime_browser_esm.Y)(NoResults.a, { ...subProps_NoResults, controller }),
											!hideFooterBanner &&
												(0, emotion_react_jsx_runtime_browser_esm.Y)(Banner.l, {
													...subProps_Banner,
													content: merchandising.content,
													type: SearchMerchandisingStore.c.FOOTER,
													name: 'footer',
												}),
											(0, emotion_react_jsx_runtime_browser_esm.Y)('div', { className: 'clear' }),
											!hideBottomToolBar &&
												store.pagination.totalResults > 0 &&
												(0, emotion_react_jsx_runtime_browser_esm.Y)(Toolbar.M, {
													...subProps_BottomToolbar,
													className: 'ss__search-horizontal__content__toolbar--bottom-toolbar',
													controller,
												}),
										],
									}),
								],
							}),
						})
					);
				}),
				SearchHorizontal_stories = {
					title: 'Templates/SearchHorizontal',
					component: SearchHorizontal,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												'# SearchHorizontal Template\n\nRenders a Search Results Page.\n\n## Sub-components\n\n- FacetsHorizontal\n- LayoutSelector\n- Results\n- NoResults\n- Toolbar\n- SearchHeader\n- Banner\n\n## Usage\n\n### controller\nThe required `controller` prop specifies a reference to the search controller.\n\n```jsx\n<SearchHorizontal controller={controller} />\n```\n\n### hideSearchHeader\nThe `hideSearchHeader` prop specifies if the SearchHeader component should be rendered.  \n\n```jsx\n<SearchHorizontal controller={controller} hideSearchHeader={true} />\n```\n\n### hidetopToolBar\nThe `hidetopToolBar` prop specifies if the top ToolBar component should be rendered.  \n\n```jsx\n<SearchHorizontal controller={controller} hidetopToolBar={true} />\n```\n\n### hideBottomToolBar\nThe `hideBottomToolBar` prop specifies if the bottom ToolBar component should be rendered.  \n\n```jsx\n<SearchHorizontal controller={controller} hideBottomToolBar={true} />\n```\n\n\n### hideMerchandisingBanners\nThe `hideMerchandisingBanners` prop specifies if merchandising banners should render. This can take a boolean to hide all banners, or an array of specific banner types you wish to hide. \n\n```jsx\n<SearchHorizontal controller={controller} hideMerchandisingBanners={true} />\n```\nor\n\n```jsx\n<SearchHorizontal controller={controller} hideMerchandisingBanners={["Footer", "Header", "Banner", "left"]} />\n```\n\n### hideLayoutSelector\nThe `hideLayoutSelector` prop specifies if the layoutSelector component should be rendered. \n\n```jsx\n<SearchHorizontal controller={controller} hideLayoutSelector={true} />\n```\n\n### layoutConfig\nThe `layoutConfig` prop specifies the configuration for the layoutSelector.  \n\n```jsx\nconst layoutConfig = {\n    default: {\n        label: "5 wide",\n        value: {\n            columns:5,\n        }\n    },\n    options: [\n        {\n            label: "1 wide",\n            value: {\n\n                icon: "square",\n                columns:1,\n            }\n        },\n        {\n            label: "2 wide",\n            value: {\n                icon: {\n                    icon: "layout-large",\n                },\n                columns:2,\n            }\n        },\n        {\n            label: "3 wide",\n            value: {\n                icon: {\n                    icon: \'layout-grid\',\n                },\n                columns:3,\n            }\n        },\n        {\n            label: "4 wide",\n            value: {\n                columns:4,\n            }\n        },\n        {\n            label: "list",\n            value: {\n                icon: {\n                    icon: \'layout-list\',\n                },\n                component: (props) => <Result {...props} controller={controller} layout={ResultsLayout.list}/>,\n                columns:1,\n            }\n        },\n    ]\t\n}\n\n<SearchHorizontal controller={controller} layoutConfig={layoutConfig} />\n```',
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					argTypes: {
						controller: {
							description: 'Search Controller Reference',
							type: { required: !0 },
							table: { type: { summary: 'Controller' } },
							control: { type: 'none' },
						},
						hideSearchHeader: {
							defaultValue: !1,
							description: 'prevents the SearchHeader component from rendering',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideTopToolBar: {
							defaultValue: !1,
							description: 'prevents the top Toolbar component from rendering',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideBottomToolBar: {
							defaultValue: !1,
							description: 'prevents the bottom Toolbar component from rendering',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideMerchandisingBanners: {
							defaultValue: !1,
							description: 'hides merchandising banners. Accepts a boolean, or array of banner ContentTypes to hide.',
							table: { type: { summary: 'boolean | ContentType[]' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideLayoutSelector: {
							defaultValue: !1,
							description: 'prevents the layoutSelector component from rendering',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						layoutConfig: {
							description: 'object to configure the layoutSelector',
							table: { type: { summary: 'object' } },
							control: { type: 'object' },
						},
						...componentArgs.F,
					},
				},
				snapInstance = snapify.p.search({ id: 'search', globals: { siteId: '8uyt2m' } }),
				noresultsInstance = snapify.p.search({ id: 'noresults', globals: { siteId: '8uyt2m', search: { query: { string: 'eijworhufsbgd' } } } }),
				Default = (args, { loaded: { controller } }) => (0, emotion_react_jsx_runtime_browser_esm.Y)(SearchHorizontal, { ...args, controller });
			Default.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })];
			const SearchHorizontal_stories_NoResults = (args, { loaded: { controller } }) =>
				(0, emotion_react_jsx_runtime_browser_esm.Y)(SearchHorizontal, { ...args, controller });
			(SearchHorizontal_stories_NoResults.loaders = [async () => (await noresultsInstance.search(), { controller: noresultsInstance })]),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: {
							originalSource:
								'(args: SearchHorizontalProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => {\n  return <SearchHorizontal {...args} controller={controller} />;\n}',
							...Default.parameters?.docs?.source,
						},
					},
				}),
				(SearchHorizontal_stories_NoResults.parameters = {
					...SearchHorizontal_stories_NoResults.parameters,
					docs: {
						...SearchHorizontal_stories_NoResults.parameters?.docs,
						source: {
							originalSource:
								'(args: SearchHorizontalProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => {\n  return <SearchHorizontal {...args} controller={controller} />;\n}',
							...SearchHorizontal_stories_NoResults.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default', 'NoResults'];
		},
		'./components/src/components/Atoms/Merchandising/Banner/Banner.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { l: () => Banner });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'
				);
			const CSS_banner = ({}) => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({ '& iframe, img': { maxWidth: '100%', height: 'auto' } }),
				Banner = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.v6)('banner', globalTheme, {}, properties),
						{ controller, type, disableStyles, className, style, styleScript } = props,
						content = props.content || controller?.store?.merchandising.content;
					if (type === _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_6__.c.INLINE)
						return (
							console.warn(
								`BannerType '${_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_6__.c.INLINE}' is not supported in <Banner /> component`
							),
							(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
						);
					const styling = { 'ss-name': props.name },
						stylingProps = props;
					let bannerContent;
					return (
						styleScript && !disableStyles
							? (styling.css = [styleScript(stylingProps), style])
							: disableStyles
							? style && (styling.css = [style])
							: (styling.css = [CSS_banner(stylingProps), style]),
						content && content[type] && (bannerContent = content[type]),
						bannerContent && bannerContent.length
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_providers__WEBPACK_IMPORTED_MODULE_8__._, {
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)('div', {
										className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__banner', `ss__banner--${type}`, className),
										...styling,
										dangerouslySetInnerHTML: { __html: bannerContent.join('') },
									}),
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
					);
				});
		},
		'./components/src/components/Atoms/Merchandising/InlineBanner/InlineBanner.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { _: () => InlineBanner });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/types.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeProps.ts');
			const CSS = {
				inlineBanner: ({ width }) =>
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
					}),
			};
			function InlineBanner(properties) {
				const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_3__.u)(),
					defaultProps = { layout: _types__WEBPACK_IMPORTED_MODULE_4__.VT.grid, width: 'auto' },
					props = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.v6)('inlineBanner', globalTheme, defaultProps, properties),
					{ banner, disableStyles, className, layout, onClick, style, styleScript } = props,
					styling = { 'ss-name': props.name },
					stylingProps = props;
				return (
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS.inlineBanner(stylingProps), style]),
					banner && banner.value
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_providers__WEBPACK_IMPORTED_MODULE_7__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)('div', {
									onClick: (e) => {
										onClick && onClick(e, banner);
									},
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__inline-banner', `ss__inline-banner--${layout}`, className),
									...styling,
									dangerouslySetInnerHTML: { __html: banner.value },
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
				);
			}
		},
		'./components/src/components/Atoms/NoResults/NoResults.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { a: () => NoResults });
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				es = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				emotion_react_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames_default = __webpack_require__.n(classnames),
				emotion_element_5486c51c_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				providers_snap = __webpack_require__('./components/src/providers/snap.tsx'),
				mergeProps = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				cloneWithProps = __webpack_require__('./components/src/utilities/cloneWithProps.tsx'),
				handleize = __webpack_require__('../snap-toolbox/dist/esm/filters/handleize.js'),
				useComponent = __webpack_require__('./components/src/hooks/useComponent.tsx'),
				hooks_module = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			var cjs = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				cjs_default = __webpack_require__.n(cjs),
				useLang = __webpack_require__('./components/src/hooks/useLang.tsx');
			const CSS_noResults = () => (0, emotion_react_browser_esm.AH)({}),
				NoResults = (0, es.PA)((properties) => {
					const globalTheme = (0, emotion_element_5486c51c_browser_esm.u)(),
						defaultProps = {
							suggestionsTitleText: 'Suggestions',
							suggestionsList: [
								'Check for misspellings.',
								'Remove possible redundant keywords (ie. "products").',
								'Use other words to describe what you are searching for.',
							],
							contactsTitleText: 'Still can\'t find what you\'re looking for? <a href="/contact-us">Contact us</a>.',
							contactsList: [
								{ title: 'Address', content: '123 Street Address<br />City, State, Zipcode' },
								{ title: 'Hours', content: 'Monday - Saturday, 00:00am - 00:00pm<br />Sunday, 00:00am - 00:00pm' },
								{ title: 'Phone', content: '<a href="tel:1234567890">123-456-7890</a>' },
								{ title: 'Email', content: '<a href="mailto:email@site.com">email@site.com</a>' },
							],
						},
						props = (0, mergeProps.v6)('noResults', globalTheme, defaultProps, properties),
						{
							contentSlot,
							suggestionsTitleText,
							suggestionsList,
							hideContact,
							contactsTitleText,
							hideSuggestions,
							contactsList,
							controller,
							templates,
							disableStyles,
							className,
							style,
							styleScript,
							treePath,
						} = props,
						styling = { 'ss-name': props.name },
						stylingProps = props;
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS_noResults(), style]);
					const suggestionsExist = suggestionsList && Array.isArray(suggestionsList) && 0 !== suggestionsList.length,
						contactsExist = contactsList && Array.isArray(contactsList) && 0 !== contactsList.length;
					let recommendationTemplateComponent, recommendationTemplateResultComponent, recsController;
					if (templates?.recommendation?.enabled) {
						const componentName = templates?.recommendation?.component || 'Recommendation',
							snap = (0, providers_snap.uk)(),
							themeName = properties.theme?.name;
						let defaultResultComponentFromTheme;
						themeName && (defaultResultComponentFromTheme = snap?.templates?.config.themes[themeName]?.resultComponent);
						const resultComponentName = templates?.recommendation?.resultComponent || defaultResultComponentFromTheme,
							mergedConfig = Object.assign({ id: '', tag: 'no-results', branch: 'production' }, templates.recommendation.config);
						(mergedConfig.id = mergedConfig.id || `search-${mergedConfig.tag}`),
							snap &&
								((recsController = ((snap, type, config) => {
									const [controller, setController] = (0, hooks_module.J0)(void 0);
									return (
										(0, hooks_module.vJ)(() => {
											snap
												.getController(config.id)
												.then((controller) => {
													setController(controller);
												})
												.catch(() => {
													snap.createController(type, config).then((controller) => {
														setController(controller);
													});
												});
										}, []),
										controller
									);
								})(snap, 'recommendation', mergedConfig)),
								recsController?.store?.loaded ||
									recsController?.store?.loading ||
									'error' === recsController?.store.error?.type ||
									recsController?.search(),
								resultComponentName &&
									snap?.templates?.library.import.component.result &&
									(recommendationTemplateResultComponent = (0, useComponent.x)(
										snap?.templates?.library.import.component.result,
										resultComponentName
									)),
								componentName &&
									snap?.templates?.library.import.component.recommendation.default &&
									(recommendationTemplateComponent = (0, useComponent.x)(
										snap?.templates?.library.import.component.recommendation.default,
										componentName
									)));
					}
					const RecommendationTemplateComponent = recommendationTemplateComponent,
						RecommendationTemplateResultComponent = recommendationTemplateResultComponent,
						defaultLang = {
							suggestionsTitleText: { value: suggestionsTitleText },
							suggestionsList: {
								value: `${
									suggestionsList
										? suggestionsList.map((suggestion) => `<li class="ss__no-results__suggestions__list__option">${suggestion}</li>`).join('')
										: void 0
								}\n\t\t\t`,
							},
							contactsTitleText: { value: contactsTitleText },
							contactsList: {
								value: `${
									contactsList
										? contactsList
												.map(
													(contact) =>
														`<div class='ss__no-results__contact__detail ss__no-results__contact__detail--${handleize.p(
															contact.title
														)}'><h4 class="ss__no-results__contact__detail__title">${
															contact.title
														}</h4><p class="ss__no-results__contact__detail__content">${contact.content}</p></div>`
												)
												.join('')
										: void 0
								}`,
							},
						},
						lang = cjs_default()(defaultLang, props.lang || {}),
						mergedLang = (0, useLang.u)(lang, { controller });
					return (0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
						className: classnames_default()('ss__no-results', className),
						...styling,
						children: [
							contentSlot &&
								('string' == typeof contentSlot
									? (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
											className: 'ss__no-results__slot',
											dangerouslySetInnerHTML: { __html: contentSlot },
									  })
									: (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
											className: 'ss__no-results__slot',
											children: (0, cloneWithProps.Y)(contentSlot, { controller, treePath }),
									  })),
							!hideSuggestions &&
								(suggestionsTitleText || suggestionsExist) &&
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									className: 'ss__no-results__suggestions',
									children: [
										suggestionsTitleText &&
											(0, emotion_react_jsx_runtime_browser_esm.Y)('h4', {
												className: 'ss__no-results__suggestions__title',
												...mergedLang.suggestionsTitleText?.all,
											}),
										suggestionsExist &&
											(0, emotion_react_jsx_runtime_browser_esm.Y)('ul', {
												className: 'ss__no-results__suggestions__list',
												...mergedLang.suggestionsList?.all,
											}),
									],
								}),
							!hideContact &&
								(contactsTitleText || contactsExist) &&
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									className: 'ss__no-results__contact',
									children: [
										contactsTitleText &&
											(0, emotion_react_jsx_runtime_browser_esm.Y)('h4', {
												className: 'ss__no-results__contact__title',
												...mergedLang.contactsTitleText?.all,
											}),
										contactsExist && (0, emotion_react_jsx_runtime_browser_esm.Y)('div', { ...mergedLang.contactsList?.all }),
									],
								}),
							RecommendationTemplateComponent && recsController?.store?.loaded
								? (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
										className: 'ss__no-results__recommendations',
										children: (0, emotion_react_jsx_runtime_browser_esm.Y)(RecommendationTemplateComponent, {
											controller: recsController,
											resultComponent: RecommendationTemplateResultComponent,
											name: 'noResultsRecommendations',
										}),
								  })
								: null,
						],
					});
				});
		},
		'./components/src/components/Atoms/SearchHeader/SearchHeader.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { w: () => SearchHeader });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
			const CSS_searchheader = ({}) => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({}),
				SearchHeader = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						landingPage = properties.controller?.store.merchandising.landingPage || properties.merchandisingStore?.landingPage,
						pagination = properties.controller?.store.pagination || properties.paginationStore,
						search = properties.controller?.store.search || properties.queryStore,
						defaultProps = {
							titleText: `Showing ${
								pagination?.multiplePages
									? `<span class="ss__search-header__results-count-range"> ${pagination?.begin} - ${pagination?.end} of </span>`
									: ''
							} \n\t\t<span class="ss__search-header__results-count-total">${pagination?.totalResults}</span> \n\t\tresult${
								1 == pagination?.totalResults ? '' : 's'
							} \n\t\t${search?.query ? `for <span class="ss__search-header__results-query">"${search.query.string}"</span>` : ''}\n\t`,
							correctedQueryText: `No results found for <em>"${search?.originalQuery?.string}"</em>, showing results for <em>"${search?.query?.string}"</em> instead.`,
							didYouMeanText: `Did you mean <a href=${search?.didYouMean?.url.href}>${search?.didYouMean?.string}</a>?`,
							noResultsText:
								'' +
								(search?.query
									? `<span>\n\t\t\tNo results for <span class="ss__search-header__results-query">"${search.query.string}"</span> found.\n\t\t</span>`
									: '<span>No results found.</span>'),
						},
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('searchHeader', globalTheme, defaultProps, properties),
						{ disableStyles, style, styleScript, className } = props,
						{ titleText, subtitleText, correctedQueryText, noResultsText, didYouMeanText } = props,
						styling = { 'ss-name': props.name },
						stylingProps = props;
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS_searchheader(stylingProps), style]);
					const defaultLang = {
							titleText: { value: titleText, attributes: { 'aria-label': `Now showing ${pagination?.totalResults} items in the product grid` } },
							subtitleText: { value: subtitleText },
							correctedQueryText: {
								value: correctedQueryText,
								attributes: {
									'aria-label': `No results found for ${search?.originalQuery?.string}, showing results for ${search?.query?.string} instead`,
								},
							},
							noResultsText: { value: noResultsText, attributes: { 'aria-label': `No results found for ${search?.query?.string}` } },
							didYouMeanText: { value: didYouMeanText },
						},
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_7__.u)(lang, { pagination, search });
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_providers__WEBPACK_IMPORTED_MODULE_9__._, {
						children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('header', {
							...styling,
							className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__search-header', className),
							children: landingPage
								? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('h3', {
										className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
											'ss__search-header__title',
											'ss__search-header__title--landing-page'
										),
										children: landingPage.title,
								  })
								: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FD)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {
										children: [
											pagination?.totalResults
												? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FD)(
														_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FK,
														{
															children: [
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('h3', {
																	className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
																		'ss__search-header__title',
																		'ss__search-header__title--results'
																	),
																	'aria-atomic': 'true',
																	'aria-live': 'polite',
																	...mergedLang.titleText?.all,
																}),
																search?.originalQuery &&
																	(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('h5', {
																		className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
																			'ss__search-header__title',
																			'ss__search-header__title--corrected'
																		),
																		'aria-atomic': 'true',
																		'aria-live': 'polite',
																		...mergedLang.correctedQueryText?.all,
																	}),
															],
														}
												  )
												: 0 === pagination?.totalResults &&
												  (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FD)('div', {
														className: 'ss__search-header__no-results-wrapper',
														children: [
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('h3', {
																className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
																	'ss__search-header__title',
																	'ss__search-header__title--no-results'
																),
																'aria-atomic': 'true',
																'aria-live': 'polite',
																...mergedLang.noResultsText?.all,
															}),
															search?.didYouMean &&
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('h4', {
																	className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
																		'ss__search-header__title',
																		'ss__search-header__title--dym'
																	),
																	'aria-atomic': 'true',
																	'aria-live': 'polite',
																	...mergedLang.didYouMeanText?.all,
																}),
														],
												  }),
											(subtitleText || lang.subtitleText.value) &&
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('h4', {
													className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
														'ss__search-header__title',
														'ss__search-header__title--subtitle'
													),
													'aria-atomic': 'true',
													'aria-live': 'polite',
													...mergedLang.subtitleText?.all,
												}),
										],
								  }),
						}),
					});
				});
		},
		'./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { b: () => FacetsHorizontal });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_4__),
				_Facet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/components/Organisms/Facet/Facet.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_MobileSidebar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./components/src/components/Organisms/MobileSidebar/MobileSidebar.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/hooks/useClickOutside.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				_Atoms_Dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx');
			const CSS_facets = ({ theme }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_5__.AH)({
						'& .ss__facets-horizontal__header': {
							display: 'flex',
							flexWrap: 'wrap',
							'& .ss__mobile-sidebar': { margin: '0 10px' },
							'& .ss__facets-horizontal__header__dropdown': {
								flex: '0 0 0%',
								margin: '0 0 10px 0',
								boxSizing: 'border-box',
								minWidth: '100px',
								'& .ss__dropdown__button__heading': { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 10px' },
								'&.ss__dropdown--open': {
									'& .ss__dropdown__button__heading': { '& .ss__icon': { fill: theme?.variables?.colors?.active?.accent } },
									'& .ss__dropdown__content': {
										padding: '10px',
										minWidth: '160px',
										width: 'max-content',
										maxHeight: '500px',
										overflowY: 'auto',
										zIndex: 1,
									},
								},
							},
						},
						'&.ss__facets-horizontal--overlay': {
							'& .ss__facets-horizontal__header__dropdown': {
								'&.ss__dropdown--open': {
									'& .ss__dropdown__content': { border: `1px solid ${theme?.variables?.colors?.active?.background || '#ccc'}` },
								},
							},
						},
						'& .ss__facet__show-more-less': { display: 'block', margin: '8px 8px 0 8px', cursor: 'pointer', '& .ss__icon': { marginRight: '8px' } },
					}),
				FacetsHorizontal = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_6__.u)(),
						defaultProps = { limit: 6, iconCollapse: 'angle-up', iconExpand: 'angle-down', facets: properties.controller?.store?.facets };
					let props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('facetsHorizontal', globalTheme, defaultProps, properties);
					const {
							facets,
							limit,
							overlay,
							alwaysShowFiltersButton,
							onFacetOptionClick,
							iconExpand,
							iconCollapse,
							disableStyles,
							className,
							style,
							styleScript,
							controller,
							treePath,
						} = props,
						facetClickEvent = (e) => {
							onFacetOptionClick && onFacetOptionClick(e);
						},
						themeDefaults = {
							components: {
								facetGridOptions: { onClick: facetClickEvent },
								facetHierarchyOptions: { onClick: facetClickEvent },
								facetListOptions: { onClick: facetClickEvent },
								facetPaletteOptions: { onClick: facetClickEvent },
							},
						},
						theme = deepmerge__WEBPACK_IMPORTED_MODULE_4___default()(themeDefaults, props?.theme || {}, {
							arrayMerge: (destinationArray, sourceArray) => sourceArray,
						});
					props = { ...props, theme };
					let facetsToShow = facets,
						isOverflowing = !1;
					limit && facets && limit > 0 && ((isOverflowing = facets.length > +limit), (facetsToShow = facets.slice(0, +limit)));
					const subProps = {
							dropdown: {
								className: 'ss__facets-horizontal__header__dropdown',
								disableClickOutside: !0,
								disableOverlay: !0,
								disableA11y: !0,
								...globalTheme?.components?.dropdown,
								...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
								theme: props?.theme,
								treePath,
							},
							icon: {
								className: 'ss__dropdown__button__heading__icon',
								...globalTheme?.components?.icon,
								...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
								theme: props?.theme,
								treePath,
							},
							facet: {
								className: 'ss__facets-horizontal__content__facet',
								justContent: !0,
								horizontal: !0,
								...globalTheme?.components?.facet,
								...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles, overlay }),
								theme: props?.theme,
								treePath,
							},
							MobileSidebar: {
								className: 'ss__facets-horizontal__header__mobile-sidebar',
								hidePerPage: !0,
								hideSortBy: !0,
								...globalTheme?.components?.mobileSidebar,
								...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
								theme: props?.theme,
								treePath,
							},
						},
						styling = { 'ss-name': props.name },
						stylingProps = props;
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS_facets(stylingProps), style]);
					const [selectedFacet, setSelectedFacet] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(void 0),
						innerRef = (0, _hooks__WEBPACK_IMPORTED_MODULE_9__.L)(() => {
							selectedFacet && setSelectedFacet(void 0);
						});
					return facetsToShow && facetsToShow?.length > 0
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_providers__WEBPACK_IMPORTED_MODULE_11__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('div', {
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
										'ss__facets-horizontal',
										{ 'ss__facets-horizontal--overlay': overlay },
										className
									),
									ref: innerRef,
									...styling,
									children: [
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('div', {
											className: 'ss__facets-horizontal__header',
											children: [
												facetsToShow.map((facet) => {
													const defaultLang = {
															dropdownButton: {
																attributes: {
																	'aria-label': `currently ${selectedFacet?.field === facet.field ? 'collapsed' : 'open'} ${
																		facet.field
																	} facet dropdown ${facet.values?.length ? facet.values?.length + ' options' : ''}`,
																},
															},
														},
														lang = deepmerge__WEBPACK_IMPORTED_MODULE_4___default()(defaultLang, props.lang || {}),
														mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_12__.u)(lang, { selectedFacet, facet });
													return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Atoms_Dropdown__WEBPACK_IMPORTED_MODULE_13__.m, {
														...subProps.dropdown,
														className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
															subProps.dropdown.className,
															`ss__facets-horizontal__header__dropdown--${facet.display}`,
															`ss__facets-horizontal__header__dropdown--${facet.field}`
														),
														open: selectedFacet?.field === facet.field,
														onClick: () => {
															setSelectedFacet(selectedFacet !== facet ? facet : void 0);
														},
														button: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('div', {
															className: 'ss__dropdown__button__heading',
															role: 'heading',
															'aria-level': 3,
															...mergedLang.dropdownButton.attributes,
															children: [
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('span', {
																	...mergedLang.dropdownButton.value,
																	children: facet?.label,
																}),
																(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_14__.I, {
																	...subProps.icon,
																	...(selectedFacet?.field === facet.field
																		? { ...('string' == typeof iconExpand ? { icon: iconExpand } : iconExpand) }
																		: { ...('string' == typeof iconCollapse ? { icon: iconCollapse } : iconCollapse) }),
																}),
															],
														}),
														disableOverlay: !overlay,
														children: overlay
															? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Facet__WEBPACK_IMPORTED_MODULE_15__.s, {
																	...subProps.facet,
																	facet,
															  })
															: void 0,
													});
												}),
												(isOverflowing || alwaysShowFiltersButton) &&
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_MobileSidebar__WEBPACK_IMPORTED_MODULE_16__.R, {
														controller,
														...subProps.MobileSidebar,
													}),
											],
										}),
										!overlay &&
											selectedFacet &&
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)('div', {
												className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
													'ss__facets-horizontal__content',
													`ss__facets-horizontal__content--${selectedFacet.display}`,
													`ss__facets-horizontal__content--${selectedFacet.field}`
												),
												children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Facet__WEBPACK_IMPORTED_MODULE_15__.s, {
													...subProps.facet,
													facet: facets?.find((facet) => facet.field === selectedFacet.field),
												}),
											}),
									],
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Organisms/Results/Results.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { n: () => Results });
			var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_2__),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
					'../snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'
				),
				_Atoms_Merchandising_InlineBanner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
					'./components/src/components/Atoms/Merchandising/InlineBanner/InlineBanner.tsx'
				),
				_Molecules_Result__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__('./components/src/components/Molecules/Result/Result.tsx'),
				_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/types.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/providers/snap.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks_useDisplaySettings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/hooks/useDisplaySettings.tsx'),
				_Trackers_SearchResultTracker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
					'./components/src/components/Trackers/SearchResultTracker/SearchResultTracker.tsx'
				),
				_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/hooks/useComponent.tsx');
			const CSS_results = ({ columns, gapSize }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({
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
				Results = (0, mobx_react__WEBPACK_IMPORTED_MODULE_4__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
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
							layout: _types__WEBPACK_IMPORTED_MODULE_6__.VT.grid,
							breakpoints: defaultBreakpointsProps,
						};
					let props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('results', globalTheme, defaultProps, properties);
					if (!properties.theme?.name) {
						const displaySettings = (0, _hooks_useDisplaySettings__WEBPACK_IMPORTED_MODULE_8__.X)(props?.breakpoints || {}),
							theme = deepmerge__WEBPACK_IMPORTED_MODULE_2___default()(props?.theme || {}, displaySettings?.theme || {}, {
								arrayMerge: (destinationArray, sourceArray) => sourceArray,
							});
						props = { ...props, ...displaySettings, theme };
					}
					const { disableStyles, className, layout, style, theme, styleScript, controller, treePath } = props;
					let { resultComponent } = props;
					const subProps_result = {
							className: 'ss__results__result',
							...globalTheme?.components?.result,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_inlineBanner = {
							className: 'ss__results__inline-banner',
							...globalTheme?.components?.inlineBanner,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						};
					let results = props.results;
					props?.columns && props?.rows && props.columns > 0 && props.rows > 0 && (results = props.results?.slice(0, props.columns * props.rows));
					const styling = { 'ss-name': props.name },
						stylingProps = {
							...props,
							columns: layout == _types__WEBPACK_IMPORTED_MODULE_6__.VT.list ? 1 : props.columns,
							gapSize: props.gapSize,
							theme,
						};
					if (
						(styleScript && !disableStyles
							? (styling.css = [styleScript(stylingProps), style])
							: disableStyles
							? style && (styling.css = [style])
							: (styling.css = [CSS_results(stylingProps), style]),
						'string' == typeof resultComponent)
					) {
						const snap = (0, _providers__WEBPACK_IMPORTED_MODULE_10__.uk)();
						if (
							snap?.templates?.library.import.component.result &&
							((resultComponent = (0, _hooks__WEBPACK_IMPORTED_MODULE_11__.x)(snap?.templates?.library.import.component.result, resultComponent)),
							!resultComponent)
						)
							return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
					}
					return results?.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(_providers__WEBPACK_IMPORTED_MODULE_13__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__results', `ss__results-${props.layout}`, className),
									children: results.map((result) =>
										(() => {
											if (result.type === _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_14__.c.BANNER)
												return (0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.n)(_Atoms_Merchandising_InlineBanner__WEBPACK_IMPORTED_MODULE_15__._, {
													...subProps_inlineBanner,
													key: result.id,
													banner: result,
													layout: props.layout,
												});
											if (resultComponent && controller) {
												const ResultComponent = resultComponent;
												return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(ResultComponent, { controller, result, theme });
											}
											return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(
												_Trackers_SearchResultTracker__WEBPACK_IMPORTED_MODULE_16__.m,
												{
													result,
													controller,
													children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(
														_Molecules_Result__WEBPACK_IMPORTED_MODULE_17__.Q,
														{ ...subProps_result, result, layout: props.layout, controller },
														result.id
													),
												}
											);
										})()
									),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Trackers/SearchResultTracker/SearchResultTracker.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { m: () => SearchResultTracker });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
			const CSS_ResultTracker = ({}) => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({}),
				SearchResultTracker = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const { children, result, controller, className, disableStyles, style, styleScript } = properties,
						resultRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.li)(null),
						styling = { 'ss-name': properties.name },
						stylingProps = properties;
					return (
						styleScript && !disableStyles
							? (styling.css = [styleScript(stylingProps), style])
							: disableStyles
							? style && (styling.css = [style])
							: (styling.css = [CSS_ResultTracker(stylingProps), style]),
						controller || console.error('No SearchController was passed to SearchResultTracker.'),
						controller
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('div', {
									className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('ss__result-tracker', className),
									onClick: (e) => controller.track.product.click(e, result),
									ref: resultRef,
									...styling,
									children,
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, { children })
					);
				});
		},
		'./components/src/hooks/useDisplaySettings.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { X: () => useDisplaySettings });
			var hooks_module = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			const debounce = (func, timeout = 200) => {
				let timer;
				return (...args) => {
					clearTimeout(timer),
						(timer = window.setTimeout(() => {
							func.apply(void 0, args);
						}, timeout));
				};
			};
			var dist = __webpack_require__('../../node_modules/dequal/dist/index.mjs');
			function useDeepCompareMemoize(value) {
				const ref = (0, hooks_module.li)(value),
					signalRef = (0, hooks_module.li)(0);
				return (
					(0, dist.j)(value, ref.current) || ((ref.current = value), (signalRef.current += 1)),
					(0, hooks_module.Kr)(() => ref.current, [signalRef.current])
				);
			}
			function useDisplaySettings(breakpointsObj) {
				if (!breakpointsObj || !Object.keys(breakpointsObj).length) return;
				const [displaySettings, setDisplaySettings] = (0, hooks_module.J0)(getDisplaySettings(breakpointsObj));
				let debouncedHandleResize;
				const resetResizeListener = () => {
					(debouncedHandleResize = debounce(() => {
						!(function handleResize() {
							setDisplaySettings(getDisplaySettings(breakpointsObj));
						})();
					}, 50)),
						window.addEventListener('resize', debouncedHandleResize);
				};
				return (
					(0, hooks_module.vJ)(() => (resetResizeListener(), () => window.removeEventListener('resize', debouncedHandleResize)), []),
					(function useDeepCompareEffect(callback, dependencies) {
						return (0, hooks_module.vJ)(callback, [useDeepCompareMemoize(dependencies)]);
					})(() => {
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
	},
]);
