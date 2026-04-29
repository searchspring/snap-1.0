'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9004],
		{
			'./components/src/components/Molecules/Modal/Modal.tsx'(V, p, e) {
				e.d(p, { a: () => y });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					K = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					U = e('../../node_modules/classnames/index.js'),
					f = e.n(U),
					b = e('../../node_modules/mobx-react-lite/es/index.js'),
					S = e('./components/src/providers/cache.tsx'),
					j = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					N = e('./components/src/providers/snap.tsx'),
					Y = e('./components/src/providers/treePath.tsx'),
					z = e('./components/src/hooks/useClickOutside.tsx'),
					k = e('./components/src/hooks/useComponent.tsx'),
					C = e('./components/src/utilities/cloneWithProps.tsx'),
					F = e('./components/src/utilities/defined.ts'),
					H = e('./components/src/utilities/mergeProps.ts'),
					J = e('./components/src/utilities/mergeStyles.ts'),
					T = e('./components/src/hooks/useA11y.tsx'),
					$ = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					A = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js');
				const E = () =>
						(0, K.AH)({
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
					y = (0, b.PA)((n) => {
						const R = (0, j.u)(),
							I = (0, N.uk)(),
							a = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, Y.LU)() },
							r = (0, H.v6)('modal', R, a, n),
							{
								button: x,
								content: v,
								buttonSelector: m,
								children: l,
								disabled: d,
								open: g,
								onClick: h,
								lockScroll: i,
								startOpen: B,
								disableClickOutside: u,
								disableA11y: M,
								className: Z,
								internalClassName: W,
								disableStyles: c,
								overlayColor: P,
								onOverlayClick: G,
								treePath: O,
								customComponent: w,
							} = r;
						if (w) {
							const t = (0, k.x)(I?.templates?.library.import.component.modal || {}, w);
							if (t) return (0, o.Y)(t, { ...r });
						}
						const te = {
							overlay: {
								internalClassName: 'ss__modal__overlay',
								onClick: (t) => {
									G && G(t), D();
								},
								...(0, F.s)({ disableStyles: c, color: P }),
								theme: r?.theme,
								treePath: O,
							},
						};
						let s, L;
						const Q = g === void 0;
						Q ? ([s, L] = (0, _.J0)(B)) : (s = g);
						let q;
						u ||
							(q = (0, z.L)(() => {
								s && (d || (Q && L && L(!1)));
							}));
						const D = () => {
								Q && L && L((t) => !t);
							},
							se = (0, J.Z)(r, E);
						return (
							(0, _.vJ)(
								() => (
									s && i ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
									() => {
										document.body.style.overflow = '';
									}
								),
								[s, i]
							),
							(0, _.vJ)(() => {
								const t = m ? (typeof m == 'string' ? document.querySelector(m) : m) : null,
									ee = (0, A.s)(() => {
										setTimeout(() => {
											s && i ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
										}, 100);
									}, 10),
									oe = (ne) => {
										D(), h && h(ne);
									};
								return (
									t && (d || t.addEventListener('click', oe)),
									window.addEventListener('resize', ee),
									() => {
										window.removeEventListener('resize', ee), t && t.removeEventListener('click', oe);
									}
								);
							}, []),
							(0, o.Y)(S._, {
								children: (0, o.FD)('div', {
									...se,
									className: f()('ss__modal', { 'ss__modal--open': s }, { 'ss__modal--disabled': d }, Z, W),
									ref: q,
									children: [
										!m &&
											x &&
											(0, o.Y)('div', {
												className: 'ss__modal__button',
												ref: (t) => (M ? null : (0, T.iy)(t)),
												'aria-expanded': s,
												role: 'button',
												onClick: (t) => {
													d || (D(), h && h(t));
												},
												children: (0, C.Y)(x, { open: s, toggleOpen: D, treePath: O }),
											}),
										(v || l) &&
											s &&
											(0, o.FD)('div', {
												className: 'ss__modal__content',
												ref: (t) => (M ? null : (0, T.iy)(t)),
												children: [(0, C.Y)(v, { open: s, toggleOpen: D, treePath: O }), (0, C.Y)(l, { open: s, toggleOpen: D, treePath: O })],
											}),
										(0, o.Y)($.h, { ...te.overlay, active: !!s }),
									],
								}),
							})
						);
					});
			},
			'./components/src/components/Templates/AutocompleteModal/AutocompleteModal.tsx'(V, p, e) {
				e.d(p, { c: () => $ });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					_ = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					K = e('../../node_modules/mobx-react-lite/es/index.js'),
					U = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					f = e('./components/src/utilities/defined.ts'),
					b = e('./components/src/utilities/mergeProps.ts'),
					S = e('./components/src/utilities/mergeStyles.ts'),
					j = e('./components/src/providers/cache.tsx'),
					N = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					Y = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					z = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					k = e('../../node_modules/classnames/index.js'),
					C = e.n(k),
					F = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					H = e('./components/src/hooks/useA11y.tsx'),
					J = e('./components/src/hooks/useAcRenderedInput.tsx');
				const T = ({ width: A, height: E, theme: y }) => {
						const n = y?.variables;
						return (0, U.AH)({
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
								maxHeight: E ? 'initial' : '80vh',
								overflow: 'scroll',
								marginLeft: 'auto',
								marginRight: 'auto',
								background: '#fff',
								zIndex: 1001,
								width: A,
								height: E,
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
					$ = (0, K.PA)((A) => {
						const E = (0, N.u)(),
							y = { layout: [['c1', 'c2', 'c3']], overlayColor: 'rgba(0,0,0,0.8)', width: '950px', renderInput: !0 },
							n = (0, b.v6)('autocompleteModal', E, y, A),
							[R, I] = (0, _.J0)(!1),
							X = '';
						let a = n.input,
							r = n.buttonSelector;
						a && typeof a == 'string' && (a = document.querySelector(a)), !r && a && (r = a);
						const {
								layout: x,
								disableStyles: v,
								overlayColor: m,
								controller: l,
								renderInput: d,
								className: g,
								internalClassName: h,
								treePath: i,
							} = n,
							B = (0, _.li)(null);
						(0, _.vJ)(() => {
							const P = (G, O) => {
								l.store.state.focusedInput || I(!1), O();
							};
							return (
								l.eventManager.on('focusChange', P),
								() => {
									l.eventManager.events.focusChange?.remove(P);
								}
							);
						}, []);
						const u = () => {
								l.setFocused(), I(!1);
							},
							M = {
								autocompleteLayout: { layout: x, onReset: () => u(), ...(0, f.s)({ disableStyles: v }), theme: n?.theme, treePath: i },
								modal: {
									internalClassName: 'autocomplete-modal__modal',
									buttonSelector: r,
									onOverlayClick: u,
									overlayColor: m,
									open: R,
									...(0, f.s)({ disableStyles: v }),
									theme: n?.theme,
									treePath: i,
								},
								searchInput: {
									internalClassName: 'autocomplete-modal__search-input autocomplete__search-input',
									submitSearchButton: {
										onClick: () => {
											window.location.href = l.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => u(), icon: 'angle-left' },
									inputName: X,
									...(0, f.s)({ disableStyles: v }),
									theme: n?.theme,
									treePath: `${i} modal`,
								},
							},
							Z = (0, S.Z)(n, T);
						let W;
						a && (W = (0, J.x)({ input: a, controller: l, renderedInputRef: B, renderInput: !!d, buttonSelector: r, setActive: I }));
						const c = { ...n };
						return (
							delete c.width,
							delete c.className,
							delete c.internalClassName,
							delete c.style,
							delete c.styleScript,
							delete c.themeStyleScript,
							x?.length && R
								? (0, o.Y)(j._, {
										children: (0, o.Y)('div', {
											...Z,
											className: C()('ss__autocomplete-modal', g, h),
											children: (0, o.Y)(z.a, {
												...M.modal,
												children: (0, o.FD)('div', {
													className: 'ss__autocomplete-modal__inner',
													ref: (P) => (0, H.iy)(P, 0, !0, u),
													children: [
														d ? (0, o.Y)(F.D, { ...M.searchInput, value: l.store.state.input || '', inputRef: B }) : (0, o.Y)(o.FK, {}),
														(0, o.Y)(Y.h, { ...c, ...M.autocompleteLayout, input: W, controller: l, treePath: `${i} modal` }),
													],
												}),
											}),
										}),
								  })
								: null
						);
					});
			},
			'./src/Templates/Stores/library/components/AutocompleteModal.ts'(V, p, e) {
				e.r(p), e.d(p, { AutocompleteModal: () => o.c });
				var o = e('./components/src/components/Templates/AutocompleteModal/AutocompleteModal.tsx');
			},
		},
	]);
})();
