(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9235],
		{
			'./components/src/components/Molecules/Terms/Terms.stories.tsx'(b, l, e) {
				'use strict';
				e.r(l), e.d(l, { Default: () => v, __namedExportsOrder: () => M, default: () => P });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					u = e('./components/src/utilities/storybook.tsx'),
					_ = e('./components/src/utilities/componentArgs.ts'),
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
				var a = e('./components/src/utilities/snapify.ts'),
					j = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const P = {
						title: 'Molecules/Terms',
						component: o.i,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, r.FD)('div', {
										children: [(0, r.Y)(i.oz, { options: { overrides: { code: u.Z } }, children: t }), (0, r.Y)(i.uY, { story: i.h1 })],
									}),
							},
						},
						decorators: [(T) => (0, r.Y)('div', { style: { maxWidth: '900px', position: 'relative' }, children: (0, r.Y)(T, {}) })],
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
							title: {
								description: 'terms title',
								type: { required: !1 },
								table: { type: { summary: 'string' }, category: 'Templates Legal' },
								control: { type: 'text' },
							},
							limit: {
								description: 'adjust the number of terms to show',
								type: { required: !1 },
								table: { type: { summary: 'number' }, category: 'Templates Legal' },
								control: { type: 'number' },
							},
							previewOnHover: {
								description: 'invoke term preview upon focus',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							emIfy: {
								description: 'highlight the query matched section of the term',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal' },
								control: { type: 'boolean' },
							},
							onTermClick: {
								description: 'custom onClick event handler for Terms',
								table: { type: { summary: 'function' }, category: 'Templates Legal' },
								control: { type: 'none' },
								action: 'onTermClick',
							},
							vertical: {
								description: 'boolean to adjust if each term should render in a vertically',
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							..._.F,
						},
					},
					O = a.p.autocomplete({
						id: 'Autocomplete-Terms',
						selector: '#searchInput2',
						globals: { siteId: 'atkzs2' },
						settings: { trending: { limit: 5 } },
					}),
					v = (T, { loaded: { controller: E } }) => {
						const [f, m] = (0, j.J0)(!1),
							x = [
								{ active: f === 'dress', preview: () => m('dress'), value: 'dress', url: { href: '#' } },
								{ active: f === 'shirt', preview: () => m('shirt'), value: 'shirt', url: { href: '#' } },
								{ active: f === 'shoes', preview: () => m('shoes'), value: 'shoes', url: { href: '#' } },
								{ active: f === 'hat', preview: () => m('hat'), value: 'hat', url: { href: '#' } },
								{ active: f === 'pants', preview: () => m('pants'), value: 'pants', url: { href: '#' } },
								{ active: f === 'socks', preview: () => m('socks'), value: 'socks', url: { href: '#' } },
							];
						return (
							setTimeout(() => {
								E.bind();
							}),
							(0, r.Y)(o.i, { ...T, controller: E, terms: x })
						);
					};
				(v.loaders = [async () => ({ controller: await O })]),
					(v.parameters = {
						...v.parameters,
						docs: {
							...v.parameters?.docs,
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
  setTimeout(() => {
    controller.bind();
  });
  return <Terms {...args} controller={controller} terms={mockTerms} />;
}`,
								...v.parameters?.docs?.source,
							},
						},
					});
				const M = ['Default'];
			},
			'./components/src/components/Molecules/Terms/Terms.tsx'(b, l, e) {
				'use strict';
				e.d(l, { i: () => S });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/mobx-react-lite/es/index.js'),
					u = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					_ = e('../../node_modules/classnames/index.js'),
					o = e.n(_),
					t = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					j = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					O = e('./components/src/utilities/mergeProps.ts'),
					v = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/hooks/useLang.tsx'),
					T = e('../../node_modules/deepmerge/dist/cjs.js'),
					E = e.n(T);
				const f = ({ vertical: p, theme: g }) =>
						(0, u.AH)({
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
								flexDirection: p ? 'column' : 'row',
								flexWrap: 'wrap',
								padding: '0px',
								'.ss__terms__option': {
									listStyle: 'none',
									padding: '10px',
									wordBreak: 'break-all',
									a: { display: 'block', em: { fontStyle: 'normal' } },
									'&.ss__terms__option--active': { a: { fontWeight: 'bold', color: g?.variables?.colors?.primary } },
								},
							},
						}),
					m = (p) => p?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
					x = (p, g) => {
						if (p && g) {
							const D = p.match(m(g));
							if (g && p && D && typeof D.index == 'number') {
								const n = p.slice(0, D.index),
									s = p.slice(D.index + g.length, p.length);
								return `${n ? `<em>${n}</em>` : ''}${g}${s ? `<em>${s}</em>` : ''}`;
							}
						}
						return `<em>${p}</em>`;
					},
					S = (0, i.PA)((p) => {
						const g = (0, a.u)(),
							n = { vertical: !0, previewOnHover: !0, treePath: (0, j.LU)() },
							s = (0, O.v6)('terms', g, n, p),
							{ title: c, onTermClick: h, limit: d, previewOnHover: C, emIfy: I, className: R, internalClassName: K, controller: L } = s,
							W = L?.store?.state?.input,
							A = s.terms,
							B = (0, v.Z)(s, f),
							k = (y, U) => {
								h && h(y, U), L?.setFocused && L?.setFocused();
							},
							w = d ? A?.slice(0, d) : A,
							N = { title: { value: c } },
							Y = E()(N, s.lang || {}),
							$ = (0, M.u)({ title: Y.title }, { controller: L });
						return w?.length
							? (0, r.Y)(t._, {
									children: (0, r.FD)('div', {
										...B,
										className: o()('ss__terms', R, K),
										children: [
											c ? (0, r.Y)('div', { className: 'ss__terms__title', children: (0, r.Y)('h5', { ...$.title.all }) }) : null,
											(0, r.Y)('ul', {
												className: 'ss__terms__options',
												'aria-label': c,
												children: w?.map((y, U) => {
													const H = {
															term: {
																value: `${I ? x(y.value, W || '') : y.value}`,
																attributes: { 'aria-label': `${c || ''} item ${U + 1} of ${w.length}, ${y.value}` },
															},
														},
														V = E()(H, s.lang || {}),
														F = (0, M.u)({ term: V.term }, { index: U, numberOfTerms: w.length, term: y });
													return (0, r.Y)('li', {
														className: o()('ss__terms__option', { 'ss__terms__option--active': y.active }),
														children: (0, r.Y)('a', { onClick: (J) => k(J, y), href: y.url.href, ...(C ? (0, P.l)(y.preview) : {}), ...F.term?.all }),
													});
												}),
											}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/hooks/useLang.tsx'(b, l, e) {
				'use strict';
				e.d(l, { u: () => r });
				const r = (i, u) => {
					const _ = {};
					return (
						Object.keys(i).forEach((o) => {
							const t = i && i[o],
								a = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (a.value = { 'ss-lang': o, dangerouslySetInnerHTML: { __html: t.value(u) } })
										: (a.value = { 'ss-lang': o, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((a.attributes = { 'ss-lang': o }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (a.attributes['aria-label'] = t.attributes['aria-label'](u))
											: (a.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (a.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](u))
											: (a.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (a.attributes.title = t.attributes.title(u))
											: (a.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (a.attributes.alt = t.attributes.alt(u)) : (a.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (a.attributes.placeholder = t.attributes.placeholder(u))
											: (a.attributes.placeholder = t.attributes.placeholder))),
								(a.all = { ...a.value, ...a.attributes, 'ss-lang': o })),
								(_[o] = a);
						}),
						_
					);
				};
			},
			'./components/src/toolbox/createHoverProps/createHoverProps.ts'(b, l, e) {
				'use strict';
				e.d(l, { l: () => r });
				const r = (i, u = { delay: 333, focusElem: !0 }) => {
					let _;
					return {
						onMouseEnter: (o) => {
							clearTimeout(_),
								(_ = window.setTimeout(() => {
									u.focusElem && o.target.focus(), i && i();
								}, u.delay || 333));
						},
						onMouseLeave: () => {
							clearTimeout(_);
						},
					};
				};
			},
			'./components/src/utilities/componentArgs.ts'(b, l, e) {
				'use strict';
				e.d(l, { F: () => r });
				const r = {
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
			'./components/src/utilities/snapify.ts'(b, l, e) {
				'use strict';
				e.d(l, { p: () => S });
				var r = e('../../node_modules/mobx/dist/mobx.esm.js'),
					i = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					u = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					_ = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					o = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					a = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					j = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					P = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					O = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					v = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					M = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					T = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					E = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					f = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, r.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const m = {},
					x = { globals: { siteId: 'atkzs2' } };
				class S {
					static recommendation(s) {
						const c = s.id;
						if (m[c]) return m[c];
						const h = (m[c] = g({ client: x, controller: s }));
						return (
							h.on('afterStore', async ({ controller: d }, C) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await C();
							}),
							h.init(),
							h
						);
					}
					static autocomplete(s) {
						const c = s.id;
						if (m[c]) return m[c];
						const h = (m[c] = D({ client: x, controller: s }));
						return (
							h.on('afterStore', async ({ controller: d }, C) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await C();
							}),
							h.init(),
							h
						);
					}
					static search(s) {
						const c = s.id;
						if (m[c]) return m[c];
						const h = (m[c] = p({ client: x, controller: s }));
						return (
							h.on('afterStore', async ({ controller: d }, C) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await C();
							}),
							h.init(),
							h
						);
					}
				}
				function p(n) {
					const s = new P.V(new v.E({ settings: { coreType: 'query', corePrefix: n.controller.id } }), O.X);
					return new i.Tp(n.controller, {
						client: new o.K(n.client.globals, n.client.config),
						store: new a.U(n.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new M.E(),
						profiler: new T.U(),
						logger: new E.V(),
						tracker: new f.J(n.client.globals),
					});
				}
				function g(n) {
					const s = new P.V(new v.E(), O.X).detach(!0);
					return new _.c(n.controller, {
						client: new o.K(n.client.globals, n.client.config),
						store: new j.t(n.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new M.E(),
						profiler: new T.U(),
						logger: new E.V(),
						tracker: new f.J(n.client.globals),
					});
				}
				function D(n) {
					const s = new P.V(new v.E(), O.X).detach();
					return new u.Z(n.controller, {
						client: new o.K(n.client.globals, n.client.config),
						store: new t.Y(n.controller, { urlManager: s }),
						urlManager: s,
						eventManager: new M.E(),
						profiler: new T.U(),
						logger: new E.V(),
						tracker: new f.J(n.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(b, l, e) {
				'use strict';
				e.d(l, { Z: () => _ });
				var r = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const u = 'prism-block',
					_ = (o) => {
						const t = (0, i.li)(null);
						return (
							(0, i.vJ)(() => {
								t.current && o.className?.includes('lang-') && !o.className?.includes(u) && window?.Prism?.highlightElement(t.current);
							}, [o.className, o.children, t]),
							(0, r.Y)('code', { ...o, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(b) {
				function l(e) {
					var r = new Error("Cannot find module '" + e + "'");
					throw ((r.code = 'MODULE_NOT_FOUND'), r);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (b.exports = l);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Terms-Terms-stories.06bed5bb.iframe.bundle.js.map
