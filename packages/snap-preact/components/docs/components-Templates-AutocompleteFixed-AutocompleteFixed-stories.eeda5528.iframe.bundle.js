(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[4785],
		{
			'./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.stories.tsx'(B, l, e) {
				'use strict';
				e.r(l), e.d(l, { Default: () => d, __namedExportsOrder: () => P, default: () => g });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					r = e('./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.tsx'),
					T = e('./components/src/utilities/storybook.tsx'),
					m = e('./components/src/utilities/componentArgs.ts'),
					i = e('./components/src/utilities/snapify.ts');
				const O =
					"# AutocompleteFixed\n\nRenders an autocomplete popup that binds to an `<input>` element.\n\nThe AutocompleteFixed component is very similar to the Autocomplete component in functionality, however the main difference is that the AutocompleteFixed components layout is determined by the layout prop, which specifies what child components render and where.\n\n## Components Used\n- autocompleteLayout\n- SearchInput\n- Modal\n- Overlay\n\n## Usage\n\n### input\nThe required `input` prop expects either:\n\n- a string CSS selector that targets `<input>` element(s) to bind to\n\n- an `<input>` element to bind to\n\n```jsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} />\n```\n\n### controller\nThe required `controller` prop specifies a reference to the autocomplete controller.\n\n```jsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} />\n```\n\n### layout\nThe `layout` prop is used to specify which child components render and where. The prop takes an array of specific module names, the order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display.\n\nThere are also a few special module names - `c1`, `c2`, `c3`, `c4`, & `_` \n\nAll of the `cx` modules represent Columns which also have their own layout array by default, and can be overwrote via their own layout props. IE - `c1` module can be overwrote via the `column1` prop. \n\nThe `_` module is used a seperator module to center|left|right justify the other elements in the layout.\n\navailable modules to use in the layout are \n\n`c1`, `c2`, `c3`, `c4`,`TermsList`, `Terms.history`, `Terms.trending`, `Terms.suggestions`, `Facets`, `FacetsHorizontal`, `Button.see-more`, `Content`, `_`, `Banner.left`, `Banner.banner`, `Banner.footer`, `Banner.header`.\n\n```jsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} layout={[['c1','c2','c3']]}/>\n```\n\n### column1\nThe `column1` prop specifies the layout to render in the `c1` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['TermsList']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```jsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} column1={{\n    width: '150px',\n    layout: ['Terms.history', 'Terms.trending']\n}}/>\n```\n\n### column2\nThe `column2` prop specifies a layout array to render in the `c2` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['Facets']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```jsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} column2={{\n    width: '150px',\n    layout: ['Facets']\n}}/>\n```\n\n### column3\nThe `column3` prop specifies a layout array to render in the `c3` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `[['Content'], ['_', 'Button.see-more']]`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```jsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} column3={{\n    width: '150px',\n    layout: [['Content', ['_', 'Button.see-more', '_']]]\n}}/>\n```\n\n### column4\nThe `column4` prop specifies a layout array to render in the `c4` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `[['Content'], ['_', 'Button.see-more']]`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```jsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} column4={{\nwidth: '150px',\nlayout: ['Facets']\n}}/>\n```\n\n### offset\nThe `offset` prop accepts an object to fine-tune the position of the autocomplete modal. It can include `top`, `left`, and `width` properties, each specified as numbers representing pixel adjustments.\n\n```jsx\nconst offset = {\n    top: 10;\n	left: 15;\n	width: 500;\n}\n<AutocompleteFixed controller={controller} input={'#searchInput'} offset={offset} />\n```\n\n### buttonSelector\nThe `buttonSelector` prop defines a CSS selector for the element that triggers the Modal to open. By default, it uses the selector provided in the `input` prop.\n\n```jsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} buttonSelector={\".openSearchButton\"} />\n```\n\n### overlayColor\nThe `overlayColor` prop specifies the color of the overlay.\n\n```jsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} overlayColor={'rgba(0,0,0,0.8)'} />\n```\n\n### renderInput\nThe `renderInput` prop specifies whether the Search Input should be rendered. \n\n```jsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} renderInput={false} />\n```\n\n### width\nThe `width` prop specifies a width for the overall component. The default value is '100%'.\n\n```jsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} width=\"800px\" />\n```\n\n### excludeBanners\nThe `excludeBanners` prop specifies if the Autocomplete should automatically include banners. \n\n```jsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} excludeBanners={true} />\n```\n\n### facetsTitle\nThe `facetsTitle` prop will display the given text above the facets area.\n\n```jsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} facetsTitle={'Facets'} />\n```\n\n### contentTitle\nThe `contentTitle` prop will display the given text above the content area.\n\n```jsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} contentTitle={'Search Results'} />\n```\n\n### viewportMaxHeight\nThe `viewportMaxHeight` prop will restrict autocomplete from overflowing the viewport. The max height of autocomplete will always be visible in the viewport. \n\n```jsx\n<AutocompleteFixed controller={controller} input={'#searchInput'} viewportMaxHeight={true} />\n```\n";
				var y = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const g = {
						title: 'Templates/AutocompleteFixed',
						component: r.f,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(u.oz, { options: { overrides: { code: T.Z } }, children: O }), (0, t.Y)(u.uY, { story: u.h1 })],
									}),
							},
						},
						decorators: [
							(x) =>
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
										(0, t.Y)(x, {}),
									],
								}),
						],
						argTypes: {
							overlayColor: {
								defaultValue: 'rgba(0,0,0,0.0)',
								description: 'Autocomplete overlay color',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'rgba(0,0,0,0.0)' } },
								control: { type: 'color' },
							},
							buttonSelector: {
								description: 'Autocomplete button selector. (defaults to input)',
								table: { type: { summary: 'string, jsx' } },
								control: { type: 'text' },
							},
							renderInput: {
								defaultValue: !0,
								description: 'render a second input inside autocomplete window that gets auto focused on open.',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
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
									type: {
										summary:
											"['c1' | 'c2' | 'c3' | 'c4' | 'Terms' | 'HistoryTerms' | 'TrendingTerms'| 'SuggestedTerms'| 'Facets' | 'FacetsHorizontal' | 'SeeMore' | 'Content' | '_' | 'Banner.left' | 'Banner.banner' | 'Banner.footer' | 'Banner.header']",
									},
									defaultValue: { summary: "[['button.see-more'],['termsList'], ['content']]" },
								},
								control: 'array',
							},
							column1: {
								description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c1" layout',
								table: {
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
								control: 'array',
							},
							column2: {
								description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c2" layout',
								table: {
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
								control: 'array',
							},
							column3: {
								description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c3" layout',
								table: {
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
								control: 'array',
							},
							column4: {
								description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c4" layout',
								table: {
									type: {
										summary:
											"{width: '150px', layout: ['Terms' | 'HistoryTerms' | 'TrendingTerms'| 'SuggestedTerms'| 'Facets' | 'FacetsHorizontal' | 'SeeMore' | 'Content' | '_' | 'Banner.left' | 'Banner.banner' | 'Banner.footer' | 'Banner.header']}",
									},
								},
								control: 'array',
							},
							offset: {
								description: 'specifies the offset of the autocomplete',
								table: { type: { summary: 'object' } },
								control: { type: 'object' },
							},
							width: {
								defaultValue: '500px',
								description: 'Change width of the component',
								table: { type: { summary: 'string' }, defaultValue: { summary: '500px' } },
								control: { type: 'text' },
							},
							excludeBanners: {
								defaultValue: !1,
								description: 'automatically add merchandising banners',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							facetsTitle: {
								defaultValue: '',
								description: 'Change facets header title',
								table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							contentTitle: {
								defaultValue: '',
								description: 'Change content header title',
								table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							viewportMaxHeight: {
								defaultValue: !1,
								description: 'Autocomplete fully visible in viewport',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							...m.F,
						},
					},
					w = i.p.autocomplete({
						id: 'AutocompleteModal',
						selector: '#searchInput',
						globals: { siteId: 'atkzs2' },
						settings: { trending: { limit: 5 } },
					}),
					d = (x, { loaded: { controller: c } }) => {
						const [M, E] = (0, y.J0)(!1);
						return (
							(0, y.vJ)(() => {
								document.querySelector('#searchInput') && E(!0);
							}, []),
							M ? (0, t.Y)(r.f, { ...x, controller: c, input: c?.config.selector }) : (0, t.Y)(t.FK, {})
						);
					};
				(d.loaders = [async () => ({ controller: await w })]),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
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
  const [inputFound, setInputFound] = useState(false);
  useEffect(() => {
    if (document.querySelector('#searchInput')) {
      setInputFound(true);
    }
  }, []);
  return inputFound ? <AutocompleteFixed {...args} controller={controller} input={controller?.config.selector} /> : <></>;
}`,
								...d.parameters?.docs?.source,
							},
						},
					});
				const P = ['Default'];
			},
			'./components/src/components/Molecules/Modal/Modal.tsx'(B, l, e) {
				'use strict';
				e.d(l, { a: () => Y });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					T = e('../../node_modules/classnames/index.js'),
					m = e.n(T),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					O = e('./components/src/providers/cache.tsx'),
					y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					g = e('./components/src/providers/treePath.tsx'),
					w = e('./components/src/hooks/useClickOutside.tsx'),
					d = e('./components/src/utilities/cloneWithProps.tsx'),
					P = e('./components/src/utilities/defined.ts'),
					x = e('./components/src/utilities/mergeProps.ts'),
					c = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/hooks/useA11y.tsx'),
					E = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					j = e('../../node_modules/@searchspring/snap-toolbox/dist/esm/debounce/debounce.js');
				const V = () =>
						(0, r.AH)({
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
					Y = (0, i.PA)((k) => {
						const A = (0, y.u)(),
							s = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, g.LU)() },
							o = (0, x.v6)('modal', A, s, k),
							{
								button: p,
								content: a,
								buttonSelector: b,
								children: $,
								disabled: h,
								open: L,
								onClick: S,
								lockScroll: N,
								startOpen: z,
								disableClickOutside: R,
								disableA11y: H,
								className: Q,
								internalClassName: q,
								disableStyles: ee,
								overlayColor: Z,
								onOverlayClick: F,
								treePath: U,
							} = o,
							K = {
								overlay: {
									internalClassName: 'ss__modal__overlay',
									onClick: (f) => {
										F && F(f), I();
									},
									...(0, P.s)({ disableStyles: ee, color: Z }),
									theme: o?.theme,
									treePath: U,
								},
							};
						let _, W;
						const C = L === void 0;
						C ? ([_, W] = (0, u.J0)(z)) : (_ = L);
						let X;
						R ||
							(X = (0, w.L)(() => {
								_ && (h || (C && W && W(!1)));
							}));
						const I = () => {
								C && W && W((f) => !f);
							},
							te = (0, c.Z)(o, V);
						return (
							(0, u.vJ)(
								() => (
									_ && N ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
									() => {
										document.body.style.overflow = '';
									}
								),
								[_, N]
							),
							(0, u.vJ)(() => {
								const f = b ? (typeof b == 'string' ? document.querySelector(b) : b) : null,
									J = (0, j.s)(() => {
										setTimeout(() => {
											_ && N ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
										}, 100);
									}, 10),
									D = (v) => {
										I(), S && S(v);
									};
								return (
									f && (h || f.addEventListener('click', D)),
									window.addEventListener('resize', J),
									() => {
										window.removeEventListener('resize', J), f && f.removeEventListener('click', D);
									}
								);
							}, []),
							(0, t.Y)(O._, {
								children: (0, t.FD)('div', {
									...te,
									className: m()('ss__modal', { 'ss__modal--open': _ }, { 'ss__modal--disabled': h }, Q, q),
									ref: X,
									children: [
										!b &&
											p &&
											(0, t.Y)('div', {
												className: 'ss__modal__button',
												ref: (f) => (H ? null : (0, M.iy)(f)),
												'aria-expanded': _,
												role: 'button',
												onClick: (f) => {
													h || (I(), S && S(f));
												},
												children: (0, d.Y)(p, { open: _, toggleOpen: I, treePath: U }),
											}),
										(a || $) &&
											_ &&
											(0, t.FD)('div', {
												className: 'ss__modal__content',
												ref: (f) => (H ? null : (0, M.iy)(f)),
												children: [(0, d.Y)(a, { open: _, toggleOpen: I, treePath: U }), (0, d.Y)($, { open: _, toggleOpen: I, treePath: U })],
											}),
										(0, t.Y)(E.h, { ...K.overlay, active: !!_ }),
									],
								}),
							})
						);
					});
			},
			'./components/src/components/Templates/AutocompleteFixed/AutocompleteFixed.tsx'(B, l, e) {
				'use strict';
				e.d(l, { f: () => k });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/preact/dist/preact.module.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					T = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('./components/src/utilities/defined.ts'),
					O = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/providers/cache.tsx'),
					w = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					P = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					x = e('../../node_modules/classnames/index.js'),
					c = e.n(x),
					M = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					E = e('../../node_modules/@searchspring/snap-toolbox/dist/esm/debounce/debounce.js'),
					j = e('./components/src/hooks/useA11y.tsx'),
					V = e('./components/src/hooks/useAcRenderedInput.tsx');
				const Y = ({ inputBounds: A, offset: n, renderInput: s, width: o }) =>
						(0, m.AH)({
							position: 'absolute',
							left: '0',
							width: '100%',
							height: '100%',
							right: '0',
							top: '0',
							zIndex: 1001,
							'.ss__autocomplete-fixed__inner': {
								position: 'absolute',
								left: `calc(0px + ${n?.left || 0}px)`,
								top: `calc(0px + ${s ? '0px' : `${A.height}px`} + ${n?.top || 0}px)`,
								width: `calc(100% + ${n?.width || 0}px)`,
								zIndex: 1001,
								maxWidth: '100vw',
								'.ss__search-input': { background: '#fff', width: `${A.width}px`, height: `${A.height}px`, border: '0px' },
							},
							'.ss__autocomplete-fixed__inner__layout-wrapper': {
								width: o,
								overflowY: 'scroll',
								maxHeight: `calc(90vh - ${A.top || 0}px - ${s ? `${A.height}px` : '0px'} + ${n?.top || 0}px)`,
							},
							'.ss__search-input__button--close-search-icon': { border: 'none' },
						}),
					k = (0, T.PA)((A) => {
						const n = (0, w.u)(),
							s = { layout: [['c1', 'c2', 'c3']], renderInput: !0, overlayColor: '' },
							o = (0, O.v6)('autocompleteFixed', n, s, A),
							[p, a] = (0, r.J0)(!1),
							[b, $] = (0, r.J0)('query');
						let h = o.input,
							L = o.buttonSelector,
							S;
						if (h) {
							typeof h == 'string' && (h = document.querySelector(h));
							const v = h?.getAttribute('name');
							v && ($(v), o.renderInput && h.setAttribute('name', '')), (S = h?.getAttribute('placeholder'));
						}
						!L && h && (L = h);
						const {
								layout: N,
								disableStyles: z,
								controller: R,
								renderInput: H,
								overlayColor: Q,
								className: q,
								internalClassName: ee,
								offset: Z,
								treePath: F,
							} = o,
							U = (0, r.li)(null),
							K = () => {
								R.setFocused(), a(!1);
							},
							_ = {
								autocompleteLayout: { layout: N, onReset: () => K(), ...(0, i.s)({ disableStyles: z }), theme: o?.theme, treePath: F },
								modal: {
									internalClassName: 'autocomplete-fixed__modal',
									buttonSelector: L,
									lockScroll: !1,
									onOverlayClick: K,
									open: p,
									...(0, i.s)({ overlayColor: Q, disableStyles: z }),
									theme: o?.theme,
									treePath: F,
								},
								searchInput: {
									internalClassName: 'autocomplete-fixed__search-input',
									placeholderText: S || void 0,
									submitSearchButton: {
										onClick: () => {
											window.location.href = R.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => K() },
									inputName: b,
									...(0, i.s)({ disableStyles: z }),
									theme: o?.theme,
									treePath: `${F} modal`,
								},
							},
							W = (v) => {
								if (v) {
									const G = v.getBoundingClientRect();
									return {
										top: G.top + window.scrollY + (Z?.top || 0),
										left: G.left + window.scrollX + (Z?.left || 0),
										width: G.width,
										height: G.height,
									};
								} else return { top: 0, left: 0, width: 0, height: 0 };
							},
							[C, X] = (0, r.J0)({ top: 0, left: 0, width: 0, height: 0 }),
							I = () => {
								const v = W(h);
								(C.height !== v.height || C.left !== v.left || C.top !== v.top || C.width !== v.width) && X(v);
							};
						I();
						const te = (0, E.s)(() => {
							I();
						}, 10);
						(0, r.vJ)(() => {
							window.addEventListener('resize', te);
						}, []);
						const f = (0, y.Z)({ ...o, inputBounds: C }, Y);
						let J;
						h && (J = (0, V.x)({ input: h, controller: R, renderedInputRef: U, renderInput: !!H, buttonSelector: L, setActive: a }));
						const D = { ...o };
						return (
							delete D.width,
							delete D.className,
							delete D.internalClassName,
							delete D.style,
							delete D.styleScript,
							delete D.themeStyleScript,
							N?.length && p
								? (0, t.Y)(g._, {
										children: (0, t.Y)('div', {
											...f,
											className: c()('ss__autocomplete-fixed', q, ee),
											children: (0, t.Y)(P.a, {
												..._.modal,
												children: (0, t.Y)(u.FK, {
													children: (0, t.FD)('div', {
														className: 'ss__autocomplete-fixed__inner',
														ref: (v) => (0, j.iy)(v, 0, !0, K),
														children: [
															H ? (0, t.Y)(M.D, { ..._.searchInput, value: R.store.state.input || '', inputRef: U }) : (0, t.Y)(t.FK, {}),
															(0, t.Y)('div', {
																className: 'ss__autocomplete-fixed__inner__layout-wrapper',
																children: (0, t.Y)(d.h, { ...D, ..._.autocompleteLayout, input: J, controller: R, treePath: `${F} modal` }),
															}),
														],
													}),
												}),
											}),
										}),
								  })
								: (0, t.Y)(u.FK, {})
						);
					});
			},
			'./components/src/hooks/useAcRenderedInput.tsx'(B, l, e) {
				'use strict';
				e.d(l, { x: () => u });
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function u({ input: r, controller: T, renderInput: m, buttonSelector: i, renderedInputRef: O, setActive: y }) {
					const [g, w] = (0, t.J0)(r),
						[d, P] = (0, t.J0)(!1),
						x = () => {
							y && y(!0),
								setTimeout(async () => {
									d || (w(O.current), (T.config.selector = '.ss__search-input__input'), await T.bind(), O?.current?.focus()), P(!0);
								});
						};
					return (
						(0, t.vJ)(() => {
							if (m && i) {
								let c;
								typeof i == 'string' ? (c = document.querySelector(i)) : (c = i),
									c &&
										(c.addEventListener('click', (M) => {
											M.stopPropagation(), x();
										}),
										c.addEventListener('focus', () => x()),
										c.addEventListener('select', () => x()));
							} else
								y &&
									(r.addEventListener('click', (c) => {
										c.stopPropagation(), y(!0);
									}),
									r.addEventListener('focus', () => y(!0)),
									r.addEventListener('select', () => y(!0)));
						}, []),
						(0, t.vJ)(() => {
							r !== g &&
								g?.addEventListener('input', () => {
									r.value = g.value;
								});
						}, [g]),
						g
					);
				}
			},
			'./components/src/utilities/componentArgs.ts'(B, l, e) {
				'use strict';
				e.d(l, { F: () => t });
				const t = {
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
			'./components/src/utilities/snapify.ts'(B, l, e) {
				'use strict';
				e.d(l, { p: () => V });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					u = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					r = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					T = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					m = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					i = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					O = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					y = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					g = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					w = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					d = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					P = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					x = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					c = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					M = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const E = {},
					j = { globals: { siteId: '8uyt2m' } };
				class V {
					static recommendation(s) {
						const o = s.id;
						if (E[o]) return E[o];
						const p = (E[o] = k({ client: j, controller: s }));
						return (
							p.on('afterStore', async ({ controller: a }, b) => {
								a.log.debug('controller', a), a.log.debug('store', a.store.toJSON()), await b();
							}),
							p.init(),
							p
						);
					}
					static autocomplete(s) {
						const o = s.id;
						if (E[o]) return E[o];
						const p = (E[o] = A({ client: j, controller: s }));
						return (
							p.on('afterStore', async ({ controller: a }, b) => {
								a.log.debug('controller', a), a.log.debug('store', a.store.toJSON()), await b();
							}),
							p.init(),
							p
						);
					}
					static search(s) {
						const o = s.id;
						if (E[o]) return E[o];
						const p = (E[o] = Y({ client: j, controller: s }));
						return (
							p.on('afterStore', async ({ controller: a }, b) => {
								a.log.debug('controller', a), a.log.debug('store', a.store.toJSON()), await b();
							}),
							p.init(),
							p
						);
					}
				}
				function Y(n) {
					const s = new g.V(new d.E({ settings: { coreType: 'query', corePrefix: n.controller.id } }), w.X);
					return new u.Tp(n.controller, {
						client: new m.K(n.client.globals, n.client.config),
						store: new O.U(n.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new P.E(),
						profiler: new x.U(),
						logger: new c.V(),
						tracker: new M.J(n.client.globals),
					});
				}
				function k(n) {
					const s = new g.V(new d.E(), w.X).detach(!0);
					return new T.c(n.controller, {
						client: new m.K(n.client.globals, n.client.config),
						store: new y.t(n.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new P.E(),
						profiler: new x.U(),
						logger: new c.V(),
						tracker: new M.J(n.client.globals),
					});
				}
				function A(n) {
					const s = new g.V(new d.E(), w.X).detach();
					return new r.Z(n.controller, {
						client: new m.K(n.client.globals, n.client.config),
						store: new i.Y(n.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new P.E(),
						profiler: new x.U(),
						logger: new c.V(),
						tracker: new M.J(n.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(B, l, e) {
				'use strict';
				e.d(l, { Z: () => T });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					u = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = 'prism-block',
					T = (m) => {
						const i = (0, u.li)(null);
						return (
							(0, u.vJ)(() => {
								i.current && m.className?.includes('lang-') && !m.className?.includes(r) && window?.Prism?.highlightElement(i.current);
							}, [m.className, m.children, i]),
							(0, t.Y)('code', { ...m, ref: i, 'data-prismjs-copy': 'Copy' })
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

//# sourceMappingURL=components-Templates-AutocompleteFixed-AutocompleteFixed-stories.eeda5528.iframe.bundle.js.map
