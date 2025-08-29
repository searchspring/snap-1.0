'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[909],
	{
		'./components/src/components/Atoms/Button/Button.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { $: () => Button });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks_useA11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./components/src/utilities/cloneWithProps.tsx'),
				_Icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__),
				color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/color/index.js'),
				color__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_4__);
			const defaultStyles = ({ native, color, backgroundColor, borderColor, theme }) => {
					const lightenedPrimaryColorObj = new (color__WEBPACK_IMPORTED_MODULE_4___default())(
						backgroundColor || color || theme?.variables?.colors?.primary
					).lightness(95);
					return native
						? (0, _emotion_react__WEBPACK_IMPORTED_MODULE_5__.AH)({})
						: (0, _emotion_react__WEBPACK_IMPORTED_MODULE_5__.AH)({
								display: 'inline-flex',
								alignItems: 'center',
								gap: '5px',
								padding: '5px 10px',
								position: 'relative',
								color: color || theme?.variables?.colors?.primary,
								outline: 0,
								backgroundColor: backgroundColor || '#fff',
								border: `1px solid ${borderColor || color || theme?.variables?.colors?.primary || '#333'}`,
								'&:not(.ss__button--disabled):hover': { cursor: 'pointer', backgroundColor: lightenedPrimaryColorObj.hex() || '#f8f8f8' },
								'&.ss__button--disabled': { opacity: 0.3, backgroundColor: 'initial', '&:hover': { cursor: 'default' } },
								'.ss__button__content': { width: '100%' },
								label: { cursor: 'pointer' },
						  });
				},
				Button = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_6__.u)(),
						defaultProps = { disableA11y: !1, treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_7__.LU)() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_8__.v6)('button', globalTheme, defaultProps, properties),
						{
							content,
							children,
							disabled,
							native,
							onClick,
							disableA11y,
							disableStyles,
							className,
							internalClassName,
							icon,
							lang,
							treePath,
							style: _,
							styleScript: __,
							themeStyleScript: ___,
							...additionalProps
						} = props,
						subProps_icon = {
							internalClassName: 'ss__button__icon',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_9__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						elementProps = {
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_10__.Z)(props, defaultStyles),
							className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
								'ss__button',
								{ 'ss__button--native': native, 'ss__button--disabled': disabled },
								className,
								internalClassName
							),
							disabled,
							onClick: (e) => !disabled && onClick && onClick(e),
							...additionalProps,
						},
						a11yProps = { ref: (e) => (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_11__.iy)(e) },
						langs = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()({}, lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_12__.u)(langs, {});
					return content || children || icon || lang?.button?.value
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_providers__WEBPACK_IMPORTED_MODULE_14__._, {
								children: native
									? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('button', {
											...elementProps,
											children: [
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('span', {
													className: 'ss__button__content',
													...mergedLang.button?.all,
													children: [
														(0, _utilities__WEBPACK_IMPORTED_MODULE_15__.Y)(content, { treePath }),
														(0, _utilities__WEBPACK_IMPORTED_MODULE_15__.Y)(children, { treePath }),
													],
												}),
												icon &&
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Icon__WEBPACK_IMPORTED_MODULE_16__.I, {
														...subProps_icon,
														...('string' == typeof icon ? { icon } : icon),
													}),
											],
									  })
									: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('div', {
											...(disableA11y ? {} : a11yProps),
											role: 'button',
											'aria-disabled': disabled,
											...elementProps,
											...mergedLang.button?.attributes,
											children: [
												content || children || mergedLang.button?.value
													? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.FD)('span', {
															className: 'ss__button__content',
															...mergedLang.button?.value,
															children: [
																(0, _utilities__WEBPACK_IMPORTED_MODULE_15__.Y)(content, { treePath }),
																(0, _utilities__WEBPACK_IMPORTED_MODULE_15__.Y)(children, { treePath }),
															],
													  })
													: void 0,
												icon &&
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(_Icon__WEBPACK_IMPORTED_MODULE_16__.I, {
														...subProps_icon,
														...('string' == typeof icon ? { icon } : icon),
													}),
											],
									  }),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Molecules/Filter/Filter.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					NoFacetLabel: () => NoFacetLabel,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => Filter_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				Filter = __webpack_require__('./components/src/components/Molecules/Filter/Filter.tsx'),
				paths = __webpack_require__('./components/src/components/Atoms/Icon/paths.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				snapify = __webpack_require__('./components/src/utilities/snapify.ts'),
				types = __webpack_require__('./components/src/types.ts');
			const Filter_stories = {
					title: 'Molecules/Filter',
					component: Filter.d,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# Filter\n\nRenders a facet filter.\n\n## Sub-components\n- Icon\n- Button\n\n## Usage\n\n### facetLabel\nThe `facetLabel` prop specifies the filter label. Typically set to the facet label.\n\n```jsx\n<Filter facetLabel={'Brand'} />\n```\n\n### valueLabel\nThe `valueLabel` prop specifies the filter value. Typically set to the facet value label.\n\n```jsx\n<Filter valueLabel={'Nike'} />\n```\n\n### url\nThe `url` prop specifies a link to clear the filter selection.\n\n```jsx\n<Filter facetLabel={filter.facet.label} valueLabel={filter.value.label} url={filter.url} />\n```\n\n### hideFacetLabel\nThe `hideFacetLabel` prop will disable the filter facet label.\n\n```jsx\n<Filter facetLabel={filter.facet.label} valueLabel={filter.value.label} hideFacetLabel={true} />\n```\n### separator\nThe `separator` prop will specify the separator character between `facetLabel` and `valueLabel`.\n\n```jsx\n<Filter facetLabel={filter.facet.label} valueLabel={filter.value.label} separator={': '} />\n```\n\n### icon\nThe `icon` prop specifies a path within the `Icon` component paths (see Icon Gallery).\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function for when a filter is clicked.\n\n```jsx\n<Filter onClick={(e)=>{console.log(e)}}/>\n```\n",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					argTypes: {
						filter: { description: 'Filter store object', table: { type: { summary: 'object' } }, control: { type: 'none' } },
						facetLabel: { description: 'Filter field', table: { type: { summary: 'string' } }, control: { type: 'text' } },
						valueLabel: { description: 'Filter value', table: { type: { summary: 'string' } }, control: { type: 'text' } },
						url: { description: 'URL manager object', table: { type: { summary: 'object' } }, control: { type: 'object' } },
						hideFacetLabel: {
							description: 'Hide facet label',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: 'boolean',
						},
						separator: { description: 'Filter delimiter', table: { type: { summary: 'string' } }, control: { type: 'text' } },
						icon: {
							defaultValue: 'close-thin',
							description: 'Icon name',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'close-thin' } },
							options: [...Object.keys(paths.c)],
							control: { type: 'select' },
						},
						onClick: {
							description: 'Facet option click event handler',
							table: { type: { summary: 'function' } },
							control: { type: 'none' },
							action: 'onClick',
						},
						...componentArgs.F,
					},
				},
				snapInstance = snapify.p.search({
					id: 'Filter',
					globals: { siteId: '8uyt2m', filters: [{ type: 'value', field: 'color_family', value: 'Blue' }] },
				}),
				Default = (args, { loaded: { controller } }) =>
					(0, emotion_react_jsx_runtime_browser_esm.Y)(Filter.d, {
						...args,
						facetLabel: controller?.store?.facets.filter((facet) => facet.type === types.Cw.VALUE).shift().label,
						valueLabel: controller?.store?.facets
							.filter((facet) => facet.type === types.Cw.VALUE)
							.shift()
							.values.shift().value,
					});
			Default.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })];
			const NoFacetLabel = (args, { loaded: { controller } }) =>
				(0, emotion_react_jsx_runtime_browser_esm.Y)(Filter.d, {
					...args,
					facetLabel: controller?.store?.facets.filter((facet) => facet.type === types.Cw.VALUE).shift().label,
					valueLabel: controller?.store?.facets
						.filter((facet) => facet.type === types.Cw.VALUE)
						.shift()
						.values.shift().value,
				});
			(NoFacetLabel.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })]),
				(NoFacetLabel.args = { hideFacetLabel: !0 }),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: {
							originalSource:
								'(args: FilterProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => <Filter {...args} facetLabel={controller?.store?.facets.filter(facet => facet.type === FacetType.VALUE).shift().label} valueLabel={controller?.store?.facets.filter(facet => facet.type === FacetType.VALUE).shift().values.shift().value} />',
							...Default.parameters?.docs?.source,
						},
					},
				}),
				(NoFacetLabel.parameters = {
					...NoFacetLabel.parameters,
					docs: {
						...NoFacetLabel.parameters?.docs,
						source: {
							originalSource:
								'(args: FilterProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => <Filter {...args} facetLabel={controller?.store?.facets.filter(facet => facet.type === FacetType.VALUE).shift().label} valueLabel={controller?.store?.facets.filter(facet => facet.type === FacetType.VALUE).shift().values.shift().value} />',
							...NoFacetLabel.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default', 'NoFacetLabel'];
		},
		'./components/src/components/Molecules/Filter/Filter.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { d: () => Filter });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_Atoms_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/components/Atoms/Button/Button.tsx'),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
			const defaultStyles = ({}) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
						textDecoration: 'none',
						display: 'inline-flex',
						'& .ss__filter__button': { alignItems: 'center', '& .ss__filter__button__icon': { margin: '0 5px 0 0' } },
						'& .ss__filter__label': { marginRight: '5px', fontWeight: 'bold' },
					}),
				Filter = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						defaultProps = { treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('filter', globalTheme, defaultProps, properties),
						{ filter, facetLabel, valueLabel, url, hideFacetLabel, onClick, icon, separator, disableStyles, className, internalClassName, treePath } =
							props,
						link = filter?.url?.link || url?.link,
						value = filter?.value.label || valueLabel,
						label = filter?.facet.label || facetLabel,
						subProps_button = {
							internalClassName: 'ss__filter__button',
							disableA11y: !0,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles }),
							theme: props.theme,
							treePath,
						},
						subProps_icon = {
							icon: 'close-thin',
							internalClassName: 'ss__filter__button__icon',
							size: '10px',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({ disableStyles, icon }),
							theme: props.theme,
							treePath,
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)(props, defaultStyles),
						defaultLang = { filter: { attributes: { 'aria-label': label ? `remove selected ${label} filter ${value}` : value } } },
						lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(defaultLang, props.lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_10__.u)(lang, { label, value });
					return value
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_providers__WEBPACK_IMPORTED_MODULE_12__._, {
								children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('a', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__filter', className, internalClassName),
									onClick: (e) => {
										link?.onClick && link.onClick(e), onClick && onClick(e);
									},
									href: link?.href,
									tabIndex: 0,
									...mergedLang.filter?.all,
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)(_Atoms_Button__WEBPACK_IMPORTED_MODULE_13__.$, {
										...subProps_button,
										children: [
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_14__.I, {
												...subProps_icon,
												...('string' == typeof icon ? { icon } : icon),
											}),
											!hideFacetLabel &&
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)('span', {
													className: 'ss__filter__label',
													children: [
														label,
														separator &&
															(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('span', {
																className: 'ss__filter__label__separator',
																children: separator,
															}),
													],
												}),
											(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('span', { className: 'ss__filter__value', children: value }),
										],
									}),
								}),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/hooks/useA11y.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
										? (currentObj.attributes['aria-label'] = currentLangSettings.attributes['aria-label'](data))
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
										: (currentObj.attributes.alt = currentLangSettings.attributes.alt)),
								currentLangSettings?.attributes?.placeholder &&
									('function' == typeof currentLangSettings.attributes?.placeholder
										? (currentObj.attributes.placeholder = currentLangSettings.attributes.placeholder(data))
										: (currentObj.attributes.placeholder = currentLangSettings.attributes.placeholder))),
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
