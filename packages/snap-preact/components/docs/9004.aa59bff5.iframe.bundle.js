'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9004],
		{
			'./components/src/components/Molecules/Modal/Modal.tsx'(X, u, e) {
				e.d(u, { a: () => D });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					U = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					b = e('../../node_modules/classnames/index.js'),
					M = e.n(b),
					S = e('../../node_modules/mobx-react-lite/es/index.js'),
					j = e('./components/src/providers/cache.tsx'),
					N = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					Y = e('./components/src/providers/snap.tsx'),
					z = e('./components/src/providers/treePath.tsx'),
					k = e('./components/src/hooks/useClickOutside.tsx'),
					F = e('./components/src/hooks/useComponent.tsx'),
					P = e('./components/src/utilities/cloneWithProps.tsx'),
					J = e('./components/src/utilities/defined.ts'),
					H = e('./components/src/utilities/mergeProps.ts'),
					$ = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/hooks/useA11y.tsx'),
					Z = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					O = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js');
				const p = () =>
						(0, U.AH)({
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
					D = (0, S.PA)((n) => {
						const T = (0, N.u)(),
							f = (0, Y.uk)(),
							G = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, z.LU)() },
							s = (0, H.v6)('modal', T, G, n),
							{
								button: d,
								content: C,
								buttonSelector: c,
								children: R,
								disabled: l,
								open: A,
								onClick: E,
								lockScroll: y,
								startOpen: v,
								disableClickOutside: B,
								disableA11y: m,
								className: I,
								internalClassName: Q,
								disableStyles: W,
								overlayColor: i,
								onOverlayClick: r,
								treePath: x,
								customComponent: K,
							} = s;
						if (K) {
							const t = (0, F.x)(f?.templates?.library.import.component.modal || {}, K);
							if (t) return (0, o.Y)(t, { ...s });
						}
						const te = {
							overlay: {
								internalClassName: 'ss__modal__overlay',
								onClick: (t) => {
									r && r(t), h();
								},
								...(0, J.s)({ disableStyles: W, color: i }),
								theme: s?.theme,
								treePath: x,
							},
						};
						let a, L;
						const V = A === void 0;
						V ? ([a, L] = (0, _.J0)(v)) : (a = A);
						let q;
						B ||
							(q = (0, k.L)(() => {
								a && (l || (V && L && L(!1)));
							}));
						const h = () => {
								V && L && L((t) => !t);
							},
							se = (0, $.Z)(s, p);
						return (
							(0, _.vJ)(
								() => (
									a && y ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
									() => {
										document.body.style.overflow = '';
									}
								),
								[a, y]
							),
							(0, _.vJ)(() => {
								const t = c ? (typeof c == 'string' ? document.querySelector(c) : c) : null,
									ee = (0, O.s)(() => {
										setTimeout(() => {
											a && y ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
										}, 100);
									}, 10),
									oe = (ne) => {
										h(), E && E(ne);
									};
								return (
									t && (l || t.addEventListener('click', oe)),
									window.addEventListener('resize', ee),
									() => {
										window.removeEventListener('resize', ee), t && t.removeEventListener('click', oe);
									}
								);
							}, []),
							(0, o.Y)(j._, {
								children: (0, o.FD)('div', {
									...se,
									className: M()('ss__modal', { 'ss__modal--open': a }, { 'ss__modal--disabled': l }, I, Q),
									ref: q,
									children: [
										!c &&
											d &&
											(0, o.Y)('div', {
												className: 'ss__modal__button',
												ref: (t) => (m ? null : (0, g.iy)(t)),
												'aria-expanded': a,
												role: 'button',
												onClick: (t) => {
													l || (h(), E && E(t));
												},
												children: (0, P.Y)(d, { open: a, toggleOpen: h, treePath: x }),
											}),
										(C || R) &&
											a &&
											(0, o.FD)('div', {
												className: 'ss__modal__content',
												ref: (t) => (m ? null : (0, g.iy)(t)),
												children: [(0, P.Y)(C, { open: a, toggleOpen: h, treePath: x }), (0, P.Y)(R, { open: a, toggleOpen: h, treePath: x })],
											}),
										(0, o.Y)(Z.h, { ...te.overlay, active: !!a }),
									],
								}),
							})
						);
					});
			},
			'./components/src/components/Templates/AutocompleteModal/AutocompleteModal.tsx'(X, u, e) {
				e.d(u, { c: () => Z });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					U = e('../../node_modules/mobx-react-lite/es/index.js'),
					b = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					M = e('./components/src/utilities/defined.ts'),
					S = e('./components/src/utilities/mergeProps.ts'),
					j = e('./components/src/utilities/mergeStyles.ts'),
					N = e('./components/src/providers/cache.tsx'),
					Y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					z = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					k = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					F = e('../../node_modules/classnames/index.js'),
					P = e.n(F),
					J = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					H = e('./components/src/hooks/useA11y.tsx'),
					$ = e('./components/src/hooks/useAcRenderedInput.tsx');
				const g = ({ width: O, height: p, theme: D }) => {
						const n = D?.variables;
						return (0, b.AH)({
							position: 'fixed',
							left: '0',
							width: '100%',
							height: '100%',
							right: '0',
							top: '0',
							zIndex: 1001,
							pointerEvents: 'none',
							'& .ss__autocomplete-modal__inner': {
								position: 'absolute',
								left: 0,
								right: 0,
								top: '10vh',
								maxHeight: p ? 'initial' : '80vh',
								overflow: 'scroll',
								marginLeft: 'auto',
								marginRight: 'auto',
								background: '#fff',
								zIndex: 1001,
								width: O,
								height: p,
								maxWidth: '100vw',
								pointerEvents: 'auto',
							},
							'& .ss__overlay': { zIndex: 1e3 },
							'& .ss__autocomplete': { position: 'relative' },
							'& .ss__search-input': { margin: '1px' },
							'& .input_wrapper input': { background: '#eee' },
							'& .ss__search-input__button--close-search-icon': { border: 'none' },
							[`@media (max-width: ${n?.breakpoints.desktop}px)`]: { '& .ss__autocomplete-modal__inner': { top: '0', maxHeight: '100vh' } },
						});
					},
					Z = (0, U.PA)((O) => {
						const p = (0, Y.u)(),
							D = { layout: [['c1', 'c2', 'c3']], overlayColor: 'rgba(0,0,0,0.8)', width: '950px', renderInput: !0 },
							n = (0, S.v6)('autocompleteModal', p, D, O),
							[T, f] = (0, _.J0)(!1),
							[w, G] = (0, _.J0)('query');
						let s = n.input,
							d = n.buttonSelector;
						if (s) {
							typeof s == 'string' && (s = document.querySelector(s));
							const r = s?.getAttribute('name');
							r && (G(r), n.renderInput && s.setAttribute('name', ''));
						}
						!d && s && (d = s);
						const {
								layout: C,
								disableStyles: c,
								overlayColor: R,
								controller: l,
								renderInput: A,
								className: E,
								internalClassName: y,
								treePath: v,
							} = n,
							B = (0, _.li)(null);
						(0, _.vJ)(() => {
							const r = (x, K) => {
								l.store.state.focusedInput || f(!1), K();
							};
							return (
								l.eventManager.on('focusChange', r),
								() => {
									l.eventManager.events.focusChange?.remove(r);
								}
							);
						}, []);
						const m = () => {
								l.setFocused(), f(!1);
							},
							I = {
								autocompleteLayout: { layout: C, onReset: () => m(), ...(0, M.s)({ disableStyles: c }), theme: n?.theme, treePath: v },
								modal: {
									internalClassName: 'autocomplete-modal__modal',
									buttonSelector: d,
									onOverlayClick: m,
									overlayColor: R,
									open: T,
									...(0, M.s)({ disableStyles: c }),
									theme: n?.theme,
									treePath: v,
								},
								searchInput: {
									internalClassName: 'autocomplete-modal__search-input autocomplete__search-input',
									submitSearchButton: {
										onClick: () => {
											window.location.href = l.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => m(), icon: 'angle-left' },
									inputName: w,
									...(0, M.s)({ disableStyles: c }),
									theme: n?.theme,
									treePath: `${v} modal`,
								},
							},
							Q = (0, j.Z)(n, g);
						let W;
						s && (W = (0, $.x)({ input: s, controller: l, renderedInputRef: B, renderInput: !!A, buttonSelector: d, setActive: f }));
						const i = { ...n };
						return (
							delete i.width,
							delete i.className,
							delete i.internalClassName,
							delete i.style,
							delete i.styleScript,
							delete i.themeStyleScript,
							C?.length && T
								? (0, o.Y)(N._, {
										children: (0, o.Y)('div', {
											...Q,
											className: P()('ss__autocomplete-modal', E, y),
											children: (0, o.Y)(k.a, {
												...I.modal,
												children: (0, o.FD)('div', {
													className: 'ss__autocomplete-modal__inner',
													ref: (r) => (0, H.iy)(r, 0, !0, m),
													children: [
														A ? (0, o.Y)(J.D, { ...I.searchInput, value: l.store.state.input || '', inputRef: B }) : (0, o.Y)(o.FK, {}),
														(0, o.Y)(z.h, { ...i, ...I.autocompleteLayout, input: W, controller: l, treePath: `${v} modal` }),
													],
												}),
											}),
										}),
								  })
								: null
						);
					});
			},
			'./src/Templates/Stores/library/components/AutocompleteModal.ts'(X, u, e) {
				e.r(u), e.d(u, { AutocompleteModal: () => o.c });
				var o = e('./components/src/components/Templates/AutocompleteModal/AutocompleteModal.tsx');
			},
		},
	]);
})();
