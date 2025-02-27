(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[9487],
	{
		'./components/src/components/Molecules/Slideout/Slideout.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => Slideout_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				Slideout = __webpack_require__('./components/src/components/Molecules/Slideout/Slideout.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts');
			const Slideout_stories = {
					title: 'Molecules/Slideout',
					component: Slideout.S,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# Slideout\n\nRenders a slideout with a background overlay. Typically used for a mobile menu slideout. \n\n## Sub-components\n- Overlay\n\n## Usage\n\n### buttonContent\nThe `buttonContent` prop accepts a string or JSX element to render a clickable button that toggles the slideout visibility. \n\nWhen using the `buttonContent` prop, render the component where you want the button to render. The slideout content position is fixed, therefore, the location of the component is only for the render location of the button itself. \n\n```jsx\n<Slideout buttonContent={'click me'}>\n\t<div>slideout content</div>\n</Slideout>\n```\n\n### children\nThe children provided to the component will be displayed within the slideout - the slideout content. When using a component here, it will be passed additional props (`active` and `toggleActive`) from the slideout component which can be used for referencing and toggling of the `active` state.\n\n```jsx\n<Slideout buttonContent={'click me'}>\n\t<span>slideout content (children)</span>\n</Slideout>\n```\n\n```jsx\nconst SlideoutContent = (props) => {\n\treturn (\n\t\t<div>\n\t\t\t<button onClick={() => props.toggleActive()}>close slideout</button>\n\t\t\t<div>the slideout is { props.active ? 'open' : 'closed' }</div>\n\t\t</div>\n\t)\n}\n\n<Slideout buttonContent={'click me'}>\n\t<SlideoutContent />\n</Slideout>\n```\n\n### width\nThe `width` prop is the width of the slideout.\n\n```jsx\n<Slideout width={'300px'}>\n\t<div>slideout content</div>\n</Slideout>\n```\n\n### displayAt\nThe `displayAt` prop specifies a CSS media query for when the component will render. By default, the component will always render. \n\n```jsx\n<Slideout displayAt={'(max-width: 600px)'}>\n\t<div>slideout content</div>\n</Slideout>\n```\n\n### transitionSpeed\nThe `transitionSpeed` prop changes the CSS transition speed animation for the slideout and overlay.\n\n```jsx\n<Slideout transitionSpeed={'0.5s'}>\n\t<div>slideout content</div>\n</Slideout>\n```\n\n\n### overlayColor\nThe `overlayColor` prop sets the overlay color.\n\n```jsx\n<Slideout overlayColor={'rgba(0,0,0,0.7)'}>\n\t<div>slideout content</div>\n</Slideout>\n```\n\n\n### slideDirection\nThe `slideDirection` prop sets the direction that the overlay slides in. Defaults to `left`. Available values are `left`, `right`, `top`, & `bottom`.\n\n```jsx\n<Slideout slideDirection={'right'}>\n\t<div>slideout content</div>\n</Slideout>\n```\n\n### noButtonWrapper\nThe `noButtonWrapper` prop prevents the button wrapper div with className of `ss__slideout__button` from rendering. This element normally wraps `buttonContent` and handles toggling the `active` state via an onClick handler. By utilizing this prop, toggling of the `active` state must instead happen within the component passed into `buttonContent`. The `buttonContent` component will be passed additional props (`active` and `toggleActive`) from the slideout component which can be used for referencing and toggling of the `active` state.\n\n```jsx\n\nconst ButtonComponent = (props) => {\n\treturn (\n\t\t<div onClick={() => props.toggleActive()}>\n\t\t\tButton to Toggle the Slideout\n\t\t</div>\n\t)\n}\n\n<Slideout buttonContent={<ButtonComponent/>} noButtonWrapper>\n\t<div>slideout content</div>\n</Slideout>\n```\n\n### active\nThe `active` prop is an optional way to specify the initial state of the slideout when rendered. It is recommended to let the component manage its own state internally by not using this prop.\n\n```jsx\n<Slideout active={true}>\n\t<div>Hello World</div>\n</Slideout>\n```",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					argTypes: {
						active: {
							description: 'Initial state of the slideout.',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						slideDirection: {
							defaultValue: 'left',
							description: 'Slideout slide direction',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'left' } },
							control: { type: 'text' },
						},
						width: {
							defaultValue: '300px',
							description: 'Slideout width',
							table: { type: { summary: 'string' }, defaultValue: { summary: '300px' } },
							control: { type: 'text' },
						},
						displayAt: {
							defaultValue: '',
							description: 'Media query for when to render this component',
							table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
							control: { type: 'text' },
						},
						buttonContent: {
							defaultValue: 'click me',
							description: 'Slideout button content (children), appended to buttonText',
							type: { required: !0 },
							table: { type: { summary: 'string, jsx' }, defaultValue: { summary: 'click me' } },
							control: { type: 'text' },
						},
						transitionSpeed: {
							defaultValue: '0.25s',
							description: 'Overlay opening/closing transition speed',
							table: { type: { summary: 'string' }, defaultValue: { summary: '0.25s' } },
							control: { type: 'text' },
						},
						overlayColor: {
							defaultValue: 'rgba(0,0,0,0.8)',
							description: 'Slideout overlay color',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'rgba(0,0,0,0.8)' } },
							control: { type: 'color' },
						},
						noButtonWrapper: {
							description: 'Prevent the wrapper element from rendering (this element has the onClick handler to toggle the state)',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						...componentArgs.F,
					},
				},
				Default = (args) =>
					(0, emotion_react_jsx_runtime_browser_esm.Y)(Slideout.S, {
						...args,
						children: (0, emotion_react_jsx_runtime_browser_esm.Y)('div', { children: 'props.children will be rendered here' }),
					});
			(Default.args = { active: !0 }),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: {
							originalSource:
								'(args: SlideoutProps) => <Slideout {...args}>\n        <div>props.children will be rendered here</div>\n    </Slideout>',
							...Default.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default'];
		},
		'./components/src/components/Atoms/Overlay/Overlay.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { h: () => Overlay });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),
				_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/hooks/useA11y.tsx');
			const defaultStyles = ({ transitionSpeed, color }) =>
				(0, _emotion_react__WEBPACK_IMPORTED_MODULE_1__.AH)({
					transition: `background ${transitionSpeed} ease 0s, left 0s ease ${transitionSpeed}`,
					position: 'fixed',
					zIndex: '10003',
					height: '100%',
					width: '100%',
					top: '0',
					left: '-100%',
					'&.ss__overlay--active': { transition: `background ${transitionSpeed} ease, left 0s ease`, background: color, left: '0' },
				});
			function Overlay(properties) {
				const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_2__.u)(),
					defaultProps = { color: 'rgba(0,0,0,0.8)', transitionSpeed: '0.25s', treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_3__.LU)() },
					props = (0, _utilities__WEBPACK_IMPORTED_MODULE_4__.v6)('overlay', globalTheme, defaultProps, properties),
					{ active, onClick, disableA11y, className } = props,
					styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.Z)(props, defaultStyles);
				return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_providers__WEBPACK_IMPORTED_MODULE_7__._, {
					children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)('div', {
						onClick: (e) => onClick && active && onClick(e),
						ref: (e) => (disableA11y ? null : (0, _hooks__WEBPACK_IMPORTED_MODULE_8__.i)(e)),
						className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('ss__overlay', { 'ss__overlay--active': active }, className),
						...styling,
					}),
				});
			}
		},
		'./components/src/components/Molecules/Slideout/Slideout.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { S: () => Slideout });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/utilities/cloneWithProps.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/hooks/useMediaQuery.tsx'),
				_Atoms_Overlay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Atoms/Overlay/Overlay.tsx');
			const defaultStyles = ({ slideDirection, transitionSpeed, width }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						display: 'block',
						position: 'fixed',
						transition: `${slideDirection || 'left'} ${transitionSpeed}`,
						left: 'left' == slideDirection ? `-${width}` : 'right' != slideDirection ? '0' : 'initial',
						right: 'right' == slideDirection ? `-${width}` : 'initial',
						bottom: 'bottom' == slideDirection ? '-100vh' : 'initial',
						top: 'top' == slideDirection ? '-100vh' : 'bottom' == slideDirection ? 'initial' : '0',
						height: '100%',
						zIndex: '10004',
						width: width?.endsWith('%') && parseInt(width.split('%')[0]) > 90 ? width : '90%',
						maxWidth: width,
						padding: '10px',
						background: '#fff',
						boxSizing: 'border-box',
						overflowY: 'auto',
						'&.ss__slideout--active': {
							left: 'left' == slideDirection || 'right' != slideDirection ? '0' : 'initial',
							right: 'right' == slideDirection ? '0' : 'initial',
							bottom: 'bottom' == slideDirection ? '0' : 'initial',
							top: 'top' == slideDirection ? '0' : 'bottom' == slideDirection ? 'initial' : '0',
						},
					}),
				Slideout = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						defaultProps = {
							active: !1,
							displayAt: '',
							slideDirection: 'left',
							width: '300px',
							overlayColor: 'rgba(0,0,0,0.8)',
							transitionSpeed: '0.25s',
							treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)(),
						},
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('slideout', globalTheme, defaultProps, properties),
						{ children, active, buttonContent, noButtonWrapper, displayAt, transitionSpeed, overlayColor, disableStyles, className, treePath } =
							props,
						subProps_overlay = {
							className: 'ss__slideout__overlay',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles, color: overlayColor, transitionSpeed }),
							theme: props?.theme,
							treePath,
						},
						[isActive, setActive] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(Boolean(active)),
						[renderContent, setRenderContent] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_1__.J0)(Boolean(active)),
						toggleActive = () => {
							isActive
								? setTimeout(() => {
										setRenderContent(!renderContent);
								  }, 250)
								: setRenderContent(!isActive),
								setActive(!isActive),
								(document.body.style.overflow = isActive ? 'hidden' : '');
						},
						isVisible = (0, _hooks__WEBPACK_IMPORTED_MODULE_9__.U)(displayAt, () => {
							document.body.style.overflow = '';
						});
					document.body.style.overflow = isVisible && isActive ? 'hidden' : '';
					const styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_10__.Z)(props, defaultStyles);
					return isVisible
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)(_providers__WEBPACK_IMPORTED_MODULE_12__._, {
								children: [
									buttonContent &&
										(noButtonWrapper
											? (0, _utilities__WEBPACK_IMPORTED_MODULE_13__.Y)(buttonContent, { toggleActive, active: isActive, treePath })
											: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('div', {
													className: 'ss__slideout__button',
													onClick: () => toggleActive(),
													children: (0, _utilities__WEBPACK_IMPORTED_MODULE_13__.Y)(buttonContent, { active: isActive, treePath }),
											  })),
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('div', {
										className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('ss__slideout', className, { 'ss__slideout--active': isActive }),
										...styling,
										children:
											renderContent && (0, _utilities__WEBPACK_IMPORTED_MODULE_13__.Y)(children, { toggleActive, active: isActive, treePath }),
									}),
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Overlay__WEBPACK_IMPORTED_MODULE_14__.h, {
										...subProps_overlay,
										active: isActive,
										onClick: toggleActive,
									}),
								],
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/hooks/useA11y.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { a: () => A11Y_ATTRIBUTE, i: () => useA11y });
			const KEYCODE_TAB = 9,
				KEYCODE_ESC = 27,
				A11Y_ATTRIBUTE = 'ss-a11y';
			function useA11y(elem, tabIndex, trapFocus, escCallback) {
				if (!document.querySelector('#ssA11yFocusStyle')) {
					const style = document.createElement('style');
					(style.type = 'text/css'),
						(style.id = 'ssA11yFocusStyle'),
						(style.innerHTML = `[${A11Y_ATTRIBUTE}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
						document.getElementsByTagName('head')[0].appendChild(style);
				}
				elem &&
					!elem.attributes?.[A11Y_ATTRIBUTE] &&
					(elem.setAttribute(A11Y_ATTRIBUTE, !0),
					elem.setAttribute('tabIndex', `${tabIndex || 0}`),
					elem.addEventListener('keydown', (event) => {
						('Space' !== event.code && 'Enter' !== event.code) || elem.click();
					}),
					trapFocus &&
						elem.addEventListener('keydown', function (e) {
							const focusableEls = elem.querySelectorAll(
									'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]'
								),
								firstFocusableEl = focusableEls[0],
								lastFocusableEl = focusableEls[focusableEls.length - 1];
							if (e.keyCode == KEYCODE_ESC) return elem.focus(), escCallback && escCallback(), void e.preventDefault();
							('Tab' !== e.key && e.keyCode !== KEYCODE_TAB) ||
								(e.shiftKey
									? document.activeElement === firstFocusableEl && (lastFocusableEl.focus(), e.preventDefault())
									: document.activeElement === lastFocusableEl && (firstFocusableEl.focus(), e.preventDefault()));
						}));
			}
		},
		'./components/src/hooks/useMediaQuery.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { U: () => useMediaQuery });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			function useMediaQuery(query, runOnCleanup) {
				if ('undefined' == typeof window || void 0 === window.matchMedia) return !1;
				const mediaQuery = window.matchMedia(query),
					[match, setMatch] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(!!mediaQuery.matches);
				return (
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
						const handler = () => setMatch(!!mediaQuery.matches);
						return (
							mediaQuery.addListener(handler),
							() => {
								runOnCleanup instanceof Function && runOnCleanup(), mediaQuery.removeListener(handler);
							}
						);
					}, []),
					match
				);
			}
		},
		'./components/src/utilities/cloneWithProps.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { Y: () => cloneWithProps });
			var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js');
			const cloneWithProps = (input, props) => {
				if (input)
					return 'function' == typeof input
						? input(props)
						: 'string' == typeof input || 'number' == typeof input || 'boolean' == typeof input
						? input
						: Array.isArray(input)
						? input.map((entry) => cloneWithProps(entry, props))
						: 'string' == typeof input?.type
						? input
						: (0, preact__WEBPACK_IMPORTED_MODULE_0__.Ob)(input, props, input.props?.children && cloneWithProps(input.props.children, props));
			};
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
		'./components/src/utilities/defined.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			function defined(properties) {
				const definedProps = {};
				return (
					Object.keys(properties).map((key) => {
						void 0 !== properties[key] && (definedProps[key] = properties[key]);
					}),
					definedProps
				);
			}
			__webpack_require__.d(__webpack_exports__, { s: () => defined });
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
	},
]);
