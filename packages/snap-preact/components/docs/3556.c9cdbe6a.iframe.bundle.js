/*! For license information please see 3556.c9cdbe6a.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[3556],
	{
		'./components/src/components/Atoms/Dropdown/Dropdown.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { m: () => Dropdown });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/hooks/useClickOutside.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/utilities/cloneWithProps.tsx'),
				_hooks_useA11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/hooks/useA11y.tsx');
			const CSS_dropdown = ({ disableOverlay, classId }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({
						position: 'relative',
						'&.ss__dropdown--open': {
							[`& .ss__dropdown__content--${classId}`]: { position: disableOverlay ? 'relative' : void 0, visibility: 'visible', opacity: 1 },
						},
						'.ss__dropdown__button': { cursor: '' + (disableOverlay ? 'default' : 'pointer') },
						'.ss__dropdown__content': {
							backgroundColor: '#fff',
							position: 'absolute',
							minWidth: '100%',
							visibility: 'hidden',
							opacity: 0,
							top: 'auto',
							left: 0,
						},
					}),
				Dropdown = (0, mobx_react__WEBPACK_IMPORTED_MODULE_3__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.v6)('dropdown', globalTheme, { startOpen: !1, disableA11y: !1 }, properties),
						{
							button,
							content,
							children,
							disabled,
							open,
							onClick,
							onToggle,
							startOpen,
							disableClickOutside,
							disableA11y,
							disableStyles,
							className,
							style,
							styleScript,
							treePath,
						} = props;
					let showContent, setShowContent;
					const stateful = void 0 === open;
					let innerRef;
					stateful ? ([showContent, setShowContent] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(startOpen)) : (showContent = open),
						disableClickOutside ||
							(innerRef = (0, _hooks__WEBPACK_IMPORTED_MODULE_6__.L)((e) => {
								showContent && (disabled || (stateful && setShowContent && setShowContent(!1), onToggle && onToggle(e, !1)));
							}));
					const toggleShowContent = (e) => {
							stateful && setShowContent && setShowContent((prev) => (onToggle && onToggle(e, !prev), !prev));
						},
						styling = { 'ss-name': props.name },
						[classId] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)((Math.random() + 1).toString(36).substring(7)),
						stylingProps = { ...props, classId };
					return (
						styleScript && !disableStyles
							? (styling.css = [styleScript(stylingProps), style])
							: disableStyles
							? style && (styling.css = [style])
							: (styling.css = [CSS_dropdown(stylingProps), style]),
						(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_providers__WEBPACK_IMPORTED_MODULE_8__._, {
							children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.FD)('div', {
								...styling,
								className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__dropdown', { 'ss__dropdown--open': showContent }, className),
								ref: innerRef,
								children: [
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)('div', {
										className: 'ss__dropdown__button',
										ref: (e) => (disableA11y ? null : (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_9__.i)(e)),
										'aria-expanded': showContent,
										role: 'button',
										onClick: (e) => {
											disabled || (toggleShowContent(e), onClick && onClick(e));
										},
										children: (0, _utilities__WEBPACK_IMPORTED_MODULE_10__.Y)(button, { open: showContent, toggleOpen: toggleShowContent, treePath }),
									}),
									(content || children) &&
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.FD)('div', {
											className: `ss__dropdown__content ss__dropdown__content--${classId}`,
											children: [
												(0, _utilities__WEBPACK_IMPORTED_MODULE_10__.Y)(content, { open: showContent, toggleOpen: toggleShowContent, treePath }),
												(0, _utilities__WEBPACK_IMPORTED_MODULE_10__.Y)(children, { open: showContent, toggleOpen: toggleShowContent, treePath }),
											],
										}),
								],
							}),
						})
					);
				});
		},
		'./components/src/components/Atoms/Merchandising/Banner/Banner.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
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
			'use strict';
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
		'./components/src/components/Organisms/Facets/Facets.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { J: () => Facets });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_2__),
				mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_Facet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/components/Organisms/Facet/Facet.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/defined.ts');
			const CSS_facets = ({}) => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({}),
				Facets = (0, mobx_react__WEBPACK_IMPORTED_MODULE_4__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						defaultProps = { facets: properties.controller?.store?.facets };
					let props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('facets', globalTheme, defaultProps, properties);
					const { limit, onFacetOptionClick, disableStyles, className, style, styleScript, controller, treePath } = props,
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
							className: 'ss__facets__facet',
							...globalTheme?.components?.facet,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						styling = { 'ss-name': props.name },
						stylingProps = props;
					return (
						styleScript && !disableStyles
							? (styling.css = [styleScript(stylingProps), style])
							: disableStyles
							? style && (styling.css = [style])
							: (styling.css = [CSS_facets(stylingProps), style]),
						facets && facets?.length > 0
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_providers__WEBPACK_IMPORTED_MODULE_9__._, {
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', {
										className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__facets', className),
										...styling,
										children: facets.map((facet) =>
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(
												_Facet__WEBPACK_IMPORTED_MODULE_10__.s,
												{ ...subProps_facet, facet },
												facet.field
											)
										),
									}),
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
					);
				});
		},
		'./components/src/components/Organisms/Results/Results.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
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
												return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(
													_Trackers_SearchResultTracker__WEBPACK_IMPORTED_MODULE_16__.m,
													{
														result,
														controller,
														children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Y)(
															ResultComponent,
															{ controller, result, theme },
															result.id
														),
													}
												);
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
			'use strict';
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
		'./components/src/hooks/useA11y.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { a: () => A11Y_ATTRIBUTE, i: () => useA11y });
			const KEYCODE_TAB = 9,
				KEYCODE_ESC = 27,
				A11Y_ATTRIBUTE = 'ss-a11y';
			function useA11y(elem, tabIndex, trapFocus, escCallback) {
				if (!document.querySelector('#ssA11yFocusStyle')) {
					const style = document.createElement('style');
					(style.type = 'text/css'),
						(style.id = 'ssA11yFocusStyle'),
						(style.innerHTML = `[${A11Y_ATTRIBUTE}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
						document.getElementsByTagName('head')[0].appendChild(style);
				}
				elem &&
					!elem.attributes?.[A11Y_ATTRIBUTE] &&
					(elem.setAttribute(A11Y_ATTRIBUTE, !0),
					elem.setAttribute('tabIndex', `${tabIndex || 0}`),
					elem.addEventListener('keydown', (event) => {
						('Space' !== event.code && 'Enter' !== event.code) || elem.click();
					}),
					trapFocus &&
						elem.addEventListener('keydown', function (e) {
							const focusableEls = elem.querySelectorAll(
									'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]'
								),
								firstFocusableEl = focusableEls[0],
								lastFocusableEl = focusableEls[focusableEls.length - 1];
							if (e.keyCode == KEYCODE_ESC) return elem.focus(), escCallback && escCallback(), void e.preventDefault();
							('Tab' !== e.key && e.keyCode !== KEYCODE_TAB) ||
								(e.shiftKey
									? document.activeElement === firstFocusableEl && (lastFocusableEl.focus(), e.preventDefault())
									: document.activeElement === lastFocusableEl && (firstFocusableEl.focus(), e.preventDefault()));
						}));
			}
		},
		'./components/src/hooks/useClickOutside.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { L: () => useClickOutside });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			function useClickOutside(callback) {
				const callbackRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(),
					innerRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)();
				return (
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
						callbackRef.current = callback;
					}),
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
						return document.addEventListener('click', handleClick), () => document.removeEventListener('click', handleClick);
						function handleClick(e) {
							innerRef.current && callbackRef.current && !innerRef.current.contains(e.target) && callbackRef.current(e);
						}
					}, []),
					innerRef
				);
			}
		},
		'./components/src/hooks/useDeepCompareEffect.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
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
			'use strict';
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
		'./components/src/hooks/useLang.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { u: () => useLang });
			const useLang = (lang, data) => {
				const returnObj = {};
				return (
					Object.keys(lang).forEach((key) => {
						const currentLangSettings = lang && lang[key],
							currentObj = {};
						currentLangSettings &&
							(currentLangSettings?.value &&
								('function' == typeof currentLangSettings.value
									? (currentObj.value = { 'ss-lang': key, dangerouslySetInnerHTML: { __html: currentLangSettings.value(data) } })
									: (currentObj.value = { 'ss-lang': key, dangerouslySetInnerHTML: { __html: currentLangSettings.value } })),
							currentLangSettings?.attributes &&
								Object.keys(currentLangSettings?.attributes).length &&
								((currentObj.attributes = { 'ss-lang': key }),
								currentLangSettings?.attributes?.['aria-label'] &&
									('function' == typeof currentLangSettings.attributes?.['aria-label']
										? (currentObj.attributes['aria-label'] = currentLangSettings.attributes['aria-label'](data))
										: (currentObj.attributes['aria-label'] = currentLangSettings.attributes['aria-label'])),
								currentLangSettings?.attributes?.['aria-valuetext'] &&
									('function' == typeof currentLangSettings.attributes?.['aria-valuetext']
										? (currentObj.attributes['aria-valuetext'] = currentLangSettings.attributes['aria-valuetext'](data))
										: (currentObj.attributes['aria-valuetext'] = currentLangSettings.attributes['aria-valuetext'])),
								currentLangSettings?.attributes?.title &&
									('function' == typeof currentLangSettings.attributes?.title
										? (currentObj.attributes.title = currentLangSettings.attributes.title(data))
										: (currentObj.attributes.title = currentLangSettings.attributes.title)),
								currentLangSettings?.attributes?.alt &&
									('function' == typeof currentLangSettings.attributes?.alt
										? (currentObj.attributes.alt = currentLangSettings.attributes.alt(data))
										: (currentObj.attributes.alt = currentLangSettings.attributes.alt))),
							(currentObj.all = { ...currentObj.value, ...currentObj.attributes, 'ss-lang': key })),
							(returnObj[key] = currentObj);
					}),
					returnObj
				);
			};
		},
		'./src/Templates/Stores/library/components/Autocomplete.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Autocomplete: () => _components_src_components_Templates_Autocomplete__WEBPACK_IMPORTED_MODULE_0__.j,
				});
			var _components_src_components_Templates_Autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
				'./components/src/components/Templates/Autocomplete/Autocomplete.tsx'
			);
		},
		'../../node_modules/classnames/index.js': (module, exports) => {
			var __WEBPACK_AMD_DEFINE_RESULT__;
			!(function () {
				'use strict';
				var hasOwn = {}.hasOwnProperty;
				function classNames() {
					for (var classes = '', i = 0; i < arguments.length; i++) {
						var arg = arguments[i];
						arg && (classes = appendClass(classes, parseValue(arg)));
					}
					return classes;
				}
				function parseValue(arg) {
					if ('string' == typeof arg || 'number' == typeof arg) return arg;
					if ('object' != typeof arg) return '';
					if (Array.isArray(arg)) return classNames.apply(null, arg);
					if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) return arg.toString();
					var classes = '';
					for (var key in arg) hasOwn.call(arg, key) && arg[key] && (classes = appendClass(classes, key));
					return classes;
				}
				function appendClass(value, newClass) {
					return newClass ? (value ? value + ' ' + newClass : value + newClass) : value;
				}
				module.exports
					? ((classNames.default = classNames), (module.exports = classNames))
					: void 0 ===
							(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
								return classNames;
							}.apply(exports, [])) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
			})();
		},
		'../../node_modules/dequal/dist/index.mjs': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
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
		'../../node_modules/react-ranger/dist/react-ranger.mjs': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { d: () => useRanger });
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/compat/dist/compat.module.js');
			function _extends() {
				return (
					(_extends =
						Object.assign ||
						function (target) {
							for (var i = 1; i < arguments.length; i++) {
								var source = arguments[i];
								for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
							}
							return target;
						}),
					_extends.apply(this, arguments)
				);
			}
			function _objectWithoutPropertiesLoose(source, excluded) {
				if (null == source) return {};
				var key,
					i,
					target = {},
					sourceKeys = Object.keys(source);
				for (i = 0; i < sourceKeys.length; i++) (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
				return target;
			}
			var getBoundingClientRect = function getBoundingClientRect(element) {
					var rect = element.getBoundingClientRect();
					return { left: Math.ceil(rect.left), width: Math.ceil(rect.width) };
				},
				sortNumList = function sortNumList(arr) {
					return [].concat(arr).sort(function (a, b) {
						return Number(a) - Number(b);
					});
				},
				useGetLatest = function useGetLatest(val) {
					var ref = react__WEBPACK_IMPORTED_MODULE_0__.default.useRef(val);
					return (
						(ref.current = val),
						react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(function () {
							return ref.current;
						}, [])
					);
				},
				linearInterpolator = {
					getPercentageForValue: function getPercentageForValue(val, min, max) {
						return Math.max(0, Math.min(100, ((val - min) / (max - min)) * 100));
					},
					getValueForClientX: function getValueForClientX(clientX, trackDims, min, max) {
						return (max - min) * ((clientX - trackDims.left) / trackDims.width) + min;
					},
				};
			function useRanger(_ref) {
				var _ref$interpolator = _ref.interpolator,
					interpolator = void 0 === _ref$interpolator ? linearInterpolator : _ref$interpolator,
					_ref$tickSize = _ref.tickSize,
					tickSize = void 0 === _ref$tickSize ? 10 : _ref$tickSize,
					values = _ref.values,
					min = _ref.min,
					max = _ref.max,
					controlledTicks = _ref.ticks,
					steps = _ref.steps,
					onChange = _ref.onChange,
					onDrag = _ref.onDrag,
					stepSize = _ref.stepSize,
					_React$useState = react__WEBPACK_IMPORTED_MODULE_0__.default.useState(null),
					activeHandleIndex = _React$useState[0],
					setActiveHandleIndex = _React$useState[1],
					_React$useState2 = react__WEBPACK_IMPORTED_MODULE_0__.default.useState(),
					tempValues = _React$useState2[0],
					setTempValues = _React$useState2[1],
					getLatest = useGetLatest({ activeHandleIndex, onChange, onDrag, values, tempValues }),
					trackElRef = react__WEBPACK_IMPORTED_MODULE_0__.default.useRef(),
					getValueForClientX = react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(
						function (clientX) {
							var trackDims = getBoundingClientRect(trackElRef.current);
							return interpolator.getValueForClientX(clientX, trackDims, min, max);
						},
						[interpolator, max, min]
					),
					getNextStep = react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(
						function (val, direction) {
							if (steps) {
								var nextIndex = steps.indexOf(val) + direction;
								return nextIndex >= 0 && nextIndex < steps.length ? steps[nextIndex] : val;
							}
							var nextVal = val + stepSize * direction;
							return nextVal >= min && nextVal <= max ? nextVal : val;
						},
						[max, min, stepSize, steps]
					),
					roundToStep = react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(
						function (val) {
							var left = min,
								right = max;
							if (steps)
								steps.forEach(function (step) {
									step <= val && step > left && (left = step), step >= val && step < right && (right = step);
								});
							else {
								for (0; left < val && left + stepSize < val; ) left += stepSize;
								right = Math.min(left + stepSize, max);
							}
							return val - left < right - val ? left : right;
						},
						[max, min, stepSize, steps]
					),
					handleDrag = react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(
						function (e) {
							var _getLatest = getLatest(),
								activeHandleIndex = _getLatest.activeHandleIndex,
								onDrag = _getLatest.onDrag,
								clientX = 'touchmove' === e.type ? e.changedTouches[0].clientX : e.clientX,
								newValue = getValueForClientX(clientX),
								newRoundedValue = roundToStep(newValue),
								newValues = [].concat(values.slice(0, activeHandleIndex), [newRoundedValue], values.slice(activeHandleIndex + 1));
							onDrag ? onDrag(newValues) : setTempValues(newValues);
						},
						[getLatest, getValueForClientX, roundToStep, values]
					),
					handleKeyDown = react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(
						function (e, i) {
							var _getLatest2 = getLatest(),
								values = _getLatest2.values,
								_getLatest2$onChange = _getLatest2.onChange,
								onChange = void 0 === _getLatest2$onChange ? function () {} : _getLatest2$onChange;
							if (37 === e.keyCode || 39 === e.keyCode) {
								setActiveHandleIndex(i);
								var direction = 37 === e.keyCode ? -1 : 1,
									newValue = getNextStep(values[i], direction),
									newValues = [].concat(values.slice(0, i), [newValue], values.slice(i + 1));
								onChange(sortNumList(newValues));
							}
						},
						[getLatest, getNextStep]
					),
					handlePress = react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(
						function (e, i) {
							setActiveHandleIndex(i);
							var handleRelease = function handleRelease(e) {
								var _getLatest3 = getLatest(),
									tempValues = _getLatest3.tempValues,
									values = _getLatest3.values,
									_getLatest3$onChange = _getLatest3.onChange,
									onChange = void 0 === _getLatest3$onChange ? function () {} : _getLatest3$onChange,
									_getLatest3$onDrag = _getLatest3.onDrag,
									onDrag = void 0 === _getLatest3$onDrag ? function () {} : _getLatest3$onDrag;
								document.removeEventListener('mousemove', handleDrag),
									document.removeEventListener('touchmove', handleDrag),
									document.removeEventListener('mouseup', handleRelease),
									document.removeEventListener('touchend', handleRelease);
								var sortedValues = sortNumList(tempValues || values);
								onChange(sortedValues), onDrag(sortedValues), setActiveHandleIndex(null), setTempValues();
							};
							document.addEventListener('mousemove', handleDrag),
								document.addEventListener('touchmove', handleDrag),
								document.addEventListener('mouseup', handleRelease),
								document.addEventListener('touchend', handleRelease);
						},
						[getLatest, handleDrag]
					),
					getPercentageForValue = react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(
						function (val) {
							return interpolator.getPercentageForValue(val, min, max);
						},
						[interpolator, max, min]
					),
					ticks = react__WEBPACK_IMPORTED_MODULE_0__.default.useMemo(
						function () {
							var ticks = controlledTicks || steps;
							if (!ticks) {
								for (ticks = [min]; ticks[ticks.length - 1] < max - tickSize; ) ticks.push(ticks[ticks.length - 1] + tickSize);
								ticks.push(max);
							}
							return ticks.map(function (value, i) {
								return {
									value,
									getTickProps: function getTickProps(_temp) {
										var _ref2 = void 0 === _temp ? {} : _temp,
											_ref2$key = _ref2.key,
											key = void 0 === _ref2$key ? i : _ref2$key,
											_ref2$style = _ref2.style,
											style = void 0 === _ref2$style ? {} : _ref2$style,
											rest = _objectWithoutPropertiesLoose(_ref2, ['key', 'style']);
										return _extends(
											{
												key,
												style: _extends(
													{ position: 'absolute', width: 0, left: getPercentageForValue(value) + '%', transform: 'translateX(-50%)' },
													style
												),
											},
											rest
										);
									},
								};
							});
						},
						[controlledTicks, getPercentageForValue, max, min, steps, tickSize]
					),
					segments = react__WEBPACK_IMPORTED_MODULE_0__.default.useMemo(
						function () {
							var sortedValues = sortNumList(tempValues || values);
							return [].concat(sortedValues, [max]).map(function (value, i) {
								return {
									value,
									getSegmentProps: function getSegmentProps(_temp2) {
										var _ref3 = void 0 === _temp2 ? {} : _temp2,
											_ref3$key = _ref3.key,
											key = void 0 === _ref3$key ? i : _ref3$key,
											_ref3$style = _ref3.style,
											style = void 0 === _ref3$style ? {} : _ref3$style,
											rest = _objectWithoutPropertiesLoose(_ref3, ['key', 'style']),
											left = getPercentageForValue(sortedValues[i - 1] ? sortedValues[i - 1] : min);
										return _extends(
											{ key, style: _extends({ position: 'absolute', left: left + '%', width: getPercentageForValue(value) - left + '%' }, style) },
											rest
										);
									},
								};
							});
						},
						[getPercentageForValue, max, min, tempValues, values]
					),
					handles = react__WEBPACK_IMPORTED_MODULE_0__.default.useMemo(
						function () {
							return (tempValues || values).map(function (value, i) {
								return {
									value,
									active: i === activeHandleIndex,
									getHandleProps: function getHandleProps(_temp3) {
										var _ref4 = void 0 === _temp3 ? {} : _temp3,
											_ref4$key = _ref4.key,
											key = void 0 === _ref4$key ? i : _ref4$key,
											_onKeyDown = (_ref4.ref, _ref4.innerRef, _ref4.onKeyDown),
											_onMouseDown = _ref4.onMouseDown,
											_onTouchStart = _ref4.onTouchStart,
											_ref4$style = _ref4.style,
											style = void 0 === _ref4$style ? {} : _ref4$style,
											rest = _objectWithoutPropertiesLoose(_ref4, ['key', 'ref', 'innerRef', 'onKeyDown', 'onMouseDown', 'onTouchStart', 'style']);
										return _extends(
											{
												key,
												onKeyDown: function onKeyDown(e) {
													e.persist(), handleKeyDown(e, i), _onKeyDown && _onKeyDown(e);
												},
												onMouseDown: function onMouseDown(e) {
													e.persist(), handlePress(e, i), _onMouseDown && _onMouseDown(e);
												},
												onTouchStart: function onTouchStart(e) {
													e.persist(), handlePress(e, i), _onTouchStart && _onTouchStart(e);
												},
												role: 'slider',
												'aria-valuemin': min,
												'aria-valuemax': max,
												'aria-valuenow': value,
												style: _extends(
													{
														position: 'absolute',
														top: '50%',
														left: getPercentageForValue(value) + '%',
														zIndex: i === activeHandleIndex ? '1' : '0',
														transform: 'translate(-50%, -50%)',
													},
													style
												),
											},
											rest
										);
									},
								};
							});
						},
						[activeHandleIndex, getPercentageForValue, handleKeyDown, handlePress, min, max, tempValues, values]
					);
				return {
					activeHandleIndex,
					getTrackProps: function getTrackProps(_temp4) {
						var _ref5 = void 0 === _temp4 ? {} : _temp4,
							_ref5$style = _ref5.style,
							style = void 0 === _ref5$style ? {} : _ref5$style,
							_ref6 = _ref5.ref,
							rest = _objectWithoutPropertiesLoose(_ref5, ['style', 'ref']);
						return _extends(
							{
								ref: function ref(el) {
									(trackElRef.current = el), _ref6 && ('function' == typeof _ref6 ? _ref6(el) : (_ref6.current = el));
								},
								style: _extends({ position: 'relative', userSelect: 'none' }, style),
							},
							rest
						);
					},
					ticks,
					segments,
					handles,
				};
			}
		},
	},
]);
