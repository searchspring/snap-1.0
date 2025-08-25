'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[4055],
	{
		'./components/src/components/Molecules/Result/Result.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => Result_stories,
					hideSections: () => hideSections,
					truncateTitle: () => truncateTitle,
				});
			var emotion_react_jsx_runtime_browser_esm = __webpack_require__(
					'./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				dist = __webpack_require__('../../node_modules/@storybook/blocks/dist/index.mjs'),
				Result = __webpack_require__('./components/src/components/Molecules/Result/Result.tsx'),
				Image = __webpack_require__('./components/src/components/Atoms/Image/Image.tsx'),
				storybook = __webpack_require__('./components/src/utilities/storybook.tsx'),
				componentArgs = __webpack_require__('./components/src/utilities/componentArgs.ts'),
				snapify = __webpack_require__('./components/src/utilities/snapify.ts');
			var types = __webpack_require__('./components/src/types.ts');
			const Result_stories = {
					title: 'Molecules/Result',
					component: Result.Q,
					tags: ['autodocs'],
					parameters: {
						docs: {
							page: () =>
								(0, emotion_react_jsx_runtime_browser_esm.FD)('div', {
									children: [
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.oz, {
											options: { overrides: { code: storybook.Z } },
											children:
												"# Result\n\nRenders a single product card. \n\n## Sub-components\n- Badge\n- Price\n- Image\n\n## Usage\n\n### result\nThe required `result` prop specifies a reference to a product object from the `results` store array.\n\n```jsx\n<Result result={controller.store.results[0]} />\n```\n\n### hideBadge\nThe `hideBadge` prop will prevent the `<OverlayBadge />` and `<CalloutBadge />` components from rendering.\n\n```jsx\n<Result result={controller.store.results[0]} hideBadge={true} />\n```\n\n### hideTitle\nThe `hideTitle` prop will prevent to product title from rendering.\n\n```jsx\n<Result result={controller.store.results[0]} hideTitle={true} />\n```\n\n### hideRating\nThe `hideRating` prop will prevent to product rating from rendering.\n\n```jsx\n<Result result={controller.store.results[0]} hideRating={true} />\n```\n\n### hideAddToCartButton\nThe `hideAddToCartButton` prop will prevent to product add to cart button from rendering.\n\n```jsx\n<Result result={controller.store.results[0]} hideAddToCartButton={true} />\n```\n\n### addToCartButtonText\nThe `addToCartButtonText` prop will will change the text rendered in the add to cart button.\n\n```jsx\n<Result result={controller.store.results[0]} addToCartButtonText={'Add To Cart'} />\n```\n\n### hidePricing\nThe `hidePricing` prop will prevent the pricing from rendering.\n\n```jsx\n<Result result={controller.store.results[0]} hidePricing={true} />\n```\n\n\n### onAddToCartClick\nThe `onAddToCartClick` prop is a function to be called on add to cart button click. In addition to the built in platform addToCart function on the controller. \n\n```jsx\n\nconst clickFunc = (e, result) => {\n\tconsole.log('added!', e, result);\n}\n\n<Result result={controller.store.results[0]} onAddToCartClick={() => clickFunc} />\n```\n\n\n### addToCartButtonSuccessText\nThe `addToCartButtonSuccessText` prop will change the text rendered in the add to cart button temporarily after clicking.\n\n```jsx\n<Result result={controller.store.results[0]} addToCartButtonText={'Add To Cart'} addToCartButtonSuccessText={'added!'} />\n```\n\n### addToCartButtonSuccessTimeout\nThe `addToCartButtonSuccessTimeout` prop specifies the number of ms to show the success text in the add to cart button before reverting back to normal text.\n\n```jsx\n<Result result={controller.store.results[0]} addToCartButtonText={'Add To Cart'} addToCartButtonSuccessText={'added!'} addToCartButtonSuccessTimeout={4000} />\n```\n\n### hideImage\nThe `hideImage` prop will prevent the image from rendering.\n\n```jsx\n<Result result={controller.store.results[0]} hideImage={true} />\n```\n\n### detailSlot\nThe `detailSlot` prop is a JSX element to used display additional content below the title and pricing sections.\n\n```typescript\nconst productDetails = (props) => {\n\tconst listEntries = props?.product?.attributes?.descriptionList.split('|');\n\treturn (\n\t\tlistEntries && (\n\t\t\t<ul>\n\t\t\t\t{listEntries.map(entry => (\n\t\t\t\t\t<li>{entry}</li>\n\t\t\t\t))}\n\t\t\t</ul>\n\t\t)\n\t)\n}\n```\n\n```jsx\n<Result result={controller.store.results[0]} detailSlot={<productDetails product={controller.store.results[0]/>} />\n```\n\n### fallback\nThe `fallback` prop will be passed to the `<Image />` sub-component. If the primary image does not display, this fallback image will be displayed instead. \n\n```jsx\n<Result result={controller.store.results[0]} fallback={'https://www.example.com/imgs/placeholder.jpg'} />\n```\n\n### width\nThe `width` prop sets the width of this Result.\n\n```jsx\n<Result result={controller.store.results[0]} width={'25%'} />\n```\n\n### layout\nThe `layout` prop specifies if this Result will be contained in a `grid` or `list` layout.\n\n```jsx\n<Result result={controller.store.results[0]} layout={'grid'} />\n```\n\n### truncateTitle\nThe `truncateTitle` prop utililizes the truncate filter from the snap-toolbox to allow you truncate the product title at a certain character length, and optionally append an additional string such as \"...\"\n\n```jsx\n<Result result={controller.store.results[0]} truncateTitle={ limit: 5, append: '...' } />\n```",
										}),
										(0, emotion_react_jsx_runtime_browser_esm.Y)(dist.uY, { story: dist.h1 }),
									],
								}),
						},
					},
					decorators: [
						(Story) =>
							(0, emotion_react_jsx_runtime_browser_esm.Y)('div', {
								style: { maxWidth: '250px' },
								children: (0, emotion_react_jsx_runtime_browser_esm.Y)(Story, {}),
							}),
					],
					argTypes: {
						controller: { description: 'Controller reference', table: { type: { summary: 'Controller' } }, control: { type: 'none' } },
						result: {
							description: 'Result store Product reference',
							type: { required: !0 },
							table: { type: { summary: 'result store Product object' } },
							control: { type: 'none' },
						},
						hideBadge: {
							description: 'Hide badge',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideTitle: {
							description: 'Hide title',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hidePricing: {
							description: 'Hide pricing',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideImage: {
							description: 'Hide image',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
							control: { type: 'boolean' },
						},
						hideRating: {
							description: 'Hide ratings',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
							control: { type: 'boolean' },
						},
						hideAddToCartButton: {
							description: 'Hide add to cart button',
							table: { type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
							control: { type: 'boolean' },
						},
						addToCartButtonText: { description: 'add to cart button text', table: { type: { summary: 'string' } }, control: { type: 'text' } },
						addToCartButtonSuccessText: {
							description: 'add to cart button text to show after adding to cart',
							table: { type: { summary: 'string' } },
							control: { type: 'text' },
						},
						addToCartButtonSuccessTimeout: {
							description: 'time in ms to show the success button text before reverting back to standard text',
							table: { type: { summary: 'number' } },
							control: { type: 'number' },
						},
						onAddToCartClick: {
							description: 'function to run on add to cart button click',
							table: { type: { summary: 'function' }, defaultValue: { summary: 'Add To Cart' } },
							control: { type: 'none' },
							action: 'onClick',
						},
						detailSlot: {
							description: 'Slot for more product details (under price)',
							table: { type: { summary: 'string' } },
							control: { type: 'text' },
						},
						fallback: {
							defaultValue: '',
							description: 'Fallback image url',
							table: { type: { summary: 'string' }, defaultValue: { summary: Image.t } },
							control: { type: 'text' },
						},
						truncateTitle: {
							defaultValue: {},
							description: 'truncate title options object',
							table: { type: { summary: 'object' } },
							control: { type: 'object' },
						},
						layout: {
							description: 'Results layout',
							defaultValue: types.VT.grid,
							table: { type: { summary: 'string' } },
							options: [types.VT.grid, types.VT.list],
							control: { type: 'select' },
						},
						onClick: {
							description: 'Custom onClick event handler',
							table: { type: { summary: 'function' } },
							control: { type: 'none' },
							action: 'onClick',
						},
						...componentArgs.F,
					},
				},
				snapInstance = snapify.p.search({ id: 'Result', globals: { siteId: '8uyt2m' } }),
				Default = (args, { loaded: { controller } }) =>
					(0, emotion_react_jsx_runtime_browser_esm.Y)(Result.Q, { ...args, result: controller?.store?.results[0] });
			Default.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })];
			const hideSections = (args, { loaded: { controller } }) =>
				(0, emotion_react_jsx_runtime_browser_esm.Y)(Result.Q, { ...args, result: controller?.store?.results[0] });
			(hideSections.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })]),
				(hideSections.args = { hideBadge: !0, hideTitle: !0, hidePricing: !0 });
			const truncateTitle = (args, { loaded: { controller } }) =>
				(0, emotion_react_jsx_runtime_browser_esm.Y)(Result.Q, { ...args, result: controller?.store?.results[0] });
			(truncateTitle.loaders = [async () => (await snapInstance.search(), { controller: snapInstance })]),
				(truncateTitle.args = { truncateTitle: { limit: 5, append: '...' } }),
				(Default.parameters = {
					...Default.parameters,
					docs: {
						...Default.parameters?.docs,
						source: {
							originalSource:
								'(args: ResultProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => <Result {...args} result={controller?.store?.results[0] as Product} />',
							...Default.parameters?.docs?.source,
						},
					},
				}),
				(hideSections.parameters = {
					...hideSections.parameters,
					docs: {
						...hideSections.parameters?.docs,
						source: {
							originalSource:
								'(args: ResultProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => <Result {...args} result={controller?.store?.results[0] as Product} />',
							...hideSections.parameters?.docs?.source,
						},
					},
				}),
				(truncateTitle.parameters = {
					...truncateTitle.parameters,
					docs: {
						...truncateTitle.parameters?.docs,
						source: {
							originalSource:
								'(args: ResultProps, {\n  loaded: {\n    controller\n  }\n}: {\n  loaded: {\n    controller: SearchController;\n  };\n}) => <Result {...args} result={controller?.store?.results[0] as Product} />',
							...truncateTitle.parameters?.docs?.source,
						},
					},
				});
			const __namedExportsOrder = ['Default', 'hideSections', 'truncateTitle'];
		},
	},
]);
