/*! For license information please see components-Molecules-PerPage-PerPage-stories.325a1acc.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[4451],
	{
		'./components/src/components/Molecules/PerPage/PerPage.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					List: () => List,
					Radio: () => Radio,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => PerPage_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				snapify = __webpack_require__('./components/src/utilities/snapify.ts');
			var PerPage = __webpack_require__('./components/src/components/Molecules/PerPage/PerPage.tsx');
			const PerPage_stories = {
					title: 'Molecules/PerPage',
					component: PerPage.F,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												'# PerPage\n\nRenders a select dropdown or a RadioSelect to be used with the pagination store, for setting the page size.\n\n## Sub-components\n- Select\n- List\n- RadioList\n\n## Usage\n\n### pagination\nThe `pagination` prop specifies an reference to the SearchPaginationStore.\n\n```jsx\n<SortBy pagination={controller.store.pagination} />\n```\n\n### controller\nThe `controller` prop specifies an reference to the Search Controller.\n\n```jsx\n<SortBy controller={controller} />\n```\n\n### label\nThe `label` prop specifies an label to render as the title.\n\n```jsx\n<SortBy controller={controller} label={\'Sort By\'}/>\n```\n\n### type\nThe `type` prop specifies which type of SortBy component to render. You can choose from 1 of 3 options - "Dropdown" | "List" | "Radio".\nBy default "Dropdown" is used. and will render a dropdown using the Select component. "Radio" will render a RadioSelect component, and "List" will render a RadioSelect component with radios disabled.\n\n```jsx\n<SortBy controller={controller} type={\'Radio\'} label={\'Sort By\'}/>\n```\n\n\n',
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					argTypes: {
						pagination: {
							description: 'reference to the SearchPaginationStore',
							type: { required: !0 },
							table: { type: { summary: 'reference to the SearchSortingStore' } },
							control: { type: 'none' },
						},
						controller: {
							description: 'reference to the Search Controller',
							table: { type: { summary: 'reference to the Search Controller' } },
							control: { type: 'none' },
						},
						label: { description: 'Header label text to render.', table: { type: { summary: 'string' } }, control: { type: 'text' } },
						type: {
							description: 'type of Select to render.',
							table: { type: { summary: '"dropdown" | "list" | "radio"' }, defaultValue: { summary: 'dropdown' } },
							options: ['dropdown', 'list', 'radio'],
							control: { type: 'select' },
						},
						...componentArgs.F,
					},
				},
				snapInstance = snapify.p.search({ id: 'PerPage', globals: { siteId: '8uyt2m' } }),
				Default = (args, { loaded: { controller } }) =>
					(0, emotion_react_jsx_runtime_browser_esm.Y)(PerPage.F, { ...args, pagination: controller?.store?.pagination });
			(Default.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })]), (Default.args = { label: 'Per Page' });
			const snapInstanceList = snapify.p.search({
					id: 'PerPage-list',
					globals: { siteId: '8uyt2m' },
					settings: {
						pagination: {
							pageSizeOptions: [
								{ label: '24', value: 12 },
								{ label: '48', value: 24 },
								{ label: '72', value: 48 },
							],
						},
					},
				}),
				List = (args, { loaded: { controller } }) =>
					(0, emotion_react_jsx_runtime_browser_esm.Y)(PerPage.F, { ...args, pagination: controller?.store?.pagination });
			(List.loaders = [async () => (await snapInstanceList.search(), { controller: snapInstanceList })]), (List.args = { label: '', type: 'list' });
			const Radio = (args, { loaded: { controller } }) =>
				(0, emotion_react_jsx_runtime_browser_esm.Y)(PerPage.F, { ...args, pagination: controller?.store?.pagination });
			(Radio.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })]),
				(Radio.args = { label: 'Per Page', type: 'radio' }),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: {
							originalSource:
								'(args: PerPageProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => {\n  return <PerPage {...args} pagination={controller?.store?.pagination} />;\n}',
							...Default.parameters?.docs?.source,
						},
					},
				}),
				(List.parameters = {
					...List.parameters,
					docs: {
						...List.parameters?.docs,
						source: {
							originalSource:
								'(args: PerPageProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => {\n  return <PerPage {...args} pagination={controller?.store?.pagination} />;\n}',
							...List.parameters?.docs?.source,
						},
					},
				}),
				(Radio.parameters = {
					...Radio.parameters,
					docs: {
						...Radio.parameters?.docs,
						source: {
							originalSource:
								'(args: PerPageProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => {\n  return <PerPage {...args} pagination={controller?.store?.pagination} />;\n}',
							...Radio.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default', 'List', 'Radio'];
		},
		'./components/src/components/Molecules/Checkbox/Checkbox.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { S: () => Checkbox });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_hooks_useA11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_2__);
			const CSS_checkbox = ({ size, color, theme }) => {
					const pixelSize = isNaN(Number(size)) ? size : `${size}px`;
					return (0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({
						display: 'inline-flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: pixelSize,
						width: pixelSize,
						border: `1px solid ${color || theme?.variables?.colors?.primary || '#333'}`,
						'&.ss__checkbox--disabled': { opacity: 0.7 },
						'& .ss__checkbox__empty': { display: 'inline-block', width: `calc(${pixelSize} - 30%)`, height: `calc(${pixelSize} - 30%)` },
					});
				},
				CSS_native = ({}) => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({}),
				Checkbox = (0, mobx_react__WEBPACK_IMPORTED_MODULE_4__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)(
							'checkbox',
							globalTheme,
							{ size: '12px', startChecked: !1, disableA11y: !1 },
							properties
						),
						{
							checked,
							color,
							disabled,
							icon,
							iconColor,
							onClick,
							size,
							startChecked,
							native,
							disableA11y,
							disableStyles,
							className,
							style,
							styleScript,
							theme,
							treePath,
						} = props,
						pixelSize = isNaN(Number(size)) ? size : `${size}px`,
						subProps_icon = {
							className: 'ss__checkbox__icon',
							icon: 'check-thin',
							...globalTheme?.components?.icon,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({
								color: iconColor || color || theme?.variables?.colors?.primary,
								disableStyles,
								icon,
								size: size && `calc(${pixelSize} - 30%)`,
							}),
							theme: props.theme,
							treePath,
						};
					let checkedState, setCheckedState;
					const stateful = void 0 === checked;
					stateful ? ([checkedState, setCheckedState] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(startChecked)) : (checkedState = checked);
					const clickFunc = (e) => {
							disabled || (stateful && setCheckedState && setCheckedState((prev) => !prev), onClick && onClick(e));
						},
						styling = { 'ss-name': props.name },
						stylingProps = props;
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = native ? [CSS_native(stylingProps), style] : [CSS_checkbox(stylingProps), style]);
					const defaultLang = {
							checkbox: { attributes: { 'aria-label': `${disabled ? 'disabled' : ''} ${checkedState ? 'checked' : 'unchecked'} checkbox` } },
						},
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_2___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_8__.u)(lang, { checkedState, disabled });
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_providers__WEBPACK_IMPORTED_MODULE_10__._, {
						children: native
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('input', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
										'ss__checkbox',
										{ 'ss__checkbox--disabled': disabled, 'ss__checkbox--active': checkedState },
										className
									),
									type: 'checkbox',
									'aria-checked': checkedState,
									onClick: (e) => clickFunc(e),
									disabled,
									checked: checkedState,
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('span', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
										'ss__checkbox',
										{ 'ss__checkbox--disabled': disabled, 'ss__checkbox--active': checkedState },
										className
									),
									onClick: (e) => clickFunc(e),
									ref: (e) => (disableA11y ? null : (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_11__.i)(e)),
									'aria-disabled': disabled,
									role: 'checkbox',
									'aria-checked': checkedState,
									...mergedLang.checkbox.all,
									children: checkedState
										? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_12__.I, {
												...subProps_icon,
												...('string' == typeof icon ? { icon } : icon),
										  })
										: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('span', { className: 'ss__checkbox__empty' }),
							  }),
					});
				});
		},
		'./components/src/utilities/cloneWithProps.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { Y: () => cloneWithProps });
			var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js');
			const cloneWithProps = (input, props) => {
				if (input)
					return 'function' == typeof input
						? input(props)
						: 'string' == typeof input || 'number' == typeof input || 'boolean' == typeof input
						? input
						: Array.isArray(input)
						? input.map((entry) => cloneWithProps(entry, props))
						: (0, preact__WEBPACK_IMPORTED_MODULE_0__.Ob)(input, props);
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
			(0, mobx__WEBPACK_IMPORTED_MODULE_0__.jK)({ useProxies: 'never', isolateGlobalState: !0, enforceActions: 'never' });
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
								tracker: new _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_10__.J(config.client.globals),
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
								tracker: new _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_10__.J(config.client.globals),
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
								tracker: new _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_10__.J(config.client.globals),
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
		'../snap-toolbox/dist/esm/filters/handleize.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			function handleize(input) {
				if ('string' != typeof input) return input;
				let handleized = input.toLowerCase();
				return (handleized = handleized.replace(/[^\w\s]/g, '').trim()), (handleized = handleized.replace(/\s/g, '-')), handleized;
			}
			__webpack_require__.d(__webpack_exports__, { p: () => handleize });
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
