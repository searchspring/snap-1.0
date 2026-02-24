(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[3471],
		{
			'../../node_modules/@searchspring/snap-toolbox/dist/esm/filters/handleize.js'(u, a, t) {
				'use strict';
				t.d(a, { p: () => s });
				function s(l) {
					if (typeof l != 'string') return l;
					let n = l.toLowerCase();
					return (n = n.replace(/[^\w\s]/g, '').trim()), (n = n.replace(/\s/g, '-')), n;
				}
			},
			'./components/src/components/Organisms/NoResults/NoResults.stories.tsx'(u, a, t) {
				'use strict';
				t.r(a), t.d(a, { Default: () => r, WithRecommendations: () => m, __namedExportsOrder: () => v, default: () => o });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/@storybook/blocks/dist/index.mjs'),
					n = t('./components/src/components/Organisms/NoResults/NoResults.tsx'),
					c = t('./components/src/utilities/storybook.tsx'),
					i = t('./components/src/utilities/componentArgs.ts');
				const e = `# NoResults

Renders no results verbiage. Props that accept strings in this component will render HTML contained within them.

## Usage

### contentSlot
The \`contentSlot\` prop provides a slot to provide custom content. This can be JSX, string, or stringified HTML. 

\`\`\`jsx
const slot = <div>Nothing found..</div>

<NoResults contentSlot={slot} />
\`\`\`

### hideSuggestions
The \`hideSuggestions\` prop will prevent the suggestions list and title from rendering.

\`\`\`jsx
<NoResults hideSuggestions={true} />
\`\`\`

### hideContactsTitleText
The \`hideContactsTitleText\` prop allows you to hide the contacts title.

\`\`\`jsx
<NoResults hideContactsTitleText={true} />
\`\`\`

### suggestionsTitleText
The \`suggestionsTitleText\` prop allows you to set the inner text of the suggestions title.

\`\`\`jsx
<NoResults suggestionsTitleText={'suggestions'} />
\`\`\`

### hideSuggestionsTitleText
The \`hideSuggestionsTitleText\` prop allows you to hide the suggestions title.

\`\`\`jsx
<NoResults hideSuggestionsTitleText={true} />
\`\`\`

### suggestionsList
The \`suggestionsList\` prop takes an array of strings to render as suggestions 

\`\`\`jsx
const list = [
	\`Check for misspellings.\`,
	\`Remove possible redundant keywords (ie. "products").\`,
	\`Use other words to describe what you are searching for.\`,
],

<NoResults suggestionsList={list} />
\`\`\`

### hideContact
The \`hideContact\` prop will prevent the contact list and title from rendering.

\`\`\`jsx
<NoResults hideContact={true} />
\`\`\`

### contactsTitleText
The \`contactsTitleText\` prop allows you to set the inner text contacts title.

\`\`\`jsx
<NoResults contactsTitleText={'contacts'} />
\`\`\`

### templates
The \`templates\` prop allows you to configure and display product recommendations when no search results are found. This prop accepts an object with a recommendation key, which can enable or customize the recommendation module.

Example usage:


\`\`\`jsx
const templatesConfig = {
    recommendation: {
      enabled: true,
      component: 'Recommendation', // (optional) custom recommendation component name
      resultComponent: 'Result',   // (optional) custom result component name
      config: {                    // (optional) additional configuration for recommendations
        id: 'my-recs-id',
        tag: 'no-results',
      },
    },
  }

<NoResults templates={templatesConfig} />
\`\`\`

### contactsList
The \`contactsList\` prop takes an array of contact objects to render in the contact section. each object takes a title, and content.

\`\`\`jsx
const list = [
			{
				title: \`Address\`,
				content: \`123 Street Address<br />City, State, Zipcode\`,
			},
			{
				title: \`Hours\`,
				content: \`Monday - Saturday, 00:00am - 00:00pm<br />Sunday, 00:00am - 00:00pm\`,
			},
			{
				title: \`Phone\`,
				content: \`<a href="tel:1234567890">123-456-7890</a>\`,
			},
			{
				title: \`Email\`,
				content: \`<a href="mailto:email@site.com">email@site.com</a>\`,
			},
		],

<NoResults contactsList={list} />
\`\`\`
`,
					o = {
						title: 'Organisms/NoResults',
						component: n.a,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(l.oz, { options: { overrides: { code: c.Z } }, children: e }), (0, s.Y)(l.uY, { story: l.h1 })],
									}),
							},
						},
						decorators: [(_) => (0, s.Y)('div', { style: { maxWidth: '900px' }, children: (0, s.Y)(_, {}) })],
						argTypes: {
							contentSlot: { description: 'Slot for adding custom content', table: { type: { summary: 'string, JSX' } }, control: { type: 'text' } },
							hideSuggestions: {
								description: 'Hide suggestions',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							suggestionsTitleText: {
								description: 'Suggestions title',
								table: { type: { summary: 'string' }, defaultValue: { summary: 'Suggestions' } },
								control: { type: 'text' },
							},
							suggestionsList: {
								description: 'list of suggestions to display',
								table: { type: { summary: 'string[]' } },
								control: { type: 'object', defaultValue: [] },
							},
							hideContact: {
								description: 'Hide contact section',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideContactsTitleText: {
								description: 'Hide contact section title',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideSuggestionsTitleText: {
								description: 'Hide suggestions section title',
								table: { type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							contactsTitleText: {
								description: 'contact section title',
								table: {
									type: { summary: 'string' },
									defaultValue: { summary: `Still can't find what you're looking for? <a href="/contact-us">Contact us</a>.` },
								},
								control: { type: 'text' },
							},
							contactsList: {
								description: 'list of contact lines to display',
								table: { type: { summary: '{ title, content }[]' } },
								control: { type: 'object' },
							},
							templates: { description: 'templates to render', table: { type: { summary: 'object' } }, control: { type: 'object' } },
							...i.F,
						},
					},
					r = (_) => (0, s.Y)(n.a, { ..._ }),
					m = (_) => (0, s.Y)(n.a, { ..._ });
				(m.args = { templates: { recommendation: { enabled: !0 } } }),
					(r.parameters = {
						...r.parameters,
						docs: {
							...r.parameters?.docs,
							source: { originalSource: '(args: NoResultsProps) => <NoResults {...args} />', ...r.parameters?.docs?.source },
						},
					}),
					(m.parameters = {
						...m.parameters,
						docs: {
							...m.parameters?.docs,
							source: { originalSource: '(args: NoResultsProps) => <NoResults {...args} />', ...m.parameters?.docs?.source },
						},
					});
				const v = ['Default', 'WithRecommendations'];
			},
			'./components/src/components/Organisms/NoResults/NoResults.tsx'(u, a, t) {
				'use strict';
				t.d(a, { a: () => w });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/mobx-react-lite/es/index.js'),
					n = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = t('../../node_modules/classnames/index.js'),
					i = t.n(c),
					e = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					o = t('./components/src/providers/snap.tsx'),
					r = t('./components/src/providers/treePath.tsx'),
					m = t('./components/src/utilities/cloneWithProps.tsx'),
					v = t('./components/src/utilities/mergeProps.ts'),
					_ = t('./components/src/utilities/mergeStyles.ts'),
					I = t('../../node_modules/@searchspring/snap-toolbox/dist/esm/filters/handleize.js'),
					O = t('./components/src/hooks/useComponent.tsx'),
					W = t('./components/src/hooks/useCreateController.tsx'),
					B = t('../../node_modules/deepmerge/dist/cjs.js'),
					K = t.n(B),
					k = t('./components/src/hooks/useLang.tsx');
				const Y = ({}) => (0, n.AH)({}),
					w = (0, l.PA)((P) => {
						const H = (0, e.u)(),
							F = (0, r.LU)(),
							V = {
								suggestionsTitleText: 'Suggestions',
								suggestionsList: [
									'Check for misspellings.',
									'Remove possible redundant keywords (ie. "products").',
									'Use other words to describe what you are searching for.',
								],
								templates: { recommendation: { enabled: !0 } },
								treePath: F,
							},
							C = (0, v.v6)('noResults', H, V, P),
							{
								contentSlot: y,
								suggestionsTitleText: E,
								hideSuggestionsTitleText: z,
								hideContactsTitleText: $,
								suggestionsList: h,
								hideContact: J,
								contactsTitleText: R,
								hideSuggestions: Z,
								contactsList: f,
								controller: j,
								templates: b,
								className: X,
								internalClassName: G,
								treePath: Q,
							} = C,
							q = (0, _.Z)(C, Y),
							D = h && Array.isArray(h) && h.length !== 0,
							L = f && Array.isArray(f) && f.length !== 0;
						let M, N, d;
						if (b?.recommendation?.enabled) {
							const p = b?.recommendation?.component || 'Recommendation',
								g = (0, o.uk)();
							if (g?.templates) {
								const ot = P.theme?.name;
								let A;
								ot && (A = g?.templates?.config.theme?.resultComponent);
								const U = b?.recommendation?.resultComponent || A,
									x = Object.assign({ id: '', tag: 'no-results', branch: 'production' }, b.recommendation.config);
								(x.id = x.id || `search-${x.tag}`),
									(d = (0, W.i)(g, 'recommendation', x)),
									!d?.store?.loaded && !d?.store?.loading && d?.store.error?.type !== 'error' && d?.search(),
									U && g?.templates?.library.import.component.result && (N = (0, O.x)(g?.templates?.library.import.component.result, U)),
									p &&
										g?.templates?.library.import.component.recommendation.default &&
										(M = (0, O.x)(g?.templates?.library.import.component.recommendation.default, p));
							}
						}
						const S = M,
							tt = N,
							et = {
								suggestionsTitleText: { value: E },
								suggestionsList: {
									value: `${h ? h.map((p) => `<li class="ss__no-results__suggestions__list__option">${p}</li>`).join('') : void 0}
			`,
								},
								contactsTitleText: { value: R },
								contactsList: {
									value: `${
										f
											? f
													.map(
														(p) =>
															`<div class='ss__no-results__contact__detail ss__no-results__contact__detail--${I.p(
																p.title
															)}'><h4 class="ss__no-results__contact__detail__title">${
																p.title
															}</h4><p class="ss__no-results__contact__detail__content">${p.content}</p></div>`
													)
													.join('')
											: void 0
									}`,
								},
							},
							st = K()(et, C.lang || {}),
							T = (0, k.u)(st, { controller: j });
						return (0, s.FD)('div', {
							className: i()('ss__no-results', X, G),
							...q,
							children: [
								y &&
									(typeof y == 'string'
										? (0, s.Y)('div', { className: 'ss__no-results__slot', dangerouslySetInnerHTML: { __html: y } })
										: (0, s.Y)('div', { className: 'ss__no-results__slot', children: (0, m.Y)(y, { controller: j, treePath: Q }) })),
								!Z &&
									(E || D) &&
									(0, s.FD)('div', {
										className: 'ss__no-results__suggestions',
										children: [
											E && !z && (0, s.Y)('h3', { className: 'ss__no-results__suggestions__title', ...T.suggestionsTitleText?.all }),
											D && (0, s.Y)('ul', { className: 'ss__no-results__suggestions__list', ...T.suggestionsList?.all }),
										],
									}),
								!J &&
									(R || L) &&
									(0, s.FD)('div', {
										className: 'ss__no-results__contact',
										children: [
											R && !$ && (0, s.Y)('h3', { className: 'ss__no-results__contact__title', ...T.contactsTitleText?.all }),
											L && (0, s.Y)('div', { ...T.contactsList?.all }),
										],
									}),
								S && d?.store?.loaded
									? (0, s.Y)('div', {
											className: 'ss__no-results__recommendations',
											children: (0, s.Y)(S, {
												controller: d,
												title: d.store?.profile?.display?.templateParameters?.title,
												resultComponent: tt,
												name: 'noResultsRecommendations',
											}),
									  })
									: null,
							],
						});
					});
			},
			'./components/src/hooks/useComponent.tsx'(u, a, t) {
				'use strict';
				t.d(a, { x: () => l });
				var s = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = (n, c) => {
					const [i, e] = (0, s.J0)(void 0);
					return (
						(0, s.vJ)(() => {
							const o = n[c];
							if (o && typeof o == 'function') {
								const r = o();
								r instanceof Promise
									? r.then((m) => {
											e(() => m);
									  })
									: e(() => r);
							}
						}, []),
						i
					);
				};
			},
			'./components/src/hooks/useCreateController.tsx'(u, a, t) {
				'use strict';
				t.d(a, { i: () => l });
				var s = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = (n, c, i) => {
					const [e, o] = (0, s.J0)(void 0);
					return (
						(0, s.vJ)(() => {
							n.getController(i.id)
								.then((r) => {
									o(r);
								})
								.catch(() => {
									n.createController(c, i).then((r) => {
										o(r);
									});
								});
						}, []),
						e
					);
				};
			},
			'./components/src/hooks/useLang.tsx'(u, a, t) {
				'use strict';
				t.d(a, { u: () => s });
				const s = (l, n) => {
					const c = {};
					return (
						Object.keys(l).forEach((i) => {
							const e = l && l[i],
								o = {};
							e &&
								(e?.value &&
									(typeof e.value == 'function'
										? (o.value = { 'ss-lang': i, dangerouslySetInnerHTML: { __html: e.value(n) } })
										: (o.value = { 'ss-lang': i, dangerouslySetInnerHTML: { __html: e.value } })),
								e?.attributes &&
									Object.keys(e?.attributes).length &&
									((o.attributes = { 'ss-lang': i }),
									e?.attributes?.['aria-label'] &&
										(typeof e.attributes?.['aria-label'] == 'function'
											? (o.attributes['aria-label'] = e.attributes['aria-label'](n))
											: (o.attributes['aria-label'] = e.attributes['aria-label'])),
									e?.attributes?.['aria-valuetext'] &&
										(typeof e.attributes?.['aria-valuetext'] == 'function'
											? (o.attributes['aria-valuetext'] = e.attributes['aria-valuetext'](n))
											: (o.attributes['aria-valuetext'] = e.attributes['aria-valuetext'])),
									e?.attributes?.title &&
										(typeof e.attributes?.title == 'function'
											? (o.attributes.title = e.attributes.title(n))
											: (o.attributes.title = e.attributes.title)),
									e?.attributes?.alt &&
										(typeof e.attributes?.alt == 'function' ? (o.attributes.alt = e.attributes.alt(n)) : (o.attributes.alt = e.attributes.alt)),
									e?.attributes?.placeholder &&
										(typeof e.attributes?.placeholder == 'function'
											? (o.attributes.placeholder = e.attributes.placeholder(n))
											: (o.attributes.placeholder = e.attributes.placeholder))),
								(o.all = { ...o.value, ...o.attributes, 'ss-lang': i })),
								(c[i] = o);
						}),
						c
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(u, a, t) {
				'use strict';
				t.d(a, { F: () => s });
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
			'./components/src/utilities/storybook.tsx'(u, a, t) {
				'use strict';
				t.d(a, { Z: () => c });
				var s = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					c = (i) => {
						const e = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								e.current && i.className?.includes('lang-') && !i.className?.includes(n) && window?.Prism?.highlightElement(e.current);
							}, [i.className, i.children, e]),
							(0, s.Y)('code', { ...i, ref: e, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(u) {
				function a(t) {
					var s = new Error("Cannot find module '" + t + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (u.exports = a);
			},
		},
	]);
})();

//# sourceMappingURL=components-Organisms-NoResults-NoResults-stories.76747ec9.iframe.bundle.js.map
