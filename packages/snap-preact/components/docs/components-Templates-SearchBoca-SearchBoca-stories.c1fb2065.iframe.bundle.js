'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[7529],
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
		'./components/src/components/Templates/Search/readme.md': (module) => {
			module.exports =
				"# Search Template\n\nRenders a Search Results Page.\n\n## Sub-components\n\n- Results\n- NoResults\n- Sidebar\n- Toolbar\n\n## Usage\n\n### controller\nThe required `controller` prop specifies a reference to the search controller.\n\n```jsx\n<Search controller={controller} />\n```\n\n### resultComponent\nThe `resultComponent` prop specifies a custom result component to render.\n\n```jsx\n\nconst CustomResult = ({\n\tcontroller \n\tresult\n\ttheme\n}) => {\n\treturn <div>{result.mappings.core?.name}</div>\n}\n\n<Search controller={controller} resultComponent={CustomResult} />\n```\n\n### mobileDisplayAt\nThe `mobileDisplayAt` prop specifies a CSS media query for when the MobileSidebar component will render. By default, the component will render at \"991px\".\n\n```jsx\n<Search controller={controller} mobileDisplayAt={'400px'} />\n```\n\n### hideSidebar\nThe `hideSidebar` prop specifies if the Sidebar component should be rendered.  \n\n```jsx\n<Search controller={controller} hideSidebar={true} />\n```\n\n### hideTopToolbar\nThe `hideTopToolbar` prop specifies if the top ToolBar component should be rendered.  \n\n```jsx\n<Search controller={controller} hideTopToolbar={true} />\n```\n\n### hideMiddleToolbar\nThe `hideMiddleToolbar` prop specifies if the middle ToolBar component should be rendered.  \n\n```jsx\n<Search controller={controller} hideMiddleToolbar={true} />\n```\n\n### hideBottomToolbar\nThe `hideBottomToolbar` prop specifies if the bottom ToolBar component should be rendered.  \n\n```jsx\n<Search controller={controller} hideBottomToolbar={true} />\n```\n\n### toggleSidebarButtonText\nThe `toggleSidebarButtonText` prop specifies the inner text of the Sidebar toggle button. If left undefined, no button will render. \n\n```jsx\n<Search controller={controller} toggleSidebarButtonText={'Toggle Facets'} />\n```\n\n### toggleSidebarStartClosed\nThe `toggleSidebarStartClosed` prop specifies if the sidebar toggle should start closed.\n\n```jsx\n<Search controller={controller} toggleSidebarStartClosed={true} />\n```\n\n### hideToggleSidebarButton\nThe `hideToggleSidebarButton` prop hides the Sidebar toggle button.\n\n```jsx\n<Search controller={controller} toggleSidebarButtonText={'Toggle Facets'} hideToggleSidebarButton={true} />\n```\n\n### layoutOptions\nThe `layoutOptions` prop allows you to customize the layout of the Search component by specifying an array of layout option objects. These options can be used to control which layouts are available to the user (such as grid or list view), set a default layout, and provide custom icons or labels for each layout option. \n\n\n\n\n```jsx\n\ntype ListOption = {\n    value: string | number;\n    label?: string;\n    disabled?: boolean;\n    default?: boolean;\n    icon?: IconType | Partial<IconProps>;\n    overrides?: ThemeMinimal;\n    url?: UrlManager;\n    available?: boolean;\n}\n\nconst layoutOptions: ListOption[] = [\n\t{\n\t\tvalue: 1,\n\t\tlabel: 'Single Column',\n\t\ticon: 'square',\n\t\toverrides: {\n\t\t\tcomponents: {\n\t\t\t\t'search results': {\n\t\t\t\t\tcolumns: 1,\n\t\t\t\t},\n\t\t\t},\n\t\t},\n\t},\n\t{\n\t\tvalue: 2,\n\t\tlabel: 'Two Columns',\n\t\tdefault: true,\n\t\ticon: 'layout-large',\n\t\toverrides: {\n\t\t\tcomponents: {\n\t\t\t\t'search results': {\n\t\t\t\t\tcolumns: 2,\n\t\t\t\t},\n\t\t\t},\n\t\t},\n\t},\n]\n\n<Search controller={controller} layoutOptions={layoutOptions} />\n```";
		},
		'./components/src/components/Templates/SearchBoca/SearchBoca.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					NoResults: () => NoResults,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				});
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./components/src/utilities/storybook.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				_utilities_snapify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/snapify.ts'),
				_Search_readme_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/components/Templates/Search/readme.md'),
				_SearchBoca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./components/src/components/Templates/SearchBoca/SearchBoca.tsx');
			const __WEBPACK_DEFAULT_EXPORT__ = {
					title: 'Templates/SearchBoca',
					component: _SearchBoca__WEBPACK_IMPORTED_MODULE_0__._,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.FD)('div', {
									children: [
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.oz, {
											options: { overrides: { code: _utilities__WEBPACK_IMPORTED_MODULE_3__.Z } },
											children: _Search_readme_md__WEBPACK_IMPORTED_MODULE_4__,
										}),
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.uY, {
											story: _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.h1,
										}),
									],
								}),
						},
					},
					decorators: [(Story) => (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(Story, {})],
					argTypes: {
						controller: {
							description: 'Search Controller Reference',
							type: { required: !0 },
							table: { type: { summary: 'Controller' } },
							control: { type: 'none' },
						},
						toggleSidebarButtonText: {
							description: 'Text to render in the toggle Sidebar button.',
							table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
							control: { type: 'text' },
						},
						toggleSidebarStartClosed: {
							defaultValue: !1,
							description: 'determines if the sidebar toggle should start closed',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideToggleSidebarButton: {
							defaultValue: !1,
							description: 'hide the toggle Sidebar button',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						mobileDisplayAt: {
							defaultValue: '',
							description: 'Media query for when to render the mobileSidebar',
							table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
							control: { type: 'text' },
						},
						hideSidebar: {
							defaultValue: !1,
							description: 'prevents the sidebar component from rendering',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideTopToolbar: {
							defaultValue: !1,
							description: 'prevents the top Toolbar component from rendering',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideMiddleToolbar: {
							defaultValue: !1,
							description: 'prevents the middle Toolbar component from rendering',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideBottomToolbar: {
							defaultValue: !1,
							description: 'prevents the bottom Toolbar component from rendering',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						resultComponent: { description: 'Slot for custom result component', table: { type: { summary: 'component' } } },
						..._utilities__WEBPACK_IMPORTED_MODULE_5__.F,
					},
				},
				snapInstance = _utilities_snapify__WEBPACK_IMPORTED_MODULE_6__.p.search({ id: 'Search', globals: { siteId: '8uyt2m' } }),
				noresultsInstance = _utilities_snapify__WEBPACK_IMPORTED_MODULE_6__.p.search({
					id: 'Search-noResults',
					globals: { siteId: '8uyt2m', search: { query: { string: 'eijworhufsbgd' } } },
				}),
				Default = (args, { loaded: { controller } }) =>
					(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_SearchBoca__WEBPACK_IMPORTED_MODULE_0__._, { ...args, controller });
			Default.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })];
			const NoResults = (args, { loaded: { controller } }) =>
				(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_SearchBoca__WEBPACK_IMPORTED_MODULE_0__._, { ...args, controller });
			(NoResults.loaders = [async () => (await noresultsInstance.search(), { controller: noresultsInstance })]),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: {
							originalSource:
								'(args: SearchBocaProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => {\n  return <SearchBoca {...args} controller={controller} />;\n}',
							...Default.parameters?.docs?.source,
						},
					},
				}),
				(NoResults.parameters = {
					...NoResults.parameters,
					docs: {
						...NoResults.parameters?.docs,
						source: {
							originalSource:
								'(args: SearchBocaProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => {\n  return <SearchBoca {...args} controller={controller} />;\n}',
							...NoResults.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default', 'NoResults'];
		},
		'./components/src/components/Templates/SearchBoca/SearchBoca.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { _: () => SearchBoca });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_Search_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./components/src/components/Templates/Search/Search.tsx');
			const SearchBoca = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__.PA)((properties) =>
				(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_providers__WEBPACK_IMPORTED_MODULE_2__._, {
					children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_Search_Search__WEBPACK_IMPORTED_MODULE_3__.v, {
						...properties,
						alias: 'searchBoca',
					}),
				})
			);
		},
	},
]);
