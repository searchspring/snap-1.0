(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[401],
		{
			'./components/src/components/Templates/RecommendationGrid/RecommendationGrid.stories.tsx'(I, a, e) {
				'use strict';
				e.r(a), e.d(a, { Grid: () => h, List: () => E, __namedExportsOrder: () => R, default: () => i });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					m = e('./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx'),
					n = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
					r = e('./components/src/utilities/snapify.ts');
				const o = `# RecommendationGrid

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
					i = {
						title: 'Templates/RecommendationGrid',
						component: m.q,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(u.oz, { options: { overrides: { code: n.Z } }, children: o }), (0, s.Y)(u.uY, { story: u.h1 })],
									}),
							},
						},
						decorators: [(_) => (0, s.Y)('div', { style: { maxWidth: '900px' }, children: (0, s.Y)(_, {}) })],
						argTypes: {
							controller: {
								description: 'Controller reference',
								table: { type: { summary: 'Controller' } },
								type: { required: !0 },
								control: { type: 'none' },
							},
							title: {
								description: 'Recommendation title',
								table: { type: { summary: 'string | JSX Element' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							results: {
								description: 'Results store reference',
								type: { required: !1 },
								table: { type: { summary: 'Results store object' } },
								control: { type: 'none' },
							},
							resultComponent: { description: 'Slot for custom result component', table: { type: { summary: 'component' } } },
							columns: { description: 'Number of columns in results grid', table: { type: { summary: 'number' } }, control: { type: 'number' } },
							rows: { description: 'Number of rows in results grid', table: { type: { summary: 'number' } }, control: { type: 'number' } },
							trim: {
								description: 'trim off extra results based on columns and rows?',
								table: { type: { summary: 'boolean' } },
								control: { type: 'boolean' },
							},
							gapSize: {
								defaultValue: '20px',
								description: 'Gap size between rows and columns',
								table: { type: { summary: 'string' }, defaultValue: { summary: '20px' } },
								control: { type: 'text' },
							},
							lazyRender: {
								description: 'Lazy render settings object',
								defaultValue: { enabled: !0, offset: '10%' },
								table: { type: { summary: 'object' }, defaultValue: { summary: 'Lazy render settings object' } },
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
					p = r.p.recommendation({ id: 'RecommendationList', tag: 'trending', globals: { siteId: 'atkzs2' } }),
					E = (_, { loaded: { controller: y } }) => (0, s.Y)(m.q, { ..._, controller: y, results: y?.store?.results });
				E.loaders = [async () => (await p.search(), { controller: p })];
				const h = (_, { loaded: { controller: y } }) => (0, s.Y)(m.q, { ..._, controller: y, results: y?.store?.results });
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
				e.d(a, { q: () => d });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/preact/dist/preact.module.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					t = e('../../node_modules/classnames/index.js'),
					r = e.n(t),
					o = e('../../node_modules/deepmerge/dist/cjs.js'),
					i = e.n(o),
					p = e('./components/src/components/Molecules/Result/Result.tsx'),
					E = e('./components/src/utilities/defined.ts'),
					h = e('./components/src/utilities/mergeProps.ts'),
					R = e('./components/src/utilities/mergeStyles.ts'),
					_ = e('./components/src/providers/cache.tsx'),
					y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					j = e('./components/src/hooks/useDisplaySettings.tsx'),
					O = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					C = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					P = e('../../node_modules/preact/compat/dist/compat.module.js'),
					D = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					x = e('./components/src/hooks/useIntersection.tsx');
				const A = ({ gapSize: c, columns: g }) =>
						(0, n.AH)({
							maxWidth: '100%',
							maxHeight: '100%',
							'.ss__recommendation-grid__results': {
								display: 'flex',
								flexFlow: 'row wrap',
								gap: c,
								gridTemplateRows: 'auto',
								gridTemplateColumns: `repeat(${g}, 1fr)`,
								overflow: 'auto',
								'@supports (display: grid)': { display: 'grid' },
							},
						}),
					d = (0, m.PA)((c) => {
						const g = (0, y.u)(),
							v = { results: c.controller?.store?.results, gapSize: '20px', title: c.controller?.store?.profile?.display?.templateParameters?.title },
							f = { name: c.controller?.store?.profile?.tag?.toLowerCase(), ...c };
						let l = (0, h.v6)('recommendationGrid', g, v, f);
						if (!c.theme?.name) {
							const T = (0, j.X)(l?.breakpoints || {}),
								w = i()(l?.theme || {}, T?.theme || {}, { arrayMerge: ($, X) => X });
							l = { ...l, ...T, theme: w };
						}
						const {
								disableStyles: S,
								title: U,
								resultComponent: B,
								trim: K,
								lazyRender: k,
								className: V,
								internalClassName: G,
								treePath: z,
								theme: N,
								controller: b,
							} = l,
							L = { enabled: !0, offset: '10%', ...k },
							Y = { result: { internalClassName: 'ss__recommendation-grid__result', ...(0, E.s)({ disableStyles: S }), theme: l?.theme } };
						let M = l.results || b.store.results;
						if (!l.columns && !l.rows) (l.rows = 1), (l.columns = M.length);
						else if (l.columns && !l.rows) {
							if (((l.rows = Math.floor(M.length / l.columns)), K)) {
								const T = M.length % l.columns;
								M = M.slice(0, M.length - T);
							}
						} else if (l.rows && !l.columns) {
							if (K) {
								const T = M.length % l.rows;
								M = M.slice(0, M.length - T);
							}
							l.columns = Math.ceil(M.length / l.rows);
						} else l?.columns && l?.rows && l.columns > 0 && l.rows > 0 && (M = M?.slice(0, l.columns * l.rows));
						const J = (0, R.Z)(l, A),
							[F, H] = (0, P.useState)(!1),
							W = (0, D.li)(null);
						return (
							(!L?.enabled || (0, x.v)(W, `${L.offset} 0px ${L.offset} 0px`, !0)) && H(!0),
							M?.length
								? (0, s.Y)(_._, {
										children: (0, s.Y)('div', {
											...J,
											ref: W,
											className: r()('ss__recommendation-grid', V, G),
											children: F
												? (0, s.FD)(O.l, {
														controller: b,
														children: [
															U && (0, s.Y)('h3', { className: 'ss__recommendation-grid__title', children: U }),
															(0, s.Y)('div', {
																className: 'ss__recommendation-grid__results',
																children: M.map((T) =>
																	(() => {
																		if (B && b) {
																			const w = B;
																			return (0, s.Y)(w, { controller: b, result: T, theme: N, treePath: z });
																		} else
																			return (0, s.Y)(C.o, {
																				result: T,
																				controller: b,
																				children: (0, s.Y)(p.Q, { ...Y.result, result: T, controller: b }, T.id),
																			});
																	})()
																),
															}),
														],
												  })
												: (0, s.Y)(O.l, {
														controller: b,
														children: M.map((T) => (0, s.Y)(C.o, { controller: b, result: T, children: (0, s.Y)(s.FK, {}) })),
												  }),
										}),
								  })
								: (0, s.Y)(u.FK, {})
						);
					});
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(I, a, e) {
				'use strict';
				e.d(a, { l: () => p });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/preact/dist/preact.module.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('../../node_modules/classnames/index.js'),
					r = e.n(t),
					o = e('./components/src/utilities/mergeStyles.ts');
				const i = () => (0, m.AH)({}),
					p = (0, n.PA)((E) => {
						const { children: h, className: R, internalClassName: _ } = E,
							y = (0, u.v2)(h),
							j = (0, o.Z)(E, i);
						return y.length ? (0, s.Y)('div', { className: r()('ss__recommendation-profile-tracker', R, _), ...j, children: h }) : (0, s.Y)(u.FK, {});
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(I, a, e) {
				'use strict';
				e.d(a, { o: () => E });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
					n = e('../../node_modules/classnames/index.js'),
					t = e.n(n),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					o = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/createImpressionObserver.ts');
				const p = { ResultTracker: () => (0, u.AH)({}) },
					E = (0, m.PA)((h) => {
						const R = (0, r.u)(),
							_ = (0, o.v6)('resultTracker', R, {}, h),
							y = { impression: !0, click: !0 },
							{ children: j, result: O, track: C, controller: P, className: D, internalClassName: x, disableStyles: A, style: d } = _,
							c = { ...y, ...C },
							{ ref: g, inViewport: v } = (0, i.Q)();
						v && c.impression && P?.track.product.impression(O);
						const f = {};
						return (
							A ? d && (f.css = [d]) : (f.css = [p.ResultTracker(), d]),
							(0, s.Y)('div', {
								className: t()('ss__result-tracker', `ss__${P?.type}-result-tracker`, D, x),
								onClick: (l) => {
									c.click && P?.track.product.click(l, O);
								},
								ref: g,
								...f,
								children: j,
							})
						);
					});
			},
			'./components/src/hooks/useIntersection.tsx'(I, a, e) {
				'use strict';
				e.d(a, { v: () => u });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const u = (m, n = '0px', t = !1) => {
					const [r, o] = (0, s.J0)(!1);
					return (
						(0, s.vJ)(() => {
							const i = new IntersectionObserver(
								([p]) => {
									o(p.isIntersecting), t && p.isIntersecting && i.unobserve(m.current);
								},
								{ rootMargin: n }
							);
							return (
								m.current && i.observe(m.current),
								() => {
									i.unobserve(m.current);
								}
							);
						}, []),
						r
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(I, a, e) {
				'use strict';
				e.d(a, { v: () => m });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const u = 250,
					m = (t, r = {}) => {
						const { rootMargin: o = '0px', fireOnce: i = !1, threshold: p = 0, minVisibleTime: E = 0 } = r,
							[h, R] = (0, s.J0)(!1),
							_ = (0, s.li)(null),
							y = (0, s.li)(null),
							[j, O] = (0, s.J0)(0),
							C = (0, s.hb)((P) => {
								(t.current = P), O((D) => D + 1);
							}, []);
						return (
							(0, s.vJ)(() => {
								R(!1);
								let P = null,
									D = null;
								if (!window.IntersectionObserver || !t.current) return;
								const x = () => {
										D && (window.clearInterval(D), (D = null));
									},
									A = () => {
										E > 0
											? ((y.current = Date.now()),
											  _.current && window.clearTimeout(_.current),
											  (_.current = window.setTimeout(() => {
													R(!0), i && t.current && P && P.unobserve(t.current);
											  }, E)))
											: (R(!0), i && t.current && P && P.unobserve(t.current));
									},
									d = () => {
										_.current && window.clearTimeout(_.current), (_.current = null), (y.current = null), R(!1);
									};
								return (
									(P = new IntersectionObserver(
										([c]) => {
											c.isIntersecting
												? t.current && n(t.current)
													? (x(), A())
													: (d(),
													  D ||
															(D = window.setInterval(() => {
																if (!t.current) {
																	x();
																	return;
																}
																n(t.current) && (x(), A());
															}, u)))
												: (x(), d());
										},
										{ rootMargin: o, threshold: p }
									)),
									t.current && P.observe(t.current),
									() => {
										R(!1), x(), _.current && window.clearTimeout(_.current), P && t.current && P.unobserve(t.current);
									}
								);
							}, [t, j]),
							{ inViewport: h, updateRef: C }
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
			'./components/src/utilities/createImpressionObserver.ts'(I, a, e) {
				'use strict';
				e.d(a, { Q: () => t });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					u = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const m = 0.7,
					n = 1e3;
				function t(r) {
					const o = (0, s.li)(null),
						{ inViewport: i, updateRef: p } = (0, u.v)(o, { ...r, fireOnce: !0, threshold: m, minVisibleTime: n });
					return { ref: o, inViewport: i, updateRef: p };
				}
			},
			'./components/src/utilities/snapify.ts'(I, a, e) {
				'use strict';
				e.d(a, { p: () => P });
				var s = e('../../node_modules/mobx/dist/mobx.esm.js'),
					u = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					m = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					n = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					r = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					o = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					i = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					p = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					E = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					h = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					R = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					_ = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					y = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					j = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const O = {},
					C = { globals: { siteId: '8uyt2m' } };
				class P {
					static recommendation(c) {
						const g = c.id;
						if (O[g]) return O[g];
						const v = (O[g] = x({ client: C, controller: c }));
						return (
							v.on('afterStore', async ({ controller: f }, l) => {
								f.log.debug('controller', f), f.log.debug('store', f.store.toJSON()), await l();
							}),
							v.init(),
							v
						);
					}
					static autocomplete(c) {
						const g = c.id;
						if (O[g]) return O[g];
						const v = (O[g] = A({ client: C, controller: c }));
						return (
							v.on('afterStore', async ({ controller: f }, l) => {
								f.log.debug('controller', f), f.log.debug('store', f.store.toJSON()), await l();
							}),
							v.init(),
							v
						);
					}
					static search(c) {
						const g = c.id;
						if (O[g]) return O[g];
						const v = (O[g] = D({ client: C, controller: c }));
						return (
							v.on('afterStore', async ({ controller: f }, l) => {
								f.log.debug('controller', f), f.log.debug('store', f.store.toJSON()), await l();
							}),
							v.init(),
							v
						);
					}
				}
				function D(d) {
					const c = new p.V(new h.E({ settings: { coreType: 'query', corePrefix: d.controller.id } }), E.X);
					return new u.Tp(d.controller, {
						client: new t.K(d.client.globals, d.client.config),
						store: new o.U(d.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new R.E(),
						profiler: new _.U(),
						logger: new y.V(),
						tracker: new j.J(d.client.globals),
					});
				}
				function x(d) {
					const c = new p.V(new h.E(), E.X).detach(!0);
					return new n.c(d.controller, {
						client: new t.K(d.client.globals, d.client.config),
						store: new i.t(d.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new R.E(),
						profiler: new _.U(),
						logger: new y.V(),
						tracker: new j.J(d.client.globals),
					});
				}
				function A(d) {
					const c = new p.V(new h.E(), E.X).detach();
					return new m.Z(d.controller, {
						client: new t.K(d.client.globals, d.client.config),
						store: new r.Y(d.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new R.E(),
						profiler: new _.U(),
						logger: new y.V(),
						tracker: new j.J(d.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(I, a, e) {
				'use strict';
				e.d(a, { Z: () => n });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const m = 'prism-block',
					n = (t) => {
						const r = (0, u.li)(null);
						return (
							(0, u.vJ)(() => {
								r.current && t.className?.includes('lang-') && !t.className?.includes(m) && window?.Prism?.highlightElement(r.current);
							}, [t.className, t.children, r]),
							(0, s.Y)('code', { ...t, ref: r, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/dequal/dist/index.mjs'(I, a, e) {
				'use strict';
				e.d(a, { j: () => m });
				var s = Object.prototype.hasOwnProperty;
				function u(n, t, r) {
					for (r of n.keys()) if (m(r, t)) return r;
				}
				function m(n, t) {
					var r, o, i;
					if (n === t) return !0;
					if (n && t && (r = n.constructor) === t.constructor) {
						if (r === Date) return n.getTime() === t.getTime();
						if (r === RegExp) return n.toString() === t.toString();
						if (r === Array) {
							if ((o = n.length) === t.length) for (; o-- && m(n[o], t[o]); );
							return o === -1;
						}
						if (r === Set) {
							if (n.size !== t.size) return !1;
							for (o of n) if (((i = o), (i && typeof i == 'object' && ((i = u(t, i)), !i)) || !t.has(i))) return !1;
							return !0;
						}
						if (r === Map) {
							if (n.size !== t.size) return !1;
							for (o of n) if (((i = o[0]), (i && typeof i == 'object' && ((i = u(t, i)), !i)) || !m(o[1], t.get(i)))) return !1;
							return !0;
						}
						if (r === ArrayBuffer) (n = new Uint8Array(n)), (t = new Uint8Array(t));
						else if (r === DataView) {
							if ((o = n.byteLength) === t.byteLength) for (; o-- && n.getInt8(o) === t.getInt8(o); );
							return o === -1;
						}
						if (ArrayBuffer.isView(n)) {
							if ((o = n.byteLength) === t.byteLength) for (; o-- && n[o] === t[o]; );
							return o === -1;
						}
						if (!r || typeof n == 'object') {
							o = 0;
							for (r in n) if ((s.call(n, r) && ++o && !s.call(t, r)) || !(r in t) || !m(n[r], t[r])) return !1;
							return Object.keys(t).length === o;
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

//# sourceMappingURL=components-Templates-RecommendationGrid-RecommendationGrid-stories.9fbf47f4.iframe.bundle.js.map
