'use strict';
(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[7498],
		{
			'./components/src/components/Templates/AutocompleteSlideout/AutocompleteSlideout.tsx'(S, a, e) {
				e.d(a, { o: () => W });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					M = e('../../node_modules/preact/dist/preact.module.js'),
					o = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					O = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('./components/src/utilities/defined.ts'),
					p = e('./components/src/utilities/mergeProps.ts'),
					c = e('./components/src/utilities/mergeStyles.ts'),
					u = e('./components/src/providers/cache.tsx'),
					I = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					v = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					f = e('./components/src/components/Molecules/Slideout/Slideout.tsx'),
					d = e('../../node_modules/classnames/index.js'),
					n = e.n(d),
					A = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					x = e('./components/src/hooks/useA11y.tsx'),
					g = e('./components/src/hooks/useAcRenderedInput.tsx');
				const U = ({}) =>
						(0, O.AH)({
							border: '1px solid #eee',
							'& .ss__autocomplete': { position: 'relative' },
							'& .input_wrapper input': { background: '#eee' },
							'& .ss__search-input__button--close-search-icon': { border: 'none' },
						}),
					W = (0, m.PA)((j) => {
						const N = (0, I.u)(),
							J = {
								slideDirection: 'left',
								overlayColor: 'rgba(0,0,0,0.8)',
								layout: [['button.see-more'], ['termsList'], ['content']],
								width: '500px',
								renderInput: !0,
							},
							l = (0, p.v6)('autocompleteSlideout', N, J, j),
							[Y, k] = (0, o.J0)('query');
						let s = l.input,
							E = l.buttonSelector;
						if (s) {
							typeof s == 'string' && (s = document.querySelector(s));
							const D = s?.getAttribute('name');
							D && (k(D), l.renderInput && s.setAttribute('name', ''));
						}
						!E && s && (E = s);
						const {
								layout: R,
								disableStyles: L,
								slideDirection: F,
								controller: _,
								overlayColor: b,
								renderInput: y,
								className: z,
								internalClassName: $,
								treePath: h,
								width: H,
							} = l,
							T = (0, o.li)(null),
							P = () => {
								B(!1), _.setFocused();
							},
							C = {
								autocompleteLayout: { onReset: () => P(), layout: R, ...(0, r.s)({ disableStyles: L }), theme: l?.theme, treePath: h },
								slideout: {
									width: H,
									rerender: !1,
									overlayColor: b,
									slideDirection: F,
									buttonSelector: E,
									...(0, r.s)({ disableStyles: L }),
									theme: l?.theme,
									treePath: h,
								},
								searchInput: {
									internalClassName: 'autocomplete-slideout__search-input',
									inputName: Y,
									submitSearchButton: {
										onClick: () => {
											window.location.href = _.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => P(), icon: 'angle-left' },
									...(0, r.s)({ disableStyles: L }),
									treePath: `${h} slideout`,
									theme: l?.theme,
								},
							},
							Z = (0, c.Z)(l, U),
							[G, B] = (0, o.J0)(!1);
						let K;
						s &&
							((0, o.vJ)(() => {
								s.addEventListener('click', () => B(!0));
							}),
							(K = (0, g.x)({ input: s, controller: _, renderedInputRef: T, renderInput: !!y, buttonSelector: E })));
						const i = { ...l };
						return (
							delete i.width,
							delete i.className,
							delete i.internalClassName,
							delete i.style,
							delete i.styleScript,
							delete i.themeStyleScript,
							R?.length
								? (0, t.Y)(u._, {
										children: (0, t.Y)(f.S, {
											...Z,
											...C.slideout,
											className: n()('ss__autocomplete-slideout', 'ss__autocomplete-slideout__slideout', z, $),
											active: G,
											children: (0, t.FD)('div', {
												ref: (D) => (0, x.iy)(D, 0, !0, P),
												children: [
													y ? (0, t.Y)(A.D, { ...C.searchInput, value: _.store.state.input || '', inputRef: T }) : (0, t.Y)(t.FK, {}),
													(0, t.Y)(v.h, { ...i, ...C.autocompleteLayout, input: K, controller: _, treePath: `${h} slideout` }),
												],
											}),
										}),
								  })
								: (0, t.Y)(M.FK, {})
						);
					});
			},
			'./components/src/hooks/useAcRenderedInput.tsx'(S, a, e) {
				e.d(a, { x: () => M });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function M({ input: o, controller: m, renderInput: O, buttonSelector: r, renderedInputRef: p, setActive: c }) {
					const [u, I] = (0, t.J0)(o),
						[v, f] = (0, t.J0)(!1),
						d = () => {
							c && c(!0),
								setTimeout(async () => {
									v || (I(p.current), (m.config.selector = '.ss__search-input__input'), await m.bind(), p?.current?.focus()), f(!0);
								});
						};
					return (
						(0, t.vJ)(() => {
							if (O && r) {
								let n;
								typeof r == 'string' ? (n = document.querySelector(r)) : (n = r),
									n &&
										(n.addEventListener('click', (A) => {
											A.stopPropagation(), d();
										}),
										n.addEventListener('focus', () => d()),
										n.addEventListener('select', () => d()));
							} else
								c &&
									(o.addEventListener('click', (n) => {
										n.stopPropagation(), c(!0);
									}),
									o.addEventListener('focus', () => c(!0)),
									o.addEventListener('select', () => c(!0)));
						}, []),
						(0, t.vJ)(() => {
							o !== u &&
								u?.addEventListener('input', () => {
									o.value = u.value;
								});
						}, [u]),
						u
					);
				}
			},
			'./src/Templates/Stores/library/components/AutocompleteSlideout.ts'(S, a, e) {
				e.r(a), e.d(a, { AutocompleteSlideout: () => t.o });
				var t = e('./components/src/components/Templates/AutocompleteSlideout/AutocompleteSlideout.tsx');
			},
		},
	]);
})();
