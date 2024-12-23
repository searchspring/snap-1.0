'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[1164],
	{
		'./src/Instantiators/RecommendationInstantiator.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, { RecommendationInstantiator: () => RecommendationInstantiator, defined: () => defined });
			var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'
				),
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/deepmerge/dist/cjs.js'),
				deepmerge__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_1__),
				_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../snap-toolbox/dist/esm/types.js'),
				_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('../snap-toolbox/dist/esm/DomTargeter/DomTargeter.js'),
				_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('../snap-toolbox/dist/esm/getContext/getContext.js'),
				_searchspring_snap_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('../snap-client/dist/esm/Client/Client.js'),
				_searchspring_snap_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('../snap-logger/dist/esm/Logger.js'),
				_searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('../snap-tracker/dist/esm/Tracker.js');
			class RecommendationInstantiator {
				constructor(config, services, context) {
					if (
						((this.mode = _searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_2__.$.production),
						(this.controller = {}),
						(this.uses = []),
						(this.plugins = []),
						(this.middleware = []),
						(this.config = config),
						!this.config)
					)
						throw new Error('Recommendation Instantiator config is required');
					if (!this.config.config?.branch) throw new Error("Recommendation Instantiator config must contain 'branch' property");
					if (!this.config.components || 'object' != typeof this.config.components || !Object.keys(this.config.components).length)
						throw new Error("Recommendation Instantiator config must contain 'components' mapping property");
					if (!((services?.client && services?.tracker) || this.config?.client?.globals?.siteId))
						throw new Error('Recommendation Instantiator config must contain a valid config.client.globals.siteId value');
					this.config.mode &&
						Object.values(_searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_2__.$).includes(this.config.mode) &&
						((this.mode = this.config.mode),
						this.config?.client?.globals?.siteId &&
							((this.config.client.config = this.config.client.config || {}),
							(this.config.client.config.mode = this.config.client.config.mode || this.mode))),
						(window.searchspring = window.searchspring || {}),
						(this.context = deepmerge__WEBPACK_IMPORTED_MODULE_1___default()(context || {}, config.context || {})),
						(this.client =
							services?.client ||
							new _searchspring_snap_client__WEBPACK_IMPORTED_MODULE_3__.K(this.config.client.globals, this.config.client.config)),
						(this.tracker = services?.tracker || new _searchspring_snap_tracker__WEBPACK_IMPORTED_MODULE_4__.JD(this.config.client.globals)),
						(this.logger =
							services?.logger ||
							new _searchspring_snap_logger__WEBPACK_IMPORTED_MODULE_5__.V({ prefix: 'RecommendationInstantiator ', mode: this.mode }));
					const profileCount = {};
					this.targeter = new _searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_6__.b(
						[
							{
								selector: `${
									this.config.selector || 'script[type="searchspring/recommend"], script[type="searchspring/personalized-recommendations"]'
								}, script[type="searchspring/recommend"][profile="email"]`,
								autoRetarget: !0,
								clickRetarget: !0,
								inject: {
									action: 'before',
									element: (target, origElement) => {
										const profile = origElement.getAttribute('profile') || '',
											recsContainer = document.createElement('div');
										return recsContainer.setAttribute('searchspring-recommend', profile), recsContainer;
									},
								},
							},
							{ selector: 'script[type="searchspring/recommendations"]', autoRetarget: !0, clickRetarget: !0, emptyTarget: !1 },
						],
						async (target, elem, originalElem) => {
							const elemContext = (0, _searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_7__.S)(
								[
									'shopperId',
									'shopper',
									'product',
									'products',
									'seed',
									'cart',
									'filters',
									'blockedItems',
									'options',
									'profile',
									'custom',
									'profiles',
									'globals',
								],
								originalElem || elem
							);
							if (elemContext.profiles && elemContext.profiles.length) {
								const scriptContextProfiles = elemContext.profiles,
									scriptContextGlobals = elemContext.globals,
									requestGlobals = {
										...defined({
											blockedItems: scriptContextGlobals?.blockedItems,
											filters: scriptContextGlobals?.filters,
											cart: scriptContextGlobals?.cart && getArrayFunc(scriptContextGlobals.cart),
											products: scriptContextGlobals?.products,
											shopper: scriptContextGlobals?.shopper?.id,
											batchId: Math.random(),
										}),
									},
									targetsArr = [];
								scriptContextProfiles.forEach((profile) => {
									if (profile.selector) {
										const targetObj = { selector: profile.selector, autoRetarget: !0, clickRetarget: !0, profile };
										targetsArr.push(targetObj);
									}
								}),
									new _searchspring_snap_toolbox__WEBPACK_IMPORTED_MODULE_6__.b(targetsArr, async (target, elem, originalElem) => {
										if (target.profile?.profile || target.profile?.tag) {
											const profileRequestGlobals = {
													...requestGlobals,
													profile: target.profile?.options,
													tag: target.profile.tag || target.profile.profile,
												},
												profileContext = deepmerge__WEBPACK_IMPORTED_MODULE_1___default()(
													this.context,
													defined({ globals: scriptContextGlobals, profile: target.profile })
												);
											elemContext.custom &&
												(profileContext.custom = deepmerge__WEBPACK_IMPORTED_MODULE_1___default()(profileContext.custom, elemContext.custom)),
												readyTheController(this, services || {}, elem, profileContext, profileCount, originalElem, profileRequestGlobals, target);
										}
									});
							} else {
								const { profile, products, product, seed, filters, blockedItems, options, shopper, shopperId } = elemContext,
									combinedProducts = [].concat(products || product || seed || []),
									shopperIdentifier = [shopper, shopper?.id, shopperId, shopperId?.id].filter((val) => val && 'string' == typeof val).pop(),
									profileRequestGlobals = {
										tag: profile,
										...defined({
											products: combinedProducts.length ? combinedProducts : void 0,
											cart: elemContext.cart && getArrayFunc(elemContext.cart),
											shopper: shopperIdentifier,
											filters,
											blockedItems,
											profile: options,
										}),
									};
								readyTheController(
									this,
									services || {},
									elem,
									deepmerge__WEBPACK_IMPORTED_MODULE_1___default()(this.context, elemContext),
									profileCount,
									originalElem,
									profileRequestGlobals,
									target
								);
							}
						}
					);
				}
				plugin(func, ...args) {
					this.plugins.push({ func, args });
				}
				on(event, ...func) {
					this.middleware.push({ event, func });
				}
				use(attachments) {
					this.uses.push(attachments);
				}
			}
			async function readyTheController(instance, services, injectedElem, context, profileCount, elem, controllerGlobals, target) {
				const { profile, batchId, cart, tag } = controllerGlobals,
					batched = profile?.batched ?? controllerGlobals.batched ?? !0;
				if (!tag) return void instance.logger.warn("'tag' is missing from <script> tag, skipping this profile", elem);
				Array.isArray(cart) && instance.tracker.cookies.cart.set(cart), (profileCount[tag] = profileCount[tag] + 1 || 1);
				const globals = deepmerge__WEBPACK_IMPORTED_MODULE_1___default().all([
						instance.config.client?.globals || {},
						instance.config.config?.globals || {},
						controllerGlobals,
					]),
					controllerConfig = {
						id: `recommend_${tag}_${profileCount[tag] - 1}`,
						tag,
						batched: batched ?? !0,
						realtime: Boolean(context.options?.realtime ?? context.profile?.options?.realtime),
						batchId,
						...instance.config.config,
						globals,
					};
				profile?.branch && (controllerConfig.branch = profile?.branch);
				let controller = Object.keys(instance.controller)
					.map((id) => instance.controller[id])
					.filter(
						(controller) =>
							JSON.stringify({
								batched: controller.config.batched,
								branch: controller.config.branch,
								globals: controller.config.globals,
								tag: controller.config.tag,
								realtime: controller.config.realtime,
							}) ==
							JSON.stringify({
								batched: controllerConfig.batched,
								branch: controllerConfig.branch,
								globals: controllerConfig.globals,
								tag: controllerConfig.tag,
								realtime: controllerConfig.realtime,
							})
					)[0];
				if (!controller) {
					const createRecommendationController = (
						await Promise.all([__webpack_require__.e(9849), __webpack_require__.e(9107)]).then(
							__webpack_require__.bind(__webpack_require__, './src/create/createRecommendationController.ts')
						)
					).default;
					(controller = createRecommendationController(
						{ url: instance.config.url, controller: controllerConfig, context, mode: instance.config.mode },
						{ client: instance.client, tracker: instance.tracker }
					)),
						instance.uses.forEach((attachements) => controller.use(attachements)),
						instance.plugins.forEach((plugin) => controller.plugin(plugin.func, ...plugin.args)),
						instance.middleware.forEach((middleware) => controller.on(middleware.event, ...middleware.func));
				}
				controller.store.loaded || controller.store.loading || (await controller.search()),
					controller.addTargeter(instance.targeter),
					(instance.controller[controller.config.id] = controller),
					(window.searchspring.controller = window.searchspring.controller || {}),
					(window.searchspring.controller[controller.config.id] = controller);
				const profileVars = controller.store.profile.display?.templateParameters,
					component = controller.store.profile.display?.template?.component;
				if (controller.store.error) return;
				if (!controller.store.profile.display.template)
					return void instance.logger.error(`profile '${tag}' found on the following element is missing a template!\n${elem?.outerHTML}`);
				if (!profileVars)
					return void instance.logger.error(`profile '${tag}' found on the following element is missing templateParameters!\n${elem?.outerHTML}`);
				if (!component)
					return void instance.logger.error(`profile '${tag}' found on the following element is missing a component!\n${elem?.outerHTML}`);
				let RecommendationsComponent,
					props = {};
				if (
					((props.className = `ss__recommendation-${component.toLowerCase()}`),
					injectedElem?.setAttribute('id', `${controllerConfig.id}`),
					instance.config.components[component]?.onTarget?.(target, elem, injectedElem, controller),
					instance.config.components[component] && 'function' == typeof instance.config.components[component])
				)
					RecommendationsComponent = await instance.config.components[component]();
				else if (instance.config.components[component] && 'object' == typeof instance.config.components[component]) {
					props = instance.config.components[component].props || {};
					const importPromises = [];
					importPromises.push(instance.config.components[component].component());
					const importResolutions = await Promise.all(importPromises);
					RecommendationsComponent = importResolutions[0];
				}
				RecommendationsComponent
					? setTimeout(() => {
							injectedElem &&
								RecommendationsComponent &&
								(0, preact__WEBPACK_IMPORTED_MODULE_0__.XX)(
									(0, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(RecommendationsComponent, {
										controller,
										snap: services?.snap,
										...props,
									}),
									injectedElem
								);
					  })
					: instance.logger.error(
							`profile '${tag}' found on the following element is expecting component mapping for '${component}' - verify instantiator config.\n${elem?.outerHTML}`
					  );
			}
			function getArrayFunc(arrayOrFunc) {
				if ('function' == typeof arrayOrFunc)
					try {
						const funcContents = arrayOrFunc();
						if (Array.isArray(funcContents)) return funcContents;
					} catch (e) {}
				else if (Array.isArray(arrayOrFunc)) return arrayOrFunc;
				return [];
			}
			function defined(properties) {
				const definedProps = {};
				return (
					Object.keys(properties).map((key) => {
						void 0 !== properties[key] && (definedProps[key] = properties[key]);
					}),
					definedProps
				);
			}
		},
	},
]);
