(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[7861],
	{
		'./components/src/components/Molecules/Swatches/Swatches.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					Disabled: () => Disabled,
					GradientBackground: () => GradientBackground,
					Grid: () => Grid,
					Images: () => Images,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => Swatches_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				mobxreact_esm = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				Swatches = __webpack_require__('./components/src/components/Molecules/Swatches/Swatches.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts');
			const Swatches_stories = {
					title: 'Molecules/Swatches',
					component: Swatches.l,
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# Swatches\n\nRenders a swatch component.\n\n## Components Used\n- carousel\n- Swatches\n- image\n\n## Usage\n\n### options\nThe required `options` prop specifies an array of options to render. Each option requires a value, but can optionally provide label, background, backgroundImageUrl, and disabled properties. \nif no background or backgroundImageUrl provided, the value will be used as the css background color. \n\n```jsx\nconst options: SwatchOption = [\n        {\n            value: 'Rainbow',\n            label: 'Rainbow',\n            background: `linear-gradient(\n                90deg,\n                rgba(255, 0, 0, 1) 0%,\n                rgba(255, 154, 0, 1) 10%,\n                rgba(208, 222, 33, 1) 20%,\n                rgba(79, 220, 74, 1) 30%,\n                rgba(63, 218, 216, 1) 40%,\n                rgba(47, 201, 226, 1) 50%,\n                rgba(28, 127, 238, 1) 60%,\n                rgba(95, 21, 242, 1) 70%,\n                rgba(186, 12, 248, 1) 80%,\n                rgba(251, 7, 217, 1) 90%,\n                rgba(255, 0, 0, 1) 100%\n            )`,\n        },\n        {\n            value: 'red',\n            label: 'red',\n            backgroundImageUrl:\n                'https://htmlcolorcodes.com/assets/images/colors/dark-red-color-solid-background-1920x1080.png',\n        },\n\t\t{ value: 'Blue', label: 'Blue' },\n\t\t{ value: 'Green', label: 'Green' },\n\t\t{ value: 'Orange', label: 'Orange', disabled: true },\n\t\t{ value: 'Tan', label: 'Tan' },\n\t\t{ value: 'Pink', label: 'Pink'},\n\t\t{ value: 'Black', label: 'Black' },\n\t\t{ value: 'White', label: 'White'},\n\t],\n\n<Swatches options={options} />\n```\n\n### type\nThe optional `type` prop specifies if what the swatch options should be rendered as. Type options are `carousel` or `grid`, with `carousel` as default. When a type is set, you can optionally pass additional child props to be spread in to each sub component. \n\n```jsx\nconst carouselProps: Partial<CarouselProps> = {\n    loop: true,\n    nextButton: 'Next',\n    prevButton: \"Prev\"\n}\n\n<Swatches options={options} type={\"carousel\"} carousel={carouselProps}/>\n```\nor\n```jsx\nconst gridProps: Partial<GridProps> = {\n    rows: 1, \n    columns: 6,\n}\n\n<Swatches options={options} type={\"grid\"} grid={gridProps}/>\n```\n\n### hideLabels\nThe optional `hideLabels` prop specifies if option labels should be hidden. \n\n```jsx\n<Swatches options={options} hideLabels={true} />\n```\n\n### onSelect\nThe optional `onSelect` prop specifies callback function to be called on option click. \n\n```jsx\nconst onSelectFunc = (event, clickedOption) => {\n    console.log(event, clickedOption)\n}\n\n<Swatches options={options} onSelect={onSelectFunc} />\n```\n\n### titleText\nThe optional `titleText` prop specifies the text to be rendered in the Swatches title. \n\n```jsx\n<Swatches options={options} titleText={\"Swatches Title\"} />\n```\n\n### selected\nThe optional `selected` prop specifies the selected option if the selected state is handled outside of the component. \n\n```jsx\n\nconst selectedOption: SwatchOption = { value: 'Red', label: 'Red', disabled: false },\n\n<Swatches options={options} selected={selectedOption} />\n```\n\n\n### breakpoints\nAn object that modifies the responsive behavior of the swatches at various viewports. \n\nThe object key specified the viewport for when the parameters will be applied. \n\nDepending on the `type` prop passed, the default configuration contains the following properties, however **`any swatches props`**, can be specified. \n\n```typescript\n    const defaultCarouselBreakpoints = {\n\t\t0: {\n\t\t\tcarousel: {\n\t\t\t\tslidesPerView: 2,\n\t\t\t\tslidesPerGroup: 2,\n\t\t\t\tspaceBetween: 10,\n\t\t\t}\n\t\t},\n\t\t768: {\n\t\t\tcarousel: {\n\t\t\t\tslidesPerView: 3,\n\t\t\t\tslidesPerGroup: 3,\n\t\t\t\tspaceBetween: 10,\n\t\t\t}\n\t\t},\n\t\t1200: {\n\t\t\tcarousel: {\n\t\t\t\tslidesPerView: 4,\n\t\t\t\tslidesPerGroup: 4,\n\t\t\t\tspaceBetween: 10,\n\t\t\t}\n\t\t},\n\t};\n\n\tconst defaultGridBreakpoints = {\n\t\t0: {\n\t\t\tgrid: {\n\t\t\t\trows: 1, \n\t\t\t\tcolumns: 5,\n\t\t\t\toverflowButtonInGrid: true,\n\t\t\t\tdisableOverflowAction: true,\n\t\t\t}\n\t\t},\n\t};\n\n    const customBreakpoints = {\n        0: {\n            type={'carousel'}\n\t\t\tcarousel: {\n\t\t\t\tslidesPerView: 2,\n\t\t\t\tslidesPerGroup: 2,\n\t\t\t\tspaceBetween: 10,\n\t\t\t},\n            hideLabels: true,\n            \n\t\t},\n\t\t768: {\n            type={'carousel'}\n\t\t\tcarousel: {\n\t\t\t\tslidesPerView: 3,\n\t\t\t\tslidesPerGroup: 3,\n\t\t\t\tspaceBetween: 10,\n\t\t\t},\n            hideLabels: true,\n\t\t},\n\t\t1200: {\n            type={'grid'}\n\t\t\tgrid: {\n\t\t\t\trows: 1, \n\t\t\t\tcolumns: 5,\n\t\t\t\toverflowButtonInGrid: true,\n\t\t\t\tdisableOverflowAction: true,\n\t\t\t}\n\t\t},\n    }\n```\n\n```jsx\n<Swatches options={options} breakpoints={customBreakpoints} />\n```\n\n",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					decorators: [
						(Story) =>
							(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
								style: { maxWidth: '350px' },
								children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Story, {}),
							}),
					],
					argTypes: {
						onSelect: {
							description: 'option onSelect event handler',
							table: { type: { summary: 'function' } },
							control: { type: 'none' },
							action: 'onSelect',
						},
						options: {
							description: 'list of options to display',
							type: { required: !1 },
							table: { type: { summary: 'SwatchOption[]' } },
							control: { type: 'object' },
						},
						selected: {
							description: 'Current selected option',
							type: { required: !1 },
							table: { type: { summary: 'SwatchOption' } },
							control: { type: 'none' },
						},
						hideLabels: {
							description: 'enable/disable option labels',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
							control: { type: 'boolean' },
						},
						breakpoints: {
							defaultValue: void 0,
							description: 'Carousel breakpoints',
							table: { type: { summary: 'object' }, defaultValue: { summary: 'Breakpoint object' } },
							control: { type: 'object' },
						},
						type: {
							description: 'swatches type to render',
							table: { type: { summary: 'swatches type' }, defaultValue: { summary: 'carousel' } },
							control: { type: 'select', options: ['carousel', 'grid'] },
						},
						...componentArgs.F,
					},
				},
				ObservableSelection = (0, mobxreact_esm.PA)(({ args }) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Swatches.l, { ...args })),
				Default = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(ObservableSelection, { args }),
				Grid = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(ObservableSelection, { args }),
				Disabled = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(ObservableSelection, { args }),
				GradientBackground = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(ObservableSelection, { args }),
				Images = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(ObservableSelection, { args });
			(Default.args = {
				options: [
					{ value: 'Red', label: 'Red', disabled: !1 },
					{ value: 'Blue', label: 'Blue', disabled: !1 },
					{ value: 'Green', label: 'Green', disabled: !1 },
					{ value: 'Orange', label: 'Orange', disabled: !1 },
					{ value: 'Tan', label: 'Tan', disabled: !1 },
					{ value: 'Pink', label: 'Pink', disabled: !1 },
					{ value: 'Black', label: 'Black', disabled: !1 },
					{ value: 'White', label: 'White', disabled: !1 },
				],
			}),
				(Grid.args = {
					options: [
						{ value: 'Red', label: 'Red', disabled: !1 },
						{ value: 'Blue', label: 'Blue', disabled: !1 },
						{ value: 'Green', label: 'Green', disabled: !1 },
						{ value: 'Orange', label: 'Orange', disabled: !1 },
						{ value: 'Tan', label: 'Tan', disabled: !1 },
						{ value: 'Pink', label: 'Pink', disabled: !1 },
						{ value: 'Black', label: 'Black', disabled: !1 },
						{ value: 'White', label: 'White', disabled: !1 },
					],
					type: 'grid',
				}),
				(Disabled.args = {
					options: [
						{ value: 'Red', label: 'Red', disabled: !0 },
						{ value: 'Blue', label: 'Blue', disabled: !1 },
						{ value: 'Green', label: 'Green', disabled: !0 },
						{ value: 'Orange', label: 'Orange', disabled: !1 },
						{ value: 'Tan', label: 'Tan', disabled: !1 },
						{ value: 'Pink', label: 'Pink', disabled: !0 },
						{ value: 'Black', label: 'Black', disabled: !1 },
						{ value: 'White', label: 'White', disabled: !0 },
					],
					type: 'carousel',
				}),
				(GradientBackground.args = {
					options: [
						{
							value: 'Rainbow',
							label: 'Rainbow',
							disabled: !1,
							background:
								'linear-gradient(\n                90deg,\n                rgba(255, 0, 0, 1) 0%,\n                rgba(255, 154, 0, 1) 10%,\n                rgba(208, 222, 33, 1) 20%,\n                rgba(79, 220, 74, 1) 30%,\n                rgba(63, 218, 216, 1) 40%,\n                rgba(47, 201, 226, 1) 50%,\n                rgba(28, 127, 238, 1) 60%,\n                rgba(95, 21, 242, 1) 70%,\n                rgba(186, 12, 248, 1) 80%,\n                rgba(251, 7, 217, 1) 90%,\n                rgba(255, 0, 0, 1) 100%\n            )',
						},
						{ value: 'Red', label: 'Red', disabled: !0 },
						{ value: 'Blue', label: 'Blue', disabled: !1 },
						{ value: 'Green', label: 'Green', disabled: !0 },
						{ value: 'Orange', label: 'Orange', disabled: !1 },
						{ value: 'Tan', label: 'Tan', disabled: !1 },
					],
				}),
				(Images.args = {
					carousel: { slidesPerView: 3, spaceBetween: 10 },
					breakpoints: {},
					options: [
						{
							value: 'Faded Khaki',
							backgroundImageUrl:
								'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/25caa3be92e5680ba340a62dc99cac3f_1b83cffd-c611-42bf-b6d8-59a497fe2ec7.jpg?v=1706125264',
						},
						{
							value: 'Indigo',
							backgroundImageUrl:
								'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/4dae673375338093f817804c8da6305a_7de3d458-28f4-41d1-903a-b8916ef26dcb.jpg?v=1706125265https://cdn.shopify.com/s/files/1/0677/2424/7298/files/11136413-I_OK_x_Arvin_Gds_Wool_Boot_Socks_CBM_1_0e3b5702-49e2-4608-acb6-7c131891fc18_450x.jpg?v=1706124808',
						},
						{
							value: 'Mirage',
							backgroundImageUrl:
								'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/a853b69a38627e53209e0cb98c90d154_63b6fc1d-2fe5-4c54-bb86-09bd4f7b550b.jpg?v=1706125265',
						},
						{
							value: 'Toasted',
							backgroundImageUrl:
								'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/77f9701fc6979aadbedec33a68398aaa_cecd6b05-9aea-4db1-b4f1-ac245da74abb.jpg?v=1706125264',
						},
					],
				}),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: {
							originalSource: '(args: SwatchesProps) => {\n  return <ObservableSelection args={args} />;\n}',
							...Default.parameters?.docs?.source,
						},
					},
				}),
				(Grid.parameters = {
					...Grid.parameters,
					docs: {
						...Grid.parameters?.docs,
						source: {
							originalSource: '(args: SwatchesProps) => {\n  return <ObservableSelection args={args} />;\n}',
							...Grid.parameters?.docs?.source,
						},
					},
				}),
				(Disabled.parameters = {
					...Disabled.parameters,
					docs: {
						...Disabled.parameters?.docs,
						source: {
							originalSource: '(args: SwatchesProps) => {\n  return <ObservableSelection args={args} />;\n}',
							...Disabled.parameters?.docs?.source,
						},
					},
				}),
				(GradientBackground.parameters = {
					...GradientBackground.parameters,
					docs: {
						...GradientBackground.parameters?.docs,
						source: {
							originalSource: '(args: SwatchesProps) => {\n  return <ObservableSelection args={args} />;\n}',
							...GradientBackground.parameters?.docs?.source,
						},
					},
				}),
				(Images.parameters = {
					...Images.parameters,
					docs: {
						...Images.parameters?.docs,
						source: {
							originalSource: '(args: SwatchesProps) => {\n  return <ObservableSelection args={args} />;\n}',
							...Images.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default', 'Grid', 'Disabled', 'GradientBackground', 'Images'];
		},
		'./components/src/providers/cache.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { _: () => CacheProvider });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				);
			const emotionCache = (0, __webpack_require__('../../node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js').A)({
					key: 'ss',
					prepend: !0,
				}),
				CacheProvider = (props) =>
					(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_emotion_react__WEBPACK_IMPORTED_MODULE_2__.C, {
						value: props.cache || emotionCache,
						children: props.children,
					});
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
		'../../node_modules/deepmerge/dist/cjs.js': (module) => {
			'use strict';
			var isMergeableObject = function isMergeableObject(value) {
				return (
					(function isNonNullObject(value) {
						return !!value && 'object' == typeof value;
					})(value) &&
					!(function isSpecial(value) {
						var stringValue = Object.prototype.toString.call(value);
						return (
							'[object RegExp]' === stringValue ||
							'[object Date]' === stringValue ||
							(function isReactElement(value) {
								return value.$$typeof === REACT_ELEMENT_TYPE;
							})(value)
						);
					})(value)
				);
			};
			var REACT_ELEMENT_TYPE = 'function' == typeof Symbol && Symbol.for ? Symbol.for('react.element') : 60103;
			function cloneUnlessOtherwiseSpecified(value, options) {
				return !1 !== options.clone && options.isMergeableObject(value)
					? deepmerge(
							(function emptyTarget(val) {
								return Array.isArray(val) ? [] : {};
							})(value),
							value,
							options
					  )
					: value;
			}
			function defaultArrayMerge(target, source, options) {
				return target.concat(source).map(function (element) {
					return cloneUnlessOtherwiseSpecified(element, options);
				});
			}
			function getKeys(target) {
				return Object.keys(target).concat(
					(function getEnumerableOwnPropertySymbols(target) {
						return Object.getOwnPropertySymbols
							? Object.getOwnPropertySymbols(target).filter(function (symbol) {
									return Object.propertyIsEnumerable.call(target, symbol);
							  })
							: [];
					})(target)
				);
			}
			function propertyIsOnObject(object, property) {
				try {
					return property in object;
				} catch (_) {
					return !1;
				}
			}
			function mergeObject(target, source, options) {
				var destination = {};
				return (
					options.isMergeableObject(target) &&
						getKeys(target).forEach(function (key) {
							destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
						}),
					getKeys(source).forEach(function (key) {
						(function propertyIsUnsafe(target, key) {
							return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
						})(target, key) ||
							(propertyIsOnObject(target, key) && options.isMergeableObject(source[key])
								? (destination[key] = (function getMergeFunction(key, options) {
										if (!options.customMerge) return deepmerge;
										var customMerge = options.customMerge(key);
										return 'function' == typeof customMerge ? customMerge : deepmerge;
								  })(key, options)(target[key], source[key], options))
								: (destination[key] = cloneUnlessOtherwiseSpecified(source[key], options)));
					}),
					destination
				);
			}
			function deepmerge(target, source, options) {
				((options = options || {}).arrayMerge = options.arrayMerge || defaultArrayMerge),
					(options.isMergeableObject = options.isMergeableObject || isMergeableObject),
					(options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified);
				var sourceIsArray = Array.isArray(source);
				return sourceIsArray === Array.isArray(target)
					? sourceIsArray
						? options.arrayMerge(target, source, options)
						: mergeObject(target, source, options)
					: cloneUnlessOtherwiseSpecified(source, options);
			}
			deepmerge.all = function deepmergeAll(array, options) {
				if (!Array.isArray(array)) throw new Error('first argument should be an array');
				return array.reduce(function (prev, next) {
					return deepmerge(prev, next, options);
				}, {});
			};
			var deepmerge_1 = deepmerge;
			module.exports = deepmerge_1;
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
