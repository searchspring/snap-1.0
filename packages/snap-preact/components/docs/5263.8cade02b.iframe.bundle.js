'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5263],
		{
			'./components/src/components/Templates/RecommendationBundleList/RecommendationBundleList.tsx'(b, a, t) {
				t.d(a, { X: () => W, a: () => w });
				var e = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					h = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					m = t('../../node_modules/mobx-react-lite/es/index.js'),
					s = t('./components/src/utilities/defined.ts'),
					I = t('./components/src/utilities/mergeProps.ts'),
					p = t('./components/src/utilities/mergeStyles.ts'),
					c = t('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'),
					d = t('./components/src/components/Atoms/Price/Price.tsx'),
					B = t('./components/src/components/Atoms/Button/Button.tsx'),
					A = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					P = t('./components/src/components/Atoms/Image/Image.tsx'),
					i = t('./components/src/components/Molecules/Result/Result.tsx'),
					R = t('./components/src/utilities/componentNameToClassName.ts'),
					L = t('../../node_modules/classnames/index.js'),
					f = t.n(L),
					x = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					r = t('../../node_modules/deepmerge/dist/cjs.js'),
					u = t.n(r),
					E = t('./components/src/hooks/useLang.tsx');
				const g = () =>
						(0, h.AH)({
							'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper': {
								display: 'flex',
								'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper__checkbox': { position: 'relative', minWidth: '20px' },
								'.ss__result__details': { textAlign: 'left' },
							},
							'.ss__recommendation-profile-tracker': { display: 'flex', flexDirection: 'column' },
							'.ss__recommendation-bundle-list__wrapper': { order: '3' },
							'.ss__recommendation-bundle-list__wrapper__cta': {
								order: '2',
								'.ss__button': { cursor: 'pointer' },
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
					O = 'recommendationBundleList',
					w = (0, m.PA)((n) => {
						const l = (0, _.u)(),
							o = { name: n.controller?.store?.profile?.tag?.toLowerCase(), ...n },
							{ treePath: T, disableStyles: C, controller: v, style: N, styleScript: K, themeStyleScript: D, ...M } = o,
							U = {
								recommendationBundle: {
									seedText: '',
									ctaInline: !1,
									limit: 5,
									preselectedCount: 2,
									carousel: { enabled: !1, seedInCarousel: !0 },
									ctaSlot: (S) => (0, e.Y)(W, { ...S }),
									resultComponent: (S) => (0, e.Y)(i.Q, { hideImage: !0, hideBadge: !0, ...S }),
									vertical: !0,
									separatorIcon: !1,
									alias: O,
									...(0, s.s)({ disableStyles: C }),
									theme: o?.theme,
									treePath: T,
								},
							},
							y = (0, I.v6)(O, l, {}, o),
							$ = (0, p.Z)(y, g);
						return (0, e.Y)(c.g, { controller: v, ...$, ...U.recommendationBundle, ...M });
					}),
					W = (0, m.PA)((n) => {
						const l = n.cartStore,
							o = `ss__${(0, R.b)(O)}`;
						n.onAddToCart = (D) => {
							C(!0), n.onAddToCart(D), setTimeout(() => C(!1), n.ctaButtonSuccessTimeout);
						};
						const [T, C] = (0, x.J0)(!1);
						n.addedToCart = T;
						const v = {
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
							N = u()({}, n.lang || {}),
							K = (0, E.u)(N, {});
						return (0, e.FD)(e.FK, {
							children: [
								(0, e.FD)('div', {
									className: `${o}__wrapper__cta__inner`,
									children: [
										(0, e.Y)('div', {
											className: `${o}__wrapper__cta__inner__images`,
											children: l.items.map((D) => {
												const M = D.display.mappings.core;
												return (0, e.FD)('div', {
													className: `${o}__wrapper__cta__inner__image-wrapper`,
													children: [
														(0, e.Y)('a', { href: M.url, children: (0, e.Y)(P._, { src: M.thumbnailImageUrl, alt: M.name, lazy: !1 }) }),
														(0, e.Y)(A.I, { ...v.separatorIcon }),
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
															children: (0, e.Y)(A.I, { ...v.icon, ...(typeof n.ctaIcon == 'string' ? { icon: n.ctaIcon } : n.ctaIcon) }),
													  })
													: (0, e.Y)(e.FK, {}),
												(0, e.Y)('span', { className: `${o}__wrapper__cta__subtotal__title`, children: `Subtotal for ${l.count} items` }),
												(0, e.FD)('div', {
													className: `${o}__wrapper__cta__subtotal__prices`,
													children: [
														l.msrp && l.msrp !== l.price
															? (0, e.FD)('label', {
																	className: `${o}__wrapper__cta__subtotal__strike`,
																	children: ['Was ', (0, e.Y)(d.g, { ...v.subtotalStrike, lineThrough: !0, value: l.msrp })],
															  })
															: (0, e.Y)(e.FK, {}),
														(0, e.Y)('label', {
															className: `${o}__wrapper__cta__subtotal__price`,
															children: (0, e.Y)(d.g, { ...v.subtotalPrice, value: l.price }),
														}),
													],
												}),
											],
										}),
									],
								}),
								(0, e.Y)('div', {
									className: `${o}__cta__button__wrapper`,
									children: (0, e.Y)(B.$, {
										...v.button,
										disabled: l.items.length == 0,
										disableStyles: !0,
										internalClassName: f()(`${o}__cta__button`, { [`${o}__cta__button--added`]: T }),
										'aria-live': T,
										onClick: (D) => n.onAddToCart(D),
										...(T ? K.ctaButtonSuccessText?.all : K.ctaButtonText?.all),
										children: n.addedToCart ? n.ctaButtonSuccessText : n.ctaButtonText,
									}),
								}),
							],
						});
					});
			},
			'./components/src/hooks/useIntersection.tsx'(b, a, t) {
				t.d(a, { v: () => h });
				var e = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const h = (_, m = '0px', s = !1) => {
					const [I, p] = (0, e.J0)(!1);
					return (
						(0, e.vJ)(() => {
							const c = new IntersectionObserver(
								([d]) => {
									p(d.isIntersecting), s && d.isIntersecting && c.unobserve(_.current);
								},
								{ rootMargin: m }
							);
							return (
								_.current && c.observe(_.current),
								() => {
									c.unobserve(_.current);
								}
							);
						}, []),
						I
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(b, a, t) {
				t.d(a, { v: () => _ });
				var e = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const h = 250,
					_ = (s, I = {}) => {
						const { rootMargin: p = '0px', fireOnce: c = !1, threshold: d = 0, minVisibleTime: B = 0 } = I,
							[A, P] = (0, e.J0)(!1),
							i = (0, e.li)(null),
							R = (0, e.li)(null),
							[L, f] = (0, e.J0)(0),
							x = (0, e.hb)((r) => {
								(s.current = r), f((u) => u + 1);
							}, []);
						return (
							(0, e.vJ)(() => {
								P(!1);
								let r = null,
									u = null;
								if (!window.IntersectionObserver || !s.current) return;
								const E = () => {
										u && (window.clearInterval(u), (u = null));
									},
									g = () => {
										B > 0
											? ((R.current = Date.now()),
											  i.current && window.clearTimeout(i.current),
											  (i.current = window.setTimeout(() => {
													P(!0), c && s.current && r && r.unobserve(s.current);
											  }, B)))
											: (P(!0), c && s.current && r && r.unobserve(s.current));
									},
									O = () => {
										i.current && window.clearTimeout(i.current), (i.current = null), (R.current = null), P(!1);
									};
								return (
									(r = new IntersectionObserver(
										([w]) => {
											w.isIntersecting
												? s.current && m(s.current)
													? (E(), g())
													: (O(),
													  u ||
															(u = window.setInterval(() => {
																if (!s.current) {
																	E();
																	return;
																}
																m(s.current) && (E(), g());
															}, h)))
												: (E(), O());
										},
										{ rootMargin: p, threshold: d }
									)),
									s.current && r.observe(s.current),
									() => {
										P(!1), E(), i.current && window.clearTimeout(i.current), r && s.current && r.unobserve(s.current);
									}
								);
							}, [s, L]),
							{ inViewport: A, updateRef: x }
						);
					};
				function m(s) {
					return s && 'checkVisibility' in s ? s.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/utilities/createImpressionObserver.ts'(b, a, t) {
				t.d(a, { Q: () => s });
				var e = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					h = t('./components/src/hooks/useIntersectionAdvanced.tsx');
				const _ = 0.7,
					m = 1e3;
				function s(I) {
					const p = (0, e.li)(null),
						{ inViewport: c, updateRef: d } = (0, h.v)(p, { ...I, fireOnce: !0, threshold: _, minVisibleTime: m });
					return { ref: p, inViewport: c, updateRef: d };
				}
			},
			'./src/Templates/Stores/library/components/RecommendationBundleList.ts'(b, a, t) {
				t.r(a), t.d(a, { RecommendationBundleList: () => e.a });
				var e = t('./components/src/components/Templates/RecommendationBundleList/RecommendationBundleList.tsx');
			},
		},
	]);
})();
