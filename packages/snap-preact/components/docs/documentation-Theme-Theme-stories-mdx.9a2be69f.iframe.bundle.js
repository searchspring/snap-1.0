(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[7241],
	{
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
		'./components/src/documentation/Theme/Theme.stories.mdx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					__namedExportsOrder: () => __namedExportsOrder,
					__page: () => __page,
					default: () => Theme_stories,
				});
			__webpack_require__('../../node_modules/preact/compat/dist/compat.module.js');
			var lib = __webpack_require__('../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js'),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs');
			var storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				jsx_runtime = __webpack_require__('../../node_modules/preact/compat/jsx-runtime.mjs');
			function _createMdxContent(props) {
				const _components = Object.assign({ hr: 'hr' }, (0, lib.RP)(), props.components);
				return (0, jsx_runtime.FD)(jsx_runtime.FK, {
					children: [
						(0, jsx_runtime.Y)(dist.W8, { title: 'Documentation/Theme' }),
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
						(0, jsx_runtime.Y)(dist.oz, {
							options: { overrides: { code: storybook.Z } },
							children:
								"Snap components allows for theming at both the global and component level.\n\n### Theme object\nA theme object contains a `components` object with one or more objects where the key is the name of the component (lowercase), and the value is an object containing prop keys and values.\n\nFor example, this `globalTheme` theme object will apply the prop `color={'blue'}` for all `<Button />` components and `hideCount={false}` for all `<facetListOptions />` components.\n\n```typescript\nconst globalTheme = {\n\tcomponents: {\n\t\tbutton: {\n\t\t\tcolor: 'blue',\n\t\t},\n\t\tfacetListOptions: {\n\t\t\thideCount: false,\n\t\t},\n\t},\n};\n```\n\nIf a component contains multiple sub-components (ie. Molecule or Organisms), it is also possible to provide sub-component props as follows:\n\n```typescript\nconst globalTheme = {\n\tcomponents: {\n\t\tfacetListOptions: {\n\t\t\thideCount: false,\n\t\t\ttheme: {\n\t\t\t\tcomponents: {\n\t\t\t\t\tcheckbox: {\n\t\t\t\t\t\tnative: true\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n};\n```\n\nThe theme object also contains colors used throughout components:\n\n```typescript\nconst globalTheme = {\n\tvariables: {\n\t\tcolor: {\n\t\t\tprimary: '#3A23AD',\n\t\t\tsecondary: '#00cee1',\n\t\t\taccent: '#4c3ce2',\n\t\t\tactive: {\n\t\t\t\tforeground: '#333333',\n\t\t\t\tbackground: '#f8f6fd',\n\t\t\t\taccent: '#3A23AD',\n\t\t\t},\n\t\t\thover: {\n\t\t\t\tforeground: '#333333',\n\t\t\t\tbackground: '#f8f6fd',\n\t\t\t\taccent: '#3A23AD',\n\t\t\t},\n\t\t},\n\t},\n\tcomponents: {}\n}\n```\n\n### ThemeProvider\nUsing a ThemeProvider applies a global theme to all its children components\n\n```typescript\nimport { ThemeProvider, Button } from '@searchspring/snap-preact-components'\n```\n\n```jsx\n<ThemeProvider theme={globalTheme}>\n\t<Button content={'click me!'} />\n</ThemeProvider>\n```\n\n### Component Theme\nThe `theme` prop is available on all components and allows for theming of a single component. \n\nThe component `theme` is merged with the global theme, therefore component theme props will overwrite any common props on the global theme object.\n\nIn the following example, the `<Button />` component will contain `color={'green'}` from `propTheme` and `native={true}` from `globalTheme`\n\n```typescript\nconst globalTheme = {\n\tcomponents: {\n\t\tbutton: {\n\t\t\tcolor: 'blue',\n\t\t\tnative: true\n\t\t},\n\t},\n};\nconst propTheme = {\n\tcomponents: {\n\t\tbutton: {\n\t\t\tcolor: 'green',\n\t\t},\n\t},\n};\n```\n\n```jsx\n\n<ThemeProvider theme={globalTheme}>\n    <Button content={'click me!'} theme={propTheme} />\n</ThemeProvider>\n```\n\n\n### Component Style\nThe `style` prop is available on all components and allows for styling of components at the global (via the `theme` prop) or the component level (via the `style` prop)\n\nStyles are applied to the root element of the component and uses CSS object syntax.\n\nStandard CSS:\n```css\n{\n\tbackground-color: red;\n\tcolor: #cccccc;\n}\n```\n\nIn CSS object syntax, properties are camel case and `'-'` are removed:\n```typescript\n{ \n\tbackgroundColor: '#ffff00',\n\tcolor: '#cccccc',\n}\n```\n\n\x3c!-- TODO: once classnames are standardized, document how to target sub elements --\x3e\n\nGlobal level styling via `theme` prop:\n\n```typescript\nconst globalTheme = {\n\tcomponents: {\n\t\tbutton: {\n\t\t\tstyle: {\n\t\t\t\tbackgroundColor: '#ffff00',\n\t\t\t\tcolor: '#cccccc'\n\t\t\t}\n\t\t},\n\t},\n};\n```\n\n```jsx\n<ThemeProvider theme={globalTheme}>\n    <Button content={'click me!'} />\n</ThemeProvider>\n```\n\nComponent level styling via `style` prop:\n\n```typescript\nconst buttonStyles = {\n\tbackgroundColor: '#ffff00',\n\tcolor: '#cccccc'\n};\n```\n\n```jsx\n<Button content={'click me!'} style={buttonStyles} />\n```\n\n### Disable Component Styles\nThe `disableStyles` prop is available on all components and allows for disabling all styles of the component, including any styles being applied at the global or component level. \n\nThis can be done at the global level:\n\n```typescript\nconst globalTheme = {\n\tcomponents: {\n\t\tbutton: {\n\t\t\tdisableStyles: true,\n\t},\n};\n```\n\n```jsx\n<ThemeProvider theme={globalTheme}>\n    <Button content={'click me!'} />\n</ThemeProvider>\n```\n\nOr at the component level:\n\n```jsx\n<Button content={'click me!'} disableStyles={true} />\n```\n\n\n### Component Class Names\nThe `className` prop is available on all components and allows for adding a class to the root level class list of a component. \n\nBy default, all components will contain a class name of `ss-${componentname}`, for example `'ss-button'`\n\nThis can be done at the global level:\n\n```typescript\nconst globalTheme = {\n\tcomponents: {\n\t\tbutton: {\n\t\t\tclassName: 'my-btn-class',\n\t},\n};\n```\n\n```jsx\n<ThemeProvider theme={globalTheme}>\n    <Button content={'click me!'} />\n</ThemeProvider>\n```\n\nOr at the component level:\n\n```jsx\n<Button content={'click me!'} className={'my-btn-class'} />\n```\n",
						}),
					],
				});
			}
			const __page = () => {
				throw new Error('Docs-only story');
			};
			__page.parameters = { docsOnly: !0 };
			const componentMeta = { title: 'Documentation/Theme', tags: ['stories-mdx'], includeStories: ['__page'] };
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
			const Theme_stories = componentMeta,
				__namedExportsOrder = ['__page'];
		},
		'./components/src/utilities/storybook.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { Z: () => highlightedCode });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
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
	},
]);
