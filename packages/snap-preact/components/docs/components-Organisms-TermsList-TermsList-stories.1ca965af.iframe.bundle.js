'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[9671],
	{
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
		'./components/src/components/Organisms/TermsList/TermsList.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => TermsList_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				TermsList = __webpack_require__('./components/src/components/Organisms/TermsList/TermsList.tsx');
			var snapify = __webpack_require__('./components/src/utilities/snapify.ts');
			const TermsList_stories = {
					title: 'Organisms/TermsList',
					component: TermsList.G,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# TermsList\n\nRenders a list of terms for autocomplete. \n\n## Usage\n\n### Controller\n\nThe `controller` prop specifies a reference to the autocomplete controller.\n\n```jsx\n<TermsList controller={controller} />\n```\n\n### layout\n\nThe `layout` prop is used to determine which terms render and in what layout. The prop takes an array of specific module names, the order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display. Options include 'Trending' | 'Suggestions' | 'History' | '_';\n\nThe `_` module is used a seperator module to center|left|right justify the other elements in the layout.\n\n```jsx\n<TermsList controller={controller} layout={[['Trending'], ['Suggestions'], ['History']]}/>\n```\n\n### historyTitle\n\nThe `historyTitle` prop specifies the title to render above the history terms.\n\n```jsx\n<TermsList controller={controller} historyTitle={'History Terms'}/>\n```\n\n### suggestionTitle\n\nThe `historyTitle` prop specifies the title to render above the history terms.\n\n```jsx\n<TermsList controller={controller} suggestionTitle={'Suggested Terms'}/>\n```\n\n### trendingTitle\n\nThe `trendingTitle` prop specifies the title to render above the trending terms.\n\n```jsx\n<TermsList controller={controller} trendingTitle={'Trending Terms'}/>\n```\n\n\n### retainHistory\n\nThe `retainHistory` prop will cause the history terms to always render. \n\n```jsx\n<TermsList controller={controller} retainHistory={true}/>\n```\n\n### retainTrending\n\nThe `retainTrending` prop will cause the Trending terms to always render. \n\n```jsx\n<TermsList controller={controller} retainTrending={true}/>\n```\n",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					decorators: [
						(Story) =>
							(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
								style: { maxWidth: '900px', position: 'relative' },
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
							description: 'autocomplete controller reference',
							type: { required: !0 },
							table: { type: { summary: 'autocomplete controller object' } },
							control: { type: 'none' },
						},
						layout: {
							description: 'array of modules to render in specified order',
							table: {
								type: { summary: "['History' | 'Trending' | 'Suggestions' | '_']" },
								defaultValue: { summary: "[['Suggestions'], ['Trending'], ['History']]" },
							},
							control: 'array',
						},
						historyTitle: {
							description: 'history terms title',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'History' } },
							control: { type: 'text' },
						},
						suggestionTitle: {
							description: 'suggested terms title',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'Suggestions' } },
							control: { type: 'text' },
						},
						trendingTitle: {
							description: 'trending terms title',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'Trending' } },
							control: { type: 'text' },
						},
						retainHistory: {
							description: 'boolean to specify if the history terms should always be rendered',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						retainTrending: {
							description: 'boolean to specify if the trending terms should always be rendered',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						...componentArgs.F,
					},
				},
				snapInstance = snapify.p.autocomplete({
					id: 'Autocomplete-TermsList',
					selector: '#searchInput',
					globals: { siteId: '8uyt2m' },
					settings: { trending: { limit: 5 } },
				}),
				Default = (args, { loaded: { controller } }) => {
					const mockTerms = [
						{ active: !1, preview: () => console.log(''), value: 'dress', url: { href: 'www.dress.com' } },
						{ active: !1, preview: () => console.log(''), value: 'drss', url: { href: 'www.drss.com' } },
						{ active: !1, preview: () => console.log(''), value: 'dreees', url: { href: 'www.dreees.com' } },
						{ active: !1, preview: () => console.log(''), value: 'dres', url: { href: 'www.dres.com' } },
						{ active: !1, preview: () => console.log(''), value: 'dss', url: { href: 'www.dss.com' } },
						{ active: !1, preview: () => console.log(''), value: 'ress', url: { href: 'www.ress.com' } },
					];
					return (
						setTimeout(() => {
							controller.bind();
						}),
						(controller.store.history = mockTerms),
						(0, emotion_react_jsx_runtime_browser_esm.Y)(TermsList.G, { ...args, controller })
					);
				};
			(Default.args = { retainHistory: !0, retainTrending: !0 }),
				(Default.loaders = [async () => ({ controller: await snapInstance })]),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: {
							originalSource:
								"(args: TermsListProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: AutocompleteController;\n  };\n}) => {\n  const mockTerms: AutocompleteTermStore = [{\n    active: false,\n    preview: () => console.log(''),\n    value: 'dress',\n    url: {\n      href: 'www.dress.com'\n    } as UrlManager\n  }, {\n    active: false,\n    preview: () => console.log(''),\n    value: 'drss',\n    url: {\n      href: 'www.drss.com'\n    } as UrlManager\n  }, {\n    active: false,\n    preview: () => console.log(''),\n    value: 'dreees',\n    url: {\n      href: 'www.dreees.com'\n    } as UrlManager\n  }, {\n    active: false,\n    preview: () => console.log(''),\n    value: 'dres',\n    url: {\n      href: 'www.dres.com'\n    } as UrlManager\n  }, {\n    active: false,\n    preview: () => console.log(''),\n    value: 'dss',\n    url: {\n      href: 'www.dss.com'\n    } as UrlManager\n  }, {\n    active: false,\n    preview: () => console.log(''),\n    value: 'ress',\n    url: {\n      href: 'www.ress.com'\n    } as UrlManager\n  }];\n  setTimeout(() => {\n    controller.bind();\n  });\n  controller.store.history = mockTerms;\n  return <TermsList {...args} controller={controller} />;\n}",
							...Default.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default'];
		},
		'./components/src/components/Organisms/TermsList/TermsList.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { G: () => TermsList });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
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
		'./components/src/hooks/useCleanUpEmptyDivs.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { P: () => useCleanUpEmptyDivs });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			function useCleanUpEmptyDivs(selectorsToClean, selectorToIgnore) {
				(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
					selectorsToClean.forEach((selectorToClean) => {
						document.querySelectorAll(selectorToClean).forEach((col) => {
							(function hasElemsToShow(element, selectorToIgnore) {
								if (!element.children.length) return !1;
								for (const child of element.children)
									if (!child.matches(selectorToIgnore)) {
										const innerHTML = child.innerHTML.trim();
										if ('DIV' !== child.tagName || '' !== innerHTML.trim()) return !0;
									}
								return !1;
							})(col, selectorToIgnore) || col.remove();
						});
					});
				});
			}
		},
		'./components/src/hooks/useLang.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
										: (currentObj.attributes.alt = currentLangSettings.attributes.alt)),
								currentLangSettings?.attributes?.placeholder &&
									('function' == typeof currentLangSettings.attributes?.placeholder
										? (currentObj.attributes.placeholder = currentLangSettings.attributes.placeholder(data))
										: (currentObj.attributes.placeholder = currentLangSettings.attributes.placeholder))),
							(currentObj.all = { ...currentObj.value, ...currentObj.attributes, 'ss-lang': key })),
							(returnObj[key] = currentObj);
					}),
					returnObj
				);
			};
		},
		'./components/src/toolbox/createHoverProps/createHoverProps.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { l: () => createHoverProps });
			const createHoverProps = (callback, options = { delay: 333, focusElem: !0 }) => {
				let delayTimeout;
				return {
					onMouseEnter: (e) => {
						clearTimeout(delayTimeout),
							(delayTimeout = window.setTimeout(() => {
								options.focusElem && e.target.focus(), callback && callback();
							}, options.delay || 333));
					},
					onMouseLeave: () => {
						clearTimeout(delayTimeout);
					},
				};
			};
		},
		'./components/src/utilities/defined.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			function defined(properties) {
				const definedProps = {};
				return (
					Object.keys(properties).map((key) => {
						void 0 !== properties[key] && (definedProps[key] = properties[key]);
					}),
					definedProps
				);
			}
			__webpack_require__.d(__webpack_exports__, { s: () => defined });
		},
	},
]);
