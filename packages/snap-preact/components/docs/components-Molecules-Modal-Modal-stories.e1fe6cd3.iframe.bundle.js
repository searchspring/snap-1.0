(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[495],
	{
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
					{ active, onClick, disableA11y, className, internalClassName } = props,
					styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.Z)(props, defaultStyles);
				return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_providers__WEBPACK_IMPORTED_MODULE_7__._, {
					children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)('div', {
						onClick: (e) => onClick && active && onClick(e),
						ref: (e) => (disableA11y ? null : (0, _hooks__WEBPACK_IMPORTED_MODULE_8__.iy)(e, active ? 0 : -1)),
						className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
							'ss__overlay',
							{ 'ss__overlay--active': active },
							className,
							internalClassName
						),
						...styling,
					}),
				});
			}
		},
		'./components/src/components/Molecules/Modal/Modal.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					ExternalState: () => ExternalState,
					JSXContent: () => JSXContent,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => Modal_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				Modal = __webpack_require__('./components/src/components/Molecules/Modal/Modal.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts');
			const Modal_stories = {
					title: 'Molecules/Modal',
					component: Modal.a,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# Modal\n\nRenders a button and a modal. Clicking the button toggles modal visibility. By default any clicks outside of the modal will hide the content.\n\n## Sub-components\n- Overlay\n\n## Usage\n\n### content\nThe `content` prop specifies the modal contents. This can be a string or a JSX element. The Modal component also passes the current open state to the JSX component under the prop showContent: boolean. \n\n```jsx\n<Modal content={\"Hello World!\"} />\n```\n \nOr alternatively as children:\n\n```jsx\n<Modal>Hello World!</Modal>\n```\n\n### button\nThe `button` prop specifies the Modal trigger button. This button toggles the visibility of the modal when clicked. This can be a string or a JSX element.\n\n```jsx\n<Modal button={'click me!'}>Hello World!</Modal>\n```\n\nor alternatively you can use the `buttonSelector` prop \n\n### buttonSelector\nThe `buttonSelector` prop allows you to define a selector that identifies an element to listen for click events, which will trigger the modal to open.\n\n```jsx\n<Modal buttonSelector={'#someExistingButton'}>Hello World!</Modal>\n```\n\n### open\nThe `open` prop sets the modal visibility state. \n\nIf specified, external state management is expected. Otherwise if not specified, the component will use its own internal state to toggle the visibility.\n\n```jsx\n<Modal open={true}>Hello World!</Modal>\n```\n\n### startOpen\nThe `startOpen` prop sets the modal initial internal state. Cannot be used with the `open` prop.\n\n```jsx\n<Modal startOpen>Hello World!</Modal>\n```\n\n### overlayColor\nThe `overlayColor` prop specifies the color of the overlay.\n\n```jsx\n<Modal overlayColor={'rgba(0,0,0,0.8)'} />\n```\n\n### onOverlayClick\nThe `onOverlayClick` prop specifies the a function to call on clicking of the overlay.\n\n```jsx\n<Modal onOverlayClick={clickfunc} />\n```\n\n### lockScroll\nThe `lockScroll` prop will lock the scroll on the body of the page while the modal is open. \n\n```jsx\n<Modal lockScroll={true}>Hello World!</Modal>\n```\n\n### disabled\nThe `disabled` prop will disable the button from toggling the visibility of the modal content, as well as preventing the `onClick` callback from being invoked.\n\n```jsx\n<Modal disabled>Hello World!</Modal>\n```\n\n### disableA11y\nThe `disableA11y` prop specifies a boolean to disable the autoset ally properties.\n\n```jsx\n<Modal disableA11y>Hello World!</Modal>\n```\n\n\n### disableClickOutside\nThe `disableClickOutside` prop by default is `false`. Setting this to `true` will not close the modal if a click event was registered outside the modal content.\n\n```jsx\n<Modal disableClickOutside>Hello World!</Modal>\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when the modal button is clicked.\n\n```jsx\n<Modal onClick={(e)=>{console.log(e)}} >Hello World!</Modal>\n```\n",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					argTypes: {
						button: { description: 'Button content to toggle the modal', table: { type: { summary: 'string, JSX' } }, control: { type: 'text' } },
						buttonSelector: {
							description: 'Button selector to toggle the modal',
							table: { type: { summary: 'string, JSX' } },
							control: { type: 'text' },
						},
						overlayColor: {
							defaultValue: 'rgba(0,0,0,0.8)',
							description: 'Modal overlay color',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'rgba(0,0,0,0.0)' } },
							control: { type: 'color' },
						},
						onOverlayClick: {
							description: 'Function to call when the overlay is clicked',
							table: { type: { summary: 'function(e: Event)' } },
							control: { type: 'none' },
							action: 'onOverlayClick',
						},
						content: { description: 'Content to be displayed in modal', table: { type: { summary: 'string, JSX' } }, control: { type: 'text' } },
						children: { description: 'Content to be displayed in modal', table: { type: { summary: 'string, JSX' } }, control: { type: 'text' } },
						disabled: {
							description: 'Disable modal - prevents all click events',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						lockScroll: {
							description: 'Lock the Scroll on the body when the modal is open',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
							control: { type: 'boolean' },
						},
						open: {
							description: 'Pass a value here to control the state externally',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: 'undefined' } },
							control: { type: 'boolean' },
						},
						startOpen: {
							description: 'modal state is open on initial render - used with internal state only',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						disableClickOutside: {
							description: 'Ignore clicks outside of element',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						onClick: {
							description: 'modal click event handler',
							table: { type: { summary: 'function(e: Event)' } },
							control: { type: 'none' },
							action: 'onClick',
						},
						disableA11y: {
							description: 'boolean to disable autoset ally properties',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						...componentArgs.F,
					},
				},
				Default = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Modal.a, { ...args });
			Default.args = { button: 'button text', content: 'content text' };
			const ExternalState = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Modal.a, { ...args });
			ExternalState.args = { button: 'button text', content: 'content text', open: !0 };
			const JSXContent = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Modal.a, { ...args });
			(JSXContent.args = {
				button: 'button text',
				content: (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
					children: 'jsx content - (note this component receieved the open state as a prop)',
				}),
			}),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: { originalSource: '(args: ModalProps) => <Modal {...args} />', ...Default.parameters?.docs?.source },
					},
				}),
				(ExternalState.parameters = {
					...ExternalState.parameters,
					docs: {
						...ExternalState.parameters?.docs,
						source: { originalSource: '(args: ModalProps) => <Modal {...args} />', ...ExternalState.parameters?.docs?.source },
					},
				}),
				(JSXContent.parameters = {
					...JSXContent.parameters,
					docs: {
						...JSXContent.parameters?.docs,
						source: { originalSource: '(args: ModalProps) => <Modal {...args} />', ...JSXContent.parameters?.docs?.source },
					},
				});
			const __namedExportsOrder = ['Default', 'ExternalState', 'JSXContent'];
		},
		'./components/src/components/Molecules/Modal/Modal.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { a: () => Modal });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/hooks/useClickOutside.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/utilities/cloneWithProps.tsx'),
				_hooks_useA11y__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_Atoms_Overlay__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/components/Atoms/Overlay/Overlay.tsx'),
				_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('../snap-toolbox/dist/esm/debounce/debounce.js');
			const defaultStyles = () =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({
						position: 'relative',
						'&.ss__modal--open': { '& .ss__modal__content': { visibility: 'visible', opacity: 1 } },
						'&.ss__modal--disabled': { '& .ss__modal__button': { cursor: 'initial' } },
						'.ss__modal__button': { cursor: 'pointer' },
						'.ss__modal__content': {
							backgroundColor: '#fff',
							position: 'absolute',
							minWidth: '100%',
							visibility: 'hidden',
							opacity: 0,
							top: 'auto',
							left: 0,
							zIndex: 10004,
						},
					}),
				Modal = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						defaultProps = {
							startOpen: !1,
							disableA11y: !1,
							lockScroll: !0,
							overlayColor: 'rgba(0,0,0,0.8)',
							treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_5__.LU)(),
						},
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('modal', globalTheme, defaultProps, properties),
						{
							button,
							content,
							buttonSelector,
							children,
							disabled,
							open,
							onClick,
							lockScroll,
							startOpen,
							disableClickOutside,
							disableA11y,
							className,
							internalClassName,
							disableStyles,
							overlayColor,
							onOverlayClick,
							treePath,
						} = props,
						subProps_overlay = {
							internalClassName: 'ss__modal__overlay',
							onClick: (e) => {
								onOverlayClick && onOverlayClick(e), toggleShowContent();
							},
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles, color: overlayColor }),
							theme: props?.theme,
							treePath,
						};
					let showContent, setShowContent;
					const stateful = void 0 === open;
					let innerRef;
					stateful ? ([showContent, setShowContent] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(startOpen)) : (showContent = open),
						disableClickOutside ||
							(innerRef = (0, _hooks__WEBPACK_IMPORTED_MODULE_8__.L)(() => {
								showContent && (disabled || (stateful && setShowContent && setShowContent(!1)));
							}));
					const toggleShowContent = () => {
							stateful && setShowContent && setShowContent((prev) => !prev);
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)(props, defaultStyles);
					return (
						(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(
							() => (
								(document.body.style.overflow = showContent && lockScroll ? 'hidden' : ''),
								() => {
									document.body.style.overflow = '';
								}
							),
							[showContent, lockScroll]
						),
						(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
							const existingButton = buttonSelector
									? 'string' == typeof buttonSelector
										? document.querySelector(buttonSelector)
										: buttonSelector
									: null,
								debouncedHandleResize = (0, _searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_10__.s)(() => {
									setTimeout(() => {
										document.body.style.overflow = showContent && lockScroll ? 'hidden' : '';
									}, 100);
								}, 10),
								clickListener = (e) => {
									toggleShowContent(), onClick && onClick(e);
								};
							return (
								existingButton && (disabled || existingButton.addEventListener('click', clickListener)),
								window.addEventListener('resize', debouncedHandleResize),
								() => {
									window.removeEventListener('resize', debouncedHandleResize),
										existingButton && existingButton.removeEventListener('click', clickListener);
								}
							);
						}, []),
						(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_providers__WEBPACK_IMPORTED_MODULE_12__._, {
							children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('div', {
								...styling,
								className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
									'ss__modal',
									{ 'ss__modal--open': showContent },
									{ 'ss__modal--disabled': disabled },
									className,
									internalClassName
								),
								ref: innerRef,
								children: [
									!buttonSelector &&
										button &&
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('div', {
											className: 'ss__modal__button',
											ref: (e) => (disableA11y ? null : (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_13__.iy)(e)),
											'aria-expanded': showContent,
											role: 'button',
											onClick: (e) => {
												disabled || (toggleShowContent(), onClick && onClick(e));
											},
											children: (0, _utilities__WEBPACK_IMPORTED_MODULE_14__.Y)(button, {
												open: showContent,
												toggleOpen: toggleShowContent,
												treePath,
											}),
										}),
									(content || children) &&
										showContent &&
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('div', {
											className: 'ss__modal__content',
											ref: (e) => (disableA11y ? null : (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_13__.iy)(e)),
											children: [
												(0, _utilities__WEBPACK_IMPORTED_MODULE_14__.Y)(content, { open: showContent, toggleOpen: toggleShowContent, treePath }),
												(0, _utilities__WEBPACK_IMPORTED_MODULE_14__.Y)(children, { open: showContent, toggleOpen: toggleShowContent, treePath }),
											],
										}),
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Overlay__WEBPACK_IMPORTED_MODULE_15__.h, {
										...subProps_overlay,
										active: Boolean(showContent),
									}),
								],
							}),
						})
					);
				});
		},
		'./components/src/hooks/useA11y.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { DH: () => FOCUSABLE_ELEMENTS, aZ: () => A11Y_ATTRIBUTE, iy: () => useA11y });
			const KEYCODE_TAB = 9,
				KEYCODE_ESC = 27,
				A11Y_ATTRIBUTE = 'ss-a11y',
				FOCUSABLE_ELEMENTS =
					'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
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
							const focusableEls = elem.querySelectorAll(FOCUSABLE_ELEMENTS),
								firstFocusableEl = focusableEls[0],
								lastFocusableEl = focusableEls[focusableEls.length - 1];
							if (e.keyCode == KEYCODE_ESC) return elem.focus(), escCallback && escCallback(e), e.preventDefault(), void e.stopPropagation();
							('Tab' !== e.key && e.keyCode !== KEYCODE_TAB) ||
								(e.shiftKey
									? document.activeElement === firstFocusableEl && (lastFocusableEl.focus(), e.preventDefault())
									: document.activeElement === lastFocusableEl && (firstFocusableEl.focus(), e.preventDefault()));
						}));
			}
		},
		'./components/src/hooks/useClickOutside.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { L: () => useClickOutside });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			function useClickOutside(callback) {
				const callbackRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)(),
					innerRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)();
				return (
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
						callbackRef.current = callback;
					}),
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
						return document.addEventListener('click', handleClick), () => document.removeEventListener('click', handleClick);
						function handleClick(e) {
							innerRef.current && callbackRef.current && !innerRef.current.contains(e.target) && callbackRef.current(e);
						}
					}, []),
					innerRef
				);
			}
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
	},
]);
