'use strict';
(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[7853],
		{
			'./components/src/components/Molecules/Carousel/Carousel.tsx'(Ce, k, e) {
				e.d(k, { FN: () => Pe, K: () => V, og: () => Q });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/preact/dist/preact.module.js'),
					B = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					te = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					R = e('../../node_modules/classnames/index.js'),
					x = e.n(R),
					Y = e('../../node_modules/mobx-react-lite/es/index.js'),
					oe = e('../../node_modules/deepmerge/dist/cjs.js'),
					A = e.n(oe),
					L = e('../../node_modules/swiper/swiper-react.mjs'),
					K = e('./components/src/utilities/cloneWithProps.tsx'),
					J = e('./components/src/utilities/defined.ts'),
					H = e('./components/src/utilities/mergeProps.ts'),
					re = e('./components/src/utilities/mergeStyles.ts'),
					g = e('../../node_modules/swiper/modules/index.mjs'),
					Z = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					ge = e('./components/src/providers/cache.tsx'),
					ne = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					he = e('./components/src/providers/treePath.tsx'),
					ie = e('./components/src/hooks/useDisplaySettings.tsx');
				const Ee = ({ vertical: N, theme: w }) =>
						(0, te.AH)({
							display: 'flex',
							maxWidth: '100%',
							maxHeight: N ? '100%' : void 0,
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
							'.swiper-pagination-bullet-active': { background: w?.variables?.colors?.primary || 'inherit' },
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
								'&.swiper-pagination-bullet-active': { opacity: '0.8', background: w?.variables?.colors?.primary || '#000' },
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
								'.swiper-scrollbar-drag': { position: 'relative', height: '100%', backgroundColor: w?.variables?.colors?.primary || '#000' },
							},
						}),
					V = {
						0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
						480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 },
						768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
						1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
						1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 },
					},
					Q = { 0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 } },
					Pe = (0, Y.PA)((N) => {
						const w = (0, ne.u)(),
							fe = (0, he.LU)(),
							Ie = {
								breakpoints: N.vertical ? JSON.parse(JSON.stringify(Q)) : JSON.parse(JSON.stringify(V)),
								pagination: !1,
								slidesPerGroup: 5,
								slidesPerView: 5,
								spaceBetween: 10,
								loop: !0,
								autoAdjustSlides: !1,
								treePath: fe,
							};
						let p = (0, H.v6)('carousel', w, Ie, N),
							D;
						if (
							!(N.theme?.name || w.name) &&
							p.breakpoints &&
							(Object.keys(p.breakpoints).forEach((r) => {
								const l = p.breakpoints[r];
								l.slidesPerView && (l.slidesPerView = Number(l.slidesPerView) || 1),
									l.slidesPerGroup && (l.slidesPerGroup = Number(l.slidesPerGroup) || 1);
							}),
							(D = (0, ie.X)(p.breakpoints)),
							D && Object.keys(D).length)
						) {
							const r = A()(p?.theme || {}, D?.theme || {}, { arrayMerge: (l, xe) => xe });
							p.autoAdjustSlides &&
								p.children.length < D.slidesPerView &&
								((D.slidesPerView = p.children.length), (D.slidesPerGroup = p.children.length)),
								(p = { ...p, ...D, theme: r });
						}
						const {
							children: Be,
							loop: d,
							nextButton: u,
							prevButton: T,
							hideButtons: c,
							vertical: b,
							onInit: i,
							onBeforeInit: a,
							onAfterInit: P,
							onNextButtonClick: E,
							onPrevButtonClick: o,
							onClick: n,
							disableStyles: W,
							style: C,
							styleScript: ae,
							themeStyleScript: y,
							modules: _,
							className: X,
							internalClassName: q,
							treePath: $,
							...O
						} = p;
						let I = p.pagination,
							U = p.navigation,
							S = p.scrollbar;
						const we = { icon: { internalClassName: 'ss__carousel__icon', ...(0, J.s)({ disableStyles: W }), theme: p.theme, treePath: $ } },
							le = Array.isArray(_) ? [g.Vx, g.dK, g.Ze, g.Jq].concat(_) : [g.Vx, g.dK, g.Ze, g.Jq],
							Te = le.filter((r, l) => le.indexOf(r) === l),
							ce = (0, B.li)(null),
							ve = (0, B.li)(null),
							ee = (0, B.li)(null),
							Se = (0, re.Z)(p, Ee);
						(0, B.vJ)(() => {
							if (ee.current) {
								const l = ee.current.querySelector('.swiper');
								l?.classList.add('swiper-container', 'swiper-container-pointer-events'),
									l?.classList.contains('swiper-vertical') && l.classList.add('swiper-container-vertical'),
									l?.classList.contains('swiper-horizontal') && l.classList.add('swiper-container-horizontal');
							}
							de();
						}, [N]),
							I && (typeof I == 'object' ? (I = { clickable: !0, ...I }) : (I = { clickable: !0 })),
							U && typeof U == 'object'
								? (U = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE', ...U })
								: (U = { nextEl: '.ss_carousel_DNE', prevEl: '.ss_carousel_DNE' }),
							S && (typeof S == 'object' ? (S = { enabled: !0, ...S }) : (S = { enabled: !0 }));
						const de = () => {
							if (ee.current) {
								const l = ee.current?.querySelectorAll('.swiper-slide-visible');
								l.forEach((xe, Me) => {
									xe.classList.remove('swiper-last-visible-slide'), Me == l.length - 1 && xe.classList.add('swiper-last-visible-slide');
								});
							}
						};
						return (
							delete O.breakpoints,
							Be?.length
								? (0, s.Y)(ge._, {
										children: (0, s.FD)('div', {
											ref: ee,
											...Se,
											className: x()('ss__carousel', b ? 'ss__carousel-vertical' : '', X, q),
											children: [
												(0, s.Y)('div', {
													className: x()('ss__carousel__prev-wrapper', { 'ss__carousel__prev-wrapper--hidden': c }),
													children: (0, s.Y)('div', {
														className: 'ss__carousel__prev',
														ref: ce,
														onClick: o && ((r) => o(r)),
														children: T || (0, s.Y)(Z.I, { icon: b ? 'angle-up' : 'angle-left', ...we.icon, name: 'prev' }),
													}),
												}),
												(0, s.Y)(L.RC, {
													centerInsufficientSlides: !0,
													onBeforeInit: (r) => {
														(r.params.navigation.prevEl = ce.current ? ce.current : void 0),
															(r.params.navigation.nextEl = ve.current ? ve.current : void 0),
															a && a(r);
													},
													onInit: (r) => {
														i && i(r);
													},
													onAfterInit: (r) => {
														(r.navigation.onPrevClick = (l) => {
															l.preventDefault(), !(r.isBeginning && !r.params.loop && !r.params.rewind) && (r.slidePrev(), r.emit('navigationPrev'));
														}),
															(r.navigation.onNextClick = (l) => {
																l.preventDefault(), !(r.isEnd && !r.params.loop && !r.params.rewind) && (r.slideNext(), r.emit('navigationNext'));
															}),
															P && P(r);
													},
													onClick: (r, l) => {
														n && n(r, l);
													},
													direction: b ? 'vertical' : 'horizontal',
													loop: d,
													threshold: 7,
													loopAddBlankSlides: !1,
													modules: Te,
													...O,
													...D,
													controller: void 0,
													navigation: U,
													pagination: I,
													scrollbar: S,
													onResize: (r) => {
														O.onResize && O.onResize(), r.updateSlidesClasses(), de();
													},
													onTransitionEnd: () => {
														O.onTransitionEnd && O.onTransitionEnd(), de();
													},
													children: Be.map((r) => (r != null ? (0, s.Y)(L.qr, { children: (0, K.Y)(r, { treePath: $ }) }) : null)),
												}),
												(0, s.Y)('div', {
													className: x()('ss__carousel__next-wrapper', { 'ss__carousel__next-wrapper--hidden': c }),
													children: (0, s.Y)('div', {
														className: 'ss__carousel__next',
														ref: ve,
														onClick: E && ((r) => E(r)),
														children: u || (0, s.Y)(Z.I, { icon: b ? 'angle-down' : 'angle-right', ...we.icon, name: 'next' }),
													}),
												}),
											],
										}),
								  })
								: (0, s.Y)(v.FK, {})
						);
					});
			},
			'./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'(Ce, k, e) {
				e.d(k, { g: () => Be });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/preact/dist/preact.module.js'),
					B = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					te = e('../../node_modules/classnames/index.js'),
					R = e.n(te),
					x = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					Y = e('../../node_modules/mobx-react-lite/es/index.js'),
					oe = e('../../node_modules/deepmerge/dist/cjs.js'),
					A = e.n(oe),
					L = e('./components/src/components/Molecules/Carousel/Carousel.tsx'),
					K = e('./components/src/components/Molecules/Result/Result.tsx'),
					J = e('./components/src/utilities/mergeProps.ts'),
					H = e('./components/src/utilities/defined.ts'),
					re = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/utilities/cloneWithProps.tsx'),
					Z = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					ge = e('./components/src/providers/cache.tsx'),
					ne = e('./components/src/hooks/useDisplaySettings.tsx'),
					he = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					ie = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					Ee = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					V = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					Q = e('./components/src/hooks/useLang.tsx');
				const Pe = (0, Y.PA)((d) => {
					const u = (0, Z.u)(),
						T = { hideCheckboxes: !1, classNamePrefix: 'ss__recommendation-bundle' },
						c = (0, J.v6)('bundleSelector', u, T, d),
						{
							children: b,
							checked: i,
							icon: a,
							seedText: P,
							seed: E,
							hideCheckboxes: o,
							onCheck: n,
							title: W,
							className: C,
							internalClassName: ae,
							treePath: y,
							classNamePrefix: _,
						} = c,
						X = y?.lastIndexOf(' '),
						q = X !== -1 ? y?.slice(0, X) : y,
						$ = {
							icon: { name: 'bundle-selector', internalClassName: `${_}__wrapper__selector__icon`, size: 15, theme: c?.theme, treePath: q },
							checkbox: {
								internalClassName: `${_}__wrapper__selector__result-wrapper__checkbox`,
								checked: i,
								size: '18px',
								onClick: n,
								lang: { checkbox: { attributes: { 'aria-label': i ? `remove product from bundle ${W}` : `add product to bundle ${W}` } } },
								theme: c?.theme,
								treePath: q,
							},
						},
						O = A()({}, c.lang || {}),
						I = (0, Q.u)(O, {});
					return (0, s.FD)('div', {
						className: R()(
							`${_}__wrapper__selector`,
							i ? `${_}__wrapper__selector--selected` : '',
							P || E ? `${_}__wrapper__selector--seed` : '',
							C,
							ae
						),
						children: [
							(0, s.FD)('div', {
								className: `${_}__wrapper__selector__result-wrapper`,
								children: [
									!o && (0, s.Y)(Ee.S, { ...$.checkbox }),
									P && (0, s.Y)('div', { className: `${_}__wrapper__selector__result-wrapper__seed-badge`, ...I.seedText?.all }),
									b,
								],
							}),
							a ? (0, s.Y)(V.I, { ...$.icon, ...(typeof a == 'string' ? { icon: a } : a) }) : void 0,
						],
					});
				});
				var N = e('./components/src/components/Atoms/Button/Button.tsx'),
					w = e('./components/src/components/Atoms/Price/Price.tsx');
				const fe = (0, Y.PA)((d) => {
					const u = { ...d };
					u.onAddToCart = (_) => {
						W(!0), d.onAddToCart(_), setTimeout(() => W(!1), d.ctaButtonSuccessTimeout);
					};
					const {
							ctaSlot: T,
							cartStore: c,
							onAddToCart: b,
							ctaIcon: i,
							ctaButtonText: a,
							ctaButtonSuccessText: P,
							treePath: E,
							classNamePrefix: o,
						} = u,
						[n, W] = (0, x.J0)(!1);
					u.addedToCart = n;
					const C = {
							icon: { name: 'bundle-cart', internalClassName: `${o}__wrapper__cta__icon`, size: 50, theme: u?.theme, treePath: E },
							subtotalStrike: { name: 'bundle-msrp', theme: u?.theme, treePath: E },
							subtotalPrice: { name: 'bundle-price', theme: u?.theme, treePath: E },
							button: { theme: u?.theme, treePath: E },
						},
						ae = A()({}, u.lang || {}),
						y = (0, Q.u)(ae, { cartStore: c });
					return (0, s.Y)('div', {
						className: `${o}__wrapper__cta`,
						children: T
							? (0, g.Y)(T, u)
							: (0, s.FD)(v.FK, {
									children: [
										(0, s.FD)('div', {
											className: `${o}__wrapper__cta__subtotal`,
											'aria-atomic': 'false',
											'aria-live': 'polite',
											children: [
												i
													? (0, s.Y)('div', {
															className: `${o}__wrapper__cta__subtotal__icon__wrapper`,
															children: (0, s.Y)(V.I, { ...C.icon, ...(typeof i == 'string' ? { icon: i } : i) }),
													  })
													: (0, s.Y)(v.FK, {}),
												(0, s.Y)('span', { className: `${o}__wrapper__cta__subtotal__title`, ...y.ctaSubtotalTitle?.all }),
												(0, s.FD)('div', {
													className: `${o}__wrapper__cta__subtotal__prices`,
													children: [
														c.msrp && c.msrp !== c.price
															? (0, s.FD)('label', {
																	className: `${o}__wrapper__cta__subtotal__strike`,
																	children: ['Was ', (0, s.Y)(w.g, { ...C.subtotalStrike, lineThrough: !0, value: c.msrp })],
															  })
															: (0, s.Y)(v.FK, {}),
														(0, s.Y)('label', {
															className: `${o}__wrapper__cta__subtotal__price`,
															children: (0, s.Y)(w.g, { ...C.subtotalPrice, value: c.price }),
														}),
													],
												}),
											],
										}),
										(0, s.Y)(N.$, {
											...C.button,
											internalClassName: R()(`${o}__wrapper__cta__button`, { [`${o}__wrapper__cta__button--added`]: n }),
											'aria-live': n,
											onClick: (_) => b(_),
											...(n ? y.ctaButtonSuccessText?.all : y.ctaButtonText?.all),
											children: n ? P : a,
										}),
									],
							  }),
					});
				});
				var Ie = e('./components/src/hooks/useIntersection.tsx'),
					p = e('./components/src/utilities/componentNameToClassName.ts');
				const D = ({ vertical: d, separatorIcon: u, carousel: T, ctaInline: c, hasSeed: b, hideSeed: i, carouselEnabled: a, limit: P, alias: E }) => {
						let o = 'ss__recommendation-bundle';
						E && (o = `ss__${(0, p.b)(E)}`);
						const n = T?.slidesPerView;
						return (0, B.AH)({
							[`.${o}__wrapper`]: { display: 'flex', maxWidth: '100%', margin: '0', padding: '0' },
							[`.${o}__wrapper__selector--seed`]: { width: `${d ? '100%' : 'auto'}`, margin: `${u ? 'initial' : 'auto !important'}` },
							[`.${o}__wrapper__seed-container`]: { width: d ? '100%' : `calc(100% / ${n + (c ? 1 : 0)})` },
							[`.${o}__wrapper__cta`]: {
								width: d ? '100%' : `${c ? `calc(100% / ${(a ? n : P || 0) + 1})` : '100%'}`,
								textAlign: 'center',
								[`.${o}__wrapper__cta__subtotal__prices`]: { display: 'block' },
								[`.${o}__wrapper__cta__button--added`]: { cursor: 'none', pointerEvents: 'none', opacity: '.7' },
							},
							[`.${o}__wrapper__carousel`]: {
								boxSizing: 'border-box',
								width: d ? '100%' : `calc(calc(100% / ${n + (c ? 1 : 0)}) * ${n - (b && !i ? 1 : 0)})`,
							},
							[`.${o}__wrapper--seed-in-carousel`]: {
								[`.${o}__wrapper__cta`]: { width: d ? '100%' : `calc(100% / ${T?.slidesPerView + (c ? 1 : 0)})` },
								[`.${o}__wrapper__carousel`]: {
									width: d ? '100%' : `calc(calc(100% / ${T?.slidesPerView + (c ? 1 : 0)}) * ${T?.slidesPerView})`,
									padding: '0',
								},
							},
							'.swiper-slide, .swiper-slide-visible.swiper-last-visible-slide': { [`.${o}__wrapper__selector__icon`]: { display: 'none' } },
							'.swiper-slide-visible': { [`.${o}__wrapper__selector__icon`]: { display: 'block' } },
							[`.${o}__wrapper--vertical`]: { flexDirection: 'column' },
							[`.${o}__wrapper__selector`]: {
								alignItems: 'baseline',
								position: 'relative',
								[`&.${o}__wrapper__selector--last`]: { [`.${o}__wrapper__selector__icon`]: { display: 'none' } },
								[`.${o}__wrapper__selector__result-wrapper__seed-badge`]: { position: 'absolute', top: '0', left: '0', zIndex: '1' },
								[`.${o}__wrapper__selector__icon`]: { position: 'absolute', right: '-1em', top: '140px' },
								[`.${o}__wrapper__selector__result-wrapper`]: {
									alignItems: 'center',
									position: 'relative',
									margin: `0px ${5 + (Number(T?.spaceBetween) || 0)}px`,
								},
								[`.${o}__wrapper__selector__result-wrapper__checkbox`]: {
									position: 'absolute',
									top: '0',
									right: '0',
									zIndex: '101',
									cursor: 'pointer',
								},
							},
						});
					},
					Be = (0, Y.PA)((d) => {
						const u = (0, Z.u)(),
							c = {
								breakpoints: JSON.parse(
									JSON.stringify({
										0: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10, ctaInline: !1 },
										768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
										1200: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
									})
								),
								hideCheckboxes: !1,
								separatorIcon: 'plus-thin',
								seedText: 'This Product',
								separatorIconSeedOnly: !0,
								ctaIcon: 'bag',
								ctaButtonText: 'Add All To Cart',
								ctaButtonSuccessText: 'Bundle Added!',
								ctaButtonSuccessTimeout: 2e3,
								ctaInline: !0,
								onAddToCart: (t, m) => n?.addToCart && n.addToCart(m),
								title: d.controller?.store?.profile?.display?.templateParameters?.title,
								description: d.controller?.store?.profile?.display?.templateParameters?.description,
							},
							b = { name: d.controller?.store?.profile?.tag?.toLowerCase(), ...d };
						let i = (0, J.v6)(b.alias || 'recommendationBundle', u, c, b),
							a = 'ss__recommendation-bundle';
						i.alias && (a = `ss__${(0, p.b)(i.alias)}`);
						let P;
						if (!(d.theme?.name || u.name) && ((P = (0, ne.X)(i.breakpoints)), P && Object.keys(P).length)) {
							const t = A()(i?.theme || {}, P?.theme || {}, { arrayMerge: (m, h) => h });
							i = { ...i, ...P, theme: t };
						}
						const {
								title: E,
								description: o,
								controller: n,
								breakpoints: W,
								results: C,
								carousel: ae,
								preselectedCount: y,
								separatorIcon: _,
								hideCheckboxes: X,
								limit: q,
								seedText: $,
								vertical: O,
								onAddToCart: I,
								separatorIconSeedOnly: U,
								resultComponent: S,
								ctaSlot: we,
								hideSeed: le,
								ctaButtonText: Te,
								ctaButtonSuccessText: ce,
								ctaButtonSuccessTimeout: ve,
								disableStyles: ee,
								ctaIcon: Se,
								ctaInline: de,
								hideSeedText: r,
								lazyRender: l,
								className: xe,
								internalClassName: Me,
								style: ss,
								styleScript: ts,
								themeStyleScript: os,
								treePath: se,
								...Ue
							} = i,
							Re = { enabled: !0, offset: '10%', ...l },
							be = { enabled: !0, loop: !1, spaceBetween: 10, ...ae },
							{ seedInCarousel: me, prevButton: Ge, nextButton: Fe, hideButtons: ze, loop: ke, spaceBetween: Je, pagination: He } = be,
							De = be.enabled;
						if (!n || n.type !== 'recommendation')
							throw new Error("<RecommendationBundle> Component requires 'controller' prop with an instance of RecommendationController");
						let f = C || n.store?.results;
						q && (f = f.slice(0, le && f.filter((t) => t.bundleSeed == !0).length ? q + 1 : q));
						const M = n.store.cart;
						if (!M) throw new Error("<RecommendationBundle> Component requires 'cartStore' to exist in the recommendation store");
						if (!(C && C.length) && !n.store?.results?.length)
							return n.log.error('<RecommendationBundle> Component has no results to render!'), (0, s.Y)(v.FK, {});
						const j = C ? C.filter((t) => t.bundleSeed == !0).pop() : n.store?.results?.filter((t) => t.bundleSeed == !0).pop(),
							Ae = {
								carousel: {
									loop: ke,
									internalClassName: 'ss__recommendation__carousel',
									...(0, H.s)({ disableStyles: ee }),
									theme: i?.theme,
									treePath: se,
								},
								result: { internalClassName: 'ss__recommendation__result', ...(0, H.s)({ disableStyles: ee }), theme: i?.theme, treePath: se },
							},
							Ne = !!f.filter((t) => t.bundleSeed == !0).length;
						let pe = i.carousel?.slidesPerView || i.slidesPerView;
						pe ? f.length < Number(pe) && (pe = f.length) : (pe = 2);
						const Ze = (0, re.Z)({ ...i, carousel: { ...be, slidesPerView: pe }, hasSeed: Ne, carouselEnabled: De }, D),
							Ye = typeof y == 'number' ? y : De ? pe : f.length;
						(0, x.vJ)(() => {
							M.reset(),
								Ye &&
									f?.forEach((t, m) => {
										m < Number(Ye) && M.addItems([t]);
									});
						}, [f.length]);
						const ue = M.items,
							$e = { ...W };
						if (De) {
							const t = (m) => {
								const h = m?.slidesPerView || m.slidesPerView || 2,
									F = m?.slidesPerGroup || m.slidesPerGroup || 2;
								let z = h,
									_e = F;
								const Oe = !Ne || me ? f.length : f.length - 1;
								return (
									Oe && (Oe >= h ? ((z = h - (!me && Ne ? 1 : 0)), me || (_e = F - 1 || 1)) : ((z = Oe), (_e = Oe))),
									{ slidesPerView: z, slidesPerGroup: _e }
								);
							};
							if (!(d.theme?.name || u.name))
								Object.keys(i.breakpoints).forEach((m) => {
									const h = i.breakpoints[m],
										{ slidesPerView: F, slidesPerGroup: z } = t(h);
									$e[m] = { ...$e[m], slidesPerView: F, slidesPerGroup: z };
								});
							else {
								const { slidesPerView: m, slidesPerGroup: h } = t({ ...be, slidesPerView: pe });
								P = { ...be, slidesPerView: m, slidesPerGroup: h };
							}
						}
						const ye = (t) => {
								t && (ue.findIndex((h) => h.id == t.id) > -1 ? (M.removeItems([t]), M.items.length == 0 && j && M.items.push(j)) : M.addItems([t]));
							},
							Le = (t) => {
								n.addToCart(ue), I && I(t, ue);
							},
							Qe = () => {
								if (je.current) {
									const t = je.current?.base,
										F = Ke.current?.base?.querySelector(`.swiper-slide-visible .${a}__wrapper__selector`)?.offsetWidth;
									t && (t.style.width = `${F}px`);
								}
							},
							je = (0, x.li)(),
							Ke = (0, x.li)(),
							[Xe, qe] = (0, x.J0)(!1),
							Ve = (0, x.li)(null);
						(!Re?.enabled || (0, Ie.v)(Ve, `${Re.offset} 0px ${Re.offset} 0px`, !0)) && qe(!0);
						const es = {
								seedText: { value: $ },
								ctaButtonText: { value: Te },
								ctaButtonSuccessText: { value: ce },
								ctaSubtotalTitle: { value: `Subtotal for ${M.count} items` },
							},
							G = A()(es, i.lang || {}),
							We = (0, x.Kr)(
								() =>
									f.map((t, m) => {
										const h = !!t.bundleSeed,
											F = ue.findIndex((_e) => _e.id == t.id) > -1;
										let z = {
											onCheck: (_e) => {
												_e.stopPropagation(), ye(t);
											},
											checked: F,
											hideCheckboxes: X,
											theme: i.theme,
											icon: U ? !1 : _,
											className: m + 1 == f.length ? 'ss__recommendation-bundle__wrapper__selector--last' : '',
											classNamePrefix: a,
											treePath: se,
										};
										return (
											h && (z = { ...z, seedText: $, seed: !0, icon: _, lang: { seedText: G.seedText } }),
											!h || ((me || ae?.enabled == !1) && h && !le)
												? (0, s.Y)(
														ie.o,
														{
															controller: n,
															result: t,
															track: { impression: !h },
															children: (0, s.Y)(Pe, {
																...z,
																children: S
																	? (0, g.Y)(S, { controller: n, treePath: se, result: t, seed: h, selected: F, onProductSelect: ye })
																	: (0, s.Y)(K.Q, { ...Ae.result, controller: n, result: t }),
															}),
														},
														t.id
												  )
												: null
										);
									}),
								[f, ue, X, U, _, me, le, S, i.theme, $]
							);
						return (
							r && delete G.seedText.value,
							f?.length
								? (0, s.Y)(ge._, {
										children: (0, s.Y)('div', {
											...Ze,
											ref: Ve,
											className: R()(a, { [`${a}--stacked`]: !de }, xe, Me),
											children: Xe
												? (0, s.FD)(he.l, {
														controller: n,
														children: [
															E && (0, s.Y)('h3', { className: `${a}__title`, children: (0, s.Y)('span', { children: E }) }),
															o &&
																(0, s.Y)('h4', { className: 'ss__recommendation-bundle__description', children: (0, s.Y)('span', { children: o }) }),
															(0, s.FD)('div', {
																className: R()(`${a}__wrapper`, { [`${a}__wrapper--seed-in-carousel`]: me, [`${a}__wrapper--vertical`]: O }),
																children: [
																	De
																		? (0, s.FD)(v.FK, {
																				children: [
																					!me &&
																						!le &&
																						j &&
																						(0, s.Y)('div', {
																							className: `${a}__wrapper__seed-container`,
																							children: (0, s.Y)(ie.o, {
																								controller: n,
																								result: j,
																								track: { impression: !1 },
																								children: (0, s.Y)(Pe, {
																									seedText: $,
																									seed: !0,
																									title: j.display.mappings.core?.name,
																									onCheck: (t) => {
																										t.stopPropagation(), ye(j);
																									},
																									checked: ue.findIndex((t) => t.id == j.id) > -1,
																									icon: _,
																									hideCheckboxes: X,
																									theme: i.theme,
																									ref: je,
																									treePath: se,
																									classNamePrefix: a,
																									lang: { seedText: G.seedText },
																									children: (() => {
																										if (S && n) {
																											const t = S;
																											return (0, s.Y)(t, {
																												controller: n,
																												seed: !0,
																												selected: ue.findIndex((m) => m.id == j.id) > -1,
																												onProductSelect: ye,
																												result: j,
																												treePath: se,
																											});
																										} else return (0, s.Y)(K.Q, { ...Ae.result, controller: n, result: j });
																									})(),
																								}),
																							}),
																						}),
																					(0, s.Y)('div', {
																						className: `${a}__wrapper__carousel`,
																						children: (0, s.Y)(L.FN, {
																							prevButton: Ge,
																							nextButton: Fe,
																							hideButtons: ze,
																							loop: ke,
																							spaceBetween: Je,
																							pagination: He,
																							breakpoints: $e,
																							watchSlidesProgress: !0,
																							observer: !0,
																							vertical: O,
																							onResize: () => Qe(),
																							...Ae.carousel,
																							...Ue,
																							...P,
																							ref: Ke,
																							children: We,
																						}),
																					}),
																				],
																		  })
																		: (0, s.Y)(s.FK, { children: We }),
																	de &&
																		(0, s.Y)(fe, {
																			ctaSlot: we,
																			cartStore: M,
																			onAddToCart: (t) => Le(t),
																			ctaButtonText: Te,
																			ctaButtonSuccessText: ce,
																			ctaButtonSuccessTimeout: ve,
																			ctaIcon: Se,
																			treePath: se,
																			classNamePrefix: a,
																			lang: {
																				ctaButtonSuccessText: G.ctaButtonSuccessText,
																				ctaButtonText: G.ctaButtonText,
																				ctaSubtotalTitle: G.ctaSubtotalTitle,
																			},
																		}),
																],
															}),
															!de &&
																(0, s.Y)(fe, {
																	ctaSlot: we,
																	cartStore: M,
																	onAddToCart: (t) => Le(t),
																	ctaButtonText: Te,
																	ctaButtonSuccessText: ce,
																	ctaButtonSuccessTimeout: ve,
																	ctaIcon: Se,
																	treePath: se,
																	classNamePrefix: a,
																	lang: {
																		ctaButtonSuccessText: G.ctaButtonSuccessText,
																		ctaButtonText: G.ctaButtonText,
																		ctaSubtotalTitle: G.ctaSubtotalTitle,
																	},
																}),
														],
												  })
												: (0, s.Y)(he.l, {
														controller: n,
														children: f.map((t) => (0, s.Y)(ie.o, { controller: n, result: t, children: (0, s.Y)(s.FK, {}) })),
												  }),
										}),
								  })
								: (0, s.Y)(v.FK, {})
						);
					});
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'(Ce, k, e) {
				e.d(k, { l: () => A });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/preact/dist/preact.module.js'),
					B = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					te = e('../../node_modules/mobx-react-lite/es/index.js'),
					R = e('../../node_modules/classnames/index.js'),
					x = e.n(R),
					Y = e('./components/src/utilities/mergeStyles.ts');
				const oe = () => (0, B.AH)({}),
					A = (0, te.PA)((L) => {
						const { children: K, className: J, internalClassName: H } = L,
							re = (0, v.v2)(K),
							g = (0, Y.Z)(L, oe);
						return re.length
							? (0, s.Y)('div', { className: x()('ss__recommendation-profile-tracker', J, H), ...g, children: K })
							: (0, s.Y)(v.FK, {});
					});
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(Ce, k, e) {
				e.d(k, { o: () => L });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					B = e('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
					te = e('../../node_modules/classnames/index.js'),
					R = e.n(te),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					Y = e('./components/src/utilities/mergeProps.ts'),
					oe = e('./components/src/utilities/createImpressionObserver.ts');
				const A = { ResultTracker: () => (0, v.AH)({}) },
					L = (0, B.PA)((K) => {
						const J = (0, x.u)(),
							H = (0, Y.v6)('resultTracker', J, {}, K),
							re = { impression: !0, click: !0 },
							{ children: g, result: Z, track: ge, controller: ne, className: he, internalClassName: ie, disableStyles: Ee, style: V } = H,
							Q = { ...re, ...ge },
							{ ref: Pe, inViewport: N } = (0, oe.Q)();
						N && Q.impression && ne?.track.product.impression(Z);
						const w = {};
						return (
							Ee ? V && (w.css = [V]) : (w.css = [A.ResultTracker(), V]),
							(0, s.Y)('div', {
								className: R()('ss__result-tracker', `ss__${ne?.type}-result-tracker`, he, ie),
								onClick: (fe) => {
									Q.click && ne?.track.product.click(fe, Z);
								},
								ref: Pe,
								...w,
								children: g,
							})
						);
					});
			},
			'./components/src/utilities/componentNameToClassName.ts'(Ce, k, e) {
				e.d(k, { b: () => s });
				const s = (v) => v.replace(/([A-Z])/g, (B) => '-' + B.toLowerCase());
			},
		},
	]);
})();
