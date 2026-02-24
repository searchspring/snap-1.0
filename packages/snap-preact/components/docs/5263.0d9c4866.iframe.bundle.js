'use strict';
(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[5263],
		{
			'./components/src/components/Templates/RecommendationBundleList/RecommendationBundleList.tsx'(M, c, t) {
				t.d(c, { X: () => D, a: () => A });
				var e = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					I = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = t('../../node_modules/mobx-react-lite/es/index.js'),
					p = t('./components/src/utilities/defined.ts'),
					s = t('./components/src/utilities/mergeStyles.ts'),
					P = t('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'),
					m = t('./components/src/components/Atoms/Price/Price.tsx'),
					i = t('./components/src/components/Atoms/Button/Button.tsx'),
					d = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					B = t('./components/src/components/Atoms/Image/Image.tsx'),
					f = t('./components/src/components/Molecules/Result/Result.tsx'),
					E = t('./components/src/utilities/componentNameToClassName.ts'),
					l = t('../../node_modules/classnames/index.js'),
					g = t.n(l),
					C = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					L = t('../../node_modules/deepmerge/dist/cjs.js'),
					w = t.n(L),
					r = t('./components/src/hooks/useLang.tsx');
				const u = () =>
						(0, I.AH)({
							'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper': {
								display: 'flex',
								'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper__checkbox': { position: 'relative', minWidth: '20px' },
								'.ss__result__details': { textAlign: 'left' },
							},
							'.ss__recommendation-profile-tracker': { display: 'flex', flexDirection: 'column' },
							'.ss__recommendation-bundle-list__wrapper': { order: '3' },
							'.ss__recommendation-bundle-list__wrapper__cta': {
								order: '2',
								'.ss__button': { cursor: 'pointer', border: '1px solid black' },
								'.ss__recommendation-bundle-list__wrapper__cta__inner__images': { display: 'flex', flexDirection: 'row' },
								'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper .ss__icon': {
									top: '50%',
									position: 'absolute',
									right: '-0.5em',
								},
								'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper:last-of-type .ss__icon': { display: 'none' },
								'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper': { padding: '0px 15px', position: 'relative' },
							},
						}),
					h = 'recommendationBundleList',
					A = (0, _.PA)((n) => {
						const a = { name: n.controller?.store?.profile?.tag?.toLowerCase(), ...n },
							{ treePath: o, disableStyles: T, controller: R, style: O, styleScript: N, themeStyleScript: x, ...v } = a,
							b = {
								recommendationBundle: {
									seedText: '',
									ctaInline: !1,
									limit: 5,
									preselectedCount: 2,
									carousel: { enabled: !1, seedInCarousel: !0 },
									ctaSlot: (S) => (0, e.Y)(D, { ...S }),
									resultComponent: (S) => (0, e.Y)(f.Q, { hideImage: !0, hideBadge: !0, ...S }),
									vertical: !0,
									separatorIcon: !1,
									alias: h,
									...(0, p.s)({ disableStyles: T }),
									theme: a?.theme,
									treePath: o,
								},
							},
							K = (0, s.Z)(a, u);
						return (0, e.Y)(P.g, { controller: R, ...K, ...b.recommendationBundle, ...v });
					}),
					D = (0, _.PA)((n) => {
						const a = n.cartStore,
							o = `ss__${(0, E.b)(h)}`;
						n.onAddToCart = (v) => {
							R(!0), n.onAddToCart(v), setTimeout(() => R(!1), n.ctaButtonSuccessTimeout);
						};
						const [T, R] = (0, C.J0)(!1);
						n.addedToCart = T;
						const O = {
								image: { className: `${o}__wrapper__cta__image`, theme: n?.theme, treePath: n.treePath },
								separatorIcon: {
									name: 'bundle-cart-separator',
									className: `${o}__wrapper__cta__icon--separator`,
									icon: 'plus',
									size: 12,
									theme: n?.theme,
									treePath: n.treePath,
								},
								icon: { name: 'bundle-cart', className: `${o}__wrapper__cta__icon`, size: 50, theme: n?.theme, treePath: n.treePath },
								subtotalStrike: { name: 'bundle-msrp', className: `${o}__wrapper__cta__price--strike`, theme: n?.theme, treePath: n.treePath },
								subtotalPrice: { className: `${o}__wrapper__cta__price`, name: 'bundle-price', theme: n?.theme, treePath: n.treePath },
								button: { className: `${o}__wrapper__cta__button`, theme: n?.theme, treePath: n.treePath },
							},
							N = w()({}, n.lang || {}),
							x = (0, r.u)(N, {});
						return (0, e.FD)('div', {
							className: `${o}__wrapper__cta`,
							children: [
								(0, e.FD)('div', {
									className: `${o}__wrapper__cta__inner`,
									children: [
										(0, e.Y)('div', {
											className: `${o}__wrapper__cta__inner__images`,
											children: a.items.map((v) => {
												const b = v.display.mappings.core;
												return (0, e.FD)('div', {
													className: `${o}__wrapper__cta__inner__image-wrapper`,
													children: [
														(0, e.Y)('a', { href: b.url, children: (0, e.Y)(B._, { src: b.thumbnailImageUrl, alt: b.name, lazy: !1 }) }),
														(0, e.Y)(d.I, { ...O.separatorIcon }),
													],
												});
											}),
										}),
										(0, e.FD)('div', {
											className: `${o}__wrapper__cta__subtotal`,
											'aria-atomic': 'false',
											'aria-live': 'polite',
											children: [
												n.ctaIcon
													? (0, e.Y)('div', {
															className: `${o}__wrapper__cta__subtotal__icon__wrapper`,
															children: (0, e.Y)(d.I, { ...O.icon, ...(typeof n.ctaIcon == 'string' ? { icon: n.ctaIcon } : n.ctaIcon) }),
													  })
													: (0, e.Y)(e.FK, {}),
												(0, e.Y)('span', { className: `${o}__wrapper__cta__subtotal__title`, children: `Subtotal for ${a.count} items` }),
												(0, e.FD)('div', {
													className: `${o}__wrapper__cta__subtotal__prices`,
													children: [
														a.msrp && a.msrp !== a.price
															? (0, e.FD)('label', {
																	className: `${o}__wrapper__cta__subtotal__strike`,
																	children: ['Was ', (0, e.Y)(m.g, { ...O.subtotalStrike, lineThrough: !0, value: a.msrp })],
															  })
															: (0, e.Y)(e.FK, {}),
														(0, e.Y)('label', {
															className: `${o}__wrapper__cta__subtotal__price`,
															children: (0, e.Y)(m.g, { ...O.subtotalPrice, value: a.price }),
														}),
													],
												}),
											],
										}),
									],
								}),
								(0, e.Y)('div', {
									children: (0, e.Y)(i.$, {
										...O.button,
										disabled: a.items.length == 0,
										disableStyles: !0,
										internalClassName: g()(`${o}__wrapper__cta__button`, { [`${o}__wrapper__cta__button--added`]: T }),
										'aria-live': T,
										onClick: (v) => n.onAddToCart(v),
										...(T ? x.ctaButtonSuccessText?.all : x.ctaButtonText?.all),
										children: n.addedToCart ? n.ctaButtonSuccessText : n.ctaButtonText,
									}),
								}),
							],
						});
					});
			},
			'./components/src/hooks/useIntersection.tsx'(M, c, t) {
				t.d(c, { v: () => I });
				var e = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const I = (_, p = '0px', s = !1) => {
					const [P, m] = (0, e.J0)(!1);
					return (
						(0, e.vJ)(() => {
							const i = new IntersectionObserver(
								([d]) => {
									m(d.isIntersecting), s && d.isIntersecting && i.unobserve(_.current);
								},
								{ rootMargin: p }
							);
							return (
								_.current && i.observe(_.current),
								() => {
									i.unobserve(_.current);
								}
							);
						}, []),
						P
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(M, c, t) {
				t.d(c, { v: () => _ });
				var e = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const I = 250,
					_ = (s, P = {}) => {
						const { rootMargin: m = '0px', fireOnce: i = !1, threshold: d = 0, minVisibleTime: B = 0 } = P,
							[f, E] = (0, e.J0)(!1),
							l = (0, e.li)(null),
							g = (0, e.li)(null),
							[C, L] = (0, e.J0)(0),
							w = (0, e.hb)((r) => {
								(s.current = r), L((u) => u + 1);
							}, []);
						return (
							(0, e.vJ)(() => {
								E(!1);
								let r = null,
									u = null;
								if (!window.IntersectionObserver || !s.current) return;
								const h = () => {
										u && (window.clearInterval(u), (u = null));
									},
									A = () => {
										B > 0
											? ((g.current = Date.now()),
											  l.current && window.clearTimeout(l.current),
											  (l.current = window.setTimeout(() => {
													E(!0), i && s.current && r && r.unobserve(s.current);
											  }, B)))
											: (E(!0), i && s.current && r && r.unobserve(s.current));
									},
									D = () => {
										l.current && window.clearTimeout(l.current), (l.current = null), (g.current = null), E(!1);
									};
								return (
									(r = new IntersectionObserver(
										([n]) => {
											n.isIntersecting
												? s.current && p(s.current)
													? (h(), A())
													: (D(),
													  u ||
															(u = window.setInterval(() => {
																if (!s.current) {
																	h();
																	return;
																}
																p(s.current) && (h(), A());
															}, I)))
												: (h(), D());
										},
										{ rootMargin: m, threshold: d }
									)),
									s.current && r.observe(s.current),
									() => {
										E(!1), h(), l.current && window.clearTimeout(l.current), r && s.current && r.unobserve(s.current);
									}
								);
							}, [s, C]),
							{ inViewport: f, updateRef: w }
						);
					};
				function p(s) {
					return s && 'checkVisibility' in s ? s.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/utilities/createImpressionObserver.ts'(M, c, t) {
				t.d(c, { Q: () => s });
				var e = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					I = t('./components/src/hooks/useIntersectionAdvanced.tsx');
				const _ = 0.7,
					p = 1e3;
				function s(P) {
					const m = (0, e.li)(null),
						{ inViewport: i, updateRef: d } = (0, I.v)(m, { ...P, fireOnce: !0, threshold: _, minVisibleTime: p });
					return { ref: m, inViewport: i, updateRef: d };
				}
			},
			'./src/Templates/Stores/library/components/RecommendationBundleList.ts'(M, c, t) {
				t.r(c), t.d(c, { RecommendationBundleList: () => e.a });
				var e = t('./components/src/components/Templates/RecommendationBundleList/RecommendationBundleList.tsx');
			},
		},
	]);
})();
