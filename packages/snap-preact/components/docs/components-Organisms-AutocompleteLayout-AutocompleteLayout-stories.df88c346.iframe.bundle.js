'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[2813],
	{
		'./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					Slim: () => Slim,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => AutocompleteLayout_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				AutocompleteLayout = __webpack_require__('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				snapify = __webpack_require__('./components/src/utilities/snapify.ts');
			const AutocompleteLayout_stories = {
					title: 'Organisms/AutocompleteLayout',
					component: AutocompleteLayout.h,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# AutocompleteLayout\n\nRenders an autocomplete popup that binds to an `<input>` element.\n\nThe AutocompleteLayout component is very similar to the Autocomplete component in functionality, however the main difference is that the AutocompleteLayout components layout is determined by the layout prop, which specifies what child components render and where.\n\n## Components Used\n- Banner\n- Results\n- Icon\n- TermsList\n- Terms\n- Button\n- Facets\n- FacetsHorizontal\n\n## Usage\n\n### input\nThe required `input` prop expects either:\n\n- a string CSS selector that targets `<input>` element(s) to bind to\n\n- an `<input>` element to bind to\n\n```jsx\n<AutocompleteLayout controller={controller} input={'#searchInput'} />\n```\n\n### controller\nThe required `controller` prop specifies a reference to the autocomplete controller.\n\n```jsx\n<AutocompleteLayout controller={controller} input={'#searchInput'} />\n```\n\n### layout\nThe `layout` prop is used to specify which child components render and where. The prop takes an array of specific module names, the order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display.\n\nThere are also a few special module names - `C1`, `C2`, `C3`, `C4`, & `_` \n\nAll of the `Cx` modules represent Columns which also have their own layout array by default, and can be overwrote via their own layout props. IE - `C1` module can be overwrote via the `column1` prop. \n\nThe `_` module is used a seperator module to center|left|right justify the other elements in the layout.\n\navailable modules to use in the layout are \n\n`c1`, `c2`, `c3`, `c4`, `termsList`, `terms.history`, `terms.trending`, `terms.suggestions`, `facets`, `facetsHorizontal`, `button.see-more`, `content`, `_`, `banner.left`, `banner.banner`, `banner.footer`, `banner.header`\n\n\n```jsx\n<AutocompleteLayout controller={controller} input={'#searchInput'} layout={[['C1','C2','C3']]}/>\n```\n\n### column1\nThe `column1` prop specifies the layout to render in the `C1` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['termsList']`. All layout modules are available to use with the exception of the `Cx` modules. Additional arrays for new rows are also supported.\n\n```jsx\n<AutocompleteLayout controller={controller} input={'#searchInput'} column1={{\n    width: '150px',\n    layout: ['terms.history', 'terms.trending']\n}}/>\n```\n\n### column2\nThe `column2` prop specifies a layout array to render in the `C2` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['facets']`. All layout modules are available to use with the exception of the `Cx` modules. Additional arrays for new rows are also supported.\n\n```jsx\n<AutocompleteLayout controller={controller} input={'#searchInput'} column2={{\n    width: '150px',\n    layout: ['facets']\n}}/>\n```\n\n### column3\nThe `column3` prop specifies a layout array to render in the `C3` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `[['content'], ['_', 'button.see-more']]`. All layout modules are available to use with the exception of the `Cx` modules. Additional arrays for new rows are also supported.\n\n```jsx\n<AutocompleteLayout controller={controller} input={'#searchInput'} column3={{\n    width: '150px',\n    layout: [['content', ['_', 'button.see-more', '_']]]\n}}/>\n```\n\n### column4\nThe `column4` prop specifies a layout array to render in the `C4` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `[['content'], ['_', 'button.see-more']]`. All layout modules are available to use with the exception of the `Cx` modules. Additional arrays for new rows are also supported.\n\n```jsx\n<AutocompleteLayout controller={controller} input={'#searchInput'} column4={{\nwidth: '150px',\nlayout: ['facets']\n}}/>\n```\n\n### width\nThe `width` prop specifies a width for the overall component. The default value is '100%'.\n\n```jsx\n<AutocompleteLayout controller={controller} input={'#searchInput'} width=\"800px\" />\n```\n\n### excludeBanners\nThe `excludeBanners` prop specifies if the Autocomplete should automatically include banners. \n\n```jsx\n<AutocompleteLayout controller={controller} input={'#searchInput'} excludeBanners={true} />\n```\n\n### vertical\nThe `vertical` prop will alter autocomplete's CSS to display in a vertical layout.\n\n```jsx\n<AutocompleteLayout controller={controller} input={'#searchInput'} vertical={true} />\n```\n\n### facetsTitle\nThe `facetsTitle` prop will display the given text above the facets area.\n\n```jsx\n<AutocompleteLayout controller={controller} input={'#searchInput'} facetsTitle={'Facets'} />\n```\n\n### contentTitle\nThe `contentTitle` prop will display the given text above the content area.\n\n```jsx\n<AutocompleteLayout controller={controller} input={'#searchInput'} contentTitle={'Search Results'} />\n```\n\n### viewportMaxHeight\nThe `viewportMaxHeight` prop will restrict autocomplete from overflowing the viewport. The max height of autocomplete will always be visible in the viewport. \n\n```jsx\n<AutocompleteLayout controller={controller} input={'#searchInput'} viewportMaxHeight={true} />\n```\n",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					decorators: [
						(Story) =>
							(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
								style: { maxWidth: '960px', position: 'relative' },
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
							description: 'Autocomplete controller reference',
							type: { required: !0 },
							table: { type: { summary: 'Autocomplete controller object' } },
							control: { type: 'none' },
						},
						input: {
							description: 'input element reference',
							type: { required: !0 },
							table: { type: { summary: 'Element or String as CSS Selector' } },
							control: { type: 'none' },
						},
						layout: {
							description: 'array of modules to render in specified layout',
							table: {
								type: {
									summary:
										"['c1' | 'c2' | 'c3' | 'c4' | 'termsList' | 'terms.history' | 'terms.trending'| 'terms.suggestions'| 'facets' | 'facetsHorizontal' | 'button.see-more' | 'content' | '_' | 'banner.left' | 'banner.banner' | 'banner.footer' | 'banner.header']",
								},
								defaultValue: { summary: "[['c1','c2', 'c3']]" },
							},
							control: 'array',
						},
						column1: {
							description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c1" layout',
							table: {
								type: {
									summary:
										"{width: '150px', layout: ['termsList' | 'terms.history' | 'terms.trending'| 'terms.suggestions'| 'facets' | 'facetsHorizontal' | 'button.see-more' | 'content' | '_' | 'banner.left' | 'banner.banner' | 'banner.footer' | 'banner.header']}",
								},
								defaultValue: { summary: "{\n                    layout: ['termsList'],\n                    width: '150px'\n                }" },
							},
							control: 'array',
						},
						column2: {
							description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c2" layout',
							table: {
								type: {
									summary:
										"{width: '150px', layout: ['termsList' | 'terms.history' | 'terms.trending'| 'terms.suggestions'| 'facets' | 'facetsHorizontal' | 'button.see-more' | 'content' | '_' | 'banner.left' | 'banner.banner' | 'banner.footer' | 'banner.header']}",
								},
								defaultValue: { summary: "{\n                    layout: ['facets'],\n                    width: '150px'\n                }" },
							},
							control: 'array',
						},
						column3: {
							description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c3" layout',
							table: {
								type: {
									summary:
										"{width: '150px', layout: ['termsList' | 'terms.history' | 'terms.trending'| 'terms.suggestions'| 'facets' | 'facetsHorizontal' | 'button.see-more' | 'content' | '_' | 'banner.left' | 'banner.banner' | 'banner.footer' | 'banner.header']}",
								},
								defaultValue: {
									summary:
										"{\n                    layout: [['content'], ['_', 'button.see-more']],\n                    width: 'auto'\n                }",
								},
							},
							control: 'array',
						},
						column4: {
							description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c4" layout',
							table: {
								type: {
									summary:
										"{width: '150px', layout: ['termsList' | 'terms.history' | 'terms.trending'| 'terms.suggestions'| 'facets' | 'facetsHorizontal' | 'button.see-more' | 'content' | '_' | 'banner.left' | 'banner.banner' | 'banner.footer' | 'banner.header']}",
								},
							},
							control: 'array',
						},
						width: {
							defaultValue: '100%',
							description: 'Change width of the component',
							table: { type: { summary: 'string' }, defaultValue: { summary: '100%' } },
							control: { type: 'text' },
						},
						excludeBanners: {
							defaultValue: !1,
							description: 'automatically add merchandising banners',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						facetsTitle: {
							defaultValue: '',
							description: 'Change facets header title',
							table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
							control: { type: 'text' },
						},
						contentTitle: {
							defaultValue: '',
							description: 'Change content header title',
							table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
							control: { type: 'text' },
						},
						viewportMaxHeight: {
							defaultValue: !1,
							description: 'Autocomplete fully visible in viewport',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						...componentArgs.F,
					},
				},
				snapInstance = snapify.p.autocomplete({
					id: 'Autocomplete',
					selector: '#searchInput',
					globals: { siteId: '8uyt2m' },
					settings: { trending: { limit: 5 } },
				}),
				Default = (args, { loaded: { controller } }) => (
					setTimeout(() => {
						controller.bind();
					}),
					(0, emotion_react_jsx_runtime_browser_esm.Y)(AutocompleteLayout.h, { ...args, controller, input: controller?.config.selector })
				);
			Default.loaders = [async () => ({ controller: await snapInstance })];
			const Slim = (args, { loaded: { controller } }) => (
				setTimeout(() => {
					controller.bind();
				}),
				(0, emotion_react_jsx_runtime_browser_esm.Y)(AutocompleteLayout.h, { ...args, controller, input: controller?.config.selector })
			);
			(Slim.loaders = [async () => ({ controller: await snapInstance })]),
				(Slim.args = {
					layout: [['termsList'], ['content'], ['_', 'button.see-more', '_']],
					width: '400px',
					theme: { components: { results: { columns: 2, rows: 1 } } },
				}),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: {
							originalSource:
								'(args: AutocompleteLayoutProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: AutocompleteController;\n  };\n}) => {\n  // bind after input exists\n  setTimeout(() => {\n    controller.bind();\n  });\n  return <AutocompleteLayout {...args} controller={controller} input={controller?.config.selector} />;\n}',
							...Default.parameters?.docs?.source,
						},
					},
				}),
				(Slim.parameters = {
					...Slim.parameters,
					docs: {
						...Slim.parameters?.docs,
						source: {
							originalSource:
								'(args: AutocompleteLayoutProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: AutocompleteController;\n  };\n}) => {\n  // bind after input exists\n  setTimeout(() => {\n    controller.bind();\n  });\n  return <AutocompleteLayout {...args} controller={controller} input={controller?.config.selector} />;\n}',
							...Slim.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default', 'Slim'];
		},
	},
]);
