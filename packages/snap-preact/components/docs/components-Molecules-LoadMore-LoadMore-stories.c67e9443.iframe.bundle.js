(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9983],
		{
			'./components/src/components/Molecules/LoadMore/LoadMore.stories.tsx'(v, c, e) {
				'use strict';
				e.r(c), e.d(c, { Default: () => s, __namedExportsOrder: () => b, default: () => f });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					n = e('./components/src/components/Molecules/LoadMore/LoadMore.tsx'),
					m = e('./components/src/utilities/storybook.tsx'),
					r = e('./components/src/utilities/componentArgs.ts'),
					t = e('./components/src/components/Atoms/Icon/paths.tsx'),
					l = e('./components/src/utilities/snapify.ts');
				const y =
						"# LoadMore\n\nRenders a \"Load More\" button that displays the next page of results. Recommended to be used with SearchController's `infinite` config\n\n## Sub-components\n- Button\n\n## Usage\n\n### pagination / controller\nThe required `pagination` (or `controller`) prop specifies a reference to the pagination store object.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} />\n```\n\n```jsx\n<LoadMore controller={controller} />\n```\n\n### autoFetch\nThe `autoFetch` prop will not render a \"Show More\" button and instead fetch the next page of results when the component appears in the viewport. Recommended to place underneath Results to allow for infinite scrolling. \n\n```jsx\n<LoadMore pagination={controller.store.pagination} autoFetch={true} />\n```\n\nCan be used in combination with `hideProgressIndicator` and `hideProgressText` to not display anything and have infinite scrolling still function:\n\n```jsx\n<LoadMore pagination={controller.store.pagination} autoFetch={true} hideProgressIndicator={true} hideProgressText={true} />\n```\n\n### intersectionOffset + autoFetch\nRequires `autoFetch` prop to be `true`. The `intersectionOffset` prop defines the IntersectionObserver's `rootMargin` value. This is an offset added to each side of the component's bounding box to create the final root bounds. These bounds then determine when the component is in the viewport and the next results are fetched. Default: `0px`\n\n```jsx\n<LoadMore pagination={controller.store.pagination} autoFetch={true} intersectionOffset={'40px'} />\n```\n\n### loading\nThe `loading` prop is not required if the `controller` prop is provided.\n\nIf the `pagination` prop is used, the `loading` prop should contain a value from `controller.store.loading` to allow for the \"Load More\" button to be disabled and the spinner icon visible while fetching results.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} loading={controller.store.loading} />\n```\n\n### loadMoreText\nThe `loadMoreText` prop sets the button text. Default value: \"Load More\"\n\n```jsx\n<LoadMore pagination={controller.store.pagination} loadMoreText={'Load More'} />\n```\n\n### color\nThe `color` prop specifies the color of the indicator active state.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} color={'#ffff00'} />\n```\n\n### backgroundColor\nThe `backgroundColor` prop specifies the background color of the indicator.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} backgroundColor={'#eeeeee'} />\n```\n\n### progressIndicatorWidth\nThe `progressIndicatorWidth` prop sets the progress indicator width. Recommended units: `px`, `rem`, `em`, `vw`.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} progressIndicatorWidth={'300px'} />\n```\n\n### progressIndicatorSize\nThe `progressIndicatorSize` prop sets the progress indicator size. Recommended units: `px`, `rem`, `em`, `vw`. Unsupported unit: `%` not recommended. \n\n```jsx\n<LoadMore pagination={controller.store.pagination} progressIndicatorSize={'5px'} />\n```\n\n### hideProgressIndicator\nThe `hideProgressIndicator` prop hides the progress indicator.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} hideProgressIndicator={true} />\n```\n\n### hideProgressText\nThe `hideProgressText` prop hides the progress text.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} hideProgressText={true} />\n```\n\n### hideProgressIndicator + hideProgressText\nWhen both `hideProgressIndicator` and `hideProgressText` props are `true` only the button will be displayed.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} hideProgressIndicator={true} hideProgressText={true} />\n```\n\n### loadingIcon\nThe `loadingIcon` prop defines the icon used when loading. Default: `spinner`\n\n```jsx\n<LoadMore pagination={controller.store.pagination} loadingIcon={'spinner'} />\n```\n\n### loadingLocation\nThe `loadingLocation` prop defines the location of the loading icon. Default: `button` will be displayed within the \"Load More\" button. Alternative value of `outside` will display the loading icon in place of the button.\n\n### onClick\nThe `onClick` prop allows for a custom callback function for when the button is clicked.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} onClick={(e)=>{console.log(e)}} />\n```\n",
					f = {
						title: 'Molecules/LoadMore',
						component: n.e,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(d.oz, { options: { overrides: { code: m.Z } }, children: y }), (0, o.Y)(d.uY, { story: d.h1 })],
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
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							intersectionOffset: {
								defaultValue: '0px',
								description: 'Defines the IntersectionObserver rootMargin',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '0px' } },
								control: { type: 'text' },
							},
							loading: {
								description: 'Loading state',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							loadMoreText: {
								defaultValue: 'Load More',
								description: 'Load more button text',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Load More' } },
								control: { type: 'text' },
							},
							color: {
								description: 'Color of the indicator active state',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '#cccccc' } },
								control: { type: 'color' },
							},
							backgroundColor: {
								description: 'Background color of the indicator',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '#f8f8f8' } },
								control: { type: 'color' },
							},
							progressIndicatorWidth: {
								description: 'Progress indicator width in pixels',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '300px' } },
								control: { type: 'text' },
							},
							progressIndicatorSize: {
								description: 'Progress indicator size in pixels',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '5px' } },
								control: { type: 'text' },
							},
							hideProgressIndicator: {
								description: 'Hide progress indicator',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideProgressText: {
								description: 'Hide progress text',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							loadingIcon: {
								description: 'Loading icon',
								defaultValue: 'spinner',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'spinner' } },
								options: [...Object.keys(t.c)],
								control: { type: 'select' },
							},
							loadingLocation: {
								description: 'Location of loading indicator',
								defaultValue: 'button',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'button' } },
								options: ['button', 'outside'],
								control: { type: 'select' },
							},
							onClick: {
								description: 'Button click event handler',
								table: { category: 'Templates Legal', type: { summary: 'function(e: Event)' } },
								control: { type: 'none' },
								action: 'onClick',
							},
							...r.F,
						},
					},
					h = l.p.search({
						id: 'LoadMore',
						globals: { siteId: 'atkzs2', filters: [{ type: 'value', field: 'color_family', value: 'Beige', background: !0 }] },
					}),
					s = (x, { loaded: { controller: M } }) => (0, o.Y)(n.e, { ...x, controller: M });
				(s.loaders = [async () => (await h.search(), { controller: h })]),
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
				const b = ['Default'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(v, c, e) {
				'use strict';
				e.d(c, { $: () => w });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/classnames/index.js'),
					m = e.n(n),
					r = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('./components/src/providers/cache.tsx'),
					l = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/treePath.tsx'),
					f = e('./components/src/hooks/useA11y.tsx'),
					h = e('./components/src/utilities/cloneWithProps.tsx'),
					s = e('./components/src/utilities/defined.ts'),
					b = e('./components/src/utilities/mergeProps.ts'),
					x = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					I = e('./components/src/hooks/useLang.tsx'),
					P = e('../../node_modules/deepmerge/dist/cjs.js'),
					C = e.n(P),
					B = e('../../node_modules/color/index.js'),
					S = e.n(B);
				const F = ({ native: i, color: u, backgroundColor: _, borderColor: p, theme: a }) => {
						const g = new (S())(_ || u || a?.variables?.colors?.primary || void 0).lightness(95);
						return i
							? (0, d.AH)({})
							: (0, d.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: u || a?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: _ || '#fff',
									border: `1px solid ${p || u || a?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer', backgroundColor: g.hex() || '#f8f8f8' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  });
					},
					w = (0, r.PA)((i) => {
						const u = (0, l.u)(),
							p = { disableA11y: !1, treePath: (0, y.LU)() },
							a = (0, b.v6)('button', u, p, i),
							{
								content: g,
								children: A,
								disabled: j,
								native: U,
								onClick: V,
								disableA11y: Y,
								disableStyles: N,
								className: k,
								internalClassName: J,
								icon: E,
								lang: L,
								treePath: T,
								style: G,
								styleScript: Q,
								themeStyleScript: H,
								...D
							} = a,
							O = { icon: { internalClassName: 'ss__button__icon', ...(0, s.s)({ disableStyles: N }), theme: a?.theme, treePath: T } },
							K = {
								...(0, x.Z)(a, F),
								className: m()('ss__button', { 'ss__button--native': U, 'ss__button--disabled': j }, k, J),
								disabled: j,
								onClick: (R) => !j && V && V(R),
								...D,
							},
							Z = { ref: (R) => (0, f.iy)(R) },
							$ = {},
							X = C()($, L || {}),
							W = (0, I.u)(X, {});
						return g || A || E || L?.button?.value
							? (0, o.Y)(t._, {
									children: U
										? (0, o.FD)('button', {
												...K,
												children: [
													(0, o.FD)('span', {
														className: 'ss__button__content',
														...W.button?.all,
														children: [(0, h.Y)(g, { treePath: T }), (0, h.Y)(A, { treePath: T })],
													}),
													E && (0, o.Y)(M.I, { ...O.icon, ...(typeof E == 'string' ? { icon: E } : E) }),
												],
										  })
										: (0, o.FD)('div', {
												...(Y ? {} : Z),
												role: 'button',
												'aria-disabled': j,
												...K,
												...W.button?.attributes,
												children: [
													g || A || W.button?.value
														? (0, o.FD)('span', {
																className: 'ss__button__content',
																...W.button?.value,
																children: [(0, h.Y)(g, { treePath: T }), (0, h.Y)(A, { treePath: T })],
														  })
														: void 0,
													E && (0, o.Y)(M.I, { ...O.icon, ...(typeof E == 'string' ? { icon: E } : E) }),
												],
										  }),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/LoadMore/LoadMore.tsx'(v, c, e) {
				'use strict';
				e.d(c, { e: () => w });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					r = e.n(m),
					t = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('../../node_modules/deepmerge/dist/cjs.js'),
					y = e.n(l),
					f = e('./components/src/providers/cache.tsx'),
					h = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					s = e('./components/src/providers/treePath.tsx'),
					b = e('./components/src/utilities/defined.ts'),
					x = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					I = e('./components/src/hooks/useIntersection.tsx'),
					P = e('./components/src/hooks/useLang.tsx'),
					C = e('./components/src/components/Atoms/Button/Button.tsx'),
					B = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					S = e('./components/src/hooks/useFuncDebounce.tsx');
				const F = ({ pagination: i, progressIndicatorWidth: u, progressIndicatorSize: _, color: p, backgroundColor: a, theme: g }) =>
						(0, n.AH)({
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							gap: '20px',
							'& .ss__load-more__button--disabled': { opacity: 0.7, pointerEvents: 'none', '&:hover': { cursor: 'default' } },
							'& .ss__load-more__button--hidden': { display: 'none' },
							'& .ss__button': { alignItems: 'center' },
							'& .ss__load-more__icon': {
								marginLeft: '5px',
								animation: `${(0, n.i7)({ '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } })} linear 1s infinite`,
							},
							'&.ss__load-more': {
								'& .ss__load-more__progress': {
									display: 'flex',
									flexDirection: 'column',
									gap: '5px',
									'& .ss__load-more__progress__indicator': {
										width: u,
										background: a || g?.variables?.colors?.secondary || '#f8f8f8',
										borderRadius: _,
										'& .ss__load-more__progress__indicator__bar': {
											width: i ? `${(i.end / i.totalResults) * 100}%` : '',
											background: p || g?.variables?.colors?.primary || '#ccc',
											borderRadius: _,
											height: _,
										},
									},
									'& .ss__load-more__progress__text': { textAlign: 'center' },
								},
							},
						}),
					w = (0, t.PA)((i) => {
						const u = (0, h.u)(),
							p = {
								loadMoreText: 'Load More',
								loadingLocation: 'button',
								loadingIcon: 'spinner',
								progressIndicatorWidth: '300px',
								progressIndicatorSize: '5px',
								treePath: (0, s.LU)(),
							},
							a = (0, x.v6)('loadMore', u, p, i),
							{
								pagination: g,
								controller: A,
								onClick: j,
								autoFetch: U,
								intersectionOffset: V,
								loading: Y,
								loadMoreText: N,
								hideProgressIndicator: k,
								hideProgressText: J,
								loadingLocation: E,
								loadingIcon: L,
								disableStyles: T,
								className: G,
								internalClassName: Q,
								treePath: H,
							} = a,
							D = g || A?.store?.pagination,
							O = typeof Y == 'boolean' ? Y : A?.store?.loading,
							q = (O && E === 'button') || !D?.next,
							K = {
								button: {
									internalClassName: r()(
										'ss__load-more__button',
										{ 'ss__load-more__button--hidden': O && E === 'outside' },
										{ 'ss__load-more__button--disabled': q }
									),
									...(0, b.s)({ disableStyles: T }),
									theme: a?.theme,
									treePath: H,
								},
								icon: { internalClassName: 'ss__load-more__icon', ...(0, b.s)({ disableStyles: T }), theme: a?.theme, treePath: H },
							};
						if (!D) return null;
						const Z = (0, M.Z)({ ...a, pagination: D }, F),
							$ = {};
						if (U) {
							const z = (0, d.li)(null);
							$.ref = z;
							const te = (0, I.v)(z, V || '0px'),
								[oe, ee] = (0, d.J0)(!0);
							O
								? ee(!0)
								: (0, S.d)(() => {
										ee(!1);
								  }, 500),
								te && D.next && !oe && D.next.url.go({ history: 'replace' });
						}
						const X = {
								loadMoreButton: { value: N, attributes: { 'aria-label': N } },
								progressText: { value: `You've viewed ${D?.end} of ${D?.totalResults} products` },
							},
							W = y()(X, a.lang || {}),
							R = (0, P.u)(W, { pagination: D });
						return D.totalResults
							? (0, o.Y)(f._, {
									children: (0, o.FD)('div', {
										...Z,
										...$,
										className: r()('ss__load-more', { 'ss__load-more--loading': O }, { 'ss__load-more--autoFetch': U }, G, Q),
										children: [
											!U &&
												(0, o.FD)(o.FK, {
													children: [
														(0, o.FD)(C.$, {
															onClick: (z) => {
																D.next?.url.go({ history: 'replace' }), j && j(z);
															},
															...K.button,
															...R.loadMoreButton.attributes,
															children: [
																(0, o.Y)('span', { ...R.loadMoreButton.value, children: N }),
																L && O && E === 'button' ? (0, o.Y)(B.I, { ...K.icon, ...(typeof L == 'string' ? { icon: L } : L) }) : null,
															],
														}),
														L && O && E === 'outside' && (0, o.Y)(B.I, { ...K.icon, ...(typeof L == 'string' ? { icon: L } : L) }),
													],
												}),
											(!k || !J) &&
												(0, o.Y)('div', {
													className: 'ss__load-more__progress',
													children: (0, o.FD)(o.FK, {
														children: [
															!k &&
																(0, o.Y)('div', {
																	className: 'ss__load-more__progress__indicator',
																	children: (0, o.Y)('div', { className: 'ss__load-more__progress__indicator__bar' }),
																}),
															!J &&
																(0, o.Y)('div', {
																	'aria-atomic': 'true',
																	'aria-live': 'polite',
																	className: 'ss__load-more__progress__text',
																	...R.progressText?.all,
																}),
														],
													}),
												}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/hooks/useA11y.tsx'(v, c, e) {
				'use strict';
				e.d(c, { DH: () => m, aZ: () => n, iy: () => r });
				const o = 9,
					d = 27,
					n = 'ss-a11y',
					m =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function r(t, l, y, f) {
					const h = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${h}`)) {
						const s = document.createElement('style');
						(s.type = 'text/css'),
							(s.id = h),
							(s.innerHTML = `[${n}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(s);
					}
					t &&
						!t.attributes?.[n] &&
						(t.setAttribute(n, !0),
						t.setAttribute('tabIndex', `${l || 0}`),
						t.addEventListener('keydown', (s) => {
							(s.code === 'Space' || s.code === 'Enter') && t.click();
						}),
						y &&
							t.addEventListener('keydown', function (s) {
								const b = t.querySelectorAll(m),
									x = b[0],
									M = b[b.length - 1];
								if (s.keyCode == d) {
									t.focus(), f && f(s), s.preventDefault(), s.stopPropagation();
									return;
								}
								(s.key === 'Tab' || s.keyCode === o) &&
									(s.shiftKey
										? document.activeElement === x && (M.focus(), s.preventDefault())
										: document.activeElement === M && (x.focus(), s.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useFuncDebounce.tsx'(v, c, e) {
				'use strict';
				e.d(c, { d: () => d });
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const d = (n, m) => {
					const r = (0, o.li)(n);
					(r.current = n),
						(0, o.vJ)(() => {
							const t = setTimeout(() => {
								r.current();
							}, m);
							return () => {
								clearTimeout(t);
							};
						}, [n, m]);
				};
			},
			'./components/src/hooks/useIntersection.tsx'(v, c, e) {
				'use strict';
				e.d(c, { v: () => d });
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const d = (n, m = '0px', r = !1) => {
					const [t, l] = (0, o.J0)(!1);
					return (
						(0, o.vJ)(() => {
							const y = new IntersectionObserver(
								([f]) => {
									l(f.isIntersecting), r && f.isIntersecting && y.unobserve(n.current);
								},
								{ rootMargin: m }
							);
							return (
								n.current && y.observe(n.current),
								() => {
									y.unobserve(n.current);
								}
							);
						}, []),
						t
					);
				};
			},
			'./components/src/hooks/useLang.tsx'(v, c, e) {
				'use strict';
				e.d(c, { u: () => o });
				const o = (d, n) => {
					const m = {};
					return (
						Object.keys(d).forEach((r) => {
							const t = d && d[r],
								l = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (l.value = { 'ss-lang': r, dangerouslySetInnerHTML: { __html: t.value(n) } })
										: (l.value = { 'ss-lang': r, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((l.attributes = { 'ss-lang': r }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (l.attributes['aria-label'] = t.attributes['aria-label'](n))
											: (l.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (l.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](n))
											: (l.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (l.attributes.title = t.attributes.title(n))
											: (l.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (l.attributes.alt = t.attributes.alt(n)) : (l.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (l.attributes.placeholder = t.attributes.placeholder(n))
											: (l.attributes.placeholder = t.attributes.placeholder))),
								(l.all = { ...l.value, ...l.attributes, 'ss-lang': r })),
								(m[r] = l);
						}),
						m
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(v, c, e) {
				'use strict';
				e.d(c, { F: () => o });
				const o = {
					className: {
						description: 'Class name appended to root element of component',
						table: { type: { summary: 'string' }, category: 'default Props', defaultValue: { summary: 'ss__${component-name}' } },
						control: { type: 'text' },
					},
					disableStyles: {
						defaultValue: !1,
						description: 'Disable all default styling',
						table: { type: { summary: 'boolean' }, category: 'default Props', defaultValue: { summary: !1 } },
						control: { type: 'boolean' },
					},
					style: {
						description: 'Inline style',
						table: { type: { summary: 'string, object' }, category: 'default Props' },
						control: { type: 'text' },
					},
					theme: {
						description: 'Specify specific sub component props',
						table: { type: { summary: 'object' }, category: 'default Props' },
						control: { type: 'none' },
					},
				};
			},
			'./components/src/utilities/defined.ts'(v, c, e) {
				'use strict';
				e.d(c, { s: () => o });
				function o(d) {
					const n = {};
					return (
						Object.keys(d).map((m) => {
							d[m] !== void 0 && (n[m] = d[m]);
						}),
						n
					);
				}
			},
			'./components/src/utilities/snapify.ts'(v, c, e) {
				'use strict';
				e.d(c, { p: () => B });
				var o = e('../../node_modules/mobx/dist/mobx.esm.js'),
					d = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					n = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					m = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					r = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					l = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					y = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					f = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					h = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					s = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					b = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					x = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					M = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					I = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const P = {},
					C = { globals: { siteId: 'atkzs2' } };
				class B {
					static recommendation(u) {
						const _ = u.id;
						if (P[_]) return P[_];
						const p = (P[_] = F({ client: C, controller: u }));
						return (
							p.on('afterStore', async ({ controller: a }, g) => {
								a.log.debug('controller', a), a.log.debug('store', a.store.toJSON()), await g();
							}),
							p.init(),
							p
						);
					}
					static autocomplete(u) {
						const _ = u.id;
						if (P[_]) return P[_];
						const p = (P[_] = w({ client: C, controller: u }));
						return (
							p.on('afterStore', async ({ controller: a }, g) => {
								a.log.debug('controller', a), a.log.debug('store', a.store.toJSON()), await g();
							}),
							p.init(),
							p
						);
					}
					static search(u) {
						const _ = u.id;
						if (P[_]) return P[_];
						const p = (P[_] = S({ client: C, controller: u }));
						return (
							p.on('afterStore', async ({ controller: a }, g) => {
								a.log.debug('controller', a), a.log.debug('store', a.store.toJSON()), await g();
							}),
							p.init(),
							p
						);
					}
				}
				function S(i) {
					const u = new f.V(new s.E({ settings: { coreType: 'query', corePrefix: i.controller.id } }), h.X);
					return new d.Tp(i.controller, {
						client: new r.K(i.client.globals, i.client.config),
						store: new l.U(i.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new b.E(),
						profiler: new x.U(),
						logger: new M.V(),
						tracker: new I.J(i.client.globals),
					});
				}
				function F(i) {
					const u = new f.V(new s.E(), h.X).detach(!0);
					return new m.c(i.controller, {
						client: new r.K(i.client.globals, i.client.config),
						store: new y.t(i.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new b.E(),
						profiler: new x.U(),
						logger: new M.V(),
						tracker: new I.J(i.client.globals),
					});
				}
				function w(i) {
					const u = new f.V(new s.E(), h.X).detach();
					return new n.Z(i.controller, {
						client: new r.K(i.client.globals, i.client.config),
						store: new t.Y(i.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new b.E(),
						profiler: new x.U(),
						logger: new M.V(),
						tracker: new I.J(i.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(v, c, e) {
				'use strict';
				e.d(c, { Z: () => m });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					m = (r) => {
						const t = (0, d.li)(null);
						return (
							(0, d.vJ)(() => {
								t.current && r.className?.includes('lang-') && !r.className?.includes(n) && window?.Prism?.highlightElement(t.current);
							}, [r.className, r.children, t]),
							(0, o.Y)('code', { ...r, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(v) {
				function c(e) {
					var o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(c.keys = () => []), (c.resolve = c), (c.id = '../../node_modules/memoizerific sync recursive'), (v.exports = c);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-LoadMore-LoadMore-stories.c67e9443.iframe.bundle.js.map
