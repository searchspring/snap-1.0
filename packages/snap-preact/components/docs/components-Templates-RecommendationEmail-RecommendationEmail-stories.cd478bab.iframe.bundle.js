'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[8241],
	{
		'./components/src/components/Templates/RecommendationEmail/RecommendationEmail.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => RecommendationEmail_stories,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				preact_module = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				mobxreact_esm = __webpack_require__('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
				Result = __webpack_require__('./components/src/components/Molecules/Result/Result.tsx'),
				mergeProps = __webpack_require__('./components/src/utilities/mergeProps.ts'),
				defined = __webpack_require__('./components/src/utilities/defined.ts'),
				emotion_element_5486c51c_browser_esm = __webpack_require__('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js');
			const RecommendationEmail = (0, mobxreact_esm.PA)((properties) => {
				const globalTheme = (0, emotion_element_5486c51c_browser_esm.u)(),
					props = (0, mergeProps.v6)('recommendationEmail', globalTheme, { resultWidth: '240px' }, properties),
					{ controller, results, resultComponent, resultProps, resultWidth, treePath, disableStyles } = props,
					subProps_result = { className: 'ss__recommendation-email__result', ...(0, defined.s)({ disableStyles }), theme: props?.theme, treePath },
					resultsToRender = results || controller?.store?.results || [];
				return resultsToRender.length > 0
					? (0, emotion_react_jsx_runtime_browser_esm.Y)(preact_module.FK, {
							children: resultsToRender.map((result, idx) =>
								(0, emotion_react_jsx_runtime_browser_esm.Y)(
									'div',
									{
										id: `ss-emailrec${idx}`,
										style: { display: 'block', width: resultWidth },
										children: (() => {
											if (resultComponent) {
												const ResultComponent = resultComponent;
												return (0, emotion_react_jsx_runtime_browser_esm.Y)(ResultComponent, { controller, result, ...resultProps, email: !0 });
											}
											return (0, emotion_react_jsx_runtime_browser_esm.Y)(Result.Q, {
												result,
												hideBadge: !0,
												theme: { components: { image: { lazy: !1 } } },
												...subProps_result,
												...resultProps,
											});
										})(),
									},
									idx
								)
							),
					  })
					: (0, emotion_react_jsx_runtime_browser_esm.Y)(emotion_react_jsx_runtime_browser_esm.FK, {});
			});
			var storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				snapify = __webpack_require__('./components/src/utilities/snapify.ts');
			const RecommendationEmail_stories = {
					title: 'Templates/RecommendationEmail',
					component: RecommendationEmail,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# RecommendationEmail\n\nRenders product result cards to be used in email recommendation profiles. It's designed to render email recommendations in a structured format, optimized for generating images of product cards used for email recommendations. \n\nThis component is not intended for front-end display. It is an internal dependency for Email Recommendations.\n\n## Sub-components\n- Result (default)\n\n## Usage\n\n### controller\nThe `controller` prop specifies a reference to the RecommendationController.\n\n```jsx\n<RecommendationEmail controller={controller} />\n```\n\n### results\nAlternatively if a `controller` prop is not provided, the `results` prop specifies a reference to the results store array to use instead.\n\n```jsx\n<RecommendationEmail results={controller.store.results} />\n```\n\n### resultProps\nThe `resultProps` prop allows you to pass additional props to each result component. These props will be spread onto each rendered result, whether using the default `Result` component or a custom component specified by `resultComponent`.\n\n```jsx\n<RecommendationEmail controller={controller} resultProps={{ shortTitles: true }} />\n```\n\n### resultComponent\nThe `resultComponent` prop allows you to specify a custom component to render each result. If not provided, the default `Result` component will be used.\n\nNote: `resultProps` and `{ email: true }` will be spread as props onto each result component that is rendered.\n\n```jsx\nimport { CustomResult } from '../components/CustomResult';\n\n<RecommendationEmail controller={controller} resultComponent={CustomResult} />\n```\n\n### resultWidth\nThe `resultWidth` prop allows you to specify the width of each result card. This is particularly useful for controlling the layout and sizing of the product cards in email recommendations. The value should be a string representing a valid CSS width.\n\nDefault value: '240px'\n\n```jsx\n<RecommendationEmail controller={controller} resultWidth={'240px'} />\n```\n",
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
						resultComponent: {
							description: 'Custom component to render each result',
							type: { required: !1 },
							table: { type: { summary: 'ResultComponent' } },
							control: { type: 'none' },
						},
						resultProps: {
							description: 'Additional props to pass to each result component',
							type: { required: !1 },
							table: { type: { summary: 'Partial<ResultProps> | Record<string, any>' } },
							control: { type: 'object' },
						},
						resultWidth: {
							description: 'Width of each result card',
							type: { required: !1 },
							table: { type: { summary: 'string' }, defaultValue: { summary: '240px' } },
							control: { type: 'text' },
						},
						...componentArgs.F,
					},
				},
				results = [
					{
						id: '175547',
						mappings: {
							core: {
								uid: '175547',
								name: 'Off She Goes White Skinny Jeans',
								sku: 'C-JU-W1-P1034',
								msrp: 75,
								price: 58,
								thumbnailImageUrl: 'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_thumb_med/use_3_thumb_med.jpg',
								url: '/product/C-JU-W1-P1034',
								rating: '5',
								brand: 'Just USA',
								popularity: 4455,
								imageUrl: 'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_large/use_3_large.jpg',
								ratingCount: 1111,
							},
						},
						attributes: {},
					},
					{
						id: '182022',
						mappings: {
							core: {
								uid: '182022',
								name: 'Stripe Out Blue Off-The-Shoulder Dress',
								sku: 'C-AD-I2-69PST',
								msrp: 50,
								price: 48,
								thumbnailImageUrl:
									'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_thumb_med/2950_copyright_reddressboutique_2017__thumb_med.jpg',
								url: '/product/C-AD-I2-69PST',
								rating: '5',
								brand: 'Adrienne',
								popularity: 1135,
								imageUrl:
									'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_large/2950_copyright_reddressboutique_2017__large.jpg',
								ratingCount: 1111,
							},
						},
						attributes: {},
					},
					{
						id: '177035',
						mappings: {
							core: {
								uid: '177035',
								name: 'Spring Ahead White Print Off-The-Shoulder Dress',
								sku: 'C-AD-W1-906FP',
								msrp: 50,
								price: 48,
								thumbnailImageUrl:
									'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_thumb_med/copyright_rdb_studio_2_4758_thumb_med.jpg',
								url: '/product/C-AD-W1-906FP',
								rating: '5',
								brand: 'Adrienne',
								popularity: 3052,
								imageUrl:
									'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_large/copyright_rdb_studio_2_4758_large.jpg',
								ratingCount: 1111,
							},
						},
						attributes: {},
					},
					{
						id: '182818',
						mappings: {
							core: {
								uid: '182818',
								name: 'Take Me To Havana White Print Off-The-Shoulder Dress',
								sku: 'C-AD-W1-924FP',
								msrp: 50,
								price: 42,
								thumbnailImageUrl:
									'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_thumb_med/4303_copyright_reddressboutique_2017__thumb_med.jpg',
								url: '/product/C-AD-W1-924FP',
								rating: '5',
								brand: 'Adrienne',
								popularity: 752,
								imageUrl:
									'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_large/4303_copyright_reddressboutique_2017__large.jpg',
								ratingCount: 1111,
							},
						},
						attributes: {},
					},
					{
						id: '180178',
						mappings: {
							core: {
								uid: '180178',
								name: 'For The Romantic White Off-The-Shoulder Dress',
								sku: 'C-DB-W1-14107',
								msrp: 50,
								price: 48,
								thumbnailImageUrl:
									'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_thumb_med/17_03_20_studio_26619_thumb_med.jpg',
								url: '/product/C-DB-W1-14107',
								rating: '5',
								brand: 'Ever After',
								popularity: 1404,
								imageUrl: 'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_large/17_03_20_studio_26619_large.jpg',
								ratingCount: 1111,
							},
						},
						attributes: {},
					},
					{
						id: '181323',
						mappings: {
							core: {
								uid: '181323',
								name: 'As Cute As They Come Purple Off-The-Shoulder Dress',
								sku: 'C-EN-V2-D7422',
								msrp: 50,
								price: 44,
								thumbnailImageUrl:
									'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_thumb_med/2940_copyright_reddressboutique_2017__thumb_med.jpg',
								url: '/product/C-EN-V2-D7422',
								rating: '5',
								brand: "Aura L'atiste",
								popularity: 4213,
								imageUrl:
									'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_large/2940_copyright_reddressboutique_2017__large.jpg',
								ratingCount: 1111,
							},
						},
						attributes: {},
					},
					{
						id: '183818',
						mappings: {
							core: {
								uid: '183818',
								name: "Artist's Touch Blue Print Off-The-Shoulder Dress",
								sku: 'C-FT-I4-D5340',
								msrp: 50,
								price: 42,
								thumbnailImageUrl:
									'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_thumb_med/5-31-17adventureswithcarolineandhollyn0624_thumb_med.jpg',
								url: '/product/C-FT-I4-D5340',
								rating: '5',
								brand: 'Flying Tomato',
								popularity: 1342,
								imageUrl:
									'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_large/5-31-17adventureswithcarolineandhollyn0624_large.jpg',
								ratingCount: 1111,
							},
						},
						attributes: {},
					},
					{
						id: '181825',
						mappings: {
							core: {
								uid: '181825',
								name: 'Downtown Romantic Red Floral Print Dress',
								sku: 'C-IL-R4-955BO',
								msrp: 50,
								price: 49,
								thumbnailImageUrl:
									'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_thumb_med/4180_copyright_reddressboutique_2017__thumb_med.jpg',
								url: '/product/C-IL-R4-955BO',
								rating: '5',
								brand: 'Illa Illa',
								popularity: 900,
								imageUrl:
									'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_large/4180_copyright_reddressboutique_2017__large.jpg',
								ratingCount: 1111,
							},
						},
						attributes: {},
					},
					{
						id: '183040',
						mappings: {
							core: {
								uid: '183040',
								name: 'Fringe Airy Feeling White Print Dress',
								sku: 'C-MIT-W1-41080',
								msrp: 50,
								price: 39,
								thumbnailImageUrl:
									'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_thumb_med/5237_copyright_reddressboutique_2017__thumb_med.jpg',
								url: '/product/C-MIT-W1-41080',
								rating: '5',
								brand: 'Mitto Shop',
								popularity: 2471,
								imageUrl:
									'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_large/5237_copyright_reddressboutique_2017__large.jpg',
								ratingCount: 1111,
							},
						},
						attributes: {},
					},
					{
						id: '178222',
						mappings: {
							core: {
								uid: '178222',
								name: 'Salt And Sun White Open Shoulder Cover-Up',
								sku: 'C-VL-W1-D460S',
								msrp: 50,
								price: 44,
								thumbnailImageUrl:
									'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_thumb_med/2m4a5824-2_thumb_med.jpg',
								url: '/product/C-VL-W1-D460S',
								rating: '5',
								brand: 'Velzera',
								popularity: 2677,
								imageUrl: 'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_large/2m4a5824-2_large.jpg',
								ratingCount: 1111,
							},
						},
						attributes: {},
					},
					{
						id: '180422',
						mappings: {
							core: {
								uid: '180422',
								name: 'Beach To Boardwalk Blue Tie Dye Maxi Dress',
								sku: 'C-LS-I3-65NLP',
								msrp: 50,
								price: 48,
								thumbnailImageUrl:
									'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_thumb_med/2931_copyright_reddressboutique_2017_thumb_med.jpg',
								url: '/product/C-LS-I3-65NLP',
								rating: '5',
								brand: 'Love Stitch',
								popularity: 2639,
								imageUrl:
									'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_large/2931_copyright_reddressboutique_2017_large.jpg',
								ratingCount: 1111,
							},
						},
						attributes: {},
					},
					{
						id: '180940',
						mappings: {
							core: {
								uid: '180940',
								name: 'Beach Babe White Off-The-Shoulder Cover-Up',
								sku: 'C-VL-W1-D411S',
								msrp: 50,
								price: 42,
								thumbnailImageUrl: 'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_thumb_med/2m4a9284_thumb_med.jpg',
								url: '/product/C-VL-W1-D411S',
								rating: '5',
								brand: 'Velzera',
								popularity: 1323,
								imageUrl: 'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_large/2m4a9284_large.jpg',
								ratingCount: 1111,
							},
						},
						attributes: {},
					},
					{
						id: '180944',
						mappings: {
							core: {
								uid: '180944',
								name: 'Everlasting Sun White Cover-Up',
								sku: 'C-VL-W1-D480S',
								msrp: 50,
								price: 44,
								thumbnailImageUrl: 'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_thumb_med/2m4a8074_thumb_med.jpg',
								url: '/product/C-VL-W1-D480S',
								rating: '5',
								brand: 'Velzera',
								popularity: 1067,
								imageUrl: 'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_large/2m4a8074_large.jpg',
								ratingCount: 1111,
							},
						},
						attributes: {},
					},
					{
						id: '181887',
						mappings: {
							core: {
								uid: '181887',
								name: 'Pure Happiness White Print Dress',
								sku: 'C-ST-I3-12370',
								msrp: 50,
								price: 44,
								thumbnailImageUrl:
									'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_thumb_med/1505_copyright_reddressboutique_2017__thumb_med.jpg',
								url: '/product/C-ST-I3-12370',
								rating: '5',
								brand: "Aura L'atiste",
								popularity: 299,
								imageUrl:
									'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_large/1505_copyright_reddressboutique_2017__large.jpg',
								ratingCount: 1111,
							},
						},
						attributes: {},
					},
					{
						id: '176815',
						mappings: {
							core: {
								uid: '176815',
								name: 'Spring To Mind Coral Off-The-Shoulder Dress',
								sku: 'C-TCE-O1-D8349',
								msrp: 50,
								price: 38,
								thumbnailImageUrl:
									'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_thumb_med/copyright_rdb_studio_2_5457_thumb_med.jpg',
								url: '/product/C-TCE-O1-D8349',
								rating: '5',
								brand: 'TCEC',
								popularity: 3607,
								imageUrl:
									'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_large/copyright_rdb_studio_2_5457_large.jpg',
								ratingCount: 1111,
							},
						},
						attributes: {},
					},
					{
						id: '177983',
						mappings: {
							core: {
								uid: '177983',
								name: 'Putting Class In Classic White Striped Dress',
								sku: 'C-TCE-W1-D8326',
								msrp: 50,
								price: 38,
								thumbnailImageUrl:
									'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_thumb_med/17_02_22_studio_set_02_15200951_thumb_med.jpg',
								url: '/product/C-TCE-W1-D8326',
								rating: '5',
								brand: 'TCEC',
								popularity: 1073,
								imageUrl:
									'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_large/17_02_22_studio_set_02_15200951_large.jpg',
								ratingCount: 1111,
							},
						},
						attributes: {},
					},
					{
						id: '181845',
						mappings: {
							core: {
								uid: '181845',
								name: 'Escape To Mexico Red Off-The-Shoulder Dress',
								sku: 'C-US-R4-94464',
								msrp: 50,
								price: 42,
								thumbnailImageUrl:
									'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_thumb_med/2457_copyright_reddressboutique_2017__thumb_med.jpg',
								url: '/product/C-US-R4-94464',
								rating: '5',
								brand: 'Under Skies',
								popularity: 2034,
								imageUrl:
									'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_large/2457_copyright_reddressboutique_2017__large.jpg',
								ratingCount: 1111,
							},
						},
						attributes: {},
					},
					{
						id: '176982',
						mappings: {
							core: {
								uid: '176982',
								name: 'Fancy Femme White Off-The-Shoulder Dress',
								sku: 'C-MB-W1-16589',
								msrp: 50,
								price: 50,
								thumbnailImageUrl:
									'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_thumb_med/copyright_rdb_studio_2_5602_thumb_med.jpg',
								url: '/product/C-MB-W1-16589',
								rating: '5',
								brand: 'Marine',
								popularity: 6,
								imageUrl:
									'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_large/copyright_rdb_studio_2_5602_large.jpg',
								ratingCount: 1111,
							},
						},
						attributes: {},
					},
					{
						id: '181642',
						mappings: {
							core: {
								uid: '181642',
								name: 'Spring Ahead Mint Print Off-The-Shoulder Dress',
								sku: 'C-AD-E2-906FP',
								msrp: 50,
								price: 48,
								thumbnailImageUrl:
									'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_thumb_med/2429_copyright_reddressboutique_2017__thumb_med.jpg',
								url: '/product/C-AD-E2-906FP',
								rating: '5',
								brand: 'Adrienne',
								popularity: 465,
								imageUrl:
									'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_large/2429_copyright_reddressboutique_2017__large.jpg',
								ratingCount: 1111,
							},
						},
						attributes: {},
					},
					{
						id: '178432',
						mappings: {
							core: {
								uid: '178432',
								name: 'Spring Ahead Powder Blue Off-The-Shoulder Dress',
								sku: 'C-AD-I1-1906P',
								msrp: 50,
								price: 48,
								thumbnailImageUrl:
									'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_thumb_med/copyright_rdb_studio_2_5021_thumb_med.jpg',
								url: '/product/C-AD-I1-1906P',
								rating: '5',
								brand: 'Adrienne',
								popularity: 897,
								imageUrl:
									'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_large/copyright_rdb_studio_2_5021_large.jpg',
								ratingCount: 1111,
							},
						},
						attributes: {},
					},
				],
				snapInstance = snapify.p.recommendation({ id: 'RecommendationEmail', tag: 'email-trending', globals: { siteId: '8uyt2m' } }),
				Default = (props, { loaded: { controller } }) => (0, emotion_react_jsx_runtime_browser_esm.Y)(RecommendationEmail, { ...props, controller });
			(Default.loaders = [
				async () => (
					snapInstance.on('init', async ({ controller }, next) => {
						(controller.store.results = results),
							controller.store.results.forEach((result) => (result.mappings.core.url = 'javascript:void(0);')),
							await next();
					}),
					await snapInstance.init(),
					{ controller: snapInstance }
				),
			]),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: {
							originalSource:
								'(props: RecommendationEmailProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: RecommendationController;\n  };\n}) => {\n  return <RecommendationEmail {...props} controller={controller} />;\n}',
							...Default.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default'];
		},
		'./components/src/utilities/mergeProps.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
	},
]);
