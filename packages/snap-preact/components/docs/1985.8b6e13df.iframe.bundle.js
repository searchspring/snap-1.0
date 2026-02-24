'use strict';
(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[1985],
		{
			'./components/src/components/Templates/RecommendationBundleVertical/RecommendationBundleVertical.tsx'(E, o, t) {
				t.d(o, { a: () => c });
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = t('../../node_modules/mobx-react-lite/es/index.js'),
					a = t('./components/src/utilities/defined.ts'),
					e = t('./components/src/utilities/mergeStyles.ts'),
					_ = t('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx');
				const m = () =>
						(0, d.AH)({
							'.ss__recommendation-bundle-vertical__wrapper': { flexDirection: 'column' },
							'.ss__recommendation-bundle-vertical__wrapper__cta': { textAlign: 'center' },
						}),
					c = (0, r.PA)((l) => {
						const p = { name: l.controller?.store?.profile?.tag?.toLowerCase(), ...l },
							{ treePath: O, disableStyles: I, controller: i, style: P, styleScript: R, themeStyleScript: b, ...h } = p,
							s = {
								recommendationBundle: {
									ctaInline: !1,
									carousel: { enabled: !1 },
									separatorIcon: !1,
									alias: 'recommendationBundleVertical',
									...(0, a.s)({ disableStyles: I }),
									theme: p?.theme,
									treePath: O,
								},
							},
							u = (0, e.Z)(p, m);
						return (0, n.Y)(_.g, { controller: i, ...u, ...s.recommendationBundle, ...h });
					});
			},
			'./components/src/hooks/useIntersection.tsx'(E, o, t) {
				t.d(o, { v: () => d });
				var n = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const d = (r, a = '0px', e = !1) => {
					const [_, m] = (0, n.J0)(!1);
					return (
						(0, n.vJ)(() => {
							const c = new IntersectionObserver(
								([l]) => {
									m(l.isIntersecting), e && l.isIntersecting && c.unobserve(r.current);
								},
								{ rootMargin: a }
							);
							return (
								r.current && c.observe(r.current),
								() => {
									c.unobserve(r.current);
								}
							);
						}, []),
						_
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(E, o, t) {
				t.d(o, { v: () => r });
				var n = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const d = 250,
					r = (e, _ = {}) => {
						const { rootMargin: m = '0px', fireOnce: c = !1, threshold: l = 0, minVisibleTime: p = 0 } = _,
							[O, I] = (0, n.J0)(!1),
							i = (0, n.li)(null),
							P = (0, n.li)(null),
							[R, b] = (0, n.J0)(0),
							h = (0, n.hb)((s) => {
								(e.current = s), b((u) => u + 1);
							}, []);
						return (
							(0, n.vJ)(() => {
								I(!1);
								let s = null,
									u = null;
								if (!window.IntersectionObserver || !e.current) return;
								const v = () => {
										u && (window.clearInterval(u), (u = null));
									},
									B = () => {
										p > 0
											? ((P.current = Date.now()),
											  i.current && window.clearTimeout(i.current),
											  (i.current = window.setTimeout(() => {
													I(!0), c && e.current && s && s.unobserve(e.current);
											  }, p)))
											: (I(!0), c && e.current && s && s.unobserve(e.current));
									},
									T = () => {
										i.current && window.clearTimeout(i.current), (i.current = null), (P.current = null), I(!1);
									};
								return (
									(s = new IntersectionObserver(
										([M]) => {
											M.isIntersecting
												? e.current && a(e.current)
													? (v(), B())
													: (T(),
													  u ||
															(u = window.setInterval(() => {
																if (!e.current) {
																	v();
																	return;
																}
																a(e.current) && (v(), B());
															}, d)))
												: (v(), T());
										},
										{ rootMargin: m, threshold: l }
									)),
									e.current && s.observe(e.current),
									() => {
										I(!1), v(), i.current && window.clearTimeout(i.current), s && e.current && s.unobserve(e.current);
									}
								);
							}, [e, R]),
							{ inViewport: O, updateRef: h }
						);
					};
				function a(e) {
					return e && 'checkVisibility' in e ? e.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/utilities/createImpressionObserver.ts'(E, o, t) {
				t.d(o, { Q: () => e });
				var n = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					d = t('./components/src/hooks/useIntersectionAdvanced.tsx');
				const r = 0.7,
					a = 1e3;
				function e(_) {
					const m = (0, n.li)(null),
						{ inViewport: c, updateRef: l } = (0, d.v)(m, { ..._, fireOnce: !0, threshold: r, minVisibleTime: a });
					return { ref: m, inViewport: c, updateRef: l };
				}
			},
			'./src/Templates/Stores/library/components/RecommendationBundleVertical.ts'(E, o, t) {
				t.r(o), t.d(o, { RecommendationBundleVertical: () => n.a });
				var n = t('./components/src/components/Templates/RecommendationBundleVertical/RecommendationBundleVertical.tsx');
			},
		},
	]);
})();
