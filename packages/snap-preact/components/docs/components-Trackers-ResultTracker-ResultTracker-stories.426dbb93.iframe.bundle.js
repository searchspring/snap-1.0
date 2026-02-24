(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[7643],
		{
			'./components/src/components/Trackers/ResultTracker/ResultTracker.stories.tsx'(M, i, t) {
				'use strict';
				t.r(i), t.d(i, { Default: () => g, __namedExportsOrder: () => E, default: () => R });
				var o = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = t('../../node_modules/@storybook/blocks/dist/index.mjs'),
					u = t('./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'),
					r = t('./components/src/utilities/storybook.tsx'),
					e = t('./components/src/utilities/componentArgs.ts');
				const s =
					"# ResultTracker\n\nAdds impression, render and click tracking to an individual result within a controller. When using the Results component, it will already contain this component.\n\nThis component is used for Beacon 2.0 tracking and replaces the need for using the `RecommendationResultTracker` as well as the `RecommendationProfileTracker`.\n\n## Usage\n```jsx\nimport { ResultTracker } from '@searchspring/snap-preact-components';\n```\n\n### controller\nThe required `controller` prop specifies a reference to a Controller object.\n\n```jsx\n<ResultTracker controller={controller} result={result}>\n	<Result result={result}></Result>\n</ResultTracker>\n```\n\n### children\nThe required `children` prop specifies the contents of the result component (the tracker is a wrapper around this). \n\n```jsx\n<ResultTracker controller={controller} result={result}>\n	<Result result={result}></Result>\n</ResultTracker>\n```\n\n### result\nThe required `result` prop specifies a reference to a product object from the `results` store array. This reference is used when gathering the required data to track.\n\n```jsx\n<ResultTracker controller={controller} result={result}>\n	<Result result={result}></Result>\n</ResultTracker>\n```\n\n### track\nThe `track` prop is an object that allows for the disabling of parts of the tracking functionality. The keys are `render`, `impression` and `click` - setting them to false prevents the tracking event for the result. The following example would disable all events except for the click tracking.\n\n```jsx\n<ResultTracker controller={controller} result={result} track={{ render: false, impression: false }}>\n	<Result result={result}></Result>\n</ResultTracker>\n```\n";
				var n = t('./components/src/utilities/snapify.ts'),
					c = t('./components/src/components/Molecules/Result/Result.tsx');
				const R = {
						title: 'Trackers/Result',
						component: u.o,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(p.oz, { options: { overrides: { code: r.Z } }, children: s }), (0, o.Y)(p.uY, { story: p.h1 })],
									}),
							},
						},
						decorators: [(d) => (0, o.Y)('div', { style: { maxWidth: '250px' }, children: (0, o.Y)(d, {}) })],
						argTypes: {
							controller: {
								description: 'Controller reference',
								type: { required: !0 },
								table: { type: { summary: 'Controller' } },
								control: { type: 'none' },
							},
							result: {
								description: 'Result store Product reference',
								type: { required: !0 },
								table: { type: { summary: 'result store Product object' } },
								control: { type: 'none' },
							},
							...e.F,
						},
					},
					y = n.p.search({ id: 'SearchResultTracker', globals: { siteId: 'atkzs2', search: { query: { string: '*' } } } }),
					g = (d, { loaded: { controller: v } }) => {
						const P = v?.store?.results[0];
						return (0, o.Y)(u.o, { ...d, controller: v, result: P, children: (0, o.Y)(c.Q, { result: P }) });
					};
				(g.loaders = [async () => (await y.search(), { controller: y })]),
					(g.parameters = {
						...g.parameters,
						docs: {
							...g.parameters?.docs,
							source: {
								originalSource: `(props: ResultTrackerProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  const firstResult = controller?.store?.results[0] as Product;
  return <ResultTracker {...props} controller={controller} result={firstResult}>
            <Result result={firstResult} />
        </ResultTracker>;
}`,
								...g.parameters?.docs?.source,
							},
						},
					});
				const E = ['Default'];
			},
			'./components/src/components/Trackers/ResultTracker/ResultTracker.tsx'(M, i, t) {
				'use strict';
				t.d(i, { o: () => y });
				var o = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = t('../../node_modules/mobx-react/dist/mobxreact.esm.js'),
					r = t('../../node_modules/classnames/index.js'),
					e = t.n(r),
					s = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					n = t('./components/src/utilities/mergeProps.ts'),
					c = t('./components/src/utilities/createImpressionObserver.ts');
				const R = { ResultTracker: () => (0, p.AH)({}) },
					y = (0, u.PA)((g) => {
						const E = (0, s.u)(),
							d = (0, n.v6)('resultTracker', E, {}, g),
							v = { impression: !0, click: !0 },
							{ children: P, result: f, track: I, controller: _, className: O, internalClassName: D, disableStyles: j, style: l } = d,
							a = { ...v, ...I },
							{ ref: h, inViewport: T } = (0, c.Q)();
						T && a.impression && _?.track.product.impression(f);
						const m = {};
						return (
							j ? l && (m.css = [l]) : (m.css = [R.ResultTracker(), l]),
							(0, o.Y)('div', {
								className: e()('ss__result-tracker', `ss__${_?.type}-result-tracker`, O, D),
								onClick: (k) => {
									a.click && _?.track.product.click(k, f);
								},
								ref: h,
								...m,
								children: P,
							})
						);
					});
			},
			'./components/src/hooks/useIntersectionAdvanced.tsx'(M, i, t) {
				'use strict';
				t.d(i, { v: () => u });
				var o = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const p = 250,
					u = (e, s = {}) => {
						const { rootMargin: n = '0px', fireOnce: c = !1, threshold: R = 0, minVisibleTime: y = 0 } = s,
							[g, E] = (0, o.J0)(!1),
							d = (0, o.li)(null),
							v = (0, o.li)(null),
							[P, f] = (0, o.J0)(0),
							I = (0, o.hb)((_) => {
								(e.current = _), f((O) => O + 1);
							}, []);
						return (
							(0, o.vJ)(() => {
								E(!1);
								let _ = null,
									O = null;
								if (!window.IntersectionObserver || !e.current) return;
								const D = () => {
										O && (window.clearInterval(O), (O = null));
									},
									j = () => {
										y > 0
											? ((v.current = Date.now()),
											  d.current && window.clearTimeout(d.current),
											  (d.current = window.setTimeout(() => {
													E(!0), c && e.current && _ && _.unobserve(e.current);
											  }, y)))
											: (E(!0), c && e.current && _ && _.unobserve(e.current));
									},
									l = () => {
										d.current && window.clearTimeout(d.current), (d.current = null), (v.current = null), E(!1);
									};
								return (
									(_ = new IntersectionObserver(
										([a]) => {
											a.isIntersecting
												? e.current && r(e.current)
													? (D(), j())
													: (l(),
													  O ||
															(O = window.setInterval(() => {
																if (!e.current) {
																	D();
																	return;
																}
																r(e.current) && (D(), j());
															}, p)))
												: (D(), l());
										},
										{ rootMargin: n, threshold: R }
									)),
									e.current && _.observe(e.current),
									() => {
										E(!1), D(), d.current && window.clearTimeout(d.current), _ && e.current && _.unobserve(e.current);
									}
								);
							}, [e, P]),
							{ inViewport: g, updateRef: I }
						);
					};
				function r(e) {
					return e && 'checkVisibility' in e ? e.checkVisibility({ contentVisibilityAuto: !0, opacityProperty: !0, visibilityProperty: !0 }) : !0;
				}
			},
			'./components/src/utilities/componentArgs.ts'(M, i, t) {
				'use strict';
				t.d(i, { F: () => o });
				const o = {
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
			'./components/src/utilities/createImpressionObserver.ts'(M, i, t) {
				'use strict';
				t.d(i, { Q: () => e });
				var o = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					p = t('./components/src/hooks/useIntersectionAdvanced.tsx');
				const u = 0.7,
					r = 1e3;
				function e(s) {
					const n = (0, o.li)(null),
						{ inViewport: c, updateRef: R } = (0, p.v)(n, { ...s, fireOnce: !0, threshold: u, minVisibleTime: r });
					return { ref: n, inViewport: c, updateRef: R };
				}
			},
			'./components/src/utilities/snapify.ts'(M, i, t) {
				'use strict';
				t.d(i, { p: () => _ });
				var o = t('../../node_modules/mobx/dist/mobx.esm.js'),
					p = t('../../node_modules/@searchspring/snap-controller/dist/esm/Search/SearchController.js'),
					u = t('../../node_modules/@searchspring/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					r = t('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					e = t('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					s = t('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					n = t('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					c = t('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					R = t('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					y = t('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					g = t('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					E = t('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					d = t('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					v = t('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					P = t('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const f = {},
					I = { globals: { siteId: '8uyt2m' } };
				class _ {
					static recommendation(a) {
						const h = a.id;
						if (f[h]) return f[h];
						const T = (f[h] = D({ client: I, controller: a }));
						return (
							T.on('afterStore', async ({ controller: m }, k) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await k();
							}),
							T.init(),
							T
						);
					}
					static autocomplete(a) {
						const h = a.id;
						if (f[h]) return f[h];
						const T = (f[h] = j({ client: I, controller: a }));
						return (
							T.on('afterStore', async ({ controller: m }, k) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await k();
							}),
							T.init(),
							T
						);
					}
					static search(a) {
						const h = a.id;
						if (f[h]) return f[h];
						const T = (f[h] = O({ client: I, controller: a }));
						return (
							T.on('afterStore', async ({ controller: m }, k) => {
								m.log.debug('controller', m), m.log.debug('store', m.store.toJSON()), await k();
							}),
							T.init(),
							T
						);
					}
				}
				function O(l) {
					const a = new R.V(new g.E({ settings: { coreType: 'query', corePrefix: l.controller.id } }), y.X);
					return new p.Tp(l.controller, {
						client: new e.K(l.client.globals, l.client.config),
						store: new n.U(l.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new E.E(),
						profiler: new d.U(),
						logger: new v.V(),
						tracker: new P.J(l.client.globals),
					});
				}
				function D(l) {
					const a = new R.V(new g.E(), y.X).detach(!0);
					return new r.c(l.controller, {
						client: new e.K(l.client.globals, l.client.config),
						store: new c.t(l.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new E.E(),
						profiler: new d.U(),
						logger: new v.V(),
						tracker: new P.J(l.client.globals),
					});
				}
				function j(l) {
					const a = new R.V(new g.E(), y.X).detach();
					return new u.Z(l.controller, {
						client: new e.K(l.client.globals, l.client.config),
						store: new s.Y(l.controller, { urlManager: a }),
						urlManager: a,
						eventManager: new E.E(),
						profiler: new d.U(),
						logger: new v.V(),
						tracker: new P.J(l.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(M, i, t) {
				'use strict';
				t.d(i, { Z: () => r });
				var o = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					p = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const u = 'prism-block',
					r = (e) => {
						const s = (0, p.li)(null);
						return (
							(0, p.vJ)(() => {
								s.current && e.className?.includes('lang-') && !e.className?.includes(u) && window?.Prism?.highlightElement(s.current);
							}, [e.className, e.children, s]),
							(0, o.Y)('code', { ...e, ref: s, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/dequal/dist/index.mjs'(M, i, t) {
				'use strict';
				t.d(i, { j: () => u });
				var o = Object.prototype.hasOwnProperty;
				function p(r, e, s) {
					for (s of r.keys()) if (u(s, e)) return s;
				}
				function u(r, e) {
					var s, n, c;
					if (r === e) return !0;
					if (r && e && (s = r.constructor) === e.constructor) {
						if (s === Date) return r.getTime() === e.getTime();
						if (s === RegExp) return r.toString() === e.toString();
						if (s === Array) {
							if ((n = r.length) === e.length) for (; n-- && u(r[n], e[n]); );
							return n === -1;
						}
						if (s === Set) {
							if (r.size !== e.size) return !1;
							for (n of r) if (((c = n), (c && typeof c == 'object' && ((c = p(e, c)), !c)) || !e.has(c))) return !1;
							return !0;
						}
						if (s === Map) {
							if (r.size !== e.size) return !1;
							for (n of r) if (((c = n[0]), (c && typeof c == 'object' && ((c = p(e, c)), !c)) || !u(n[1], e.get(c)))) return !1;
							return !0;
						}
						if (s === ArrayBuffer) (r = new Uint8Array(r)), (e = new Uint8Array(e));
						else if (s === DataView) {
							if ((n = r.byteLength) === e.byteLength) for (; n-- && r.getInt8(n) === e.getInt8(n); );
							return n === -1;
						}
						if (ArrayBuffer.isView(r)) {
							if ((n = r.byteLength) === e.byteLength) for (; n-- && r[n] === e[n]; );
							return n === -1;
						}
						if (!s || typeof r == 'object') {
							n = 0;
							for (s in r) if ((o.call(r, s) && ++n && !o.call(e, s)) || !(s in e) || !u(r[s], e[s])) return !1;
							return Object.keys(e).length === n;
						}
					}
					return r !== r && e !== e;
				}
			},
			'../../node_modules/memoizerific sync recursive'(M) {
				function i(t) {
					var o = new Error("Cannot find module '" + t + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (M.exports = i);
			},
		},
	]);
})();

//# sourceMappingURL=components-Trackers-ResultTracker-ResultTracker-stories.426dbb93.iframe.bundle.js.map
