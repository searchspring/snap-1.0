(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[2165],
	{
		'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { FD: () => jsxs, FK: () => Fragment, Y: () => jsx });
			var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/compat/jsx-runtime.mjs'),
				_dist_emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				Fragment =
					(__webpack_require__('../../node_modules/preact/compat/dist/compat.module.js'),
					__webpack_require__('../../node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js'),
					__webpack_require__('../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js'),
					__webpack_require__('../../node_modules/@emotion/serialize/dist/emotion-serialize.esm.js'),
					__webpack_require__(
						'../../node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js'
					),
					react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.FK);
			function jsx(type, props, key) {
				return _dist_emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.h.call(props, 'css')
					? react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y(
							_dist_emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.E,
							(0, _dist_emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.c)(type, props),
							key
					  )
					: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y(type, props, key);
			}
			function jsxs(type, props, key) {
				return _dist_emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.h.call(props, 'css')
					? react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.FD(
							_dist_emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.E,
							(0, _dist_emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.c)(type, props),
							key
					  )
					: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.FD(type, props, key);
			}
		},
		'../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, {
				BN: () => MDXContext,
				RP: () => useMDXComponents,
				gz: () => withMDXComponents,
				xA: () => MDXProvider,
			});
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/compat/dist/compat.module.js');
			const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.default.createContext({});
			function withMDXComponents(Component) {
				return function boundMDXComponent(props) {
					const allComponents = useMDXComponents(props.components);
					return react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(Component, { ...props, allComponents });
				};
			}
			function useMDXComponents(components) {
				const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.default.useContext(MDXContext);
				return react__WEBPACK_IMPORTED_MODULE_0__.default.useMemo(
					() => ('function' == typeof components ? components(contextComponents) : { ...contextComponents, ...components }),
					[contextComponents, components]
				);
			}
			const emptyObject = {};
			function MDXProvider({ components, children, disableParentContext }) {
				let allComponents;
				return (
					(allComponents = disableParentContext
						? 'function' == typeof components
							? components({})
							: components || emptyObject
						: useMDXComponents(components)),
					react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(MDXContext.Provider, { value: allComponents }, children)
				);
			}
		},
		'./components/src/documentation/Usage/Usage.stories.mdx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					__namedExportsOrder: () => __namedExportsOrder,
					__page: () => __page,
					default: () => Usage_stories,
				});
			__webpack_require__('../../node_modules/preact/compat/dist/compat.module.js');
			var lib = __webpack_require__('../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js'),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs');
			const Usage_namespaceObject =
				"Snap Preact components are designed to be used with the Snap MobX store package `@searchspring/snap-store-mobx` .\n\nSnap stores are a dependency for Snap controllers `@searchspring/snap-controller`. Snap controllers such as `SearchController` contain a reference to the `SearchStore` that was provided in the `ControllerServices` object named `searchControllerServices` below.\n\nMany component props are tied to the design of the store for ease of use:\n\nIn this example, the `store.pagination` property is provided to the `pagination` prop of the `<Pagination />` component.\n\n\n```typescript\nimport { SearchController } from '@searchspring/snap-controller';\n\nconst searchController = new SearchController(searchConfig, searchControllerServices);\n\nconsole.log(searchController.store)\n```\n\n```typescript\nimport { Pagination } from '@searchspring/snap-preact-components';\n```\n\n```jsx\n<Pagination pagination={searchController.store.pagination} />\n```\n\n<br/>\n\n**Usage examples for each component can be seen in each component's 'Docs'.**\n";
			var storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				jsx_runtime = __webpack_require__('../../node_modules/preact/compat/jsx-runtime.mjs');
			function _createMdxContent(props) {
				const _components = Object.assign({ hr: 'hr' }, (0, lib.RP)(), props.components);
				return (0, jsx_runtime.FD)(jsx_runtime.FK, {
					children: [
						(0, jsx_runtime.Y)(dist.W8, { title: 'Documentation/Usage' }),
						'\n',
						(0, jsx_runtime.Y)('style', {
							children:
								'\n\t  .header {\n\t  \tdisplay: flex;\n\t  \talign-items: center;\n\t  }\n\n\t  .header .subtitle {\n\t  \ttext-transform: uppercase;\n\t  \tcolor: #00cee1;\n\t  }\n\n\t  .header img {\n\t  \twidth: 300px;\n\t  \tmargin-right: 20px;\n\t  }\n  ',
						}),
						'\n',
						(0, jsx_runtime.Y)('div', {
							class: 'header',
							children: (0, jsx_runtime.Y)('span', { class: 'subtitle', children: 'SNAP PREACT COMPONENETS' }),
						}),
						'\n',
						(0, jsx_runtime.Y)(_components.hr, {}),
						'\n',
						(0, jsx_runtime.Y)(dist.oz, { options: { overrides: { code: storybook.Z } }, children: Usage_namespaceObject }),
					],
				});
			}
			const __page = () => {
				throw new Error('Docs-only story');
			};
			__page.parameters = { docsOnly: !0 };
			const componentMeta = { title: 'Documentation/Usage', tags: ['stories-mdx'], includeStories: ['__page'] };
			(componentMeta.parameters = componentMeta.parameters || {}),
				(componentMeta.parameters.docs = {
					...(componentMeta.parameters.docs || {}),
					page: function MDXContent(props = {}) {
						const { wrapper: MDXLayout } = Object.assign({}, (0, lib.RP)(), props.components);
						return MDXLayout
							? (0, jsx_runtime.Y)(MDXLayout, { ...props, children: (0, jsx_runtime.Y)(_createMdxContent, { ...props }) })
							: _createMdxContent(props);
					},
				});
			const Usage_stories = componentMeta,
				__namedExportsOrder = ['__page'];
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
		'../../node_modules/preact/compat/jsx-runtime.mjs': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { FK: () => preact_module.FK, Y: () => e, FD: () => e });
			__webpack_require__('../../node_modules/preact/compat/dist/compat.module.js');
			var preact_module = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				o = 0;
			function e(_, e, n, t, f) {
				var l,
					s,
					u = {};
				for (s in e) 'ref' == s ? (l = e[s]) : (u[s] = e[s]);
				var a = {
					type: _,
					props: u,
					key: n,
					ref: l,
					__k: null,
					__: null,
					__b: 0,
					__e: null,
					__d: void 0,
					__c: null,
					__h: null,
					constructor: void 0,
					__v: --o,
					__source: f,
					__self: t,
				};
				if ('function' == typeof _ && (l = _.defaultProps)) for (s in l) void 0 === u[s] && (u[s] = l[s]);
				return preact_module.fF.vnode && preact_module.fF.vnode(a), a;
			}
		},
	},
]);
