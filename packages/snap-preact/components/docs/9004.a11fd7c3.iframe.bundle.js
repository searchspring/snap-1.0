'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9004],
		{
			'./components/src/components/Molecules/Modal/Modal.tsx'(Q, u, e) {
				e.d(u, { a: () => f });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					K = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					U = e('../../node_modules/classnames/index.js'),
					O = e.n(U),
					b = e('../../node_modules/mobx-react-lite/es/index.js'),
					S = e('./components/src/providers/cache.tsx'),
					j = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					N = e('./components/src/providers/treePath.tsx'),
					Y = e('./components/src/hooks/useClickOutside.tsx'),
					D = e('./components/src/utilities/cloneWithProps.tsx'),
					z = e('./components/src/utilities/defined.ts'),
					k = e('./components/src/utilities/mergeProps.ts'),
					F = e('./components/src/utilities/mergeStyles.ts'),
					I = e('./components/src/hooks/useA11y.tsx'),
					H = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					J = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js');
				const $ = () =>
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
					f = (0, b.PA)((p) => {
						const A = (0, j.u)(),
							L = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, N.LU)() },
							E = (0, k.v6)('modal', A, L, p),
							{
								button: x,
								content: T,
								buttonSelector: s,
								children: c,
								disabled: _,
								open: v,
								onClick: h,
								lockScroll: a,
								startOpen: R,
								disableClickOutside: Z,
								disableA11y: g,
								className: M,
								internalClassName: B,
								disableStyles: m,
								overlayColor: y,
								onOverlayClick: W,
								treePath: d,
							} = E,
							i = {
								overlay: {
									internalClassName: 'ss__modal__overlay',
									onClick: (n) => {
										W && W(n), P();
									},
									...(0, z.s)({ disableStyles: m, color: y }),
									theme: E?.theme,
									treePath: d,
								},
							};
						let t, C;
						const G = v === void 0;
						G ? ([t, C] = (0, r.J0)(R)) : (t = v);
						let V;
						Z ||
							(V = (0, Y.L)(() => {
								t && (_ || (G && C && C(!1)));
							}));
						const P = () => {
								G && C && C((n) => !n);
							},
							q = (0, F.Z)(E, $);
						return (
							(0, r.vJ)(
								() => (
									t && a ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
									() => {
										document.body.style.overflow = '';
									}
								),
								[t, a]
							),
							(0, r.vJ)(() => {
								const n = s ? (typeof s == 'string' ? document.querySelector(s) : s) : null,
									X = (0, J.s)(() => {
										setTimeout(() => {
											t && a ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
										}, 100);
									}, 10),
									w = (ee) => {
										P(), h && h(ee);
									};
								return (
									n && (_ || n.addEventListener('click', w)),
									window.addEventListener('resize', X),
									() => {
										window.removeEventListener('resize', X), n && n.removeEventListener('click', w);
									}
								);
							}, []),
							(0, o.Y)(S._, {
								children: (0, o.FD)('div', {
									...q,
									className: O()('ss__modal', { 'ss__modal--open': t }, { 'ss__modal--disabled': _ }, M, B),
									ref: V,
									children: [
										!s &&
											x &&
											(0, o.Y)('div', {
												className: 'ss__modal__button',
												ref: (n) => (g ? null : (0, I.iy)(n)),
												'aria-expanded': t,
												role: 'button',
												onClick: (n) => {
													_ || (P(), h && h(n));
												},
												children: (0, D.Y)(x, { open: t, toggleOpen: P, treePath: d }),
											}),
										(T || c) &&
											t &&
											(0, o.FD)('div', {
												className: 'ss__modal__content',
												ref: (n) => (g ? null : (0, I.iy)(n)),
												children: [(0, D.Y)(T, { open: t, toggleOpen: P, treePath: d }), (0, D.Y)(c, { open: t, toggleOpen: P, treePath: d })],
											}),
										(0, o.Y)(H.h, { ...i.overlay, active: !!t }),
									],
								}),
							})
						);
					});
			},
			'./components/src/components/Templates/AutocompleteModal/AutocompleteModal.tsx'(Q, u, e) {
				e.d(u, { c: () => $ });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					K = e('../../node_modules/mobx-react-lite/es/index.js'),
					U = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					O = e('./components/src/utilities/defined.ts'),
					b = e('./components/src/utilities/mergeProps.ts'),
					S = e('./components/src/utilities/mergeStyles.ts'),
					j = e('./components/src/providers/cache.tsx'),
					N = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					Y = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					D = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					z = e('../../node_modules/classnames/index.js'),
					k = e.n(z),
					F = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					I = e('./components/src/hooks/useA11y.tsx'),
					H = e('./components/src/hooks/useAcRenderedInput.tsx');
				const J = ({ width: f, height: p, theme: A }) => {
						const l = A?.variables;
						return (0, U.AH)({
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
								maxHeight: p ? 'initial' : '80vh',
								overflow: 'scroll',
								marginLeft: 'auto',
								marginRight: 'auto',
								background: '#fff',
								zIndex: 1001,
								width: f,
								height: p,
								maxWidth: '100vw',
							},
							'& .ss__overlay': { zIndex: 1e3 },
							'& .ss__autocomplete': { position: 'relative' },
							'& .ss__search-input': { margin: '1px' },
							'& .input_wrapper input': { background: '#eee' },
							'& .ss__search-input__button--close-search-icon': { border: 'none' },
							[`@media (max-width: ${l?.breakpoints.desktop}px)`]: { '& .ss__autocomplete-modal__inner': { top: '0', maxHeight: '100vh' } },
						});
					},
					$ = (0, K.PA)((f) => {
						const p = (0, N.u)(),
							A = { layout: [['c1', 'c2', 'c3']], overlayColor: 'rgba(0,0,0,0.8)', width: '950px', renderInput: !0 },
							l = (0, b.v6)('autocompleteModal', p, A, f),
							[L, E] = (0, r.J0)(!1),
							[x, T] = (0, r.J0)('query');
						let s = l.input,
							c = l.buttonSelector;
						if (s) {
							typeof s == 'string' && (s = document.querySelector(s));
							const t = s?.getAttribute('name');
							t && (T(t), l.renderInput && s.setAttribute('name', ''));
						}
						!c && s && (c = s);
						const {
								layout: _,
								disableStyles: v,
								overlayColor: h,
								controller: a,
								renderInput: R,
								className: Z,
								internalClassName: g,
								treePath: M,
							} = l,
							B = (0, r.li)(null),
							m = () => {
								a.setFocused(), E(!1);
							},
							y = {
								autocompleteLayout: { layout: _, onReset: () => m(), ...(0, O.s)({ disableStyles: v }), theme: l?.theme, treePath: M },
								modal: {
									internalClassName: 'autocomplete-modal__modal',
									buttonSelector: c,
									onOverlayClick: () => m(),
									overlayColor: h,
									open: L,
									...(0, O.s)({ disableStyles: v }),
									theme: l?.theme,
									treePath: M,
								},
								searchInput: {
									internalClassName: 'autocomplete-modal__search-input autocomplete__search-input',
									submitSearchButton: {
										onClick: () => {
											window.location.href = a.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => m(), icon: 'angle-left' },
									inputName: x,
									...(0, O.s)({ disableStyles: v }),
									theme: l?.theme,
									treePath: `${M} modal`,
								},
							},
							W = (0, S.Z)(l, J);
						let d;
						s && (d = (0, H.x)({ input: s, controller: a, renderedInputRef: B, renderInput: !!R, buttonSelector: c, setActive: E }));
						const i = { ...l };
						return (
							delete i.width,
							delete i.className,
							delete i.internalClassName,
							delete i.style,
							delete i.styleScript,
							delete i.themeStyleScript,
							_?.length && L
								? (0, o.Y)(j._, {
										children: (0, o.Y)('div', {
											...W,
											className: k()('ss__autocomplete-modal', Z, g),
											children: (0, o.Y)(D.a, {
												...y.modal,
												children: (0, o.FD)('div', {
													className: 'ss__autocomplete-modal__inner',
													ref: (t) => (0, I.iy)(t, 0, !0, m),
													children: [
														R ? (0, o.Y)(F.D, { ...y.searchInput, value: a.store.state.input || '', inputRef: B }) : (0, o.Y)(o.FK, {}),
														(0, o.Y)(Y.h, { ...i, ...y.autocompleteLayout, input: d, controller: a, treePath: `${M} modal` }),
													],
												}),
											}),
										}),
								  })
								: null
						);
					});
			},
			'./src/Templates/Stores/library/components/AutocompleteModal.ts'(Q, u, e) {
				e.r(u), e.d(u, { AutocompleteModal: () => o.c });
				var o = e('./components/src/components/Templates/AutocompleteModal/AutocompleteModal.tsx');
			},
		},
	]);
})();
