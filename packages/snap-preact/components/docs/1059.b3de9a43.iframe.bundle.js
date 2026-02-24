'use strict';
(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[1059],
		{
			'./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx'(R, m, t) {
				t.d(m, { q: () => v });
				var r = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = t('../../node_modules/preact/dist/preact.module.js'),
					l = t('../../node_modules/mobx-react-lite/es/index.js'),
					s = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					e = t('../../node_modules/classnames/index.js'),
					o = t.n(e),
					n = t('../../node_modules/deepmerge/dist/cjs.js'),
					c = t.n(n),
					P = t('./components/src/components/Molecules/Result/Result.tsx'),
					p = t('./components/src/utilities/defined.ts'),
					T = t('./components/src/utilities/mergeProps.ts'),
					f = t('./components/src/utilities/mergeStyles.ts'),
					u = t('./components/src/providers/cache.tsx'),
					h = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					g = t('./components/src/hooks/useDisplaySettings.tsx'),
					A = t('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					C = t('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					a = t('../../node_modules/preact/compat/dist/compat.module.js'),
					M = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					D = t('./components/src/hooks/useIntersection.tsx');
				const L = ({ gapSize: O, columns: B }) =>
						(0, s.AH)({
							maxWidth: '100%',
							maxHeight: '100%',
							'.ss__recommendation-grid__results': {
								display: 'flex',
								flexFlow: 'row wrap',
								gap: O,
								gridTemplateRows: 'auto',
								gridTemplateColumns: `repeat(${B}, 1fr)`,
								overflow: 'auto',
								'@supports (display: grid)': { display: 'grid' },
							},
						}),
					v = (0, l.PA)((O) => {
						const B = (0, h.u)(),
							y = { results: O.controller?.store?.results, gapSize: '20px', title: O.controller?.store?.profile?.display?.templateParameters?.title },
							x = { name: O.controller?.store?.profile?.tag?.toLowerCase(), ...O };
						let i = (0, T.v6)('recommendationGrid', B, y, x);
						if (!O.theme?.name) {
							const E = (0, g.X)(i?.breakpoints || {}),
								U = c()(i?.theme || {}, E?.theme || {}, { arrayMerge: (Z, $) => $ });
							i = { ...i, ...E, theme: U };
						}
						const {
								disableStyles: w,
								title: W,
								resultComponent: j,
								trim: k,
								lazyRender: V,
								className: N,
								internalClassName: Y,
								treePath: G,
								theme: z,
								controller: I,
							} = i,
							K = { enabled: !0, offset: '10%', ...V },
							H = { result: { internalClassName: 'ss__recommendation-grid__result', ...(0, p.s)({ disableStyles: w }), theme: i?.theme } };
						let _ = i.results || I.store.results;
						if (!i.columns && !i.rows) (i.rows = 1), (i.columns = _.length);
						else if (i.columns && !i.rows) {
							if (((i.rows = Math.floor(_.length / i.columns)), k)) {
								const E = _.length % i.columns;
								_ = _.slice(0, _.length - E);
							}
						} else if (i.rows && !i.columns) {
							if (k) {
								const E = _.length % i.rows;
								_ = _.slice(0, _.length - E);
							}
							i.columns = Math.ceil(_.length / i.rows);
						} else i?.columns && i?.rows && i.columns > 0 && i.rows > 0 && (_ = _?.slice(0, i.columns * i.rows));
						const b = (0, f.Z)(i, L),
							[F, J] = (0, a.useState)(!1),
							S = (0, M.li)(null);
						return (
							(!K?.enabled || (0, D.v)(S, `${K.offset} 0px ${K.offset} 0px`, !0)) && J(!0),
							_?.length
								? (0, r.Y)(u._, {
										children: (0, r.Y)('div', {
											...b,
											ref: S,
											className: o()('ss__recommendation-grid', N, Y),
											children: F
												? (0, r.FD)(A.l, {
														controller: I,
														children: [
															W && (0, r.Y)('h3', { className: 'ss__recommendation-grid__title', children: W }),
															(0, r.Y)('div', {
																className: 'ss__recommendation-grid__results',
																children: _.map((E) =>
																	(() => {
																		if (j && I) {
																			const U = j;
																			return (0, r.Y)(U, { controller: I, result: E, theme: z, treePath: G });
																		} else
																			return (0, r.Y)(C.o, {
																				result: E,
																				controller: I,
																				children: (0, r.Y)(P.Q, { ...H.result, result: E, controller: I }, E.id),
																			});
																	})()
																),
															}),
														],
												  })
												: (0, r.Y)(A.l, {
														controller: I,
														children: _.map((E) => (0, r.Y)(C.o, { controller: I, result: E, children: (0, r.Y)(r.FK, {}) })),
												  }),
										}),
								  })
								: (0, r.Y)(d.FK, {})
						);
					});
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(R, m, t) {
				t.d(m, { l: () => P });
				var r = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = t('../../node_modules/preact/dist/preact.module.js'),
					l = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = t('../../node_modules/mobx-react-lite/es/index.js'),
					e = t('../../node_modules/classnames/index.js'),
					o = t.n(e),
					n = t('./components/src/utilities/mergeStyles.ts');
				const c = () => (0, l.AH)({}),
					P = (0, s.PA)((p) => {
						const { children: T, className: f, internalClassName: u } = p,
							h = (0, d.v2)(T),
							g = (0, n.Z)(p, c);
						return h.length ? (0, r.Y)('div', { className: o()('ss__recommendation-profile-tracker', f, u), ...g, children: T }) : (0, r.Y)(d.FK, {});
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(R, m, t) {
				t.d(m, { o: () => p });
				var r = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = t('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
					s = t('../../node_modules/classnames/index.js'),
					e = t.n(s),
					o = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					n = t('./components/src/utilities/mergeProps.ts'),
					c = t('./components/src/utilities/createImpressionObserver.ts');
				const P = { ResultTracker: () => (0, d.AH)({}) },
					p = (0, l.PA)((T) => {
						const f = (0, o.u)(),
							u = (0, n.v6)('resultTracker', f, {}, T),
							h = { impression: !0, click: !0 },
							{ children: g, result: A, track: C, controller: a, className: M, internalClassName: D, disableStyles: L, style: v } = u,
							O = { ...h, ...C },
							{ ref: B, inViewport: y } = (0, c.Q)();
						y && O.impression && a?.track.product.impression(A);
						const x = {};
						return (
							L ? v && (x.css = [v]) : (x.css = [P.ResultTracker(), v]),
							(0, r.Y)('div', {
								className: e()('ss__result-tracker', `ss__${a?.type}-result-tracker`, M, D),
								onClick: (i) => {
									O.click && a?.track.product.click(i, A);
								},
								ref: B,
								...x,
								children: g,
							})
						);
					});
			},
			'./components/src/hooks/useIntersection.tsx'(R, m, t) {
				t.d(m, { v: () => d });
				var r = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const d = (l, s = '0px', e = !1) => {
					const [o, n] = (0, r.J0)(!1);
					return (
						(0, r.vJ)(() => {
							const c = new IntersectionObserver(
								([P]) => {
									n(P.isIntersecting), e && P.isIntersecting && c.unobserve(l.current);
								},
								{ rootMargin: s }
							);
							return (
								l.current && c.observe(l.current),
								() => {
									c.unobserve(l.current);
								}
							);
						}, []),
						o
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(R, m, t) {
				t.d(m, { v: () => l });
				var r = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const d = 250,
					l = (e, o = {}) => {
						const { rootMargin: n = '0px', fireOnce: c = !1, threshold: P = 0, minVisibleTime: p = 0 } = o,
							[T, f] = (0, r.J0)(!1),
							u = (0, r.li)(null),
							h = (0, r.li)(null),
							[g, A] = (0, r.J0)(0),
							C = (0, r.hb)((a) => {
								(e.current = a), A((M) => M + 1);
							}, []);
						return (
							(0, r.vJ)(() => {
								f(!1);
								let a = null,
									M = null;
								if (!window.IntersectionObserver || !e.current) return;
								const D = () => {
										M && (window.clearInterval(M), (M = null));
									},
									L = () => {
										p > 0
											? ((h.current = Date.now()),
											  u.current && window.clearTimeout(u.current),
											  (u.current = window.setTimeout(() => {
													f(!0), c && e.current && a && a.unobserve(e.current);
											  }, p)))
											: (f(!0), c && e.current && a && a.unobserve(e.current));
									},
									v = () => {
										u.current && window.clearTimeout(u.current), (u.current = null), (h.current = null), f(!1);
									};
								return (
									(a = new IntersectionObserver(
										([O]) => {
											O.isIntersecting
												? e.current && s(e.current)
													? (D(), L())
													: (v(),
													  M ||
															(M = window.setInterval(() => {
																if (!e.current) {
																	D();
																	return;
																}
																s(e.current) && (D(), L());
															}, d)))
												: (D(), v());
										},
										{ rootMargin: n, threshold: P }
									)),
									e.current && a.observe(e.current),
									() => {
										f(!1), D(), u.current && window.clearTimeout(u.current), a && e.current && a.unobserve(e.current);
									}
								);
							}, [e, g]),
							{ inViewport: T, updateRef: C }
						);
					};
				function s(e) {
					return e && 'checkVisibility' in e ? e.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/utilities/createImpressionObserver.ts'(R, m, t) {
				t.d(m, { Q: () => e });
				var r = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					d = t('./components/src/hooks/useIntersectionAdvanced.tsx');
				const l = 0.7,
					s = 1e3;
				function e(o) {
					const n = (0, r.li)(null),
						{ inViewport: c, updateRef: P } = (0, d.v)(n, { ...o, fireOnce: !0, threshold: l, minVisibleTime: s });
					return { ref: n, inViewport: c, updateRef: P };
				}
			},
			'./src/Templates/Stores/library/components/RecommendationGrid.ts'(R, m, t) {
				t.r(m), t.d(m, { RecommendationGrid: () => r.q });
				var r = t('./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx');
			},
			'../../node_modules/dequal/dist/index.mjs'(R, m, t) {
				t.d(m, { j: () => l });
				var r = Object.prototype.hasOwnProperty;
				function d(s, e, o) {
					for (o of s.keys()) if (l(o, e)) return o;
				}
				function l(s, e) {
					var o, n, c;
					if (s === e) return !0;
					if (s && e && (o = s.constructor) === e.constructor) {
						if (o === Date) return s.getTime() === e.getTime();
						if (o === RegExp) return s.toString() === e.toString();
						if (o === Array) {
							if ((n = s.length) === e.length) for (; n-- && l(s[n], e[n]); );
							return n === -1;
						}
						if (o === Set) {
							if (s.size !== e.size) return !1;
							for (n of s) if (((c = n), (c && typeof c == 'object' && ((c = d(e, c)), !c)) || !e.has(c))) return !1;
							return !0;
						}
						if (o === Map) {
							if (s.size !== e.size) return !1;
							for (n of s) if (((c = n[0]), (c && typeof c == 'object' && ((c = d(e, c)), !c)) || !l(n[1], e.get(c)))) return !1;
							return !0;
						}
						if (o === ArrayBuffer) (s = new Uint8Array(s)), (e = new Uint8Array(e));
						else if (o === DataView) {
							if ((n = s.byteLength) === e.byteLength) for (; n-- && s.getInt8(n) === e.getInt8(n); );
							return n === -1;
						}
						if (ArrayBuffer.isView(s)) {
							if ((n = s.byteLength) === e.byteLength) for (; n-- && s[n] === e[n]; );
							return n === -1;
						}
						if (!o || typeof s == 'object') {
							n = 0;
							for (o in s) if ((r.call(s, o) && ++n && !r.call(e, o)) || !(o in e) || !l(s[o], e[o])) return !1;
							return Object.keys(e).length === n;
						}
					}
					return s !== s && e !== e;
				}
			},
		},
	]);
})();
