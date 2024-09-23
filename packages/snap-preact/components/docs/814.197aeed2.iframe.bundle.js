'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[814],
	{
		'../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					MDXContext: () => _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.BN,
					MDXProvider: () => _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.xA,
					useMDXComponents: () => _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.RP,
					withMDXComponents: () => _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.gz,
				});
			var _lib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
				'../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js'
			);
		},
		'../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
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
	},
]);
