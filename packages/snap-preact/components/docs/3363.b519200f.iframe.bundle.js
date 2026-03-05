'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[3363],
		{
			'./components/src/hooks/useIntersection.tsx'(v, r, n) {
				n.d(r, { v: () => m });
				var t = n('../../node_modules/preact/hooks/dist/hooks.module.js');
				const m = (o, l = '0px', e = !1) => {
					const [I, d] = (0, t.J0)(!1);
					return (
						(0, t.vJ)(() => {
							const c = new IntersectionObserver(
								([a]) => {
									d(a.isIntersecting), e && a.isIntersecting && c.unobserve(o.current);
								},
								{ rootMargin: l }
							);
							return (
								o.current && c.observe(o.current),
								() => {
									c.unobserve(o.current);
								}
							);
						}, []),
						I
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(v, r, n) {
				n.d(r, { v: () => o });
				var t = n('../../node_modules/preact/hooks/dist/hooks.module.js');
				const m = 250,
					o = (e, I = {}) => {
						const { rootMargin: d = '0px', fireOnce: c = !1, threshold: a = 0, minVisibleTime: h = 0 } = I,
							[T, _] = (0, t.J0)(!1),
							i = (0, t.li)(null),
							b = (0, t.li)(null),
							[f, w] = (0, t.J0)(0),
							R = (0, t.hb)((s) => {
								(e.current = s), w((u) => u + 1);
							}, []);
						return (
							(0, t.vJ)(() => {
								_(!1);
								let s = null,
									u = null;
								if (!window.IntersectionObserver || !e.current) return;
								const p = () => {
										u && (window.clearInterval(u), (u = null));
									},
									E = () => {
										h > 0
											? ((b.current = Date.now()),
											  i.current && window.clearTimeout(i.current),
											  (i.current = window.setTimeout(() => {
													_(!0), c && e.current && s && s.unobserve(e.current);
											  }, h)))
											: (_(!0), c && e.current && s && s.unobserve(e.current));
									},
									O = () => {
										i.current && window.clearTimeout(i.current), (i.current = null), (b.current = null), _(!1);
									};
								return (
									(s = new IntersectionObserver(
										([k]) => {
											k.isIntersecting
												? e.current && l(e.current)
													? (p(), E())
													: (O(),
													  u ||
															(u = window.setInterval(() => {
																if (!e.current) {
																	p();
																	return;
																}
																l(e.current) && (p(), E());
															}, m)))
												: (p(), O());
										},
										{ rootMargin: d, threshold: a }
									)),
									e.current && s.observe(e.current),
									() => {
										_(!1), p(), i.current && window.clearTimeout(i.current), s && e.current && s.unobserve(e.current);
									}
								);
							}, [e, f]),
							{ inViewport: T, updateRef: R }
						);
					};
				function l(e) {
					return e && 'checkVisibility' in e ? e.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/utilities/createImpressionObserver.ts'(v, r, n) {
				n.d(r, { Q: () => e });
				var t = n('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = n('./components/src/hooks/useIntersectionAdvanced.tsx');
				const o = 0.7,
					l = 1e3;
				function e(I) {
					const d = (0, t.li)(null),
						{ inViewport: c, updateRef: a } = (0, m.v)(d, { ...I, fireOnce: !0, threshold: o, minVisibleTime: l });
					return { ref: d, inViewport: c, updateRef: a };
				}
			},
			'./src/Templates/Stores/library/components/RecommendationBundle.ts'(v, r, n) {
				n.r(r), n.d(r, { RecommendationBundle: () => t.g });
				var t = n('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx');
			},
		},
	]);
})();
