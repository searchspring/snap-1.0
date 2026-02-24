(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[9235],
		{
			'./components/src/components/Molecules/Terms/Terms.stories.tsx'(b, a, e) {
				'use strict';
				e.r(a), e.d(a, { Default: () => g, __namedExportsOrder: () => O, default: () => D });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					c = e('./components/src/utilities/storybook.tsx'),
					p = e('./components/src/utilities/componentArgs.ts'),
					o = e('./components/src/components/Molecules/Terms/Terms.tsx');
				const t = `# Terms

Renders a list of terms for autocomplete. 

## Usage

### Controller

The \`controller\` prop specifies a reference to the autocomplete controller.

\`\`\`jsx
<Terms controller={controller} terms={terms}/>
\`\`\`

### Terms

The \`terms\` prop specifies a reference to an autocomplete term store.

\`\`\`jsx
<Terms controller={controller} terms={terms} />
\`\`\`

### title

The \`title\` prop is will display the given text above the terms area. The default value is blank. 

\`\`\`jsx
<Terms controller={controller} terms={terms} title={'Suggestions'}/>
\`\`\`

### vertical

The \`vertical\` prop is will specifies if the terms should render vertically.

\`\`\`jsx
<Terms controller={controller} terms={terms} vertical={true}/>
\`\`\`

### limit

The \`limit\` prop is used to determine the number of terms to render. Please note that this does not limit the number of terms fetched by the controller.  

\`\`\`jsx
<Terms controller={controller} terms={terms} limit={4}/>
\`\`\`

### previewOnHover

The \`previewOnFocus\` prop will invoke the \`term.preview()\` method when the value has been hovered over.

\`\`\`jsx
<Terms controller={controller} terms={terms} previewOnHover={true}/>
\`\`\`

### emify

The \`emify\` will automatically wrap non-matching characters within the term with an \`<em>\` element for different styling purposes. 

\`\`\`jsx
<Terms controller={controller} terms={terms} emify={true}/>
\`\`\`

### onTermClick

The \`onTermClick\` prop allows for a custom callback function for when a term value is clicked. The function is passed the clicked terms reference in the term store. 

\`\`\`jsx
<Terms controller={controller} terms={terms} onTermClick={(e, term)=>{console.log(e, term)}}/>
\`\`\`
`;
				var l = e('./components/src/utilities/snapify.ts');
				const D = {
						title: 'Molecules/Terms',
						component: o.i,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(i.oz, { options: { overrides: { code: c.Z } }, children: t }), (0, s.Y)(i.uY, { story: i.h1 })],
									}),
							},
						},
						decorators: [(f) => (0, s.Y)('div', { style: { maxWidth: '900px', position: 'relative' }, children: (0, s.Y)(f, {}) })],
						argTypes: {
							controller: {
								description: 'autocomplete controller reference',
								type: { required: !0 },
								table: { type: { summary: 'autocomplete controller object' } },
								control: { type: 'none' },
							},
							terms: {
								description: 'autocomplete term store reference',
								type: { required: !0 },
								table: { type: { summary: 'autocomplete term store object' } },
								control: { type: 'none' },
							},
							title: { description: 'terms title', type: { required: !1 }, table: { type: { summary: 'string' } }, control: { type: 'text' } },
							limit: {
								description: 'adjust the number of terms to show',
								type: { required: !1 },
								table: { type: { summary: 'number' } },
								control: { type: 'number' },
							},
							previewOnHover: {
								description: 'invoke term preview upon focus',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							emIfy: {
								description: 'highlight the query matched section of the term',
								table: { type: { summary: 'boolean' } },
								control: { type: 'boolean' },
							},
							onTermClick: {
								description: 'custom onClick event handler for Terms',
								table: { type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onTermClick',
							},
							vertical: {
								description: 'boolean to adjust if each term should render in a vertically',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							...p.F,
						},
					},
					w = l.p.autocomplete({
						id: 'Autocomplete-Terms',
						selector: '#searchInput2',
						globals: { siteId: 'atkzs2' },
						settings: { trending: { limit: 5 } },
					}),
					g = (f, { loaded: { controller: y } }) => {
						const T = [
							{ active: !1, preview: () => console.log(''), value: 'dress', url: { href: 'www.dress.com' } },
							{ active: !1, preview: () => console.log(''), value: 'drss', url: { href: 'www.drss.com' } },
							{ active: !1, preview: () => console.log(''), value: 'dreees', url: { href: 'www.dreees.com' } },
							{ active: !1, preview: () => console.log(''), value: 'dres', url: { href: 'www.dres.com' } },
							{ active: !1, preview: () => console.log(''), value: 'dss', url: { href: 'www.dss.com' } },
							{ active: !1, preview: () => console.log(''), value: 'ress', url: { href: 'www.ress.com' } },
						];
						return (
							setTimeout(() => {
								y.bind();
							}),
							(0, s.Y)(o.i, { ...f, controller: y, terms: T })
						);
					};
				(g.loaders = [async () => ({ controller: await w })]),
					(g.parameters = {
						...g.parameters,
						docs: {
							...g.parameters?.docs,
							source: {
								originalSource: `(args: TermsProps, {
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
  return <Terms {...args} controller={controller} terms={mockTerms} />;
}`,
								...g.parameters?.docs?.source,
							},
						},
					});
				const O = ['Default'];
			},
			'./components/src/components/Molecules/Terms/Terms.tsx'(b, a, e) {
				'use strict';
				e.d(a, { i: () => L });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/dist/preact.module.js'),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					p = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = e('../../node_modules/classnames/index.js'),
					t = e.n(o),
					l = e('./components/src/providers/cache.tsx'),
					D = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					w = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					g = e('./components/src/utilities/mergeProps.ts'),
					O = e('./components/src/utilities/mergeStyles.ts'),
					f = e('./components/src/hooks/useLang.tsx'),
					y = e('../../node_modules/deepmerge/dist/cjs.js'),
					T = e.n(y);
				const x = ({ vertical: d, theme: h }) =>
						(0, p.AH)({
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
									'&.ss__terms__option--active': { a: { fontWeight: 'bold', color: h?.variables?.colors?.primary } },
								},
							},
						}),
					v = (d) => d?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
					C = (d, h) => {
						if (d && h) {
							const M = d.match(v(h));
							if (h && d && M && typeof M.index == 'number') {
								const r = d.slice(0, M.index),
									n = d.slice(M.index + h.length, d.length);
								return `${r ? `<em>${r}</em>` : ''}${h}${n ? `<em>${n}</em>` : ''}`;
							}
						}
						return `<em>${d}</em>`;
					},
					L = (0, c.PA)((d) => {
						const h = (0, D.u)(),
							M = { vertical: !0, previewOnHover: !0 },
							r = (0, g.v6)('terms', h, M, d),
							{ title: n, onTermClick: m, limit: _, previewOnHover: u, emIfy: P, className: R, internalClassName: K, controller: j } = r,
							W = j?.store?.state?.input,
							I = r.terms,
							B = (0, O.Z)(r, x),
							S = (E, A) => {
								m && m(E, A), j?.setFocused && j?.setFocused();
							},
							U = _ ? I?.slice(0, _) : I,
							N = { title: { value: n } },
							Y = T()(N, r.lang || {}),
							$ = (0, f.u)({ title: Y.title }, { controller: j });
						return U?.length
							? (0, s.Y)(l._, {
									children: (0, s.FD)('div', {
										...B,
										className: t()('ss__terms', R, K),
										children: [
											n ? (0, s.Y)('div', { className: 'ss__terms__title', children: (0, s.Y)('h5', { ...$.title.all }) }) : null,
											(0, s.Y)('ul', {
												className: 'ss__terms__options',
												'aria-label': n,
												children: U?.map((E, A) => {
													const H = {
															term: {
																value: `${P ? C(E.value, W || '') : E.value}`,
																attributes: { 'aria-label': `${n || ''} item ${A + 1} of ${U.length}, ${E.value}` },
															},
														},
														k = T()(H, r.lang || {}),
														V = (0, f.u)({ term: k.term }, { index: A, numberOfTerms: U.length, term: E });
													return (0, s.Y)('li', {
														className: t()('ss__terms__option', { 'ss__terms__option--active': E.active }),
														children: (0, s.Y)('a', { onClick: (F) => S(F, E), href: E.url.href, ...(u ? (0, w.l)(E.preview) : {}), ...V.term?.all }),
													});
												}),
											}),
										],
									}),
							  })
							: (0, s.Y)(i.FK, {});
					});
			},
			'./components/src/hooks/useLang.tsx'(b, a, e) {
				'use strict';
				e.d(a, { u: () => s });
				const s = (i, c) => {
					const p = {};
					return (
						Object.keys(i).forEach((o) => {
							const t = i && i[o],
								l = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (l.value = { 'ss-lang': o, dangerouslySetInnerHTML: { __html: t.value(c) } })
										: (l.value = { 'ss-lang': o, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((l.attributes = { 'ss-lang': o }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (l.attributes['aria-label'] = t.attributes['aria-label'](c))
											: (l.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (l.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](c))
											: (l.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (l.attributes.title = t.attributes.title(c))
											: (l.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (l.attributes.alt = t.attributes.alt(c)) : (l.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (l.attributes.placeholder = t.attributes.placeholder(c))
											: (l.attributes.placeholder = t.attributes.placeholder))),
								(l.all = { ...l.value, ...l.attributes, 'ss-lang': o })),
								(p[o] = l);
						}),
						p
					);
				};
			},
			'./components/src/toolbox/createHoverProps/createHoverProps.ts'(b, a, e) {
				'use strict';
				e.d(a, { l: () => s });
				const s = (i, c = { delay: 333, focusElem: !0 }) => {
					let p;
					return {
						onMouseEnter: (o) => {
							clearTimeout(p),
								(p = window.setTimeout(() => {
									c.focusElem && o.target.focus(), i && i();
								}, c.delay || 333));
						},
						onMouseLeave: () => {
							clearTimeout(p);
						},
					};
				};
			},
			'./components/src/utilities/componentArgs.ts'(b, a, e) {
				'use strict';
				e.d(a, { F: () => s });
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
			'./components/src/utilities/snapify.ts'(b, a, e) {
				'use strict';
				e.d(a, { p: () => L });
				var s = e('../../node_modules/mobx/dist/mobx.esm.js'),
					i = e('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					c = e('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					p = e('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					o = e('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					l = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					D = e('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					w = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					g = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					O = e('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					f = e('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					y = e('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					T = e('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					x = e('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, s.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const v = {},
					C = { globals: { siteId: '8uyt2m' } };
				class L {
					static recommendation(n) {
						const m = n.id;
						if (v[m]) return v[m];
						const _ = (v[m] = h({ client: C, controller: n }));
						return (
							_.on('afterStore', async ({ controller: u }, P) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await P();
							}),
							_.init(),
							_
						);
					}
					static autocomplete(n) {
						const m = n.id;
						if (v[m]) return v[m];
						const _ = (v[m] = M({ client: C, controller: n }));
						return (
							_.on('afterStore', async ({ controller: u }, P) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await P();
							}),
							_.init(),
							_
						);
					}
					static search(n) {
						const m = n.id;
						if (v[m]) return v[m];
						const _ = (v[m] = d({ client: C, controller: n }));
						return (
							_.on('afterStore', async ({ controller: u }, P) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await P();
							}),
							_.init(),
							_
						);
					}
				}
				function d(r) {
					const n = new w.V(new O.E({ settings: { coreType: 'query', corePrefix: r.controller.id } }), g.X);
					return new i.Tp(r.controller, {
						client: new o.K(r.client.globals, r.client.config),
						store: new l.U(r.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new f.E(),
						profiler: new y.U(),
						logger: new T.V(),
						tracker: new x.J(r.client.globals),
					});
				}
				function h(r) {
					const n = new w.V(new O.E(), g.X).detach(!0);
					return new p.c(r.controller, {
						client: new o.K(r.client.globals, r.client.config),
						store: new D.t(r.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new f.E(),
						profiler: new y.U(),
						logger: new T.V(),
						tracker: new x.J(r.client.globals),
					});
				}
				function M(r) {
					const n = new w.V(new O.E(), g.X).detach();
					return new c.Z(r.controller, {
						client: new o.K(r.client.globals, r.client.config),
						store: new t.Y(r.controller, { urlManager: n }),
						urlManager: n,
						eventManager: new f.E(),
						profiler: new y.U(),
						logger: new T.V(),
						tracker: new x.J(r.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(b, a, e) {
				'use strict';
				e.d(a, { Z: () => p });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = 'prism-block',
					p = (o) => {
						const t = (0, i.li)(null);
						return (
							(0, i.vJ)(() => {
								t.current && o.className?.includes('lang-') && !o.className?.includes(c) && window?.Prism?.highlightElement(t.current);
							}, [o.className, o.children, t]),
							(0, s.Y)('code', { ...o, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(b) {
				function a(e) {
					var s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (b.exports = a);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Terms-Terms-stories.1b0618fd.iframe.bundle.js.map
