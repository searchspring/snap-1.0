'use strict';
(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[9420],
		{
			'./components/src/components/Atoms/BadgeImage/index.ts'(n, t, e) {
				e.d(t, { z: () => s.z });
				var s = e('./components/src/components/Atoms/BadgeImage/BadgeImage.tsx');
			},
			'./components/src/components/Atoms/BadgePill/index.ts'(n, t, e) {
				e.d(t, { L: () => s.L });
				var s = e('./components/src/components/Atoms/BadgePill/BadgePill.tsx');
			},
			'./components/src/components/Atoms/BadgeRectangle/index.ts'(n, t, e) {
				e.d(t, { Z: () => s.Z });
				var s = e('./components/src/components/Atoms/BadgeRectangle/BadgeRectangle.tsx');
			},
			'./components/src/components/Atoms/BadgeText/index.ts'(n, t, e) {
				e.d(t, { p: () => s.p });
				var s = e('./components/src/components/Atoms/BadgeText/BadgeText.tsx');
			},
			'./components/src/components/Atoms/Banner/index.ts'(n, t, e) {
				e.d(t, { l: () => s.l });
				var s = e('./components/src/components/Atoms/Banner/Banner.tsx');
			},
			'./components/src/components/Atoms/Breadcrumbs/index.ts'(n, t, e) {
				e.d(t, { B: () => s.B });
				var s = e('./components/src/components/Atoms/Breadcrumbs/Breadcrumbs.tsx');
			},
			'./components/src/components/Atoms/Button/index.ts'(n, t, e) {
				e.d(t, { $: () => s.$ });
				var s = e('./components/src/components/Atoms/Button/Button.tsx');
			},
			'./components/src/components/Atoms/Dropdown/index.ts'(n, t, e) {
				e.d(t, { m: () => s.m });
				var s = e('./components/src/components/Atoms/Dropdown/Dropdown.tsx');
			},
			'./components/src/components/Atoms/FormattedNumber/FormattedNumber.tsx'(n, t, e) {
				e.d(t, { G: () => C });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					x = e('../../node_modules/preact/dist/preact.module.js'),
					R = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/@searchspring/snap-toolbox/dist/esm/filters/formatNumber.js'),
					m = e('../../node_modules/classnames/index.js'),
					P = e.n(m),
					T = e('./components/src/providers/cache.tsx'),
					O = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					p = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/utilities/mergeProps.ts'),
					g = e('./components/src/utilities/mergeStyles.ts');
				const f = () => (0, R.AH)({});
				function C(b) {
					const y = (0, O.u)(),
						M = {
							symbol: '',
							decimalPlaces: 3,
							padDecimalPlaces: !0,
							thousandsSeparator: '',
							decimalSeparator: '.',
							symbolAfter: !0,
							treePath: (0, p.LU)(),
						},
						h = (0, E.v6)('formattedNumber', y, M, b),
						{
							value: l,
							symbol: i,
							decimalPlaces: d,
							padDecimalPlaces: D,
							thousandsSeparator: r,
							decimalSeparator: a,
							symbolAfter: _,
							className: I,
							internalClassName: u,
							raw: A,
						} = h,
						L = o.Z(l, { symbol: i, decimalPlaces: d, padDecimalPlaces: D, thousandsSeparator: r, decimalSeparator: a, symbolAfter: _ }),
						c = (0, g.Z)(h, f);
					return A
						? (0, s.Y)(x.FK, { children: L })
						: (0, s.Y)(T._, { children: (0, s.Y)('span', { className: P()('ss__formatted-number', I, u), ...c, children: L }) });
				}
			},
			'./components/src/components/Atoms/FormattedNumber/index.ts'(n, t, e) {
				e.d(t, { G: () => s.G });
				var s = e('./components/src/components/Atoms/FormattedNumber/FormattedNumber.tsx');
			},
			'./components/src/components/Atoms/Icon/index.ts'(n, t, e) {
				e.d(t, { I: () => s.I, c: () => x.c });
				var s = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					x = e('./components/src/components/Atoms/Icon/paths.tsx');
			},
			'./components/src/components/Atoms/Image/index.ts'(n, t, e) {
				e.d(t, { _: () => s._, t: () => s.t });
				var s = e('./components/src/components/Atoms/Image/Image.tsx');
			},
			'./components/src/components/Atoms/InlineBanner/index.ts'(n, t, e) {
				e.d(t, { _: () => s._ });
				var s = e('./components/src/components/Atoms/InlineBanner/InlineBanner.tsx');
			},
			'./components/src/components/Atoms/Loading/LoadingBar.tsx'(n, t, e) {
				e.d(t, { G: () => C });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					x = e('../../node_modules/preact/dist/preact.module.js'),
					R = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					P = e.n(m),
					T = e('./components/src/providers/cache.tsx'),
					O = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					p = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/utilities/mergeProps.ts'),
					g = e('./components/src/utilities/mergeStyles.ts');
				const f = ({ color: b, height: y, backgroundColor: U, theme: M }) => {
						const h = (0, o.i7)({
							from: { left: '-200px', width: '30%' },
							'50%': { width: '30%' },
							'70%': { width: '70%' },
							'80%': { left: '50%' },
							'95%': { left: '120%' },
							to: { left: '100%' },
						});
						return (0, o.AH)({
							height: y,
							position: 'fixed',
							top: '0',
							left: '0',
							right: '0',
							margin: 'auto',
							transition: 'opacity 0.3s ease',
							opacity: '1',
							visibility: 'visible',
							zIndex: '10000',
							background: U || M?.variables?.colors?.secondary || '#f8f8f8',
							'& .ss__loading-bar__bar': {
								position: 'absolute',
								top: '0',
								left: '-200px',
								height: '100%',
								background: `${b || M?.variables?.colors?.primary || '#ccc'}`,
								animation: `${h} 2s linear infinite`,
							},
						});
					},
					C = (0, R.PA)((b) => {
						const y = (0, O.u)(),
							M = { height: '5px', treePath: (0, p.LU)() },
							h = (0, E.v6)('loadingBar', y, M, b),
							{ active: l, className: i, internalClassName: d } = h,
							D = (0, g.Z)(h, f);
						return l
							? (0, s.Y)(T._, {
									children: (0, s.Y)('div', {
										...D,
										className: P()('ss__loading-bar', i, d),
										children: (0, s.Y)('div', { className: 'ss__loading-bar__bar' }),
									}),
							  })
							: (0, s.Y)(x.FK, {});
					});
			},
			'./components/src/components/Atoms/Loading/index.ts'(n, t, e) {
				e.d(t, { G: () => s.G });
				var s = e('./components/src/components/Atoms/Loading/LoadingBar.tsx');
			},
			'./components/src/components/Atoms/Overlay/index.ts'(n, t, e) {
				e.d(t, { h: () => s.h });
				var s = e('./components/src/components/Atoms/Overlay/Overlay.tsx');
			},
			'./components/src/components/Atoms/PaginationInfo/index.ts'(n, t, e) {
				e.d(t, { R: () => s.R });
				var s = e('./components/src/components/Atoms/PaginationInfo/PaginationInfo.tsx');
			},
			'./components/src/components/Atoms/Price/index.ts'(n, t, e) {
				e.d(t, { g: () => s.g });
				var s = e('./components/src/components/Atoms/Price/Price.tsx');
			},
			'./components/src/components/Atoms/SearchHeader/index.ts'(n, t, e) {
				e.d(t, { w: () => s.w });
				var s = e('./components/src/components/Atoms/SearchHeader/SearchHeader.tsx');
			},
			'./components/src/components/Atoms/Skeleton/Skeleton.tsx'(n, t, e) {
				e.d(t, { E: () => f });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					x = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					R = e('../../node_modules/classnames/index.js'),
					o = e.n(R),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('./components/src/providers/cache.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					O = e('./components/src/providers/treePath.tsx'),
					p = e('./components/src/utilities/mergeProps.ts'),
					E = e('./components/src/utilities/mergeStyles.ts');
				const g = ({ width: C, height: b, round: y, backgroundColor: U, animatedColor: M }) => {
						const h = (0, x.i7)({ from: { transform: 'translateX(-100%)' }, to: { transform: 'translateX(100%)' } });
						return (0, x.AH)({
							width: C,
							height: b,
							borderRadius: y ? C : '0.25rem',
							backgroundColor: U,
							display: 'inline-flex',
							lineHeight: '1',
							position: 'relative',
							overflow: 'hidden',
							zIndex: '1',
							'&:after': {
								content: '""',
								display: 'block',
								position: 'absolute',
								left: '0',
								right: '0',
								height: '100%',
								backgroundRepeat: 'no-repeat',
								backgroundImage: `linear-gradient(90deg, ${U}, ${M}, ${U})`,
								transform: 'translateX(-100%)',
								animation: `${h} 1.5s linear infinite`,
								animationTimingFunction: 'ease-in-out',
							},
						});
					},
					f = (0, m.PA)((C) => {
						const b = (0, T.u)(),
							U = { backgroundColor: '#ebebeb', animatedColor: '#f5f5f5', treePath: (0, O.LU)() },
							M = (0, p.v6)('skeleton', b, U, C),
							{ className: h, internalClassName: l } = M,
							i = (0, E.Z)(M, g);
						return (0, s.Y)(P._, { children: (0, s.Y)('div', { ...i, className: o()('ss__skeleton', h, l) }) });
					});
			},
			'./components/src/components/Atoms/Skeleton/index.ts'(n, t, e) {
				e.d(t, { E: () => s.E });
				var s = e('./components/src/components/Atoms/Skeleton/Skeleton.tsx');
			},
			'./components/src/components/Molecules/CalloutBadge/index.ts'(n, t, e) {
				e.d(t, { W: () => s.W });
				var s = e('./components/src/components/Molecules/CalloutBadge/CalloutBadge.tsx');
			},
			'./components/src/components/Molecules/Carousel/index.ts'(n, t, e) {
				e.d(t, { FN: () => s.FN, K: () => s.K, og: () => s.og });
				var s = e('./components/src/components/Molecules/Carousel/Carousel.tsx');
			},
			'./components/src/components/Molecules/Checkbox/index.ts'(n, t, e) {
				e.d(t, { S: () => s.S });
				var s = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx');
			},
			'./components/src/components/Molecules/ErrorHandler/ErrorHandler.tsx'(n, t, e) {
				e.d(t, { z: () => a });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					x = e('../../node_modules/preact/dist/preact.module.js'),
					R = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					m = e.n(o),
					P = e('../../node_modules/mobx-react-lite/es/index.js'),
					T = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					O = e('./components/src/components/Atoms/Button/Button.tsx'),
					p = e('./components/src/utilities/defined.ts'),
					E = e('./components/src/utilities/Colour/Colour.ts'),
					g = e('./components/src/utilities/mergeProps.ts'),
					f = e('./components/src/utilities/mergeStyles.ts'),
					C = e('./components/src/providers/cache.tsx'),
					b = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/treePath.tsx'),
					U = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/types.js'),
					M = e('./components/src/hooks/useLang.tsx'),
					h = e('../../node_modules/deepmerge/dist/cjs.js'),
					l = e.n(h);
				const i = new E.V('#ecaa15'),
					d = new E.V('#cc1212'),
					D = new E.V('#4c3ce2'),
					r = ({ theme: _ }) =>
						(0, R.AH)({
							borderRadius: '2px',
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
							borderLeft: '4px solid',
							'.ss__error-handler__message': {
								padding: '10px',
								display: 'flex',
								alignItems: 'center',
								'.ss__error-handler__message__type': { fontWeight: 'bold', marginRight: '5px' },
								'.ss__icon': { marginRight: '10px' },
							},
							'& .ss__error-handler__button': {
								backgroundColor: 'unset',
								color: 'inherit',
								borderColor: _?.variables?.colors?.primary,
								width: ['150px', 'fit-content'],
								margin: '5px 10px',
								'&:hover': { backgroundColor: 'unset', borderColor: 'unset', color: 'unset', '.ss__icon': { fill: 'unset', stroke: 'unset' } },
								'.ss__icon': { margin: '0 5px 0 0' },
							},
							'&.ss__error-handler--error': {
								backgroundColor: d.lighten(180).hex,
								borderLeftColor: d.hex,
								'.ss__error-handler__message': { '.ss__icon': { fill: d.hex } },
							},
							'&.ss__error-handler--warning': {
								backgroundColor: i.lighten(180).hex,
								borderLeftColor: i.hex,
								'.ss__icon': { fill: i.hex, stroke: i.hex },
								'.ss__error-handler__button': {
									color: i.hex,
									borderColor: i.hex,
									fontWeight: 'bold',
									textTransform: 'uppercase',
									display: 'inline-flex',
									alignItems: 'center',
									'.ss__button__content': { order: 2 },
									'.ss__button__icon': { order: 1, width: '10px', height: '10px', fill: i.hex, stroke: i.hex },
									'&:hover': {
										color: i.darken(30).hex,
										borderColor: i.darken(30).hex,
										'.ss__button__icon': { fill: i.darken(30).hex, stroke: i.darken(30).hex },
									},
								},
							},
							'&.ss__error-handler--info': {
								backgroundColor: D.lighten(180).hex,
								borderLeftColor: D.hex,
								'.ss__error-handler__message': { '.ss__icon': { fill: D.hex } },
							},
						}),
					a = (0, P.PA)((_) => {
						const I = (0, b.u)(),
							A = { treePath: (0, y.LU)() },
							L = (0, g.v6)('errorHandler', I, A, _),
							{ controller: c, error: B, disableStyles: v, onRetryClick: W, className: S, internalClassName: N, treePath: V } = L,
							Y = {
								icon: { size: '18px', internalClassName: 'ss__error-handler__icon', ...(0, p.s)({ disableStyles: v }), theme: L.theme, treePath: V },
								buttonRetry: {
									internalClassName: 'ss__error-handler__button',
									icon: 'rotate-right',
									...(0, p.s)({ disableStyles: v }),
									theme: L.theme,
									treePath: V,
								},
							},
							F = c?.store?.error || B,
							j = (0, f.Z)(L, r),
							K = {
								warningText: { value: 'Warning:' },
								infoText: { value: 'Info:' },
								errorText: { value: 'Error:' },
								reloadText: { value: 'Retry' },
							},
							Z = l()(K, L.lang || {}),
							z = (0, M.u)(Z, { controller: c });
						return Object.values(U.B).includes(F?.type) && F?.message
							? (0, s.Y)(C._, {
									children: (0, s.Y)('div', {
										className: m()('ss__error-handler', `ss__error-handler--${F.type}`, S, N),
										...j,
										children: (() => {
											switch (F.type) {
												case U.B.WARNING:
													return (0, s.FD)(s.FK, {
														children: [
															(0, s.FD)('div', {
																className: 'ss__error-handler__message',
																children: [
																	(0, s.Y)(T.I, { ...Y.icon, icon: 'warn' }),
																	(0, s.Y)('span', { className: 'ss__error-handler__message__type', ...z.warningText?.all }),
																	(0, s.Y)('span', { className: 'ss__error-handler__message__content', children: F.message }),
																],
															}),
															F?.code == 429
																? (0, s.Y)(O.$, {
																		...Y.buttonRetry,
																		onClick: (Q) => {
																			W ? W(Q) : c?.search();
																		},
																		...z.reloadText.attributes,
																		children: (0, s.Y)('span', { className: 'ss__error-handler__button__text', ...z.reloadText.value }),
																  })
																: null,
														],
													});
												case U.B.ERROR:
													return (0, s.FD)('div', {
														className: 'ss__error-handler__message',
														children: [
															(0, s.Y)(T.I, { ...Y.icon, icon: 'error' }),
															(0, s.Y)('span', { className: 'ss__error-handler__message__type', ...z.errorText?.all }),
															(0, s.Y)('span', { className: 'ss__error-handler__message__content', children: F.message }),
														],
													});
												case U.B.INFO:
													return (0, s.FD)('div', {
														className: 'ss__error-handler__message',
														children: [
															(0, s.Y)(T.I, { ...Y.icon, icon: 'info' }),
															(0, s.Y)('span', { className: 'ss__error-handler__message__type', ...z.infoText?.all }),
															(0, s.Y)('span', { className: 'ss__error-handler__message__content', children: F.message }),
														],
													});
											}
										})(),
									}),
							  })
							: (0, s.Y)(x.FK, {});
					});
			},
			'./components/src/components/Molecules/ErrorHandler/index.ts'(n, t, e) {
				e.d(t, { z: () => s.z });
				var s = e('./components/src/components/Molecules/ErrorHandler/ErrorHandler.tsx');
			},
			'./components/src/components/Molecules/FacetGridOptions/index.ts'(n, t, e) {
				e.d(t, { S: () => s.S });
				var s = e('./components/src/components/Molecules/FacetGridOptions/FacetGridOptions.tsx');
			},
			'./components/src/components/Molecules/FacetHierarchyOptions/index.ts'(n, t, e) {
				e.d(t, { T: () => s.T });
				var s = e('./components/src/components/Molecules/FacetHierarchyOptions/FacetHierarchyOptions.tsx');
			},
			'./components/src/components/Molecules/FacetListOptions/index.ts'(n, t, e) {
				e.d(t, { C: () => s.C });
				var s = e('./components/src/components/Molecules/FacetListOptions/FacetListOptions.tsx');
			},
			'./components/src/components/Molecules/FacetPaletteOptions/index.ts'(n, t, e) {
				e.d(t, { P: () => s.P });
				var s = e('./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.tsx');
			},
			'./components/src/components/Molecules/FacetSlider/index.ts'(n, t, e) {
				e.d(t, { l: () => s.l });
				var s = e('./components/src/components/Molecules/FacetSlider/FacetSlider.tsx');
			},
			'./components/src/components/Molecules/Filter/index.ts'(n, t, e) {
				e.d(t, { d: () => s.d });
				var s = e('./components/src/components/Molecules/Filter/Filter.tsx');
			},
			'./components/src/components/Molecules/Grid/index.ts'(n, t, e) {
				e.d(t, { x: () => s.x });
				var s = e('./components/src/components/Molecules/Grid/Grid.tsx');
			},
			'./components/src/components/Molecules/LayoutSelector/index.ts'(n, t, e) {
				e.d(t, { s: () => s.s });
				var s = e('./components/src/components/Molecules/LayoutSelector/LayoutSelector.tsx');
			},
			'./components/src/components/Molecules/List/index.ts'(n, t, e) {
				e.d(t, { B: () => s.B });
				var s = e('./components/src/components/Molecules/List/List.tsx');
			},
			'./components/src/components/Molecules/LoadMore/index.ts'(n, t, e) {
				e.d(t, { e: () => s.e });
				var s = e('./components/src/components/Molecules/LoadMore/LoadMore.tsx');
			},
			'./components/src/components/Molecules/OverlayBadge/index.ts'(n, t, e) {
				e.d(t, { Q: () => s.Q });
				var s = e('./components/src/components/Molecules/OverlayBadge/OverlayBadge.tsx');
			},
			'./components/src/components/Molecules/Pagination/index.ts'(n, t, e) {
				e.d(t, { d: () => s.d });
				var s = e('./components/src/components/Molecules/Pagination/Pagination.tsx');
			},
			'./components/src/components/Molecules/PerPage/index.ts'(n, t, e) {
				e.d(t, { F: () => s.F });
				var s = e('./components/src/components/Molecules/PerPage/PerPage.tsx');
			},
			'./components/src/components/Molecules/Radio/index.ts'(n, t, e) {
				e.d(t, { s: () => s.s });
				var s = e('./components/src/components/Molecules/Radio/Radio.tsx');
			},
			'./components/src/components/Molecules/RadioList/index.ts'(n, t, e) {
				e.d(t, { q: () => s.q });
				var s = e('./components/src/components/Molecules/RadioList/RadioList.tsx');
			},
			'./components/src/components/Molecules/Rating/index.ts'(n, t, e) {
				e.d(t, { G: () => s.G });
				var s = e('./components/src/components/Molecules/Rating/Rating.tsx');
			},
			'./components/src/components/Molecules/Result/index.ts'(n, t, e) {
				e.d(t, { Q: () => s.Q });
				var s = e('./components/src/components/Molecules/Result/Result.tsx');
			},
			'./components/src/components/Molecules/SearchInput/index.ts'(n, t, e) {
				e.d(t, { D: () => s.D });
				var s = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx');
			},
			'./components/src/components/Molecules/Select/index.ts'(n, t, e) {
				e.d(t, { l: () => s.l });
				var s = e('./components/src/components/Molecules/Select/Select.tsx');
			},
			'./components/src/components/Molecules/Slideout/index.ts'(n, t, e) {
				e.d(t, { S: () => s.S });
				var s = e('./components/src/components/Molecules/Slideout/Slideout.tsx');
			},
			'./components/src/components/Molecules/Slideshow/index.ts'(n, t, e) {
				e.d(t, { b: () => s.b });
				var s = e('./components/src/components/Molecules/Slideshow/Slideshow.tsx');
			},
			'./components/src/components/Molecules/SortBy/index.ts'(n, t, e) {
				e.d(t, { g: () => s.g });
				var s = e('./components/src/components/Molecules/SortBy/SortBy.tsx');
			},
			'./components/src/components/Molecules/Swatches/index.ts'(n, t, e) {
				e.d(t, { l: () => s.l });
				var s = e('./components/src/components/Molecules/Swatches/Swatches.tsx');
			},
			'./components/src/components/Molecules/TemplatesEditor/index.ts'(n, t, e) {
				e.d(t, { j: () => U });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					x = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					R = e('../../node_modules/classnames/index.js'),
					o = e.n(R),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					P = e('./components/src/providers/cache.tsx');
				const T = () =>
					(0, s.Y)('svg', {
						id: 'Layer_2',
						className: 'athos-logo',
						'data-name': 'Layer 2',
						xmlns: 'http://www.w3.org/2000/svg',
						viewBox: '0 0 271.84 40',
						children: (0, s.Y)('g', {
							id: 'Layer_1-2',
							'data-name': 'Layer 1',
							children: (0, s.FD)('g', {
								children: [
									(0, s.FD)('g', {
										children: [
											(0, s.FD)('g', {
												children: [
													(0, s.Y)('path', {
														className: 'cls-2',
														d: 'M50.86,18.26c.58-1.16,1.37-2.05,2.37-2.67,1-.62,2.11-.94,3.34-.94,1.05,0,1.97.21,2.77.64.79.43,1.4.99,1.83,1.68v-2.11h4.57v14.92h-4.57v-2.11c-.45.69-1.07,1.26-1.86,1.68-.79.43-1.72.64-2.77.64-1.21,0-2.32-.32-3.31-.95-1-.63-1.79-1.53-2.37-2.7s-.87-2.52-.87-4.05.29-2.88.87-4.04ZM60.22,19.62c-.63-.66-1.4-.99-2.3-.99-.66,0-1.31.2-1.85.58-.95.66-1.42,1.69-1.42,3.09,0,1.14.32,2.05.95,2.71.78.82,1.77,1.14,2.96.95.2-.03.41-.1.6-.19,1.34-.64,2.01-1.79,2.01-3.45,0-1.14-.32-2.04-.95-2.7Z',
													}),
													(0, s.Y)('path', {
														className: 'cls-2',
														d: 'M77.07,25.91v3.88h-2.33c-1.66,0-2.95-.41-3.88-1.22s-1.39-2.13-1.39-3.97v-5.94h-1.82v-3.8h1.82v-3.64h4.57v3.64h2.99v3.8h-2.99v5.99c0,.45.11.77.32.96s.57.29,1.07.29h1.63Z',
													}),
													(0, s.Y)('path', {
														className: 'cls-2',
														d: 'M92.29,16.4c1.03,1.13,1.55,2.69,1.55,4.66v8.72h-4.55v-8.1c0-1-.26-1.77-.78-2.33s-1.21-.83-2.08-.83-1.57.28-2.08.83c-.52.55-.78,1.33-.78,2.33v8.1h-4.57V10h4.57v6.87c.46-.66,1.1-1.19,1.9-1.58.8-.39,1.7-.59,2.7-.59,1.71,0,3.08.57,4.12,1.7Z',
													}),
													(0, s.Y)('path', {
														className: 'cls-2',
														d: 'M99.47,29.06c-1.17-.62-2.08-1.52-2.75-2.67-.67-1.16-1-2.51-1-4.06s.34-2.88,1.02-4.05c.68-1.17,1.6-2.06,2.78-2.69s2.49-.94,3.96-.94,2.78.31,3.96.94,2.1,1.52,2.78,2.69c.68,1.17,1.02,2.52,1.02,4.05s-.34,2.88-1.03,4.05c-.69,1.17-1.62,2.06-2.81,2.69-1.19.62-2.51.94-3.97.94s-2.78-.31-3.94-.94ZM105.65,25.08c.61-.64.92-1.56.92-2.75s-.3-2.11-.9-2.75c-.6-.64-1.33-.96-2.21-.96s-1.63.32-2.22.95c-.59.63-.88,1.56-.88,2.77s.29,2.11.87,2.75c.58.64,1.31.96,2.18.96s1.62-.32,2.23-.96Z',
													}),
													(0, s.Y)('path', {
														className: 'cls-2',
														d: 'M116.45,29.33c-1.02-.45-1.82-1.06-2.41-1.83-.59-.78-.92-1.65-.99-2.61h4.52c.05.52.3.94.72,1.26.43.32.95.48,1.58.48.57,0,1.01-.11,1.32-.33.31-.22.47-.51.47-.87,0-.43-.22-.74-.67-.95-.45-.2-1.17-.43-2.17-.68-1.07-.25-1.96-.51-2.67-.79-.71-.28-1.33-.71-1.84-1.31-.52-.6-.78-1.4-.78-2.42,0-.86.24-1.63.71-2.34.47-.7,1.17-1.26,2.09-1.67s2.01-.61,3.28-.61c1.87,0,3.35.46,4.42,1.39s1.7,2.16,1.86,3.69h-4.22c-.07-.52-.3-.93-.68-1.23-.38-.3-.89-.45-1.51-.45-.53,0-.95.1-1.23.31s-.43.49-.43.84c0,.43.23.75.68.96s1.16.43,2.13.64c1.1.29,2.01.57,2.7.84.7.28,1.31.72,1.83,1.34s.8,1.44.82,2.47c0,.87-.25,1.65-.74,2.34-.49.69-1.19,1.23-2.11,1.62-.92.39-1.98.59-3.2.59-1.3,0-2.46-.22-3.48-.67Z',
													}),
												],
											}),
											(0, s.FD)('g', {
												children: [
													(0, s.Y)('path', {
														className: 'cls-1',
														d: 'M133.64,18.4c.61-1.14,1.46-2.02,2.54-2.65,1.08-.62,2.31-.93,3.7-.93,1.82,0,3.32.45,4.49,1.35,1.18.9,1.94,2.12,2.28,3.67h-2.02c-.25-1.06-.8-1.9-1.63-2.5-.84-.6-1.88-.9-3.12-.9-.99,0-1.88.22-2.67.67s-1.42,1.12-1.88,2.01c-.46.89-.69,1.99-.69,3.28s.23,2.39.69,3.29,1.08,1.58,1.88,2.02c.79.45,1.68.68,2.67.68,1.24,0,2.28-.3,3.12-.91.84-.6,1.38-1.44,1.63-2.52h2.02c-.34,1.51-1.11,2.73-2.29,3.64-1.19.92-2.68,1.38-4.48,1.38-1.39,0-2.62-.31-3.7-.93s-1.93-1.5-2.54-2.65c-.61-1.14-.92-2.48-.92-4.01s.31-2.87.92-4.01Z',
													}),
													(0, s.Y)('path', {
														className: 'cls-1',
														d: 'M152.31,29.07c-1.11-.62-1.98-1.5-2.62-2.65-.64-1.14-.96-2.48-.96-4.01s.32-2.87.97-4.01,1.53-2.02,2.65-2.65c1.12-.62,2.37-.93,3.75-.93s2.64.31,3.77.93c1.12.62,2.01,1.5,2.65,2.65.64,1.14.96,2.48.96,4.01s-.32,2.84-.97,4c-.65,1.15-1.54,2.04-2.67,2.66-1.13.62-2.39.93-3.78.93s-2.63-.31-3.74-.93ZM158.75,27.69c.83-.44,1.5-1.11,2.01-2,.51-.89.77-1.98.77-3.28s-.25-2.39-.76-3.28-1.17-1.56-2-2c-.83-.44-1.73-.66-2.7-.66s-1.87.22-2.7.66-1.49,1.11-1.99,2c-.49.89-.74,1.99-.74,3.28s.25,2.39.74,3.28c.5.89,1.15,1.56,1.97,2,.82.44,1.72.66,2.69.66s1.87-.22,2.7-.66Z',
													}),
													(0, s.Y)('path', {
														className: 'cls-1',
														d: 'M187.32,16.41c1.09,1.09,1.63,2.67,1.63,4.74v8.64h-1.86v-8.42c0-1.6-.39-2.83-1.16-3.67-.77-.85-1.83-1.27-3.16-1.27s-2.49.46-3.32,1.38c-.83.92-1.24,2.25-1.24,4v7.99h-1.86v-8.42c0-1.6-.39-2.83-1.16-3.67-.77-.85-1.84-1.27-3.19-1.27s-2.49.46-3.32,1.38c-.83.92-1.24,2.25-1.24,4v7.99h-1.89v-14.74h1.89v2.54c.47-.92,1.13-1.61,2-2.09.86-.48,1.83-.72,2.89-.72,1.28,0,2.4.31,3.36.92.96.61,1.66,1.51,2.09,2.7.4-1.17,1.07-2.06,2.04-2.69s2.06-.93,3.28-.93c1.73,0,3.14.55,4.23,1.63Z',
													}),
													(0, s.Y)('path', {
														className: 'cls-1',
														d: 'M212.8,16.41c1.09,1.09,1.63,2.67,1.63,4.74v8.64h-1.86v-8.42c0-1.6-.39-2.83-1.16-3.67-.77-.85-1.83-1.27-3.16-1.27s-2.49.46-3.32,1.38c-.83.92-1.24,2.25-1.24,4v7.99h-1.86v-8.42c0-1.6-.39-2.83-1.16-3.67-.77-.85-1.84-1.27-3.19-1.27s-2.49.46-3.32,1.38c-.83.92-1.24,2.25-1.24,4v7.99h-1.89v-14.74h1.89v2.54c.47-.92,1.13-1.61,2-2.09.86-.48,1.83-.72,2.89-.72,1.28,0,2.4.31,3.36.92.96.61,1.66,1.51,2.09,2.7.4-1.17,1.07-2.06,2.04-2.69s2.06-.93,3.28-.93c1.73,0,3.14.55,4.23,1.63Z',
													}),
													(0, s.Y)('path', {
														className: 'cls-1',
														d: 'M230.57,23.14h-12.23c.05,1.12.32,2.07.81,2.86s1.12,1.39,1.92,1.8c.79.4,1.66.61,2.59.61,1.22,0,2.26-.3,3.09-.89s1.39-1.39,1.66-2.4h2c-.36,1.44-1.13,2.62-2.31,3.52s-2.66,1.36-4.44,1.36c-1.39,0-2.63-.31-3.73-.93-1.1-.62-1.96-1.5-2.58-2.65-.62-1.14-.93-2.48-.93-4.01s.31-2.87.92-4.02c.61-1.15,1.47-2.03,2.56-2.65s2.35-.92,3.75-.92,2.63.31,3.69.92c1.05.61,1.86,1.44,2.43,2.47.57,1.04.85,2.18.85,3.44,0,.65-.02,1.14-.05,1.48ZM228.05,18.79c-.46-.77-1.09-1.36-1.88-1.76-.79-.4-1.66-.59-2.59-.59-1.4,0-2.6.45-3.59,1.35-.99.9-1.54,2.17-1.65,3.81h10.37c.02-1.1-.2-2.03-.66-2.81Z',
													}),
													(0, s.Y)('path', {
														className: 'cls-1',
														d: 'M236.49,15.53c.85-.5,1.9-.76,3.15-.76v1.97h-.51c-1.37,0-2.47.37-3.29,1.11-.83.74-1.24,1.97-1.24,3.7v8.23h-1.89v-14.74h1.89v2.62c.41-.92,1.05-1.63,1.9-2.13Z',
													}),
													(0, s.Y)('path', {
														className: 'cls-1',
														d: 'M242.55,18.4c.61-1.14,1.46-2.02,2.54-2.65s2.31-.93,3.7-.93c1.82,0,3.32.45,4.49,1.35,1.18.9,1.94,2.12,2.28,3.67h-2.02c-.25-1.06-.8-1.9-1.63-2.5-.84-.6-1.88-.9-3.12-.9-.99,0-1.88.22-2.67.67s-1.42,1.12-1.88,2.01c-.46.89-.69,1.99-.69,3.28s.23,2.39.69,3.29,1.08,1.58,1.88,2.02c.79.45,1.68.68,2.67.68,1.24,0,2.28-.3,3.12-.91.84-.6,1.38-1.44,1.63-2.52h2.02c-.34,1.51-1.11,2.73-2.29,3.64-1.19.92-2.68,1.38-4.48,1.38-1.39,0-2.62-.31-3.7-.93s-1.93-1.5-2.54-2.65c-.61-1.14-.92-2.48-.92-4.01s.31-2.87.92-4.01Z',
													}),
													(0, s.Y)('path', {
														className: 'cls-1',
														d: 'M271.79,23.14h-12.23c.05,1.12.32,2.07.81,2.86.49.79,1.12,1.39,1.92,1.8.79.4,1.66.61,2.59.61,1.22,0,2.25-.3,3.09-.89.84-.59,1.39-1.39,1.66-2.4h2c-.36,1.44-1.13,2.62-2.31,3.52-1.18.91-2.66,1.36-4.44,1.36-1.39,0-2.63-.31-3.73-.93s-1.96-1.5-2.58-2.65c-.62-1.14-.93-2.48-.93-4.01s.31-2.87.92-4.02c.61-1.15,1.47-2.03,2.57-2.65s2.35-.92,3.75-.92,2.63.31,3.68.92c1.05.61,1.86,1.44,2.43,2.47.57,1.04.85,2.18.85,3.44,0,.65-.02,1.14-.05,1.48ZM269.26,18.79c-.46-.77-1.09-1.36-1.88-1.76-.79-.4-1.66-.59-2.59-.59-1.4,0-2.6.45-3.59,1.35s-1.54,2.17-1.65,3.81h10.37c.02-1.1-.2-2.03-.66-2.81Z',
													}),
												],
											}),
										],
									}),
									(0, s.FD)('g', {
										children: [
											(0, s.Y)('path', {
												className: 'cls-2',
												d: 'M40,13.34c0,2.87-2.1,5.2-4.7,5.2h-10.42c-3.66,0-5.9-4.42-4.02-7.9l4.37-8.11c.86-1.57,2.37-2.53,4.02-2.53h6.03c2.59,0,4.7,2.34,4.7,5.2l.02,8.14Z',
											}),
											(0, s.Y)('path', {
												className: 'cls-1',
												d: 'M40,34.79c0,2.87-2.1,5.2-4.7,5.2h-10.42c-3.66,0-5.9-4.42-4.02-7.9l4.37-8.11c.86-1.57,2.37-2.53,4.02-2.53h6.03c2.59,0,4.7,2.34,4.7,5.2l.02,8.14Z',
											}),
											(0, s.Y)('path', {
												className: 'cls-1',
												d: 'M0,5.2C0,2.34,2.1,0,4.7,0h10.42c3.66,0,5.9,4.42,4.02,7.9l-4.37,8.11c-.86,1.57-2.37,2.53-4.02,2.53h-6.03C2.12,18.54.02,16.21.02,13.34l-.02-8.14Z',
											}),
											(0, s.Y)('path', {
												className: 'cls-2',
												d: 'M0,26.66c0-2.87,2.1-5.2,4.7-5.2h10.42c3.66,0,5.9,4.42,4.02,7.9l-4.37,8.11c-.86,1.57-2.37,2.53-4.02,2.53h-6.03C2.12,40,.02,37.66.02,34.8l-.02-8.14Z',
											}),
										],
									}),
								],
							}),
						}),
					});
				var O = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const p = () =>
						(0, s.FD)('svg', {
							fill: '#000000',
							viewBox: '0 0 1920 1920',
							xmlns: 'http://www.w3.org/2000/svg',
							children: [
								(0, s.Y)('g', { id: 'SVGRepo_bgCarrier', strokeWidth: '0' }),
								(0, s.Y)('g', { id: 'SVGRepo_tracerCarrier', strokeLinecap: 'round', strokeLinejoin: 'round' }),
								(0, s.Y)('g', {
									id: 'SVGRepo_iconCarrier',
									children: (0, s.Y)('path', {
										d: 'M960 0v213.333c411.627 0 746.667 334.934 746.667 746.667S1371.627 1706.667 960 1706.667 213.333 1371.733 213.333 960c0-197.013 78.4-382.507 213.334-520.747v254.08H640V106.667H53.333V320h191.04C88.64 494.08 0 720.96 0 960c0 529.28 430.613 960 960 960s960-430.72 960-960S1489.387 0 960 0',
										fillRule: 'evenodd',
									}),
								}),
							],
						}),
					E = (0, m.PA)((h) => {
						const { type: l, label: i, description: d, onReset: D, display: r, showReset: a, value: _, options: I, onChange: u } = h,
							[A, L] = (0, O.J0)(_);
						return (
							(0, O.vJ)(() => {
								L(_);
							}, [_]),
							r === 'hidden'
								? null
								: (0, s.FD)('div', {
										className: 'option checkbox',
										children: [
											(0, s.Y)('label', { children: i }),
											(0, s.Y)('div', {
												className: 'reset',
												children: a
													? (0, s.Y)('button', {
															title: 'Reset',
															onClick: () => {
																D();
															},
															children: (0, s.Y)(p, {}),
													  })
													: null,
											}),
											(0, s.Y)('div', {
												className: 'value',
												title: d,
												children: (() => {
													switch (l) {
														case 'text':
															return (0, s.Y)('input', { type: 'text', value: _, onChange: (c) => u(c.target.value), disabled: r === 'disabled' });
														case 'number':
															return (0, s.Y)('input', {
																type: 'number',
																value: _,
																onChange: (c) => u(Number(c.target.value)),
																disabled: r === 'disabled',
															});
														case 'checkbox':
															return (0, s.Y)('input', {
																type: 'checkbox',
																checked: _,
																onChange: (c) => u(c.target.checked),
																disabled: r === 'disabled',
															});
														case 'dropdown':
															return (0, s.Y)('select', {
																onChange: (c) => u(c.target.value),
																disabled: r === 'disabled',
																value: _,
																children: I?.map((c, B) =>
																	c.group
																		? (0, s.Y)(
																				'optgroup',
																				{
																					label: c.group,
																					children: c.options.map((v, W) =>
																						(0, s.Y)('option', { value: v.value, children: v.label || v.value }, `${B}-${W}`)
																					),
																				},
																				B
																		  )
																		: c.options.map((v, W) => (0, s.Y)('option', { value: v.value, children: v.label || v.value }, `${B}-${W}`))
																),
															});
														case 'color':
															return (0, s.FD)(s.FK, {
																children: [
																	(0, s.Y)('input', {
																		type: 'color',
																		value: _,
																		onChange: (c) => {
																			L(c.target.value), u(c.target.value);
																		},
																		disabled: r === 'disabled',
																	}),
																	(0, s.Y)('input', {
																		type: 'text',
																		className: g(A) ? '' : 'invalid',
																		value: A,
																		onChange: (c) => {
																			L(c.target.value), g(c.target.value) && u(c.target.value);
																		},
																		disabled: r === 'disabled',
																	}),
																],
															});
														default:
															return null;
													}
												})(),
											}),
										],
								  })
						);
					}),
					g = (h) => !!/^#[0-9A-F]{6}$/i.test(h),
					f = { AbstractedControls: ({}) => (0, x.AH)({}) },
					C = (0, m.PA)((h) => {
						const l = { css: [f.AbstractedControls({ ...h })] },
							{ title: i, enableGroupReset: d, feature: D, editorStore: r, data: a } = h,
							[_, I] = D.split('/'),
							u = r.uiAbstractions[_],
							A = u?.[I];
						if (!A) return console.warn(`No controls found for feature: ${D}`, u, A), null;
						const L = d && A.some((B) => B.controls.some((v) => v.shouldShowReset())),
							c = () => {
								A.forEach((B) => {
									B.controls.forEach((v) => {
										v.shouldShowReset() && v.onReset(a);
									});
								});
							};
						return (0, s.FD)('div', {
							className: 'ss__template-editor__abstracted-controls',
							...l,
							children: [
								i &&
									(0, s.FD)('div', {
										className: 'control-title',
										children: [
											(0, s.Y)('h3', { children: i }),
											L &&
												(0, s.Y)('span', {
													className: 'reset',
													children: (0, s.Y)('button', {
														title: 'Reset',
														onClick: () => {
															c();
														},
														children: (0, s.Y)(p, {}),
													}),
												}),
										],
									}),
								A.map((B) => {
									const v = B.showReset && B.controls.some((S) => S.shouldShowReset()),
										W = () => {
											B.controls.forEach((S) => {
												S.shouldShowReset() && S.onReset(a);
											});
										};
									return (0, s.FD)(
										'div',
										{
											className: 'group',
											children: [
												B.title &&
													(0, s.FD)('div', {
														className: 'group-title',
														children: [
															(0, s.Y)('h4', { title: B.description, children: B.title }),
															v &&
																(0, s.Y)('span', {
																	className: 'reset',
																	children: v
																		? (0, s.Y)('button', {
																				title: 'Reset',
																				onClick: () => {
																					W();
																				},
																				children: (0, s.Y)(p, {}),
																		  })
																		: null,
																}),
														],
													}),
												B.controls.map((S, N) =>
													(0, s.Y)(
														E,
														{
															type: S.type,
															label: S.label,
															description: S.description,
															showReset: S.shouldShowReset(),
															onChange: (V) => S.onValueChange(V, a),
															onReset: () => S.onReset(a),
															display: S.getDisplayState ? S.getDisplayState(a) : 'visible',
															value: S.getValue(a),
															options: S.getOptions ? S.getOptions(a) : [],
														},
														N
													)
												),
											],
										},
										B.title
									);
								}),
							],
						});
					}),
					b = (h) => {
						const { label: l, description: i, onReset: d, disabled: D, showReset: r, value: a, options: _, onChange: I } = h;
						return (0, s.FD)('div', {
							className: 'option dropdown',
							children: [
								(0, s.Y)('label', { children: l }),
								(0, s.Y)('div', {
									className: 'reset',
									children: r
										? (0, s.Y)('button', {
												title: 'Reset',
												onClick: () => {
													d();
												},
												children: (0, s.Y)(p, {}),
										  })
										: null,
								}),
								(0, s.FD)('div', {
									className: 'value',
									children: [
										(0, s.Y)('select', {
											onChange: (u) => I(u.target.value),
											disabled: D,
											value: a,
											children: _.map((u, A) => (0, s.Y)('option', { value: u, children: u }, A)),
										}),
										(0, s.Y)('span', { children: i }),
									],
								}),
							],
						});
					},
					y = {
						TemplatesEditor: ({}) =>
							(0, x.AH)({
								display: 'flex',
								flexDirection: 'column',
								minWidth: '400px',
								overflow: 'hidden',
								fontSize: '14px',
								position: 'fixed',
								zIndex: '10003',
								cursor: 'auto',
								top: '10px',
								right: 0,
								color: '#333',
								borderRight: 0,
								borderTopLeftRadius: '5px',
								borderBottomLeftRadius: '5px',
								boxShadow: 'rgba(81, 81, 81, 0.5) -1px 0px 3px 0px',
								border: '1px solid #D0E0F3',
								background: '#F2F6FC',
								transition: 'right ease 0.2s, height ease 0.3s 0.3s, max-height ease 0.3s 0.3s',
								boxSizing: 'border-box',
								width: '400px',
								maxWidth: '90vw',
								maxHeight: 'calc(100vh - 20px)',
								'*': { boxSizing: 'border-box' },
								'.ss__template-editor__header': {
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
									padding: '8px 8px 4px 8px',
									'.athos-logo': { maxWidth: '100%', width: '200px', '.cls-1': { fill: '#00aeef' }, '.cls-2': { fill: '#1d4990' } },
									'.header-actions': { display: 'flex', gap: '10px', '& button': { width: 'unset' } },
								},
								'>aside': {
									overflow: 'hidden',
									flexGrow: 1,
									display: 'flex',
									flexDirection: 'column',
									'.tab-selection': {
										display: 'flex',
										alignItems: 'center',
										padding: '0 5px',
										gap: '4px',
										height: '33px',
										flexShrink: 0,
										'.tab': {
											fontSize: '12px',
											position: 'relative',
											boxShadow: 'rgb(110 110 110 / 50%) 0px -1px 2px -1px',
											textTransform: 'capitalize',
											top: '6px',
											fontWeight: 'bold',
											border: '1px solid #D0E0F3',
											borderBottom: 'none',
											padding: '5px 10px 4px 10px',
											height: '100%',
											color: '#9eaab8',
											backgroundColor: '#dce3eb',
											borderTopLeftRadius: '5px',
											borderTopRightRadius: '5px',
											cursor: 'pointer',
											transition: 'font-size 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
											'&:hover': { backgroundColor: '#d2deed', color: '#7a838e' },
											'&.active': { fontSize: '14px', backgroundColor: '#fff', color: '#283E57', paddingTop: '7px', top: '2px', zIndex: 4 },
										},
									},
									'.tab-view': {
										position: 'relative',
										zIndex: 3,
										borderTop: '2px solid #D0E0F3',
										background: '#fff',
										flexGrow: 1,
										display: 'flex',
										flexDirection: 'column',
										minHeight: 0,
										'.tab-view-shadow': {
											position: 'absolute',
											top: 0,
											left: 0,
											right: '10px',
											bottom: 0,
											boxShadow: 'inset 5px 12px 6px 0px #fff',
											pointerEvents: 'none',
											'&.bottom': { boxShadow: 'inset 0 -12px 6px 0px #fff' },
										},
										'.tab-view-content': {
											padding: '0 10px 10px',
											flexGrow: 1,
											overflowY: 'auto',
											minHeight: 0,
											'&::-webkit-scrollbar': { width: '8px' },
											'&::-webkit-scrollbar-track': { background: '#f5f5f5' },
											'&::-webkit-scrollbar-thumb': { background: '#96aabe' },
										},
									},
								},
								'&.ss__template-editor--collapsed': {
									right: '-354px',
									transition: 'right ease 0.5s, height ease 0.3s 0.3s, max-height ease 0.3s 0.3s',
									height: '48px',
									maxHeight: '48px',
									cursor: 'pointer',
									overflow: 'hidden',
								},
								'input, select, option, optgroup, button, h1, h2, h3, h4, h5, h6, i': { all: 'revert', color: '#283E57' },
								h1: { fontSize: '20px' },
								h2: { fontSize: '18px' },
								h3: { fontSize: '16px' },
								h4: { fontSize: '14px' },
								h5: { fontSize: '12px' },
								h6: { fontSize: '10px' },
								'input[type="text"], input[type="number"], select, button': {
									border: '1px solid #ccc',
									height: '30px',
									minHeight: '30px',
									padding: '0 10px',
									borderRadius: '5px',
									fontSize: '12px',
									color: '#333',
									backgroundColor: '#fff',
									boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
									width: '100%',
									'&:hover': { color: 'unset', background: 'unset' },
									'&:disabled': { borderColor: '#ddd', boxShadow: 'none', opacity: 1, color: '#999', cursor: 'default' },
								},
								'input[type="checkbox"]': { height: '18px', width: '18px', margin: '6px 0', border: '1px solid #ccc' },
								button: {
									border: 0,
									outline: 0,
									cursor: 'pointer',
									borderRadius: '4px',
									color: '#fff',
									backgroundColor: '#283e57',
									'&:hover': { color: '#fff', backgroundColor: '#0e1f33ff' },
								},
								'input[type="number"]': { width: '50px' },
								'input[type="color"]': {
									width: '70px',
									height: '30px',
									border: '1px solid #ccc',
									borderRadius: '5px',
									outline: 'none',
									boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
									padding: 0,
									margin: '0 5px 0 0',
									'&::-moz-color-swatch': { border: 'none' },
									'&::-webkit-color-swatch-wrapper': { padding: 0, borderRadius: 0 },
									'&::-webkit-color-swatch': { border: 'none' },
								},
								textarea: { width: '100%', height: '200px', border: '1px solid #ccc', color: '#777', padding: '10px' },
								'.reset': {
									flex: '0 0 30px',
									display: 'flex',
									justifyContent: 'flex-end',
									button: {
										'&:hover': { background: 'unset' },
										margin: '0 0.5em',
										padding: 0,
										background: 'unset',
										border: 'unset',
										cursor: 'pointer',
										boxShadow: 'unset',
										height: 'unset',
										svg: { fill: '#1c71bf', height: '15px' },
									},
								},
								'.control-title': { display: 'flex', alignItems: 'center', margin: '5px 0', height: '30px', h4: { margin: 0 } },
								'.group-title': { display: 'flex', alignItems: 'center', margin: '5px 0', height: '30px', h4: { margin: 0 } },
								'.option': {
									display: 'flex',
									alignItems: 'center',
									marginBottom: '5px',
									fontSize: '12px',
									label: { flex: '0 0 12em' },
									'.value': {
										flex: '1 1 auto',
										display: 'flex',
										alignItems: 'center',
										'.invalid': { border: '1px solid #cc0000', outline: '1px solid #cc0000' },
									},
									'&.color-picker': { alignItems: 'center', '.value': { alignItems: 'center' } },
								},
							}),
					},
					U = (0, m.PA)((h) => {
						const { onRemoveClick: l, templatesStore: i, editorStore: d, snap: D } = h,
							r = { css: [y.TemplatesEditor({ ...h })] };
						return (0, s.Y)(P._, {
							children: (0, s.FD)('div', {
								className: o()('ss__template-editor', { 'ss__template-editor--collapsed': d.state.hidden }),
								...r,
								onClick: (a) => {
									a.stopPropagation(), d.toggleHide(!1);
								},
								children: [
									(0, s.FD)('div', {
										className: 'ss__template-editor__header',
										children: [
											(0, s.Y)('div', { className: 'logo', children: (0, s.Y)(T, {}) }),
											(0, s.FD)('div', {
												className: 'header-actions',
												onClick: (a) => {
													a.preventDefault(), a.stopPropagation(), d.toggleHide(!0);
												},
												children: [
													(0, s.Y)('button', {
														onClick: (a) => {
															a.stopPropagation(), confirm('Closing the editor will disable modification.') && l();
														},
														children: 'Close',
													}),
													(0, s.Y)('button', {
														onClick: () => {
															d.toggleHide(!0);
														},
														children: 'Hide',
													}),
												],
											}),
										],
									}),
									(0, s.FD)('aside', {
										children: [
											(0, s.Y)('div', {
												className: 'tab-selection',
												children: d.tabs.map((a, _) =>
													(0, s.Y)(
														'div',
														{
															className: o()('tab', { active: d.state.activeTab === a }),
															onClick: () => {
																d.switchTabs(a);
															},
															children: a,
														},
														_
													)
												),
											}),
											(0, s.FD)('div', {
												className: 'tab-view',
												children: [
													(0, s.Y)('div', { className: 'tab-view-shadow' }),
													(0, s.FD)('div', {
														className: 'tab-view-content',
														children: [
															d.state.activeTab === 'templates'
																? (0, s.FD)(s.FK, {
																		children: [
																			(0, s.Y)(M, { feature: 'search', templatesStore: i }),
																			(0, s.Y)(C, { editorStore: d, data: D.controllers.search, feature: 'controllers/search' }),
																			(0, s.Y)(M, { feature: 'autocomplete', templatesStore: i }),
																			(0, s.Y)(C, { editorStore: d, data: D.controllers.autocomplete, feature: 'controllers/autocomplete' }),
																			(0, s.Y)(M, { feature: 'recommendation/default', templatesStore: i }),
																			(0, s.Y)(M, { feature: 'recommendation/bundle', templatesStore: i }),
																		],
																  })
																: '',
															d.state.activeTab === 'configuration'
																? (0, s.FD)(s.FK, {
																		children: [
																			(0, s.Y)(C, { title: 'Project Configuration', editorStore: d, feature: 'templates/config' }),
																			(0, s.Y)(C, { title: 'Theme Configuration', editorStore: d, feature: 'templates/theme' }),
																		],
																  })
																: '',
														],
													}),
													(0, s.Y)('div', { className: 'tab-view-shadow bottom' }),
												],
											}),
										],
									}),
									(0, s.Y)('footer', {}),
								],
							}),
						});
					}),
					M = (0, m.PA)((h) => {
						const { feature: l, templatesStore: i } = h,
							[d, D = ''] = l.split('/'),
							r = `${d}${D ? `-${D}` : ''}`,
							a = i.config,
							_ = a[d]?.[D]?.[`${D.charAt(0).toUpperCase() + D.slice(1)}`] || a[d]?.targets?.[0],
							I = i.library.components,
							u = D ? I[d]?.[D] : I[d],
							A = I?.result,
							L = 'Result',
							c = i.getTarget(l, _.selector),
							B = !!c?.component && c?.component !== _?.component,
							v = (c?.resultComponent || L) != (_?.resultComponent || L);
						return (0, s.FD)('div', {
							className: 'template-target-settings',
							children: [
								(0, s.Y)('h3', { children: d.charAt(0).toUpperCase() + d.slice(1) + (D ? ` (${D})` : '') }),
								!D &&
									(0, s.FD)('div', {
										className: 'option',
										children: [
											(0, s.Y)('label', { htmlFor: `${r}-target`, children: 'Target' }),
											(0, s.Y)('div', { className: 'reset' }),
											(0, s.Y)('div', {
												className: 'value',
												children: (0, s.Y)('input', { id: `${r}-target`, type: 'text', placeholder: '', disabled: !0, value: _.selector }),
											}),
										],
									}),
								(0, s.Y)(
									b,
									{
										label: 'Template',
										description: '',
										showReset: B,
										options: Object.keys(u),
										onReset: () => c?.setComponent(_?.component),
										disabled: !1,
										value: c?.component,
										onChange: (W) => c?.setComponent(`${W}`),
									},
									`${r}-template`
								),
								(0, s.Y)(
									b,
									{
										label: 'Result Template',
										description: '',
										showReset: v,
										options: Object.keys(A),
										onReset: () => c?.setResultComponent(_?.resultComponent || L),
										disabled: !1,
										value: c?.resultComponent,
										onChange: (W) => c?.setResultComponent(`${W}`),
									},
									`${r}-result-template`
								),
							],
						});
					});
			},
			'./components/src/components/Molecules/Terms/Terms.tsx'(n, t, e) {
				e.d(t, { i: () => h });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					x = e('../../node_modules/preact/dist/preact.module.js'),
					R = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					P = e.n(m),
					T = e('./components/src/providers/cache.tsx'),
					O = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					p = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					E = e('./components/src/utilities/mergeProps.ts'),
					g = e('./components/src/utilities/mergeStyles.ts'),
					f = e('./components/src/hooks/useLang.tsx'),
					C = e('../../node_modules/deepmerge/dist/cjs.js'),
					b = e.n(C);
				const y = ({ vertical: l, theme: i }) =>
						(0, o.AH)({
							'.ss__terms__title': {
								fontWeight: 'normal',
								margin: 0,
								textTransform: 'uppercase',
								padding: '10px',
								h5: { fontSize: '.8em', margin: 0 },
							},
							'.ss__terms__options': {
								display: 'flex',
								justifyContent: 'space-evenly',
								flexDirection: l ? 'column' : 'row',
								flexWrap: 'wrap',
								padding: '0px',
								'.ss__terms__option': {
									listStyle: 'none',
									padding: '10px',
									wordBreak: 'break-all',
									a: { display: 'block', em: { fontStyle: 'normal' } },
									'&.ss__terms__option--active': { a: { fontWeight: 'bold', color: i?.variables?.colors?.primary } },
								},
							},
						}),
					U = (l) => l?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
					M = (l, i) => {
						if (l && i) {
							const d = l.match(U(i));
							if (i && l && d && typeof d.index == 'number') {
								const D = l.slice(0, d.index),
									r = l.slice(d.index + i.length, l.length);
								return `${D ? `<em>${D}</em>` : ''}${i}${r ? `<em>${r}</em>` : ''}`;
							}
						}
						return `<em>${l}</em>`;
					},
					h = (0, R.PA)((l) => {
						const i = (0, O.u)(),
							d = { vertical: !0, previewOnHover: !0 },
							D = (0, E.v6)('terms', i, d, l),
							{ title: r, onTermClick: a, limit: _, previewOnHover: I, emIfy: u, className: A, internalClassName: L, controller: c } = D,
							B = c?.store?.state?.input,
							v = D.terms,
							W = (0, g.Z)(D, y),
							S = (j, K) => {
								a && a(j, K), c?.setFocused && c?.setFocused();
							},
							N = _ ? v?.slice(0, _) : v,
							V = { title: { value: r } },
							Y = b()(V, D.lang || {}),
							F = (0, f.u)({ title: Y.title }, { controller: c });
						return N?.length
							? (0, s.Y)(T._, {
									children: (0, s.FD)('div', {
										...W,
										className: P()('ss__terms', A, L),
										children: [
											r ? (0, s.Y)('div', { className: 'ss__terms__title', children: (0, s.Y)('h5', { ...F.title.all }) }) : null,
											(0, s.Y)('ul', {
												className: 'ss__terms__options',
												'aria-label': r,
												children: N?.map((j, K) => {
													const Z = {
															term: {
																value: `${u ? M(j.value, B || '') : j.value}`,
																attributes: { 'aria-label': `${r || ''} item ${K + 1} of ${N.length}, ${j.value}` },
															},
														},
														z = b()(Z, D.lang || {}),
														Q = (0, f.u)({ term: z.term }, { index: K, numberOfTerms: N.length, term: j });
													return (0, s.Y)('li', {
														className: P()('ss__terms__option', { 'ss__terms__option--active': j.active }),
														children: (0, s.Y)('a', { onClick: (H) => S(H, j), href: j.url.href, ...(I ? (0, p.l)(j.preview) : {}), ...Q.term?.all }),
													});
												}),
											}),
										],
									}),
							  })
							: (0, s.Y)(x.FK, {});
					});
			},
			'./components/src/components/Molecules/Terms/index.tsx'(n, t, e) {
				e.d(t, { i: () => s.i });
				var s = e('./components/src/components/Molecules/Terms/Terms.tsx');
			},
			'./components/src/components/Molecules/VariantSelection/index.ts'(n, t, e) {
				e.d(t, { m: () => s.m });
				var s = e('./components/src/components/Molecules/VariantSelection/VariantSelection.tsx');
			},
			'./components/src/components/Organisms/Autocomplete/index.ts'(n, t, e) {
				e.d(t, { j: () => s.j });
				var s = e('./components/src/components/Organisms/Autocomplete/Autocomplete.tsx');
			},
			'./components/src/components/Organisms/BranchOverride/BranchOverride.tsx'(n, t, e) {
				e.d(t, { n: () => h });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					x = e('../../node_modules/preact/dist/preact.module.js'),
					R = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					m = e.n(o),
					P = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					T = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					O = e('./components/src/utilities/defined.ts'),
					p = e('./components/src/utilities/mergeProps.ts'),
					E = e('./components/src/utilities/mergeStyles.ts'),
					g = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx');
				const C = ({ componentTheme: l }) =>
						(0, R.AH)({
							width: '360px',
							height: '120px',
							overflow: 'hidden',
							fontSize: '14px',
							position: 'fixed',
							zIndex: '9999',
							cursor: 'auto',
							bottom: '50px',
							right: 0,
							background: l.main.background,
							color: l.main.color,
							border: l.main.border,
							borderRight: 0,
							borderTopLeftRadius: '5px',
							borderBottomLeftRadius: '5px',
							boxShadow: l.main.boxShadow,
							transition: 'height ease 0.2s, right ease 0.5s 0.2s',
							'&.ss__branch-override--collapsed': {
								transition: 'height ease 0.5s 0.5s, right ease 0.5s',
								right: '-316px',
								height: '50px',
								cursor: 'pointer',
							},
							'.ss__branch-override__top': {
								padding: '10px',
								background: l.top.background,
								borderBottom: l.top.border,
								'.ss__branch-override__top__logo': { display: 'inline-block', height: '30px', maxHeight: '30px', verticalAlign: 'middle' },
								'.ss__branch-override__top__collapse': { display: 'inline-block', float: 'right', padding: '5px', cursor: 'pointer' },
								'.ss__branch-override__top__button': {
									borderRadius: '5px',
									padding: '6px',
									height: '100%',
									lineHeight: '14px',
									textAlign: 'center',
									cursor: 'pointer',
									fontSize: '10px',
									border: l.top.button.border,
									color: l.top.button.color,
									float: 'right',
									marginRight: '14px',
								},
							},
							'.ss__branch-override__bottom': {
								padding: '10px 15px',
								fontSize: '12px',
								'.ss__branch-override__bottom__left': {
									fontWeight: 'bold',
									fontStyle: l.bottom.branch.style,
									color: l.bottom.branch.color,
									fontSize: '14px',
									lineHeight: '20px',
									display: 'inline-flex',
									alignItems: 'center',
									maxWidth: '180px',
									whiteSpace: 'nowrap',
									overflow: 'hidden',
									textOverflow: 'ellipsis',
									svg: { marginRight: '10px' },
								},
								'.ss__branch-override__bottom__right': {
									float: 'right',
									fontStyle: 'italic',
									color: l.bottom.additional.color,
									fontSize: '12px',
									lineHeight: '20px',
								},
								'.ss__branch-override__bottom__content': { marginTop: '10px' },
							},
						}),
					M = {
						darkTheme: {
							class: 'ss__branch-override--dark',
							main: { border: '0', background: 'rgba(59, 35, 173, 0.9)', color: '#fff', boxShadow: '#4c3ce2 1px 1px 3px 0px' },
							top: {
								background: 'rgba(59, 35, 173, 0.3)',
								border: '1px solid #4c3de1',
								logo: { src: 'https://snapui.searchspring.io/searchspring_light.svg' },
								button: { border: '1px solid #fff', color: '#fff', content: 'STOP PREVIEW' },
								close: { fill: '#fff' },
							},
							bottom: {
								content: 'Preview functionality may differ from production.',
								branch: { color: '#03cee1', style: 'italic' },
								additional: { color: '#03cee1' },
							},
						},
						lightTheme: {
							class: 'ss__branch-override--light',
							main: {
								border: '1px solid #ccc',
								background: 'rgba(255, 255, 255, 0.95)',
								color: '#515151',
								boxShadow: 'rgba(81, 81, 81, 0.5) 1px 1px 3px 0px',
							},
							top: {
								border: '1px solid #ccc',
								logo: { src: 'https://snapui.searchspring.io/searchspring.svg' },
								button: { border: '1px solid #515151', color: '#515151', content: 'STOP PREVIEW' },
								close: { fill: '#515151' },
							},
							bottom: {
								content: 'Preview functionality may differ from production.',
								branch: { color: '#3a23ad', style: 'italic' },
								additional: { color: '#3a23ad' },
							},
						},
						failureTheme: {
							class: 'ss__branch-override--error',
							main: { border: '0', background: 'rgba(130, 6, 6, 0.9)', color: '#fff', boxShadow: 'rgba(130, 6, 6, 0.4) 1px 1px 3px 0px' },
							top: {
								background: 'rgba(130, 6, 6, 0.3)',
								border: '1px solid #760000',
								logo: { src: 'https://snapui.searchspring.io/searchspring_light.svg' },
								button: { border: '1px solid #fff', color: '#fff', content: 'REMOVE' },
								close: { fill: '#fff' },
							},
							bottom: {
								content: 'Incorrect branch name or branch no longer exists.',
								branch: { color: '#be9628', style: 'italic' },
								additional: { color: '#be9628' },
							},
						},
					},
					h = (l) => {
						const i = (0, g.u)(),
							D = { treePath: (0, f.LU)() },
							r = (0, p.v6)('branchOverride', i, D, l),
							{
								branch: a,
								details: _,
								error: I,
								className: u,
								internalClassName: A,
								darkMode: L,
								disableStyles: c,
								onRemoveClick: B,
								treePath: v,
							} = r,
							W = {
								icon: {
									internalClassName: 'ss__branch-override__bottom__left__icon',
									size: '12px',
									...(0, O.s)({ disableStyles: c }),
									theme: r?.theme,
									treePath: v,
								},
							},
							S = typeof L == 'boolean' ? L : window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : !1,
							[N, V] = (0, P.J0)(S ? 'darkTheme' : 'lightTheme'),
							[Y, F] = (0, P.J0)(0);
						I && V('failureTheme');
						const j = (0, E.Z)({ ...r, componentTheme: M[N] }, C);
						return (_ || I) && a
							? (0, s.FD)('div', {
									className: m()('ss__branch-override', M[N].class, { 'ss__branch-override--collapsed': Y }, u, A),
									...j,
									onClick: (K) => {
										K.preventDefault(), K.stopPropagation(), F(0);
									},
									children: [
										(0, s.FD)('div', {
											className: 'ss__branch-override__top',
											children: [
												(0, s.Y)('img', { className: 'ss__branch-override__top__logo', src: M[N].top.logo.src }),
												(0, s.Y)('div', {
													className: 'ss__branch-override__top__collapse',
													onClick: (K) => {
														K.preventDefault(), K.stopPropagation(), F(1);
													},
													children: (0, s.Y)(T.I, { size: '18px', color: M[N].top.close.fill, ...W.icon, icon: 'close-thin' }),
												}),
												(0, s.Y)('div', {
													className: 'ss__branch-override__top__button',
													onClick: (K) => {
														K.preventDefault(), K.stopPropagation(), B && B(K, a);
													},
													children: M[N].top.button.content,
												}),
											],
										}),
										(0, s.FD)('div', {
											className: 'ss__branch-override__bottom',
											children: [
												(0, s.Y)('span', {
													className: 'ss__branch-override__bottom__left',
													children: I
														? (0, s.FD)(s.FK, {
																children: [
																	(0, s.Y)(T.I, { size: '12px', color: M[N].bottom.branch.color, ...W.icon, icon: 'warn' }),
																	(0, s.Y)('span', { children: I.message }),
																],
														  })
														: a,
												}),
												(0, s.Y)('span', { className: 'ss__branch-override__bottom__right', children: I ? a : _?.lastModified }),
												(0, s.Y)('div', { className: 'ss__branch-override__bottom__content', children: I?.description || M[N].bottom.content }),
											],
										}),
									],
							  })
							: (0, s.Y)(x.FK, {});
					};
			},
			'./components/src/components/Organisms/BranchOverride/index.ts'(n, t, e) {
				e.r(t), e.d(t, { BranchOverride: () => s.n });
				var s = e('./components/src/components/Organisms/BranchOverride/BranchOverride.tsx');
			},
			'./components/src/components/Organisms/Facet/index.ts'(n, t, e) {
				e.d(t, { s: () => s.s });
				var s = e('./components/src/components/Organisms/Facet/Facet.tsx');
			},
			'./components/src/components/Organisms/Facets/index.ts'(n, t, e) {
				e.d(t, { J: () => s.J });
				var s = e('./components/src/components/Organisms/Facets/Facets.tsx');
			},
			'./components/src/components/Organisms/FacetsHorizontal/index.ts'(n, t, e) {
				e.d(t, { b: () => s.b });
				var s = e('./components/src/components/Organisms/FacetsHorizontal/FacetsHorizontal.tsx');
			},
			'./components/src/components/Organisms/FilterSummary/index.ts'(n, t, e) {
				e.d(t, { r: () => s.r });
				var s = e('./components/src/components/Organisms/FilterSummary/FilterSummary.tsx');
			},
			'./components/src/components/Organisms/MobileSidebar/index.ts'(n, t, e) {
				e.d(t, { R: () => s.R });
				var s = e('./components/src/components/Organisms/MobileSidebar/MobileSidebar.tsx');
			},
			'./components/src/components/Organisms/NoResults/index.ts'(n, t, e) {
				e.d(t, { a: () => s.a });
				var s = e('./components/src/components/Organisms/NoResults/NoResults.tsx');
			},
			'./components/src/components/Organisms/Results/index.ts'(n, t, e) {
				e.d(t, { n: () => s.n });
				var s = e('./components/src/components/Organisms/Results/Results.tsx');
			},
			'./components/src/components/Organisms/Sidebar/index.ts'(n, t, e) {
				e.d(t, { B: () => s.B });
				var s = e('./components/src/components/Organisms/Sidebar/Sidebar.tsx');
			},
			'./components/src/components/Organisms/TermsList/TermsList.tsx'(n, t, e) {
				e.d(t, { G: () => y });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					x = e('../../node_modules/preact/dist/preact.module.js'),
					R = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					P = e.n(m),
					T = e('./components/src/providers/cache.tsx'),
					O = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					p = e('./components/src/utilities/defined.ts'),
					E = e('./components/src/utilities/mergeProps.ts'),
					g = e('./components/src/utilities/mergeStyles.ts'),
					f = e('./components/src/components/Molecules/Terms/Terms.tsx'),
					C = e('./components/src/hooks/useCleanUpEmptyDivs.tsx');
				const b = ({}) =>
						(0, o.AH)({
							display: 'flex',
							flexDirection: 'row',
							background: '#f8f8f8',
							width: 'auto',
							flexWrap: 'wrap',
							'.ss__terms-list__row': { display: 'flex', flexDirection: 'row', flexBasis: '100%' },
							'.ss__terms-list__row:empty': { display: 'none' },
							'.ss__terms-list__separator': { flexGrow: 1, flexShrink: 1 },
						}),
					y = (0, R.PA)((U) => {
						const M = (0, O.u)(),
							h = {
								layout: [['Suggestions'], ['Trending'], ['History']],
								historyTitle: 'History',
								trendingTitle: 'Trending',
								suggestionTitle: 'Suggestions',
							},
							l = (0, E.v6)('termsList', M, h, U),
							{
								layout: i,
								historyTitle: d,
								trendingTitle: D,
								suggestionTitle: r,
								retainHistory: a,
								retainTrending: _,
								treePath: I,
								disableStyles: u,
								className: A,
								internalClassName: L,
								controller: c,
							} = l,
							B = { terms: { ...(0, p.s)({ disableStyles: u }), theme: l.theme, treePath: I } },
							v = (0, g.Z)(l, b),
							W = c?.store.history || [],
							S = c?.store.terms || [],
							N = c?.store.trending || [],
							V = N?.filter((H) => H.active).pop(),
							Y = W?.filter((H) => H.active).pop(),
							{ loaded: F, results: j, state: K } = c?.store;
						let Z = !1;
						N?.length && ((_ && F) || (!j.length && !K.input)) && (Z = !0);
						let z = !1;
						W?.length && ((a && F) || (!j.length && !K.input)) && (z = !0),
							!c.store.state.input && (Y || V) && (W?.length && (z = !0), N?.length && (Z = !0)),
							(0, C.P)(['.ss__terms-list', '.ss__terms-list__row'], '.ss__terms-list__separator');
						const Q = (H) => {
							if (typeof H != 'string') return (0, s.Y)('div', { className: 'ss__terms-list__row', children: H?.map((q) => Q(q)) });
							if (H == '_') return (0, s.Y)('div', { className: 'ss__terms-list__separator' });
							if (H == 'History' && z)
								return (0, s.Y)(f.i, {
									internalClassName: 'ss__terms-list__terms--history',
									title: d,
									terms: W,
									controller: c,
									name: 'history',
									limit: c.config.settings?.history?.limit,
									...B.terms,
								});
							if (H == 'Trending' && Z)
								return (0, s.Y)(f.i, {
									internalClassName: 'ss__terms-list__terms--trending',
									title: D,
									terms: N,
									controller: c,
									name: 'trending',
									limit: c.config.settings?.trending?.limit,
									...B.terms,
								});
							if (H == 'Suggestions')
								return (0, s.Y)(f.i, {
									internalClassName: 'ss__terms-list__terms--suggestions',
									title: r,
									terms: S,
									controller: c,
									name: 'suggestions',
									...B.terms,
								});
						};
						return i?.length
							? (0, s.Y)(T._, { children: (0, s.Y)('div', { ...v, className: P()('ss__terms-list', A, L), children: i?.map((H) => Q(H)) }) })
							: (0, s.Y)(x.FK, {});
					});
			},
			'./components/src/components/Organisms/TermsList/index.tsx'(n, t, e) {
				e.d(t, { G: () => s.G });
				var s = e('./components/src/components/Organisms/TermsList/TermsList.tsx');
			},
			'./components/src/components/Organisms/Toolbar/index.ts'(n, t, e) {
				e.d(t, { M: () => s.M });
				var s = e('./components/src/components/Organisms/Toolbar/Toolbar.tsx');
			},
			'./components/src/components/Templates/Recommendation/Recommendation.tsx'(n, t, e) {
				e.d(t, { A: () => r });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					x = e('../../node_modules/preact/dist/preact.module.js'),
					R = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					P = e.n(m),
					T = e('../../node_modules/mobx-react-lite/es/index.js'),
					O = e('../../node_modules/deepmerge/dist/cjs.js'),
					p = e.n(O),
					E = e('./components/src/components/Molecules/Carousel/Carousel.tsx'),
					g = e('./components/src/components/Molecules/Result/Result.tsx'),
					f = e('./components/src/utilities/defined.ts'),
					C = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/hooks/useIntersection.tsx'),
					U = e('./components/src/providers/cache.tsx'),
					M = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('./components/src/hooks/useDisplaySettings.tsx'),
					l = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					i = e('./components/src/hooks/useLang.tsx'),
					d = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx');
				const D = ({ vertical: a }) => (0, o.AH)({ height: a ? '100%' : void 0, '.ss__result__image-wrapper': { height: a ? '85%' : void 0 } }),
					r = (0, T.PA)((a) => {
						const _ = (0, M.u)(),
							I = {
								breakpoints: a.vertical ? JSON.parse(JSON.stringify(E.og)) : JSON.parse(JSON.stringify(E.K)),
								pagination: !1,
								loop: !0,
								title: a.controller?.store?.profile?.display?.templateParameters?.title,
								description: a.controller?.store?.profile?.display?.templateParameters?.description,
							},
							u = { name: a.controller?.store?.profile?.tag?.toLowerCase(), ...a };
						let A = (0, C.v6)('recommendation', _, I, u),
							L;
						!(a.theme?.name || _.name) && A.breakpoints && ((L = (0, h.X)(A.breakpoints)), L && Object.keys(L).length && (A = { ...A, ...L }));
						const {
								title: c,
								description: B,
								controller: v,
								children: W,
								loop: S,
								results: N,
								pagination: V,
								nextButton: Y,
								prevButton: F,
								hideButtons: j,
								resultComponent: K,
								disableStyles: Z,
								className: z,
								internalClassName: Q,
								style: H,
								styleScript: q,
								themeStyleScript: G,
								lazyRender: k,
								vertical: oe,
								hideTitle: ee,
								treePath: ne,
								...ce
							} = A,
							se = { enabled: !0, offset: '10%', ...k };
						if (!v || v.type !== 'recommendation')
							throw new Error("<Recommendation> Component requires 'controller' prop with an instance of RecommendationController");
						const J = N || v.store?.results;
						if (Array.isArray(W) && W.length !== J.length)
							return (
								v.log.error(
									"<Recommendation> Component received invalid number of children. Must match length of 'results' prop or 'controller.store.results'"
								),
								(0, s.Y)(x.FK, {})
							);
						const te = {
								carousel: {
									internalClassName: 'ss__recommendation__Carousel',
									...(0, f.s)({ disableStyles: Z, vertical: oe }),
									theme: A?.theme,
									treePath: ne,
								},
								result: { internalClassName: 'ss__recommendation__result', ...(0, f.s)({ disableStyles: Z }), theme: A?.theme, treePath: ne },
							},
							le = (0, b.Z)(A, D),
							[ie, me] = (0, R.J0)(!1),
							re = (0, R.li)(null);
						(!se?.enabled || (0, y.v)(re, `${se.offset} 0px ${se.offset} 0px`, !0)) && me(!0);
						const _e = { titleText: { value: `${c}` } },
							de = p()(_e, A.lang || {}),
							pe = (0, i.u)(de, {});
						return (Array.isArray(W) && W.length) || J?.length
							? (0, s.Y)(U._, {
									children: (0, s.Y)('div', {
										...le,
										className: P()('ss__recommendation', z, Q),
										ref: re,
										children: ie
											? (0, s.FD)(l.l, {
													controller: v,
													children: [
														c && !ee && (0, s.Y)('h3', { className: 'ss__recommendation__title', ...pe.titleText?.all, children: c }),
														B && (0, s.Y)('h4', { className: 'ss__recommendation__description', children: B }),
														(0, s.Y)(E.FN, {
															prevButton: F,
															nextButton: Y,
															hideButtons: j,
															loop: S,
															pagination: V,
															...te.carousel,
															...ce,
															children:
																Array.isArray(W) && W.length
																	? W.map((w, X) => (0, s.Y)(d.o, { controller: v, result: J[X], children: w }))
																	: J.map((w) =>
																			(0, s.Y)(d.o, {
																				controller: v,
																				result: w,
																				children: (() => {
																					if (K && v) {
																						const X = K;
																						return (0, s.Y)(X, { controller: v, result: w, treePath: te.result.treePath });
																					} else return (0, s.Y)(g.Q, { ...te.result, controller: v, result: w }, w.id);
																				})(),
																			})
																	  ),
														}),
													],
											  })
											: (0, s.Y)(l.l, {
													controller: v,
													children:
														Array.isArray(W) && W.length
															? W.map((w, X) => (0, s.Y)(d.o, { controller: v, result: J[X], children: (0, s.Y)(s.FK, {}) }))
															: J.map((w) => (0, s.Y)(d.o, { controller: v, result: w, children: (0, s.Y)(s.FK, {}) })),
											  }),
									}),
							  })
							: (0, s.Y)(s.FK, {});
					});
			},
			'./components/src/components/Templates/Recommendation/index.ts'(n, t, e) {
				e.d(t, { A: () => s.A });
				var s = e('./components/src/components/Templates/Recommendation/Recommendation.tsx');
			},
			'./components/src/components/Templates/RecommendationBundle/index.ts'(n, t, e) {
				e.d(t, { g: () => s.g });
				var s = e('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx');
			},
			'./components/src/components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.tsx'(n, t, e) {
				e.d(t, { F: () => O });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					x = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					R = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('./components/src/utilities/defined.ts'),
					m = e('./components/src/utilities/mergeStyles.ts'),
					P = e('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx');
				const T = () => (0, x.AH)({ '.ss__recommendation-bundle-easy-add__wrapper__cta': { textAlign: 'center' } }),
					O = (0, R.PA)((p) => {
						const E = { name: p.controller?.store?.profile?.tag?.toLowerCase(), ...p },
							{ treePath: g, disableStyles: f, controller: C, style: b, styleScript: y, themeStyleScript: U, ...M } = E,
							h = {
								recommendationBundle: {
									hideCheckboxes: !0,
									seedText: '',
									ctaButtonText: 'Add Both',
									ctaInline: !1,
									hideSeed: !0,
									alias: 'recommendationBundleEasyAdd',
									limit: 1,
									carousel: { enabled: !1 },
									separatorIcon: !1,
									...(0, o.s)({ disableStyles: f }),
									theme: E?.theme,
									treePath: g,
								},
							},
							l = (0, m.Z)(E, T);
						return (0, s.Y)(P.g, { controller: C, ...l, ...h.recommendationBundle, ...M });
					});
			},
			'./components/src/components/Templates/RecommendationBundleEasyAdd/index.ts'(n, t, e) {
				e.d(t, { F: () => s.F });
				var s = e('./components/src/components/Templates/RecommendationBundleEasyAdd/RecommendationBundleEasyAdd.tsx');
			},
			'./components/src/components/Templates/RecommendationBundleList/RecommendationBundleList.tsx'(n, t, e) {
				e.d(t, { X: () => D, a: () => d });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					x = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					R = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('./components/src/utilities/defined.ts'),
					m = e('./components/src/utilities/mergeStyles.ts'),
					P = e('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx'),
					T = e('./components/src/components/Atoms/Price/Price.tsx'),
					O = e('./components/src/components/Atoms/Button/Button.tsx'),
					p = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					E = e('./components/src/components/Atoms/Image/Image.tsx'),
					g = e('./components/src/components/Molecules/Result/Result.tsx'),
					f = e('./components/src/utilities/componentNameToClassName.ts'),
					C = e('../../node_modules/classnames/index.js'),
					b = e.n(C),
					y = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					U = e('../../node_modules/deepmerge/dist/cjs.js'),
					M = e.n(U),
					h = e('./components/src/hooks/useLang.tsx');
				const l = () =>
						(0, x.AH)({
							'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper': {
								display: 'flex',
								'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper__checkbox': { position: 'relative', minWidth: '20px' },
								'.ss__result__details': { textAlign: 'left' },
							},
							'.ss__recommendation-profile-tracker': { display: 'flex', flexDirection: 'column' },
							'.ss__recommendation-bundle-list__wrapper': { order: '3' },
							'.ss__recommendation-bundle-list__wrapper__cta': {
								order: '2',
								'.ss__button': { cursor: 'pointer', border: '1px solid black' },
								'.ss__recommendation-bundle-list__wrapper__cta__inner__images': { display: 'flex', flexDirection: 'row' },
								'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper .ss__icon': {
									top: '50%',
									position: 'absolute',
									right: '-0.5em',
								},
								'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper:last-of-type .ss__icon': { display: 'none' },
								'.ss__recommendation-bundle-list__wrapper__cta__inner__image-wrapper': { padding: '0px 15px', position: 'relative' },
							},
						}),
					i = 'recommendationBundleList',
					d = (0, R.PA)((r) => {
						const a = { name: r.controller?.store?.profile?.tag?.toLowerCase(), ...r },
							{ treePath: _, disableStyles: I, controller: u, style: A, styleScript: L, themeStyleScript: c, ...B } = a,
							v = {
								recommendationBundle: {
									seedText: '',
									ctaInline: !1,
									limit: 5,
									preselectedCount: 2,
									carousel: { enabled: !1, seedInCarousel: !0 },
									ctaSlot: (S) => (0, s.Y)(D, { ...S }),
									resultComponent: (S) => (0, s.Y)(g.Q, { hideImage: !0, hideBadge: !0, ...S }),
									vertical: !0,
									separatorIcon: !1,
									alias: i,
									...(0, o.s)({ disableStyles: I }),
									theme: a?.theme,
									treePath: _,
								},
							},
							W = (0, m.Z)(a, l);
						return (0, s.Y)(P.g, { controller: u, ...W, ...v.recommendationBundle, ...B });
					}),
					D = (0, R.PA)((r) => {
						const a = r.cartStore,
							_ = `ss__${(0, f.b)(i)}`;
						r.onAddToCart = (B) => {
							u(!0), r.onAddToCart(B), setTimeout(() => u(!1), r.ctaButtonSuccessTimeout);
						};
						const [I, u] = (0, y.J0)(!1);
						r.addedToCart = I;
						const A = {
								image: { className: `${_}__wrapper__cta__image`, theme: r?.theme, treePath: r.treePath },
								separatorIcon: {
									name: 'bundle-cart-separator',
									className: `${_}__wrapper__cta__icon--separator`,
									icon: 'plus',
									size: 12,
									theme: r?.theme,
									treePath: r.treePath,
								},
								icon: { name: 'bundle-cart', className: `${_}__wrapper__cta__icon`, size: 50, theme: r?.theme, treePath: r.treePath },
								subtotalStrike: { name: 'bundle-msrp', className: `${_}__wrapper__cta__price--strike`, theme: r?.theme, treePath: r.treePath },
								subtotalPrice: { className: `${_}__wrapper__cta__price`, name: 'bundle-price', theme: r?.theme, treePath: r.treePath },
								button: { className: `${_}__wrapper__cta__button`, theme: r?.theme, treePath: r.treePath },
							},
							L = M()({}, r.lang || {}),
							c = (0, h.u)(L, {});
						return (0, s.FD)('div', {
							className: `${_}__wrapper__cta`,
							children: [
								(0, s.FD)('div', {
									className: `${_}__wrapper__cta__inner`,
									children: [
										(0, s.Y)('div', {
											className: `${_}__wrapper__cta__inner__images`,
											children: a.items.map((B) => {
												const v = B.display.mappings.core;
												return (0, s.FD)('div', {
													className: `${_}__wrapper__cta__inner__image-wrapper`,
													children: [
														(0, s.Y)('a', { href: v.url, children: (0, s.Y)(E._, { src: v.thumbnailImageUrl, alt: v.name, lazy: !1 }) }),
														(0, s.Y)(p.I, { ...A.separatorIcon }),
													],
												});
											}),
										}),
										(0, s.FD)('div', {
											className: `${_}__wrapper__cta__subtotal`,
											'aria-atomic': 'false',
											'aria-live': 'polite',
											children: [
												r.ctaIcon
													? (0, s.Y)('div', {
															className: `${_}__wrapper__cta__subtotal__icon__wrapper`,
															children: (0, s.Y)(p.I, { ...A.icon, ...(typeof r.ctaIcon == 'string' ? { icon: r.ctaIcon } : r.ctaIcon) }),
													  })
													: (0, s.Y)(s.FK, {}),
												(0, s.Y)('span', { className: `${_}__wrapper__cta__subtotal__title`, children: `Subtotal for ${a.count} items` }),
												(0, s.FD)('div', {
													className: `${_}__wrapper__cta__subtotal__prices`,
													children: [
														a.msrp && a.msrp !== a.price
															? (0, s.FD)('label', {
																	className: `${_}__wrapper__cta__subtotal__strike`,
																	children: ['Was ', (0, s.Y)(T.g, { ...A.subtotalStrike, lineThrough: !0, value: a.msrp })],
															  })
															: (0, s.Y)(s.FK, {}),
														(0, s.Y)('label', {
															className: `${_}__wrapper__cta__subtotal__price`,
															children: (0, s.Y)(T.g, { ...A.subtotalPrice, value: a.price }),
														}),
													],
												}),
											],
										}),
									],
								}),
								(0, s.Y)('div', {
									children: (0, s.Y)(O.$, {
										...A.button,
										disabled: a.items.length == 0,
										disableStyles: !0,
										internalClassName: b()(`${_}__wrapper__cta__button`, { [`${_}__wrapper__cta__button--added`]: I }),
										'aria-live': I,
										onClick: (B) => r.onAddToCart(B),
										...(I ? c.ctaButtonSuccessText?.all : c.ctaButtonText?.all),
										children: r.addedToCart ? r.ctaButtonSuccessText : r.ctaButtonText,
									}),
								}),
							],
						});
					});
			},
			'./components/src/components/Templates/RecommendationBundleList/index.ts'(n, t, e) {
				e.d(t, { X: () => s.X, a: () => s.a });
				var s = e('./components/src/components/Templates/RecommendationBundleList/RecommendationBundleList.tsx');
			},
			'./components/src/components/Templates/RecommendationBundleVertical/RecommendationBundleVertical.tsx'(n, t, e) {
				e.d(t, { a: () => O });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					x = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					R = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('./components/src/utilities/defined.ts'),
					m = e('./components/src/utilities/mergeStyles.ts'),
					P = e('./components/src/components/Templates/RecommendationBundle/RecommendationBundle.tsx');
				const T = () =>
						(0, x.AH)({
							'.ss__recommendation-bundle-vertical__wrapper': { flexDirection: 'column' },
							'.ss__recommendation-bundle-vertical__wrapper__cta': { textAlign: 'center' },
						}),
					O = (0, R.PA)((p) => {
						const E = { name: p.controller?.store?.profile?.tag?.toLowerCase(), ...p },
							{ treePath: g, disableStyles: f, controller: C, style: b, styleScript: y, themeStyleScript: U, ...M } = E,
							h = {
								recommendationBundle: {
									ctaInline: !1,
									carousel: { enabled: !1 },
									separatorIcon: !1,
									alias: 'recommendationBundleVertical',
									...(0, o.s)({ disableStyles: f }),
									theme: E?.theme,
									treePath: g,
								},
							},
							l = (0, m.Z)(E, T);
						return (0, s.Y)(P.g, { controller: C, ...l, ...h.recommendationBundle, ...M });
					});
			},
			'./components/src/components/Templates/RecommendationBundleVertical/index.ts'(n, t, e) {
				e.d(t, { a: () => s.a });
				var s = e('./components/src/components/Templates/RecommendationBundleVertical/RecommendationBundleVertical.tsx');
			},
			'./components/src/components/Templates/RecommendationEmail/RecommendationEmail.tsx'(n, t, e) {
				e.d(t, { O: () => g, i: () => C });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					x = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					R = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/classnames/index.js'),
					m = e.n(o),
					P = e('./components/src/components/Molecules/Result/Result.tsx'),
					T = e('./components/src/utilities/defined.ts'),
					O = e('./components/src/utilities/mergeProps.ts'),
					p = e('./components/src/utilities/mergeStyles.ts'),
					E = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js');
				const g = { default: {}, mobile: {}, tablet: {}, desktop: {} },
					f = () => (0, x.AH)({}),
					C = (0, R.PA)((b) => {
						const y = (0, E.u)(),
							U = { resultWidth: '240px', name: b.controller?.store?.profile?.tag?.toLowerCase() },
							M = (0, O.v6)('recommendationEmail', y, U, b),
							{
								controller: h,
								results: l,
								resultComponent: i,
								resultProps: d,
								resultWidth: D,
								treePath: r,
								disableStyles: a,
								internalClassName: _,
								className: I,
							} = M,
							u = {
								result: { internalClassName: 'ss__recommendation-email__result', ...(0, T.s)({ disableStyles: a }), theme: M?.theme, treePath: r },
							},
							A = (0, p.Z)(M, f),
							L = l || h?.store?.results || [];
						return L.length > 0
							? (0, s.Y)('div', {
									className: m()('ss__recommendation-email', I, _),
									...A,
									children: L.map((c, B) =>
										(0, s.Y)(
											'div',
											{
												id: `ss-emailrec${B}`,
												className: m()('ss__recommendation-email__result-wrapper'),
												style: { display: 'block', width: D },
												children: (() => {
													if (i) {
														const v = i;
														return (0, s.Y)(v, { controller: h, result: c, ...d, email: !0, treePath: r });
													} else
														return (0, s.Y)(P.Q, { result: c, hideBadge: !0, theme: { components: { image: { lazy: !1 } } }, ...u.result, ...d });
												})(),
											},
											B
										)
									),
							  })
							: (0, s.Y)(s.FK, {});
					});
			},
			'./components/src/components/Templates/RecommendationEmail/index.ts'(n, t, e) {
				e.d(t, { O: () => s.O, i: () => s.i });
				var s = e('./components/src/components/Templates/RecommendationEmail/RecommendationEmail.tsx');
			},
			'./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx'(n, t, e) {
				e.d(t, { q: () => D });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					x = e('../../node_modules/preact/dist/preact.module.js'),
					R = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					P = e.n(m),
					T = e('../../node_modules/deepmerge/dist/cjs.js'),
					O = e.n(T),
					p = e('./components/src/components/Molecules/Result/Result.tsx'),
					E = e('./components/src/utilities/defined.ts'),
					g = e('./components/src/utilities/mergeProps.ts'),
					f = e('./components/src/utilities/mergeStyles.ts'),
					C = e('./components/src/providers/cache.tsx'),
					b = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/hooks/useDisplaySettings.tsx'),
					U = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx'),
					M = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					h = e('../../node_modules/preact/compat/dist/compat.module.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					i = e('./components/src/hooks/useIntersection.tsx');
				const d = ({ gapSize: r, columns: a }) =>
						(0, o.AH)({
							maxWidth: '100%',
							maxHeight: '100%',
							'.ss__recommendation-grid__results': {
								display: 'flex',
								flexFlow: 'row wrap',
								gap: r,
								gridTemplateRows: 'auto',
								gridTemplateColumns: `repeat(${a}, 1fr)`,
								overflow: 'auto',
								'@supports (display: grid)': { display: 'grid' },
							},
						}),
					D = (0, R.PA)((r) => {
						const a = (0, b.u)(),
							_ = { results: r.controller?.store?.results, gapSize: '20px', title: r.controller?.store?.profile?.display?.templateParameters?.title },
							I = { name: r.controller?.store?.profile?.tag?.toLowerCase(), ...r };
						let u = (0, g.v6)('recommendationGrid', a, _, I);
						if (!r.theme?.name) {
							const G = (0, y.X)(u?.breakpoints || {}),
								k = O()(u?.theme || {}, G?.theme || {}, { arrayMerge: (oe, ee) => ee });
							u = { ...u, ...G, theme: k };
						}
						const {
								disableStyles: A,
								title: L,
								resultComponent: c,
								trim: B,
								lazyRender: v,
								className: W,
								internalClassName: S,
								treePath: N,
								theme: V,
								controller: Y,
							} = u,
							F = { enabled: !0, offset: '10%', ...v },
							j = { result: { internalClassName: 'ss__recommendation-grid__result', ...(0, E.s)({ disableStyles: A }), theme: u?.theme } };
						let K = u.results || Y.store.results;
						if (!u.columns && !u.rows) (u.rows = 1), (u.columns = K.length);
						else if (u.columns && !u.rows) {
							if (((u.rows = Math.floor(K.length / u.columns)), B)) {
								const G = K.length % u.columns;
								K = K.slice(0, K.length - G);
							}
						} else if (u.rows && !u.columns) {
							if (B) {
								const G = K.length % u.rows;
								K = K.slice(0, K.length - G);
							}
							u.columns = Math.ceil(K.length / u.rows);
						} else u?.columns && u?.rows && u.columns > 0 && u.rows > 0 && (K = K?.slice(0, u.columns * u.rows));
						const Z = (0, f.Z)(u, d),
							[z, Q] = (0, h.useState)(!1),
							H = (0, l.li)(null);
						return (
							(!F?.enabled || (0, i.v)(H, `${F.offset} 0px ${F.offset} 0px`, !0)) && Q(!0),
							K?.length
								? (0, s.Y)(C._, {
										children: (0, s.Y)('div', {
											...Z,
											ref: H,
											className: P()('ss__recommendation-grid', W, S),
											children: z
												? (0, s.FD)(U.l, {
														controller: Y,
														children: [
															L && (0, s.Y)('h3', { className: 'ss__recommendation-grid__title', children: L }),
															(0, s.Y)('div', {
																className: 'ss__recommendation-grid__results',
																children: K.map((G) =>
																	(() => {
																		if (c && Y) {
																			const k = c;
																			return (0, s.Y)(k, { controller: Y, result: G, theme: V, treePath: N });
																		} else
																			return (0, s.Y)(M.o, {
																				result: G,
																				controller: Y,
																				children: (0, s.Y)(p.Q, { ...j.result, result: G, controller: Y }, G.id),
																			});
																	})()
																),
															}),
														],
												  })
												: (0, s.Y)(U.l, {
														controller: Y,
														children: K.map((G) => (0, s.Y)(M.o, { controller: Y, result: G, children: (0, s.Y)(s.FK, {}) })),
												  }),
										}),
								  })
								: (0, s.Y)(x.FK, {})
						);
					});
			},
			'./components/src/components/Templates/RecommendationGrid/index.ts'(n, t, e) {
				e.d(t, { q: () => s.q });
				var s = e('./components/src/components/Templates/RecommendationGrid/RecommendationGrid.tsx');
			},
			'./components/src/components/Templates/Search/index.ts'(n, t, e) {
				e.d(t, { v: () => s.v });
				var s = e('./components/src/components/Templates/Search/Search.tsx');
			},
			'./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx'(n, t, e) {
				e.d(t, { j: () => m });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					x = e('../../node_modules/mobx-react-lite/es/index.js'),
					R = e('./components/src/providers/cache.tsx'),
					o = e('./components/src/components/Templates/Search/Search.tsx');
				const m = (0, x.PA)((P) => (0, s.Y)(R._, { children: (0, s.Y)(o.v, { ...P, alias: 'searchHorizontal' }) }));
			},
			'./components/src/components/Templates/SearchHorizontal/index.ts'(n, t, e) {
				e.d(t, { j: () => s.j });
				var s = e('./components/src/components/Templates/SearchHorizontal/SearchHorizontal.tsx');
			},
			'./components/src/components/Trackers/Recommendation/ProfileTracker/index.ts'(n, t, e) {
				e.d(t, { l: () => s.l });
				var s = e('./components/src/components/Trackers/Recommendation/ProfileTracker/RecommendationProfileTracker.tsx');
			},
			'./components/src/components/Trackers/ResultTracker/index.ts'(n, t, e) {
				e.d(t, { o: () => s.o });
				var s = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx');
			},
			'./components/src/hooks/index.ts'(n, t, e) {
				e.d(t, {
					aZ: () => p.aZ,
					DH: () => p.DH,
					JA: () => E.Lang,
					QQ: () => T.Q,
					iy: () => p.iy,
					Ls: () => s.L,
					xZ: () => C.x,
					QH: () => R,
					iG: () => f.i,
					Ij: () => g.I,
					rU: () => g.r,
					Xs: () => T.X,
					dw: () => O.d,
					v1: () => m.v,
					vS: () => P.v,
					uU: () => E.u,
					Ub: () => o.U,
					z1: () => U,
				});
				var s = e('./components/src/hooks/useClickOutside.tsx'),
					x = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const R = (M = () => {}) => {
					const h = (0, x.li)(!1);
					h.current || (M(), (h.current = !0));
				};
				var o = e('./components/src/hooks/useMediaQuery.tsx'),
					m = e('./components/src/hooks/useIntersection.tsx'),
					P = e('./components/src/hooks/useIntersectionAdvanced.tsx'),
					T = e('./components/src/hooks/useDisplaySettings.tsx'),
					O = e('./components/src/hooks/useFuncDebounce.tsx'),
					p = e('./components/src/hooks/useA11y.tsx'),
					E = e('./components/src/hooks/useLang.tsx'),
					g = e('./components/src/hooks/useDeepCompareEffect.tsx'),
					f = e('./components/src/hooks/useCreateController.tsx'),
					C = e('./components/src/hooks/useComponent.tsx'),
					b = e('./components/src/utilities/createImpressionObserver.ts'),
					y = e('./components/src/providers/withTracking.tsx');
				function U({ controller: M, result: h, banner: l, type: i, content: d }) {
					M || console.warn('Warning: No controller provided to useTracking'),
						h || console.warn('Warning: No result provided to useTracking'),
						!h && !l && (!i || !d) && console.warn('Warning: No result or banner provided to withTracking');
					const { ref: D, inViewport: r } = (0, b.Q)();
					return (
						(0, x.vJ)(() => {
							r &&
								(i && d && !h && ['search', 'autocomplete'].includes(M?.type || '')
									? M?.track.banner.impression(d[i][0])
									: h?.bundleSeed || M?.track.product.impression(h || l));
						}, [r]),
						(0, x.vJ)(() => {
							const a = D.current;
							if (a) {
								const _ = (I) => {
									i && d && !h && ['search', 'autocomplete'].includes(M?.type || '')
										? M?.track.banner.click(I, d[i][0])
										: M?.track.product.click(I, h || l);
								};
								return (
									a.setAttribute(y.N, 'true'),
									a.addEventListener('click', _),
									() => {
										a.removeEventListener('click', _);
									}
								);
							}
						}, [M, h, l, i, d]),
						{ trackingRef: D }
					);
				}
			},
			'./components/src/index.ts'(n, t, e) {
				e.r(t),
					e.d(t, {
						A11Y_ATTRIBUTE: () => $.aZ,
						Autocomplete: () => Ee.j,
						BadgeImage: () => s.z,
						BadgePill: () => x.L,
						BadgeRectangle: () => R.Z,
						BadgeText: () => o.p,
						Banner: () => m.l,
						BranchOverride: () => ee.BranchOverride,
						Breadcrumbs: () => P.B,
						Button: () => T.$,
						CTASlot: () => X.X,
						CalloutBadge: () => l.W,
						Carousel: () => i.FN,
						Checkbox: () => d.S,
						Dropdown: () => O.m,
						ErrorHandler: () => D.z,
						FALLBACK_IMAGE_URL: () => g.t,
						FOCUSABLE_ELEMENTS: () => $.DH,
						Facet: () => ne.s,
						FacetDisplay: () => Pe.Q,
						FacetGridOptions: () => r.S,
						FacetHierarchyOptions: () => a.T,
						FacetListOptions: () => _.C,
						FacetPaletteOptions: () => I.P,
						FacetSlider: () => u.l,
						Facets: () => ce.J,
						FacetsHorizontal: () => se.b,
						Filter: () => A.d,
						FilterSummary: () => J.r,
						FormattedNumber: () => p.G,
						Grid: () => v.x,
						Icon: () => E.I,
						Image: () => g._,
						InlineBanner: () => f._,
						Lang: () => $.JA,
						LayoutSelector: () => L.s,
						List: () => c.B,
						LoadMore: () => B.e,
						LoadingBar: () => C.G,
						MobileSidebar: () => te.R,
						NoResults: () => le.a,
						Overlay: () => b.h,
						OverlayBadge: () => W.Q,
						Pagination: () => S.d,
						PaginationInfo: () => y.R,
						PerPage: () => N.F,
						Price: () => U.g,
						Radio: () => V.s,
						RadioList: () => Y.q,
						Rating: () => F.G,
						Recommendation: () => de.A,
						RecommendationBundle: () => pe.g,
						RecommendationBundleEasyAdd: () => w.F,
						RecommendationBundleList: () => X.a,
						RecommendationBundleVertical: () => ge.a,
						RecommendationEmail: () => he.i,
						RecommendationGrid: () => xe.q,
						RecommendationProfileTracker: () => Re.l,
						RecommendationResultTracker: () => Be.o,
						RecommendationResultTrackerProps: () => Me.ResultTrackerProps,
						Result: () => j.Q,
						ResultTracker: () => Me.o,
						Results: () => ie.n,
						ResultsLayout: () => Pe.V,
						Search: () => ve.v,
						SearchHeader: () => M.w,
						SearchHorizontal: () => Te.j,
						SearchInput: () => K.D,
						Select: () => Z.l,
						Sidebar: () => me.B,
						Skeleton: () => h.E,
						Slideout: () => z.S,
						Slideshow: () => G.b,
						SortBy: () => Q.g,
						Swatches: () => q.l,
						TemplatesEditor: () => H.j,
						Terms: () => oe.i,
						TermsList: () => _e.G,
						Toolbar: () => re.M,
						VariantSelection: () => k.m,
						base: () => ae.E3,
						bocachica: () => ae.SE,
						createHoverProps: () => Ce.l,
						defaultCarouselBreakpoints: () => i.K,
						defaultVerticalCarouselBreakpoints: () => i.og,
						getDisplaySettings: () => $.QQ,
						iconPaths: () => E.c,
						recommendationEmailThemeComponentProps: () => he.O,
						snapnco: () => ae.NZ,
						snappy: () => ae.mJ,
						useA11y: () => $.iy,
						useClickOutside: () => $.Ls,
						useComponent: () => $.xZ,
						useConstructor: () => $.QH,
						useCreateController: () => $.iG,
						useDeepCompareEffect: () => $.Ij,
						useDeepCompareMemoize: () => $.rU,
						useDisplaySettings: () => $.Xs,
						useFuncDebounce: () => $.dw,
						useIntersection: () => $.v1,
						useIntersectionAdvanced: () => $.vS,
						useLang: () => $.uU,
						useMediaQuery: () => $.Ub,
						useTracking: () => $.z1,
					});
				var s = e('./components/src/components/Atoms/BadgeImage/index.ts'),
					x = e('./components/src/components/Atoms/BadgePill/index.ts'),
					R = e('./components/src/components/Atoms/BadgeRectangle/index.ts'),
					o = e('./components/src/components/Atoms/BadgeText/index.ts'),
					m = e('./components/src/components/Atoms/Banner/index.ts'),
					P = e('./components/src/components/Atoms/Breadcrumbs/index.ts'),
					T = e('./components/src/components/Atoms/Button/index.ts'),
					O = e('./components/src/components/Atoms/Dropdown/index.ts'),
					p = e('./components/src/components/Atoms/FormattedNumber/index.ts'),
					E = e('./components/src/components/Atoms/Icon/index.ts'),
					g = e('./components/src/components/Atoms/Image/index.ts'),
					f = e('./components/src/components/Atoms/InlineBanner/index.ts'),
					C = e('./components/src/components/Atoms/Loading/index.ts'),
					b = e('./components/src/components/Atoms/Overlay/index.ts'),
					y = e('./components/src/components/Atoms/PaginationInfo/index.ts'),
					U = e('./components/src/components/Atoms/Price/index.ts'),
					M = e('./components/src/components/Atoms/SearchHeader/index.ts'),
					h = e('./components/src/components/Atoms/Skeleton/index.ts'),
					l = e('./components/src/components/Molecules/CalloutBadge/index.ts'),
					i = e('./components/src/components/Molecules/Carousel/index.ts'),
					d = e('./components/src/components/Molecules/Checkbox/index.ts'),
					D = e('./components/src/components/Molecules/ErrorHandler/index.ts'),
					r = e('./components/src/components/Molecules/FacetGridOptions/index.ts'),
					a = e('./components/src/components/Molecules/FacetHierarchyOptions/index.ts'),
					_ = e('./components/src/components/Molecules/FacetListOptions/index.ts'),
					I = e('./components/src/components/Molecules/FacetPaletteOptions/index.ts'),
					u = e('./components/src/components/Molecules/FacetSlider/index.ts'),
					A = e('./components/src/components/Molecules/Filter/index.ts'),
					L = e('./components/src/components/Molecules/LayoutSelector/index.ts'),
					c = e('./components/src/components/Molecules/List/index.ts'),
					B = e('./components/src/components/Molecules/LoadMore/index.ts'),
					v = e('./components/src/components/Molecules/Grid/index.ts'),
					W = e('./components/src/components/Molecules/OverlayBadge/index.ts'),
					S = e('./components/src/components/Molecules/Pagination/index.ts'),
					N = e('./components/src/components/Molecules/PerPage/index.ts'),
					V = e('./components/src/components/Molecules/Radio/index.ts'),
					Y = e('./components/src/components/Molecules/RadioList/index.ts'),
					F = e('./components/src/components/Molecules/Rating/index.ts'),
					j = e('./components/src/components/Molecules/Result/index.ts'),
					K = e('./components/src/components/Molecules/SearchInput/index.ts'),
					Z = e('./components/src/components/Molecules/Select/index.ts'),
					z = e('./components/src/components/Molecules/Slideout/index.ts'),
					Q = e('./components/src/components/Molecules/SortBy/index.ts'),
					H = e('./components/src/components/Molecules/TemplatesEditor/index.ts'),
					q = e('./components/src/components/Molecules/Swatches/index.ts'),
					G = e('./components/src/components/Molecules/Slideshow/index.ts'),
					k = e('./components/src/components/Molecules/VariantSelection/index.ts'),
					oe = e('./components/src/components/Molecules/Terms/index.tsx'),
					ee = e('./components/src/components/Organisms/BranchOverride/index.ts'),
					ne = e('./components/src/components/Organisms/Facet/index.ts'),
					ce = e('./components/src/components/Organisms/Facets/index.ts'),
					se = e('./components/src/components/Organisms/FacetsHorizontal/index.ts'),
					J = e('./components/src/components/Organisms/FilterSummary/index.ts'),
					te = e('./components/src/components/Organisms/MobileSidebar/index.ts'),
					le = e('./components/src/components/Organisms/NoResults/index.ts'),
					ie = e('./components/src/components/Organisms/Results/index.ts'),
					me = e('./components/src/components/Organisms/Sidebar/index.ts'),
					re = e('./components/src/components/Organisms/Toolbar/index.ts'),
					Ee = e('./components/src/components/Organisms/Autocomplete/index.ts'),
					_e = e('./components/src/components/Organisms/TermsList/index.tsx'),
					de = e('./components/src/components/Templates/Recommendation/index.ts'),
					pe = e('./components/src/components/Templates/RecommendationBundle/index.ts'),
					w = e('./components/src/components/Templates/RecommendationBundleEasyAdd/index.ts'),
					X = e('./components/src/components/Templates/RecommendationBundleList/index.ts'),
					ge = e('./components/src/components/Templates/RecommendationBundleVertical/index.ts'),
					xe = e('./components/src/components/Templates/RecommendationGrid/index.ts'),
					he = e('./components/src/components/Templates/RecommendationEmail/index.ts'),
					ve = e('./components/src/components/Templates/Search/index.ts'),
					Te = e('./components/src/components/Templates/SearchHorizontal/index.ts'),
					Pe = e('./components/src/types.ts'),
					Re = e('./components/src/components/Trackers/Recommendation/ProfileTracker/index.ts'),
					Me = e('./components/src/components/Trackers/ResultTracker/index.ts'),
					Be = e('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					$ = e('./components/src/hooks/index.ts'),
					Oe = e('./components/src/providers/index.ts'),
					De = {};
				for (const ue in Oe)
					[
						'default',
						'RecommendationResultTracker',
						'RecommendationResultTrackerProps',
						'BadgeImage',
						'BadgePill',
						'BadgeRectangle',
						'BadgeText',
						'Banner',
						'Breadcrumbs',
						'Button',
						'Dropdown',
						'FormattedNumber',
						'Icon',
						'iconPaths',
						'FALLBACK_IMAGE_URL',
						'Image',
						'InlineBanner',
						'LoadingBar',
						'Overlay',
						'PaginationInfo',
						'Price',
						'SearchHeader',
						'Skeleton',
						'CalloutBadge',
						'Carousel',
						'defaultCarouselBreakpoints',
						'defaultVerticalCarouselBreakpoints',
						'Checkbox',
						'ErrorHandler',
						'FacetGridOptions',
						'FacetHierarchyOptions',
						'FacetListOptions',
						'FacetPaletteOptions',
						'FacetSlider',
						'Filter',
						'LayoutSelector',
						'List',
						'LoadMore',
						'Grid',
						'OverlayBadge',
						'Pagination',
						'PerPage',
						'Radio',
						'RadioList',
						'Rating',
						'Result',
						'SearchInput',
						'Select',
						'Slideout',
						'SortBy',
						'TemplatesEditor',
						'Swatches',
						'Slideshow',
						'VariantSelection',
						'Terms',
						'BranchOverride',
						'Facet',
						'Facets',
						'FacetsHorizontal',
						'FilterSummary',
						'MobileSidebar',
						'NoResults',
						'Results',
						'Sidebar',
						'Toolbar',
						'Autocomplete',
						'TermsList',
						'Recommendation',
						'RecommendationBundle',
						'RecommendationBundleEasyAdd',
						'CTASlot',
						'RecommendationBundleList',
						'RecommendationBundleVertical',
						'RecommendationGrid',
						'RecommendationEmail',
						'recommendationEmailThemeComponentProps',
						'Search',
						'SearchHorizontal',
						'FacetDisplay',
						'ResultsLayout',
						'RecommendationProfileTracker',
						'ResultTracker',
						'A11Y_ATTRIBUTE',
						'FOCUSABLE_ELEMENTS',
						'Lang',
						'getDisplaySettings',
						'useA11y',
						'useClickOutside',
						'useComponent',
						'useConstructor',
						'useCreateController',
						'useDeepCompareEffect',
						'useDeepCompareMemoize',
						'useDisplaySettings',
						'useFuncDebounce',
						'useIntersection',
						'useIntersectionAdvanced',
						'useLang',
						'useMediaQuery',
						'useTracking',
					].indexOf(ue) < 0 && (De[ue] = () => Oe[ue]);
				e.d(t, De);
				var Ce = e('./components/src/toolbox/index.ts'),
					ae = e('./components/src/themes/index.ts');
			},
			'./components/src/providers/index.ts'(n, t, e) {
				e.r(t),
					e.d(t, {
						CacheProvider: () => s._,
						ControllerProvider: () => x.e2,
						SnapProvider: () => g.Mz,
						StoreProvider: () => R.tv,
						TRACKING_ATTRIBUTE: () => m.N,
						ThemeProvider: () => o.NP,
						TreePathProvider: () => f.p3,
						css: () => o.AH,
						defaultTheme: () => o.zQ,
						useController: () => x.as,
						useSnap: () => g.uk,
						useStore: () => R.Pj,
						useTheme: () => o.DP,
						useTreePath: () => f.LU,
						withController: () => x.Bk,
						withSnap: () => g.b$,
						withStore: () => R.aH,
						withTheme: () => o.SL,
						withTracking: () => m.W,
						withTreePath: () => f.QE,
					});
				var s = e('./components/src/providers/cache.tsx'),
					x = e('./components/src/providers/controller.tsx'),
					R = e('./components/src/providers/store.tsx'),
					o = e('./components/src/providers/theme.ts'),
					m = e('./components/src/providers/withTracking.tsx'),
					P = e('./components/src/providers/themeComponents.ts'),
					T = e.n(P),
					E = {};
				for (const C in P)
					[
						'default',
						'CacheProvider',
						'ControllerProvider',
						'useController',
						'withController',
						'StoreProvider',
						'useStore',
						'withStore',
						'ThemeProvider',
						'css',
						'defaultTheme',
						'useTheme',
						'withTheme',
						'TRACKING_ATTRIBUTE',
						'withTracking',
					].indexOf(C) < 0 && (E[C] = () => P[C]);
				e.d(t, E);
				var O = e('./components/src/providers/langComponents.ts'),
					p = e.n(O),
					E = {};
				for (const C in O)
					[
						'default',
						'CacheProvider',
						'ControllerProvider',
						'useController',
						'withController',
						'StoreProvider',
						'useStore',
						'withStore',
						'ThemeProvider',
						'css',
						'defaultTheme',
						'useTheme',
						'withTheme',
						'TRACKING_ATTRIBUTE',
						'withTracking',
					].indexOf(C) < 0 && (E[C] = () => O[C]);
				e.d(t, E);
				var g = e('./components/src/providers/snap.tsx'),
					f = e('./components/src/providers/treePath.tsx');
			},
			'./components/src/providers/langComponents.ts'() {},
			'./components/src/providers/store.tsx'(n, t, e) {
				e.d(t, { Pj: () => P, aH: () => T, tv: () => m });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					x = e('../../node_modules/preact/dist/preact.module.js'),
					R = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const o = (0, x.q6)(null),
					m = ({ children: O, store: p }) => (0, s.Y)(o.Provider, { value: p, children: O }),
					P = () => (0, R.NT)(o);
				function T(O) {
					return (p) => (0, s.Y)(O, { store: P(), ...p });
				}
			},
			'./components/src/providers/theme.ts'(n, t, e) {
				e.d(t, { AH: () => s.AH, DP: () => x.u, NP: () => x.a, SL: () => x.b, zQ: () => R });
				var s = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js');
				const R = {
					variables: {
						breakpoints: { mobile: 540, tablet: 767, desktop: 1200 },
						colors: { text: '#222222', primary: '#3A23AD', secondary: '#4c3ce2', accent: '#00cee1' },
					},
				};
			},
			'./components/src/providers/themeComponents.ts'() {},
			'./components/src/themes/index.ts'(n, t, e) {
				e.d(t, { E3: () => s.E, NZ: () => o.N, SE: () => x.S, mJ: () => R.m });
				var s = e('./components/src/themes/base/base.ts'),
					x = e('./components/src/themes/bocachica/bocachica.ts'),
					R = e('./components/src/themes/snappy/snappy.ts'),
					o = e('./components/src/themes/snapnco/snapnco.ts');
			},
			'./components/src/toolbox/index.ts'(n, t, e) {
				e.d(t, { l: () => s.l });
				var s = e('./components/src/toolbox/createHoverProps/createHoverProps.ts');
			},
			'./components/src/utilities/Colour/Colour.ts'(n, t, e) {
				e.d(t, { V: () => s });
				class s {
					get hex() {
						return this.hexValue ? this.hexValue : this.value;
					}
					get rgb() {
						return this.rgbValue ? this.rgbValue : this.value;
					}
					get contrast() {
						if (this.hexValue) {
							const o = parseInt(this.hexValue.slice(1, 3), 16),
								m = parseInt(this.hexValue.slice(3, 5), 16),
								P = parseInt(this.hexValue.slice(5, 7), 16),
								O = [o / 255, m / 255, P / 255].map((E) => (E <= 0.03928 ? E / 12.92 : Math.pow((E + 0.055) / 1.055, 2.4)));
							return 0.2126 * O[0] + 0.7152 * O[1] + 0.0722 * O[2] <= 0.179 ? '#ffffff' : '#000000';
						}
						return this.value;
					}
					constructor(o) {
						(this.value = o),
							o &&
								(o.match(/^#[a,b,c,d,e,f,0-9]{3}$/i) && (o = `#${o[1].repeat(2)}${o[2].repeat(2)}${o[3].repeat(2)}`),
								s.isHex(o)
									? ((this.hexValue = o), (this.rgbValue = s.hexToRgb(o)))
									: s.isRgb(o) && ((this.rgbValue = o), (this.hexValue = s.rgbToHex(o))));
					}
					shift(o) {
						return new s(s.brightness(this.hex, o));
					}
					lighten(o) {
						return o < 0 ? this : new s(s.brightness(this.hex, o));
					}
					darken(o) {
						return o < 0 ? this : new s(s.brightness(this.hex, -o));
					}
					opacity(o) {
						return new s(s.opacity(this.hex, o));
					}
					transparency(o) {
						return o < 0 ? this : new s(s.opacity(this.hex, o));
					}
					opaque(o) {
						return o < 0 ? this : new s(s.opacity(this.hex, -o));
					}
					static isRgb(o) {
						return !!(
							o.match(/^rgba?\([0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]*\)$/i) ||
							o.match(/^rgba?\([0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]+0?\.?[0-9]+%?[\s,\,]*\)$/i)
						);
					}
					static isHex(o) {
						return !!(o.match(/^#[a,b,c,d,e,f,0-9]{6}$/i) || o.match(/^#[a,b,c,d,e,f,0-9]{8}$/i));
					}
					static hexToRgb(o) {
						if (!s.isHex(o)) throw 'invalid hex supplied';
						const m = parseInt(o.slice(1, 3), 16),
							P = parseInt(o.slice(3, 5), 16),
							T = parseInt(o.slice(5, 7), 16),
							O = parseInt(o.slice(7, 9), 16);
						return Number.isInteger(O) ? `rgba(${m}, ${P}, ${T}, ${x(O / 255)})` : `rgb(${m}, ${P}, ${T})`;
					}
					static rgbToHex(o) {
						if (!s.isRgb(o)) throw 'invalid rgb supplied';
						const [m, P, T, O] = (o.match(/[0-9]?\.?[0-9]+%?/g) || []).map((p, E) => {
							if (E == 3) {
								p.match(/%/) && (p = (Number(p.replace('%', '').trim()) / 100).toString());
								let g = Number(p);
								(Number.isNaN(g) || g > 1) && (g = 1), g < 0 && (g = 0), (p = Math.floor(g * 255).toString());
							}
							return Number(p).toString(16).padStart(2, '0');
						});
						return `#${m}${P}${T}${O || ''}`;
					}
					static opacity(o, m) {
						let P = !1;
						if ((o && s.isRgb(o) && ((P = !0), (o = s.rgbToHex(o))), !o || !s.isHex(o) || !Number.isInteger(m))) return o;
						m > 255 && (m = 255), m < -255 && (m = -255);
						const T = o.slice(7, 9) || 'ff';
						let p = parseInt(T, 16) - m;
						p > 255 ? (p = 255) : p < 0 && (p = 0);
						const E = p.toString(16).padStart(2, '0'),
							g = `${o.slice(0, 7)}${E}`;
						return P ? s.hexToRgb(g) : g;
					}
					static brightness(o, m) {
						let P = !1;
						if ((o && s.isRgb(o) && ((P = !0), (o = s.rgbToHex(o))), !o || !s.isHex(o) || !Number.isInteger(m))) return o;
						m > 255 && (m = 255), m < -255 && (m = -255);
						const T = o.slice(1, 7),
							O = parseInt(T, 16);
						let p = (O & 255) + m;
						p > 255 ? (p = 255) : p < 0 && (p = 0);
						let E = ((O >> 8) & 255) + m;
						E > 255 ? (E = 255) : E < 0 && (E = 0);
						let g = (O >> 16) + m;
						g > 255 ? (g = 255) : g < 0 && (g = 0);
						const f = `#${(p | (E << 8) | (g << 16)).toString(16).padStart(6, '0')}${o.slice(7, 9)}`;
						return P ? s.hexToRgb(f) : f;
					}
				}
				function x(R) {
					const o = Math.floor(R),
						m = R - o;
					if (!m) return R;
					const P = Math.floor(m * 10) * 10,
						T = Math.round(R * 100 - P);
					return o + (P + T) / 100;
				}
			},
		},
	]);
})();
