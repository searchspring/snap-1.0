(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[8241],
		{
			'./components/src/components/Templates/RecommendationEmail/RecommendationEmail.stories.tsx'(E, l, e) {
				'use strict';
				e.r(l), e.d(l, { Default: () => g, __namedExportsOrder: () => P, default: () => m });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					u = e('./components/src/components/Templates/RecommendationEmail/RecommendationEmail.tsx'),
					o = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					r = e('./components/src/utilities/snapify.ts');
				const s =
						"# RecommendationEmail\n\nRenders product result cards to be used in email recommendation profiles. It's designed to render email recommendations in a structured format, optimized for generating images of product cards used for email recommendations. \n\nThis component is not intended for front-end display. It is an internal dependency for Email Recommendations.\n\n## Sub-components\n- Result (default)\n\n## Usage\n\n### controller\nThe `controller` prop specifies a reference to the RecommendationController.\n\n```jsx\n<RecommendationEmail controller={controller} />\n```\n\n### results\nAlternatively if a `controller` prop is not provided, the `results` prop specifies a reference to the results store array to use instead.\n\n```jsx\n<RecommendationEmail results={controller.store.results} />\n```\n\n### resultProps\nThe `resultProps` prop allows you to pass additional props to each result component. These props will be spread onto each rendered result, whether using the default `Result` component or a custom component specified by `resultComponent`.\n\n```jsx\n<RecommendationEmail controller={controller} resultProps={{ shortTitles: true }} />\n```\n\n### resultComponent\nThe `resultComponent` prop allows you to specify a custom component to render each result. If not provided, the default `Result` component will be used.\n\nNote: `resultProps` and `{ email: true }` will be spread as props onto each result component that is rendered.\n\n```jsx\nimport { CustomResult } from '../components/CustomResult';\n\n<RecommendationEmail controller={controller} resultComponent={CustomResult} />\n```\n\n### resultWidth\nThe `resultWidth` prop allows you to specify the width of each result card. This is particularly useful for controlling the layout and sizing of the product cards in email recommendations. The value should be a string representing a valid CSS width.\n\nDefault value: '240px'\n\n```jsx\n<RecommendationEmail controller={controller} resultWidth={'240px'} />\n```\n",
					m = {
						title: 'Templates/RecommendationEmail',
						component: u.i,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, n.FD)('div', {
										children: [(0, n.Y)(_.oz, { options: { overrides: { code: o.Z } }, children: s }), (0, n.Y)(_.uY, { story: _.h1 })],
									}),
							},
						},
						decorators: [(h) => (0, n.Y)('div', { style: { maxWidth: '900px', height: '500px' }, children: (0, n.Y)(h, {}) })],
						argTypes: {
							controller: { description: 'Controller reference', table: { type: { summary: 'Controller' } }, control: { type: 'none' } },
							results: {
								description: 'Results store reference, overrides controller.store.results',
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
								table: { category: 'Templates Legal', type: { summary: 'Partial<ResultProps> | Record<string, any>' } },
								control: { type: 'object' },
							},
							resultWidth: {
								description: 'Width of each result card',
								type: { required: !1 },
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '240px' } },
								control: { type: 'text' },
							},
							...t.F,
						},
					},
					D = [
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
									thumbnailImageUrl:
										'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_thumb_med/2m4a9284_thumb_med.jpg',
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
									thumbnailImageUrl:
										'https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_thumb_med/2m4a8074_thumb_med.jpg',
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
					y = r.p.recommendation({ id: 'RecommendationEmail', tag: 'email-trending', globals: { siteId: 'atkzs2' } }),
					g = (h, { loaded: { controller: b } }) => (0, n.Y)(u.i, { ...h, controller: b });
				(g.loaders = [
					async () => (
						y.on('init', async ({ controller: h }, b) => {
							(h.store.results = D), h.store.results.forEach((C) => (C.mappings.core.url = 'javascript:void(0);')), await b();
						}),
						await y.init(),
						{ controller: y }
					),
				]),
					(g.parameters = {
						...g.parameters,
						docs: {
							...g.parameters?.docs,
							source: {
								originalSource: `(props: RecommendationEmailProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: RecommendationController;
  };
}) => {
  return <RecommendationEmail {...props} controller={controller} />;
}`,
								...g.parameters?.docs?.source,
							},
						},
					});
				const P = ['Default'];
			},
			'./components/src/components/Templates/RecommendationEmail/RecommendationEmail.tsx'(E, l, e) {
				'use strict';
				e.d(l, { O: () => P, i: () => b });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/classnames/index.js'),
					t = e.n(o),
					r = e('./components/src/components/Molecules/Result/Result.tsx'),
					s = e('./components/src/utilities/defined.ts'),
					m = e('./components/src/utilities/mergeProps.ts'),
					D = e('./components/src/utilities/mergeStyles.ts'),
					y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					g = e('./components/src/providers/treePath.tsx');
				const P = { default: {}, mobile: {}, tablet: {}, desktop: {} },
					h = () => (0, _.AH)({}),
					b = (0, u.PA)((C) => {
						const f = (0, y.u)(),
							T = (0, g.LU)(),
							w = { resultWidth: '240px', name: C.controller?.store?.profile?.tag?.toLowerCase(), treePath: T },
							U = (0, m.v6)('recommendationEmail', f, w, C),
							{
								controller: O,
								results: R,
								resultComponent: a,
								resultProps: i,
								resultWidth: c,
								treePath: p,
								disableStyles: d,
								internalClassName: j,
								className: I,
							} = U,
							S = {
								result: { internalClassName: 'ss__recommendation-email__result', ...(0, s.s)({ disableStyles: d }), theme: U?.theme, treePath: p },
							},
							W = (0, D.Z)(U, h),
							M = R || O?.store?.results || [];
						return M.length > 0
							? (0, n.Y)('div', {
									className: t()('ss__recommendation-email', I, j),
									...W,
									children: M.map((v, A) =>
										(0, n.Y)(
											'div',
											{
												id: `ss-emailrec${A}`,
												className: t()('ss__recommendation-email__result-wrapper'),
												style: { display: 'block', width: c },
												children: (() => {
													if (a) {
														const z = a;
														return (0, n.Y)(z, { controller: O, result: v, ...i, email: !0, treePath: p });
													} else
														return (0, n.Y)(r.Q, { result: v, hideBadge: !0, theme: { components: { image: { lazy: !1 } } }, ...S.result, ...i });
												})(),
											},
											A
										)
									),
							  })
							: (0, n.Y)(n.FK, {});
					});
			},
			'./components/src/utilities/componentArgs.ts'(E, l, e) {
				'use strict';
				e.d(l, { F: () => n });
				const n = {
					className: {
						description: 'Class name appended to root element of component',
						table: { type: { summary: 'string' }, category: 'default Props', defaultValue: { summary: 'ss__${component-name}' } },
						control: { type: 'text' },
					},
					disableStyles: {
						defaultValue: !1,
						description: 'Disable all default styling',
						table: { type: { summary: 'boolean' }, category: 'default Props', defaultValue: { summary: !1 } },
						control: { type: 'boolean' },
					},
					style: {
						description: 'Inline style',
						table: { type: { summary: 'string, object' }, category: 'default Props' },
						control: { type: 'text' },
					},
					theme: {
						description: 'Specify specific sub component props',
						table: { type: { summary: 'object' }, category: 'default Props' },
						control: { type: 'none' },
					},
				};
			},
			'./components/src/utilities/snapify.ts'(E, l, e) {
				'use strict';
				e.d(l, { p: () => w });
				var n = e('../../node_modules/mobx/dist/mobx.esm.js'),
					_ = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					u = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					o = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					r = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					s = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					m = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					D = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					y = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					g = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					P = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					h = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					b = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					C = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, n.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const f = {},
					T = { globals: { siteId: 'atkzs2' } };
				class w {
					static recommendation(i) {
						const c = i.id;
						if (f[c]) return f[c];
						const p = (f[c] = O({ client: T, controller: i }));
						return (
							p.on('afterStore', async ({ controller: d }, j) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await j();
							}),
							p.init(),
							p
						);
					}
					static autocomplete(i) {
						const c = i.id;
						if (f[c]) return f[c];
						const p = (f[c] = R({ client: T, controller: i }));
						return (
							p.on('afterStore', async ({ controller: d }, j) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await j();
							}),
							p.init(),
							p
						);
					}
					static search(i) {
						const c = i.id;
						if (f[c]) return f[c];
						const p = (f[c] = U({ client: T, controller: i }));
						return (
							p.on('afterStore', async ({ controller: d }, j) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await j();
							}),
							p.init(),
							p
						);
					}
				}
				function U(a) {
					const i = new D.V(new g.E({ settings: { coreType: 'query', corePrefix: a.controller.id } }), y.X);
					return new _.Tp(a.controller, {
						client: new t.K(a.client.globals, a.client.config),
						store: new s.U(a.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new P.E(),
						profiler: new h.U(),
						logger: new b.V(),
						tracker: new C.J(a.client.globals),
					});
				}
				function O(a) {
					const i = new D.V(new g.E(), y.X).detach(!0);
					return new o.c(a.controller, {
						client: new t.K(a.client.globals, a.client.config),
						store: new m.t(a.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new P.E(),
						profiler: new h.U(),
						logger: new b.V(),
						tracker: new C.J(a.client.globals),
					});
				}
				function R(a) {
					const i = new D.V(new g.E(), y.X).detach();
					return new u.Z(a.controller, {
						client: new t.K(a.client.globals, a.client.config),
						store: new r.Y(a.controller, { urlManager: i }),
						urlManager: i,
						eventManager: new P.E(),
						profiler: new h.U(),
						logger: new b.V(),
						tracker: new C.J(a.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(E, l, e) {
				'use strict';
				e.d(l, { Z: () => o });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const u = 'prism-block',
					o = (t) => {
						const r = (0, _.li)(null);
						return (
							(0, _.vJ)(() => {
								r.current && t.className?.includes('lang-') && !t.className?.includes(u) && window?.Prism?.highlightElement(r.current);
							}, [t.className, t.children, r]),
							(0, n.Y)('code', { ...t, ref: r, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/dequal/dist/index.mjs'(E, l, e) {
				'use strict';
				e.d(l, { j: () => u });
				var n = Object.prototype.hasOwnProperty;
				function _(o, t, r) {
					for (r of o.keys()) if (u(r, t)) return r;
				}
				function u(o, t) {
					var r, s, m;
					if (o === t) return !0;
					if (o && t && (r = o.constructor) === t.constructor) {
						if (r === Date) return o.getTime() === t.getTime();
						if (r === RegExp) return o.toString() === t.toString();
						if (r === Array) {
							if ((s = o.length) === t.length) for (; s-- && u(o[s], t[s]); );
							return s === -1;
						}
						if (r === Set) {
							if (o.size !== t.size) return !1;
							for (s of o) if (((m = s), (m && typeof m == 'object' && ((m = _(t, m)), !m)) || !t.has(m))) return !1;
							return !0;
						}
						if (r === Map) {
							if (o.size !== t.size) return !1;
							for (s of o) if (((m = s[0]), (m && typeof m == 'object' && ((m = _(t, m)), !m)) || !u(s[1], t.get(m)))) return !1;
							return !0;
						}
						if (r === ArrayBuffer) (o = new Uint8Array(o)), (t = new Uint8Array(t));
						else if (r === DataView) {
							if ((s = o.byteLength) === t.byteLength) for (; s-- && o.getInt8(s) === t.getInt8(s); );
							return s === -1;
						}
						if (ArrayBuffer.isView(o)) {
							if ((s = o.byteLength) === t.byteLength) for (; s-- && o[s] === t[s]; );
							return s === -1;
						}
						if (!r || typeof o == 'object') {
							s = 0;
							for (r in o) if ((n.call(o, r) && ++s && !n.call(t, r)) || !(r in t) || !u(o[r], t[r])) return !1;
							return Object.keys(t).length === s;
						}
					}
					return o !== o && t !== t;
				}
			},
			'../../node_modules/memoizerific sync recursive'(E) {
				function l(e) {
					var n = new Error("Cannot find module '" + e + "'");
					throw ((n.code = 'MODULE_NOT_FOUND'), n);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (E.exports = l);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-RecommendationEmail-RecommendationEmail-stories.43f8459b.iframe.bundle.js.map
