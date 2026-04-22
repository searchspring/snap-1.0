(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9769],
		{
			'./components/src/components/Templates/AutocompleteModal/AutocompleteModal.stories.tsx'(B, l, e) {
				'use strict';
				e.r(l), e.d(l, { Default: () => d, __namedExportsOrder: () => O, default: () => P });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					E = e('./components/src/components/Templates/AutocompleteModal/AutocompleteModal.tsx'),
					b = e('./components/src/utilities/storybook.tsx'),
					m = e('./components/src/utilities/componentArgs.ts'),
					g = e('./components/src/utilities/snapify.ts');
				const L =
					"# AutocompleteModal\n\nRenders an autocomplete modal that binds to an `<input>` element.\n\nThe AutocompleteModal component is very similar to the Autocomplete component in functionality, however the main difference is that the AutocompleteModal components layout is determined by the layout prop, which specifies what child components render and where.\n\n## Components Used\n- autocompleteLayout\n- SearchInput\n- Modal\n\n## Usage\n\n### input\nThe required `input` prop expects either:\n\n- a string CSS selector that targets `<input>` element(s) to bind to\n\n- an `<input>` element to bind to\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} />\n```\n\n### controller\nThe required `controller` prop specifies a reference to the autocomplete controller.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} />\n```\n\n### layout\nThe `layout` prop is used to specify which child components render and where. The prop takes an array of specific module names, the order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display.\n\nThere are also a few special module names - `c1`, `c2`, `c3`, `c4`, & `_` \n\nAll of the `cx` modules represent Columns which also have their own layout array by default, and can be overwrote via their own layout props. IE - `c1` module can be overwrote via the `column1` prop. \n\nThe `_` module is used a seperator module to center|left|right justify the other elements in the layout.\n\navailable modules to use in the layout are \n\n`c1`, `c2`, `c3`, `c4`,`TermsList`, `Terms.history`, `Terms.trending`, `Terms.suggestions`, `Facets`, `FacetsHorizontal`, `Button.see-more`, `Content`, `_`, `Banner.left`, `Banner.banner`, `Banner.footer`, `Banner.header`.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} layout={[['c1','c2','c3']]}/>\n```\n\n### column1\nThe `column1` prop specifies the layout to render in the `c1` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['TermsList']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} column1={{\n    width: '150px',\n    layout: ['Terms.history', 'Terms.trending']\n}}/>\n```\n\n### column2\nThe `column2` prop specifies a layout array to render in the `c2` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['Facets']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} column2={{\n    width: '150px',\n    layout: ['Facets']\n}}/>\n```\n\n### column3\nThe `column3` prop specifies a layout array to render in the `c3` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `[['Content'], ['_', 'Button.see-more']]`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} column3={{\n    width: '150px',\n    layout: [['Content', ['_', 'Button.see-more', '_']]]\n}}/>\n```\n\n### column4\nThe `column4` prop specifies a layout array to render in the `c4` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `[['Content'], ['_', 'Button.see-more']]`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} column4={{\nwidth: '150px',\nlayout: ['Facets']\n}}/>\n```\n\n### buttonSelector\nThe `buttonSelector` prop defines a CSS selector for the element that triggers the Modal to open. By default, it uses the selector provided in the `input` prop.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} buttonSelector={\".openSearchButton\"} />\n```\n\n### renderInput\nThe `renderInput` prop specifies whether the Search Input should be rendered. \n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} renderInput={false} />\n```\n\n### width\nThe `width` prop specifies a width for the overall component. The default value is '100%'.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} width=\"800px\" />\n```\n\n### excludeBanners\nThe `excludeBanners` prop specifies if the Autocomplete should automatically include banners. \n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} excludeBanners={true} />\n```\n\n### facetsTitle\nThe `facetsTitle` prop will display the given text above the facets area.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} facetsTitle={'Facets'} />\n```\n\n### contentTitle\nThe `contentTitle` prop will display the given text above the content area.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} contentTitle={'Search Results'} />\n```\n\n### overlayColor \nThe `overlayColor` prop specifies the color of the overlay.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} overlayColor={'rgba(0,0,0,0.8)'} />\n```\n";
				var x = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const P = {
						title: 'Templates/AutocompleteModal',
						component: E.c,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(i.oz, { options: { overrides: { code: b.Z } }, children: L }), (0, t.Y)(i.uY, { story: i.h1 })],
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
							...m.F,
						},
					},
					A = g.p.autocomplete({
						id: 'AutocompleteModal',
						selector: '#searchInput',
						globals: { siteId: 'atkzs2' },
						settings: { trending: { limit: 5 } },
					}),
					d = (_, { loaded: { controller: v } }) => {
						const [p, r] = (0, x.J0)(!1),
							M = [
								{ active: p === 'dress', preview: () => r('dress'), value: 'dress', url: { href: '#' } },
								{ active: p === 'shirt', preview: () => r('shirt'), value: 'shirt', url: { href: '#' } },
								{ active: p === 'shoes', preview: () => r('shoes'), value: 'shoes', url: { href: '#' } },
								{ active: p === 'hat', preview: () => r('hat'), value: 'hat', url: { href: '#' } },
								{ active: p === 'pants', preview: () => r('pants'), value: 'pants', url: { href: '#' } },
								{ active: p === 'socks', preview: () => r('socks'), value: 'socks', url: { href: '#' } },
							];
						v.store.history = M;
						const [U, C] = (0, x.J0)(!1);
						return (
							(0, x.vJ)(() => {
								document.querySelector('#searchInput') && C(!0);
							}, []),
							U ? (0, t.Y)(E.c, { ..._, controller: v, input: v?.config.selector }) : (0, t.Y)(t.FK, {})
						);
					};
				(d.loaders = [async () => ({ controller: await A })]),
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
			'./components/src/components/Molecules/Modal/Modal.tsx'(B, l, e) {
				'use strict';
				e.d(l, { a: () => R });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					E = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					b = e('../../node_modules/classnames/index.js'),
					m = e.n(b),
					g = e('../../node_modules/mobx-react-lite/es/index.js'),
					L = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					P = e('./components/src/providers/snap.tsx'),
					A = e('./components/src/providers/treePath.tsx'),
					d = e('./components/src/hooks/useClickOutside.tsx'),
					O = e('./components/src/hooks/useComponent.tsx'),
					_ = e('./components/src/utilities/cloneWithProps.tsx'),
					v = e('./components/src/utilities/defined.ts'),
					p = e('./components/src/utilities/mergeProps.ts'),
					r = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/hooks/useA11y.tsx'),
					U = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					C = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js');
				const I = () =>
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
					R = (0, g.PA)((o) => {
						const n = (0, x.u)(),
							a = (0, P.uk)(),
							c = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, A.LU)() },
							s = (0, p.v6)('modal', n, c, o),
							{
								button: j,
								content: k,
								buttonSelector: w,
								children: H,
								disabled: y,
								open: N,
								onClick: K,
								lockScroll: V,
								startOpen: W,
								disableClickOutside: Z,
								disableA11y: S,
								className: Y,
								internalClassName: G,
								disableStyles: X,
								overlayColor: D,
								onOverlayClick: T,
								treePath: z,
								customComponent: $,
							} = s;
						if ($) {
							const u = (0, O.x)(a?.templates?.library.import.component.modal || {}, $);
							if (u) return (0, t.Y)(u, { ...s });
						}
						const oe = {
							overlay: {
								internalClassName: 'ss__modal__overlay',
								onClick: (u) => {
									T && T(u), F();
								},
								...(0, v.s)({ disableStyles: X, color: D }),
								theme: s?.theme,
								treePath: z,
							},
						};
						let f, J;
						const Q = N === void 0;
						Q ? ([f, J] = (0, i.J0)(W)) : (f = N);
						let q;
						Z ||
							(q = (0, d.L)(() => {
								f && (y || (Q && J && J(!1)));
							}));
						const F = () => {
								Q && J && J((u) => !u);
							},
							ne = (0, r.Z)(s, I);
						return (
							(0, i.vJ)(
								() => (
									f && V ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
									() => {
										document.body.style.overflow = '';
									}
								),
								[f, V]
							),
							(0, i.vJ)(() => {
								const u = w ? (typeof w == 'string' ? document.querySelector(w) : w) : null,
									ee = (0, C.s)(() => {
										setTimeout(() => {
											f && V ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
										}, 100);
									}, 10),
									te = (se) => {
										F(), K && K(se);
									};
								return (
									u && (y || u.addEventListener('click', te)),
									window.addEventListener('resize', ee),
									() => {
										window.removeEventListener('resize', ee), u && u.removeEventListener('click', te);
									}
								);
							}, []),
							(0, t.Y)(L._, {
								children: (0, t.FD)('div', {
									...ne,
									className: m()('ss__modal', { 'ss__modal--open': f }, { 'ss__modal--disabled': y }, Y, G),
									ref: q,
									children: [
										!w &&
											j &&
											(0, t.Y)('div', {
												className: 'ss__modal__button',
												ref: (u) => (S ? null : (0, M.iy)(u)),
												'aria-expanded': f,
												role: 'button',
												onClick: (u) => {
													y || (F(), K && K(u));
												},
												children: (0, _.Y)(j, { open: f, toggleOpen: F, treePath: z }),
											}),
										(k || H) &&
											f &&
											(0, t.FD)('div', {
												className: 'ss__modal__content',
												ref: (u) => (S ? null : (0, M.iy)(u)),
												children: [(0, _.Y)(k, { open: f, toggleOpen: F, treePath: z }), (0, _.Y)(H, { open: f, toggleOpen: F, treePath: z })],
											}),
										(0, t.Y)(U.h, { ...oe.overlay, active: !!f }),
									],
								}),
							})
						);
					});
			},
			'./components/src/components/Templates/AutocompleteModal/AutocompleteModal.tsx'(B, l, e) {
				'use strict';
				e.d(l, { c: () => U });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					E = e('../../node_modules/mobx-react-lite/es/index.js'),
					b = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('./components/src/utilities/defined.ts'),
					g = e('./components/src/utilities/mergeProps.ts'),
					L = e('./components/src/utilities/mergeStyles.ts'),
					x = e('./components/src/providers/cache.tsx'),
					P = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					d = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					O = e('../../node_modules/classnames/index.js'),
					_ = e.n(O),
					v = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					p = e('./components/src/hooks/useA11y.tsx'),
					r = e('./components/src/hooks/useAcRenderedInput.tsx');
				const M = ({ width: C, height: I, theme: R }) => {
						const o = R?.variables;
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
								maxHeight: I ? 'initial' : '80vh',
								overflow: 'scroll',
								marginLeft: 'auto',
								marginRight: 'auto',
								background: '#fff',
								zIndex: 1001,
								width: C,
								height: I,
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
					U = (0, E.PA)((C) => {
						const I = (0, P.u)(),
							R = { layout: [['c1', 'c2', 'c3']], overlayColor: 'rgba(0,0,0,0.8)', width: '950px', renderInput: !0 },
							o = (0, g.v6)('autocompleteModal', I, R, C),
							[n, a] = (0, i.J0)(!1),
							[h, c] = (0, i.J0)('query');
						let s = o.input,
							j = o.buttonSelector;
						if (s) {
							typeof s == 'string' && (s = document.querySelector(s));
							const T = s?.getAttribute('name');
							T && (c(T), o.renderInput && s.setAttribute('name', ''));
						}
						!j && s && (j = s);
						const {
								layout: k,
								disableStyles: w,
								overlayColor: H,
								controller: y,
								renderInput: N,
								className: K,
								internalClassName: V,
								treePath: W,
							} = o,
							Z = (0, i.li)(null);
						(0, i.vJ)(() => {
							const T = (z, $) => {
								y.store.state.focusedInput || a(!1), $();
							};
							return (
								y.eventManager.on('focusChange', T),
								() => {
									y.eventManager.events.focusChange?.remove(T);
								}
							);
						}, []);
						const S = () => {
								y.setFocused(), a(!1);
							},
							Y = {
								autocompleteLayout: { layout: k, onReset: () => S(), ...(0, m.s)({ disableStyles: w }), theme: o?.theme, treePath: W },
								modal: {
									internalClassName: 'autocomplete-modal__modal',
									buttonSelector: j,
									onOverlayClick: S,
									overlayColor: H,
									open: n,
									...(0, m.s)({ disableStyles: w }),
									theme: o?.theme,
									treePath: W,
								},
								searchInput: {
									internalClassName: 'autocomplete-modal__search-input autocomplete__search-input',
									submitSearchButton: {
										onClick: () => {
											window.location.href = y.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => S(), icon: 'angle-left' },
									inputName: h,
									...(0, m.s)({ disableStyles: w }),
									theme: o?.theme,
									treePath: `${W} modal`,
								},
							},
							G = (0, L.Z)(o, M);
						let X;
						s && (X = (0, r.x)({ input: s, controller: y, renderedInputRef: Z, renderInput: !!N, buttonSelector: j, setActive: a }));
						const D = { ...o };
						return (
							delete D.width,
							delete D.className,
							delete D.internalClassName,
							delete D.style,
							delete D.styleScript,
							delete D.themeStyleScript,
							k?.length && n
								? (0, t.Y)(x._, {
										children: (0, t.Y)('div', {
											...G,
											className: _()('ss__autocomplete-modal', K, V),
											children: (0, t.Y)(d.a, {
												...Y.modal,
												children: (0, t.FD)('div', {
													className: 'ss__autocomplete-modal__inner',
													ref: (T) => (0, p.iy)(T, 0, !0, S),
													children: [
														N ? (0, t.Y)(v.D, { ...Y.searchInput, value: y.store.state.input || '', inputRef: Z }) : (0, t.Y)(t.FK, {}),
														(0, t.Y)(A.h, { ...D, ...Y.autocompleteLayout, input: X, controller: y, treePath: `${W} modal` }),
													],
												}),
											}),
										}),
								  })
								: null
						);
					});
			},
			'./components/src/utilities/componentArgs.ts'(B, l, e) {
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
			'./components/src/utilities/snapify.ts'(B, l, e) {
				'use strict';
				e.d(l, { p: () => U });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					i = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					E = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					b = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					m = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					g = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					L = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					x = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					P = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					A = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					d = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					O = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					_ = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					v = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					p = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const r = {},
					M = { globals: { siteId: 'atkzs2' } };
				class U {
					static recommendation(n) {
						const a = n.id;
						if (r[a]) return r[a];
						const h = (r[a] = I({ client: M, controller: n }));
						return (
							h.on('afterStore', async ({ controller: c }, s) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await s();
							}),
							h.init(),
							h
						);
					}
					static autocomplete(n) {
						const a = n.id;
						if (r[a]) return r[a];
						const h = (r[a] = R({ client: M, controller: n }));
						return (
							h.on('afterStore', async ({ controller: c }, s) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await s();
							}),
							h.init(),
							h
						);
					}
					static search(n) {
						const a = n.id;
						if (r[a]) return r[a];
						const h = (r[a] = C({ client: M, controller: n }));
						return (
							h.on('afterStore', async ({ controller: c }, s) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await s();
							}),
							h.init(),
							h
						);
					}
				}
				function C(o) {
					const n = new P.V(new d.E({ settings: { coreType: 'query', corePrefix: o.controller.id } }), A.X);
					return new i.Tp(o.controller, {
						client: new m.K(o.client.globals, o.client.config),
						store: new L.U(o.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new O.E(),
						profiler: new _.U(),
						logger: new v.V(),
						tracker: new p.J(o.client.globals),
					});
				}
				function I(o) {
					const n = new P.V(new d.E(), A.X).detach(!0);
					return new b.c(o.controller, {
						client: new m.K(o.client.globals, o.client.config),
						store: new x.t(o.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new O.E(),
						profiler: new _.U(),
						logger: new v.V(),
						tracker: new p.J(o.client.globals),
					});
				}
				function R(o) {
					const n = new P.V(new d.E(), A.X).detach();
					return new E.Z(o.controller, {
						client: new m.K(o.client.globals, o.client.config),
						store: new g.Y(o.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new O.E(),
						profiler: new _.U(),
						logger: new v.V(),
						tracker: new p.J(o.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(B, l, e) {
				'use strict';
				e.d(l, { Z: () => b });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const E = 'prism-block',
					b = (m) => {
						const g = (0, i.li)(null);
						return (
							(0, i.vJ)(() => {
								g.current && m.className?.includes('lang-') && !m.className?.includes(E) && window?.Prism?.highlightElement(g.current);
							}, [m.className, m.children, g]),
							(0, t.Y)('code', { ...m, ref: g, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(B) {
				function l(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (B.exports = l);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-AutocompleteModal-AutocompleteModal-stories.de0671f1.iframe.bundle.js.map
