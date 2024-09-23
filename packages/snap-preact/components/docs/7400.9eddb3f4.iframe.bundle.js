'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[7400],
	{
		'./node_modules/mobx-react-lite/es/index.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { PA: () => observer });
			var mobx_esm = __webpack_require__('../../node_modules/mobx/dist/mobx.esm.js'),
				compat_module = __webpack_require__('../../node_modules/preact/compat/dist/compat.module.js');
			if (!compat_module.useState) throw new Error('mobx-react-lite requires React with Hooks support');
			if (!mobx_esm.Gn) throw new Error('mobx-react-lite@3 requires mobx at least version 6 to be available');
			function defaultNoopBatch(callback) {
				callback();
			}
			function printDebugValue(v) {
				return (0, mobx_esm.yl)(v);
			}
			var FinalizationRegistryLocal = 'undefined' == typeof FinalizationRegistry ? void 0 : FinalizationRegistry;
			function createTrackingData(reaction) {
				return { reaction, mounted: !1, changedBeforeMount: !1, cleanAt: Date.now() + CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS };
			}
			var CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS = 1e4;
			var __values = function (o) {
				var s = 'function' == typeof Symbol && Symbol.iterator,
					m = s && o[s],
					i = 0;
				if (m) return m.call(o);
				if (o && 'number' == typeof o.length)
					return {
						next: function () {
							return o && i >= o.length && (o = void 0), { value: o && o[i++], done: !o };
						},
					};
				throw new TypeError(s ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
			};
			var _a = FinalizationRegistryLocal
					? (function createReactionCleanupTrackingUsingFinalizationRegister(FinalizationRegistry) {
							var cleanupTokenToReactionTrackingMap = new Map(),
								globalCleanupTokensCounter = 1,
								registry = new FinalizationRegistry(function cleanupFunction(token) {
									var trackedReaction = cleanupTokenToReactionTrackingMap.get(token);
									trackedReaction && (trackedReaction.reaction.dispose(), cleanupTokenToReactionTrackingMap.delete(token));
								});
							return {
								addReactionToTrack: function (reactionTrackingRef, reaction, objectRetainedByReact) {
									var token = globalCleanupTokensCounter++;
									return (
										registry.register(objectRetainedByReact, token, reactionTrackingRef),
										(reactionTrackingRef.current = createTrackingData(reaction)),
										(reactionTrackingRef.current.finalizationRegistryCleanupToken = token),
										cleanupTokenToReactionTrackingMap.set(token, reactionTrackingRef.current),
										reactionTrackingRef.current
									);
								},
								recordReactionAsCommitted: function (reactionRef) {
									registry.unregister(reactionRef),
										reactionRef.current &&
											reactionRef.current.finalizationRegistryCleanupToken &&
											cleanupTokenToReactionTrackingMap.delete(reactionRef.current.finalizationRegistryCleanupToken);
								},
								forceCleanupTimerToRunNowForTests: function () {},
								resetCleanupScheduleForTests: function () {},
							};
					  })(FinalizationRegistryLocal)
					: (function createTimerBasedReactionCleanupTracking() {
							var reactionCleanupHandle,
								uncommittedReactionRefs = new Set();
							function ensureCleanupTimerRunning() {
								void 0 === reactionCleanupHandle && (reactionCleanupHandle = setTimeout(cleanUncommittedReactions, 1e4));
							}
							function cleanUncommittedReactions() {
								reactionCleanupHandle = void 0;
								var now = Date.now();
								uncommittedReactionRefs.forEach(function (ref) {
									var tracking = ref.current;
									tracking && now >= tracking.cleanAt && (tracking.reaction.dispose(), (ref.current = null), uncommittedReactionRefs.delete(ref));
								}),
									uncommittedReactionRefs.size > 0 && ensureCleanupTimerRunning();
							}
							return {
								addReactionToTrack: function (reactionTrackingRef, reaction, objectRetainedByReact) {
									return (
										(reactionTrackingRef.current = createTrackingData(reaction)),
										(function scheduleCleanupOfReactionIfLeaked(ref) {
											uncommittedReactionRefs.add(ref), ensureCleanupTimerRunning();
										})(reactionTrackingRef),
										reactionTrackingRef.current
									);
								},
								recordReactionAsCommitted: function recordReactionAsCommitted(reactionRef) {
									uncommittedReactionRefs.delete(reactionRef);
								},
								forceCleanupTimerToRunNowForTests: function forceCleanupTimerToRunNowForTests() {
									reactionCleanupHandle && (clearTimeout(reactionCleanupHandle), cleanUncommittedReactions());
								},
								resetCleanupScheduleForTests: function resetCleanupScheduleForTests() {
									var e_1, _a;
									if (uncommittedReactionRefs.size > 0) {
										try {
											for (
												var uncommittedReactionRefs_1 = __values(uncommittedReactionRefs),
													uncommittedReactionRefs_1_1 = uncommittedReactionRefs_1.next();
												!uncommittedReactionRefs_1_1.done;
												uncommittedReactionRefs_1_1 = uncommittedReactionRefs_1.next()
											) {
												var ref = uncommittedReactionRefs_1_1.value,
													tracking = ref.current;
												tracking && (tracking.reaction.dispose(), (ref.current = null));
											}
										} catch (e_1_1) {
											e_1 = { error: e_1_1 };
										} finally {
											try {
												uncommittedReactionRefs_1_1 &&
													!uncommittedReactionRefs_1_1.done &&
													(_a = uncommittedReactionRefs_1.return) &&
													_a.call(uncommittedReactionRefs_1);
											} finally {
												if (e_1) throw e_1.error;
											}
										}
										uncommittedReactionRefs.clear();
									}
									reactionCleanupHandle && (clearTimeout(reactionCleanupHandle), (reactionCleanupHandle = void 0));
								},
							};
					  })(),
				addReactionToTrack = _a.addReactionToTrack,
				recordReactionAsCommitted = _a.recordReactionAsCommitted,
				globalIsUsingStaticRendering = (_a.resetCleanupScheduleForTests, _a.forceCleanupTimerToRunNowForTests, !1);
			function isUsingStaticRendering() {
				return globalIsUsingStaticRendering;
			}
			var __read = function (o, n) {
				var m = 'function' == typeof Symbol && o[Symbol.iterator];
				if (!m) return o;
				var r,
					e,
					i = m.call(o),
					ar = [];
				try {
					for (; (void 0 === n || n-- > 0) && !(r = i.next()).done; ) ar.push(r.value);
				} catch (error) {
					e = { error };
				} finally {
					try {
						r && !r.done && (m = i.return) && m.call(i);
					} finally {
						if (e) throw e.error;
					}
				}
				return ar;
			};
			function observerComponentNameFor(baseComponentName) {
				return 'observer'.concat(baseComponentName);
			}
			var ObjectToBeRetainedByReact = function ObjectToBeRetainedByReact() {};
			function objectToBeRetainedByReactFactory() {
				return new ObjectToBeRetainedByReact();
			}
			function useObserver(fn, baseComponentName) {
				if ((void 0 === baseComponentName && (baseComponentName = 'observed'), isUsingStaticRendering())) return fn();
				var objectRetainedByReact = __read(compat_module.default.useState(objectToBeRetainedByReactFactory), 1)[0],
					setState = __read(compat_module.default.useState(), 2)[1],
					forceUpdate = function () {
						return setState([]);
					},
					reactionTrackingRef = compat_module.default.useRef(null);
				if (!reactionTrackingRef.current)
					var newReaction = new mobx_esm.qT(observerComponentNameFor(baseComponentName), function () {
							trackingData_1.mounted ? forceUpdate() : (trackingData_1.changedBeforeMount = !0);
						}),
						trackingData_1 = addReactionToTrack(reactionTrackingRef, newReaction, objectRetainedByReact);
				var rendering,
					exception,
					reaction = reactionTrackingRef.current.reaction;
				if (
					(compat_module.default.useDebugValue(reaction, printDebugValue),
					compat_module.default.useEffect(function () {
						return (
							recordReactionAsCommitted(reactionTrackingRef),
							reactionTrackingRef.current
								? ((reactionTrackingRef.current.mounted = !0),
								  reactionTrackingRef.current.changedBeforeMount && ((reactionTrackingRef.current.changedBeforeMount = !1), forceUpdate()))
								: ((reactionTrackingRef.current = {
										reaction: new mobx_esm.qT(observerComponentNameFor(baseComponentName), function () {
											forceUpdate();
										}),
										mounted: !0,
										changedBeforeMount: !1,
										cleanAt: 1 / 0,
								  }),
								  forceUpdate()),
							function () {
								reactionTrackingRef.current.reaction.dispose(), (reactionTrackingRef.current = null);
							}
						);
					}, []),
					reaction.track(function () {
						try {
							rendering = fn();
						} catch (e) {
							exception = e;
						}
					}),
					exception)
				)
					throw exception;
				return rendering;
			}
			var hasSymbol = 'function' == typeof Symbol && Symbol.for,
				ReactForwardRefSymbol = hasSymbol
					? Symbol.for('react.forward_ref')
					: 'function' == typeof compat_module.forwardRef &&
					  (0, compat_module.forwardRef)(function (props) {
							return null;
					  }).$$typeof,
				ReactMemoSymbol = hasSymbol
					? Symbol.for('react.memo')
					: 'function' == typeof compat_module.memo &&
					  (0, compat_module.memo)(function (props) {
							return null;
					  }).$$typeof;
			function observer(baseComponent, options) {
				var _a;
				if (ReactMemoSymbol && baseComponent.$$typeof === ReactMemoSymbol)
					throw new Error(
						"[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you."
					);
				if (isUsingStaticRendering()) return baseComponent;
				var useForwardRef = null !== (_a = null == options ? void 0 : options.forwardRef) && void 0 !== _a && _a,
					render = baseComponent,
					baseComponentName = baseComponent.displayName || baseComponent.name;
				if (
					ReactForwardRefSymbol &&
					baseComponent.$$typeof === ReactForwardRefSymbol &&
					((useForwardRef = !0), 'function' != typeof (render = baseComponent.render))
				)
					throw new Error('[mobx-react-lite] `render` property of ForwardRef was not a function');
				var observerComponent = function (props, ref) {
					return useObserver(function () {
						return render(props, ref);
					}, baseComponentName);
				};
				return (
					'' !== baseComponentName && (observerComponent.displayName = baseComponentName),
					baseComponent.contextTypes && (observerComponent.contextTypes = baseComponent.contextTypes),
					useForwardRef && (observerComponent = (0, compat_module.forwardRef)(observerComponent)),
					(function copyStaticProperties(base, target) {
						Object.keys(base).forEach(function (key) {
							hoistBlackList[key] || Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
						});
					})(baseComponent, (observerComponent = (0, compat_module.memo)(observerComponent))),
					observerComponent
				);
			}
			var hoistBlackList = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
			!(function observerBatching(reactionScheduler) {
				reactionScheduler || (reactionScheduler = defaultNoopBatch), (0, mobx_esm.jK)({ reactionScheduler });
			})(compat_module.unstable_batchedUpdates);
		},
	},
]);
