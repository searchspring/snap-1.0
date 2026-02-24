'use strict';
(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[7814],
		{
			'./components/src/components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.tsx'(v, o, t) {
				t.d(o, { F: () => c });
				var n = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = t('../../node_modules/mobx-react-lite/es/index.js'),
					u = t('./components/src/utilities/defined.ts'),
					e = t('./components/src/utilities/mergeStyles.ts'),
					_ = t('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx');
				const a = () => (0, m.AH)({ '.ss__recommendation-bundle-easy-add__wrapper__cta': { textAlign: 'center' } }),
					c = (0, r.PA)((l) => {
						const E = { name: l.controller?.store?.profile?.tag?.toLowerCase(), ...l },
							{ treePath: h, disableStyles: I, controller: i, style: O, styleScript: B, themeStyleScript: R, ...P } = E,
							s = {
								recommendationBundle: {
									hideCheckboxes: !0,
									seedText: '',
									ctaButtonText: 'Add Both',
									ctaInline: !1,
									hideSeed: !0,
									alias: 'recommendationBundleEasyAdd',
									limit: 1,
									carousel: { enabled: !1 },
									separatorIcon: !1,
									...(0, u.s)({ disableStyles: I }),
									theme: E?.theme,
									treePath: h,
								},
							},
							d = (0, e.Z)(E, a);
						return (0, n.Y)(_.g, { controller: i, ...d, ...s.recommendationBundle, ...P });
					});
			},
			'./components/src/hooks/useIntersection.tsx'(v, o, t) {
				t.d(o, { v: () => m });
				var n = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const m = (r, u = '0px', e = !1) => {
					const [_, a] = (0, n.J0)(!1);
					return (
						(0, n.vJ)(() => {
							const c = new IntersectionObserver(
								([l]) => {
									a(l.isIntersecting), e && l.isIntersecting && c.unobserve(r.current);
								},
								{ rootMargin: u }
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
			'./components/src/hooks/useIntersectionAdvanced.tsx'(v, o, t) {
				t.d(o, { v: () => r });
				var n = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const m = 250,
					r = (e, _ = {}) => {
						const { rootMargin: a = '0px', fireOnce: c = !1, threshold: l = 0, minVisibleTime: E = 0 } = _,
							[h, I] = (0, n.J0)(!1),
							i = (0, n.li)(null),
							O = (0, n.li)(null),
							[B, R] = (0, n.J0)(0),
							P = (0, n.hb)((s) => {
								(e.current = s), R((d) => d + 1);
							}, []);
						return (
							(0, n.vJ)(() => {
								I(!1);
								let s = null,
									d = null;
								if (!window.IntersectionObserver || !e.current) return;
								const p = () => {
										d && (window.clearInterval(d), (d = null));
									},
									T = () => {
										E > 0
											? ((O.current = Date.now()),
											  i.current && window.clearTimeout(i.current),
											  (i.current = window.setTimeout(() => {
													I(!0), c && e.current && s && s.unobserve(e.current);
											  }, E)))
											: (I(!0), c && e.current && s && s.unobserve(e.current));
									},
									b = () => {
										i.current && window.clearTimeout(i.current), (i.current = null), (O.current = null), I(!1);
									};
								return (
									(s = new IntersectionObserver(
										([A]) => {
											A.isIntersecting
												? e.current && u(e.current)
													? (p(), T())
													: (b(),
													  d ||
															(d = window.setInterval(() => {
																if (!e.current) {
																	p();
																	return;
																}
																u(e.current) && (p(), T());
															}, m)))
												: (p(), b());
										},
										{ rootMargin: a, threshold: l }
									)),
									e.current && s.observe(e.current),
									() => {
										I(!1), p(), i.current && window.clearTimeout(i.current), s && e.current && s.unobserve(e.current);
									}
								);
							}, [e, B]),
							{ inViewport: h, updateRef: P }
						);
					};
				function u(e) {
					return e && 'checkVisibility' in e ? e.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/utilities/createImpressionObserver.ts'(v, o, t) {
				t.d(o, { Q: () => e });
				var n = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = t('./components/src/hooks/useIntersectionAdvanced.tsx');
				const r = 0.7,
					u = 1e3;
				function e(_) {
					const a = (0, n.li)(null),
						{ inViewport: c, updateRef: l } = (0, m.v)(a, { ..._, fireOnce: !0, threshold: r, minVisibleTime: u });
					return { ref: a, inViewport: c, updateRef: l };
				}
			},
			'./src/Templates/Stores/library/components/RecommendationBundleEasyAdd.ts'(v, o, t) {
				t.r(o), t.d(o, { RecommendationBundleEasyAdd: () => n.F });
				var n = t('./components/src/components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.tsx');
			},
		},
	]);
})();
