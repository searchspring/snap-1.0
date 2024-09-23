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
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),
				_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./components/src/utilities/mergeProps.ts');
			const CSS = {
				overlay: ({ color, transitionSpeed }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_1__.AH)({
						transition: `background ${transitionSpeed} ease 0s, left 0s ease ${transitionSpeed}`,
						position: 'fixed',
						zIndex: '10003',
						height: '100%',
						width: '100%',
						top: '0',
						left: '-100%',
						'&.ss__overlay--active': { transition: `background ${transitionSpeed} ease, left 0s ease`, background: color, left: '0' },
					}),
			};
			function Overlay(properties) {
				const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_2__.u)(),
					props = (0, _utilities__WEBPACK_IMPORTED_MODULE_3__.v6)(
						'overlay',
						globalTheme,
						{ color: 'rgba(0,0,0,0.8)', transitionSpeed: '0.25s' },
						properties
					),
					{ active, onClick, disableStyles, className, style, styleScript } = props,
					styling = { 'ss-name': props.name },
					stylingProps = props;
				return (
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS.overlay(stylingProps), style]),
					(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_providers__WEBPACK_IMPORTED_MODULE_5__._, {
						children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)('div', {
							onClick: (e) => onClick && active && onClick(e),
							className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('ss__overlay', { 'ss__overlay--active': active }, className),
							...styling,
						}),
					})
				);
			}
		},
		'./components/src/components/Molecules/Slideout/Slideout.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { S: () => Slideout });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/utilities/cloneWithProps.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/hooks/useMediaQuery.tsx'),
				_Atoms_Overlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/components/Atoms/Overlay/Overlay.tsx');
			const CSS_slideout = ({ isActive, width, transitionSpeed, slideDirection }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						display: 'block',
						position: 'fixed',
						transition: `${slideDirection || 'left'} ${transitionSpeed}`,
						left: 'left' == slideDirection ? (isActive ? '0' : `-${width}`) : 'right' != slideDirection ? '0' : 'initial',
						right: 'right' == slideDirection ? (isActive ? '0' : `-${width}`) : 'initial',
						bottom: 'bottom' == slideDirection ? (isActive ? '0' : '-100vh') : 'initial',
						top: 'top' == slideDirection ? (isActive ? '0' : '-100vh') : 'bottom' == slideDirection ? 'initial' : '0',
						height: '100%',
						zIndex: '10004',
						width: width?.endsWith('%') && parseInt(width.split('%')[0]) > 90 ? width : '90%',
						maxWidth: width,
						padding: '10px',
						background: '#fff',
						boxSizing: 'border-box',
						overflowY: 'auto',
					}),
				Slideout = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)(
							'slideout',
							globalTheme,
							{ active: !1, displayAt: '', slideDirection: 'left', width: '300px', overlayColor: 'rgba(0,0,0,0.8)', transitionSpeed: '0.25s' },
							properties
						),
						{
							children,
							active,
							buttonContent,
							noButtonWrapper,
							displayAt,
							transitionSpeed,
							overlayColor,
							disableStyles,
							className,
							style,
							styleScript,
							treePath,
						} = props,
						subProps_overlay = {
							className: 'ss__slideout__overlay',
							...globalTheme?.components?.overlay,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles, color: overlayColor, transitionSpeed }),
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
						isVisible = (0, _hooks__WEBPACK_IMPORTED_MODULE_8__.U)(displayAt, () => {
							document.body.style.overflow = '';
						});
					document.body.style.overflow = isVisible && isActive ? 'hidden' : '';
					const styling = { 'ss-name': props.name },
						stylingProps = { ...props, isActive };
					return (
						styleScript && !disableStyles
							? (styling.css = [styleScript(stylingProps), style])
							: disableStyles
							? style && (styling.css = [style])
							: (styling.css = [CSS_slideout(stylingProps), style]),
						isVisible
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.FD)(_providers__WEBPACK_IMPORTED_MODULE_10__._, {
									children: [
										buttonContent &&
											(noButtonWrapper
												? (0, _utilities__WEBPACK_IMPORTED_MODULE_11__.Y)(buttonContent, { toggleActive, active: isActive, treePath })
												: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('div', {
														className: 'ss__slideout__button',
														onClick: () => toggleActive(),
														children: (0, _utilities__WEBPACK_IMPORTED_MODULE_11__.Y)(buttonContent, { active: isActive, treePath }),
												  })),
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)('div', {
											className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('ss__slideout', className, { 'ss__slideout--active': isActive }),
											...styling,
											children:
												renderContent && (0, _utilities__WEBPACK_IMPORTED_MODULE_11__.Y)(children, { toggleActive, active: isActive, treePath }),
										}),
										(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(_Atoms_Overlay__WEBPACK_IMPORTED_MODULE_12__.h, {
											...subProps_overlay,
											active: isActive,
											onClick: toggleActive,
										}),
									],
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
					);
				});
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
