(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9769],
		{
			'./components/src/components/Templates/AutocompleteModal/AutocompleteModal.stories.tsx'(I, l, e) {
				'use strict';
				e.r(l), e.d(l, { Default: () => d, __namedExportsOrder: () => O, default: () => b });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					E = e('./components/src/components/Templates/AutocompleteModal/AutocompleteModal.tsx'),
					T = e('./components/src/utilities/storybook.tsx'),
					c = e('./components/src/utilities/componentArgs.ts'),
					f = e('./components/src/utilities/snapify.ts');
				const S =
					"# AutocompleteModal\n\nRenders an autocomplete modal that binds to an `<input>` element.\n\nThe AutocompleteModal component is very similar to the Autocomplete component in functionality, however the main difference is that the AutocompleteModal components layout is determined by the layout prop, which specifies what child components render and where.\n\n## Components Used\n- autocompleteLayout\n- SearchInput\n- Modal\n\n## Usage\n\n### input\nThe required `input` prop expects either:\n\n- a string CSS selector that targets `<input>` element(s) to bind to\n\n- an `<input>` element to bind to\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} />\n```\n\n### controller\nThe required `controller` prop specifies a reference to the autocomplete controller.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} />\n```\n\n### layout\nThe `layout` prop is used to specify which child components render and where. The prop takes an array of specific module names, the order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display.\n\nThere are also a few special module names - `c1`, `c2`, `c3`, `c4`, & `_` \n\nAll of the `cx` modules represent Columns which also have their own layout array by default, and can be overwrote via their own layout props. IE - `c1` module can be overwrote via the `column1` prop. \n\nThe `_` module is used a seperator module to center|left|right justify the other elements in the layout.\n\navailable modules to use in the layout are \n\n`c1`, `c2`, `c3`, `c4`,`TermsList`, `Terms.history`, `Terms.trending`, `Terms.suggestions`, `Facets`, `FacetsHorizontal`, `Button.see-more`, `Content`, `_`, `Banner.left`, `Banner.banner`, `Banner.footer`, `Banner.header`.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} layout={[['c1','c2','c3']]}/>\n```\n\n### column1\nThe `column1` prop specifies the layout to render in the `c1` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['TermsList']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} column1={{\n    width: '150px',\n    layout: ['Terms.history', 'Terms.trending']\n}}/>\n```\n\n### column2\nThe `column2` prop specifies a layout array to render in the `c2` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['Facets']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} column2={{\n    width: '150px',\n    layout: ['Facets']\n}}/>\n```\n\n### column3\nThe `column3` prop specifies a layout array to render in the `c3` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `[['Content'], ['_', 'Button.see-more']]`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} column3={{\n    width: '150px',\n    layout: [['Content', ['_', 'Button.see-more', '_']]]\n}}/>\n```\n\n### column4\nThe `column4` prop specifies a layout array to render in the `c4` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `[['Content'], ['_', 'Button.see-more']]`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} column4={{\nwidth: '150px',\nlayout: ['Facets']\n}}/>\n```\n\n### buttonSelector\nThe `buttonSelector` prop defines a CSS selector for the element that triggers the Modal to open. By default, it uses the selector provided in the `input` prop.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} buttonSelector={\".openSearchButton\"} />\n```\n\n### renderInput\nThe `renderInput` prop specifies whether the Search Input should be rendered. \n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} renderInput={false} />\n```\n\n### width\nThe `width` prop specifies a width for the overall component. The default value is '100%'.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} width=\"800px\" />\n```\n\n### excludeBanners\nThe `excludeBanners` prop specifies if the Autocomplete should automatically include banners. \n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} excludeBanners={true} />\n```\n\n### facetsTitle\nThe `facetsTitle` prop will display the given text above the facets area.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} facetsTitle={'Facets'} />\n```\n\n### contentTitle\nThe `contentTitle` prop will display the given text above the content area.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} contentTitle={'Search Results'} />\n```\n\n### overlayColor \nThe `overlayColor` prop specifies the color of the overlay.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} overlayColor={'rgba(0,0,0,0.8)'} />\n```\n";
				var x = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const b = {
						title: 'Templates/AutocompleteModal',
						component: E.c,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(m.oz, { options: { overrides: { code: T.Z } }, children: S }), (0, t.Y)(m.uY, { story: m.h1 })],
									}),
							},
						},
						decorators: [
							(_) =>
								(0, t.FD)('div', {
									style: { maxWidth: '1200px', position: 'relative' },
									children: [
										(0, t.Y)('input', {
											type: 'text',
											id: 'searchInput',
											placeholder: 'try me!',
											autoComplete: 'off',
											style: { width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ebebeb' },
										}),
										(0, t.FD)('span', {
											style: { margin: '15px', textAlign: 'center', display: 'block' },
											children: ['Storybook bug: if no autocomplete renders. please refresh the page.', ' '],
										}),
										(0, t.Y)(_, {}),
									],
								}),
						],
						argTypes: {
							buttonSelector: {
								description: 'Modal button selector. (defaults to input)',
								table: { category: 'Templates Legal', type: { summary: 'string, jsx' } },
								control: { type: 'text' },
							},
							renderInput: {
								defaultValue: !0,
								description: 'render a second input inside autocomplete window that gets auto focused on open.',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							controller: {
								description: 'Autocomplete controller reference',
								type: { required: !0 },
								table: { type: { summary: 'Autocomplete controller object' } },
								control: { type: 'none' },
							},
							input: {
								description: 'input element reference',
								type: { required: !0 },
								table: { type: { summary: 'Element or String as CSS Selector' } },
								control: { type: 'none' },
							},
							layout: {
								description: 'array of modules to render in specified layout',
								table: {
									category: 'Templates Legal',
									type: {
										summary:
											"['c1' | 'c2' | 'c3' | 'c4' | 'Terms' | 'HistoryTerms' | 'TrendingTerms'| 'SuggestedTerms'| 'Facets' | 'FacetsHorizontal' | 'SeeMore' | 'Content' | '_' | 'Banner.left' | 'Banner.banner' | 'Banner.footer' | 'Banner.header']",
									},
									defaultValue: { summary: "[['button.see-more'],['termsList'], ['content']]" },
								},
								control: 'none',
							},
							column1: {
								description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c1" layout',
								table: {
									category: 'Templates Legal',
									type: {
										summary:
											"{width: '150px', layout: ['Terms' | 'HistoryTerms' | 'TrendingTerms'| 'SuggestedTerms'| 'Facets' | 'FacetsHorizontal' | 'SeeMore' | 'Content' | '_' | 'Banner.left' | 'Banner.banner' | 'Banner.footer' | 'Banner.header']}",
									},
									defaultValue: {
										summary: `{
                    layout: ['Terms'],
                    width: '150px'
                }`,
									},
								},
								control: 'none',
							},
							column2: {
								description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c2" layout',
								table: {
									category: 'Templates Legal',
									type: {
										summary:
											"{width: '150px', layout: ['Terms' | 'HistoryTerms' | 'TrendingTerms'| 'SuggestedTerms'| 'Facets' | 'FacetsHorizontal' | 'SeeMore' | 'Content' | '_' | 'Banner.left' | 'Banner.banner' | 'Banner.footer' | 'Banner.header']}",
									},
									defaultValue: {
										summary: `{
                    layout: ['Facets'],
                    width: '150px'
                }`,
									},
								},
								control: 'none',
							},
							column3: {
								description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c3" layout',
								table: {
									category: 'Templates Legal',
									type: {
										summary:
											"{width: '150px', layout: ['Terms' | 'HistoryTerms' | 'TrendingTerms'| 'SuggestedTerms'| 'Facets' | 'FacetsHorizontal' | 'SeeMore' | 'Content' | '_' | 'Banner.left' | 'Banner.banner' | 'Banner.footer' | 'Banner.header']}",
									},
									defaultValue: {
										summary: `{
                    layout: [['Content'], ['_', 'SeeMore']],
                    width: 'auto'
                }`,
									},
								},
								control: 'none',
							},
							column4: {
								description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c4" layout',
								table: {
									category: 'Templates Legal',
									type: {
										summary:
											"{width: '150px', layout: ['Terms' | 'HistoryTerms' | 'TrendingTerms'| 'SuggestedTerms'| 'Facets' | 'FacetsHorizontal' | 'SeeMore' | 'Content' | '_' | 'Banner.left' | 'Banner.banner' | 'Banner.footer' | 'Banner.header']}",
									},
								},
								control: 'none',
							},
							width: {
								defaultValue: '500px',
								description: 'Change width of the component',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '500px' } },
								control: { type: 'text' },
							},
							height: {
								description: 'set the height of the component',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								control: { type: 'text' },
							},
							excludeBanners: {
								defaultValue: !1,
								description: 'automatically add merchandising banners',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							facetsTitle: {
								defaultValue: '',
								description: 'Change facets header title',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							contentTitle: {
								defaultValue: '',
								description: 'Change content header title',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							overlayColor: {
								description: 'specifies the color of the overlay',
								defaultValue: 'rgba(0, 0, 0, 0.8)',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'rgba(0, 0, 0, 0.8)' } },
								control: { type: 'color' },
							},
							resultComponent: {
								description: 'Custom result component for the autocomplete',
								table: { category: 'Templates Legal', type: { summary: 'JSX.Element' } },
								control: { type: 'object' },
							},
							...c.F,
						},
					},
					P = f.p.autocomplete({
						id: 'AutocompleteModal',
						selector: '#searchInput',
						globals: { siteId: 'atkzs2' },
						settings: { trending: { limit: 5 } },
					}),
					d = (_, { loaded: { controller: g } }) => {
						const [p, r] = (0, x.J0)(!1),
							M = [
								{ active: p === 'dress', preview: () => r('dress'), value: 'dress', url: { href: '#' } },
								{ active: p === 'shirt', preview: () => r('shirt'), value: 'shirt', url: { href: '#' } },
								{ active: p === 'shoes', preview: () => r('shoes'), value: 'shoes', url: { href: '#' } },
								{ active: p === 'hat', preview: () => r('hat'), value: 'hat', url: { href: '#' } },
								{ active: p === 'pants', preview: () => r('pants'), value: 'pants', url: { href: '#' } },
								{ active: p === 'socks', preview: () => r('socks'), value: 'socks', url: { href: '#' } },
							];
						g.store.history = M;
						const [B, A] = (0, x.J0)(!1);
						return (
							(0, x.vJ)(() => {
								document.querySelector('#searchInput') && A(!0);
							}, []),
							B ? (0, t.Y)(E.c, { ..._, controller: g, input: g?.config.selector }) : (0, t.Y)(t.FK, {})
						);
					};
				(d.loaders = [async () => ({ controller: await P })]),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
							source: {
								originalSource: `(args: AutocompleteModalProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: AutocompleteController;
  };
}) => {
  const [termState, setTermState] = useState(false);
  const mockTerms: AutocompleteTermStore = [{
    active: termState === 'dress',
    preview: () => setTermState('dress'),
    value: 'dress',
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'shirt',
    preview: () => setTermState('shirt'),
    value: 'shirt',
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'shoes',
    preview: () => setTermState('shoes'),
    value: 'shoes',
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'hat',
    preview: () => setTermState('hat'),
    value: 'hat',
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'pants',
    preview: () => setTermState('pants'),
    value: 'pants',
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'socks',
    preview: () => setTermState('socks'),
    value: 'socks',
    url: {
      href: '#'
    } as UrlManager
  }];
  controller.store.history = mockTerms;
  const [inputFound, setInputFound] = useState(false);
  useEffect(() => {
    if (document.querySelector('#searchInput')) {
      setInputFound(true);
    }
  }, []);
  return inputFound ? <AutocompleteModal {...args} controller={controller} input={controller?.config.selector} /> : <></>;
}`,
								...d.parameters?.docs?.source,
							},
						},
					});
				const O = ['Default'];
			},
			'./components/src/components/Molecules/Modal/Modal.tsx'(I, l, e) {
				'use strict';
				e.d(l, { a: () => L });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					E = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					T = e('../../node_modules/classnames/index.js'),
					c = e.n(T),
					f = e('../../node_modules/mobx-react-lite/es/index.js'),
					S = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					b = e('./components/src/providers/snap.tsx'),
					P = e('./components/src/providers/treePath.tsx'),
					d = e('./components/src/hooks/useClickOutside.tsx'),
					O = e('./components/src/hooks/useComponent.tsx'),
					_ = e('./components/src/utilities/cloneWithProps.tsx'),
					g = e('./components/src/utilities/defined.ts'),
					p = e('./components/src/utilities/mergeProps.ts'),
					r = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/hooks/useA11y.tsx'),
					B = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					A = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js');
				const w = () =>
						(0, E.AH)({
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
					L = (0, f.PA)((o) => {
						const s = (0, x.u)(),
							a = (0, b.uk)(),
							n = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, P.LU)() },
							u = (0, p.v6)('modal', s, n, o),
							{
								button: Y,
								content: K,
								buttonSelector: U,
								children: v,
								disabled: R,
								open: H,
								onClick: W,
								lockScroll: D,
								startOpen: J,
								disableClickOutside: j,
								disableA11y: F,
								className: X,
								internalClassName: Z,
								disableStyles: C,
								overlayColor: k,
								onOverlayClick: $,
								treePath: V,
								customComponent: Q,
							} = u;
						if (Q) {
							const i = (0, O.x)(a?.templates?.library.import.component.modal || {}, Q);
							if (i) return (0, t.Y)(i, { ...u });
						}
						const oe = {
							overlay: {
								internalClassName: 'ss__modal__overlay',
								onClick: (i) => {
									$ && $(i), N();
								},
								...(0, g.s)({ disableStyles: C, color: k }),
								theme: u?.theme,
								treePath: V,
							},
						};
						let y, z;
						const G = H === void 0;
						G ? ([y, z] = (0, m.J0)(J)) : (y = H);
						let q;
						j ||
							(q = (0, d.L)(() => {
								y && (R || (G && z && z(!1)));
							}));
						const N = () => {
								G && z && z((i) => !i);
							},
							ne = (0, r.Z)(u, w);
						return (
							(0, m.vJ)(
								() => (
									y && D ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
									() => {
										document.body.style.overflow = '';
									}
								),
								[y, D]
							),
							(0, m.vJ)(() => {
								const i = U ? (typeof U == 'string' ? document.querySelector(U) : U) : null,
									ee = (0, A.s)(() => {
										setTimeout(() => {
											y && D ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
										}, 100);
									}, 10),
									te = (se) => {
										N(), W && W(se);
									};
								return (
									i && (R || i.addEventListener('click', te)),
									window.addEventListener('resize', ee),
									() => {
										window.removeEventListener('resize', ee), i && i.removeEventListener('click', te);
									}
								);
							}, []),
							(0, t.Y)(S._, {
								children: (0, t.FD)('div', {
									...ne,
									className: c()('ss__modal', { 'ss__modal--open': y }, { 'ss__modal--disabled': R }, X, Z),
									ref: q,
									children: [
										!U &&
											Y &&
											(0, t.Y)('div', {
												className: 'ss__modal__button',
												ref: (i) => (F ? null : (0, M.iy)(i)),
												'aria-expanded': y,
												role: 'button',
												onClick: (i) => {
													R || (N(), W && W(i));
												},
												children: (0, _.Y)(Y, { open: y, toggleOpen: N, treePath: V }),
											}),
										(K || v) &&
											y &&
											(0, t.FD)('div', {
												className: 'ss__modal__content',
												ref: (i) => (F ? null : (0, M.iy)(i)),
												children: [(0, _.Y)(K, { open: y, toggleOpen: N, treePath: V }), (0, _.Y)(v, { open: y, toggleOpen: N, treePath: V })],
											}),
										(0, t.Y)(B.h, { ...oe.overlay, active: !!y }),
									],
								}),
							})
						);
					});
			},
			'./components/src/components/Templates/AutocompleteModal/AutocompleteModal.tsx'(I, l, e) {
				'use strict';
				e.d(l, { c: () => B });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					E = e('../../node_modules/mobx-react-lite/es/index.js'),
					T = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = e('./components/src/utilities/defined.ts'),
					f = e('./components/src/utilities/mergeProps.ts'),
					S = e('./components/src/utilities/mergeStyles.ts'),
					x = e('./components/src/providers/cache.tsx'),
					b = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					P = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					d = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					O = e('../../node_modules/classnames/index.js'),
					_ = e.n(O),
					g = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					p = e('./components/src/hooks/useA11y.tsx'),
					r = e('./components/src/hooks/useAcRenderedInput.tsx');
				const M = ({ width: A, height: w, theme: L }) => {
						const o = L?.variables;
						return (0, T.AH)({
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
								maxHeight: w ? 'initial' : '80vh',
								overflow: 'scroll',
								marginLeft: 'auto',
								marginRight: 'auto',
								background: '#fff',
								zIndex: 1001,
								width: A,
								height: w,
								maxWidth: '100vw',
								pointerEvents: 'auto',
							},
							'& .ss__overlay': { zIndex: 1e3 },
							'& .ss__autocomplete': { position: 'relative' },
							'& .ss__search-input': { margin: '1px' },
							'& .input_wrapper input': { background: '#eee' },
							'& .ss__search-input__button--close-search-icon': { border: 'none' },
							[`@media (max-width: ${o?.breakpoints.desktop}px)`]: { '& .ss__autocomplete-modal__inner': { top: '0', maxHeight: '100vh' } },
						});
					},
					B = (0, E.PA)((A) => {
						const w = (0, b.u)(),
							L = { layout: [['c1', 'c2', 'c3']], overlayColor: 'rgba(0,0,0,0.8)', width: '950px', renderInput: !0 },
							o = (0, f.v6)('autocompleteModal', w, L, A),
							[s, a] = (0, m.J0)(!1),
							h = '';
						let n = o.input,
							u = o.buttonSelector;
						n && typeof n == 'string' && (n = document.querySelector(n)), !u && n && (u = n);
						const {
								layout: Y,
								disableStyles: K,
								overlayColor: U,
								controller: v,
								renderInput: R,
								className: H,
								internalClassName: W,
								treePath: D,
							} = o,
							J = (0, m.li)(null);
						(0, m.vJ)(() => {
							const k = ($, V) => {
								v.store.state.focusedInput || a(!1), V();
							};
							return (
								v.eventManager.on('focusChange', k),
								() => {
									v.eventManager.events.focusChange?.remove(k);
								}
							);
						}, []);
						const j = () => {
								v.setFocused(), a(!1);
							},
							F = {
								autocompleteLayout: { layout: Y, onReset: () => j(), ...(0, c.s)({ disableStyles: K }), theme: o?.theme, treePath: D },
								modal: {
									internalClassName: 'autocomplete-modal__modal',
									buttonSelector: u,
									onOverlayClick: j,
									overlayColor: U,
									open: s,
									...(0, c.s)({ disableStyles: K }),
									theme: o?.theme,
									treePath: D,
								},
								searchInput: {
									internalClassName: 'autocomplete-modal__search-input autocomplete__search-input',
									submitSearchButton: {
										onClick: () => {
											window.location.href = v.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => j(), icon: 'angle-left' },
									inputName: h,
									...(0, c.s)({ disableStyles: K }),
									theme: o?.theme,
									treePath: `${D} modal`,
								},
							},
							X = (0, S.Z)(o, M);
						let Z;
						n && (Z = (0, r.x)({ input: n, controller: v, renderedInputRef: J, renderInput: !!R, buttonSelector: u, setActive: a }));
						const C = { ...o };
						return (
							delete C.width,
							delete C.className,
							delete C.internalClassName,
							delete C.style,
							delete C.styleScript,
							delete C.themeStyleScript,
							Y?.length && s
								? (0, t.Y)(x._, {
										children: (0, t.Y)('div', {
											...X,
											className: _()('ss__autocomplete-modal', H, W),
											children: (0, t.Y)(d.a, {
												...F.modal,
												children: (0, t.FD)('div', {
													className: 'ss__autocomplete-modal__inner',
													ref: (k) => (0, p.iy)(k, 0, !0, j),
													children: [
														R ? (0, t.Y)(g.D, { ...F.searchInput, value: v.store.state.input || '', inputRef: J }) : (0, t.Y)(t.FK, {}),
														(0, t.Y)(P.h, { ...C, ...F.autocompleteLayout, input: Z, controller: v, treePath: `${D} modal` }),
													],
												}),
											}),
										}),
								  })
								: null
						);
					});
			},
			'./components/src/utilities/componentArgs.ts'(I, l, e) {
				'use strict';
				e.d(l, { F: () => t });
				const t = {
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
			'./components/src/utilities/snapify.ts'(I, l, e) {
				'use strict';
				e.d(l, { p: () => B });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					m = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					E = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					T = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					c = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					f = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					S = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					x = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					b = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					P = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					d = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					O = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					_ = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					g = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					p = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const r = {},
					M = { globals: { siteId: 'atkzs2' } };
				class B {
					static recommendation(s) {
						const a = s.id;
						if (r[a]) return r[a];
						const h = (r[a] = w({ client: M, controller: s }));
						return (
							h.on('afterStore', async ({ controller: n }, u) => {
								n.log.debug('controller', n), n.log.debug('store', n.store.toJSON()), await u();
							}),
							h.init(),
							h
						);
					}
					static autocomplete(s) {
						const a = s.id;
						if (r[a]) return r[a];
						const h = (r[a] = L({ client: M, controller: s }));
						return (
							h.on('afterStore', async ({ controller: n }, u) => {
								n.log.debug('controller', n), n.log.debug('store', n.store.toJSON()), await u();
							}),
							h.init(),
							h
						);
					}
					static search(s) {
						const a = s.id;
						if (r[a]) return r[a];
						const h = (r[a] = A({ client: M, controller: s }));
						return (
							h.on('afterStore', async ({ controller: n }, u) => {
								n.log.debug('controller', n), n.log.debug('store', n.store.toJSON()), await u();
							}),
							h.init(),
							h
						);
					}
				}
				function A(o) {
					const s = new b.V(new d.E({ settings: { coreType: 'query', corePrefix: o.controller.id } }), P.X);
					return new m.Tp(o.controller, {
						client: new c.K(o.client.globals, o.client.config),
						store: new S.U(o.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new O.E(),
						profiler: new _.U(),
						logger: new g.V(),
						tracker: new p.J(o.client.globals),
					});
				}
				function w(o) {
					const s = new b.V(new d.E(), P.X).detach(!0);
					return new T.c(o.controller, {
						client: new c.K(o.client.globals, o.client.config),
						store: new x.t(o.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new O.E(),
						profiler: new _.U(),
						logger: new g.V(),
						tracker: new p.J(o.client.globals),
					});
				}
				function L(o) {
					const s = new b.V(new d.E(), P.X).detach();
					return new E.Z(o.controller, {
						client: new c.K(o.client.globals, o.client.config),
						store: new f.Y(o.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new O.E(),
						profiler: new _.U(),
						logger: new g.V(),
						tracker: new p.J(o.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(I, l, e) {
				'use strict';
				e.d(l, { Z: () => T });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const E = 'prism-block',
					T = (c) => {
						const f = (0, m.li)(null);
						return (
							(0, m.vJ)(() => {
								f.current && c.className?.includes('lang-') && !c.className?.includes(E) && window?.Prism?.highlightElement(f.current);
							}, [c.className, c.children, f]),
							(0, t.Y)('code', { ...c, ref: f, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(I) {
				function l(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (I.exports = l);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-AutocompleteModal-AutocompleteModal-stories.ed731a15.iframe.bundle.js.map
