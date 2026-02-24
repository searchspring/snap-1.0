(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[9671],
		{
			'./components/src/components/Organisms/TermsList/TermsList.stories.tsx'(M, i, e) {
				'use strict';
				e.r(i), e.d(i, { Default: () => g, __namedExportsOrder: () => x, default: () => C });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					m = e('./components/src/utilities/storybook.tsx'),
					c = e('./components/src/utilities/componentArgs.ts'),
					o = e('./components/src/components/Organisms/TermsList/TermsList.tsx');
				const t = `# TermsList

Renders a list of terms for autocomplete. 

## Usage

### Controller

The \`controller\` prop specifies a reference to the autocomplete controller.

\`\`\`jsx
<TermsList controller={controller} />
\`\`\`

### layout

The \`layout\` prop is used to determine which terms render and in what layout. The prop takes an array of specific module names, the order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display. Options include 'Trending' | 'Suggestions' | 'History' | '_';

The \`_\` module is used a seperator module to center|left|right justify the other elements in the layout.

\`\`\`jsx
<TermsList controller={controller} layout={[['Trending'], ['Suggestions'], ['History']]}/>
\`\`\`

### historyTitle

The \`historyTitle\` prop specifies the title to render above the history terms.

\`\`\`jsx
<TermsList controller={controller} historyTitle={'History Terms'}/>
\`\`\`

### suggestionTitle

The \`historyTitle\` prop specifies the title to render above the history terms.

\`\`\`jsx
<TermsList controller={controller} suggestionTitle={'Suggested Terms'}/>
\`\`\`

### trendingTitle

The \`trendingTitle\` prop specifies the title to render above the trending terms.

\`\`\`jsx
<TermsList controller={controller} trendingTitle={'Trending Terms'}/>
\`\`\`


### retainHistory

The \`retainHistory\` prop will cause the history terms to always render. 

\`\`\`jsx
<TermsList controller={controller} retainHistory={true}/>
\`\`\`

### retainTrending

The \`retainTrending\` prop will cause the Trending terms to always render. 

\`\`\`jsx
<TermsList controller={controller} retainTrending={true}/>
\`\`\`
`;
				var r = e('./components/src/utilities/snapify.ts');
				const C = {
						title: 'Organisms/TermsList',
						component: o.G,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(a.oz, { options: { overrides: { code: m.Z } }, children: t }), (0, s.Y)(a.uY, { story: a.h1 })],
									}),
							},
						},
						decorators: [
							(f) =>
								(0, s.FD)('div', {
									style: { maxWidth: '900px', position: 'relative' },
									children: [
										(0, s.Y)('input', {
											type: 'text',
											id: 'searchInput',
											placeholder: 'try me!',
											autoComplete: 'off',
											style: { width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #3a23ad' },
										}),
										(0, s.Y)(f, {}),
									],
								}),
						],
						argTypes: {
							controller: {
								description: 'autocomplete controller reference',
								type: { required: !0 },
								table: { type: { summary: 'autocomplete controller object' } },
								control: { type: 'none' },
							},
							layout: {
								description: 'array of modules to render in specified order',
								table: {
									type: { summary: "['History' | 'Trending' | 'Suggestions' | '_']" },
									defaultValue: { summary: "[['Suggestions'], ['Trending'], ['History']]" },
								},
								control: 'array',
							},
							historyTitle: {
								description: 'history terms title',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'History' } },
								control: { type: 'text' },
							},
							suggestionTitle: {
								description: 'suggested terms title',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'Suggestions' } },
								control: { type: 'text' },
							},
							trendingTitle: {
								description: 'trending terms title',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'Trending' } },
								control: { type: 'text' },
							},
							retainHistory: {
								description: 'boolean to specify if the history terms should always be rendered',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							retainTrending: {
								description: 'boolean to specify if the trending terms should always be rendered',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							...c.F,
						},
					},
					b = r.p.autocomplete({
						id: 'Autocomplete-TermsList',
						selector: '#searchInput',
						globals: { siteId: 'atkzs2' },
						settings: { trending: { limit: 5 } },
					}),
					g = (f, { loaded: { controller: O } }) => {
						const P = [
							{ active: !1, preview: () => console.log(''), value: 'dress', url: { href: 'www.dress.com' } },
							{ active: !1, preview: () => console.log(''), value: 'drss', url: { href: 'www.drss.com' } },
							{ active: !1, preview: () => console.log(''), value: 'dreees', url: { href: 'www.dreees.com' } },
							{ active: !1, preview: () => console.log(''), value: 'dres', url: { href: 'www.dres.com' } },
							{ active: !1, preview: () => console.log(''), value: 'dss', url: { href: 'www.dss.com' } },
							{ active: !1, preview: () => console.log(''), value: 'ress', url: { href: 'www.ress.com' } },
						];
						return (
							setTimeout(() => {
								O.bind();
							}),
							(O.store.history = P),
							(0, s.Y)(o.G, { ...f, controller: O })
						);
					};
				(g.args = { retainHistory: !0, retainTrending: !0 }),
					(g.loaders = [async () => ({ controller: await b })]),
					(g.parameters = {
						...g.parameters,
						docs: {
							...g.parameters?.docs,
							source: {
								originalSource: `(args: TermsListProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: AutocompleteController;
  };
}) => {
  const mockTerms: AutocompleteTermStore = [{
    active: false,
    preview: () => console.log(''),
    value: 'dress',
    url: {
      href: 'www.dress.com'
    } as UrlManager
  }, {
    active: false,
    preview: () => console.log(''),
    value: 'drss',
    url: {
      href: 'www.drss.com'
    } as UrlManager
  }, {
    active: false,
    preview: () => console.log(''),
    value: 'dreees',
    url: {
      href: 'www.dreees.com'
    } as UrlManager
  }, {
    active: false,
    preview: () => console.log(''),
    value: 'dres',
    url: {
      href: 'www.dres.com'
    } as UrlManager
  }, {
    active: false,
    preview: () => console.log(''),
    value: 'dss',
    url: {
      href: 'www.dss.com'
    } as UrlManager
  }, {
    active: false,
    preview: () => console.log(''),
    value: 'ress',
    url: {
      href: 'www.ress.com'
    } as UrlManager
  }];
  setTimeout(() => {
    controller.bind();
  });
  controller.store.history = mockTerms;
  return <TermsList {...args} controller={controller} />;
}`,
								...g.parameters?.docs?.source,
							},
						},
					});
				const x = ['Default'];
			},
			'./components/src/components/Molecules/Terms/Terms.tsx'(M, i, e) {
				'use strict';
				e.d(i, { i: () => R });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/dist/preact.module.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					t = e.n(o),
					r = e('./components/src/providers/cache.tsx'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					b = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					g = e('./components/src/utilities/mergeProps.ts'),
					x = e('./components/src/utilities/mergeStyles.ts'),
					f = e('./components/src/hooks/useLang.tsx'),
					O = e('../../node_modules/deepmerge/dist/cjs.js'),
					P = e.n(O);
				const j = ({ vertical: d, theme: y }) =>
						(0, c.AH)({
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
								flexDirection: d ? 'column' : 'row',
								flexWrap: 'wrap',
								padding: '0px',
								'.ss__terms__option': {
									listStyle: 'none',
									padding: '10px',
									wordBreak: 'break-all',
									a: { display: 'block', em: { fontStyle: 'normal' } },
									'&.ss__terms__option--active': { a: { fontWeight: 'bold', color: y?.variables?.colors?.primary } },
								},
							},
						}),
					E = (d) => d?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
					A = (d, y) => {
						if (d && y) {
							const D = d.match(E(y));
							if (y && d && D && typeof D.index == 'number') {
								const n = d.slice(0, D.index),
									l = d.slice(D.index + y.length, d.length);
								return `${n ? `<em>${n}</em>` : ''}${y}${l ? `<em>${l}</em>` : ''}`;
							}
						}
						return `<em>${d}</em>`;
					},
					R = (0, m.PA)((d) => {
						const y = (0, C.u)(),
							D = { vertical: !0, previewOnHover: !0 },
							n = (0, g.v6)('terms', y, D, d),
							{ title: l, onTermClick: u, limit: p, previewOnHover: _, emIfy: w, className: Y, internalClassName: V, controller: h } = n,
							K = h?.store?.state?.input,
							S = n.terms,
							I = (0, x.Z)(n, j),
							$ = (T, U) => {
								u && u(T, U), h?.setFocused && h?.setFocused();
							},
							L = p ? S?.slice(0, p) : S,
							F = { title: { value: l } },
							J = P()(F, n.lang || {}),
							H = (0, f.u)({ title: J.title }, { controller: h });
						return L?.length
							? (0, s.Y)(r._, {
									children: (0, s.FD)('div', {
										...I,
										className: t()('ss__terms', Y, V),
										children: [
											l ? (0, s.Y)('div', { className: 'ss__terms__title', children: (0, s.Y)('h5', { ...H.title.all }) }) : null,
											(0, s.Y)('ul', {
												className: 'ss__terms__options',
												'aria-label': l,
												children: L?.map((T, U) => {
													const W = {
															term: {
																value: `${w ? A(T.value, K || '') : T.value}`,
																attributes: { 'aria-label': `${l || ''} item ${U + 1} of ${L.length}, ${T.value}` },
															},
														},
														B = P()(W, n.lang || {}),
														N = (0, f.u)({ term: B.term }, { index: U, numberOfTerms: L.length, term: T });
													return (0, s.Y)('li', {
														className: t()('ss__terms__option', { 'ss__terms__option--active': T.active }),
														children: (0, s.Y)('a', { onClick: (v) => $(v, T), href: T.url.href, ...(_ ? (0, b.l)(T.preview) : {}), ...N.term?.all }),
													});
												}),
											}),
										],
									}),
							  })
							: (0, s.Y)(a.FK, {});
					});
			},
			'./components/src/components/Organisms/TermsList/TermsList.tsx'(M, i, e) {
				'use strict';
				e.d(i, { G: () => j });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/dist/preact.module.js'),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					t = e.n(o),
					r = e('./components/src/providers/cache.tsx'),
					C = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					b = e('./components/src/utilities/defined.ts'),
					g = e('./components/src/utilities/mergeProps.ts'),
					x = e('./components/src/utilities/mergeStyles.ts'),
					f = e('./components/src/components/Molecules/Terms/Terms.tsx'),
					O = e('./components/src/hooks/useCleanUpEmptyDivs.tsx');
				const P = ({}) =>
						(0, c.AH)({
							display: 'flex',
							flexDirection: 'row',
							background: '#f8f8f8',
							width: 'auto',
							flexWrap: 'wrap',
							'.ss__terms-list__row': { display: 'flex', flexDirection: 'row', flexBasis: '100%' },
							'.ss__terms-list__row:empty': { display: 'none' },
							'.ss__terms-list__separator': { flexGrow: 1, flexShrink: 1 },
						}),
					j = (0, m.PA)((E) => {
						const A = (0, C.u)(),
							R = {
								layout: [['Suggestions'], ['Trending'], ['History']],
								historyTitle: 'History',
								trendingTitle: 'Trending',
								suggestionTitle: 'Suggestions',
							},
							d = (0, g.v6)('termsList', A, R, E),
							{
								layout: y,
								historyTitle: D,
								trendingTitle: n,
								suggestionTitle: l,
								retainHistory: u,
								retainTrending: p,
								treePath: _,
								disableStyles: w,
								className: Y,
								internalClassName: V,
								controller: h,
							} = d,
							K = { terms: { ...(0, b.s)({ disableStyles: w }), theme: d.theme, treePath: _ } },
							S = (0, x.Z)(d, P),
							I = h?.store.history || [],
							$ = h?.store.terms || [],
							L = h?.store.trending || [],
							F = L?.filter((v) => v.active).pop(),
							J = I?.filter((v) => v.active).pop(),
							{ loaded: H, results: T, state: U } = h?.store;
						let W = !1;
						L?.length && ((p && H) || (!T.length && !U.input)) && (W = !0);
						let B = !1;
						I?.length && ((u && H) || (!T.length && !U.input)) && (B = !0),
							!h.store.state.input && (J || F) && (I?.length && (B = !0), L?.length && (W = !0)),
							(0, O.P)(['.ss__terms-list', '.ss__terms-list__row'], '.ss__terms-list__separator');
						const N = (v) => {
							if (typeof v != 'string') return (0, s.Y)('div', { className: 'ss__terms-list__row', children: v?.map((z) => N(z)) });
							if (v == '_') return (0, s.Y)('div', { className: 'ss__terms-list__separator' });
							if (v == 'History' && B)
								return (0, s.Y)(f.i, {
									internalClassName: 'ss__terms-list__terms--history',
									title: D,
									terms: I,
									controller: h,
									name: 'history',
									limit: h.config.settings?.history?.limit,
									...K.terms,
								});
							if (v == 'Trending' && W)
								return (0, s.Y)(f.i, {
									internalClassName: 'ss__terms-list__terms--trending',
									title: n,
									terms: L,
									controller: h,
									name: 'trending',
									limit: h.config.settings?.trending?.limit,
									...K.terms,
								});
							if (v == 'Suggestions')
								return (0, s.Y)(f.i, {
									internalClassName: 'ss__terms-list__terms--suggestions',
									title: l,
									terms: $,
									controller: h,
									name: 'suggestions',
									...K.terms,
								});
						};
						return y?.length
							? (0, s.Y)(r._, { children: (0, s.Y)('div', { ...S, className: t()('ss__terms-list', Y, V), children: y?.map((v) => N(v)) }) })
							: (0, s.Y)(a.FK, {});
					});
			},
			'./components/src/hooks/useCleanUpEmptyDivs.tsx'(M, i, e) {
				'use strict';
				e.d(i, { P: () => a });
				var s = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				function a(c, o) {
					(0, s.vJ)(() => {
						c.forEach((t) => {
							document.querySelectorAll(t).forEach((r) => {
								m(r, o) || r.remove();
							});
						});
					});
				}
				function m(c, o) {
					if (!c.children.length) return !1;
					for (const t of c.children)
						if (!t.matches(o)) {
							const r = t.innerHTML.trim();
							if (t.tagName !== 'DIV' || r.trim() !== '') return !0;
						}
					return !1;
				}
			},
			'./components/src/hooks/useLang.tsx'(M, i, e) {
				'use strict';
				e.d(i, { u: () => s });
				const s = (a, m) => {
					const c = {};
					return (
						Object.keys(a).forEach((o) => {
							const t = a && a[o],
								r = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (r.value = { 'ss-lang': o, dangerouslySetInnerHTML: { __html: t.value(m) } })
										: (r.value = { 'ss-lang': o, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((r.attributes = { 'ss-lang': o }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (r.attributes['aria-label'] = t.attributes['aria-label'](m))
											: (r.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (r.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](m))
											: (r.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (r.attributes.title = t.attributes.title(m))
											: (r.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (r.attributes.alt = t.attributes.alt(m)) : (r.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (r.attributes.placeholder = t.attributes.placeholder(m))
											: (r.attributes.placeholder = t.attributes.placeholder))),
								(r.all = { ...r.value, ...r.attributes, 'ss-lang': o })),
								(c[o] = r);
						}),
						c
					);
				};
			},
			'./components/src/toolbox/createHoverProps/createHoverProps.ts'(M, i, e) {
				'use strict';
				e.d(i, { l: () => s });
				const s = (a, m = { delay: 333, focusElem: !0 }) => {
					let c;
					return {
						onMouseEnter: (o) => {
							clearTimeout(c),
								(c = window.setTimeout(() => {
									m.focusElem && o.target.focus(), a && a();
								}, m.delay || 333));
						},
						onMouseLeave: () => {
							clearTimeout(c);
						},
					};
				};
			},
			'./components/src/utilities/componentArgs.ts'(M, i, e) {
				'use strict';
				e.d(i, { F: () => s });
				const s = {
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
			'./components/src/utilities/defined.ts'(M, i, e) {
				'use strict';
				e.d(i, { s: () => s });
				function s(a) {
					const m = {};
					return (
						Object.keys(a).map((c) => {
							a[c] !== void 0 && (m[c] = a[c]);
						}),
						m
					);
				}
			},
			'./components/src/utilities/snapify.ts'(M, i, e) {
				'use strict';
				e.d(i, { p: () => R });
				var s = e('../../node_modules/mobx/dist/mobx.esm.js'),
					a = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					m = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					c = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					o = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					r = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					C = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					b = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					g = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					x = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					f = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					O = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					P = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					j = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const E = {},
					A = { globals: { siteId: '8uyt2m' } };
				class R {
					static recommendation(l) {
						const u = l.id;
						if (E[u]) return E[u];
						const p = (E[u] = y({ client: A, controller: l }));
						return (
							p.on('afterStore', async ({ controller: _ }, w) => {
								_.log.debug('controller', _), _.log.debug('store', _.store.toJSON()), await w();
							}),
							p.init(),
							p
						);
					}
					static autocomplete(l) {
						const u = l.id;
						if (E[u]) return E[u];
						const p = (E[u] = D({ client: A, controller: l }));
						return (
							p.on('afterStore', async ({ controller: _ }, w) => {
								_.log.debug('controller', _), _.log.debug('store', _.store.toJSON()), await w();
							}),
							p.init(),
							p
						);
					}
					static search(l) {
						const u = l.id;
						if (E[u]) return E[u];
						const p = (E[u] = d({ client: A, controller: l }));
						return (
							p.on('afterStore', async ({ controller: _ }, w) => {
								_.log.debug('controller', _), _.log.debug('store', _.store.toJSON()), await w();
							}),
							p.init(),
							p
						);
					}
				}
				function d(n) {
					const l = new b.V(new x.E({ settings: { coreType: 'query', corePrefix: n.controller.id } }), g.X);
					return new a.Tp(n.controller, {
						client: new o.K(n.client.globals, n.client.config),
						store: new r.U(n.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new f.E(),
						profiler: new O.U(),
						logger: new P.V(),
						tracker: new j.J(n.client.globals),
					});
				}
				function y(n) {
					const l = new b.V(new x.E(), g.X).detach(!0);
					return new c.c(n.controller, {
						client: new o.K(n.client.globals, n.client.config),
						store: new C.t(n.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new f.E(),
						profiler: new O.U(),
						logger: new P.V(),
						tracker: new j.J(n.client.globals),
					});
				}
				function D(n) {
					const l = new b.V(new x.E(), g.X).detach();
					return new m.Z(n.controller, {
						client: new o.K(n.client.globals, n.client.config),
						store: new t.Y(n.controller, { urlManager: l }),
						urlManager: l,
						eventManager: new f.E(),
						profiler: new O.U(),
						logger: new P.V(),
						tracker: new j.J(n.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(M, i, e) {
				'use strict';
				e.d(i, { Z: () => c });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const m = 'prism-block',
					c = (o) => {
						const t = (0, a.li)(null);
						return (
							(0, a.vJ)(() => {
								t.current && o.className?.includes('lang-') && !o.className?.includes(m) && window?.Prism?.highlightElement(t.current);
							}, [o.className, o.children, t]),
							(0, s.Y)('code', { ...o, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(M) {
				function i(e) {
					var s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (M.exports = i);
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-TermsList-TermsList-stories.69df311c.iframe.bundle.js.map
