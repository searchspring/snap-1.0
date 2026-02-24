'use strict';
(() => {
	(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
		[935],
		{
			'./src/create/createRecommendationController.ts'(M, s, r) {
				r.r(s), r.d(s, { default: () => i });
				var _ = r('../../node_modules/@searchspring/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					l = r('../../node_modules/@searchspring/snap-client/dist/esm/Client/Client.js'),
					t = r('../../node_modules/@searchspring/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					o = r('../../node_modules/@searchspring/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					m = r('../../node_modules/@searchspring/snap-url-manager/dist/esm/linkers/react/react.js'),
					d = r('../../node_modules/@searchspring/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					p = r('../../node_modules/@searchspring/snap-event-manager/dist/esm/EventManager.js'),
					g = r('../../node_modules/@searchspring/snap-profiler/dist/esm/Profiler.js'),
					c = r('../../node_modules/@searchspring/snap-logger/dist/esm/Logger.js'),
					E = r('../../node_modules/@searchspring/snap-tracker/dist/esm/Tracker.js');
				const i = (n, e) => {
					const a = (e?.urlManager || new o.V(new d.E(n.url), m.X)).detach(!0);
					return (
						n.mode && n.client && ((n.client.config = n.client.config || {}), (n.client.config.mode = n.mode)),
						new _.c(
							n.controller,
							{
								client: e?.client || new l.K(n.client.globals, n.client.config),
								store: e?.store || new t.t(n.controller, { urlManager: a }),
								urlManager: a,
								eventManager: e?.eventManager || new p.E(),
								profiler: e?.profiler || new g.U(),
								logger: e?.logger || new c.V({ mode: n.mode }),
								tracker: e?.tracker || new E.J(n.client.globals),
							},
							n.context
						)
					);
				};
			},
		},
	]);
})();
