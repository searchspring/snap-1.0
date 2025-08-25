'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[3715],
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
		'./components/src/components/Atoms/Merchandising/InlineBanner/InlineBanner.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { _: () => InlineBanner });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_hooks_useA11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/types.ts');
			const defaultStyles = ({ width }) =>
				(0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					width,
					'&.ss__inline-banner--grid': { flexDirection: 'column' },
					'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
					'& iframe': { maxWidth: '100%' },
				});
			function InlineBanner(properties) {
				const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_3__.u)(),
					globalTreePath = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.LU)(),
					defaultProps = { layout: _types__WEBPACK_IMPORTED_MODULE_5__.VT.grid, width: 'auto', treePath: globalTreePath },
					props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('inlineBanner', globalTheme, defaultProps, properties),
					{ banner, className, internalClassName, disableA11y, layout, onClick } = props,
					styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.Z)(props, defaultStyles);
				return banner && banner.value
					? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_providers__WEBPACK_IMPORTED_MODULE_9__._, {
							children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', {
								onClick: (e) => {
									onClick && onClick(e, banner);
								},
								role: 'article',
								ref: (e) => (disableA11y ? null : (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_10__.iy)(e)),
								className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
									'ss__inline-banner',
									`ss__inline-banner--${layout}`,
									className,
									internalClassName
								),
								...styling,
								dangerouslySetInnerHTML: { __html: banner.value },
							}),
					  })
					: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
			}
		},
		'./components/src/components/Organisms/Results/Results.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Grid: () => Grid,
					List: () => List,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => Results_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				Results = __webpack_require__('./components/src/components/Organisms/Results/Results.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				snapify = __webpack_require__('./components/src/utilities/snapify.ts'),
				types = __webpack_require__('./components/src/types.ts');
			const Results_stories = {
					title: 'Organisms/Results',
					component: Results.n,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# Results\n\nRenders a page of results utilizing `<Result />` components.\n\n## Sub-components\n- Result\n\n- InlineBanner\n\n- ResultTracker\n\n## Usage\n\n### controller\nThe `controller` prop specifies a reference to the search controller.\n\n```jsx\n<Results controller={controller.store.results} />\n```\n\n### results\nThe `results` prop specifies a reference to the results store array. If no results prop is passed in, the component will default to using the results in controller.store. \n\n```jsx\n<Results results={controller.store.results} />\n```\n\n### resultComponent\nThe `resultComponent` prop specifies a custom result component to render.\n\n```jsx\n\nconst CustomResult = ({\n\tcontroller \n\tresult\n\ttheme\n}) => {\n\treturn <div>{result.mappings.core?.name}</div>\n}\n\n<Results results={controller.store.results} controller={controller} resultComponent={CustomResult} />\n```\n\n### layout\nThe `layout` prop specifies if this result will be rendered in a `grid` or `list` layout.\n\n```jsx\n<Results results={controller.store.results} layout={'grid'} />\n```\n\n### columns\nThe `columns` prop specifies the number of columns to display in a grid layout.\n\n```jsx\n<Results results={controller.store.results} columns={4} />\n```\n\n### rows\nThe `rows` prop specifies the number of rows to display in a grid layout.\n\n```jsx\n<Results results={controller.store.results} rows={2} />\n```\n\n### gapSize\nThe `gapSize` prop specifies the gap size between each result within a grid layout.\n\n```jsx\n<Results results={controller.store.results} gapSize={'10px'} />\n```\n\n### breakpoints\nAn object that modifies the responsive behavior of the `<Result />` component.\n\nEach entry within the breakpoints object contains a numeric key of the viewport when the sub-object of props will take effect. Any props listed above can be specified. (ie. columns, rows, layout, gapSize)\n\nTypically used to adjust the layout and how many products are shown at any screen size. There is no limit to how many breakpoints settings you can pass in.\n\n\nDefault Results `breakpoints` object:\n\n```typescript\nconst breakpoints = {\n\t0: {\n\t\tcolumns: 1,\n\t},\n\t540: {\n\t\tcolumns: 2,\n\t},\n\t768: {\n\t\tcolumns: 3,\n\t},\n\t991: {\n\t\tcolumns: 4,\n\t},\n};\n```\n\n```jsx\n<Results results={controller.store.results} breakpoints={breakpoints} />\n```\n",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					decorators: [
						(Story) =>
							(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
								style: { maxWidth: '900px' },
								children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Story, {}),
							}),
					],
					argTypes: {
						results: {
							description: 'Results store reference',
							type: { required: !1 },
							table: { type: { summary: 'Results store object' } },
							control: { type: 'none' },
						},
						layout: {
							description: 'Results layout',
							table: { type: { summary: 'string' } },
							options: [types.VT.grid, types.VT.list],
							control: { type: 'select' },
						},
						columns: {
							defaultValue: 4,
							description: 'Number of columns in results grid',
							table: { type: { summary: 'number' }, defaultValue: { summary: 4 } },
							control: { type: 'number' },
						},
						rows: {
							description: 'Number of rows in results grid - adding this will put a hard limit on the results',
							table: { type: { summary: 'number' } },
							control: { type: 'number' },
						},
						gapSize: {
							defaultValue: '20px',
							description: 'Gap size between rows and columns',
							table: { type: { summary: 'string' }, defaultValue: { summary: '20px' } },
							control: { type: 'text' },
						},
						breakpoints: {
							defaultValue: { summary: 'Breakpoint object' },
							description: 'Breakpoints options object',
							table: { type: { summary: 'object' } },
							control: { type: 'none' },
						},
						resultComponent: { description: 'Slot for custom result component', table: { type: { summary: 'component' } } },
						controller: { description: 'Controller reference', table: { type: { summary: 'Controller' } }, control: { type: 'none' } },
						...componentArgs.F,
					},
				},
				snapInstance = snapify.p.search({ id: 'Results', globals: { siteId: '8uyt2m' } }),
				Grid = (args, { loaded: { controller } }) =>
					(0, emotion_react_jsx_runtime_browser_esm.Y)(Results.n, { ...args, controller, results: controller?.store?.results });
			Grid.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })];
			const List = (args, { loaded: { controller } }) =>
				(0, emotion_react_jsx_runtime_browser_esm.Y)(Results.n, { ...args, controller, results: controller?.store?.results, layout: types.VT.list });
			(List.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })]),
				(Grid.parameters = {
					...Grid.parameters,
					docs: {
						...Grid.parameters?.docs,
						source: {
							originalSource:
								'(args: ResultsProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => {\n  return <Results {...args} controller={controller} results={controller?.store?.results} />;\n}',
							...Grid.parameters?.docs?.source,
						},
					},
				}),
				(List.parameters = {
					...List.parameters,
					docs: {
						...List.parameters?.docs,
						source: {
							originalSource:
								'(args: ResultsProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => {\n  return <Results {...args} controller={controller} results={controller?.store?.results} layout={ResultsLayout.list} />;\n}',
							...List.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Grid', 'List'];
		},
		'./components/src/components/Organisms/Results/Results.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { n: () => Results });
			var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
					'../snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'
				),
				_Atoms_Merchandising_InlineBanner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
					'./components/src/components/Atoms/Merchandising/InlineBanner/InlineBanner.tsx'
				),
				_Molecules_Result__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/components/Molecules/Result/Result.tsx'),
				_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/types.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/providers/withTracking.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/providers/snap.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks_useDisplaySettings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/hooks/useDisplaySettings.tsx'),
				_Trackers_ResultTracker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
					'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'
				),
				_hooks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/hooks/useComponent.tsx');
			const defaultStyles = ({ gapSize, columns }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						display: 'flex',
						flexFlow: 'row wrap',
						gap: gapSize,
						gridTemplateRows: 'auto',
						gridTemplateColumns: `repeat(${columns}, 1fr)`,
						'& .ss__result, & .ss__result-layout': {
							boxSizing: 'border-box',
							flex: '0 1 auto',
							width: `calc(${100 / columns}% - (${columns - 1} * ${gapSize} / ${columns} ) )`,
							marginRight: gapSize,
							marginBottom: gapSize,
							[`&:nth-of-type(${columns}n)`]: { marginRight: '0' },
							[`&:nth-last-of-type(-n+${columns})`]: { marginBottom: '0' },
						},
						'@supports (display: grid)': { display: 'grid', '& .ss__result, & .ss__result-layout': { width: 'initial', flex: void 0, margin: 0 } },
					}),
				TrackedResultComponent = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.W)(_Molecules_Result__WEBPACK_IMPORTED_MODULE_6__.Q),
				Results = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_7__.u)(),
						globalTreePath = (0, _providers__WEBPACK_IMPORTED_MODULE_8__.LU)(),
						defaultBreakpointsProps = {
							0: { columns: properties.columns || 1 },
							540: { columns: properties.columns || 2 },
							768: { columns: properties.columns || 3 },
							991: { columns: properties.columns || 4 },
						},
						defaultProps = {
							results: properties.controller?.store?.results,
							columns: 4,
							gapSize: '20px',
							layout: _types__WEBPACK_IMPORTED_MODULE_9__.VT.grid,
							breakpoints: defaultBreakpointsProps,
							treePath: globalTreePath,
						};
					let props = (0, _utilities__WEBPACK_IMPORTED_MODULE_10__.v6)('results', globalTheme, defaultProps, properties);
					if (!properties.theme?.name) {
						const displaySettings = (0, _hooks_useDisplaySettings__WEBPACK_IMPORTED_MODULE_11__.X)(props?.breakpoints || {}),
							theme = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(props?.theme || {}, displaySettings?.theme || {}, {
								arrayMerge: (destinationArray, sourceArray) => sourceArray,
							});
						props = { ...props, ...displaySettings, theme };
					}
					const { disableStyles, className, internalClassName, layout, theme, controller, treePath } = props;
					let { resultComponent } = props;
					const subProps_result = {
							internalClassName: 'ss__results__result',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_12__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_inlineBanner = {
							internalClassName: 'ss__results__inline-banner',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_12__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						};
					let results = props.results;
					props?.columns && props?.rows && props.columns > 0 && props.rows > 0 && (results = props.results?.slice(0, props.columns * props.rows));
					const styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_13__.Z)(
						{ ...props, columns: layout == _types__WEBPACK_IMPORTED_MODULE_9__.VT.list ? 1 : props.columns },
						defaultStyles
					);
					if ('string' == typeof resultComponent) {
						const snap = (0, _providers__WEBPACK_IMPORTED_MODULE_14__.uk)();
						if (
							snap?.templates?.library.import.component.result &&
							((resultComponent = (0, _hooks__WEBPACK_IMPORTED_MODULE_15__.x)(snap?.templates?.library.import.component.result, resultComponent)),
							!resultComponent)
						)
							return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
					}
					return results?.length
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Y)(_providers__WEBPACK_IMPORTED_MODULE_17__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Y)('div', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
										'ss__results',
										`ss__results-${props.layout}`,
										className,
										internalClassName
									),
									children: results.map((result) =>
										(() => {
											if (result.type === _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_18__.c.BANNER)
												return (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.n)(_Atoms_Merchandising_InlineBanner__WEBPACK_IMPORTED_MODULE_19__._, {
													...subProps_inlineBanner,
													key: result.id,
													banner: result,
													layout: props.layout,
												});
											if (resultComponent && controller) {
												const ResultComponent = resultComponent;
												return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Y)(
													_Trackers_ResultTracker__WEBPACK_IMPORTED_MODULE_20__.o,
													{
														result,
														controller,
														children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Y)(
															ResultComponent,
															{ controller, result, theme, treePath },
															result.id
														),
													}
												);
											}
											return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Y)(
												TrackedResultComponent,
												{ ...subProps_result, result, layout: props.layout, controller },
												result.id
											);
										})()
									),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { o: () => ResultTracker });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/createImpressionObserver.ts');
			const CSS_ResultTracker = () => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_1__.AH)({}),
				ResultTracker = (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_3__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_4__.v6)('resultTracker', globalTheme, {}, properties),
						{ children, result, track, controller, className, internalClassName, disableStyles, style } = props,
						mergedTrack = { render: !0, impression: !0, click: !0, ...track },
						{ ref, inViewport } = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.Q)();
					inViewport && mergedTrack.impression && 'product' === result.type && controller?.track.product.impression(result);
					const styling = {};
					return (
						disableStyles ? style && (styling.css = [style]) : (styling.css = [CSS_ResultTracker(), style]),
						(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)('div', {
							className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
								'ss__result-tracker',
								`ss__${controller?.type}-result-tracker`,
								className,
								internalClassName
							),
							onClick: (e) => {
								'product' === result.type && mergedTrack.click && controller?.track.product.click(e, result);
							},
							ref,
							...styling,
							children,
						})
					);
				});
		},
		'./components/src/hooks/useDeepCompareEffect.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { I: () => useDeepCompareEffect, r: () => useDeepCompareMemoize });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				dequal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/dequal/dist/index.mjs');
			function useDeepCompareMemoize(value) {
				const ref = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(value),
					signalRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(0);
				return (
					(0, dequal__WEBPACK_IMPORTED_MODULE_1__.j)(value, ref.current) || ((ref.current = value), (signalRef.current += 1)),
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.Kr)(() => ref.current, [signalRef.current])
				);
			}
			function useDeepCompareEffect(callback, dependencies) {
				return (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(callback, [useDeepCompareMemoize(dependencies)]);
			}
		},
		'./components/src/hooks/useDisplaySettings.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { Q: () => getDisplaySettings, X: () => useDisplaySettings });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../snap-toolbox/dist/esm/debounce/debounce.js'),
				_useDeepCompareEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./components/src/hooks/useDeepCompareEffect.tsx');
			function useDisplaySettings(breakpointsObj) {
				if (!breakpointsObj || !Object.keys(breakpointsObj).length) return;
				const [displaySettings, setDisplaySettings] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(getDisplaySettings(breakpointsObj));
				let debouncedHandleResize;
				const resetResizeListener = () => {
					(debouncedHandleResize = (0, _searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_1__.s)(() => {
						!(function handleResize() {
							setDisplaySettings(getDisplaySettings(breakpointsObj));
						})();
					}, 50)),
						window.addEventListener('resize', debouncedHandleResize);
				};
				return (
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(
						() => (resetResizeListener(), () => window.removeEventListener('resize', debouncedHandleResize)),
						[]
					),
					(0, _useDeepCompareEffect__WEBPACK_IMPORTED_MODULE_2__.I)(() => {
						setDisplaySettings(getDisplaySettings(breakpointsObj)), resetResizeListener();
					}, [breakpointsObj]),
					displaySettings
				);
			}
			const getDisplaySettings = (breakpoints) => {
				let breakpointsSettings;
				const currentScreenWidth = window.innerWidth,
					sortedList = Object.keys(breakpoints)
						.map((str) => +str)
						.sort((a, b) => a - b)
						.map((vp) => ({ [vp]: breakpoints[vp] }));
				if (sortedList.length) {
					for (let i = 0; i < sortedList.length; i++) {
						const entry = sortedList[i],
							breakpoint = parseInt(Object.keys(entry)[0]);
						if (i + 1 === sortedList.length || (0 === i && currentScreenWidth < breakpoint)) {
							breakpointsSettings = sortedList[i][breakpoint];
							break;
						}
						{
							const nextBreakpoint = parseInt(Object.keys(sortedList[i + 1])[0]);
							if (currentScreenWidth >= breakpoint && currentScreenWidth < nextBreakpoint) {
								breakpointsSettings = sortedList[i][breakpoint];
								break;
							}
						}
					}
					return breakpointsSettings;
				}
				return breakpointsSettings;
			};
		},
		'./components/src/hooks/useIntersectionAdvanced.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { v: () => useIntersectionAdvanced });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			const useIntersectionAdvanced = (ref, options = {}) => {
				const { rootMargin = '0px', fireOnce = !1, threshold = 0, minVisibleTime = 0, resetKey } = options,
					[isIntersecting, setIntersecting] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(!1),
					visibleTimerRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(null),
					visibleStartRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(null),
					lastResetKeyRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(resetKey);
				return (
					resetKey !== lastResetKeyRef.current &&
						(setIntersecting(!1),
						visibleTimerRef.current && (window.clearTimeout(visibleTimerRef.current), (visibleTimerRef.current = null)),
						(visibleStartRef.current = null),
						(lastResetKeyRef.current = resetKey)),
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
						if ((setIntersecting(!1), !window.IntersectionObserver || !ref.current)) return;
						let observer = null;
						return (
							(observer = new IntersectionObserver(
								([entry]) => {
									entry.isIntersecting
										? minVisibleTime > 0
											? ((visibleStartRef.current = Date.now()),
											  visibleTimerRef.current && window.clearTimeout(visibleTimerRef.current),
											  (visibleTimerRef.current = window.setTimeout(() => {
													setIntersecting(!0), fireOnce && ref.current && observer && observer.unobserve(ref.current);
											  }, minVisibleTime)))
											: (setIntersecting(!0), fireOnce && ref.current && observer && observer.unobserve(ref.current))
										: (visibleTimerRef.current && window.clearTimeout(visibleTimerRef.current),
										  (visibleTimerRef.current = null),
										  (visibleStartRef.current = null),
										  setIntersecting(!1));
								},
								{ rootMargin, threshold }
							)),
							ref.current && observer.observe(ref.current),
							() => {
								setIntersecting(!1),
									visibleTimerRef.current && window.clearTimeout(visibleTimerRef.current),
									observer && ref.current && observer.unobserve(ref.current);
							}
						);
					}, [ref, resetKey]),
					isIntersecting
				);
			};
		},
		'./components/src/providers/withTracking.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { W: () => withTracking });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./components/src/utilities/createImpressionObserver.ts'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			function withTracking(WrappedComponent) {
				return (props) => {
					const { controller, result, ...restProps } = props;
					let resetKey;
					if (
						(controller || console.warn('Warning: No controller provided to withTracking'),
						result || console.warn('Warning: No result provided to withTracking'),
						'search' === controller?.type || 'autocomplete' === controller?.type)
					) {
						const urlManager = controller.urlManager;
						resetKey = JSON.stringify({
							q: urlManager.state.query,
							p: urlManager.state.page,
							ps: urlManager.state.pageSize,
							s: urlManager.state.sort,
							f: urlManager.state.filter,
						});
					} else if ('recommendation' === controller?.type) {
						const recStore = controller.store;
						resetKey = JSON.stringify({ tag: recStore.profile?.tag, ids: recStore.results.map((result) => result.id).join(',') });
					}
					const { ref, inViewport } = (0, _utilities__WEBPACK_IMPORTED_MODULE_1__.Q)({ resetKey });
					inViewport && 'product' === result?.type && controller?.track.product.impression(result);
					const currentRef = ref.current;
					if (currentRef) {
						const handleClick = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.hb)((e) => {
							controller?.track.product.click(e, result);
						}, []);
						currentRef.setAttribute('sstracking', 'true'),
							currentRef.removeEventListener('click', handleClick),
							currentRef.addEventListener('click', handleClick);
					}
					const trackingProps = { ...restProps, controller, result, trackingRef: ref };
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(WrappedComponent, { ...trackingProps });
				};
			}
		},
		'./components/src/utilities/createImpressionObserver.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { Q: () => createImpressionObserver });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./components/src/hooks/useIntersectionAdvanced.tsx');
			const IMPRESSION_VISIBILITY_THRESHOLD = 0.7,
				IMPRESSION_MIN_VISIBLE_TIME = 1e3;
			function createImpressionObserver(options) {
				const ref = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(null);
				return {
					ref,
					inViewport: (0, _hooks__WEBPACK_IMPORTED_MODULE_1__.v)(ref, {
						...options,
						fireOnce: !0,
						threshold: IMPRESSION_VISIBILITY_THRESHOLD,
						minVisibleTime: IMPRESSION_MIN_VISIBLE_TIME,
					}),
				};
			}
		},
	},
]);
