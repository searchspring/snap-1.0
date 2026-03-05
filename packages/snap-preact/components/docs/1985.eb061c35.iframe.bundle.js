'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1985],
		{
			'./components/src/components/Templates/RecommendationBundleVertical/RecommendationBundleVertical.tsx'(P, s, t) {
				t.d(s, { a: () => R });
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					l = t('../../node_modules/mobx-react-lite/es/index.js'),
					e = t('./components/src/utilities/defined.ts'),
					I = t('./components/src/utilities/mergeProps.ts'),
					u = t('./components/src/utilities/mergeStyles.ts'),
					c = t('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx');
				const a = () =>
						(0, _.AH)({
							'.ss__recommendation-bundle-vertical__wrapper': { flexDirection: 'column' },
							'.ss__recommendation-bundle-vertical__wrapper__cta': { textAlign: 'center' },
						}),
					v = 'recommendationBundleVertical',
					R = (0, l.PA)((m) => {
						const i = (0, r.u)(),
							p = { name: m.controller?.store?.profile?.tag?.toLowerCase(), ...m },
							{ treePath: M, disableStyles: T, controller: B, style: o, styleScript: d, themeStyleScript: E, ...O } = p,
							h = {
								recommendationBundle: {
									ctaInline: !1,
									carousel: { enabled: !1 },
									separatorIcon: !1,
									alias: v,
									...(0, e.s)({ disableStyles: T }),
									theme: p?.theme,
									treePath: M,
								},
							},
							b = (0, I.v6)(v, i, {}, p),
							D = (0, u.Z)(b, a);
						return (0, n.Y)(c.g, { controller: B, ...D, ...h.recommendationBundle, ...O });
					});
			},
			'./components/src/hooks/useIntersection.tsx'(P, s, t) {
				t.d(s, { v: () => _ });
				var n = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const _ = (r, l = '0px', e = !1) => {
					const [I, u] = (0, n.J0)(!1);
					return (
						(0, n.vJ)(() => {
							const c = new IntersectionObserver(
								([a]) => {
									u(a.isIntersecting), e && a.isIntersecting && c.unobserve(r.current);
								},
								{ rootMargin: l }
							);
							return (
								r.current && c.observe(r.current),
								() => {
									c.unobserve(r.current);
								}
							);
						}, []),
						I
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(P, s, t) {
				t.d(s, { v: () => r });
				var n = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const _ = 250,
					r = (e, I = {}) => {
						const { rootMargin: u = '0px', fireOnce: c = !1, threshold: a = 0, minVisibleTime: v = 0 } = I,
							[R, m] = (0, n.J0)(!1),
							i = (0, n.li)(null),
							p = (0, n.li)(null),
							[M, T] = (0, n.J0)(0),
							B = (0, n.hb)((o) => {
								(e.current = o), T((d) => d + 1);
							}, []);
						return (
							(0, n.vJ)(() => {
								m(!1);
								let o = null,
									d = null;
								if (!window.IntersectionObserver || !e.current) return;
								const E = () => {
										d && (window.clearInterval(d), (d = null));
									},
									O = () => {
										v > 0
											? ((p.current = Date.now()),
											  i.current && window.clearTimeout(i.current),
											  (i.current = window.setTimeout(() => {
													m(!0), c && e.current && o && o.unobserve(e.current);
											  }, v)))
											: (m(!0), c && e.current && o && o.unobserve(e.current));
									},
									h = () => {
										i.current && window.clearTimeout(i.current), (i.current = null), (p.current = null), m(!1);
									};
								return (
									(o = new IntersectionObserver(
										([b]) => {
											b.isIntersecting
												? e.current && l(e.current)
													? (E(), O())
													: (h(),
													  d ||
															(d = window.setInterval(() => {
																if (!e.current) {
																	E();
																	return;
																}
																l(e.current) && (E(), O());
															}, _)))
												: (E(), h());
										},
										{ rootMargin: u, threshold: a }
									)),
									e.current && o.observe(e.current),
									() => {
										m(!1), E(), i.current && window.clearTimeout(i.current), o && e.current && o.unobserve(e.current);
									}
								);
							}, [e, M]),
							{ inViewport: R, updateRef: B }
						);
					};
				function l(e) {
					return e && 'checkVisibility' in e ? e.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/utilities/createImpressionObserver.ts'(P, s, t) {
				t.d(s, { Q: () => e });
				var n = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					_ = t('./components/src/hooks/useIntersectionAdvanced.tsx');
				const r = 0.7,
					l = 1e3;
				function e(I) {
					const u = (0, n.li)(null),
						{ inViewport: c, updateRef: a } = (0, _.v)(u, { ...I, fireOnce: !0, threshold: r, minVisibleTime: l });
					return { ref: u, inViewport: c, updateRef: a };
				}
			},
			'./src/Templates/Stores/library/components/RecommendationBundleVertical.ts'(P, s, t) {
				t.r(s), t.d(s, { RecommendationBundleVertical: () => n.a });
				var n = t('./components/src/components/Templates/RecommendationBundleVertical/RecommendationBundleVertical.tsx');
			},
		},
	]);
})();
