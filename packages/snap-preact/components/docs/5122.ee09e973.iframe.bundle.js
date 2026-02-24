'use strict';
(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[5122],
		{
			'./components/src/components/Molecules/Carousel/Carousel.tsx'(w, a, e) {
				e.d(a, { FN: () => D, K: () => x, og: () => W });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/dist/preact.module.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					E = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/classnames/index.js'),
					m = e.n(n),
					P = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('../../node_modules/deepmerge/dist/cjs.js'),
					v = e.n(c),
					h = e('../../node_modules/swiper/swiper-react.mjs'),
					B = e('./components/src/utilities/cloneWithProps.tsx'),
					O = e('./components/src/utilities/defined.ts'),
					d = e('./components/src/utilities/mergeProps.ts'),
					L = e('./components/src/utilities/mergeStyles.ts'),
					_ = e('../../node_modules/swiper/modules/index.mjs'),
					U = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					S = e('./components/src/providers/cache.tsx'),
					l = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					R = e('./components/src/hooks/useDisplaySettings.tsx');
				const C = ({ vertical: A, theme: I }) =>
						(0, E.AH)({
							display: 'flex',
							maxWidth: '100%',
							maxHeight: A ? '100%' : void 0,
							margin: 0,
							padding: 0,
							overflow: 'hidden',
							'.swiper-notification': { position: 'absolute', left: '100000000000000px' },
							'&.ss__carousel-vertical': {
								flexDirection: 'column',
								'.swiper-slide': { display: 'flex', justifyContent: 'center', alignItems: 'center' },
								'.swiper-container': { flexDirection: 'row' },
								'.swiper-pagination': { width: 'auto', order: 0, flexDirection: 'column', margin: 0, padding: '10px' },
								'.swiper-pagination-bullet': { margin: '4px' },
							},
							'.swiper-pagination-bullet-active': { background: I?.variables?.colors?.primary || 'inherit' },
							'.ss__carousel__next-wrapper, .ss__carousel__prev-wrapper': {
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								'&.ss__carousel__next-wrapper--hidden, &.ss__carousel__prev-wrapper--hidden': { display: 'none' },
							},
							'.ss__carousel__next, .ss__carousel__prev': {
								padding: '5px',
								cursor: 'pointer',
								lineHeight: 0,
								'&.swiper-button-disabled': { opacity: '0.3', cursor: 'default' },
							},
							'.swiper': {
								display: 'flex',
								flexDirection: 'column',
								marginLeft: 'auto',
								marginRight: 'auto',
								position: 'relative',
								overflow: 'hidden',
								listStyle: 'none',
								padding: 0,
								zIndex: '1',
								width: '100%',
							},
							'.swiper-vertical > .swiper-wrapper': { flexDirection: 'column' },
							'.swiper-wrapper': {
								order: 0,
								position: 'relative',
								width: '100%',
								height: '100%',
								zIndex: '1',
								display: 'flex',
								transitionProperty: 'transform',
								boxSizing: 'content-box',
							},
							'.swiper-slide': { flexShrink: 0, width: '100%', height: '100%', position: 'relative', transitionProperty: 'transform' },
							'.swiper-pagination': {
								display: 'flex',
								justifyContent: 'center',
								marginTop: '10px',
								width: '100%',
								order: 1,
								transition: '.3s opacity',
							},
							'.swiper-pagination-bullet': {
								width: '8px',
								height: '8px',
								display: 'inline-block',
								borderRadius: '50%',
								background: '#000',
								opacity: '.2',
								cursor: 'pointer',
								margin: '0 4px',
								'&.swiper-pagination-bullet-active': { opacity: '0.8', background: I?.variables?.colors?.primary || '#000' },
							},
							'.swiper-slide-invisible-blank': { visibility: 'hidden' },
							'.swiper-horizontal': { touchAction: 'pan-y' },
							'.swiper-vertical': { touchAction: 'pan-x' },
							'.swiper-scrollbar': {
								position: 'absolute',
								bottom: '0',
								left: '0',
								width: '100%',
								height: '2px',
								backgroundColor: '#d9d9d9',
								'&:empty': { display: 'none' },
								'.swiper-scrollbar-drag': { position: 'relative', height: '100%', backgroundColor: I?.variables?.colors?.primary || '#000' },
							},
						}),
					x = {
						0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
						480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 },
						768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
						1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
						1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 },
					},
					W = { 0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 } },
					D = (0, P.PA)((A) => {
						const I = (0, l.u)(),
							Y = (0, f.LU)(),
							y = {
								breakpoints: A.vertical ? JSON.parse(JSON.stringify(W)) : JSON.parse(JSON.stringify(x)),
								pagination: !1,
								slidesPerGroup: 5,
								slidesPerView: 5,
								spaceBetween: 10,
								loop: !0,
								autoAdjustSlides: !1,
								treePath: Y,
							};
						let r = (0, d.v6)('carousel', I, y, A),
							M;
						if (
							!(A.theme?.name || I.name) &&
							r.breakpoints &&
							(Object.keys(r.breakpoints).forEach((t) => {
								const o = r.breakpoints[t];
								o.slidesPerView && (o.slidesPerView = Number(o.slidesPerView) || 1),
									o.slidesPerGroup && (o.slidesPerGroup = Number(o.slidesPerGroup) || 1);
							}),
							(M = (0, R.X)(r.breakpoints)),
							M && Object.keys(M).length)
						) {
							const t = v()(r?.theme || {}, M?.theme || {}, { arrayMerge: (o, oe) => oe });
							r.autoAdjustSlides &&
								r.children.length < M.slidesPerView &&
								((M.slidesPerView = r.children.length), (M.slidesPerGroup = r.children.length)),
								(r = { ...r, ...M, theme: t });
						}
						const {
							children: J,
							loop: u,
							nextButton: T,
							prevButton: re,
							hideButtons: Z,
							vertical: k,
							onInit: $,
							onBeforeInit: Q,
							onAfterInit: X,
							onNextButtonClick: z,
							onPrevButtonClick: G,
							onClick: q,
							disableStyles: ie,
							style: _e,
							styleScript: me,
							themeStyleScript: ue,
							modules: ee,
							className: le,
							internalClassName: ae,
							treePath: F,
							...j
						} = r;
						let K = r.pagination,
							g = r.navigation,
							b = r.scrollbar;
						const se = { icon: { internalClassName: 'ss__carousel__icon', ...(0, O.s)({ disableStyles: ie }), theme: r.theme, treePath: F } },
							te = Array.isArray(ee) ? [_.Vx, _.dK, _.Ze, _.Jq].concat(ee) : [_.Vx, _.dK, _.Ze, _.Jq],
							ce = te.filter((t, o) => te.indexOf(t) === o),
							V = (0, i.li)(null),
							ne = (0, i.li)(null),
							N = (0, i.li)(null),
							de = (0, L.Z)(r, C);
						(0, i.vJ)(() => {
							if (N.current) {
								const o = N.current.querySelector('.swiper');
								o?.classList.add('swiper-container', 'swiper-container-pointer-events'),
									o?.classList.contains('swiper-vertical') && o.classList.add('swiper-container-vertical'),
									o?.classList.contains('swiper-horizontal') && o.classList.add('swiper-container-horizontal');
							}
							H();
						}, [A]),
							K && (typeof K == 'object' ? (K = { clickable: !0, ...K }) : (K = { clickable: !0 })),
							g && typeof g == 'object'
								? (g = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE', ...g })
								: (g = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE' }),
							b && (typeof b == 'object' ? (b = { enabled: !0, ...b }) : (b = { enabled: !0 }));
						const H = () => {
							if (N.current) {
								const o = N.current?.querySelectorAll('.swiper-slide-visible');
								o.forEach((oe, pe) => {
									oe.classList.remove('swiper-last-visible-slide'), pe == o.length - 1 && oe.classList.add('swiper-last-visible-slide');
								});
							}
						};
						return (
							delete j.breakpoints,
							J?.length
								? (0, s.Y)(S._, {
										children: (0, s.FD)('div', {
											ref: N,
											...de,
											className: m()('ss__carousel', k ? 'ss__carousel-vertical' : '', le, ae),
											children: [
												(0, s.Y)('div', {
													className: m()('ss__carousel__prev-wrapper', { 'ss__carousel__prev-wrapper--hidden': Z }),
													children: (0, s.Y)('div', {
														className: 'ss__carousel__prev',
														ref: V,
														onClick: G && ((t) => G(t)),
														children: re || (0, s.Y)(U.I, { icon: k ? 'angle-up' : 'angle-left', ...se.icon, name: 'prev' }),
													}),
												}),
												(0, s.Y)(h.RC, {
													centerInsufficientSlides: !0,
													onBeforeInit: (t) => {
														(t.params.navigation.prevEl = V.current ? V.current : void 0),
															(t.params.navigation.nextEl = ne.current ? ne.current : void 0),
															Q && Q(t);
													},
													onInit: (t) => {
														$ && $(t);
													},
													onAfterInit: (t) => {
														(t.navigation.onPrevClick = (o) => {
															o.preventDefault(), !(t.isBeginning && !t.params.loop && !t.params.rewind) && (t.slidePrev(), t.emit('navigationPrev'));
														}),
															(t.navigation.onNextClick = (o) => {
																o.preventDefault(), !(t.isEnd && !t.params.loop && !t.params.rewind) && (t.slideNext(), t.emit('navigationNext'));
															}),
															X && X(t);
													},
													onClick: (t, o) => {
														q && q(t, o);
													},
													direction: k ? 'vertical' : 'horizontal',
													loop: u,
													threshold: 7,
													loopAddBlankSlides: !1,
													modules: ce,
													...j,
													...M,
													controller: void 0,
													navigation: g,
													pagination: K,
													scrollbar: b,
													onResize: (t) => {
														j.onResize && j.onResize(), t.updateSlidesClasses(), H();
													},
													onTransitionEnd: () => {
														j.onTransitionEnd && j.onTransitionEnd(), H();
													},
													children: J.map((t) => (t != null ? (0, s.Y)(h.qr, { children: (0, B.Y)(t, { treePath: F }) }) : null)),
												}),
												(0, s.Y)('div', {
													className: m()('ss__carousel__next-wrapper', { 'ss__carousel__next-wrapper--hidden': Z }),
													children: (0, s.Y)('div', {
														className: 'ss__carousel__next',
														ref: ne,
														onClick: z && ((t) => z(t)),
														children: T || (0, s.Y)(U.I, { icon: k ? 'angle-down' : 'angle-right', ...se.icon, name: 'next' }),
													}),
												}),
											],
										}),
								  })
								: (0, s.Y)(p.FK, {})
						);
					});
			},
			'./components/src/components/Templates/Recommendation/Recommendation.tsx'(w, a, e) {
				e.d(a, { A: () => W });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/dist/preact.module.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					E = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/classnames/index.js'),
					m = e.n(n),
					P = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('../../node_modules/deepmerge/dist/cjs.js'),
					v = e.n(c),
					h = e('./components/src/components/Molecules/Carousel/Carousel.tsx'),
					B = e('./components/src/components/Molecules/Result/Result.tsx'),
					O = e('./components/src/utilities/defined.ts'),
					d = e('./components/src/utilities/mergeProps.ts'),
					L = e('./components/src/utilities/mergeStyles.ts'),
					_ = e('./components/src/hooks/useIntersection.tsx'),
					U = e('./components/src/providers/cache.tsx'),
					S = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					l = e('./components/src/hooks/useDisplaySettings.tsx'),
					f = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					R = e('./components/src/hooks/useLang.tsx'),
					C = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx');
				const x = ({ vertical: D }) => (0, E.AH)({ height: D ? '100%' : void 0, '.ss__result__image-wrapper': { height: D ? '85%' : void 0 } }),
					W = (0, P.PA)((D) => {
						const A = (0, S.u)(),
							I = {
								breakpoints: D.vertical ? JSON.parse(JSON.stringify(h.og)) : JSON.parse(JSON.stringify(h.K)),
								pagination: !1,
								loop: !0,
								title: D.controller?.store?.profile?.display?.templateParameters?.title,
								description: D.controller?.store?.profile?.display?.templateParameters?.description,
							},
							Y = { name: D.controller?.store?.profile?.tag?.toLowerCase(), ...D };
						let y = (0, d.v6)('recommendation', A, I, Y),
							r;
						!(D.theme?.name || A.name) && y.breakpoints && ((r = (0, l.X)(y.breakpoints)), r && Object.keys(r).length && (y = { ...y, ...r }));
						const {
								title: M,
								description: J,
								controller: u,
								children: T,
								loop: re,
								results: Z,
								pagination: k,
								nextButton: $,
								prevButton: Q,
								hideButtons: X,
								resultComponent: z,
								disableStyles: G,
								className: q,
								internalClassName: ie,
								style: _e,
								styleScript: me,
								themeStyleScript: ue,
								lazyRender: ee,
								vertical: le,
								hideTitle: ae,
								treePath: F,
								...j
							} = y,
							K = { enabled: !0, offset: '10%', ...ee };
						if (!u || u.type !== 'recommendation')
							throw new Error("<Recommendation> Component requires 'controller' prop with an instance of RecommendationController");
						const g = Z || u.store?.results;
						if (Array.isArray(T) && T.length !== g.length)
							return (
								u.log.error(
									"<Recommendation> Component received invalid number of children. Must match length of 'results' prop or 'controller.store.results'"
								),
								(0, s.Y)(p.FK, {})
							);
						const b = {
								carousel: {
									internalClassName: 'ss__recommendation__Carousel',
									...(0, O.s)({ disableStyles: G, vertical: le }),
									theme: y?.theme,
									treePath: F,
								},
								result: { internalClassName: 'ss__recommendation__result', ...(0, O.s)({ disableStyles: G }), theme: y?.theme, treePath: F },
							},
							se = (0, L.Z)(y, x),
							[te, ce] = (0, i.J0)(!1),
							V = (0, i.li)(null);
						(!K?.enabled || (0, _.v)(V, `${K.offset} 0px ${K.offset} 0px`, !0)) && ce(!0);
						const N = { titleText: { value: `${M}` } },
							de = v()(N, y.lang || {}),
							H = (0, R.u)(de, {});
						return (Array.isArray(T) && T.length) || g?.length
							? (0, s.Y)(U._, {
									children: (0, s.Y)('div', {
										...se,
										className: m()('ss__recommendation', q, ie),
										ref: V,
										children: te
											? (0, s.FD)(f.l, {
													controller: u,
													children: [
														M && !ae && (0, s.Y)('h3', { className: 'ss__recommendation__title', ...H.titleText?.all, children: M }),
														J && (0, s.Y)('h4', { className: 'ss__recommendation__description', children: J }),
														(0, s.Y)(h.FN, {
															prevButton: Q,
															nextButton: $,
															hideButtons: X,
															loop: re,
															pagination: k,
															...b.carousel,
															...j,
															children:
																Array.isArray(T) && T.length
																	? T.map((t, o) => (0, s.Y)(C.o, { controller: u, result: g[o], children: t }))
																	: g.map((t) =>
																			(0, s.Y)(C.o, {
																				controller: u,
																				result: t,
																				children: (() => {
																					if (z && u) {
																						const o = z;
																						return (0, s.Y)(o, { controller: u, result: t, treePath: b.result.treePath });
																					} else return (0, s.Y)(B.Q, { ...b.result, controller: u, result: t }, t.id);
																				})(),
																			})
																	  ),
														}),
													],
											  })
											: (0, s.Y)(f.l, {
													controller: u,
													children:
														Array.isArray(T) && T.length
															? T.map((t, o) => (0, s.Y)(C.o, { controller: u, result: g[o], children: (0, s.Y)(s.FK, {}) }))
															: g.map((t) => (0, s.Y)(C.o, { controller: u, result: t, children: (0, s.Y)(s.FK, {}) })),
											  }),
									}),
							  })
							: (0, s.Y)(s.FK, {});
					});
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(w, a, e) {
				e.d(a, { l: () => v });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/dist/preact.module.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					E = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('../../node_modules/classnames/index.js'),
					m = e.n(n),
					P = e('./components/src/utilities/mergeStyles.ts');
				const c = () => (0, i.AH)({}),
					v = (0, E.PA)((h) => {
						const { children: B, className: O, internalClassName: d } = h,
							L = (0, p.v2)(B),
							_ = (0, P.Z)(h, c);
						return L.length ? (0, s.Y)('div', { className: m()('ss__recommendation-profile-tracker', O, d), ..._, children: B }) : (0, s.Y)(p.FK, {});
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(w, a, e) {
				e.d(a, { o: () => h });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
					E = e('../../node_modules/classnames/index.js'),
					n = e.n(E),
					m = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					P = e('./components/src/utilities/mergeProps.ts'),
					c = e('./components/src/utilities/createImpressionObserver.ts');
				const v = { ResultTracker: () => (0, p.AH)({}) },
					h = (0, i.PA)((B) => {
						const O = (0, m.u)(),
							d = (0, P.v6)('resultTracker', O, {}, B),
							L = { impression: !0, click: !0 },
							{ children: _, result: U, track: S, controller: l, className: f, internalClassName: R, disableStyles: C, style: x } = d,
							W = { ...L, ...S },
							{ ref: D, inViewport: A } = (0, c.Q)();
						A && W.impression && l?.track.product.impression(U);
						const I = {};
						return (
							C ? x && (I.css = [x]) : (I.css = [v.ResultTracker(), x]),
							(0, s.Y)('div', {
								className: n()('ss__result-tracker', `ss__${l?.type}-result-tracker`, f, R),
								onClick: (Y) => {
									W.click && l?.track.product.click(Y, U);
								},
								ref: D,
								...I,
								children: _,
							})
						);
					});
			},
			'./components/src/hooks/useIntersection.tsx'(w, a, e) {
				e.d(a, { v: () => p });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const p = (i, E = '0px', n = !1) => {
					const [m, P] = (0, s.J0)(!1);
					return (
						(0, s.vJ)(() => {
							const c = new IntersectionObserver(
								([v]) => {
									P(v.isIntersecting), n && v.isIntersecting && c.unobserve(i.current);
								},
								{ rootMargin: E }
							);
							return (
								i.current && c.observe(i.current),
								() => {
									c.unobserve(i.current);
								}
							);
						}, []),
						m
					);
				};
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(w, a, e) {
				e.d(a, { v: () => i });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const p = 250,
					i = (n, m = {}) => {
						const { rootMargin: P = '0px', fireOnce: c = !1, threshold: v = 0, minVisibleTime: h = 0 } = m,
							[B, O] = (0, s.J0)(!1),
							d = (0, s.li)(null),
							L = (0, s.li)(null),
							[_, U] = (0, s.J0)(0),
							S = (0, s.hb)((l) => {
								(n.current = l), U((f) => f + 1);
							}, []);
						return (
							(0, s.vJ)(() => {
								O(!1);
								let l = null,
									f = null;
								if (!window.IntersectionObserver || !n.current) return;
								const R = () => {
										f && (window.clearInterval(f), (f = null));
									},
									C = () => {
										h > 0
											? ((L.current = Date.now()),
											  d.current && window.clearTimeout(d.current),
											  (d.current = window.setTimeout(() => {
													O(!0), c && n.current && l && l.unobserve(n.current);
											  }, h)))
											: (O(!0), c && n.current && l && l.unobserve(n.current));
									},
									x = () => {
										d.current && window.clearTimeout(d.current), (d.current = null), (L.current = null), O(!1);
									};
								return (
									(l = new IntersectionObserver(
										([W]) => {
											W.isIntersecting
												? n.current && E(n.current)
													? (R(), C())
													: (x(),
													  f ||
															(f = window.setInterval(() => {
																if (!n.current) {
																	R();
																	return;
																}
																E(n.current) && (R(), C());
															}, p)))
												: (R(), x());
										},
										{ rootMargin: P, threshold: v }
									)),
									n.current && l.observe(n.current),
									() => {
										O(!1), R(), d.current && window.clearTimeout(d.current), l && n.current && l.unobserve(n.current);
									}
								);
							}, [n, _]),
							{ inViewport: B, updateRef: S }
						);
					};
				function E(n) {
					return n && 'checkVisibility' in n ? n.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/utilities/createImpressionObserver.ts'(w, a, e) {
				e.d(a, { Q: () => n });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					p = e('./components/src/hooks/useIntersectionAdvanced.tsx');
				const i = 0.7,
					E = 1e3;
				function n(m) {
					const P = (0, s.li)(null),
						{ inViewport: c, updateRef: v } = (0, p.v)(P, { ...m, fireOnce: !0, threshold: i, minVisibleTime: E });
					return { ref: P, inViewport: c, updateRef: v };
				}
			},
			'./src/Templates/Stores/library/components/Recommendation.ts'(w, a, e) {
				e.r(a), e.d(a, { Recommendation: () => s.A });
				var s = e('./components/src/components/Templates/Recommendation/Recommendation.tsx');
			},
		},
	]);
})();
