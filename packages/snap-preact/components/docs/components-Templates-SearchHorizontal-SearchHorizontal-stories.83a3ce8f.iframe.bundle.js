'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[8595],
	{
		'./components/src/components/Templates/SearchHorizontal/SearchHorizontal.stories.tsx': (
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
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./components/src/utilities/storybook.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				_utilities_snapify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/snapify.ts'),
				_Search_readme_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/components/Templates/Search/readme.md'),
				_SearchHorizontal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					'./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx'
				);
			const __WEBPACK_DEFAULT_EXPORT__ = {
					title: 'Templates/SearchHorizontal',
					component: _SearchHorizontal__WEBPACK_IMPORTED_MODULE_0__.j,
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
					argTypes: {
						controller: {
							description: 'Search Controller Reference',
							type: { required: !0 },
							table: { type: { summary: 'Controller' } },
							control: { type: 'none' },
						},
						hideTopToolBar: {
							defaultValue: !1,
							description: 'prevents the top Toolbar component from rendering',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideMiddleToolBar: {
							defaultValue: !1,
							description: 'prevents the middle Toolbar component from rendering',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideBottomToolBar: {
							defaultValue: !1,
							description: 'prevents the bottom Toolbar component from rendering',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideFacetsHorizontal: {
							defaultValue: !1,
							description: 'prevents the HorizontalFacets component from rendering',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						resultComponent: { description: 'Slot for custom result component', table: { type: { summary: 'component' } } },
						..._utilities__WEBPACK_IMPORTED_MODULE_5__.F,
					},
				},
				snapInstance = _utilities_snapify__WEBPACK_IMPORTED_MODULE_6__.p.search({ id: 'search', globals: { siteId: '8uyt2m' } }),
				noresultsInstance = _utilities_snapify__WEBPACK_IMPORTED_MODULE_6__.p.search({
					id: 'noresults',
					globals: { siteId: '8uyt2m', search: { query: { string: 'eijworhufsbgd' } } },
				}),
				Default = (args, { loaded: { controller } }) =>
					(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_SearchHorizontal__WEBPACK_IMPORTED_MODULE_0__.j, { ...args, controller });
			Default.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })];
			const NoResults = (args, { loaded: { controller } }) =>
				(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_SearchHorizontal__WEBPACK_IMPORTED_MODULE_0__.j, { ...args, controller });
			(NoResults.loaders = [async () => (await noresultsInstance.search(), { controller: noresultsInstance })]),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: {
							originalSource:
								'(args: SearchHorizontalProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => {\n  return <SearchHorizontal {...args} controller={controller} />;\n}',
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
								'(args: SearchHorizontalProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => {\n  return <SearchHorizontal {...args} controller={controller} />;\n}',
							...NoResults.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default', 'NoResults'];
		},
		'./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { j: () => SearchHorizontal });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_Search_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./components/src/components/Templates/Search/Search.tsx');
			const SearchHorizontal = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__.PA)((properties) =>
				(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_providers__WEBPACK_IMPORTED_MODULE_2__._, {
					children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_Search_Search__WEBPACK_IMPORTED_MODULE_3__.v, {
						...properties,
						alias: 'searchHorizontal',
					}),
				})
			);
		},
	},
]);
