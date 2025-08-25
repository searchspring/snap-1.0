(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[3433],
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
		'./components/src/documentation/About/About.stories.mdx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					__namedExportsOrder: () => __namedExportsOrder,
					__page: () => __page,
					default: () => About_stories,
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
						(0, jsx_runtime.Y)(dist.W8, { title: 'Documentation/About' }),
						'\n',
						(0, jsx_runtime.Y)('style', {
							children:
								'\n\t.header {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\t.header .subtitle {\n\t\ttext-transform: uppercase;\n\t\tcolor: #00cee1;\n\t}\n\n\t.header img {\n\t\twidth: 300px;\n\t\tmargin-right: 20px;\n\t}\n\t',
						}),
						'\n',
						(0, jsx_runtime.Y)('div', {
							class: 'header',
							children: (0, jsx_runtime.Y)('span', { class: 'subtitle', children: 'SNAP PREACT COMPONENTS' }),
						}),
						'\n',
						(0, jsx_runtime.Y)(_components.hr, {}),
						'\n',
						(0, jsx_runtime.Y)(dist.oz, {
							options: { overrides: { code: storybook.Z } },
							children:
								"Welcome to the Snap React Component Library! \nThis collection of ecommerce components allows you to quickly build and theme a layout for use with Searchspring's Snap SDK.\n\n\n### Installation\n\n```sh\nnpm install --save @searchspring/snap-preact-components\n```\n\n## Atomic Design Methodology\nSnap components follow the Atomic design methodology. Components are organized into three levels:\n\n### Atoms\nAtom level components are the basic building blocks of an ecommerce layout. This includes components such as Badge, Button, and Icon.\n\nLike atoms in nature they’re fairly abstract and often not terribly useful on their own. However, they’re good as a reference in the context of a pattern library as you can see all your global styles laid out at a glance.\n\n### Molecules\nMolecule level components utilize one or more atom components to start building the contents of a layout. This includes components such as Pagination, Select, and Slider.\n\nThings start getting more interesting and tangible when we start combining atoms together. Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound. These molecules take on their own properties and serve as the backbone of our design systems.\n\n### Organisms\nOrganisms level components utilize one or more molecule components to start building complex sections of a layout. This includes components such as Autocomplete, Facets, and Results.\n\nMolecules give us some building blocks to work with, and we can now combine them together to form organisms. Organisms are groups of molecules joined together to form a relatively complex, distinct section of an interface.",
						}),
					],
				});
			}
			const __page = () => {
				throw new Error('Docs-only story');
			};
			__page.parameters = { docsOnly: !0 };
			const componentMeta = { title: 'Documentation/About', tags: ['stories-mdx'], includeStories: ['__page'] };
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
			const About_stories = componentMeta,
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
