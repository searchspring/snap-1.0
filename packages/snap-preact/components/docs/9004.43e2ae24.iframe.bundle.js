'use strict';
(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[9004],
		{
			'./components/src/components/Molecules/Modal/Modal.tsx'(J, u, e) {
				e.d(u, { a: () => Z });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					D = e('../../node_modules/classnames/index.js'),
					x = e.n(D),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					f = e('./components/src/providers/cache.tsx'),
					c = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					_ = e('./components/src/providers/treePath.tsx'),
					R = e('./components/src/hooks/useClickOutside.tsx'),
					v = e('./components/src/utilities/cloneWithProps.tsx'),
					T = e('./components/src/utilities/defined.ts'),
					h = e('./components/src/utilities/mergeProps.ts'),
					r = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/hooks/useA11y.tsx'),
					F = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					H = e('../../node_modules/@searchspring/snap-toolbox/dist/esm/debounce/debounce.js');
				const $ = () =>
						(0, a.AH)({
							position: 'relative',
							'&.ss__modal--open': { '& .ss__modal__content': { visibility: 'visible', opacity: 1 } },
							'&.ss__modal--disabled': { '& .ss__modal__button': { cursor: 'initial' } },
							'.ss__modal__button': { cursor: 'pointer' },
							'.ss__modal__content': {
								backgroundColor: '#fff',
								position: 'absolute',
								minWidth: '100%',
								visibility: 'hidden',
								opacity: 0,
								top: 'auto',
								left: 0,
								zIndex: 10004,
							},
						}),
					Z = (0, i.PA)((B) => {
						const K = (0, c.u)(),
							n = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, _.LU)() },
							C = (0, h.v6)('modal', K, n, B),
							{
								button: W,
								content: j,
								buttonSelector: M,
								children: l,
								disabled: m,
								open: U,
								onClick: E,
								lockScroll: b,
								startOpen: P,
								disableClickOutside: N,
								disableA11y: Y,
								className: G,
								internalClassName: A,
								disableStyles: k,
								overlayColor: O,
								onOverlayClick: I,
								treePath: L,
							} = C,
							z = {
								overlay: {
									internalClassName: 'ss__modal__overlay',
									onClick: (s) => {
										I && I(s), g();
									},
									...(0, T.s)({ disableStyles: k, color: O }),
									theme: C?.theme,
									treePath: L,
								},
							};
						let o, d;
						const Q = U === void 0;
						Q ? ([o, d] = (0, p.J0)(P)) : (o = U);
						let V;
						N ||
							(V = (0, R.L)(() => {
								o && (m || (Q && d && d(!1)));
							}));
						const g = () => {
								Q && d && d((s) => !s);
							},
							q = (0, r.Z)(C, $);
						return (
							(0, p.vJ)(
								() => (
									o && b ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
									() => {
										document.body.style.overflow = '';
									}
								),
								[o, b]
							),
							(0, p.vJ)(() => {
								const s = M ? (typeof M == 'string' ? document.querySelector(M) : M) : null,
									X = (0, H.s)(() => {
										setTimeout(() => {
											o && b ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
										}, 100);
									}, 10),
									w = (ee) => {
										g(), E && E(ee);
									};
								return (
									s && (m || s.addEventListener('click', w)),
									window.addEventListener('resize', X),
									() => {
										window.removeEventListener('resize', X), s && s.removeEventListener('click', w);
									}
								);
							}, []),
							(0, t.Y)(f._, {
								children: (0, t.FD)('div', {
									...q,
									className: x()('ss__modal', { 'ss__modal--open': o }, { 'ss__modal--disabled': m }, G, A),
									ref: V,
									children: [
										!M &&
											W &&
											(0, t.Y)('div', {
												className: 'ss__modal__button',
												ref: (s) => (Y ? null : (0, y.iy)(s)),
												'aria-expanded': o,
												role: 'button',
												onClick: (s) => {
													m || (g(), E && E(s));
												},
												children: (0, v.Y)(W, { open: o, toggleOpen: g, treePath: L }),
											}),
										(j || l) &&
											o &&
											(0, t.FD)('div', {
												className: 'ss__modal__content',
												ref: (s) => (Y ? null : (0, y.iy)(s)),
												children: [(0, v.Y)(j, { open: o, toggleOpen: g, treePath: L }), (0, v.Y)(l, { open: o, toggleOpen: g, treePath: L })],
											}),
										(0, t.Y)(F.h, { ...z.overlay, active: !!o }),
									],
								}),
							})
						);
					});
			},
			'./components/src/components/Templates/AutocompleteModal/AutocompleteModal.tsx'(J, u, e) {
				e.d(u, { c: () => Z });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = e('../../node_modules/preact/dist/preact.module.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					D = e('../../node_modules/mobx-react-lite/es/index.js'),
					x = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('./components/src/utilities/defined.ts'),
					f = e('./components/src/utilities/mergeProps.ts'),
					c = e('./components/src/utilities/mergeStyles.ts'),
					_ = e('./components/src/providers/cache.tsx'),
					R = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					v = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					T = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					h = e('../../node_modules/classnames/index.js'),
					r = e.n(h),
					y = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					F = e('./components/src/hooks/useA11y.tsx'),
					H = e('./components/src/hooks/useAcRenderedInput.tsx');
				const $ = ({ width: B, height: K, theme: S }) => {
						const n = S?.variables;
						return (0, x.AH)({
							position: 'fixed',
							left: '0',
							width: '100%',
							height: '100%',
							right: '0',
							top: '0',
							zIndex: 1001,
							'& .ss__autocomplete-modal__inner': {
								position: 'absolute',
								left: 0,
								right: 0,
								top: '10vh',
								maxHeight: '80vh',
								overflow: 'scroll',
								marginLeft: 'auto',
								marginRight: 'auto',
								background: '#fff',
								zIndex: 1001,
								width: B,
								height: K,
								maxWidth: '100vw',
							},
							'& .ss__overlay': { zIndex: 1e3 },
							'& .ss__autocomplete': { position: 'relative' },
							'& .ss__search-input': { margin: '1px' },
							'& .input_wrapper input': { background: '#eee' },
							'& .ss__search-input__button--close-search-icon': { border: 'none' },
							[`@media (max-width: ${n?.breakpoints.desktop}px)`]: { '& .ss__autocomplete-modal__inner': { top: '0', maxHeight: '100vh' } },
						});
					},
					Z = (0, D.PA)((B) => {
						const K = (0, R.u)(),
							S = { layout: [['c1', 'c2', 'c3']], overlayColor: 'rgba(0,0,0,0.8)', width: '950px', renderInput: !0 },
							n = (0, f.v6)('autocompleteModal', K, S, B),
							[C, W] = (0, a.J0)(!1),
							[j, M] = (0, a.J0)('query');
						let l = n.input,
							m = n.buttonSelector;
						if (l) {
							typeof l == 'string' && (l = document.querySelector(l));
							const d = l?.getAttribute('name');
							d && (M(d), n.renderInput && l.setAttribute('name', ''));
						}
						!m && l && (m = l);
						const {
								layout: U,
								disableStyles: E,
								overlayColor: b,
								controller: P,
								renderInput: N,
								className: Y,
								internalClassName: G,
								treePath: A,
							} = n,
							k = (0, a.li)(null),
							O = () => {
								P.setFocused(), W(!1);
							},
							I = {
								autocompleteLayout: { layout: U, onReset: () => O(), ...(0, i.s)({ disableStyles: E }), theme: n?.theme, treePath: A },
								modal: {
									internalClassName: 'autocomplete-modal__modal',
									buttonSelector: m,
									onOverlayClick: () => O(),
									overlayColor: b,
									open: C,
									...(0, i.s)({ disableStyles: E }),
									theme: n?.theme,
									treePath: A,
								},
								searchInput: {
									internalClassName: 'autocomplete-modal__search-input',
									submitSearchButton: {
										onClick: () => {
											window.location.href = P.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => O(), icon: 'angle-left' },
									inputName: j,
									...(0, i.s)({ disableStyles: E }),
									theme: n?.theme,
									treePath: `${A} modal`,
								},
							},
							L = (0, c.Z)(n, $);
						let z;
						l && (z = (0, H.x)({ input: l, controller: P, renderedInputRef: k, renderInput: !!N, buttonSelector: m, setActive: W }));
						const o = { ...n };
						return (
							delete o.width,
							delete o.className,
							delete o.internalClassName,
							delete o.style,
							delete o.styleScript,
							delete o.themeStyleScript,
							U?.length && C
								? (0, t.Y)(_._, {
										children: (0, t.Y)('div', {
											...L,
											className: r()('ss__autocomplete-modal', Y, G),
											children: (0, t.Y)(T.a, {
												...I.modal,
												children: (0, t.Y)(p.FK, {
													children: (0, t.FD)('div', {
														className: 'ss__autocomplete-modal__inner',
														ref: (d) => (0, F.iy)(d, 0, !0, O),
														children: [
															N ? (0, t.Y)(y.D, { ...I.searchInput, value: P.store.state.input || '', inputRef: k }) : (0, t.Y)(t.FK, {}),
															(0, t.Y)(v.h, { ...o, ...I.autocompleteLayout, input: z, controller: P, treePath: `${A} modal` }),
														],
													}),
												}),
											}),
										}),
								  })
								: (0, t.Y)(p.FK, {})
						);
					});
			},
			'./components/src/hooks/useAcRenderedInput.tsx'(J, u, e) {
				e.d(u, { x: () => p });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function p({ input: a, controller: D, renderInput: x, buttonSelector: i, renderedInputRef: f, setActive: c }) {
					const [_, R] = (0, t.J0)(a),
						[v, T] = (0, t.J0)(!1),
						h = () => {
							c && c(!0),
								setTimeout(async () => {
									v || (R(f.current), (D.config.selector = '.ss__search-input__input'), await D.bind(), f?.current?.focus()), T(!0);
								});
						};
					return (
						(0, t.vJ)(() => {
							if (x && i) {
								let r;
								typeof i == 'string' ? (r = document.querySelector(i)) : (r = i),
									r &&
										(r.addEventListener('click', (y) => {
											y.stopPropagation(), h();
										}),
										r.addEventListener('focus', () => h()),
										r.addEventListener('select', () => h()));
							} else
								c &&
									(a.addEventListener('click', (r) => {
										r.stopPropagation(), c(!0);
									}),
									a.addEventListener('focus', () => c(!0)),
									a.addEventListener('select', () => c(!0)));
						}, []),
						(0, t.vJ)(() => {
							a !== _ &&
								_?.addEventListener('input', () => {
									a.value = _.value;
								});
						}, [_]),
						_
					);
				}
			},
			'./src/Templates/Stores/library/components/AutocompleteModal.ts'(J, u, e) {
				e.r(u), e.d(u, { AutocompleteModal: () => t.c });
				var t = e('./components/src/components/Templates/AutocompleteModal/AutocompleteModal.tsx');
			},
		},
	]);
})();
