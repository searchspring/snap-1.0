(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9769],
		{
			'./components/src/components/Templates/AutocompleteModal/AutocompleteModal.stories.tsx'(C, c, e) {
				'use strict';
				e.r(c), e.d(c, { Default: () => d, __namedExportsOrder: () => x, default: () => T });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					v = e('./components/src/components/Templates/AutocompleteModal/AutocompleteModal.tsx'),
					E = e('./components/src/utilities/storybook.tsx'),
					m = e('./components/src/utilities/componentArgs.ts'),
					y = e('./components/src/utilities/snapify.ts');
				const I =
					"# AutocompleteModal\n\nRenders an autocomplete modal that binds to an `<input>` element.\n\nThe AutocompleteModal component is very similar to the Autocomplete component in functionality, however the main difference is that the AutocompleteModal components layout is determined by the layout prop, which specifies what child components render and where.\n\n## Components Used\n- autocompleteLayout\n- SearchInput\n- Modal\n\n## Usage\n\n### input\nThe required `input` prop expects either:\n\n- a string CSS selector that targets `<input>` element(s) to bind to\n\n- an `<input>` element to bind to\n\n```jsx\n<AutocompleteModal controller={controller} input={'#searchInput'} />\n```\n\n### controller\nThe required `controller` prop specifies a reference to the autocomplete controller.\n\n```jsx\n<AutocompleteModal controller={controller} input={'#searchInput'} />\n```\n\n### layout\nThe `layout` prop is used to specify which child components render and where. The prop takes an array of specific module names, the order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display.\n\nThere are also a few special module names - `c1`, `c2`, `c3`, `c4`, & `_` \n\nAll of the `cx` modules represent Columns which also have their own layout array by default, and can be overwrote via their own layout props. IE - `c1` module can be overwrote via the `column1` prop. \n\nThe `_` module is used a seperator module to center|left|right justify the other elements in the layout.\n\navailable modules to use in the layout are \n\n`c1`, `c2`, `c3`, `c4`,`TermsList`, `Terms.history`, `Terms.trending`, `Terms.suggestions`, `Facets`, `FacetsHorizontal`, `Button.see-more`, `Content`, `_`, `Banner.left`, `Banner.banner`, `Banner.footer`, `Banner.header`.\n\n```jsx\n<AutocompleteModal controller={controller} input={'#searchInput'} layout={[['c1','c2','c3']]}/>\n```\n\n### column1\nThe `column1` prop specifies the layout to render in the `c1` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['TermsList']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```jsx\n<AutocompleteModal controller={controller} input={'#searchInput'} column1={{\n    width: '150px',\n    layout: ['Terms.history', 'Terms.trending']\n}}/>\n```\n\n### column2\nThe `column2` prop specifies a layout array to render in the `c2` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['Facets']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```jsx\n<AutocompleteModal controller={controller} input={'#searchInput'} column2={{\n    width: '150px',\n    layout: ['Facets']\n}}/>\n```\n\n### column3\nThe `column3` prop specifies a layout array to render in the `c3` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `[['Content'], ['_', 'Button.see-more']]`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```jsx\n<AutocompleteModal controller={controller} input={'#searchInput'} column3={{\n    width: '150px',\n    layout: [['Content', ['_', 'Button.see-more', '_']]]\n}}/>\n```\n\n### column4\nThe `column4` prop specifies a layout array to render in the `c4` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `[['Content'], ['_', 'Button.see-more']]`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```jsx\n<AutocompleteModal controller={controller} input={'#searchInput'} column4={{\nwidth: '150px',\nlayout: ['Facets']\n}}/>\n```\n\n### buttonSelector\nThe `buttonSelector` prop defines a CSS selector for the element that triggers the Modal to open. By default, it uses the selector provided in the `input` prop.\n\n```jsx\n<AutocompleteModal controller={controller} input={'#searchInput'} buttonSelector={\".openSearchButton\"} />\n```\n\n### renderInput\nThe `renderInput` prop specifies whether the Search Input should be rendered. \n\n```jsx\n<AutocompleteModal controller={controller} input={'#searchInput'} renderInput={false} />\n```\n\n### width\nThe `width` prop specifies a width for the overall component. The default value is '100%'.\n\n```jsx\n<AutocompleteModal controller={controller} input={'#searchInput'} width=\"800px\" />\n```\n\n### excludeBanners\nThe `excludeBanners` prop specifies if the Autocomplete should automatically include banners. \n\n```jsx\n<AutocompleteModal controller={controller} input={'#searchInput'} excludeBanners={true} />\n```\n\n### facetsTitle\nThe `facetsTitle` prop will display the given text above the facets area.\n\n```jsx\n<AutocompleteModal controller={controller} input={'#searchInput'} facetsTitle={'Facets'} />\n```\n\n### contentTitle\nThe `contentTitle` prop will display the given text above the content area.\n\n```jsx\n<AutocompleteModal controller={controller} input={'#searchInput'} contentTitle={'Search Results'} />\n```\n\n### overlayColor \nThe `overlayColor` prop specifies the color of the overlay.\n\n```jsx\n<AutocompleteModal controller={controller} input={'#searchInput'} overlayColor={'rgba(0,0,0,0.8)'} />\n```\n";
				var M = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const T = {
						title: 'Templates/AutocompleteModal',
						component: v.c,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(u.oz, { options: { overrides: { code: E.Z } }, children: I }), (0, t.Y)(u.uY, { story: u.h1 })],
									}),
							},
						},
						decorators: [
							(f) =>
								(0, t.FD)('div', {
									style: { maxWidth: '960px', position: 'relative' },
									children: [
										(0, t.Y)('input', {
											type: 'text',
											id: 'searchInput',
											placeholder: 'try me!',
											autoComplete: 'off',
											style: { width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #3a23ad' },
										}),
										(0, t.FD)('span', {
											style: { margin: '15px', textAlign: 'center', display: 'block' },
											children: ['Storybook bug: if no autocomplete renders. please refresh the page.', ' '],
										}),
										(0, t.Y)(f, {}),
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
							...m.F,
						},
					},
					b = y.p.autocomplete({
						id: 'AutocompleteModal',
						selector: '#searchInput',
						globals: { siteId: 'atkzs2' },
						settings: { trending: { limit: 5 } },
					}),
					d = (f, { loaded: { controller: g } }) => {
						const [h, a] = (0, M.J0)(!1),
							P = [
								{ active: h === 'dress', preview: () => a('dress'), value: 'dress', url: { href: '#' } },
								{ active: h === 'shirt', preview: () => a('shirt'), value: 'shirt', url: { href: '#' } },
								{ active: h === 'shoes', preview: () => a('shoes'), value: 'shoes', url: { href: '#' } },
								{ active: h === 'hat', preview: () => a('hat'), value: 'hat', url: { href: '#' } },
								{ active: h === 'pants', preview: () => a('pants'), value: 'pants', url: { href: '#' } },
								{ active: h === 'socks', preview: () => a('socks'), value: 'socks', url: { href: '#' } },
							];
						g.store.history = P;
						const [S, A] = (0, M.J0)(!1);
						return (
							(0, M.vJ)(() => {
								document.querySelector('#searchInput') && A(!0);
							}, []),
							S ? (0, t.Y)(v.c, { ...f, controller: g, input: g?.config.selector }) : (0, t.Y)(t.FK, {})
						);
					};
				(d.loaders = [async () => ({ controller: await b })]),
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
				const x = ['Default'];
			},
			'./components/src/components/Molecules/Modal/Modal.tsx'(C, c, e) {
				'use strict';
				e.d(c, { a: () => A });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					v = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					E = e('../../node_modules/classnames/index.js'),
					m = e.n(E),
					y = e('../../node_modules/mobx-react-lite/es/index.js'),
					I = e('./components/src/providers/cache.tsx'),
					M = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					T = e('./components/src/providers/treePath.tsx'),
					b = e('./components/src/hooks/useClickOutside.tsx'),
					d = e('./components/src/utilities/cloneWithProps.tsx'),
					x = e('./components/src/utilities/defined.ts'),
					f = e('./components/src/utilities/mergeProps.ts'),
					g = e('./components/src/utilities/mergeStyles.ts'),
					h = e('./components/src/hooks/useA11y.tsx'),
					a = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					P = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js');
				const S = () =>
						(0, v.AH)({
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
					A = (0, y.PA)((D) => {
						const B = (0, M.u)(),
							n = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, T.LU)() },
							r = (0, f.v6)('modal', B, n, D),
							{
								button: p,
								content: l,
								buttonSelector: s,
								children: L,
								disabled: j,
								open: K,
								onClick: W,
								lockScroll: w,
								startOpen: Y,
								disableClickOutside: Z,
								disableA11y: z,
								className: F,
								internalClassName: H,
								disableStyles: U,
								overlayColor: N,
								onOverlayClick: J,
								treePath: R,
							} = r,
							O = {
								overlay: {
									internalClassName: 'ss__modal__overlay',
									onClick: (_) => {
										J && J(_), k();
									},
									...(0, x.s)({ disableStyles: U, color: N }),
									theme: r?.theme,
									treePath: R,
								},
							};
						let i, V;
						const $ = K === void 0;
						$ ? ([i, V] = (0, u.J0)(Y)) : (i = K);
						let X;
						Z ||
							(X = (0, b.L)(() => {
								i && (j || ($ && V && V(!1)));
							}));
						const k = () => {
								$ && V && V((_) => !_);
							},
							q = (0, g.Z)(r, S);
						return (
							(0, u.vJ)(
								() => (
									i && w ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
									() => {
										document.body.style.overflow = '';
									}
								),
								[i, w]
							),
							(0, u.vJ)(() => {
								const _ = s ? (typeof s == 'string' ? document.querySelector(s) : s) : null,
									G = (0, P.s)(() => {
										setTimeout(() => {
											i && w ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
										}, 100);
									}, 10),
									Q = (ee) => {
										k(), W && W(ee);
									};
								return (
									_ && (j || _.addEventListener('click', Q)),
									window.addEventListener('resize', G),
									() => {
										window.removeEventListener('resize', G), _ && _.removeEventListener('click', Q);
									}
								);
							}, []),
							(0, t.Y)(I._, {
								children: (0, t.FD)('div', {
									...q,
									className: m()('ss__modal', { 'ss__modal--open': i }, { 'ss__modal--disabled': j }, F, H),
									ref: X,
									children: [
										!s &&
											p &&
											(0, t.Y)('div', {
												className: 'ss__modal__button',
												ref: (_) => (z ? null : (0, h.iy)(_)),
												'aria-expanded': i,
												role: 'button',
												onClick: (_) => {
													j || (k(), W && W(_));
												},
												children: (0, d.Y)(p, { open: i, toggleOpen: k, treePath: R }),
											}),
										(l || L) &&
											i &&
											(0, t.FD)('div', {
												className: 'ss__modal__content',
												ref: (_) => (z ? null : (0, h.iy)(_)),
												children: [(0, d.Y)(l, { open: i, toggleOpen: k, treePath: R }), (0, d.Y)(L, { open: i, toggleOpen: k, treePath: R })],
											}),
										(0, t.Y)(a.h, { ...O.overlay, active: !!i }),
									],
								}),
							})
						);
					});
			},
			'./components/src/components/Templates/AutocompleteModal/AutocompleteModal.tsx'(C, c, e) {
				'use strict';
				e.d(c, { c: () => S });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					v = e('../../node_modules/mobx-react-lite/es/index.js'),
					E = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('./components/src/utilities/defined.ts'),
					y = e('./components/src/utilities/mergeProps.ts'),
					I = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/providers/cache.tsx'),
					T = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					b = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					d = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					x = e('../../node_modules/classnames/index.js'),
					f = e.n(x),
					g = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					h = e('./components/src/hooks/useA11y.tsx'),
					a = e('./components/src/hooks/useAcRenderedInput.tsx');
				const P = ({ width: A, height: D, theme: B }) => {
						const o = B?.variables;
						return (0, E.AH)({
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
								maxHeight: D ? 'initial' : '80vh',
								overflow: 'scroll',
								marginLeft: 'auto',
								marginRight: 'auto',
								background: '#fff',
								zIndex: 1001,
								width: A,
								height: D,
								maxWidth: '100vw',
							},
							'& .ss__overlay': { zIndex: 1e3 },
							'& .ss__autocomplete': { position: 'relative' },
							'& .ss__search-input': { margin: '1px' },
							'& .input_wrapper input': { background: '#eee' },
							'& .ss__search-input__button--close-search-icon': { border: 'none' },
							[`@media (max-width: ${o?.breakpoints.desktop}px)`]: { '& .ss__autocomplete-modal__inner': { top: '0', maxHeight: '100vh' } },
						});
					},
					S = (0, v.PA)((A) => {
						const D = (0, T.u)(),
							B = { layout: [['c1', 'c2', 'c3']], overlayColor: 'rgba(0,0,0,0.8)', width: '950px', renderInput: !0 },
							o = (0, y.v6)('autocompleteModal', D, B, A),
							[n, r] = (0, u.J0)(!1),
							[p, l] = (0, u.J0)('query');
						let s = o.input,
							L = o.buttonSelector;
						if (s) {
							typeof s == 'string' && (s = document.querySelector(s));
							const i = s?.getAttribute('name');
							i && (l(i), o.renderInput && s.setAttribute('name', ''));
						}
						!L && s && (L = s);
						const {
								layout: j,
								disableStyles: K,
								overlayColor: W,
								controller: w,
								renderInput: Y,
								className: Z,
								internalClassName: z,
								treePath: F,
							} = o,
							H = (0, u.li)(null),
							U = () => {
								w.setFocused(), r(!1);
							},
							N = {
								autocompleteLayout: { layout: j, onReset: () => U(), ...(0, m.s)({ disableStyles: K }), theme: o?.theme, treePath: F },
								modal: {
									internalClassName: 'autocomplete-modal__modal',
									buttonSelector: L,
									onOverlayClick: () => U(),
									overlayColor: W,
									open: n,
									...(0, m.s)({ disableStyles: K }),
									theme: o?.theme,
									treePath: F,
								},
								searchInput: {
									internalClassName: 'autocomplete-modal__search-input autocomplete__search-input',
									submitSearchButton: {
										onClick: () => {
											window.location.href = w.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => U(), icon: 'angle-left' },
									inputName: p,
									...(0, m.s)({ disableStyles: K }),
									theme: o?.theme,
									treePath: `${F} modal`,
								},
							},
							J = (0, I.Z)(o, P);
						let R;
						s && (R = (0, a.x)({ input: s, controller: w, renderedInputRef: H, renderInput: !!Y, buttonSelector: L, setActive: r }));
						const O = { ...o };
						return (
							delete O.width,
							delete O.className,
							delete O.internalClassName,
							delete O.style,
							delete O.styleScript,
							delete O.themeStyleScript,
							j?.length && n
								? (0, t.Y)(M._, {
										children: (0, t.Y)('div', {
											...J,
											className: f()('ss__autocomplete-modal', Z, z),
											children: (0, t.Y)(d.a, {
												...N.modal,
												children: (0, t.FD)('div', {
													className: 'ss__autocomplete-modal__inner',
													ref: (i) => (0, h.iy)(i, 0, !0, U),
													children: [
														Y ? (0, t.Y)(g.D, { ...N.searchInput, value: w.store.state.input || '', inputRef: H }) : (0, t.Y)(t.FK, {}),
														(0, t.Y)(b.h, { ...O, ...N.autocompleteLayout, input: R, controller: w, treePath: `${F} modal` }),
													],
												}),
											}),
										}),
								  })
								: null
						);
					});
			},
			'./components/src/utilities/componentArgs.ts'(C, c, e) {
				'use strict';
				e.d(c, { F: () => t });
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
			'./components/src/utilities/snapify.ts'(C, c, e) {
				'use strict';
				e.d(c, { p: () => S });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					u = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					v = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					E = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					m = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					y = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					I = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					M = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					T = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					b = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					d = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					x = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					f = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					g = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					h = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const a = {},
					P = { globals: { siteId: 'atkzs2' } };
				class S {
					static recommendation(n) {
						const r = n.id;
						if (a[r]) return a[r];
						const p = (a[r] = D({ client: P, controller: n }));
						return (
							p.on('afterStore', async ({ controller: l }, s) => {
								l.log.debug('controller', l), l.log.debug('store', l.store.toJSON()), await s();
							}),
							p.init(),
							p
						);
					}
					static autocomplete(n) {
						const r = n.id;
						if (a[r]) return a[r];
						const p = (a[r] = B({ client: P, controller: n }));
						return (
							p.on('afterStore', async ({ controller: l }, s) => {
								l.log.debug('controller', l), l.log.debug('store', l.store.toJSON()), await s();
							}),
							p.init(),
							p
						);
					}
					static search(n) {
						const r = n.id;
						if (a[r]) return a[r];
						const p = (a[r] = A({ client: P, controller: n }));
						return (
							p.on('afterStore', async ({ controller: l }, s) => {
								l.log.debug('controller', l), l.log.debug('store', l.store.toJSON()), await s();
							}),
							p.init(),
							p
						);
					}
				}
				function A(o) {
					const n = new T.V(new d.E({ settings: { coreType: 'query', corePrefix: o.controller.id } }), b.X);
					return new u.Tp(o.controller, {
						client: new m.K(o.client.globals, o.client.config),
						store: new I.U(o.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new x.E(),
						profiler: new f.U(),
						logger: new g.V(),
						tracker: new h.J(o.client.globals),
					});
				}
				function D(o) {
					const n = new T.V(new d.E(), b.X).detach(!0);
					return new E.c(o.controller, {
						client: new m.K(o.client.globals, o.client.config),
						store: new M.t(o.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new x.E(),
						profiler: new f.U(),
						logger: new g.V(),
						tracker: new h.J(o.client.globals),
					});
				}
				function B(o) {
					const n = new T.V(new d.E(), b.X).detach();
					return new v.Z(o.controller, {
						client: new m.K(o.client.globals, o.client.config),
						store: new y.Y(o.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new x.E(),
						profiler: new f.U(),
						logger: new g.V(),
						tracker: new h.J(o.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(C, c, e) {
				'use strict';
				e.d(c, { Z: () => E });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const v = 'prism-block',
					E = (m) => {
						const y = (0, u.li)(null);
						return (
							(0, u.vJ)(() => {
								y.current && m.className?.includes('lang-') && !m.className?.includes(v) && window?.Prism?.highlightElement(y.current);
							}, [m.className, m.children, y]),
							(0, t.Y)('code', { ...m, ref: y, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(C) {
				function c(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(c.keys = () => []), (c.resolve = c), (c.id = '../../node_modules/memoizerific sync recursive'), (C.exports = c);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-AutocompleteModal-AutocompleteModal-stories.30f38618.iframe.bundle.js.map
