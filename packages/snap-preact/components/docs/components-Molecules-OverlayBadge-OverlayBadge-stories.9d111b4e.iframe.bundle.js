(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[9907],
		{
			'./components/src/components/Molecules/OverlayBadge/OverlayBadge.stories.tsx'(f, r, e) {
				'use strict';
				e.r(r), e.d(r, { Default: () => p, __namedExportsOrder: () => B, default: () => h });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					_ = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					a = e('./components/src/utilities/storybook.tsx'),
					d = e('./components/src/utilities/componentArgs.ts'),
					P = e('./components/src/utilities/snapify.ts');
				const O = `# OverlayBadge

Renders overlay badges configured in the Searchspring Management Console and returned from the API. This component is intended to be used within a \`Result\` component to wrap elements (children) that should have overlay badges.

## Usage
\`\`\`jsx
import { OverlayBadge } from '@searchspring/snap-preact-components';
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
The \`componentMap\` prop allows for custom badge components. This functionality requires the component and accompanying files to be synced to the Searchspring Management Console using Snapfu.

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
The overlay badge will by default only render a single badge per overlay slot (left and right by default), but the limit can be increased to allow rendering multiple badges in the same location. This allows for "stacking" of the badges in the overlay slots. The order of the stack is determined by the SMC badge configuration.

\`\`\`jsx
<OverlayBadge
    limit={3}
    controller={controller}
    result={result}
/>
\`\`\`
`,
					h = {
						title: 'Molecules/OverlayBadge',
						component: _.Q,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(i.oz, { options: { overrides: { code: a.Z } }, children: O }), (0, t.Y)(i.uY, { story: i.h1 })],
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
							children: { description: 'Overlay content to be displayed', type: { required: !0 }, table: { type: { summary: 'string, JSX' } } },
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
							...d.F,
						},
					},
					M = P.p.search({ id: 'OverlayBadge', globals: { siteId: 'atkzs2' } }),
					x = (0, l.PA)(({ args: n, controller: c }) =>
						(0, t.Y)(_.Q, {
							...n,
							controller: c,
							result: c?.store?.results[0],
							children: (0, t.Y)('div', { style: { height: '300px', border: '2px dotted lightgrey' } }),
						})
					),
					p = (n, { loaded: { controller: c } }) => (0, t.Y)(x, { args: n, controller: c });
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
				const B = ['Default'];
			},
			'./components/src/components/Atoms/BadgeImage/BadgeImage.tsx'(f, r, e) {
				'use strict';
				e.d(r, { z: () => B });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/dist/preact.module.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/classnames/index.js'),
					a = e.n(_),
					d = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('./components/src/providers/cache.tsx'),
					O = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('./components/src/providers/treePath.tsx'),
					M = e('./components/src/utilities/mergeProps.ts'),
					x = e('./components/src/utilities/mergeStyles.ts');
				const p = () => (0, i.AH)({ maxHeight: '100%', maxWidth: '100%' }),
					B = (0, d.PA)((n) => {
						const c = (0, O.u)(),
							C = { treePath: (0, h.LU)() },
							u = (0, M.v6)('badgeImage', c, C, n),
							{ label: E, url: m, tag: D, className: s, internalClassName: o } = u,
							g = (0, x.Z)(u, p);
						return m
							? (0, t.Y)(P._, {
									children: (0, t.Y)('img', {
										...g,
										className: a()('ss__badge-image', `ss__badge-image--${D}`, s, o),
										alt: E || `${D} badge`,
										src: m,
									}),
							  })
							: (0, t.Y)(l.FK, {});
					});
			},
			'./components/src/components/Atoms/BadgePill/BadgePill.tsx'(f, r, e) {
				'use strict';
				e.d(r, { L: () => B });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/dist/preact.module.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/classnames/index.js'),
					a = e.n(_),
					d = e('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
					P = e('./components/src/providers/cache.tsx'),
					O = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('./components/src/providers/treePath.tsx'),
					M = e('./components/src/utilities/mergeProps.ts'),
					x = e('./components/src/utilities/mergeStyles.ts');
				const p = ({ color: n, colorText: c }) =>
						(0, i.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: n,
							color: c,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
							borderRadius: '1em',
						}),
					B = (0, d.PA)((n) => {
						const c = (0, O.u)(),
							C = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, h.LU)() },
							u = (0, M.v6)('badgePill', c, C, n),
							{ value: E, tag: m, className: D, internalClassName: s } = u,
							o = (0, x.Z)(u, p);
						return E
							? (0, t.Y)(P._, {
									children: (0, t.Y)('div', {
										...o,
										className: a()('ss__badge-pill', `ss__badge-pill--${m}`, D, s),
										children: (0, t.Y)('span', { className: 'ss__badge-pill__value', children: E }),
									}),
							  })
							: (0, t.Y)(l.FK, {});
					});
			},
			'./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'(f, r, e) {
				'use strict';
				e.d(r, { Z: () => B });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/dist/preact.module.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/classnames/index.js'),
					a = e.n(_),
					d = e('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
					P = e('./components/src/providers/cache.tsx'),
					O = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('./components/src/providers/treePath.tsx'),
					M = e('./components/src/utilities/mergeProps.ts'),
					x = e('./components/src/utilities/mergeStyles.ts');
				const p = ({ color: n, colorText: c }) =>
						(0, i.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: n,
							color: c,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					B = (0, d.PA)((n) => {
						const c = (0, O.u)(),
							C = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, h.LU)() },
							u = (0, M.v6)('badgeRectangle', c, C, n),
							{ value: E, tag: m, className: D, internalClassName: s } = u,
							o = (0, x.Z)(u, p);
						return E
							? (0, t.Y)(P._, {
									children: (0, t.Y)('div', {
										...o,
										className: a()('ss__badge-rectangle', `ss__badge-rectangle--${m}`, D, s),
										children: (0, t.Y)('span', { className: 'ss__badge-rectangle__value', children: E }),
									}),
							  })
							: (0, t.Y)(l.FK, {});
					});
			},
			'./components/src/components/Atoms/BadgeText/BadgeText.tsx'(f, r, e) {
				'use strict';
				e.d(r, { p: () => B });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/dist/preact.module.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/classnames/index.js'),
					a = e.n(_),
					d = e('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
					P = e('./components/src/providers/cache.tsx'),
					O = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('./components/src/providers/treePath.tsx'),
					M = e('./components/src/utilities/mergeProps.ts'),
					x = e('./components/src/utilities/mergeStyles.ts');
				const p = ({ colorText: n }) =>
						(0, i.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							color: n,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					B = (0, d.PA)((n) => {
						const c = (0, O.u)(),
							C = { colorText: '#000000', treePath: (0, h.LU)() },
							u = (0, M.v6)('badgeText', c, C, n),
							{ value: E, tag: m, className: D, internalClassName: s } = u,
							o = (0, x.Z)(u, p);
						return E
							? (0, t.Y)(P._, {
									children: (0, t.Y)('div', {
										...o,
										className: a()('ss__badge-text', `ss__badge-text--${m}`, D, s),
										children: (0, t.Y)('span', { className: 'ss__badge-text__value', children: E }),
									}),
							  })
							: (0, t.Y)(l.FK, {});
					});
			},
			'./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'(f, r, e) {
				'use strict';
				e.d(r, { Q: () => C });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/dist/preact.module.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/classnames/index.js'),
					a = e.n(_),
					d = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('./components/src/providers/cache.tsx'),
					O = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('./components/src/providers/snap.tsx'),
					M = e('./components/src/providers/treePath.tsx'),
					x = e('./components/src/utilities/mergeProps.ts'),
					p = e('./components/src/utilities/mergeStyles.ts'),
					B = e('./components/src/utilities/defaultBadgeComponentMap.ts'),
					n = e('./components/src/hooks/useComponent.tsx');
				const c = ({ section: u, top: E, bottom: m, index: D, tag: s }) =>
						(0, i.AH)({
							position: 'relative',
							display: 'flex',
							flexDirection: 'column',
							alignItems: u == 'right' ? 'flex-end' : 'flex-start',
							justifyContent: !E && !m ? 'center' : m && !E ? 'flex-end' : 'flex-start',
							gap: '0.5em',
							gridArea: s,
							boxSizing: 'border-box',
							zIndex: Math.max(100 - D, 1),
							width: '100%',
							height: '100%',
						}),
					T = ({ controller: u }) => {
						const m = u?.store?.meta?.badges?.groups?.['overlay']?.grid;
						let D = {};
						if (m?.length && m[0]?.length) {
							const s = m.map((g) => `"${g.join(' ')}"`).join(' ');
							D = {
								gridTemplateColumns: `repeat(${m[0].length}, minmax(0, 1fr))`,
								gridTemplateRows: `repeat(${m.length}, minmax(0, 1fr))`,
								gridTemplateAreas: s,
							};
						}
						return (0, i.AH)({
							position: 'relative',
							'& .ss__overlay-badge__grid-wrapper': {
								pointerEvents: 'none',
								display: 'grid',
								position: 'absolute',
								top: 0,
								right: 0,
								bottom: 0,
								left: 0,
								...D,
							},
						});
					},
					C = (0, d.PA)((u) => {
						const E = (0, O.u)(),
							m = (0, h.uk)(),
							s = { limit: 1, treePath: (0, M.LU)() },
							o = (0, x.v6)('overlayBadge', E, s, u),
							{ result: g, children: y, controller: v, renderEmpty: A, limit: S, className: F, internalClassName: Y, treePath: N } = o;
						if (!y) return v?.log?.warn('OverlayBadge component must have children'), (0, t.Y)(l.FK, {});
						const K = v?.store?.meta;
						if (!K) return v?.log?.warn('Controller must have a meta store'), (0, t.Y)(l.FK, { children: y });
						const w = 'overlay',
							$ = { ...B.q, ...(m?.templates?.library.import.component.badge || {}), ...o.componentMap },
							L = K?.badges?.groups?.[w]?.sections
								?.map((b) => {
									const j = K?.data?.badges?.locations[b],
										R = j
											?.map((I, U) => ({
												tag: I.tag,
												name: I.name,
												top: U == 0,
												bottom: U == j.length - 1,
												badges: g?.display.badges?.atLocation(`${b}/${I.tag}`).slice(0, S),
											}))
											.filter((I) => I.badges?.length);
									return { section: b, slots: R };
								})
								.filter((b) => b.slots?.length),
							z = (0, p.Z)(o, T);
						return A || L?.length
							? (0, t.Y)(P._, {
									children: (0, t.FD)('div', {
										...z,
										className: a()('ss__overlay-badge', F, Y),
										children: [
											(0, t.Y)('div', {
												className: 'ss__overlay-badge__grid-wrapper',
												children: L.map((b, j) =>
													b.slots?.map((R) => {
														const I = c({ ...o, tag: R.tag, section: b.section, index: j, top: R.top, bottom: R.bottom });
														return (0, t.Y)('div', {
															className: a()('ss__overlay-badge__grid-wrapper__slot', `ss__overlay-badge__grid-wrapper__slot--${R.tag}`),
															css: [I],
															children: R.badges.map((U) => {
																const W = (0, n.x)($, U.component);
																return W ? (0, t.Y)(W, { ...U, ...U.parameters, treePath: N }) : (0, t.Y)(l.FK, {});
															}),
														});
													})
												),
											}),
											y,
										],
									}),
							  })
							: (0, t.Y)(l.FK, { children: y });
					});
			},
			'./components/src/hooks/useComponent.tsx'(f, r, e) {
				'use strict';
				e.d(r, { x: () => l });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = (i, _) => {
					const [a, d] = (0, t.J0)(void 0);
					return (
						(0, t.vJ)(() => {
							const P = i[_];
							if (P && typeof P == 'function') {
								const O = P();
								O instanceof Promise
									? O.then((h) => {
											d(() => h);
									  })
									: d(() => O);
							}
						}, []),
						a
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(f, r, e) {
				'use strict';
				e.d(r, { F: () => t });
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
			'./components/src/utilities/defaultBadgeComponentMap.ts'(f, r, e) {
				'use strict';
				e.d(r, { q: () => a });
				var t = e('./components/src/components/Atoms/BadgeText/BadgeText.tsx'),
					l = e('./components/src/components/Atoms/BadgePill/BadgePill.tsx'),
					i = e('./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'),
					_ = e('./components/src/components/Atoms/BadgeImage/BadgeImage.tsx');
				const a = { BadgeText: () => t.p, BadgePill: () => l.L, BadgeRectangle: () => i.Z, BadgeImage: () => _.z };
			},
			'./components/src/utilities/snapify.ts'(f, r, e) {
				'use strict';
				e.d(r, { p: () => u });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					l = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					i = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					_ = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					a = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					d = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					P = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					O = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					h = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					M = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					x = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					p = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					B = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					n = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					c = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const T = {},
					C = { globals: { siteId: '8uyt2m' } };
				class u {
					static recommendation(o) {
						const g = o.id;
						if (T[g]) return T[g];
						const y = (T[g] = m({ client: C, controller: o }));
						return (
							y.on('afterStore', async ({ controller: v }, A) => {
								v.log.debug('controller', v), v.log.debug('store', v.store.toJSON()), await A();
							}),
							y.init(),
							y
						);
					}
					static autocomplete(o) {
						const g = o.id;
						if (T[g]) return T[g];
						const y = (T[g] = D({ client: C, controller: o }));
						return (
							y.on('afterStore', async ({ controller: v }, A) => {
								v.log.debug('controller', v), v.log.debug('store', v.store.toJSON()), await A();
							}),
							y.init(),
							y
						);
					}
					static search(o) {
						const g = o.id;
						if (T[g]) return T[g];
						const y = (T[g] = E({ client: C, controller: o }));
						return (
							y.on('afterStore', async ({ controller: v }, A) => {
								v.log.debug('controller', v), v.log.debug('store', v.store.toJSON()), await A();
							}),
							y.init(),
							y
						);
					}
				}
				function E(s) {
					const o = new h.V(new x.E({ settings: { coreType: 'query', corePrefix: s.controller.id } }), M.X);
					return new l.Tp(s.controller, {
						client: new a.K(s.client.globals, s.client.config),
						store: new P.U(s.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new p.E(),
						profiler: new B.U(),
						logger: new n.V(),
						tracker: new c.J(s.client.globals),
					});
				}
				function m(s) {
					const o = new h.V(new x.E(), M.X).detach(!0);
					return new _.c(s.controller, {
						client: new a.K(s.client.globals, s.client.config),
						store: new O.t(s.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new p.E(),
						profiler: new B.U(),
						logger: new n.V(),
						tracker: new c.J(s.client.globals),
					});
				}
				function D(s) {
					const o = new h.V(new x.E(), M.X).detach();
					return new i.Z(s.controller, {
						client: new a.K(s.client.globals, s.client.config),
						store: new d.Y(s.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new p.E(),
						profiler: new B.U(),
						logger: new n.V(),
						tracker: new c.J(s.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(f, r, e) {
				'use strict';
				e.d(r, { Z: () => _ });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const i = 'prism-block',
					_ = (a) => {
						const d = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								d.current && a.className?.includes('lang-') && !a.className?.includes(i) && window?.Prism?.highlightElement(d.current);
							}, [a.className, a.children, d]),
							(0, t.Y)('code', { ...a, ref: d, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(f) {
				function r(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (f.exports = r);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-OverlayBadge-OverlayBadge-stories.9d111b4e.iframe.bundle.js.map
