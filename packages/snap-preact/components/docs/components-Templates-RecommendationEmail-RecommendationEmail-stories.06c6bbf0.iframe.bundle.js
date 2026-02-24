(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[8241],
		{
			'./components/src/components/Templates/RecommendationEmail/RecommendationEmail.stories.tsx'(C, l, e) {
				'use strict';
				e.r(l), e.d(l, { Default: () => g, __namedExportsOrder: () => D, default: () => i });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					u = e('./components/src/components/Templates/RecommendationEmail/RecommendationEmail.tsx'),
					r = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					s = e('./components/src/utilities/snapify.ts');
				const n =
						"# RecommendationEmail\n\nRenders product result cards to be used in email recommendation profiles. It's designed to render email recommendations in a structured format, optimized for generating images of product cards used for email recommendations. \n\nThis component is not intended for front-end display. It is an internal dependency for Email Recommendations.\n\n## Sub-components\n- Result (default)\n\n## Usage\n\n### controller\nThe `controller` prop specifies a reference to the RecommendationController.\n\n```jsx\n<RecommendationEmail controller={controller} />\n```\n\n### results\nAlternatively if a `controller` prop is not provided, the `results` prop specifies a reference to the results store array to use instead.\n\n```jsx\n<RecommendationEmail results={controller.store.results} />\n```\n\n### resultProps\nThe `resultProps` prop allows you to pass additional props to each result component. These props will be spread onto each rendered result, whether using the default `Result` component or a custom component specified by `resultComponent`.\n\n```jsx\n<RecommendationEmail controller={controller} resultProps={{ shortTitles: true }} />\n```\n\n### resultComponent\nThe `resultComponent` prop allows you to specify a custom component to render each result. If not provided, the default `Result` component will be used.\n\nNote: `resultProps` and `{ email: true }` will be spread as props onto each result component that is rendered.\n\n```jsx\nimport { CustomResult } from '../components/CustomResult';\n\n<RecommendationEmail controller={controller} resultComponent={CustomResult} />\n```\n\n### resultWidth\nThe `resultWidth` prop allows you to specify the width of each result card. This is particularly useful for controlling the layout and sizing of the product cards in email recommendations. The value should be a string representing a valid CSS width.\n\nDefault value: '240px'\n\n```jsx\n<RecommendationEmail controller={controller} resultWidth={'240px'} />\n```\n",
					i = {
						title: 'Templates/RecommendationEmail',
						component: u.i,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(p.oz, { options: { overrides: { code: r.Z } }, children: n }), (0, o.Y)(p.uY, { story: p.h1 })],
									}),
							},
						},
						decorators: [(h) => (0, o.Y)('div', { style: { maxWidth: '900px', height: '500px' }, children: (0, o.Y)(h, {}) })],
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
								table: { type: { summary: 'Partial<ResultProps> | Record<string, any>' } },
								control: { type: 'object' },
							},
							resultWidth: {
								description: 'Width of each result card',
								type: { required: !1 },
								table: { type: { summary: 'string' }, defaultValue: { summary: '240px' } },
								control: { type: 'text' },
							},
							...t.F,
						},
					},
					E = [
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
					y = s.p.recommendation({ id: 'RecommendationEmail', tag: 'email-trending', globals: { siteId: 'atkzs2' } }),
					g = (h, { loaded: { controller: b } }) => (0, o.Y)(u.i, { ...h, controller: b });
				(g.loaders = [
					async () => (
						y.on('init', async ({ controller: h }, b) => {
							(h.store.results = E), h.store.results.forEach((P) => (P.mappings.core.url = 'javascript:void(0);')), await b();
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
				const D = ['Default'];
			},
			'./components/src/components/Templates/RecommendationEmail/RecommendationEmail.tsx'(C, l, e) {
				'use strict';
				e.d(l, { O: () => g, i: () => h });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/mobx-react-lite/es/index.js'),
					r = e('../../node_modules/classnames/index.js'),
					t = e.n(r),
					s = e('./components/src/components/Molecules/Result/Result.tsx'),
					n = e('./components/src/utilities/defined.ts'),
					i = e('./components/src/utilities/mergeProps.ts'),
					E = e('./components/src/utilities/mergeStyles.ts'),
					y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js');
				const g = { default: {}, mobile: {}, tablet: {}, desktop: {} },
					D = () => (0, p.AH)({}),
					h = (0, u.PA)((b) => {
						const P = (0, y.u)(),
							f = { resultWidth: '240px', name: b.controller?.store?.profile?.tag?.toLowerCase() },
							j = (0, i.v6)('recommendationEmail', P, f, b),
							{
								controller: T,
								results: R,
								resultComponent: O,
								resultProps: w,
								resultWidth: a,
								treePath: m,
								disableStyles: d,
								internalClassName: _,
								className: c,
							} = j,
							U = {
								result: { internalClassName: 'ss__recommendation-email__result', ...(0, n.s)({ disableStyles: d }), theme: j?.theme, treePath: m },
							},
							v = (0, E.Z)(j, D),
							M = R || T?.store?.results || [];
						return M.length > 0
							? (0, o.Y)('div', {
									className: t()('ss__recommendation-email', c, _),
									...v,
									children: M.map((A, I) =>
										(0, o.Y)(
											'div',
											{
												id: `ss-emailrec${I}`,
												className: t()('ss__recommendation-email__result-wrapper'),
												style: { display: 'block', width: a },
												children: (() => {
													if (O) {
														const S = O;
														return (0, o.Y)(S, { controller: T, result: A, ...w, email: !0, treePath: m });
													} else
														return (0, o.Y)(s.Q, { result: A, hideBadge: !0, theme: { components: { image: { lazy: !1 } } }, ...U.result, ...w });
												})(),
											},
											I
										)
									),
							  })
							: (0, o.Y)(o.FK, {});
					});
			},
			'./components/src/utilities/componentArgs.ts'(C, l, e) {
				'use strict';
				e.d(l, { F: () => o });
				const o = {
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
			'./components/src/utilities/snapify.ts'(C, l, e) {
				'use strict';
				e.d(l, { p: () => T });
				var o = e('../../node_modules/mobx/dist/mobx.esm.js'),
					p = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					u = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					r = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					s = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					n = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					i = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					E = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					y = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					g = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					D = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					h = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					b = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					P = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const f = {},
					j = { globals: { siteId: '8uyt2m' } };
				class T {
					static recommendation(m) {
						const d = m.id;
						if (f[d]) return f[d];
						const _ = (f[d] = O({ client: j, controller: m }));
						return (
							_.on('afterStore', async ({ controller: c }, U) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await U();
							}),
							_.init(),
							_
						);
					}
					static autocomplete(m) {
						const d = m.id;
						if (f[d]) return f[d];
						const _ = (f[d] = w({ client: j, controller: m }));
						return (
							_.on('afterStore', async ({ controller: c }, U) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await U();
							}),
							_.init(),
							_
						);
					}
					static search(m) {
						const d = m.id;
						if (f[d]) return f[d];
						const _ = (f[d] = R({ client: j, controller: m }));
						return (
							_.on('afterStore', async ({ controller: c }, U) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await U();
							}),
							_.init(),
							_
						);
					}
				}
				function R(a) {
					const m = new E.V(new g.E({ settings: { coreType: 'query', corePrefix: a.controller.id } }), y.X);
					return new p.Tp(a.controller, {
						client: new t.K(a.client.globals, a.client.config),
						store: new n.U(a.controller, { urlManager: m }),
						urlManager: m,
						eventManager: new D.E(),
						profiler: new h.U(),
						logger: new b.V(),
						tracker: new P.J(a.client.globals),
					});
				}
				function O(a) {
					const m = new E.V(new g.E(), y.X).detach(!0);
					return new r.c(a.controller, {
						client: new t.K(a.client.globals, a.client.config),
						store: new i.t(a.controller, { urlManager: m }),
						urlManager: m,
						eventManager: new D.E(),
						profiler: new h.U(),
						logger: new b.V(),
						tracker: new P.J(a.client.globals),
					});
				}
				function w(a) {
					const m = new E.V(new g.E(), y.X).detach();
					return new u.Z(a.controller, {
						client: new t.K(a.client.globals, a.client.config),
						store: new s.Y(a.controller, { urlManager: m }),
						urlManager: m,
						eventManager: new D.E(),
						profiler: new h.U(),
						logger: new b.V(),
						tracker: new P.J(a.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(C, l, e) {
				'use strict';
				e.d(l, { Z: () => r });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const u = 'prism-block',
					r = (t) => {
						const s = (0, p.li)(null);
						return (
							(0, p.vJ)(() => {
								s.current && t.className?.includes('lang-') && !t.className?.includes(u) && window?.Prism?.highlightElement(s.current);
							}, [t.className, t.children, s]),
							(0, o.Y)('code', { ...t, ref: s, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/dequal/dist/index.mjs'(C, l, e) {
				'use strict';
				e.d(l, { j: () => u });
				var o = Object.prototype.hasOwnProperty;
				function p(r, t, s) {
					for (s of r.keys()) if (u(s, t)) return s;
				}
				function u(r, t) {
					var s, n, i;
					if (r === t) return !0;
					if (r && t && (s = r.constructor) === t.constructor) {
						if (s === Date) return r.getTime() === t.getTime();
						if (s === RegExp) return r.toString() === t.toString();
						if (s === Array) {
							if ((n = r.length) === t.length) for (; n-- && u(r[n], t[n]); );
							return n === -1;
						}
						if (s === Set) {
							if (r.size !== t.size) return !1;
							for (n of r) if (((i = n), (i && typeof i == 'object' && ((i = p(t, i)), !i)) || !t.has(i))) return !1;
							return !0;
						}
						if (s === Map) {
							if (r.size !== t.size) return !1;
							for (n of r) if (((i = n[0]), (i && typeof i == 'object' && ((i = p(t, i)), !i)) || !u(n[1], t.get(i)))) return !1;
							return !0;
						}
						if (s === ArrayBuffer) (r = new Uint8Array(r)), (t = new Uint8Array(t));
						else if (s === DataView) {
							if ((n = r.byteLength) === t.byteLength) for (; n-- && r.getInt8(n) === t.getInt8(n); );
							return n === -1;
						}
						if (ArrayBuffer.isView(r)) {
							if ((n = r.byteLength) === t.byteLength) for (; n-- && r[n] === t[n]; );
							return n === -1;
						}
						if (!s || typeof r == 'object') {
							n = 0;
							for (s in r) if ((o.call(r, s) && ++n && !o.call(t, s)) || !(s in t) || !u(r[s], t[s])) return !1;
							return Object.keys(t).length === n;
						}
					}
					return r !== r && t !== t;
				}
			},
			'../../node_modules/memoizerific sync recursive'(C) {
				function l(e) {
					var o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (C.exports = l);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-RecommendationEmail-RecommendationEmail-stories.06c6bbf0.iframe.bundle.js.map
