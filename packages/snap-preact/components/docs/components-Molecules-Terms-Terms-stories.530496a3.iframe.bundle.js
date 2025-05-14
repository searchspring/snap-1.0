(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[9235],
	{
		'./components/src/components/Molecules/Terms/Terms.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => Terms_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				Terms = __webpack_require__('./components/src/components/Molecules/Terms/Terms.tsx');
			var snapify = __webpack_require__('./components/src/utilities/snapify.ts');
			const Terms_stories = {
					title: 'Molecules/Terms',
					component: Terms.i,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# Terms\n\nRenders a list of terms for autocomplete. \n\n## Usage\n\n### Controller\n\nThe `controller` prop specifies a reference to the autocomplete controller.\n\n```jsx\n<Terms controller={controller} terms={terms}/>\n```\n\n### Terms\n\nThe `terms` prop specifies a reference to an autocomplete term store.\n\n```jsx\n<Terms controller={controller} terms={terms} />\n```\n\n### title\n\nThe `title` prop is will display the given text above the terms area. The default value is blank. \n\n```jsx\n<Terms controller={controller} terms={terms} title={'Suggestions'}/>\n```\n\n### vertical\n\nThe `vertical` prop is will specifies if the terms should render vertically.\n\n```jsx\n<Terms controller={controller} terms={terms} vertical={true}/>\n```\n\n### limit\n\nThe `limit` prop is used to determine the number of terms to render. Please note that this does not limit the number of terms fetched by the controller.  \n\n```jsx\n<Terms controller={controller} terms={terms} limit={4}/>\n```\n\n### previewOnHover\n\nThe `previewOnFocus` prop will invoke the `term.preview()` method when the value has been hovered over.\n\n```jsx\n<Terms controller={controller} terms={terms} previewOnHover={true}/>\n```\n\n### emify\n\nThe `emify` will automatically wrap non-matching characters within the term with an `<em>` element for different styling purposes. \n\n```jsx\n<Terms controller={controller} terms={terms} emify={true}/>\n```\n\n### onTermClick\n\nThe `onTermClick` prop allows for a custom callback function for when a term value is clicked. The function is passed the clicked terms reference in the term store. \n\n```jsx\n<Terms controller={controller} terms={terms} onTermClick={(e, term)=>{console.log(e, term)}}/>\n```\n",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					decorators: [
						(Story) =>
							(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
								style: { maxWidth: '900px', position: 'relative' },
								children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Story, {}),
							}),
					],
					argTypes: {
						controller: {
							description: 'autocomplete controller reference',
							type: { required: !0 },
							table: { type: { summary: 'autocomplete controller object' } },
							control: { type: 'none' },
						},
						terms: {
							description: 'autocomplete term store reference',
							type: { required: !0 },
							table: { type: { summary: 'autocomplete term store object' } },
							control: { type: 'none' },
						},
						title: { description: 'terms title', type: { required: !1 }, table: { type: { summary: 'string' } }, control: { type: 'text' } },
						limit: {
							description: 'adjust the number of terms to show',
							type: { required: !1 },
							table: { type: { summary: 'number' } },
							control: { type: 'number' },
						},
						previewOnHover: {
							description: 'invoke term preview upon focus',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
							control: { type: 'boolean' },
						},
						emIfy: {
							description: 'highlight the query matched section of the term',
							table: { type: { summary: 'boolean' } },
							control: { type: 'boolean' },
						},
						onTermClick: {
							description: 'custom onClick event handler for Terms',
							table: { type: { summary: 'function' } },
							control: { type: 'none' },
							action: 'onTermClick',
						},
						vertical: {
							description: 'boolean to adjust if each term should render in a vertically',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
							control: { type: 'boolean' },
						},
						...componentArgs.F,
					},
				},
				snapInstance = snapify.p.autocomplete({
					id: 'Autocomplete-Terms',
					selector: '#searchInput2',
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
						(0, emotion_react_jsx_runtime_browser_esm.Y)(Terms.i, { ...args, controller, terms: mockTerms })
					);
				};
			(Default.loaders = [async () => ({ controller: await snapInstance })]),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: {
							originalSource:
								"(args: TermsProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: AutocompleteController;\n  };\n}) => {\n  const mockTerms: AutocompleteTermStore = [{\n    active: false,\n    preview: () => console.log(''),\n    value: 'dress',\n    url: ({\n      href: 'www.dress.com'\n    } as UrlManager)\n  }, {\n    active: false,\n    preview: () => console.log(''),\n    value: 'drss',\n    url: ({\n      href: 'www.drss.com'\n    } as UrlManager)\n  }, {\n    active: false,\n    preview: () => console.log(''),\n    value: 'dreees',\n    url: ({\n      href: 'www.dreees.com'\n    } as UrlManager)\n  }, {\n    active: false,\n    preview: () => console.log(''),\n    value: 'dres',\n    url: ({\n      href: 'www.dres.com'\n    } as UrlManager)\n  }, {\n    active: false,\n    preview: () => console.log(''),\n    value: 'dss',\n    url: ({\n      href: 'www.dss.com'\n    } as UrlManager)\n  }, {\n    active: false,\n    preview: () => console.log(''),\n    value: 'ress',\n    url: ({\n      href: 'www.ress.com'\n    } as UrlManager)\n  }];\n  setTimeout(() => {\n    controller.bind();\n  });\n  return <Terms {...args} controller={controller} terms={mockTerms} />;\n}",
							...Default.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default'];
		},
		'./components/src/components/Molecules/Terms/Terms.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
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
		'./components/src/toolbox/createHoverProps/createHoverProps.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
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
		'./components/src/utilities/componentArgs.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { F: () => componentArgs });
			const componentArgs = {
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
		'./components/src/utilities/snapify.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { p: () => Snapify });
			var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/mobx/dist/mobx.esm.js'),
				_searchspring_snap_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../snap-controller/dist/esm/Search/SearchController.js'),
				_searchspring_snap_controller__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'../snap-controller/dist/esm/Recommendation/RecommendationController.js'
				),
				_searchspring_snap_controller__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'../snap-controller/dist/esm/Autocomplete/AutocompleteController.js'
				),
				_searchspring_snap_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../snap-client/dist/esm/Client/Client.js'),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('../snap-store-mobx/dist/esm/Search/SearchStore.js'),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
					'../snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'
				),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
					'../snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'
				),
				_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
				_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'../snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'
				),
				_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../snap-url-manager/dist/esm/linkers/react/react.js'),
				_searchspring_snap_event_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('../snap-event-manager/dist/esm/EventManager.js'),
				_searchspring_snap_profiler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('../snap-profiler/dist/esm/Profiler.js'),
				_searchspring_snap_logger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('../snap-logger/dist/esm/Logger.js'),
				_searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('../snap-tracker/dist/esm/Tracker.js');
			(0, mobx__WEBPACK_IMPORTED_MODULE_0__.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
			const controllers = {},
				client = { globals: { siteId: '8uyt2m' } };
			class Snapify {
				static recommendation(config) {
					const id = config.id;
					if (controllers[id]) return controllers[id];
					const cntrlr = (controllers[id] = (function createRecommendationController(config) {
						const urlManager = new _searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_1__.V(
								new _searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_2__.E(),
								_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_3__.X
							).detach(!0),
							cntrlr = new _searchspring_snap_controller__WEBPACK_IMPORTED_MODULE_11__.c(config.controller, {
								client: new _searchspring_snap_client__WEBPACK_IMPORTED_MODULE_5__.K(config.client.globals, config.client.config),
								store: new _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_12__.t(config.controller, { urlManager }),
								urlManager,
								eventManager: new _searchspring_snap_event_manager__WEBPACK_IMPORTED_MODULE_7__.E(),
								profiler: new _searchspring_snap_profiler__WEBPACK_IMPORTED_MODULE_8__.U(),
								logger: new _searchspring_snap_logger__WEBPACK_IMPORTED_MODULE_9__.V(),
								tracker: new _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_10__.JD(config.client.globals),
							});
						return cntrlr;
					})({ client, controller: config }));
					return (
						cntrlr.on('afterStore', async ({ controller }, next) => {
							controller.log.debug('controller', controller), controller.log.debug('store', controller.store.toJSON()), await next();
						}),
						cntrlr.init(),
						cntrlr
					);
				}
				static autocomplete(config) {
					const id = config.id;
					if (controllers[id]) return controllers[id];
					const cntrlr = (controllers[id] = (function createAutocompleteController(config) {
						const urlManager = new _searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_1__.V(
								new _searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_2__.E(),
								_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_3__.X
							).detach(),
							cntrlr = new _searchspring_snap_controller__WEBPACK_IMPORTED_MODULE_13__.Z(config.controller, {
								client: new _searchspring_snap_client__WEBPACK_IMPORTED_MODULE_5__.K(config.client.globals, config.client.config),
								store: new _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_14__.Y(config.controller, { urlManager }),
								urlManager,
								eventManager: new _searchspring_snap_event_manager__WEBPACK_IMPORTED_MODULE_7__.E(),
								profiler: new _searchspring_snap_profiler__WEBPACK_IMPORTED_MODULE_8__.U(),
								logger: new _searchspring_snap_logger__WEBPACK_IMPORTED_MODULE_9__.V(),
								tracker: new _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_10__.JD(config.client.globals),
							});
						return cntrlr;
					})({ client, controller: config }));
					return (
						cntrlr.on('afterStore', async ({ controller }, next) => {
							controller.log.debug('controller', controller), controller.log.debug('store', controller.store.toJSON()), await next();
						}),
						cntrlr.init(),
						cntrlr
					);
				}
				static search(config) {
					const id = config.id;
					if (controllers[id]) return controllers[id];
					const cntrlr = (controllers[id] = (function createSearchController(config) {
						const urlManager = new _searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_1__.V(
								new _searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_2__.E({
									settings: { coreType: 'query', corePrefix: config.controller.id },
								}),
								_searchspring_snap_url_manager__WEBPACK_IMPORTED_MODULE_3__.X
							),
							cntrlr = new _searchspring_snap_controller__WEBPACK_IMPORTED_MODULE_4__.Tp(config.controller, {
								client: new _searchspring_snap_client__WEBPACK_IMPORTED_MODULE_5__.K(config.client.globals, config.client.config),
								store: new _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_6__.U(config.controller, { urlManager }),
								urlManager,
								eventManager: new _searchspring_snap_event_manager__WEBPACK_IMPORTED_MODULE_7__.E(),
								profiler: new _searchspring_snap_profiler__WEBPACK_IMPORTED_MODULE_8__.U(),
								logger: new _searchspring_snap_logger__WEBPACK_IMPORTED_MODULE_9__.V(),
								tracker: new _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_10__.JD(config.client.globals),
							});
						return cntrlr;
					})({ client, controller: config }));
					return (
						cntrlr.on('afterStore', async ({ controller }, next) => {
							controller.log.debug('controller', controller), controller.log.debug('store', controller.store.toJSON()), await next();
						}),
						cntrlr.init(),
						cntrlr
					);
				}
			}
		},
		'./components/src/utilities/storybook.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { Z: () => highlightedCode });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			const highlightedCode = (props) => {
				const elemRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(null);
				return (
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
						elemRef.current &&
							props.className?.includes('lang-') &&
							!props.className?.includes('prism-block') &&
							window?.Prism?.highlightElement(elemRef.current);
					}, [props.className, props.children, elemRef]),
					(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)('code', { ...props, ref: elemRef, 'data-prismjs-copy': 'Copy' })
				);
			};
		},
		'../../node_modules/memoizerific sync recursive': (module) => {
			function webpackEmptyContext(req) {
				var e = new Error("Cannot find module '" + req + "'");
				throw ((e.code = 'MODULE_NOT_FOUND'), e);
			}
			(webpackEmptyContext.keys = () => []),
				(webpackEmptyContext.resolve = webpackEmptyContext),
				(webpackEmptyContext.id = '../../node_modules/memoizerific sync recursive'),
				(module.exports = webpackEmptyContext);
		},
	},
]);
