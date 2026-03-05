'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1059],
		{
			'./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx'(R, m, t) {
				t.d(m, { q: () => T });
				var r = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = t('../../node_modules/mobx-react-lite/es/index.js'),
					c = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = t('../../node_modules/classnames/index.js'),
					e = t.n(s),
					o = t('../../node_modules/deepmerge/dist/cjs.js'),
					n = t.n(o),
					i = t('./components/src/components/Molecules/Result/Result.tsx'),
					P = t('./components/src/utilities/defined.ts'),
					h = t('./components/src/utilities/mergeProps.ts'),
					p = t('./components/src/utilities/mergeStyles.ts'),
					f = t('./components/src/providers/cache.tsx'),
					u = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					v = t('./components/src/providers/treePath.tsx'),
					g = t('./components/src/hooks/useDisplaySettings.tsx'),
					A = t('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					C = t('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					a = t('../../node_modules/preact/compat/dist/compat.module.js'),
					M = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					D = t('./components/src/hooks/useIntersection.tsx');
				const L = ({ gapSize: O, columns: x }) =>
						(0, c.AH)({
							maxWidth: '100%',
							maxHeight: '100%',
							'.ss__recommendation-grid__results': {
								display: 'flex',
								flexFlow: 'row wrap',
								gap: O,
								gridTemplateRows: 'auto',
								gridTemplateColumns: `repeat(${x}, 1fr)`,
								overflow: 'auto',
								'@supports (display: grid)': { display: 'grid' },
							},
						}),
					T = (0, d.PA)((O) => {
						const x = (0, u.u)(),
							y = (0, v.LU)(),
							B = {
								results: O.controller?.store?.results,
								gapSize: '20px',
								title: O.controller?.store?.profile?.display?.templateParameters?.title,
								treePath: y,
							},
							U = { name: O.controller?.store?.profile?.tag?.toLowerCase(), ...O };
						let l = (0, h.v6)('recommendationGrid', x, B, U);
						if (!O.theme?.name) {
							const E = (0, g.X)(l?.breakpoints || {}),
								W = n()(l?.theme || {}, E?.theme || {}, { arrayMerge: (X, Q) => Q });
							l = { ...l, ...E, theme: W };
						}
						const {
								disableStyles: N,
								title: j,
								resultComponent: k,
								trim: S,
								lazyRender: Y,
								className: G,
								internalClassName: z,
								treePath: w,
								theme: H,
								controller: I,
							} = l,
							K = { enabled: !0, offset: '10%', ...Y },
							b = { result: { internalClassName: 'ss__recommendation-grid__result', ...(0, P.s)({ disableStyles: N }), theme: l?.theme } };
						let _ = l.results || I.store.results;
						if (!l.columns && !l.rows) (l.rows = 1), (l.columns = _.length);
						else if (l.columns && !l.rows) {
							if (((l.rows = Math.floor(_.length / l.columns)), S)) {
								const E = _.length % l.columns;
								_ = _.slice(0, _.length - E);
							}
						} else if (l.rows && !l.columns) {
							if (S) {
								const E = _.length % l.rows;
								_ = _.slice(0, _.length - E);
							}
							l.columns = Math.ceil(_.length / l.rows);
						} else l?.columns && l?.rows && l.columns > 0 && l.rows > 0 && (_ = _?.slice(0, l.columns * l.rows));
						const J = (0, p.Z)(l, L),
							[$, F] = (0, a.useState)(!1),
							V = (0, M.li)(null);
						return (
							(!K?.enabled || (0, D.v)(V, `${K.offset} 0px ${K.offset} 0px`, !0)) && F(!0),
							_?.length
								? (0, r.Y)(f._, {
										children: (0, r.Y)('div', {
											...J,
											ref: V,
											className: e()('ss__recommendation-grid', G, z),
											children: $
												? (0, r.FD)(A.l, {
														controller: I,
														children: [
															j && (0, r.Y)('h3', { className: 'ss__recommendation-grid__title', children: j }),
															(0, r.Y)('div', {
																className: 'ss__recommendation-grid__results',
																children: _.map((E) =>
																	(() => {
																		if (k && I) {
																			const W = k;
																			return (0, r.Y)(W, { controller: I, result: E, theme: H, treePath: w });
																		} else
																			return (0, r.Y)(C.o, {
																				result: E,
																				controller: I,
																				children: (0, r.Y)(i.Q, { ...b.result, result: E, controller: I, treePath: w }, E.id),
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
								: null
						);
					});
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(R, m, t) {
				t.d(m, { l: () => P });
				var r = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = t('../../node_modules/preact/dist/preact.module.js'),
					c = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = t('../../node_modules/mobx-react-lite/es/index.js'),
					e = t('../../node_modules/classnames/index.js'),
					o = t.n(e),
					n = t('./components/src/utilities/mergeStyles.ts');
				const i = () => (0, c.AH)({}),
					P = (0, s.PA)((h) => {
						const { children: p, className: f, internalClassName: u } = h,
							v = (0, d.v2)(p),
							g = (0, n.Z)(h, i);
						return v.length ? (0, r.Y)('div', { className: o()('ss__recommendation-profile-tracker', f, u), ...g, children: p }) : null;
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(R, m, t) {
				t.d(m, { o: () => h });
				var r = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = t('../../node_modules/mobx-react-lite/es/index.js'),
					s = t('../../node_modules/classnames/index.js'),
					e = t.n(s),
					o = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					n = t('./components/src/utilities/mergeProps.ts'),
					i = t('./components/src/utilities/createImpressionObserver.ts');
				const P = { ResultTracker: () => (0, d.AH)({}) },
					h = (0, c.PA)((p) => {
						const f = (0, o.u)(),
							u = (0, n.v6)('resultTracker', f, {}, p),
							v = { impression: !0, click: !0 },
							{ children: g, result: A, track: C, controller: a, className: M, internalClassName: D, disableStyles: L, style: T } = u,
							O = { ...v, ...C },
							{ ref: x, inViewport: y } = (0, i.Q)();
						y && O.impression && a?.track.product.impression(A);
						const B = {};
						return (
							L ? T && (B.css = [T]) : (B.css = [P.ResultTracker(), T]),
							(0, r.Y)('div', {
								className: e()('ss__result-tracker', `ss__${a?.type}-result-tracker`, M, D),
								onClick: (U) => {
									O.click && a?.track.product.click(U, A);
								},
								ref: x,
								...B,
								children: g,
							})
						);
					});
			},
			'./components/src/hooks/useIntersection.tsx'(R, m, t) {
				t.d(m, { v: () => d });
				var r = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const d = (c, s = '0px', e = !1) => {
					const [o, n] = (0, r.J0)(!1);
					return (
						(0, r.vJ)(() => {
							const i = new IntersectionObserver(
								([P]) => {
									n(P.isIntersecting), e && P.isIntersecting && i.unobserve(c.current);
								},
								{ rootMargin: s }
							);
							return (
								c.current && i.observe(c.current),
								() => {
									i.unobserve(c.current);
								}
							);
						}, []),
						o
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(R, m, t) {
				t.d(m, { v: () => c });
				var r = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const d = 250,
					c = (e, o = {}) => {
						const { rootMargin: n = '0px', fireOnce: i = !1, threshold: P = 0, minVisibleTime: h = 0 } = o,
							[p, f] = (0, r.J0)(!1),
							u = (0, r.li)(null),
							v = (0, r.li)(null),
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
										h > 0
											? ((v.current = Date.now()),
											  u.current && window.clearTimeout(u.current),
											  (u.current = window.setTimeout(() => {
													f(!0), i && e.current && a && a.unobserve(e.current);
											  }, h)))
											: (f(!0), i && e.current && a && a.unobserve(e.current));
									},
									T = () => {
										u.current && window.clearTimeout(u.current), (u.current = null), (v.current = null), f(!1);
									};
								return (
									(a = new IntersectionObserver(
										([O]) => {
											O.isIntersecting
												? e.current && s(e.current)
													? (D(), L())
													: (T(),
													  M ||
															(M = window.setInterval(() => {
																if (!e.current) {
																	D();
																	return;
																}
																s(e.current) && (D(), L());
															}, d)))
												: (D(), T());
										},
										{ rootMargin: n, threshold: P }
									)),
									e.current && a.observe(e.current),
									() => {
										f(!1), D(), u.current && window.clearTimeout(u.current), a && e.current && a.unobserve(e.current);
									}
								);
							}, [e, g]),
							{ inViewport: p, updateRef: C }
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
				const c = 0.7,
					s = 1e3;
				function e(o) {
					const n = (0, r.li)(null),
						{ inViewport: i, updateRef: P } = (0, d.v)(n, { ...o, fireOnce: !0, threshold: c, minVisibleTime: s });
					return { ref: n, inViewport: i, updateRef: P };
				}
			},
			'./src/Templates/Stores/library/components/RecommendationGrid.ts'(R, m, t) {
				t.r(m), t.d(m, { RecommendationGrid: () => r.q });
				var r = t('./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx');
			},
			'../../node_modules/dequal/dist/index.mjs'(R, m, t) {
				t.d(m, { j: () => c });
				var r = Object.prototype.hasOwnProperty;
				function d(s, e, o) {
					for (o of s.keys()) if (c(o, e)) return o;
				}
				function c(s, e) {
					var o, n, i;
					if (s === e) return !0;
					if (s && e && (o = s.constructor) === e.constructor) {
						if (o === Date) return s.getTime() === e.getTime();
						if (o === RegExp) return s.toString() === e.toString();
						if (o === Array) {
							if ((n = s.length) === e.length) for (; n-- && c(s[n], e[n]); );
							return n === -1;
						}
						if (o === Set) {
							if (s.size !== e.size) return !1;
							for (n of s) if (((i = n), (i && typeof i == 'object' && ((i = d(e, i)), !i)) || !e.has(i))) return !1;
							return !0;
						}
						if (o === Map) {
							if (s.size !== e.size) return !1;
							for (n of s) if (((i = n[0]), (i && typeof i == 'object' && ((i = d(e, i)), !i)) || !c(n[1], e.get(i)))) return !1;
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
							for (o in s) if ((r.call(s, o) && ++n && !r.call(e, o)) || !(o in e) || !c(s[o], e[o])) return !1;
							return Object.keys(e).length === n;
						}
					}
					return s !== s && e !== e;
				}
			},
		},
	]);
})();
