(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[9983],
		{
			'./components/src/components/Molecules/LoadMore/LoadMore.stories.tsx'(y, l, e) {
				'use strict';
				e.r(l), e.d(l, { Default: () => s, __namedExportsOrder: () => M, default: () => h });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					n = e('./components/src/components/Molecules/LoadMore/LoadMore.tsx'),
					d = e('./components/src/utilities/storybook.tsx'),
					a = e('./components/src/utilities/componentArgs.ts'),
					t = e('./components/src/components/Atoms/Icon/paths.tsx'),
					i = e('./components/src/utilities/snapify.ts');
				const E =
						"# LoadMore\n\nRenders a \"Load More\" button that displays the next page of results. Recommended to be used with SearchController's `infinite` config\n\n## Sub-components\n- Button\n\n## Usage\n\n### pagination / controller\nThe required `pagination` (or `controller`) prop specifies a reference to the pagination store object.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} />\n```\n\n```jsx\n<LoadMore controller={controller} />\n```\n\n### autoFetch\nThe `autoFetch` prop will not render a \"Show More\" button and instead fetch the next page of results when the component appears in the viewport. Recommended to place underneath Results to allow for infinite scrolling. \n\n```jsx\n<LoadMore pagination={controller.store.pagination} autoFetch={true} />\n```\n\nCan be used in combination with `hideProgressIndicator` and `hideProgressText` to not display anything and have infinite scrolling still function:\n\n```jsx\n<LoadMore pagination={controller.store.pagination} autoFetch={true} hideProgressIndicator={true} hideProgressText={true} />\n```\n\n### intersectionOffset + autoFetch\nRequires `autoFetch` prop to be `true`. The `intersectionOffset` prop defines the IntersectionObserver's `rootMargin` value. This is an offset added to each side of the component's bounding box to create the final root bounds. These bounds then determine when the component is in the viewport and the next results are fetched. Default: `0px`\n\n```jsx\n<LoadMore pagination={controller.store.pagination} autoFetch={true} intersectionOffset={'40px'} />\n```\n\n### loading\nThe `loading` prop is not required if the `controller` prop is provided.\n\nIf the `pagination` prop is used, the `loading` prop should contain a value from `controller.store.loading` to allow for the \"Load More\" button to be disabled and the spinner icon visible while fetching results.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} loading={controller.store.loading} />\n```\n\n### loadMoreText\nThe `loadMoreText` prop sets the button text. Default value: \"Load More\"\n\n```jsx\n<LoadMore pagination={controller.store.pagination} loadMoreText={'Load More'} />\n```\n\n### color\nThe `color` prop specifies the color of the indicator active state.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} color={'#ffff00'} />\n```\n\n### backgroundColor\nThe `backgroundColor` prop specifies the background color of the indicator.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} backgroundColor={'#eeeeee'} />\n```\n\n### progressIndicatorWidth\nThe `progressIndicatorWidth` prop sets the progress indicator width. Recommended units: `px`, `rem`, `em`, `vw`.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} progressIndicatorWidth={'300px'} />\n```\n\n### progressIndicatorSize\nThe `progressIndicatorSize` prop sets the progress indicator size. Recommended units: `px`, `rem`, `em`, `vw`. Unsupported unit: `%` not recommended. \n\n```jsx\n<LoadMore pagination={controller.store.pagination} progressIndicatorSize={'5px'} />\n```\n\n### hideProgressIndicator\nThe `hideProgressIndicator` prop hides the progress indicator.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} hideProgressIndicator={true} />\n```\n\n### hideProgressText\nThe `hideProgressText` prop hides the progress text.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} hideProgressText={true} />\n```\n\n### hideProgressIndicator + hideProgressText\nWhen both `hideProgressIndicator` and `hideProgressText` props are `true` only the button will be displayed.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} hideProgressIndicator={true} hideProgressText={true} />\n```\n\n### loadingIcon\nThe `loadingIcon` prop defines the icon used when loading. Default: `spinner`\n\n```jsx\n<LoadMore pagination={controller.store.pagination} loadingIcon={'spinner'} />\n```\n\n### loadingLocation\nThe `loadingLocation` prop defines the location of the loading icon. Default: `button` will be displayed within the \"Load More\" button. Alternative value of `outside` will display the loading icon in place of the button.\n\n### onClick\nThe `onClick` prop allows for a custom callback function for when the button is clicked.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} onClick={(e)=>{console.log(e)}} />\n```\n",
					h = {
						title: 'Molecules/LoadMore',
						component: n.e,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(r.oz, { options: { overrides: { code: d.Z } }, children: E }), (0, o.Y)(r.uY, { story: r.h1 })],
									}),
							},
						},
						argTypes: {
							controller: {
								description: 'Search Controller reference',
								table: { type: { summary: 'Search controller object' } },
								control: { type: 'none' },
							},
							pagination: {
								description: 'Pagination store reference',
								table: { type: { summary: 'pagination store object' } },
								control: { type: 'none' },
							},
							autoFetch: {
								description: 'Automatically load more results when component comes into viewport',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							intersectionOffset: {
								defaultValue: '0px',
								description: 'Defines the IntersectionObserver rootMargin',
								table: { type: { summary: 'string' }, defaultValue: { summary: '0px' } },
								control: { type: 'text' },
							},
							loading: {
								description: 'Loading state',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							loadMoreText: {
								defaultValue: 'Load More',
								description: 'Load more button text',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'Load More' } },
								control: { type: 'text' },
							},
							color: {
								description: 'Color of the indicator active state',
								table: { type: { summary: 'string' }, defaultValue: { summary: '#cccccc' } },
								control: { type: 'color' },
							},
							backgroundColor: {
								description: 'Background color of the indicator',
								table: { type: { summary: 'string' }, defaultValue: { summary: '#f8f8f8' } },
								control: { type: 'color' },
							},
							progressIndicatorWidth: {
								description: 'Progress indicator width in pixels',
								table: { type: { summary: 'string' }, defaultValue: { summary: '300px' } },
								control: { type: 'text' },
							},
							progressIndicatorSize: {
								description: 'Progress indicator size in pixels',
								table: { type: { summary: 'string' }, defaultValue: { summary: '5px' } },
								control: { type: 'text' },
							},
							hideProgressIndicator: {
								description: 'Hide progress indicator',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideProgressText: {
								description: 'Hide progress text',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							loadingIcon: {
								description: 'Loading icon',
								defaultValue: 'spinner',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'spinner' } },
								options: [...Object.keys(t.c)],
								control: { type: 'select' },
							},
							loadingLocation: {
								description: 'Location of loading indicator',
								defaultValue: 'button',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'button' } },
								options: ['button', 'outside'],
								control: { type: 'select' },
							},
							onClick: {
								description: 'Button click event handler',
								table: { type: { summary: 'function(e: Event)' } },
								control: { type: 'none' },
								action: 'onClick',
							},
							...a.F,
						},
					},
					b = i.p.search({
						id: 'LoadMore',
						globals: { siteId: 'atkzs2', filters: [{ type: 'value', field: 'color_family', value: 'Beige', background: !0 }] },
					}),
					s = (v, { loaded: { controller: x } }) => (0, o.Y)(n.e, { ...v, controller: x });
				(s.loaders = [async () => (await b.search(), { controller: b })]),
					(s.parameters = {
						...s.parameters,
						docs: {
							...s.parameters?.docs,
							source: {
								originalSource: `(args: LoadMoreProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <LoadMore {...args} controller={controller} />;
}`,
								...s.parameters?.docs?.source,
							},
						},
					});
				const M = ['Default'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(y, l, e) {
				'use strict';
				e.d(l, { $: () => m });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/dist/preact.module.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/classnames/index.js'),
					a = e.n(d),
					t = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('./components/src/providers/cache.tsx'),
					E = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('./components/src/providers/treePath.tsx'),
					b = e('./components/src/hooks/useA11y.tsx'),
					s = e('./components/src/utilities/cloneWithProps.tsx'),
					M = e('./components/src/utilities/defined.ts'),
					v = e('./components/src/utilities/mergeProps.ts'),
					x = e('./components/src/utilities/mergeStyles.ts'),
					T = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					P = e('./components/src/hooks/useLang.tsx'),
					A = e('../../node_modules/deepmerge/dist/cjs.js'),
					F = e.n(A),
					U = e('../../node_modules/color/index.js'),
					Y = e.n(U);
				const N = ({ native: c, color: u, backgroundColor: g, borderColor: p, theme: _ }) => {
						const O = new (Y())(g || u || _?.variables?.colors?.primary).lightness(95);
						return c
							? (0, n.AH)({})
							: (0, n.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: u || _?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: g || '#fff',
									border: `1px solid ${p || u || _?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer', backgroundColor: O.hex() || '#f8f8f8' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  });
					},
					m = (0, t.PA)((c) => {
						const u = (0, E.u)(),
							p = { disableA11y: !1, treePath: (0, h.LU)() },
							_ = (0, v.v6)('button', u, p, c),
							{
								content: O,
								children: j,
								disabled: R,
								native: K,
								onClick: w,
								disableA11y: k,
								disableStyles: V,
								className: J,
								internalClassName: $,
								icon: f,
								lang: L,
								treePath: C,
								style: Q,
								styleScript: q,
								themeStyleScript: Z,
								...D
							} = _,
							I = { icon: { internalClassName: 'ss__button__icon', ...(0, M.s)({ disableStyles: V }), theme: _?.theme, treePath: C } },
							W = {
								...(0, x.Z)(_, N),
								className: a()('ss__button', { 'ss__button--native': K, 'ss__button--disabled': R }, J, $),
								disabled: R,
								onClick: (B) => !R && w && w(B),
								...D,
							},
							X = { ref: (B) => (0, b.iy)(B) },
							z = {},
							G = F()(z, L || {}),
							S = (0, P.u)(G, {});
						return O || j || f || L?.button?.value
							? (0, o.Y)(i._, {
									children: K
										? (0, o.FD)('button', {
												...W,
												children: [
													(0, o.FD)('span', {
														className: 'ss__button__content',
														...S.button?.all,
														children: [(0, s.Y)(O, { treePath: C }), (0, s.Y)(j, { treePath: C })],
													}),
													f && (0, o.Y)(T.I, { ...I.icon, ...(typeof f == 'string' ? { icon: f } : f) }),
												],
										  })
										: (0, o.FD)('div', {
												...(k ? {} : X),
												role: 'button',
												'aria-disabled': R,
												...W,
												...S.button?.attributes,
												children: [
													O || j || S.button?.value
														? (0, o.FD)('span', {
																className: 'ss__button__content',
																...S.button?.value,
																children: [(0, s.Y)(O, { treePath: C }), (0, s.Y)(j, { treePath: C })],
														  })
														: void 0,
													f && (0, o.Y)(T.I, { ...I.icon, ...(typeof f == 'string' ? { icon: f } : f) }),
												],
										  }),
							  })
							: (0, o.Y)(r.FK, {});
					});
			},
			'./components/src/components/Molecules/LoadMore/LoadMore.tsx'(y, l, e) {
				'use strict';
				e.d(l, { e: () => m });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/dist/preact.module.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/classnames/index.js'),
					t = e.n(a),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					E = e('../../node_modules/deepmerge/dist/cjs.js'),
					h = e.n(E),
					b = e('./components/src/providers/cache.tsx'),
					s = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					M = e('./components/src/providers/treePath.tsx'),
					v = e('./components/src/utilities/defined.ts'),
					x = e('./components/src/utilities/mergeProps.ts'),
					T = e('./components/src/utilities/mergeStyles.ts'),
					P = e('./components/src/hooks/useIntersection.tsx'),
					A = e('./components/src/hooks/useLang.tsx'),
					F = e('./components/src/components/Atoms/Button/Button.tsx'),
					U = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					Y = e('./components/src/hooks/useFuncDebounce.tsx');
				const N = ({ pagination: c, progressIndicatorWidth: u, progressIndicatorSize: g, color: p, backgroundColor: _, theme: O }) =>
						(0, d.AH)({
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							gap: '20px',
							'& .ss__load-more__button--disabled': {
								opacity: 0.7,
								borderColor: 'rgba(51,51,51,0.7)',
								backgroundColor: 'initial',
								pointerEvents: 'none',
								'&:hover': { cursor: 'default' },
							},
							'& .ss__load-more__button--hidden': { display: 'none' },
							'& .ss__button': { alignItems: 'center' },
							'& .ss__load-more__icon': {
								marginLeft: '5px',
								animation: `${(0, d.i7)({ '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } })} linear 1s infinite`,
							},
							'&.ss__load-more': {
								'& .ss__load-more__progress': {
									display: 'flex',
									flexDirection: 'column',
									gap: '5px',
									'& .ss__load-more__progress__indicator': {
										width: u,
										background: _ || O?.variables?.colors?.secondary || '#f8f8f8',
										borderRadius: g,
										'& .ss__load-more__progress__indicator__bar': {
											width: c ? `${(c.end / c.totalResults) * 100}%` : '',
											background: p || O?.variables?.colors?.primary || '#ccc',
											borderRadius: g,
											height: g,
										},
									},
									'& .ss__load-more__progress__text': { textAlign: 'center' },
								},
							},
						}),
					m = (0, i.PA)((c) => {
						const u = (0, s.u)(),
							p = {
								loadMoreText: 'Load More',
								loadingLocation: 'button',
								loadingIcon: 'spinner',
								progressIndicatorWidth: '300px',
								progressIndicatorSize: '5px',
								treePath: (0, M.LU)(),
							},
							_ = (0, x.v6)('loadMore', u, p, c),
							{
								pagination: O,
								controller: j,
								onClick: R,
								autoFetch: K,
								intersectionOffset: w,
								loading: k,
								loadMoreText: V,
								hideProgressIndicator: J,
								hideProgressText: $,
								loadingLocation: f,
								loadingIcon: L,
								disableStyles: C,
								className: Q,
								internalClassName: q,
								treePath: Z,
							} = _,
							D = O || j?.store?.pagination,
							I = typeof k == 'boolean' ? k : j?.store?.loading,
							ee = (I && f === 'button') || !D?.next,
							W = {
								button: {
									internalClassName: t()(
										'ss__load-more__button',
										{ 'ss__load-more__button--hidden': I && f === 'outside' },
										{ 'ss__load-more__button--disabled': ee }
									),
									...(0, v.s)({ disableStyles: C }),
									theme: _?.theme,
									treePath: Z,
								},
								icon: { internalClassName: 'ss__load-more__icon', ...(0, v.s)({ disableStyles: C }), theme: _?.theme, treePath: Z },
							};
						if (!D) return (0, o.Y)(r.FK, {});
						const X = (0, T.Z)({ ..._, pagination: D }, N),
							z = {};
						if (K) {
							const H = (0, n.li)(null);
							z.ref = H;
							const oe = (0, P.v)(H, w || '0px'),
								[ne, te] = (0, n.J0)(!0);
							I
								? te(!0)
								: (0, Y.d)(() => {
										te(!1);
								  }, 500),
								oe && D.next && !ne && D.next.url.go({ history: 'replace' });
						}
						const G = {
								loadMoreButton: { value: V, attributes: { 'aria-label': V } },
								progressText: { value: `You've viewed ${D?.end} of ${D?.totalResults} products` },
							},
							S = h()(G, _.lang || {}),
							B = (0, A.u)(S, { pagination: D });
						return D.totalResults
							? (0, o.Y)(b._, {
									children: (0, o.FD)('div', {
										...X,
										...z,
										className: t()('ss__load-more', { 'ss__load-more--loading': I }, { 'ss__load-more--autoFetch': K }, Q, q),
										children: [
											!K &&
												(0, o.FD)(r.FK, {
													children: [
														(0, o.FD)(F.$, {
															onClick: (H) => {
																D.next?.url.go({ history: 'replace' }), R && R(H);
															},
															...W.button,
															...B.loadMoreButton.attributes,
															children: [
																(0, o.Y)('span', { ...B.loadMoreButton.value, children: V }),
																L && I && f === 'button'
																	? (0, o.Y)(U.I, { ...W.icon, ...(typeof L == 'string' ? { icon: L } : L) })
																	: (0, o.Y)(r.FK, {}),
															],
														}),
														L && I && f === 'outside' && (0, o.Y)(U.I, { ...W.icon, ...(typeof L == 'string' ? { icon: L } : L) }),
													],
												}),
											(!J || !$) &&
												(0, o.Y)('div', {
													className: 'ss__load-more__progress',
													children: (0, o.FD)(r.FK, {
														children: [
															!J &&
																(0, o.Y)('div', {
																	className: 'ss__load-more__progress__indicator',
																	children: (0, o.Y)('div', { className: 'ss__load-more__progress__indicator__bar' }),
																}),
															!$ &&
																(0, o.Y)('div', {
																	'aria-atomic': 'true',
																	'aria-live': 'polite',
																	className: 'ss__load-more__progress__text',
																	...B.progressText?.all,
																}),
														],
													}),
												}),
										],
									}),
							  })
							: (0, o.Y)(r.FK, {});
					});
			},
			'./components/src/hooks/useA11y.tsx'(y, l, e) {
				'use strict';
				e.d(l, { DH: () => d, aZ: () => n, iy: () => a });
				const o = 9,
					r = 27,
					n = 'ss-a11y',
					d =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function a(t, i, E, h) {
					const b = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${b}`)) {
						const s = document.createElement('style');
						(s.type = 'text/css'),
							(s.id = b),
							(s.innerHTML = `[${n}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(s);
					}
					t &&
						!t.attributes?.[n] &&
						(t.setAttribute(n, !0),
						t.setAttribute('tabIndex', `${i || 0}`),
						t.addEventListener('keydown', (s) => {
							(s.code === 'Space' || s.code === 'Enter') && t.click();
						}),
						E &&
							t.addEventListener('keydown', function (s) {
								const M = t.querySelectorAll(d),
									v = M[0],
									x = M[M.length - 1];
								if (s.keyCode == r) {
									t.focus(), h && h(s), s.preventDefault(), s.stopPropagation();
									return;
								}
								(s.key === 'Tab' || s.keyCode === o) &&
									(s.shiftKey
										? document.activeElement === v && (x.focus(), s.preventDefault())
										: document.activeElement === x && (v.focus(), s.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useFuncDebounce.tsx'(y, l, e) {
				'use strict';
				e.d(l, { d: () => r });
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = (n, d) => {
					const a = (0, o.li)(n);
					(a.current = n),
						(0, o.vJ)(() => {
							const t = setTimeout(() => {
								a.current();
							}, d);
							return () => {
								clearTimeout(t);
							};
						}, [n, d]);
				};
			},
			'./components/src/hooks/useIntersection.tsx'(y, l, e) {
				'use strict';
				e.d(l, { v: () => r });
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = (n, d = '0px', a = !1) => {
					const [t, i] = (0, o.J0)(!1);
					return (
						(0, o.vJ)(() => {
							const E = new IntersectionObserver(
								([h]) => {
									i(h.isIntersecting), a && h.isIntersecting && E.unobserve(n.current);
								},
								{ rootMargin: d }
							);
							return (
								n.current && E.observe(n.current),
								() => {
									E.unobserve(n.current);
								}
							);
						}, []),
						t
					);
				};
			},
			'./components/src/hooks/useLang.tsx'(y, l, e) {
				'use strict';
				e.d(l, { u: () => o });
				const o = (r, n) => {
					const d = {};
					return (
						Object.keys(r).forEach((a) => {
							const t = r && r[a],
								i = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (i.value = { 'ss-lang': a, dangerouslySetInnerHTML: { __html: t.value(n) } })
										: (i.value = { 'ss-lang': a, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((i.attributes = { 'ss-lang': a }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (i.attributes['aria-label'] = t.attributes['aria-label'](n))
											: (i.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (i.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](n))
											: (i.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (i.attributes.title = t.attributes.title(n))
											: (i.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (i.attributes.alt = t.attributes.alt(n)) : (i.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (i.attributes.placeholder = t.attributes.placeholder(n))
											: (i.attributes.placeholder = t.attributes.placeholder))),
								(i.all = { ...i.value, ...i.attributes, 'ss-lang': a })),
								(d[a] = i);
						}),
						d
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(y, l, e) {
				'use strict';
				e.d(l, { F: () => o });
				const o = {
					className: {
						description: 'Class name appended to root element of component',
						table: { type: { summary: 'string' }, defaultValue: { summary: 'ss__${component-name}' } },
						control: { type: 'text' },
					},
					disableStyles: {
						defaultValue: !1,
						description: 'Disable all default styling',
						table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
						control: { type: 'boolean' },
					},
					style: { description: 'Inline style', table: { type: { summary: 'string, object' } }, control: { type: 'text' } },
					theme: { description: 'Specify specific sub component props', table: { type: { summary: 'object' } }, control: { type: 'none' } },
				};
			},
			'./components/src/utilities/defined.ts'(y, l, e) {
				'use strict';
				e.d(l, { s: () => o });
				function o(r) {
					const n = {};
					return (
						Object.keys(r).map((d) => {
							r[d] !== void 0 && (n[d] = r[d]);
						}),
						n
					);
				}
			},
			'./components/src/utilities/snapify.ts'(y, l, e) {
				'use strict';
				e.d(l, { p: () => F });
				var o = e('../../node_modules/mobx/dist/mobx.esm.js'),
					r = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					n = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					d = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					a = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					i = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					E = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					h = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					b = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					s = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					M = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					v = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					x = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					T = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const P = {},
					A = { globals: { siteId: '8uyt2m' } };
				class F {
					static recommendation(c) {
						const u = c.id;
						if (P[u]) return P[u];
						const g = (P[u] = Y({ client: A, controller: c }));
						return (
							g.on('afterStore', async ({ controller: p }, _) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await _();
							}),
							g.init(),
							g
						);
					}
					static autocomplete(c) {
						const u = c.id;
						if (P[u]) return P[u];
						const g = (P[u] = N({ client: A, controller: c }));
						return (
							g.on('afterStore', async ({ controller: p }, _) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await _();
							}),
							g.init(),
							g
						);
					}
					static search(c) {
						const u = c.id;
						if (P[u]) return P[u];
						const g = (P[u] = U({ client: A, controller: c }));
						return (
							g.on('afterStore', async ({ controller: p }, _) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await _();
							}),
							g.init(),
							g
						);
					}
				}
				function U(m) {
					const c = new h.V(new s.E({ settings: { coreType: 'query', corePrefix: m.controller.id } }), b.X);
					return new r.Tp(m.controller, {
						client: new a.K(m.client.globals, m.client.config),
						store: new i.U(m.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new M.E(),
						profiler: new v.U(),
						logger: new x.V(),
						tracker: new T.J(m.client.globals),
					});
				}
				function Y(m) {
					const c = new h.V(new s.E(), b.X).detach(!0);
					return new d.c(m.controller, {
						client: new a.K(m.client.globals, m.client.config),
						store: new E.t(m.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new M.E(),
						profiler: new v.U(),
						logger: new x.V(),
						tracker: new T.J(m.client.globals),
					});
				}
				function N(m) {
					const c = new h.V(new s.E(), b.X).detach();
					return new n.Z(m.controller, {
						client: new a.K(m.client.globals, m.client.config),
						store: new t.Y(m.controller, { urlManager: c }),
						urlManager: c,
						eventManager: new M.E(),
						profiler: new v.U(),
						logger: new x.V(),
						tracker: new T.J(m.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(y, l, e) {
				'use strict';
				e.d(l, { Z: () => d });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					d = (a) => {
						const t = (0, r.li)(null);
						return (
							(0, r.vJ)(() => {
								t.current && a.className?.includes('lang-') && !a.className?.includes(n) && window?.Prism?.highlightElement(t.current);
							}, [a.className, a.children, t]),
							(0, o.Y)('code', { ...a, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(y) {
				function l(e) {
					var o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (y.exports = l);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-LoadMore-LoadMore-stories.b097e82d.iframe.bundle.js.map
