(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4785],
		{
			'./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.stories.tsx'(U, l, e) {
				'use strict';
				e.r(l), e.d(l, { Default: () => _, __namedExportsOrder: () => I, default: () => C });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					w = e('./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.tsx'),
					A = e('./components/src/utilities/storybook.tsx'),
					m = e('./components/src/utilities/componentArgs.ts'),
					v = e('./components/src/utilities/snapify.ts');
				const R =
					"# AutocompleteFixed\n\nRenders an autocomplete popup that binds to an `<input>` element.\n\nThe AutocompleteFixed component is very similar to the Autocomplete component in functionality, however the main difference is that the AutocompleteFixed components layout is determined by the layout prop, which specifies what child components render and where.\n\n## Components Used\n- autocompleteLayout\n- SearchInput\n- Modal\n- Overlay\n\n## Usage\n\n### input\nThe required `input` prop expects either:\n\n- a string CSS selector that targets `<input>` element(s) to bind to\n\n- an `<input>` element to bind to\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} />\n```\n\n### controller\nThe required `controller` prop specifies a reference to the autocomplete controller.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} />\n```\n\n### layout\nThe `layout` prop is used to specify which child components render and where. The prop takes an array of specific module names, the order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display.\n\nThere are also a few special module names - `c1`, `c2`, `c3`, `c4`, & `_` \n\nAll of the `cx` modules represent Columns which also have their own layout array by default, and can be overwrote via their own layout props. IE - `c1` module can be overwrote via the `column1` prop. \n\nThe `_` module is used a seperator module to center|left|right justify the other elements in the layout.\n\navailable modules to use in the layout are \n\n`c1`, `c2`, `c3`, `c4`,`TermsList`, `Terms.history`, `Terms.trending`, `Terms.suggestions`, `Facets`, `FacetsHorizontal`, `Button.see-more`, `Content`, `_`, `Banner.left`, `Banner.banner`, `Banner.footer`, `Banner.header`.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} layout={[['c1','c2','c3']]}/>\n```\n\n### column1\nThe `column1` prop specifies the layout to render in the `c1` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['TermsList']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} column1={{\n    width: '150px',\n    layout: ['Terms.history', 'Terms.trending']\n}}/>\n```\n\n### column2\nThe `column2` prop specifies a layout array to render in the `c2` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['Facets']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} column2={{\n    width: '150px',\n    layout: ['Facets']\n}}/>\n```\n\n### column3\nThe `column3` prop specifies a layout array to render in the `c3` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `[['Content'], ['_', 'Button.see-more']]`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} column3={{\n    width: '150px',\n    layout: [['Content', ['_', 'Button.see-more', '_']]]\n}}/>\n```\n\n### column4\nThe `column4` prop specifies a layout array to render in the `c4` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `[['Content'], ['_', 'Button.see-more']]`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} column4={{\nwidth: '150px',\nlayout: ['Facets']\n}}/>\n```\n\n### offset\nThe `offset` prop accepts an object to fine-tune the position of the autocomplete modal. It can include `top`, `left`, and `width` properties, each specified as numbers representing pixel adjustments.\n\n```tsx\nconst offset = {\n    top: 10;\n	left: 15;\n	width: 500;\n}\n<AutocompleteFixed controller={controller} input={'#searchInput'} offset={offset} />\n```\n\n### buttonSelector\nThe `buttonSelector` prop defines a CSS selector for the element that triggers the Modal to open. By default, it uses the selector provided in the `input` prop.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} buttonSelector={\".openSearchButton\"} />\n```\n\n### overlayColor\nThe `overlayColor` prop specifies the color of the overlay.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} overlayColor={'rgba(0,0,0,0.8)'} />\n```\n\n### renderInput\nThe `renderInput` prop specifies whether the Search Input should be rendered. \n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} renderInput={false} />\n```\n\n### width\nThe `width` prop specifies a width for the overall component. The default value is '100%'.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} width=\"800px\" />\n```\n\n### excludeBanners\nThe `excludeBanners` prop specifies if the Autocomplete should automatically include banners. \n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} excludeBanners={true} />\n```\n\n### facetsTitle\nThe `facetsTitle` prop will display the given text above the facets area.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} facetsTitle={'Facets'} />\n```\n\n### contentTitle\nThe `contentTitle` prop will display the given text above the content area.\n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} contentTitle={'Search Results'} />\n```\n\n### viewportMaxHeight\nThe `viewportMaxHeight` prop will restrict autocomplete from overflowing the viewport. The max height of autocomplete will always be visible in the viewport. \n\n```tsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} viewportMaxHeight={true} />\n```\n";
				var O = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const C = {
						title: 'Templates/AutocompleteFixed',
						component: w.f,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(c.oz, { options: { overrides: { code: A.Z } }, children: R }), (0, t.Y)(c.uY, { story: c.h1 })],
									}),
							},
						},
						decorators: [
							(f) =>
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
										(0, t.Y)(f, {}),
									],
								}),
						],
						argTypes: {
							overlayColor: {
								defaultValue: 'rgba(0,0,0,0.0)',
								description: 'Autocomplete overlay color',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'rgba(0,0,0,0.0)' } },
								control: { type: 'color' },
							},
							buttonSelector: {
								description: 'Autocomplete button selector. (defaults to input)',
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
							offset: {
								description: 'specifies the offset of the autocomplete',
								table: { category: 'Templates Legal', type: { summary: 'object' } },
								control: { type: 'object' },
							},
							width: {
								defaultValue: '500px',
								description: 'Change width of the component',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '500px' } },
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
							viewportMaxHeight: {
								defaultValue: !1,
								description: 'Autocomplete fully visible in viewport',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							resultComponent: {
								description: 'Custom result component for the autocomplete',
								table: { category: 'Templates Legal', type: { summary: 'JSX.Element' } },
								control: { type: 'object' },
							},
							...m.F,
						},
					},
					D = v.p.autocomplete({
						id: 'AutocompleteModal',
						selector: '#searchInput',
						globals: { siteId: 'atkzs2' },
						settings: { trending: { limit: 5 } },
					}),
					_ = (f, { loaded: { controller: E } }) => {
						const [y, r] = (0, O.J0)(!1),
							M = [
								{ active: y === 'dress', preview: () => r('dress'), value: 'dress', url: { href: '#' } },
								{ active: y === 'shirt', preview: () => r('shirt'), value: 'shirt', url: { href: '#' } },
								{ active: y === 'shoes', preview: () => r('shoes'), value: 'shoes', url: { href: '#' } },
								{ active: y === 'hat', preview: () => r('hat'), value: 'hat', url: { href: '#' } },
								{ active: y === 'pants', preview: () => r('pants'), value: 'pants', url: { href: '#' } },
								{ active: y === 'socks', preview: () => r('socks'), value: 'socks', url: { href: '#' } },
							];
						E.store.history = M;
						const [F, j] = (0, O.J0)(!1);
						return (
							(0, O.vJ)(() => {
								document.querySelector('#searchInput') && j(!0);
							}, []),
							F ? (0, t.Y)(w.f, { ...f, controller: E, input: E?.config.selector }) : (0, t.Y)(t.FK, {})
						);
					};
				(_.loaders = [async () => ({ controller: await D })]),
					(_.parameters = {
						..._.parameters,
						docs: {
							..._.parameters?.docs,
							source: {
								originalSource: `(args: AutocompleteFixedProps, {
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
  return inputFound ? <AutocompleteFixed {...args} controller={controller} input={controller?.config.selector} /> : <></>;
}`,
								..._.parameters?.docs?.source,
							},
						},
					});
				const I = ['Default'];
			},
			'./components/src/components/Molecules/Modal/Modal.tsx'(U, l, e) {
				'use strict';
				e.d(l, { a: () => P });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					w = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					A = e('../../node_modules/classnames/index.js'),
					m = e.n(A),
					v = e('../../node_modules/mobx-react-lite/es/index.js'),
					R = e('./components/src/providers/cache.tsx'),
					O = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					C = e('./components/src/providers/snap.tsx'),
					D = e('./components/src/providers/treePath.tsx'),
					_ = e('./components/src/hooks/useClickOutside.tsx'),
					I = e('./components/src/hooks/useComponent.tsx'),
					f = e('./components/src/utilities/cloneWithProps.tsx'),
					E = e('./components/src/utilities/defined.ts'),
					y = e('./components/src/utilities/mergeProps.ts'),
					r = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/hooks/useA11y.tsx'),
					F = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					j = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js');
				const T = () =>
						(0, w.AH)({
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
					P = (0, v.PA)((n) => {
						const o = (0, O.u)(),
							a = (0, C.uk)(),
							i = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, D.LU)() },
							s = (0, y.v6)('modal', o, i, n),
							{
								button: K,
								content: z,
								buttonSelector: S,
								children: V,
								disabled: g,
								open: H,
								onClick: N,
								lockScroll: J,
								startOpen: Q,
								disableClickOutside: Z,
								disableA11y: W,
								className: G,
								internalClassName: k,
								disableStyles: $,
								overlayColor: q,
								onOverlayClick: B,
								treePath: Y,
								customComponent: X,
							} = s;
						if (X) {
							const u = (0, I.x)(a?.templates?.library.import.component.modal || {}, X);
							if (u) return (0, t.Y)(u, { ...s });
						}
						const ee = {
							overlay: {
								internalClassName: 'ss__modal__overlay',
								onClick: (u) => {
									B && B(u), x();
								},
								...(0, E.s)({ disableStyles: $, color: q }),
								theme: s?.theme,
								treePath: Y,
							},
						};
						let h, L;
						const b = H === void 0;
						b ? ([h, L] = (0, c.J0)(Q)) : (h = H);
						let p;
						Z ||
							(p = (0, _.L)(() => {
								h && (g || (b && L && L(!1)));
							}));
						const x = () => {
								b && L && L((u) => !u);
							},
							te = (0, r.Z)(s, T);
						return (
							(0, c.vJ)(
								() => (
									h && J ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
									() => {
										document.body.style.overflow = '';
									}
								),
								[h, J]
							),
							(0, c.vJ)(() => {
								const u = S ? (typeof S == 'string' ? document.querySelector(S) : S) : null,
									oe = (0, j.s)(() => {
										setTimeout(() => {
											h && J ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
										}, 100);
									}, 10),
									ne = (se) => {
										x(), N && N(se);
									};
								return (
									u && (g || u.addEventListener('click', ne)),
									window.addEventListener('resize', oe),
									() => {
										window.removeEventListener('resize', oe), u && u.removeEventListener('click', ne);
									}
								);
							}, []),
							(0, t.Y)(R._, {
								children: (0, t.FD)('div', {
									...te,
									className: m()('ss__modal', { 'ss__modal--open': h }, { 'ss__modal--disabled': g }, G, k),
									ref: p,
									children: [
										!S &&
											K &&
											(0, t.Y)('div', {
												className: 'ss__modal__button',
												ref: (u) => (W ? null : (0, M.iy)(u)),
												'aria-expanded': h,
												role: 'button',
												onClick: (u) => {
													g || (x(), N && N(u));
												},
												children: (0, f.Y)(K, { open: h, toggleOpen: x, treePath: Y }),
											}),
										(z || V) &&
											h &&
											(0, t.FD)('div', {
												className: 'ss__modal__content',
												ref: (u) => (W ? null : (0, M.iy)(u)),
												children: [(0, f.Y)(z, { open: h, toggleOpen: x, treePath: Y }), (0, f.Y)(V, { open: h, toggleOpen: x, treePath: Y })],
											}),
										(0, t.Y)(F.h, { ...ee.overlay, active: !!h }),
									],
								}),
							})
						);
					});
			},
			'./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.tsx'(U, l, e) {
				'use strict';
				e.d(l, { f: () => j });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					w = e('../../node_modules/mobx-react-lite/es/index.js'),
					A = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('./components/src/utilities/defined.ts'),
					v = e('./components/src/utilities/mergeProps.ts'),
					R = e('./components/src/utilities/mergeStyles.ts'),
					O = e('./components/src/providers/cache.tsx'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					D = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					_ = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					I = e('../../node_modules/classnames/index.js'),
					f = e.n(I),
					E = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					y = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js'),
					r = e('./components/src/hooks/useA11y.tsx'),
					M = e('./components/src/hooks/useAcRenderedInput.tsx');
				const F = ({ inputBounds: T, offset: P, renderInput: n, width: o }) =>
						(0, A.AH)({
							position: 'absolute',
							left: '0',
							width: '100%',
							height: '100%',
							right: '0',
							top: '0',
							zIndex: 1001,
							pointerEvents: 'none',
							'.ss__autocomplete-fixed__inner': {
								position: 'absolute',
								left: `calc(0px + ${P?.left || 0}px)`,
								top: `calc(0px + ${n ? '0px' : `${T.height}px`} + ${P?.top || 0}px)`,
								width: `calc(100% + ${P?.width || 0}px)`,
								zIndex: 1001,
								maxWidth: '100vw',
								pointerEvents: 'auto',
								'.ss__search-input': { background: '#fff', width: `${T.width}px`, height: `${T.height}px`, border: '0px' },
							},
							'.ss__autocomplete-fixed__inner__layout-wrapper': {
								width: o,
								overflowY: 'scroll',
								maxHeight: `calc(90vh - ${T.top || 0}px - ${n ? `${T.height}px` : '0px'} + ${P?.top || 0}px)`,
							},
							'.ss__search-input__button--close-search-icon': { border: 'none' },
						}),
					j = (0, w.PA)((T) => {
						const P = (0, C.u)(),
							n = { layout: [['c1', 'c2', 'c3']], renderInput: !0, overlayColor: '' },
							o = (0, v.v6)('autocompleteFixed', P, n, T),
							[a, d] = (0, c.J0)(!1),
							i = '';
						let s = o.input,
							K = o.buttonSelector,
							z;
						s && (typeof s == 'string' && (s = document.querySelector(s)), (z = s?.getAttribute('placeholder'))), !K && s && (K = s);
						const {
								layout: S,
								disableStyles: V,
								controller: g,
								renderInput: H,
								overlayColor: N,
								className: J,
								internalClassName: Q,
								offset: Z,
								treePath: W,
							} = o,
							G = (0, c.li)(null);
						(0, c.vJ)(() => {
							const p = (x, te) => {
								g.store.state.focusedInput || d(!1), te();
							};
							return (
								g.eventManager.on('focusChange', p),
								() => {
									g.eventManager.events.focusChange?.remove(p);
								}
							);
						}, []);
						const k = () => {
								g.setFocused(), d(!1);
							},
							$ = {
								autocompleteLayout: { layout: S, onReset: () => k(), ...(0, m.s)({ disableStyles: V }), theme: o?.theme, treePath: W },
								modal: {
									internalClassName: 'autocomplete-fixed__modal',
									buttonSelector: K,
									lockScroll: !1,
									onOverlayClick: k,
									open: a,
									...(0, m.s)({ overlayColor: N, disableStyles: V }),
									theme: o?.theme,
									treePath: W,
								},
								searchInput: {
									internalClassName: 'autocomplete-fixed__search-input autocomplete__search-input',
									placeholderText: z || void 0,
									submitSearchButton: {
										onClick: () => {
											window.location.href = g.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => k() },
									inputName: i,
									...(0, m.s)({ disableStyles: V }),
									theme: o?.theme,
									treePath: `${W} modal`,
								},
							},
							q = (p) => {
								if (p) {
									const x = p.getBoundingClientRect();
									return {
										top: x.top + window.scrollY + (Z?.top || 0),
										left: x.left + window.scrollX + (Z?.left || 0),
										width: x.width,
										height: x.height,
									};
								} else return { top: 0, left: 0, width: 0, height: 0 };
							},
							[B, Y] = (0, c.J0)({ top: 0, left: 0, width: 0, height: 0 }),
							X = () => {
								const p = q(s);
								(B.height !== p.height || B.left !== p.left || B.top !== p.top || B.width !== p.width) && Y(p);
							};
						X();
						const ee = (0, y.s)(() => {
							X();
						}, 10);
						(0, c.vJ)(() => {
							window.addEventListener('resize', ee);
						}, []);
						const h = (0, R.Z)({ ...o, inputBounds: B }, F);
						let L;
						s && (L = (0, M.x)({ input: s, controller: g, renderedInputRef: G, renderInput: !!H, buttonSelector: K, setActive: d }));
						const b = { ...o };
						return (
							delete b.width,
							delete b.className,
							delete b.internalClassName,
							delete b.style,
							delete b.styleScript,
							delete b.themeStyleScript,
							S?.length && a
								? (0, t.Y)(O._, {
										children: (0, t.Y)('div', {
											...h,
											className: f()('ss__autocomplete-fixed', J, Q),
											children: (0, t.Y)(_.a, {
												...$.modal,
												children: (0, t.FD)('div', {
													className: 'ss__autocomplete-fixed__inner',
													ref: (p) => (0, r.iy)(p, 0, !0, k),
													children: [
														H ? (0, t.Y)(E.D, { ...$.searchInput, value: g.store.state.input || '', inputRef: G }) : (0, t.Y)(t.FK, {}),
														(0, t.Y)('div', {
															className: 'ss__autocomplete-fixed__inner__layout-wrapper',
															children: (0, t.Y)(D.h, { ...b, ...$.autocompleteLayout, input: L, controller: g, treePath: `${W} modal` }),
														}),
													],
												}),
											}),
										}),
								  })
								: null
						);
					});
			},
			'./components/src/utilities/componentArgs.ts'(U, l, e) {
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
			'./components/src/utilities/snapify.ts'(U, l, e) {
				'use strict';
				e.d(l, { p: () => F });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					c = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					w = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					A = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					m = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					v = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					R = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					O = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					C = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					D = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					_ = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					I = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					f = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					E = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					y = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const r = {},
					M = { globals: { siteId: 'atkzs2' } };
				class F {
					static recommendation(o) {
						const a = o.id;
						if (r[a]) return r[a];
						const d = (r[a] = T({ client: M, controller: o }));
						return (
							d.on('afterStore', async ({ controller: i }, s) => {
								i.log.debug('controller', i), i.log.debug('store', i.store.toJSON()), await s();
							}),
							d.init(),
							d
						);
					}
					static autocomplete(o) {
						const a = o.id;
						if (r[a]) return r[a];
						const d = (r[a] = P({ client: M, controller: o }));
						return (
							d.on('afterStore', async ({ controller: i }, s) => {
								i.log.debug('controller', i), i.log.debug('store', i.store.toJSON()), await s();
							}),
							d.init(),
							d
						);
					}
					static search(o) {
						const a = o.id;
						if (r[a]) return r[a];
						const d = (r[a] = j({ client: M, controller: o }));
						return (
							d.on('afterStore', async ({ controller: i }, s) => {
								i.log.debug('controller', i), i.log.debug('store', i.store.toJSON()), await s();
							}),
							d.init(),
							d
						);
					}
				}
				function j(n) {
					const o = new C.V(new _.E({ settings: { coreType: 'query', corePrefix: n.controller.id } }), D.X);
					return new c.Tp(n.controller, {
						client: new m.K(n.client.globals, n.client.config),
						store: new R.U(n.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new I.E(),
						profiler: new f.U(),
						logger: new E.V(),
						tracker: new y.J(n.client.globals),
					});
				}
				function T(n) {
					const o = new C.V(new _.E(), D.X).detach(!0);
					return new A.c(n.controller, {
						client: new m.K(n.client.globals, n.client.config),
						store: new O.t(n.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new I.E(),
						profiler: new f.U(),
						logger: new E.V(),
						tracker: new y.J(n.client.globals),
					});
				}
				function P(n) {
					const o = new C.V(new _.E(), D.X).detach();
					return new w.Z(n.controller, {
						client: new m.K(n.client.globals, n.client.config),
						store: new v.Y(n.controller, { urlManager: o }),
						urlManager: o,
						eventManager: new I.E(),
						profiler: new f.U(),
						logger: new E.V(),
						tracker: new y.J(n.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(U, l, e) {
				'use strict';
				e.d(l, { Z: () => A });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const w = 'prism-block',
					A = (m) => {
						const v = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								v.current && m.className?.includes('lang-') && !m.className?.includes(w) && window?.Prism?.highlightElement(v.current);
							}, [m.className, m.children, v]),
							(0, t.Y)('code', { ...m, ref: v, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(U) {
				function l(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (U.exports = l);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-AutocompleteFixed-AutocompleteFixed-stories.93a51e55.iframe.bundle.js.map
