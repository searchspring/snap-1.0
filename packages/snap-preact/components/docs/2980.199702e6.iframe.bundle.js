'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[2980],
	{
		'../../node_modules/mobx-react/dist/mobxreact.esm.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { PA: () => mobxreact_esm_observer });
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
			var TimerBasedFinalizationRegistry = (function () {
					function TimerBasedFinalizationRegistry(finalize) {
						var _this = this;
						Object.defineProperty(this, 'finalize', { enumerable: !0, configurable: !0, writable: !0, value: finalize }),
							Object.defineProperty(this, 'registrations', { enumerable: !0, configurable: !0, writable: !0, value: new Map() }),
							Object.defineProperty(this, 'sweepTimeout', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
							Object.defineProperty(this, 'sweep', {
								enumerable: !0,
								configurable: !0,
								writable: !0,
								value: function (maxAge) {
									void 0 === maxAge && (maxAge = 1e4), clearTimeout(_this.sweepTimeout), (_this.sweepTimeout = void 0);
									var now = Date.now();
									_this.registrations.forEach(function (registration, token) {
										now - registration.registeredAt >= maxAge && (_this.finalize(registration.value), _this.registrations.delete(token));
									}),
										_this.registrations.size > 0 && _this.scheduleSweep();
								},
							}),
							Object.defineProperty(this, 'finalizeAllImmediately', {
								enumerable: !0,
								configurable: !0,
								writable: !0,
								value: function () {
									_this.sweep(0);
								},
							});
					}
					return (
						Object.defineProperty(TimerBasedFinalizationRegistry.prototype, 'register', {
							enumerable: !1,
							configurable: !0,
							writable: !0,
							value: function (target, value, token) {
								this.registrations.set(token, { value, registeredAt: Date.now() }), this.scheduleSweep();
							},
						}),
						Object.defineProperty(TimerBasedFinalizationRegistry.prototype, 'unregister', {
							enumerable: !1,
							configurable: !0,
							writable: !0,
							value: function (token) {
								this.registrations.delete(token);
							},
						}),
						Object.defineProperty(TimerBasedFinalizationRegistry.prototype, 'scheduleSweep', {
							enumerable: !1,
							configurable: !0,
							writable: !0,
							value: function () {
								void 0 === this.sweepTimeout && (this.sweepTimeout = setTimeout(this.sweep, 1e4));
							},
						}),
						TimerBasedFinalizationRegistry
					);
				})(),
				observerFinalizationRegistry = new ('undefined' != typeof FinalizationRegistry ? FinalizationRegistry : TimerBasedFinalizationRegistry)(
					function (adm) {
						var _a;
						null === (_a = adm.reaction) || void 0 === _a || _a.dispose(), (adm.reaction = null);
					}
				),
				globalIsUsingStaticRendering = !1;
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
					admRef = compat_module.default.useRef(null);
				admRef.current || (admRef.current = { reaction: null, mounted: !1, changedBeforeMount: !1 });
				var rendering,
					exception,
					adm = admRef.current;
				if (
					(adm.reaction ||
						((adm.reaction = new mobx_esm.qT(observerComponentNameFor(baseComponentName), function () {
							adm.mounted ? forceUpdate() : (adm.changedBeforeMount = !0);
						})),
						observerFinalizationRegistry.register(objectRetainedByReact, adm, adm)),
					compat_module.default.useDebugValue(adm.reaction, printDebugValue),
					compat_module.default.useEffect(function () {
						return (
							observerFinalizationRegistry.unregister(adm),
							(adm.mounted = !0),
							adm.reaction
								? adm.changedBeforeMount && ((adm.changedBeforeMount = !1), forceUpdate())
								: ((adm.reaction = new mobx_esm.qT(observerComponentNameFor(baseComponentName), function () {
										forceUpdate();
								  })),
								  forceUpdate()),
							function () {
								adm.reaction.dispose(), (adm.reaction = null), (adm.mounted = !1), (adm.changedBeforeMount = !1);
							}
						);
					}, []),
					adm.reaction.track(function () {
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
			var _a;
			!(function observerBatching(reactionScheduler) {
				reactionScheduler || (reactionScheduler = defaultNoopBatch), (0, mobx_esm.jK)({ reactionScheduler });
			})(compat_module.unstable_batchedUpdates);
			_a = observerFinalizationRegistry.finalizeAllImmediately;
			var symbolId = 0;
			var createdSymbols = {};
			function newSymbol(name) {
				return (
					createdSymbols[name] ||
						(createdSymbols[name] = (function createSymbol(name) {
							if ('function' == typeof Symbol) return Symbol(name);
							var symbol = '__$mobx-react ' + name + ' (' + symbolId + ')';
							return symbolId++, symbol;
						})(name)),
					createdSymbols[name]
				);
			}
			function shallowEqual(objA, objB) {
				if (is(objA, objB)) return !0;
				if ('object' != typeof objA || null === objA || 'object' != typeof objB || null === objB) return !1;
				var keysA = Object.keys(objA),
					keysB = Object.keys(objB);
				if (keysA.length !== keysB.length) return !1;
				for (var i = 0; i < keysA.length; i++) if (!Object.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) return !1;
				return !0;
			}
			function is(x, y) {
				return x === y ? 0 !== x || 1 / x == 1 / y : x != x && y != y;
			}
			function setHiddenProp(target, prop, value) {
				Object.hasOwnProperty.call(target, prop)
					? (target[prop] = value)
					: Object.defineProperty(target, prop, { enumerable: !1, configurable: !0, writable: !0, value });
			}
			var mobxMixins = newSymbol('patchMixins'),
				mobxPatchedDefinition = newSymbol('patchedDefinition');
			function wrapper(realMethod, mixins) {
				for (var _this = this, _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++)
					args[_key - 2] = arguments[_key];
				mixins.locks++;
				try {
					var retVal;
					return null != realMethod && (retVal = realMethod.apply(this, args)), retVal;
				} finally {
					mixins.locks--,
						0 === mixins.locks &&
							mixins.methods.forEach(function (mx) {
								mx.apply(_this, args);
							});
				}
			}
			function wrapFunction(realMethod, mixins) {
				return function fn() {
					for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
					wrapper.call.apply(wrapper, [this, realMethod, mixins].concat(args));
				};
			}
			function patch(target, methodName, mixinMethod) {
				var mixins = (function getMixins(target, methodName) {
					var mixins = (target[mobxMixins] = target[mobxMixins] || {}),
						methodMixins = (mixins[methodName] = mixins[methodName] || {});
					return (methodMixins.locks = methodMixins.locks || 0), (methodMixins.methods = methodMixins.methods || []), methodMixins;
				})(target, methodName);
				mixins.methods.indexOf(mixinMethod) < 0 && mixins.methods.push(mixinMethod);
				var oldDefinition = Object.getOwnPropertyDescriptor(target, methodName);
				if (!oldDefinition || !oldDefinition[mobxPatchedDefinition]) {
					var originalMethod = target[methodName],
						newDefinition = createDefinition(target, methodName, oldDefinition ? oldDefinition.enumerable : void 0, mixins, originalMethod);
					Object.defineProperty(target, methodName, newDefinition);
				}
			}
			function createDefinition(target, methodName, enumerable, mixins, originalMethod) {
				var _ref,
					wrappedFunc = wrapFunction(originalMethod, mixins);
				return (
					((_ref = {})[mobxPatchedDefinition] = !0),
					(_ref.get = function get() {
						return wrappedFunc;
					}),
					(_ref.set = function set(value) {
						if (this === target) wrappedFunc = wrapFunction(value, mixins);
						else {
							var newDefinition = createDefinition(this, methodName, enumerable, mixins, value);
							Object.defineProperty(this, methodName, newDefinition);
						}
					}),
					(_ref.configurable = !0),
					(_ref.enumerable = enumerable),
					_ref
				);
			}
			var mobxAdminProperty = mobx_esm.BQ || '$mobx',
				mobxObserverProperty = newSymbol('isMobXReactObserver'),
				mobxIsUnmounted = newSymbol('isUnmounted'),
				skipRenderKey = newSymbol('skipRender'),
				isForcingUpdateKey = newSymbol('isForcingUpdate');
			function makeClassComponentObserver(componentClass) {
				var target = componentClass.prototype;
				if (componentClass[mobxObserverProperty]) {
					var displayName = getDisplayName(target);
					console.warn('The provided component class (' + displayName + ')\n                has already been declared as an observer component.');
				} else componentClass[mobxObserverProperty] = !0;
				if (target.componentWillReact) throw new Error('The componentWillReact life-cycle event is no longer supported');
				if (componentClass.__proto__ !== compat_module.PureComponent)
					if (target.shouldComponentUpdate) {
						if (target.shouldComponentUpdate !== observerSCU)
							throw new Error('It is not allowed to use shouldComponentUpdate in observer based components.');
					} else target.shouldComponentUpdate = observerSCU;
				makeObservableProp(target, 'props'), makeObservableProp(target, 'state'), componentClass.contextType && makeObservableProp(target, 'context');
				var originalRender = target.render;
				if ('function' != typeof originalRender) {
					var _displayName = getDisplayName(target);
					throw new Error(
						'[mobx-react] class component (' +
							_displayName +
							') is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.'
					);
				}
				return (
					(target.render = function () {
						return (this.render = isUsingStaticRendering() ? originalRender : createReactiveRender.call(this, originalRender)), this.render();
					}),
					patch(target, 'componentDidMount', function () {
						(this[mobxIsUnmounted] = !1), this.render[mobxAdminProperty] || compat_module.Component.prototype.forceUpdate.call(this);
					}),
					patch(target, 'componentWillUnmount', function () {
						if (!isUsingStaticRendering()) {
							var reaction = this.render[mobxAdminProperty];
							if (reaction) reaction.dispose(), (this.render[mobxAdminProperty] = null);
							else {
								var _displayName2 = getDisplayName(this);
								console.warn(
									'The reactive render of an observer class component (' +
										_displayName2 +
										')\n                was overridden after MobX attached. This may result in a memory leak if the\n                overridden reactive render was not properly disposed.'
								);
							}
							this[mobxIsUnmounted] = !0;
						}
					}),
					componentClass
				);
			}
			function getDisplayName(comp) {
				return comp.displayName || comp.name || (comp.constructor && (comp.constructor.displayName || comp.constructor.name)) || '<component>';
			}
			function createReactiveRender(originalRender) {
				var _this = this;
				setHiddenProp(this, skipRenderKey, !1), setHiddenProp(this, isForcingUpdateKey, !1);
				var initialName = getDisplayName(this),
					boundOriginalRender = originalRender.bind(this),
					isRenderingPending = !1;
				return function reactiveRender() {
					var _reactiveRender$mobxA;
					isRenderingPending = !1;
					var reaction =
							null != (_reactiveRender$mobxA = reactiveRender[mobxAdminProperty])
								? _reactiveRender$mobxA
								: (reactiveRender[mobxAdminProperty] = (function createReaction() {
										var reaction = new mobx_esm.qT(initialName + '.render()', function () {
											if (!isRenderingPending && ((isRenderingPending = !0), !0 !== _this[mobxIsUnmounted])) {
												var hasError = !0;
												try {
													setHiddenProp(_this, isForcingUpdateKey, !0),
														_this[skipRenderKey] || compat_module.Component.prototype.forceUpdate.call(_this),
														(hasError = !1);
												} finally {
													setHiddenProp(_this, isForcingUpdateKey, !1), hasError && (reaction.dispose(), (_this.render[mobxAdminProperty] = null));
												}
											}
										});
										return (reaction.reactComponent = _this), reaction;
								  })()),
						exception = void 0,
						rendering = void 0;
					if (
						(reaction.track(function () {
							try {
								rendering = (0, mobx_esm.vx)(!1, boundOriginalRender);
							} catch (e) {
								exception = e;
							}
						}),
						exception)
					)
						throw exception;
					return rendering;
				};
			}
			function observerSCU(nextProps, nextState) {
				return (
					isUsingStaticRendering() &&
						console.warn(
							'[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.'
						),
					this.state !== nextState || !shallowEqual(this.props, nextProps)
				);
			}
			function makeObservableProp(target, propName) {
				var valueHolderKey = newSymbol('reactProp_' + propName + '_valueHolder'),
					atomHolderKey = newSymbol('reactProp_' + propName + '_atomHolder');
				function getAtom() {
					return this[atomHolderKey] || setHiddenProp(this, atomHolderKey, (0, mobx_esm.MN)('reactive ' + propName)), this[atomHolderKey];
				}
				Object.defineProperty(target, propName, {
					configurable: !0,
					enumerable: !0,
					get: function get() {
						var prevReadState = !1;
						return (
							mobx_esm.f2 && mobx_esm.w6 && (prevReadState = (0, mobx_esm.f2)(!0)),
							getAtom.call(this).reportObserved(),
							mobx_esm.f2 && mobx_esm.w6 && (0, mobx_esm.w6)(prevReadState),
							this[valueHolderKey]
						);
					},
					set: function set(v) {
						this[isForcingUpdateKey] || shallowEqual(this[valueHolderKey], v)
							? setHiddenProp(this, valueHolderKey, v)
							: (setHiddenProp(this, valueHolderKey, v),
							  setHiddenProp(this, skipRenderKey, !0),
							  getAtom.call(this).reportChanged(),
							  setHiddenProp(this, skipRenderKey, !1));
					},
				});
			}
			function mobxreact_esm_observer(component) {
				return (
					!0 === component.isMobxInjector &&
						console.warn(
							'Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`'
						),
					Object.prototype.isPrototypeOf.call(compat_module.Component, component) ||
					Object.prototype.isPrototypeOf.call(compat_module.PureComponent, component)
						? makeClassComponentObserver(component)
						: observer(component)
				);
			}
			if (!compat_module.Component) throw new Error('mobx-react requires React to be available');
			if (!mobx_esm.sH) throw new Error('mobx-react requires mobx to be available');
		},
	},
]);
