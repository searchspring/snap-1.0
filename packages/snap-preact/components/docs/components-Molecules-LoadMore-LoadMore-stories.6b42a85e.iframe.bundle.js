'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[9983],
	{
		'./components/src/components/Molecules/LoadMore/LoadMore.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					Radial: () => Radial,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => LoadMore_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				LoadMore = __webpack_require__('./components/src/components/Molecules/LoadMore/LoadMore.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				snapify = __webpack_require__('./components/src/utilities/snapify.ts');
			const LoadMore_stories = {
					title: 'Molecules/LoadMore',
					component: LoadMore.e,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# LoadMore\n\nRenders a \"Load More\" button that displays the next page of results. Recommended to be used with SearchController's `infinite` config\n\n## Sub-components\n- Button\n\n## Usage\n\n### pagination / controller\nThe required `pagination` (or `controller`) prop specifies a reference to the pagination store object.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} />\n```\n\n```jsx\n<LoadMore controller={controller} />\n```\n\n### autoFetch\nThe `autoFetch` prop will not render a \"Show More\" button and instead fetch the next page of results when the component appears in the viewport. Recommended to place underneath Results to allow for infinite scrolling. \n\n```jsx\n<LoadMore pagination={controller.store.pagination} autoFetch={true} />\n```\n\nCan be used in combination with `hideProgressIndicator` and `hideProgressText` to not display anything and have infinite scrolling still function:\n\n```jsx\n<LoadMore pagination={controller.store.pagination} autoFetch={true} hideProgressIndicator={true} hideProgressText={true} />\n```\n\n### intersectionOffset + autoFetch\nRequires `autoFetch` prop to be `true`. The `intersectionOffset` prop defines the IntersectionObserver's `rootMargin` value. This is an offset added to each side of the component's bounding box to create the final root bounds. These bounds then determine when the component is in the viewport and the next results are fetched. Default: `0px`\n\n```jsx\n<LoadMore pagination={controller.store.pagination} autoFetch={true} intersectionOffset={'40px'} />\n```\n\n### loading\nThe `loading` prop is not required if the `controller` prop is provided.\n\nIf the `pagination` prop is used, the `loading` prop should contain a value from `controller.store.loading` to allow for the \"Load More\" button to be disabled and the spinner icon visible while fetching results.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} loading={controller.store.loading} />\n```\n\n### loadMoreText\nThe `loadMoreText` prop sets the button text. Default value: \"Load More\"\n\n```jsx\n<LoadMore pagination={controller.store.pagination} loadMoreText={'Load More'} />\n```\n\n### color\nThe `color` prop specifies the color of the indicator active state.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} color={'#ffff00'} />\n```\n\n### backgroundColor\nThe `backgroundColor` prop specifies the background color of the indicator.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} backgroundColor={'#eeeeee'} />\n```\n\n### progressIndicator\nThe `progressIndicator` prop allows you to pick from two progress indicator designs: `bar` (default) or `radial`\n\n```jsx\n<LoadMore pagination={controller.store.pagination} progressIndicator={'bar'} />\n```\n\n### progressIndicatorWidth\nThe `progressIndicatorWidth` prop sets the progress indicator width. Recommended units: `px`, `rem`, `em`, `vw`. Unsupported unit: `%` not recommended. \n\nWhen `progressIndicator='bar'` the default is `300px` (bar width.) When `progressIndicator='radial'` the default is `70px` (width and height.)\n\n```jsx\n<LoadMore pagination={controller.store.pagination} progressIndicatorWidth={'300px'} />\n```\n\n### progressIndicatorSize\nThe `progressIndicatorSize` prop sets the progress indicator size. Recommended units: `px`, `rem`, `em`, `vw`. Unsupported unit: `%` not recommended. \n\nWhen `progressIndicator='bar'` the default is `5px` (bar height.) When `progressIndicator='radial'` the default is `10px` (thickness between inner and outer radials)\n\n```jsx\n<LoadMore pagination={controller.store.pagination} progressIndicatorSize={'5px'} />\n```\n\n### hideProgressIndicator\nThe `hideProgressIndicator` prop hides the progress indicator.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} hideProgressIndicator={true} />\n```\n\n### hideProgressText\nThe `hideProgressText` prop hides the progress text.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} hideProgressText={true} />\n```\n\n### hideProgressIndicator + hideProgressText\nWhen both `hideProgressIndicator` and `hideProgressText` props are `true` only the button will be displayed.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} hideProgressIndicator={true} hideProgressText={true} />\n```\n\n### loadingIcon\nThe `loadingIcon` prop defines the icon used when loading. Default: `spinner`\n\n```jsx\n<LoadMore pagination={controller.store.pagination} loadingIcon={'spinner'} />\n```\n\n### loadingLocation\nThe `loadingLocation` prop defines the location of the loading icon. Default: `button` will be displayed within the \"Load More\" button. Alternative value of `outside` will display the loading icon in place of the button.\n\n### onClick\nThe `onClick` prop allows for a custom callback function for when the button is clicked.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} onClick={(e)=>{console.log(e)}} />\n```\n",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					argTypes: {
						controller: {
							description: 'Search Controller reference',
							table: { type: { summary: 'Search controller object' } },
							control: { type: 'none' },
						},
						pagination: {
							description: 'Pagination store reference',
							table: { type: { summary: 'pagination store object' } },
							control: { type: 'none' },
						},
						autoFetch: {
							description: 'Automatically load more results when component comes into viewport',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						intersectionOffset: {
							defaultValue: '0px',
							description: 'Defines the IntersectionObserver rootMargin',
							table: { type: { summary: 'string' }, defaultValue: { summary: '0px' } },
							control: { type: 'text' },
						},
						loading: {
							description: 'Loading state',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						loadMoreText: {
							defaultValue: 'Load More',
							description: 'Load more button text',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'Load More' } },
							control: { type: 'text' },
						},
						color: {
							description: 'Color of the indicator active state',
							table: { type: { summary: 'string' }, defaultValue: { summary: '#cccccc' } },
							control: { type: 'color' },
						},
						backgroundColor: {
							description: 'Background color of the indicator',
							table: { type: { summary: 'string' }, defaultValue: { summary: '#f8f8f8' } },
							control: { type: 'color' },
						},
						progressIndicator: {
							defaultValue: 'bar',
							description: 'Type of progress indicator to show',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'bar' } },
							options: ['bar', 'radial'],
							control: { type: 'select' },
						},
						progressIndicatorWidth: {
							description: 'Progress indicator width in pixels',
							table: { type: { summary: 'string' }, defaultValue: { summary: '300px bar | 70px radial' } },
							control: { type: 'text' },
						},
						progressIndicatorSize: {
							description: 'Progress indicator size in pixels',
							table: { type: { summary: 'string' }, defaultValue: { summary: '5px bar | 10px radial' } },
							control: { type: 'text' },
						},
						hideProgressIndicator: {
							description: 'Hide progress indicator',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideProgressText: {
							description: 'Hide progress text',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						loadingIcon: {
							description: 'Loading icon',
							defaultValue: 'spinner',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: 'spinner' } },
							control: { type: 'text' },
						},
						loadingLocation: {
							description: 'Location of loading indicator',
							defaultValue: 'button',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'button' } },
							options: ['button', 'outside'],
							control: { type: 'select' },
						},
						onClick: {
							description: 'Button click event handler',
							table: { type: { summary: 'function(e: Event)' } },
							control: { type: 'none' },
							action: 'onClick',
						},
						...componentArgs.F,
					},
				},
				snapInstance = snapify.p.search({
					id: 'LoadMore',
					globals: { siteId: '8uyt2m', filters: [{ type: 'value', field: 'color_family', value: 'Beige', background: !0 }] },
				}),
				Default = (args, { loaded: { controller } }) => (0, emotion_react_jsx_runtime_browser_esm.Y)(LoadMore.e, { ...args, controller });
			Default.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })];
			const Radial = (args, { loaded: { controller } }) => (0, emotion_react_jsx_runtime_browser_esm.Y)(LoadMore.e, { ...args, controller });
			(Radial.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })]),
				(Radial.args = { progressIndicator: 'radial' }),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: {
							originalSource:
								'(args: LoadMoreProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => {\n  return <LoadMore {...args} controller={controller} />;\n}',
							...Default.parameters?.docs?.source,
						},
					},
				}),
				(Radial.parameters = {
					...Radial.parameters,
					docs: {
						...Radial.parameters?.docs,
						source: {
							originalSource:
								'(args: LoadMoreProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => {\n  return <LoadMore {...args} controller={controller} />;\n}',
							...Radial.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default', 'Radial'];
		},
		'./components/src/components/Atoms/Button/Button.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { $: () => Button });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_hooks_useA11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_2__);
			const CSS_button = ({ color, backgroundColor, borderColor, theme }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({
						display: 'inline-flex',
						padding: '5px 10px',
						position: 'relative',
						color: color || theme?.variables?.colors?.primary,
						outline: 0,
						backgroundColor: backgroundColor || '#fff',
						border: `1px solid ${borderColor || color || theme?.variables?.colors?.primary || '#333'}`,
						'&:hover': { cursor: 'pointer', backgroundColor: theme?.variables?.colors?.hover?.background || '#f8f8f8' },
						'&.ss__button--disabled': {
							opacity: 0.7,
							borderColor: 'rgba(51,51,51,0.7)',
							backgroundColor: 'initial',
							'&:hover': { cursor: 'default' },
						},
					}),
				CSS_native = ({}) => (0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({}),
				Button = (0, mobx_react__WEBPACK_IMPORTED_MODULE_4__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('button', globalTheme, { disableA11y: !1 }, properties),
						{
							content,
							children,
							disabled,
							native,
							onClick,
							disableA11y,
							disableStyles,
							className,
							icon,
							style,
							styleScript,
							lang,
							treePath,
							...additionalProps
						} = props,
						subProps_icon = {
							...globalTheme?.components?.icon,
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_7__.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						styling = { 'ss-name': props.name },
						stylingProps = props;
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = native ? [CSS_native(stylingProps), style] : [CSS_button(stylingProps), style]);
					const elementProps = {
							...styling,
							className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ss__button', { 'ss__button--disabled': disabled }, className),
							disabled,
							onClick: (e) => !disabled && onClick && onClick(e),
							...additionalProps,
						},
						a11yProps = { ref: (e) => (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_8__.i)(e) },
						langs = deepmerge__WEBPACK_IMPORTED_MODULE_2___default()({}, lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_9__.u)(langs, {});
					return content || children || icon || lang?.button?.value
						? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_providers__WEBPACK_IMPORTED_MODULE_11__._, {
								children: native
									? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('button', {
											...elementProps,
											children: [
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('span', {
													...mergedLang.button?.all,
													children: [content, children],
												}),
												icon &&
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Icon__WEBPACK_IMPORTED_MODULE_12__.I, {
														...subProps_icon,
														...('string' == typeof icon ? { icon } : icon),
													}),
											],
									  })
									: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('div', {
											...(disableA11y ? {} : a11yProps),
											...elementProps,
											role: 'button',
											'aria-disabled': disabled,
											children: [
												(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)('span', {
													...mergedLang.button?.all,
													children: [content, children],
												}),
												icon &&
													(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_Icon__WEBPACK_IMPORTED_MODULE_12__.I, {
														...subProps_icon,
														...('string' == typeof icon ? { icon } : icon),
													}),
											],
									  }),
						  })
						: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {});
				});
		},
		'./components/src/components/Molecules/LoadMore/LoadMore.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { e: () => LoadMore });
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_module = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				hooks_module = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				emotion_react_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames_default = __webpack_require__.n(classnames),
				es = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				emotion_element_5486c51c_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
				cache = __webpack_require__('./components/src/providers/cache.tsx'),
				mergeProps = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				defined = __webpack_require__('./components/src/utilities/defined.ts'),
				useIntersection = __webpack_require__('./components/src/hooks/useIntersection.tsx'),
				useLang = __webpack_require__('./components/src/hooks/useLang.tsx'),
				Button = __webpack_require__('./components/src/components/Atoms/Button/Button.tsx'),
				Icon = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx');
			var cjs = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				cjs_default = __webpack_require__.n(cjs);
			const CSS_LoadMore = ({
					pagination,
					hideProgressIndicator,
					hideProgressText,
					progressIndicatorWidth,
					progressIndicatorSize,
					color,
					backgroundColor,
					theme,
				}) => {
					const radialAngle = Math.max(3.6, (3.6 * Math.floor((pagination.end / pagination.totalResults) * 100)) / 2);
					return (0, emotion_react_browser_esm.AH)({
						'& .ss__load-more__button--hidden': { display: 'none' },
						'& .ss__button': { alignItems: 'center' },
						'& .ss__load-more__icon': {
							marginLeft: '5px',
							animation: `${(0, emotion_react_browser_esm.i7)({
								'0%': { transform: 'rotate(0deg)' },
								'100%': { transform: 'rotate(360deg)' },
							})} linear 1s infinite`,
						},
						'&.ss__load-more--bar': {
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							gap: '20px',
							'& .ss__load-more__progress': {
								display: 'flex',
								flexDirection: 'column',
								gap: '5px',
								'& .ss__load-more__progress__indicator': {
									width: progressIndicatorWidth,
									background: backgroundColor || theme?.variables?.colors?.secondary || '#f8f8f8',
									borderRadius: progressIndicatorSize,
									'& .ss__load-more__progress__indicator__bar': {
										width: pagination ? (pagination.end / pagination.totalResults) * 100 + '%' : '',
										background: color || theme?.variables?.colors?.primary || '#ccc',
										borderRadius: progressIndicatorSize,
										height: progressIndicatorSize,
									},
								},
								'& .ss__load-more__progress__text': { textAlign: 'center' },
							},
						},
						'&.ss__load-more--radial': {
							display: 'flex',
							alignItems: 'center',
							gap: '10px',
							'& .ss__load-more__button': { height: 'fit-content' },
							'& .ss__load-more__progress': {
								height: !hideProgressText && hideProgressIndicator ? void 0 : progressIndicatorWidth,
								'& .ss__load-more__progress__indicator': {
									'& .ss__load-more__progress__indicator__radial': {
										background: backgroundColor || theme?.variables?.colors?.secondary || '#f8f8f8',
										height: progressIndicatorWidth,
										width: progressIndicatorWidth,
										borderRadius: '50%',
										'& .ss__load-more__progress__indicator__radial__mask, .ss__load-more__progress__indicator__radial__mask__fill': {
											width: progressIndicatorWidth,
											height: progressIndicatorWidth,
											position: 'absolute',
											borderRadius: '50%',
										},
										'& .ss__load-more__progress__indicator__radial__mask': { clipPath: `inset(0px 0px 0px calc(${progressIndicatorWidth}/2))` },
										'& .ss__load-more__progress__indicator__radial__mask__fill': { transform: `rotate(${radialAngle}deg)` },
									},
									'& .ss__load-more__progress__text': {
										width: `calc(${progressIndicatorWidth} - ${progressIndicatorSize})`,
										height: `calc(${progressIndicatorWidth} - ${progressIndicatorSize})`,
										borderRadius: '50%',
										background: '#fff',
										lineHeight: `calc(${progressIndicatorWidth} - ${progressIndicatorSize})`,
										textAlign: 'center',
										marginTop: `calc(${progressIndicatorSize} / 2)`,
										marginLeft: `calc(${progressIndicatorSize} / 2)`,
										position: 'absolute',
										fontSize: `calc(${progressIndicatorWidth} / ${Math.max(1, `${pagination.end}`.length + `${pagination.totalResults}`.length)})`,
									},
									'& .ss__load-more__progress__indicator__radial__mask': {
										'& .ss__load-more__progress__indicator__radial__mask__fill': {
											clipPath: `inset(0px calc((${progressIndicatorWidth} / 2)) 0px 0px)`,
											backgroundColor: color || theme?.variables?.colors?.primary || '#ccc',
										},
										'&.ss__load-more__progress__indicator__radial__mask--full': { transform: `rotate(${radialAngle}deg)` },
									},
								},
							},
						},
					});
				},
				LoadMore = (0, es.PA)((properties) => {
					const globalTheme = (0, emotion_element_5486c51c_browser_esm.u)(),
						defaultProps = {
							loadMoreText: 'Load More',
							progressIndicator: 'bar',
							loadingLocation: 'button',
							loadingIcon: 'spinner',
							progressIndicatorWidth: 'radial' === properties?.progressIndicator ? '70px' : '300px',
							progressIndicatorSize: 'radial' === properties?.progressIndicator ? '10px' : '5px',
						},
						props = (0, mergeProps.v6)('loadMore', globalTheme, defaultProps, properties),
						{
							pagination,
							controller,
							onClick,
							autoFetch,
							intersectionOffset,
							loading,
							loadMoreText,
							progressIndicator,
							hideProgressIndicator,
							hideProgressText,
							loadingLocation,
							loadingIcon,
							disableStyles,
							className,
							style,
							styleScript,
							treePath,
						} = props,
						store = pagination || controller?.store?.pagination,
						isLoading = 'boolean' == typeof loading ? loading : controller?.store?.loading,
						isButtonDisabled = (isLoading && 'button' === loadingLocation) || !Boolean(store?.next),
						subProps_button = {
							className: classnames_default()(
								'ss__load-more__button',
								{ 'ss__load-more__button--hidden': isLoading && 'outside' === loadingLocation },
								{ 'ss__load-more__button--disabled': isButtonDisabled }
							),
							disabled: isButtonDisabled,
							...globalTheme?.components?.button,
							...(0, defined.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						},
						subProps_icon = {
							className: 'ss__load-more__icon',
							...globalTheme?.components?.icon,
							...(0, defined.s)({ disableStyles }),
							theme: props?.theme,
							treePath,
						};
					if (!store) return (0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, {});
					const styling = { 'ss-name': props.name },
						stylingProps = { ...props, pagination: store };
					styleScript && !disableStyles
						? (styling.css = [styleScript(stylingProps), style])
						: disableStyles
						? style && (styling.css = [style])
						: (styling.css = [CSS_LoadMore(stylingProps), style]);
					const autoProps = {};
					if (autoFetch) {
						const loadMoreRef = (0, hooks_module.li)(null);
						autoProps.ref = loadMoreRef;
						const loadMoreInViewport = (0, useIntersection.v)(loadMoreRef, intersectionOffset || '0px'),
							[preventLoading, setPreventLoading] = (0, hooks_module.J0)(!0);
						isLoading
							? setPreventLoading(!0)
							: ((func, delay) => {
									const funcRef = (0, hooks_module.li)(func);
									(funcRef.current = func),
										(0, hooks_module.vJ)(() => {
											const handler = setTimeout(() => {
												funcRef.current();
											}, delay);
											return () => {
												clearTimeout(handler);
											};
										}, [func, delay]);
							  })(() => {
									setPreventLoading(!1);
							  }, 500),
							loadMoreInViewport && store.next && !preventLoading && store.next.url.go({ history: 'replace' });
					}
					const defaultLang = {
							loadMoreButton: { value: loadMoreText, attributes: { 'aria-label': loadMoreText } },
							progressText: { value: `You've viewed ${store?.end} of ${store?.totalResults} products` },
						},
						lang = cjs_default()(defaultLang, props.lang || {}),
						mergedLang = (0, useLang.u)(lang, { paginationStore: store });
					return store.totalResults
						? (0, emotion_react_jsx_runtime_browser_esm.Y)(cache._, {
								children: (0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									...styling,
									...autoProps,
									className: classnames_default()(
										'ss__load-more',
										`ss__load-more--${progressIndicator}`,
										{ 'ss__load-more--loading': isLoading },
										{ 'ss__load-more--autoFetch': autoFetch },
										className
									),
									children: [
										!autoFetch &&
											(0, emotion_react_jsx_runtime_browser_esm.FD)(preact_module.FK, {
												children: [
													(0, emotion_react_jsx_runtime_browser_esm.FD)(Button.$, {
														onClick: (e) => {
															store.next?.url.go({ history: 'replace' }), onClick && onClick(e);
														},
														...subProps_button,
														...mergedLang.loadMoreButton.attributes,
														children: [
															(0, emotion_react_jsx_runtime_browser_esm.Y)('span', { ...mergedLang.loadMoreButton.value, children: loadMoreText }),
															loadingIcon && isLoading && 'button' === loadingLocation
																? (0, emotion_react_jsx_runtime_browser_esm.Y)(Icon.I, {
																		...subProps_icon,
																		...('string' == typeof loadingIcon ? { icon: loadingIcon } : loadingIcon),
																  })
																: (0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, {}),
														],
													}),
													loadingIcon &&
														isLoading &&
														'outside' === loadingLocation &&
														(0, emotion_react_jsx_runtime_browser_esm.Y)(Icon.I, {
															...subProps_icon,
															...('string' == typeof loadingIcon ? { icon: loadingIcon } : loadingIcon),
														}),
												],
											}),
										(!hideProgressIndicator || !hideProgressText) &&
											(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
												className: 'ss__load-more__progress',
												children: [
													'bar' === progressIndicator &&
														(0, emotion_react_jsx_runtime_browser_esm.FD)(preact_module.FK, {
															children: [
																!hideProgressIndicator &&
																	(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																		className: 'ss__load-more__progress__indicator',
																		children: (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																			className: 'ss__load-more__progress__indicator__bar',
																		}),
																	}),
																!hideProgressText &&
																	(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																		className: 'ss__load-more__progress__text',
																		...mergedLang.progressText?.all,
																	}),
															],
														}),
													'radial' === progressIndicator &&
														(0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, {
															children:
																!hideProgressText && hideProgressIndicator
																	? (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																			className: 'ss__load-more__progress__text',
																			children: `${store.end} / ${store.totalResults}`,
																	  })
																	: hideProgressIndicator
																	? (0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, {})
																	: (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																			className: 'ss__load-more__progress__indicator',
																			children: (0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
																				className: 'ss__load-more__progress__indicator__radial',
																				children: [
																					(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																						className:
																							'ss__load-more__progress__indicator__radial__mask ss__load-more__progress__indicator__radial__mask--full',
																						children: (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																							className: 'ss__load-more__progress__indicator__radial__mask__fill',
																						}),
																					}),
																					(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																						className:
																							'ss__load-more__progress__indicator__radial__mask ss__load-more__progress__indicator__radial__mask--half',
																						children: (0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
																							className: 'ss__load-more__progress__indicator__radial__mask__fill',
																						}),
																					}),
																					(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
																						className: 'ss__load-more__progress__text',
																						children: [' ', hideProgressText ? '' : `${store.end} / ${store.totalResults}`],
																					}),
																				],
																			}),
																	  }),
														}),
												],
											}),
									],
								}),
						  })
						: (0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, {});
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
		'./components/src/hooks/useIntersection.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { v: () => useIntersection });
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js');
			const useIntersection = (ref, rootMargin = '0px', fireOnce = !1) => {
				const [isIntersecting, setIntersecting] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(!1);
				return (
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
						const observer = new IntersectionObserver(
							([entry]) => {
								setIntersecting(entry.isIntersecting), fireOnce && entry.isIntersecting && observer.unobserve(ref.current);
							},
							{ rootMargin }
						);
						return (
							ref.current && observer.observe(ref.current),
							() => {
								observer.unobserve(ref.current);
							}
						);
					}, []),
					isIntersecting
				);
			};
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
