(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[401],
		{
			'./components/src/components/Templates/RecommendationGrid/RecommendationGrid.stories.tsx'(I, a, e) {
				'use strict';
				e.r(a), e.d(a, { Grid: () => h, List: () => E, __namedExportsOrder: () => R, default: () => l });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					i = e('./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx'),
					n = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					o = e('./components/src/utilities/snapify.ts');
				const r = `# RecommendationGrid

Renders a List of results utilizing \`<Result />\` components.

## Sub-components
- Result

## Usage

### controller
The \`controller\` prop specifies a reference to the recommendation controller.

\`\`\`jsx
<RecommendationGrid controller={controller.store.results} />
\`\`\`

### results
The \`results\` prop specifies a reference to the results store array. If no results prop is passed in, the component will default to using the results in controller.store. 

\`\`\`jsx
<RecommendationGrid results={controller.store.results} />
\`\`\`

### title
The \`title\` prop specifies the title text to render.

\`\`\`jsx
<RecommendationGrid results={controller.store.results} title={'Recommended For You'} />
\`\`\`

### columns
The \`columns\` prop specifies the number of columns to display. 

\`\`\`jsx
<RecommendationGrid results={controller.store.results} columns={4} />
\`\`\`

### rows
The \`rows\` prop specifies the number of rows to display.

\`\`\`jsx
<RecommendationGrid results={controller.store.results} rows={2} />
\`\`\`

### trim
The \`trim\` prop specifies whether we should trim off excess results in order to have equal rows and columns.

\`\`\`jsx
<RecommendationGrid results={controller.store.results} rows={3} trim={true} />
\`\`\`

### gapSize
The \`gapSize\` prop specifies the gap size between each result.

\`\`\`jsx
<RecommendationGrid results={controller.store.results} gapSize={'10px'} />
\`\`\`


### lazyRender 
The \`lazyRender\` prop specifies an object of lazy rendering settings. The settings include an \`enable\` toggle (defaults to \`true\`) as well as an \`offset\` (default \`"10%"\`) to specify at what distance the component should start rendering relative to the bottom of the viewport.

\`\`\`jsx
const customLazyRenderProps = {
	enabled: true,
	offset: "20px" // any css margin values accepted - px, %, etc...
}

<RecommendationGrid results={controller.store.results} lazyRender={ customLazyRenderProps } />
\`\`\`

### breakpoints
An object that modifies the responsive behavior of the \`<Result />\` component.

Each entry within the breakpoints object contains a numeric key of the viewport when the sub-object of props will take effect. Any props listed above can be specified. (ie. columns, rows, layout, gapSize)

Typically used to adjust the layout and how many products are shown at any screen size. There is no limit to how many breakpoints settings you can pass in.


Default Results \`breakpoints\` object:

\`\`\`typescript
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
<RecommendationGrid results={controller.store.results} breakpoints={breakpoints} />
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

<RecommendationGrid results={controller.store.results} resultComponent={CustomResult} />
\`\`\``,
					l = {
						title: 'Templates/RecommendationGrid',
						component: i.q,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(_.oz, { options: { overrides: { code: n.Z } }, children: r }), (0, s.Y)(_.uY, { story: _.h1 })],
									}),
							},
						},
						decorators: [(u) => (0, s.Y)('div', { style: { maxWidth: '900px' }, children: (0, s.Y)(u, {}) })],
						argTypes: {
							controller: {
								description: 'Controller reference',
								table: { type: { summary: 'Controller' } },
								type: { required: !0 },
								control: { type: 'none' },
							},
							title: {
								description: 'Recommendation title',
								table: { category: 'Templates Legal', type: { summary: 'string | JSX Element' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							results: {
								description: 'Results store reference',
								type: { required: !1 },
								table: { type: { summary: 'Results store object' } },
								control: { type: 'none' },
							},
							resultComponent: { description: 'Slot for custom result component', table: { type: { summary: 'component' } } },
							columns: {
								description: 'Number of columns in results grid',
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							rows: {
								description: 'Number of rows in results grid',
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							trim: {
								description: 'trim off extra results based on columns and rows?',
								table: { category: 'Templates Legal', type: { summary: 'boolean' } },
								control: { type: 'boolean' },
							},
							gapSize: {
								defaultValue: '20px',
								description: 'Gap size between rows and columns',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '20px' } },
								control: { type: 'text' },
							},
							lazyRender: {
								description: 'Lazy render settings object',
								defaultValue: { enabled: !0, offset: '10%' },
								table: { category: 'Templates Legal', type: { summary: 'object' }, defaultValue: { summary: 'Lazy render settings object' } },
								control: { type: 'object' },
							},
							breakpoints: {
								defaultValue: { summary: 'Breakpoint object' },
								description: 'Breakpoints options object',
								table: { type: { summary: 'object' } },
								control: { type: 'none' },
							},
							...t.F,
						},
					},
					p = o.p.recommendation({ id: 'RecommendationList', tag: 'trending', globals: { siteId: 'atkzs2' } }),
					E = (u, { loaded: { controller: y } }) => (0, s.Y)(i.q, { ...u, controller: y, results: y?.store?.results });
				E.loaders = [async () => (await p.search(), { controller: p })];
				const h = (u, { loaded: { controller: y } }) => (0, s.Y)(i.q, { ...u, controller: y, results: y?.store?.results });
				(h.args = { columns: 4 }),
					(h.loaders = [async () => (await p.search(), { controller: p })]),
					(E.parameters = {
						...E.parameters,
						docs: {
							...E.parameters?.docs,
							source: {
								originalSource: `(args: RecommendationGridProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: RecommendationController;
  };
}) => {
  return <RecommendationGrid {...args} controller={controller} results={controller?.store?.results} />;
}`,
								...E.parameters?.docs?.source,
							},
						},
					}),
					(h.parameters = {
						...h.parameters,
						docs: {
							...h.parameters?.docs,
							source: {
								originalSource: `(args: RecommendationGridProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: RecommendationController;
  };
}) => {
  return <RecommendationGrid {...args} controller={controller} results={controller?.store?.results} />;
}`,
								...h.parameters?.docs?.source,
							},
						},
					});
				const R = ['List', 'Grid'];
			},
			'./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx'(I, a, e) {
				'use strict';
				e.d(a, { q: () => m });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/classnames/index.js'),
					t = e.n(n),
					o = e('../../node_modules/deepmerge/dist/cjs.js'),
					r = e.n(o),
					l = e('./components/src/components/Molecules/Result/Result.tsx'),
					p = e('./components/src/utilities/defined.ts'),
					E = e('./components/src/utilities/mergeProps.ts'),
					h = e('./components/src/utilities/mergeStyles.ts'),
					R = e('./components/src/providers/cache.tsx'),
					u = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/treePath.tsx'),
					x = e('./components/src/hooks/useDisplaySettings.tsx'),
					O = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					j = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					P = e('../../node_modules/preact/compat/dist/compat.module.js'),
					T = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					C = e('./components/src/hooks/useIntersection.tsx');
				const A = ({ gapSize: c, columns: f }) =>
						(0, i.AH)({
							maxWidth: '100%',
							maxHeight: '100%',
							'.ss__recommendation-grid__results': {
								display: 'flex',
								flexFlow: 'row wrap',
								gap: c,
								gridTemplateRows: 'auto',
								gridTemplateColumns: `repeat(${f}, 1fr)`,
								overflow: 'auto',
								'@supports (display: grid)': { display: 'grid' },
							},
						}),
					m = (0, _.PA)((c) => {
						const f = (0, u.u)(),
							M = (0, y.LU)(),
							g = {
								results: c.controller?.store?.results,
								gapSize: '20px',
								title: c.controller?.store?.profile?.display?.templateParameters?.title,
								treePath: M,
							},
							L = { name: c.controller?.store?.profile?.tag?.toLowerCase(), ...c };
						let d = (0, E.v6)('recommendationGrid', f, g, L);
						if (!c.theme?.name) {
							const D = (0, x.X)(d?.breakpoints || {}),
								U = r()(d?.theme || {}, D?.theme || {}, { arrayMerge: (Q, Z) => Z });
							d = { ...d, ...D, theme: U };
						}
						const {
								disableStyles: V,
								title: B,
								resultComponent: K,
								trim: W,
								lazyRender: G,
								className: z,
								internalClassName: N,
								treePath: S,
								theme: Y,
								controller: b,
							} = d,
							w = { enabled: !0, offset: '10%', ...G },
							J = { result: { internalClassName: 'ss__recommendation-grid__result', ...(0, p.s)({ disableStyles: V }), theme: d?.theme } };
						let v = d.results || b.store.results;
						if (!d.columns && !d.rows) (d.rows = 1), (d.columns = v.length);
						else if (d.columns && !d.rows) {
							if (((d.rows = Math.floor(v.length / d.columns)), W)) {
								const D = v.length % d.columns;
								v = v.slice(0, v.length - D);
							}
						} else if (d.rows && !d.columns) {
							if (W) {
								const D = v.length % d.rows;
								v = v.slice(0, v.length - D);
							}
							d.columns = Math.ceil(v.length / d.rows);
						} else d?.columns && d?.rows && d.columns > 0 && d.rows > 0 && (v = v?.slice(0, d.columns * d.rows));
						const F = (0, h.Z)(d, A),
							[H, X] = (0, P.useState)(!1),
							k = (0, T.li)(null);
						return (
							(!w?.enabled || (0, C.v)(k, `${w.offset} 0px ${w.offset} 0px`, !0)) && X(!0),
							v?.length
								? (0, s.Y)(R._, {
										children: (0, s.Y)('div', {
											...F,
											ref: k,
											className: t()('ss__recommendation-grid', z, N),
											children: H
												? (0, s.FD)(O.l, {
														controller: b,
														children: [
															B && (0, s.Y)('h3', { className: 'ss__recommendation-grid__title', children: B }),
															(0, s.Y)('div', {
																className: 'ss__recommendation-grid__results',
																children: v.map((D) =>
																	(() => {
																		if (K && b) {
																			const U = K;
																			return (0, s.Y)(U, { controller: b, result: D, theme: Y, treePath: S });
																		} else
																			return (0, s.Y)(j.o, {
																				result: D,
																				controller: b,
																				children: (0, s.Y)(l.Q, { ...J.result, result: D, controller: b, treePath: S }, D.id),
																			});
																	})()
																),
															}),
														],
												  })
												: (0, s.Y)(O.l, {
														controller: b,
														children: v.map((D) => (0, s.Y)(j.o, { controller: b, result: D, children: (0, s.Y)(s.FK, {}) })),
												  }),
										}),
								  })
								: null
						);
					});
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(I, a, e) {
				'use strict';
				e.d(a, { l: () => p });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/preact/dist/preact.module.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('../../node_modules/classnames/index.js'),
					o = e.n(t),
					r = e('./components/src/utilities/mergeStyles.ts');
				const l = () => (0, i.AH)({}),
					p = (0, n.PA)((E) => {
						const { children: h, className: R, internalClassName: u } = E,
							y = (0, _.v2)(h),
							x = (0, r.Z)(E, l);
						return y.length ? (0, s.Y)('div', { className: o()('ss__recommendation-profile-tracker', R, u), ...x, children: h }) : null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(I, a, e) {
				'use strict';
				e.d(a, { o: () => E });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('../../node_modules/classnames/index.js'),
					t = e.n(n),
					o = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					r = e('./components/src/utilities/mergeProps.ts'),
					l = e('./components/src/utilities/createImpressionObserver.ts');
				const p = { ResultTracker: () => (0, _.AH)({}) },
					E = (0, i.PA)((h) => {
						const R = (0, o.u)(),
							u = (0, r.v6)('resultTracker', R, {}, h),
							y = { impression: !0, click: !0 },
							{ children: x, result: O, track: j, controller: P, className: T, internalClassName: C, disableStyles: A, style: m } = u,
							c = { ...y, ...j },
							{ ref: f, inViewport: M } = (0, l.Q)();
						M && c.impression && P?.track.product.impression(O);
						const g = {};
						return (
							A ? m && (g.css = [m]) : (g.css = [p.ResultTracker(), m]),
							(0, s.Y)('div', {
								className: t()('ss__result-tracker', `ss__${P?.type}-result-tracker`, T, C),
								onClick: (L) => {
									c.click && P?.track.product.click(L, O);
								},
								ref: f,
								...g,
								children: x,
							})
						);
					});
			},
			'./components/src/hooks/useIntersection.tsx'(I, a, e) {
				'use strict';
				e.d(a, { v: () => _ });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const _ = (i, n = '0px', t = !1) => {
					const [o, r] = (0, s.J0)(!1);
					return (
						(0, s.vJ)(() => {
							const l = new IntersectionObserver(
								([p]) => {
									r(p.isIntersecting), t && p.isIntersecting && l.unobserve(i.current);
								},
								{ rootMargin: n }
							);
							return (
								i.current && l.observe(i.current),
								() => {
									l.unobserve(i.current);
								}
							);
						}, []),
						o
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(I, a, e) {
				'use strict';
				e.d(a, { v: () => i });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const _ = 250,
					i = (t, o = {}) => {
						const { rootMargin: r = '0px', fireOnce: l = !1, threshold: p = 0, minVisibleTime: E = 0 } = o,
							[h, R] = (0, s.J0)(!1),
							u = (0, s.li)(null),
							y = (0, s.li)(null),
							[x, O] = (0, s.J0)(0),
							j = (0, s.hb)((P) => {
								(t.current = P), O((T) => T + 1);
							}, []);
						return (
							(0, s.vJ)(() => {
								R(!1);
								let P = null,
									T = null;
								if (!window.IntersectionObserver || !t.current) return;
								const C = () => {
										T && (window.clearInterval(T), (T = null));
									},
									A = () => {
										E > 0
											? ((y.current = Date.now()),
											  u.current && window.clearTimeout(u.current),
											  (u.current = window.setTimeout(() => {
													R(!0), l && t.current && P && P.unobserve(t.current);
											  }, E)))
											: (R(!0), l && t.current && P && P.unobserve(t.current));
									},
									m = () => {
										u.current && window.clearTimeout(u.current), (u.current = null), (y.current = null), R(!1);
									};
								return (
									(P = new IntersectionObserver(
										([c]) => {
											c.isIntersecting
												? t.current && n(t.current)
													? (C(), A())
													: (m(),
													  T ||
															(T = window.setInterval(() => {
																if (!t.current) {
																	C();
																	return;
																}
																n(t.current) && (C(), A());
															}, _)))
												: (C(), m());
										},
										{ rootMargin: r, threshold: p }
									)),
									t.current && P.observe(t.current),
									() => {
										R(!1), C(), u.current && window.clearTimeout(u.current), P && t.current && P.unobserve(t.current);
									}
								);
							}, [t, x]),
							{ inViewport: h, updateRef: j }
						);
					};
				function n(t) {
					return t && 'checkVisibility' in t ? t.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/utilities/componentArgs.ts'(I, a, e) {
				'use strict';
				e.d(a, { F: () => s });
				const s = {
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
			'./components/src/utilities/createImpressionObserver.ts'(I, a, e) {
				'use strict';
				e.d(a, { Q: () => t });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					_ = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const i = 0.7,
					n = 1e3;
				function t(o) {
					const r = (0, s.li)(null),
						{ inViewport: l, updateRef: p } = (0, _.v)(r, { ...o, fireOnce: !0, threshold: i, minVisibleTime: n });
					return { ref: r, inViewport: l, updateRef: p };
				}
			},
			'./components/src/utilities/snapify.ts'(I, a, e) {
				'use strict';
				e.d(a, { p: () => P });
				var s = e('../../node_modules/mobx/dist/mobx.esm.js'),
					_ = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					i = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					n = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					o = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					r = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					l = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					p = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					E = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					h = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					R = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					u = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					y = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					x = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const O = {},
					j = { globals: { siteId: 'atkzs2' } };
				class P {
					static recommendation(c) {
						const f = c.id;
						if (O[f]) return O[f];
						const M = (O[f] = C({ client: j, controller: c }));
						return (
							M.on('afterStore', async ({ controller: g }, L) => {
								g.log.debug('controller', g), g.log.debug('store', g.store.toJSON()), await L();
							}),
							M.init(),
							M
						);
					}
					static autocomplete(c) {
						const f = c.id;
						if (O[f]) return O[f];
						const M = (O[f] = A({ client: j, controller: c }));
						return (
							M.on('afterStore', async ({ controller: g }, L) => {
								g.log.debug('controller', g), g.log.debug('store', g.store.toJSON()), await L();
							}),
							M.init(),
							M
						);
					}
					static search(c) {
						const f = c.id;
						if (O[f]) return O[f];
						const M = (O[f] = T({ client: j, controller: c }));
						return (
							M.on('afterStore', async ({ controller: g }, L) => {
								g.log.debug('controller', g), g.log.debug('store', g.store.toJSON()), await L();
							}),
							M.init(),
							M
						);
					}
				}
				function T(m) {
					const c = new p.V(new h.E({ settings: { coreType: 'query', corePrefix: m.controller.id } }), E.X);
					return new _.Tp(m.controller, {
						client: new t.K(m.client.globals, m.client.config),
						store: new r.U(m.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new R.E(),
						profiler: new u.U(),
						logger: new y.V(),
						tracker: new x.J(m.client.globals),
					});
				}
				function C(m) {
					const c = new p.V(new h.E(), E.X).detach(!0);
					return new n.c(m.controller, {
						client: new t.K(m.client.globals, m.client.config),
						store: new l.t(m.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new R.E(),
						profiler: new u.U(),
						logger: new y.V(),
						tracker: new x.J(m.client.globals),
					});
				}
				function A(m) {
					const c = new p.V(new h.E(), E.X).detach();
					return new i.Z(m.controller, {
						client: new t.K(m.client.globals, m.client.config),
						store: new o.Y(m.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new R.E(),
						profiler: new u.U(),
						logger: new y.V(),
						tracker: new x.J(m.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(I, a, e) {
				'use strict';
				e.d(a, { Z: () => n });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const i = 'prism-block',
					n = (t) => {
						const o = (0, _.li)(null);
						return (
							(0, _.vJ)(() => {
								o.current && t.className?.includes('lang-') && !t.className?.includes(i) && window?.Prism?.highlightElement(o.current);
							}, [t.className, t.children, o]),
							(0, s.Y)('code', { ...t, ref: o, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/dequal/dist/index.mjs'(I, a, e) {
				'use strict';
				e.d(a, { j: () => i });
				var s = Object.prototype.hasOwnProperty;
				function _(n, t, o) {
					for (o of n.keys()) if (i(o, t)) return o;
				}
				function i(n, t) {
					var o, r, l;
					if (n === t) return !0;
					if (n && t && (o = n.constructor) === t.constructor) {
						if (o === Date) return n.getTime() === t.getTime();
						if (o === RegExp) return n.toString() === t.toString();
						if (o === Array) {
							if ((r = n.length) === t.length) for (; r-- && i(n[r], t[r]); );
							return r === -1;
						}
						if (o === Set) {
							if (n.size !== t.size) return !1;
							for (r of n) if (((l = r), (l && typeof l == 'object' && ((l = _(t, l)), !l)) || !t.has(l))) return !1;
							return !0;
						}
						if (o === Map) {
							if (n.size !== t.size) return !1;
							for (r of n) if (((l = r[0]), (l && typeof l == 'object' && ((l = _(t, l)), !l)) || !i(r[1], t.get(l)))) return !1;
							return !0;
						}
						if (o === ArrayBuffer) (n = new Uint8Array(n)), (t = new Uint8Array(t));
						else if (o === DataView) {
							if ((r = n.byteLength) === t.byteLength) for (; r-- && n.getInt8(r) === t.getInt8(r); );
							return r === -1;
						}
						if (ArrayBuffer.isView(n)) {
							if ((r = n.byteLength) === t.byteLength) for (; r-- && n[r] === t[r]; );
							return r === -1;
						}
						if (!o || typeof n == 'object') {
							r = 0;
							for (o in n) if ((s.call(n, o) && ++r && !s.call(t, o)) || !(o in t) || !i(n[o], t[o])) return !1;
							return Object.keys(t).length === r;
						}
					}
					return n !== n && t !== t;
				}
			},
			'../../node_modules/memoizerific sync recursive'(I) {
				function a(e) {
					var s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (I.exports = a);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-RecommendationGrid-RecommendationGrid-stories.b58d5459.iframe.bundle.js.map
