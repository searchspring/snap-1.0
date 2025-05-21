'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[4253],
	{
		'./components/src/components/Atoms/Merchandising/InlineBanner/InlineBanner.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { _: () => InlineBanner });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
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
					{ banner, className, disableA11y, layout, onClick } = props,
					styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.Z)(props, defaultStyles);
				return banner && banner.value
					? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_providers__WEBPACK_IMPORTED_MODULE_9__._, {
							children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', {
								onClick: (e) => {
									onClick && onClick(e, banner);
								},
								role: 'article',
								ref: (e) => (disableA11y ? null : (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_10__.i)(e)),
								className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__inline-banner', `ss__inline-banner--${layout}`, className),
								...styling,
								dangerouslySetInnerHTML: { __html: banner.value },
							}),
					  })
					: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
			}
		},
		'./components/src/components/Molecules/Terms/Terms.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { i: () => Terms });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_toolbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
			const defaultStyles = ({ vertical, theme }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						'.ss__terms__title': {
							fontWeight: 'normal',
							margin: 0,
							textTransform: 'uppercase',
							padding: '10px',
							h5: { fontSize: '.8em', margin: 0 },
						},
						'.ss__terms__options': {
							display: 'flex',
							justifyContent: 'space-evenly',
							flexDirection: vertical ? 'column' : 'row',
							flexWrap: 'wrap',
							padding: '0px',
							'.ss__terms__option': {
								listStyle: 'none',
								padding: '10px',
								wordBreak: 'break-all',
								a: { display: 'block', em: { fontStyle: 'normal' } },
								'&.ss__terms__option--active': { a: { fontWeight: 'bold', color: theme?.variables?.colors?.primary } },
							},
						},
					}),
				emIfyTerm = (term, search) => {
					if (term && search) {
						const match = term.match(((string = search), string?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
						if (search && term && match && 'number' == typeof match.index) {
							const beforeMatch = term.slice(0, match.index),
								afterMatch = term.slice(match.index + search.length, term.length);
							return `${beforeMatch ? `<em>${beforeMatch}</em>` : ''}${search}${afterMatch ? `<em>${afterMatch}</em>` : ''}`;
						}
					}
					var string;
					return `<em>${term}</em>`;
				},
				Terms = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('terms', globalTheme, { vertical: !0, previewOnHover: !0 }, properties),
						{ title, onTermClick, limit, previewOnHover, emIfy, className, controller } = props,
						currentInput = controller?.store?.state?.input,
						terms = props.terms,
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.Z)(props, defaultStyles),
						termsToShow = limit ? terms?.slice(0, limit) : terms,
						escCallback = () => {
							controller?.setFocused && controller?.setFocused();
						},
						defaultLang = { title: { value: title } },
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
						mergedTitleLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_8__.u)({ title: lang.title }, { controller });
					return termsToShow?.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_providers__WEBPACK_IMPORTED_MODULE_10__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__terms', className),
									children: [
										title
											? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('div', {
													className: 'ss__terms__title',
													children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('h5', { ...mergedTitleLang.title.all }),
											  })
											: null,
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('ul', {
											className: 'ss__terms__options',
											'aria-label': title,
											ref: (e) => (0, _hooks__WEBPACK_IMPORTED_MODULE_11__.i)(e, 0, !0, escCallback),
											children: termsToShow?.map((term, idx) => {
												const defaultTermLang = {
														term: {
															value: `${emIfy ? emIfyTerm(term.value, currentInput || '') : term.value}`,
															attributes: { 'aria-label': `item ${idx + 1} of ${termsToShow.length}, ${term.value}` },
														},
													},
													termLang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultTermLang, props.lang || {}),
													mergedTermLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_8__.u)(
														{ term: termLang.term },
														{ index: idx, numberOfTerms: termsToShow.length, term }
													);
												return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('li', {
													className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__terms__option', {
														'ss__terms__option--active': term.active,
													}),
													children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('a', {
														onClick: (e) =>
															((e, term) => {
																onTermClick && onTermClick(e, term), controller?.setFocused && controller?.setFocused();
															})(e, term),
														href: term.url.href,
														...(previewOnHover ? (0, _toolbox__WEBPACK_IMPORTED_MODULE_12__.l)(term.preview) : {}),
														...mergedTermLang.term?.all,
													}),
												});
											}),
										}),
									],
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Organisms/Results/Results.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { n: () => Results });
			var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
					'../snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'
				),
				_Atoms_Merchandising_InlineBanner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
					'./components/src/components/Atoms/Merchandising/InlineBanner/InlineBanner.tsx'
				),
				_Molecules_Result__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__('./components/src/components/Molecules/Result/Result.tsx'),
				_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/types.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/providers/snap.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks_useDisplaySettings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/hooks/useDisplaySettings.tsx'),
				_Trackers_SearchResultTracker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
					'./components/src/components/Trackers/SearchResultTracker/SearchResultTracker.tsx'
				),
				_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/hooks/useComponent.tsx');
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
				Results = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						globalTreePath = (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)(),
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
							layout: _types__WEBPACK_IMPORTED_MODULE_7__.VT.grid,
							breakpoints: defaultBreakpointsProps,
							treePath: globalTreePath,
						};
					let props = (0, _utilities__WEBPACK_IMPORTED_MODULE_8__.v6)('results', globalTheme, defaultProps, properties);
					if (!properties.theme?.name) {
						const displaySettings = (0, _hooks_useDisplaySettings__WEBPACK_IMPORTED_MODULE_9__.X)(props?.breakpoints || {}),
							theme = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(props?.theme || {}, displaySettings?.theme || {}, {
								arrayMerge: (destinationArray, sourceArray) => sourceArray,
							});
						props = { ...props, ...displaySettings, theme };
					}
					const { disableStyles, className, layout, theme, controller, treePath } = props;
					let { resultComponent } = props;
					const subProps_result = {
							className: 'ss__results__result',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_10__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_inlineBanner = {
							className: 'ss__results__inline-banner',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_10__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						};
					let results = props.results;
					props?.columns && props?.rows && props.columns > 0 && props.rows > 0 && (results = props.results?.slice(0, props.columns * props.rows));
					const styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_11__.Z)(
						{ ...props, columns: layout == _types__WEBPACK_IMPORTED_MODULE_7__.VT.list ? 1 : props.columns },
						defaultStyles
					);
					if ('string' == typeof resultComponent) {
						const snap = (0, _providers__WEBPACK_IMPORTED_MODULE_12__.uk)();
						if (
							snap?.templates?.library.import.component.result &&
							((resultComponent = (0, _hooks__WEBPACK_IMPORTED_MODULE_13__.x)(snap?.templates?.library.import.component.result, resultComponent)),
							!resultComponent)
						)
							return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
					}
					return results?.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)(_providers__WEBPACK_IMPORTED_MODULE_15__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__results', `ss__results-${props.layout}`, className),
									children: results.map((result) =>
										(() => {
											if (result.type === _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_16__.c.BANNER)
												return (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.n)(_Atoms_Merchandising_InlineBanner__WEBPACK_IMPORTED_MODULE_17__._, {
													...subProps_inlineBanner,
													key: result.id,
													banner: result,
													layout: props.layout,
												});
											if (resultComponent && controller) {
												const ResultComponent = resultComponent;
												return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)(
													_Trackers_SearchResultTracker__WEBPACK_IMPORTED_MODULE_18__.m,
													{
														result,
														controller,
														children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)(
															ResultComponent,
															{ controller, result, theme, treePath },
															result.id
														),
													}
												);
											}
											return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)(
												_Trackers_SearchResultTracker__WEBPACK_IMPORTED_MODULE_18__.m,
												{
													result,
													controller,
													children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)(
														_Molecules_Result__WEBPACK_IMPORTED_MODULE_19__.Q,
														{ ...subProps_result, result, layout: props.layout, controller },
														result.id
													),
												}
											);
										})()
									),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Organisms/TermsList/TermsList.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { G: () => TermsList });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
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
				_providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_Molecules_Terms_Terms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/components/Molecules/Terms/Terms.tsx'),
				_hooks_useCleanUpEmptyDivs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/hooks/useCleanUpEmptyDivs.tsx');
			const CSS_TermsList = ({}) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({
						display: 'flex',
						flexDirection: 'row',
						background: '#f8f8f8',
						width: 'auto',
						flexWrap: 'wrap',
						'.ss__terms-list__row': { display: 'flex', flexDirection: 'row', flexBasis: '100%' },
						'.ss__terms-list__row:empty': { display: 'none' },
						'.ss__terms-list__separator': { flexGrow: 1, flexShrink: 1 },
					}),
				TermsList = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.v6)(
							'termsList',
							globalTheme,
							{
								layout: [['Suggestions'], ['Trending'], ['History']],
								historyTitle: 'History',
								trendingTitle: 'Trending',
								suggestionTitle: 'Suggestions',
							},
							properties
						),
						{
							layout,
							historyTitle,
							trendingTitle,
							suggestionTitle,
							retainHistory,
							retainTrending,
							treePath,
							disableStyles,
							style,
							className,
							controller,
							styleScript,
						} = props,
						subProps_terms = { ...(0, _utilities__WEBPACK_IMPORTED_MODULE_6__.s)({ disableStyles }), theme: props.theme, treePath },
						styling = { 'ss-name': props.name },
						stylingProps = props;
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS_TermsList(stylingProps), style]);
					const history = controller?.store.history || [],
						suggestions = controller?.store.terms || [],
						trending = controller?.store.trending || [],
						trendingActive = trending?.filter((term) => term.active).pop(),
						historyActive = history?.filter((term) => term.active).pop(),
						{ loaded, results, state } = controller?.store;
					let showTrending = !1;
					trending?.length && ((retainTrending && loaded) || (!results.length && !state.input)) && (showTrending = !0);
					let showHistory = !1;
					history?.length && ((retainHistory && loaded) || (!results.length && !state.input)) && (showHistory = !0),
						controller.store.state.input ||
							(!historyActive && !trendingActive) ||
							(history?.length && (showHistory = !0), trending?.length && (showTrending = !0)),
						(0, _hooks_useCleanUpEmptyDivs__WEBPACK_IMPORTED_MODULE_7__.P)('.ss__terms-list__row, .ss__terms-list');
					const findModule = (module) =>
						'string' != typeof module
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', {
									className: 'ss__terms-list__row',
									children: module?.map((subModule) => findModule(subModule)),
							  })
							: '_' == module
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', { className: 'ss__terms-list__separator' })
							: 'History' == module && showHistory
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_Molecules_Terms_Terms__WEBPACK_IMPORTED_MODULE_9__.i, {
									className: 'ss__terms-list__terms--history',
									title: historyTitle,
									terms: history,
									controller,
									name: 'history',
									...subProps_terms,
							  })
							: 'Trending' == module && showTrending
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_Molecules_Terms_Terms__WEBPACK_IMPORTED_MODULE_9__.i, {
									className: 'ss__terms-list__terms--trending',
									title: trendingTitle,
									terms: trending,
									controller,
									name: 'trending',
									...subProps_terms,
							  })
							: 'Suggestions' == module
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_Molecules_Terms_Terms__WEBPACK_IMPORTED_MODULE_9__.i, {
									className: 'ss__terms-list__terms--suggestions',
									title: suggestionTitle,
									terms: suggestions,
									controller,
									name: 'suggestions',
									...subProps_terms,
							  })
							: void 0;
					return layout?.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_providers__WEBPACK_IMPORTED_MODULE_10__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__terms-list', className),
									children: layout?.map((module) => findModule(module)),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Templates/AutocompleteTemplate/AutocompleteTemplate.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { D: () => AutocompleteTemplate });
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_module = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				hooks_module = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				es = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				emotion_react_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames_default = __webpack_require__.n(classnames),
				cjs = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				cjs_default = __webpack_require__.n(cjs),
				SearchMerchandisingStore = __webpack_require__('../snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
				Icon = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				Results = __webpack_require__('./components/src/components/Organisms/Results/Results.tsx'),
				Banner = __webpack_require__('./components/src/components/Atoms/Merchandising/Banner/Banner.tsx'),
				Facets = __webpack_require__('./components/src/components/Organisms/Facets/Facets.tsx'),
				mergeProps = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				defined = __webpack_require__('./components/src/utilities/defined.ts'),
				mergeStyles = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				createHoverProps = __webpack_require__('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
				emotion_element_5486c51c_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				cache = __webpack_require__('./components/src/providers/cache.tsx'),
				types = __webpack_require__('./components/src/types.ts'),
				useLang = __webpack_require__('./components/src/hooks/useLang.tsx'),
				useA11y = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				TermsList = __webpack_require__('./components/src/components/Organisms/TermsList/TermsList.tsx'),
				Terms = __webpack_require__('./components/src/components/Molecules/Terms/Terms.tsx'),
				compat_module = __webpack_require__('../../node_modules/preact/compat/dist/compat.module.js'),
				FacetsHorizontal = __webpack_require__('./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'),
				Button = __webpack_require__('./components/src/components/Atoms/Button/Button.tsx'),
				useCleanUpEmptyDivs = __webpack_require__('./components/src/hooks/useCleanUpEmptyDivs.tsx'),
				providers_snap = __webpack_require__('./components/src/providers/snap.tsx'),
				useCreateController = __webpack_require__('./components/src/hooks/useCreateController.tsx'),
				useComponent = __webpack_require__('./components/src/hooks/useComponent.tsx');
			const defaultStyles = ({ controller, input, viewportMaxHeight, width, theme, column1, column2, column3, column4 }) => {
					let inputViewportOffsetBottom = 0;
					if (input) {
						let elem;
						elem = 'string' == typeof input ? document.querySelector(input) : input;
						const rect = elem?.getBoundingClientRect();
						inputViewportOffsetBottom = rect?.bottom || 0;
					}
					const noResults = Boolean(controller.store.search?.query?.string && 0 === controller.store.results.length);
					return (0, emotion_react_browser_esm.AH)({
						'.ss__autocomplete__column.ss__autocomplete__column--c1': {
							flex: 'auto' == column1?.width ? '1 1 auto' : `1 0 ${column1?.width}`,
							maxWidth: 'auto' == column1?.width ? 'auto' : column1?.width,
							alignContent: column1?.alignContent,
						},
						'.ss__autocomplete__column.ss__autocomplete__column--c2': {
							flex: 'auto' == column2?.width ? '1 1 auto' : `1 0 ${column2?.width}`,
							maxWidth: 'auto' == column2?.width ? 'auto' : column2?.width,
							alignContent: column2?.alignContent,
						},
						'.ss__autocomplete__column.ss__autocomplete__column--c3': {
							flex: 'auto' == column3?.width ? '1 1 auto' : `1 0 ${column3?.width}`,
							maxWidth: 'auto' == column3?.width ? 'auto' : column3?.width,
							alignContent: column3?.alignContent,
						},
						'.ss__autocomplete__column.ss__autocomplete__column--c4': {
							flex: 'auto' == column4?.width ? '1 1 auto' : `1 0 ${column4?.width}`,
							maxWidth: 'auto' == column4?.width ? 'auto' : column4?.width,
							alignContent: column4?.alignContent,
						},
						'.ss__autocomplete__column, .ss__autocomplete__row': { minWidth: 0 },
						'&, & *, & *:before, & *:after': { boxSizing: 'border-box' },
						flexWrap: 'wrap',
						display: 'flex',
						flexDirection: 'row',
						position: 'absolute',
						zIndex: '10002',
						border: '1px solid #ebebeb',
						background: '#ffffff',
						maxWidth: width,
						maxHeight: viewportMaxHeight && inputViewportOffsetBottom ? `calc(100vh - ${inputViewportOffsetBottom + 10}px)` : void 0,
						'.ss__autocomplete__row': { display: 'flex', flexDirection: 'row', flexBasis: '100%' },
						'.ss__autocomplete__column': { display: 'flex', flexDirection: 'column', flexFlow: 'wrap' },
						'.ss__autocomplete__column:empty, .ss__autocomplete__row:empty': { display: 'none' },
						'.ss__autocomplete__separator': { flexGrow: 1, flexShrink: 1 },
						'.ss__autocomplete__close-button': { color: '#c5c5c5', fontSize: '.8em' },
						'.ss__autocomplete__close-button:focus': { top: '0px !important', left: '0px !important', zIndex: '1' },
						'.ss__autocomplete__terms-wrapper': { background: '#f8f8f8', width: '100%' },
						'.ss__autocomplete__facets': {
							display: 'flex',
							width: 'auto',
							flexDirection: 'column',
							columnGap: '20px',
							padding: '10px',
							overflowY: 'auto',
							'.ss__facets': { display: 'flex', flexDirection: 'column', columnGap: '20px' },
							'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered~.ss__facet-hierarchy-options__option:not(.ss__facet-hierarchy-options__option--filtered)':
								{ paddingLeft: 0 },
							'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered:hover': { cursor: 'pointer' },
							'.ss__facet-palette-options__icon': { display: 'none' },
						},
						'.ss__autocomplete__facets-wrapper': { width: '100%' },
						'.ss__autocomplete__content': {
							display: 'flex',
							flex: '1 1 0%',
							flexDirection: 'column',
							justifyContent: 'space-between',
							overflowY: 'auto',
							margin: noResults ? '0 auto' : void 0,
							'.ss__autocomplete__content-inner': { padding: '10px' },
							'.ss__autocomplete__content__results, .ss__autocomplete__content__no-results': { minHeight: '0%' },
						},
						'.ss__banner.ss__banner--header, .ss__banner.ss__banner--banner': { marginBottom: '10px' },
						'.ss__banner.ss__banner--footer': { margin: '10px 0' },
						'.ss__autocomplete__button--see-more': {
							padding: '10px',
							height: 'min-content',
							textAlign: noResults ? 'center' : 'right',
							a: { fontWeight: 'bold', color: theme?.variables?.colors?.primary, '.ss__icon': { marginLeft: '5px' } },
						},
					});
				},
				AutocompleteTemplate = (0, es.PA)((properties) => {
					const globalTheme = (0, emotion_element_5486c51c_browser_esm.u)();
					let props = (0, mergeProps.v6)(
						'autocompleteTemplate',
						globalTheme,
						{
							facetsTitle: '',
							contentTitle: '',
							layout: [['c1', 'c2', 'c3']],
							column1: { layout: ['termsList'], width: '150px' },
							column2: { layout: ['facets'], width: '150px' },
							column3: { layout: [['content'], ['_', 'button.see-more']], width: 'auto', alignContent: 'space-between' },
							width: '100%',
							templates: { recommendation: { enabled: !0 } },
						},
						properties
					);
					const facetClickEvent = () => {
							controller?.setFocused && controller?.setFocused();
						},
						themeFunctionalityProps = {
							components: {
								facet: { valueProps: (0, createHoverProps.l)() },
								facetGridOptions: { onClick: facetClickEvent },
								facetHierarchyOptions: { onClick: facetClickEvent },
								facetListOptions: { onClick: facetClickEvent },
								facetPaletteOptions: { onClick: facetClickEvent },
							},
						};
					if (globalTheme?.name)
						props.theme = cjs_default().all([themeFunctionalityProps, props?.theme || {}], {
							arrayMerge: (destinationArray, sourceArray) => sourceArray,
						});
					else {
						const themeDefaults = {
								components: {
									facet: { limit: 6, disableOverflow: !0, disableCollapse: !0 },
									facetGridOptions: { columns: 3 },
									facetHierarchyOptions: { hideCount: !0 },
									facetListOptions: { hideCheckbox: !0, hideCount: !0 },
									facetPaletteOptions: { hideLabel: !0, columns: 3 },
									result: { hideBadge: !0 },
								},
							},
							theme = cjs_default().all([themeDefaults, themeFunctionalityProps, props?.theme || {}], {
								arrayMerge: (destinationArray, sourceArray) => sourceArray,
							});
						props = { ...props, theme };
					}
					let input = props.input;
					input && 'string' == typeof input && (input = document.querySelector(input));
					const {
							facetsTitle,
							contentTitle,
							layout,
							column1,
							column2,
							column3,
							column4,
							excludeBanners,
							resultComponent,
							templates,
							disableStyles,
							className,
							controller,
							treePath,
						} = props,
						subProps_button = {
							className: 'ss__autocomplete__button--see-more',
							onClick: () => {
								controller?.setFocused && controller.setFocused(), (window.location.href = state.url.href);
							},
							name: 'see-more',
							...(0, defined.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_termsList = {
							className: 'ss__autocomplete__terms-list',
							controller,
							...(0, defined.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_terms = { className: 'ss__autocomplete__terms', controller, ...(0, defined.s)({ disableStyles }), theme: props.theme, treePath },
						subProps_facets = { name: 'autocomplete', limit: 3, ...(0, defined.s)({ disableStyles }), theme: props.theme, treePath },
						subProps_facetsHorizontal = { name: 'autocomplete', ...(0, defined.s)({ disableStyles }), theme: props.theme, treePath },
						subProps_banner = { className: 'ss__autocomplete__banner', ...(0, defined.s)({ disableStyles }), theme: props.theme, treePath },
						subProps_results = {
							columns: 3,
							rows: 2,
							className: 'ss__autocomplete__results',
							resultComponent,
							...(0, defined.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_icon = {
							className: 'ss__autocomplete__icon',
							icon: 'angle-right',
							size: '10px',
							...(0, defined.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						{ search, terms, trending, results, merchandising, pagination, filters, facets, state, loading } = controller.store,
						history = controller.store.history || [];
					controller &&
						'string' == typeof input &&
						((input = document.querySelector(input)),
						(0, hooks_module.vJ)(() => {
							controller.bind();
						}, []));
					const visible =
							Boolean(input === state.focusedInput) &&
							(terms.length > 0 || trending?.length > 0 || history?.length > 0 || (state.input && controller.store.loaded)),
						showResultsBool = () => Boolean(results.length > 0 || Object.keys(merchandising.content).length > 0 || search?.query?.string || loading),
						[showResults, setShowResults] = (0, compat_module.useState)(showResultsBool()),
						checkAndSetShowResults = () => {
							const trendingActive = trending?.filter((term) => term.active).pop(),
								historyActive = history?.filter((term) => term.active).pop();
							trendingActive || historyActive || showResultsBool() ? setShowResults(!0) : setShowResults(!1);
						};
					(0, hooks_module.vJ)(() => {
						checkAndSetShowResults();
					}, [trending, history]);
					const facetsToShow = facets.length ? facets.filter((facet) => facet.display !== types.QK.SLIDER) : [];
					checkAndSetShowResults();
					const styling = (0, mergeStyles.Z)(props, defaultStyles),
						reset = () => {
							controller.setFocused();
						},
						defaultLang = {
							contentTitle: { value: contentTitle },
							closeButton: { value: 'Close Autocomplete', attributes: { 'aria-label': 'close autocomplete' } },
							facetsTitle: { value: facetsTitle },
							noResultsText: {
								value: `<p>No results found for "${search.originalQuery?.string || search.query?.string}".</p><p>Please try another search.</p>`,
							},
							seeMoreButton: {
								value: `See ${pagination.totalResults} ${filters.length > 0 ? 'filtered' : ''} result${
									1 == pagination.totalResults ? '' : 's'
								} for "${search.query?.string}"`,
							},
						},
						lang = cjs_default()(defaultLang, props.lang || {}),
						mergedLang = (0, useLang.u)(lang, { controller });
					let recsController, RecommendationTemplateComponent, RecommendationTemplateResultComponent;
					if (templates?.recommendation?.enabled) {
						const recs = (function createRecommendationTemplate(templates, theme) {
							let recommendationTemplateComponent, recommendationTemplateResultComponent, recsController;
							if (templates?.recommendation?.enabled) {
								const componentName = templates?.recommendation?.component || 'RecommendationGrid',
									snap = (0, providers_snap.uk)();
								if (snap?.templates) {
									const themeName = theme?.name;
									let defaultResultComponentFromTheme;
									themeName && (defaultResultComponentFromTheme = snap?.templates?.config.theme?.resultComponent);
									const resultComponentName = templates?.recommendation?.resultComponent || defaultResultComponentFromTheme,
										mergedConfig = Object.assign({ id: '', tag: 'no-results', branch: 'production' }, templates.recommendation.config);
									(mergedConfig.id = mergedConfig.id || `search-${mergedConfig.tag}`),
										(recsController = (0, useCreateController.i)(snap, 'recommendation', mergedConfig)),
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
											));
								}
							}
							return {
								RecommendationTemplateComponent: recommendationTemplateComponent,
								RecommendationTemplateResultComponent: recommendationTemplateResultComponent,
								recsController,
							};
						})(templates, properties.theme);
						(RecommendationTemplateComponent = recs.RecommendationTemplateComponent),
							(RecommendationTemplateResultComponent = recs.RecommendationTemplateResultComponent),
							(recsController = recs.recsController);
					}
					(0, useCleanUpEmptyDivs.P)('.ss__autocomplete__column, .ss__autocomplete__terms-wrapper');
					const findModule = (module) =>
						'string' != typeof module
							? (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
									className: 'ss__autocomplete__row',
									children: module?.map((subModule) => findModule(subModule)),
							  })
							: 'c1' == module && column1?.layout?.length
							? (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
									className: 'ss__autocomplete__column ss__autocomplete__column--c1',
									children: column1?.layout?.map((module) => findModule(module)),
							  })
							: 'c2' == module && column2?.layout?.length
							? (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
									className: 'ss__autocomplete__column ss__autocomplete__column--c2',
									children: column2?.layout?.map((module) => findModule(module)),
							  })
							: 'c3' == module && column3?.layout?.length
							? (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
									className: 'ss__autocomplete__column ss__autocomplete__column--c3',
									children: column3?.layout?.map((module) => findModule(module)),
							  })
							: 'c4' == module && column4?.layout?.length
							? (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
									className: 'ss__autocomplete__column ss__autocomplete__column--c4',
									children: column4?.layout?.map((module) => findModule(module)),
							  })
							: 'termsList' == module
							? (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
									className: classnames_default()('ss__autocomplete__terms-wrapper'),
									children: (0, emotion_react_jsx_runtime_browser_esm.Y)(TermsList.G, { controller, ...subProps_termsList }),
							  })
							: 'terms.history' == module
							? (0, emotion_react_jsx_runtime_browser_esm.Y)(Terms.i, {
									controller,
									terms: controller.store.history,
									className: 'ss__terms-list__terms--history',
									name: 'history',
									...subProps_terms,
									title: 'History',
							  })
							: 'terms.trending' == module
							? (0, emotion_react_jsx_runtime_browser_esm.Y)(Terms.i, {
									controller,
									terms: controller.store.trending,
									className: 'ss__terms-list__terms--trending',
									name: 'trending',
									...subProps_terms,
									title: 'Trending',
							  })
							: 'terms.suggestions' == module
							? (0, emotion_react_jsx_runtime_browser_esm.Y)(Terms.i, {
									controller,
									terms: controller.store.terms,
									className: 'ss__terms-list__terms--suggestions',
									name: 'suggestions',
									...subProps_terms,
									title: 'Suggestions',
							  })
							: 'facets' == module
							? facetsToShow.length
								? (0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
										className: classnames_default()('ss__autocomplete__facets-wrapper'),
										children: [
											facetsTitle || lang.facetsTitle.value
												? (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
														className: classnames_default()('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
														children: (0, emotion_react_jsx_runtime_browser_esm.Y)('h5', { ...mergedLang.facetsTitle?.all }),
												  })
												: null,
											(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
												className: 'ss__autocomplete__facets',
												children: [
													(0, emotion_react_jsx_runtime_browser_esm.Y)(Facets.J, { ...subProps_facets, facets: facetsToShow }),
													excludeBanners
														? null
														: (0, emotion_react_jsx_runtime_browser_esm.Y)(Banner.l, {
																...subProps_banner,
																content: merchandising.content,
																type: SearchMerchandisingStore.c.LEFT,
																name: 'left',
														  }),
												],
											}),
										],
								  })
								: (0, emotion_react_jsx_runtime_browser_esm.Y)(emotion_react_jsx_runtime_browser_esm.FK, {})
							: 'facetsHorizontal' == module
							? facetsToShow.length
								? (0, emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK, {
										children: [
											facetsTitle || lang.facetsTitle.value
												? (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
														className: classnames_default()('ss__autocomplete__title', 'ss__autocomplete__title--facets'),
														children: (0, emotion_react_jsx_runtime_browser_esm.Y)('h5', { ...mergedLang.facetsTitle?.all }),
												  })
												: null,
											(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
												className: 'ss__autocomplete__facets',
												children: [
													(0, emotion_react_jsx_runtime_browser_esm.Y)(FacetsHorizontal.b, { ...subProps_facetsHorizontal, facets: facetsToShow }),
													excludeBanners
														? null
														: (0, emotion_react_jsx_runtime_browser_esm.Y)(Banner.l, {
																...subProps_banner,
																content: merchandising.content,
																type: SearchMerchandisingStore.c.LEFT,
																name: 'left',
														  }),
												],
											}),
										],
								  })
								: (0, emotion_react_jsx_runtime_browser_esm.Y)(emotion_react_jsx_runtime_browser_esm.FK, {})
							: 'content' == module && showResults
							? (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
									className: 'ss__autocomplete__content',
									children:
										results.length > 0 || !loading
											? (0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
													className: 'ss__autocomplete__content-inner',
													children: [
														excludeBanners
															? null
															: (0, emotion_react_jsx_runtime_browser_esm.Y)(Banner.l, {
																	...subProps_banner,
																	content: merchandising.content,
																	type: SearchMerchandisingStore.c.HEADER,
																	name: 'header',
															  }),
														excludeBanners
															? null
															: (0, emotion_react_jsx_runtime_browser_esm.Y)(Banner.l, {
																	...subProps_banner,
																	content: merchandising.content,
																	type: SearchMerchandisingStore.c.BANNER,
																	name: 'banner',
															  }),
														results.length > 0
															? (0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
																	className: 'ss__autocomplete__content__results',
																	children: [
																		(contentTitle || lang.contentTitle.value) && results.length > 0
																			? (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																					className: classnames_default()('ss__autocomplete__title', 'ss__autocomplete__title--content'),
																					children: (0, emotion_react_jsx_runtime_browser_esm.Y)('h5', { ...mergedLang.contentTitle?.all }),
																			  })
																			: null,
																		(0, emotion_react_jsx_runtime_browser_esm.Y)(Results.n, { results, ...subProps_results, controller }),
																	],
															  })
															: loading
															? (0, emotion_react_jsx_runtime_browser_esm.Y)(emotion_react_jsx_runtime_browser_esm.FK, {})
															: (0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
																	className: 'ss__autocomplete__content__no-results',
																	children: [
																		(0, emotion_react_jsx_runtime_browser_esm.Y)('div', { ...mergedLang.noResultsText?.all }),
																		RecommendationTemplateComponent && recsController?.store?.loaded
																			? (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																					className: 'ss__no-results__recommendations',
																					children: (0, emotion_react_jsx_runtime_browser_esm.Y)(RecommendationTemplateComponent, {
																						controller: recsController,
																						title: recsController.store?.profile?.display?.templateParameters?.title,
																						resultComponent: RecommendationTemplateResultComponent,
																						name: 'noResultsRecommendations',
																						treePath,
																					}),
																			  })
																			: null,
																	],
															  }),
														excludeBanners
															? null
															: (0, emotion_react_jsx_runtime_browser_esm.Y)(Banner.l, {
																	...subProps_banner,
																	content: merchandising.content,
																	type: SearchMerchandisingStore.c.FOOTER,
																	name: 'footer',
															  }),
													],
											  })
											: (0, emotion_react_jsx_runtime_browser_esm.Y)(emotion_react_jsx_runtime_browser_esm.FK, {}),
							  })
							: '_' == module
							? (0, emotion_react_jsx_runtime_browser_esm.Y)('div', { className: 'ss__autocomplete__separator' })
							: 'banner.banner' == module
							? (0, emotion_react_jsx_runtime_browser_esm.Y)(Banner.l, {
									...subProps_banner,
									content: merchandising.content,
									type: SearchMerchandisingStore.c.BANNER,
									name: 'banner',
							  })
							: 'banner.footer' == module
							? (0, emotion_react_jsx_runtime_browser_esm.Y)(Banner.l, {
									...subProps_banner,
									content: merchandising.content,
									type: SearchMerchandisingStore.c.FOOTER,
									name: 'footer',
							  })
							: 'banner.header' == module
							? (0, emotion_react_jsx_runtime_browser_esm.Y)(Banner.l, {
									...subProps_banner,
									content: merchandising.content,
									type: SearchMerchandisingStore.c.HEADER,
									name: 'header',
							  })
							: 'banner.left' == module
							? (0, emotion_react_jsx_runtime_browser_esm.Y)(Banner.l, {
									...subProps_banner,
									content: merchandising.content,
									type: SearchMerchandisingStore.c.LEFT,
									name: 'left',
							  })
							: 'button.see-more' == module && showResults && search?.query?.string && results.length > 0
							? (0, emotion_react_jsx_runtime_browser_esm.Y)(Button.$, {
									...subProps_button,
									children: (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
										className: 'ss__autocomplete__see-more',
										children: (0, emotion_react_jsx_runtime_browser_esm.FD)('a', {
											href: state.url.href,
											onClick: () => controller?.setFocused && controller.setFocused(),
											...mergedLang.seeMoreButton.attributes,
											children: [
												(0, emotion_react_jsx_runtime_browser_esm.Y)('span', { ...mergedLang.seeMoreButton.value }),
												(0, emotion_react_jsx_runtime_browser_esm.Y)(Icon.I, { ...subProps_icon }),
											],
										}),
									}),
							  })
							: void 0;
					return visible && layout?.length
						? (0, emotion_react_jsx_runtime_browser_esm.Y)(cache._, {
								children: (0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									...styling,
									className: classnames_default()('ss__autocomplete', className),
									onClick: (e) => e.stopPropagation(),
									ref: (e) => (0, useA11y.i)(e, 0, !0, reset),
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)('span', {
											role: 'link',
											ref: (e) => (0, useA11y.i)(e),
											onClick: () => reset(),
											className: 'ss__autocomplete__close-button',
											style: { position: 'absolute', top: '-10000000px', left: '-1000000px' },
											...mergedLang.closeButton?.all,
										}),
										layout?.map((module) => findModule(module)),
									],
								}),
						  })
						: (0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, {});
				});
		},
		'./components/src/components/Trackers/SearchResultTracker/SearchResultTracker.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { m: () => SearchResultTracker });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeStyles.ts');
			const defaultStyles = () => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({}),
				SearchResultTracker = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const { children, result, controller, className } = properties,
						resultRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.li)(null),
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.Z)(properties, defaultStyles);
					return (
						controller || console.error('No SearchController was passed to SearchResultTracker.'),
						controller
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)('div', {
									className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('ss__result-tracker', className),
									onClick: (e) => controller.track.product.click(e, result),
									ref: resultRef,
									...styling,
									children,
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, { children })
					);
				});
		},
		'./components/src/hooks/useCreateController.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { i: () => useCreateController });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			const useCreateController = (snap, type, config) => {
				const [controller, setController] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(void 0);
				return (
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
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
			};
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
		'../../node_modules/react-ranger/dist/react-ranger.mjs': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
