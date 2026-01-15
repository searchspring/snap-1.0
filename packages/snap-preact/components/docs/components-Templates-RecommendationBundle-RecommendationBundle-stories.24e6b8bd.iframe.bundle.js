'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[6225],
	{
		'./components/src/components/Molecules/Checkbox/Checkbox.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { S: () => Checkbox });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/utilities/defined.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_Atoms_Icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./components/src/components/Atoms/Icon/Icon.tsx'),
				_hooks_useA11y__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/src/hooks/useA11y.tsx'),
				_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/hooks/useLang.tsx'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
			const defaultStyles = ({ size, color, theme, native }) => {
					const pixelSize = isNaN(Number(size)) ? size : `${size}px`;
					return native
						? (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({})
						: (0, _emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({
								display: 'inline-flex',
								alignItems: 'center',
								justifyContent: 'center',
								height: pixelSize,
								width: pixelSize,
								border: `1px solid ${color || theme?.variables?.colors?.primary || '#333'}`,
								'&.ss__checkbox--disabled': { opacity: 0.7 },
								'& .ss__checkbox__empty': { display: 'inline-block', width: `calc(${size} - 30%)`, height: `calc(${size} - 30%)` },
						  });
				},
				Checkbox = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_5__.u)(),
						defaultProps = { size: '12px', startChecked: !1, disableA11y: !1, treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_6__.LU)() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_7__.v6)('checkbox', globalTheme, defaultProps, properties),
						{
							checked,
							color,
							disabled,
							icon,
							iconColor,
							onClick,
							size,
							startChecked,
							native,
							disableA11y,
							disableStyles,
							className,
							internalClassName,
							theme,
							treePath,
							lang,
							style: _,
							styleScript: __,
							themeStyleScript: ___,
							name: ____,
							...additionalProps
						} = props,
						pixelSize = isNaN(Number(size)) ? size : `${size}px`,
						subProps_icon = {
							internalClassName: 'ss__checkbox__icon',
							icon: 'check-thin',
							...(0, _utilities__WEBPACK_IMPORTED_MODULE_8__.s)({
								color: iconColor || color || theme?.variables?.colors?.primary,
								disableStyles,
								icon,
								size: pixelSize && `calc(${pixelSize} - 30%)`,
							}),
							theme: props.theme,
							treePath,
						};
					let checkedState, setCheckedState;
					const stateful = void 0 === checked;
					stateful ? ([checkedState, setCheckedState] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(startChecked)) : (checkedState = checked);
					const clickFunc = (e) => {
							disabled || (stateful && setCheckedState && setCheckedState((prev) => !prev), onClick && onClick(e));
						},
						styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)(props, defaultStyles),
						_lang = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()({ checkbox: {} }, lang || {}),
						mergedLang = (0, _hooks__WEBPACK_IMPORTED_MODULE_10__.u)(_lang, { checkedState, disabled });
					return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_providers__WEBPACK_IMPORTED_MODULE_12__._, {
						children: native
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('input', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
										'ss__checkbox',
										'ss__checkbox--native',
										{ 'ss__checkbox--disabled': disabled, 'ss__checkbox--active': checkedState },
										className,
										internalClassName
									),
									type: 'checkbox',
									'aria-checked': checkedState,
									onClick: (e) => clickFunc(e),
									disabled,
									checked: checkedState,
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('span', {
									...styling,
									className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
										'ss__checkbox',
										{ 'ss__checkbox--disabled': disabled, 'ss__checkbox--active': checkedState },
										className,
										internalClassName
									),
									onClick: (e) => clickFunc(e),
									ref: (e) => (disableA11y ? null : (0, _hooks_useA11y__WEBPACK_IMPORTED_MODULE_13__.iy)(e)),
									'aria-disabled': disabled,
									role: 'checkbox',
									'aria-checked': checkedState,
									...additionalProps,
									...mergedLang.checkbox.all,
									children: checkedState
										? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_Atoms_Icon__WEBPACK_IMPORTED_MODULE_14__.I, {
												...subProps_icon,
												...('string' == typeof icon ? { icon } : icon),
										  })
										: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)('span', { className: 'ss__checkbox__empty' }),
							  }),
					});
				});
		},
		'./components/src/components/Templates/RecommendationBundle/RecommendationBundle.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => RecommendationBundle_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				RecommendationBundle = __webpack_require__('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				snapify = __webpack_require__('./components/src/utilities/snapify.ts');
			var paths = __webpack_require__('./components/src/components/Atoms/Icon/paths.tsx');
			const RecommendationBundle_stories = {
					title: 'Templates/RecommendationBundle',
					component: RecommendationBundle.g,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# RecommendationBundle\n\nRenders a recommended bundle of products with seed, carousel of recommendations and add to cart display.\n\n## Sub-components\n- Carousel\n- Result (default)\n\n## Usage\n```jsx\nimport { RecommendationBundle } from '@searchspring/snap-preact-components';\n```\n\nAdditional [Swiper Component Props](https://swiperjs.com/react#swiper-props) can be specified, but may need to be camelCased where appropriate.\nAdditional [Swiper Modules](https://swiperjs.com/swiper-api#modules) can be provided via the `modules` prop; these may need additional props and or stylesheets.\n\n### controller\nThe required `controller` prop specifies a reference to the RecommendationController\n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n### onAddToCart \nthe `onAddToCart` prop sets a the callback function for when a add to cart button is clicked. This function will be passed an array of selected item ids and their quantities. \n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n### results\nThe `results` prop specifies a reference to the results store array to use instead of the default `controller.store.results`. Note the first result will be displayed as the `seed` product. \n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} results={controller.store.results} />\n```\n\n### carousel \nThe `carousel` prop specifies an object of carousel settings. These settings will be merged with the default settings (listed below). All valid Carousel component props (and any non-documented SwiperJS props) can be used here. The below example uses the `prevButton`, `nextButton` and `loop` props from the Carousel:\n\n```jsx\ntype BundleCarouselProps = {\n\tenabled: boolean;\n\tseedInCarousel?: boolean;\n} & CarouselProps\n\nconst customCarouselProps = {\n\tenabled: true,\n\tloop: false,\n\tprevButton: 'Previous',\n\tnextButton: 'Next'\n}\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ customCarouselProps } />\n```\n\n### enabled\nThe `enabled` prop is a sub prop under the `carousel` prop. It specifies weather the bundle should render as a carousel or not.\n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ enabled:false } />\n```\n\n### hideSeed\nThe `hideSeed` prop specifies if the seed result should be rendered or not.  \n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideSeed={true} />\n```\n\n### seedInCarousel\nThe `seedInCarousel` prop is a sub prop under the `carousel` prop. It specifies if the seed product should be included in the carousel or not.  \n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ seedInCarousel:true } />\n```\n\n### pagination\nThe `pagination` prop is a sub prop under the `carousel` prop. It specifies if the carousel should display pagination dots. \n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ pagination:true } />\n```\n\n### hideButtons\nThe `hideButtons` is a sub prop under the `carousel` prop. It specifies if the carousel should hide prev/next buttons.\n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ hideButtons:true }><Recommendation/>\n```\n\n### prevButton\nThe `prevButton` prop is a sub prop under the `carousel` prop. It specifies the previous button element of the carousel. This can be a string or JSX element. \n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ prevButton: '<' } />\n```\n\n### nextButton\nThe `nextButton` prop  is a sub prop under the `carousel` prop. It specifies the next button element of the carousel. This can be a string or JSX element. \n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} carousel={ nextButton: '>' } />\n```\n\n### title\nThe `title` prop specifies the bundle title\n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} title={'Recommended Bundle'} />\n```\n\n### description\nThe `description` prop specifies the bundle description\n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} description={'Recommended Bundle products are so awesome!'} />\n```\n\n### resultComponent\nThe `resultComponent` prop allows for a custom result component to be rendered. This component will be passed the following props -\n\n```jsx\n\t{ \n\t\tresult: Product, \n\t\tseed: boolean, \n\t\tselected: boolean, \n\t\tonProductSelect: (result:Product) => void\n\t}\n```\n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} resultComponent={<ResultSlot />} />\n```\n\n### ctaButtonText\nThe `ctaButtonText` prop specifies the inner text to render in the add to cart button.\n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonText={'Add Bundle'} />\n```\n\n### ctaButtonSuccessText\nThe `ctaButtonSuccessText` prop specifies text to temporarily render in the add to cart button after it is clicked.\n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessText={'Thanks for Shopping!'} />\n```\n\n### ctaButtonSuccessTimeout\nThe `ctaButtonSuccessTimeout` prop specifies number of ms to show success text in add to cart button before reverting back to normal text\n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaButtonSuccessTimeout={1500} />\n```\n\n### ctaIcon\nThe `ctaIcon` prop specifies the icon to render in the CTA. Takes an object with `Icon` component props or a string.     \n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaIcon={'bag'} />\n```\n\n### ctaInline\nThe `ctaInline` prop specifies if the add to cart display should be block or inline witht the carousel.\n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaInline={true} />\n```\n\n### ctaSlot\nThe `ctaSlot` prop allows for a custom add to cart cta component to be rendered. This component will be passed the following props -\n\n```jsx\t\n\t{ \n\t\tcartStore: CartStore;\n\t\tonclick: (e:any) => void\n\t}\n```\n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} ctaSlot={<CTASlot />} />\n```\n\n### preselectedCount\nThe `preselectedCount` prop specifies how many products in the bundle will be preselected. This number will include the seed. Example `preselectedCount={3}` would be `seed` + 2 preselected items. If not provided, this will default to however many products are initially visible. \n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} preselectedCount={4} />\n```\n\n### seedText\nThe `seedText` prop specifies text to be rendered as a badge in the seed product.   \n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} seedText={\"Main Product\"} />\n```\n\n### separatorIcon\nThe `separatorIcon` prop specifies the icon to render between products. Takes an object with `Icon` component props or a string.     \n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} separatorIcon={'cog'} />\n```\n\n### separatorIconSeedOnly\nThe `separatorIconSeedOnly` prop specifies if the seperator Icon should only be rendered after the seed or after every product.     \n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} separatorIconSeedOnly={true} />\n```\n\n\n### hideCheckboxes\nThe `hideCheckboxes` prop specifies if the bundle checkboxes should be rendered. \n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideCheckboxes={true} />\n```\n\n### vertical\nThe `vertical` prop sets the carousel scroll direction to vertical.\n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} vertical={true} />\n```\n\n### hideSeedText\nThe `hideSeedText` prop sets determines if the seed text should render.\n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} hideSeedText={true} />\n```\n\n\n### limit\nThe `limit` prop limits the number of products rendered.\n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} vertical={true} limit={5} />\n```\n\n### modules\nThe `modules` prop accepts additional [Swiper Modules](https://swiperjs.com/swiper-api#modules) - these may need additional props and or stylesheets to function. We include `Navigation` and `Pagination` modules by default.\n\n```jsx\nimport { Scrollbar } from 'swiper';\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} modules={[Scrollbar]} scrollbar={{ draggable: true }} />\n```\n\n### lazyRender \nThe `lazyRender` prop specifies an object of lazy rendering settings. The settings include an `enable` toggle (defaults to `true`) as well as an `offset` (default `\"10%\"`) to specify at what distance the component should start rendering relative to the bottom of the viewport.\n\n```jsx\nconst customLazyRenderProps = {\n\tenabled: true,\n\toffset: \"20px\" // any css margin values accepted - px, %, etc...\n}\n\n<RecommendationBundle controller={controller} lazyRender={ customLazyRenderProps } onAddToCart={(e, items)=>{console.log(items)}} />\n```\n\n### breakpoints\nAn object that modifies the responsive behavior of the carousel at various viewports. \n\nThe object key specified the viewport for when the parameters will be applied. \n\nThe default configuration contains the following properties, however **`any BundleRecommendation props`**, or [Swiper API parameters](https://swiperjs.com/react#swiper-props) can also be specified. \n\n`slidesPerView` - number of products to display per page\n\n`slidesPerGroup` - number of products to scroll by when next/previous button is clicked\n\n`spaceBetween` - spacing between each product\n\n```typescript\nconst defaultRecommendationBreakpoints = {\n\t0: {\n\t\tcarousel: {\n\t\t\tenabled: false,\n\t\t},\n\t\tlimit: 2\n\t},\n\t768: {\n\t\tslidesPerView: 3,\n\t\tslidesPerGroup: 3,\n\t\tspaceBetween: 10,\n\t},\n\t1024: {\n\t\tslidesPerView: 3,\n\t\tslidesPerGroup: 3,\n\t\tspaceBetween: 10,\n\t},\n\t1200: {\n\t\tslidesPerView: 4,\n\t\tslidesPerGroup: 4,\n\t\tspaceBetween: 10,\n\t},\n};\n```\n\n```jsx\n<RecommendationBundle controller={controller} onAddToCart={(e, items)=>{console.log(items)}} breakpoints={defaultRecommendationBreakpoints} />\n```\n\n",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					decorators: [
						(Story) =>
							(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
								style: { maxWidth: '900px', height: '500px' },
								children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Story, {}),
							}),
					],
					argTypes: {
						controller: {
							description: 'Controller reference',
							type: { required: !0 },
							table: { type: { summary: 'Controller' } },
							control: { type: 'none' },
						},
						results: {
							description: 'Results store reference, overrides controller.store.results',
							type: { required: !1 },
							table: { type: { summary: 'Results store object' } },
							control: { type: 'none' },
						},
						resultComponent: { description: 'Slot for custom result component', table: { type: { summary: 'component' } } },
						title: {
							description: 'recommendation bundle title',
							table: { type: { summary: 'string | JSX Element' }, defaultValue: { summary: '' } },
							control: { type: 'text' },
						},
						description: {
							description: 'recommendation bundle description',
							table: { type: { summary: 'string | JSX Element' }, defaultValue: { summary: '' } },
							control: { type: 'text' },
						},
						onAddToCart: {
							description: 'onClick event handler for add bundle to cart button in CTA',
							table: { type: { summary: 'function' } },
							action: 'onAddToCart',
						},
						limit: { description: 'limit the number of results rendered', table: { type: { summary: 'number' } }, control: { type: 'number' } },
						carousel: {
							description: 'Carousel settings object',
							defaultValue: { enabled: !0, loop: !1 },
							table: { type: { summary: 'object' }, defaultValue: { summary: 'Carousel settings object' } },
							control: { type: 'object' },
						},
						preselectedCount: {
							description: 'Number of results to have selected by default. (seed included)',
							table: { type: { summary: 'number' } },
							control: { type: 'number' },
						},
						hideCheckboxes: {
							defaultValue: !1,
							description: 'Hide/show bundle checkboxes in results',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						seedText: {
							description: 'Text to render in seed product badge',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'Seed Product' } },
							control: { type: 'text' },
						},
						hideSeedText: {
							description: 'Hide seed product badge text',
							defaultValue: !1,
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideSeed: {
							description: 'Hide/show seed result',
							defaultValue: !1,
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						vertical: {
							description: 'set the recommendation to render vertically',
							defaultValue: !1,
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						separatorIconSeedOnly: {
							description: 'boolean to only have seperator Icon for the seed product',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
							control: { type: 'boolean' },
						},
						separatorIcon: {
							defaultValue: 'plus',
							description: 'Icon to render between results',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'plus' } },
							control: { type: 'select', options: [...Object.keys(paths.c)] },
						},
						ctaButtonText: {
							description: 'text to render in add to cart button',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'Add All To Cart' } },
							control: { type: 'text' },
						},
						ctaIcon: {
							desciption: 'The `ctaIcon` prop specifies the icon to render in the CTA. Takes an object with `Icon` component props or a string.',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'bag' } },
							control: { type: 'select', options: [...Object.keys(paths.c)] },
						},
						ctaButtonSuccessText: {
							description: 'text to temporarily render in the add to cart button after it is clicked',
							table: { type: { summary: 'string' }, defaultValue: { summary: 'Bundle Added!' } },
							control: { type: 'text' },
						},
						ctaButtonSuccessTimeout: {
							description: 'Number of ms to show success text in add to cart button before reverting back to normal text',
							defaultValue: 2e3,
							table: { type: { summary: 'number' } },
							control: { type: 'number' },
						},
						ctaInline: {
							description: 'boolean to enable the stacked add to cart button display',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
							control: { type: 'boolean' },
						},
						ctaSlot: { description: 'Slot for custom add to cart component', table: { type: { summary: 'component' } } },
						lazyRender: {
							description: 'Lazy render settings object',
							defaultValue: { enabled: !0, offset: '10%' },
							table: { type: { summary: 'object' }, defaultValue: { summary: 'Lazy render settings object' } },
							control: { type: 'object' },
						},
						breakpoints: {
							defaultValue: void 0,
							description: 'Recommendation title',
							table: { type: { summary: 'object' }, defaultValue: { summary: 'Breakpoint object' } },
							control: { type: 'object' },
						},
						modules: { description: 'additional swiper modules to use', table: { type: { summary: 'object' } }, control: { type: 'object' } },
						...componentArgs.F,
					},
				},
				snapInstance = snapify.p.recommendation({
					id: 'RecommendationBundle',
					tag: 'bundle',
					globals: { siteId: 'atkzs2', products: ['C-AD-W1-1869P'] },
				}),
				Default = (props, { loaded: { controller } }) =>
					(0, emotion_react_jsx_runtime_browser_esm.Y)(RecommendationBundle.g, { ...props, controller, results: controller.store.results });
			(Default.loaders = [
				async () => (
					snapInstance.on('afterStore', async ({ controller }, next) => {
						controller.store.results.forEach((result) => (result.mappings.core.url = 'javascript:void(0);')), await next();
					}),
					await snapInstance.search(),
					{ controller: snapInstance }
				),
			]),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: {
							originalSource:
								'(props: RecommendationBundleProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: RecommendationController;\n  };\n}) => {\n  return <RecommendationBundle {...props} controller={controller} results={controller.store.results} />;\n}',
							...Default.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default'];
		},
		'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { o: () => ResultTracker });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				_emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
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
						setIntersecting(!1);
						let observer = null,
							pollInterval = null;
						if (!window.IntersectionObserver || !ref.current) return;
						const clearPoll = () => {
								pollInterval && (window.clearInterval(pollInterval), (pollInterval = null));
							},
							handleVisible = () => {
								minVisibleTime > 0
									? ((visibleStartRef.current = Date.now()),
									  visibleTimerRef.current && window.clearTimeout(visibleTimerRef.current),
									  (visibleTimerRef.current = window.setTimeout(() => {
											setIntersecting(!0), fireOnce && ref.current && observer && observer.unobserve(ref.current);
									  }, minVisibleTime)))
									: (setIntersecting(!0), fireOnce && ref.current && observer && observer.unobserve(ref.current));
							},
							handleHidden = () => {
								visibleTimerRef.current && window.clearTimeout(visibleTimerRef.current),
									(visibleTimerRef.current = null),
									(visibleStartRef.current = null),
									setIntersecting(!1);
							};
						return (
							(observer = new IntersectionObserver(
								([entry]) => {
									entry.isIntersecting
										? ref.current && elementIsVisible(ref.current)
											? (clearPoll(), handleVisible())
											: (handleHidden(),
											  pollInterval ||
													(pollInterval = window.setInterval(() => {
														ref.current ? elementIsVisible(ref.current) && (clearPoll(), handleVisible()) : clearPoll();
													}, 250)))
										: (clearPoll(), handleHidden());
								},
								{ rootMargin, threshold }
							)),
							ref.current && observer.observe(ref.current),
							() => {
								setIntersecting(!1),
									clearPoll(),
									visibleTimerRef.current && window.clearTimeout(visibleTimerRef.current),
									observer && ref.current && observer.unobserve(ref.current);
							}
						);
					}, [ref, resetKey]),
					isIntersecting
				);
			};
			function elementIsVisible(el) {
				return !el || !('checkVisibility' in el) || el.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 });
			}
		},
		'./components/src/utilities/componentNameToClassName.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { b: () => componentNameToClassName });
			const componentNameToClassName = (name) => name.replace(/([A-Z])/g, (match) => '-' + match.toLowerCase());
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
