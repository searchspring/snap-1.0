(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[4661],
	{
		'../../node_modules/@icons/material/CheckIcon.js': (__unused_webpack_module, exports, __webpack_require__) => {
			'use strict';
			var _extends =
					Object.assign ||
					function (target) {
						for (var i = 1; i < arguments.length; i++) {
							var source = arguments[i];
							for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
						}
						return target;
					},
				_react2 = (function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				})(__webpack_require__('../../node_modules/preact/compat/dist/compat.module.js'));
			exports.A = function (_ref) {
				var _ref$fill = _ref.fill,
					fill = void 0 === _ref$fill ? 'currentColor' : _ref$fill,
					_ref$width = _ref.width,
					width = void 0 === _ref$width ? 24 : _ref$width,
					_ref$height = _ref.height,
					height = void 0 === _ref$height ? 24 : _ref$height,
					_ref$style = _ref.style,
					style = void 0 === _ref$style ? {} : _ref$style,
					props = (function _objectWithoutProperties(obj, keys) {
						var target = {};
						for (var i in obj) keys.indexOf(i) >= 0 || (Object.prototype.hasOwnProperty.call(obj, i) && (target[i] = obj[i]));
						return target;
					})(_ref, ['fill', 'width', 'height', 'style']);
				return _react2.default.createElement(
					'svg',
					_extends({ viewBox: '0 0 24 24', style: _extends({ fill, width, height }, style) }, props),
					_react2.default.createElement('path', { d: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z' })
				);
			};
		},
		'../../node_modules/@icons/material/UnfoldMoreHorizontalIcon.js': (__unused_webpack_module, exports, __webpack_require__) => {
			'use strict';
			var _extends =
					Object.assign ||
					function (target) {
						for (var i = 1; i < arguments.length; i++) {
							var source = arguments[i];
							for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
						}
						return target;
					},
				_react2 = (function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				})(__webpack_require__('../../node_modules/preact/compat/dist/compat.module.js'));
			exports.A = function (_ref) {
				var _ref$fill = _ref.fill,
					fill = void 0 === _ref$fill ? 'currentColor' : _ref$fill,
					_ref$width = _ref.width,
					width = void 0 === _ref$width ? 24 : _ref$width,
					_ref$height = _ref.height,
					height = void 0 === _ref$height ? 24 : _ref$height,
					_ref$style = _ref.style,
					style = void 0 === _ref$style ? {} : _ref$style,
					props = (function _objectWithoutProperties(obj, keys) {
						var target = {};
						for (var i in obj) keys.indexOf(i) >= 0 || (Object.prototype.hasOwnProperty.call(obj, i) && (target[i] = obj[i]));
						return target;
					})(_ref, ['fill', 'width', 'height', 'style']);
				return _react2.default.createElement(
					'svg',
					_extends({ viewBox: '0 0 24 24', style: _extends({ fill, width, height }, style) }, props),
					_react2.default.createElement('path', {
						d: 'M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z',
					})
				);
			};
		},
		'../../node_modules/lodash-es/_cloneBuffer.js': (module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
			var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/lodash-es/_root.js');
			module = __webpack_require__.hmd(module);
			var freeExports = 'object' == typeof exports && exports && !exports.nodeType && exports,
				freeModule = freeExports && module && !module.nodeType && module,
				Buffer = freeModule && freeModule.exports === freeExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__.A.Buffer : void 0,
				allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
			const __WEBPACK_DEFAULT_EXPORT__ = function cloneBuffer(buffer, isDeep) {
				if (isDeep) return buffer.slice();
				var length = buffer.length,
					result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
				return buffer.copy(result), result;
			};
		},
		'../../node_modules/lodash-es/_freeGlobal.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
			const __WEBPACK_DEFAULT_EXPORT__ =
				'object' == typeof __webpack_require__.g && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;
		},
		'../../node_modules/lodash-es/_nodeUtil.js': (module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
			var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/lodash-es/_freeGlobal.js');
			module = __webpack_require__.hmd(module);
			var freeExports = 'object' == typeof exports && exports && !exports.nodeType && exports,
				freeModule = freeExports && module && !module.nodeType && module,
				freeProcess = freeModule && freeModule.exports === freeExports && _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__.A.process;
			const __WEBPACK_DEFAULT_EXPORT__ = (function () {
				try {
					var types = freeModule && freeModule.require && freeModule.require('util').types;
					return types || (freeProcess && freeProcess.binding && freeProcess.binding('util'));
				} catch (e) {}
			})();
		},
		'../../node_modules/lodash-es/_root.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
			var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/lodash-es/_freeGlobal.js'),
				freeSelf = 'object' == typeof self && self && self.Object === Object && self;
			const __WEBPACK_DEFAULT_EXPORT__ = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__.A || freeSelf || Function('return this')();
		},
		'../../node_modules/lodash-es/isBuffer.js': (module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { A: () => lodash_es_isBuffer });
			var _root = __webpack_require__('../../node_modules/lodash-es/_root.js');
			const lodash_es_stubFalse = function stubFalse() {
				return !1;
			};
			module = __webpack_require__.hmd(module);
			var freeExports = 'object' == typeof exports && exports && !exports.nodeType && exports,
				freeModule = freeExports && module && !module.nodeType && module,
				Buffer = freeModule && freeModule.exports === freeExports ? _root.A.Buffer : void 0;
			const lodash_es_isBuffer = (Buffer ? Buffer.isBuffer : void 0) || lodash_es_stubFalse;
		},
		'../../node_modules/lodash/_baseEach.js': (module, __unused_webpack_exports, __webpack_require__) => {
			var baseForOwn = __webpack_require__('../../node_modules/lodash/_baseForOwn.js'),
				baseEach = __webpack_require__('../../node_modules/lodash/_createBaseEach.js')(baseForOwn);
			module.exports = baseEach;
		},
		'../../node_modules/lodash/_baseMap.js': (module, __unused_webpack_exports, __webpack_require__) => {
			var baseEach = __webpack_require__('../../node_modules/lodash/_baseEach.js'),
				isArrayLike = __webpack_require__('../../node_modules/lodash/isArrayLike.js');
			module.exports = function baseMap(collection, iteratee) {
				var index = -1,
					result = isArrayLike(collection) ? Array(collection.length) : [];
				return (
					baseEach(collection, function (value, key, collection) {
						result[++index] = iteratee(value, key, collection);
					}),
					result
				);
			};
		},
		'../../node_modules/lodash/_castFunction.js': (module, __unused_webpack_exports, __webpack_require__) => {
			var identity = __webpack_require__('../../node_modules/lodash/identity.js');
			module.exports = function castFunction(value) {
				return 'function' == typeof value ? value : identity;
			};
		},
		'../../node_modules/lodash/_createBaseEach.js': (module, __unused_webpack_exports, __webpack_require__) => {
			var isArrayLike = __webpack_require__('../../node_modules/lodash/isArrayLike.js');
			module.exports = function createBaseEach(eachFunc, fromRight) {
				return function (collection, iteratee) {
					if (null == collection) return collection;
					if (!isArrayLike(collection)) return eachFunc(collection, iteratee);
					for (
						var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
						(fromRight ? index-- : ++index < length) && !1 !== iteratee(iterable[index], index, iterable);

					);
					return collection;
				};
			};
		},
		'../../node_modules/lodash/forOwn.js': (module, __unused_webpack_exports, __webpack_require__) => {
			var baseForOwn = __webpack_require__('../../node_modules/lodash/_baseForOwn.js'),
				castFunction = __webpack_require__('../../node_modules/lodash/_castFunction.js');
			module.exports = function forOwn(object, iteratee) {
				return object && baseForOwn(object, castFunction(iteratee));
			};
		},
		'../../node_modules/lodash/isPlainObject.js': (module, __unused_webpack_exports, __webpack_require__) => {
			var baseGetTag = __webpack_require__('../../node_modules/lodash/_baseGetTag.js'),
				getPrototype = __webpack_require__('../../node_modules/lodash/_getPrototype.js'),
				isObjectLike = __webpack_require__('../../node_modules/lodash/isObjectLike.js'),
				funcProto = Function.prototype,
				objectProto = Object.prototype,
				funcToString = funcProto.toString,
				hasOwnProperty = objectProto.hasOwnProperty,
				objectCtorString = funcToString.call(Object);
			module.exports = function isPlainObject(value) {
				if (!isObjectLike(value) || '[object Object]' != baseGetTag(value)) return !1;
				var proto = getPrototype(value);
				if (null === proto) return !0;
				var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
				return 'function' == typeof Ctor && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
			};
		},
		'../../node_modules/lodash/isString.js': (module, __unused_webpack_exports, __webpack_require__) => {
			var baseGetTag = __webpack_require__('../../node_modules/lodash/_baseGetTag.js'),
				isArray = __webpack_require__('../../node_modules/lodash/isArray.js'),
				isObjectLike = __webpack_require__('../../node_modules/lodash/isObjectLike.js');
			module.exports = function isString(value) {
				return 'string' == typeof value || (!isArray(value) && isObjectLike(value) && '[object String]' == baseGetTag(value));
			};
		},
		'../../node_modules/lodash/map.js': (module, __unused_webpack_exports, __webpack_require__) => {
			var arrayMap = __webpack_require__('../../node_modules/lodash/_arrayMap.js'),
				baseIteratee = __webpack_require__('../../node_modules/lodash/_baseIteratee.js'),
				baseMap = __webpack_require__('../../node_modules/lodash/_baseMap.js'),
				isArray = __webpack_require__('../../node_modules/lodash/isArray.js');
			module.exports = function map(collection, iteratee) {
				return (isArray(collection) ? arrayMap : baseMap)(collection, baseIteratee(iteratee, 3));
			};
		},
		'../../node_modules/prop-types/factoryWithThrowingShims.js': (module, __unused_webpack_exports, __webpack_require__) => {
			'use strict';
			var ReactPropTypesSecret = __webpack_require__('../../node_modules/prop-types/lib/ReactPropTypesSecret.js');
			function emptyFunction() {}
			function emptyFunctionWithReset() {}
			(emptyFunctionWithReset.resetWarningCache = emptyFunction),
				(module.exports = function () {
					function shim(props, propName, componentName, location, propFullName, secret) {
						if (secret !== ReactPropTypesSecret) {
							var err = new Error(
								'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
							);
							throw ((err.name = 'Invariant Violation'), err);
						}
					}
					function getShim() {
						return shim;
					}
					shim.isRequired = shim;
					var ReactPropTypes = {
						array: shim,
						bigint: shim,
						bool: shim,
						func: shim,
						number: shim,
						object: shim,
						string: shim,
						symbol: shim,
						any: shim,
						arrayOf: getShim,
						element: shim,
						elementType: shim,
						instanceOf: getShim,
						node: shim,
						objectOf: getShim,
						oneOf: getShim,
						oneOfType: getShim,
						shape: getShim,
						exact: getShim,
						checkPropTypes: emptyFunctionWithReset,
						resetWarningCache: emptyFunction,
					};
					return (ReactPropTypes.PropTypes = ReactPropTypes), ReactPropTypes;
				});
		},
		'../../node_modules/prop-types/index.js': (module, __unused_webpack_exports, __webpack_require__) => {
			module.exports = __webpack_require__('../../node_modules/prop-types/factoryWithThrowingShims.js')();
		},
		'../../node_modules/prop-types/lib/ReactPropTypesSecret.js': (module) => {
			'use strict';
			module.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
		},
		'../../node_modules/react-color/es/index.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { xk: () => chrome_Chrome });
			var compat_module = __webpack_require__('../../node_modules/preact/compat/dist/compat.module.js'),
				lib = __webpack_require__('../../node_modules/reactcss/lib/index.js'),
				checkboardCache = {},
				get = function get(c1, c2, size, serverCanvas) {
					var key = c1 + '-' + c2 + '-' + size + (serverCanvas ? '-server' : '');
					if (checkboardCache[key]) return checkboardCache[key];
					var checkboard = (function render(c1, c2, size, serverCanvas) {
						if ('undefined' == typeof document && !serverCanvas) return null;
						var canvas = serverCanvas ? new serverCanvas() : document.createElement('canvas');
						(canvas.width = 2 * size), (canvas.height = 2 * size);
						var ctx = canvas.getContext('2d');
						return ctx
							? ((ctx.fillStyle = c1),
							  ctx.fillRect(0, 0, canvas.width, canvas.height),
							  (ctx.fillStyle = c2),
							  ctx.fillRect(0, 0, size, size),
							  ctx.translate(size, size),
							  ctx.fillRect(0, 0, size, size),
							  canvas.toDataURL())
							: null;
					})(c1, c2, size, serverCanvas);
					return (checkboardCache[key] = checkboard), checkboard;
				},
				_extends =
					Object.assign ||
					function (target) {
						for (var i = 1; i < arguments.length; i++) {
							var source = arguments[i];
							for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
						}
						return target;
					},
				Checkboard = function Checkboard(_ref) {
					var white = _ref.white,
						grey = _ref.grey,
						size = _ref.size,
						renderers = _ref.renderers,
						borderRadius = _ref.borderRadius,
						boxShadow = _ref.boxShadow,
						children = _ref.children,
						styles = (0, lib.Ay)({
							default: {
								grid: {
									borderRadius,
									boxShadow,
									absolute: '0px 0px 0px 0px',
									background: 'url(' + get(white, grey, size, renderers.canvas) + ') center left',
								},
							},
						});
					return (0, compat_module.isValidElement)(children)
						? compat_module.default.cloneElement(children, _extends({}, children.props, { style: _extends({}, children.props.style, styles.grid) }))
						: compat_module.default.createElement('div', { style: styles.grid });
				};
			Checkboard.defaultProps = { size: 8, white: 'transparent', grey: 'rgba(0,0,0,.08)', renderers: {} };
			const common_Checkboard = Checkboard;
			var Alpha_extends =
					Object.assign ||
					function (target) {
						for (var i = 1; i < arguments.length; i++) {
							var source = arguments[i];
							for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
						}
						return target;
					},
				_createClass = (function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];
							(descriptor.enumerable = descriptor.enumerable || !1),
								(descriptor.configurable = !0),
								'value' in descriptor && (descriptor.writable = !0),
								Object.defineProperty(target, descriptor.key, descriptor);
						}
					}
					return function (Constructor, protoProps, staticProps) {
						return (
							protoProps && defineProperties(Constructor.prototype, protoProps),
							staticProps && defineProperties(Constructor, staticProps),
							Constructor
						);
					};
				})();
			function _possibleConstructorReturn(self, call) {
				if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !call || ('object' != typeof call && 'function' != typeof call) ? self : call;
			}
			const common_Alpha = (function (_ref) {
				function Alpha() {
					var _ref2, _temp, _this;
					!(function _classCallCheck(instance, Constructor) {
						if (!(instance instanceof Constructor)) throw new TypeError('Cannot call a class as a function');
					})(this, Alpha);
					for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
					return (
						(_temp = _this =
							_possibleConstructorReturn(this, (_ref2 = Alpha.__proto__ || Object.getPrototypeOf(Alpha)).call.apply(_ref2, [this].concat(args)))),
						(_this.handleChange = function (e) {
							var change = (function calculateChange(e, hsl, direction, initialA, container) {
								var containerWidth = container.clientWidth,
									containerHeight = container.clientHeight,
									x = 'number' == typeof e.pageX ? e.pageX : e.touches[0].pageX,
									y = 'number' == typeof e.pageY ? e.pageY : e.touches[0].pageY,
									left = x - (container.getBoundingClientRect().left + window.pageXOffset),
									top = y - (container.getBoundingClientRect().top + window.pageYOffset);
								if ('vertical' === direction) {
									var a = void 0;
									if (((a = top < 0 ? 0 : top > containerHeight ? 1 : Math.round((100 * top) / containerHeight) / 100), hsl.a !== a))
										return { h: hsl.h, s: hsl.s, l: hsl.l, a, source: 'rgb' };
								} else {
									var _a = void 0;
									if (initialA !== (_a = left < 0 ? 0 : left > containerWidth ? 1 : Math.round((100 * left) / containerWidth) / 100))
										return { h: hsl.h, s: hsl.s, l: hsl.l, a: _a, source: 'rgb' };
								}
								return null;
							})(e, _this.props.hsl, _this.props.direction, _this.props.a, _this.container);
							change && 'function' == typeof _this.props.onChange && _this.props.onChange(change, e);
						}),
						(_this.handleMouseDown = function (e) {
							_this.handleChange(e),
								window.addEventListener('mousemove', _this.handleChange),
								window.addEventListener('mouseup', _this.handleMouseUp);
						}),
						(_this.handleMouseUp = function () {
							_this.unbindEventListeners();
						}),
						(_this.unbindEventListeners = function () {
							window.removeEventListener('mousemove', _this.handleChange), window.removeEventListener('mouseup', _this.handleMouseUp);
						}),
						_possibleConstructorReturn(_this, _temp)
					);
				}
				return (
					(function _inherits(subClass, superClass) {
						if ('function' != typeof superClass && null !== superClass)
							throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
						(subClass.prototype = Object.create(superClass && superClass.prototype, {
							constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 },
						})),
							superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass));
					})(Alpha, _ref),
					_createClass(Alpha, [
						{
							key: 'componentWillUnmount',
							value: function componentWillUnmount() {
								this.unbindEventListeners();
							},
						},
						{
							key: 'render',
							value: function render() {
								var _this2 = this,
									rgb = this.props.rgb,
									styles = (0, lib.Ay)(
										{
											default: {
												alpha: { absolute: '0px 0px 0px 0px', borderRadius: this.props.radius },
												checkboard: { absolute: '0px 0px 0px 0px', overflow: 'hidden', borderRadius: this.props.radius },
												gradient: {
													absolute: '0px 0px 0px 0px',
													background:
														'linear-gradient(to right, rgba(' +
														rgb.r +
														',' +
														rgb.g +
														',' +
														rgb.b +
														', 0) 0%,\n           rgba(' +
														rgb.r +
														',' +
														rgb.g +
														',' +
														rgb.b +
														', 1) 100%)',
													boxShadow: this.props.shadow,
													borderRadius: this.props.radius,
												},
												container: { position: 'relative', height: '100%', margin: '0 3px' },
												pointer: { position: 'absolute', left: 100 * rgb.a + '%' },
												slider: {
													width: '4px',
													borderRadius: '1px',
													height: '8px',
													boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
													background: '#fff',
													marginTop: '1px',
													transform: 'translateX(-2px)',
												},
											},
											vertical: {
												gradient: {
													background:
														'linear-gradient(to bottom, rgba(' +
														rgb.r +
														',' +
														rgb.g +
														',' +
														rgb.b +
														', 0) 0%,\n           rgba(' +
														rgb.r +
														',' +
														rgb.g +
														',' +
														rgb.b +
														', 1) 100%)',
												},
												pointer: { left: 0, top: 100 * rgb.a + '%' },
											},
											overwrite: Alpha_extends({}, this.props.style),
										},
										{ vertical: 'vertical' === this.props.direction, overwrite: !0 }
									);
								return compat_module.default.createElement(
									'div',
									{ style: styles.alpha },
									compat_module.default.createElement(
										'div',
										{ style: styles.checkboard },
										compat_module.default.createElement(common_Checkboard, { renderers: this.props.renderers })
									),
									compat_module.default.createElement('div', { style: styles.gradient }),
									compat_module.default.createElement(
										'div',
										{
											style: styles.container,
											ref: function ref(container) {
												return (_this2.container = container);
											},
											onMouseDown: this.handleMouseDown,
											onTouchMove: this.handleChange,
											onTouchStart: this.handleChange,
										},
										compat_module.default.createElement(
											'div',
											{ style: styles.pointer },
											this.props.pointer
												? compat_module.default.createElement(this.props.pointer, this.props)
												: compat_module.default.createElement('div', { style: styles.slider })
										)
									)
								);
							},
						},
					]),
					Alpha
				);
			})(compat_module.PureComponent || compat_module.Component);
			var EditableInput_createClass = (function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						(descriptor.enumerable = descriptor.enumerable || !1),
							(descriptor.configurable = !0),
							'value' in descriptor && (descriptor.writable = !0),
							Object.defineProperty(target, descriptor.key, descriptor);
					}
				}
				return function (Constructor, protoProps, staticProps) {
					return (
						protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
					);
				};
			})();
			var VALID_KEY_CODES = [38, 40],
				idCounter = 1;
			const common_EditableInput = (function (_ref) {
				function EditableInput(props) {
					!(function EditableInput_classCallCheck(instance, Constructor) {
						if (!(instance instanceof Constructor)) throw new TypeError('Cannot call a class as a function');
					})(this, EditableInput);
					var _this = (function EditableInput_possibleConstructorReturn(self, call) {
						if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !call || ('object' != typeof call && 'function' != typeof call) ? self : call;
					})(this, (EditableInput.__proto__ || Object.getPrototypeOf(EditableInput)).call(this));
					return (
						(_this.handleBlur = function () {
							_this.state.blurValue && _this.setState({ value: _this.state.blurValue, blurValue: null });
						}),
						(_this.handleChange = function (e) {
							_this.setUpdatedValue(e.target.value, e);
						}),
						(_this.handleKeyDown = function (e) {
							var value = (function getNumberValue(value) {
								return Number(String(value).replace(/%/g, ''));
							})(e.target.value);
							if (
								!isNaN(value) &&
								(function isValidKeyCode(keyCode) {
									return VALID_KEY_CODES.indexOf(keyCode) > -1;
								})(e.keyCode)
							) {
								var offset = _this.getArrowOffset(),
									updatedValue = 38 === e.keyCode ? value + offset : value - offset;
								_this.setUpdatedValue(updatedValue, e);
							}
						}),
						(_this.handleDrag = function (e) {
							if (_this.props.dragLabel) {
								var newValue = Math.round(_this.props.value + e.movementX);
								newValue >= 0 &&
									newValue <= _this.props.dragMax &&
									_this.props.onChange &&
									_this.props.onChange(_this.getValueObjectWithLabel(newValue), e);
							}
						}),
						(_this.handleMouseDown = function (e) {
							_this.props.dragLabel &&
								(e.preventDefault(),
								_this.handleDrag(e),
								window.addEventListener('mousemove', _this.handleDrag),
								window.addEventListener('mouseup', _this.handleMouseUp));
						}),
						(_this.handleMouseUp = function () {
							_this.unbindEventListeners();
						}),
						(_this.unbindEventListeners = function () {
							window.removeEventListener('mousemove', _this.handleDrag), window.removeEventListener('mouseup', _this.handleMouseUp);
						}),
						(_this.state = { value: String(props.value).toUpperCase(), blurValue: String(props.value).toUpperCase() }),
						(_this.inputId = 'rc-editable-input-' + idCounter++),
						_this
					);
				}
				return (
					(function EditableInput_inherits(subClass, superClass) {
						if ('function' != typeof superClass && null !== superClass)
							throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
						(subClass.prototype = Object.create(superClass && superClass.prototype, {
							constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 },
						})),
							superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass));
					})(EditableInput, _ref),
					EditableInput_createClass(EditableInput, [
						{
							key: 'componentDidUpdate',
							value: function componentDidUpdate(prevProps, prevState) {
								this.props.value === this.state.value ||
									(prevProps.value === this.props.value && prevState.value === this.state.value) ||
									(this.input === document.activeElement
										? this.setState({ blurValue: String(this.props.value).toUpperCase() })
										: this.setState({
												value: String(this.props.value).toUpperCase(),
												blurValue: !this.state.blurValue && String(this.props.value).toUpperCase(),
										  }));
							},
						},
						{
							key: 'componentWillUnmount',
							value: function componentWillUnmount() {
								this.unbindEventListeners();
							},
						},
						{
							key: 'getValueObjectWithLabel',
							value: function getValueObjectWithLabel(value) {
								return (function _defineProperty(obj, key, value) {
									return (
										key in obj ? Object.defineProperty(obj, key, { value, enumerable: !0, configurable: !0, writable: !0 }) : (obj[key] = value), obj
									);
								})({}, this.props.label, value);
							},
						},
						{
							key: 'getArrowOffset',
							value: function getArrowOffset() {
								return this.props.arrowOffset || 1;
							},
						},
						{
							key: 'setUpdatedValue',
							value: function setUpdatedValue(value, e) {
								var onChangeValue = this.props.label ? this.getValueObjectWithLabel(value) : value;
								this.props.onChange && this.props.onChange(onChangeValue, e), this.setState({ value });
							},
						},
						{
							key: 'render',
							value: function render() {
								var _this2 = this,
									styles = (0, lib.Ay)(
										{
											default: { wrap: { position: 'relative' } },
											'user-override': {
												wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
												input: this.props.style && this.props.style.input ? this.props.style.input : {},
												label: this.props.style && this.props.style.label ? this.props.style.label : {},
											},
											'dragLabel-true': { label: { cursor: 'ew-resize' } },
										},
										{ 'user-override': !0 },
										this.props
									);
								return compat_module.default.createElement(
									'div',
									{ style: styles.wrap },
									compat_module.default.createElement('input', {
										id: this.inputId,
										style: styles.input,
										ref: function ref(input) {
											return (_this2.input = input);
										},
										value: this.state.value,
										onKeyDown: this.handleKeyDown,
										onChange: this.handleChange,
										onBlur: this.handleBlur,
										placeholder: this.props.placeholder,
										spellCheck: 'false',
									}),
									this.props.label && !this.props.hideLabel
										? compat_module.default.createElement(
												'label',
												{ htmlFor: this.inputId, style: styles.label, onMouseDown: this.handleMouseDown },
												this.props.label
										  )
										: null
								);
							},
						},
					]),
					EditableInput
				);
			})(compat_module.PureComponent || compat_module.Component);
			var Hue_createClass = (function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						(descriptor.enumerable = descriptor.enumerable || !1),
							(descriptor.configurable = !0),
							'value' in descriptor && (descriptor.writable = !0),
							Object.defineProperty(target, descriptor.key, descriptor);
					}
				}
				return function (Constructor, protoProps, staticProps) {
					return (
						protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
					);
				};
			})();
			function Hue_possibleConstructorReturn(self, call) {
				if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !call || ('object' != typeof call && 'function' != typeof call) ? self : call;
			}
			const common_Hue = (function (_ref) {
				function Hue() {
					var _ref2, _temp, _this;
					!(function Hue_classCallCheck(instance, Constructor) {
						if (!(instance instanceof Constructor)) throw new TypeError('Cannot call a class as a function');
					})(this, Hue);
					for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
					return (
						(_temp = _this =
							Hue_possibleConstructorReturn(this, (_ref2 = Hue.__proto__ || Object.getPrototypeOf(Hue)).call.apply(_ref2, [this].concat(args)))),
						(_this.handleChange = function (e) {
							var change = (function calculateChange(e, direction, hsl, container) {
								var containerWidth = container.clientWidth,
									containerHeight = container.clientHeight,
									x = 'number' == typeof e.pageX ? e.pageX : e.touches[0].pageX,
									y = 'number' == typeof e.pageY ? e.pageY : e.touches[0].pageY,
									left = x - (container.getBoundingClientRect().left + window.pageXOffset),
									top = y - (container.getBoundingClientRect().top + window.pageYOffset);
								if ('vertical' === direction) {
									var h = void 0;
									if (((h = top < 0 ? 359 : top > containerHeight ? 0 : (360 * ((-100 * top) / containerHeight + 100)) / 100), hsl.h !== h))
										return { h, s: hsl.s, l: hsl.l, a: hsl.a, source: 'hsl' };
								} else {
									var _h = void 0;
									if (((_h = left < 0 ? 0 : left > containerWidth ? 359 : (((100 * left) / containerWidth) * 360) / 100), hsl.h !== _h))
										return { h: _h, s: hsl.s, l: hsl.l, a: hsl.a, source: 'hsl' };
								}
								return null;
							})(e, _this.props.direction, _this.props.hsl, _this.container);
							change && 'function' == typeof _this.props.onChange && _this.props.onChange(change, e);
						}),
						(_this.handleMouseDown = function (e) {
							_this.handleChange(e),
								window.addEventListener('mousemove', _this.handleChange),
								window.addEventListener('mouseup', _this.handleMouseUp);
						}),
						(_this.handleMouseUp = function () {
							_this.unbindEventListeners();
						}),
						Hue_possibleConstructorReturn(_this, _temp)
					);
				}
				return (
					(function Hue_inherits(subClass, superClass) {
						if ('function' != typeof superClass && null !== superClass)
							throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
						(subClass.prototype = Object.create(superClass && superClass.prototype, {
							constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 },
						})),
							superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass));
					})(Hue, _ref),
					Hue_createClass(Hue, [
						{
							key: 'componentWillUnmount',
							value: function componentWillUnmount() {
								this.unbindEventListeners();
							},
						},
						{
							key: 'unbindEventListeners',
							value: function unbindEventListeners() {
								window.removeEventListener('mousemove', this.handleChange), window.removeEventListener('mouseup', this.handleMouseUp);
							},
						},
						{
							key: 'render',
							value: function render() {
								var _this2 = this,
									_props$direction = this.props.direction,
									direction = void 0 === _props$direction ? 'horizontal' : _props$direction,
									styles = (0, lib.Ay)(
										{
											default: {
												hue: { absolute: '0px 0px 0px 0px', borderRadius: this.props.radius, boxShadow: this.props.shadow },
												container: { padding: '0 2px', position: 'relative', height: '100%', borderRadius: this.props.radius },
												pointer: { position: 'absolute', left: (100 * this.props.hsl.h) / 360 + '%' },
												slider: {
													marginTop: '1px',
													width: '4px',
													borderRadius: '1px',
													height: '8px',
													boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
													background: '#fff',
													transform: 'translateX(-2px)',
												},
											},
											vertical: { pointer: { left: '0px', top: (-100 * this.props.hsl.h) / 360 + 100 + '%' } },
										},
										{ vertical: 'vertical' === direction }
									);
								return compat_module.default.createElement(
									'div',
									{ style: styles.hue },
									compat_module.default.createElement(
										'div',
										{
											className: 'hue-' + direction,
											style: styles.container,
											ref: function ref(container) {
												return (_this2.container = container);
											},
											onMouseDown: this.handleMouseDown,
											onTouchMove: this.handleChange,
											onTouchStart: this.handleChange,
										},
										compat_module.default.createElement(
											'style',
											null,
											'\n            .hue-horizontal {\n              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to right, #f00 0%, #ff0\n                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n\n            .hue-vertical {\n              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,\n                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n          '
										),
										compat_module.default.createElement(
											'div',
											{ style: styles.pointer },
											this.props.pointer
												? compat_module.default.createElement(this.props.pointer, this.props)
												: compat_module.default.createElement('div', { style: styles.slider })
										)
									)
								);
							},
						},
					]),
					Hue
				);
			})(compat_module.PureComponent || compat_module.Component);
			var prop_types = __webpack_require__('../../node_modules/prop-types/index.js'),
				prop_types_default = __webpack_require__.n(prop_types);
			const _listCacheClear = function listCacheClear() {
				(this.__data__ = []), (this.size = 0);
			};
			const lodash_es_eq = function eq(value, other) {
				return value === other || (value != value && other != other);
			};
			const _assocIndexOf = function assocIndexOf(array, key) {
				for (var length = array.length; length--; ) if (lodash_es_eq(array[length][0], key)) return length;
				return -1;
			};
			var splice = Array.prototype.splice;
			const _listCacheDelete = function listCacheDelete(key) {
				var data = this.__data__,
					index = _assocIndexOf(data, key);
				return !(index < 0) && (index == data.length - 1 ? data.pop() : splice.call(data, index, 1), --this.size, !0);
			};
			const _listCacheGet = function listCacheGet(key) {
				var data = this.__data__,
					index = _assocIndexOf(data, key);
				return index < 0 ? void 0 : data[index][1];
			};
			const _listCacheHas = function listCacheHas(key) {
				return _assocIndexOf(this.__data__, key) > -1;
			};
			const _listCacheSet = function listCacheSet(key, value) {
				var data = this.__data__,
					index = _assocIndexOf(data, key);
				return index < 0 ? (++this.size, data.push([key, value])) : (data[index][1] = value), this;
			};
			function ListCache(entries) {
				var index = -1,
					length = null == entries ? 0 : entries.length;
				for (this.clear(); ++index < length; ) {
					var entry = entries[index];
					this.set(entry[0], entry[1]);
				}
			}
			(ListCache.prototype.clear = _listCacheClear),
				(ListCache.prototype.delete = _listCacheDelete),
				(ListCache.prototype.get = _listCacheGet),
				(ListCache.prototype.has = _listCacheHas),
				(ListCache.prototype.set = _listCacheSet);
			const _ListCache = ListCache;
			const _stackClear = function stackClear() {
				(this.__data__ = new _ListCache()), (this.size = 0);
			};
			const _stackDelete = function stackDelete(key) {
				var data = this.__data__,
					result = data.delete(key);
				return (this.size = data.size), result;
			};
			const _stackGet = function stackGet(key) {
				return this.__data__.get(key);
			};
			const _stackHas = function stackHas(key) {
				return this.__data__.has(key);
			};
			var _root = __webpack_require__('../../node_modules/lodash-es/_root.js');
			const _Symbol = _root.A.Symbol;
			var objectProto = Object.prototype,
				_getRawTag_hasOwnProperty = objectProto.hasOwnProperty,
				nativeObjectToString = objectProto.toString,
				symToStringTag = _Symbol ? _Symbol.toStringTag : void 0;
			const _getRawTag = function getRawTag(value) {
				var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag),
					tag = value[symToStringTag];
				try {
					value[symToStringTag] = void 0;
					var unmasked = !0;
				} catch (e) {}
				var result = nativeObjectToString.call(value);
				return unmasked && (isOwn ? (value[symToStringTag] = tag) : delete value[symToStringTag]), result;
			};
			var _objectToString_nativeObjectToString = Object.prototype.toString;
			const _objectToString = function objectToString(value) {
				return _objectToString_nativeObjectToString.call(value);
			};
			var _baseGetTag_symToStringTag = _Symbol ? _Symbol.toStringTag : void 0;
			const _baseGetTag = function baseGetTag(value) {
				return null == value
					? void 0 === value
						? '[object Undefined]'
						: '[object Null]'
					: _baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value)
					? _getRawTag(value)
					: _objectToString(value);
			};
			const lodash_es_isObject = function isObject(value) {
				var type = typeof value;
				return null != value && ('object' == type || 'function' == type);
			};
			const lodash_es_isFunction = function isFunction(value) {
				if (!lodash_es_isObject(value)) return !1;
				var tag = _baseGetTag(value);
				return '[object Function]' == tag || '[object GeneratorFunction]' == tag || '[object AsyncFunction]' == tag || '[object Proxy]' == tag;
			};
			const _coreJsData = _root.A['__core-js_shared__'];
			var uid,
				maskSrcKey = (uid = /[^.]+$/.exec((_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO) || '')) ? 'Symbol(src)_1.' + uid : '';
			const _isMasked = function isMasked(func) {
				return !!maskSrcKey && maskSrcKey in func;
			};
			var funcToString = Function.prototype.toString;
			const _toSource = function toSource(func) {
				if (null != func) {
					try {
						return funcToString.call(func);
					} catch (e) {}
					try {
						return func + '';
					} catch (e) {}
				}
				return '';
			};
			var reIsHostCtor = /^\[object .+?Constructor\]$/,
				_baseIsNative_funcProto = Function.prototype,
				_baseIsNative_objectProto = Object.prototype,
				_baseIsNative_funcToString = _baseIsNative_funcProto.toString,
				_baseIsNative_hasOwnProperty = _baseIsNative_objectProto.hasOwnProperty,
				reIsNative = RegExp(
					'^' +
						_baseIsNative_funcToString
							.call(_baseIsNative_hasOwnProperty)
							.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
							.replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
						'$'
				);
			const _baseIsNative = function baseIsNative(value) {
				return !(!lodash_es_isObject(value) || _isMasked(value)) && (lodash_es_isFunction(value) ? reIsNative : reIsHostCtor).test(_toSource(value));
			};
			const _getValue = function getValue(object, key) {
				return null == object ? void 0 : object[key];
			};
			const _getNative = function getNative(object, key) {
				var value = _getValue(object, key);
				return _baseIsNative(value) ? value : void 0;
			};
			const _Map = _getNative(_root.A, 'Map');
			const _nativeCreate = _getNative(Object, 'create');
			const _hashClear = function hashClear() {
				(this.__data__ = _nativeCreate ? _nativeCreate(null) : {}), (this.size = 0);
			};
			const _hashDelete = function hashDelete(key) {
				var result = this.has(key) && delete this.__data__[key];
				return (this.size -= result ? 1 : 0), result;
			};
			var _hashGet_hasOwnProperty = Object.prototype.hasOwnProperty;
			const _hashGet = function hashGet(key) {
				var data = this.__data__;
				if (_nativeCreate) {
					var result = data[key];
					return '__lodash_hash_undefined__' === result ? void 0 : result;
				}
				return _hashGet_hasOwnProperty.call(data, key) ? data[key] : void 0;
			};
			var _hashHas_hasOwnProperty = Object.prototype.hasOwnProperty;
			const _hashHas = function hashHas(key) {
				var data = this.__data__;
				return _nativeCreate ? void 0 !== data[key] : _hashHas_hasOwnProperty.call(data, key);
			};
			const _hashSet = function hashSet(key, value) {
				var data = this.__data__;
				return (this.size += this.has(key) ? 0 : 1), (data[key] = _nativeCreate && void 0 === value ? '__lodash_hash_undefined__' : value), this;
			};
			function Hash(entries) {
				var index = -1,
					length = null == entries ? 0 : entries.length;
				for (this.clear(); ++index < length; ) {
					var entry = entries[index];
					this.set(entry[0], entry[1]);
				}
			}
			(Hash.prototype.clear = _hashClear),
				(Hash.prototype.delete = _hashDelete),
				(Hash.prototype.get = _hashGet),
				(Hash.prototype.has = _hashHas),
				(Hash.prototype.set = _hashSet);
			const _Hash = Hash;
			const _mapCacheClear = function mapCacheClear() {
				(this.size = 0), (this.__data__ = { hash: new _Hash(), map: new (_Map || _ListCache)(), string: new _Hash() });
			};
			const _isKeyable = function isKeyable(value) {
				var type = typeof value;
				return 'string' == type || 'number' == type || 'symbol' == type || 'boolean' == type ? '__proto__' !== value : null === value;
			};
			const _getMapData = function getMapData(map, key) {
				var data = map.__data__;
				return _isKeyable(key) ? data['string' == typeof key ? 'string' : 'hash'] : data.map;
			};
			const _mapCacheDelete = function mapCacheDelete(key) {
				var result = _getMapData(this, key).delete(key);
				return (this.size -= result ? 1 : 0), result;
			};
			const _mapCacheGet = function mapCacheGet(key) {
				return _getMapData(this, key).get(key);
			};
			const _mapCacheHas = function mapCacheHas(key) {
				return _getMapData(this, key).has(key);
			};
			const _mapCacheSet = function mapCacheSet(key, value) {
				var data = _getMapData(this, key),
					size = data.size;
				return data.set(key, value), (this.size += data.size == size ? 0 : 1), this;
			};
			function MapCache(entries) {
				var index = -1,
					length = null == entries ? 0 : entries.length;
				for (this.clear(); ++index < length; ) {
					var entry = entries[index];
					this.set(entry[0], entry[1]);
				}
			}
			(MapCache.prototype.clear = _mapCacheClear),
				(MapCache.prototype.delete = _mapCacheDelete),
				(MapCache.prototype.get = _mapCacheGet),
				(MapCache.prototype.has = _mapCacheHas),
				(MapCache.prototype.set = _mapCacheSet);
			const _MapCache = MapCache;
			const _stackSet = function stackSet(key, value) {
				var data = this.__data__;
				if (data instanceof _ListCache) {
					var pairs = data.__data__;
					if (!_Map || pairs.length < 199) return pairs.push([key, value]), (this.size = ++data.size), this;
					data = this.__data__ = new _MapCache(pairs);
				}
				return data.set(key, value), (this.size = data.size), this;
			};
			function Stack(entries) {
				var data = (this.__data__ = new _ListCache(entries));
				this.size = data.size;
			}
			(Stack.prototype.clear = _stackClear),
				(Stack.prototype.delete = _stackDelete),
				(Stack.prototype.get = _stackGet),
				(Stack.prototype.has = _stackHas),
				(Stack.prototype.set = _stackSet);
			const _Stack = Stack;
			const lodash_es_defineProperty = (function () {
				try {
					var func = _getNative(Object, 'defineProperty');
					return func({}, '', {}), func;
				} catch (e) {}
			})();
			const _baseAssignValue = function baseAssignValue(object, key, value) {
				'__proto__' == key && lodash_es_defineProperty
					? lodash_es_defineProperty(object, key, { configurable: !0, enumerable: !0, value, writable: !0 })
					: (object[key] = value);
			};
			const _assignMergeValue = function assignMergeValue(object, key, value) {
				((void 0 !== value && !lodash_es_eq(object[key], value)) || (void 0 === value && !(key in object))) && _baseAssignValue(object, key, value);
			};
			const _baseFor = (function createBaseFor(fromRight) {
				return function (object, iteratee, keysFunc) {
					for (var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length; length--; ) {
						var key = props[fromRight ? length : ++index];
						if (!1 === iteratee(iterable[key], key, iterable)) break;
					}
					return object;
				};
			})();
			var _cloneBuffer = __webpack_require__('../../node_modules/lodash-es/_cloneBuffer.js');
			const _Uint8Array = _root.A.Uint8Array;
			const _cloneArrayBuffer = function cloneArrayBuffer(arrayBuffer) {
				var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
				return new _Uint8Array(result).set(new _Uint8Array(arrayBuffer)), result;
			};
			const _cloneTypedArray = function cloneTypedArray(typedArray, isDeep) {
				var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
				return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
			};
			const _copyArray = function copyArray(source, array) {
				var index = -1,
					length = source.length;
				for (array || (array = Array(length)); ++index < length; ) array[index] = source[index];
				return array;
			};
			var objectCreate = Object.create;
			const _baseCreate = (function () {
				function object() {}
				return function (proto) {
					if (!lodash_es_isObject(proto)) return {};
					if (objectCreate) return objectCreate(proto);
					object.prototype = proto;
					var result = new object();
					return (object.prototype = void 0), result;
				};
			})();
			const _overArg = function overArg(func, transform) {
				return function (arg) {
					return func(transform(arg));
				};
			};
			const _getPrototype = _overArg(Object.getPrototypeOf, Object);
			var _isPrototype_objectProto = Object.prototype;
			const _isPrototype = function isPrototype(value) {
				var Ctor = value && value.constructor;
				return value === (('function' == typeof Ctor && Ctor.prototype) || _isPrototype_objectProto);
			};
			const _initCloneObject = function initCloneObject(object) {
				return 'function' != typeof object.constructor || _isPrototype(object) ? {} : _baseCreate(_getPrototype(object));
			};
			const lodash_es_isObjectLike = function isObjectLike(value) {
				return null != value && 'object' == typeof value;
			};
			const _baseIsArguments = function baseIsArguments(value) {
				return lodash_es_isObjectLike(value) && '[object Arguments]' == _baseGetTag(value);
			};
			var isArguments_objectProto = Object.prototype,
				isArguments_hasOwnProperty = isArguments_objectProto.hasOwnProperty,
				propertyIsEnumerable = isArguments_objectProto.propertyIsEnumerable;
			const lodash_es_isArguments = _baseIsArguments(
				(function () {
					return arguments;
				})()
			)
				? _baseIsArguments
				: function (value) {
						return lodash_es_isObjectLike(value) && isArguments_hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
				  };
			const lodash_es_isArray = Array.isArray;
			const lodash_es_isLength = function isLength(value) {
				return 'number' == typeof value && value > -1 && value % 1 == 0 && value <= 9007199254740991;
			};
			const lodash_es_isArrayLike = function isArrayLike(value) {
				return null != value && lodash_es_isLength(value.length) && !lodash_es_isFunction(value);
			};
			const lodash_es_isArrayLikeObject = function isArrayLikeObject(value) {
				return lodash_es_isObjectLike(value) && lodash_es_isArrayLike(value);
			};
			var isBuffer = __webpack_require__('../../node_modules/lodash-es/isBuffer.js'),
				isPlainObject_funcProto = Function.prototype,
				isPlainObject_objectProto = Object.prototype,
				isPlainObject_funcToString = isPlainObject_funcProto.toString,
				isPlainObject_hasOwnProperty = isPlainObject_objectProto.hasOwnProperty,
				objectCtorString = isPlainObject_funcToString.call(Object);
			const lodash_es_isPlainObject = function isPlainObject(value) {
				if (!lodash_es_isObjectLike(value) || '[object Object]' != _baseGetTag(value)) return !1;
				var proto = _getPrototype(value);
				if (null === proto) return !0;
				var Ctor = isPlainObject_hasOwnProperty.call(proto, 'constructor') && proto.constructor;
				return 'function' == typeof Ctor && Ctor instanceof Ctor && isPlainObject_funcToString.call(Ctor) == objectCtorString;
			};
			var typedArrayTags = {};
			(typedArrayTags['[object Float32Array]'] =
				typedArrayTags['[object Float64Array]'] =
				typedArrayTags['[object Int8Array]'] =
				typedArrayTags['[object Int16Array]'] =
				typedArrayTags['[object Int32Array]'] =
				typedArrayTags['[object Uint8Array]'] =
				typedArrayTags['[object Uint8ClampedArray]'] =
				typedArrayTags['[object Uint16Array]'] =
				typedArrayTags['[object Uint32Array]'] =
					!0),
				(typedArrayTags['[object Arguments]'] =
					typedArrayTags['[object Array]'] =
					typedArrayTags['[object ArrayBuffer]'] =
					typedArrayTags['[object Boolean]'] =
					typedArrayTags['[object DataView]'] =
					typedArrayTags['[object Date]'] =
					typedArrayTags['[object Error]'] =
					typedArrayTags['[object Function]'] =
					typedArrayTags['[object Map]'] =
					typedArrayTags['[object Number]'] =
					typedArrayTags['[object Object]'] =
					typedArrayTags['[object RegExp]'] =
					typedArrayTags['[object Set]'] =
					typedArrayTags['[object String]'] =
					typedArrayTags['[object WeakMap]'] =
						!1);
			const _baseIsTypedArray = function baseIsTypedArray(value) {
				return lodash_es_isObjectLike(value) && lodash_es_isLength(value.length) && !!typedArrayTags[_baseGetTag(value)];
			};
			const _baseUnary = function baseUnary(func) {
				return function (value) {
					return func(value);
				};
			};
			var _nodeUtil = __webpack_require__('../../node_modules/lodash-es/_nodeUtil.js'),
				nodeIsTypedArray = _nodeUtil.A && _nodeUtil.A.isTypedArray;
			const lodash_es_isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;
			const _safeGet = function safeGet(object, key) {
				if (('constructor' !== key || 'function' != typeof object[key]) && '__proto__' != key) return object[key];
			};
			var _assignValue_hasOwnProperty = Object.prototype.hasOwnProperty;
			const _assignValue = function assignValue(object, key, value) {
				var objValue = object[key];
				(_assignValue_hasOwnProperty.call(object, key) && lodash_es_eq(objValue, value) && (void 0 !== value || key in object)) ||
					_baseAssignValue(object, key, value);
			};
			const _copyObject = function copyObject(source, props, object, customizer) {
				var isNew = !object;
				object || (object = {});
				for (var index = -1, length = props.length; ++index < length; ) {
					var key = props[index],
						newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
					void 0 === newValue && (newValue = source[key]), isNew ? _baseAssignValue(object, key, newValue) : _assignValue(object, key, newValue);
				}
				return object;
			};
			const _baseTimes = function baseTimes(n, iteratee) {
				for (var index = -1, result = Array(n); ++index < n; ) result[index] = iteratee(index);
				return result;
			};
			var reIsUint = /^(?:0|[1-9]\d*)$/;
			const _isIndex = function isIndex(value, length) {
				var type = typeof value;
				return (
					!!(length = null == length ? 9007199254740991 : length) &&
					('number' == type || ('symbol' != type && reIsUint.test(value))) &&
					value > -1 &&
					value % 1 == 0 &&
					value < length
				);
			};
			var _arrayLikeKeys_hasOwnProperty = Object.prototype.hasOwnProperty;
			const _arrayLikeKeys = function arrayLikeKeys(value, inherited) {
				var isArr = lodash_es_isArray(value),
					isArg = !isArr && lodash_es_isArguments(value),
					isBuff = !isArr && !isArg && (0, isBuffer.A)(value),
					isType = !isArr && !isArg && !isBuff && lodash_es_isTypedArray(value),
					skipIndexes = isArr || isArg || isBuff || isType,
					result = skipIndexes ? _baseTimes(value.length, String) : [],
					length = result.length;
				for (var key in value)
					(!inherited && !_arrayLikeKeys_hasOwnProperty.call(value, key)) ||
						(skipIndexes &&
							('length' == key ||
								(isBuff && ('offset' == key || 'parent' == key)) ||
								(isType && ('buffer' == key || 'byteLength' == key || 'byteOffset' == key)) ||
								_isIndex(key, length))) ||
						result.push(key);
				return result;
			};
			const _nativeKeysIn = function nativeKeysIn(object) {
				var result = [];
				if (null != object) for (var key in Object(object)) result.push(key);
				return result;
			};
			var _baseKeysIn_hasOwnProperty = Object.prototype.hasOwnProperty;
			const _baseKeysIn = function baseKeysIn(object) {
				if (!lodash_es_isObject(object)) return _nativeKeysIn(object);
				var isProto = _isPrototype(object),
					result = [];
				for (var key in object) ('constructor' != key || (!isProto && _baseKeysIn_hasOwnProperty.call(object, key))) && result.push(key);
				return result;
			};
			const lodash_es_keysIn = function keysIn(object) {
				return lodash_es_isArrayLike(object) ? _arrayLikeKeys(object, !0) : _baseKeysIn(object);
			};
			const lodash_es_toPlainObject = function toPlainObject(value) {
				return _copyObject(value, lodash_es_keysIn(value));
			};
			const _baseMergeDeep = function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
				var objValue = _safeGet(object, key),
					srcValue = _safeGet(source, key),
					stacked = stack.get(srcValue);
				if (stacked) _assignMergeValue(object, key, stacked);
				else {
					var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : void 0,
						isCommon = void 0 === newValue;
					if (isCommon) {
						var isArr = lodash_es_isArray(srcValue),
							isBuff = !isArr && (0, isBuffer.A)(srcValue),
							isTyped = !isArr && !isBuff && lodash_es_isTypedArray(srcValue);
						(newValue = srcValue),
							isArr || isBuff || isTyped
								? lodash_es_isArray(objValue)
									? (newValue = objValue)
									: lodash_es_isArrayLikeObject(objValue)
									? (newValue = _copyArray(objValue))
									: isBuff
									? ((isCommon = !1), (newValue = (0, _cloneBuffer.A)(srcValue, !0)))
									: isTyped
									? ((isCommon = !1), (newValue = _cloneTypedArray(srcValue, !0)))
									: (newValue = [])
								: lodash_es_isPlainObject(srcValue) || lodash_es_isArguments(srcValue)
								? ((newValue = objValue),
								  lodash_es_isArguments(objValue)
										? (newValue = lodash_es_toPlainObject(objValue))
										: (lodash_es_isObject(objValue) && !lodash_es_isFunction(objValue)) || (newValue = _initCloneObject(srcValue)))
								: (isCommon = !1);
					}
					isCommon && (stack.set(srcValue, newValue), mergeFunc(newValue, srcValue, srcIndex, customizer, stack), stack.delete(srcValue)),
						_assignMergeValue(object, key, newValue);
				}
			};
			const _baseMerge = function baseMerge(object, source, srcIndex, customizer, stack) {
				object !== source &&
					_baseFor(
						source,
						function (srcValue, key) {
							if ((stack || (stack = new _Stack()), lodash_es_isObject(srcValue)))
								_baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
							else {
								var newValue = customizer ? customizer(_safeGet(object, key), srcValue, key + '', object, source, stack) : void 0;
								void 0 === newValue && (newValue = srcValue), _assignMergeValue(object, key, newValue);
							}
						},
						lodash_es_keysIn
					);
			};
			const lodash_es_identity = function identity(value) {
				return value;
			};
			const _apply = function apply(func, thisArg, args) {
				switch (args.length) {
					case 0:
						return func.call(thisArg);
					case 1:
						return func.call(thisArg, args[0]);
					case 2:
						return func.call(thisArg, args[0], args[1]);
					case 3:
						return func.call(thisArg, args[0], args[1], args[2]);
				}
				return func.apply(thisArg, args);
			};
			var nativeMax = Math.max;
			const _overRest = function overRest(func, start, transform) {
				return (
					(start = nativeMax(void 0 === start ? func.length - 1 : start, 0)),
					function () {
						for (var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length); ++index < length; )
							array[index] = args[start + index];
						index = -1;
						for (var otherArgs = Array(start + 1); ++index < start; ) otherArgs[index] = args[index];
						return (otherArgs[start] = transform(array)), _apply(func, this, otherArgs);
					}
				);
			};
			const lodash_es_constant = function constant(value) {
				return function () {
					return value;
				};
			};
			const _baseSetToString = lodash_es_defineProperty
				? function (func, string) {
						return lodash_es_defineProperty(func, 'toString', { configurable: !0, enumerable: !1, value: lodash_es_constant(string), writable: !0 });
				  }
				: lodash_es_identity;
			var nativeNow = Date.now;
			const _setToString = (function shortOut(func) {
				var count = 0,
					lastCalled = 0;
				return function () {
					var stamp = nativeNow(),
						remaining = 16 - (stamp - lastCalled);
					if (((lastCalled = stamp), remaining > 0)) {
						if (++count >= 800) return arguments[0];
					} else count = 0;
					return func.apply(void 0, arguments);
				};
			})(_baseSetToString);
			const _baseRest = function baseRest(func, start) {
				return _setToString(_overRest(func, start, lodash_es_identity), func + '');
			};
			const _isIterateeCall = function isIterateeCall(value, index, object) {
				if (!lodash_es_isObject(object)) return !1;
				var type = typeof index;
				return (
					!!('number' == type ? lodash_es_isArrayLike(object) && _isIndex(index, object.length) : 'string' == type && index in object) &&
					lodash_es_eq(object[index], value)
				);
			};
			const lodash_es_merge = (function createAssigner(assigner) {
				return _baseRest(function (object, sources) {
					var index = -1,
						length = sources.length,
						customizer = length > 1 ? sources[length - 1] : void 0,
						guard = length > 2 ? sources[2] : void 0;
					for (
						customizer = assigner.length > 3 && 'function' == typeof customizer ? (length--, customizer) : void 0,
							guard && _isIterateeCall(sources[0], sources[1], guard) && ((customizer = length < 3 ? void 0 : customizer), (length = 1)),
							object = Object(object);
						++index < length;

					) {
						var source = sources[index];
						source && assigner(object, source, index, customizer);
					}
					return object;
				});
			})(function (object, source, srcIndex) {
				_baseMerge(object, source, srcIndex);
			});
			var Raised = function Raised(_ref) {
				var zDepth = _ref.zDepth,
					radius = _ref.radius,
					background = _ref.background,
					children = _ref.children,
					_ref$styles = _ref.styles,
					passedStyles = void 0 === _ref$styles ? {} : _ref$styles,
					styles = (0, lib.Ay)(
						lodash_es_merge(
							{
								default: {
									wrap: { position: 'relative', display: 'inline-block' },
									content: { position: 'relative' },
									bg: {
										absolute: '0px 0px 0px 0px',
										boxShadow: '0 ' + zDepth + 'px ' + 4 * zDepth + 'px rgba(0,0,0,.24)',
										borderRadius: radius,
										background,
									},
								},
								'zDepth-0': { bg: { boxShadow: 'none' } },
								'zDepth-1': { bg: { boxShadow: '0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)' } },
								'zDepth-2': { bg: { boxShadow: '0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)' } },
								'zDepth-3': { bg: { boxShadow: '0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)' } },
								'zDepth-4': { bg: { boxShadow: '0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)' } },
								'zDepth-5': { bg: { boxShadow: '0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)' } },
								square: { bg: { borderRadius: '0' } },
								circle: { bg: { borderRadius: '50%' } },
							},
							passedStyles
						),
						{ 'zDepth-1': 1 === zDepth }
					);
				return compat_module.default.createElement(
					'div',
					{ style: styles.wrap },
					compat_module.default.createElement('div', { style: styles.bg }),
					compat_module.default.createElement('div', { style: styles.content }, children)
				);
			};
			(Raised.propTypes = {
				background: prop_types_default().string,
				zDepth: prop_types_default().oneOf([0, 1, 2, 3, 4, 5]),
				radius: prop_types_default().number,
				styles: prop_types_default().object,
			}),
				(Raised.defaultProps = { background: '#fff', zDepth: 1, radius: 2, styles: {} });
			const common_Raised = Raised;
			const lodash_es_now = function () {
				return _root.A.Date.now();
			};
			var reWhitespace = /\s/;
			const _trimmedEndIndex = function trimmedEndIndex(string) {
				for (var index = string.length; index-- && reWhitespace.test(string.charAt(index)); );
				return index;
			};
			var reTrimStart = /^\s+/;
			const _baseTrim = function baseTrim(string) {
				return string ? string.slice(0, _trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string;
			};
			const lodash_es_isSymbol = function isSymbol(value) {
				return 'symbol' == typeof value || (lodash_es_isObjectLike(value) && '[object Symbol]' == _baseGetTag(value));
			};
			var reIsBadHex = /^[-+]0x[0-9a-f]+$/i,
				reIsBinary = /^0b[01]+$/i,
				reIsOctal = /^0o[0-7]+$/i,
				freeParseInt = parseInt;
			const lodash_es_toNumber = function toNumber(value) {
				if ('number' == typeof value) return value;
				if (lodash_es_isSymbol(value)) return NaN;
				if (lodash_es_isObject(value)) {
					var other = 'function' == typeof value.valueOf ? value.valueOf() : value;
					value = lodash_es_isObject(other) ? other + '' : other;
				}
				if ('string' != typeof value) return 0 === value ? value : +value;
				value = _baseTrim(value);
				var isBinary = reIsBinary.test(value);
				return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NaN : +value;
			};
			var debounce_nativeMax = Math.max,
				nativeMin = Math.min;
			const lodash_es_debounce = function debounce(func, wait, options) {
				var lastArgs,
					lastThis,
					maxWait,
					result,
					timerId,
					lastCallTime,
					lastInvokeTime = 0,
					leading = !1,
					maxing = !1,
					trailing = !0;
				if ('function' != typeof func) throw new TypeError('Expected a function');
				function invokeFunc(time) {
					var args = lastArgs,
						thisArg = lastThis;
					return (lastArgs = lastThis = void 0), (lastInvokeTime = time), (result = func.apply(thisArg, args));
				}
				function shouldInvoke(time) {
					var timeSinceLastCall = time - lastCallTime;
					return void 0 === lastCallTime || timeSinceLastCall >= wait || timeSinceLastCall < 0 || (maxing && time - lastInvokeTime >= maxWait);
				}
				function timerExpired() {
					var time = lodash_es_now();
					if (shouldInvoke(time)) return trailingEdge(time);
					timerId = setTimeout(
						timerExpired,
						(function remainingWait(time) {
							var timeWaiting = wait - (time - lastCallTime);
							return maxing ? nativeMin(timeWaiting, maxWait - (time - lastInvokeTime)) : timeWaiting;
						})(time)
					);
				}
				function trailingEdge(time) {
					return (timerId = void 0), trailing && lastArgs ? invokeFunc(time) : ((lastArgs = lastThis = void 0), result);
				}
				function debounced() {
					var time = lodash_es_now(),
						isInvoking = shouldInvoke(time);
					if (((lastArgs = arguments), (lastThis = this), (lastCallTime = time), isInvoking)) {
						if (void 0 === timerId)
							return (function leadingEdge(time) {
								return (lastInvokeTime = time), (timerId = setTimeout(timerExpired, wait)), leading ? invokeFunc(time) : result;
							})(lastCallTime);
						if (maxing) return clearTimeout(timerId), (timerId = setTimeout(timerExpired, wait)), invokeFunc(lastCallTime);
					}
					return void 0 === timerId && (timerId = setTimeout(timerExpired, wait)), result;
				}
				return (
					(wait = lodash_es_toNumber(wait) || 0),
					lodash_es_isObject(options) &&
						((leading = !!options.leading),
						(maxWait = (maxing = 'maxWait' in options) ? debounce_nativeMax(lodash_es_toNumber(options.maxWait) || 0, wait) : maxWait),
						(trailing = 'trailing' in options ? !!options.trailing : trailing)),
					(debounced.cancel = function cancel() {
						void 0 !== timerId && clearTimeout(timerId), (lastInvokeTime = 0), (lastArgs = lastCallTime = lastThis = timerId = void 0);
					}),
					(debounced.flush = function flush() {
						return void 0 === timerId ? result : trailingEdge(lodash_es_now());
					}),
					debounced
				);
			};
			const lodash_es_throttle = function throttle(func, wait, options) {
				var leading = !0,
					trailing = !0;
				if ('function' != typeof func) throw new TypeError('Expected a function');
				return (
					lodash_es_isObject(options) &&
						((leading = 'leading' in options ? !!options.leading : leading), (trailing = 'trailing' in options ? !!options.trailing : trailing)),
					lodash_es_debounce(func, wait, { leading, maxWait: wait, trailing })
				);
			};
			var Saturation_createClass = (function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						(descriptor.enumerable = descriptor.enumerable || !1),
							(descriptor.configurable = !0),
							'value' in descriptor && (descriptor.writable = !0),
							Object.defineProperty(target, descriptor.key, descriptor);
					}
				}
				return function (Constructor, protoProps, staticProps) {
					return (
						protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
					);
				};
			})();
			var Saturation = (function (_ref) {
				function Saturation(props) {
					!(function Saturation_classCallCheck(instance, Constructor) {
						if (!(instance instanceof Constructor)) throw new TypeError('Cannot call a class as a function');
					})(this, Saturation);
					var _this = (function Saturation_possibleConstructorReturn(self, call) {
						if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !call || ('object' != typeof call && 'function' != typeof call) ? self : call;
					})(this, (Saturation.__proto__ || Object.getPrototypeOf(Saturation)).call(this, props));
					return (
						(_this.handleChange = function (e) {
							'function' == typeof _this.props.onChange &&
								_this.throttle(
									_this.props.onChange,
									(function calculateChange(e, hsl, container) {
										var _container$getBoundin = container.getBoundingClientRect(),
											containerWidth = _container$getBoundin.width,
											containerHeight = _container$getBoundin.height,
											x = 'number' == typeof e.pageX ? e.pageX : e.touches[0].pageX,
											y = 'number' == typeof e.pageY ? e.pageY : e.touches[0].pageY,
											left = x - (container.getBoundingClientRect().left + window.pageXOffset),
											top = y - (container.getBoundingClientRect().top + window.pageYOffset);
										left < 0 ? (left = 0) : left > containerWidth && (left = containerWidth),
											top < 0 ? (top = 0) : top > containerHeight && (top = containerHeight);
										var saturation = left / containerWidth,
											bright = 1 - top / containerHeight;
										return { h: hsl.h, s: saturation, v: bright, a: hsl.a, source: 'hsv' };
									})(e, _this.props.hsl, _this.container),
									e
								);
						}),
						(_this.handleMouseDown = function (e) {
							_this.handleChange(e);
							var renderWindow = _this.getContainerRenderWindow();
							renderWindow.addEventListener('mousemove', _this.handleChange), renderWindow.addEventListener('mouseup', _this.handleMouseUp);
						}),
						(_this.handleMouseUp = function () {
							_this.unbindEventListeners();
						}),
						(_this.throttle = lodash_es_throttle(function (fn, data, e) {
							fn(data, e);
						}, 50)),
						_this
					);
				}
				return (
					(function Saturation_inherits(subClass, superClass) {
						if ('function' != typeof superClass && null !== superClass)
							throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
						(subClass.prototype = Object.create(superClass && superClass.prototype, {
							constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 },
						})),
							superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass));
					})(Saturation, _ref),
					Saturation_createClass(Saturation, [
						{
							key: 'componentWillUnmount',
							value: function componentWillUnmount() {
								this.throttle.cancel(), this.unbindEventListeners();
							},
						},
						{
							key: 'getContainerRenderWindow',
							value: function getContainerRenderWindow() {
								for (
									var container = this.container, renderWindow = window;
									!renderWindow.document.contains(container) && renderWindow.parent !== renderWindow;

								)
									renderWindow = renderWindow.parent;
								return renderWindow;
							},
						},
						{
							key: 'unbindEventListeners',
							value: function unbindEventListeners() {
								var renderWindow = this.getContainerRenderWindow();
								renderWindow.removeEventListener('mousemove', this.handleChange), renderWindow.removeEventListener('mouseup', this.handleMouseUp);
							},
						},
						{
							key: 'render',
							value: function render() {
								var _this2 = this,
									_ref2 = this.props.style || {},
									color = _ref2.color,
									white = _ref2.white,
									black = _ref2.black,
									pointer = _ref2.pointer,
									circle = _ref2.circle,
									styles = (0, lib.Ay)(
										{
											default: {
												color: {
													absolute: '0px 0px 0px 0px',
													background: 'hsl(' + this.props.hsl.h + ',100%, 50%)',
													borderRadius: this.props.radius,
												},
												white: { absolute: '0px 0px 0px 0px', borderRadius: this.props.radius },
												black: { absolute: '0px 0px 0px 0px', boxShadow: this.props.shadow, borderRadius: this.props.radius },
												pointer: {
													position: 'absolute',
													top: -100 * this.props.hsv.v + 100 + '%',
													left: 100 * this.props.hsv.s + '%',
													cursor: 'default',
												},
												circle: {
													width: '4px',
													height: '4px',
													boxShadow: '0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)',
													borderRadius: '50%',
													cursor: 'hand',
													transform: 'translate(-2px, -2px)',
												},
											},
											custom: { color, white, black, pointer, circle },
										},
										{ custom: !!this.props.style }
									);
								return compat_module.default.createElement(
									'div',
									{
										style: styles.color,
										ref: function ref(container) {
											return (_this2.container = container);
										},
										onMouseDown: this.handleMouseDown,
										onTouchMove: this.handleChange,
										onTouchStart: this.handleChange,
									},
									compat_module.default.createElement(
										'style',
										null,
										'\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        '
									),
									compat_module.default.createElement(
										'div',
										{ style: styles.white, className: 'saturation-white' },
										compat_module.default.createElement('div', { style: styles.black, className: 'saturation-black' }),
										compat_module.default.createElement(
											'div',
											{ style: styles.pointer },
											this.props.pointer
												? compat_module.default.createElement(this.props.pointer, this.props)
												: compat_module.default.createElement('div', { style: styles.circle })
										)
									)
								);
							},
						},
					]),
					Saturation
				);
			})(compat_module.PureComponent || compat_module.Component);
			const common_Saturation = Saturation;
			const _arrayEach = function arrayEach(array, iteratee) {
				for (var index = -1, length = null == array ? 0 : array.length; ++index < length && !1 !== iteratee(array[index], index, array); );
				return array;
			};
			const _nativeKeys = _overArg(Object.keys, Object);
			var _baseKeys_hasOwnProperty = Object.prototype.hasOwnProperty;
			const _baseKeys = function baseKeys(object) {
				if (!_isPrototype(object)) return _nativeKeys(object);
				var result = [];
				for (var key in Object(object)) _baseKeys_hasOwnProperty.call(object, key) && 'constructor' != key && result.push(key);
				return result;
			};
			const lodash_es_keys = function keys(object) {
				return lodash_es_isArrayLike(object) ? _arrayLikeKeys(object) : _baseKeys(object);
			};
			const _baseEach = (function createBaseEach(eachFunc, fromRight) {
				return function (collection, iteratee) {
					if (null == collection) return collection;
					if (!lodash_es_isArrayLike(collection)) return eachFunc(collection, iteratee);
					for (
						var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
						(fromRight ? index-- : ++index < length) && !1 !== iteratee(iterable[index], index, iterable);

					);
					return collection;
				};
			})(function baseForOwn(object, iteratee) {
				return object && _baseFor(object, iteratee, lodash_es_keys);
			});
			const _castFunction = function castFunction(value) {
				return 'function' == typeof value ? value : lodash_es_identity;
			};
			const lodash_es_forEach = function forEach(collection, iteratee) {
				return (lodash_es_isArray(collection) ? _arrayEach : _baseEach)(collection, _castFunction(iteratee));
			};
			function _typeof(obj) {
				return (
					(_typeof =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (obj) {
									return typeof obj;
							  }
							: function (obj) {
									return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
							  }),
					_typeof(obj)
				);
			}
			var trimLeft = /^\s+/,
				trimRight = /\s+$/;
			function tinycolor(color, opts) {
				if (((opts = opts || {}), (color = color || '') instanceof tinycolor)) return color;
				if (!(this instanceof tinycolor)) return new tinycolor(color, opts);
				var rgb = (function inputToRGB(color) {
					var rgb = { r: 0, g: 0, b: 0 },
						a = 1,
						s = null,
						v = null,
						l = null,
						ok = !1,
						format = !1;
					'string' == typeof color &&
						(color = (function stringInputToObject(color) {
							color = color.replace(trimLeft, '').replace(trimRight, '').toLowerCase();
							var match,
								named = !1;
							if (names[color]) (color = names[color]), (named = !0);
							else if ('transparent' == color) return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
							if ((match = matchers.rgb.exec(color))) return { r: match[1], g: match[2], b: match[3] };
							if ((match = matchers.rgba.exec(color))) return { r: match[1], g: match[2], b: match[3], a: match[4] };
							if ((match = matchers.hsl.exec(color))) return { h: match[1], s: match[2], l: match[3] };
							if ((match = matchers.hsla.exec(color))) return { h: match[1], s: match[2], l: match[3], a: match[4] };
							if ((match = matchers.hsv.exec(color))) return { h: match[1], s: match[2], v: match[3] };
							if ((match = matchers.hsva.exec(color))) return { h: match[1], s: match[2], v: match[3], a: match[4] };
							if ((match = matchers.hex8.exec(color)))
								return {
									r: parseIntFromHex(match[1]),
									g: parseIntFromHex(match[2]),
									b: parseIntFromHex(match[3]),
									a: convertHexToDecimal(match[4]),
									format: named ? 'name' : 'hex8',
								};
							if ((match = matchers.hex6.exec(color)))
								return { r: parseIntFromHex(match[1]), g: parseIntFromHex(match[2]), b: parseIntFromHex(match[3]), format: named ? 'name' : 'hex' };
							if ((match = matchers.hex4.exec(color)))
								return {
									r: parseIntFromHex(match[1] + '' + match[1]),
									g: parseIntFromHex(match[2] + '' + match[2]),
									b: parseIntFromHex(match[3] + '' + match[3]),
									a: convertHexToDecimal(match[4] + '' + match[4]),
									format: named ? 'name' : 'hex8',
								};
							if ((match = matchers.hex3.exec(color)))
								return {
									r: parseIntFromHex(match[1] + '' + match[1]),
									g: parseIntFromHex(match[2] + '' + match[2]),
									b: parseIntFromHex(match[3] + '' + match[3]),
									format: named ? 'name' : 'hex',
								};
							return !1;
						})(color));
					'object' == _typeof(color) &&
						(isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)
							? ((rgb = (function rgbToRgb(r, g, b) {
									return { r: 255 * bound01(r, 255), g: 255 * bound01(g, 255), b: 255 * bound01(b, 255) };
							  })(color.r, color.g, color.b)),
							  (ok = !0),
							  (format = '%' === String(color.r).substr(-1) ? 'prgb' : 'rgb'))
							: isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)
							? ((s = convertToPercentage(color.s)),
							  (v = convertToPercentage(color.v)),
							  (rgb = (function hsvToRgb(h, s, v) {
									(h = 6 * bound01(h, 360)), (s = bound01(s, 100)), (v = bound01(v, 100));
									var i = Math.floor(h),
										f = h - i,
										p = v * (1 - s),
										q = v * (1 - f * s),
										t = v * (1 - (1 - f) * s),
										mod = i % 6,
										r = [v, q, p, p, t, v][mod],
										g = [t, v, v, q, p, p][mod],
										b = [p, p, t, v, v, q][mod];
									return { r: 255 * r, g: 255 * g, b: 255 * b };
							  })(color.h, s, v)),
							  (ok = !0),
							  (format = 'hsv'))
							: isValidCSSUnit(color.h) &&
							  isValidCSSUnit(color.s) &&
							  isValidCSSUnit(color.l) &&
							  ((s = convertToPercentage(color.s)),
							  (l = convertToPercentage(color.l)),
							  (rgb = (function hslToRgb(h, s, l) {
									var r, g, b;
									function hue2rgb(p, q, t) {
										return (
											t < 0 && (t += 1),
											t > 1 && (t -= 1),
											t < 1 / 6 ? p + 6 * (q - p) * t : t < 0.5 ? q : t < 2 / 3 ? p + (q - p) * (2 / 3 - t) * 6 : p
										);
									}
									if (((h = bound01(h, 360)), (s = bound01(s, 100)), (l = bound01(l, 100)), 0 === s)) r = g = b = l;
									else {
										var q = l < 0.5 ? l * (1 + s) : l + s - l * s,
											p = 2 * l - q;
										(r = hue2rgb(p, q, h + 1 / 3)), (g = hue2rgb(p, q, h)), (b = hue2rgb(p, q, h - 1 / 3));
									}
									return { r: 255 * r, g: 255 * g, b: 255 * b };
							  })(color.h, s, l)),
							  (ok = !0),
							  (format = 'hsl')),
						color.hasOwnProperty('a') && (a = color.a));
					return (
						(a = boundAlpha(a)),
						{
							ok,
							format: color.format || format,
							r: Math.min(255, Math.max(rgb.r, 0)),
							g: Math.min(255, Math.max(rgb.g, 0)),
							b: Math.min(255, Math.max(rgb.b, 0)),
							a,
						}
					);
				})(color);
				(this._originalInput = color),
					(this._r = rgb.r),
					(this._g = rgb.g),
					(this._b = rgb.b),
					(this._a = rgb.a),
					(this._roundA = Math.round(100 * this._a) / 100),
					(this._format = opts.format || rgb.format),
					(this._gradientType = opts.gradientType),
					this._r < 1 && (this._r = Math.round(this._r)),
					this._g < 1 && (this._g = Math.round(this._g)),
					this._b < 1 && (this._b = Math.round(this._b)),
					(this._ok = rgb.ok);
			}
			function rgbToHsl(r, g, b) {
				(r = bound01(r, 255)), (g = bound01(g, 255)), (b = bound01(b, 255));
				var h,
					s,
					max = Math.max(r, g, b),
					min = Math.min(r, g, b),
					l = (max + min) / 2;
				if (max == min) h = s = 0;
				else {
					var d = max - min;
					switch (((s = l > 0.5 ? d / (2 - max - min) : d / (max + min)), max)) {
						case r:
							h = (g - b) / d + (g < b ? 6 : 0);
							break;
						case g:
							h = (b - r) / d + 2;
							break;
						case b:
							h = (r - g) / d + 4;
					}
					h /= 6;
				}
				return { h, s, l };
			}
			function rgbToHsv(r, g, b) {
				(r = bound01(r, 255)), (g = bound01(g, 255)), (b = bound01(b, 255));
				var h,
					s,
					max = Math.max(r, g, b),
					min = Math.min(r, g, b),
					v = max,
					d = max - min;
				if (((s = 0 === max ? 0 : d / max), max == min)) h = 0;
				else {
					switch (max) {
						case r:
							h = (g - b) / d + (g < b ? 6 : 0);
							break;
						case g:
							h = (b - r) / d + 2;
							break;
						case b:
							h = (r - g) / d + 4;
					}
					h /= 6;
				}
				return { h, s, v };
			}
			function rgbToHex(r, g, b, allow3Char) {
				var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];
				return allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)
					? hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0)
					: hex.join('');
			}
			function rgbaToArgbHex(r, g, b, a) {
				return [
					pad2(convertDecimalToHex(a)),
					pad2(Math.round(r).toString(16)),
					pad2(Math.round(g).toString(16)),
					pad2(Math.round(b).toString(16)),
				].join('');
			}
			function _desaturate(color, amount) {
				amount = 0 === amount ? 0 : amount || 10;
				var hsl = tinycolor(color).toHsl();
				return (hsl.s -= amount / 100), (hsl.s = clamp01(hsl.s)), tinycolor(hsl);
			}
			function _saturate(color, amount) {
				amount = 0 === amount ? 0 : amount || 10;
				var hsl = tinycolor(color).toHsl();
				return (hsl.s += amount / 100), (hsl.s = clamp01(hsl.s)), tinycolor(hsl);
			}
			function _greyscale(color) {
				return tinycolor(color).desaturate(100);
			}
			function _lighten(color, amount) {
				amount = 0 === amount ? 0 : amount || 10;
				var hsl = tinycolor(color).toHsl();
				return (hsl.l += amount / 100), (hsl.l = clamp01(hsl.l)), tinycolor(hsl);
			}
			function _brighten(color, amount) {
				amount = 0 === amount ? 0 : amount || 10;
				var rgb = tinycolor(color).toRgb();
				return (
					(rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round((-amount / 100) * 255)))),
					(rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round((-amount / 100) * 255)))),
					(rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round((-amount / 100) * 255)))),
					tinycolor(rgb)
				);
			}
			function _darken(color, amount) {
				amount = 0 === amount ? 0 : amount || 10;
				var hsl = tinycolor(color).toHsl();
				return (hsl.l -= amount / 100), (hsl.l = clamp01(hsl.l)), tinycolor(hsl);
			}
			function _spin(color, amount) {
				var hsl = tinycolor(color).toHsl(),
					hue = (hsl.h + amount) % 360;
				return (hsl.h = hue < 0 ? 360 + hue : hue), tinycolor(hsl);
			}
			function _complement(color) {
				var hsl = tinycolor(color).toHsl();
				return (hsl.h = (hsl.h + 180) % 360), tinycolor(hsl);
			}
			function polyad(color, number) {
				if (isNaN(number) || number <= 0) throw new Error('Argument to polyad must be a positive number');
				for (var hsl = tinycolor(color).toHsl(), result = [tinycolor(color)], step = 360 / number, i = 1; i < number; i++)
					result.push(tinycolor({ h: (hsl.h + i * step) % 360, s: hsl.s, l: hsl.l }));
				return result;
			}
			function _splitcomplement(color) {
				var hsl = tinycolor(color).toHsl(),
					h = hsl.h;
				return [tinycolor(color), tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }), tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l })];
			}
			function _analogous(color, results, slices) {
				(results = results || 6), (slices = slices || 30);
				var hsl = tinycolor(color).toHsl(),
					part = 360 / slices,
					ret = [tinycolor(color)];
				for (hsl.h = (hsl.h - ((part * results) >> 1) + 720) % 360; --results; ) (hsl.h = (hsl.h + part) % 360), ret.push(tinycolor(hsl));
				return ret;
			}
			function _monochromatic(color, results) {
				results = results || 6;
				for (var hsv = tinycolor(color).toHsv(), h = hsv.h, s = hsv.s, v = hsv.v, ret = [], modification = 1 / results; results--; )
					ret.push(tinycolor({ h, s, v })), (v = (v + modification) % 1);
				return ret;
			}
			(tinycolor.prototype = {
				isDark: function isDark() {
					return this.getBrightness() < 128;
				},
				isLight: function isLight() {
					return !this.isDark();
				},
				isValid: function isValid() {
					return this._ok;
				},
				getOriginalInput: function getOriginalInput() {
					return this._originalInput;
				},
				getFormat: function getFormat() {
					return this._format;
				},
				getAlpha: function getAlpha() {
					return this._a;
				},
				getBrightness: function getBrightness() {
					var rgb = this.toRgb();
					return (299 * rgb.r + 587 * rgb.g + 114 * rgb.b) / 1e3;
				},
				getLuminance: function getLuminance() {
					var RsRGB,
						GsRGB,
						BsRGB,
						rgb = this.toRgb();
					return (
						(RsRGB = rgb.r / 255),
						(GsRGB = rgb.g / 255),
						(BsRGB = rgb.b / 255),
						0.2126 * (RsRGB <= 0.03928 ? RsRGB / 12.92 : Math.pow((RsRGB + 0.055) / 1.055, 2.4)) +
							0.7152 * (GsRGB <= 0.03928 ? GsRGB / 12.92 : Math.pow((GsRGB + 0.055) / 1.055, 2.4)) +
							0.0722 * (BsRGB <= 0.03928 ? BsRGB / 12.92 : Math.pow((BsRGB + 0.055) / 1.055, 2.4))
					);
				},
				setAlpha: function setAlpha(value) {
					return (this._a = boundAlpha(value)), (this._roundA = Math.round(100 * this._a) / 100), this;
				},
				toHsv: function toHsv() {
					var hsv = rgbToHsv(this._r, this._g, this._b);
					return { h: 360 * hsv.h, s: hsv.s, v: hsv.v, a: this._a };
				},
				toHsvString: function toHsvString() {
					var hsv = rgbToHsv(this._r, this._g, this._b),
						h = Math.round(360 * hsv.h),
						s = Math.round(100 * hsv.s),
						v = Math.round(100 * hsv.v);
					return 1 == this._a ? 'hsv(' + h + ', ' + s + '%, ' + v + '%)' : 'hsva(' + h + ', ' + s + '%, ' + v + '%, ' + this._roundA + ')';
				},
				toHsl: function toHsl() {
					var hsl = rgbToHsl(this._r, this._g, this._b);
					return { h: 360 * hsl.h, s: hsl.s, l: hsl.l, a: this._a };
				},
				toHslString: function toHslString() {
					var hsl = rgbToHsl(this._r, this._g, this._b),
						h = Math.round(360 * hsl.h),
						s = Math.round(100 * hsl.s),
						l = Math.round(100 * hsl.l);
					return 1 == this._a ? 'hsl(' + h + ', ' + s + '%, ' + l + '%)' : 'hsla(' + h + ', ' + s + '%, ' + l + '%, ' + this._roundA + ')';
				},
				toHex: function toHex(allow3Char) {
					return rgbToHex(this._r, this._g, this._b, allow3Char);
				},
				toHexString: function toHexString(allow3Char) {
					return '#' + this.toHex(allow3Char);
				},
				toHex8: function toHex8(allow4Char) {
					return (function rgbaToHex(r, g, b, a, allow4Char) {
						var hex = [
							pad2(Math.round(r).toString(16)),
							pad2(Math.round(g).toString(16)),
							pad2(Math.round(b).toString(16)),
							pad2(convertDecimalToHex(a)),
						];
						if (
							allow4Char &&
							hex[0].charAt(0) == hex[0].charAt(1) &&
							hex[1].charAt(0) == hex[1].charAt(1) &&
							hex[2].charAt(0) == hex[2].charAt(1) &&
							hex[3].charAt(0) == hex[3].charAt(1)
						)
							return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
						return hex.join('');
					})(this._r, this._g, this._b, this._a, allow4Char);
				},
				toHex8String: function toHex8String(allow4Char) {
					return '#' + this.toHex8(allow4Char);
				},
				toRgb: function toRgb() {
					return { r: Math.round(this._r), g: Math.round(this._g), b: Math.round(this._b), a: this._a };
				},
				toRgbString: function toRgbString() {
					return 1 == this._a
						? 'rgb(' + Math.round(this._r) + ', ' + Math.round(this._g) + ', ' + Math.round(this._b) + ')'
						: 'rgba(' + Math.round(this._r) + ', ' + Math.round(this._g) + ', ' + Math.round(this._b) + ', ' + this._roundA + ')';
				},
				toPercentageRgb: function toPercentageRgb() {
					return {
						r: Math.round(100 * bound01(this._r, 255)) + '%',
						g: Math.round(100 * bound01(this._g, 255)) + '%',
						b: Math.round(100 * bound01(this._b, 255)) + '%',
						a: this._a,
					};
				},
				toPercentageRgbString: function toPercentageRgbString() {
					return 1 == this._a
						? 'rgb(' +
								Math.round(100 * bound01(this._r, 255)) +
								'%, ' +
								Math.round(100 * bound01(this._g, 255)) +
								'%, ' +
								Math.round(100 * bound01(this._b, 255)) +
								'%)'
						: 'rgba(' +
								Math.round(100 * bound01(this._r, 255)) +
								'%, ' +
								Math.round(100 * bound01(this._g, 255)) +
								'%, ' +
								Math.round(100 * bound01(this._b, 255)) +
								'%, ' +
								this._roundA +
								')';
				},
				toName: function toName() {
					return 0 === this._a ? 'transparent' : !(this._a < 1) && (hexNames[rgbToHex(this._r, this._g, this._b, !0)] || !1);
				},
				toFilter: function toFilter(secondColor) {
					var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a),
						secondHex8String = hex8String,
						gradientType = this._gradientType ? 'GradientType = 1, ' : '';
					if (secondColor) {
						var s = tinycolor(secondColor);
						secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
					}
					return (
						'progid:DXImageTransform.Microsoft.gradient(' + gradientType + 'startColorstr=' + hex8String + ',endColorstr=' + secondHex8String + ')'
					);
				},
				toString: function toString(format) {
					var formatSet = !!format;
					format = format || this._format;
					var formattedString = !1,
						hasAlpha = this._a < 1 && this._a >= 0;
					return formatSet ||
						!hasAlpha ||
						('hex' !== format && 'hex6' !== format && 'hex3' !== format && 'hex4' !== format && 'hex8' !== format && 'name' !== format)
						? ('rgb' === format && (formattedString = this.toRgbString()),
						  'prgb' === format && (formattedString = this.toPercentageRgbString()),
						  ('hex' !== format && 'hex6' !== format) || (formattedString = this.toHexString()),
						  'hex3' === format && (formattedString = this.toHexString(!0)),
						  'hex4' === format && (formattedString = this.toHex8String(!0)),
						  'hex8' === format && (formattedString = this.toHex8String()),
						  'name' === format && (formattedString = this.toName()),
						  'hsl' === format && (formattedString = this.toHslString()),
						  'hsv' === format && (formattedString = this.toHsvString()),
						  formattedString || this.toHexString())
						: 'name' === format && 0 === this._a
						? this.toName()
						: this.toRgbString();
				},
				clone: function clone() {
					return tinycolor(this.toString());
				},
				_applyModification: function _applyModification(fn, args) {
					var color = fn.apply(null, [this].concat([].slice.call(args)));
					return (this._r = color._r), (this._g = color._g), (this._b = color._b), this.setAlpha(color._a), this;
				},
				lighten: function lighten() {
					return this._applyModification(_lighten, arguments);
				},
				brighten: function brighten() {
					return this._applyModification(_brighten, arguments);
				},
				darken: function darken() {
					return this._applyModification(_darken, arguments);
				},
				desaturate: function desaturate() {
					return this._applyModification(_desaturate, arguments);
				},
				saturate: function saturate() {
					return this._applyModification(_saturate, arguments);
				},
				greyscale: function greyscale() {
					return this._applyModification(_greyscale, arguments);
				},
				spin: function spin() {
					return this._applyModification(_spin, arguments);
				},
				_applyCombination: function _applyCombination(fn, args) {
					return fn.apply(null, [this].concat([].slice.call(args)));
				},
				analogous: function analogous() {
					return this._applyCombination(_analogous, arguments);
				},
				complement: function complement() {
					return this._applyCombination(_complement, arguments);
				},
				monochromatic: function monochromatic() {
					return this._applyCombination(_monochromatic, arguments);
				},
				splitcomplement: function splitcomplement() {
					return this._applyCombination(_splitcomplement, arguments);
				},
				triad: function triad() {
					return this._applyCombination(polyad, [3]);
				},
				tetrad: function tetrad() {
					return this._applyCombination(polyad, [4]);
				},
			}),
				(tinycolor.fromRatio = function (color, opts) {
					if ('object' == _typeof(color)) {
						var newColor = {};
						for (var i in color) color.hasOwnProperty(i) && (newColor[i] = 'a' === i ? color[i] : convertToPercentage(color[i]));
						color = newColor;
					}
					return tinycolor(color, opts);
				}),
				(tinycolor.equals = function (color1, color2) {
					return !(!color1 || !color2) && tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
				}),
				(tinycolor.random = function () {
					return tinycolor.fromRatio({ r: Math.random(), g: Math.random(), b: Math.random() });
				}),
				(tinycolor.mix = function (color1, color2, amount) {
					amount = 0 === amount ? 0 : amount || 50;
					var rgb1 = tinycolor(color1).toRgb(),
						rgb2 = tinycolor(color2).toRgb(),
						p = amount / 100;
					return tinycolor({
						r: (rgb2.r - rgb1.r) * p + rgb1.r,
						g: (rgb2.g - rgb1.g) * p + rgb1.g,
						b: (rgb2.b - rgb1.b) * p + rgb1.b,
						a: (rgb2.a - rgb1.a) * p + rgb1.a,
					});
				}),
				(tinycolor.readability = function (color1, color2) {
					var c1 = tinycolor(color1),
						c2 = tinycolor(color2);
					return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
				}),
				(tinycolor.isReadable = function (color1, color2, wcag2) {
					var wcag2Parms,
						out,
						readability = tinycolor.readability(color1, color2);
					switch (
						((out = !1),
						(wcag2Parms = (function validateWCAG2Parms(parms) {
							var level, size;
							(level = ((parms = parms || { level: 'AA', size: 'small' }).level || 'AA').toUpperCase()),
								(size = (parms.size || 'small').toLowerCase()),
								'AA' !== level && 'AAA' !== level && (level = 'AA');
							'small' !== size && 'large' !== size && (size = 'small');
							return { level, size };
						})(wcag2)).level + wcag2Parms.size)
					) {
						case 'AAsmall':
						case 'AAAlarge':
							out = readability >= 4.5;
							break;
						case 'AAlarge':
							out = readability >= 3;
							break;
						case 'AAAsmall':
							out = readability >= 7;
					}
					return out;
				}),
				(tinycolor.mostReadable = function (baseColor, colorList, args) {
					var readability,
						includeFallbackColors,
						level,
						size,
						bestColor = null,
						bestScore = 0;
					(includeFallbackColors = (args = args || {}).includeFallbackColors), (level = args.level), (size = args.size);
					for (var i = 0; i < colorList.length; i++)
						(readability = tinycolor.readability(baseColor, colorList[i])) > bestScore &&
							((bestScore = readability), (bestColor = tinycolor(colorList[i])));
					return tinycolor.isReadable(baseColor, bestColor, { level, size }) || !includeFallbackColors
						? bestColor
						: ((args.includeFallbackColors = !1), tinycolor.mostReadable(baseColor, ['#fff', '#000'], args));
				});
			var names = (tinycolor.names = {
					aliceblue: 'f0f8ff',
					antiquewhite: 'faebd7',
					aqua: '0ff',
					aquamarine: '7fffd4',
					azure: 'f0ffff',
					beige: 'f5f5dc',
					bisque: 'ffe4c4',
					black: '000',
					blanchedalmond: 'ffebcd',
					blue: '00f',
					blueviolet: '8a2be2',
					brown: 'a52a2a',
					burlywood: 'deb887',
					burntsienna: 'ea7e5d',
					cadetblue: '5f9ea0',
					chartreuse: '7fff00',
					chocolate: 'd2691e',
					coral: 'ff7f50',
					cornflowerblue: '6495ed',
					cornsilk: 'fff8dc',
					crimson: 'dc143c',
					cyan: '0ff',
					darkblue: '00008b',
					darkcyan: '008b8b',
					darkgoldenrod: 'b8860b',
					darkgray: 'a9a9a9',
					darkgreen: '006400',
					darkgrey: 'a9a9a9',
					darkkhaki: 'bdb76b',
					darkmagenta: '8b008b',
					darkolivegreen: '556b2f',
					darkorange: 'ff8c00',
					darkorchid: '9932cc',
					darkred: '8b0000',
					darksalmon: 'e9967a',
					darkseagreen: '8fbc8f',
					darkslateblue: '483d8b',
					darkslategray: '2f4f4f',
					darkslategrey: '2f4f4f',
					darkturquoise: '00ced1',
					darkviolet: '9400d3',
					deeppink: 'ff1493',
					deepskyblue: '00bfff',
					dimgray: '696969',
					dimgrey: '696969',
					dodgerblue: '1e90ff',
					firebrick: 'b22222',
					floralwhite: 'fffaf0',
					forestgreen: '228b22',
					fuchsia: 'f0f',
					gainsboro: 'dcdcdc',
					ghostwhite: 'f8f8ff',
					gold: 'ffd700',
					goldenrod: 'daa520',
					gray: '808080',
					green: '008000',
					greenyellow: 'adff2f',
					grey: '808080',
					honeydew: 'f0fff0',
					hotpink: 'ff69b4',
					indianred: 'cd5c5c',
					indigo: '4b0082',
					ivory: 'fffff0',
					khaki: 'f0e68c',
					lavender: 'e6e6fa',
					lavenderblush: 'fff0f5',
					lawngreen: '7cfc00',
					lemonchiffon: 'fffacd',
					lightblue: 'add8e6',
					lightcoral: 'f08080',
					lightcyan: 'e0ffff',
					lightgoldenrodyellow: 'fafad2',
					lightgray: 'd3d3d3',
					lightgreen: '90ee90',
					lightgrey: 'd3d3d3',
					lightpink: 'ffb6c1',
					lightsalmon: 'ffa07a',
					lightseagreen: '20b2aa',
					lightskyblue: '87cefa',
					lightslategray: '789',
					lightslategrey: '789',
					lightsteelblue: 'b0c4de',
					lightyellow: 'ffffe0',
					lime: '0f0',
					limegreen: '32cd32',
					linen: 'faf0e6',
					magenta: 'f0f',
					maroon: '800000',
					mediumaquamarine: '66cdaa',
					mediumblue: '0000cd',
					mediumorchid: 'ba55d3',
					mediumpurple: '9370db',
					mediumseagreen: '3cb371',
					mediumslateblue: '7b68ee',
					mediumspringgreen: '00fa9a',
					mediumturquoise: '48d1cc',
					mediumvioletred: 'c71585',
					midnightblue: '191970',
					mintcream: 'f5fffa',
					mistyrose: 'ffe4e1',
					moccasin: 'ffe4b5',
					navajowhite: 'ffdead',
					navy: '000080',
					oldlace: 'fdf5e6',
					olive: '808000',
					olivedrab: '6b8e23',
					orange: 'ffa500',
					orangered: 'ff4500',
					orchid: 'da70d6',
					palegoldenrod: 'eee8aa',
					palegreen: '98fb98',
					paleturquoise: 'afeeee',
					palevioletred: 'db7093',
					papayawhip: 'ffefd5',
					peachpuff: 'ffdab9',
					peru: 'cd853f',
					pink: 'ffc0cb',
					plum: 'dda0dd',
					powderblue: 'b0e0e6',
					purple: '800080',
					rebeccapurple: '663399',
					red: 'f00',
					rosybrown: 'bc8f8f',
					royalblue: '4169e1',
					saddlebrown: '8b4513',
					salmon: 'fa8072',
					sandybrown: 'f4a460',
					seagreen: '2e8b57',
					seashell: 'fff5ee',
					sienna: 'a0522d',
					silver: 'c0c0c0',
					skyblue: '87ceeb',
					slateblue: '6a5acd',
					slategray: '708090',
					slategrey: '708090',
					snow: 'fffafa',
					springgreen: '00ff7f',
					steelblue: '4682b4',
					tan: 'd2b48c',
					teal: '008080',
					thistle: 'd8bfd8',
					tomato: 'ff6347',
					turquoise: '40e0d0',
					violet: 'ee82ee',
					wheat: 'f5deb3',
					white: 'fff',
					whitesmoke: 'f5f5f5',
					yellow: 'ff0',
					yellowgreen: '9acd32',
				}),
				hexNames = (tinycolor.hexNames = (function flip(o) {
					var flipped = {};
					for (var i in o) o.hasOwnProperty(i) && (flipped[o[i]] = i);
					return flipped;
				})(names));
			function boundAlpha(a) {
				return (a = parseFloat(a)), (isNaN(a) || a < 0 || a > 1) && (a = 1), a;
			}
			function bound01(n, max) {
				(function isOnePointZero(n) {
					return 'string' == typeof n && -1 != n.indexOf('.') && 1 === parseFloat(n);
				})(n) && (n = '100%');
				var processPercent = (function isPercentage(n) {
					return 'string' == typeof n && -1 != n.indexOf('%');
				})(n);
				return (
					(n = Math.min(max, Math.max(0, parseFloat(n)))),
					processPercent && (n = parseInt(n * max, 10) / 100),
					Math.abs(n - max) < 1e-6 ? 1 : (n % max) / parseFloat(max)
				);
			}
			function clamp01(val) {
				return Math.min(1, Math.max(0, val));
			}
			function parseIntFromHex(val) {
				return parseInt(val, 16);
			}
			function pad2(c) {
				return 1 == c.length ? '0' + c : '' + c;
			}
			function convertToPercentage(n) {
				return n <= 1 && (n = 100 * n + '%'), n;
			}
			function convertDecimalToHex(d) {
				return Math.round(255 * parseFloat(d)).toString(16);
			}
			function convertHexToDecimal(h) {
				return parseIntFromHex(h) / 255;
			}
			var CSS_UNIT,
				PERMISSIVE_MATCH3,
				PERMISSIVE_MATCH4,
				matchers =
					((PERMISSIVE_MATCH3 =
						'[\\s|\\(]+(' +
						(CSS_UNIT = '(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)') +
						')[,|\\s]+(' +
						CSS_UNIT +
						')[,|\\s]+(' +
						CSS_UNIT +
						')\\s*\\)?'),
					(PERMISSIVE_MATCH4 = '[\\s|\\(]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')\\s*\\)?'),
					{
						CSS_UNIT: new RegExp(CSS_UNIT),
						rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
						rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
						hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
						hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
						hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
						hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
						hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
						hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
						hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
						hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
					});
			function isValidCSSUnit(color) {
				return !!matchers.CSS_UNIT.exec(color);
			}
			var simpleCheckForValidColor = function simpleCheckForValidColor(data) {
					var checked = 0,
						passed = 0;
					return (
						lodash_es_forEach(['r', 'g', 'b', 'a', 'h', 's', 'l', 'v'], function (letter) {
							if (data[letter] && ((checked += 1), isNaN(data[letter]) || (passed += 1), 's' === letter || 'l' === letter)) {
								/^\d+%$/.test(data[letter]) && (passed += 1);
							}
						}),
						checked === passed && data
					);
				},
				toState = function toState(data, oldHue) {
					var color = data.hex ? tinycolor(data.hex) : tinycolor(data),
						hsl = color.toHsl(),
						hsv = color.toHsv(),
						rgb = color.toRgb(),
						hex = color.toHex();
					return (
						0 === hsl.s && ((hsl.h = oldHue || 0), (hsv.h = oldHue || 0)),
						{
							hsl,
							hex: '000000' === hex && 0 === rgb.a ? 'transparent' : '#' + hex,
							rgb,
							hsv,
							oldHue: data.h || oldHue || hsl.h,
							source: data.source,
						}
					);
				},
				isValidHex = function isValidHex(hex) {
					if ('transparent' === hex) return !0;
					var lh = '#' === String(hex).charAt(0) ? 1 : 0;
					return hex.length !== 4 + lh && hex.length < 7 + lh && tinycolor(hex).isValid();
				},
				getContrastingColor = function getContrastingColor(data) {
					if (!data) return '#fff';
					var col = toState(data);
					return 'transparent' === col.hex ? 'rgba(0,0,0,0.4)' : (299 * col.rgb.r + 587 * col.rgb.g + 114 * col.rgb.b) / 1e3 >= 128 ? '#000' : '#fff';
				},
				isvalidColorString = function isvalidColorString(string, type) {
					return tinycolor(type + ' (' + string.replace('°', '') + ')')._ok;
				},
				ColorWrap_extends =
					Object.assign ||
					function (target) {
						for (var i = 1; i < arguments.length; i++) {
							var source = arguments[i];
							for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
						}
						return target;
					},
				ColorWrap_createClass = (function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];
							(descriptor.enumerable = descriptor.enumerable || !1),
								(descriptor.configurable = !0),
								'value' in descriptor && (descriptor.writable = !0),
								Object.defineProperty(target, descriptor.key, descriptor);
						}
					}
					return function (Constructor, protoProps, staticProps) {
						return (
							protoProps && defineProperties(Constructor.prototype, protoProps),
							staticProps && defineProperties(Constructor, staticProps),
							Constructor
						);
					};
				})();
			const common_ColorWrap = function ColorWrap(Picker) {
				var ColorPicker = (function (_ref) {
					function ColorPicker(props) {
						!(function ColorWrap_classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) throw new TypeError('Cannot call a class as a function');
						})(this, ColorPicker);
						var _this = (function ColorWrap_possibleConstructorReturn(self, call) {
							if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !call || ('object' != typeof call && 'function' != typeof call) ? self : call;
						})(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this));
						return (
							(_this.handleChange = function (data, event) {
								if (simpleCheckForValidColor(data)) {
									var colors = toState(data, data.h || _this.state.oldHue);
									_this.setState(colors),
										_this.props.onChangeComplete && _this.debounce(_this.props.onChangeComplete, colors, event),
										_this.props.onChange && _this.props.onChange(colors, event);
								}
							}),
							(_this.handleSwatchHover = function (data, event) {
								if (simpleCheckForValidColor(data)) {
									var colors = toState(data, data.h || _this.state.oldHue);
									_this.props.onSwatchHover && _this.props.onSwatchHover(colors, event);
								}
							}),
							(_this.state = ColorWrap_extends({}, toState(props.color, 0))),
							(_this.debounce = lodash_es_debounce(function (fn, data, event) {
								fn(data, event);
							}, 100)),
							_this
						);
					}
					return (
						(function ColorWrap_inherits(subClass, superClass) {
							if ('function' != typeof superClass && null !== superClass)
								throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
							(subClass.prototype = Object.create(superClass && superClass.prototype, {
								constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 },
							})),
								superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass));
						})(ColorPicker, _ref),
						ColorWrap_createClass(
							ColorPicker,
							[
								{
									key: 'render',
									value: function render() {
										var optionalEvents = {};
										return (
											this.props.onSwatchHover && (optionalEvents.onSwatchHover = this.handleSwatchHover),
											compat_module.default.createElement(
												Picker,
												ColorWrap_extends({}, this.props, this.state, { onChange: this.handleChange }, optionalEvents)
											)
										);
									},
								},
							],
							[
								{
									key: 'getDerivedStateFromProps',
									value: function getDerivedStateFromProps(nextProps, state) {
										return ColorWrap_extends({}, toState(nextProps.color, state.oldHue));
									},
								},
							]
						),
						ColorPicker
					);
				})(compat_module.PureComponent || compat_module.Component);
				return (
					(ColorPicker.propTypes = ColorWrap_extends({}, Picker.propTypes)),
					(ColorPicker.defaultProps = ColorWrap_extends({}, Picker.defaultProps, { color: { h: 250, s: 0.5, l: 0.2, a: 1 } })),
					ColorPicker
				);
			};
			var interaction_extends =
					Object.assign ||
					function (target) {
						for (var i = 1; i < arguments.length; i++) {
							var source = arguments[i];
							for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
						}
						return target;
					},
				interaction_createClass = (function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];
							(descriptor.enumerable = descriptor.enumerable || !1),
								(descriptor.configurable = !0),
								'value' in descriptor && (descriptor.writable = !0),
								Object.defineProperty(target, descriptor.key, descriptor);
						}
					}
					return function (Constructor, protoProps, staticProps) {
						return (
							protoProps && defineProperties(Constructor.prototype, protoProps),
							staticProps && defineProperties(Constructor, staticProps),
							Constructor
						);
					};
				})();
			function interaction_possibleConstructorReturn(self, call) {
				if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !call || ('object' != typeof call && 'function' != typeof call) ? self : call;
			}
			var Swatch_extends =
				Object.assign ||
				function (target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i];
						for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
					}
					return target;
				};
			const common_Swatch = (function handleFocus(Component) {
				var Span = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'span';
				return (function (_React$Component) {
					function Focus() {
						var _ref, _temp, _this;
						!(function interaction_classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) throw new TypeError('Cannot call a class as a function');
						})(this, Focus);
						for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
						return (
							(_temp = _this =
								interaction_possibleConstructorReturn(
									this,
									(_ref = Focus.__proto__ || Object.getPrototypeOf(Focus)).call.apply(_ref, [this].concat(args))
								)),
							(_this.state = { focus: !1 }),
							(_this.handleFocus = function () {
								return _this.setState({ focus: !0 });
							}),
							(_this.handleBlur = function () {
								return _this.setState({ focus: !1 });
							}),
							interaction_possibleConstructorReturn(_this, _temp)
						);
					}
					return (
						(function interaction_inherits(subClass, superClass) {
							if ('function' != typeof superClass && null !== superClass)
								throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
							(subClass.prototype = Object.create(superClass && superClass.prototype, {
								constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 },
							})),
								superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass));
						})(Focus, _React$Component),
						interaction_createClass(Focus, [
							{
								key: 'render',
								value: function render() {
									return compat_module.default.createElement(
										Span,
										{ onFocus: this.handleFocus, onBlur: this.handleBlur },
										compat_module.default.createElement(Component, interaction_extends({}, this.props, this.state))
									);
								},
							},
						]),
						Focus
					);
				})(compat_module.default.Component);
			})(function Swatch(_ref) {
				var color = _ref.color,
					style = _ref.style,
					_ref$onClick = _ref.onClick,
					onClick = void 0 === _ref$onClick ? function () {} : _ref$onClick,
					onHover = _ref.onHover,
					_ref$title = _ref.title,
					title = void 0 === _ref$title ? color : _ref$title,
					children = _ref.children,
					focus = _ref.focus,
					_ref$focusStyle = _ref.focusStyle,
					focusStyle = void 0 === _ref$focusStyle ? {} : _ref$focusStyle,
					transparent = 'transparent' === color,
					styles = (0, lib.Ay)({
						default: {
							swatch: Swatch_extends(
								{ background: color, height: '100%', width: '100%', cursor: 'pointer', position: 'relative', outline: 'none' },
								style,
								focus ? focusStyle : {}
							),
						},
					}),
					optionalEvents = {};
				return (
					onHover &&
						(optionalEvents.onMouseOver = function handleHover(e) {
							return onHover(color, e);
						}),
					compat_module.default.createElement(
						'div',
						Swatch_extends(
							{
								style: styles.swatch,
								onClick: function handleClick(e) {
									return onClick(color, e);
								},
								title,
								tabIndex: 0,
								onKeyDown: function handleKeyDown(e) {
									return 13 === e.keyCode && onClick(color, e);
								},
							},
							optionalEvents
						),
						children,
						transparent &&
							compat_module.default.createElement(common_Checkboard, {
								borderRadius: styles.swatch.borderRadius,
								boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
							})
					)
				);
			});
			const alpha_AlphaPointer = function AlphaPointer(_ref) {
				var direction = _ref.direction,
					styles = (0, lib.Ay)(
						{
							default: {
								picker: {
									width: '18px',
									height: '18px',
									borderRadius: '50%',
									transform: 'translate(-9px, -1px)',
									backgroundColor: 'rgb(248, 248, 248)',
									boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
								},
							},
							vertical: { picker: { transform: 'translate(-3px, -9px)' } },
						},
						{ vertical: 'vertical' === direction }
					);
				return compat_module.default.createElement('div', { style: styles.picker });
			};
			var alpha_Alpha_extends =
					Object.assign ||
					function (target) {
						for (var i = 1; i < arguments.length; i++) {
							var source = arguments[i];
							for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
						}
						return target;
					},
				AlphaPicker = function AlphaPicker(_ref) {
					var rgb = _ref.rgb,
						hsl = _ref.hsl,
						width = _ref.width,
						height = _ref.height,
						onChange = _ref.onChange,
						direction = _ref.direction,
						style = _ref.style,
						renderers = _ref.renderers,
						pointer = _ref.pointer,
						_ref$className = _ref.className,
						className = void 0 === _ref$className ? '' : _ref$className,
						styles = (0, lib.Ay)({ default: { picker: { position: 'relative', width, height }, alpha: { radius: '2px', style } } });
					return compat_module.default.createElement(
						'div',
						{ style: styles.picker, className: 'alpha-picker ' + className },
						compat_module.default.createElement(
							common_Alpha,
							alpha_Alpha_extends({}, styles.alpha, { rgb, hsl, pointer, renderers, onChange, direction })
						)
					);
				};
			AlphaPicker.defaultProps = { width: '316px', height: '16px', direction: 'horizontal', pointer: alpha_AlphaPointer };
			common_ColorWrap(AlphaPicker);
			const _arrayMap = function arrayMap(array, iteratee) {
				for (var index = -1, length = null == array ? 0 : array.length, result = Array(length); ++index < length; )
					result[index] = iteratee(array[index], index, array);
				return result;
			};
			const _setCacheAdd = function setCacheAdd(value) {
				return this.__data__.set(value, '__lodash_hash_undefined__'), this;
			};
			const _setCacheHas = function setCacheHas(value) {
				return this.__data__.has(value);
			};
			function SetCache(values) {
				var index = -1,
					length = null == values ? 0 : values.length;
				for (this.__data__ = new _MapCache(); ++index < length; ) this.add(values[index]);
			}
			(SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd), (SetCache.prototype.has = _setCacheHas);
			const _SetCache = SetCache;
			const _arraySome = function arraySome(array, predicate) {
				for (var index = -1, length = null == array ? 0 : array.length; ++index < length; ) if (predicate(array[index], index, array)) return !0;
				return !1;
			};
			const _cacheHas = function cacheHas(cache, key) {
				return cache.has(key);
			};
			const _equalArrays = function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
				var isPartial = 1 & bitmask,
					arrLength = array.length,
					othLength = other.length;
				if (arrLength != othLength && !(isPartial && othLength > arrLength)) return !1;
				var arrStacked = stack.get(array),
					othStacked = stack.get(other);
				if (arrStacked && othStacked) return arrStacked == other && othStacked == array;
				var index = -1,
					result = !0,
					seen = 2 & bitmask ? new _SetCache() : void 0;
				for (stack.set(array, other), stack.set(other, array); ++index < arrLength; ) {
					var arrValue = array[index],
						othValue = other[index];
					if (customizer)
						var compared = isPartial
							? customizer(othValue, arrValue, index, other, array, stack)
							: customizer(arrValue, othValue, index, array, other, stack);
					if (void 0 !== compared) {
						if (compared) continue;
						result = !1;
						break;
					}
					if (seen) {
						if (
							!_arraySome(other, function (othValue, othIndex) {
								if (!_cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack)))
									return seen.push(othIndex);
							})
						) {
							result = !1;
							break;
						}
					} else if (arrValue !== othValue && !equalFunc(arrValue, othValue, bitmask, customizer, stack)) {
						result = !1;
						break;
					}
				}
				return stack.delete(array), stack.delete(other), result;
			};
			const _mapToArray = function mapToArray(map) {
				var index = -1,
					result = Array(map.size);
				return (
					map.forEach(function (value, key) {
						result[++index] = [key, value];
					}),
					result
				);
			};
			const _setToArray = function setToArray(set) {
				var index = -1,
					result = Array(set.size);
				return (
					set.forEach(function (value) {
						result[++index] = value;
					}),
					result
				);
			};
			var symbolProto = _Symbol ? _Symbol.prototype : void 0,
				symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
			const _equalByTag = function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
				switch (tag) {
					case '[object DataView]':
						if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return !1;
						(object = object.buffer), (other = other.buffer);
					case '[object ArrayBuffer]':
						return !(object.byteLength != other.byteLength || !equalFunc(new _Uint8Array(object), new _Uint8Array(other)));
					case '[object Boolean]':
					case '[object Date]':
					case '[object Number]':
						return lodash_es_eq(+object, +other);
					case '[object Error]':
						return object.name == other.name && object.message == other.message;
					case '[object RegExp]':
					case '[object String]':
						return object == other + '';
					case '[object Map]':
						var convert = _mapToArray;
					case '[object Set]':
						var isPartial = 1 & bitmask;
						if ((convert || (convert = _setToArray), object.size != other.size && !isPartial)) return !1;
						var stacked = stack.get(object);
						if (stacked) return stacked == other;
						(bitmask |= 2), stack.set(object, other);
						var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
						return stack.delete(object), result;
					case '[object Symbol]':
						if (symbolValueOf) return symbolValueOf.call(object) == symbolValueOf.call(other);
				}
				return !1;
			};
			const _arrayPush = function arrayPush(array, values) {
				for (var index = -1, length = values.length, offset = array.length; ++index < length; ) array[offset + index] = values[index];
				return array;
			};
			const _baseGetAllKeys = function baseGetAllKeys(object, keysFunc, symbolsFunc) {
				var result = keysFunc(object);
				return lodash_es_isArray(object) ? result : _arrayPush(result, symbolsFunc(object));
			};
			const _arrayFilter = function arrayFilter(array, predicate) {
				for (var index = -1, length = null == array ? 0 : array.length, resIndex = 0, result = []; ++index < length; ) {
					var value = array[index];
					predicate(value, index, array) && (result[resIndex++] = value);
				}
				return result;
			};
			const lodash_es_stubArray = function stubArray() {
				return [];
			};
			var _getSymbols_propertyIsEnumerable = Object.prototype.propertyIsEnumerable,
				nativeGetSymbols = Object.getOwnPropertySymbols;
			const _getSymbols = nativeGetSymbols
				? function (object) {
						return null == object
							? []
							: ((object = Object(object)),
							  _arrayFilter(nativeGetSymbols(object), function (symbol) {
									return _getSymbols_propertyIsEnumerable.call(object, symbol);
							  }));
				  }
				: lodash_es_stubArray;
			const _getAllKeys = function getAllKeys(object) {
				return _baseGetAllKeys(object, lodash_es_keys, _getSymbols);
			};
			var _equalObjects_hasOwnProperty = Object.prototype.hasOwnProperty;
			const _equalObjects = function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
				var isPartial = 1 & bitmask,
					objProps = _getAllKeys(object),
					objLength = objProps.length;
				if (objLength != _getAllKeys(other).length && !isPartial) return !1;
				for (var index = objLength; index--; ) {
					var key = objProps[index];
					if (!(isPartial ? key in other : _equalObjects_hasOwnProperty.call(other, key))) return !1;
				}
				var objStacked = stack.get(object),
					othStacked = stack.get(other);
				if (objStacked && othStacked) return objStacked == other && othStacked == object;
				var result = !0;
				stack.set(object, other), stack.set(other, object);
				for (var skipCtor = isPartial; ++index < objLength; ) {
					var objValue = object[(key = objProps[index])],
						othValue = other[key];
					if (customizer)
						var compared = isPartial
							? customizer(othValue, objValue, key, other, object, stack)
							: customizer(objValue, othValue, key, object, other, stack);
					if (!(void 0 === compared ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
						result = !1;
						break;
					}
					skipCtor || (skipCtor = 'constructor' == key);
				}
				if (result && !skipCtor) {
					var objCtor = object.constructor,
						othCtor = other.constructor;
					objCtor == othCtor ||
						!('constructor' in object) ||
						!('constructor' in other) ||
						('function' == typeof objCtor && objCtor instanceof objCtor && 'function' == typeof othCtor && othCtor instanceof othCtor) ||
						(result = !1);
				}
				return stack.delete(object), stack.delete(other), result;
			};
			const _DataView = _getNative(_root.A, 'DataView');
			const _Promise = _getNative(_root.A, 'Promise');
			const _Set = _getNative(_root.A, 'Set');
			const _WeakMap = _getNative(_root.A, 'WeakMap');
			var dataViewCtorString = _toSource(_DataView),
				mapCtorString = _toSource(_Map),
				promiseCtorString = _toSource(_Promise),
				setCtorString = _toSource(_Set),
				weakMapCtorString = _toSource(_WeakMap),
				getTag = _baseGetTag;
			((_DataView && '[object DataView]' != getTag(new _DataView(new ArrayBuffer(1)))) ||
				(_Map && '[object Map]' != getTag(new _Map())) ||
				(_Promise && '[object Promise]' != getTag(_Promise.resolve())) ||
				(_Set && '[object Set]' != getTag(new _Set())) ||
				(_WeakMap && '[object WeakMap]' != getTag(new _WeakMap()))) &&
				(getTag = function (value) {
					var result = _baseGetTag(value),
						Ctor = '[object Object]' == result ? value.constructor : void 0,
						ctorString = Ctor ? _toSource(Ctor) : '';
					if (ctorString)
						switch (ctorString) {
							case dataViewCtorString:
								return '[object DataView]';
							case mapCtorString:
								return '[object Map]';
							case promiseCtorString:
								return '[object Promise]';
							case setCtorString:
								return '[object Set]';
							case weakMapCtorString:
								return '[object WeakMap]';
						}
					return result;
				});
			const _getTag = getTag;
			var _baseIsEqualDeep_hasOwnProperty = Object.prototype.hasOwnProperty;
			const _baseIsEqualDeep = function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
				var objIsArr = lodash_es_isArray(object),
					othIsArr = lodash_es_isArray(other),
					objTag = objIsArr ? '[object Array]' : _getTag(object),
					othTag = othIsArr ? '[object Array]' : _getTag(other),
					objIsObj = '[object Object]' == (objTag = '[object Arguments]' == objTag ? '[object Object]' : objTag),
					othIsObj = '[object Object]' == (othTag = '[object Arguments]' == othTag ? '[object Object]' : othTag),
					isSameTag = objTag == othTag;
				if (isSameTag && (0, isBuffer.A)(object)) {
					if (!(0, isBuffer.A)(other)) return !1;
					(objIsArr = !0), (objIsObj = !1);
				}
				if (isSameTag && !objIsObj)
					return (
						stack || (stack = new _Stack()),
						objIsArr || lodash_es_isTypedArray(object)
							? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
							: _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack)
					);
				if (!(1 & bitmask)) {
					var objIsWrapped = objIsObj && _baseIsEqualDeep_hasOwnProperty.call(object, '__wrapped__'),
						othIsWrapped = othIsObj && _baseIsEqualDeep_hasOwnProperty.call(other, '__wrapped__');
					if (objIsWrapped || othIsWrapped) {
						var objUnwrapped = objIsWrapped ? object.value() : object,
							othUnwrapped = othIsWrapped ? other.value() : other;
						return stack || (stack = new _Stack()), equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
					}
				}
				return !!isSameTag && (stack || (stack = new _Stack()), _equalObjects(object, other, bitmask, customizer, equalFunc, stack));
			};
			const _baseIsEqual = function baseIsEqual(value, other, bitmask, customizer, stack) {
				return (
					value === other ||
					(null == value || null == other || (!lodash_es_isObjectLike(value) && !lodash_es_isObjectLike(other))
						? value != value && other != other
						: _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack))
				);
			};
			const _baseIsMatch = function baseIsMatch(object, source, matchData, customizer) {
				var index = matchData.length,
					length = index,
					noCustomizer = !customizer;
				if (null == object) return !length;
				for (object = Object(object); index--; ) {
					var data = matchData[index];
					if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) return !1;
				}
				for (; ++index < length; ) {
					var key = (data = matchData[index])[0],
						objValue = object[key],
						srcValue = data[1];
					if (noCustomizer && data[2]) {
						if (void 0 === objValue && !(key in object)) return !1;
					} else {
						var stack = new _Stack();
						if (customizer) var result = customizer(objValue, srcValue, key, object, source, stack);
						if (!(void 0 === result ? _baseIsEqual(srcValue, objValue, 3, customizer, stack) : result)) return !1;
					}
				}
				return !0;
			};
			const _isStrictComparable = function isStrictComparable(value) {
				return value == value && !lodash_es_isObject(value);
			};
			const _getMatchData = function getMatchData(object) {
				for (var result = lodash_es_keys(object), length = result.length; length--; ) {
					var key = result[length],
						value = object[key];
					result[length] = [key, value, _isStrictComparable(value)];
				}
				return result;
			};
			const _matchesStrictComparable = function matchesStrictComparable(key, srcValue) {
				return function (object) {
					return null != object && object[key] === srcValue && (void 0 !== srcValue || key in Object(object));
				};
			};
			const _baseMatches = function baseMatches(source) {
				var matchData = _getMatchData(source);
				return 1 == matchData.length && matchData[0][2]
					? _matchesStrictComparable(matchData[0][0], matchData[0][1])
					: function (object) {
							return object === source || _baseIsMatch(object, source, matchData);
					  };
			};
			var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
				reIsPlainProp = /^\w*$/;
			const _isKey = function isKey(value, object) {
				if (lodash_es_isArray(value)) return !1;
				var type = typeof value;
				return (
					!('number' != type && 'symbol' != type && 'boolean' != type && null != value && !lodash_es_isSymbol(value)) ||
					reIsPlainProp.test(value) ||
					!reIsDeepProp.test(value) ||
					(null != object && value in Object(object))
				);
			};
			function memoize(func, resolver) {
				if ('function' != typeof func || (null != resolver && 'function' != typeof resolver)) throw new TypeError('Expected a function');
				var memoized = function () {
					var args = arguments,
						key = resolver ? resolver.apply(this, args) : args[0],
						cache = memoized.cache;
					if (cache.has(key)) return cache.get(key);
					var result = func.apply(this, args);
					return (memoized.cache = cache.set(key, result) || cache), result;
				};
				return (memoized.cache = new (memoize.Cache || _MapCache)()), memoized;
			}
			memoize.Cache = _MapCache;
			const lodash_es_memoize = memoize;
			var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
				reEscapeChar = /\\(\\)?/g;
			const _stringToPath = (function memoizeCapped(func) {
				var result = lodash_es_memoize(func, function (key) {
						return 500 === cache.size && cache.clear(), key;
					}),
					cache = result.cache;
				return result;
			})(function (string) {
				var result = [];
				return (
					46 === string.charCodeAt(0) && result.push(''),
					string.replace(rePropName, function (match, number, quote, subString) {
						result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
					}),
					result
				);
			});
			var _baseToString_symbolProto = _Symbol ? _Symbol.prototype : void 0,
				symbolToString = _baseToString_symbolProto ? _baseToString_symbolProto.toString : void 0;
			const _baseToString = function baseToString(value) {
				if ('string' == typeof value) return value;
				if (lodash_es_isArray(value)) return _arrayMap(value, baseToString) + '';
				if (lodash_es_isSymbol(value)) return symbolToString ? symbolToString.call(value) : '';
				var result = value + '';
				return '0' == result && 1 / value == -Infinity ? '-0' : result;
			};
			const lodash_es_toString = function toString_toString(value) {
				return null == value ? '' : _baseToString(value);
			};
			const _castPath = function castPath(value, object) {
				return lodash_es_isArray(value) ? value : _isKey(value, object) ? [value] : _stringToPath(lodash_es_toString(value));
			};
			const _toKey = function toKey(value) {
				if ('string' == typeof value || lodash_es_isSymbol(value)) return value;
				var result = value + '';
				return '0' == result && 1 / value == -Infinity ? '-0' : result;
			};
			const _baseGet = function baseGet(object, path) {
				for (var index = 0, length = (path = _castPath(path, object)).length; null != object && index < length; )
					object = object[_toKey(path[index++])];
				return index && index == length ? object : void 0;
			};
			const lodash_es_get = function get_get(object, path, defaultValue) {
				var result = null == object ? void 0 : _baseGet(object, path);
				return void 0 === result ? defaultValue : result;
			};
			const _baseHasIn = function baseHasIn(object, key) {
				return null != object && key in Object(object);
			};
			const _hasPath = function hasPath(object, path, hasFunc) {
				for (var index = -1, length = (path = _castPath(path, object)).length, result = !1; ++index < length; ) {
					var key = _toKey(path[index]);
					if (!(result = null != object && hasFunc(object, key))) break;
					object = object[key];
				}
				return result || ++index != length
					? result
					: !!(length = null == object ? 0 : object.length) &&
							lodash_es_isLength(length) &&
							_isIndex(key, length) &&
							(lodash_es_isArray(object) || lodash_es_isArguments(object));
			};
			const lodash_es_hasIn = function hasIn(object, path) {
				return null != object && _hasPath(object, path, _baseHasIn);
			};
			const _baseMatchesProperty = function baseMatchesProperty(path, srcValue) {
				return _isKey(path) && _isStrictComparable(srcValue)
					? _matchesStrictComparable(_toKey(path), srcValue)
					: function (object) {
							var objValue = lodash_es_get(object, path);
							return void 0 === objValue && objValue === srcValue ? lodash_es_hasIn(object, path) : _baseIsEqual(srcValue, objValue, 3);
					  };
			};
			const _baseProperty = function baseProperty(key) {
				return function (object) {
					return null == object ? void 0 : object[key];
				};
			};
			const _basePropertyDeep = function basePropertyDeep(path) {
				return function (object) {
					return _baseGet(object, path);
				};
			};
			const lodash_es_property = function property(path) {
				return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
			};
			const _baseIteratee = function baseIteratee(value) {
				return 'function' == typeof value
					? value
					: null == value
					? lodash_es_identity
					: 'object' == typeof value
					? lodash_es_isArray(value)
						? _baseMatchesProperty(value[0], value[1])
						: _baseMatches(value)
					: lodash_es_property(value);
			};
			const _baseMap = function baseMap(collection, iteratee) {
				var index = -1,
					result = lodash_es_isArrayLike(collection) ? Array(collection.length) : [];
				return (
					_baseEach(collection, function (value, key, collection) {
						result[++index] = iteratee(value, key, collection);
					}),
					result
				);
			};
			const lodash_es_map = function map(collection, iteratee) {
				return (lodash_es_isArray(collection) ? _arrayMap : _baseMap)(collection, _baseIteratee(iteratee, 3));
			};
			const block_BlockSwatches = function BlockSwatches(_ref) {
				var colors = _ref.colors,
					onClick = _ref.onClick,
					onSwatchHover = _ref.onSwatchHover,
					styles = (0, lib.Ay)({
						default: {
							swatches: { marginRight: '-10px' },
							swatch: { width: '22px', height: '22px', float: 'left', marginRight: '10px', marginBottom: '10px', borderRadius: '4px' },
							clear: { clear: 'both' },
						},
					});
				return compat_module.default.createElement(
					'div',
					{ style: styles.swatches },
					lodash_es_map(colors, function (c) {
						return compat_module.default.createElement(common_Swatch, {
							key: c,
							color: c,
							style: styles.swatch,
							onClick,
							onHover: onSwatchHover,
							focusStyle: { boxShadow: '0 0 4px ' + c },
						});
					}),
					compat_module.default.createElement('div', { style: styles.clear })
				);
			};
			var Block = function Block(_ref) {
				var onChange = _ref.onChange,
					onSwatchHover = _ref.onSwatchHover,
					hex = _ref.hex,
					colors = _ref.colors,
					width = _ref.width,
					triangle = _ref.triangle,
					_ref$styles = _ref.styles,
					passedStyles = void 0 === _ref$styles ? {} : _ref$styles,
					_ref$className = _ref.className,
					className = void 0 === _ref$className ? '' : _ref$className,
					transparent = 'transparent' === hex,
					handleChange = function handleChange(hexCode, e) {
						isValidHex(hexCode) && onChange({ hex: hexCode, source: 'hex' }, e);
					},
					styles = (0, lib.Ay)(
						lodash_es_merge(
							{
								default: {
									card: { width, background: '#fff', boxShadow: '0 1px rgba(0,0,0,.1)', borderRadius: '6px', position: 'relative' },
									head: {
										height: '110px',
										background: hex,
										borderRadius: '6px 6px 0 0',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										position: 'relative',
									},
									body: { padding: '10px' },
									label: { fontSize: '18px', color: getContrastingColor(hex), position: 'relative' },
									triangle: {
										width: '0px',
										height: '0px',
										borderStyle: 'solid',
										borderWidth: '0 10px 10px 10px',
										borderColor: 'transparent transparent ' + hex + ' transparent',
										position: 'absolute',
										top: '-10px',
										left: '50%',
										marginLeft: '-10px',
									},
									input: {
										width: '100%',
										fontSize: '12px',
										color: '#666',
										border: '0px',
										outline: 'none',
										height: '22px',
										boxShadow: 'inset 0 0 0 1px #ddd',
										borderRadius: '4px',
										padding: '0 7px',
										boxSizing: 'border-box',
									},
								},
								'hide-triangle': { triangle: { display: 'none' } },
							},
							passedStyles
						),
						{ 'hide-triangle': 'hide' === triangle }
					);
				return compat_module.default.createElement(
					'div',
					{ style: styles.card, className: 'block-picker ' + className },
					compat_module.default.createElement('div', { style: styles.triangle }),
					compat_module.default.createElement(
						'div',
						{ style: styles.head },
						transparent && compat_module.default.createElement(common_Checkboard, { borderRadius: '6px 6px 0 0' }),
						compat_module.default.createElement('div', { style: styles.label }, hex)
					),
					compat_module.default.createElement(
						'div',
						{ style: styles.body },
						compat_module.default.createElement(block_BlockSwatches, { colors, onClick: handleChange, onSwatchHover }),
						compat_module.default.createElement(common_EditableInput, { style: { input: styles.input }, value: hex, onChange: handleChange })
					)
				);
			};
			(Block.propTypes = {
				width: prop_types_default().oneOfType([prop_types_default().string, prop_types_default().number]),
				colors: prop_types_default().arrayOf(prop_types_default().string),
				triangle: prop_types_default().oneOf(['top', 'hide']),
				styles: prop_types_default().object,
			}),
				(Block.defaultProps = {
					width: 170,
					colors: ['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8'],
					triangle: 'top',
					styles: {},
				});
			common_ColorWrap(Block);
			var colors_es2015_red = {
					50: '#ffebee',
					100: '#ffcdd2',
					200: '#ef9a9a',
					300: '#e57373',
					400: '#ef5350',
					500: '#f44336',
					600: '#e53935',
					700: '#d32f2f',
					800: '#c62828',
					900: '#b71c1c',
					a100: '#ff8a80',
					a200: '#ff5252',
					a400: '#ff1744',
					a700: '#d50000',
				},
				pink = {
					50: '#fce4ec',
					100: '#f8bbd0',
					200: '#f48fb1',
					300: '#f06292',
					400: '#ec407a',
					500: '#e91e63',
					600: '#d81b60',
					700: '#c2185b',
					800: '#ad1457',
					900: '#880e4f',
					a100: '#ff80ab',
					a200: '#ff4081',
					a400: '#f50057',
					a700: '#c51162',
				},
				purple = {
					50: '#f3e5f5',
					100: '#e1bee7',
					200: '#ce93d8',
					300: '#ba68c8',
					400: '#ab47bc',
					500: '#9c27b0',
					600: '#8e24aa',
					700: '#7b1fa2',
					800: '#6a1b9a',
					900: '#4a148c',
					a100: '#ea80fc',
					a200: '#e040fb',
					a400: '#d500f9',
					a700: '#aa00ff',
				},
				deepPurple = {
					50: '#ede7f6',
					100: '#d1c4e9',
					200: '#b39ddb',
					300: '#9575cd',
					400: '#7e57c2',
					500: '#673ab7',
					600: '#5e35b1',
					700: '#512da8',
					800: '#4527a0',
					900: '#311b92',
					a100: '#b388ff',
					a200: '#7c4dff',
					a400: '#651fff',
					a700: '#6200ea',
				},
				indigo = {
					50: '#e8eaf6',
					100: '#c5cae9',
					200: '#9fa8da',
					300: '#7986cb',
					400: '#5c6bc0',
					500: '#3f51b5',
					600: '#3949ab',
					700: '#303f9f',
					800: '#283593',
					900: '#1a237e',
					a100: '#8c9eff',
					a200: '#536dfe',
					a400: '#3d5afe',
					a700: '#304ffe',
				},
				blue = {
					50: '#e3f2fd',
					100: '#bbdefb',
					200: '#90caf9',
					300: '#64b5f6',
					400: '#42a5f5',
					500: '#2196f3',
					600: '#1e88e5',
					700: '#1976d2',
					800: '#1565c0',
					900: '#0d47a1',
					a100: '#82b1ff',
					a200: '#448aff',
					a400: '#2979ff',
					a700: '#2962ff',
				},
				lightBlue = {
					50: '#e1f5fe',
					100: '#b3e5fc',
					200: '#81d4fa',
					300: '#4fc3f7',
					400: '#29b6f6',
					500: '#03a9f4',
					600: '#039be5',
					700: '#0288d1',
					800: '#0277bd',
					900: '#01579b',
					a100: '#80d8ff',
					a200: '#40c4ff',
					a400: '#00b0ff',
					a700: '#0091ea',
				},
				cyan = {
					50: '#e0f7fa',
					100: '#b2ebf2',
					200: '#80deea',
					300: '#4dd0e1',
					400: '#26c6da',
					500: '#00bcd4',
					600: '#00acc1',
					700: '#0097a7',
					800: '#00838f',
					900: '#006064',
					a100: '#84ffff',
					a200: '#18ffff',
					a400: '#00e5ff',
					a700: '#00b8d4',
				},
				teal = {
					50: '#e0f2f1',
					100: '#b2dfdb',
					200: '#80cbc4',
					300: '#4db6ac',
					400: '#26a69a',
					500: '#009688',
					600: '#00897b',
					700: '#00796b',
					800: '#00695c',
					900: '#004d40',
					a100: '#a7ffeb',
					a200: '#64ffda',
					a400: '#1de9b6',
					a700: '#00bfa5',
				},
				green = {
					50: '#e8f5e9',
					100: '#c8e6c9',
					200: '#a5d6a7',
					300: '#81c784',
					400: '#66bb6a',
					500: '#4caf50',
					600: '#43a047',
					700: '#388e3c',
					800: '#2e7d32',
					900: '#1b5e20',
					a100: '#b9f6ca',
					a200: '#69f0ae',
					a400: '#00e676',
					a700: '#00c853',
				},
				lightGreen = {
					50: '#f1f8e9',
					100: '#dcedc8',
					200: '#c5e1a5',
					300: '#aed581',
					400: '#9ccc65',
					500: '#8bc34a',
					600: '#7cb342',
					700: '#689f38',
					800: '#558b2f',
					900: '#33691e',
					a100: '#ccff90',
					a200: '#b2ff59',
					a400: '#76ff03',
					a700: '#64dd17',
				},
				lime = {
					50: '#f9fbe7',
					100: '#f0f4c3',
					200: '#e6ee9c',
					300: '#dce775',
					400: '#d4e157',
					500: '#cddc39',
					600: '#c0ca33',
					700: '#afb42b',
					800: '#9e9d24',
					900: '#827717',
					a100: '#f4ff81',
					a200: '#eeff41',
					a400: '#c6ff00',
					a700: '#aeea00',
				},
				yellow = {
					50: '#fffde7',
					100: '#fff9c4',
					200: '#fff59d',
					300: '#fff176',
					400: '#ffee58',
					500: '#ffeb3b',
					600: '#fdd835',
					700: '#fbc02d',
					800: '#f9a825',
					900: '#f57f17',
					a100: '#ffff8d',
					a200: '#ffff00',
					a400: '#ffea00',
					a700: '#ffd600',
				},
				amber = {
					50: '#fff8e1',
					100: '#ffecb3',
					200: '#ffe082',
					300: '#ffd54f',
					400: '#ffca28',
					500: '#ffc107',
					600: '#ffb300',
					700: '#ffa000',
					800: '#ff8f00',
					900: '#ff6f00',
					a100: '#ffe57f',
					a200: '#ffd740',
					a400: '#ffc400',
					a700: '#ffab00',
				},
				orange = {
					50: '#fff3e0',
					100: '#ffe0b2',
					200: '#ffcc80',
					300: '#ffb74d',
					400: '#ffa726',
					500: '#ff9800',
					600: '#fb8c00',
					700: '#f57c00',
					800: '#ef6c00',
					900: '#e65100',
					a100: '#ffd180',
					a200: '#ffab40',
					a400: '#ff9100',
					a700: '#ff6d00',
				},
				deepOrange = {
					50: '#fbe9e7',
					100: '#ffccbc',
					200: '#ffab91',
					300: '#ff8a65',
					400: '#ff7043',
					500: '#ff5722',
					600: '#f4511e',
					700: '#e64a19',
					800: '#d84315',
					900: '#bf360c',
					a100: '#ff9e80',
					a200: '#ff6e40',
					a400: '#ff3d00',
					a700: '#dd2c00',
				},
				brown = {
					50: '#efebe9',
					100: '#d7ccc8',
					200: '#bcaaa4',
					300: '#a1887f',
					400: '#8d6e63',
					500: '#795548',
					600: '#6d4c41',
					700: '#5d4037',
					800: '#4e342e',
					900: '#3e2723',
				},
				blueGrey = {
					50: '#eceff1',
					100: '#cfd8dc',
					200: '#b0bec5',
					300: '#90a4ae',
					400: '#78909c',
					500: '#607d8b',
					600: '#546e7a',
					700: '#455a64',
					800: '#37474f',
					900: '#263238',
				};
			var CircleSwatch = function CircleSwatch(_ref) {
				var color = _ref.color,
					onClick = _ref.onClick,
					onSwatchHover = _ref.onSwatchHover,
					hover = _ref.hover,
					active = _ref.active,
					circleSize = _ref.circleSize,
					circleSpacing = _ref.circleSpacing,
					styles = (0, lib.Ay)(
						{
							default: {
								swatch: {
									width: circleSize,
									height: circleSize,
									marginRight: circleSpacing,
									marginBottom: circleSpacing,
									transform: 'scale(1)',
									transition: '100ms transform ease',
								},
								Swatch: {
									borderRadius: '50%',
									background: 'transparent',
									boxShadow: 'inset 0 0 0 ' + (circleSize / 2 + 1) + 'px ' + color,
									transition: '100ms box-shadow ease',
								},
							},
							hover: { swatch: { transform: 'scale(1.2)' } },
							active: { Swatch: { boxShadow: 'inset 0 0 0 3px ' + color } },
						},
						{ hover, active }
					);
				return compat_module.default.createElement(
					'div',
					{ style: styles.swatch },
					compat_module.default.createElement(common_Swatch, {
						style: styles.Swatch,
						color,
						onClick,
						onHover: onSwatchHover,
						focusStyle: { boxShadow: styles.Swatch.boxShadow + ', 0 0 5px ' + color },
					})
				);
			};
			CircleSwatch.defaultProps = { circleSize: 28, circleSpacing: 14 };
			const circle_CircleSwatch = (0, lib.H8)(CircleSwatch);
			var Circle = function Circle(_ref) {
				var width = _ref.width,
					onChange = _ref.onChange,
					onSwatchHover = _ref.onSwatchHover,
					colors = _ref.colors,
					hex = _ref.hex,
					circleSize = _ref.circleSize,
					_ref$styles = _ref.styles,
					passedStyles = void 0 === _ref$styles ? {} : _ref$styles,
					circleSpacing = _ref.circleSpacing,
					_ref$className = _ref.className,
					className = void 0 === _ref$className ? '' : _ref$className,
					styles = (0, lib.Ay)(
						lodash_es_merge(
							{ default: { card: { width, display: 'flex', flexWrap: 'wrap', marginRight: -circleSpacing, marginBottom: -circleSpacing } } },
							passedStyles
						)
					),
					handleChange = function handleChange(hexCode, e) {
						return onChange({ hex: hexCode, source: 'hex' }, e);
					};
				return compat_module.default.createElement(
					'div',
					{ style: styles.card, className: 'circle-picker ' + className },
					lodash_es_map(colors, function (c) {
						return compat_module.default.createElement(circle_CircleSwatch, {
							key: c,
							color: c,
							onClick: handleChange,
							onSwatchHover,
							active: hex === c.toLowerCase(),
							circleSize,
							circleSpacing,
						});
					})
				);
			};
			(Circle.propTypes = {
				width: prop_types_default().oneOfType([prop_types_default().string, prop_types_default().number]),
				circleSize: prop_types_default().number,
				circleSpacing: prop_types_default().number,
				styles: prop_types_default().object,
			}),
				(Circle.defaultProps = {
					width: 252,
					circleSize: 28,
					circleSpacing: 14,
					colors: [
						colors_es2015_red[500],
						pink[500],
						purple[500],
						deepPurple[500],
						indigo[500],
						blue[500],
						lightBlue[500],
						cyan[500],
						teal[500],
						green[500],
						lightGreen[500],
						lime[500],
						yellow[500],
						amber[500],
						orange[500],
						deepOrange[500],
						brown[500],
						blueGrey[500],
					],
					styles: {},
				});
			common_ColorWrap(Circle);
			const lodash_es_isUndefined = function isUndefined(value) {
				return void 0 === value;
			};
			var UnfoldMoreHorizontalIcon = __webpack_require__('../../node_modules/@icons/material/UnfoldMoreHorizontalIcon.js'),
				ChromeFields_createClass = (function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];
							(descriptor.enumerable = descriptor.enumerable || !1),
								(descriptor.configurable = !0),
								'value' in descriptor && (descriptor.writable = !0),
								Object.defineProperty(target, descriptor.key, descriptor);
						}
					}
					return function (Constructor, protoProps, staticProps) {
						return (
							protoProps && defineProperties(Constructor.prototype, protoProps),
							staticProps && defineProperties(Constructor, staticProps),
							Constructor
						);
					};
				})();
			var ChromeFields = (function (_React$Component) {
				function ChromeFields(props) {
					!(function ChromeFields_classCallCheck(instance, Constructor) {
						if (!(instance instanceof Constructor)) throw new TypeError('Cannot call a class as a function');
					})(this, ChromeFields);
					var _this = (function ChromeFields_possibleConstructorReturn(self, call) {
						if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !call || ('object' != typeof call && 'function' != typeof call) ? self : call;
					})(this, (ChromeFields.__proto__ || Object.getPrototypeOf(ChromeFields)).call(this));
					return (
						(_this.toggleViews = function () {
							'hex' === _this.state.view
								? _this.setState({ view: 'rgb' })
								: 'rgb' === _this.state.view
								? _this.setState({ view: 'hsl' })
								: 'hsl' === _this.state.view && (1 === _this.props.hsl.a ? _this.setState({ view: 'hex' }) : _this.setState({ view: 'rgb' }));
						}),
						(_this.handleChange = function (data, e) {
							data.hex
								? isValidHex(data.hex) && _this.props.onChange({ hex: data.hex, source: 'hex' }, e)
								: data.r || data.g || data.b
								? _this.props.onChange(
										{ r: data.r || _this.props.rgb.r, g: data.g || _this.props.rgb.g, b: data.b || _this.props.rgb.b, source: 'rgb' },
										e
								  )
								: data.a
								? (data.a < 0 ? (data.a = 0) : data.a > 1 && (data.a = 1),
								  _this.props.onChange(
										{ h: _this.props.hsl.h, s: _this.props.hsl.s, l: _this.props.hsl.l, a: Math.round(100 * data.a) / 100, source: 'rgb' },
										e
								  ))
								: (data.h || data.s || data.l) &&
								  ('string' == typeof data.s && data.s.includes('%') && (data.s = data.s.replace('%', '')),
								  'string' == typeof data.l && data.l.includes('%') && (data.l = data.l.replace('%', '')),
								  1 == data.s ? (data.s = 0.01) : 1 == data.l && (data.l = 0.01),
								  _this.props.onChange(
										{
											h: data.h || _this.props.hsl.h,
											s: Number(lodash_es_isUndefined(data.s) ? _this.props.hsl.s : data.s),
											l: Number(lodash_es_isUndefined(data.l) ? _this.props.hsl.l : data.l),
											source: 'hsl',
										},
										e
								  ));
						}),
						(_this.showHighlight = function (e) {
							e.currentTarget.style.background = '#eee';
						}),
						(_this.hideHighlight = function (e) {
							e.currentTarget.style.background = 'transparent';
						}),
						1 !== props.hsl.a && 'hex' === props.view ? (_this.state = { view: 'rgb' }) : (_this.state = { view: props.view }),
						_this
					);
				}
				return (
					(function ChromeFields_inherits(subClass, superClass) {
						if ('function' != typeof superClass && null !== superClass)
							throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
						(subClass.prototype = Object.create(superClass && superClass.prototype, {
							constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 },
						})),
							superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass));
					})(ChromeFields, _React$Component),
					ChromeFields_createClass(
						ChromeFields,
						[
							{
								key: 'render',
								value: function render() {
									var _this2 = this,
										styles = (0, lib.Ay)(
											{
												default: {
													wrap: { paddingTop: '16px', display: 'flex' },
													fields: { flex: '1', display: 'flex', marginLeft: '-6px' },
													field: { paddingLeft: '6px', width: '100%' },
													alpha: { paddingLeft: '6px', width: '100%' },
													toggle: { width: '32px', textAlign: 'right', position: 'relative' },
													icon: { marginRight: '-4px', marginTop: '12px', cursor: 'pointer', position: 'relative' },
													iconHighlight: {
														position: 'absolute',
														width: '24px',
														height: '28px',
														background: '#eee',
														borderRadius: '4px',
														top: '10px',
														left: '12px',
														display: 'none',
													},
													input: {
														fontSize: '11px',
														color: '#333',
														width: '100%',
														borderRadius: '2px',
														border: 'none',
														boxShadow: 'inset 0 0 0 1px #dadada',
														height: '21px',
														textAlign: 'center',
													},
													label: {
														textTransform: 'uppercase',
														fontSize: '11px',
														lineHeight: '11px',
														color: '#969696',
														textAlign: 'center',
														display: 'block',
														marginTop: '12px',
													},
													svg: { fill: '#333', width: '24px', height: '24px', border: '1px transparent solid', borderRadius: '5px' },
												},
												disableAlpha: { alpha: { display: 'none' } },
											},
											this.props,
											this.state
										),
										fields = void 0;
									return (
										'hex' === this.state.view
											? (fields = compat_module.default.createElement(
													'div',
													{ style: styles.fields, className: 'flexbox-fix' },
													compat_module.default.createElement(
														'div',
														{ style: styles.field },
														compat_module.default.createElement(common_EditableInput, {
															style: { input: styles.input, label: styles.label },
															label: 'hex',
															value: this.props.hex,
															onChange: this.handleChange,
														})
													)
											  ))
											: 'rgb' === this.state.view
											? (fields = compat_module.default.createElement(
													'div',
													{ style: styles.fields, className: 'flexbox-fix' },
													compat_module.default.createElement(
														'div',
														{ style: styles.field },
														compat_module.default.createElement(common_EditableInput, {
															style: { input: styles.input, label: styles.label },
															label: 'r',
															value: this.props.rgb.r,
															onChange: this.handleChange,
														})
													),
													compat_module.default.createElement(
														'div',
														{ style: styles.field },
														compat_module.default.createElement(common_EditableInput, {
															style: { input: styles.input, label: styles.label },
															label: 'g',
															value: this.props.rgb.g,
															onChange: this.handleChange,
														})
													),
													compat_module.default.createElement(
														'div',
														{ style: styles.field },
														compat_module.default.createElement(common_EditableInput, {
															style: { input: styles.input, label: styles.label },
															label: 'b',
															value: this.props.rgb.b,
															onChange: this.handleChange,
														})
													),
													compat_module.default.createElement(
														'div',
														{ style: styles.alpha },
														compat_module.default.createElement(common_EditableInput, {
															style: { input: styles.input, label: styles.label },
															label: 'a',
															value: this.props.rgb.a,
															arrowOffset: 0.01,
															onChange: this.handleChange,
														})
													)
											  ))
											: 'hsl' === this.state.view &&
											  (fields = compat_module.default.createElement(
													'div',
													{ style: styles.fields, className: 'flexbox-fix' },
													compat_module.default.createElement(
														'div',
														{ style: styles.field },
														compat_module.default.createElement(common_EditableInput, {
															style: { input: styles.input, label: styles.label },
															label: 'h',
															value: Math.round(this.props.hsl.h),
															onChange: this.handleChange,
														})
													),
													compat_module.default.createElement(
														'div',
														{ style: styles.field },
														compat_module.default.createElement(common_EditableInput, {
															style: { input: styles.input, label: styles.label },
															label: 's',
															value: Math.round(100 * this.props.hsl.s) + '%',
															onChange: this.handleChange,
														})
													),
													compat_module.default.createElement(
														'div',
														{ style: styles.field },
														compat_module.default.createElement(common_EditableInput, {
															style: { input: styles.input, label: styles.label },
															label: 'l',
															value: Math.round(100 * this.props.hsl.l) + '%',
															onChange: this.handleChange,
														})
													),
													compat_module.default.createElement(
														'div',
														{ style: styles.alpha },
														compat_module.default.createElement(common_EditableInput, {
															style: { input: styles.input, label: styles.label },
															label: 'a',
															value: this.props.hsl.a,
															arrowOffset: 0.01,
															onChange: this.handleChange,
														})
													)
											  )),
										compat_module.default.createElement(
											'div',
											{ style: styles.wrap, className: 'flexbox-fix' },
											fields,
											compat_module.default.createElement(
												'div',
												{ style: styles.toggle },
												compat_module.default.createElement(
													'div',
													{
														style: styles.icon,
														onClick: this.toggleViews,
														ref: function ref(icon) {
															return (_this2.icon = icon);
														},
													},
													compat_module.default.createElement(UnfoldMoreHorizontalIcon.A, {
														style: styles.svg,
														onMouseOver: this.showHighlight,
														onMouseEnter: this.showHighlight,
														onMouseOut: this.hideHighlight,
													})
												)
											)
										)
									);
								},
							},
						],
						[
							{
								key: 'getDerivedStateFromProps',
								value: function getDerivedStateFromProps(nextProps, state) {
									return 1 !== nextProps.hsl.a && 'hex' === state.view ? { view: 'rgb' } : null;
								},
							},
						]
					),
					ChromeFields
				);
			})(compat_module.default.Component);
			ChromeFields.defaultProps = { view: 'hex' };
			const chrome_ChromeFields = ChromeFields;
			const chrome_ChromePointer = function ChromePointer() {
				var styles = (0, lib.Ay)({
					default: {
						picker: {
							width: '12px',
							height: '12px',
							borderRadius: '6px',
							transform: 'translate(-6px, -1px)',
							backgroundColor: 'rgb(248, 248, 248)',
							boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
						},
					},
				});
				return compat_module.default.createElement('div', { style: styles.picker });
			};
			const chrome_ChromePointerCircle = function ChromePointerCircle() {
				var styles = (0, lib.Ay)({
					default: {
						picker: { width: '12px', height: '12px', borderRadius: '6px', boxShadow: 'inset 0 0 0 1px #fff', transform: 'translate(-6px, -6px)' },
					},
				});
				return compat_module.default.createElement('div', { style: styles.picker });
			};
			var Chrome = function Chrome(_ref) {
				var width = _ref.width,
					onChange = _ref.onChange,
					disableAlpha = _ref.disableAlpha,
					rgb = _ref.rgb,
					hsl = _ref.hsl,
					hsv = _ref.hsv,
					hex = _ref.hex,
					renderers = _ref.renderers,
					_ref$styles = _ref.styles,
					passedStyles = void 0 === _ref$styles ? {} : _ref$styles,
					_ref$className = _ref.className,
					className = void 0 === _ref$className ? '' : _ref$className,
					defaultView = _ref.defaultView,
					styles = (0, lib.Ay)(
						lodash_es_merge(
							{
								default: {
									picker: {
										width,
										background: '#fff',
										borderRadius: '2px',
										boxShadow: '0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)',
										boxSizing: 'initial',
										fontFamily: 'Menlo',
									},
									saturation: { width: '100%', paddingBottom: '55%', position: 'relative', borderRadius: '2px 2px 0 0', overflow: 'hidden' },
									Saturation: { radius: '2px 2px 0 0' },
									body: { padding: '16px 16px 12px' },
									controls: { display: 'flex' },
									color: { width: '32px' },
									swatch: { marginTop: '6px', width: '16px', height: '16px', borderRadius: '8px', position: 'relative', overflow: 'hidden' },
									active: {
										absolute: '0px 0px 0px 0px',
										borderRadius: '8px',
										boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
										background: 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', ' + rgb.a + ')',
										zIndex: '2',
									},
									toggles: { flex: '1' },
									hue: { height: '10px', position: 'relative', marginBottom: '8px' },
									Hue: { radius: '2px' },
									alpha: { height: '10px', position: 'relative' },
									Alpha: { radius: '2px' },
								},
								disableAlpha: {
									color: { width: '22px' },
									alpha: { display: 'none' },
									hue: { marginBottom: '0px' },
									swatch: { width: '10px', height: '10px', marginTop: '0px' },
								},
							},
							passedStyles
						),
						{ disableAlpha }
					);
				return compat_module.default.createElement(
					'div',
					{ style: styles.picker, className: 'chrome-picker ' + className },
					compat_module.default.createElement(
						'div',
						{ style: styles.saturation },
						compat_module.default.createElement(common_Saturation, {
							style: styles.Saturation,
							hsl,
							hsv,
							pointer: chrome_ChromePointerCircle,
							onChange,
						})
					),
					compat_module.default.createElement(
						'div',
						{ style: styles.body },
						compat_module.default.createElement(
							'div',
							{ style: styles.controls, className: 'flexbox-fix' },
							compat_module.default.createElement(
								'div',
								{ style: styles.color },
								compat_module.default.createElement(
									'div',
									{ style: styles.swatch },
									compat_module.default.createElement('div', { style: styles.active }),
									compat_module.default.createElement(common_Checkboard, { renderers })
								)
							),
							compat_module.default.createElement(
								'div',
								{ style: styles.toggles },
								compat_module.default.createElement(
									'div',
									{ style: styles.hue },
									compat_module.default.createElement(common_Hue, { style: styles.Hue, hsl, pointer: chrome_ChromePointer, onChange })
								),
								compat_module.default.createElement(
									'div',
									{ style: styles.alpha },
									compat_module.default.createElement(common_Alpha, {
										style: styles.Alpha,
										rgb,
										hsl,
										pointer: chrome_ChromePointer,
										renderers,
										onChange,
									})
								)
							)
						),
						compat_module.default.createElement(chrome_ChromeFields, { rgb, hsl, hex, view: defaultView, onChange, disableAlpha })
					)
				);
			};
			(Chrome.propTypes = {
				width: prop_types_default().oneOfType([prop_types_default().string, prop_types_default().number]),
				disableAlpha: prop_types_default().bool,
				styles: prop_types_default().object,
				defaultView: prop_types_default().oneOf(['hex', 'rgb', 'hsl']),
			}),
				(Chrome.defaultProps = { width: 225, disableAlpha: !1, styles: {} });
			const chrome_Chrome = common_ColorWrap(Chrome);
			const compact_CompactColor = function CompactColor(_ref) {
				var color = _ref.color,
					_ref$onClick = _ref.onClick,
					onClick = void 0 === _ref$onClick ? function () {} : _ref$onClick,
					onSwatchHover = _ref.onSwatchHover,
					active = _ref.active,
					styles = (0, lib.Ay)(
						{
							default: {
								color: {
									background: color,
									width: '15px',
									height: '15px',
									float: 'left',
									marginRight: '5px',
									marginBottom: '5px',
									position: 'relative',
									cursor: 'pointer',
								},
								dot: { absolute: '5px 5px 5px 5px', background: getContrastingColor(color), borderRadius: '50%', opacity: '0' },
							},
							active: { dot: { opacity: '1' } },
							'color-#FFFFFF': { color: { boxShadow: 'inset 0 0 0 1px #ddd' }, dot: { background: '#000' } },
							transparent: { dot: { background: '#000' } },
						},
						{ active, 'color-#FFFFFF': '#FFFFFF' === color, transparent: 'transparent' === color }
					);
				return compat_module.default.createElement(
					common_Swatch,
					{ style: styles.color, color, onClick, onHover: onSwatchHover, focusStyle: { boxShadow: '0 0 4px ' + color } },
					compat_module.default.createElement('div', { style: styles.dot })
				);
			};
			const compact_CompactFields = function CompactFields(_ref) {
				var hex = _ref.hex,
					rgb = _ref.rgb,
					onChange = _ref.onChange,
					styles = (0, lib.Ay)({
						default: {
							fields: { display: 'flex', paddingBottom: '6px', paddingRight: '5px', position: 'relative' },
							active: { position: 'absolute', top: '6px', left: '5px', height: '9px', width: '9px', background: hex },
							HEXwrap: { flex: '6', position: 'relative' },
							HEXinput: {
								width: '80%',
								padding: '0px',
								paddingLeft: '20%',
								border: 'none',
								outline: 'none',
								background: 'none',
								fontSize: '12px',
								color: '#333',
								height: '16px',
							},
							HEXlabel: { display: 'none' },
							RGBwrap: { flex: '3', position: 'relative' },
							RGBinput: {
								width: '70%',
								padding: '0px',
								paddingLeft: '30%',
								border: 'none',
								outline: 'none',
								background: 'none',
								fontSize: '12px',
								color: '#333',
								height: '16px',
							},
							RGBlabel: {
								position: 'absolute',
								top: '3px',
								left: '0px',
								lineHeight: '16px',
								textTransform: 'uppercase',
								fontSize: '12px',
								color: '#999',
							},
						},
					}),
					handleChange = function handleChange(data, e) {
						data.r || data.g || data.b
							? onChange({ r: data.r || rgb.r, g: data.g || rgb.g, b: data.b || rgb.b, source: 'rgb' }, e)
							: onChange({ hex: data.hex, source: 'hex' }, e);
					};
				return compat_module.default.createElement(
					'div',
					{ style: styles.fields, className: 'flexbox-fix' },
					compat_module.default.createElement('div', { style: styles.active }),
					compat_module.default.createElement(common_EditableInput, {
						style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
						label: 'hex',
						value: hex,
						onChange: handleChange,
					}),
					compat_module.default.createElement(common_EditableInput, {
						style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
						label: 'r',
						value: rgb.r,
						onChange: handleChange,
					}),
					compat_module.default.createElement(common_EditableInput, {
						style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
						label: 'g',
						value: rgb.g,
						onChange: handleChange,
					}),
					compat_module.default.createElement(common_EditableInput, {
						style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
						label: 'b',
						value: rgb.b,
						onChange: handleChange,
					})
				);
			};
			var Compact = function Compact(_ref) {
				var onChange = _ref.onChange,
					onSwatchHover = _ref.onSwatchHover,
					colors = _ref.colors,
					hex = _ref.hex,
					rgb = _ref.rgb,
					_ref$styles = _ref.styles,
					passedStyles = void 0 === _ref$styles ? {} : _ref$styles,
					_ref$className = _ref.className,
					className = void 0 === _ref$className ? '' : _ref$className,
					styles = (0, lib.Ay)(
						lodash_es_merge(
							{
								default: {
									Compact: { background: '#f6f6f6', radius: '4px' },
									compact: { paddingTop: '5px', paddingLeft: '5px', boxSizing: 'initial', width: '240px' },
									clear: { clear: 'both' },
								},
							},
							passedStyles
						)
					),
					handleChange = function handleChange(data, e) {
						data.hex ? isValidHex(data.hex) && onChange({ hex: data.hex, source: 'hex' }, e) : onChange(data, e);
					};
				return compat_module.default.createElement(
					common_Raised,
					{ style: styles.Compact, styles: passedStyles },
					compat_module.default.createElement(
						'div',
						{ style: styles.compact, className: 'compact-picker ' + className },
						compat_module.default.createElement(
							'div',
							null,
							lodash_es_map(colors, function (c) {
								return compat_module.default.createElement(compact_CompactColor, {
									key: c,
									color: c,
									active: c.toLowerCase() === hex,
									onClick: handleChange,
									onSwatchHover,
								});
							}),
							compat_module.default.createElement('div', { style: styles.clear })
						),
						compat_module.default.createElement(compact_CompactFields, { hex, rgb, onChange: handleChange })
					)
				);
			};
			(Compact.propTypes = { colors: prop_types_default().arrayOf(prop_types_default().string), styles: prop_types_default().object }),
				(Compact.defaultProps = {
					colors: [
						'#4D4D4D',
						'#999999',
						'#FFFFFF',
						'#F44E3B',
						'#FE9200',
						'#FCDC00',
						'#DBDF00',
						'#A4DD00',
						'#68CCCA',
						'#73D8FF',
						'#AEA1FF',
						'#FDA1FF',
						'#333333',
						'#808080',
						'#cccccc',
						'#D33115',
						'#E27300',
						'#FCC400',
						'#B0BC00',
						'#68BC00',
						'#16A5A5',
						'#009CE0',
						'#7B64FF',
						'#FA28FF',
						'#000000',
						'#666666',
						'#B3B3B3',
						'#9F0500',
						'#C45100',
						'#FB9E00',
						'#808900',
						'#194D33',
						'#0C797D',
						'#0062B1',
						'#653294',
						'#AB149E',
					],
					styles: {},
				});
			common_ColorWrap(Compact);
			const github_GithubSwatch = (0, lib.H8)(function GithubSwatch(_ref) {
				var hover = _ref.hover,
					color = _ref.color,
					onClick = _ref.onClick,
					onSwatchHover = _ref.onSwatchHover,
					hoverSwatch = { position: 'relative', zIndex: '2', outline: '2px solid #fff', boxShadow: '0 0 5px 2px rgba(0,0,0,0.25)' },
					styles = (0, lib.Ay)({ default: { swatch: { width: '25px', height: '25px', fontSize: '0' } }, hover: { swatch: hoverSwatch } }, { hover });
				return compat_module.default.createElement(
					'div',
					{ style: styles.swatch },
					compat_module.default.createElement(common_Swatch, { color, onClick, onHover: onSwatchHover, focusStyle: hoverSwatch })
				);
			});
			var Github = function Github(_ref) {
				var width = _ref.width,
					colors = _ref.colors,
					onChange = _ref.onChange,
					onSwatchHover = _ref.onSwatchHover,
					triangle = _ref.triangle,
					_ref$styles = _ref.styles,
					passedStyles = void 0 === _ref$styles ? {} : _ref$styles,
					_ref$className = _ref.className,
					className = void 0 === _ref$className ? '' : _ref$className,
					styles = (0, lib.Ay)(
						lodash_es_merge(
							{
								default: {
									card: {
										width,
										background: '#fff',
										border: '1px solid rgba(0,0,0,0.2)',
										boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
										borderRadius: '4px',
										position: 'relative',
										padding: '5px',
										display: 'flex',
										flexWrap: 'wrap',
									},
									triangle: { position: 'absolute', border: '7px solid transparent', borderBottomColor: '#fff' },
									triangleShadow: { position: 'absolute', border: '8px solid transparent', borderBottomColor: 'rgba(0,0,0,0.15)' },
								},
								'hide-triangle': { triangle: { display: 'none' }, triangleShadow: { display: 'none' } },
								'top-left-triangle': { triangle: { top: '-14px', left: '10px' }, triangleShadow: { top: '-16px', left: '9px' } },
								'top-right-triangle': { triangle: { top: '-14px', right: '10px' }, triangleShadow: { top: '-16px', right: '9px' } },
								'bottom-left-triangle': {
									triangle: { top: '35px', left: '10px', transform: 'rotate(180deg)' },
									triangleShadow: { top: '37px', left: '9px', transform: 'rotate(180deg)' },
								},
								'bottom-right-triangle': {
									triangle: { top: '35px', right: '10px', transform: 'rotate(180deg)' },
									triangleShadow: { top: '37px', right: '9px', transform: 'rotate(180deg)' },
								},
							},
							passedStyles
						),
						{
							'hide-triangle': 'hide' === triangle,
							'top-left-triangle': 'top-left' === triangle,
							'top-right-triangle': 'top-right' === triangle,
							'bottom-left-triangle': 'bottom-left' === triangle,
							'bottom-right-triangle': 'bottom-right' === triangle,
						}
					),
					handleChange = function handleChange(hex, e) {
						return onChange({ hex, source: 'hex' }, e);
					};
				return compat_module.default.createElement(
					'div',
					{ style: styles.card, className: 'github-picker ' + className },
					compat_module.default.createElement('div', { style: styles.triangleShadow }),
					compat_module.default.createElement('div', { style: styles.triangle }),
					lodash_es_map(colors, function (c) {
						return compat_module.default.createElement(github_GithubSwatch, { color: c, key: c, onClick: handleChange, onSwatchHover });
					})
				);
			};
			(Github.propTypes = {
				width: prop_types_default().oneOfType([prop_types_default().string, prop_types_default().number]),
				colors: prop_types_default().arrayOf(prop_types_default().string),
				triangle: prop_types_default().oneOf(['hide', 'top-left', 'top-right', 'bottom-left', 'bottom-right']),
				styles: prop_types_default().object,
			}),
				(Github.defaultProps = {
					width: 200,
					colors: [
						'#B80000',
						'#DB3E00',
						'#FCCB00',
						'#008B02',
						'#006B76',
						'#1273DE',
						'#004DCF',
						'#5300EB',
						'#EB9694',
						'#FAD0C3',
						'#FEF3BD',
						'#C1E1C5',
						'#BEDADC',
						'#C4DEF6',
						'#BED3F3',
						'#D4C4FB',
					],
					triangle: 'top-left',
					styles: {},
				});
			common_ColorWrap(Github);
			const HuePointer = function SliderPointer(_ref) {
				var direction = _ref.direction,
					styles = (0, lib.Ay)(
						{
							default: {
								picker: {
									width: '18px',
									height: '18px',
									borderRadius: '50%',
									transform: 'translate(-9px, -1px)',
									backgroundColor: 'rgb(248, 248, 248)',
									boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
								},
							},
							vertical: { picker: { transform: 'translate(-3px, -9px)' } },
						},
						{ vertical: 'vertical' === direction }
					);
				return compat_module.default.createElement('div', { style: styles.picker });
			};
			var Hue_extends =
					Object.assign ||
					function (target) {
						for (var i = 1; i < arguments.length; i++) {
							var source = arguments[i];
							for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
						}
						return target;
					},
				HuePicker = function HuePicker(_ref) {
					var width = _ref.width,
						height = _ref.height,
						onChange = _ref.onChange,
						hsl = _ref.hsl,
						direction = _ref.direction,
						pointer = _ref.pointer,
						_ref$styles = _ref.styles,
						passedStyles = void 0 === _ref$styles ? {} : _ref$styles,
						_ref$className = _ref.className,
						className = void 0 === _ref$className ? '' : _ref$className,
						styles = (0, lib.Ay)(
							lodash_es_merge({ default: { picker: { position: 'relative', width, height }, hue: { radius: '2px' } } }, passedStyles)
						);
					return compat_module.default.createElement(
						'div',
						{ style: styles.picker, className: 'hue-picker ' + className },
						compat_module.default.createElement(
							common_Hue,
							Hue_extends({}, styles.hue, {
								hsl,
								pointer,
								onChange: function handleChange(data) {
									return onChange({ a: 1, h: data.h, l: 0.5, s: 1 });
								},
								direction,
							})
						)
					);
				};
			(HuePicker.propTypes = { styles: prop_types_default().object }),
				(HuePicker.defaultProps = { width: '316px', height: '16px', direction: 'horizontal', pointer: HuePointer, styles: {} });
			common_ColorWrap(HuePicker);
			common_ColorWrap(function Material(_ref) {
				var onChange = _ref.onChange,
					hex = _ref.hex,
					rgb = _ref.rgb,
					_ref$styles = _ref.styles,
					passedStyles = void 0 === _ref$styles ? {} : _ref$styles,
					_ref$className = _ref.className,
					className = void 0 === _ref$className ? '' : _ref$className,
					styles = (0, lib.Ay)(
						lodash_es_merge(
							{
								default: {
									material: { width: '98px', height: '98px', padding: '16px', fontFamily: 'Roboto' },
									HEXwrap: { position: 'relative' },
									HEXinput: {
										width: '100%',
										marginTop: '12px',
										fontSize: '15px',
										color: '#333',
										padding: '0px',
										border: '0px',
										borderBottom: '2px solid ' + hex,
										outline: 'none',
										height: '30px',
									},
									HEXlabel: { position: 'absolute', top: '0px', left: '0px', fontSize: '11px', color: '#999999', textTransform: 'capitalize' },
									Hex: { style: {} },
									RGBwrap: { position: 'relative' },
									RGBinput: {
										width: '100%',
										marginTop: '12px',
										fontSize: '15px',
										color: '#333',
										padding: '0px',
										border: '0px',
										borderBottom: '1px solid #eee',
										outline: 'none',
										height: '30px',
									},
									RGBlabel: { position: 'absolute', top: '0px', left: '0px', fontSize: '11px', color: '#999999', textTransform: 'capitalize' },
									split: { display: 'flex', marginRight: '-10px', paddingTop: '11px' },
									third: { flex: '1', paddingRight: '10px' },
								},
							},
							passedStyles
						)
					),
					handleChange = function handleChange(data, e) {
						data.hex
							? isValidHex(data.hex) && onChange({ hex: data.hex, source: 'hex' }, e)
							: (data.r || data.g || data.b) && onChange({ r: data.r || rgb.r, g: data.g || rgb.g, b: data.b || rgb.b, source: 'rgb' }, e);
					};
				return compat_module.default.createElement(
					common_Raised,
					{ styles: passedStyles },
					compat_module.default.createElement(
						'div',
						{ style: styles.material, className: 'material-picker ' + className },
						compat_module.default.createElement(common_EditableInput, {
							style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
							label: 'hex',
							value: hex,
							onChange: handleChange,
						}),
						compat_module.default.createElement(
							'div',
							{ style: styles.split, className: 'flexbox-fix' },
							compat_module.default.createElement(
								'div',
								{ style: styles.third },
								compat_module.default.createElement(common_EditableInput, {
									style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
									label: 'r',
									value: rgb.r,
									onChange: handleChange,
								})
							),
							compat_module.default.createElement(
								'div',
								{ style: styles.third },
								compat_module.default.createElement(common_EditableInput, {
									style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
									label: 'g',
									value: rgb.g,
									onChange: handleChange,
								})
							),
							compat_module.default.createElement(
								'div',
								{ style: styles.third },
								compat_module.default.createElement(common_EditableInput, {
									style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
									label: 'b',
									value: rgb.b,
									onChange: handleChange,
								})
							)
						)
					)
				);
			});
			const PhotoshopFields = function PhotoshopPicker(_ref) {
				var onChange = _ref.onChange,
					rgb = _ref.rgb,
					hsv = _ref.hsv,
					hex = _ref.hex,
					styles = (0, lib.Ay)({
						default: {
							fields: { paddingTop: '5px', paddingBottom: '9px', width: '80px', position: 'relative' },
							divider: { height: '5px' },
							RGBwrap: { position: 'relative' },
							RGBinput: {
								marginLeft: '40%',
								width: '40%',
								height: '18px',
								border: '1px solid #888888',
								boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
								marginBottom: '5px',
								fontSize: '13px',
								paddingLeft: '3px',
								marginRight: '10px',
							},
							RGBlabel: {
								left: '0px',
								top: '0px',
								width: '34px',
								textTransform: 'uppercase',
								fontSize: '13px',
								height: '18px',
								lineHeight: '22px',
								position: 'absolute',
							},
							HEXwrap: { position: 'relative' },
							HEXinput: {
								marginLeft: '20%',
								width: '80%',
								height: '18px',
								border: '1px solid #888888',
								boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
								marginBottom: '6px',
								fontSize: '13px',
								paddingLeft: '3px',
							},
							HEXlabel: {
								position: 'absolute',
								top: '0px',
								left: '0px',
								width: '14px',
								textTransform: 'uppercase',
								fontSize: '13px',
								height: '18px',
								lineHeight: '22px',
							},
							fieldSymbols: { position: 'absolute', top: '5px', right: '-7px', fontSize: '13px' },
							symbol: { height: '20px', lineHeight: '22px', paddingBottom: '7px' },
						},
					}),
					handleChange = function handleChange(data, e) {
						data['#']
							? isValidHex(data['#']) && onChange({ hex: data['#'], source: 'hex' }, e)
							: data.r || data.g || data.b
							? onChange({ r: data.r || rgb.r, g: data.g || rgb.g, b: data.b || rgb.b, source: 'rgb' }, e)
							: (data.h || data.s || data.v) && onChange({ h: data.h || hsv.h, s: data.s || hsv.s, v: data.v || hsv.v, source: 'hsv' }, e);
					};
				return compat_module.default.createElement(
					'div',
					{ style: styles.fields },
					compat_module.default.createElement(common_EditableInput, {
						style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
						label: 'h',
						value: Math.round(hsv.h),
						onChange: handleChange,
					}),
					compat_module.default.createElement(common_EditableInput, {
						style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
						label: 's',
						value: Math.round(100 * hsv.s),
						onChange: handleChange,
					}),
					compat_module.default.createElement(common_EditableInput, {
						style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
						label: 'v',
						value: Math.round(100 * hsv.v),
						onChange: handleChange,
					}),
					compat_module.default.createElement('div', { style: styles.divider }),
					compat_module.default.createElement(common_EditableInput, {
						style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
						label: 'r',
						value: rgb.r,
						onChange: handleChange,
					}),
					compat_module.default.createElement(common_EditableInput, {
						style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
						label: 'g',
						value: rgb.g,
						onChange: handleChange,
					}),
					compat_module.default.createElement(common_EditableInput, {
						style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
						label: 'b',
						value: rgb.b,
						onChange: handleChange,
					}),
					compat_module.default.createElement('div', { style: styles.divider }),
					compat_module.default.createElement(common_EditableInput, {
						style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
						label: '#',
						value: hex.replace('#', ''),
						onChange: handleChange,
					}),
					compat_module.default.createElement(
						'div',
						{ style: styles.fieldSymbols },
						compat_module.default.createElement('div', { style: styles.symbol }, '°'),
						compat_module.default.createElement('div', { style: styles.symbol }, '%'),
						compat_module.default.createElement('div', { style: styles.symbol }, '%')
					)
				);
			};
			const photoshop_PhotoshopPointerCircle = function PhotoshopPointerCircle(_ref) {
				var hsl = _ref.hsl,
					styles = (0, lib.Ay)(
						{
							default: {
								picker: { width: '12px', height: '12px', borderRadius: '6px', boxShadow: 'inset 0 0 0 1px #fff', transform: 'translate(-6px, -6px)' },
							},
							'black-outline': { picker: { boxShadow: 'inset 0 0 0 1px #000' } },
						},
						{ 'black-outline': hsl.l > 0.5 }
					);
				return compat_module.default.createElement('div', { style: styles.picker });
			};
			const PhotoshopPointer = function PhotoshopPointerCircle() {
				var styles = (0, lib.Ay)({
					default: {
						triangle: {
							width: 0,
							height: 0,
							borderStyle: 'solid',
							borderWidth: '4px 0 4px 6px',
							borderColor: 'transparent transparent transparent #fff',
							position: 'absolute',
							top: '1px',
							left: '1px',
						},
						triangleBorder: {
							width: 0,
							height: 0,
							borderStyle: 'solid',
							borderWidth: '5px 0 5px 8px',
							borderColor: 'transparent transparent transparent #555',
						},
						left: { Extend: 'triangleBorder', transform: 'translate(-13px, -4px)' },
						leftInside: { Extend: 'triangle', transform: 'translate(-8px, -5px)' },
						right: { Extend: 'triangleBorder', transform: 'translate(20px, -14px) rotate(180deg)' },
						rightInside: { Extend: 'triangle', transform: 'translate(-8px, -5px)' },
					},
				});
				return compat_module.default.createElement(
					'div',
					{ style: styles.pointer },
					compat_module.default.createElement(
						'div',
						{ style: styles.left },
						compat_module.default.createElement('div', { style: styles.leftInside })
					),
					compat_module.default.createElement(
						'div',
						{ style: styles.right },
						compat_module.default.createElement('div', { style: styles.rightInside })
					)
				);
			};
			const photoshop_PhotoshopButton = function PhotoshopButton(_ref) {
				var onClick = _ref.onClick,
					label = _ref.label,
					children = _ref.children,
					active = _ref.active,
					styles = (0, lib.Ay)(
						{
							default: {
								button: {
									backgroundImage: 'linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)',
									border: '1px solid #878787',
									borderRadius: '2px',
									height: '20px',
									boxShadow: '0 1px 0 0 #EAEAEA',
									fontSize: '14px',
									color: '#000',
									lineHeight: '20px',
									textAlign: 'center',
									marginBottom: '10px',
									cursor: 'pointer',
								},
							},
							active: { button: { boxShadow: '0 0 0 1px #878787' } },
						},
						{ active }
					);
				return compat_module.default.createElement('div', { style: styles.button, onClick }, label || children);
			};
			const photoshop_PhotoshopPreviews = function PhotoshopPreviews(_ref) {
				var rgb = _ref.rgb,
					currentColor = _ref.currentColor,
					styles = (0, lib.Ay)({
						default: {
							swatches: { border: '1px solid #B3B3B3', borderBottom: '1px solid #F0F0F0', marginBottom: '2px', marginTop: '1px' },
							new: {
								height: '34px',
								background: 'rgb(' + rgb.r + ',' + rgb.g + ', ' + rgb.b + ')',
								boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000',
							},
							current: { height: '34px', background: currentColor, boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000' },
							label: { fontSize: '14px', color: '#000', textAlign: 'center' },
						},
					});
				return compat_module.default.createElement(
					'div',
					null,
					compat_module.default.createElement('div', { style: styles.label }, 'new'),
					compat_module.default.createElement(
						'div',
						{ style: styles.swatches },
						compat_module.default.createElement('div', { style: styles.new }),
						compat_module.default.createElement('div', { style: styles.current })
					),
					compat_module.default.createElement('div', { style: styles.label }, 'current')
				);
			};
			var Photoshop_createClass = (function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						(descriptor.enumerable = descriptor.enumerable || !1),
							(descriptor.configurable = !0),
							'value' in descriptor && (descriptor.writable = !0),
							Object.defineProperty(target, descriptor.key, descriptor);
					}
				}
				return function (Constructor, protoProps, staticProps) {
					return (
						protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
					);
				};
			})();
			var Photoshop = (function (_React$Component) {
				function Photoshop(props) {
					!(function Photoshop_classCallCheck(instance, Constructor) {
						if (!(instance instanceof Constructor)) throw new TypeError('Cannot call a class as a function');
					})(this, Photoshop);
					var _this = (function Photoshop_possibleConstructorReturn(self, call) {
						if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !call || ('object' != typeof call && 'function' != typeof call) ? self : call;
					})(this, (Photoshop.__proto__ || Object.getPrototypeOf(Photoshop)).call(this));
					return (_this.state = { currentColor: props.hex }), _this;
				}
				return (
					(function Photoshop_inherits(subClass, superClass) {
						if ('function' != typeof superClass && null !== superClass)
							throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
						(subClass.prototype = Object.create(superClass && superClass.prototype, {
							constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 },
						})),
							superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass));
					})(Photoshop, _React$Component),
					Photoshop_createClass(Photoshop, [
						{
							key: 'render',
							value: function render() {
								var _props = this.props,
									_props$styles = _props.styles,
									passedStyles = void 0 === _props$styles ? {} : _props$styles,
									_props$className = _props.className,
									className = void 0 === _props$className ? '' : _props$className,
									styles = (0, lib.Ay)(
										lodash_es_merge(
											{
												default: {
													picker: {
														background: '#DCDCDC',
														borderRadius: '4px',
														boxShadow: '0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)',
														boxSizing: 'initial',
														width: '513px',
													},
													head: {
														backgroundImage: 'linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)',
														borderBottom: '1px solid #B1B1B1',
														boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)',
														height: '23px',
														lineHeight: '24px',
														borderRadius: '4px 4px 0 0',
														fontSize: '13px',
														color: '#4D4D4D',
														textAlign: 'center',
													},
													body: { padding: '15px 15px 0', display: 'flex' },
													saturation: {
														width: '256px',
														height: '256px',
														position: 'relative',
														border: '2px solid #B3B3B3',
														borderBottom: '2px solid #F0F0F0',
														overflow: 'hidden',
													},
													hue: {
														position: 'relative',
														height: '256px',
														width: '19px',
														marginLeft: '10px',
														border: '2px solid #B3B3B3',
														borderBottom: '2px solid #F0F0F0',
													},
													controls: { width: '180px', marginLeft: '10px' },
													top: { display: 'flex' },
													previews: { width: '60px' },
													actions: { flex: '1', marginLeft: '20px' },
												},
											},
											passedStyles
										)
									);
								return compat_module.default.createElement(
									'div',
									{ style: styles.picker, className: 'photoshop-picker ' + className },
									compat_module.default.createElement('div', { style: styles.head }, this.props.header),
									compat_module.default.createElement(
										'div',
										{ style: styles.body, className: 'flexbox-fix' },
										compat_module.default.createElement(
											'div',
											{ style: styles.saturation },
											compat_module.default.createElement(common_Saturation, {
												hsl: this.props.hsl,
												hsv: this.props.hsv,
												pointer: photoshop_PhotoshopPointerCircle,
												onChange: this.props.onChange,
											})
										),
										compat_module.default.createElement(
											'div',
											{ style: styles.hue },
											compat_module.default.createElement(common_Hue, {
												direction: 'vertical',
												hsl: this.props.hsl,
												pointer: PhotoshopPointer,
												onChange: this.props.onChange,
											})
										),
										compat_module.default.createElement(
											'div',
											{ style: styles.controls },
											compat_module.default.createElement(
												'div',
												{ style: styles.top, className: 'flexbox-fix' },
												compat_module.default.createElement(
													'div',
													{ style: styles.previews },
													compat_module.default.createElement(photoshop_PhotoshopPreviews, {
														rgb: this.props.rgb,
														currentColor: this.state.currentColor,
													})
												),
												compat_module.default.createElement(
													'div',
													{ style: styles.actions },
													compat_module.default.createElement(photoshop_PhotoshopButton, { label: 'OK', onClick: this.props.onAccept, active: !0 }),
													compat_module.default.createElement(photoshop_PhotoshopButton, { label: 'Cancel', onClick: this.props.onCancel }),
													compat_module.default.createElement(PhotoshopFields, {
														onChange: this.props.onChange,
														rgb: this.props.rgb,
														hsv: this.props.hsv,
														hex: this.props.hex,
													})
												)
											)
										)
									)
								);
							},
						},
					]),
					Photoshop
				);
			})(compat_module.default.Component);
			(Photoshop.propTypes = { header: prop_types_default().string, styles: prop_types_default().object }),
				(Photoshop.defaultProps = { header: 'Color Picker', styles: {} });
			common_ColorWrap(Photoshop);
			const sketch_SketchFields = function SketchFields(_ref) {
				var onChange = _ref.onChange,
					rgb = _ref.rgb,
					hsl = _ref.hsl,
					hex = _ref.hex,
					disableAlpha = _ref.disableAlpha,
					styles = (0, lib.Ay)(
						{
							default: {
								fields: { display: 'flex', paddingTop: '4px' },
								single: { flex: '1', paddingLeft: '6px' },
								alpha: { flex: '1', paddingLeft: '6px' },
								double: { flex: '2' },
								input: { width: '80%', padding: '4px 10% 3px', border: 'none', boxShadow: 'inset 0 0 0 1px #ccc', fontSize: '11px' },
								label: {
									display: 'block',
									textAlign: 'center',
									fontSize: '11px',
									color: '#222',
									paddingTop: '3px',
									paddingBottom: '4px',
									textTransform: 'capitalize',
								},
							},
							disableAlpha: { alpha: { display: 'none' } },
						},
						{ disableAlpha }
					),
					handleChange = function handleChange(data, e) {
						data.hex
							? isValidHex(data.hex) && onChange({ hex: data.hex, source: 'hex' }, e)
							: data.r || data.g || data.b
							? onChange({ r: data.r || rgb.r, g: data.g || rgb.g, b: data.b || rgb.b, a: rgb.a, source: 'rgb' }, e)
							: data.a &&
							  (data.a < 0 ? (data.a = 0) : data.a > 100 && (data.a = 100),
							  (data.a /= 100),
							  onChange({ h: hsl.h, s: hsl.s, l: hsl.l, a: data.a, source: 'rgb' }, e));
					};
				return compat_module.default.createElement(
					'div',
					{ style: styles.fields, className: 'flexbox-fix' },
					compat_module.default.createElement(
						'div',
						{ style: styles.double },
						compat_module.default.createElement(common_EditableInput, {
							style: { input: styles.input, label: styles.label },
							label: 'hex',
							value: hex.replace('#', ''),
							onChange: handleChange,
						})
					),
					compat_module.default.createElement(
						'div',
						{ style: styles.single },
						compat_module.default.createElement(common_EditableInput, {
							style: { input: styles.input, label: styles.label },
							label: 'r',
							value: rgb.r,
							onChange: handleChange,
							dragLabel: 'true',
							dragMax: '255',
						})
					),
					compat_module.default.createElement(
						'div',
						{ style: styles.single },
						compat_module.default.createElement(common_EditableInput, {
							style: { input: styles.input, label: styles.label },
							label: 'g',
							value: rgb.g,
							onChange: handleChange,
							dragLabel: 'true',
							dragMax: '255',
						})
					),
					compat_module.default.createElement(
						'div',
						{ style: styles.single },
						compat_module.default.createElement(common_EditableInput, {
							style: { input: styles.input, label: styles.label },
							label: 'b',
							value: rgb.b,
							onChange: handleChange,
							dragLabel: 'true',
							dragMax: '255',
						})
					),
					compat_module.default.createElement(
						'div',
						{ style: styles.alpha },
						compat_module.default.createElement(common_EditableInput, {
							style: { input: styles.input, label: styles.label },
							label: 'a',
							value: Math.round(100 * rgb.a),
							onChange: handleChange,
							dragLabel: 'true',
							dragMax: '100',
						})
					)
				);
			};
			var SketchPresetColors_extends =
					Object.assign ||
					function (target) {
						for (var i = 1; i < arguments.length; i++) {
							var source = arguments[i];
							for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
						}
						return target;
					},
				SketchPresetColors = function SketchPresetColors(_ref) {
					var colors = _ref.colors,
						_ref$onClick = _ref.onClick,
						onClick = void 0 === _ref$onClick ? function () {} : _ref$onClick,
						onSwatchHover = _ref.onSwatchHover,
						styles = (0, lib.Ay)(
							{
								default: {
									colors: {
										margin: '0 -10px',
										padding: '10px 0 0 10px',
										borderTop: '1px solid #eee',
										display: 'flex',
										flexWrap: 'wrap',
										position: 'relative',
									},
									swatchWrap: { width: '16px', height: '16px', margin: '0 10px 10px 0' },
									swatch: { borderRadius: '3px', boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)' },
								},
								'no-presets': { colors: { display: 'none' } },
							},
							{ 'no-presets': !colors || !colors.length }
						),
						handleClick = function handleClick(hex, e) {
							onClick({ hex, source: 'hex' }, e);
						};
					return compat_module.default.createElement(
						'div',
						{ style: styles.colors, className: 'flexbox-fix' },
						colors.map(function (colorObjOrString) {
							var c = 'string' == typeof colorObjOrString ? { color: colorObjOrString } : colorObjOrString,
								key = '' + c.color + (c.title || '');
							return compat_module.default.createElement(
								'div',
								{ key, style: styles.swatchWrap },
								compat_module.default.createElement(
									common_Swatch,
									SketchPresetColors_extends({}, c, {
										style: styles.swatch,
										onClick: handleClick,
										onHover: onSwatchHover,
										focusStyle: { boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ' + c.color },
									})
								)
							);
						})
					);
				};
			SketchPresetColors.propTypes = {
				colors: prop_types_default().arrayOf(
					prop_types_default().oneOfType([
						prop_types_default().string,
						prop_types_default().shape({ color: prop_types_default().string, title: prop_types_default().string }),
					])
				).isRequired,
			};
			const sketch_SketchPresetColors = SketchPresetColors;
			var Sketch_extends =
					Object.assign ||
					function (target) {
						for (var i = 1; i < arguments.length; i++) {
							var source = arguments[i];
							for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
						}
						return target;
					},
				Sketch = function Sketch(_ref) {
					var width = _ref.width,
						rgb = _ref.rgb,
						hex = _ref.hex,
						hsv = _ref.hsv,
						hsl = _ref.hsl,
						onChange = _ref.onChange,
						onSwatchHover = _ref.onSwatchHover,
						disableAlpha = _ref.disableAlpha,
						presetColors = _ref.presetColors,
						renderers = _ref.renderers,
						_ref$styles = _ref.styles,
						passedStyles = void 0 === _ref$styles ? {} : _ref$styles,
						_ref$className = _ref.className,
						className = void 0 === _ref$className ? '' : _ref$className,
						styles = (0, lib.Ay)(
							lodash_es_merge(
								{
									default: Sketch_extends(
										{
											picker: {
												width,
												padding: '10px 10px 0',
												boxSizing: 'initial',
												background: '#fff',
												borderRadius: '4px',
												boxShadow: '0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)',
											},
											saturation: { width: '100%', paddingBottom: '75%', position: 'relative', overflow: 'hidden' },
											Saturation: { radius: '3px', shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)' },
											controls: { display: 'flex' },
											sliders: { padding: '4px 0', flex: '1' },
											color: { width: '24px', height: '24px', position: 'relative', marginTop: '4px', marginLeft: '4px', borderRadius: '3px' },
											activeColor: {
												absolute: '0px 0px 0px 0px',
												borderRadius: '2px',
												background: 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + rgb.a + ')',
												boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
											},
											hue: { position: 'relative', height: '10px', overflow: 'hidden' },
											Hue: { radius: '2px', shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)' },
											alpha: { position: 'relative', height: '10px', marginTop: '4px', overflow: 'hidden' },
											Alpha: { radius: '2px', shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)' },
										},
										passedStyles
									),
									disableAlpha: { color: { height: '10px' }, hue: { height: '10px' }, alpha: { display: 'none' } },
								},
								passedStyles
							),
							{ disableAlpha }
						);
					return compat_module.default.createElement(
						'div',
						{ style: styles.picker, className: 'sketch-picker ' + className },
						compat_module.default.createElement(
							'div',
							{ style: styles.saturation },
							compat_module.default.createElement(common_Saturation, { style: styles.Saturation, hsl, hsv, onChange })
						),
						compat_module.default.createElement(
							'div',
							{ style: styles.controls, className: 'flexbox-fix' },
							compat_module.default.createElement(
								'div',
								{ style: styles.sliders },
								compat_module.default.createElement(
									'div',
									{ style: styles.hue },
									compat_module.default.createElement(common_Hue, { style: styles.Hue, hsl, onChange })
								),
								compat_module.default.createElement(
									'div',
									{ style: styles.alpha },
									compat_module.default.createElement(common_Alpha, { style: styles.Alpha, rgb, hsl, renderers, onChange })
								)
							),
							compat_module.default.createElement(
								'div',
								{ style: styles.color },
								compat_module.default.createElement(common_Checkboard, null),
								compat_module.default.createElement('div', { style: styles.activeColor })
							)
						),
						compat_module.default.createElement(sketch_SketchFields, { rgb, hsl, hex, onChange, disableAlpha }),
						compat_module.default.createElement(sketch_SketchPresetColors, { colors: presetColors, onClick: onChange, onSwatchHover })
					);
				};
			(Sketch.propTypes = {
				disableAlpha: prop_types_default().bool,
				width: prop_types_default().oneOfType([prop_types_default().string, prop_types_default().number]),
				styles: prop_types_default().object,
			}),
				(Sketch.defaultProps = {
					disableAlpha: !1,
					width: 200,
					styles: {},
					presetColors: [
						'#D0021B',
						'#F5A623',
						'#F8E71C',
						'#8B572A',
						'#7ED321',
						'#417505',
						'#BD10E0',
						'#9013FE',
						'#4A90E2',
						'#50E3C2',
						'#B8E986',
						'#000000',
						'#4A4A4A',
						'#9B9B9B',
						'#FFFFFF',
					],
				});
			common_ColorWrap(Sketch);
			const slider_SliderSwatch = function SliderSwatch(_ref) {
				var hsl = _ref.hsl,
					offset = _ref.offset,
					_ref$onClick = _ref.onClick,
					onClick = void 0 === _ref$onClick ? function () {} : _ref$onClick,
					active = _ref.active,
					first = _ref.first,
					last = _ref.last,
					styles = (0, lib.Ay)(
						{
							default: { swatch: { height: '12px', background: 'hsl(' + hsl.h + ', 50%, ' + 100 * offset + '%)', cursor: 'pointer' } },
							first: { swatch: { borderRadius: '2px 0 0 2px' } },
							last: { swatch: { borderRadius: '0 2px 2px 0' } },
							active: { swatch: { transform: 'scaleY(1.8)', borderRadius: '3.6px/2px' } },
						},
						{ active, first, last }
					);
				return compat_module.default.createElement('div', {
					style: styles.swatch,
					onClick: function handleClick(e) {
						return onClick({ h: hsl.h, s: 0.5, l: offset, source: 'hsl' }, e);
					},
				});
			};
			const slider_SliderSwatches = function SliderSwatches(_ref) {
				var onClick = _ref.onClick,
					hsl = _ref.hsl,
					styles = (0, lib.Ay)({
						default: {
							swatches: { marginTop: '20px' },
							swatch: { boxSizing: 'border-box', width: '20%', paddingRight: '1px', float: 'left' },
							clear: { clear: 'both' },
						},
					});
				return compat_module.default.createElement(
					'div',
					{ style: styles.swatches },
					compat_module.default.createElement(
						'div',
						{ style: styles.swatch },
						compat_module.default.createElement(slider_SliderSwatch, {
							hsl,
							offset: '.80',
							active: Math.abs(hsl.l - 0.8) < 0.1 && Math.abs(hsl.s - 0.5) < 0.1,
							onClick,
							first: !0,
						})
					),
					compat_module.default.createElement(
						'div',
						{ style: styles.swatch },
						compat_module.default.createElement(slider_SliderSwatch, {
							hsl,
							offset: '.65',
							active: Math.abs(hsl.l - 0.65) < 0.1 && Math.abs(hsl.s - 0.5) < 0.1,
							onClick,
						})
					),
					compat_module.default.createElement(
						'div',
						{ style: styles.swatch },
						compat_module.default.createElement(slider_SliderSwatch, {
							hsl,
							offset: '.50',
							active: Math.abs(hsl.l - 0.5) < 0.1 && Math.abs(hsl.s - 0.5) < 0.1,
							onClick,
						})
					),
					compat_module.default.createElement(
						'div',
						{ style: styles.swatch },
						compat_module.default.createElement(slider_SliderSwatch, {
							hsl,
							offset: '.35',
							active: Math.abs(hsl.l - 0.35) < 0.1 && Math.abs(hsl.s - 0.5) < 0.1,
							onClick,
						})
					),
					compat_module.default.createElement(
						'div',
						{ style: styles.swatch },
						compat_module.default.createElement(slider_SliderSwatch, {
							hsl,
							offset: '.20',
							active: Math.abs(hsl.l - 0.2) < 0.1 && Math.abs(hsl.s - 0.5) < 0.1,
							onClick,
							last: !0,
						})
					),
					compat_module.default.createElement('div', { style: styles.clear })
				);
			};
			const slider_SliderPointer = function SliderPointer() {
				var styles = (0, lib.Ay)({
					default: {
						picker: {
							width: '14px',
							height: '14px',
							borderRadius: '6px',
							transform: 'translate(-7px, -1px)',
							backgroundColor: 'rgb(248, 248, 248)',
							boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
						},
					},
				});
				return compat_module.default.createElement('div', { style: styles.picker });
			};
			var Slider = function Slider(_ref) {
				var hsl = _ref.hsl,
					onChange = _ref.onChange,
					pointer = _ref.pointer,
					_ref$styles = _ref.styles,
					passedStyles = void 0 === _ref$styles ? {} : _ref$styles,
					_ref$className = _ref.className,
					className = void 0 === _ref$className ? '' : _ref$className,
					styles = (0, lib.Ay)(lodash_es_merge({ default: { hue: { height: '12px', position: 'relative' }, Hue: { radius: '2px' } } }, passedStyles));
				return compat_module.default.createElement(
					'div',
					{ style: styles.wrap || {}, className: 'slider-picker ' + className },
					compat_module.default.createElement(
						'div',
						{ style: styles.hue },
						compat_module.default.createElement(common_Hue, { style: styles.Hue, hsl, pointer, onChange })
					),
					compat_module.default.createElement(
						'div',
						{ style: styles.swatches },
						compat_module.default.createElement(slider_SliderSwatches, { hsl, onClick: onChange })
					)
				);
			};
			(Slider.propTypes = { styles: prop_types_default().object }), (Slider.defaultProps = { pointer: slider_SliderPointer, styles: {} });
			common_ColorWrap(Slider);
			var CheckIcon = __webpack_require__('../../node_modules/@icons/material/CheckIcon.js');
			const swatches_SwatchesColor = function SwatchesColor(_ref) {
				var color = _ref.color,
					_ref$onClick = _ref.onClick,
					onClick = void 0 === _ref$onClick ? function () {} : _ref$onClick,
					onSwatchHover = _ref.onSwatchHover,
					first = _ref.first,
					last = _ref.last,
					active = _ref.active,
					styles = (0, lib.Ay)(
						{
							default: {
								color: { width: '40px', height: '24px', cursor: 'pointer', background: color, marginBottom: '1px' },
								check: { color: getContrastingColor(color), marginLeft: '8px', display: 'none' },
							},
							first: { color: { overflow: 'hidden', borderRadius: '2px 2px 0 0' } },
							last: { color: { overflow: 'hidden', borderRadius: '0 0 2px 2px' } },
							active: { check: { display: 'block' } },
							'color-#FFFFFF': { color: { boxShadow: 'inset 0 0 0 1px #ddd' }, check: { color: '#333' } },
							transparent: { check: { color: '#333' } },
						},
						{ first, last, active, 'color-#FFFFFF': '#FFFFFF' === color, transparent: 'transparent' === color }
					);
				return compat_module.default.createElement(
					common_Swatch,
					{ color, style: styles.color, onClick, onHover: onSwatchHover, focusStyle: { boxShadow: '0 0 4px ' + color } },
					compat_module.default.createElement('div', { style: styles.check }, compat_module.default.createElement(CheckIcon.A, null))
				);
			};
			const swatches_SwatchesGroup = function SwatchesGroup(_ref) {
				var onClick = _ref.onClick,
					onSwatchHover = _ref.onSwatchHover,
					group = _ref.group,
					active = _ref.active,
					styles = (0, lib.Ay)({ default: { group: { paddingBottom: '10px', width: '40px', float: 'left', marginRight: '10px' } } });
				return compat_module.default.createElement(
					'div',
					{ style: styles.group },
					lodash_es_map(group, function (color, i) {
						return compat_module.default.createElement(swatches_SwatchesColor, {
							key: color,
							color,
							active: color.toLowerCase() === active,
							first: 0 === i,
							last: i === group.length - 1,
							onClick,
							onSwatchHover,
						});
					})
				);
			};
			var Swatches = function Swatches(_ref) {
				var width = _ref.width,
					height = _ref.height,
					onChange = _ref.onChange,
					onSwatchHover = _ref.onSwatchHover,
					colors = _ref.colors,
					hex = _ref.hex,
					_ref$styles = _ref.styles,
					passedStyles = void 0 === _ref$styles ? {} : _ref$styles,
					_ref$className = _ref.className,
					className = void 0 === _ref$className ? '' : _ref$className,
					styles = (0, lib.Ay)(
						lodash_es_merge(
							{
								default: {
									picker: { width, height },
									overflow: { height, overflowY: 'scroll' },
									body: { padding: '16px 0 6px 16px' },
									clear: { clear: 'both' },
								},
							},
							passedStyles
						)
					),
					handleChange = function handleChange(data, e) {
						return onChange({ hex: data, source: 'hex' }, e);
					};
				return compat_module.default.createElement(
					'div',
					{ style: styles.picker, className: 'swatches-picker ' + className },
					compat_module.default.createElement(
						common_Raised,
						null,
						compat_module.default.createElement(
							'div',
							{ style: styles.overflow },
							compat_module.default.createElement(
								'div',
								{ style: styles.body },
								lodash_es_map(colors, function (group) {
									return compat_module.default.createElement(swatches_SwatchesGroup, {
										key: group.toString(),
										group,
										active: hex,
										onClick: handleChange,
										onSwatchHover,
									});
								}),
								compat_module.default.createElement('div', { style: styles.clear })
							)
						)
					)
				);
			};
			(Swatches.propTypes = {
				width: prop_types_default().oneOfType([prop_types_default().string, prop_types_default().number]),
				height: prop_types_default().oneOfType([prop_types_default().string, prop_types_default().number]),
				colors: prop_types_default().arrayOf(prop_types_default().arrayOf(prop_types_default().string)),
				styles: prop_types_default().object,
			}),
				(Swatches.defaultProps = {
					width: 320,
					height: 240,
					colors: [
						[colors_es2015_red[900], colors_es2015_red[700], colors_es2015_red[500], colors_es2015_red[300], colors_es2015_red[100]],
						[pink[900], pink[700], pink[500], pink[300], pink[100]],
						[purple[900], purple[700], purple[500], purple[300], purple[100]],
						[deepPurple[900], deepPurple[700], deepPurple[500], deepPurple[300], deepPurple[100]],
						[indigo[900], indigo[700], indigo[500], indigo[300], indigo[100]],
						[blue[900], blue[700], blue[500], blue[300], blue[100]],
						[lightBlue[900], lightBlue[700], lightBlue[500], lightBlue[300], lightBlue[100]],
						[cyan[900], cyan[700], cyan[500], cyan[300], cyan[100]],
						[teal[900], teal[700], teal[500], teal[300], teal[100]],
						['#194D33', green[700], green[500], green[300], green[100]],
						[lightGreen[900], lightGreen[700], lightGreen[500], lightGreen[300], lightGreen[100]],
						[lime[900], lime[700], lime[500], lime[300], lime[100]],
						[yellow[900], yellow[700], yellow[500], yellow[300], yellow[100]],
						[amber[900], amber[700], amber[500], amber[300], amber[100]],
						[orange[900], orange[700], orange[500], orange[300], orange[100]],
						[deepOrange[900], deepOrange[700], deepOrange[500], deepOrange[300], deepOrange[100]],
						[brown[900], brown[700], brown[500], brown[300], brown[100]],
						[blueGrey[900], blueGrey[700], blueGrey[500], blueGrey[300], blueGrey[100]],
						['#000000', '#525252', '#969696', '#D9D9D9', '#FFFFFF'],
					],
					styles: {},
				});
			common_ColorWrap(Swatches);
			var Twitter = function Twitter(_ref) {
				var onChange = _ref.onChange,
					onSwatchHover = _ref.onSwatchHover,
					hex = _ref.hex,
					colors = _ref.colors,
					width = _ref.width,
					triangle = _ref.triangle,
					_ref$styles = _ref.styles,
					passedStyles = void 0 === _ref$styles ? {} : _ref$styles,
					_ref$className = _ref.className,
					className = void 0 === _ref$className ? '' : _ref$className,
					styles = (0, lib.Ay)(
						lodash_es_merge(
							{
								default: {
									card: {
										width,
										background: '#fff',
										border: '0 solid rgba(0,0,0,0.25)',
										boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
										borderRadius: '4px',
										position: 'relative',
									},
									body: { padding: '15px 9px 9px 15px' },
									label: { fontSize: '18px', color: '#fff' },
									triangle: {
										width: '0px',
										height: '0px',
										borderStyle: 'solid',
										borderWidth: '0 9px 10px 9px',
										borderColor: 'transparent transparent #fff transparent',
										position: 'absolute',
									},
									triangleShadow: {
										width: '0px',
										height: '0px',
										borderStyle: 'solid',
										borderWidth: '0 9px 10px 9px',
										borderColor: 'transparent transparent rgba(0,0,0,.1) transparent',
										position: 'absolute',
									},
									hash: {
										background: '#F0F0F0',
										height: '30px',
										width: '30px',
										borderRadius: '4px 0 0 4px',
										float: 'left',
										color: '#98A1A4',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									},
									input: {
										width: '100px',
										fontSize: '14px',
										color: '#666',
										border: '0px',
										outline: 'none',
										height: '28px',
										boxShadow: 'inset 0 0 0 1px #F0F0F0',
										boxSizing: 'content-box',
										borderRadius: '0 4px 4px 0',
										float: 'left',
										paddingLeft: '8px',
									},
									swatch: { width: '30px', height: '30px', float: 'left', borderRadius: '4px', margin: '0 6px 6px 0' },
									clear: { clear: 'both' },
								},
								'hide-triangle': { triangle: { display: 'none' }, triangleShadow: { display: 'none' } },
								'top-left-triangle': { triangle: { top: '-10px', left: '12px' }, triangleShadow: { top: '-11px', left: '12px' } },
								'top-right-triangle': { triangle: { top: '-10px', right: '12px' }, triangleShadow: { top: '-11px', right: '12px' } },
							},
							passedStyles
						),
						{ 'hide-triangle': 'hide' === triangle, 'top-left-triangle': 'top-left' === triangle, 'top-right-triangle': 'top-right' === triangle }
					),
					handleChange = function handleChange(hexcode, e) {
						isValidHex(hexcode) && onChange({ hex: hexcode, source: 'hex' }, e);
					};
				return compat_module.default.createElement(
					'div',
					{ style: styles.card, className: 'twitter-picker ' + className },
					compat_module.default.createElement('div', { style: styles.triangleShadow }),
					compat_module.default.createElement('div', { style: styles.triangle }),
					compat_module.default.createElement(
						'div',
						{ style: styles.body },
						lodash_es_map(colors, function (c, i) {
							return compat_module.default.createElement(common_Swatch, {
								key: i,
								color: c,
								hex: c,
								style: styles.swatch,
								onClick: handleChange,
								onHover: onSwatchHover,
								focusStyle: { boxShadow: '0 0 4px ' + c },
							});
						}),
						compat_module.default.createElement('div', { style: styles.hash }, '#'),
						compat_module.default.createElement(common_EditableInput, {
							label: null,
							style: { input: styles.input },
							value: hex.replace('#', ''),
							onChange: handleChange,
						}),
						compat_module.default.createElement('div', { style: styles.clear })
					)
				);
			};
			(Twitter.propTypes = {
				width: prop_types_default().oneOfType([prop_types_default().string, prop_types_default().number]),
				triangle: prop_types_default().oneOf(['hide', 'top-left', 'top-right']),
				colors: prop_types_default().arrayOf(prop_types_default().string),
				styles: prop_types_default().object,
			}),
				(Twitter.defaultProps = {
					width: 276,
					colors: ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF'],
					triangle: 'top-left',
					styles: {},
				});
			common_ColorWrap(Twitter);
			var GooglePointerCircle = function GooglePointerCircle(props) {
				var styles = (0, lib.Ay)({
					default: {
						picker: {
							width: '20px',
							height: '20px',
							borderRadius: '22px',
							border: '2px #fff solid',
							transform: 'translate(-12px, -13px)',
							background: 'hsl(' + Math.round(props.hsl.h) + ', ' + Math.round(100 * props.hsl.s) + '%, ' + Math.round(100 * props.hsl.l) + '%)',
						},
					},
				});
				return compat_module.default.createElement('div', { style: styles.picker });
			};
			(GooglePointerCircle.propTypes = {
				hsl: prop_types_default().shape({
					h: prop_types_default().number,
					s: prop_types_default().number,
					l: prop_types_default().number,
					a: prop_types_default().number,
				}),
			}),
				(GooglePointerCircle.defaultProps = { hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 } });
			const google_GooglePointerCircle = GooglePointerCircle;
			var GooglePointer = function GooglePointer(props) {
				var styles = (0, lib.Ay)({
					default: {
						picker: {
							width: '20px',
							height: '20px',
							borderRadius: '22px',
							transform: 'translate(-10px, -7px)',
							background: 'hsl(' + Math.round(props.hsl.h) + ', 100%, 50%)',
							border: '2px white solid',
						},
					},
				});
				return compat_module.default.createElement('div', { style: styles.picker });
			};
			(GooglePointer.propTypes = {
				hsl: prop_types_default().shape({
					h: prop_types_default().number,
					s: prop_types_default().number,
					l: prop_types_default().number,
					a: prop_types_default().number,
				}),
			}),
				(GooglePointer.defaultProps = { hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 } });
			const google_GooglePointer = GooglePointer;
			const google_GoogleFields = function GoogleFields(_ref) {
				var onChange = _ref.onChange,
					rgb = _ref.rgb,
					hsl = _ref.hsl,
					hex = _ref.hex,
					hsv = _ref.hsv,
					handleChange = function handleChange(data, e) {
						if (data.hex) isValidHex(data.hex) && onChange({ hex: data.hex, source: 'hex' }, e);
						else if (data.rgb) {
							var values = data.rgb.split(',');
							isvalidColorString(data.rgb, 'rgb') && onChange({ r: values[0], g: values[1], b: values[2], a: 1, source: 'rgb' }, e);
						} else if (data.hsv) {
							var _values = data.hsv.split(',');
							isvalidColorString(data.hsv, 'hsv') &&
								((_values[2] = _values[2].replace('%', '')),
								(_values[1] = _values[1].replace('%', '')),
								(_values[0] = _values[0].replace('°', '')),
								1 == _values[1] ? (_values[1] = 0.01) : 1 == _values[2] && (_values[2] = 0.01),
								onChange({ h: Number(_values[0]), s: Number(_values[1]), v: Number(_values[2]), source: 'hsv' }, e));
						} else if (data.hsl) {
							var _values2 = data.hsl.split(',');
							isvalidColorString(data.hsl, 'hsl') &&
								((_values2[2] = _values2[2].replace('%', '')),
								(_values2[1] = _values2[1].replace('%', '')),
								(_values2[0] = _values2[0].replace('°', '')),
								1 == hsvValue[1] ? (hsvValue[1] = 0.01) : 1 == hsvValue[2] && (hsvValue[2] = 0.01),
								onChange({ h: Number(_values2[0]), s: Number(_values2[1]), v: Number(_values2[2]), source: 'hsl' }, e));
						}
					},
					styles = (0, lib.Ay)({
						default: {
							wrap: { display: 'flex', height: '100px', marginTop: '4px' },
							fields: { width: '100%' },
							column: { paddingTop: '10px', display: 'flex', justifyContent: 'space-between' },
							double: { padding: '0px 4.4px', boxSizing: 'border-box' },
							input: {
								width: '100%',
								height: '38px',
								boxSizing: 'border-box',
								padding: '4px 10% 3px',
								textAlign: 'center',
								border: '1px solid #dadce0',
								fontSize: '11px',
								textTransform: 'lowercase',
								borderRadius: '5px',
								outline: 'none',
								fontFamily: 'Roboto,Arial,sans-serif',
							},
							input2: {
								height: '38px',
								width: '100%',
								border: '1px solid #dadce0',
								boxSizing: 'border-box',
								fontSize: '11px',
								textTransform: 'lowercase',
								borderRadius: '5px',
								outline: 'none',
								paddingLeft: '10px',
								fontFamily: 'Roboto,Arial,sans-serif',
							},
							label: {
								textAlign: 'center',
								fontSize: '12px',
								background: '#fff',
								position: 'absolute',
								textTransform: 'uppercase',
								color: '#3c4043',
								width: '35px',
								top: '-6px',
								left: '0',
								right: '0',
								marginLeft: 'auto',
								marginRight: 'auto',
								fontFamily: 'Roboto,Arial,sans-serif',
							},
							label2: {
								left: '10px',
								textAlign: 'center',
								fontSize: '12px',
								background: '#fff',
								position: 'absolute',
								textTransform: 'uppercase',
								color: '#3c4043',
								width: '32px',
								top: '-6px',
								fontFamily: 'Roboto,Arial,sans-serif',
							},
							single: { flexGrow: '1', margin: '0px 4.4px' },
						},
					}),
					rgbValue = rgb.r + ', ' + rgb.g + ', ' + rgb.b,
					hslValue = Math.round(hsl.h) + '°, ' + Math.round(100 * hsl.s) + '%, ' + Math.round(100 * hsl.l) + '%',
					hsvValue = Math.round(hsv.h) + '°, ' + Math.round(100 * hsv.s) + '%, ' + Math.round(100 * hsv.v) + '%';
				return compat_module.default.createElement(
					'div',
					{ style: styles.wrap, className: 'flexbox-fix' },
					compat_module.default.createElement(
						'div',
						{ style: styles.fields },
						compat_module.default.createElement(
							'div',
							{ style: styles.double },
							compat_module.default.createElement(common_EditableInput, {
								style: { input: styles.input, label: styles.label },
								label: 'hex',
								value: hex,
								onChange: handleChange,
							})
						),
						compat_module.default.createElement(
							'div',
							{ style: styles.column },
							compat_module.default.createElement(
								'div',
								{ style: styles.single },
								compat_module.default.createElement(common_EditableInput, {
									style: { input: styles.input2, label: styles.label2 },
									label: 'rgb',
									value: rgbValue,
									onChange: handleChange,
								})
							),
							compat_module.default.createElement(
								'div',
								{ style: styles.single },
								compat_module.default.createElement(common_EditableInput, {
									style: { input: styles.input2, label: styles.label2 },
									label: 'hsv',
									value: hsvValue,
									onChange: handleChange,
								})
							),
							compat_module.default.createElement(
								'div',
								{ style: styles.single },
								compat_module.default.createElement(common_EditableInput, {
									style: { input: styles.input2, label: styles.label2 },
									label: 'hsl',
									value: hslValue,
									onChange: handleChange,
								})
							)
						)
					)
				);
			};
			var Google = function Google(_ref) {
				var width = _ref.width,
					onChange = _ref.onChange,
					rgb = _ref.rgb,
					hsl = _ref.hsl,
					hsv = _ref.hsv,
					hex = _ref.hex,
					header = _ref.header,
					_ref$styles = _ref.styles,
					passedStyles = void 0 === _ref$styles ? {} : _ref$styles,
					_ref$className = _ref.className,
					className = void 0 === _ref$className ? '' : _ref$className,
					styles = (0, lib.Ay)(
						lodash_es_merge(
							{
								default: {
									picker: {
										width,
										background: '#fff',
										border: '1px solid #dfe1e5',
										boxSizing: 'initial',
										display: 'flex',
										flexWrap: 'wrap',
										borderRadius: '8px 8px 0px 0px',
									},
									head: {
										height: '57px',
										width: '100%',
										paddingTop: '16px',
										paddingBottom: '16px',
										paddingLeft: '16px',
										fontSize: '20px',
										boxSizing: 'border-box',
										fontFamily: 'Roboto-Regular,HelveticaNeue,Arial,sans-serif',
									},
									saturation: { width: '70%', padding: '0px', position: 'relative', overflow: 'hidden' },
									swatch: {
										width: '30%',
										height: '228px',
										padding: '0px',
										background: 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', 1)',
										position: 'relative',
										overflow: 'hidden',
									},
									body: { margin: 'auto', width: '95%' },
									controls: { display: 'flex', boxSizing: 'border-box', height: '52px', paddingTop: '22px' },
									color: { width: '32px' },
									hue: { height: '8px', position: 'relative', margin: '0px 16px 0px 16px', width: '100%' },
									Hue: { radius: '2px' },
								},
							},
							passedStyles
						)
					);
				return compat_module.default.createElement(
					'div',
					{ style: styles.picker, className: 'google-picker ' + className },
					compat_module.default.createElement('div', { style: styles.head }, header),
					compat_module.default.createElement('div', { style: styles.swatch }),
					compat_module.default.createElement(
						'div',
						{ style: styles.saturation },
						compat_module.default.createElement(common_Saturation, { hsl, hsv, pointer: google_GooglePointerCircle, onChange })
					),
					compat_module.default.createElement(
						'div',
						{ style: styles.body },
						compat_module.default.createElement(
							'div',
							{ style: styles.controls, className: 'flexbox-fix' },
							compat_module.default.createElement(
								'div',
								{ style: styles.hue },
								compat_module.default.createElement(common_Hue, { style: styles.Hue, hsl, radius: '4px', pointer: google_GooglePointer, onChange })
							)
						),
						compat_module.default.createElement(google_GoogleFields, { rgb, hsl, hex, hsv, onChange })
					)
				);
			};
			(Google.propTypes = {
				width: prop_types_default().oneOfType([prop_types_default().string, prop_types_default().number]),
				styles: prop_types_default().object,
				header: prop_types_default().string,
			}),
				(Google.defaultProps = { width: 652, styles: {}, header: 'Color picker' });
			common_ColorWrap(Google);
		},
		'../../node_modules/react-ranger/dist/react-ranger.mjs': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { d: () => useRanger });
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/compat/dist/compat.module.js');
			function _extends() {
				return (
					(_extends =
						Object.assign ||
						function (target) {
							for (var i = 1; i < arguments.length; i++) {
								var source = arguments[i];
								for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
							}
							return target;
						}),
					_extends.apply(this, arguments)
				);
			}
			function _objectWithoutPropertiesLoose(source, excluded) {
				if (null == source) return {};
				var key,
					i,
					target = {},
					sourceKeys = Object.keys(source);
				for (i = 0; i < sourceKeys.length; i++) (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
				return target;
			}
			var getBoundingClientRect = function getBoundingClientRect(element) {
					var rect = element.getBoundingClientRect();
					return { left: Math.ceil(rect.left), width: Math.ceil(rect.width) };
				},
				sortNumList = function sortNumList(arr) {
					return [].concat(arr).sort(function (a, b) {
						return Number(a) - Number(b);
					});
				},
				useGetLatest = function useGetLatest(val) {
					var ref = react__WEBPACK_IMPORTED_MODULE_0__.default.useRef(val);
					return (
						(ref.current = val),
						react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(function () {
							return ref.current;
						}, [])
					);
				},
				linearInterpolator = {
					getPercentageForValue: function getPercentageForValue(val, min, max) {
						return Math.max(0, Math.min(100, ((val - min) / (max - min)) * 100));
					},
					getValueForClientX: function getValueForClientX(clientX, trackDims, min, max) {
						return (max - min) * ((clientX - trackDims.left) / trackDims.width) + min;
					},
				};
			function useRanger(_ref) {
				var _ref$interpolator = _ref.interpolator,
					interpolator = void 0 === _ref$interpolator ? linearInterpolator : _ref$interpolator,
					_ref$tickSize = _ref.tickSize,
					tickSize = void 0 === _ref$tickSize ? 10 : _ref$tickSize,
					values = _ref.values,
					min = _ref.min,
					max = _ref.max,
					controlledTicks = _ref.ticks,
					steps = _ref.steps,
					onChange = _ref.onChange,
					onDrag = _ref.onDrag,
					stepSize = _ref.stepSize,
					_React$useState = react__WEBPACK_IMPORTED_MODULE_0__.default.useState(null),
					activeHandleIndex = _React$useState[0],
					setActiveHandleIndex = _React$useState[1],
					_React$useState2 = react__WEBPACK_IMPORTED_MODULE_0__.default.useState(),
					tempValues = _React$useState2[0],
					setTempValues = _React$useState2[1],
					getLatest = useGetLatest({ activeHandleIndex, onChange, onDrag, values, tempValues }),
					trackElRef = react__WEBPACK_IMPORTED_MODULE_0__.default.useRef(),
					getValueForClientX = react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(
						function (clientX) {
							var trackDims = getBoundingClientRect(trackElRef.current);
							return interpolator.getValueForClientX(clientX, trackDims, min, max);
						},
						[interpolator, max, min]
					),
					getNextStep = react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(
						function (val, direction) {
							if (steps) {
								var nextIndex = steps.indexOf(val) + direction;
								return nextIndex >= 0 && nextIndex < steps.length ? steps[nextIndex] : val;
							}
							var nextVal = val + stepSize * direction;
							return nextVal >= min && nextVal <= max ? nextVal : val;
						},
						[max, min, stepSize, steps]
					),
					roundToStep = react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(
						function (val) {
							var left = min,
								right = max;
							if (steps)
								steps.forEach(function (step) {
									step <= val && step > left && (left = step), step >= val && step < right && (right = step);
								});
							else {
								for (0; left < val && left + stepSize < val; ) left += stepSize;
								right = Math.min(left + stepSize, max);
							}
							return val - left < right - val ? left : right;
						},
						[max, min, stepSize, steps]
					),
					handleDrag = react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(
						function (e) {
							var _getLatest = getLatest(),
								activeHandleIndex = _getLatest.activeHandleIndex,
								onDrag = _getLatest.onDrag,
								clientX = 'touchmove' === e.type ? e.changedTouches[0].clientX : e.clientX,
								newValue = getValueForClientX(clientX),
								newRoundedValue = roundToStep(newValue),
								newValues = [].concat(values.slice(0, activeHandleIndex), [newRoundedValue], values.slice(activeHandleIndex + 1));
							onDrag ? onDrag(newValues) : setTempValues(newValues);
						},
						[getLatest, getValueForClientX, roundToStep, values]
					),
					handleKeyDown = react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(
						function (e, i) {
							var _getLatest2 = getLatest(),
								values = _getLatest2.values,
								_getLatest2$onChange = _getLatest2.onChange,
								onChange = void 0 === _getLatest2$onChange ? function () {} : _getLatest2$onChange;
							if (37 === e.keyCode || 39 === e.keyCode) {
								setActiveHandleIndex(i);
								var direction = 37 === e.keyCode ? -1 : 1,
									newValue = getNextStep(values[i], direction),
									newValues = [].concat(values.slice(0, i), [newValue], values.slice(i + 1));
								onChange(sortNumList(newValues));
							}
						},
						[getLatest, getNextStep]
					),
					handlePress = react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(
						function (e, i) {
							setActiveHandleIndex(i);
							var handleRelease = function handleRelease(e) {
								var _getLatest3 = getLatest(),
									tempValues = _getLatest3.tempValues,
									values = _getLatest3.values,
									_getLatest3$onChange = _getLatest3.onChange,
									onChange = void 0 === _getLatest3$onChange ? function () {} : _getLatest3$onChange,
									_getLatest3$onDrag = _getLatest3.onDrag,
									onDrag = void 0 === _getLatest3$onDrag ? function () {} : _getLatest3$onDrag;
								document.removeEventListener('mousemove', handleDrag),
									document.removeEventListener('touchmove', handleDrag),
									document.removeEventListener('mouseup', handleRelease),
									document.removeEventListener('touchend', handleRelease);
								var sortedValues = sortNumList(tempValues || values);
								onChange(sortedValues), onDrag(sortedValues), setActiveHandleIndex(null), setTempValues();
							};
							document.addEventListener('mousemove', handleDrag),
								document.addEventListener('touchmove', handleDrag),
								document.addEventListener('mouseup', handleRelease),
								document.addEventListener('touchend', handleRelease);
						},
						[getLatest, handleDrag]
					),
					getPercentageForValue = react__WEBPACK_IMPORTED_MODULE_0__.default.useCallback(
						function (val) {
							return interpolator.getPercentageForValue(val, min, max);
						},
						[interpolator, max, min]
					),
					ticks = react__WEBPACK_IMPORTED_MODULE_0__.default.useMemo(
						function () {
							var ticks = controlledTicks || steps;
							if (!ticks) {
								for (ticks = [min]; ticks[ticks.length - 1] < max - tickSize; ) ticks.push(ticks[ticks.length - 1] + tickSize);
								ticks.push(max);
							}
							return ticks.map(function (value, i) {
								return {
									value,
									getTickProps: function getTickProps(_temp) {
										var _ref2 = void 0 === _temp ? {} : _temp,
											_ref2$key = _ref2.key,
											key = void 0 === _ref2$key ? i : _ref2$key,
											_ref2$style = _ref2.style,
											style = void 0 === _ref2$style ? {} : _ref2$style,
											rest = _objectWithoutPropertiesLoose(_ref2, ['key', 'style']);
										return _extends(
											{
												key,
												style: _extends(
													{ position: 'absolute', width: 0, left: getPercentageForValue(value) + '%', transform: 'translateX(-50%)' },
													style
												),
											},
											rest
										);
									},
								};
							});
						},
						[controlledTicks, getPercentageForValue, max, min, steps, tickSize]
					),
					segments = react__WEBPACK_IMPORTED_MODULE_0__.default.useMemo(
						function () {
							var sortedValues = sortNumList(tempValues || values);
							return [].concat(sortedValues, [max]).map(function (value, i) {
								return {
									value,
									getSegmentProps: function getSegmentProps(_temp2) {
										var _ref3 = void 0 === _temp2 ? {} : _temp2,
											_ref3$key = _ref3.key,
											key = void 0 === _ref3$key ? i : _ref3$key,
											_ref3$style = _ref3.style,
											style = void 0 === _ref3$style ? {} : _ref3$style,
											rest = _objectWithoutPropertiesLoose(_ref3, ['key', 'style']),
											left = getPercentageForValue(sortedValues[i - 1] ? sortedValues[i - 1] : min);
										return _extends(
											{ key, style: _extends({ position: 'absolute', left: left + '%', width: getPercentageForValue(value) - left + '%' }, style) },
											rest
										);
									},
								};
							});
						},
						[getPercentageForValue, max, min, tempValues, values]
					),
					handles = react__WEBPACK_IMPORTED_MODULE_0__.default.useMemo(
						function () {
							return (tempValues || values).map(function (value, i) {
								return {
									value,
									active: i === activeHandleIndex,
									getHandleProps: function getHandleProps(_temp3) {
										var _ref4 = void 0 === _temp3 ? {} : _temp3,
											_ref4$key = _ref4.key,
											key = void 0 === _ref4$key ? i : _ref4$key,
											_onKeyDown = (_ref4.ref, _ref4.innerRef, _ref4.onKeyDown),
											_onMouseDown = _ref4.onMouseDown,
											_onTouchStart = _ref4.onTouchStart,
											_ref4$style = _ref4.style,
											style = void 0 === _ref4$style ? {} : _ref4$style,
											rest = _objectWithoutPropertiesLoose(_ref4, ['key', 'ref', 'innerRef', 'onKeyDown', 'onMouseDown', 'onTouchStart', 'style']);
										return _extends(
											{
												key,
												onKeyDown: function onKeyDown(e) {
													e.persist(), handleKeyDown(e, i), _onKeyDown && _onKeyDown(e);
												},
												onMouseDown: function onMouseDown(e) {
													e.persist(), handlePress(e, i), _onMouseDown && _onMouseDown(e);
												},
												onTouchStart: function onTouchStart(e) {
													e.persist(), handlePress(e, i), _onTouchStart && _onTouchStart(e);
												},
												role: 'slider',
												'aria-valuemin': min,
												'aria-valuemax': max,
												'aria-valuenow': value,
												style: _extends(
													{
														position: 'absolute',
														top: '50%',
														left: getPercentageForValue(value) + '%',
														zIndex: i === activeHandleIndex ? '1' : '0',
														transform: 'translate(-50%, -50%)',
													},
													style
												),
											},
											rest
										);
									},
								};
							});
						},
						[activeHandleIndex, getPercentageForValue, handleKeyDown, handlePress, min, max, tempValues, values]
					);
				return {
					activeHandleIndex,
					getTrackProps: function getTrackProps(_temp4) {
						var _ref5 = void 0 === _temp4 ? {} : _temp4,
							_ref5$style = _ref5.style,
							style = void 0 === _ref5$style ? {} : _ref5$style,
							_ref6 = _ref5.ref,
							rest = _objectWithoutPropertiesLoose(_ref5, ['style', 'ref']);
						return _extends(
							{
								ref: function ref(el) {
									(trackElRef.current = el), _ref6 && ('function' == typeof _ref6 ? _ref6(el) : (_ref6.current = el));
								},
								style: _extends({ position: 'relative', userSelect: 'none' }, style),
							},
							rest
						);
					},
					ticks,
					segments,
					handles,
				};
			}
		},
		'../../node_modules/reactcss/lib/autoprefix.js': (__unused_webpack_module, exports, __webpack_require__) => {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.autoprefix = void 0);
			var _forOwn3 = (function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				})(__webpack_require__('../../node_modules/lodash/forOwn.js')),
				_extends =
					Object.assign ||
					function (target) {
						for (var i = 1; i < arguments.length; i++) {
							var source = arguments[i];
							for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
						}
						return target;
					};
			var transforms = {
					borderRadius: function borderRadius(value) {
						return { msBorderRadius: value, MozBorderRadius: value, OBorderRadius: value, WebkitBorderRadius: value, borderRadius: value };
					},
					boxShadow: function boxShadow(value) {
						return { msBoxShadow: value, MozBoxShadow: value, OBoxShadow: value, WebkitBoxShadow: value, boxShadow: value };
					},
					userSelect: function userSelect(value) {
						return {
							WebkitTouchCallout: value,
							KhtmlUserSelect: value,
							MozUserSelect: value,
							msUserSelect: value,
							WebkitUserSelect: value,
							userSelect: value,
						};
					},
					flex: function flex(value) {
						return { WebkitBoxFlex: value, MozBoxFlex: value, WebkitFlex: value, msFlex: value, flex: value };
					},
					flexBasis: function flexBasis(value) {
						return { WebkitFlexBasis: value, flexBasis: value };
					},
					justifyContent: function justifyContent(value) {
						return { WebkitJustifyContent: value, justifyContent: value };
					},
					transition: function transition(value) {
						return { msTransition: value, MozTransition: value, OTransition: value, WebkitTransition: value, transition: value };
					},
					transform: function transform(value) {
						return { msTransform: value, MozTransform: value, OTransform: value, WebkitTransform: value, transform: value };
					},
					absolute: function absolute(value) {
						var direction = value && value.split(' ');
						return {
							position: 'absolute',
							top: direction && direction[0],
							right: direction && direction[1],
							bottom: direction && direction[2],
							left: direction && direction[3],
						};
					},
					extend: function extend(name, otherElementStyles) {
						var otherStyle = otherElementStyles[name];
						return otherStyle || { extend: name };
					},
				},
				autoprefix = (exports.autoprefix = function autoprefix(elements) {
					var prefixed = {};
					return (
						(0, _forOwn3.default)(elements, function (styles, element) {
							var expanded = {};
							(0, _forOwn3.default)(styles, function (value, key) {
								var transform = transforms[key];
								transform ? (expanded = _extends({}, expanded, transform(value))) : (expanded[key] = value);
							}),
								(prefixed[element] = expanded);
						}),
						prefixed
					);
				});
			exports.default = autoprefix;
		},
		'../../node_modules/reactcss/lib/components/active.js': (__unused_webpack_module, exports, __webpack_require__) => {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.active = void 0);
			var _extends =
					Object.assign ||
					function (target) {
						for (var i = 1; i < arguments.length; i++) {
							var source = arguments[i];
							for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
						}
						return target;
					},
				_react2 = (function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				})(__webpack_require__('../../node_modules/preact/compat/dist/compat.module.js'));
			function _possibleConstructorReturn(self, call) {
				if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !call || ('object' != typeof call && 'function' != typeof call) ? self : call;
			}
			var active = (exports.active = function active(Component) {
				var Span = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'span';
				return (function (_React$Component) {
					function Active() {
						var _ref, _temp, _this;
						!(function _classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) throw new TypeError('Cannot call a class as a function');
						})(this, Active);
						for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
						return (
							(_temp = _this =
								_possibleConstructorReturn(this, (_ref = Active.__proto__ || Object.getPrototypeOf(Active)).call.apply(_ref, [this].concat(args)))),
							(_this.state = { active: !1 }),
							(_this.handleMouseDown = function () {
								return _this.setState({ active: !0 });
							}),
							(_this.handleMouseUp = function () {
								return _this.setState({ active: !1 });
							}),
							(_this.render = function () {
								return _react2.default.createElement(
									Span,
									{ onMouseDown: _this.handleMouseDown, onMouseUp: _this.handleMouseUp },
									_react2.default.createElement(Component, _extends({}, _this.props, _this.state))
								);
							}),
							_possibleConstructorReturn(_this, _temp)
						);
					}
					return (
						(function _inherits(subClass, superClass) {
							if ('function' != typeof superClass && null !== superClass)
								throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
							(subClass.prototype = Object.create(superClass && superClass.prototype, {
								constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 },
							})),
								superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass));
						})(Active, _React$Component),
						Active
					);
				})(_react2.default.Component);
			});
			exports.default = active;
		},
		'../../node_modules/reactcss/lib/components/hover.js': (__unused_webpack_module, exports, __webpack_require__) => {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.hover = void 0);
			var _extends =
					Object.assign ||
					function (target) {
						for (var i = 1; i < arguments.length; i++) {
							var source = arguments[i];
							for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
						}
						return target;
					},
				_react2 = (function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				})(__webpack_require__('../../node_modules/preact/compat/dist/compat.module.js'));
			function _possibleConstructorReturn(self, call) {
				if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !call || ('object' != typeof call && 'function' != typeof call) ? self : call;
			}
			var hover = (exports.hover = function hover(Component) {
				var Span = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'span';
				return (function (_React$Component) {
					function Hover() {
						var _ref, _temp, _this;
						!(function _classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) throw new TypeError('Cannot call a class as a function');
						})(this, Hover);
						for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
						return (
							(_temp = _this =
								_possibleConstructorReturn(this, (_ref = Hover.__proto__ || Object.getPrototypeOf(Hover)).call.apply(_ref, [this].concat(args)))),
							(_this.state = { hover: !1 }),
							(_this.handleMouseOver = function () {
								return _this.setState({ hover: !0 });
							}),
							(_this.handleMouseOut = function () {
								return _this.setState({ hover: !1 });
							}),
							(_this.render = function () {
								return _react2.default.createElement(
									Span,
									{ onMouseOver: _this.handleMouseOver, onMouseOut: _this.handleMouseOut },
									_react2.default.createElement(Component, _extends({}, _this.props, _this.state))
								);
							}),
							_possibleConstructorReturn(_this, _temp)
						);
					}
					return (
						(function _inherits(subClass, superClass) {
							if ('function' != typeof superClass && null !== superClass)
								throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
							(subClass.prototype = Object.create(superClass && superClass.prototype, {
								constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 },
							})),
								superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass));
						})(Hover, _React$Component),
						Hover
					);
				})(_react2.default.Component);
			});
			exports.default = hover;
		},
		'../../node_modules/reactcss/lib/flattenNames.js': (__unused_webpack_module, exports, __webpack_require__) => {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.flattenNames = void 0);
			var _isString3 = _interopRequireDefault(__webpack_require__('../../node_modules/lodash/isString.js')),
				_forOwn3 = _interopRequireDefault(__webpack_require__('../../node_modules/lodash/forOwn.js')),
				_isPlainObject3 = _interopRequireDefault(__webpack_require__('../../node_modules/lodash/isPlainObject.js')),
				_map3 = _interopRequireDefault(__webpack_require__('../../node_modules/lodash/map.js'));
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			var flattenNames = (exports.flattenNames = function flattenNames() {
				var things = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
					names = [];
				return (
					(0, _map3.default)(things, function (thing) {
						Array.isArray(thing)
							? flattenNames(thing).map(function (name) {
									return names.push(name);
							  })
							: (0, _isPlainObject3.default)(thing)
							? (0, _forOwn3.default)(thing, function (value, key) {
									!0 === value && names.push(key), names.push(key + '-' + value);
							  })
							: (0, _isString3.default)(thing) && names.push(thing);
					}),
					names
				);
			});
			exports.default = flattenNames;
		},
		'../../node_modules/reactcss/lib/index.js': (__unused_webpack_module, exports, __webpack_require__) => {
			'use strict';
			exports.H8 = void 0;
			var _flattenNames2 = _interopRequireDefault(__webpack_require__('../../node_modules/reactcss/lib/flattenNames.js')),
				_mergeClasses2 = _interopRequireDefault(__webpack_require__('../../node_modules/reactcss/lib/mergeClasses.js')),
				_autoprefix2 = _interopRequireDefault(__webpack_require__('../../node_modules/reactcss/lib/autoprefix.js')),
				_hover3 = _interopRequireDefault(__webpack_require__('../../node_modules/reactcss/lib/components/hover.js')),
				_active2 = _interopRequireDefault(__webpack_require__('../../node_modules/reactcss/lib/components/active.js')),
				_loop3 = _interopRequireDefault(__webpack_require__('../../node_modules/reactcss/lib/loop.js'));
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			_hover3.default, (exports.H8 = _hover3.default), _active2.default, _loop3.default;
			var ReactCSS = function ReactCSS(classes) {
				for (var _len = arguments.length, activations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)
					activations[_key - 1] = arguments[_key];
				var activeNames = (0, _flattenNames2.default)(activations),
					merged = (0, _mergeClasses2.default)(classes, activeNames);
				return (0, _autoprefix2.default)(merged);
			};
			exports.Ay = ReactCSS;
		},
		'../../node_modules/reactcss/lib/loop.js': (__unused_webpack_module, exports) => {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: !0 });
			exports.default = function loopable(i, length) {
				var props = {},
					setProp = function setProp(name) {
						var value = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
						props[name] = value;
					};
				return (
					0 === i && setProp('first-child'),
					i === length - 1 && setProp('last-child'),
					(0 === i || i % 2 == 0) && setProp('even'),
					1 === Math.abs(i % 2) && setProp('odd'),
					setProp('nth-child', i),
					props
				);
			};
		},
		'../../node_modules/reactcss/lib/mergeClasses.js': (__unused_webpack_module, exports, __webpack_require__) => {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.mergeClasses = void 0);
			var _forOwn3 = _interopRequireDefault(__webpack_require__('../../node_modules/lodash/forOwn.js')),
				_cloneDeep3 = _interopRequireDefault(__webpack_require__('../../node_modules/lodash/cloneDeep.js')),
				_extends =
					Object.assign ||
					function (target) {
						for (var i = 1; i < arguments.length; i++) {
							var source = arguments[i];
							for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
						}
						return target;
					};
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			var mergeClasses = (exports.mergeClasses = function mergeClasses(classes) {
				var activeNames = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
					styles = (classes.default && (0, _cloneDeep3.default)(classes.default)) || {};
				return (
					activeNames.map(function (name) {
						var toMerge = classes[name];
						return (
							toMerge &&
								(0, _forOwn3.default)(toMerge, function (value, key) {
									styles[key] || (styles[key] = {}), (styles[key] = _extends({}, styles[key], toMerge[key]));
								}),
							name
						);
					}),
					styles
				);
			});
			exports.default = mergeClasses;
		},
	},
]);
