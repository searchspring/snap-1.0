/*! For license information please see 6311.4ea19daf.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[6311],
	{
		'../../node_modules/css.escape/css.escape.js': function (module, __unused_webpack_exports, __webpack_require__) {
			var root;
			(root = void 0 !== __webpack_require__.g ? __webpack_require__.g : this),
				(module.exports = (function (root) {
					if (root.CSS && root.CSS.escape) return root.CSS.escape;
					var cssEscape = function (value) {
						if (0 == arguments.length) throw new TypeError('`CSS.escape` requires an argument.');
						for (
							var codeUnit, string = String(value), length = string.length, index = -1, result = '', firstCodeUnit = string.charCodeAt(0);
							++index < length;

						)
							0 != (codeUnit = string.charCodeAt(index))
								? (result +=
										(codeUnit >= 1 && codeUnit <= 31) ||
										127 == codeUnit ||
										(0 == index && codeUnit >= 48 && codeUnit <= 57) ||
										(1 == index && codeUnit >= 48 && codeUnit <= 57 && 45 == firstCodeUnit)
											? '\\' + codeUnit.toString(16) + ' '
											: (0 == index && 1 == length && 45 == codeUnit) ||
											  !(
													codeUnit >= 128 ||
													45 == codeUnit ||
													95 == codeUnit ||
													(codeUnit >= 48 && codeUnit <= 57) ||
													(codeUnit >= 65 && codeUnit <= 90) ||
													(codeUnit >= 97 && codeUnit <= 122)
											  )
											? '\\' + string.charAt(index)
											: string.charAt(index))
								: (result += '�');
						return result;
					};
					return root.CSS || (root.CSS = {}), (root.CSS.escape = cssEscape), cssEscape;
				})(root));
		},
		'../../node_modules/deepmerge/dist/cjs.js': (module) => {
			'use strict';
			var isMergeableObject = function isMergeableObject(value) {
				return (
					(function isNonNullObject(value) {
						return !!value && 'object' == typeof value;
					})(value) &&
					!(function isSpecial(value) {
						var stringValue = Object.prototype.toString.call(value);
						return (
							'[object RegExp]' === stringValue ||
							'[object Date]' === stringValue ||
							(function isReactElement(value) {
								return value.$$typeof === REACT_ELEMENT_TYPE;
							})(value)
						);
					})(value)
				);
			};
			var REACT_ELEMENT_TYPE = 'function' == typeof Symbol && Symbol.for ? Symbol.for('react.element') : 60103;
			function cloneUnlessOtherwiseSpecified(value, options) {
				return !1 !== options.clone && options.isMergeableObject(value)
					? deepmerge(
							(function emptyTarget(val) {
								return Array.isArray(val) ? [] : {};
							})(value),
							value,
							options
					  )
					: value;
			}
			function defaultArrayMerge(target, source, options) {
				return target.concat(source).map(function (element) {
					return cloneUnlessOtherwiseSpecified(element, options);
				});
			}
			function getKeys(target) {
				return Object.keys(target).concat(
					(function getEnumerableOwnPropertySymbols(target) {
						return Object.getOwnPropertySymbols
							? Object.getOwnPropertySymbols(target).filter(function (symbol) {
									return Object.propertyIsEnumerable.call(target, symbol);
							  })
							: [];
					})(target)
				);
			}
			function propertyIsOnObject(object, property) {
				try {
					return property in object;
				} catch (_) {
					return !1;
				}
			}
			function mergeObject(target, source, options) {
				var destination = {};
				return (
					options.isMergeableObject(target) &&
						getKeys(target).forEach(function (key) {
							destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
						}),
					getKeys(source).forEach(function (key) {
						(function propertyIsUnsafe(target, key) {
							return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
						})(target, key) ||
							(propertyIsOnObject(target, key) && options.isMergeableObject(source[key])
								? (destination[key] = (function getMergeFunction(key, options) {
										if (!options.customMerge) return deepmerge;
										var customMerge = options.customMerge(key);
										return 'function' == typeof customMerge ? customMerge : deepmerge;
								  })(key, options)(target[key], source[key], options))
								: (destination[key] = cloneUnlessOtherwiseSpecified(source[key], options)));
					}),
					destination
				);
			}
			function deepmerge(target, source, options) {
				((options = options || {}).arrayMerge = options.arrayMerge || defaultArrayMerge),
					(options.isMergeableObject = options.isMergeableObject || isMergeableObject),
					(options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified);
				var sourceIsArray = Array.isArray(source);
				return sourceIsArray === Array.isArray(target)
					? sourceIsArray
						? options.arrayMerge(target, source, options)
						: mergeObject(target, source, options)
					: cloneUnlessOtherwiseSpecified(source, options);
			}
			deepmerge.all = function deepmergeAll(array, options) {
				if (!Array.isArray(array)) throw new Error('first argument should be an array');
				return array.reduce(function (prev, next) {
					return deepmerge(prev, next, options);
				}, {});
			};
			var deepmerge_1 = deepmerge;
			module.exports = deepmerge_1;
		},
		'../../node_modules/is-plain-object/dist/is-plain-object.mjs': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			function isObject(o) {
				return '[object Object]' === Object.prototype.toString.call(o);
			}
			function isPlainObject(o) {
				var ctor, prot;
				return (
					!1 !== isObject(o) &&
					(void 0 === (ctor = o.constructor) || (!1 !== isObject((prot = ctor.prototype)) && !1 !== prot.hasOwnProperty('isPrototypeOf')))
				);
			}
			__webpack_require__.d(__webpack_exports__, { Q: () => isPlainObject });
		},
		'../../node_modules/seamless-immutable/seamless-immutable.development.js': (module, exports, __webpack_require__) => {
			var __WEBPACK_AMD_DEFINE_RESULT__;
			!(function () {
				'use strict';
				var Immutable = (function immutableInit(config) {
					var REACT_ELEMENT_TYPE = 'function' == typeof Symbol && Symbol.for && Symbol.for('react.element'),
						REACT_ELEMENT_TYPE_FALLBACK = 60103,
						globalConfig = { use_static: !1 };
					function instantiateEmptyObject(obj) {
						var prototype = Object.getPrototypeOf(obj);
						return prototype ? Object.create(prototype) : {};
					}
					function addPropertyTo(target, methodName, value) {
						Object.defineProperty(target, methodName, { enumerable: !1, configurable: !1, writable: !1, value });
					}
					function banProperty(target, methodName) {
						addPropertyTo(target, methodName, function () {
							throw new ImmutableError('The ' + methodName + ' method cannot be invoked on an Immutable data structure.');
						});
					}
					(function isObject(data) {
						return 'object' == typeof data && !Array.isArray(data) && null !== data;
					})(config) &&
						void 0 !== config.use_static &&
						(globalConfig.use_static = Boolean(config.use_static));
					var immutabilityTag = '__immutable_invariants_hold';
					function isImmutable(target) {
						return 'object' != typeof target || null === target || Boolean(Object.getOwnPropertyDescriptor(target, immutabilityTag));
					}
					function isEqual(a, b) {
						return a === b || (a != a && b != b);
					}
					function isMergableObject(target) {
						return !(null === target || 'object' != typeof target || Array.isArray(target) || target instanceof Date);
					}
					var mutatingObjectMethods = ['setPrototypeOf'],
						mutatingArrayMethods = mutatingObjectMethods.concat(['push', 'pop', 'sort', 'splice', 'shift', 'unshift', 'reverse']),
						nonMutatingArrayMethods = ['keys'].concat(['map', 'filter', 'slice', 'concat', 'reduce', 'reduceRight']),
						mutatingDateMethods = mutatingObjectMethods.concat([
							'setDate',
							'setFullYear',
							'setHours',
							'setMilliseconds',
							'setMinutes',
							'setMonth',
							'setSeconds',
							'setTime',
							'setUTCDate',
							'setUTCFullYear',
							'setUTCHours',
							'setUTCMilliseconds',
							'setUTCMinutes',
							'setUTCMonth',
							'setUTCSeconds',
							'setYear',
						]);
					function ImmutableError(message) {
						(this.name = 'MyError'), (this.message = message), (this.stack = new Error().stack);
					}
					function makeImmutable(obj, bannedMethods) {
						for (var index in ((function addImmutabilityTag(target) {
							addPropertyTo(target, immutabilityTag, !0);
						})(obj),
						bannedMethods))
							bannedMethods.hasOwnProperty(index) && banProperty(obj, bannedMethods[index]);
						return Object.freeze(obj), obj;
					}
					function makeMethodReturnImmutable(obj, methodName) {
						var currentMethod = obj[methodName];
						addPropertyTo(obj, methodName, function () {
							return Immutable(currentMethod.apply(obj, arguments));
						});
					}
					function arraySet(idx, value, config) {
						var deep = config && config.deep;
						if (
							idx in this &&
							(deep &&
								this[idx] !== value &&
								isMergableObject(value) &&
								isMergableObject(this[idx]) &&
								(value = Immutable.merge(this[idx], value, { deep: !0, mode: 'replace' })),
							isEqual(this[idx], value))
						)
							return this;
						var mutable = asMutableArray.call(this);
						return (mutable[idx] = Immutable(value)), makeImmutableArray(mutable);
					}
					(ImmutableError.prototype = new Error()), (ImmutableError.prototype.constructor = Error);
					var immutableEmptyArray = Immutable([]);
					function arraySetIn(pth, value, config) {
						var head = pth[0];
						if (1 === pth.length) return arraySet.call(this, head, value, config);
						var newValue,
							tail = pth.slice(1),
							thisHead = this[head];
						if ('object' == typeof thisHead && null !== thisHead) newValue = Immutable.setIn(thisHead, tail, value);
						else {
							var nextHead = tail[0];
							newValue =
								'' !== nextHead && isFinite(nextHead)
									? arraySetIn.call(immutableEmptyArray, tail, value)
									: objectSetIn.call(immutableEmptyObject, tail, value);
						}
						if (head in this && thisHead === newValue) return this;
						var mutable = asMutableArray.call(this);
						return (mutable[head] = newValue), makeImmutableArray(mutable);
					}
					function makeImmutableArray(array) {
						for (var index in nonMutatingArrayMethods) {
							if (nonMutatingArrayMethods.hasOwnProperty(index)) makeMethodReturnImmutable(array, nonMutatingArrayMethods[index]);
						}
						globalConfig.use_static ||
							(addPropertyTo(array, 'flatMap', flatMap),
							addPropertyTo(array, 'asObject', asObject),
							addPropertyTo(array, 'asMutable', asMutableArray),
							addPropertyTo(array, 'set', arraySet),
							addPropertyTo(array, 'setIn', arraySetIn),
							addPropertyTo(array, 'update', update),
							addPropertyTo(array, 'updateIn', updateIn),
							addPropertyTo(array, 'getIn', getIn));
						for (var i = 0, length = array.length; i < length; i++) array[i] = Immutable(array[i]);
						return makeImmutable(array, mutatingArrayMethods);
					}
					function asMutableDate() {
						return new Date(this.getTime());
					}
					function flatMap(iterator) {
						if (0 === arguments.length) return this;
						var index,
							result = [],
							length = this.length;
						for (index = 0; index < length; index++) {
							var iteratorResult = iterator(this[index], index, this);
							Array.isArray(iteratorResult) ? result.push.apply(result, iteratorResult) : result.push(iteratorResult);
						}
						return makeImmutableArray(result);
					}
					function without(remove) {
						if (void 0 === remove && 0 === arguments.length) return this;
						if ('function' != typeof remove) {
							var keysToRemoveArray = Array.isArray(remove) ? remove.slice() : Array.prototype.slice.call(arguments);
							keysToRemoveArray.forEach(function (el, idx, arr) {
								'number' == typeof el && (arr[idx] = el.toString());
							}),
								(remove = function (val, key) {
									return -1 !== keysToRemoveArray.indexOf(key);
								});
						}
						var result = instantiateEmptyObject(this);
						for (var key in this) this.hasOwnProperty(key) && !1 === remove(this[key], key) && (result[key] = this[key]);
						return makeImmutableObject(result);
					}
					function asMutableArray(opts) {
						var i,
							length,
							result = [];
						if (opts && opts.deep) for (i = 0, length = this.length; i < length; i++) result.push(asDeepMutable(this[i]));
						else for (i = 0, length = this.length; i < length; i++) result.push(this[i]);
						return result;
					}
					function asObject(iterator) {
						'function' != typeof iterator &&
							(iterator = function (value) {
								return value;
							});
						var index,
							result = {},
							length = this.length;
						for (index = 0; index < length; index++) {
							var pair = iterator(this[index], index, this),
								key = pair[0],
								value = pair[1];
							result[key] = value;
						}
						return makeImmutableObject(result);
					}
					function asDeepMutable(obj) {
						return !obj || 'object' != typeof obj || !Object.getOwnPropertyDescriptor(obj, immutabilityTag) || obj instanceof Date
							? obj
							: Immutable.asMutable(obj, { deep: !0 });
					}
					function quickCopy(src, dest) {
						for (var key in src) Object.getOwnPropertyDescriptor(src, key) && (dest[key] = src[key]);
						return dest;
					}
					function merge(other, config) {
						if (0 === arguments.length) return this;
						if (null === other || 'object' != typeof other)
							throw new TypeError('Immutable#merge can only be invoked with objects or arrays, not ' + JSON.stringify(other));
						var result,
							key,
							receivedArray = Array.isArray(other),
							deep = config && config.deep,
							mode = (config && config.mode) || 'merge',
							merger = config && config.merger;
						function addToResult(currentObj, otherObj, key) {
							var newValue,
								immutableValue = Immutable(otherObj[key]),
								mergerResult = merger && merger(currentObj[key], immutableValue, config),
								currentValue = currentObj[key];
							(void 0 === result && void 0 === mergerResult && currentObj.hasOwnProperty(key) && isEqual(immutableValue, currentValue)) ||
								(isEqual(
									currentValue,
									(newValue =
										void 0 !== mergerResult
											? mergerResult
											: deep && isMergableObject(currentValue) && isMergableObject(immutableValue)
											? Immutable.merge(currentValue, immutableValue, config)
											: immutableValue)
								) &&
									currentObj.hasOwnProperty(key)) ||
								(void 0 === result && (result = quickCopy(currentObj, instantiateEmptyObject(currentObj))), (result[key] = newValue));
						}
						if (receivedArray)
							for (var index = 0, length = other.length; index < length; index++) {
								var otherFromArray = other[index];
								for (key in otherFromArray) otherFromArray.hasOwnProperty(key) && addToResult(void 0 !== result ? result : this, otherFromArray, key);
							}
						else {
							for (key in other) Object.getOwnPropertyDescriptor(other, key) && addToResult(this, other, key);
							'replace' === mode &&
								(function clearDroppedKeys(currentObj, otherObj) {
									for (var key in currentObj)
										otherObj.hasOwnProperty(key) ||
											(void 0 === result && (result = quickCopy(currentObj, instantiateEmptyObject(currentObj))), delete result[key]);
								})(this, other);
						}
						return void 0 === result ? this : makeImmutableObject(result);
					}
					function objectReplace(value, config) {
						var deep = config && config.deep;
						if (0 === arguments.length) return this;
						if (null === value || 'object' != typeof value)
							throw new TypeError('Immutable#replace can only be invoked with objects or arrays, not ' + JSON.stringify(value));
						return Immutable.merge(this, value, { deep, mode: 'replace' });
					}
					var immutableEmptyObject = Immutable({});
					function objectSetIn(path, value, config) {
						if (!Array.isArray(path) || 0 === path.length)
							throw new TypeError('The first argument to Immutable#setIn must be an array containing at least one "key" string.');
						var head = path[0];
						if (1 === path.length) return objectSet.call(this, head, value, config);
						var newValue,
							tail = path.slice(1),
							thisHead = this[head];
						if (
							((newValue =
								this.hasOwnProperty(head) && 'object' == typeof thisHead && null !== thisHead
									? Immutable.setIn(thisHead, tail, value)
									: objectSetIn.call(immutableEmptyObject, tail, value)),
							this.hasOwnProperty(head) && thisHead === newValue)
						)
							return this;
						var mutable = quickCopy(this, instantiateEmptyObject(this));
						return (mutable[head] = newValue), makeImmutableObject(mutable);
					}
					function objectSet(property, value, config) {
						var deep = config && config.deep;
						if (
							this.hasOwnProperty(property) &&
							(deep &&
								this[property] !== value &&
								isMergableObject(value) &&
								isMergableObject(this[property]) &&
								(value = Immutable.merge(this[property], value, { deep: !0, mode: 'replace' })),
							isEqual(this[property], value))
						)
							return this;
						var mutable = quickCopy(this, instantiateEmptyObject(this));
						return (mutable[property] = Immutable(value)), makeImmutableObject(mutable);
					}
					function update(property, updater) {
						var restArgs = Array.prototype.slice.call(arguments, 2),
							initialVal = this[property];
						return Immutable.set(this, property, updater.apply(initialVal, [initialVal].concat(restArgs)));
					}
					function getInPath(obj, path) {
						for (var i = 0, l = path.length; null != obj && i < l; i++) obj = obj[path[i]];
						return i && i == l ? obj : void 0;
					}
					function updateIn(path, updater) {
						var restArgs = Array.prototype.slice.call(arguments, 2),
							initialVal = getInPath(this, path);
						return Immutable.setIn(this, path, updater.apply(initialVal, [initialVal].concat(restArgs)));
					}
					function getIn(path, defaultValue) {
						var value = getInPath(this, path);
						return void 0 === value ? defaultValue : value;
					}
					function asMutableObject(opts) {
						var key,
							result = instantiateEmptyObject(this);
						if (opts && opts.deep) for (key in this) this.hasOwnProperty(key) && (result[key] = asDeepMutable(this[key]));
						else for (key in this) this.hasOwnProperty(key) && (result[key] = this[key]);
						return result;
					}
					function instantiatePlainObject() {
						return {};
					}
					function makeImmutableObject(obj) {
						return (
							globalConfig.use_static ||
								(addPropertyTo(obj, 'merge', merge),
								addPropertyTo(obj, 'replace', objectReplace),
								addPropertyTo(obj, 'without', without),
								addPropertyTo(obj, 'asMutable', asMutableObject),
								addPropertyTo(obj, 'set', objectSet),
								addPropertyTo(obj, 'setIn', objectSetIn),
								addPropertyTo(obj, 'update', update),
								addPropertyTo(obj, 'updateIn', updateIn),
								addPropertyTo(obj, 'getIn', getIn)),
							makeImmutable(obj, mutatingObjectMethods)
						);
					}
					function Immutable(obj, options, stackRemaining) {
						if (
							isImmutable(obj) ||
							(function isReactElement(obj) {
								return (
									'object' == typeof obj && null !== obj && (obj.$$typeof === REACT_ELEMENT_TYPE_FALLBACK || obj.$$typeof === REACT_ELEMENT_TYPE)
								);
							})(obj) ||
							(function isFileObject(obj) {
								return 'undefined' != typeof File && obj instanceof File;
							})(obj) ||
							(function isBlobObject(obj) {
								return 'undefined' != typeof Blob && obj instanceof Blob;
							})(obj) ||
							(function isError(obj) {
								return obj instanceof Error;
							})(obj)
						)
							return obj;
						if (
							(function isPromise(obj) {
								return 'object' == typeof obj && 'function' == typeof obj.then;
							})(obj)
						)
							return obj.then(Immutable);
						if (Array.isArray(obj)) return makeImmutableArray(obj.slice());
						if (obj instanceof Date)
							return (function makeImmutableDate(date) {
								return globalConfig.use_static || addPropertyTo(date, 'asMutable', asMutableDate), makeImmutable(date, mutatingDateMethods);
							})(new Date(obj.getTime()));
						var prototype = options && options.prototype,
							clone = (
								prototype && prototype !== Object.prototype
									? function () {
											return Object.create(prototype);
									  }
									: instantiatePlainObject
							)();
						if ((null == stackRemaining && (stackRemaining = 64), stackRemaining <= 0))
							throw new ImmutableError(
								'Attempt to construct Immutable from a deeply nested object was detected. Have you tried to wrap an object with circular references (e.g. React element)? See https://github.com/rtfeldman/seamless-immutable/wiki/Deeply-nested-object-was-detected for details.'
							);
						for (var key in ((stackRemaining -= 1), obj))
							Object.getOwnPropertyDescriptor(obj, key) && (clone[key] = Immutable(obj[key], void 0, stackRemaining));
						return makeImmutableObject(clone);
					}
					function toStatic(fn) {
						return function staticWrapper() {
							var args = [].slice.call(arguments),
								self = args.shift();
							return fn.apply(self, args);
						};
					}
					function toStaticObjectOrArray(fnObject, fnArray) {
						return function staticWrapper() {
							var args = [].slice.call(arguments),
								self = args.shift();
							return Array.isArray(self) ? fnArray.apply(self, args) : fnObject.apply(self, args);
						};
					}
					return (
						(Immutable.from = Immutable),
						(Immutable.isImmutable = isImmutable),
						(Immutable.ImmutableError = ImmutableError),
						(Immutable.merge = toStatic(merge)),
						(Immutable.replace = toStatic(objectReplace)),
						(Immutable.without = toStatic(without)),
						(Immutable.asMutable = (function toStaticObjectOrDateOrArray(fnObject, fnArray, fnDate) {
							return function staticWrapper() {
								var args = [].slice.call(arguments),
									self = args.shift();
								return Array.isArray(self) ? fnArray.apply(self, args) : self instanceof Date ? fnDate.apply(self, args) : fnObject.apply(self, args);
							};
						})(asMutableObject, asMutableArray, asMutableDate)),
						(Immutable.set = toStaticObjectOrArray(objectSet, arraySet)),
						(Immutable.setIn = toStaticObjectOrArray(objectSetIn, arraySetIn)),
						(Immutable.update = toStatic(update)),
						(Immutable.updateIn = toStatic(updateIn)),
						(Immutable.getIn = toStatic(getIn)),
						(Immutable.flatMap = toStatic(flatMap)),
						(Immutable.asObject = toStatic(asObject)),
						globalConfig.use_static || (Immutable.static = immutableInit({ use_static: !0 })),
						Object.freeze(Immutable),
						Immutable
					);
				})();
				void 0 ===
					(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
						return Immutable;
					}.call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
			})();
		},
	},
]);
