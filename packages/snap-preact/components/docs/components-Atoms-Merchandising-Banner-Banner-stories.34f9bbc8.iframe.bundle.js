'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[4143],
	{
		'./components/src/components/Atoms/Merchandising/Banner/Banner.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Footer: () => Footer,
					Header: () => Header,
					Left: () => Left,
					Secondary: () => Secondary,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => Banner_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				Banner = __webpack_require__('./components/src/components/Atoms/Merchandising/Banner/Banner.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				snapify = __webpack_require__('./components/src/utilities/snapify.ts');
			const Banner_stories = {
					title: 'Atoms/Banner',
					component: Banner.l,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# Banner\n\nRenders a merchandising banner. Banner Types include `header`, `footer`, `left`, and `banner`. \n\nThis `Banner` component does not support inline banners. See `InlineBanner` component below.\n\n## Usage\n\n### content\nThe required `content` prop specifies an object of banners returned from the Searchspring API.\n\n```jsx\n<Banner content={controller?.store?.merchandising?.content} type={'header'} />\n```\n\n### type\nThe required `type` prop specifies the banner type to render from the `content` object.\n\nBanner Types include `header`, `footer`, `left`, and `banner`. \n\n```jsx\n<Banner content={controller?.store?.merchandising?.content} type={'header'} />\n```\n\n```jsx\n<Banner content={controller?.store?.merchandising?.content} type={'footer'} />\n```\n\n```jsx\n<Banner content={controller?.store?.merchandising?.content} type={'left'} />\n```\n\n```jsx\n<Banner content={controller?.store?.merchandising?.content} type={'banner'} />\n```",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					argTypes: {
						content: {
							description: 'Banner content store reference',
							type: { required: !0 },
							table: { type: { summary: 'banner content store object' } },
							control: { type: 'none' },
						},
						type: {
							description: 'Banner position type',
							type: { required: !0 },
							table: { type: { summary: 'string' } },
							options: ['header', 'footer', 'left', 'inline', 'banner'],
							control: { type: 'select' },
						},
						...componentArgs.F,
					},
				},
				snapInstance = snapify.p.search({ id: 'Banner', globals: { siteId: '8uyt2m', search: { query: { string: 'glasses' } } } }),
				Header = (args, { loaded: { controller } }) =>
					(0, emotion_react_jsx_runtime_browser_esm.Y)(Banner.l, { ...args, content: controller?.store?.merchandising?.content });
			(Header.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })]), (Header.args = { type: 'header' });
			const Footer = (args, { loaded: { controller } }) =>
				(0, emotion_react_jsx_runtime_browser_esm.Y)(Banner.l, { ...args, content: controller?.store?.merchandising?.content });
			(Footer.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })]), (Footer.args = { type: 'footer' });
			const Secondary = (args, { loaded: { controller } }) =>
				(0, emotion_react_jsx_runtime_browser_esm.Y)(Banner.l, { ...args, content: controller?.store?.merchandising?.content });
			(Secondary.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })]), (Secondary.args = { type: 'banner' });
			const Left = (args, { loaded: { controller } }) =>
				(0, emotion_react_jsx_runtime_browser_esm.Y)(Banner.l, { ...args, content: controller?.store?.merchandising?.content });
			(Left.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })]),
				(Left.args = { type: 'left' }),
				(Header.parameters = {
					...Header.parameters,
					docs: {
						...Header.parameters?.docs,
						source: {
							originalSource:
								'(args: BannerProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => <Banner {...args} content={controller?.store?.merchandising?.content} />',
							...Header.parameters?.docs?.source,
						},
					},
				}),
				(Footer.parameters = {
					...Footer.parameters,
					docs: {
						...Footer.parameters?.docs,
						source: {
							originalSource:
								'(args: BannerProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => <Banner {...args} content={controller?.store?.merchandising?.content} />',
							...Footer.parameters?.docs?.source,
						},
					},
				}),
				(Secondary.parameters = {
					...Secondary.parameters,
					docs: {
						...Secondary.parameters?.docs,
						source: {
							originalSource:
								'(args: BannerProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => <Banner {...args} content={controller?.store?.merchandising?.content} />',
							...Secondary.parameters?.docs?.source,
						},
					},
				}),
				(Left.parameters = {
					...Left.parameters,
					docs: {
						...Left.parameters?.docs,
						source: {
							originalSource:
								'(args: BannerProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => <Banner {...args} content={controller?.store?.merchandising?.content} />',
							...Left.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Header', 'Footer', 'Secondary', 'Left'];
		},
		'./components/src/components/Atoms/Merchandising/Banner/Banner.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { l: () => Banner });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/mobx-react-lite/es/index.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./components/src/utilities/mergeStyles.ts'),
				_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					'../snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'
				);
			const defaultStyles = () =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({
						' *': { boxSizing: 'border-box' },
						'& iframe, img': { maxWidth: '100%', height: 'auto' },
					}),
				Banner = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.PA)((properties) => {
					const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.u)(),
						defaultProps = { treePath: (0, _providers__WEBPACK_IMPORTED_MODULE_5__.LU)() },
						props = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.v6)('banner', globalTheme, defaultProps, properties),
						{ controller, type, className, internalClassName } = props,
						content = props.content || controller?.store?.merchandising.content;
					if (type === _searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_7__.c.INLINE)
						return (
							console.warn(
								`BannerType '${_searchspring_snap_store_mobx__WEBPACK_IMPORTED_MODULE_7__.c.INLINE}' is not supported in <Banner /> component`
							),
							(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
						);
					const styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_9__.Z)(props, defaultStyles);
					let bannerContent;
					return (
						content && content[type] && (bannerContent = content[type]),
						bannerContent && bannerContent.length
							? (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_providers__WEBPACK_IMPORTED_MODULE_10__._, {
									children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)('div', {
										className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ss__banner', `ss__banner--${type}`, className, internalClassName),
										...styling,
										dangerouslySetInnerHTML: { __html: bannerContent.join('') },
									}),
							  })
							: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(preact__WEBPACK_IMPORTED_MODULE_0__.FK, {})
					);
				});
		},
	},
]);
