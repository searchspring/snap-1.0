(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[4578],
	{
		'./components/src/components/Atoms/Dropdown/Dropdown.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					ExternalState: () => ExternalState,
					JSXChildren: () => JSXChildren,
					JSXContent: () => JSXContent,
					StringChildren: () => StringChildren,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => Dropdown_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				Dropdown = __webpack_require__('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts');
			const Dropdown_stories = {
					title: 'Atoms/Dropdown',
					component: Dropdown.m,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												'# Dropdown\n\nRenders a button and content. Clicking the button toggles content visibility. Typically used as an alternative to a `<select>` dropdown or to collapse content. By default any clicks outside of the element will hide the content.\n\n## Usage\n\n### content\nThe `content` prop specifies the dropdown contents. This can be a string or a JSX element. The Dropdown component also passes the current open state to the JSX component under the prop showContent: boolean. \n\n```jsx\n<Dropdown content={"Hello World!"} />\n```\n \nOr alternatively as children:\n\n```jsx\n<Dropdown>Hello World!</Dropdown>\n```\n\nNote you can only render either the content, or the children, if both are passed in, it will default to the content prop. \n\n\n### button\nThe `button` prop specifies the dropdown button. This button toggles the visibility of the content when clicked. This can be a string or a JSX element.\n\n```jsx\n<Dropdown button={\'click me!\'}>Hello World!</Dropdown>\n```\n\n### open\nThe `open` prop sets the dropdown visibility state. \n\nIf specified, external state management is expected. Otherwise if not specified, the component will use its own internal state to toggle the visibility.\n\n```jsx\n<Dropdown open={true}>Hello World!</Dropdown>\n```\n\n### startOpen\nThe `startOpen` prop sets the dropdown initial internal state. Cannot be used with the `open` prop.\n\n```jsx\n<Dropdown startOpen>Hello World!</Dropdown>\n```\n\n### disabled\nThe `disabled` prop will disable the button from toggling the visibility of the dropdown content, as well as preventing the `onClick` callback from being invoked.\n\n```jsx\n<Dropdown disabled>Hello World!</Dropdown>\n```\n\n### disableA11y\nThe `disableA11y` prop specifies a boolean to disable the autoset ally properties.\n\n```jsx\n<Dropdown disableA11y>Hello World!</Dropdown>\n```\n\n### disableOverlay\nThe `disableOverlay` prop will disable the dropdown contents from being rendered as an overlay. If set to `true`, dropdown contents will instead be rendered as a block and affect the height of its parent element. Typically used if Dropdown is intended to act as a header (ie. Facet)\n\n```jsx\n<Dropdown disableOverlay>Hello World!</Dropdown>\n```\n\n### disableClickOutside\nThe `disableClickOutside` prop by default is `false`. Setting this to `true` will not close the dropdown if a click event was registered outside the dropdown content.\n\n```jsx\n<Dropdown disableClickOutside>Hello World!</Dropdown>\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when the dropdown button is clicked.\n\n```jsx\n<Dropdown onClick={(e)=>{console.log(e)}} >Hello World!</Dropdown>\n```\n\n#### onToggle\nThe `onToggle` prop allows for a custom callback function for when the dropdown visibility is toggled. This only applies if using internal state. Cannot be used with the `open` prop.\n\n```jsx\n<Dropdown onToggle={(e)=>{console.log(e)}} >Hello World!</Dropdown>\n```\n',
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					argTypes: {
						button: {
							description: 'Button content to toggle the dropdown',
							type: { required: !0 },
							table: { type: { summary: 'string, JSX' } },
							control: { type: 'text' },
						},
						content: { description: 'Content to be displayed in dropdown', table: { type: { summary: 'string, JSX' } }, control: { type: 'text' } },
						children: {
							description: 'Content to be displayed in dropdown using children',
							table: { type: { summary: 'string, JSX' } },
							control: { type: 'none' },
						},
						disabled: {
							description: 'Disable dropdown - prevents all click events',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						disableOverlay: {
							description: 'Disable dropdown overlay and renders as block',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						open: {
							description: 'Pass a value here to control the state externally',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: 'undefined' } },
							control: { type: 'boolean' },
						},
						startOpen: {
							description: 'Dropdown state is open on initial render - used with internal state only',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						disableClickOutside: {
							description: 'Ignore clicks outside of element',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						onClick: {
							description: 'Dropdown click event handler',
							table: { type: { summary: 'function(e: Event)' } },
							control: { type: 'none' },
							action: 'onClick',
						},
						onToggle: {
							description: 'Executes when the internal state changes, gets passed the event and the internal state - used with internal state only',
							table: { type: { summary: 'function(e: Event, open: boolean)' } },
							control: { type: 'none' },
							action: 'onToggle',
						},
						disableA11y: {
							description: 'boolean to disable autoset ally properties',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						...componentArgs.F,
					},
				},
				Default = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Dropdown.m, { ...args });
			Default.args = { button: 'button text', content: 'content text' };
			const ExternalState = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Dropdown.m, { ...args });
			ExternalState.args = { button: 'button text', content: 'content text', open: !0 };
			const JSXContent = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Dropdown.m, { ...args });
			JSXContent.args = {
				button: 'button text',
				content: (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
					children: 'jsx content - (note this component receieved the open state as a prop)',
				}),
			};
			const JSXChildren = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Dropdown.m, { button: args.button, children: args.content });
			JSXChildren.args = {
				button: 'button text',
				content: (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
					children: 'jsx content - (note this component receieved the open state as a prop)',
				}),
			};
			const StringChildren = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Dropdown.m, { button: args.button, children: args.content });
			(StringChildren.args = { button: 'button text', content: 'string content - (note this component receieved the open state as a prop)' }),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: { originalSource: '(args: DropdownProps) => <Dropdown {...args} />', ...Default.parameters?.docs?.source },
					},
				}),
				(ExternalState.parameters = {
					...ExternalState.parameters,
					docs: {
						...ExternalState.parameters?.docs,
						source: { originalSource: '(args: DropdownProps) => <Dropdown {...args} />', ...ExternalState.parameters?.docs?.source },
					},
				}),
				(JSXContent.parameters = {
					...JSXContent.parameters,
					docs: {
						...JSXContent.parameters?.docs,
						source: { originalSource: '(args: DropdownProps) => <Dropdown {...args} />', ...JSXContent.parameters?.docs?.source },
					},
				}),
				(JSXChildren.parameters = {
					...JSXChildren.parameters,
					docs: {
						...JSXChildren.parameters?.docs,
						source: {
							originalSource: '(args: DropdownProps) => <Dropdown button={args.button}>{args.content}</Dropdown>',
							...JSXChildren.parameters?.docs?.source,
						},
					},
				}),
				(StringChildren.parameters = {
					...StringChildren.parameters,
					docs: {
						...StringChildren.parameters?.docs,
						source: {
							originalSource: '(args: DropdownProps) => <Dropdown button={args.button}>{args.content}</Dropdown>',
							...StringChildren.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default', 'ExternalState', 'JSXContent', 'JSXChildren', 'StringChildren'];
		},
		'./components/src/components/Atoms/Dropdown/Dropdown.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { m: () => Dropdown });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/hooks/useClickOutside.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/utilities/cloneWithProps.tsx'),
				_hooks_useA11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/hooks/useA11y.tsx');
			const CSS_dropdown = ({ disableOverlay, classId }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({
						position: 'relative',
						'&.ss__dropdown--open': {
							[`& .ss__dropdown__content--${classId}`]: { position: disableOverlay ? 'relative' : void 0, visibility: 'visible', opacity: 1 },
						},
						'.ss__dropdown__button': { cursor: '' + (disableOverlay ? 'default' : 'pointer') },
						'.ss__dropdown__content': { position: 'absolute', minWidth: '100%', visibility: 'hidden', opacity: 0, top: 'auto', left: 0 },
					}),
				Dropdown = (0, mobx_react__WEBPACK_IMPORTED_MODULE_3__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.v6)('dropdown', globalTheme, { startOpen: !1, disableA11y: !1 }, properties),
						{
							button,
							content,
							children,
							disabled,
							open,
							onClick,
							onToggle,
							startOpen,
							disableClickOutside,
							disableA11y,
							disableStyles,
							className,
							style,
							styleScript,
							treePath,
						} = props;
					let showContent, setShowContent;
					const stateful = void 0 === open;
					let innerRef;
					stateful ? ([showContent, setShowContent] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(startOpen)) : (showContent = open),
						disableClickOutside ||
							(innerRef = (0, _hooks__WEBPACK_IMPORTED_MODULE_6__.L)((e) => {
								showContent && (disabled || (stateful && setShowContent && setShowContent(!1), onToggle && onToggle(e, !1)));
							}));
					const toggleShowContent = (e) => {
							stateful && setShowContent && setShowContent((prev) => (onToggle && onToggle(e, !prev), !prev));
						},
						styling = { 'ss-name': props.name },
						[classId] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)((Math.random() + 1).toString(36).substring(7)),
						stylingProps = { ...props, classId };
					return (
						styleScript && !disableStyles
							? (styling.css = [styleScript(stylingProps), style])
							: disableStyles
							? style && (styling.css = [style])
							: (styling.css = [CSS_dropdown(stylingProps), style]),
						(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_providers__WEBPACK_IMPORTED_MODULE_8__._, {
							children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.FD)('div', {
								...styling,
								className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__dropdown', { 'ss__dropdown--open': showContent }, className),
								ref: innerRef,
								children: [
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)('div', {
										className: 'ss__dropdown__button',
										ref: (e) => (disableA11y ? null : (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_9__.i)(e)),
										'aria-expanded': showContent,
										role: 'button',
										onClick: (e) => {
											disabled || (toggleShowContent(e), onClick && onClick(e));
										},
										children: (0, _utilities__WEBPACK_IMPORTED_MODULE_10__.Y)(button, { open: showContent, toggleOpen: toggleShowContent, treePath }),
									}),
									(content || children) &&
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.FD)('div', {
											className: `ss__dropdown__content ss__dropdown__content--${classId}`,
											children: [
												(0, _utilities__WEBPACK_IMPORTED_MODULE_10__.Y)(content, { open: showContent, toggleOpen: toggleShowContent, treePath }),
												(0, _utilities__WEBPACK_IMPORTED_MODULE_10__.Y)(children, { open: showContent, toggleOpen: toggleShowContent, treePath }),
											],
										}),
								],
							}),
						})
					);
				});
		},
		'./components/src/hooks/useA11y.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { i: () => useA11y });
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
		'./components/src/utilities/cloneWithProps.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { Y: () => cloneWithProps });
			var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js');
			const cloneWithProps = (input, props) => {
				if (input)
					return 'string' == typeof input || 'number' == typeof input || 'boolean' == typeof input
						? input
						: Array.isArray(input)
						? input.map((entry) => cloneWithProps(entry, props))
						: (0, preact__WEBPACK_IMPORTED_MODULE_0__.Ob)(input, props);
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
		'./components/src/utilities/mergeProps.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			function mergeProps(componentType, globalTheme, defaultProps, props) {
				const theme = props.theme,
					componentName = props?.name;
				let treePath = props.treePath ?? '',
					mergedProps = { ...defaultProps };
				if (globalTheme?.name) {
					mergedProps = { ...mergedProps, ...props };
					const globalComponent = globalTheme?.components && globalTheme.components[componentType];
					globalComponent && (mergedProps = mergeThemeProps(globalComponent, mergedProps));
					const themeComponent = theme?.components && theme.components[componentType];
					themeComponent && (mergedProps = mergeThemeProps(themeComponent, mergedProps)),
						(treePath += `${treePath ? ' ' : ''}${componentType}` + (componentName?.match(/^[A-Z,a-z]+$/) ? `.${componentName}` : ''));
					const applicableSelectors = (function filterSelectors(themeComponents, treePath) {
						const selectors = Object.keys(themeComponents),
							paths = treePath.split(' '),
							componentTypeAndName = paths.splice(-1).pop() ?? '',
							[componentType, componentName] = componentTypeAndName.split('.'),
							mappedSplitTreePath = paths.map((path) => {
								const [type, name] = path.split('.');
								return { type, name, path };
							});
						return selectors
							.filter((key) => key.endsWith(componentType) || key.endsWith(`${componentType}.${componentName}`))
							.filter((selector) => {
								const split = selector.split(' ').slice(0, -1);
								if (0 == split.length) return !0;
								for (let s = 0; s < split.length; s++) {
									let prevIndex = -1;
									const value = split[s];
									for (let i = -1 == prevIndex ? 0 : prevIndex; i < mappedSplitTreePath.length; i++) {
										const pathValue = mappedSplitTreePath[i];
										if (value === pathValue.path || value === pathValue.type) {
											prevIndex = s;
											break;
										}
									}
									if (-1 == prevIndex) return !1;
								}
								return !0;
							});
					})(globalTheme?.components || {}, treePath).sort(sortSelectors);
					applicableSelectors.forEach((selector) => {
						const componentProps = globalTheme.components?.[selector];
						componentProps && (mergedProps = mergeThemeProps(componentProps, mergedProps));
					}),
						(mergedProps = { ...mergedProps, theme: { ...mergedProps.theme, name: globalTheme.name }, treePath }),
						globalTheme.variables && (mergedProps.theme.variables = globalTheme.variables),
						globalTheme.layoutOptions && (mergedProps.theme.layoutOptions = globalTheme.layoutOptions);
				} else {
					const globalComponent = globalTheme?.components && globalTheme.components[componentType];
					globalComponent && (mergedProps = mergeThemeProps(globalComponent, mergedProps)), (mergedProps = { ...mergedProps, ...props });
					const themeComponent = theme?.components && theme.components[componentType];
					themeComponent && (mergedProps = mergeThemeProps(themeComponent, mergedProps));
				}
				return mergedProps;
			}
			function mergeThemeProps(componentThemeProps, mergedProps) {
				return componentThemeProps && (mergedProps = { ...mergedProps, ...componentThemeProps }), mergedProps;
			}
			function sortSelectors(a, b) {
				return (
					a
						.split(' ')
						.map((selector, i) => (2 * i) ** (selector.includes('.') ? 2 : 1))
						.reduce((acc, val) => acc + val, 0) -
					b
						.split(' ')
						.map((selector, i) => (2 * i) ** (selector.includes('.') ? 2 : 1))
						.reduce((acc, val) => acc + val, 0)
				);
			}
			__webpack_require__.d(__webpack_exports__, { v6: () => mergeProps });
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
