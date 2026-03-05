'use strict';
(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[935],
		{
			'./src/create/createRecommendationController.ts'(D, n, o) {
				o.r(n), o.d(n, { default: () => P });
				var s = o('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					t = o('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					m = o('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					_ = o('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					l = o('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					c = o('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					d = o('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					E = o('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					M = o('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					h = o('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				const P = (e, a) => {
					const r = (a?.urlManager || new _.V(new c.E(e.url), l.X)).detach(!0);
					return (
						e.mode && e.client && ((e.client.config = e.client.config || {}), (e.client.config.mode = e.mode)),
						new s.c(
							e.controller,
							{
								client: a?.client || new t.K(e.client.globals, e.client.config),
								store: a?.store || new m.t(e.controller, { urlManager: r }),
								urlManager: r,
								eventManager: a?.eventManager || new d.E(),
								profiler: a?.profiler || new E.U(),
								logger: a?.logger || new M.V({ mode: e.mode }),
								tracker: a?.tracker || new h.J(e.client.globals),
							},
							e.context
						)
					);
				};
			},
		},
	]);
})();
