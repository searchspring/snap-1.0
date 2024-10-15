/*! For license information please see components-Atoms-BadgeRectangle-BadgeRectangle-stories.136af5c7.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[9440],
	{
		'./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => BadgeRectangle_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				BadgeRectangle = __webpack_require__('./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts');
			const BadgeRectangle_stories = {
					title: 'Atoms/BadgeRectangle',
					component: BadgeRectangle.Z,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# BadgeRectangle\n\nRenders a text badge in the shape of a rectangle. It is expected to be used with `CalloutBadge` and `OverlayBadge` components.\n\n## Usage\n\n### value\nThe required `value` prop specifies the badge text contents.\n\n```jsx\n<BadgeRectangle value={'30% Off'} />\n```\n\n### color\nThe `color` prop specifies the badge background color.\n\n```jsx\n<BadgeRectangle color={'rgba(255, 255, 255, 0.5)'} value={'30% Off'} />\n```\n\n### colorText\nThe `colorText` prop specifies the badge text color.\n\n```jsx\n<BadgeRectangle colorText={'#000000'} value={'30% Off'} />\n```\n\n\n### tag\nThe `tag` prop specifies the badge location tag and adds an identifying classname.\n\n```jsx\n<BadgeRectangle tag={'30-off-promo'} colorText={'#000000'} value={'30% Off'} />\n```\n",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					decorators: [
						(Story) =>
							(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
								style: { width: '200px', height: '200px', border: '2px dotted lightgrey' },
								children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Story, {}),
							}),
					],
					argTypes: {
						value: {
							description: 'Badge text contents',
							type: { required: !0 },
							table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
							control: { type: 'text' },
						},
						color: {
							description: 'Badge background color',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'rgba(58, 35, 173, 1)' } },
							control: { type: 'color' },
						},
						colorText: {
							description: 'Badge text color',
							table: { type: { summary: 'string' }, defaultValue: { summary: '#ffffff' } },
							control: { type: 'color' },
						},
						tag: { description: 'Badge location tag', table: { type: { summary: 'string' } }, control: { type: 'text' } },
						...componentArgs.F,
					},
				},
				Default = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(BadgeRectangle.Z, { ...args });
			(Default.args = { value: '30% Off', color: '#0000FF', colorText: '#FFFFFF' }),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: { originalSource: '(args: BadgeRectangleProps) => <BadgeRectangle {...args} />', ...Default.parameters?.docs?.source },
					},
				});
			const __namedExportsOrder = ['Default'];
		},
		'./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { Z: () => BadgeRectangle });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/cache.tsx');
			const CSS_BadgeRectangle = (props) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({
						display: 'inline-block',
						boxSizing: 'border-box',
						padding: '0.3em 0.9em',
						background: props.color,
						color: props.colorText,
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap',
						overflow: 'hidden',
						maxWidth: '100%',
					}),
				BadgeRectangle = (0, mobx_react__WEBPACK_IMPORTED_MODULE_3__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						props = {
							color: 'rgba(58, 35, 173, 1)',
							colorText: '#fff',
							...globalTheme?.components?.badgeRectangle,
							...properties,
							...properties.theme?.components?.badgeRectangle,
						},
						{ value, disableStyles, tag, className, style } = props,
						styling = { 'ss-name': props.name };
					return (
						disableStyles ? style && (styling.css = [style]) : (styling.css = [CSS_BadgeRectangle(props), style]),
						value
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_providers__WEBPACK_IMPORTED_MODULE_6__._, {
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('div', {
										...styling,
										className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__badge-rectangle', `ss__badge-rectangle--${tag}`, className),
										children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)('span', {
											className: 'ss__badge-rectangle__value',
											children: value,
										}),
									}),
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
					);
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
