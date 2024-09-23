'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[1555],
	{
		'./components/src/components/Organisms/Facet/Facet.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Grid: () => Grid,
					Hierarchy: () => Hierarchy,
					List: () => List,
					Palette: () => Palette,
					Slider: () => Slider,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => Facet_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				mobxreact_esm = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				Facet = __webpack_require__('./components/src/components/Organisms/Facet/Facet.tsx'),
				paths = __webpack_require__('./components/src/components/Atoms/Icon/paths.tsx'),
				types = __webpack_require__('./components/src/types.ts'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				snapify = __webpack_require__('./components/src/utilities/snapify.ts');
			const Facet_stories = {
					title: 'Organisms/Facet',
					component: Facet.s,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# Facet\n\nRenders a single complete facet. This includes determining the correct options type, a collapsable header, and overflow options. \n\n## Sub-components\n- Dropdown\n- FacetHierarchyOptions\n- FacetGridOptions\n- FacetListOptions\n- FacetPaletteOptions\n- FacetToggle\n- FacetSlider\n- Icon\n- SearchInput\n\n## Usage\n\n### facet\nThe required `facet` prop specifies a reference to any single facet object within the facets store array. \n\n```jsx\n<Facet facet={controller.store.facets[0]} />\n```\n\n### disableCollapse\nThe `disableCollapse` prop prevents the facet from toggling its collapse state. \n\n```jsx\n<Facet facet={controller.store.facets[0]} disableCollapse={true} />\n```\n\n### color\nThe `color` prop sets the facet name and icon color.\n\n```jsx\n<Facet facet={controller.store.facets[0]} color={'#222222'} />\n```\n\n### limit\nThe `limit` prop sets the number of options to display before the remaining options overflow and a show more/less button is displayed. \n\n```jsx\n<Facet facet={controller.store.facets[0]} limit={10} />\n```\n\n### previewOnFocus\nIf using within Autocomplete, the `previewOnFocus` prop will invoke the `value.preview()` method when the value has been hovered over. \n\n```jsx\n<Facet facet={controller.store.facets[0]} previewOnFocus={true} />\n```\n\n### valueProps\nThe `valueProps` prop will be spread onto each value's `<a>` element. Typical usage would be to provide custom callback functions when used within Autocomplete.\n\n```typescript\nconst valueProps = {\n\tonMouseEnter: (e) => {\n\t\tclearTimeout(delayTimeout);\n\t\tdelayTimeout = setTimeout(() => {\n\t\t\te.target.focus();\n\t\t}, delayTime);\n\t},\n\tonMouseLeave: () => {\n\t\tclearTimeout(delayTimeout);\n\t},\n}\n```\n\n```jsx\n<Facet facet={controller.store.facets[0]} valueProps={valueProps} />\n```\n\n### iconExpand\nThe `iconExpand` prop is the name of the icon to render when the facet is in its collapsed state.\n\n```jsx\n<Facet facet={controller.store.facets[0]} iconExpand={'angle-down'} />\n```\n\n### iconCollapse\nThe `iconCollapse` prop is the name of the icon to render when the facet is in its open state.\n\n```jsx\n<Facet facet={controller.store.facets[0]} iconCollapse={'angle-up'} />\n```\n\n### showMoreText\nThe `showMoreText` prop contains the text to display in the facet overflow button when collapsed. Default is `'Show More'`\n\n```jsx\n<Facet facet={controller.store.facets[0]} showMoreText={'Show More'} />\n```\n\n### showLessText\nThe `showLessText` prop contains the text to display in the facet overflow button when expanded. Default is `'Show Less'`\n\n```jsx\n<Facet facet={controller.store.facets[0]} showLessText={'Show Less'} />\n```\n\n### iconOverflowMore\nThe `iconOverflowMore` prop contains the icon name of the facet overflow button when collapsed. Default is `'plus'`\n\n```jsx\n<Facet facet={controller.store.facets[0]} iconOverflowMore={'plus'} />\n```\n\n### iconOverflowLess\nThe `iconOverflowLess` prop contains the icon name of the facet overflow button when expanded. Default is `'minus'`\n\n```jsx\n<Facet facet={controller.store.facets[0]} iconOverflowLess={'minus'} />\n```\n\n### overflowSlot\nThe `overflowSlot` prop is a JSX element used to change the display of the show more/less toggle.\n\n```typescript\nconst Overflow = (props) => {\n\tconst facet = props.facet;\n\treturn (\n\t\t<div>Show { facet.overflow.remaining > 0 ? `${facet.overflow.remaining} ` : ''}{facet.overflow.remaining > 0 ? 'more' : 'less'}...</div>\n\t)\n}\n```\n\n```jsx\n<Facet facet={controller.store.facets[0]} overflowSlot={<Overflow/>} />\n```\n\n\n### fields\nThe `fields` prop allows you to manually change prop values on a per-facet level, sorted by the facet field.\n\n```typescript\nconst fieldsProp = {\n\tColor: {\n\t\tlimit: 6,\n\t},\n\tSize: { \n\t\tdisableOverflow: true,\n\t\tdisableCollapse: true,\n\t}\n},\n```\n\n```jsx\n<Facet facet={controller.store.facets[0]} fields={fieldsProp} />\n```\n\n\n### optionsSlot\nThe `optionsSlot` prop is a JSX element used to manually set the options component used, regardless of the facet.display type. Returns the facet,valueProps, limit, & previewOnFocus prop values.\n\n```typescript\nconst CustomFacetOptions = (props) => {\n\tconst facet = props.facet;\n\treturn (\n\t\t<div>\n\t\t\t{facet && facet.values.map(value => <span>{value.label}</span>)}\n\t\t</div>\n\t)\n}\n```\n\n```jsx\n<Facet facet={controller.store.facets[0]} optionsSlot={<CustomFacetOptions/>} />\n```\n\n\n### iconColor\nThe `iconColor` prop sets the facet icon color.\n\n```jsx\n<Facet facet={controller.store.facets[0]} iconColor={'#222222'} />\n```\n\n### justContent\nThe `justContent` prop renders just the facet options. Excludes rendering of the Dropdown sub-component.\n\n```jsx\n<Facet facet={controller.store.facets[0]}  justContent={true} />\n```\n\n### horizontal\nThe `horizontal` prop renders the facet horizontally.\n\n```jsx\n<Facet facet={controller.store.facets[0]}  horizontal={true} />\n```\n",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					decorators: [
						(Story) =>
							(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
								style: { maxWidth: '300px' },
								children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Story, {}),
							}),
					],
					argTypes: {
						facet: {
							description: 'Facet store reference',
							type: { required: !0 },
							table: { type: { summary: 'facet store object' } },
							control: { type: 'none' },
						},
						limit: {
							defaultValue: 12,
							description: 'Number of facet options to display',
							table: { type: { summary: 'number' }, defaultValue: { summary: 12 } },
							control: { type: 'number' },
						},
						disableOverflow: {
							defaultValue: !1,
							description: 'Enable the use of an overflow (show more/less)',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						searchable: {
							defaultValue: !1,
							description: 'Enables facet search within functionality',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						color: { description: 'Select color', table: { type: { summary: 'string' } }, control: { type: 'color' } },
						iconColor: {
							description: 'Select icon color',
							table: { type: { summary: 'string' }, defaultValue: { summary: '#333' } },
							control: { type: 'color' },
						},
						disableCollapse: {
							description: 'Disable collapse - used with internal state only',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						iconExpand: {
							defaultValue: 'angle-down',
							description: 'Icon for when facet is collapsed',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'angle-down' } },
							options: [...Object.keys(paths.c)],
							control: { type: 'select' },
						},
						iconCollapse: {
							defaultValue: 'angle-up',
							description: 'Icon for when facet is expanded',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'angle-up' } },
							options: [...Object.keys(paths.c)],
							control: { type: 'select' },
						},
						showMoreText: {
							defaultValue: 'Show More',
							description: "Change 'Show More' button text",
							table: { type: { summary: 'string' }, defaultValue: { summary: 'Show More' } },
							control: { type: 'text' },
						},
						showLessText: {
							defaultValue: 'Show Less',
							description: "Change 'Show Less' button text",
							table: { type: { summary: 'string' }, defaultValue: { summary: 'Show Less' } },
							control: { type: 'text' },
						},
						iconOverflowMore: {
							defaultValue: 'plus',
							description: 'Icon for when facet can show more',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'plus' } },
							options: [...Object.keys(paths.c)],
							control: { type: 'select' },
						},
						iconOverflowLess: {
							defaultValue: 'minus',
							description: 'Icon for when facet can show less',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'minus' } },
							options: [...Object.keys(paths.c)],
							control: { type: 'select' },
						},
						overflowSlot: {
							description: 'Slot for custom overflow (show more/less) button',
							table: { type: { summary: 'component' } },
							control: { type: 'none' },
						},
						optionsSlot: {
							description: 'Slot for custom facet option components',
							table: { type: { summary: 'component' } },
							control: { type: 'none' },
						},
						justContent: {
							defaultValue: !1,
							description: 'Render just the facet options. Excludes rendering of the Dropdown sub-component.',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						horizontal: {
							defaultValue: !1,
							description: 'Render facet options horizontally',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						previewOnFocus: {
							description: 'Invoke facet value preview upon focus',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						valueProps: {
							description: 'Object of facet value props',
							table: { type: { summary: 'object' }, defaultValue: { summary: '{}' } },
							control: { type: 'object' },
						},
						fields: { defaultValue: {}, description: 'Change props per facet', table: { type: { summary: 'object' } }, control: { type: 'object' } },
						...componentArgs.F,
					},
				},
				snapInstance = snapify.p.search({ id: 'Facet', globals: { siteId: '8uyt2m' } }),
				ObservableListFacet = (0, mobxreact_esm.PA)(({ args, controller }) =>
					(0, emotion_react_jsx_runtime_browser_esm.Y)(Facet.s, {
						...args,
						facet: controller?.store?.facets.filter((facet) => facet.display === types.QK.LIST).shift(),
					})
				),
				List = (args, { loaded: { controller } }) => (0, emotion_react_jsx_runtime_browser_esm.Y)(ObservableListFacet, { args, controller });
			List.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })];
			const ObservableSliderFacet = (0, mobxreact_esm.PA)(({ args, controller }) => {
					const facet = controller?.store?.facets.filter((facet) => facet.display === types.QK.SLIDER).shift();
					return facet
						? (0, emotion_react_jsx_runtime_browser_esm.Y)(Facet.s, { ...args, facet })
						: (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {});
				}),
				Slider = (args, { loaded: { controller } }) => (0, emotion_react_jsx_runtime_browser_esm.Y)(ObservableSliderFacet, { args, controller });
			Slider.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })];
			const ObservablePaletteFacet = (0, mobxreact_esm.PA)(({ args, controller }) =>
					(0, emotion_react_jsx_runtime_browser_esm.Y)(Facet.s, {
						...args,
						facet: controller?.store?.facets.filter((facet) => facet.display === types.QK.PALETTE).shift(),
					})
				),
				Palette = (args, { loaded: { controller } }) => (0, emotion_react_jsx_runtime_browser_esm.Y)(ObservablePaletteFacet, { args, controller });
			Palette.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })];
			const ObservableGridFacet = (0, mobxreact_esm.PA)(({ args, controller }) =>
					(0, emotion_react_jsx_runtime_browser_esm.Y)(Facet.s, {
						...args,
						facet: controller?.store?.facets.filter((facet) => 'size_dress' === facet.field).pop(),
					})
				),
				Grid = (args, { loaded: { controller } }) => (0, emotion_react_jsx_runtime_browser_esm.Y)(ObservableGridFacet, { args, controller });
			Grid.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })];
			const ObservableHierarchyFacet = (0, mobxreact_esm.PA)(({ args, controller }) => {
					const facet = controller?.store?.facets.filter((facet) => facet.display === types.QK.HIERARCHY).shift();
					return (0, emotion_react_jsx_runtime_browser_esm.Y)(Facet.s, { ...args, facet });
				}),
				Hierarchy = (args, { loaded: { controller } }) =>
					(0, emotion_react_jsx_runtime_browser_esm.Y)(ObservableHierarchyFacet, { args, controller });
			(Hierarchy.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })]),
				(List.parameters = {
					...List.parameters,
					docs: {
						...List.parameters?.docs,
						source: {
							originalSource:
								'(args: FacetProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => <ObservableListFacet args={args} controller={controller} />',
							...List.parameters?.docs?.source,
						},
					},
				}),
				(Slider.parameters = {
					...Slider.parameters,
					docs: {
						...Slider.parameters?.docs,
						source: {
							originalSource:
								'(args: FacetProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => <ObservableSliderFacet args={args} controller={controller} />',
							...Slider.parameters?.docs?.source,
						},
					},
				}),
				(Palette.parameters = {
					...Palette.parameters,
					docs: {
						...Palette.parameters?.docs,
						source: {
							originalSource:
								'(args: FacetProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => <ObservablePaletteFacet args={args} controller={controller} />',
							...Palette.parameters?.docs?.source,
						},
					},
				}),
				(Grid.parameters = {
					...Grid.parameters,
					docs: {
						...Grid.parameters?.docs,
						source: {
							originalSource:
								'(args: FacetProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => <ObservableGridFacet args={args} controller={controller} />',
							...Grid.parameters?.docs?.source,
						},
					},
				}),
				(Hierarchy.parameters = {
					...Hierarchy.parameters,
					docs: {
						...Hierarchy.parameters?.docs,
						source: {
							originalSource:
								'(args: FacetProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => <ObservableHierarchyFacet args={args} controller={controller} />',
							...Hierarchy.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['List', 'Slider', 'Palette', 'Grid', 'Hierarchy'];
		},
		'./components/src/components/Atoms/Dropdown/Dropdown.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
		'./components/src/hooks/useLang.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { u: () => useLang });
			const useLang = (lang, data) => {
				const returnObj = {};
				return (
					Object.keys(lang).forEach((key) => {
						const currentLangSettings = lang && lang[key],
							currentObj = {};
						currentLangSettings &&
							(currentLangSettings?.value &&
								('function' == typeof currentLangSettings.value
									? (currentObj.value = { 'ss-lang': key, dangerouslySetInnerHTML: { __html: currentLangSettings.value(data) } })
									: (currentObj.value = { 'ss-lang': key, dangerouslySetInnerHTML: { __html: currentLangSettings.value } })),
							currentLangSettings?.attributes &&
								Object.keys(currentLangSettings?.attributes).length &&
								((currentObj.attributes = { 'ss-lang': key }),
								currentLangSettings?.attributes?.['aria-label'] &&
									('function' == typeof currentLangSettings.attributes?.['aria-label']
										? (currentObj.attributes['aria-label'] = currentLangSettings.attributes['aria-label']({ data }))
										: (currentObj.attributes['aria-label'] = currentLangSettings.attributes['aria-label'])),
								currentLangSettings?.attributes?.['aria-valuetext'] &&
									('function' == typeof currentLangSettings.attributes?.['aria-valuetext']
										? (currentObj.attributes['aria-valuetext'] = currentLangSettings.attributes['aria-valuetext'](data))
										: (currentObj.attributes['aria-valuetext'] = currentLangSettings.attributes['aria-valuetext'])),
								currentLangSettings?.attributes?.title &&
									('function' == typeof currentLangSettings.attributes?.title
										? (currentObj.attributes.title = currentLangSettings.attributes.title(data))
										: (currentObj.attributes.title = currentLangSettings.attributes.title)),
								currentLangSettings?.attributes?.alt &&
									('function' == typeof currentLangSettings.attributes?.alt
										? (currentObj.attributes.alt = currentLangSettings.attributes.alt(data))
										: (currentObj.attributes.alt = currentLangSettings.attributes.alt))),
							(currentObj.all = { ...currentObj.value, ...currentObj.attributes, 'ss-lang': key })),
							(returnObj[key] = currentObj);
					}),
					returnObj
				);
			};
		},
		'./components/src/types.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			var ResultsLayout, FacetType, FacetDisplay;
			__webpack_require__.d(__webpack_exports__, { Cw: () => FacetType, QK: () => FacetDisplay, VT: () => ResultsLayout }),
				(function (ResultsLayout) {
					(ResultsLayout.grid = 'grid'), (ResultsLayout.list = 'list');
				})(ResultsLayout || (ResultsLayout = {})),
				(function (FacetType) {
					(FacetType.VALUE = 'value'), (FacetType.RANGE = 'range'), (FacetType.RANGE_BUCKETS = 'range-buckets');
				})(FacetType || (FacetType = {})),
				(function (FacetDisplay) {
					(FacetDisplay.GRID = 'grid'),
						(FacetDisplay.PALETTE = 'palette'),
						(FacetDisplay.LIST = 'list'),
						(FacetDisplay.SLIDER = 'slider'),
						(FacetDisplay.HIERARCHY = 'hierarchy'),
						(FacetDisplay.TOGGLE = 'toggle');
				})(FacetDisplay || (FacetDisplay = {}));
		},
		'./components/src/utilities/cloneWithProps.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
		'./components/src/utilities/defined.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
	},
]);
