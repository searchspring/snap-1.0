(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7191],
		{
			'./components/src/components/Molecules/CalloutBadge/CalloutBadge.stories.tsx'(T, s, e) {
				'use strict';
				e.r(s), e.d(s, { Default: () => m, __namedExportsOrder: () => d, default: () => E });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					_ = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					a = e('./components/src/utilities/storybook.tsx'),
					c = e('./components/src/utilities/componentArgs.ts'),
					p = e('./components/src/utilities/snapify.ts');
				const g = `# CalloutBadge

Renders callout badges configured in the Athos Search & Product Discovery Console and returned from the API. This component is intended to be used within a \`Result\` component to display callout badges.

## Usage
\`\`\`jsx
import { CalloutBadge } from '@athoscommerce/snap-preact-components';
\`\`\`

### result
The required \`result\` prop specifies a reference to a product object from the \`results\` store array.

\`\`\`jsx
<CalloutBadge result={result} />
\`\`\`

### componentMap
The \`componentMap\` prop allows for custom badge components. This functionality requires the component and accompanying files to be synced to the Athos Search & Product Discovery Console using Snapfu.

\`\`\`jsx
import { CustomOnSale } from './components/Badges/CustomOnSale';
...
<CalloutBadge 
    result={result} 
    componentMap={{
        'customOnSaleBadge': () => CustomOnSale
    }}
/>
\`\`\`

The \`componentMap\` also supports async functions for dynamic importing of badges.

\`\`\`jsx
<CalloutBadge 
    result={result} 
    componentMap={{
        'customOnSaleBadge': () => {
            return (await import('./components/Badges/CustomOnSale')).CustomOnSale;
        }
    }}
/>
\`\`\`

### renderEmpty
By default if there are no badges, the wrapper element will not render. If you need the wrapper element to persist, this prop will cause the wrapper element \`ss__callout-badge\` to render.

\`\`\`jsx
<CalloutBadge
    renderEmpty
    result={result} 
    componentMap={{
        'customOnSaleBadge': () => CustomOnSale
    }}
/>
\`\`\`

### limit
The callout badge slot will by default only render a single badge, but the limit can be increased to allow rendering multiple badges in the same location. This allows for "stacking" of the badges in the callout slot. The order of the stack is determined by the ASD badge configuration.

\`\`\`jsx
<CalloutBadge
    limit={3}
    result={result} 
/>
\`\`\`

### tag
The \`tag\` prop specifies the location name of this callout location, the default value is \`callout\`. 

\`\`\`jsx
<CalloutBadge tag={'callout'} result={result} />
\`\`\`
`,
					E = {
						title: 'Molecules/CalloutBadge',
						component: _.W,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(l.oz, { options: { overrides: { code: a.Z } }, children: g }), (0, t.Y)(l.uY, { story: l.h1 })],
									}),
							},
						},
						decorators: [
							(n) =>
								(0, t.FD)('div', {
									style: { width: '300px', height: '500px', padding: '20px', border: '2px dotted lightgrey' },
									children: [
										(0, t.Y)('div', { style: { height: '300px', border: '2px dotted lightgrey' } }),
										(0, t.Y)('div', { style: { height: '50px', margin: '10px 0', border: '2px dotted lightgrey' } }),
										(0, t.Y)(n, {}),
									],
								}),
						],
						argTypes: {
							result: {
								description: 'Result store Product reference',
								type: { required: !0 },
								table: { type: { summary: 'result store Product object' } },
								control: { type: 'none' },
							},
							componentMap: {
								description: 'Component map containing custom badge component',
								table: { type: { summary: 'object' }, category: 'Templates Legal' },
								control: { type: 'object' },
							},
							renderEmpty: {
								description: 'Render wrapper element even when there are no badges',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							limit: {
								description: 'Number of badges per slot',
								table: { type: { summary: 'number' }, category: 'Templates Legal', defaultValue: { summary: '1' } },
								control: { type: 'number' },
							},
							tag: {
								description: 'Callout location tag',
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: 'callout' } },
								control: { type: 'text' },
							},
							...c.F,
						},
					},
					P = p.p.search({ id: 'CalloutBadge', globals: { siteId: 'atkzs2' } }),
					v = (0, i.PA)(({ args: n, controller: C }) => (0, t.Y)(_.W, { ...n, result: C?.store?.results[0] })),
					m = (n, { loaded: { controller: C } }) => (0, t.Y)(v, { args: n, controller: C });
				(m.loaders = [
					async () => (
						P.on('afterSearch', ({ response: n }) => {
							(n.search.results[0].badges = [
								{ tag: 'free-shipping', value: 'Free Shipping' },
								{ tag: 'last-one', value: 'Last One!' },
								{ tag: 'on-sale', value: 'On Sale' },
								{ tag: 'save-percent', value: 'Save 30%' },
								{ tag: 'inventory-remaining', value: '1 in stock' },
							]),
								(n.meta = {
									...n.meta,
									badges: {
										locations: {
											left: [{ tag: 'left', name: 'Left' }],
											right: [{ tag: 'right', name: 'Right' }],
											callout: [{ tag: 'callout', name: 'Callout' }],
										},
										tags: {
											'free-shipping': {
												location: 'callout/callout',
												component: 'BadgeRectangle',
												priority: 1,
												enabled: !0,
												parameters: { color: '#3A23AD', colorText: '#FFFFFF' },
											},
											'last-one': {
												location: 'callout/callout',
												component: 'BadgePill',
												priority: 1,
												enabled: !0,
												parameters: { color: '#515151', colorText: '#FFFFFF' },
											},
											'inventory-remaining': {
												location: 'callout/callout',
												component: 'BadgePill',
												priority: 1,
												enabled: !0,
												parameters: { color: '#382F5A', colorText: '#FFFFFF' },
											},
											'on-sale': {
												location: 'left/left',
												component: 'BadgePill',
												priority: 1,
												enabled: !0,
												parameters: { color: '#00CEE1', colorText: '#FFFFFF' },
											},
											'save-percent': {
												location: 'left/left',
												component: 'BadgeRectangle',
												priority: 1,
												enabled: !0,
												parameters: { color: '#8F6CF6', colorText: '#FFFFFF' },
											},
										},
									},
								});
						}),
						await P.search(),
						{ controller: P }
					),
				]),
					(m.args = { tag: 'callout' }),
					(m.parameters = {
						...m.parameters,
						docs: {
							...m.parameters?.docs,
							source: {
								originalSource: `(args: CalloutBadgeProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <ObservableCalloutBadge args={args} controller={controller} />;
}`,
								...m.parameters?.docs?.source,
							},
						},
					});
				const d = ['Default'];
			},
			'./components/src/components/Atoms/BadgeImage/BadgeImage.tsx'(T, s, e) {
				'use strict';
				e.d(s, { z: () => m });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/classnames/index.js'),
					_ = e.n(l),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('./components/src/providers/cache.tsx'),
					p = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					g = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/utilities/mergeProps.ts'),
					P = e('./components/src/utilities/mergeStyles.ts');
				const v = () => (0, i.AH)({ maxHeight: '100%', maxWidth: '100%' }),
					m = (0, a.PA)((d) => {
						const n = (0, p.u)(),
							u = { treePath: (0, g.LU)() },
							h = (0, E.v6)('badgeImage', n, u, d),
							{ label: D, url: A, tag: y, className: B, internalClassName: o } = h,
							r = (0, P.Z)(h, v);
						return A
							? (0, t.Y)(c._, {
									children: (0, t.Y)('img', {
										...r,
										className: _()('ss__badge-image', `ss__badge-image--${y}`, B, o),
										alt: D || `${y} badge`,
										src: A,
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgePill/BadgePill.tsx'(T, s, e) {
				'use strict';
				e.d(s, { L: () => m });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/classnames/index.js'),
					_ = e.n(l),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('./components/src/providers/cache.tsx'),
					p = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					g = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/utilities/mergeProps.ts'),
					P = e('./components/src/utilities/mergeStyles.ts');
				const v = ({ color: d, colorText: n }) =>
						(0, i.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: d,
							color: n,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
							borderRadius: '1em',
						}),
					m = (0, a.PA)((d) => {
						const n = (0, p.u)(),
							u = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, g.LU)() },
							h = (0, E.v6)('badgePill', n, u, d),
							{ value: D, tag: A, className: y, internalClassName: B } = h,
							o = (0, P.Z)(h, v);
						return D
							? (0, t.Y)(c._, {
									children: (0, t.Y)('div', {
										...o,
										className: _()('ss__badge-pill', `ss__badge-pill--${A}`, y, B),
										children: (0, t.Y)('span', { className: 'ss__badge-pill__value', children: D }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'(T, s, e) {
				'use strict';
				e.d(s, { Z: () => m });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/classnames/index.js'),
					_ = e.n(l),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('./components/src/providers/cache.tsx'),
					p = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					g = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/utilities/mergeProps.ts'),
					P = e('./components/src/utilities/mergeStyles.ts');
				const v = ({ color: d, colorText: n }) =>
						(0, i.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: d,
							color: n,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					m = (0, a.PA)((d) => {
						const n = (0, p.u)(),
							u = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, g.LU)() },
							h = (0, E.v6)('badgeRectangle', n, u, d),
							{ value: D, tag: A, className: y, internalClassName: B } = h,
							o = (0, P.Z)(h, v);
						return D
							? (0, t.Y)(c._, {
									children: (0, t.Y)('div', {
										...o,
										className: _()('ss__badge-rectangle', `ss__badge-rectangle--${A}`, y, B),
										children: (0, t.Y)('span', { className: 'ss__badge-rectangle__value', children: D }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgeText/BadgeText.tsx'(T, s, e) {
				'use strict';
				e.d(s, { p: () => m });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/classnames/index.js'),
					_ = e.n(l),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('./components/src/providers/cache.tsx'),
					p = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					g = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/utilities/mergeProps.ts'),
					P = e('./components/src/utilities/mergeStyles.ts');
				const v = ({ colorText: d }) =>
						(0, i.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							color: d,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					m = (0, a.PA)((d) => {
						const n = (0, p.u)(),
							u = { colorText: '#000000', treePath: (0, g.LU)() },
							h = (0, E.v6)('badgeText', n, u, d),
							{ value: D, tag: A, className: y, internalClassName: B } = h,
							o = (0, P.Z)(h, v);
						return D
							? (0, t.Y)(c._, {
									children: (0, t.Y)('div', {
										...o,
										className: _()('ss__badge-text', `ss__badge-text--${A}`, y, B),
										children: (0, t.Y)('span', { className: 'ss__badge-text__value', children: D }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'(T, s, e) {
				'use strict';
				e.d(s, { W: () => C });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/classnames/index.js'),
					_ = e.n(l),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('./components/src/providers/cache.tsx'),
					p = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					g = e('./components/src/providers/snap.tsx'),
					E = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/mergeStyles.ts'),
					m = e('./components/src/utilities/defaultBadgeComponentMap.ts'),
					d = e('./components/src/hooks/useComponent.tsx');
				const n = () => (0, i.AH)({ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }),
					C = (0, a.PA)((u) => {
						const h = (0, p.u)(),
							D = (0, g.uk)(),
							y = { tag: 'callout', limit: 1, treePath: (0, E.LU)() },
							B = (0, P.v6)('calloutBadge', h, y, u),
							{ result: o, tag: r, renderEmpty: M, limit: x, className: O, internalClassName: f, treePath: L } = B,
							U = { ...m.q, ...(D?.templates?.library.import.component.badge || {}), ...B.componentMap },
							j = (0, v.Z)(B, n),
							R = o?.display.badges?.atLocation(r).slice(0, x);
						return M || R?.length
							? (0, t.Y)(c._, {
									children: (0, t.Y)('div', {
										...j,
										className: _()('ss__callout-badge', `ss__callout-badge--${r?.replace('/', '-')}`, O, f),
										children: R.map((b) => {
											const I = (0, d.x)(U, b.component);
											return I ? (0, t.Y)(I, { ...b, ...b.parameters, treePath: L }) : null;
										}),
									}),
							  })
							: null;
					});
			},
			'./components/src/hooks/useComponent.tsx'(T, s, e) {
				'use strict';
				e.d(s, { x: () => i });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const i = (l, _) => {
					const [a, c] = (0, t.J0)(void 0);
					return (
						(0, t.vJ)(() => {
							const p = l[_];
							if (p && typeof p == 'function') {
								const g = p();
								g instanceof Promise
									? g.then((E) => {
											c(() => E);
									  })
									: c(() => g);
							}
						}, []),
						a
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(T, s, e) {
				'use strict';
				e.d(s, { F: () => t });
				const t = {
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
			'./components/src/utilities/defaultBadgeComponentMap.ts'(T, s, e) {
				'use strict';
				e.d(s, { q: () => a });
				var t = e('./components/src/components/Atoms/BadgeText/BadgeText.tsx'),
					i = e('./components/src/components/Atoms/BadgePill/BadgePill.tsx'),
					l = e('./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'),
					_ = e('./components/src/components/Atoms/BadgeImage/BadgeImage.tsx');
				const a = { BadgeText: () => t.p, BadgePill: () => i.L, BadgeRectangle: () => l.Z, BadgeImage: () => _.z };
			},
			'./components/src/utilities/snapify.ts'(T, s, e) {
				'use strict';
				e.d(s, { p: () => D });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					i = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					l = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					_ = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					a = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					c = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					p = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					g = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					E = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					P = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					v = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					m = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					d = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					n = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					C = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const u = {},
					h = { globals: { siteId: 'atkzs2' } };
				class D {
					static recommendation(r) {
						const M = r.id;
						if (u[M]) return u[M];
						const x = (u[M] = y({ client: h, controller: r }));
						return (
							x.on('afterStore', async ({ controller: O }, f) => {
								O.log.debug('controller', O), O.log.debug('store', O.store.toJSON()), await f();
							}),
							x.init(),
							x
						);
					}
					static autocomplete(r) {
						const M = r.id;
						if (u[M]) return u[M];
						const x = (u[M] = B({ client: h, controller: r }));
						return (
							x.on('afterStore', async ({ controller: O }, f) => {
								O.log.debug('controller', O), O.log.debug('store', O.store.toJSON()), await f();
							}),
							x.init(),
							x
						);
					}
					static search(r) {
						const M = r.id;
						if (u[M]) return u[M];
						const x = (u[M] = A({ client: h, controller: r }));
						return (
							x.on('afterStore', async ({ controller: O }, f) => {
								O.log.debug('controller', O), O.log.debug('store', O.store.toJSON()), await f();
							}),
							x.init(),
							x
						);
					}
				}
				function A(o) {
					const r = new E.V(new v.E({ settings: { coreType: 'query', corePrefix: o.controller.id } }), P.X);
					return new i.Tp(o.controller, {
						client: new a.K(o.client.globals, o.client.config),
						store: new p.U(o.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new m.E(),
						profiler: new d.U(),
						logger: new n.V(),
						tracker: new C.J(o.client.globals),
					});
				}
				function y(o) {
					const r = new E.V(new v.E(), P.X).detach(!0);
					return new _.c(o.controller, {
						client: new a.K(o.client.globals, o.client.config),
						store: new g.t(o.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new m.E(),
						profiler: new d.U(),
						logger: new n.V(),
						tracker: new C.J(o.client.globals),
					});
				}
				function B(o) {
					const r = new E.V(new v.E(), P.X).detach();
					return new l.Z(o.controller, {
						client: new a.K(o.client.globals, o.client.config),
						store: new c.Y(o.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new m.E(),
						profiler: new d.U(),
						logger: new n.V(),
						tracker: new C.J(o.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(T, s, e) {
				'use strict';
				e.d(s, { Z: () => _ });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = 'prism-block',
					_ = (a) => {
						const c = (0, i.li)(null);
						return (
							(0, i.vJ)(() => {
								c.current && a.className?.includes('lang-') && !a.className?.includes(l) && window?.Prism?.highlightElement(c.current);
							}, [a.className, a.children, c]),
							(0, t.Y)('code', { ...a, ref: c, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(T) {
				function s(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(s.keys = () => []), (s.resolve = s), (s.id = '../../node_modules/memoizerific sync recursive'), (T.exports = s);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-CalloutBadge-CalloutBadge-stories.ee7b1f51.iframe.bundle.js.map
