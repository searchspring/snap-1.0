/*! For license information please see 8782.ed51eb75.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[8782],
	{
		'../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { FD: () => jsxs, FK: () => Fragment, Y: () => jsx });
			var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/compat/jsx-runtime.mjs'),
				_dist_emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				Fragment =
					(__webpack_require__('../../node_modules/preact/compat/dist/compat.module.js'),
					__webpack_require__('../../node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js'),
					__webpack_require__('../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js'),
					__webpack_require__('../../node_modules/@emotion/serialize/dist/emotion-serialize.esm.js'),
					__webpack_require__(
						'../../node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js'
					),
					react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.FK);
			function jsx(type, props, key) {
				return _dist_emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.h.call(props, 'css')
					? react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y(
							_dist_emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.E,
							(0, _dist_emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.c)(type, props),
							key
					  )
					: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y(type, props, key);
			}
			function jsxs(type, props, key) {
				return _dist_emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.h.call(props, 'css')
					? react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.FD(
							_dist_emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.E,
							(0, _dist_emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__.c)(type, props),
							key
					  )
					: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.FD(type, props, key);
			}
		},
		'../../node_modules/classnames/index.js': (module, exports) => {
			var __WEBPACK_AMD_DEFINE_RESULT__;
			!(function () {
				'use strict';
				var hasOwn = {}.hasOwnProperty;
				function classNames() {
					for (var classes = '', i = 0; i < arguments.length; i++) {
						var arg = arguments[i];
						arg && (classes = appendClass(classes, parseValue(arg)));
					}
					return classes;
				}
				function parseValue(arg) {
					if ('string' == typeof arg || 'number' == typeof arg) return arg;
					if ('object' != typeof arg) return '';
					if (Array.isArray(arg)) return classNames.apply(null, arg);
					if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) return arg.toString();
					var classes = '';
					for (var key in arg) hasOwn.call(arg, key) && arg[key] && (classes = appendClass(classes, key));
					return classes;
				}
				function appendClass(value, newClass) {
					return newClass ? (value ? value + ' ' + newClass : value + newClass) : value;
				}
				module.exports
					? ((classNames.default = classNames), (module.exports = classNames))
					: void 0 ===
							(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
								return classNames;
							}.apply(exports, [])) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
			})();
		},
		'../../node_modules/mobx/dist/mobx.esm.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, {
				BQ: () => $mobx,
				EW: () => computed,
				Fq: () => isObservableArray,
				Gn: () => makeObservable,
				HO: () => toJS,
				MN: () => createAtom,
				O8: () => untracked,
				OB: () => isObservableObject,
				XI: () => action,
				f2: () => allowStateReadsStart,
				jK: () => configure,
				mJ: () => reaction,
				qT: () => Reaction,
				sH: () => observable,
				uz: () => isObservableMap,
				vx: () => allowStateChanges,
				w6: () => allowStateReadsEnd,
				yl: () => getDependencyTree,
			});
			function die(error) {
				for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
				throw new Error(
					'number' == typeof error
						? '[MobX] minified error nr: ' +
						  error +
						  (args.length ? ' ' + args.map(String).join(',') : '') +
						  '. Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts'
						: '[MobX] ' + error
				);
			}
			var mockGlobal = {};
			function getGlobal() {
				return 'undefined' != typeof globalThis
					? globalThis
					: 'undefined' != typeof window
					? window
					: void 0 !== __webpack_require__.g
					? __webpack_require__.g
					: 'undefined' != typeof self
					? self
					: mockGlobal;
			}
			var assign = Object.assign,
				getDescriptor = Object.getOwnPropertyDescriptor,
				defineProperty = Object.defineProperty,
				objectPrototype = Object.prototype,
				EMPTY_ARRAY = [];
			Object.freeze(EMPTY_ARRAY);
			var EMPTY_OBJECT = {};
			Object.freeze(EMPTY_OBJECT);
			var hasProxy = 'undefined' != typeof Proxy,
				plainObjectString = Object.toString();
			function assertProxies() {
				hasProxy || die('Proxy not available');
			}
			function once(func) {
				var invoked = !1;
				return function () {
					if (!invoked) return (invoked = !0), func.apply(this, arguments);
				};
			}
			var noop = function noop() {};
			function isFunction(fn) {
				return 'function' == typeof fn;
			}
			function isStringish(value) {
				switch (typeof value) {
					case 'string':
					case 'symbol':
					case 'number':
						return !0;
				}
				return !1;
			}
			function isObject(value) {
				return null !== value && 'object' == typeof value;
			}
			function isPlainObject(value) {
				if (!isObject(value)) return !1;
				var proto = Object.getPrototypeOf(value);
				if (null == proto) return !0;
				var protoConstructor = Object.hasOwnProperty.call(proto, 'constructor') && proto.constructor;
				return 'function' == typeof protoConstructor && protoConstructor.toString() === plainObjectString;
			}
			function isGenerator(obj) {
				var constructor = null == obj ? void 0 : obj.constructor;
				return !!constructor && ('GeneratorFunction' === constructor.name || 'GeneratorFunction' === constructor.displayName);
			}
			function addHiddenProp(object, propName, value) {
				defineProperty(object, propName, { enumerable: !1, writable: !0, configurable: !0, value });
			}
			function addHiddenFinalProp(object, propName, value) {
				defineProperty(object, propName, { enumerable: !1, writable: !1, configurable: !0, value });
			}
			function createInstanceofPredicate(name, theClass) {
				var propName = 'isMobX' + name;
				return (
					(theClass.prototype[propName] = !0),
					function (x) {
						return isObject(x) && !0 === x[propName];
					}
				);
			}
			function isES6Map(thing) {
				return thing instanceof Map;
			}
			function isES6Set(thing) {
				return thing instanceof Set;
			}
			var hasGetOwnPropertySymbols = void 0 !== Object.getOwnPropertySymbols;
			var ownKeys =
				'undefined' != typeof Reflect && Reflect.ownKeys
					? Reflect.ownKeys
					: hasGetOwnPropertySymbols
					? function (obj) {
							return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
					  }
					: Object.getOwnPropertyNames;
			function toPrimitive(value) {
				return null === value ? null : 'object' == typeof value ? '' + value : value;
			}
			function hasProp(target, prop) {
				return objectPrototype.hasOwnProperty.call(target, prop);
			}
			var getOwnPropertyDescriptors =
				Object.getOwnPropertyDescriptors ||
				function getOwnPropertyDescriptors(target) {
					var res = {};
					return (
						ownKeys(target).forEach(function (key) {
							res[key] = getDescriptor(target, key);
						}),
						res
					);
				};
			function _defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];
					(descriptor.enumerable = descriptor.enumerable || !1),
						(descriptor.configurable = !0),
						'value' in descriptor && (descriptor.writable = !0),
						Object.defineProperty(
							target,
							((arg = descriptor.key),
							(key = void 0),
							'symbol' ==
							typeof (key = (function _toPrimitive(input, hint) {
								if ('object' != typeof input || null === input) return input;
								var prim = input[Symbol.toPrimitive];
								if (void 0 !== prim) {
									var res = prim.call(input, hint || 'default');
									if ('object' != typeof res) return res;
									throw new TypeError('@@toPrimitive must return a primitive value.');
								}
								return ('string' === hint ? String : Number)(input);
							})(arg, 'string'))
								? key
								: String(key)),
							descriptor
						);
				}
				var arg, key;
			}
			function _createClass(Constructor, protoProps, staticProps) {
				return (
					protoProps && _defineProperties(Constructor.prototype, protoProps),
					staticProps && _defineProperties(Constructor, staticProps),
					Object.defineProperty(Constructor, 'prototype', { writable: !1 }),
					Constructor
				);
			}
			function _extends() {
				return (
					(_extends = Object.assign
						? Object.assign.bind()
						: function (target) {
								for (var i = 1; i < arguments.length; i++) {
									var source = arguments[i];
									for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
								}
								return target;
						  }),
					_extends.apply(this, arguments)
				);
			}
			function _inheritsLoose(subClass, superClass) {
				(subClass.prototype = Object.create(superClass.prototype)),
					(subClass.prototype.constructor = subClass),
					_setPrototypeOf(subClass, superClass);
			}
			function _setPrototypeOf(o, p) {
				return (
					(_setPrototypeOf = Object.setPrototypeOf
						? Object.setPrototypeOf.bind()
						: function _setPrototypeOf(o, p) {
								return (o.__proto__ = p), o;
						  }),
					_setPrototypeOf(o, p)
				);
			}
			function _assertThisInitialized(self) {
				if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return self;
			}
			function _arrayLikeToArray(arr, len) {
				(null == len || len > arr.length) && (len = arr.length);
				for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
				return arr2;
			}
			function _createForOfIteratorHelperLoose(o, allowArrayLike) {
				var it = ('undefined' != typeof Symbol && o[Symbol.iterator]) || o['@@iterator'];
				if (it) return (it = it.call(o)).next.bind(it);
				if (
					Array.isArray(o) ||
					(it = (function _unsupportedIterableToArray(o, minLen) {
						if (o) {
							if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
							var n = Object.prototype.toString.call(o).slice(8, -1);
							return (
								'Object' === n && o.constructor && (n = o.constructor.name),
								'Map' === n || 'Set' === n
									? Array.from(o)
									: 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
									? _arrayLikeToArray(o, minLen)
									: void 0
							);
						}
					})(o)) ||
					(allowArrayLike && o && 'number' == typeof o.length)
				) {
					it && (o = it);
					var i = 0;
					return function () {
						return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
					};
				}
				throw new TypeError(
					'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
				);
			}
			var storedAnnotationsSymbol = Symbol('mobx-stored-annotations');
			function createDecoratorAnnotation(annotation) {
				return Object.assign(function decorator(target, property) {
					storeAnnotation(target, property, annotation);
				}, annotation);
			}
			function storeAnnotation(prototype, key, annotation) {
				hasProp(prototype, storedAnnotationsSymbol) ||
					addHiddenProp(prototype, storedAnnotationsSymbol, _extends({}, prototype[storedAnnotationsSymbol])),
					(function assertNotDecorated(prototype, annotation, key) {
						0;
					})(),
					(function isOverride(annotation) {
						return annotation.annotationType_ === OVERRIDE;
					})(annotation) || (prototype[storedAnnotationsSymbol][key] = annotation);
			}
			var $mobx = Symbol('mobx administration'),
				Atom = (function () {
					function Atom(name_) {
						void 0 === name_ && (name_ = 'Atom'),
							(this.name_ = void 0),
							(this.isPendingUnobservation_ = !1),
							(this.isBeingObserved_ = !1),
							(this.observers_ = new Set()),
							(this.diffValue_ = 0),
							(this.lastAccessedBy_ = 0),
							(this.lowestObserverState_ = IDerivationState_.NOT_TRACKING_),
							(this.onBOL = void 0),
							(this.onBUOL = void 0),
							(this.name_ = name_);
					}
					var _proto = Atom.prototype;
					return (
						(_proto.onBO = function onBO() {
							this.onBOL &&
								this.onBOL.forEach(function (listener) {
									return listener();
								});
						}),
						(_proto.onBUO = function onBUO() {
							this.onBUOL &&
								this.onBUOL.forEach(function (listener) {
									return listener();
								});
						}),
						(_proto.reportObserved = function reportObserved$1() {
							return reportObserved(this);
						}),
						(_proto.reportChanged = function reportChanged() {
							startBatch(),
								propagateChanged(this),
								(globalState.stateVersion =
									globalState.stateVersion < Number.MAX_SAFE_INTEGER ? globalState.stateVersion + 1 : Number.MIN_SAFE_INTEGER),
								endBatch();
						}),
						(_proto.toString = function toString() {
							return this.name_;
						}),
						Atom
					);
				})(),
				isAtom = createInstanceofPredicate('Atom', Atom);
			function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
				void 0 === onBecomeObservedHandler && (onBecomeObservedHandler = noop),
					void 0 === onBecomeUnobservedHandler && (onBecomeUnobservedHandler = noop);
				var atom = new Atom(name);
				return (
					onBecomeObservedHandler !== noop &&
						(function onBecomeObserved(thing, arg2, arg3) {
							return interceptHook(ON_BECOME_OBSERVED, thing, arg2, arg3);
						})(atom, onBecomeObservedHandler),
					onBecomeUnobservedHandler !== noop && onBecomeUnobserved(atom, onBecomeUnobservedHandler),
					atom
				);
			}
			var comparer = {
				identity: function identityComparer(a, b) {
					return a === b;
				},
				structural: function structuralComparer(a, b) {
					return deepEqual(a, b);
				},
				default: function defaultComparer(a, b) {
					return Object.is ? Object.is(a, b) : a === b ? 0 !== a || 1 / a == 1 / b : a != a && b != b;
				},
				shallow: function shallowComparer(a, b) {
					return deepEqual(a, b, 1);
				},
			};
			function deepEnhancer(v, _, name) {
				return isObservable(v)
					? v
					: Array.isArray(v)
					? observable.array(v, { name })
					: isPlainObject(v)
					? observable.object(v, void 0, { name })
					: isES6Map(v)
					? observable.map(v, { name })
					: isES6Set(v)
					? observable.set(v, { name })
					: 'function' != typeof v || isAction(v) || isFlow(v)
					? v
					: isGenerator(v)
					? flow(v)
					: autoAction(name, v);
			}
			function referenceEnhancer(newValue) {
				return newValue;
			}
			var OVERRIDE = 'override';
			function createActionAnnotation(name, options) {
				return { annotationType_: name, options_: options, make_: make_$1, extend_: extend_$1 };
			}
			function make_$1(adm, key, descriptor, source) {
				var _this$options_;
				if (null != (_this$options_ = this.options_) && _this$options_.bound) return null === this.extend_(adm, key, descriptor, !1) ? 0 : 1;
				if (source === adm.target_) return null === this.extend_(adm, key, descriptor, !1) ? 0 : 2;
				if (isAction(descriptor.value)) return 1;
				var actionDescriptor = createActionDescriptor(adm, this, key, descriptor, !1);
				return defineProperty(source, key, actionDescriptor), 2;
			}
			function extend_$1(adm, key, descriptor, proxyTrap) {
				var actionDescriptor = createActionDescriptor(adm, this, key, descriptor);
				return adm.defineProperty_(key, actionDescriptor, proxyTrap);
			}
			function createActionDescriptor(adm, annotation, key, descriptor, safeDescriptors) {
				var _annotation$options_,
					_annotation$options_$,
					_annotation$options_2,
					_annotation$options_$2,
					_annotation$options_3,
					_annotation$options_4,
					_adm$proxy_2;
				void 0 === safeDescriptors && (safeDescriptors = globalState.safeDescriptors),
					(function assertActionDescriptor(adm, _ref, key, _ref2) {
						_ref.annotationType_, _ref2.value;
					})(0, annotation, 0, descriptor);
				var _adm$proxy_,
					value = descriptor.value;
				null != (_annotation$options_ = annotation.options_) &&
					_annotation$options_.bound &&
					(value = value.bind(null != (_adm$proxy_ = adm.proxy_) ? _adm$proxy_ : adm.target_));
				return {
					value: createAction(
						null != (_annotation$options_$ = null == (_annotation$options_2 = annotation.options_) ? void 0 : _annotation$options_2.name)
							? _annotation$options_$
							: key.toString(),
						value,
						null != (_annotation$options_$2 = null == (_annotation$options_3 = annotation.options_) ? void 0 : _annotation$options_3.autoAction) &&
							_annotation$options_$2,
						null != (_annotation$options_4 = annotation.options_) && _annotation$options_4.bound
							? null != (_adm$proxy_2 = adm.proxy_)
								? _adm$proxy_2
								: adm.target_
							: void 0
					),
					configurable: !safeDescriptors || adm.isPlainObject_,
					enumerable: !1,
					writable: !safeDescriptors,
				};
			}
			function createFlowAnnotation(name, options) {
				return { annotationType_: name, options_: options, make_: make_$2, extend_: extend_$2 };
			}
			function make_$2(adm, key, descriptor, source) {
				var _this$options_;
				if (source === adm.target_) return null === this.extend_(adm, key, descriptor, !1) ? 0 : 2;
				if (
					null != (_this$options_ = this.options_) &&
					_this$options_.bound &&
					(!hasProp(adm.target_, key) || !isFlow(adm.target_[key])) &&
					null === this.extend_(adm, key, descriptor, !1)
				)
					return 0;
				if (isFlow(descriptor.value)) return 1;
				var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, !1, !1);
				return defineProperty(source, key, flowDescriptor), 2;
			}
			function extend_$2(adm, key, descriptor, proxyTrap) {
				var _this$options_2,
					flowDescriptor = createFlowDescriptor(
						adm,
						this,
						key,
						descriptor,
						null == (_this$options_2 = this.options_) ? void 0 : _this$options_2.bound
					);
				return adm.defineProperty_(key, flowDescriptor, proxyTrap);
			}
			function createFlowDescriptor(adm, annotation, key, descriptor, bound, safeDescriptors) {
				void 0 === safeDescriptors && (safeDescriptors = globalState.safeDescriptors),
					(function assertFlowDescriptor(adm, _ref, key, _ref2) {
						_ref.annotationType_, _ref2.value;
					})(0, annotation, 0, descriptor);
				var _adm$proxy_,
					value = descriptor.value;
				(isFlow(value) || (value = flow(value)), bound) &&
					((value = value.bind(null != (_adm$proxy_ = adm.proxy_) ? _adm$proxy_ : adm.target_)).isMobXFlow = !0);
				return { value, configurable: !safeDescriptors || adm.isPlainObject_, enumerable: !1, writable: !safeDescriptors };
			}
			function createComputedAnnotation(name, options) {
				return { annotationType_: name, options_: options, make_: make_$3, extend_: extend_$3 };
			}
			function make_$3(adm, key, descriptor) {
				return null === this.extend_(adm, key, descriptor, !1) ? 0 : 1;
			}
			function extend_$3(adm, key, descriptor, proxyTrap) {
				return (
					(function assertComputedDescriptor(adm, _ref, key, _ref2) {
						_ref.annotationType_, _ref2.get;
						0;
					})(0, this, 0, descriptor),
					adm.defineComputedProperty_(key, _extends({}, this.options_, { get: descriptor.get, set: descriptor.set }), proxyTrap)
				);
			}
			function createObservableAnnotation(name, options) {
				return { annotationType_: name, options_: options, make_: make_$4, extend_: extend_$4 };
			}
			function make_$4(adm, key, descriptor) {
				return null === this.extend_(adm, key, descriptor, !1) ? 0 : 1;
			}
			function extend_$4(adm, key, descriptor, proxyTrap) {
				var _this$options_$enhanc, _this$options_;
				return (
					(function assertObservableDescriptor(adm, _ref, key, descriptor) {
						_ref.annotationType_;
						0;
					})(0, this),
					adm.defineObservableProperty_(
						key,
						descriptor.value,
						null != (_this$options_$enhanc = null == (_this$options_ = this.options_) ? void 0 : _this$options_.enhancer)
							? _this$options_$enhanc
							: deepEnhancer,
						proxyTrap
					)
				);
			}
			var AUTO = 'true',
				autoAnnotation = createAutoAnnotation();
			function createAutoAnnotation(options) {
				return { annotationType_: AUTO, options_: options, make_: make_$5, extend_: extend_$5 };
			}
			function make_$5(adm, key, descriptor, source) {
				var _this$options_3, _this$options_4, _this$options_2, _this$options_;
				if (descriptor.get) return computed.make_(adm, key, descriptor, source);
				if (descriptor.set) {
					var set = createAction(key.toString(), descriptor.set);
					return source === adm.target_
						? null === adm.defineProperty_(key, { configurable: !globalState.safeDescriptors || adm.isPlainObject_, set })
							? 0
							: 2
						: (defineProperty(source, key, { configurable: !0, set }), 2);
				}
				if (source !== adm.target_ && 'function' == typeof descriptor.value)
					return isGenerator(descriptor.value)
						? (null != (_this$options_ = this.options_) && _this$options_.autoBind ? flow.bound : flow).make_(adm, key, descriptor, source)
						: (null != (_this$options_2 = this.options_) && _this$options_2.autoBind ? autoAction.bound : autoAction).make_(
								adm,
								key,
								descriptor,
								source
						  );
				var _adm$proxy_,
					observableAnnotation = !1 === (null == (_this$options_3 = this.options_) ? void 0 : _this$options_3.deep) ? observable.ref : observable;
				'function' == typeof descriptor.value &&
					null != (_this$options_4 = this.options_) &&
					_this$options_4.autoBind &&
					(descriptor.value = descriptor.value.bind(null != (_adm$proxy_ = adm.proxy_) ? _adm$proxy_ : adm.target_));
				return observableAnnotation.make_(adm, key, descriptor, source);
			}
			function extend_$5(adm, key, descriptor, proxyTrap) {
				var _this$options_5, _this$options_6, _adm$proxy_2;
				if (descriptor.get) return computed.extend_(adm, key, descriptor, proxyTrap);
				if (descriptor.set)
					return adm.defineProperty_(
						key,
						{ configurable: !globalState.safeDescriptors || adm.isPlainObject_, set: createAction(key.toString(), descriptor.set) },
						proxyTrap
					);
				'function' == typeof descriptor.value &&
					null != (_this$options_5 = this.options_) &&
					_this$options_5.autoBind &&
					(descriptor.value = descriptor.value.bind(null != (_adm$proxy_2 = adm.proxy_) ? _adm$proxy_2 : adm.target_));
				return (!1 === (null == (_this$options_6 = this.options_) ? void 0 : _this$options_6.deep) ? observable.ref : observable).extend_(
					adm,
					key,
					descriptor,
					proxyTrap
				);
			}
			var defaultCreateObservableOptions = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
			function asCreateObservableOptions(thing) {
				return thing || defaultCreateObservableOptions;
			}
			Object.freeze(defaultCreateObservableOptions);
			var observableAnnotation = createObservableAnnotation('observable'),
				observableRefAnnotation = createObservableAnnotation('observable.ref', { enhancer: referenceEnhancer }),
				observableShallowAnnotation = createObservableAnnotation('observable.shallow', {
					enhancer: function shallowEnhancer(v, _, name) {
						return null == v || isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v)
							? v
							: Array.isArray(v)
							? observable.array(v, { name, deep: !1 })
							: isPlainObject(v)
							? observable.object(v, void 0, { name, deep: !1 })
							: isES6Map(v)
							? observable.map(v, { name, deep: !1 })
							: isES6Set(v)
							? observable.set(v, { name, deep: !1 })
							: void 0;
					},
				}),
				observableStructAnnotation = createObservableAnnotation('observable.struct', {
					enhancer: function refStructEnhancer(v, oldValue) {
						return deepEqual(v, oldValue) ? oldValue : v;
					},
				}),
				observableDecoratorAnnotation = createDecoratorAnnotation(observableAnnotation);
			function getEnhancerFromOptions(options) {
				return !0 === options.deep
					? deepEnhancer
					: !1 === options.deep
					? referenceEnhancer
					: (function getEnhancerFromAnnotation(annotation) {
							var _annotation$options_$, _annotation$options_;
							return annotation &&
								null != (_annotation$options_$ = null == (_annotation$options_ = annotation.options_) ? void 0 : _annotation$options_.enhancer)
								? _annotation$options_$
								: deepEnhancer;
					  })(options.defaultDecorator);
			}
			function createObservable(v, arg2, arg3) {
				if (!isStringish(arg2))
					return isObservable(v)
						? v
						: isPlainObject(v)
						? observable.object(v, arg2, arg3)
						: Array.isArray(v)
						? observable.array(v, arg2)
						: isES6Map(v)
						? observable.map(v, arg2)
						: isES6Set(v)
						? observable.set(v, arg2)
						: 'object' == typeof v && null !== v
						? v
						: observable.box(v, arg2);
				storeAnnotation(v, arg2, observableAnnotation);
			}
			assign(createObservable, observableDecoratorAnnotation);
			var _getDescriptor$config,
				_getDescriptor,
				observable = assign(createObservable, {
					box: function box(value, options) {
						var o = asCreateObservableOptions(options);
						return new ObservableValue(value, getEnhancerFromOptions(o), o.name, !0, o.equals);
					},
					array: function array(initialValues, options) {
						var o = asCreateObservableOptions(options);
						return (!1 === globalState.useProxies || !1 === o.proxy ? createLegacyArray : createObservableArray)(
							initialValues,
							getEnhancerFromOptions(o),
							o.name
						);
					},
					map: function map(initialValues, options) {
						var o = asCreateObservableOptions(options);
						return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
					},
					set: function set(initialValues, options) {
						var o = asCreateObservableOptions(options);
						return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
					},
					object: function object(props, decorators, options) {
						return extendObservable(
							!1 === globalState.useProxies || !1 === (null == options ? void 0 : options.proxy)
								? asObservableObject({}, options)
								: (function asDynamicObservableObject(target, options) {
										var _target$$mobx, _target$$mobx$proxy_;
										return (
											assertProxies(),
											(target = asObservableObject(target, options)),
											null != (_target$$mobx$proxy_ = (_target$$mobx = target[$mobx]).proxy_)
												? _target$$mobx$proxy_
												: (_target$$mobx.proxy_ = new Proxy(target, objectProxyTraps))
										);
								  })({}, options),
							props,
							decorators
						);
					},
					ref: createDecoratorAnnotation(observableRefAnnotation),
					shallow: createDecoratorAnnotation(observableShallowAnnotation),
					deep: observableDecoratorAnnotation,
					struct: createDecoratorAnnotation(observableStructAnnotation),
				}),
				computedAnnotation = createComputedAnnotation('computed'),
				computedStructAnnotation = createComputedAnnotation('computed.struct', { equals: comparer.structural }),
				computed = function computed(arg1, arg2) {
					if (isStringish(arg2)) return storeAnnotation(arg1, arg2, computedAnnotation);
					if (isPlainObject(arg1)) return createDecoratorAnnotation(createComputedAnnotation('computed', arg1));
					var opts = isPlainObject(arg2) ? arg2 : {};
					return (opts.get = arg1), opts.name || (opts.name = arg1.name || ''), new ComputedValue(opts);
				};
			Object.assign(computed, computedAnnotation), (computed.struct = createDecoratorAnnotation(computedStructAnnotation));
			var _Symbol$toPrimitive,
				currentActionId = 0,
				nextActionId = 1,
				isFunctionNameConfigurable =
					null != (_getDescriptor$config = null == (_getDescriptor = getDescriptor(function () {}, 'name')) ? void 0 : _getDescriptor.configurable) &&
					_getDescriptor$config,
				tmpNameDescriptor = { value: 'action', configurable: !0, writable: !1, enumerable: !1 };
			function createAction(actionName, fn, autoAction, ref) {
				function res() {
					return executeAction(actionName, autoAction, fn, ref || this, arguments);
				}
				return (
					void 0 === autoAction && (autoAction = !1),
					(res.isMobxAction = !0),
					isFunctionNameConfigurable && ((tmpNameDescriptor.value = actionName), defineProperty(res, 'name', tmpNameDescriptor)),
					res
				);
			}
			function executeAction(actionName, canRunAsDerivation, fn, scope, args) {
				var runInfo = (function _startAction(actionName, canRunAsDerivation, scope, args) {
					var notifySpy_ = !1,
						startTime_ = 0;
					0;
					var prevDerivation_ = globalState.trackingDerivation,
						runAsAction = !canRunAsDerivation || !prevDerivation_;
					startBatch();
					var prevAllowStateChanges_ = globalState.allowStateChanges;
					runAsAction && (untrackedStart(), (prevAllowStateChanges_ = allowStateChangesStart(!0)));
					var prevAllowStateReads_ = allowStateReadsStart(!0),
						runInfo = {
							runAsAction_: runAsAction,
							prevDerivation_,
							prevAllowStateChanges_,
							prevAllowStateReads_,
							notifySpy_,
							startTime_,
							actionId_: nextActionId++,
							parentActionId_: currentActionId,
						};
					return (currentActionId = runInfo.actionId_), runInfo;
				})(0, canRunAsDerivation);
				try {
					return fn.apply(scope, args);
				} catch (err) {
					throw ((runInfo.error_ = err), err);
				} finally {
					!(function _endAction(runInfo) {
						currentActionId !== runInfo.actionId_ && die(30);
						(currentActionId = runInfo.parentActionId_), void 0 !== runInfo.error_ && (globalState.suppressReactionErrors = !0);
						allowStateChangesEnd(runInfo.prevAllowStateChanges_),
							allowStateReadsEnd(runInfo.prevAllowStateReads_),
							endBatch(),
							runInfo.runAsAction_ && untrackedEnd(runInfo.prevDerivation_);
						0;
						globalState.suppressReactionErrors = !1;
					})(runInfo);
				}
			}
			function allowStateChanges(allowStateChanges, func) {
				var prev = allowStateChangesStart(allowStateChanges);
				try {
					return func();
				} finally {
					allowStateChangesEnd(prev);
				}
			}
			function allowStateChangesStart(allowStateChanges) {
				var prev = globalState.allowStateChanges;
				return (globalState.allowStateChanges = allowStateChanges), prev;
			}
			function allowStateChangesEnd(prev) {
				globalState.allowStateChanges = prev;
			}
			_Symbol$toPrimitive = Symbol.toPrimitive;
			var _Symbol$toPrimitive$1,
				ObservableValue = (function (_Atom) {
					function ObservableValue(value, enhancer, name_, notifySpy, equals) {
						var _this;
						return (
							void 0 === name_ && (name_ = 'ObservableValue'),
							void 0 === notifySpy && (notifySpy = !0),
							void 0 === equals && (equals = comparer.default),
							((_this = _Atom.call(this, name_) || this).enhancer = void 0),
							(_this.name_ = void 0),
							(_this.equals = void 0),
							(_this.hasUnreportedChange_ = !1),
							(_this.interceptors_ = void 0),
							(_this.changeListeners_ = void 0),
							(_this.value_ = void 0),
							(_this.dehancer = void 0),
							(_this.enhancer = enhancer),
							(_this.name_ = name_),
							(_this.equals = equals),
							(_this.value_ = enhancer(value, void 0, name_)),
							_this
						);
					}
					_inheritsLoose(ObservableValue, _Atom);
					var _proto = ObservableValue.prototype;
					return (
						(_proto.dehanceValue = function dehanceValue(value) {
							return void 0 !== this.dehancer ? this.dehancer(value) : value;
						}),
						(_proto.set = function set(newValue) {
							this.value_;
							if ((newValue = this.prepareNewValue_(newValue)) !== globalState.UNCHANGED) {
								0, this.setNewValue_(newValue);
							}
						}),
						(_proto.prepareNewValue_ = function prepareNewValue_(newValue) {
							if ((checkIfStateModificationsAreAllowed(this), hasInterceptors(this))) {
								var change = interceptChange(this, { object: this, type: UPDATE, newValue });
								if (!change) return globalState.UNCHANGED;
								newValue = change.newValue;
							}
							return (
								(newValue = this.enhancer(newValue, this.value_, this.name_)), this.equals(this.value_, newValue) ? globalState.UNCHANGED : newValue
							);
						}),
						(_proto.setNewValue_ = function setNewValue_(newValue) {
							var oldValue = this.value_;
							(this.value_ = newValue),
								this.reportChanged(),
								hasListeners(this) && notifyListeners(this, { type: UPDATE, object: this, newValue, oldValue });
						}),
						(_proto.get = function get() {
							return this.reportObserved(), this.dehanceValue(this.value_);
						}),
						(_proto.intercept_ = function intercept_(handler) {
							return registerInterceptor(this, handler);
						}),
						(_proto.observe_ = function observe_(listener, fireImmediately) {
							return (
								fireImmediately &&
									listener({
										observableKind: 'value',
										debugObjectName: this.name_,
										object: this,
										type: UPDATE,
										newValue: this.value_,
										oldValue: void 0,
									}),
								registerListener(this, listener)
							);
						}),
						(_proto.raw = function raw() {
							return this.value_;
						}),
						(_proto.toJSON = function toJSON() {
							return this.get();
						}),
						(_proto.toString = function toString() {
							return this.name_ + '[' + this.value_ + ']';
						}),
						(_proto.valueOf = function valueOf() {
							return toPrimitive(this.get());
						}),
						(_proto[_Symbol$toPrimitive] = function () {
							return this.valueOf();
						}),
						ObservableValue
					);
				})(Atom),
				isObservableValue = createInstanceofPredicate('ObservableValue', ObservableValue);
			_Symbol$toPrimitive$1 = Symbol.toPrimitive;
			var IDerivationState_,
				TraceMode,
				ComputedValue = (function () {
					function ComputedValue(options) {
						(this.dependenciesState_ = IDerivationState_.NOT_TRACKING_),
							(this.observing_ = []),
							(this.newObserving_ = null),
							(this.isBeingObserved_ = !1),
							(this.isPendingUnobservation_ = !1),
							(this.observers_ = new Set()),
							(this.diffValue_ = 0),
							(this.runId_ = 0),
							(this.lastAccessedBy_ = 0),
							(this.lowestObserverState_ = IDerivationState_.UP_TO_DATE_),
							(this.unboundDepsCount_ = 0),
							(this.value_ = new CaughtException(null)),
							(this.name_ = void 0),
							(this.triggeredBy_ = void 0),
							(this.isComputing_ = !1),
							(this.isRunningSetter_ = !1),
							(this.derivation = void 0),
							(this.setter_ = void 0),
							(this.isTracing_ = TraceMode.NONE),
							(this.scope_ = void 0),
							(this.equals_ = void 0),
							(this.requiresReaction_ = void 0),
							(this.keepAlive_ = void 0),
							(this.onBOL = void 0),
							(this.onBUOL = void 0),
							options.get || die(31),
							(this.derivation = options.get),
							(this.name_ = options.name || 'ComputedValue'),
							options.set && (this.setter_ = createAction('ComputedValue-setter', options.set)),
							(this.equals_ = options.equals || (options.compareStructural || options.struct ? comparer.structural : comparer.default)),
							(this.scope_ = options.context),
							(this.requiresReaction_ = options.requiresReaction),
							(this.keepAlive_ = !!options.keepAlive);
					}
					var _proto = ComputedValue.prototype;
					return (
						(_proto.onBecomeStale_ = function onBecomeStale_() {
							!(function propagateMaybeChanged(observable) {
								if (observable.lowestObserverState_ !== IDerivationState_.UP_TO_DATE_) return;
								(observable.lowestObserverState_ = IDerivationState_.POSSIBLY_STALE_),
									observable.observers_.forEach(function (d) {
										d.dependenciesState_ === IDerivationState_.UP_TO_DATE_ &&
											((d.dependenciesState_ = IDerivationState_.POSSIBLY_STALE_), d.onBecomeStale_());
									});
							})(this);
						}),
						(_proto.onBO = function onBO() {
							this.onBOL &&
								this.onBOL.forEach(function (listener) {
									return listener();
								});
						}),
						(_proto.onBUO = function onBUO() {
							this.onBUOL &&
								this.onBUOL.forEach(function (listener) {
									return listener();
								});
						}),
						(_proto.get = function get() {
							if (
								(this.isComputing_ && die(32, this.name_, this.derivation),
								0 !== globalState.inBatch || 0 !== this.observers_.size || this.keepAlive_)
							) {
								if ((reportObserved(this), shouldCompute(this))) {
									var prevTrackingContext = globalState.trackingContext;
									this.keepAlive_ && !prevTrackingContext && (globalState.trackingContext = this),
										this.trackAndCompute() &&
											(function propagateChangeConfirmed(observable) {
												if (observable.lowestObserverState_ === IDerivationState_.STALE_) return;
												(observable.lowestObserverState_ = IDerivationState_.STALE_),
													observable.observers_.forEach(function (d) {
														d.dependenciesState_ === IDerivationState_.POSSIBLY_STALE_
															? (d.dependenciesState_ = IDerivationState_.STALE_)
															: d.dependenciesState_ === IDerivationState_.UP_TO_DATE_ &&
															  (observable.lowestObserverState_ = IDerivationState_.UP_TO_DATE_);
													});
											})(this),
										(globalState.trackingContext = prevTrackingContext);
								}
							} else shouldCompute(this) && (this.warnAboutUntrackedRead_(), startBatch(), (this.value_ = this.computeValue_(!1)), endBatch());
							var result = this.value_;
							if (isCaughtException(result)) throw result.cause;
							return result;
						}),
						(_proto.set = function set(value) {
							if (this.setter_) {
								this.isRunningSetter_ && die(33, this.name_), (this.isRunningSetter_ = !0);
								try {
									this.setter_.call(this.scope_, value);
								} finally {
									this.isRunningSetter_ = !1;
								}
							} else die(34, this.name_);
						}),
						(_proto.trackAndCompute = function trackAndCompute() {
							var oldValue = this.value_,
								wasSuspended = this.dependenciesState_ === IDerivationState_.NOT_TRACKING_,
								newValue = this.computeValue_(!0),
								changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals_(oldValue, newValue);
							return changed && (this.value_ = newValue), changed;
						}),
						(_proto.computeValue_ = function computeValue_(track) {
							this.isComputing_ = !0;
							var res,
								prev = allowStateChangesStart(!1);
							if (track) res = trackDerivedFunction(this, this.derivation, this.scope_);
							else if (!0 === globalState.disableErrorBoundaries) res = this.derivation.call(this.scope_);
							else
								try {
									res = this.derivation.call(this.scope_);
								} catch (e) {
									res = new CaughtException(e);
								}
							return allowStateChangesEnd(prev), (this.isComputing_ = !1), res;
						}),
						(_proto.suspend_ = function suspend_() {
							this.keepAlive_ || (clearObserving(this), (this.value_ = void 0));
						}),
						(_proto.observe_ = function observe_(listener, fireImmediately) {
							var _this = this,
								firstTime = !0,
								prevValue = void 0;
							return autorun(function () {
								var newValue = _this.get();
								if (!firstTime || fireImmediately) {
									var prevU = untrackedStart();
									listener({ observableKind: 'computed', debugObjectName: _this.name_, type: UPDATE, object: _this, newValue, oldValue: prevValue }),
										untrackedEnd(prevU);
								}
								(firstTime = !1), (prevValue = newValue);
							});
						}),
						(_proto.warnAboutUntrackedRead_ = function warnAboutUntrackedRead_() {}),
						(_proto.toString = function toString() {
							return this.name_ + '[' + this.derivation.toString() + ']';
						}),
						(_proto.valueOf = function valueOf() {
							return toPrimitive(this.get());
						}),
						(_proto[_Symbol$toPrimitive$1] = function () {
							return this.valueOf();
						}),
						ComputedValue
					);
				})(),
				isComputedValue = createInstanceofPredicate('ComputedValue', ComputedValue);
			!(function (IDerivationState_) {
				(IDerivationState_[(IDerivationState_.NOT_TRACKING_ = -1)] = 'NOT_TRACKING_'),
					(IDerivationState_[(IDerivationState_.UP_TO_DATE_ = 0)] = 'UP_TO_DATE_'),
					(IDerivationState_[(IDerivationState_.POSSIBLY_STALE_ = 1)] = 'POSSIBLY_STALE_'),
					(IDerivationState_[(IDerivationState_.STALE_ = 2)] = 'STALE_');
			})(IDerivationState_ || (IDerivationState_ = {})),
				(function (TraceMode) {
					(TraceMode[(TraceMode.NONE = 0)] = 'NONE'), (TraceMode[(TraceMode.LOG = 1)] = 'LOG'), (TraceMode[(TraceMode.BREAK = 2)] = 'BREAK');
				})(TraceMode || (TraceMode = {}));
			var CaughtException = function CaughtException(cause) {
				(this.cause = void 0), (this.cause = cause);
			};
			function isCaughtException(e) {
				return e instanceof CaughtException;
			}
			function shouldCompute(derivation) {
				switch (derivation.dependenciesState_) {
					case IDerivationState_.UP_TO_DATE_:
						return !1;
					case IDerivationState_.NOT_TRACKING_:
					case IDerivationState_.STALE_:
						return !0;
					case IDerivationState_.POSSIBLY_STALE_:
						for (
							var prevAllowStateReads = allowStateReadsStart(!0),
								prevUntracked = untrackedStart(),
								obs = derivation.observing_,
								l = obs.length,
								i = 0;
							i < l;
							i++
						) {
							var obj = obs[i];
							if (isComputedValue(obj)) {
								if (globalState.disableErrorBoundaries) obj.get();
								else
									try {
										obj.get();
									} catch (e) {
										return untrackedEnd(prevUntracked), allowStateReadsEnd(prevAllowStateReads), !0;
									}
								if (derivation.dependenciesState_ === IDerivationState_.STALE_)
									return untrackedEnd(prevUntracked), allowStateReadsEnd(prevAllowStateReads), !0;
							}
						}
						return changeDependenciesStateTo0(derivation), untrackedEnd(prevUntracked), allowStateReadsEnd(prevAllowStateReads), !1;
				}
			}
			function checkIfStateModificationsAreAllowed(atom) {}
			function trackDerivedFunction(derivation, f, context) {
				var prevAllowStateReads = allowStateReadsStart(!0);
				changeDependenciesStateTo0(derivation),
					(derivation.newObserving_ = new Array(derivation.observing_.length + 100)),
					(derivation.unboundDepsCount_ = 0),
					(derivation.runId_ = ++globalState.runId);
				var result,
					prevTracking = globalState.trackingDerivation;
				if (((globalState.trackingDerivation = derivation), globalState.inBatch++, !0 === globalState.disableErrorBoundaries))
					result = f.call(context);
				else
					try {
						result = f.call(context);
					} catch (e) {
						result = new CaughtException(e);
					}
				return (
					globalState.inBatch--,
					(globalState.trackingDerivation = prevTracking),
					(function bindDependencies(derivation) {
						for (
							var prevObserving = derivation.observing_,
								observing = (derivation.observing_ = derivation.newObserving_),
								lowestNewObservingDerivationState = IDerivationState_.UP_TO_DATE_,
								i0 = 0,
								l = derivation.unboundDepsCount_,
								i = 0;
							i < l;
							i++
						) {
							var dep = observing[i];
							0 === dep.diffValue_ && ((dep.diffValue_ = 1), i0 !== i && (observing[i0] = dep), i0++),
								dep.dependenciesState_ > lowestNewObservingDerivationState && (lowestNewObservingDerivationState = dep.dependenciesState_);
						}
						(observing.length = i0), (derivation.newObserving_ = null), (l = prevObserving.length);
						for (; l--; ) {
							var _dep = prevObserving[l];
							0 === _dep.diffValue_ && removeObserver(_dep, derivation), (_dep.diffValue_ = 0);
						}
						for (; i0--; ) {
							var _dep2 = observing[i0];
							1 === _dep2.diffValue_ && ((_dep2.diffValue_ = 0), addObserver(_dep2, derivation));
						}
						lowestNewObservingDerivationState !== IDerivationState_.UP_TO_DATE_ &&
							((derivation.dependenciesState_ = lowestNewObservingDerivationState), derivation.onBecomeStale_());
					})(derivation),
					allowStateReadsEnd(prevAllowStateReads),
					result
				);
			}
			function clearObserving(derivation) {
				var obs = derivation.observing_;
				derivation.observing_ = [];
				for (var i = obs.length; i--; ) removeObserver(obs[i], derivation);
				derivation.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
			}
			function untracked(action) {
				var prev = untrackedStart();
				try {
					return action();
				} finally {
					untrackedEnd(prev);
				}
			}
			function untrackedStart() {
				var prev = globalState.trackingDerivation;
				return (globalState.trackingDerivation = null), prev;
			}
			function untrackedEnd(prev) {
				globalState.trackingDerivation = prev;
			}
			function allowStateReadsStart(allowStateReads) {
				var prev = globalState.allowStateReads;
				return (globalState.allowStateReads = allowStateReads), prev;
			}
			function allowStateReadsEnd(prev) {
				globalState.allowStateReads = prev;
			}
			function changeDependenciesStateTo0(derivation) {
				if (derivation.dependenciesState_ !== IDerivationState_.UP_TO_DATE_) {
					derivation.dependenciesState_ = IDerivationState_.UP_TO_DATE_;
					for (var obs = derivation.observing_, i = obs.length; i--; ) obs[i].lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
				}
			}
			var MobXGlobals = function MobXGlobals() {
					(this.version = 6),
						(this.UNCHANGED = {}),
						(this.trackingDerivation = null),
						(this.trackingContext = null),
						(this.runId = 0),
						(this.mobxGuid = 0),
						(this.inBatch = 0),
						(this.pendingUnobservations = []),
						(this.pendingReactions = []),
						(this.isRunningReactions = !1),
						(this.allowStateChanges = !1),
						(this.allowStateReads = !0),
						(this.enforceActions = !0),
						(this.spyListeners = []),
						(this.globalReactionErrorHandlers = []),
						(this.computedRequiresReaction = !1),
						(this.reactionRequiresObservable = !1),
						(this.observableRequiresReaction = !1),
						(this.disableErrorBoundaries = !1),
						(this.suppressReactionErrors = !1),
						(this.useProxies = !0),
						(this.verifyProxies = !1),
						(this.safeDescriptors = !0),
						(this.stateVersion = Number.MIN_SAFE_INTEGER);
				},
				canMergeGlobalState = !0,
				isolateCalled = !1,
				globalState = (function () {
					var global = getGlobal();
					return (
						global.__mobxInstanceCount > 0 && !global.__mobxGlobals && (canMergeGlobalState = !1),
						global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version && (canMergeGlobalState = !1),
						canMergeGlobalState
							? global.__mobxGlobals
								? ((global.__mobxInstanceCount += 1), global.__mobxGlobals.UNCHANGED || (global.__mobxGlobals.UNCHANGED = {}), global.__mobxGlobals)
								: ((global.__mobxInstanceCount = 1), (global.__mobxGlobals = new MobXGlobals()))
							: (setTimeout(function () {
									isolateCalled || die(35);
							  }, 1),
							  new MobXGlobals())
					);
				})();
			function addObserver(observable, node) {
				observable.observers_.add(node),
					observable.lowestObserverState_ > node.dependenciesState_ && (observable.lowestObserverState_ = node.dependenciesState_);
			}
			function removeObserver(observable, node) {
				observable.observers_.delete(node), 0 === observable.observers_.size && queueForUnobservation(observable);
			}
			function queueForUnobservation(observable) {
				!1 === observable.isPendingUnobservation_ && ((observable.isPendingUnobservation_ = !0), globalState.pendingUnobservations.push(observable));
			}
			function startBatch() {
				globalState.inBatch++;
			}
			function endBatch() {
				if (0 == --globalState.inBatch) {
					runReactions();
					for (var list = globalState.pendingUnobservations, i = 0; i < list.length; i++) {
						var observable = list[i];
						(observable.isPendingUnobservation_ = !1),
							0 === observable.observers_.size &&
								(observable.isBeingObserved_ && ((observable.isBeingObserved_ = !1), observable.onBUO()),
								observable instanceof ComputedValue && observable.suspend_());
					}
					globalState.pendingUnobservations = [];
				}
			}
			function reportObserved(observable) {
				var derivation = globalState.trackingDerivation;
				return null !== derivation
					? (derivation.runId_ !== observable.lastAccessedBy_ &&
							((observable.lastAccessedBy_ = derivation.runId_),
							(derivation.newObserving_[derivation.unboundDepsCount_++] = observable),
							!observable.isBeingObserved_ && globalState.trackingContext && ((observable.isBeingObserved_ = !0), observable.onBO())),
					  observable.isBeingObserved_)
					: (0 === observable.observers_.size && globalState.inBatch > 0 && queueForUnobservation(observable), !1);
			}
			function propagateChanged(observable) {
				observable.lowestObserverState_ !== IDerivationState_.STALE_ &&
					((observable.lowestObserverState_ = IDerivationState_.STALE_),
					observable.observers_.forEach(function (d) {
						d.dependenciesState_ === IDerivationState_.UP_TO_DATE_ && d.onBecomeStale_(), (d.dependenciesState_ = IDerivationState_.STALE_);
					}));
			}
			var Reaction = (function () {
				function Reaction(name_, onInvalidate_, errorHandler_, requiresObservable_) {
					void 0 === name_ && (name_ = 'Reaction'),
						(this.name_ = void 0),
						(this.onInvalidate_ = void 0),
						(this.errorHandler_ = void 0),
						(this.requiresObservable_ = void 0),
						(this.observing_ = []),
						(this.newObserving_ = []),
						(this.dependenciesState_ = IDerivationState_.NOT_TRACKING_),
						(this.diffValue_ = 0),
						(this.runId_ = 0),
						(this.unboundDepsCount_ = 0),
						(this.isDisposed_ = !1),
						(this.isScheduled_ = !1),
						(this.isTrackPending_ = !1),
						(this.isRunning_ = !1),
						(this.isTracing_ = TraceMode.NONE),
						(this.name_ = name_),
						(this.onInvalidate_ = onInvalidate_),
						(this.errorHandler_ = errorHandler_),
						(this.requiresObservable_ = requiresObservable_);
				}
				var _proto = Reaction.prototype;
				return (
					(_proto.onBecomeStale_ = function onBecomeStale_() {
						this.schedule_();
					}),
					(_proto.schedule_ = function schedule_() {
						this.isScheduled_ || ((this.isScheduled_ = !0), globalState.pendingReactions.push(this), runReactions());
					}),
					(_proto.isScheduled = function isScheduled() {
						return this.isScheduled_;
					}),
					(_proto.runReaction_ = function runReaction_() {
						if (!this.isDisposed_) {
							startBatch(), (this.isScheduled_ = !1);
							var prev = globalState.trackingContext;
							if (((globalState.trackingContext = this), shouldCompute(this))) {
								this.isTrackPending_ = !0;
								try {
									this.onInvalidate_();
								} catch (e) {
									this.reportExceptionInDerivation_(e);
								}
							}
							(globalState.trackingContext = prev), endBatch();
						}
					}),
					(_proto.track = function track(fn) {
						if (!this.isDisposed_) {
							startBatch();
							0, (this.isRunning_ = !0);
							var prevReaction = globalState.trackingContext;
							globalState.trackingContext = this;
							var result = trackDerivedFunction(this, fn, void 0);
							(globalState.trackingContext = prevReaction),
								(this.isRunning_ = !1),
								(this.isTrackPending_ = !1),
								this.isDisposed_ && clearObserving(this),
								isCaughtException(result) && this.reportExceptionInDerivation_(result.cause),
								endBatch();
						}
					}),
					(_proto.reportExceptionInDerivation_ = function reportExceptionInDerivation_(error) {
						var _this = this;
						if (this.errorHandler_) this.errorHandler_(error, this);
						else {
							if (globalState.disableErrorBoundaries) throw error;
							var message = "[mobx] uncaught error in '" + this + "'";
							globalState.suppressReactionErrors || console.error(message, error),
								globalState.globalReactionErrorHandlers.forEach(function (f) {
									return f(error, _this);
								});
						}
					}),
					(_proto.dispose = function dispose() {
						this.isDisposed_ || ((this.isDisposed_ = !0), this.isRunning_ || (startBatch(), clearObserving(this), endBatch()));
					}),
					(_proto.getDisposer_ = function getDisposer_() {
						var r = this.dispose.bind(this);
						return (r[$mobx] = this), r;
					}),
					(_proto.toString = function toString() {
						return 'Reaction[' + this.name_ + ']';
					}),
					(_proto.trace = function trace$1(enterBreakPoint) {
						void 0 === enterBreakPoint && (enterBreakPoint = !1),
							(function trace() {
								die('trace() is not available in production builds');
								for (var enterBreakPoint = !1, _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
									args[_key] = arguments[_key];
								'boolean' == typeof args[args.length - 1] && (enterBreakPoint = args.pop());
								var derivation = (function getAtomFromArgs(args) {
									switch (args.length) {
										case 0:
											return globalState.trackingDerivation;
										case 1:
											return getAtom(args[0]);
										case 2:
											return getAtom(args[0], args[1]);
									}
								})(args);
								if (!derivation)
									return die(
										"'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly"
									);
								derivation.isTracing_ === TraceMode.NONE && console.log("[mobx.trace] '" + derivation.name_ + "' tracing enabled");
								derivation.isTracing_ = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
							})(this, enterBreakPoint);
					}),
					Reaction
				);
			})();
			var MAX_REACTION_ITERATIONS = 100,
				reactionScheduler = function reactionScheduler(f) {
					return f();
				};
			function runReactions() {
				globalState.inBatch > 0 || globalState.isRunningReactions || reactionScheduler(runReactionsHelper);
			}
			function runReactionsHelper() {
				globalState.isRunningReactions = !0;
				for (var allReactions = globalState.pendingReactions, iterations = 0; allReactions.length > 0; ) {
					++iterations === MAX_REACTION_ITERATIONS && (console.error('[mobx] cycle in reaction: ' + allReactions[0]), allReactions.splice(0));
					for (var remainingReactions = allReactions.splice(0), i = 0, l = remainingReactions.length; i < l; i++)
						remainingReactions[i].runReaction_();
				}
				globalState.isRunningReactions = !1;
			}
			var isReaction = createInstanceofPredicate('Reaction', Reaction);
			var actionAnnotation = createActionAnnotation('action'),
				actionBoundAnnotation = createActionAnnotation('action.bound', { bound: !0 }),
				autoActionAnnotation = createActionAnnotation('autoAction', { autoAction: !0 }),
				autoActionBoundAnnotation = createActionAnnotation('autoAction.bound', { autoAction: !0, bound: !0 });
			function createActionFactory(autoAction) {
				return function action(arg1, arg2) {
					return isFunction(arg1)
						? createAction(arg1.name || '<unnamed action>', arg1, autoAction)
						: isFunction(arg2)
						? createAction(arg1, arg2, autoAction)
						: isStringish(arg2)
						? storeAnnotation(arg1, arg2, autoAction ? autoActionAnnotation : actionAnnotation)
						: isStringish(arg1)
						? createDecoratorAnnotation(createActionAnnotation(autoAction ? 'autoAction' : 'action', { name: arg1, autoAction }))
						: void 0;
				};
			}
			var action = createActionFactory(!1);
			Object.assign(action, actionAnnotation);
			var autoAction = createActionFactory(!0);
			function isAction(thing) {
				return isFunction(thing) && !0 === thing.isMobxAction;
			}
			function autorun(view, opts) {
				var _opts$name, _opts;
				void 0 === opts && (opts = EMPTY_OBJECT);
				var reaction,
					name = null != (_opts$name = null == (_opts = opts) ? void 0 : _opts.name) ? _opts$name : 'Autorun';
				if (!opts.scheduler && !opts.delay)
					reaction = new Reaction(
						name,
						function () {
							this.track(reactionRunner);
						},
						opts.onError,
						opts.requiresObservable
					);
				else {
					var scheduler = createSchedulerFromOptions(opts),
						isScheduled = !1;
					reaction = new Reaction(
						name,
						function () {
							isScheduled ||
								((isScheduled = !0),
								scheduler(function () {
									(isScheduled = !1), reaction.isDisposed_ || reaction.track(reactionRunner);
								}));
						},
						opts.onError,
						opts.requiresObservable
					);
				}
				function reactionRunner() {
					view(reaction);
				}
				return reaction.schedule_(), reaction.getDisposer_();
			}
			Object.assign(autoAction, autoActionAnnotation),
				(action.bound = createDecoratorAnnotation(actionBoundAnnotation)),
				(autoAction.bound = createDecoratorAnnotation(autoActionBoundAnnotation));
			var run = function run(f) {
				return f();
			};
			function createSchedulerFromOptions(opts) {
				return opts.scheduler
					? opts.scheduler
					: opts.delay
					? function (f) {
							return setTimeout(f, opts.delay);
					  }
					: run;
			}
			function reaction(expression, effect, opts) {
				var _opts$name2;
				void 0 === opts && (opts = EMPTY_OBJECT);
				var value,
					oldValue,
					name = null != (_opts$name2 = opts.name) ? _opts$name2 : 'Reaction',
					effectAction = action(
						name,
						opts.onError
							? (function wrapErrorHandler(errorHandler, baseFn) {
									return function () {
										try {
											return baseFn.apply(this, arguments);
										} catch (e) {
											errorHandler.call(this, e);
										}
									};
							  })(opts.onError, effect)
							: effect
					),
					runSync = !opts.scheduler && !opts.delay,
					scheduler = createSchedulerFromOptions(opts),
					firstTime = !0,
					isScheduled = !1,
					equals = opts.compareStructural ? comparer.structural : opts.equals || comparer.default,
					r = new Reaction(
						name,
						function () {
							firstTime || runSync ? reactionRunner() : isScheduled || ((isScheduled = !0), scheduler(reactionRunner));
						},
						opts.onError,
						opts.requiresObservable
					);
				function reactionRunner() {
					if (((isScheduled = !1), !r.isDisposed_)) {
						var changed = !1;
						r.track(function () {
							var nextValue = allowStateChanges(!1, function () {
								return expression(r);
							});
							(changed = firstTime || !equals(value, nextValue)), (oldValue = value), (value = nextValue);
						}),
							((firstTime && opts.fireImmediately) || (!firstTime && changed)) && effectAction(value, oldValue, r),
							(firstTime = !1);
					}
				}
				return r.schedule_(), r.getDisposer_();
			}
			var ON_BECOME_OBSERVED = 'onBO',
				ON_BECOME_UNOBSERVED = 'onBUO';
			function onBecomeUnobserved(thing, arg2, arg3) {
				return interceptHook(ON_BECOME_UNOBSERVED, thing, arg2, arg3);
			}
			function interceptHook(hook, thing, arg2, arg3) {
				var atom = 'function' == typeof arg3 ? getAtom(thing, arg2) : getAtom(thing),
					cb = isFunction(arg3) ? arg3 : arg2,
					listenersKey = hook + 'L';
				return (
					atom[listenersKey] ? atom[listenersKey].add(cb) : (atom[listenersKey] = new Set([cb])),
					function () {
						var hookListeners = atom[listenersKey];
						hookListeners && (hookListeners.delete(cb), 0 === hookListeners.size && delete atom[listenersKey]);
					}
				);
			}
			var NEVER = 'never',
				ALWAYS = 'always',
				OBSERVED = 'observed';
			function configure(options) {
				!0 === options.isolateGlobalState &&
					(function isolateGlobalState() {
						if (
							((globalState.pendingReactions.length || globalState.inBatch || globalState.isRunningReactions) && die(36),
							(isolateCalled = !0),
							canMergeGlobalState)
						) {
							var global = getGlobal();
							0 == --global.__mobxInstanceCount && (global.__mobxGlobals = void 0), (globalState = new MobXGlobals());
						}
					})();
				var useProxies = options.useProxies,
					enforceActions = options.enforceActions;
				if (
					(void 0 !== useProxies && (globalState.useProxies = useProxies === ALWAYS || (useProxies !== NEVER && 'undefined' != typeof Proxy)),
					'ifavailable' === useProxies && (globalState.verifyProxies = !0),
					void 0 !== enforceActions)
				) {
					var ea = enforceActions === ALWAYS ? ALWAYS : enforceActions === OBSERVED;
					(globalState.enforceActions = ea), (globalState.allowStateChanges = !0 !== ea && ea !== ALWAYS);
				}
				['computedRequiresReaction', 'reactionRequiresObservable', 'observableRequiresReaction', 'disableErrorBoundaries', 'safeDescriptors'].forEach(
					function (key) {
						key in options && (globalState[key] = !!options[key]);
					}
				),
					(globalState.allowStateReads = !globalState.observableRequiresReaction),
					options.reactionScheduler &&
						(function setReactionScheduler(fn) {
							var baseScheduler = reactionScheduler;
							reactionScheduler = function reactionScheduler(f) {
								return fn(function () {
									return baseScheduler(f);
								});
							};
						})(options.reactionScheduler);
			}
			function extendObservable(target, properties, annotations, options) {
				var descriptors = getOwnPropertyDescriptors(properties),
					adm = asObservableObject(target, options)[$mobx];
				startBatch();
				try {
					ownKeys(descriptors).forEach(function (key) {
						adm.extend_(key, descriptors[key], !annotations || !(key in annotations) || annotations[key]);
					});
				} finally {
					endBatch();
				}
				return target;
			}
			function getDependencyTree(thing, property) {
				return nodeToDependencyTree(getAtom(thing, property));
			}
			function nodeToDependencyTree(node) {
				var result = { name: node.name_ };
				return (
					node.observing_ &&
						node.observing_.length > 0 &&
						(result.dependencies = (function unique(list) {
							return Array.from(new Set(list));
						})(node.observing_).map(nodeToDependencyTree)),
					result
				);
			}
			var generatorId = 0;
			function FlowCancellationError() {
				this.message = 'FLOW_CANCELLED';
			}
			FlowCancellationError.prototype = Object.create(Error.prototype);
			var flowAnnotation = createFlowAnnotation('flow'),
				flowBoundAnnotation = createFlowAnnotation('flow.bound', { bound: !0 }),
				flow = Object.assign(function flow(arg1, arg2) {
					if (isStringish(arg2)) return storeAnnotation(arg1, arg2, flowAnnotation);
					var generator = arg1,
						name = generator.name || '<unnamed flow>',
						res = function res() {
							var rejector,
								args = arguments,
								runId = ++generatorId,
								gen = action(name + ' - runid: ' + runId + ' - init', generator).apply(this, args),
								pendingPromise = void 0,
								promise = new Promise(function (resolve, reject) {
									var stepId = 0;
									function onFulfilled(res) {
										var ret;
										pendingPromise = void 0;
										try {
											ret = action(name + ' - runid: ' + runId + ' - yield ' + stepId++, gen.next).call(gen, res);
										} catch (e) {
											return reject(e);
										}
										next(ret);
									}
									function onRejected(err) {
										var ret;
										pendingPromise = void 0;
										try {
											ret = action(name + ' - runid: ' + runId + ' - yield ' + stepId++, gen.throw).call(gen, err);
										} catch (e) {
											return reject(e);
										}
										next(ret);
									}
									function next(ret) {
										if (!isFunction(null == ret ? void 0 : ret.then))
											return ret.done ? resolve(ret.value) : (pendingPromise = Promise.resolve(ret.value)).then(onFulfilled, onRejected);
										ret.then(next, reject);
									}
									(rejector = reject), onFulfilled(void 0);
								});
							return (
								(promise.cancel = action(name + ' - runid: ' + runId + ' - cancel', function () {
									try {
										pendingPromise && cancelPromise(pendingPromise);
										var _res = gen.return(void 0),
											yieldedPromise = Promise.resolve(_res.value);
										yieldedPromise.then(noop, noop), cancelPromise(yieldedPromise), rejector(new FlowCancellationError());
									} catch (e) {
										rejector(e);
									}
								})),
								promise
							);
						};
					return (res.isMobXFlow = !0), res;
				}, flowAnnotation);
			function cancelPromise(promise) {
				isFunction(promise.cancel) && promise.cancel();
			}
			function isFlow(fn) {
				return !0 === (null == fn ? void 0 : fn.isMobXFlow);
			}
			function _isObservable(value, property) {
				return (
					!!value &&
					(void 0 !== property
						? !!isObservableObject(value) && value[$mobx].values_.has(property)
						: isObservableObject(value) || !!value[$mobx] || isAtom(value) || isReaction(value) || isComputedValue(value))
				);
			}
			function isObservable(value) {
				return _isObservable(value);
			}
			function cache(map, key, value) {
				return map.set(key, value), value;
			}
			function toJSHelper(source, __alreadySeen) {
				if (null == source || 'object' != typeof source || source instanceof Date || !isObservable(source)) return source;
				if (isObservableValue(source) || isComputedValue(source)) return toJSHelper(source.get(), __alreadySeen);
				if (__alreadySeen.has(source)) return __alreadySeen.get(source);
				if (isObservableArray(source)) {
					var res = cache(__alreadySeen, source, new Array(source.length));
					return (
						source.forEach(function (value, idx) {
							res[idx] = toJSHelper(value, __alreadySeen);
						}),
						res
					);
				}
				if (isObservableSet(source)) {
					var _res = cache(__alreadySeen, source, new Set());
					return (
						source.forEach(function (value) {
							_res.add(toJSHelper(value, __alreadySeen));
						}),
						_res
					);
				}
				if (isObservableMap(source)) {
					var _res2 = cache(__alreadySeen, source, new Map());
					return (
						source.forEach(function (value, key) {
							_res2.set(key, toJSHelper(value, __alreadySeen));
						}),
						_res2
					);
				}
				var _res3 = cache(__alreadySeen, source, {});
				return (
					(function apiOwnKeys(obj) {
						if (isObservableObject(obj)) return obj[$mobx].ownKeys_();
						die(38);
					})(source).forEach(function (key) {
						objectPrototype.propertyIsEnumerable.call(source, key) && (_res3[key] = toJSHelper(source[key], __alreadySeen));
					}),
					_res3
				);
			}
			function toJS(source, options) {
				return toJSHelper(source, new Map());
			}
			function transaction(action, thisArg) {
				void 0 === thisArg && (thisArg = void 0), startBatch();
				try {
					return action.apply(thisArg);
				} finally {
					endBatch();
				}
			}
			function getAdm(target) {
				return target[$mobx];
			}
			flow.bound = createDecoratorAnnotation(flowBoundAnnotation);
			var objectProxyTraps = {
				has: function has(target, name) {
					return getAdm(target).has_(name);
				},
				get: function get(target, name) {
					return getAdm(target).get_(name);
				},
				set: function set(target, name, value) {
					var _getAdm$set_;
					return !!isStringish(name) && (null == (_getAdm$set_ = getAdm(target).set_(name, value, !0)) || _getAdm$set_);
				},
				deleteProperty: function deleteProperty(target, name) {
					var _getAdm$delete_;
					return !!isStringish(name) && (null == (_getAdm$delete_ = getAdm(target).delete_(name, !0)) || _getAdm$delete_);
				},
				defineProperty: function defineProperty(target, name, descriptor) {
					var _getAdm$definePropert;
					return null == (_getAdm$definePropert = getAdm(target).defineProperty_(name, descriptor)) || _getAdm$definePropert;
				},
				ownKeys: function ownKeys(target) {
					return getAdm(target).ownKeys_();
				},
				preventExtensions: function preventExtensions(target) {
					die(13);
				},
			};
			function hasInterceptors(interceptable) {
				return void 0 !== interceptable.interceptors_ && interceptable.interceptors_.length > 0;
			}
			function registerInterceptor(interceptable, handler) {
				var interceptors = interceptable.interceptors_ || (interceptable.interceptors_ = []);
				return (
					interceptors.push(handler),
					once(function () {
						var idx = interceptors.indexOf(handler);
						-1 !== idx && interceptors.splice(idx, 1);
					})
				);
			}
			function interceptChange(interceptable, change) {
				var prevU = untrackedStart();
				try {
					for (
						var interceptors = [].concat(interceptable.interceptors_ || []), i = 0, l = interceptors.length;
						i < l && ((change = interceptors[i](change)) && !change.type && die(14), change);
						i++
					);
					return change;
				} finally {
					untrackedEnd(prevU);
				}
			}
			function hasListeners(listenable) {
				return void 0 !== listenable.changeListeners_ && listenable.changeListeners_.length > 0;
			}
			function registerListener(listenable, handler) {
				var listeners = listenable.changeListeners_ || (listenable.changeListeners_ = []);
				return (
					listeners.push(handler),
					once(function () {
						var idx = listeners.indexOf(handler);
						-1 !== idx && listeners.splice(idx, 1);
					})
				);
			}
			function notifyListeners(listenable, change) {
				var prevU = untrackedStart(),
					listeners = listenable.changeListeners_;
				if (listeners) {
					for (var i = 0, l = (listeners = listeners.slice()).length; i < l; i++) listeners[i](change);
					untrackedEnd(prevU);
				}
			}
			function makeObservable(target, annotations, options) {
				var adm = asObservableObject(target, options)[$mobx];
				startBatch();
				try {
					0,
						null != annotations ||
							(annotations = (function collectStoredAnnotations(target) {
								return (
									hasProp(target, storedAnnotationsSymbol) ||
										addHiddenProp(target, storedAnnotationsSymbol, _extends({}, target[storedAnnotationsSymbol])),
									target[storedAnnotationsSymbol]
								);
							})(target)),
						ownKeys(annotations).forEach(function (key) {
							return adm.make_(key, annotations[key]);
						});
				} finally {
					endBatch();
				}
				return target;
			}
			var UPDATE = 'update',
				arrayTraps = {
					get: function get(target, name) {
						var adm = target[$mobx];
						return name === $mobx
							? adm
							: 'length' === name
							? adm.getArrayLength_()
							: 'string' != typeof name || isNaN(name)
							? hasProp(arrayExtensions, name)
								? arrayExtensions[name]
								: target[name]
							: adm.get_(parseInt(name));
					},
					set: function set(target, name, value) {
						var adm = target[$mobx];
						return (
							'length' === name && adm.setArrayLength_(value),
							'symbol' == typeof name || isNaN(name) ? (target[name] = value) : adm.set_(parseInt(name), value),
							!0
						);
					},
					preventExtensions: function preventExtensions() {
						die(15);
					},
				},
				ObservableArrayAdministration = (function () {
					function ObservableArrayAdministration(name, enhancer, owned_, legacyMode_) {
						void 0 === name && (name = 'ObservableArray'),
							(this.owned_ = void 0),
							(this.legacyMode_ = void 0),
							(this.atom_ = void 0),
							(this.values_ = []),
							(this.interceptors_ = void 0),
							(this.changeListeners_ = void 0),
							(this.enhancer_ = void 0),
							(this.dehancer = void 0),
							(this.proxy_ = void 0),
							(this.lastKnownLength_ = 0),
							(this.owned_ = owned_),
							(this.legacyMode_ = legacyMode_),
							(this.atom_ = new Atom(name)),
							(this.enhancer_ = function (newV, oldV) {
								return enhancer(newV, oldV, 'ObservableArray[..]');
							});
					}
					var _proto = ObservableArrayAdministration.prototype;
					return (
						(_proto.dehanceValue_ = function dehanceValue_(value) {
							return void 0 !== this.dehancer ? this.dehancer(value) : value;
						}),
						(_proto.dehanceValues_ = function dehanceValues_(values) {
							return void 0 !== this.dehancer && values.length > 0 ? values.map(this.dehancer) : values;
						}),
						(_proto.intercept_ = function intercept_(handler) {
							return registerInterceptor(this, handler);
						}),
						(_proto.observe_ = function observe_(listener, fireImmediately) {
							return (
								void 0 === fireImmediately && (fireImmediately = !1),
								fireImmediately &&
									listener({
										observableKind: 'array',
										object: this.proxy_,
										debugObjectName: this.atom_.name_,
										type: 'splice',
										index: 0,
										added: this.values_.slice(),
										addedCount: this.values_.length,
										removed: [],
										removedCount: 0,
									}),
								registerListener(this, listener)
							);
						}),
						(_proto.getArrayLength_ = function getArrayLength_() {
							return this.atom_.reportObserved(), this.values_.length;
						}),
						(_proto.setArrayLength_ = function setArrayLength_(newLength) {
							('number' != typeof newLength || isNaN(newLength) || newLength < 0) && die('Out of range: ' + newLength);
							var currentLength = this.values_.length;
							if (newLength !== currentLength)
								if (newLength > currentLength) {
									for (var newItems = new Array(newLength - currentLength), i = 0; i < newLength - currentLength; i++) newItems[i] = void 0;
									this.spliceWithArray_(currentLength, 0, newItems);
								} else this.spliceWithArray_(newLength, currentLength - newLength);
						}),
						(_proto.updateArrayLength_ = function updateArrayLength_(oldLength, delta) {
							oldLength !== this.lastKnownLength_ && die(16),
								(this.lastKnownLength_ += delta),
								this.legacyMode_ && delta > 0 && reserveArrayBuffer(oldLength + delta + 1);
						}),
						(_proto.spliceWithArray_ = function spliceWithArray_(index, deleteCount, newItems) {
							var _this = this;
							this.atom_;
							var length = this.values_.length;
							if (
								(void 0 === index ? (index = 0) : index > length ? (index = length) : index < 0 && (index = Math.max(0, length + index)),
								(deleteCount =
									1 === arguments.length ? length - index : null == deleteCount ? 0 : Math.max(0, Math.min(deleteCount, length - index))),
								void 0 === newItems && (newItems = EMPTY_ARRAY),
								hasInterceptors(this))
							) {
								var change = interceptChange(this, { object: this.proxy_, type: 'splice', index, removedCount: deleteCount, added: newItems });
								if (!change) return EMPTY_ARRAY;
								(deleteCount = change.removedCount), (newItems = change.added);
							}
							if (
								((newItems =
									0 === newItems.length
										? newItems
										: newItems.map(function (v) {
												return _this.enhancer_(v, void 0);
										  })),
								this.legacyMode_)
							) {
								var lengthDelta = newItems.length - deleteCount;
								this.updateArrayLength_(length, lengthDelta);
							}
							var res = this.spliceItemsIntoValues_(index, deleteCount, newItems);
							return (0 === deleteCount && 0 === newItems.length) || this.notifyArraySplice_(index, newItems, res), this.dehanceValues_(res);
						}),
						(_proto.spliceItemsIntoValues_ = function spliceItemsIntoValues_(index, deleteCount, newItems) {
							var _this$values_;
							if (newItems.length < 1e4) return (_this$values_ = this.values_).splice.apply(_this$values_, [index, deleteCount].concat(newItems));
							var res = this.values_.slice(index, index + deleteCount),
								oldItems = this.values_.slice(index + deleteCount);
							this.values_.length += newItems.length - deleteCount;
							for (var i = 0; i < newItems.length; i++) this.values_[index + i] = newItems[i];
							for (var _i = 0; _i < oldItems.length; _i++) this.values_[index + newItems.length + _i] = oldItems[_i];
							return res;
						}),
						(_proto.notifyArrayChildUpdate_ = function notifyArrayChildUpdate_(index, newValue, oldValue) {
							var notifySpy = !this.owned_ && !1,
								notify = hasListeners(this),
								change =
									notify || notifySpy
										? { observableKind: 'array', object: this.proxy_, type: UPDATE, debugObjectName: this.atom_.name_, index, newValue, oldValue }
										: null;
							this.atom_.reportChanged(), notify && notifyListeners(this, change);
						}),
						(_proto.notifyArraySplice_ = function notifyArraySplice_(index, added, removed) {
							var notifySpy = !this.owned_ && !1,
								notify = hasListeners(this),
								change =
									notify || notifySpy
										? {
												observableKind: 'array',
												object: this.proxy_,
												debugObjectName: this.atom_.name_,
												type: 'splice',
												index,
												removed,
												added,
												removedCount: removed.length,
												addedCount: added.length,
										  }
										: null;
							this.atom_.reportChanged(), notify && notifyListeners(this, change);
						}),
						(_proto.get_ = function get_(index) {
							if (!(this.legacyMode_ && index >= this.values_.length)) return this.atom_.reportObserved(), this.dehanceValue_(this.values_[index]);
							console.warn('[mobx] Out of bounds read: ' + index);
						}),
						(_proto.set_ = function set_(index, newValue) {
							var values = this.values_;
							if ((this.legacyMode_ && index > values.length && die(17, index, values.length), index < values.length)) {
								this.atom_;
								var oldValue = values[index];
								if (hasInterceptors(this)) {
									var change = interceptChange(this, { type: UPDATE, object: this.proxy_, index, newValue });
									if (!change) return;
									newValue = change.newValue;
								}
								(newValue = this.enhancer_(newValue, oldValue)) !== oldValue &&
									((values[index] = newValue), this.notifyArrayChildUpdate_(index, newValue, oldValue));
							} else {
								for (var newItems = new Array(index + 1 - values.length), i = 0; i < newItems.length - 1; i++) newItems[i] = void 0;
								(newItems[newItems.length - 1] = newValue), this.spliceWithArray_(values.length, 0, newItems);
							}
						}),
						ObservableArrayAdministration
					);
				})();
			function createObservableArray(initialValues, enhancer, name, owned) {
				void 0 === name && (name = 'ObservableArray'), void 0 === owned && (owned = !1), assertProxies();
				var adm = new ObservableArrayAdministration(name, enhancer, owned, !1);
				addHiddenFinalProp(adm.values_, $mobx, adm);
				var proxy = new Proxy(adm.values_, arrayTraps);
				if (((adm.proxy_ = proxy), initialValues && initialValues.length)) {
					var prev = allowStateChangesStart(!0);
					adm.spliceWithArray_(0, 0, initialValues), allowStateChangesEnd(prev);
				}
				return proxy;
			}
			var arrayExtensions = {
				clear: function clear() {
					return this.splice(0);
				},
				replace: function replace(newItems) {
					var adm = this[$mobx];
					return adm.spliceWithArray_(0, adm.values_.length, newItems);
				},
				toJSON: function toJSON() {
					return this.slice();
				},
				splice: function splice(index, deleteCount) {
					for (var _len = arguments.length, newItems = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++)
						newItems[_key - 2] = arguments[_key];
					var adm = this[$mobx];
					switch (arguments.length) {
						case 0:
							return [];
						case 1:
							return adm.spliceWithArray_(index);
						case 2:
							return adm.spliceWithArray_(index, deleteCount);
					}
					return adm.spliceWithArray_(index, deleteCount, newItems);
				},
				spliceWithArray: function spliceWithArray(index, deleteCount, newItems) {
					return this[$mobx].spliceWithArray_(index, deleteCount, newItems);
				},
				push: function push() {
					for (var adm = this[$mobx], _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)
						items[_key2] = arguments[_key2];
					return adm.spliceWithArray_(adm.values_.length, 0, items), adm.values_.length;
				},
				pop: function pop() {
					return this.splice(Math.max(this[$mobx].values_.length - 1, 0), 1)[0];
				},
				shift: function shift() {
					return this.splice(0, 1)[0];
				},
				unshift: function unshift() {
					for (var adm = this[$mobx], _len3 = arguments.length, items = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++)
						items[_key3] = arguments[_key3];
					return adm.spliceWithArray_(0, 0, items), adm.values_.length;
				},
				reverse: function reverse() {
					return globalState.trackingDerivation && die(37, 'reverse'), this.replace(this.slice().reverse()), this;
				},
				sort: function sort() {
					globalState.trackingDerivation && die(37, 'sort');
					var copy = this.slice();
					return copy.sort.apply(copy, arguments), this.replace(copy), this;
				},
				remove: function remove(value) {
					var adm = this[$mobx],
						idx = adm.dehanceValues_(adm.values_).indexOf(value);
					return idx > -1 && (this.splice(idx, 1), !0);
				},
			};
			function addArrayExtension(funcName, funcFactory) {
				'function' == typeof Array.prototype[funcName] && (arrayExtensions[funcName] = funcFactory(funcName));
			}
			function simpleFunc(funcName) {
				return function () {
					var adm = this[$mobx];
					adm.atom_.reportObserved();
					var dehancedValues = adm.dehanceValues_(adm.values_);
					return dehancedValues[funcName].apply(dehancedValues, arguments);
				};
			}
			function mapLikeFunc(funcName) {
				return function (callback, thisArg) {
					var _this2 = this,
						adm = this[$mobx];
					return (
						adm.atom_.reportObserved(),
						adm.dehanceValues_(adm.values_)[funcName](function (element, index) {
							return callback.call(thisArg, element, index, _this2);
						})
					);
				};
			}
			function reduceLikeFunc(funcName) {
				return function () {
					var _this3 = this,
						adm = this[$mobx];
					adm.atom_.reportObserved();
					var dehancedValues = adm.dehanceValues_(adm.values_),
						callback = arguments[0];
					return (
						(arguments[0] = function (accumulator, currentValue, index) {
							return callback(accumulator, currentValue, index, _this3);
						}),
						dehancedValues[funcName].apply(dehancedValues, arguments)
					);
				};
			}
			addArrayExtension('concat', simpleFunc),
				addArrayExtension('flat', simpleFunc),
				addArrayExtension('includes', simpleFunc),
				addArrayExtension('indexOf', simpleFunc),
				addArrayExtension('join', simpleFunc),
				addArrayExtension('lastIndexOf', simpleFunc),
				addArrayExtension('slice', simpleFunc),
				addArrayExtension('toString', simpleFunc),
				addArrayExtension('toLocaleString', simpleFunc),
				addArrayExtension('every', mapLikeFunc),
				addArrayExtension('filter', mapLikeFunc),
				addArrayExtension('find', mapLikeFunc),
				addArrayExtension('findIndex', mapLikeFunc),
				addArrayExtension('flatMap', mapLikeFunc),
				addArrayExtension('forEach', mapLikeFunc),
				addArrayExtension('map', mapLikeFunc),
				addArrayExtension('some', mapLikeFunc),
				addArrayExtension('reduce', reduceLikeFunc),
				addArrayExtension('reduceRight', reduceLikeFunc);
			var _Symbol$iterator,
				_Symbol$toStringTag,
				isObservableArrayAdministration = createInstanceofPredicate('ObservableArrayAdministration', ObservableArrayAdministration);
			function isObservableArray(thing) {
				return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
			}
			var ObservableMapMarker = {},
				ADD = 'add';
			(_Symbol$iterator = Symbol.iterator), (_Symbol$toStringTag = Symbol.toStringTag);
			var _Symbol$iterator$1,
				_Symbol$toStringTag$1,
				ObservableMap = (function () {
					function ObservableMap(initialData, enhancer_, name_) {
						var _this = this;
						void 0 === enhancer_ && (enhancer_ = deepEnhancer),
							void 0 === name_ && (name_ = 'ObservableMap'),
							(this.enhancer_ = void 0),
							(this.name_ = void 0),
							(this[$mobx] = ObservableMapMarker),
							(this.data_ = void 0),
							(this.hasMap_ = void 0),
							(this.keysAtom_ = void 0),
							(this.interceptors_ = void 0),
							(this.changeListeners_ = void 0),
							(this.dehancer = void 0),
							(this.enhancer_ = enhancer_),
							(this.name_ = name_),
							isFunction(Map) || die(18),
							(this.keysAtom_ = createAtom('ObservableMap.keys()')),
							(this.data_ = new Map()),
							(this.hasMap_ = new Map()),
							allowStateChanges(!0, function () {
								_this.merge(initialData);
							});
					}
					var _proto = ObservableMap.prototype;
					return (
						(_proto.has_ = function has_(key) {
							return this.data_.has(key);
						}),
						(_proto.has = function has(key) {
							var _this2 = this;
							if (!globalState.trackingDerivation) return this.has_(key);
							var entry = this.hasMap_.get(key);
							if (!entry) {
								var newEntry = (entry = new ObservableValue(this.has_(key), referenceEnhancer, 'ObservableMap.key?', !1));
								this.hasMap_.set(key, newEntry),
									onBecomeUnobserved(newEntry, function () {
										return _this2.hasMap_.delete(key);
									});
							}
							return entry.get();
						}),
						(_proto.set = function set(key, value) {
							var hasKey = this.has_(key);
							if (hasInterceptors(this)) {
								var change = interceptChange(this, { type: hasKey ? UPDATE : ADD, object: this, newValue: value, name: key });
								if (!change) return this;
								value = change.newValue;
							}
							return hasKey ? this.updateValue_(key, value) : this.addValue_(key, value), this;
						}),
						(_proto.delete = function _delete(key) {
							var _this3 = this;
							if ((this.keysAtom_, hasInterceptors(this)) && !interceptChange(this, { type: 'delete', object: this, name: key })) return !1;
							if (this.has_(key)) {
								var notify = hasListeners(this),
									_change = notify
										? {
												observableKind: 'map',
												debugObjectName: this.name_,
												type: 'delete',
												object: this,
												oldValue: this.data_.get(key).value_,
												name: key,
										  }
										: null;
								return (
									transaction(function () {
										var _this3$hasMap_$get;
										_this3.keysAtom_.reportChanged(),
											null == (_this3$hasMap_$get = _this3.hasMap_.get(key)) || _this3$hasMap_$get.setNewValue_(!1),
											_this3.data_.get(key).setNewValue_(void 0),
											_this3.data_.delete(key);
									}),
									notify && notifyListeners(this, _change),
									!0
								);
							}
							return !1;
						}),
						(_proto.updateValue_ = function updateValue_(key, newValue) {
							var observable = this.data_.get(key);
							if ((newValue = observable.prepareNewValue_(newValue)) !== globalState.UNCHANGED) {
								var notify = hasListeners(this),
									change = notify
										? {
												observableKind: 'map',
												debugObjectName: this.name_,
												type: UPDATE,
												object: this,
												oldValue: observable.value_,
												name: key,
												newValue,
										  }
										: null;
								0, observable.setNewValue_(newValue), notify && notifyListeners(this, change);
							}
						}),
						(_proto.addValue_ = function addValue_(key, newValue) {
							var _this4 = this;
							this.keysAtom_,
								transaction(function () {
									var _this4$hasMap_$get,
										observable = new ObservableValue(newValue, _this4.enhancer_, 'ObservableMap.key', !1);
									_this4.data_.set(key, observable),
										(newValue = observable.value_),
										null == (_this4$hasMap_$get = _this4.hasMap_.get(key)) || _this4$hasMap_$get.setNewValue_(!0),
										_this4.keysAtom_.reportChanged();
								});
							var notify = hasListeners(this),
								change = notify ? { observableKind: 'map', debugObjectName: this.name_, type: ADD, object: this, name: key, newValue } : null;
							notify && notifyListeners(this, change);
						}),
						(_proto.get = function get(key) {
							return this.has(key) ? this.dehanceValue_(this.data_.get(key).get()) : this.dehanceValue_(void 0);
						}),
						(_proto.dehanceValue_ = function dehanceValue_(value) {
							return void 0 !== this.dehancer ? this.dehancer(value) : value;
						}),
						(_proto.keys = function keys() {
							return this.keysAtom_.reportObserved(), this.data_.keys();
						}),
						(_proto.values = function values() {
							var self = this,
								keys = this.keys();
							return makeIterable({
								next: function next() {
									var _keys$next = keys.next(),
										done = _keys$next.done,
										value = _keys$next.value;
									return { done, value: done ? void 0 : self.get(value) };
								},
							});
						}),
						(_proto.entries = function entries() {
							var self = this,
								keys = this.keys();
							return makeIterable({
								next: function next() {
									var _keys$next2 = keys.next(),
										done = _keys$next2.done,
										value = _keys$next2.value;
									return { done, value: done ? void 0 : [value, self.get(value)] };
								},
							});
						}),
						(_proto[_Symbol$iterator] = function () {
							return this.entries();
						}),
						(_proto.forEach = function forEach(callback, thisArg) {
							for (var _step, _iterator = _createForOfIteratorHelperLoose(this); !(_step = _iterator()).done; ) {
								var _step$value = _step.value,
									key = _step$value[0],
									value = _step$value[1];
								callback.call(thisArg, value, key, this);
							}
						}),
						(_proto.merge = function merge(other) {
							var _this5 = this;
							return (
								isObservableMap(other) && (other = new Map(other)),
								transaction(function () {
									isPlainObject(other)
										? (function getPlainObjectKeys(object) {
												var keys = Object.keys(object);
												if (!hasGetOwnPropertySymbols) return keys;
												var symbols = Object.getOwnPropertySymbols(object);
												return symbols.length
													? [].concat(
															keys,
															symbols.filter(function (s) {
																return objectPrototype.propertyIsEnumerable.call(object, s);
															})
													  )
													: keys;
										  })(other).forEach(function (key) {
												return _this5.set(key, other[key]);
										  })
										: Array.isArray(other)
										? other.forEach(function (_ref) {
												var key = _ref[0],
													value = _ref[1];
												return _this5.set(key, value);
										  })
										: isES6Map(other)
										? (other.constructor !== Map && die(19, other),
										  other.forEach(function (value, key) {
												return _this5.set(key, value);
										  }))
										: null != other && die(20, other);
								}),
								this
							);
						}),
						(_proto.clear = function clear() {
							var _this6 = this;
							transaction(function () {
								untracked(function () {
									for (var _step2, _iterator2 = _createForOfIteratorHelperLoose(_this6.keys()); !(_step2 = _iterator2()).done; ) {
										var key = _step2.value;
										_this6.delete(key);
									}
								});
							});
						}),
						(_proto.replace = function replace(values) {
							var _this7 = this;
							return (
								transaction(function () {
									for (
										var _step3,
											replacementMap = (function convertToMap(dataStructure) {
												if (isES6Map(dataStructure) || isObservableMap(dataStructure)) return dataStructure;
												if (Array.isArray(dataStructure)) return new Map(dataStructure);
												if (isPlainObject(dataStructure)) {
													var map = new Map();
													for (var key in dataStructure) map.set(key, dataStructure[key]);
													return map;
												}
												return die(21, dataStructure);
											})(values),
											orderedData = new Map(),
											keysReportChangedCalled = !1,
											_iterator3 = _createForOfIteratorHelperLoose(_this7.data_.keys());
										!(_step3 = _iterator3()).done;

									) {
										var key = _step3.value;
										if (!replacementMap.has(key))
											if (_this7.delete(key)) keysReportChangedCalled = !0;
											else {
												var value = _this7.data_.get(key);
												orderedData.set(key, value);
											}
									}
									for (var _step4, _iterator4 = _createForOfIteratorHelperLoose(replacementMap.entries()); !(_step4 = _iterator4()).done; ) {
										var _step4$value = _step4.value,
											_key = _step4$value[0],
											_value = _step4$value[1],
											keyExisted = _this7.data_.has(_key);
										if ((_this7.set(_key, _value), _this7.data_.has(_key))) {
											var _value2 = _this7.data_.get(_key);
											orderedData.set(_key, _value2), keyExisted || (keysReportChangedCalled = !0);
										}
									}
									if (!keysReportChangedCalled)
										if (_this7.data_.size !== orderedData.size) _this7.keysAtom_.reportChanged();
										else
											for (var iter1 = _this7.data_.keys(), iter2 = orderedData.keys(), next1 = iter1.next(), next2 = iter2.next(); !next1.done; ) {
												if (next1.value !== next2.value) {
													_this7.keysAtom_.reportChanged();
													break;
												}
												(next1 = iter1.next()), (next2 = iter2.next());
											}
									_this7.data_ = orderedData;
								}),
								this
							);
						}),
						(_proto.toString = function toString() {
							return '[object ObservableMap]';
						}),
						(_proto.toJSON = function toJSON() {
							return Array.from(this);
						}),
						(_proto.observe_ = function observe_(listener, fireImmediately) {
							return registerListener(this, listener);
						}),
						(_proto.intercept_ = function intercept_(handler) {
							return registerInterceptor(this, handler);
						}),
						_createClass(ObservableMap, [
							{
								key: 'size',
								get: function get() {
									return this.keysAtom_.reportObserved(), this.data_.size;
								},
							},
							{
								key: _Symbol$toStringTag,
								get: function get() {
									return 'Map';
								},
							},
						]),
						ObservableMap
					);
				})(),
				isObservableMap = createInstanceofPredicate('ObservableMap', ObservableMap);
			var ObservableSetMarker = {};
			(_Symbol$iterator$1 = Symbol.iterator), (_Symbol$toStringTag$1 = Symbol.toStringTag);
			var ObservableSet = (function () {
					function ObservableSet(initialData, enhancer, name_) {
						void 0 === enhancer && (enhancer = deepEnhancer),
							void 0 === name_ && (name_ = 'ObservableSet'),
							(this.name_ = void 0),
							(this[$mobx] = ObservableSetMarker),
							(this.data_ = new Set()),
							(this.atom_ = void 0),
							(this.changeListeners_ = void 0),
							(this.interceptors_ = void 0),
							(this.dehancer = void 0),
							(this.enhancer_ = void 0),
							(this.name_ = name_),
							isFunction(Set) || die(22),
							(this.atom_ = createAtom(this.name_)),
							(this.enhancer_ = function (newV, oldV) {
								return enhancer(newV, oldV, name_);
							}),
							initialData && this.replace(initialData);
					}
					var _proto = ObservableSet.prototype;
					return (
						(_proto.dehanceValue_ = function dehanceValue_(value) {
							return void 0 !== this.dehancer ? this.dehancer(value) : value;
						}),
						(_proto.clear = function clear() {
							var _this = this;
							transaction(function () {
								untracked(function () {
									for (var _step, _iterator = _createForOfIteratorHelperLoose(_this.data_.values()); !(_step = _iterator()).done; ) {
										var value = _step.value;
										_this.delete(value);
									}
								});
							});
						}),
						(_proto.forEach = function forEach(callbackFn, thisArg) {
							for (var _step2, _iterator2 = _createForOfIteratorHelperLoose(this); !(_step2 = _iterator2()).done; ) {
								var value = _step2.value;
								callbackFn.call(thisArg, value, value, this);
							}
						}),
						(_proto.add = function add(value) {
							var _this2 = this;
							if ((this.atom_, hasInterceptors(this)) && !interceptChange(this, { type: ADD, object: this, newValue: value })) return this;
							if (!this.has(value)) {
								transaction(function () {
									_this2.data_.add(_this2.enhancer_(value, void 0)), _this2.atom_.reportChanged();
								});
								var notify = hasListeners(this),
									_change = notify ? { observableKind: 'set', debugObjectName: this.name_, type: ADD, object: this, newValue: value } : null;
								false, notify && notifyListeners(this, _change);
							}
							return this;
						}),
						(_proto.delete = function _delete(value) {
							var _this3 = this;
							if (hasInterceptors(this) && !interceptChange(this, { type: 'delete', object: this, oldValue: value })) return !1;
							if (this.has(value)) {
								var notify = hasListeners(this),
									_change2 = notify ? { observableKind: 'set', debugObjectName: this.name_, type: 'delete', object: this, oldValue: value } : null;
								return (
									transaction(function () {
										_this3.atom_.reportChanged(), _this3.data_.delete(value);
									}),
									notify && notifyListeners(this, _change2),
									!0
								);
							}
							return !1;
						}),
						(_proto.has = function has(value) {
							return this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(value));
						}),
						(_proto.entries = function entries() {
							var nextIndex = 0,
								keys = Array.from(this.keys()),
								values = Array.from(this.values());
							return makeIterable({
								next: function next() {
									var index = nextIndex;
									return (nextIndex += 1), index < values.length ? { value: [keys[index], values[index]], done: !1 } : { done: !0 };
								},
							});
						}),
						(_proto.keys = function keys() {
							return this.values();
						}),
						(_proto.values = function values() {
							this.atom_.reportObserved();
							var self = this,
								nextIndex = 0,
								observableValues = Array.from(this.data_.values());
							return makeIterable({
								next: function next() {
									return nextIndex < observableValues.length ? { value: self.dehanceValue_(observableValues[nextIndex++]), done: !1 } : { done: !0 };
								},
							});
						}),
						(_proto.replace = function replace(other) {
							var _this4 = this;
							return (
								isObservableSet(other) && (other = new Set(other)),
								transaction(function () {
									Array.isArray(other) || isES6Set(other)
										? (_this4.clear(),
										  other.forEach(function (value) {
												return _this4.add(value);
										  }))
										: null != other && die('Cannot initialize set from ' + other);
								}),
								this
							);
						}),
						(_proto.observe_ = function observe_(listener, fireImmediately) {
							return registerListener(this, listener);
						}),
						(_proto.intercept_ = function intercept_(handler) {
							return registerInterceptor(this, handler);
						}),
						(_proto.toJSON = function toJSON() {
							return Array.from(this);
						}),
						(_proto.toString = function toString() {
							return '[object ObservableSet]';
						}),
						(_proto[_Symbol$iterator$1] = function () {
							return this.values();
						}),
						_createClass(ObservableSet, [
							{
								key: 'size',
								get: function get() {
									return this.atom_.reportObserved(), this.data_.size;
								},
							},
							{
								key: _Symbol$toStringTag$1,
								get: function get() {
									return 'Set';
								},
							},
						]),
						ObservableSet
					);
				})(),
				isObservableSet = createInstanceofPredicate('ObservableSet', ObservableSet),
				descriptorCache = Object.create(null),
				ObservableObjectAdministration = (function () {
					function ObservableObjectAdministration(target_, values_, name_, defaultAnnotation_) {
						void 0 === values_ && (values_ = new Map()),
							void 0 === defaultAnnotation_ && (defaultAnnotation_ = autoAnnotation),
							(this.target_ = void 0),
							(this.values_ = void 0),
							(this.name_ = void 0),
							(this.defaultAnnotation_ = void 0),
							(this.keysAtom_ = void 0),
							(this.changeListeners_ = void 0),
							(this.interceptors_ = void 0),
							(this.proxy_ = void 0),
							(this.isPlainObject_ = void 0),
							(this.appliedAnnotations_ = void 0),
							(this.pendingKeys_ = void 0),
							(this.target_ = target_),
							(this.values_ = values_),
							(this.name_ = name_),
							(this.defaultAnnotation_ = defaultAnnotation_),
							(this.keysAtom_ = new Atom('ObservableObject.keys')),
							(this.isPlainObject_ = isPlainObject(this.target_));
					}
					var _proto = ObservableObjectAdministration.prototype;
					return (
						(_proto.getObservablePropValue_ = function getObservablePropValue_(key) {
							return this.values_.get(key).get();
						}),
						(_proto.setObservablePropValue_ = function setObservablePropValue_(key, newValue) {
							var observable = this.values_.get(key);
							if (observable instanceof ComputedValue) return observable.set(newValue), !0;
							if (hasInterceptors(this)) {
								var change = interceptChange(this, { type: UPDATE, object: this.proxy_ || this.target_, name: key, newValue });
								if (!change) return null;
								newValue = change.newValue;
							}
							if ((newValue = observable.prepareNewValue_(newValue)) !== globalState.UNCHANGED) {
								var notify = hasListeners(this),
									_change = notify
										? {
												type: UPDATE,
												observableKind: 'object',
												debugObjectName: this.name_,
												object: this.proxy_ || this.target_,
												oldValue: observable.value_,
												name: key,
												newValue,
										  }
										: null;
								0, observable.setNewValue_(newValue), notify && notifyListeners(this, _change);
							}
							return !0;
						}),
						(_proto.get_ = function get_(key) {
							return globalState.trackingDerivation && !hasProp(this.target_, key) && this.has_(key), this.target_[key];
						}),
						(_proto.set_ = function set_(key, value, proxyTrap) {
							return (
								void 0 === proxyTrap && (proxyTrap = !1),
								hasProp(this.target_, key)
									? this.values_.has(key)
										? this.setObservablePropValue_(key, value)
										: proxyTrap
										? Reflect.set(this.target_, key, value)
										: ((this.target_[key] = value), !0)
									: this.extend_(key, { value, enumerable: !0, writable: !0, configurable: !0 }, this.defaultAnnotation_, proxyTrap)
							);
						}),
						(_proto.has_ = function has_(key) {
							if (!globalState.trackingDerivation) return key in this.target_;
							this.pendingKeys_ || (this.pendingKeys_ = new Map());
							var entry = this.pendingKeys_.get(key);
							return (
								entry ||
									((entry = new ObservableValue(key in this.target_, referenceEnhancer, 'ObservableObject.key?', !1)),
									this.pendingKeys_.set(key, entry)),
								entry.get()
							);
						}),
						(_proto.make_ = function make_(key, annotation) {
							if ((!0 === annotation && (annotation = this.defaultAnnotation_), !1 !== annotation)) {
								if ((assertAnnotable(this, annotation, key), !(key in this.target_))) {
									var _this$target_$storedA;
									if (null != (_this$target_$storedA = this.target_[storedAnnotationsSymbol]) && _this$target_$storedA[key]) return;
									die(1, annotation.annotationType_, this.name_ + '.' + key.toString());
								}
								for (var source = this.target_; source && source !== objectPrototype; ) {
									var descriptor = getDescriptor(source, key);
									if (descriptor) {
										var outcome = annotation.make_(this, key, descriptor, source);
										if (0 === outcome) return;
										if (1 === outcome) break;
									}
									source = Object.getPrototypeOf(source);
								}
								recordAnnotationApplied(this, annotation, key);
							}
						}),
						(_proto.extend_ = function extend_(key, descriptor, annotation, proxyTrap) {
							if ((void 0 === proxyTrap && (proxyTrap = !1), !0 === annotation && (annotation = this.defaultAnnotation_), !1 === annotation))
								return this.defineProperty_(key, descriptor, proxyTrap);
							assertAnnotable(this, annotation, key);
							var outcome = annotation.extend_(this, key, descriptor, proxyTrap);
							return outcome && recordAnnotationApplied(this, annotation, key), outcome;
						}),
						(_proto.defineProperty_ = function defineProperty_(key, descriptor, proxyTrap) {
							void 0 === proxyTrap && (proxyTrap = !1);
							try {
								startBatch();
								var deleteOutcome = this.delete_(key);
								if (!deleteOutcome) return deleteOutcome;
								if (hasInterceptors(this)) {
									var change = interceptChange(this, { object: this.proxy_ || this.target_, name: key, type: ADD, newValue: descriptor.value });
									if (!change) return null;
									var newValue = change.newValue;
									descriptor.value !== newValue && (descriptor = _extends({}, descriptor, { value: newValue }));
								}
								if (proxyTrap) {
									if (!Reflect.defineProperty(this.target_, key, descriptor)) return !1;
								} else defineProperty(this.target_, key, descriptor);
								this.notifyPropertyAddition_(key, descriptor.value);
							} finally {
								endBatch();
							}
							return !0;
						}),
						(_proto.defineObservableProperty_ = function defineObservableProperty_(key, value, enhancer, proxyTrap) {
							void 0 === proxyTrap && (proxyTrap = !1);
							try {
								startBatch();
								var deleteOutcome = this.delete_(key);
								if (!deleteOutcome) return deleteOutcome;
								if (hasInterceptors(this)) {
									var change = interceptChange(this, { object: this.proxy_ || this.target_, name: key, type: ADD, newValue: value });
									if (!change) return null;
									value = change.newValue;
								}
								var cachedDescriptor = getCachedObservablePropDescriptor(key),
									descriptor = {
										configurable: !globalState.safeDescriptors || this.isPlainObject_,
										enumerable: !0,
										get: cachedDescriptor.get,
										set: cachedDescriptor.set,
									};
								if (proxyTrap) {
									if (!Reflect.defineProperty(this.target_, key, descriptor)) return !1;
								} else defineProperty(this.target_, key, descriptor);
								var observable = new ObservableValue(value, enhancer, 'ObservableObject.key', !1);
								this.values_.set(key, observable), this.notifyPropertyAddition_(key, observable.value_);
							} finally {
								endBatch();
							}
							return !0;
						}),
						(_proto.defineComputedProperty_ = function defineComputedProperty_(key, options, proxyTrap) {
							void 0 === proxyTrap && (proxyTrap = !1);
							try {
								startBatch();
								var deleteOutcome = this.delete_(key);
								if (!deleteOutcome) return deleteOutcome;
								if (hasInterceptors(this))
									if (!interceptChange(this, { object: this.proxy_ || this.target_, name: key, type: ADD, newValue: void 0 })) return null;
								options.name || (options.name = 'ObservableObject.key'), (options.context = this.proxy_ || this.target_);
								var cachedDescriptor = getCachedObservablePropDescriptor(key),
									descriptor = {
										configurable: !globalState.safeDescriptors || this.isPlainObject_,
										enumerable: !1,
										get: cachedDescriptor.get,
										set: cachedDescriptor.set,
									};
								if (proxyTrap) {
									if (!Reflect.defineProperty(this.target_, key, descriptor)) return !1;
								} else defineProperty(this.target_, key, descriptor);
								this.values_.set(key, new ComputedValue(options)), this.notifyPropertyAddition_(key, void 0);
							} finally {
								endBatch();
							}
							return !0;
						}),
						(_proto.delete_ = function delete_(key, proxyTrap) {
							if ((void 0 === proxyTrap && (proxyTrap = !1), !hasProp(this.target_, key))) return !0;
							if (hasInterceptors(this) && !interceptChange(this, { object: this.proxy_ || this.target_, name: key, type: 'remove' })) return null;
							try {
								var _this$pendingKeys_, _this$pendingKeys_$ge;
								startBatch();
								var _getDescriptor,
									notify = hasListeners(this),
									observable = this.values_.get(key),
									value = void 0;
								if (!observable && notify) value = null == (_getDescriptor = getDescriptor(this.target_, key)) ? void 0 : _getDescriptor.value;
								if (proxyTrap) {
									if (!Reflect.deleteProperty(this.target_, key)) return !1;
								} else delete this.target_[key];
								if (
									(observable &&
										(this.values_.delete(key), observable instanceof ObservableValue && (value = observable.value_), propagateChanged(observable)),
									this.keysAtom_.reportChanged(),
									null == (_this$pendingKeys_ = this.pendingKeys_) ||
										null == (_this$pendingKeys_$ge = _this$pendingKeys_.get(key)) ||
										_this$pendingKeys_$ge.set(key in this.target_),
									notify)
								) {
									var _change2 = {
										type: 'remove',
										observableKind: 'object',
										object: this.proxy_ || this.target_,
										debugObjectName: this.name_,
										oldValue: value,
										name: key,
									};
									0, notify && notifyListeners(this, _change2);
								}
							} finally {
								endBatch();
							}
							return !0;
						}),
						(_proto.observe_ = function observe_(callback, fireImmediately) {
							return registerListener(this, callback);
						}),
						(_proto.intercept_ = function intercept_(handler) {
							return registerInterceptor(this, handler);
						}),
						(_proto.notifyPropertyAddition_ = function notifyPropertyAddition_(key, value) {
							var _this$pendingKeys_2,
								_this$pendingKeys_2$g,
								notify = hasListeners(this);
							if (notify) {
								var change = notify
									? {
											type: ADD,
											observableKind: 'object',
											debugObjectName: this.name_,
											object: this.proxy_ || this.target_,
											name: key,
											newValue: value,
									  }
									: null;
								0, notify && notifyListeners(this, change);
							}
							null == (_this$pendingKeys_2 = this.pendingKeys_) ||
								null == (_this$pendingKeys_2$g = _this$pendingKeys_2.get(key)) ||
								_this$pendingKeys_2$g.set(!0),
								this.keysAtom_.reportChanged();
						}),
						(_proto.ownKeys_ = function ownKeys_() {
							return this.keysAtom_.reportObserved(), ownKeys(this.target_);
						}),
						(_proto.keys_ = function keys_() {
							return this.keysAtom_.reportObserved(), Object.keys(this.target_);
						}),
						ObservableObjectAdministration
					);
				})();
			function asObservableObject(target, options) {
				var _options$name;
				if (hasProp(target, $mobx)) return target;
				var name = null != (_options$name = null == options ? void 0 : options.name) ? _options$name : 'ObservableObject',
					adm = new ObservableObjectAdministration(
						target,
						new Map(),
						String(name),
						(function getAnnotationFromOptions(options) {
							var _options$defaultDecor;
							return options
								? null != (_options$defaultDecor = options.defaultDecorator)
									? _options$defaultDecor
									: createAutoAnnotation(options)
								: void 0;
						})(options)
					);
				return addHiddenProp(target, $mobx, adm), target;
			}
			var isObservableObjectAdministration = createInstanceofPredicate('ObservableObjectAdministration', ObservableObjectAdministration);
			function getCachedObservablePropDescriptor(key) {
				return (
					descriptorCache[key] ||
					(descriptorCache[key] = {
						get: function get() {
							return this[$mobx].getObservablePropValue_(key);
						},
						set: function set(value) {
							return this[$mobx].setObservablePropValue_(key, value);
						},
					})
				);
			}
			function isObservableObject(thing) {
				return !!isObject(thing) && isObservableObjectAdministration(thing[$mobx]);
			}
			function recordAnnotationApplied(adm, annotation, key) {
				var _adm$target_$storedAn;
				null == (_adm$target_$storedAn = adm.target_[storedAnnotationsSymbol]) || delete _adm$target_$storedAn[key];
			}
			function assertAnnotable(adm, annotation, key) {}
			var ENTRY_0 = createArrayEntryDescriptor(0),
				OBSERVABLE_ARRAY_BUFFER_SIZE = 0,
				StubArray = function StubArray() {};
			!(function inherit(ctor, proto) {
				Object.setPrototypeOf
					? Object.setPrototypeOf(ctor.prototype, proto)
					: void 0 !== ctor.prototype.__proto__
					? (ctor.prototype.__proto__ = proto)
					: (ctor.prototype = proto);
			})(StubArray, Array.prototype);
			var LegacyObservableArray = (function (_StubArray, _Symbol$toStringTag, _Symbol$iterator) {
				function LegacyObservableArray(initialValues, enhancer, name, owned) {
					var _this;
					void 0 === name && (name = 'ObservableArray'), void 0 === owned && (owned = !1), (_this = _StubArray.call(this) || this);
					var adm = new ObservableArrayAdministration(name, enhancer, owned, !0);
					if (
						((adm.proxy_ = _assertThisInitialized(_this)),
						addHiddenFinalProp(_assertThisInitialized(_this), $mobx, adm),
						initialValues && initialValues.length)
					) {
						var prev = allowStateChangesStart(!0);
						_this.spliceWithArray(0, 0, initialValues), allowStateChangesEnd(prev);
					}
					return Object.defineProperty(_assertThisInitialized(_this), '0', ENTRY_0), _this;
				}
				_inheritsLoose(LegacyObservableArray, _StubArray);
				var _proto = LegacyObservableArray.prototype;
				return (
					(_proto.concat = function concat() {
						this[$mobx].atom_.reportObserved();
						for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) arrays[_key] = arguments[_key];
						return Array.prototype.concat.apply(
							this.slice(),
							arrays.map(function (a) {
								return isObservableArray(a) ? a.slice() : a;
							})
						);
					}),
					(_proto[_Symbol$iterator] = function () {
						var self = this,
							nextIndex = 0;
						return makeIterable({
							next: function next() {
								return nextIndex < self.length ? { value: self[nextIndex++], done: !1 } : { done: !0, value: void 0 };
							},
						});
					}),
					_createClass(LegacyObservableArray, [
						{
							key: 'length',
							get: function get() {
								return this[$mobx].getArrayLength_();
							},
							set: function set(newLength) {
								this[$mobx].setArrayLength_(newLength);
							},
						},
						{
							key: _Symbol$toStringTag,
							get: function get() {
								return 'Array';
							},
						},
					]),
					LegacyObservableArray
				);
			})(StubArray, Symbol.toStringTag, Symbol.iterator);
			function createArrayEntryDescriptor(index) {
				return {
					enumerable: !1,
					configurable: !0,
					get: function get() {
						return this[$mobx].get_(index);
					},
					set: function set(value) {
						this[$mobx].set_(index, value);
					},
				};
			}
			function createArrayBufferItem(index) {
				defineProperty(LegacyObservableArray.prototype, '' + index, createArrayEntryDescriptor(index));
			}
			function reserveArrayBuffer(max) {
				if (max > OBSERVABLE_ARRAY_BUFFER_SIZE) {
					for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max + 100; index++) createArrayBufferItem(index);
					OBSERVABLE_ARRAY_BUFFER_SIZE = max;
				}
			}
			function createLegacyArray(initialValues, enhancer, name) {
				return new LegacyObservableArray(initialValues, enhancer, name);
			}
			function getAtom(thing, property) {
				if ('object' == typeof thing && null !== thing) {
					if (isObservableArray(thing)) return void 0 !== property && die(23), thing[$mobx].atom_;
					if (isObservableSet(thing)) return thing.atom_;
					if (isObservableMap(thing)) {
						if (void 0 === property) return thing.keysAtom_;
						var observable = thing.data_.get(property) || thing.hasMap_.get(property);
						return observable || die(25, property, getDebugName(thing)), observable;
					}
					if (isObservableObject(thing)) {
						if (!property) return die(26);
						var _observable = thing[$mobx].values_.get(property);
						return _observable || die(27, property, getDebugName(thing)), _observable;
					}
					if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) return thing;
				} else if (isFunction(thing) && isReaction(thing[$mobx])) return thing[$mobx];
				die(28);
			}
			function getAdministration(thing, property) {
				return (
					thing || die(29),
					void 0 !== property
						? getAdministration(getAtom(thing, property))
						: isAtom(thing) || isComputedValue(thing) || isReaction(thing) || isObservableMap(thing) || isObservableSet(thing)
						? thing
						: thing[$mobx]
						? thing[$mobx]
						: void die(24, thing)
				);
			}
			function getDebugName(thing, property) {
				var named;
				if (void 0 !== property) named = getAtom(thing, property);
				else {
					if (isAction(thing)) return thing.name;
					named = isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing) ? getAdministration(thing) : getAtom(thing);
				}
				return named.name_;
			}
			Object.entries(arrayExtensions).forEach(function (_ref) {
				var prop = _ref[0],
					fn = _ref[1];
				'concat' !== prop && addHiddenProp(LegacyObservableArray.prototype, prop, fn);
			}),
				reserveArrayBuffer(1e3);
			var toString = objectPrototype.toString;
			function deepEqual(a, b, depth) {
				return void 0 === depth && (depth = -1), eq(a, b, depth);
			}
			function eq(a, b, depth, aStack, bStack) {
				if (a === b) return 0 !== a || 1 / a == 1 / b;
				if (null == a || null == b) return !1;
				if (a != a) return b != b;
				var type = typeof a;
				if ('function' !== type && 'object' !== type && 'object' != typeof b) return !1;
				var className = toString.call(a);
				if (className !== toString.call(b)) return !1;
				switch (className) {
					case '[object RegExp]':
					case '[object String]':
						return '' + a == '' + b;
					case '[object Number]':
						return +a != +a ? +b != +b : 0 == +a ? 1 / +a == 1 / b : +a == +b;
					case '[object Date]':
					case '[object Boolean]':
						return +a == +b;
					case '[object Symbol]':
						return 'undefined' != typeof Symbol && Symbol.valueOf.call(a) === Symbol.valueOf.call(b);
					case '[object Map]':
					case '[object Set]':
						depth >= 0 && depth++;
				}
				(a = unwrap(a)), (b = unwrap(b));
				var areArrays = '[object Array]' === className;
				if (!areArrays) {
					if ('object' != typeof a || 'object' != typeof b) return !1;
					var aCtor = a.constructor,
						bCtor = b.constructor;
					if (
						aCtor !== bCtor &&
						!(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) &&
						'constructor' in a &&
						'constructor' in b
					)
						return !1;
				}
				if (0 === depth) return !1;
				depth < 0 && (depth = -1), (bStack = bStack || []);
				for (var length = (aStack = aStack || []).length; length--; ) if (aStack[length] === a) return bStack[length] === b;
				if ((aStack.push(a), bStack.push(b), areArrays)) {
					if ((length = a.length) !== b.length) return !1;
					for (; length--; ) if (!eq(a[length], b[length], depth - 1, aStack, bStack)) return !1;
				} else {
					var key,
						keys = Object.keys(a);
					if (((length = keys.length), Object.keys(b).length !== length)) return !1;
					for (; length--; ) if (!hasProp(b, (key = keys[length])) || !eq(a[key], b[key], depth - 1, aStack, bStack)) return !1;
				}
				return aStack.pop(), bStack.pop(), !0;
			}
			function unwrap(a) {
				return isObservableArray(a)
					? a.slice()
					: isES6Map(a) || isObservableMap(a) || isES6Set(a) || isObservableSet(a)
					? Array.from(a.entries())
					: a;
			}
			function makeIterable(iterator) {
				return (iterator[Symbol.iterator] = getSelf), iterator;
			}
			function getSelf() {
				return this;
			}
			['Symbol', 'Map', 'Set'].forEach(function (m) {
				void 0 === getGlobal()[m] && die("MobX requires global '" + m + "' to be available or polyfilled");
			}),
				'object' == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
					__MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
						spy: function spy(listener) {
							return console.warn('[mobx.spy] Is a no-op in production builds'), function () {};
						},
						extras: { getDebugName },
						$mobx,
					});
		},
		'../../node_modules/preact/compat/jsx-runtime.mjs': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { FK: () => preact_module.FK, Y: () => e, FD: () => e });
			__webpack_require__('../../node_modules/preact/compat/dist/compat.module.js');
			var preact_module = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				o = 0;
			function e(_, e, n, t, f) {
				var l,
					s,
					u = {};
				for (s in e) 'ref' == s ? (l = e[s]) : (u[s] = e[s]);
				var a = {
					type: _,
					props: u,
					key: n,
					ref: l,
					__k: null,
					__: null,
					__b: 0,
					__e: null,
					__d: void 0,
					__c: null,
					__h: null,
					constructor: void 0,
					__v: --o,
					__source: f,
					__self: t,
				};
				if ('function' == typeof _ && (l = _.defaultProps)) for (s in l) void 0 === u[s] && (u[s] = l[s]);
				return preact_module.fF.vnode && preact_module.fF.vnode(a), a;
			}
		},
	},
]);
