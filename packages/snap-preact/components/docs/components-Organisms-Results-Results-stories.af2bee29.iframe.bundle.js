(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[3715],
		{
			'./components/src/components/Organisms/Results/Results.stories.tsx'(L, _, e) {
				'use strict';
				e.r(_), e.d(_, { Grid: () => p, List: () => m, __namedExportsOrder: () => u, default: () => D });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = e('./components/src/components/Organisms/Results/Results.tsx'),
					s = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					r = e('./components/src/utilities/snapify.ts'),
					n = e('./components/src/types.ts');
				const i = `# Results

Renders a page of results utilizing \`<Result />\` components.

## Sub-components
- Result

- InlineBanner

- ResultTracker

## Usage
\`\`\`jsx
import { Results } from '@athoscommerce/snap-preact-components';
\`\`\`

### controller
The \`controller\` prop specifies a reference to the search controller.

\`\`\`jsx
<Results controller={controller.store.results} />
\`\`\`

### results
The \`results\` prop specifies a reference to the results store array. If no results prop is passed in, the component will default to using the results in controller.store. 

\`\`\`jsx
<Results results={controller.store.results} />
\`\`\`

### resultComponent
The \`resultComponent\` prop specifies a custom result component to render.

\`\`\`jsx

const CustomResult = ({
	controller 
	result
	theme
}) => {
	return <div>{result.mappings.core?.name}</div>
}

<Results results={controller.store.results} controller={controller} resultComponent={CustomResult} />
\`\`\`

### layout
The \`layout\` prop specifies if this result will be rendered in a \`grid\` or \`list\` layout.

\`\`\`jsx
<Results results={controller.store.results} layout={'grid'} />
\`\`\`

### columns
The \`columns\` prop specifies the number of columns to display in a grid layout.

\`\`\`jsx
<Results results={controller.store.results} columns={4} />
\`\`\`

### rows
The \`rows\` prop specifies the number of rows to display in a grid layout.

\`\`\`jsx
<Results results={controller.store.results} rows={2} />
\`\`\`

### gapSize
The \`gapSize\` prop specifies the gap size between each result within a grid layout.

\`\`\`jsx
<Results results={controller.store.results} gapSize={'10px'} />
\`\`\`

### breakpoints
An object that modifies the responsive behavior of the \`<Result />\` component.

Each entry within the breakpoints object contains a numeric key of the viewport when the sub-object of props will take effect. Any props listed above can be specified. (ie. columns, rows, layout, gapSize)

Typically used to adjust the layout and how many products are shown at any screen size. There is no limit to how many breakpoints settings you can pass in.


Default Results \`breakpoints\` object:

\`\`\`js
const breakpoints = {
	0: {
		columns: 1,
	},
	540: {
		columns: 2,
	},
	768: {
		columns: 3,
	},
	991: {
		columns: 4,
	},
};
\`\`\`

\`\`\`jsx
<Results results={controller.store.results} breakpoints={breakpoints} />
\`\`\`
`,
					D = {
						title: 'Organisms/Results',
						component: a.n,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(P.oz, { options: { overrides: { code: s.Z } }, children: i }), (0, o.Y)(P.uY, { story: P.h1 })],
									}),
							},
						},
						decorators: [(E) => (0, o.Y)('div', { style: { maxWidth: '900px' }, children: (0, o.Y)(E, {}) })],
						argTypes: {
							results: {
								description: 'Results store reference',
								type: { required: !1 },
								table: { type: { summary: 'Results store object' } },
								control: { type: 'none' },
							},
							layout: {
								description: 'Results layout',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								options: [n.V.grid, n.V.list],
								control: { type: 'select' },
							},
							columns: {
								defaultValue: 4,
								description: 'Number of columns in results grid',
								table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 4 } },
								control: { type: 'number' },
							},
							rows: {
								description: 'Number of rows in results grid - adding this will put a hard limit on the results',
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							gapSize: {
								defaultValue: '20px',
								description: 'Gap size between rows and columns',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '20px' } },
								control: { type: 'text' },
							},
							breakpoints: {
								defaultValue: { summary: 'Breakpoint object' },
								description: 'Breakpoints options object',
								table: { type: { summary: 'object' } },
								control: { type: 'none' },
							},
							resultComponent: { description: 'Slot for custom result component', table: { type: { summary: 'component' } } },
							controller: { description: 'Controller reference', table: { type: { summary: 'Controller' } }, control: { type: 'none' } },
							...t.F,
						},
					},
					y = r.p.search({ id: 'Results', globals: { siteId: 'atkzs2' } }),
					p = (E, { loaded: { controller: R } }) => (0, o.Y)(a.n, { ...E, controller: R, results: R?.store?.results });
				p.loaders = [async () => (await y.search(), { controller: y })];
				const m = (E, { loaded: { controller: R } }) => (0, o.Y)(a.n, { ...E, controller: R, results: R?.store?.results, layout: n.V.list });
				(m.loaders = [async () => (await y.search(), { controller: y })]),
					(p.parameters = {
						...p.parameters,
						docs: {
							...p.parameters?.docs,
							source: {
								originalSource: `(args: ResultsProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <Results {...args} controller={controller} results={controller?.store?.results} />;
}`,
								...p.parameters?.docs?.source,
							},
						},
					}),
					(m.parameters = {
						...m.parameters,
						docs: {
							...m.parameters?.docs,
							source: {
								originalSource: `(args: ResultsProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <Results {...args} controller={controller} results={controller?.store?.results} layout={ResultsLayout.list} />;
}`,
								...m.parameters?.docs?.source,
							},
						},
					});
				const u = ['Grid', 'List'];
			},
			'./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'(L, _, e) {
				'use strict';
				e.d(_, { _: () => v });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/classnames/index.js'),
					s = e.n(a),
					t = e('./components/src/providers/cache.tsx'),
					r = e('./components/src/providers/controller.tsx'),
					n = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					i = e('./components/src/providers/withTracking.tsx'),
					D = e('./components/src/providers/treePath.tsx'),
					y = e('./components/src/utilities/mergeProps.ts'),
					p = e('./components/src/utilities/mergeStyles.ts'),
					m = e('./components/src/hooks/useA11y.tsx'),
					u = e('./components/src/types.ts'),
					E = e('../../node_modules/mobx-react-lite/es/index.js');
				const R = ({ width: I }) =>
						(0, P.AH)({
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: I,
							'&.ss__inline-banner--grid': { flexDirection: 'column' },
							'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
							'& iframe': { maxWidth: '100%' },
						}),
					v = (0, r.Bk)(
						(0, i.W)(
							(0, E.PA)((I) => {
								const g = (0, n.u)(),
									f = (0, D.LU)(),
									C = { layout: u.V.grid, width: 'auto', treePath: f },
									A = (0, y.v6)('inlineBanner', g, C, I),
									{ banner: l, className: d, internalClassName: O, disableA11y: h, layout: c, onClick: T } = A,
									b = (0, p.Z)(A, R);
								return l && l.value
									? (0, o.Y)(t._, {
											children: (0, o.Y)('div', {
												onClick: (j) => {
													T && T(j, l);
												},
												role: 'article',
												ref: (j) => {
													h || (0, m.iy)(j), (I.trackingRef.current = j);
												},
												className: s()('ss__inline-banner', `ss__inline-banner--${c}`, d, O),
												...b,
												dangerouslySetInnerHTML: { __html: l.value },
											}),
									  })
									: null;
							})
						)
					);
			},
			'./components/src/components/Organisms/Results/Results.tsx'(L, _, e) {
				'use strict';
				e.d(_, { n: () => h });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					s = e('../../node_modules/classnames/index.js'),
					t = e.n(s),
					r = e('../../node_modules/deepmerge/dist/cjs.js'),
					n = e.n(r),
					i = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					D = e('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					y = e('./components/src/components/Molecules/Result/Result.tsx'),
					p = e('./components/src/types.ts'),
					m = e('./components/src/utilities/defined.ts'),
					u = e('./components/src/utilities/mergeProps.ts'),
					E = e('./components/src/utilities/mergeStyles.ts'),
					R = e('./components/src/providers/cache.tsx'),
					v = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					I = e('./components/src/providers/withTracking.tsx'),
					g = e('./components/src/providers/snap.tsx'),
					f = e('./components/src/providers/treePath.tsx'),
					C = e('./components/src/hooks/useDisplaySettings.tsx'),
					A = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					l = e('./components/src/hooks/useComponent.tsx');
				const d = ({ gapSize: c, columns: T }) =>
						(0, P.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gap: c,
							gridTemplateRows: 'auto',
							gridTemplateColumns: `repeat(${T}, 1fr)`,
							'& .ss__result, & .ss__result-layout': {
								boxSizing: 'border-box',
								flex: '0 1 auto',
								width: `calc(${100 / T}% - (${T - 1} * ${c} / ${T} ) )`,
								marginRight: c,
								marginBottom: c,
								[`&:nth-of-type(${T}n)`]: { marginRight: '0' },
								[`&:nth-last-of-type(-n+${T})`]: { marginBottom: '0' },
							},
							'@supports (display: grid)': { display: 'grid', '& .ss__result, & .ss__result-layout': { width: 'initial', flex: void 0, margin: 0 } },
						}),
					O = (0, I.W)(y.Q),
					h = (0, a.PA)((c) => {
						const T = (0, v.u)(),
							b = (0, f.LU)(),
							j = {
								0: { columns: c.columns || 1 },
								540: { columns: c.columns || 2 },
								768: { columns: c.columns || 3 },
								991: { columns: c.columns || 4 },
							},
							V = { results: c.controller?.store?.results, columns: 4, gapSize: '20px', layout: p.V.grid, breakpoints: j, treePath: b };
						let M = (0, u.v6)('results', T, V, c);
						if (!c.theme?.name) {
							const x = (0, C.X)(M?.breakpoints || {}),
								w = n()(M?.theme || {}, x?.theme || {}, { arrayMerge: (G, H) => H });
							M = { ...M, ...x, theme: w };
						}
						const { disableStyles: S, className: N, internalClassName: Y, layout: z, theme: J, controller: U, treePath: W } = M;
						let { resultComponent: B } = M;
						const k = {
							result: { internalClassName: 'ss__results__result', ...(0, m.s)({ disableStyles: S }), theme: M?.theme, treePath: W },
							inlineBanner: {
								controller: U,
								internalClassName: 'ss__results__inline-banner',
								...(0, m.s)({ disableStyles: S }),
								theme: M?.theme,
								treePath: W,
							},
						};
						let K = M.results;
						M?.columns && M?.rows && M.columns > 0 && M.rows > 0 && (K = M.results?.slice(0, M.columns * M.rows));
						const $ = (0, E.Z)({ ...M, columns: z == p.V.list ? 1 : M.columns }, d);
						if (typeof B == 'string') {
							const x = (0, g.uk)();
							if (x?.templates?.library.import.component.result && ((B = (0, l.x)(x?.templates?.library.import.component.result, B)), !B))
								return null;
						}
						return K?.length
							? (0, o.Y)(R._, {
									children: (0, o.Y)('div', {
										...$,
										className: t()('ss__results', `ss__results-${M.layout}`, N, Y),
										children: K.map((x) =>
											(() => {
												switch (x.type) {
													case i.c.BANNER:
														return (0, P.n)(D._, { ...k.inlineBanner, key: x.id, banner: x, layout: M.layout });
													default:
														if (B && U) {
															const w = B;
															return (0, o.Y)(A.o, {
																result: x,
																controller: U,
																children: (0, o.Y)(w, { controller: U, result: x, theme: J, treePath: W }, x.id),
															});
														} else return (0, o.Y)(O, { ...k.result, result: x, layout: M.layout, controller: U }, x.id);
												}
											})()
										),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(L, _, e) {
				'use strict';
				e.d(_, { o: () => y });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					s = e('../../node_modules/classnames/index.js'),
					t = e.n(s),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					n = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/createImpressionObserver.ts');
				const D = { ResultTracker: () => (0, P.AH)({}) },
					y = (0, a.PA)((p) => {
						const m = (0, r.u)(),
							u = (0, n.v6)('resultTracker', m, {}, p),
							E = { impression: !0, click: !0 },
							{ children: R, result: v, track: I, controller: g, className: f, internalClassName: C, disableStyles: A, style: l } = u,
							d = { ...E, ...I },
							{ ref: O, inViewport: h } = (0, i.Q)();
						h && d.impression && g?.track.product.impression(v);
						const c = {};
						return (
							A ? l && (c.css = [l]) : (c.css = [D.ResultTracker(), l]),
							(0, o.Y)('div', {
								className: t()('ss__result-tracker', `ss__${g?.type}-result-tracker`, f, C),
								onClick: (T) => {
									d.click && g?.track.product.click(T, v);
								},
								ref: O,
								...c,
								children: R,
							})
						);
					});
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(L, _, e) {
				'use strict';
				e.d(_, { v: () => a });
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const P = 250,
					a = (t, r = {}) => {
						const { rootMargin: n = '0px', fireOnce: i = !1, threshold: D = 0, minVisibleTime: y = 0 } = r,
							[p, m] = (0, o.J0)(!1),
							u = (0, o.li)(null),
							E = (0, o.li)(null),
							[R, v] = (0, o.J0)(0),
							I = (0, o.hb)((g) => {
								(t.current = g), v((f) => f + 1);
							}, []);
						return (
							(0, o.vJ)(() => {
								m(!1);
								let g = null,
									f = null;
								if (!window.IntersectionObserver || !t.current) return;
								const C = () => {
										f && (window.clearInterval(f), (f = null));
									},
									A = () => {
										y > 0
											? ((E.current = Date.now()),
											  u.current && window.clearTimeout(u.current),
											  (u.current = window.setTimeout(() => {
													m(!0), i && t.current && g && g.unobserve(t.current);
											  }, y)))
											: (m(!0), i && t.current && g && g.unobserve(t.current));
									},
									l = () => {
										u.current && window.clearTimeout(u.current), (u.current = null), (E.current = null), m(!1);
									};
								return (
									(g = new IntersectionObserver(
										([d]) => {
											d.isIntersecting
												? t.current && s(t.current)
													? (C(), A())
													: (l(),
													  f ||
															(f = window.setInterval(() => {
																if (!t.current) {
																	C();
																	return;
																}
																s(t.current) && (C(), A());
															}, P)))
												: (C(), l());
										},
										{ rootMargin: n, threshold: D }
									)),
									t.current && g.observe(t.current),
									() => {
										m(!1), C(), u.current && window.clearTimeout(u.current), g && t.current && g.unobserve(t.current);
									}
								);
							}, [t, R]),
							{ inViewport: p, updateRef: I }
						);
					};
				function s(t) {
					return t && 'checkVisibility' in t ? t.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/providers/withTracking.tsx'(L, _, e) {
				'use strict';
				e.d(_, { N: () => s, W: () => t });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = e('./components/src/utilities/createImpressionObserver.ts'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const s = 'sstracking';
				function t(r) {
					const n = r;
					return (D) => {
						const { controller: y, result: p, banner: m, type: u, content: E, ...R } = D;
						if (D.trackingRef) return (0, o.Y)(n, { ...D });
						!y && (!u || !E) && console.warn('Warning: No controller provided to withTracking', D),
							!p && !m && (!u || !E) && console.warn('Warning: No result or banner provided to withTracking');
						const { ref: v, inViewport: I, updateRef: g } = (0, P.Q)(),
							f = (p || m || (u && E?.[u]?.[0]))?.responseId,
							C = (0, a.li)(f),
							A = (0, a.li)(!1);
						C.current !== f && (A.current = !0),
							(0, a.vJ)(() => {
								C.current !== f && ((C.current = f), g(v.current));
							}, [f, g]),
							(0, a.vJ)(() => {
								A.current && !I && (A.current = !1);
							}, [I, f]);
						const l = u && E && !p && ['search', 'autocomplete'].includes(y?.type || '');
						I && !A.current && (l ? y?.track.banner.impression(E[u][0]) : p?.bundleSeed || y?.track.product.impression(p || m));
						const d = (0, a.hb)(
							(h) => {
								l ? y?.track.banner.click(h, E[u][0]) : y?.track.product.click(h, p || m);
							},
							[y, p, m, u, E]
						);
						(0, a.vJ)(() => {
							const h = v.current;
							if (h)
								return (
									h.setAttribute(s, 'true'),
									h.addEventListener('click', d, !0),
									() => {
										h.removeEventListener('click', d, !0);
									}
								);
						}, [d]);
						const O = {
							...R,
							controller: y,
							result: p,
							banner: m,
							type: u,
							content: E,
							trackingRef: (0, a.hb)(
								(h) => {
									g(h);
								},
								[g]
							),
						};
						return (0, o.Y)(n, { ...O });
					};
				}
			},
			'./components/src/utilities/componentArgs.ts'(L, _, e) {
				'use strict';
				e.d(_, { F: () => o });
				const o = {
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
			'./components/src/utilities/createImpressionObserver.ts'(L, _, e) {
				'use strict';
				e.d(_, { Q: () => t });
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					P = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const a = 0.7,
					s = 1e3;
				function t(r) {
					const n = (0, o.li)(null),
						{ inViewport: i, updateRef: D } = (0, P.v)(n, { ...r, fireOnce: !0, threshold: a, minVisibleTime: s });
					return { ref: n, inViewport: i, updateRef: D };
				}
			},
			'./components/src/utilities/snapify.ts'(L, _, e) {
				'use strict';
				e.d(_, { p: () => g });
				var o = e('../../node_modules/mobx/dist/mobx.esm.js'),
					P = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					a = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					s = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					r = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					n = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					i = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					D = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					y = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					p = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					m = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					u = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					E = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					R = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const v = {},
					I = { globals: { siteId: 'atkzs2' } };
				class g {
					static recommendation(d) {
						const O = d.id;
						if (v[O]) return v[O];
						const h = (v[O] = C({ client: I, controller: d }));
						return (
							h.on('afterStore', async ({ controller: c }, T) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await T();
							}),
							h.init(),
							h
						);
					}
					static autocomplete(d) {
						const O = d.id;
						if (v[O]) return v[O];
						const h = (v[O] = A({ client: I, controller: d }));
						return (
							h.on('afterStore', async ({ controller: c }, T) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await T();
							}),
							h.init(),
							h
						);
					}
					static search(d) {
						const O = d.id;
						if (v[O]) return v[O];
						const h = (v[O] = f({ client: I, controller: d }));
						return (
							h.on('afterStore', async ({ controller: c }, T) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await T();
							}),
							h.init(),
							h
						);
					}
				}
				function f(l) {
					const d = new D.V(new p.E({ settings: { coreType: 'query', corePrefix: l.controller.id } }), y.X);
					return new P.Tp(l.controller, {
						client: new t.K(l.client.globals, l.client.config),
						store: new n.U(l.controller, { urlManager: d }),
						urlManager: d,
						eventManager: new m.E(),
						profiler: new u.U(),
						logger: new E.V(),
						tracker: new R.J(l.client.globals),
					});
				}
				function C(l) {
					const d = new D.V(new p.E(), y.X).detach(!0);
					return new s.c(l.controller, {
						client: new t.K(l.client.globals, l.client.config),
						store: new i.t(l.controller, { urlManager: d }),
						urlManager: d,
						eventManager: new m.E(),
						profiler: new u.U(),
						logger: new E.V(),
						tracker: new R.J(l.client.globals),
					});
				}
				function A(l) {
					const d = new D.V(new p.E(), y.X).detach();
					return new a.Z(l.controller, {
						client: new t.K(l.client.globals, l.client.config),
						store: new r.Y(l.controller, { urlManager: d }),
						urlManager: d,
						eventManager: new m.E(),
						profiler: new u.U(),
						logger: new E.V(),
						tracker: new R.J(l.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(L, _, e) {
				'use strict';
				e.d(_, { Z: () => s });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					P = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 'prism-block',
					s = (t) => {
						const r = (0, P.li)(null);
						return (
							(0, P.vJ)(() => {
								r.current && t.className?.includes('lang-') && !t.className?.includes(a) && window?.Prism?.highlightElement(r.current);
							}, [t.className, t.children, r]),
							(0, o.Y)('code', { ...t, ref: r, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/dequal/dist/index.mjs'(L, _, e) {
				'use strict';
				e.d(_, { j: () => a });
				var o = Object.prototype.hasOwnProperty;
				function P(s, t, r) {
					for (r of s.keys()) if (a(r, t)) return r;
				}
				function a(s, t) {
					var r, n, i;
					if (s === t) return !0;
					if (s && t && (r = s.constructor) === t.constructor) {
						if (r === Date) return s.getTime() === t.getTime();
						if (r === RegExp) return s.toString() === t.toString();
						if (r === Array) {
							if ((n = s.length) === t.length) for (; n-- && a(s[n], t[n]); );
							return n === -1;
						}
						if (r === Set) {
							if (s.size !== t.size) return !1;
							for (n of s) if (((i = n), (i && typeof i == 'object' && ((i = P(t, i)), !i)) || !t.has(i))) return !1;
							return !0;
						}
						if (r === Map) {
							if (s.size !== t.size) return !1;
							for (n of s) if (((i = n[0]), (i && typeof i == 'object' && ((i = P(t, i)), !i)) || !a(n[1], t.get(i)))) return !1;
							return !0;
						}
						if (r === ArrayBuffer) (s = new Uint8Array(s)), (t = new Uint8Array(t));
						else if (r === DataView) {
							if ((n = s.byteLength) === t.byteLength) for (; n-- && s.getInt8(n) === t.getInt8(n); );
							return n === -1;
						}
						if (ArrayBuffer.isView(s)) {
							if ((n = s.byteLength) === t.byteLength) for (; n-- && s[n] === t[n]; );
							return n === -1;
						}
						if (!r || typeof s == 'object') {
							n = 0;
							for (r in s) if ((o.call(s, r) && ++n && !o.call(t, r)) || !(r in t) || !a(s[r], t[r])) return !1;
							return Object.keys(t).length === n;
						}
					}
					return s !== s && t !== t;
				}
			},
			'../../node_modules/memoizerific sync recursive'(L) {
				function _(e) {
					var o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(_.keys = () => []), (_.resolve = _), (_.id = '../../node_modules/memoizerific sync recursive'), (L.exports = _);
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-Results-Results-stories.af2bee29.iframe.bundle.js.map
