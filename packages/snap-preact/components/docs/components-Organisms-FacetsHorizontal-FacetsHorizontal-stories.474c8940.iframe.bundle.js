(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[1249],
	{
		'./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => FacetsHorizontal_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				FacetsHorizontal = __webpack_require__('./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				snapify = __webpack_require__('./components/src/utilities/snapify.ts'),
				paths = __webpack_require__('./components/src/components/Atoms/Icon/paths.tsx');
			const FacetsHorizontal_stories = {
					title: 'Organisms/FacetsHorizontal',
					component: FacetsHorizontal.b,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# FacetsHorizontal\n\nRenders all facets in a horizontal display. Also incluses MobileSidebar.\n\n## Sub-components\n- Facet\n- Dropdown\n- MobileSidebar\n\n## Usage\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```jsx\n<FacetsHorizontal controller={controller} />\n```\n\n### facets\nThe optional`facets` prop specifies a reference to the facets store array. If no facets prop is passed in, the component will default to using the facets in controller.store. \n\n```jsx\n<FacetsHorizontal facets={facets} />\n```\n\n### iconExpand\nThe `iconExpand` prop is the name of the icon to render when the facet is in its collapsed state.\n\n```jsx\n<FacetsHorizontal facets={facets} iconExpand={'angle-down'} />\n```\n\n### iconCollapse\nThe `iconCollapse` prop is the name of the icon to render when the facet is in its open state.\n\n```jsx\n<FacetsHorizontal facets={facets} iconCollapse={'angle-up'} />\n```\n\n### limit\nThe `limit` prop will limit the maximum number of facets to display before displaying the overflow button and MobidleSidebar.\n\n```jsx\n<FacetsHorizontal controller={controller} limit={6}/>\n```\n\n### alwaysShowFiltersButton\nThe `alwaysShowFiltersButton` prop will always render the button and MobileSidebar.\n\n```jsx\n<FacetsHorizontal controller={controller} alwaysShowFiltersButton={true} />\n```\n\n### overlay\nThe `overlay` prop will render the facet options in a dropdown overlay.\n\n```jsx\n<FacetsHorizontal controller={controller} overlay={true}/>\n```",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					argTypes: {
						facets: {
							description: 'Facets store reference',
							type: { required: !1 },
							table: { type: { summary: 'Facets store object' } },
							control: { type: 'none' },
						},
						limit: {
							description: 'Maximum number of facets to display',
							defaultValue: 6,
							type: { required: !1 },
							table: { type: { summary: 'number' }, defaultValue: { summary: 6 } },
							control: { type: 'number' },
						},
						alwaysShowFiltersButton: {
							defaultValue: !1,
							description: 'Always render MobileSidebar regardless of facet overflow set my limit prop',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						overlay: {
							defaultValue: !0,
							description: 'Render facet options as a dropdown overlay',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
							control: { type: 'boolean' },
						},
						iconExpand: {
							defaultValue: 'angle-down',
							description: 'Icon for when facet is collapsed',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'angle-down' } },
							options: [...Object.keys(paths.c)],
							control: { type: 'select' },
						},
						iconCollapse: {
							defaultValue: 'angle-up',
							description: 'Icon for when facet is expanded',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'angle-up' } },
							options: [...Object.keys(paths.c)],
							control: { type: 'select' },
						},
						controller: {
							description: 'Controller reference',
							type: { required: !1 },
							table: { type: { summary: 'Controller object' } },
							control: { type: 'none' },
						},
						...componentArgs.F,
					},
				},
				snapInstance = snapify.p.search({ id: 'FacetsHorizontal', globals: { siteId: '8uyt2m' } }),
				Default = (args, { loaded: { controller } }) => (0, emotion_react_jsx_runtime_browser_esm.Y)(FacetsHorizontal.b, { ...args, controller });
			(Default.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })]),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: {
							originalSource:
								'(args: FacetsHorizontalProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => {\n  return <FacetsHorizontal {...args} controller={controller} />;\n}',
							...Default.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default'];
		},
		'./components/src/components/Atoms/Button/Button.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { $: () => Button });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks_useA11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/utilities/cloneWithProps.tsx'),
				_Icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
				color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/color/index.js'),
				color__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_4__);
			const defaultStyles = ({ native, color, backgroundColor, borderColor, theme }) => {
					const lightenedPrimaryColorObj = new (color__WEBPACK_IMPORTED_MODULE_4___default())(
						backgroundColor || color || theme?.variables?.colors?.primary
					).lightness(95);
					return native
						? (0, _emotion_react__WEBPACK_IMPORTED_MODULE_5__.AH)({})
						: (0, _emotion_react__WEBPACK_IMPORTED_MODULE_5__.AH)({
								display: 'inline-flex',
								alignItems: 'center',
								gap: '5px',
								padding: '5px 10px',
								position: 'relative',
								color: color || theme?.variables?.colors?.primary,
								outline: 0,
								backgroundColor: backgroundColor || '#fff',
								border: `1px solid ${borderColor || color || theme?.variables?.colors?.primary || '#333'}`,
								'&:not(.ss__button--disabled):hover': { cursor: 'pointer', backgroundColor: lightenedPrimaryColorObj.hex() || '#f8f8f8' },
								'&.ss__button--disabled': { opacity: 0.3, backgroundColor: 'initial', '&:hover': { cursor: 'default' } },
								'.ss__button__content': { width: '100%' },
								label: { cursor: 'pointer' },
						  });
				},
				Button = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_6__.u)(),
						defaultProps = { disableA11y: !1, treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_7__.LU)() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_8__.v6)('button', globalTheme, defaultProps, properties),
						{
							content,
							children,
							disabled,
							native,
							onClick,
							disableA11y,
							disableStyles,
							className,
							icon,
							lang,
							treePath,
							style: _,
							styleScript: __,
							themeStyleScript: ___,
							...additionalProps
						} = props,
						subProps_icon = {
							className: 'ss__button__icon',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						elementProps = {
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_10__.Z)(props, defaultStyles),
							className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
								'ss__button',
								{ 'ss__button--native': native, 'ss__button--disabled': disabled },
								className
							),
							disabled,
							onClick: (e) => !disabled && onClick && onClick(e),
							...additionalProps,
						},
						a11yProps = { ref: (e) => (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_11__.i)(e) },
						langs = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()({}, lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_12__.u)(langs, {});
					return content || children || icon || lang?.button?.value
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_providers__WEBPACK_IMPORTED_MODULE_14__._, {
								children: native
									? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('button', {
											...elementProps,
											children: [
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('span', {
													className: 'ss__button__content',
													...mergedLang.button?.all,
													children: [
														(0, _utilities__WEBPACK_IMPORTED_MODULE_15__.Y)(content, { treePath }),
														(0, _utilities__WEBPACK_IMPORTED_MODULE_15__.Y)(children, { treePath }),
													],
												}),
												icon &&
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Icon__WEBPACK_IMPORTED_MODULE_16__.I, {
														...subProps_icon,
														...('string' == typeof icon ? { icon } : icon),
													}),
											],
									  })
									: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('div', {
											...(disableA11y ? {} : a11yProps),
											...elementProps,
											role: 'button',
											'aria-disabled': disabled,
											children: [
												content || children || mergedLang.button.value
													? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('span', {
															className: 'ss__button__content',
															...mergedLang.button?.all,
															children: [
																(0, _utilities__WEBPACK_IMPORTED_MODULE_15__.Y)(content, { treePath }),
																(0, _utilities__WEBPACK_IMPORTED_MODULE_15__.Y)(children, { treePath }),
															],
													  })
													: void 0,
												icon &&
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Icon__WEBPACK_IMPORTED_MODULE_16__.I, {
														...subProps_icon,
														...('string' == typeof icon ? { icon } : icon),
													}),
											],
									  }),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
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
		'./components/src/types.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			var ResultsLayout, FacetType, FacetDisplay;
			__webpack_require__.d(__webpack_exports__, { Cw: () => FacetType, QK: () => FacetDisplay, VT: () => ResultsLayout }),
				(function (ResultsLayout) {
					(ResultsLayout.grid = 'grid'), (ResultsLayout.list = 'list');
				})(ResultsLayout || (ResultsLayout = {})),
				(function (FacetType) {
					(FacetType.VALUE = 'value'), (FacetType.RANGE = 'range'), (FacetType.RANGE_BUCKETS = 'range-buckets');
				})(FacetType || (FacetType = {})),
				(function (FacetDisplay) {
					(FacetDisplay.GRID = 'grid'),
						(FacetDisplay.PALETTE = 'palette'),
						(FacetDisplay.LIST = 'list'),
						(FacetDisplay.SLIDER = 'slider'),
						(FacetDisplay.HIERARCHY = 'hierarchy'),
						(FacetDisplay.TOGGLE = 'toggle');
				})(FacetDisplay || (FacetDisplay = {}));
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
		'./components/src/utilities/defined.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
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
