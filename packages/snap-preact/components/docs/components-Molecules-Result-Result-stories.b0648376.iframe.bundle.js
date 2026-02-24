(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[4055],
		{
			'./components/src/components/Molecules/Result/Result.stories.tsx'(x, d, t) {
				'use strict';
				t.r(d), t.d(d, { Default: () => T, __namedExportsOrder: () => R, default: () => E, hideSections: () => h, truncateTitle: () => y });
				var o = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = t('../../node_modules/@storybook/blocks/dist/index.mjs'),
					u = t('./components/src/components/Molecules/Result/Result.tsx'),
					n = t('./components/src/components/Atoms/Image/Image.tsx'),
					e = t('./components/src/utilities/storybook.tsx'),
					r = t('./components/src/utilities/componentArgs.ts'),
					s = t('./components/src/utilities/snapify.ts');
				const a =
					"# Result\n\nRenders a single product card. \n\n## Sub-components\n- Badge\n- Price\n- Image\n\n## Usage\n```jsx\nimport { Result } from '@searchspring/snap-preact-components';\n```\n\n### result\nThe required `result` prop specifies a reference to a product object from the `results` store array.\n\n```jsx\n<Result result={controller.store.results[0]} />\n```\n\n### hideBadge\nThe `hideBadge` prop will prevent the `<OverlayBadge />` and `<CalloutBadge />` components from rendering.\n\n```jsx\n<Result result={controller.store.results[0]} hideBadge={true} />\n```\n\n### hideTitle\nThe `hideTitle` prop will prevent to product title from rendering.\n\n```jsx\n<Result result={controller.store.results[0]} hideTitle={true} />\n```\n\n### hideRating\nThe `hideRating` prop will prevent to product rating from rendering.\n\n```jsx\n<Result result={controller.store.results[0]} hideRating={true} />\n```\n\n### hideAddToCartButton\nThe `hideAddToCartButton` prop will prevent to product add to cart button from rendering.\n\n```jsx\n<Result result={controller.store.results[0]} hideAddToCartButton={true} />\n```\n\n### addToCartButtonText\nThe `addToCartButtonText` prop will will change the text rendered in the add to cart button.\n\n```jsx\n<Result result={controller.store.results[0]} addToCartButtonText={'Add To Cart'} />\n```\n\n### hidePricing\nThe `hidePricing` prop will prevent the pricing from rendering.\n\n```jsx\n<Result result={controller.store.results[0]} hidePricing={true} />\n```\n\n### onAddToCartClick\nThe `onAddToCartClick` prop is a function to be called on add to cart button click. In addition to the built in platform addToCart function on the controller. \n\n```jsx\n\nconst clickFunc = (e, result) => {\n	console.log('added!', e, result);\n}\n\n<Result result={controller.store.results[0]} onAddToCartClick={() => clickFunc} />\n```\n\n### hideVariantSelections\nThe `hideVariantSelections` prop will prevent the VariantSelections components from rendering.\n\n```jsx\n<Result result={controller.store.results[0]} hideVariantSelections={true} />\n```\n\n### addToCartButtonSuccessText\nThe `addToCartButtonSuccessText` prop will change the text rendered in the add to cart button temporarily after clicking.\n\n```jsx\n<Result result={controller.store.results[0]} addToCartButtonText={'Add To Cart'} addToCartButtonSuccessText={'added!'} />\n```\n\n### addToCartButtonSuccessTimeout\nThe `addToCartButtonSuccessTimeout` prop specifies the number of ms to show the success text in the add to cart button before reverting back to normal text.\n\n```jsx\n<Result result={controller.store.results[0]} addToCartButtonText={'Add To Cart'} addToCartButtonSuccessText={'added!'} addToCartButtonSuccessTimeout={4000} />\n```\n\n### hideImage\nThe `hideImage` prop will prevent the image from rendering.\n\n```jsx\n<Result result={controller.store.results[0]} hideImage={true} />\n```\n\n### detailSlot\nThe `detailSlot` prop is a JSX element to used display additional content below the title and pricing sections.\n\n```js\nconst productDetails = (props) => {\n	const listEntries = props?.product?.attributes?.descriptionList.split('|');\n	return (\n		listEntries && (\n			<ul>\n				{listEntries.map(entry => (\n					<li>{entry}</li>\n				))}\n			</ul>\n		)\n	)\n}\n```\n\n```jsx\n<Result result={controller.store.results[0]} detailSlot={<productDetails product={controller.store.results[0]/>} />\n```\n\n### fallback\nThe `fallback` prop will be passed to the `<Image />` sub-component. If the primary image does not display, this fallback image will be displayed instead. \n\n```jsx\n<Result result={controller.store.results[0]} fallback={'https://www.example.com/imgs/placeholder.jpg'} />\n```\n\n### width\nThe `width` prop sets the width of this Result.\n\n```jsx\n<Result result={controller.store.results[0]} width={'25%'} />\n```\n\n### layout\nThe `layout` prop specifies if this Result will be contained in a `grid` or `list` layout.\n\n```jsx\n<Result result={controller.store.results[0]} layout={'grid'} />\n```\n\n### truncateTitle\nThe `truncateTitle` prop utililizes the truncate filter from the snap-toolbox to allow you truncate the product title at a certain character length, and optionally append an additional string such as \"...\"\n\n```jsx\n<Result result={controller.store.results[0]} truncateTitle={ limit: 5, append: '...' } />\n```";
				var C = t('./components/src/types.ts');
				const E = {
						title: 'Molecules/Result',
						component: u.Q,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(g.oz, { options: { overrides: { code: e.Z } }, children: a }), (0, o.Y)(g.uY, { story: g.h1 })],
									}),
							},
						},
						decorators: [(i) => (0, o.Y)('div', { style: { maxWidth: '250px' }, children: (0, o.Y)(i, {}) })],
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
							hideVariantSelections: {
								description: 'Hide variant Selections',
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
								table: { type: { summary: 'string' }, defaultValue: { summary: n.t } },
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
								defaultValue: C.V.grid,
								table: { type: { summary: 'string' } },
								options: [C.V.grid, C.V.list],
								control: { type: 'select' },
							},
							onClick: {
								description: 'Custom onClick event handler',
								table: { type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onClick',
							},
							...r.F,
						},
					},
					_ = s.p.search({ id: 'Result', globals: { siteId: 'atkzs2' } }),
					T = (i, { loaded: { controller: b } }) => (0, o.Y)(u.Q, { ...i, result: b?.store?.results[0] });
				T.loaders = [async () => (await _.search(), { controller: _ })];
				const h = (i, { loaded: { controller: b } }) => (0, o.Y)(u.Q, { ...i, result: b?.store?.results[0] });
				(h.loaders = [async () => (await _.search(), { controller: _ })]), (h.args = { hideBadge: !0, hideTitle: !0, hidePricing: !0 });
				const y = (i, { loaded: { controller: b } }) => (0, o.Y)(u.Q, { ...i, result: b?.store?.results[0] });
				(y.loaders = [async () => (await _.search(), { controller: _ })]),
					(y.args = { truncateTitle: { limit: 5, append: '...' } }),
					(T.parameters = {
						...T.parameters,
						docs: {
							...T.parameters?.docs,
							source: {
								originalSource: `(args: ResultProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => <Result {...args} result={controller?.store?.results[0] as Product} />`,
								...T.parameters?.docs?.source,
							},
						},
					}),
					(h.parameters = {
						...h.parameters,
						docs: {
							...h.parameters?.docs,
							source: {
								originalSource: `(args: ResultProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => <Result {...args} result={controller?.store?.results[0] as Product} />`,
								...h.parameters?.docs?.source,
							},
						},
					}),
					(y.parameters = {
						...y.parameters,
						docs: {
							...y.parameters?.docs,
							source: {
								originalSource: `(args: ResultProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => <Result {...args} result={controller?.store?.results[0] as Product} />`,
								...y.parameters?.docs?.source,
							},
						},
					});
				const R = ['Default', 'hideSections', 'truncateTitle'];
			},
			'./components/src/utilities/componentArgs.ts'(x, d, t) {
				'use strict';
				t.d(d, { F: () => o });
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
			'./components/src/utilities/snapify.ts'(x, d, t) {
				'use strict';
				t.d(d, { p: () => w });
				var o = t('../../node_modules/mobx/dist/mobx.esm.js'),
					g = t('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					u = t('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					n = t('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					e = t('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					r = t('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					s = t('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					a = t('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					C = t('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					E = t('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					_ = t('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					T = t('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					h = t('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					y = t('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					R = t('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const i = {},
					b = { globals: { siteId: '8uyt2m' } };
				class w {
					static recommendation(c) {
						const p = c.id;
						if (i[p]) return i[p];
						const f = (i[p] = P({ client: b, controller: c }));
						return (
							f.on('afterStore', async ({ controller: m }, j) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await j();
							}),
							f.init(),
							f
						);
					}
					static autocomplete(c) {
						const p = c.id;
						if (i[p]) return i[p];
						const f = (i[p] = S({ client: b, controller: c }));
						return (
							f.on('afterStore', async ({ controller: m }, j) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await j();
							}),
							f.init(),
							f
						);
					}
					static search(c) {
						const p = c.id;
						if (i[p]) return i[p];
						const f = (i[p] = v({ client: b, controller: c }));
						return (
							f.on('afterStore', async ({ controller: m }, j) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await j();
							}),
							f.init(),
							f
						);
					}
				}
				function v(l) {
					const c = new C.V(new _.E({ settings: { coreType: 'query', corePrefix: l.controller.id } }), E.X);
					return new g.Tp(l.controller, {
						client: new e.K(l.client.globals, l.client.config),
						store: new s.U(l.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new T.E(),
						profiler: new h.U(),
						logger: new y.V(),
						tracker: new R.J(l.client.globals),
					});
				}
				function P(l) {
					const c = new C.V(new _.E(), E.X).detach(!0);
					return new n.c(l.controller, {
						client: new e.K(l.client.globals, l.client.config),
						store: new a.t(l.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new T.E(),
						profiler: new h.U(),
						logger: new y.V(),
						tracker: new R.J(l.client.globals),
					});
				}
				function S(l) {
					const c = new C.V(new _.E(), E.X).detach();
					return new u.Z(l.controller, {
						client: new e.K(l.client.globals, l.client.config),
						store: new r.Y(l.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new T.E(),
						profiler: new h.U(),
						logger: new y.V(),
						tracker: new R.J(l.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(x, d, t) {
				'use strict';
				t.d(d, { Z: () => n });
				var o = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const u = 'prism-block',
					n = (e) => {
						const r = (0, g.li)(null);
						return (
							(0, g.vJ)(() => {
								r.current && e.className?.includes('lang-') && !e.className?.includes(u) && window?.Prism?.highlightElement(r.current);
							}, [e.className, e.children, r]),
							(0, o.Y)('code', { ...e, ref: r, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/dequal/dist/index.mjs'(x, d, t) {
				'use strict';
				t.d(d, { j: () => u });
				var o = Object.prototype.hasOwnProperty;
				function g(n, e, r) {
					for (r of n.keys()) if (u(r, e)) return r;
				}
				function u(n, e) {
					var r, s, a;
					if (n === e) return !0;
					if (n && e && (r = n.constructor) === e.constructor) {
						if (r === Date) return n.getTime() === e.getTime();
						if (r === RegExp) return n.toString() === e.toString();
						if (r === Array) {
							if ((s = n.length) === e.length) for (; s-- && u(n[s], e[s]); );
							return s === -1;
						}
						if (r === Set) {
							if (n.size !== e.size) return !1;
							for (s of n) if (((a = s), (a && typeof a == 'object' && ((a = g(e, a)), !a)) || !e.has(a))) return !1;
							return !0;
						}
						if (r === Map) {
							if (n.size !== e.size) return !1;
							for (s of n) if (((a = s[0]), (a && typeof a == 'object' && ((a = g(e, a)), !a)) || !u(s[1], e.get(a)))) return !1;
							return !0;
						}
						if (r === ArrayBuffer) (n = new Uint8Array(n)), (e = new Uint8Array(e));
						else if (r === DataView) {
							if ((s = n.byteLength) === e.byteLength) for (; s-- && n.getInt8(s) === e.getInt8(s); );
							return s === -1;
						}
						if (ArrayBuffer.isView(n)) {
							if ((s = n.byteLength) === e.byteLength) for (; s-- && n[s] === e[s]; );
							return s === -1;
						}
						if (!r || typeof n == 'object') {
							s = 0;
							for (r in n) if ((o.call(n, r) && ++s && !o.call(e, r)) || !(r in e) || !u(n[r], e[r])) return !1;
							return Object.keys(e).length === s;
						}
					}
					return n !== n && e !== e;
				}
			},
			'../../node_modules/memoizerific sync recursive'(x) {
				function d(t) {
					var o = new Error("Cannot find module '" + t + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(d.keys = () => []), (d.resolve = d), (d.id = '../../node_modules/memoizerific sync recursive'), (x.exports = d);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Result-Result-stories.b0648376.iframe.bundle.js.map
