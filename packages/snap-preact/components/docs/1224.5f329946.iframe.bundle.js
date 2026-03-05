'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[1224],
		{
			'./components/src/components/Molecules/Slideshow/Slideshow.tsx'(Xe, ie, n) {
				n.d(ie, { b: () => pe });
				var s = n('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = n('../../node_modules/preact/hooks/dist/hooks.module.js'),
					re = n('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					le = n('../../node_modules/classnames/index.js'),
					k = n.n(le),
					ce = n('./components/src/providers/cache.tsx'),
					de = n('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					ue = n('./components/src/providers/treePath.tsx'),
					w = n('./components/src/utilities/defined.ts'),
					_e = n('./components/src/utilities/mergeProps.ts'),
					he = n('./components/src/utilities/mergeStyles.ts'),
					ge = n('./components/src/components/Atoms/Image/Image.tsx'),
					T = n('./components/src/components/Atoms/Button/Button.tsx'),
					R = n('./components/src/hooks/useLang.tsx'),
					me = n('../../node_modules/deepmerge/dist/cjs.js'),
					K = n.n(me);
				const fe = ({ theme: N, slidesToShow: E = 1, gap: y = 16, overlayNavigation: C = !1, showNavigation: a }) =>
					(0, re.AH)({
						position: 'relative',
						overflow: 'hidden',
						'.ss__slideshow__container': {
							position: 'relative',
							width: `calc(100% - ${C || !a ? 0 : 60}px)`,
							margin: 'auto',
							overflow: 'hidden',
							touchAction: 'pan-y pinch-zoom',
						},
						'.ss__slideshow__track': {
							display: 'flex',
							width: '100%',
							transition: 'transform 0.3s ease-in-out',
							'&.ss__slideshow__track--dragging': { transition: 'none' },
							'&.ss__slideshow__track--centered': { justifyContent: 'center' },
						},
						'.ss__slideshow__slide': {
							maxWidth: `calc((100% - ${E * y}px) / ${E})`,
							minWidth: `calc((100% - ${E * y}px) / ${E})`,
							marginLeft: `calc(${y}px / 2)`,
							marginRight: `calc(${y}px / 2)`,
							position: 'relative',
							userSelect: 'none',
							img: { width: '100%', height: '100%', objectFit: 'cover', display: 'block', pointerEvents: 'none' },
						},
						'.ss__slideshow__slide--content': { display: 'flex', alignItems: 'center', justifyContent: 'center', '> *': { width: '100%' } },
						'.ss__slideshow__slide--clickable': {
							cursor: 'pointer',
							'&:hover img': { opacity: 0.9, transition: 'opacity 0.2s ease' },
							'&:focus-visible': { outline: '2px solid #005fcc', outlineOffset: '2px' },
						},
						'.ss__slideshow__navigation': {
							position: 'absolute',
							top: '50%',
							transform: 'translateY(-50%)',
							zIndex: 10,
							'.ss__button': {
								border: 'none',
								width: '10px',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								cursor: 'pointer',
								'&:disabled': { cursor: 'not-allowed' },
								'&:focus-visible': { outline: '2px solid #005fcc', outlineOffset: '2px' },
							},
							'&--prev': { left: `${C ? 10 : 0}px` },
							'&--next': { right: `${C ? 10 : 0}px` },
						},
						'.ss__slideshow__pagination': {
							position: 'relative',
							margin: '10px auto',
							width: '100%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							gap: '8px',
							'.ss__slideshow__dot': {
								width: '8px',
								height: '8px',
								borderRadius: '50%',
								background: '#000',
								opacity: '.2',
								border: 'none',
								cursor: 'pointer',
								padding: 0,
								'&.ss__slideshow__dot--active': { opacity: '0.8', background: N?.variables?.colors?.primary || '#000' },
								'&:focus-visible': { outline: '-webkit-focus-ring-color auto 1px !important' },
							},
						},
						'.ss__slideshow__sr-only': {
							position: 'absolute',
							width: '1px',
							height: '1px',
							padding: 0,
							margin: '-1px',
							overflow: 'hidden',
							clip: 'rect(0, 0, 0, 0)',
							whiteSpace: 'nowrap',
							border: 0,
						},
					});
				function pe(N) {
					const E = (0, de.u)(),
						C = {
							treePath: (0, ue.LU)(),
							fallbackImage: '//cdn.athoscommerce.net/snap/images/fallback.png',
							autoPlay: !1,
							autoPlayInterval: 3e3,
							showNavigation: !0,
							showPagination: !0,
							centerInsufficientSlides: !0,
							slidesToShow: 4,
							slidesToMove: 1,
							gap: 10,
							ariaLabel: 'slideshow',
							touchDragging: !0,
							dragThreshold: 50,
						},
						a = (0, _e.v6)('slideshow', E, C, N),
						{
							className: ve,
							slides: Pe,
							fallbackImage: H,
							autoPlay: G,
							autoPlayInterval: $,
							showNavigation: be,
							showPagination: we,
							loop: g,
							alwaysShowNavigation: Ee,
							slidesToShow: v,
							slideImageAlt: De,
							centerInsufficientSlides: Me,
							ariaLabel: Ie,
							ariaLabelledBy: xe,
							disableStyles: D,
							treePath: M,
							overlayNavigation: V,
							dragThreshold: ye,
						} = a;
					let r = a.touchDragging;
					const I = {
						Image: { fallback: H, ...(0, w.s)({ disableStyles: D }), theme: a.theme, treePath: M },
						NextButton: {
							backgroundColor: V ? 'rgba(255, 255, 255, 0.9)' : void 0,
							name: 'next',
							...(0, w.s)({ disableStyles: D }),
							theme: a.theme,
							treePath: M,
						},
						PrevButton: {
							backgroundColor: V ? 'rgba(255, 255, 255, 0.9)' : void 0,
							name: 'prev',
							...(0, w.s)({ disableStyles: D }),
							theme: a.theme,
							treePath: M,
						},
						PauseButton: { name: 'pause', ...(0, w.s)({ disableStyles: D }), theme: a.theme, treePath: M },
						PaginationButton: { name: 'pagination', ...(0, w.s)({ disableStyles: D }), theme: a.theme, treePath: M },
						PaginationCurrentButton: { name: 'pagination-current', ...(0, w.s)({ disableStyles: D }), theme: a.theme, treePath: M },
					};
					let i = a.slidesToMove;
					i || (i = 1);
					const [m, P] = (0, d.J0)(0),
						[f, x] = (0, d.J0)(G),
						u = (0, d.li)(null),
						Ce = (0, d.li)(null),
						A = (0, d.li)(null),
						[c, Z] = (0, d.J0)(!1),
						[Q, Be] = (0, d.J0)(0),
						[Le, q] = (0, d.J0)(0),
						[Oe, ee] = (0, d.J0)(0),
						_ = Pe.map((e, t) =>
							typeof e == 'string'
								? { src: e }
								: e && typeof e == 'object' && 'props' in e && 'type' in e
								? { content: e, alt: `Slide ${t + 1}` }
								: e && typeof e == 'object'
								? e
								: { content: e, alt: `Slide ${t + 1}` }
						),
						B = _.length,
						L = Math.min(v, B),
						o = Math.max(0, B - L),
						O = [];
					for (let e = 0; e <= o; e += i) O.push(e);
					const U = O.length,
						ke = O.findIndex((e) => m >= e && m < e + i);
					(0, d.vJ)(() => {
						if (f && _.length > v && !c)
							return (
								(u.current = setInterval(() => {
									P((e) => {
										const t = e + i;
										return g ? (t > o ? 0 : t) : t >= o ? (x(!1), o) : t;
									});
								}, $)),
								() => {
									u.current && clearInterval(u.current);
								}
							);
						u.current && clearInterval(u.current);
					}, [f, $, _.length, v, i, g, o, c]),
						B <= L && (r = !1);
					const te = (e) => {
							r && (x(!1), Z(!0), Be(e), q(e), u.current && clearInterval(u.current));
						},
						se = (e) => {
							if (!c || !r) return;
							q(e);
							const t = e - Q;
							ee(t);
						},
						S = () => {
							if (!c || !r) return;
							const e = Le - Q,
								p = (A.current?.parentElement?.offsetWidth || 0) / L,
								h = Math.min(ye, p * 0.3);
							Math.abs(e) > h && (e > 0 && (g || m > 0) ? Y() : e < 0 && (g || m < o) && J()),
								Z(!1),
								ee(0),
								f &&
									_.length > v &&
									(u.current = setInterval(() => {
										P((b) => {
											const l = b + i;
											return g ? (l > o ? 0 : l) : l >= o ? (x(!1), o) : l;
										});
									}, $));
						},
						j = (e) => {
							se(e.clientX);
						};
					(0, d.vJ)(() => {
						if (c && r)
							return (
								document.addEventListener('mousemove', j),
								document.addEventListener('mouseup', S),
								() => {
									document.removeEventListener('mousemove', j), document.removeEventListener('mouseup', S);
								}
							);
					}, [c, r]);
					const Te = () => {
							f && u.current && !c && clearInterval(u.current);
						},
						$e = () => {
							f &&
								_.length > v &&
								!c &&
								(u.current = setInterval(() => {
									P((e) => {
										const t = e + i;
										return g ? (t > o ? 0 : t) : t >= o ? (x(!1), o) : t;
									});
								}, $));
						},
						ne = (e, t) => {
							e.onClick && !c && e.onClick(e, t);
						},
						Ae = (e, t, p) => {
							(e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), ne(t, p));
						},
						Se = (e) => {
							switch (e.key) {
								case 'ArrowLeft':
									e.preventDefault(), Y();
									break;
								case 'ArrowRight':
									e.preventDefault(), J();
									break;
								case 'Home':
									e.preventDefault(), P(0);
									break;
								case 'End':
									e.preventDefault(), P(o);
									break;
								case ' ':
								case 'Spacebar':
									e.preventDefault(), oe();
									break;
								case 'Escape':
									e.preventDefault(), x(!1);
									break;
							}
						},
						Y = () => {
							P((e) => {
								let t;
								return g ? (t = e - i < 0 ? o : e - i) : (t = Math.max(0, e - i)), t;
							});
						},
						J = () => {
							P((e) => {
								let t;
								return g ? (t = e + i > o ? 0 : e + i) : (t = Math.min(o, e + i)), t;
							});
						},
						We = (e) => {
							const t = O[e] || 0;
							P(t);
						},
						oe = () => {
							x(!f);
						},
						Re = (0, he.Z)(a, fe);
					if (!_ || _.length === 0) return (0, s.Y)(s.FK, {});
					const Ke = 100 / L;
					let ae = -(m * Ke);
					if (c && A.current) {
						const e = A.current.parentElement?.offsetWidth || 0,
							t = (Oe / e) * 100;
						ae += t;
					}
					const X = !g && m === 0,
						F = !g && m >= o,
						Ne = {
							pauseButton: { value: f ? 'Pause' : 'Play', attributes: { 'aria-label': f ? 'Pause slideshow' : 'Resume slideshow' } },
							nextButton: { attributes: { 'aria-label': `Next slides${F ? ' (disabled)' : ''}` } },
							prevButton: { attributes: { 'aria-label': `Previous slides${X ? ' (disabled)' : ''}` } },
							srInstructions: {
								value: `Use arrow keys to navigate slides. Press spacebar to pause autoplay. Press home or end to go to first or last slide group. ${
									r && 'Swipe left or right to navigate on touch devices.'
								}`,
							},
						},
						Ue = K()(Ne, a.lang || {}),
						W = (0, R.u)(Ue, { isPlaying: f, isNextDisabled: F, isPrevDisabled: X });
					return (0, s.Y)(ce._, {
						children: (0, s.FD)('div', {
							...Re,
							className: k()('ss__slideshow', ve),
							ref: Ce,
							role: 'region',
							'aria-label': Ie,
							'aria-labelledby': xe,
							'aria-roledescription': 'slideshow',
							onMouseEnter: Te,
							onMouseLeave: $e,
							onKeyDown: Se,
							tabIndex: 0,
							children: [
								(0, s.Y)('div', { className: 'ss__slideshow__sr-only', ...W.srInstructions.all }),
								(0, s.Y)('div', {
									className: 'ss__slideshow__container',
									children: (0, s.Y)('div', {
										ref: A,
										className: k()('ss__slideshow__track', { 'ss__slideshow__track--dragging': c, 'ss__slideshow__track--centered': Me && B <= v }),
										style: { transform: `translateX(${ae}%)` },
										role: 'group',
										'aria-label': `Slide group ${m} of ${U}`,
										onTouchStart: r ? (e) => te(e.touches[0]) : void 0,
										onTouchMove: r
											? (e) => {
													c && e.preventDefault();
													const t = e.touches[0];
													se(t.clientX);
											  }
											: void 0,
										onTouchEnd: r ? S : void 0,
										onMouseDown: r
											? (e) => {
													e.preventDefault(), te(e.clientX);
											  }
											: void 0,
										onMouseUp: r ? S : void 0,
										onMouseMove: r ? j : void 0,
										children: _.map((e, t) => {
											const p = t >= m && t < m + v,
												h = !!e.onClick,
												b = !!e.content,
												l = e.alt || De || `Image ${t + 1}`,
												z = { slide: { attributes: { 'aria-label': h ? `Click to view ${l}` : `${l} ${t + 1} of ${_.length}` } } },
												je = K()(z, a.lang || {}),
												Ye = (0, R.u)(je, { hasClickHandler: h, imageAlt: l, index: t, slidesLength: _.length });
											return (0, s.Y)(
												'div',
												{
													...Ye.slide.all,
													className: k()('ss__slideshow__slide', { 'ss__slideshow__slide--clickable': h, 'ss__slideshow__slide--content': b }),
													role: h ? 'button' : b ? 'presentation' : 'img',
													'aria-hidden': !p,
													tabIndex: h && p ? 0 : -1,
													onClick: h ? () => ne(e, t) : void 0,
													onKeyDown: h ? (Je) => Ae(Je, e, t) : void 0,
													children: b ? e.content : (0, s.Y)(ge._, { ...I.Image, src: e.src || H, alt: p ? l : '' }),
												},
												t
											);
										}),
									}),
								}),
								!!(Ee || (be && _.length > v)) &&
									(0, s.FD)(s.FK, {
										children: [
											(0, s.Y)('div', {
												className: 'ss__slideshow__navigation ss__slideshow__navigation--prev',
												children: (0, s.Y)(T.$, {
													icon: 'angle-left',
													className: 'ss__slideshow__prev',
													disabled: X,
													...W.prevButton.all,
													...I.PrevButton,
													onClick: Y,
												}),
											}),
											(0, s.Y)('div', {
												className: 'ss__slideshow__navigation ss__slideshow__navigation--next',
												children: (0, s.Y)(T.$, {
													className: 'ss__slideshow__next',
													icon: 'angle-right',
													disabled: F,
													...W.nextButton.all,
													...I.NextButton,
													onClick: J,
												}),
											}),
										],
									}),
								we &&
									B > L &&
									(0, s.Y)('div', {
										className: 'ss__slideshow__pagination',
										role: 'tablist',
										'aria-label': 'Slide navigation',
										children: O.map((e, t) => {
											const p = { paginationButton: { attributes: { 'aria-label': `Go to slide group ${t + 1} of ${U}` } } },
												h = K()(p, a.lang || {}),
												b = (0, R.u)(h, { index: t, totalDots: U }),
												l = ke === t,
												z = l ? I.PaginationCurrentButton : I.PaginationButton;
											return (0, s.Y)(
												T.$,
												{
													className: k()('ss__slideshow__dot', { 'ss__slideshow__dot--active': l }),
													onClick: () => We(t),
													'aria-selected': l,
													...b.paginationButton.all,
													...z,
													children: (0, s.Y)('span', { className: 'ss__slideshow__dot-inner' }),
												},
												t
											);
										}),
									}),
								G && (0, s.Y)(T.$, { className: 'ss__slideshow__sr-only', ...I.PauseButton, onClick: oe, ...W.pauseButton.all }),
							],
						}),
					});
				}
			},
		},
	]);
})();
