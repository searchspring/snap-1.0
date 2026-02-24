'use strict';
(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[1224],
		{
			'./components/src/components/Atoms/Image/Image.tsx'(we, G, s) {
				s.d(G, { _: () => C, t: () => $ });
				var o = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = s('../../node_modules/preact/hooks/dist/hooks.module.js'),
					V = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					Z = s('../../node_modules/classnames/index.js'),
					y = s.n(Z),
					Q = s('./components/src/providers/cache.tsx'),
					q = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					ee = s('./components/src/providers/treePath.tsx'),
					D = s('./components/src/utilities/mergeProps.ts'),
					te = s('./components/src/utilities/mergeStyles.ts');
				const $ = '//cdn.searchspring.net/ajax_search/img/default_image.png',
					se = ({ height: M }) =>
						(0, V.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: M || 'auto',
							'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
							'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
						});
				function C(M) {
					const oe = (0, q.u)(),
						R = (0, ee.LU)(),
						ne = { fallback: $, lazy: !0, treePath: R },
						N = (0, D.v6)('image', oe, ne, M),
						{
							alt: L,
							src: p,
							fallback: b,
							title: x,
							hoverSrc: n,
							lazy: ae,
							onMouseOver: Y,
							onMouseOut: W,
							onError: k,
							onLoad: O,
							onClick: J,
							className: ie,
							internalClassName: _,
						} = N,
						[re, m] = (0, r.J0)(!1),
						[le, F] = (0, r.J0)(!1),
						K = (0, r.li)('');
					(0, r.vJ)(() => {
						K.current = p;
					}),
						K.current && K.current != p && m(!1);
					const ce = (0, te.Z)(N, se);
					return (0, o.Y)(Q._, {
						children: (0, o.Y)('div', {
							...ce,
							className: y()('ss__image', { 'ss__image--hidden': !re }, ie, _),
							children: (0, o.Y)('img', {
								src: (le ? n : p) || b,
								alt: L,
								title: x || L,
								loading: ae ? 'lazy' : void 0,
								onLoad: (a) => {
									m(!0), O && O(a);
								},
								onClick: (a) => J && J(a),
								onError: (a) => {
									(a.target.src = b || ''), k && k(a);
								},
								onMouseOver: (a) => {
									n && F(!0), Y && Y(a);
								},
								onMouseOut: (a) => {
									n && F(!1), W && W(a);
								},
							}),
						}),
					});
				}
			},
			'./components/src/components/Molecules/Slideshow/Slideshow.tsx'(we, G, s) {
				s.d(G, { b: () => N });
				var o = s('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = s('../../node_modules/preact/hooks/dist/hooks.module.js'),
					V = s('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					Z = s('../../node_modules/classnames/index.js'),
					y = s.n(Z),
					Q = s('./components/src/providers/cache.tsx'),
					q = s('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					ee = s('./components/src/providers/treePath.tsx'),
					D = s('./components/src/utilities/defined.ts'),
					te = s('./components/src/utilities/mergeProps.ts'),
					$ = s('./components/src/utilities/mergeStyles.ts'),
					se = s('./components/src/components/Atoms/Image/Image.tsx'),
					C = s('./components/src/components/Atoms/Button/Button.tsx'),
					M = s('./components/src/hooks/useLang.tsx'),
					oe = s('../../node_modules/deepmerge/dist/cjs.js'),
					R = s.n(oe);
				const ne = ({ theme: L, slidesToShow: p = 1, gap: b = 16, overlayNavigation: x = !1, showNavigation: n }) =>
					(0, V.AH)({
						position: 'relative',
						overflow: 'hidden',
						'.ss__slideshow__container': {
							position: 'relative',
							width: `calc(100% - ${x || !n ? 0 : 60}px)`,
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
							maxWidth: `calc((100% - ${p * b}px) / ${p})`,
							minWidth: `calc((100% - ${p * b}px) / ${p})`,
							marginLeft: `calc(${b}px / 2)`,
							marginRight: `calc(${b}px / 2)`,
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
								transition: 'background 0.2s ease',
								'&:hover': { background: 'rgba(255, 255, 255, 1)' },
								'&:disabled': { cursor: 'not-allowed' },
								'&:focus-visible': { outline: '2px solid #005fcc', outlineOffset: '2px' },
							},
							'&--prev': { left: `${x ? 10 : 0}px` },
							'&--next': { right: `${x ? 10 : 0}px` },
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
								'&.ss__slideshow__dot--active': { opacity: '0.8', background: L?.variables?.colors?.primary || '#000' },
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
				function N(L) {
					const p = (0, q.u)(),
						x = {
							treePath: (0, ee.LU)(),
							fallbackImage: '//cdn.searchspring.net/ajax_search/img/default_image.png',
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
						n = (0, te.v6)('slideshow', p, x, L),
						{
							className: ae,
							slides: Y,
							fallbackImage: W,
							autoPlay: k,
							autoPlayInterval: O,
							showNavigation: J,
							showPagination: ie,
							loop: _,
							alwaysShowNavigation: re,
							slidesToShow: m,
							slideImageAlt: le,
							centerInsufficientSlides: F,
							ariaLabel: K,
							ariaLabelledBy: ce,
							disableStyles: a,
							treePath: B,
							overlayNavigation: pe,
							dragThreshold: ye,
						} = n;
					let c = n.touchDragging;
					const T = {
						Image: { fallback: W, ...(0, D.s)({ disableStyles: a }), theme: n.theme, treePath: B },
						NextButton: {
							backgroundColor: pe ? 'rgba(255, 255, 255, 0.9)' : void 0,
							name: 'next',
							...(0, D.s)({ disableStyles: a }),
							theme: n.theme,
							treePath: B,
						},
						PrevButton: {
							backgroundColor: pe ? 'rgba(255, 255, 255, 0.9)' : void 0,
							name: 'prev',
							...(0, D.s)({ disableStyles: a }),
							theme: n.theme,
							treePath: B,
						},
						PauseButton: { name: 'pause', ...(0, D.s)({ disableStyles: a }), theme: n.theme, treePath: B },
						PaginationButton: { name: 'pagination', ...(0, D.s)({ disableStyles: a }), theme: n.theme, treePath: B },
						PaginationCurrentButton: { name: 'pagination-current', ...(0, D.s)({ disableStyles: a }), theme: n.theme, treePath: B },
					};
					let l = n.slidesToMove;
					l || (l = 1);
					const [v, I] = (0, r.J0)(0),
						[E, A] = (0, r.J0)(k),
						h = (0, r.li)(null),
						Ce = (0, r.li)(null),
						H = (0, r.li)(null),
						[u, ve] = (0, r.J0)(!1),
						[Ee, Le] = (0, r.J0)(0),
						[Be, Pe] = (0, r.J0)(0),
						[Te, De] = (0, r.J0)(0),
						g = Y.map((e, t) =>
							typeof e == 'string'
								? { src: e }
								: e && typeof e == 'object' && 'props' in e && 'type' in e
								? { content: e, alt: `Slide ${t + 1}` }
								: e && typeof e == 'object'
								? e
								: { content: e, alt: `Slide ${t + 1}` }
						),
						U = g.length,
						j = Math.min(m, U),
						i = Math.max(0, U - j),
						S = [];
					for (let e = 0; e <= i; e += l) S.push(e);
					const de = S.length,
						Ae = S.findIndex((e) => v >= e && v < e + l);
					(0, r.vJ)(() => {
						if (E && g.length > m && !u)
							return (
								(h.current = setInterval(() => {
									I((e) => {
										const t = e + l;
										return _ ? (t > i ? 0 : t) : t >= i ? (A(!1), i) : t;
									});
								}, O)),
								() => {
									h.current && clearInterval(h.current);
								}
							);
						h.current && clearInterval(h.current);
					}, [E, O, g.length, m, l, _, i, u]),
						U <= j && (c = !1);
					const Me = (e) => {
							c && (A(!1), ve(!0), Le(e), Pe(e), h.current && clearInterval(h.current));
						},
						be = (e) => {
							if (!u || !c) return;
							Pe(e);
							const t = e - Ee;
							De(t);
						},
						X = () => {
							if (!u || !c) return;
							const e = Be - Ee,
								P = (H.current?.parentElement?.offsetWidth || 0) / j,
								f = Math.min(ye, P * 0.3);
							Math.abs(e) > f && (e > 0 && (_ || v > 0) ? ue() : e < 0 && (_ || v < i) && me()),
								ve(!1),
								De(0),
								E &&
									g.length > m &&
									(h.current = setInterval(() => {
										I((w) => {
											const d = w + l;
											return _ ? (d > i ? 0 : d) : d >= i ? (A(!1), i) : d;
										});
									}, O));
						},
						_e = (e) => {
							be(e.clientX);
						};
					(0, r.vJ)(() => {
						if (u && c)
							return (
								document.addEventListener('mousemove', _e),
								document.addEventListener('mouseup', X),
								() => {
									document.removeEventListener('mousemove', _e), document.removeEventListener('mouseup', X);
								}
							);
					}, [u, c]);
					const Re = () => {
							E && h.current && !u && clearInterval(h.current);
						},
						We = () => {
							E &&
								g.length > m &&
								!u &&
								(h.current = setInterval(() => {
									I((e) => {
										const t = e + l;
										return _ ? (t > i ? 0 : t) : t >= i ? (A(!1), i) : t;
									});
								}, O));
						},
						Ie = (e, t) => {
							e.onClick && !u && e.onClick(e, t);
						},
						ke = (e, t, P) => {
							(e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), Ie(t, P));
						},
						Ke = (e) => {
							switch (e.key) {
								case 'ArrowLeft':
									e.preventDefault(), ue();
									break;
								case 'ArrowRight':
									e.preventDefault(), me();
									break;
								case 'Home':
									e.preventDefault(), I(0);
									break;
								case 'End':
									e.preventDefault(), I(i);
									break;
								case ' ':
								case 'Spacebar':
									e.preventDefault(), xe();
									break;
								case 'Escape':
									e.preventDefault(), A(!1);
									break;
							}
						},
						ue = () => {
							I((e) => {
								let t;
								return _ ? (t = e - l < 0 ? i : e - l) : (t = Math.max(0, e - l)), t;
							});
						},
						me = () => {
							I((e) => {
								let t;
								return _ ? (t = e + l > i ? 0 : e + l) : (t = Math.min(i, e + l)), t;
							});
						},
						Ue = (e) => {
							const t = S[e] || 0;
							I(t);
						},
						xe = () => {
							A(!E);
						},
						je = (0, $.Z)(n, ne);
					if (!g || g.length === 0) return (0, o.Y)(o.FK, {});
					const Se = 100 / j;
					let Oe = -(v * Se);
					if (u && H.current) {
						const e = H.current.parentElement?.offsetWidth || 0,
							t = (Te / e) * 100;
						Oe += t;
					}
					const he = !_ && v === 0,
						ge = !_ && v >= i,
						$e = {
							pauseButton: { value: E ? 'Pause' : 'Play', attributes: { 'aria-label': E ? 'Pause slideshow' : 'Resume slideshow' } },
							nextButton: { attributes: { 'aria-label': `Next slides${ge ? ' (disabled)' : ''}` } },
							prevButton: { attributes: { 'aria-label': `Previous slides${he ? ' (disabled)' : ''}` } },
							srInstructions: {
								value: `Use arrow keys to navigate slides. Press spacebar to pause autoplay. Press home or end to go to first or last slide group. ${
									c && 'Swipe left or right to navigate on touch devices.'
								}`,
							},
						},
						Ne = R()($e, n.lang || {}),
						z = (0, M.u)(Ne, { isPlaying: E, isNextDisabled: ge, isPrevDisabled: he });
					return (0, o.Y)(Q._, {
						children: (0, o.FD)('div', {
							...je,
							className: y()('ss__slideshow', ae),
							ref: Ce,
							role: 'region',
							'aria-label': K,
							'aria-labelledby': ce,
							'aria-roledescription': 'slideshow',
							onMouseEnter: Re,
							onMouseLeave: We,
							onKeyDown: Ke,
							tabIndex: 0,
							children: [
								(0, o.Y)('div', { className: 'ss__slideshow__sr-only', ...z.srInstructions.all }),
								(0, o.Y)('div', {
									className: 'ss__slideshow__container',
									children: (0, o.Y)('div', {
										ref: H,
										className: y()('ss__slideshow__track', { 'ss__slideshow__track--dragging': u, 'ss__slideshow__track--centered': F && U <= m }),
										style: { transform: `translateX(${Oe}%)` },
										role: 'group',
										'aria-label': `Slide group ${v} of ${de}`,
										onTouchStart: c ? (e) => Me(e.touches[0]) : void 0,
										onTouchMove: c
											? (e) => {
													u && e.preventDefault();
													const t = e.touches[0];
													be(t.clientX);
											  }
											: void 0,
										onTouchEnd: c ? X : void 0,
										onMouseDown: c
											? (e) => {
													e.preventDefault(), Me(e.clientX);
											  }
											: void 0,
										onMouseUp: c ? X : void 0,
										onMouseMove: c ? _e : void 0,
										children: g.map((e, t) => {
											const P = t >= v && t < v + m,
												f = !!e.onClick,
												w = !!e.content,
												d = e.alt || le || `Image ${t + 1}`,
												fe = { slide: { attributes: { 'aria-label': f ? `Click to view ${d}` : `${d} ${t + 1} of ${g.length}` } } },
												Ye = R()(fe, n.lang || {}),
												Je = (0, M.u)(Ye, { hasClickHandler: f, imageAlt: d, index: t, slidesLength: g.length });
											return (0, o.Y)(
												'div',
												{
													...Je.slide.all,
													className: y()('ss__slideshow__slide', { 'ss__slideshow__slide--clickable': f, 'ss__slideshow__slide--content': w }),
													role: f ? 'button' : w ? 'presentation' : 'img',
													'aria-hidden': !P,
													tabIndex: f && P ? 0 : -1,
													onClick: f ? () => Ie(e, t) : void 0,
													onKeyDown: f ? (Fe) => ke(Fe, e, t) : void 0,
													children: w ? e.content : (0, o.Y)(se._, { ...T.Image, src: e.src || W, alt: P ? d : '' }),
												},
												t
											);
										}),
									}),
								}),
								!!(re || (J && g.length > m)) &&
									(0, o.FD)(o.FK, {
										children: [
											(0, o.Y)('div', {
												className: 'ss__slideshow__navigation ss__slideshow__navigation--prev',
												children: (0, o.Y)(C.$, {
													icon: 'angle-left',
													className: 'ss__slideshow__prev',
													disabled: he,
													...z.prevButton.all,
													...T.PrevButton,
													onClick: ue,
												}),
											}),
											(0, o.Y)('div', {
												className: 'ss__slideshow__navigation ss__slideshow__navigation--next',
												children: (0, o.Y)(C.$, {
													className: 'ss__slideshow__next',
													icon: 'angle-right',
													disabled: ge,
													...z.nextButton.all,
													...T.NextButton,
													onClick: me,
												}),
											}),
										],
									}),
								ie &&
									U > j &&
									(0, o.Y)('div', {
										className: 'ss__slideshow__pagination',
										role: 'tablist',
										'aria-label': 'Slide navigation',
										children: S.map((e, t) => {
											const P = { paginationButton: { attributes: { 'aria-label': `Go to slide group ${t + 1} of ${de}` } } },
												f = R()(P, n.lang || {}),
												w = (0, M.u)(f, { index: t, totalDots: de }),
												d = Ae === t,
												fe = d ? T.PaginationCurrentButton : T.PaginationButton;
											return (0, o.Y)(
												C.$,
												{
													className: y()('ss__slideshow__dot', { 'ss__slideshow__dot--active': d }),
													onClick: () => Ue(t),
													'aria-selected': d,
													...w.paginationButton.all,
													...fe,
													children: (0, o.Y)('span', { className: 'ss__slideshow__dot-inner' }),
												},
												t
											);
										}),
									}),
								k && (0, o.Y)(C.$, { className: 'ss__slideshow__sr-only', ...T.PauseButton, onClick: xe, ...z.pauseButton.all }),
							],
						}),
					});
				}
			},
		},
	]);
})();
