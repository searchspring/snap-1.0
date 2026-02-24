(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[7191],
		{
			'./components/src/components/Molecules/CalloutBadge/CalloutBadge.stories.tsx'(T, n, e) {
				'use strict';
				e.r(n), e.d(n, { Default: () => d, __namedExportsOrder: () => h, default: () => E });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					_ = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					r = e('./components/src/utilities/storybook.tsx'),
					m = e('./components/src/utilities/componentArgs.ts'),
					u = e('./components/src/utilities/snapify.ts');
				const g = `# CalloutBadge

Renders callout badges configured in the Searchspring Management Console and returned from the API. This component is intended to be used within a \`Result\` component to display callout badges.

## Usage
\`\`\`jsx
import { CalloutBadge } from '@searchspring/snap-preact-components';
\`\`\`

### result
The required \`result\` prop specifies a reference to a product object from the \`results\` store array.

\`\`\`jsx
<CalloutBadge result={result} />
\`\`\`

### componentMap
The \`componentMap\` prop allows for custom badge components. This functionality requires the component and accompanying files to be synced to the Searchspring Management Console using Snapfu.

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
The callout badge slot will by default only render a single badge, but the limit can be increased to allow rendering multiple badges in the same location. This allows for "stacking" of the badges in the callout slot. The order of the stack is determined by the SMC badge configuration.

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
										children: [(0, t.Y)(c.oz, { options: { overrides: { code: r.Z } }, children: g }), (0, t.Y)(c.uY, { story: c.h1 })],
									}),
							},
						},
						decorators: [
							(o) =>
								(0, t.FD)('div', {
									style: { width: '300px', height: '500px', padding: '20px', border: '2px dotted lightgrey' },
									children: [
										(0, t.Y)('div', { style: { height: '300px', border: '2px dotted lightgrey' } }),
										(0, t.Y)('div', { style: { height: '50px', margin: '10px 0', border: '2px dotted lightgrey' } }),
										(0, t.Y)(o, {}),
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
								table: { type: { summary: 'object' } },
								control: { type: 'object' },
							},
							renderEmpty: {
								description: 'Render wrapper element even when there are no badges',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							limit: {
								description: 'Number of badges per slot',
								table: { type: { summary: 'number' }, defaultValue: { summary: '1' } },
								control: { type: 'number' },
							},
							tag: {
								description: 'Callout location tag',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'callout' } },
								control: { type: 'text' },
							},
							...m.F,
						},
					},
					P = u.p.search({ id: 'CalloutBadge', globals: { siteId: 'atkzs2' } }),
					O = (0, l.PA)(({ args: o, controller: i }) => (0, t.Y)(_.W, { ...o, result: i?.store?.results[0] })),
					d = (o, { loaded: { controller: i } }) => (0, t.Y)(O, { args: o, controller: i });
				(d.loaders = [
					async () => (
						P.on('afterSearch', ({ response: o }) => {
							(o.search.results[0].badges = [
								{ tag: 'free-shipping', value: 'Free Shipping' },
								{ tag: 'last-one', value: 'Last One!' },
								{ tag: 'on-sale', value: 'On Sale' },
								{ tag: 'save-percent', value: 'Save 30%' },
								{ tag: 'inventory-remaining', value: '1 in stock' },
							]),
								(o.meta = {
									...o.meta,
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
					(d.args = { tag: 'callout' }),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
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
								...d.parameters?.docs?.source,
							},
						},
					});
				const h = ['Default'];
			},
			'./components/src/components/Atoms/BadgeImage/BadgeImage.tsx'(T, n, e) {
				'use strict';
				e.d(n, { z: () => h });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/dist/preact.module.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/classnames/index.js'),
					r = e.n(_),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('./components/src/providers/cache.tsx'),
					g = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					E = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/utilities/mergeProps.ts'),
					O = e('./components/src/utilities/mergeStyles.ts');
				const d = () => (0, c.AH)({ maxHeight: '100%', maxWidth: '100%' }),
					h = (0, m.PA)((o) => {
						const i = (0, g.u)(),
							B = { treePath: (0, E.LU)() },
							v = (0, P.v6)('badgeImage', i, B, o),
							{ label: C, url: y, tag: A, className: s, internalClassName: a } = v,
							p = (0, O.Z)(v, d);
						return y
							? (0, t.Y)(u._, {
									children: (0, t.Y)('img', {
										...p,
										className: r()('ss__badge-image', `ss__badge-image--${A}`, s, a),
										alt: C || `${A} badge`,
										src: y,
									}),
							  })
							: (0, t.Y)(l.FK, {});
					});
			},
			'./components/src/components/Atoms/BadgePill/BadgePill.tsx'(T, n, e) {
				'use strict';
				e.d(n, { L: () => h });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/dist/preact.module.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/classnames/index.js'),
					r = e.n(_),
					m = e('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
					u = e('./components/src/providers/cache.tsx'),
					g = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					E = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/utilities/mergeProps.ts'),
					O = e('./components/src/utilities/mergeStyles.ts');
				const d = ({ color: o, colorText: i }) =>
						(0, c.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: o,
							color: i,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
							borderRadius: '1em',
						}),
					h = (0, m.PA)((o) => {
						const i = (0, g.u)(),
							B = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, E.LU)() },
							v = (0, P.v6)('badgePill', i, B, o),
							{ value: C, tag: y, className: A, internalClassName: s } = v,
							a = (0, O.Z)(v, d);
						return C
							? (0, t.Y)(u._, {
									children: (0, t.Y)('div', {
										...a,
										className: r()('ss__badge-pill', `ss__badge-pill--${y}`, A, s),
										children: (0, t.Y)('span', { className: 'ss__badge-pill__value', children: C }),
									}),
							  })
							: (0, t.Y)(l.FK, {});
					});
			},
			'./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'(T, n, e) {
				'use strict';
				e.d(n, { Z: () => h });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/dist/preact.module.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/classnames/index.js'),
					r = e.n(_),
					m = e('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
					u = e('./components/src/providers/cache.tsx'),
					g = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					E = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/utilities/mergeProps.ts'),
					O = e('./components/src/utilities/mergeStyles.ts');
				const d = ({ color: o, colorText: i }) =>
						(0, c.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: o,
							color: i,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					h = (0, m.PA)((o) => {
						const i = (0, g.u)(),
							B = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, E.LU)() },
							v = (0, P.v6)('badgeRectangle', i, B, o),
							{ value: C, tag: y, className: A, internalClassName: s } = v,
							a = (0, O.Z)(v, d);
						return C
							? (0, t.Y)(u._, {
									children: (0, t.Y)('div', {
										...a,
										className: r()('ss__badge-rectangle', `ss__badge-rectangle--${y}`, A, s),
										children: (0, t.Y)('span', { className: 'ss__badge-rectangle__value', children: C }),
									}),
							  })
							: (0, t.Y)(l.FK, {});
					});
			},
			'./components/src/components/Atoms/BadgeText/BadgeText.tsx'(T, n, e) {
				'use strict';
				e.d(n, { p: () => h });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/dist/preact.module.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/classnames/index.js'),
					r = e.n(_),
					m = e('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
					u = e('./components/src/providers/cache.tsx'),
					g = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					E = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/utilities/mergeProps.ts'),
					O = e('./components/src/utilities/mergeStyles.ts');
				const d = ({ colorText: o }) =>
						(0, c.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							color: o,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					h = (0, m.PA)((o) => {
						const i = (0, g.u)(),
							B = { colorText: '#000000', treePath: (0, E.LU)() },
							v = (0, P.v6)('badgeText', i, B, o),
							{ value: C, tag: y, className: A, internalClassName: s } = v,
							a = (0, O.Z)(v, d);
						return C
							? (0, t.Y)(u._, {
									children: (0, t.Y)('div', {
										...a,
										className: r()('ss__badge-text', `ss__badge-text--${y}`, A, s),
										children: (0, t.Y)('span', { className: 'ss__badge-text__value', children: C }),
									}),
							  })
							: (0, t.Y)(l.FK, {});
					});
			},
			'./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'(T, n, e) {
				'use strict';
				e.d(n, { W: () => D });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/dist/preact.module.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/classnames/index.js'),
					r = e.n(_),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('./components/src/providers/cache.tsx'),
					g = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					E = e('./components/src/providers/snap.tsx'),
					P = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/utilities/mergeProps.ts'),
					d = e('./components/src/utilities/mergeStyles.ts'),
					h = e('./components/src/utilities/defaultBadgeComponentMap.ts'),
					o = e('./components/src/hooks/useComponent.tsx');
				const i = () => (0, c.AH)({ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }),
					D = (0, m.PA)((B) => {
						const v = (0, g.u)(),
							C = (0, E.uk)(),
							A = { tag: 'callout', limit: 1, treePath: (0, P.LU)() },
							s = (0, O.v6)('calloutBadge', v, A, B),
							{ result: a, tag: p, renderEmpty: x, limit: M, className: f, internalClassName: U, treePath: L } = s,
							K = { ...h.q, ...(C?.templates?.library.import.component.badge || {}), ...s.componentMap },
							j = (0, d.Z)(s, i),
							b = a?.display.badges?.atLocation(p).slice(0, M);
						return x || b?.length
							? (0, t.Y)(u._, {
									children: (0, t.Y)('div', {
										...j,
										className: r()('ss__callout-badge', `ss__callout-badge--${p?.replace('/', '-')}`, f, U),
										children: b.map((R) => {
											const I = (0, o.x)(K, R.component);
											return I ? (0, t.Y)(I, { ...R, ...R.parameters, treePath: L }) : (0, t.Y)(l.FK, {});
										}),
									}),
							  })
							: (0, t.Y)(l.FK, {});
					});
			},
			'./components/src/hooks/useComponent.tsx'(T, n, e) {
				'use strict';
				e.d(n, { x: () => l });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = (c, _) => {
					const [r, m] = (0, t.J0)(void 0);
					return (
						(0, t.vJ)(() => {
							const u = c[_];
							if (u && typeof u == 'function') {
								const g = u();
								g instanceof Promise
									? g.then((E) => {
											m(() => E);
									  })
									: m(() => g);
							}
						}, []),
						r
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(T, n, e) {
				'use strict';
				e.d(n, { F: () => t });
				const t = {
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
			'./components/src/utilities/defaultBadgeComponentMap.ts'(T, n, e) {
				'use strict';
				e.d(n, { q: () => r });
				var t = e('./components/src/components/Atoms/BadgeText/BadgeText.tsx'),
					l = e('./components/src/components/Atoms/BadgePill/BadgePill.tsx'),
					c = e('./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'),
					_ = e('./components/src/components/Atoms/BadgeImage/BadgeImage.tsx');
				const r = { BadgeText: () => t.p, BadgePill: () => l.L, BadgeRectangle: () => c.Z, BadgeImage: () => _.z };
			},
			'./components/src/utilities/snapify.ts'(T, n, e) {
				'use strict';
				e.d(n, { p: () => v });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					l = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					c = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					_ = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					r = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					m = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					u = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					g = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					E = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					P = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					O = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					d = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					h = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					o = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					i = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const D = {},
					B = { globals: { siteId: '8uyt2m' } };
				class v {
					static recommendation(a) {
						const p = a.id;
						if (D[p]) return D[p];
						const x = (D[p] = y({ client: B, controller: a }));
						return (
							x.on('afterStore', async ({ controller: M }, f) => {
								M.log.debug('controller', M), M.log.debug('store', M.store.toJSON()), await f();
							}),
							x.init(),
							x
						);
					}
					static autocomplete(a) {
						const p = a.id;
						if (D[p]) return D[p];
						const x = (D[p] = A({ client: B, controller: a }));
						return (
							x.on('afterStore', async ({ controller: M }, f) => {
								M.log.debug('controller', M), M.log.debug('store', M.store.toJSON()), await f();
							}),
							x.init(),
							x
						);
					}
					static search(a) {
						const p = a.id;
						if (D[p]) return D[p];
						const x = (D[p] = C({ client: B, controller: a }));
						return (
							x.on('afterStore', async ({ controller: M }, f) => {
								M.log.debug('controller', M), M.log.debug('store', M.store.toJSON()), await f();
							}),
							x.init(),
							x
						);
					}
				}
				function C(s) {
					const a = new E.V(new O.E({ settings: { coreType: 'query', corePrefix: s.controller.id } }), P.X);
					return new l.Tp(s.controller, {
						client: new r.K(s.client.globals, s.client.config),
						store: new u.U(s.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new d.E(),
						profiler: new h.U(),
						logger: new o.V(),
						tracker: new i.J(s.client.globals),
					});
				}
				function y(s) {
					const a = new E.V(new O.E(), P.X).detach(!0);
					return new _.c(s.controller, {
						client: new r.K(s.client.globals, s.client.config),
						store: new g.t(s.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new d.E(),
						profiler: new h.U(),
						logger: new o.V(),
						tracker: new i.J(s.client.globals),
					});
				}
				function A(s) {
					const a = new E.V(new O.E(), P.X).detach();
					return new c.Z(s.controller, {
						client: new r.K(s.client.globals, s.client.config),
						store: new m.Y(s.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new d.E(),
						profiler: new h.U(),
						logger: new o.V(),
						tracker: new i.J(s.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(T, n, e) {
				'use strict';
				e.d(n, { Z: () => _ });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = 'prism-block',
					_ = (r) => {
						const m = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								m.current && r.className?.includes('lang-') && !r.className?.includes(c) && window?.Prism?.highlightElement(m.current);
							}, [r.className, r.children, m]),
							(0, t.Y)('code', { ...r, ref: m, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(T) {
				function n(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(n.keys = () => []), (n.resolve = n), (n.id = '../../node_modules/memoizerific sync recursive'), (T.exports = n);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-CalloutBadge-CalloutBadge-stories.5441dd85.iframe.bundle.js.map
