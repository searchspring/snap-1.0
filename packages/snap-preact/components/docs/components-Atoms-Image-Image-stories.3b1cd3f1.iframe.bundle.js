(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[5126],
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
		'./components/src/components/Atoms/Image/Image.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					BrokenImg: () => BrokenImg,
					Default: () => Default,
					ManualFallBack: () => ManualFallBack,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => Image_stories,
					onhover: () => onhover,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				Image = __webpack_require__('./components/src/components/Atoms/Image/Image.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts');
			const searchResponse_product1 = {
					image: 'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_thumb_med/12_14_reddress11531_thumb_med.jpg',
					name: 'Elevated Classic White Shirt Dress',
				},
				searchResponse_product2 = {
					image:
						'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_thumb_med/110_lcp_9262_copyright_loganpotterf_2016_thumb_med.jpg',
					name: 'Cambridge Classic White Shirt Dress',
				},
				Image_stories = {
					title: 'Atoms/Image',
					component: Image._,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# Image\n\nRenders an Image with fallback and rollover functionality. \n\n## Usage\n\n### src\nThe required `src` prop specifies the URL of the image to render.\n\n```jsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' />\n```\n\n### alt\nThe required `alt` prop is the image `alt` attribute.\n\n```jsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' />\n```\n\n### fallback\nThe `fallback` prop specifies the URL of the fallback image to render if the primary image fails to load.\n\n```jsx\n<Image src={searchResponse.results.mappings.core.imageUrl} fallback='https://www.example.com/image.jpg' alt='image' />\n```\n\n### hoverSrc\nThe `hoverSrc` prop specifiesthe URL of the alternative image to display on hover.\n\n```jsx\n<Image src={searchResponse.results.mappings.core.imageUrl} hoverSrc={searchResponse.results.mappings.core.hoverImg} alt='image' />\n```\n\n### height\nThe `height` prop is used to set a height on the image. \n\n```jsx\n<Image src={searchResponse.results.mappings.core.imageUrl} height={'250px'} alt='image' />\n```\n\n### lazy\nThe `lazy` prop is used to disable the lazy loading feature. Enabled by default. \n\n```jsx\n<Image src={searchResponse.results.mappings.core.imageUrl} lazy={false} alt='image' />\n```\n\n### Events\n\n#### onMouseOver\nThe `onMouseOver` prop allows for a custom callback function when the mouse cursor enters the image.\n\n```jsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onMouseOver={(e)=>{console.log(e)}} />\n```\n\n#### onMouseOut\nThe `onMouseOut` prop allows for a custom callback function when the mouse cursor leaves the image.\n\n```jsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onMouseOut={(e)=>{console.log(e)}} />\n```\n\n#### onError\nThe `onError` prop allows for a custom callback function when the image has encountered an error.\n\n```jsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onError={(e)=>{console.log(e)}} />\n```\n\n#### onLoad\nThe `onLoad` prop allows for a custom callback function when the image has finished loading.\n\n```jsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onLoad={(e)=>{console.log(e)}} />\n```\n\n#### onClick\nThe `onClick` prop allows for a custom callback function when the image is clicked. \n\n```jsx\n<Image src={searchResponse.results.mappings.core.imageUrl} alt='image' onClick={(e)=>{console.log(e)}} />\n```\n",
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
						src: { description: 'Image url', type: { required: !0 }, table: { type: { summary: 'string' } }, control: { type: 'text' } },
						alt: { description: 'Image alt text', type: { required: !0 }, table: { type: { summary: 'string' } }, control: { type: 'text' } },
						height: { description: 'Image height', table: { type: { summary: 'string' } }, control: { type: 'text' } },
						fallback: {
							description: 'Fallback image url',
							defaultValue: Image.t,
							table: { type: { summary: 'string' }, defaultValue: { summary: 'string' } },
							control: { type: 'text' },
						},
						lazy: {
							defaultValue: !0,
							description: 'Image lazy loading',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
							control: { type: 'boolean' },
						},
						hoverSrc: { description: 'Image onHover url', table: { type: { summary: 'string' } }, control: { type: 'text' } },
						onError: {
							description: 'Image error event handler',
							table: { type: { summary: 'function' } },
							control: { type: 'none' },
							action: 'onError',
						},
						onLoad: {
							description: 'Image loaded event handler',
							table: { type: { summary: 'function' } },
							control: { type: 'none' },
							action: 'onLoad',
						},
						onClick: {
							description: 'Image click event handler',
							table: { type: { summary: 'function' } },
							control: { type: 'none' },
							action: 'onClick',
						},
						onMouseOver: {
							description: 'Image mouse enter event handler',
							table: { type: { summary: 'function' } },
							control: { type: 'none' },
							action: 'onMouseOver',
						},
						onMouseOut: {
							description: 'Image mouse exit event handler',
							table: { type: { summary: 'function' } },
							control: { type: 'none' },
							action: 'onMouseOut',
						},
						...componentArgs.F,
					},
				},
				Default = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Image._, { ...args, style: { width: '100%' } });
			Default.args = { src: searchResponse_product1.image, alt: searchResponse_product1.name };
			const BrokenImg = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Image._, { ...args, style: { width: '100%' } });
			BrokenImg.args = { src: 'intentionally_broken_image.jpg', alt: searchResponse_product1.name };
			const ManualFallBack = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Image._, { ...args, style: { width: '100%' } });
			ManualFallBack.args = { src: 'intentionally_broken_image.jpg', alt: searchResponse_product1.name, fallback: searchResponse_product1.image };
			const onhover = (args) => (0, emotion_react_jsx_runtime_browser_esm.Y)(Image._, { ...args, style: { width: '100%' } });
			(onhover.args = { src: searchResponse_product1.image, alt: searchResponse_product1.name, hoverSrc: searchResponse_product2.image }),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: {
							originalSource: "(args: ImageProps) => <Image {...args} style={{\n  width: '100%'\n}} />",
							...Default.parameters?.docs?.source,
						},
					},
				}),
				(BrokenImg.parameters = {
					...BrokenImg.parameters,
					docs: {
						...BrokenImg.parameters?.docs,
						source: {
							originalSource: "(args: ImageProps) => <Image {...args} style={{\n  width: '100%'\n}} />",
							...BrokenImg.parameters?.docs?.source,
						},
					},
				}),
				(ManualFallBack.parameters = {
					...ManualFallBack.parameters,
					docs: {
						...ManualFallBack.parameters?.docs,
						source: {
							originalSource: "(args: ImageProps) => <Image {...args} style={{\n  width: '100%'\n}} />",
							...ManualFallBack.parameters?.docs?.source,
						},
					},
				}),
				(onhover.parameters = {
					...onhover.parameters,
					docs: {
						...onhover.parameters?.docs,
						source: {
							originalSource: "(args: ImageProps) => <Image {...args} style={{\n  width: '100%'\n}} />",
							...onhover.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default', 'BrokenImg', 'ManualFallBack', 'onhover'];
		},
		'./components/src/components/Atoms/Image/Image.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { _: () => Image, t: () => FALLBACK_IMAGE_URL });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/classnames/index.js'),
				classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),
				_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/src/providers/treePath.tsx'),
				_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./components/src/providers/cache.tsx'),
				_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./components/src/utilities/mergeStyles.ts');
			const FALLBACK_IMAGE_URL = '//cdn.searchspring.net/ajax_search/img/default_image.png',
				defaultStyles = ({ height }) =>
					(0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						height: height || 'auto',
						'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
						'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
					});
			function Image(properties) {
				const globalTheme = (0, _providers__WEBPACK_IMPORTED_MODULE_3__.u)(),
					globalTreePath = (0, _providers__WEBPACK_IMPORTED_MODULE_4__.LU)(),
					defaultProps = { fallback: FALLBACK_IMAGE_URL, lazy: !0, treePath: globalTreePath },
					props = (0, _utilities__WEBPACK_IMPORTED_MODULE_5__.v6)('image', globalTheme, defaultProps, properties),
					{ alt, src, fallback, hoverSrc, lazy, onMouseOver, onMouseOut, onError, onLoad, onClick, className, internalClassName } = props,
					[visibile, setVisibile] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(!1),
					[isHovering, setHover] = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(!1),
					prevSrcRef = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li)('');
				(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(() => {
					prevSrcRef.current = src;
				}),
					prevSrcRef.current && prevSrcRef.current != src && setVisibile(!1);
				const styling = (0, _utilities__WEBPACK_IMPORTED_MODULE_6__.Z)(props, defaultStyles);
				return (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_providers__WEBPACK_IMPORTED_MODULE_8__._, {
					children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)('div', {
						...styling,
						className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
							'ss__image',
							{ 'ss__image--hidden': !visibile },
							className,
							internalClassName
						),
						children: (0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)('img', {
							src: (isHovering ? hoverSrc : src) || fallback,
							alt,
							title: alt,
							loading: lazy ? 'lazy' : void 0,
							onLoad: (e) => {
								setVisibile(!0), onLoad && onLoad(e);
							},
							onClick: (e) => onClick && onClick(e),
							onError: (e) => {
								(e.target.src = fallback || ''), onError && onError(e);
							},
							onMouseOver: (e) => {
								hoverSrc && setHover(!0), onMouseOver && onMouseOver(e);
							},
							onMouseOut: (e) => {
								hoverSrc && setHover(!1), onMouseOut && onMouseOut(e);
							},
						}),
					}),
				});
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
