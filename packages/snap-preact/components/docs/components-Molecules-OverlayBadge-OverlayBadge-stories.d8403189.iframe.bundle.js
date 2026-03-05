(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9907],
		{
			'./components/src/components/Molecules/OverlayBadge/OverlayBadge.stories.tsx'(b, s, e) {
				'use strict';
				e.r(s), e.d(s, { Default: () => p, __namedExportsOrder: () => d, default: () => O });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					c = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					r = e('./components/src/utilities/storybook.tsx'),
					i = e('./components/src/utilities/componentArgs.ts'),
					P = e('./components/src/utilities/snapify.ts');
				const h = `# OverlayBadge

Renders overlay badges configured in the Athos Search & Product Discovery Console and returned from the API. This component is intended to be used within a \`Result\` component to wrap elements (children) that should have overlay badges.

## Usage
\`\`\`jsx
import { OverlayBadge } from '@athoscommerce/snap-preact-components';
\`\`\`

### children
The required children provided to the component will be wrapped and rendered in a relative div to allow badges to be positioned absolutely. 

\`\`\`jsx
<OverlayBadge controller={controller} result={result}>
    <div>
        <img src="/images/example.png"/>
    </div>
</OverlayBadge>
\`\`\`

### controller
The required \`controller\` prop specifies a reference to the controller.

\`\`\`jsx
<OverlayBadge controller={controller} result={result}>
    <div>
        <img src="/images/example.png"/>
    </div>
</OverlayBadge>
\`\`\`

### result
The required \`result\` prop specifies a reference to a product object from the \`results\` store array.

\`\`\`jsx
<OverlayBadge controller={controller} result={result}>
    <div>
        <img src="/images/example.png"/>
    </div>
</OverlayBadge>
\`\`\`

### componentMap
The \`componentMap\` prop allows for custom badge components. This functionality requires the component and accompanying files to be synced to the Athos Search & Product Discovery Console using Snapfu.

\`\`\`jsx
import { CustomOnSale } from './components/Badges/CustomOnSale';
...
<OverlayBadge 
    controller={controller} 
    result={result}
    componentMap={{
        'customOnSaleBadge': () => CustomOnSale
    }}
>
    <div>
        <img src="/images/example.png"/>
    </div>
</OverlayBadge>
\`\`\`

The \`componentMap\` also supports async functions for dynamic importing of badges.

\`\`\`jsx
<OverlayBadge 
    controller={controller} 
    result={result}
    componentMap={{
        'customOnSaleBadge': () => {
            return (await import('./components/Badges/CustomOnSale')).CustomOnSale;
        }
    }}
>
    <div>
        <img src="/images/example.png"/>
    </div>
</OverlayBadge>
\`\`\`

### renderEmpty
By default if there are no badges, the wrapper element will not render. If you need the wrapper element to persist, this prop will cause the wrapper element \`ss__overlay-badge\` to render.

\`\`\`jsx
<OverlayBadge
    renderEmpty
    controller={controller}
    result={result}
    componentMap={{
        'customOnSaleBadge': () => CustomOnSale
    }}
>
    <div>
        <img src="/images/example.png"/>
    </div>
</OverlayBadge>
\`\`\`

### limit
The overlay badge will by default only render a single badge per overlay slot (left and right by default), but the limit can be increased to allow rendering multiple badges in the same location. This allows for "stacking" of the badges in the overlay slots. The order of the stack is determined by the ASD badge configuration.

\`\`\`jsx
<OverlayBadge
    limit={3}
    controller={controller}
    result={result}
/>
\`\`\`
`,
					O = {
						title: 'Molecules/OverlayBadge',
						component: c.Q,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(m.oz, { options: { overrides: { code: r.Z } }, children: h }), (0, t.Y)(m.uY, { story: m.h1 })],
									}),
							},
						},
						decorators: [
							(n) =>
								(0, t.FD)('div', {
									style: { width: '300px', height: '500px', padding: '20px', border: '2px dotted lightgrey' },
									children: [(0, t.Y)(n, {}), (0, t.Y)('div', { style: { height: '50px', margin: '10px 0', border: '2px dotted lightgrey' } })],
								}),
						],
						argTypes: {
							result: {
								description: 'Result store Product reference',
								type: { required: !0 },
								table: { type: { summary: 'result store Product object' } },
								control: { type: 'none' },
							},
							controller: {
								description: 'Controller reference',
								type: { required: !0 },
								table: { type: { summary: 'Controller' } },
								control: { type: 'none' },
							},
							children: {
								description: 'Overlay content to be displayed',
								type: { required: !0 },
								table: { category: 'Templates Legal', type: { summary: 'string, JSX' } },
							},
							componentMap: {
								description: 'Component map containing custom badge component',
								table: { category: 'Templates Legal', type: { summary: 'object' } },
								control: { type: 'object' },
							},
							renderEmpty: {
								description: 'Render wrapper element even when there are no badges',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							limit: {
								description: 'Number of badges per slot',
								table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: '1' } },
								control: { type: 'number' },
							},
							...i.F,
						},
					},
					M = P.p.search({ id: 'OverlayBadge', globals: { siteId: 'atkzs2' } }),
					x = (0, l.PA)(({ args: n, controller: T }) =>
						(0, t.Y)(c.Q, {
							...n,
							controller: T,
							result: T?.store?.results[0],
							children: (0, t.Y)('div', { style: { height: '300px', border: '2px dotted lightgrey' } }),
						})
					),
					p = (n, { loaded: { controller: T } }) => (0, t.Y)(x, { args: n, controller: T });
				(p.loaders = [
					async () => (
						M.on('afterSearch', ({ response: n }) => {
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
												location: 'left/left',
												component: 'BadgeRectangle',
												priority: 1,
												enabled: !0,
												parameters: { color: '#3A23AD', colorText: '#FFFFFF' },
											},
											'last-one': {
												location: 'left/left',
												component: 'BadgePill',
												priority: 1,
												enabled: !0,
												parameters: { color: '#515151', colorText: '#FFFFFF' },
											},
											'inventory-remaining': {
												location: 'left/left',
												component: 'BadgePill',
												priority: 1,
												enabled: !0,
												parameters: { color: '#382F5A', colorText: '#FFFFFF' },
											},
											'on-sale': {
												location: 'right/right',
												component: 'BadgePill',
												priority: 1,
												enabled: !0,
												parameters: { color: '#00CEE1', colorText: '#FFFFFF' },
											},
											'save-percent': {
												location: 'right/right',
												component: 'BadgeRectangle',
												priority: 1,
												enabled: !0,
												parameters: { color: '#8F6CF6', colorText: '#FFFFFF' },
											},
										},
									},
								});
						}),
						await M.search(),
						{ controller: M }
					),
				]),
					(p.parameters = {
						...p.parameters,
						docs: {
							...p.parameters?.docs,
							source: {
								originalSource: `(args: OverlayBadgeProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <ObservableOverlayBadge args={args} controller={controller} />;
}`,
								...p.parameters?.docs?.source,
							},
						},
					});
				const d = ['Default'];
			},
			'./components/src/components/Atoms/BadgeImage/BadgeImage.tsx'(b, s, e) {
				'use strict';
				e.d(s, { z: () => p });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					c = e.n(m),
					r = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('./components/src/providers/cache.tsx'),
					P = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts');
				const x = () => (0, l.AH)({ maxHeight: '100%', maxWidth: '100%' }),
					p = (0, r.PA)((d) => {
						const n = (0, P.u)(),
							u = { treePath: (0, h.LU)() },
							_ = (0, O.v6)('badgeImage', n, u, d),
							{ label: v, url: g, tag: y, className: B, internalClassName: o } = _,
							a = (0, M.Z)(_, x);
						return g
							? (0, t.Y)(i._, {
									children: (0, t.Y)('img', {
										...a,
										className: c()('ss__badge-image', `ss__badge-image--${y}`, B, o),
										alt: v || `${y} badge`,
										src: g,
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgePill/BadgePill.tsx'(b, s, e) {
				'use strict';
				e.d(s, { L: () => p });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					c = e.n(m),
					r = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('./components/src/providers/cache.tsx'),
					P = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts');
				const x = ({ color: d, colorText: n }) =>
						(0, l.AH)({
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
					p = (0, r.PA)((d) => {
						const n = (0, P.u)(),
							u = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, h.LU)() },
							_ = (0, O.v6)('badgePill', n, u, d),
							{ value: v, tag: g, className: y, internalClassName: B } = _,
							o = (0, M.Z)(_, x);
						return v
							? (0, t.Y)(i._, {
									children: (0, t.Y)('div', {
										...o,
										className: c()('ss__badge-pill', `ss__badge-pill--${g}`, y, B),
										children: (0, t.Y)('span', { className: 'ss__badge-pill__value', children: v }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'(b, s, e) {
				'use strict';
				e.d(s, { Z: () => p });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					c = e.n(m),
					r = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('./components/src/providers/cache.tsx'),
					P = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts');
				const x = ({ color: d, colorText: n }) =>
						(0, l.AH)({
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
					p = (0, r.PA)((d) => {
						const n = (0, P.u)(),
							u = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, h.LU)() },
							_ = (0, O.v6)('badgeRectangle', n, u, d),
							{ value: v, tag: g, className: y, internalClassName: B } = _,
							o = (0, M.Z)(_, x);
						return v
							? (0, t.Y)(i._, {
									children: (0, t.Y)('div', {
										...o,
										className: c()('ss__badge-rectangle', `ss__badge-rectangle--${g}`, y, B),
										children: (0, t.Y)('span', { className: 'ss__badge-rectangle__value', children: v }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgeText/BadgeText.tsx'(b, s, e) {
				'use strict';
				e.d(s, { p: () => p });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					c = e.n(m),
					r = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('./components/src/providers/cache.tsx'),
					P = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts');
				const x = ({ colorText: d }) =>
						(0, l.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							color: d,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					p = (0, r.PA)((d) => {
						const n = (0, P.u)(),
							u = { colorText: '#000000', treePath: (0, h.LU)() },
							_ = (0, O.v6)('badgeText', n, u, d),
							{ value: v, tag: g, className: y, internalClassName: B } = _,
							o = (0, M.Z)(_, x);
						return v
							? (0, t.Y)(i._, {
									children: (0, t.Y)('div', {
										...o,
										className: c()('ss__badge-text', `ss__badge-text--${g}`, y, B),
										children: (0, t.Y)('span', { className: 'ss__badge-text__value', children: v }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'(b, s, e) {
				'use strict';
				e.d(s, { Q: () => u });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					c = e.n(m),
					r = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('./components/src/providers/cache.tsx'),
					P = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('./components/src/providers/snap.tsx'),
					O = e('./components/src/providers/treePath.tsx'),
					M = e('./components/src/utilities/mergeProps.ts'),
					x = e('./components/src/utilities/mergeStyles.ts'),
					p = e('./components/src/utilities/defaultBadgeComponentMap.ts'),
					d = e('./components/src/hooks/useComponent.tsx');
				const n = ({ section: _, top: v, bottom: g, index: y, tag: B }) =>
						(0, l.AH)({
							position: 'relative',
							display: 'flex',
							flexDirection: 'column',
							alignItems: _ == 'right' ? 'flex-end' : 'flex-start',
							justifyContent: !v && !g ? 'center' : g && !v ? 'flex-end' : 'flex-start',
							gap: '0.5em',
							gridArea: B,
							boxSizing: 'border-box',
							zIndex: Math.max(100 - y, 1),
							width: '100%',
							height: '100%',
						}),
					T = ({ controller: _ }) => {
						const g = _?.store?.meta?.badges?.groups?.['overlay']?.grid;
						let y = {};
						if (g?.length && g[0]?.length) {
							const B = g.map((a) => `"${a.join(' ')}"`).join(' ');
							y = {
								gridTemplateColumns: `repeat(${g[0].length}, minmax(0, 1fr))`,
								gridTemplateRows: `repeat(${g.length}, minmax(0, 1fr))`,
								gridTemplateAreas: B,
							};
						}
						return (0, l.AH)({
							position: 'relative',
							'& .ss__overlay-badge__grid-wrapper': {
								pointerEvents: 'none',
								display: 'grid',
								position: 'absolute',
								top: 0,
								right: 0,
								bottom: 0,
								left: 0,
								...y,
							},
						});
					},
					u = (0, r.PA)((_) => {
						const v = (0, P.u)(),
							g = (0, h.uk)(),
							B = { limit: 1, treePath: (0, O.LU)() },
							o = (0, M.v6)('overlayBadge', v, B, _),
							{ result: a, children: E, controller: f, renderEmpty: D, limit: A, className: S, internalClassName: F, treePath: N } = o;
						if (!E) return f?.log?.warn('OverlayBadge component must have children'), null;
						const j = f?.store?.meta;
						if (!j) return f?.log?.warn('Controller must have a meta store'), (0, t.Y)(t.FK, { children: E });
						const Y = 'overlay',
							w = { ...p.q, ...(g?.templates?.library.import.component.badge || {}), ...o.componentMap },
							K = j?.badges?.groups?.[Y]?.sections
								?.map((C) => {
									const U = j?.data?.badges?.locations[C],
										R = U?.map((I, L) => ({
											tag: I.tag,
											name: I.name,
											top: L == 0,
											bottom: L == U.length - 1,
											badges: a?.display.badges?.atLocation(`${C}/${I.tag}`).slice(0, A),
										})).filter((I) => I.badges?.length);
									return { section: C, slots: R };
								})
								.filter((C) => C.slots?.length),
							z = (0, x.Z)(o, T);
						return D || K?.length
							? (0, t.Y)(i._, {
									children: (0, t.FD)('div', {
										...z,
										className: c()('ss__overlay-badge', S, F),
										children: [
											(0, t.Y)('div', {
												className: 'ss__overlay-badge__grid-wrapper',
												children: K.map((C, U) =>
													C.slots?.map((R) => {
														const I = n({ ...o, tag: R.tag, section: C.section, index: U, top: R.top, bottom: R.bottom });
														return (0, t.Y)('div', {
															className: c()('ss__overlay-badge__grid-wrapper__slot', `ss__overlay-badge__grid-wrapper__slot--${R.tag}`),
															css: [I],
															children: R.badges.map((L) => {
																const W = (0, d.x)(w, L.component);
																return W ? (0, t.Y)(W, { ...L, ...L.parameters, treePath: N }) : null;
															}),
														});
													})
												),
											}),
											E,
										],
									}),
							  })
							: (0, t.Y)(t.FK, { children: E });
					});
			},
			'./components/src/hooks/useComponent.tsx'(b, s, e) {
				'use strict';
				e.d(s, { x: () => l });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = (m, c) => {
					const [r, i] = (0, t.J0)(void 0);
					return (
						(0, t.vJ)(() => {
							const P = m[c];
							if (P && typeof P == 'function') {
								const h = P();
								h instanceof Promise
									? h.then((O) => {
											i(() => O);
									  })
									: i(() => h);
							}
						}, []),
						r
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(b, s, e) {
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
			'./components/src/utilities/defaultBadgeComponentMap.ts'(b, s, e) {
				'use strict';
				e.d(s, { q: () => r });
				var t = e('./components/src/components/Atoms/BadgeText/BadgeText.tsx'),
					l = e('./components/src/components/Atoms/BadgePill/BadgePill.tsx'),
					m = e('./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'),
					c = e('./components/src/components/Atoms/BadgeImage/BadgeImage.tsx');
				const r = { BadgeText: () => t.p, BadgePill: () => l.L, BadgeRectangle: () => m.Z, BadgeImage: () => c.z };
			},
			'./components/src/utilities/snapify.ts'(b, s, e) {
				'use strict';
				e.d(s, { p: () => v });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					l = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					m = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					c = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					r = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					i = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					P = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					h = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					O = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					M = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					x = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					p = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					d = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					n = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					T = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const u = {},
					_ = { globals: { siteId: 'atkzs2' } };
				class v {
					static recommendation(a) {
						const E = a.id;
						if (u[E]) return u[E];
						const f = (u[E] = y({ client: _, controller: a }));
						return (
							f.on('afterStore', async ({ controller: D }, A) => {
								D.log.debug('controller', D), D.log.debug('store', D.store.toJSON()), await A();
							}),
							f.init(),
							f
						);
					}
					static autocomplete(a) {
						const E = a.id;
						if (u[E]) return u[E];
						const f = (u[E] = B({ client: _, controller: a }));
						return (
							f.on('afterStore', async ({ controller: D }, A) => {
								D.log.debug('controller', D), D.log.debug('store', D.store.toJSON()), await A();
							}),
							f.init(),
							f
						);
					}
					static search(a) {
						const E = a.id;
						if (u[E]) return u[E];
						const f = (u[E] = g({ client: _, controller: a }));
						return (
							f.on('afterStore', async ({ controller: D }, A) => {
								D.log.debug('controller', D), D.log.debug('store', D.store.toJSON()), await A();
							}),
							f.init(),
							f
						);
					}
				}
				function g(o) {
					const a = new O.V(new x.E({ settings: { coreType: 'query', corePrefix: o.controller.id } }), M.X);
					return new l.Tp(o.controller, {
						client: new r.K(o.client.globals, o.client.config),
						store: new P.U(o.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new p.E(),
						profiler: new d.U(),
						logger: new n.V(),
						tracker: new T.J(o.client.globals),
					});
				}
				function y(o) {
					const a = new O.V(new x.E(), M.X).detach(!0);
					return new c.c(o.controller, {
						client: new r.K(o.client.globals, o.client.config),
						store: new h.t(o.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new p.E(),
						profiler: new d.U(),
						logger: new n.V(),
						tracker: new T.J(o.client.globals),
					});
				}
				function B(o) {
					const a = new O.V(new x.E(), M.X).detach();
					return new m.Z(o.controller, {
						client: new r.K(o.client.globals, o.client.config),
						store: new i.Y(o.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new p.E(),
						profiler: new d.U(),
						logger: new n.V(),
						tracker: new T.J(o.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(b, s, e) {
				'use strict';
				e.d(s, { Z: () => c });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const m = 'prism-block',
					c = (r) => {
						const i = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								i.current && r.className?.includes('lang-') && !r.className?.includes(m) && window?.Prism?.highlightElement(i.current);
							}, [r.className, r.children, i]),
							(0, t.Y)('code', { ...r, ref: i, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(b) {
				function s(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(s.keys = () => []), (s.resolve = s), (s.id = '../../node_modules/memoizerific sync recursive'), (b.exports = s);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-OverlayBadge-OverlayBadge-stories.d8403189.iframe.bundle.js.map
