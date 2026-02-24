(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[3715],
		{
			'./components/src/components/Organisms/Results/Results.stories.tsx'(j, p, e) {
				'use strict';
				e.r(p), e.d(p, { Grid: () => h, List: () => a, __namedExportsOrder: () => m, default: () => y });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					c = e('./components/src/components/Organisms/Results/Results.tsx'),
					t = e('./components/src/utilities/storybook.tsx'),
					s = e('./components/src/utilities/componentArgs.ts'),
					r = e('./components/src/utilities/snapify.ts'),
					o = e('./components/src/types.ts');
				const i = `# Results

Renders a page of results utilizing \`<Result />\` components.

## Sub-components
- Result

- InlineBanner

- ResultTracker

## Usage
\`\`\`jsx
import { Results } from '@searchspring/snap-preact-components';
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
					y = {
						title: 'Organisms/Results',
						component: c.n,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, n.FD)('div', {
										children: [(0, n.Y)(g.oz, { options: { overrides: { code: t.Z } }, children: i }), (0, n.Y)(g.uY, { story: g.h1 })],
									}),
							},
						},
						decorators: [(M) => (0, n.Y)('div', { style: { maxWidth: '900px' }, children: (0, n.Y)(M, {}) })],
						argTypes: {
							results: {
								description: 'Results store reference',
								type: { required: !1 },
								table: { type: { summary: 'Results store object' } },
								control: { type: 'none' },
							},
							layout: {
								description: 'Results layout',
								table: { type: { summary: 'string' } },
								options: [o.V.grid, o.V.list],
								control: { type: 'select' },
							},
							columns: {
								defaultValue: 4,
								description: 'Number of columns in results grid',
								table: { type: { summary: 'number' }, defaultValue: { summary: 4 } },
								control: { type: 'number' },
							},
							rows: {
								description: 'Number of rows in results grid - adding this will put a hard limit on the results',
								table: { type: { summary: 'number' } },
								control: { type: 'number' },
							},
							gapSize: {
								defaultValue: '20px',
								description: 'Gap size between rows and columns',
								table: { type: { summary: 'string' }, defaultValue: { summary: '20px' } },
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
							...s.F,
						},
					},
					E = r.p.search({ id: 'Results', globals: { siteId: 'atkzs2' } }),
					h = (M, { loaded: { controller: D } }) => (0, n.Y)(c.n, { ...M, controller: D, results: D?.store?.results });
				h.loaders = [async () => (await E.search(), { controller: E })];
				const a = (M, { loaded: { controller: D } }) => (0, n.Y)(c.n, { ...M, controller: D, results: D?.store?.results, layout: o.V.list });
				(a.loaders = [async () => (await E.search(), { controller: E })]),
					(h.parameters = {
						...h.parameters,
						docs: {
							...h.parameters?.docs,
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
								...h.parameters?.docs?.source,
							},
						},
					}),
					(a.parameters = {
						...a.parameters,
						docs: {
							...a.parameters?.docs,
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
								...a.parameters?.docs?.source,
							},
						},
					});
				const m = ['Grid', 'List'];
			},
			'./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'(j, p, e) {
				'use strict';
				e.d(p, { _: () => C });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/preact/dist/preact.module.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					t = e('../../node_modules/classnames/index.js'),
					s = e.n(t),
					r = e('./components/src/providers/cache.tsx'),
					o = e('./components/src/providers/controller.tsx'),
					i = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/withTracking.tsx'),
					E = e('./components/src/providers/treePath.tsx'),
					h = e('./components/src/utilities/mergeProps.ts'),
					a = e('./components/src/utilities/mergeStyles.ts'),
					m = e('./components/src/hooks/useA11y.tsx'),
					M = e('./components/src/types.ts'),
					D = e('../../node_modules/mobx-react-lite/es/index.js');
				const P = ({ width: d }) =>
						(0, c.AH)({
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: d,
							'&.ss__inline-banner--grid': { flexDirection: 'column' },
							'&.ss__inline-banner--list': { flexDirection: 'row', display: 'block', width: '100%' },
							'& iframe': { maxWidth: '100%' },
						}),
					C = (0, o.Bk)(
						(0, y.W)(
							(0, D.PA)((d) => {
								const R = (0, i.u)(),
									T = (0, E.LU)(),
									x = { layout: M.V.grid, width: 'auto', treePath: T },
									l = (0, h.v6)('inlineBanner', R, x, d),
									{ banner: u, className: _, internalClassName: I, disableA11y: O, layout: f, onClick: B } = l,
									K = (0, a.Z)(l, P);
								return u && u.value
									? (0, n.Y)(r._, {
											children: (0, n.Y)('div', {
												onClick: (L) => {
													B && B(L, u);
												},
												role: 'article',
												ref: (L) => {
													O || (0, m.iy)(L), (d.trackingRef.current = L);
												},
												className: s()('ss__inline-banner', `ss__inline-banner--${f}`, _, I),
												...K,
												dangerouslySetInnerHTML: { __html: u.value },
											}),
									  })
									: (0, n.Y)(g.FK, {});
							})
						)
					);
			},
			'./components/src/components/Organisms/Results/Results.tsx'(j, p, e) {
				'use strict';
				e.d(p, { n: () => O });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = e('../../node_modules/preact/dist/preact.module.js'),
					t = e('../../node_modules/mobx-react-lite/es/index.js'),
					s = e('../../node_modules/classnames/index.js'),
					r = e.n(s),
					o = e('../../node_modules/deepmerge/dist/cjs.js'),
					i = e.n(o),
					y = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/Stores/SearchMerchandisingStore.js'),
					E = e('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx'),
					h = e('./components/src/components/Molecules/Result/Result.tsx'),
					a = e('./components/src/types.ts'),
					m = e('./components/src/utilities/defined.ts'),
					M = e('./components/src/utilities/mergeProps.ts'),
					D = e('./components/src/utilities/mergeStyles.ts'),
					P = e('./components/src/providers/cache.tsx'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = e('./components/src/providers/withTracking.tsx'),
					R = e('./components/src/providers/snap.tsx'),
					T = e('./components/src/providers/treePath.tsx'),
					x = e('./components/src/hooks/useDisplaySettings.tsx'),
					l = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					u = e('./components/src/hooks/useComponent.tsx');
				const _ = ({ gapSize: f, columns: B }) =>
						(0, g.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gap: f,
							gridTemplateRows: 'auto',
							gridTemplateColumns: `repeat(${B}, 1fr)`,
							'& .ss__result, & .ss__result-layout': {
								boxSizing: 'border-box',
								flex: '0 1 auto',
								width: `calc(${100 / B}% - (${B - 1} * ${f} / ${B} ) )`,
								marginRight: f,
								marginBottom: f,
								[`&:nth-of-type(${B}n)`]: { marginRight: '0' },
								[`&:nth-last-of-type(-n+${B})`]: { marginBottom: '0' },
							},
							'@supports (display: grid)': { display: 'grid', '& .ss__result, & .ss__result-layout': { width: 'initial', flex: void 0, margin: 0 } },
						}),
					I = (0, d.W)(h.Q),
					O = (0, t.PA)((f) => {
						const B = (0, C.u)(),
							K = (0, T.LU)(),
							L = {
								0: { columns: f.columns || 1 },
								540: { columns: f.columns || 2 },
								768: { columns: f.columns || 3 },
								991: { columns: f.columns || 4 },
							},
							N = { results: f.controller?.store?.results, columns: 4, gapSize: '20px', layout: a.V.grid, breakpoints: L, treePath: K };
						let v = (0, M.v6)('results', B, N, f);
						if (!f.theme?.name) {
							const A = (0, x.X)(v?.breakpoints || {}),
								S = i()(v?.theme || {}, A?.theme || {}, { arrayMerge: (G, H) => H });
							v = { ...v, ...A, theme: S };
						}
						const { disableStyles: k, className: Y, internalClassName: z, layout: J, theme: $, controller: b, treePath: W } = v;
						let { resultComponent: U } = v;
						const V = {
							result: { internalClassName: 'ss__results__result', ...(0, m.s)({ disableStyles: k }), theme: v?.theme, treePath: W },
							inlineBanner: {
								controller: b,
								internalClassName: 'ss__results__inline-banner',
								...(0, m.s)({ disableStyles: k }),
								theme: v?.theme,
								treePath: W,
							},
						};
						let w = v.results;
						v?.columns && v?.rows && v.columns > 0 && v.rows > 0 && (w = v.results?.slice(0, v.columns * v.rows));
						const F = (0, D.Z)({ ...v, columns: J == a.V.list ? 1 : v.columns }, _);
						if (typeof U == 'string') {
							const A = (0, R.uk)();
							if (A?.templates?.library.import.component.result && ((U = (0, u.x)(A?.templates?.library.import.component.result, U)), !U))
								return (0, n.Y)(c.FK, {});
						}
						return w?.length
							? (0, n.Y)(P._, {
									children: (0, n.Y)('div', {
										...F,
										className: r()('ss__results', `ss__results-${v.layout}`, Y, z),
										children: w.map((A) =>
											(() => {
												switch (A.type) {
													case y.c.BANNER:
														return (0, g.n)(E._, { ...V.inlineBanner, key: A.id, banner: A, layout: v.layout });
													default:
														if (U && b) {
															const S = U;
															return (0, n.Y)(l.o, {
																result: A,
																controller: b,
																children: (0, n.Y)(S, { controller: b, result: A, theme: $, treePath: W }, A.id),
															});
														} else return (0, n.Y)(I, { ...V.result, result: A, layout: v.layout, controller: b }, A.id);
												}
											})()
										),
									}),
							  })
							: (0, n.Y)(c.FK, {});
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(j, p, e) {
				'use strict';
				e.d(p, { o: () => E });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = e('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
					t = e('../../node_modules/classnames/index.js'),
					s = e.n(t),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					o = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/createImpressionObserver.ts');
				const y = { ResultTracker: () => (0, g.AH)({}) },
					E = (0, c.PA)((h) => {
						const a = (0, r.u)(),
							m = (0, o.v6)('resultTracker', a, {}, h),
							M = { impression: !0, click: !0 },
							{ children: D, result: P, track: C, controller: d, className: R, internalClassName: T, disableStyles: x, style: l } = m,
							u = { ...M, ...C },
							{ ref: _, inViewport: I } = (0, i.Q)();
						I && u.impression && d?.track.product.impression(P);
						const O = {};
						return (
							x ? l && (O.css = [l]) : (O.css = [y.ResultTracker(), l]),
							(0, n.Y)('div', {
								className: s()('ss__result-tracker', `ss__${d?.type}-result-tracker`, R, T),
								onClick: (f) => {
									u.click && d?.track.product.click(f, P);
								},
								ref: _,
								...O,
								children: D,
							})
						);
					});
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(j, p, e) {
				'use strict';
				e.d(p, { v: () => c });
				var n = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const g = 250,
					c = (s, r = {}) => {
						const { rootMargin: o = '0px', fireOnce: i = !1, threshold: y = 0, minVisibleTime: E = 0 } = r,
							[h, a] = (0, n.J0)(!1),
							m = (0, n.li)(null),
							M = (0, n.li)(null),
							[D, P] = (0, n.J0)(0),
							C = (0, n.hb)((d) => {
								(s.current = d), P((R) => R + 1);
							}, []);
						return (
							(0, n.vJ)(() => {
								a(!1);
								let d = null,
									R = null;
								if (!window.IntersectionObserver || !s.current) return;
								const T = () => {
										R && (window.clearInterval(R), (R = null));
									},
									x = () => {
										E > 0
											? ((M.current = Date.now()),
											  m.current && window.clearTimeout(m.current),
											  (m.current = window.setTimeout(() => {
													a(!0), i && s.current && d && d.unobserve(s.current);
											  }, E)))
											: (a(!0), i && s.current && d && d.unobserve(s.current));
									},
									l = () => {
										m.current && window.clearTimeout(m.current), (m.current = null), (M.current = null), a(!1);
									};
								return (
									(d = new IntersectionObserver(
										([u]) => {
											u.isIntersecting
												? s.current && t(s.current)
													? (T(), x())
													: (l(),
													  R ||
															(R = window.setInterval(() => {
																if (!s.current) {
																	T();
																	return;
																}
																t(s.current) && (T(), x());
															}, g)))
												: (T(), l());
										},
										{ rootMargin: o, threshold: y }
									)),
									s.current && d.observe(s.current),
									() => {
										a(!1), T(), m.current && window.clearTimeout(m.current), d && s.current && d.unobserve(s.current);
									}
								);
							}, [s, D]),
							{ inViewport: h, updateRef: C }
						);
					};
				function t(s) {
					return s && 'checkVisibility' in s ? s.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/providers/withTracking.tsx'(j, p, e) {
				'use strict';
				e.d(p, { N: () => t, W: () => s });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('./components/src/utilities/createImpressionObserver.ts'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const t = 'sstracking';
				function s(r) {
					return (i) => {
						const { controller: y, result: E, banner: h, type: a, content: m, ...M } = i;
						if (i.trackingRef) return (0, n.Y)(r, { ...i });
						!y && (!a || !m) && console.warn('Warning: No controller provided to withTracking', i),
							!E && !h && (!a || !m) && console.warn('Warning: No result or banner provided to withTracking');
						const { ref: D, inViewport: P, updateRef: C } = (0, g.Q)(),
							d = (E || h || (a && m?.[a]?.[0]))?.responseId,
							R = (0, c.li)(d),
							T = (0, c.li)(!1);
						R.current !== d && (T.current = !0),
							(0, c.vJ)(() => {
								R.current !== d && ((R.current = d), C(D.current));
							}, [d, C]),
							(0, c.vJ)(() => {
								T.current && !P && (T.current = !1);
							}, [P, d]);
						const x = a && m && !E && ['search', 'autocomplete'].includes(y?.type || '');
						P && !T.current && (x ? y?.track.banner.impression(m[a][0]) : E?.bundleSeed || y?.track.product.impression(E || h));
						const l = (0, c.hb)(
							(_) => {
								x ? y?.track.banner.click(_, m[a][0]) : y?.track.product.click(_, E || h);
							},
							[y, E, h, a, m]
						);
						(0, c.vJ)(() => {
							const _ = D.current;
							if (_)
								return (
									_.setAttribute(t, 'true'),
									_.addEventListener('click', l, !0),
									() => {
										_.removeEventListener('click', l, !0);
									}
								);
						}, [l]);
						const u = {
							...M,
							controller: y,
							result: E,
							banner: h,
							type: a,
							content: m,
							trackingRef: (0, c.hb)(
								(_) => {
									C(_);
								},
								[C]
							),
						};
						return (0, n.Y)(r, { ...u });
					};
				}
			},
			'./components/src/utilities/componentArgs.ts'(j, p, e) {
				'use strict';
				e.d(p, { F: () => n });
				const n = {
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
			'./components/src/utilities/createImpressionObserver.ts'(j, p, e) {
				'use strict';
				e.d(p, { Q: () => s });
				var n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					g = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const c = 0.7,
					t = 1e3;
				function s(r) {
					const o = (0, n.li)(null),
						{ inViewport: i, updateRef: y } = (0, g.v)(o, { ...r, fireOnce: !0, threshold: c, minVisibleTime: t });
					return { ref: o, inViewport: i, updateRef: y };
				}
			},
			'./components/src/utilities/snapify.ts'(j, p, e) {
				'use strict';
				e.d(p, { p: () => d });
				var n = e('../../node_modules/mobx/dist/mobx.esm.js'),
					g = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					c = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					t = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					s = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					r = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					o = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					i = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					y = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					E = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					h = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					a = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					m = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					M = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					D = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, n.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const P = {},
					C = { globals: { siteId: '8uyt2m' } };
				class d {
					static recommendation(u) {
						const _ = u.id;
						if (P[_]) return P[_];
						const I = (P[_] = T({ client: C, controller: u }));
						return (
							I.on('afterStore', async ({ controller: O }, f) => {
								O.log.debug('controller', O), O.log.debug('store', O.store.toJSON()), await f();
							}),
							I.init(),
							I
						);
					}
					static autocomplete(u) {
						const _ = u.id;
						if (P[_]) return P[_];
						const I = (P[_] = x({ client: C, controller: u }));
						return (
							I.on('afterStore', async ({ controller: O }, f) => {
								O.log.debug('controller', O), O.log.debug('store', O.store.toJSON()), await f();
							}),
							I.init(),
							I
						);
					}
					static search(u) {
						const _ = u.id;
						if (P[_]) return P[_];
						const I = (P[_] = R({ client: C, controller: u }));
						return (
							I.on('afterStore', async ({ controller: O }, f) => {
								O.log.debug('controller', O), O.log.debug('store', O.store.toJSON()), await f();
							}),
							I.init(),
							I
						);
					}
				}
				function R(l) {
					const u = new y.V(new h.E({ settings: { coreType: 'query', corePrefix: l.controller.id } }), E.X);
					return new g.Tp(l.controller, {
						client: new s.K(l.client.globals, l.client.config),
						store: new o.U(l.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new a.E(),
						profiler: new m.U(),
						logger: new M.V(),
						tracker: new D.J(l.client.globals),
					});
				}
				function T(l) {
					const u = new y.V(new h.E(), E.X).detach(!0);
					return new t.c(l.controller, {
						client: new s.K(l.client.globals, l.client.config),
						store: new i.t(l.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new a.E(),
						profiler: new m.U(),
						logger: new M.V(),
						tracker: new D.J(l.client.globals),
					});
				}
				function x(l) {
					const u = new y.V(new h.E(), E.X).detach();
					return new c.Z(l.controller, {
						client: new s.K(l.client.globals, l.client.config),
						store: new r.Y(l.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new a.E(),
						profiler: new m.U(),
						logger: new M.V(),
						tracker: new D.J(l.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(j, p, e) {
				'use strict';
				e.d(p, { Z: () => t });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					g = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = 'prism-block',
					t = (s) => {
						const r = (0, g.li)(null);
						return (
							(0, g.vJ)(() => {
								r.current && s.className?.includes('lang-') && !s.className?.includes(c) && window?.Prism?.highlightElement(r.current);
							}, [s.className, s.children, r]),
							(0, n.Y)('code', { ...s, ref: r, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/dequal/dist/index.mjs'(j, p, e) {
				'use strict';
				e.d(p, { j: () => c });
				var n = Object.prototype.hasOwnProperty;
				function g(t, s, r) {
					for (r of t.keys()) if (c(r, s)) return r;
				}
				function c(t, s) {
					var r, o, i;
					if (t === s) return !0;
					if (t && s && (r = t.constructor) === s.constructor) {
						if (r === Date) return t.getTime() === s.getTime();
						if (r === RegExp) return t.toString() === s.toString();
						if (r === Array) {
							if ((o = t.length) === s.length) for (; o-- && c(t[o], s[o]); );
							return o === -1;
						}
						if (r === Set) {
							if (t.size !== s.size) return !1;
							for (o of t) if (((i = o), (i && typeof i == 'object' && ((i = g(s, i)), !i)) || !s.has(i))) return !1;
							return !0;
						}
						if (r === Map) {
							if (t.size !== s.size) return !1;
							for (o of t) if (((i = o[0]), (i && typeof i == 'object' && ((i = g(s, i)), !i)) || !c(o[1], s.get(i)))) return !1;
							return !0;
						}
						if (r === ArrayBuffer) (t = new Uint8Array(t)), (s = new Uint8Array(s));
						else if (r === DataView) {
							if ((o = t.byteLength) === s.byteLength) for (; o-- && t.getInt8(o) === s.getInt8(o); );
							return o === -1;
						}
						if (ArrayBuffer.isView(t)) {
							if ((o = t.byteLength) === s.byteLength) for (; o-- && t[o] === s[o]; );
							return o === -1;
						}
						if (!r || typeof t == 'object') {
							o = 0;
							for (r in t) if ((n.call(t, r) && ++o && !n.call(s, r)) || !(r in s) || !c(t[r], s[r])) return !1;
							return Object.keys(s).length === o;
						}
					}
					return t !== t && s !== s;
				}
			},
			'../../node_modules/memoizerific sync recursive'(j) {
				function p(e) {
					var n = new Error("Cannot find module '" + e + "'");
					throw ((n.code = 'MODULE_NOT_FOUND'), n);
				}
				(p.keys = () => []), (p.resolve = p), (p.id = '../../node_modules/memoizerific sync recursive'), (j.exports = p);
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-Results-Results-stories.4b8af4c5.iframe.bundle.js.map
