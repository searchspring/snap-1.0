'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[3824],
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
		'./components/src/components/Molecules/Terms/Terms.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { i: () => Terms });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_toolbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
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
						{ title, onTermClick, limit, previewOnHover, emIfy, className, internalClassName, controller } = props,
						currentInput = controller?.store?.state?.input,
						terms = props.terms,
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.Z)(props, defaultStyles),
						termsToShow = limit ? terms?.slice(0, limit) : terms,
						defaultLang = { title: { value: title } },
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
						mergedTitleLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_8__.u)({ title: lang.title }, { controller });
					return termsToShow?.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_providers__WEBPACK_IMPORTED_MODULE_10__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__terms', className, internalClassName),
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
											children: termsToShow?.map((term, idx) => {
												const defaultTermLang = {
														term: {
															value: `${emIfy ? emIfyTerm(term.value, currentInput || '') : term.value}`,
															attributes: { 'aria-label': `${title} item ${idx + 1} of ${termsToShow.length}, ${term.value}` },
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
														...(previewOnHover ? (0, _toolbox__WEBPACK_IMPORTED_MODULE_11__.l)(term.preview) : {}),
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
		'./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { h: () => AutocompleteLayout });
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_module = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				hooks_module = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				es = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				emotion_react_browser_esm = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
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
				emotion_element_5486c51c_browser_esm = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				cache = __webpack_require__('./components/src/providers/cache.tsx'),
				types = __webpack_require__('./components/src/types.ts'),
				useLang = __webpack_require__('./components/src/hooks/useLang.tsx'),
				useA11y = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				TermsList = __webpack_require__('./components/src/components/Organisms/TermsList/TermsList.tsx'),
				Terms = __webpack_require__('./components/src/components/Molecules/Terms/Terms.tsx'),
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
						overflowY: 'scroll',
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
				AutocompleteLayout = (0, es.PA)((properties) => {
					const globalTheme = (0, emotion_element_5486c51c_browser_esm.u)();
					let props = (0, mergeProps.v6)(
						'autocompleteLayout',
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
					delete props.treePath;
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
							onReset,
							excludeBanners,
							resultComponent,
							templates,
							disableStyles,
							className,
							internalClassName,
							controller,
							treePath,
						} = props,
						subProps_button = {
							internalClassName: 'ss__autocomplete__button--see-more',
							onClick: () => {
								controller?.setFocused && controller.setFocused(), (window.location.href = state.url.href);
							},
							name: 'see-more',
							...(0, defined.s)({ disableStyles }),
							theme: props.theme,
							treePath: properties.treePath,
						},
						subProps_termsList = {
							internalClassName: 'ss__autocomplete__terms-list',
							controller,
							...(0, defined.s)({ disableStyles }),
							theme: props.theme,
							treePath: properties.treePath,
						},
						subProps_terms = {
							internalClassName: 'ss__autocomplete__terms',
							controller,
							...(0, defined.s)({ disableStyles }),
							theme: props.theme,
							treePath: properties.treePath,
						},
						subProps_facets = {
							name: 'autocomplete',
							limit: 3,
							...(0, defined.s)({ disableStyles }),
							theme: props.theme,
							treePath: properties.treePath,
						},
						subProps_facetsHorizontal = {
							name: 'autocomplete',
							...(0, defined.s)({ disableStyles }),
							theme: props.theme,
							treePath: properties.treePath,
						},
						subProps_banner = {
							internalClassName: 'ss__autocomplete__banner',
							...(0, defined.s)({ disableStyles }),
							theme: props.theme,
							treePath: properties.treePath,
						},
						subProps_results = {
							columns: 3,
							rows: 2,
							internalClassName: 'ss__autocomplete__results',
							resultComponent,
							...(0, defined.s)({ disableStyles }),
							theme: props.theme,
							treePath: properties.treePath,
						},
						subProps_icon = {
							internalClassName: 'ss__autocomplete__icon',
							icon: 'angle-right',
							size: '10px',
							...(0, defined.s)({ disableStyles }),
							theme: props.theme,
							treePath: properties.treePath,
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
						[showResults, setShowResults] = (0, hooks_module.J0)(showResultsBool()),
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
							controller.setFocused(), onReset && onReset();
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
					const noresults = Boolean(controller.store.search?.query?.string && 0 === controller.store.results.length);
					if (templates?.recommendation?.enabled && noresults) {
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
					(0, useCleanUpEmptyDivs.P)(
						['.ss__autocomplete__terms-wrapper, .ss__autocomplete__row', '.ss__autocomplete__column'],
						'.ss__autocomplete__separator'
					);
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
									limit: controller.config.settings?.history?.limit,
									...subProps_terms,
									title: 'History',
							  })
							: 'terms.trending' == module
							? (0, emotion_react_jsx_runtime_browser_esm.Y)(Terms.i, {
									controller,
									terms: controller.store.trending,
									className: 'ss__terms-list__terms--trending',
									name: 'trending',
									limit: controller.config.settings?.trending?.limit,
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
																		(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																			className: 'ss__autocomplete__content__no-results__text',
																			...mergedLang.noResultsText?.all,
																		}),
																		RecommendationTemplateComponent && recsController?.store?.loaded
																			? (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																					className: 'ss__autocomplete__content__no-results__recommendations',
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
							? (0, emotion_react_jsx_runtime_browser_esm.FD)(Button.$, {
									...subProps_button,
									...mergedLang.seeMoreButton.attributes,
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)('span', { ...mergedLang.seeMoreButton.value }),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(Icon.I, { ...subProps_icon }),
									],
							  })
							: void 0;
					return visible && layout?.length
						? (0, emotion_react_jsx_runtime_browser_esm.Y)(cache._, {
								children: (0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									...styling,
									className: classnames_default()('ss__autocomplete', className, internalClassName),
									onClick: (e) => e.stopPropagation(),
									ref: (e) => (0, useA11y.iy)(e, 0, !1, reset),
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)('span', {
											role: 'link',
											ref: (e) => (0, useA11y.iy)(e),
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
		'./components/src/components/Organisms/TermsList/TermsList.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { G: () => TermsList });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_Molecules_Terms_Terms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/components/Molecules/Terms/Terms.tsx'),
				_hooks_useCleanUpEmptyDivs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/hooks/useCleanUpEmptyDivs.tsx');
			const defaultStyles = ({}) =>
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
							className,
							internalClassName,
							controller,
						} = props,
						subProps_terms = { ...(0, _utilities__WEBPACK_IMPORTED_MODULE_6__.s)({ disableStyles }), theme: props.theme, treePath },
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.Z)(props, defaultStyles),
						history = controller?.store.history || [],
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
						(0, _hooks_useCleanUpEmptyDivs__WEBPACK_IMPORTED_MODULE_8__.P)(['.ss__terms-list', '.ss__terms-list__row'], '.ss__terms-list__separator');
					const findModule = (module) =>
						'string' != typeof module
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('div', {
									className: 'ss__terms-list__row',
									children: module?.map((subModule) => findModule(subModule)),
							  })
							: '_' == module
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('div', { className: 'ss__terms-list__separator' })
							: 'History' == module && showHistory
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_Molecules_Terms_Terms__WEBPACK_IMPORTED_MODULE_10__.i, {
									internalClassName: 'ss__terms-list__terms--history',
									title: historyTitle,
									terms: history,
									controller,
									name: 'history',
									limit: controller.config.settings?.history?.limit,
									...subProps_terms,
							  })
							: 'Trending' == module && showTrending
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_Molecules_Terms_Terms__WEBPACK_IMPORTED_MODULE_10__.i, {
									internalClassName: 'ss__terms-list__terms--trending',
									title: trendingTitle,
									terms: trending,
									controller,
									name: 'trending',
									limit: controller.config.settings?.trending?.limit,
									...subProps_terms,
							  })
							: 'Suggestions' == module
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_Molecules_Terms_Terms__WEBPACK_IMPORTED_MODULE_10__.i, {
									internalClassName: 'ss__terms-list__terms--suggestions',
									title: suggestionTitle,
									terms: suggestions,
									controller,
									name: 'suggestions',
									...subProps_terms,
							  })
							: void 0;
					return layout?.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_providers__WEBPACK_IMPORTED_MODULE_11__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__terms-list', className, internalClassName),
									children: layout?.map((module) => findModule(module)),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
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
