'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[5615],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js'(Z, g, e) {
				e.d(g, { Z: () => s });
				function s(t, u) {
					const o = { symbol: '', decimalPlaces: 3, padDecimalPlaces: !0, thousandsSeparator: '', decimalSeparator: '.', symbolAfter: !1, ...u };
					if (typeof t != 'number' || Number.isNaN(t)) return;
					const i = m(t, o.decimalPlaces).split('.');
					(i[0] = i[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + o.thousandsSeparator)),
						o.decimalPlaces > 0 && o.padDecimalPlaces && (i[1] = (i[1] || '').padEnd(o.decimalPlaces, '0'));
					let a = i.join(o.decimalSeparator);
					return o.symbolAfter ? (a = a + o.symbol) : (a = o.symbol + a), a;
				}
				function m(t, u) {
					const o = t.toString(),
						i = o.indexOf('.'),
						a = i == -1 ? o.length : 1 + i + (u || -1);
					return o.substr(0, a);
				}
			},
			'./components/src/components/Atoms/BadgeImage/BadgeImage.tsx'(Z, g, e) {
				e.d(g, { z: () => C });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					t = e('../../node_modules/classnames/index.js'),
					u = e.n(t),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = e('./components/src/providers/treePath.tsx'),
					M = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts');
				const L = () => (0, m.AH)({ maxHeight: '100%', maxWidth: '100%' }),
					C = (0, o.PA)((c) => {
						const E = (0, a.u)(),
							B = { treePath: (0, D.LU)() },
							h = (0, M.v6)('badgeImage', E, B, c),
							{ label: P, url: l, tag: O, className: n, internalClassName: x } = h,
							b = (0, y.Z)(h, L);
						return l
							? (0, s.Y)(i._, {
									children: (0, s.Y)('img', {
										...b,
										className: u()('ss__badge-image', `ss__badge-image--${O}`, n, x),
										alt: P || `${O} badge`,
										src: l,
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgePill/BadgePill.tsx'(Z, g, e) {
				e.d(g, { L: () => C });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					t = e('../../node_modules/classnames/index.js'),
					u = e.n(t),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = e('./components/src/providers/treePath.tsx'),
					M = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts');
				const L = ({ color: c, colorText: E }) =>
						(0, m.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: c,
							color: E,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
							borderRadius: '1em',
						}),
					C = (0, o.PA)((c) => {
						const E = (0, a.u)(),
							B = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, D.LU)() },
							h = (0, M.v6)('badgePill', E, B, c),
							{ value: P, tag: l, className: O, internalClassName: n } = h,
							x = (0, y.Z)(h, L);
						return P
							? (0, s.Y)(i._, {
									children: (0, s.Y)('div', {
										...x,
										className: u()('ss__badge-pill', `ss__badge-pill--${l}`, O, n),
										children: (0, s.Y)('span', { className: 'ss__badge-pill__value', children: P }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'(Z, g, e) {
				e.d(g, { Z: () => C });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					t = e('../../node_modules/classnames/index.js'),
					u = e.n(t),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = e('./components/src/providers/treePath.tsx'),
					M = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts');
				const L = ({ color: c, colorText: E }) =>
						(0, m.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							background: c,
							color: E,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					C = (0, o.PA)((c) => {
						const E = (0, a.u)(),
							B = { color: 'rgba(58, 35, 173, 1)', colorText: '#fff', treePath: (0, D.LU)() },
							h = (0, M.v6)('badgeRectangle', E, B, c),
							{ value: P, tag: l, className: O, internalClassName: n } = h,
							x = (0, y.Z)(h, L);
						return P
							? (0, s.Y)(i._, {
									children: (0, s.Y)('div', {
										...x,
										className: u()('ss__badge-rectangle', `ss__badge-rectangle--${l}`, O, n),
										children: (0, s.Y)('span', { className: 'ss__badge-rectangle__value', children: P }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/BadgeText/BadgeText.tsx'(Z, g, e) {
				e.d(g, { p: () => C });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					t = e('../../node_modules/classnames/index.js'),
					u = e.n(t),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = e('./components/src/providers/treePath.tsx'),
					M = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts');
				const L = ({ colorText: c }) =>
						(0, m.AH)({
							display: 'inline-block',
							boxSizing: 'border-box',
							padding: '0.3em 0.9em',
							color: c,
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							maxWidth: '100%',
						}),
					C = (0, o.PA)((c) => {
						const E = (0, a.u)(),
							B = { colorText: '#000000', treePath: (0, D.LU)() },
							h = (0, M.v6)('badgeText', E, B, c),
							{ value: P, tag: l, className: O, internalClassName: n } = h,
							x = (0, y.Z)(h, L);
						return P
							? (0, s.Y)(i._, {
									children: (0, s.Y)('div', {
										...x,
										className: u()('ss__badge-text', `ss__badge-text--${l}`, O, n),
										children: (0, s.Y)('span', { className: 'ss__badge-text__value', children: P }),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/Price/Price.tsx'(Z, g, e) {
				e.d(g, { g: () => c });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/formatNumber.js');
				function t(E, W) {
					const B = { symbol: '$', thousandsSeparator: ',', decimalPlaces: 2, ...W };
					return (0, m.Z)(E, B);
				}
				var u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					i = e.n(o),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = e('./components/src/providers/treePath.tsx'),
					M = e('./components/src/providers/cache.tsx'),
					y = e('./components/src/utilities/mergeProps.ts'),
					L = e('./components/src/utilities/mergeStyles.ts');
				const C = ({ theme: E }) =>
					(0, u.AH)({ color: E?.variables?.colors?.primary, '&.ss__price--strike': { textDecoration: 'line-through', color: 'initial' } });
				function c(E) {
					const W = (0, a.u)(),
						h = {
							symbol: '$',
							decimalPlaces: 2,
							padDecimalPlaces: !0,
							thousandsSeparator: ',',
							decimalSeparator: '.',
							symbolAfter: !1,
							lineThrough: !1,
							treePath: (0, D.LU)(),
						},
						P = (0, y.v6)('price', W, h, E),
						{
							lineThrough: l,
							value: O,
							symbol: n,
							decimalPlaces: x,
							padDecimalPlaces: b,
							thousandsSeparator: j,
							decimalSeparator: v,
							symbolAfter: p,
							raw: $,
							className: A,
							internalClassName: S,
						} = P;
					let K;
					O && (K = t(O, { symbol: '', decimalPlaces: x, padDecimalPlaces: b, thousandsSeparator: j, decimalSeparator: v }));
					const r = (0, L.Z)(P, C);
					return K
						? $
							? (0, s.Y)(s.FK, { children: K })
							: (0, s.Y)(M._, {
									children: (0, s.FD)('span', {
										...r,
										className: i()('ss__price', { 'ss__price--strike': l }, A, S),
										children: [
											n && !p ? (0, s.Y)('span', { className: 'ss__price__symbol', children: n }) : (0, s.Y)(s.FK, {}),
											(0, s.Y)('span', { className: 'ss__price__value', children: K }),
											n && p ? (0, s.Y)('span', { className: 'ss__price__symbol', children: n }) : (0, s.Y)(s.FK, {}),
										],
									}),
							  })
						: null;
				}
			},
			'./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'(Z, g, e) {
				e.d(g, { W: () => W });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					t = e('../../node_modules/classnames/index.js'),
					u = e.n(t),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = e('./components/src/providers/snap.tsx'),
					M = e('./components/src/providers/treePath.tsx'),
					y = e('./components/src/utilities/mergeProps.ts'),
					L = e('./components/src/utilities/mergeStyles.ts'),
					C = e('./components/src/utilities/defaultBadgeComponentMap.ts'),
					c = e('./components/src/hooks/useComponent.tsx');
				const E = () => (0, m.AH)({ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }),
					W = (0, o.PA)((B) => {
						const h = (0, a.u)(),
							P = (0, D.uk)(),
							O = { tag: 'callout', limit: 1, treePath: (0, M.LU)() },
							n = (0, y.v6)('calloutBadge', h, O, B),
							{ result: x, tag: b, renderEmpty: j, limit: v, className: p, internalClassName: $, treePath: A } = n,
							S = { ...C.q, ...(P?.templates?.library.import.component.badge || {}), ...n.componentMap },
							K = (0, L.Z)(n, E),
							r = x?.display.badges?.atLocation(b).slice(0, v);
						return j || r?.length
							? (0, s.Y)(i._, {
									children: (0, s.Y)('div', {
										...K,
										className: u()('ss__callout-badge', `ss__callout-badge--${b?.replace('/', '-')}`, p, $),
										children: r.map((_) => {
											const T = (0, c.x)(S, _.component);
											return T ? (0, s.Y)(T, { ..._, ..._.parameters, treePath: A }) : null;
										}),
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/List/List.tsx'(Z, g, e) {
				e.d(g, { B: () => O });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					t = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					o = e.n(u),
					i = e('../../node_modules/deepmerge/dist/cjs.js'),
					a = e.n(i),
					D = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					M = e('./components/src/providers/cache.tsx'),
					y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					L = e('./components/src/providers/treePath.tsx'),
					C = e('./components/src/utilities/defined.ts'),
					c = e('./components/src/utilities/mergeProps.ts'),
					E = e('./components/src/utilities/mergeStyles.ts'),
					W = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					B = e('./components/src/hooks/useA11y.tsx'),
					h = e('./components/src/hooks/useLang.tsx'),
					P = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const l = ({ horizontal: n }) =>
					(0, t.AH)({
						display: 'flex',
						flexDirection: n ? 'row' : 'column',
						alignItems: n ? 'center' : void 0,
						justifyItems: 'flex-start',
						gap: '5px',
						'.ss__list__options': {
							border: 'none',
							listStyle: 'none',
							padding: '0px',
							margin: '0px',
							display: 'flex',
							flexDirection: n ? 'row' : 'column',
							alignItems: n ? 'center' : void 0,
							justifyItems: 'flex-start',
							gap: '5px',
						},
						'.ss__list__option': {
							cursor: 'pointer',
							display: 'flex',
							alignItems: 'center',
							gap: '5px',
							'.ss__list__option__label , .ss__list__option__icon': { cursor: 'pointer' },
						},
						'&.ss__list--disabled, .ss__list__option--disabled': { cursor: 'none', pointerEvents: 'none', opacity: 0.5 },
						'&.ss__list--disabled, .ss__list__option--unavailable': { cursor: 'pointer', opacity: 0.5 },
						'.ss__list__option--selected': { fontWeight: 'bold' },
					});
				function O(n) {
					const x = (0, y.u)(),
						j = { treePath: (0, L.LU)() },
						v = (0, c.v6)('list', x, j, n),
						{
							titleText: p,
							onSelect: $,
							native: A,
							multiSelect: S,
							hideOptionLabels: K,
							hideOptionIcons: r,
							hideOptionCheckboxes: _,
							disabled: T,
							hideTitleText: G,
							options: V,
							requireSelection: Q,
							disableStyles: H,
							className: N,
							internalClassName: I,
							treePath: d,
						} = v;
					let R = v.selected;
					const X = {
							checkbox: { native: A, ...(0, C.s)({ disableStyles: H }), theme: v?.theme, treePath: d },
							icon: { internalClassName: 'ss__list__option__icon', size: '16px', ...(0, C.s)({ disableStyles: H }), theme: v?.theme, treePath: d },
						},
						te = (0, E.Z)(v, l);
					R && !Array.isArray(R) && (R = [R]);
					const [J, k] = (0, m.J0)(R || []),
						[oe] = (0, m.J0)(R || []);
					try {
						if (R) {
							const f = JSON.stringify(oe),
								F = JSON.stringify(R),
								U = JSON.stringify(J);
							f !== F && F !== U && k(R);
						}
					} catch {}
					const ne = (f, F) => {
							let U;
							S
								? J.find((z) => z.value === F.value)
									? ((U = [...J]),
									  U.splice(
											U.findIndex((z) => z.value === F.value),
											1
									  ),
									  U.length == 0 && Q && (U = [F]))
									: (U = [...J, F])
								: !Q && J.find((z) => z.value === F.value)
								? (U = [])
								: (U = [F]),
								$ && $(f, F, U),
								k(U);
						},
						se = {},
						ee = a()(se, v.lang || {}),
						ae = (0, h.u)(ee, { options: V, selectedOptions: J });
					return typeof V == 'object' && V?.length
						? (0, s.Y)(M._, {
								children: (0, s.FD)('div', {
									...te,
									className: o()('ss__list', { 'ss__list--native': A, 'ss__list--disabled': T }, N, I),
									children: [
										(p || ee?.title?.value) && !G && (0, s.Y)('h5', { className: 'ss__list__title', ...ae.title?.all, children: p }),
										(0, s.Y)('ul', {
											className: 'ss__list__options',
											role: 'listbox',
											'aria-label': p,
											children: V.map((f) => {
												const F = J.some((U) => U.value == f.value);
												return (0, s.FD)('li', {
													className: o()(`ss__list__option ss__list__option--${D.p(f.value?.toString())}`, {
														'ss__list__option--selected': F,
														'ss__list__option--disabled': f?.disabled,
														'ss__list__option--unavailable': f?.available === !1,
													}),
													ref: (U) => (0, B.iy)(U),
													onClick: (U) => !T && !f?.disabled && ne(U, f),
													title: f.label,
													role: 'option',
													'aria-selected': F,
													'aria-disabled': f.disabled || f?.available === !1,
													children: [
														!_ && (0, s.Y)(W.S, { ...X.checkbox, checked: F, disableA11y: !0, 'aria-label': f.label }),
														f.icon && !r && (0, s.Y)(P.I, { ...X.icon, ...(typeof f.icon == 'string' ? { icon: f.icon } : f.icon) }),
														!K && (f.label || !f.icon) && (0, s.Y)('label', { className: 'ss__list__option__label', children: f.label || f.value }),
													],
												});
											}),
										}),
									],
								}),
						  })
						: null;
				}
			},
			'./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'(Z, g, e) {
				e.d(g, { Q: () => B });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					t = e('../../node_modules/classnames/index.js'),
					u = e.n(t),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = e('./components/src/providers/snap.tsx'),
					M = e('./components/src/providers/treePath.tsx'),
					y = e('./components/src/utilities/mergeProps.ts'),
					L = e('./components/src/utilities/mergeStyles.ts'),
					C = e('./components/src/utilities/defaultBadgeComponentMap.ts'),
					c = e('./components/src/hooks/useComponent.tsx');
				const E = ({ section: h, top: P, bottom: l, index: O, tag: n }) =>
						(0, m.AH)({
							position: 'relative',
							display: 'flex',
							flexDirection: 'column',
							alignItems: h == 'right' ? 'flex-end' : 'flex-start',
							justifyContent: !P && !l ? 'center' : l && !P ? 'flex-end' : 'flex-start',
							gap: '0.5em',
							gridArea: n,
							boxSizing: 'border-box',
							zIndex: Math.max(100 - O, 1),
							width: '100%',
							height: '100%',
						}),
					W = ({ controller: h }) => {
						const l = h?.store?.meta?.badges?.groups?.['overlay']?.grid;
						let O = {};
						if (l?.length && l[0]?.length) {
							const n = l.map((b) => `"${b.join(' ')}"`).join(' ');
							O = {
								gridTemplateColumns: `repeat(${l[0].length}, minmax(0, 1fr))`,
								gridTemplateRows: `repeat(${l.length}, minmax(0, 1fr))`,
								gridTemplateAreas: n,
							};
						}
						return (0, m.AH)({
							position: 'relative',
							'& .ss__overlay-badge__grid-wrapper': {
								pointerEvents: 'none',
								display: 'grid',
								position: 'absolute',
								top: 0,
								right: 0,
								bottom: 0,
								left: 0,
								...O,
							},
						});
					},
					B = (0, o.PA)((h) => {
						const P = (0, a.u)(),
							l = (0, D.uk)(),
							n = { limit: 1, treePath: (0, M.LU)() },
							x = (0, y.v6)('overlayBadge', P, n, h),
							{ result: b, children: j, controller: v, renderEmpty: p, limit: $, className: A, internalClassName: S, treePath: K } = x;
						if (!j) return v?.log?.warn('OverlayBadge component must have children'), null;
						const r = v?.store?.meta;
						if (!r) return v?.log?.warn('Controller must have a meta store'), (0, s.Y)(s.FK, { children: j });
						const _ = 'overlay',
							T = { ...C.q, ...(l?.templates?.library.import.component.badge || {}), ...x.componentMap },
							V = r?.badges?.groups?.[_]?.sections
								?.map((H) => {
									const N = r?.data?.badges?.locations[H],
										I = N?.map((d, R) => ({
											tag: d.tag,
											name: d.name,
											top: R == 0,
											bottom: R == N.length - 1,
											badges: b?.display.badges?.atLocation(`${H}/${d.tag}`).slice(0, $),
										})).filter((d) => d.badges?.length);
									return { section: H, slots: I };
								})
								.filter((H) => H.slots?.length),
							Q = (0, L.Z)(x, W);
						return p || V?.length
							? (0, s.Y)(i._, {
									children: (0, s.FD)('div', {
										...Q,
										className: u()('ss__overlay-badge', A, S),
										children: [
											(0, s.Y)('div', {
												className: 'ss__overlay-badge__grid-wrapper',
												children: V.map((H, N) =>
													H.slots?.map((I) => {
														const d = E({ ...x, tag: I.tag, section: H.section, index: N, top: I.top, bottom: I.bottom });
														return (0, s.Y)('div', {
															className: u()('ss__overlay-badge__grid-wrapper__slot', `ss__overlay-badge__grid-wrapper__slot--${I.tag}`),
															css: [d],
															children: I.badges.map((R) => {
																const X = (0, c.x)(T, R.component);
																return X ? (0, s.Y)(X, { ...R, ...R.parameters, treePath: K }) : null;
															}),
														});
													})
												),
											}),
											j,
										],
									}),
							  })
							: (0, s.Y)(s.FK, { children: j });
					});
			},
			'./components/src/components/Molecules/Rating/Rating.tsx'(Z, g, e) {
				e.d(g, { G: () => E });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					o = e.n(u),
					i = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = e('./components/src/providers/treePath.tsx'),
					M = e('./components/src/utilities/defined.ts'),
					y = e('./components/src/utilities/mergeProps.ts'),
					L = e('./components/src/utilities/mergeStyles.ts'),
					C = e('./components/src/components/Atoms/Icon/Icon.tsx');
				const c = () =>
						(0, t.AH)({
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							'& .ss__rating__icons': { position: 'relative' },
							'& .ss__rating__stars': {
								width: '100%',
								display: 'inline-grid',
								gridTemplateColumns: '20% 20% 20% 20% 20%',
								'&.ss__rating__stars--full': { position: 'absolute', top: 0, left: 0 },
								'&.ss__rating__stars--empty': { position: 'relative' },
							},
							'& .ss__rating__stars__star': { overflow: 'hidden' },
							'& .ss__icon': { maxWidth: 'max-content' },
						}),
					E = (0, m.PA)((W) => {
						const B = (0, a.u)(),
							P = { fullIcon: 'star', emptyIcon: 'star-o', treePath: (0, D.LU)() },
							l = (0, y.v6)('rating', B, P, W),
							{
								alwaysRender: O,
								count: n,
								text: x,
								disablePartialFill: b,
								emptyIcon: j,
								fullIcon: v,
								disableStyles: p,
								className: $,
								internalClassName: A,
								treePath: S,
							} = l,
							K = {
								fullIcon: { name: 'star--full', ...(0, M.s)({ disableStyles: p }), theme: l?.theme, treePath: S },
								emptyIcon: { name: 'star--empty', color: '#ccc', ...(0, M.s)({ disableStyles: p }), theme: l?.theme, treePath: S },
							};
						let r = l.value;
						isNaN(r) && (r = Number(r) || 0), r < 0 && (r = 0), r > 5 && (r = 5);
						const _ = (0, L.Z)(l, c),
							T = b ? Math.floor(r) : Math.ceil(r);
						return O || r || n
							? (0, s.Y)(i._, {
									children: (0, s.FD)('div', {
										className: o()('ss__rating', $, A),
										..._,
										children: [
											(0, s.FD)('div', {
												className: 'ss__rating__icons',
												children: [
													(0, s.Y)('div', {
														className: 'ss__rating__stars ss__rating__stars--empty',
														children: [...Array(5)].map(() =>
															(0, s.Y)('span', {
																className: 'ss__rating__stars__star ss__rating__stars__star--empty',
																children: (0, s.Y)(C.I, { ...K.emptyIcon, ...(typeof j == 'string' ? { icon: j } : j) }),
															})
														),
													}),
													(0, s.Y)('div', {
														className: 'ss__rating__stars ss__rating__stars--full',
														children: [...Array(T)].map((G, V) => {
															let Q = 100;
															return (
																V + 1 == T && !b && r % 1 != 0 && (Q = (r % 1 || 1) * 100),
																(0, s.Y)('span', {
																	className: 'ss__rating__stars__star ss__rating__stars__star--full',
																	style: { width: `${Q}%` },
																	children: (0, s.Y)(C.I, { ...K.fullIcon, ...(typeof v == 'string' ? { icon: v } : v) }),
																})
															);
														}),
													}),
												],
											}),
											n ? (0, s.FD)('span', { className: 'ss__rating__count', children: ['(', n, ')'] }) : (0, s.Y)(s.FK, {}),
											x ? (0, s.Y)('span', { className: 'ss__rating__text', children: x }) : (0, s.Y)(s.FK, {}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/Result/Result.tsx'(Z, g, e) {
				e.d(g, { Q: () => $ });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					t = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					i = e.n(o),
					a = e('./components/src/components/Atoms/Image/Image.tsx'),
					D = e('./components/src/components/Atoms/Price/Price.tsx'),
					M = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/treePath.tsx'),
					L = e('./components/src/providers/cache.tsx'),
					C = e('./components/src/utilities/mergeProps.ts'),
					c = e('./components/src/utilities/defined.ts'),
					E = e('./components/src/utilities/mergeStyles.ts'),
					W = e('./components/src/utilities/cloneWithProps.tsx');
				function B(A, S, K) {
					if (typeof A != 'string' || A.length <= S) return A;
					const r = A.lastIndexOf(' ', S),
						_ = r != -1 ? r : S - 1;
					return A.substr(0, _) + (K || '');
				}
				var h = e('./components/src/types.ts'),
					P = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx'),
					l = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx'),
					O = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					n = e('./components/src/components/Atoms/Button/Button.tsx'),
					x = e('../../node_modules/deepmerge/dist/cjs.js'),
					b = e.n(x),
					j = e('./components/src/hooks/useLang.tsx'),
					v = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
				const p = () =>
						(0, u.AH)({
							'&.ss__result--grid': {
								display: 'flex',
								flexDirection: 'column',
								height: '100%',
								'& .ss__result__image-wrapper': { flex: '1 0 auto', minHeight: '0%' },
							},
							'&.ss__result--list': {
								display: 'flex',
								flexDirection: 'row',
								'& .ss__result__image-wrapper': { flex: '0 0 33%' },
								'& .ss__result__details': { flex: '1 1 auto', textAlign: 'left', marginLeft: '20px', padding: 0 },
							},
							'& .ss__result__image-wrapper': {
								position: 'relative',
								'& .ss__result__badge': { background: 'rgba(255, 255, 255, 0.5)', padding: '10px' },
							},
							'& .ss__result__details': {
								padding: '10px',
								textAlign: 'center',
								'& .ss__result__details__title': { marginBottom: '10px' },
								'& .ss__result__details__pricing': {
									marginBottom: '10px',
									'& .ss__result__price': { fontSize: '1.2em' },
									'& .ss__price--strike': { fontSize: '80%' },
								},
							},
						}),
					$ = (0, t.PA)((A) => {
						const S = (0, M.u)(),
							K = (0, y.LU)(),
							r = {
								layout: h.V.grid,
								treePath: K,
								addToCartButtonText: 'Add To Cart',
								addToCartButtonSuccessText: 'Added!',
								addToCartButtonSuccessTimeout: 2e3,
								hideAddToCartButton: !0,
								hideRating: !0,
							},
							_ = (0, C.v6)('result', S, r, A),
							{
								result: T,
								hideBadge: G,
								hideTitle: V,
								hidePricing: Q,
								hideImage: H,
								detailSlot: N,
								fallback: I,
								disableStyles: d,
								className: R,
								internalClassName: X,
								layout: te,
								onClick: J,
								controller: k,
								hideVariantSelections: oe,
								hideAddToCartButton: ne,
								onAddToCartClick: se,
								addToCartButtonText: ee,
								addToCartButtonSuccessText: ae,
								addToCartButtonSuccessTimeout: f,
								hideRating: F,
								trackingRef: U,
								treePath: z,
							} = _,
							Y = T?.display?.mappings.core || T?.mappings?.core,
							[ce, le] = (0, m.J0)(!1),
							w = {
								variantSelection: {
									internalClassName: 'ss__result__variant-selection',
									...(0, c.s)({ disableStyles: d }),
									theme: _.theme,
									treePath: z,
								},
								price: { internalClassName: 'ss__result__price', ...(0, c.s)({ disableStyles: d }), theme: _.theme, treePath: z },
								calloutBadge: {
									internalClassName: 'ss__result__callout-badge',
									result: T,
									...(0, c.s)({ disableStyles: d }),
									theme: _.theme,
									treePath: z,
								},
								overlayBadge: {
									internalClassName: 'ss__result__overlay-badge',
									result: T,
									controller: k,
									...(0, c.s)({ disableStyles: d }),
									theme: _.theme,
									treePath: z,
								},
								image: {
									internalClassName: 'ss__result__image',
									alt: Y?.name || '',
									src: Y?.imageUrl || '',
									...(0, c.s)({ disableStyles: d, fallback: I }),
									theme: _.theme,
									treePath: z,
								},
								rating: {
									internalClassName: 'ss__result__rating',
									value: Y?.rating || 0,
									count: Number(Y?.ratingCount || 0),
									...(0, c.s)({ disableStyles: d }),
									theme: _.theme,
									treePath: z,
								},
								button: {
									internalClassName: 'ss__result__button--addToCart',
									onClick: (q) => {
										le(!0), se && se(q, T), k?.addToCart([T]), setTimeout(() => le(!1), f);
									},
									...(0, c.s)({ disableStyles: d }),
									theme: _.theme,
									treePath: z,
								},
							};
						let re = Y?.name;
						_.truncateTitle && (re = B(Y?.name || '', _.truncateTitle.limit, _.truncateTitle.append));
						const me = (0, E.Z)(_, p),
							_e = { addToCartButtonText: { value: ce ? ae : ee } },
							de = b()(_e, _.lang || {}),
							ue = (0, j.u)(de, { result: T, controller: k }),
							ie = !!(Y?.msrp && Y?.price && Y?.price < Y?.msrp);
						return Y
							? (0, s.Y)(L._, {
									children: (0, s.FD)('article', {
										...me,
										className: i()('ss__result', `ss__result--${te}`, { 'ss__result--sale': ie }, R, X),
										ref: U,
										children: [
											!H &&
												(0, s.Y)('div', {
													className: 'ss__result__image-wrapper',
													children: (0, s.Y)('a', {
														href: Y.url,
														onClick: (q) => {
															J && J(q);
														},
														children: G
															? (0, s.Y)(a._, { ...w.image })
															: (0, s.Y)(l.Q, { ...w.overlayBadge, controller: k, children: (0, s.Y)(a._, { ...w.image }) }),
													}),
												}),
											(0, s.FD)('div', {
												className: 'ss__result__details',
												children: [
													!G && (0, s.Y)(P.W, { ...w.calloutBadge, controller: k }),
													!V &&
														(0, s.Y)('div', {
															className: 'ss__result__details__title',
															children: (0, s.Y)('a', {
																href: Y.url,
																onClick: (q) => {
																	J && J(q);
																},
																dangerouslySetInnerHTML: { __html: re || '' },
															}),
														}),
													!F && (0, s.Y)(O.G, { ...w.rating }),
													!Q && Y.price && Y.price > 0
														? (0, s.Y)('div', {
																className: 'ss__result__details__pricing',
																children: ie
																	? (0, s.FD)(s.FK, {
																			children: [
																				(0, s.Y)(D.g, { ...w.price, value: Y.msrp, lineThrough: !0, name: 'msrp' }),
																				'\xA0',
																				(0, s.Y)(D.g, { ...w.price, value: Y.price, name: 'price' }),
																			],
																	  })
																	: (0, s.Y)(D.g, { ...w.price, value: Y.price }),
														  })
														: null,
													(0, W.Y)(N, { result: T, treePath: z }),
													!oe &&
														T.variants?.selections.length &&
														(0, s.Y)('div', {
															className: 'ss__result__details__variant-selection',
															children: T.variants?.selections.map((q) => (0, s.Y)(v.m, { ...w.variantSelection, selection: q })),
														}),
													!ne &&
														(0, s.Y)('div', {
															className: 'ss__result__add-to-cart-wrapper',
															children: (0, s.Y)(n.$, { ...w.button, content: ee, ...ue.addToCartButtonText.all }),
														}),
												],
											}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/VariantSelection/VariantSelection.tsx'(Z, g, e) {
				e.d(g, { m: () => O });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					o = e.n(u),
					i = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = e('./components/src/providers/treePath.tsx'),
					M = e('./components/src/utilities/defined.ts'),
					y = e('./components/src/utilities/mergeProps.ts'),
					L = e('./components/src/utilities/mergeStyles.ts'),
					C = e('./components/src/components/Molecules/List/List.tsx'),
					c = e('./components/src/components/Molecules/Swatches/Swatches.tsx'),
					E = e('./components/src/components/Atoms/Dropdown/Dropdown.tsx'),
					W = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					B = e('./components/src/hooks/useA11y.tsx'),
					h = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/fieldNameToComponentName/fieldNameToComponentName.js');
				const P = () =>
						(0, t.AH)({
							'.ss__variant-selection__dropdown': {
								'.ss__dropdown__button': {
									width: '100%',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
									'.ss__dropdown__button-wrapper': { display: 'flex', gap: '5px' },
								},
							},
						}),
					l = () =>
						(0, t.AH)({
							margin: '0px',
							padding: '5px',
							background: 'white',
							zIndex: 10,
							border: '1px solid black',
							'.ss__variant-selection__option': { cursor: 'pointer', position: 'relative' },
							'.ss__variant-selection__option:hover': { fontWeight: 'bold' },
							'.ss__variant-selection__option--selected': { fontWeight: 'bold' },
							'.ss__variant-selection__option--disabled': { pointerEvents: 'none', cursor: 'initial', color: 'red' },
							'.ss__variant-selection__option--disabled, .ss__variant-selection__option--unavailable': {
								textDecoration: 'line-through',
								opacity: 0.5,
							},
						}),
					O = (0, m.PA)((n) => {
						const x = (0, a.u)(),
							b = (0, D.LU)(),
							j = { name: (0, h.P)(n.selection.field), treePath: b },
							v = (0, y.v6)('variantSelection', x, j, n),
							{ selection: p, onSelect: $, disableStyles: A, className: S, internalClassName: K, treePath: r } = v;
						let _ = v.type;
						_ || (p.type == 'swatch' ? (_ = 'swatches') : (_ = 'dropdown'));
						const T = (N, I) => {
								$ && $(N, I), p.select(I.value);
							},
							G = {
								dropdown: {
									internalClassName: 'ss__variant-selection__dropdown',
									usePortal: !0,
									...(0, M.s)({ disableStyles: A }),
									theme: v?.theme,
									treePath: r,
								},
								icon: {
									internalClassName: 'ss__variant-selection__icon',
									size: '12px',
									...(0, M.s)({ disableStyles: A }),
									theme: v?.theme,
									treePath: r,
								},
								list: {
									titleText: p.field,
									internalClassName: 'ss__variant-selection__list',
									multiSelect: !1,
									hideOptionCheckboxes: !0,
									onSelect: (N, I) => T(N, I),
									selected: p.selected,
									...(0, M.s)({ disableStyles: A }),
									theme: v?.theme,
									treePath: r,
								},
								swatches: {
									internalClassName: 'ss__variant-selection__swatches',
									onSelect: (N, I) => T(N, I),
									selected: p.selected,
									...(0, M.s)({ disableStyles: A }),
									theme: v?.theme,
									treePath: r,
								},
							},
							V = (0, L.Z)(v, P),
							Q = (0, L.Z)(v, l),
							H = (N) => {
								const { toggleOpen: I } = N;
								return (0, s.Y)('ul', {
									...Q,
									className: 'ss__variant-selection__options',
									ref: (d) => (0, B.iy)(d, -1, !0, () => I()),
									children: p.values.map((d) => {
										const R = p.selected?.value == d.value;
										return (0, s.Y)('li', {
											className: o()('ss__variant-selection__option', {
												'ss__variant-selection__option--selected': R,
												'ss__variant-selection__option--disabled': d.disabled,
												'ss__variant-selection__option--unavailable': d.available === !1,
											}),
											onClick: (X) => !d.disabled && T(X, d),
											ref: (X) => (0, B.iy)(X),
											'aria-selected': R,
											'aria-disabled': d.disabled || d.available === !1,
											children: d.label,
										});
									}),
								});
							};
						return p.values.length
							? (0, s.Y)(i._, {
									children: (0, s.Y)('div', {
										...V,
										className: o()('ss__variant-selection', `ss__variant-selection--${_}`, `ss__variant-selection--${p.field}`, S, K),
										children: (() => {
											switch (_) {
												case 'dropdown':
													return (0, s.Y)(s.FK, {
														children: (() => {
															const N = (I) => {
																const { open: d } = I;
																return (0, s.FD)(s.FK, {
																	children: [
																		(0, s.FD)('div', {
																			className: 'ss__dropdown__button-wrapper',
																			children: [
																				(0, s.Y)('span', { className: 'ss__dropdown__button-wrapper__label', children: p.label }),
																				p.selected
																					? (0, s.FD)('span', {
																							className: 'ss__dropdown__button-wrapper__selection',
																							children: ['(', p.selected.value, ')'],
																					  })
																					: null,
																			],
																		}),
																		(0, s.Y)(W.I, { icon: d ? 'angle-up' : 'angle-down', ...G.icon, treePath: I.treePath }),
																	],
																});
															};
															return (0, s.Y)(E.m, { button: (0, s.Y)(N, { treePath: r }), ...G.dropdown, content: (0, s.Y)(H, {}) });
														})(),
													});
												case 'list':
													return (0, s.Y)(s.FK, { children: (0, s.Y)(C.B, { ...G.list, options: p.values }) });
												case 'swatches':
													return (0, s.Y)(s.FK, { children: (0, s.Y)(c.l, { ...G.swatches, options: p.values }) });
											}
										})(),
									}),
							  })
							: null;
					});
			},
			'./components/src/hooks/useComponent.tsx'(Z, g, e) {
				e.d(g, { x: () => m });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const m = (t, u) => {
					const [o, i] = (0, s.J0)(void 0);
					return (
						(0, s.vJ)(() => {
							const a = t[u];
							if (a && typeof a == 'function') {
								const D = a();
								D instanceof Promise
									? D.then((M) => {
											i(() => M);
									  })
									: i(() => D);
							}
						}, []),
						o
					);
				};
			},
			'./components/src/types.ts'(Z, g, e) {
				e.d(g, { Q: () => m, V: () => s });
				var s = ((t) => ((t.grid = 'grid'), (t.list = 'list'), t))(s || {}),
					m = ((t) => (
						(t.GRID = 'grid'),
						(t.PALETTE = 'palette'),
						(t.LIST = 'list'),
						(t.SLIDER = 'slider'),
						(t.HIERARCHY = 'hierarchy'),
						(t.TOGGLE = 'toggle'),
						t
					))(m || {});
			},
			'./components/src/utilities/defaultBadgeComponentMap.ts'(Z, g, e) {
				e.d(g, { q: () => o });
				var s = e('./components/src/components/Atoms/BadgeText/BadgeText.tsx'),
					m = e('./components/src/components/Atoms/BadgePill/BadgePill.tsx'),
					t = e('./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx'),
					u = e('./components/src/components/Atoms/BadgeImage/BadgeImage.tsx');
				const o = { BadgeText: () => s.p, BadgePill: () => m.L, BadgeRectangle: () => t.Z, BadgeImage: () => u.z };
			},
		},
	]);
})();
