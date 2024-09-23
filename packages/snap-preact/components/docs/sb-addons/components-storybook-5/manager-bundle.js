try {
	(() => {
		var Qe = __STORYBOOK_ADDONS__,
			{ addons: N, types: Xe, mockChannel: Ze } = __STORYBOOK_ADDONS__;
		var q = (() => {
			let e;
			return (
				typeof window < 'u'
					? (e = window)
					: typeof globalThis < 'u'
					? (e = globalThis)
					: typeof window < 'u'
					? (e = window)
					: typeof self < 'u'
					? (e = self)
					: (e = {}),
				e
			);
		})();
		var pt = __STORYBOOK_CLIENT_LOGGER__,
			{ deprecate: lt, logger: Y, once: dt, pretty: ft } = __STORYBOOK_CLIENT_LOGGER__;
		function v() {
			return (
				(v = Object.assign
					? Object.assign.bind()
					: function (e) {
							for (var t = 1; t < arguments.length; t++) {
								var r = arguments[t];
								for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
							}
							return e;
					  }),
				v.apply(this, arguments)
			);
		}
		function ae(e) {
			if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e;
		}
		function x(e, t) {
			return (
				(x = Object.setPrototypeOf
					? Object.setPrototypeOf.bind()
					: function (r, a) {
							return (r.__proto__ = a), r;
					  }),
				x(e, t)
			);
		}
		function ne(e, t) {
			(e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), x(e, t);
		}
		function D(e) {
			return (
				(D = Object.setPrototypeOf
					? Object.getPrototypeOf.bind()
					: function (t) {
							return t.__proto__ || Object.getPrototypeOf(t);
					  }),
				D(e)
			);
		}
		function oe(e) {
			return Function.toString.call(e).indexOf('[native code]') !== -1;
		}
		function se() {
			if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
			if (typeof Proxy == 'function') return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
			} catch {
				return !1;
			}
		}
		function C(e, t, r) {
			return (
				se()
					? (C = Reflect.construct.bind())
					: (C = function (a, n, o) {
							var s = [null];
							s.push.apply(s, n);
							var p = Function.bind.apply(a, s),
								l = new p();
							return o && x(l, o.prototype), l;
					  }),
				C.apply(null, arguments)
			);
		}
		function L(e) {
			var t = typeof Map == 'function' ? new Map() : void 0;
			return (
				(L = function (r) {
					if (r === null || !oe(r)) return r;
					if (typeof r != 'function') throw new TypeError('Super expression must either be null or a function');
					if (typeof t < 'u') {
						if (t.has(r)) return t.get(r);
						t.set(r, a);
					}
					function a() {
						return C(r, arguments, D(this).constructor);
					}
					return (a.prototype = Object.create(r.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } })), x(a, r);
				}),
				L(e)
			);
		}
		var ie = {
			1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,
			2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,
			3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`,
			4: `Couldn't generate valid rgb string from %s, it returned %s.

`,
			5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,
			6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,
			7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,
			8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,
			9: `Please provide a number of steps to the modularScale helper.

`,
			10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
			11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,
			12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,
			13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,
			14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,
			15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,
			16: `You must provide a template to this method.

`,
			17: `You passed an unsupported selector state to this method.

`,
			18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
			19: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
			20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
			21: 'expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n',
			22: 'expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n',
			23: `fontFace expects a name of a font-family.

`,
			24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
			25: `fontFace expects localFonts to be an array.

`,
			26: `fontFace expects fileFormats to be an array.

`,
			27: `radialGradient requries at least 2 color-stops to properly render.

`,
			28: `Please supply a filename to retinaImage() as the first argument.

`,
			29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
			30: 'Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n',
			31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,
			32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,
			33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,
			34: `borderRadius expects a radius value as a string or number as the second argument.

`,
			35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
			36: `Property must be a string value.

`,
			37: `Syntax Error at %s.

`,
			38: `Formula contains a function that needs parentheses at %s.

`,
			39: `Formula is missing closing parenthesis at %s.

`,
			40: `Formula has too many closing parentheses at %s.

`,
			41: `All values in a formula must have the same unit or be unitless.

`,
			42: `Please provide a number of steps to the modularScale helper.

`,
			43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
			44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,
			45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,
			46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,
			47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
			48: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
			49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
			50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,
			51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`,
			52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
			53: `fontFace expects localFonts to be an array.

`,
			54: `fontFace expects fileFormats to be an array.

`,
			55: `fontFace expects a name of a font-family.

`,
			56: `linearGradient requries at least 2 color-stops to properly render.

`,
			57: `radialGradient requries at least 2 color-stops to properly render.

`,
			58: `Please supply a filename to retinaImage() as the first argument.

`,
			59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
			60: 'Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n',
			61: `Property must be a string value.

`,
			62: `borderRadius expects a radius value as a string or number as the second argument.

`,
			63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
			64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,
			65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,
			66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,
			67: `You must provide a template to this method.

`,
			68: `You passed an unsupported selector state to this method.

`,
			69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,
			70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,
			71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,
			72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,
			73: `Please provide a valid CSS variable.

`,
			74: `CSS variable not found and no default was provided.

`,
			75: `important requires a valid style object, got a %s instead.

`,
			76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,
			77: `remToPx expects a value in "rem" but you provided it in "%s".

`,
			78: `base must be set in "px" or "%" but you set it in "%s".
`,
		};
		function pe() {
			for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
			var a = t[0],
				n = [],
				o;
			for (o = 1; o < t.length; o += 1) n.push(t[o]);
			return (
				n.forEach(function (s) {
					a = a.replace(/%[a-z]/, s);
				}),
				a
			);
		}
		var f = (function (e) {
			ne(t, e);
			function t(r) {
				for (var a, n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) o[s - 1] = arguments[s];
				return (a = e.call(this, pe.apply(void 0, [ie[r]].concat(o))) || this), ae(a);
			}
			return t;
		})(L(Error));
		function B(e) {
			return Math.round(e * 255);
		}
		function le(e, t, r) {
			return B(e) + ',' + B(t) + ',' + B(r);
		}
		function F(e, t, r, a) {
			if ((a === void 0 && (a = le), t === 0)) return a(r, r, r);
			var n = (((e % 360) + 360) % 360) / 60,
				o = (1 - Math.abs(2 * r - 1)) * t,
				s = o * (1 - Math.abs((n % 2) - 1)),
				p = 0,
				l = 0,
				d = 0;
			n >= 0 && n < 1
				? ((p = o), (l = s))
				: n >= 1 && n < 2
				? ((p = s), (l = o))
				: n >= 2 && n < 3
				? ((l = o), (d = s))
				: n >= 3 && n < 4
				? ((l = s), (d = o))
				: n >= 4 && n < 5
				? ((p = s), (d = o))
				: n >= 5 && n < 6 && ((p = o), (d = s));
			var b = r - o / 2,
				y = p + b,
				c = l + b,
				z = d + b;
			return a(y, c, z);
		}
		var U = {
			aliceblue: 'f0f8ff',
			antiquewhite: 'faebd7',
			aqua: '00ffff',
			aquamarine: '7fffd4',
			azure: 'f0ffff',
			beige: 'f5f5dc',
			bisque: 'ffe4c4',
			black: '000',
			blanchedalmond: 'ffebcd',
			blue: '0000ff',
			blueviolet: '8a2be2',
			brown: 'a52a2a',
			burlywood: 'deb887',
			cadetblue: '5f9ea0',
			chartreuse: '7fff00',
			chocolate: 'd2691e',
			coral: 'ff7f50',
			cornflowerblue: '6495ed',
			cornsilk: 'fff8dc',
			crimson: 'dc143c',
			cyan: '00ffff',
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
			fuchsia: 'ff00ff',
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
			rebeccapurple: '639',
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
		};
		function de(e) {
			if (typeof e != 'string') return e;
			var t = e.toLowerCase();
			return U[t] ? '#' + U[t] : e;
		}
		var fe = /^#[a-fA-F0-9]{6}$/,
			ce = /^#[a-fA-F0-9]{8}$/,
			ue = /^#[a-fA-F0-9]{3}$/,
			ge = /^#[a-fA-F0-9]{4}$/,
			j = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
			he = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
			me = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
			be =
				/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
		function _(e) {
			if (typeof e != 'string') throw new f(3);
			var t = de(e);
			if (t.match(fe)) return { red: parseInt('' + t[1] + t[2], 16), green: parseInt('' + t[3] + t[4], 16), blue: parseInt('' + t[5] + t[6], 16) };
			if (t.match(ce)) {
				var r = parseFloat((parseInt('' + t[7] + t[8], 16) / 255).toFixed(2));
				return { red: parseInt('' + t[1] + t[2], 16), green: parseInt('' + t[3] + t[4], 16), blue: parseInt('' + t[5] + t[6], 16), alpha: r };
			}
			if (t.match(ue)) return { red: parseInt('' + t[1] + t[1], 16), green: parseInt('' + t[2] + t[2], 16), blue: parseInt('' + t[3] + t[3], 16) };
			if (t.match(ge)) {
				var a = parseFloat((parseInt('' + t[4] + t[4], 16) / 255).toFixed(2));
				return { red: parseInt('' + t[1] + t[1], 16), green: parseInt('' + t[2] + t[2], 16), blue: parseInt('' + t[3] + t[3], 16), alpha: a };
			}
			var n = j.exec(t);
			if (n) return { red: parseInt('' + n[1], 10), green: parseInt('' + n[2], 10), blue: parseInt('' + n[3], 10) };
			var o = he.exec(t.substring(0, 50));
			if (o)
				return {
					red: parseInt('' + o[1], 10),
					green: parseInt('' + o[2], 10),
					blue: parseInt('' + o[3], 10),
					alpha: parseFloat('' + o[4]) > 1 ? parseFloat('' + o[4]) / 100 : parseFloat('' + o[4]),
				};
			var s = me.exec(t);
			if (s) {
				var p = parseInt('' + s[1], 10),
					l = parseInt('' + s[2], 10) / 100,
					d = parseInt('' + s[3], 10) / 100,
					b = 'rgb(' + F(p, l, d) + ')',
					y = j.exec(b);
				if (!y) throw new f(4, t, b);
				return { red: parseInt('' + y[1], 10), green: parseInt('' + y[2], 10), blue: parseInt('' + y[3], 10) };
			}
			var c = be.exec(t.substring(0, 50));
			if (c) {
				var z = parseInt('' + c[1], 10),
					te = parseInt('' + c[2], 10) / 100,
					re = parseInt('' + c[3], 10) / 100,
					$ = 'rgb(' + F(z, te, re) + ')',
					S = j.exec($);
				if (!S) throw new f(4, t, $);
				return {
					red: parseInt('' + S[1], 10),
					green: parseInt('' + S[2], 10),
					blue: parseInt('' + S[3], 10),
					alpha: parseFloat('' + c[4]) > 1 ? parseFloat('' + c[4]) / 100 : parseFloat('' + c[4]),
				};
			}
			throw new f(5);
		}
		function ye(e) {
			var t = e.red / 255,
				r = e.green / 255,
				a = e.blue / 255,
				n = Math.max(t, r, a),
				o = Math.min(t, r, a),
				s = (n + o) / 2;
			if (n === o) return e.alpha !== void 0 ? { hue: 0, saturation: 0, lightness: s, alpha: e.alpha } : { hue: 0, saturation: 0, lightness: s };
			var p,
				l = n - o,
				d = s > 0.5 ? l / (2 - n - o) : l / (n + o);
			switch (n) {
				case t:
					p = (r - a) / l + (r < a ? 6 : 0);
					break;
				case r:
					p = (a - t) / l + 2;
					break;
				default:
					p = (t - r) / l + 4;
					break;
			}
			return (p *= 60), e.alpha !== void 0 ? { hue: p, saturation: d, lightness: s, alpha: e.alpha } : { hue: p, saturation: d, lightness: s };
		}
		function V(e) {
			return ye(_(e));
		}
		var ve = function (e) {
				return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6] ? '#' + e[1] + e[3] + e[5] : e;
			},
			A = ve;
		function m(e) {
			var t = e.toString(16);
			return t.length === 1 ? '0' + t : t;
		}
		function M(e) {
			return m(Math.round(e * 255));
		}
		function xe(e, t, r) {
			return A('#' + M(e) + M(t) + M(r));
		}
		function k(e, t, r) {
			return F(e, t, r, xe);
		}
		function Fe(e, t, r) {
			if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number') return k(e, t, r);
			if (typeof e == 'object' && t === void 0 && r === void 0) return k(e.hue, e.saturation, e.lightness);
			throw new f(1);
		}
		function we(e, t, r, a) {
			if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number' && typeof a == 'number')
				return a >= 1 ? k(e, t, r) : 'rgba(' + F(e, t, r) + ',' + a + ')';
			if (typeof e == 'object' && t === void 0 && r === void 0 && a === void 0)
				return e.alpha >= 1 ? k(e.hue, e.saturation, e.lightness) : 'rgba(' + F(e.hue, e.saturation, e.lightness) + ',' + e.alpha + ')';
			throw new f(2);
		}
		function H(e, t, r) {
			if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number') return A('#' + m(e) + m(t) + m(r));
			if (typeof e == 'object' && t === void 0 && r === void 0) return A('#' + m(e.red) + m(e.green) + m(e.blue));
			throw new f(6);
		}
		function w(e, t, r, a) {
			if (typeof e == 'string' && typeof t == 'number') {
				var n = _(e);
				return 'rgba(' + n.red + ',' + n.green + ',' + n.blue + ',' + t + ')';
			} else {
				if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number' && typeof a == 'number')
					return a >= 1 ? H(e, t, r) : 'rgba(' + e + ',' + t + ',' + r + ',' + a + ')';
				if (typeof e == 'object' && t === void 0 && r === void 0 && a === void 0)
					return e.alpha >= 1 ? H(e.red, e.green, e.blue) : 'rgba(' + e.red + ',' + e.green + ',' + e.blue + ',' + e.alpha + ')';
			}
			throw new f(7);
		}
		var Se = function (e) {
				return (
					typeof e.red == 'number' && typeof e.green == 'number' && typeof e.blue == 'number' && (typeof e.alpha != 'number' || typeof e.alpha > 'u')
				);
			},
			Ce = function (e) {
				return typeof e.red == 'number' && typeof e.green == 'number' && typeof e.blue == 'number' && typeof e.alpha == 'number';
			},
			Pe = function (e) {
				return (
					typeof e.hue == 'number' &&
					typeof e.saturation == 'number' &&
					typeof e.lightness == 'number' &&
					(typeof e.alpha != 'number' || typeof e.alpha > 'u')
				);
			},
			ke = function (e) {
				return typeof e.hue == 'number' && typeof e.saturation == 'number' && typeof e.lightness == 'number' && typeof e.alpha == 'number';
			};
		function J(e) {
			if (typeof e != 'object') throw new f(8);
			if (Ce(e)) return w(e);
			if (Se(e)) return H(e);
			if (ke(e)) return we(e);
			if (Pe(e)) return Fe(e);
			throw new f(8);
		}
		function Q(e, t, r) {
			return function () {
				var a = r.concat(Array.prototype.slice.call(arguments));
				return a.length >= t ? e.apply(this, a) : Q(e, t, a);
			};
		}
		function I(e) {
			return Q(e, e.length, []);
		}
		function T(e, t, r) {
			return Math.max(e, Math.min(t, r));
		}
		function Oe(e, t) {
			if (t === 'transparent') return t;
			var r = V(t);
			return J(v({}, r, { lightness: T(0, 1, r.lightness - parseFloat(e)) }));
		}
		var _e = I(Oe),
			Ie = _e;
		function Te(e, t) {
			if (t === 'transparent') return t;
			var r = V(t);
			return J(v({}, r, { lightness: T(0, 1, r.lightness + parseFloat(e)) }));
		}
		var ze = I(Te),
			Be = ze;
		function je(e, t) {
			if (t === 'transparent') return t;
			var r = _(t),
				a = typeof r.alpha == 'number' ? r.alpha : 1,
				n = v({}, r, { alpha: T(0, 1, (a * 100 + parseFloat(e) * 100) / 100) });
			return w(n);
		}
		var yt = I(je);
		function Me(e, t) {
			if (t === 'transparent') return t;
			var r = _(t),
				a = typeof r.alpha == 'number' ? r.alpha : 1,
				n = v({}, r, { alpha: T(0, 1, +(a * 100 - parseFloat(e) * 100).toFixed(2) / 100) });
			return w(n);
		}
		var Re = I(Me),
			Ee = Re,
			i = {
				primary: '#FF4785',
				secondary: '#029CFD',
				tertiary: '#FAFBFC',
				ancillary: '#22a699',
				orange: '#FC521F',
				gold: '#FFAE00',
				green: '#66BF3C',
				seafoam: '#37D5D3',
				purple: '#6F2CAC',
				ultraviolet: '#2A0481',
				lightest: '#FFFFFF',
				lighter: '#F7FAFC',
				light: '#EEF3F6',
				mediumlight: '#ECF4F9',
				medium: '#D9E8F2',
				mediumdark: '#73828C',
				dark: '#5C6870',
				darker: '#454E54',
				darkest: '#2E3438',
				border: 'hsla(203, 50%, 30%, 0.15)',
				positive: '#66BF3C',
				negative: '#FF4400',
				warning: '#E69D00',
				critical: '#FFFFFF',
				defaultText: '#2E3438',
				inverseText: '#FFFFFF',
				positiveText: '#448028',
				negativeText: '#D43900',
				warningText: '#A15C20',
			},
			K = {
				app: '#F6F9FC',
				bar: i.lightest,
				content: i.lightest,
				preview: i.lightest,
				gridCellSize: 10,
				hoverable: Ee(0.9, i.secondary),
				positive: '#E1FFD4',
				negative: '#FEDED2',
				warning: '#FFF5CF',
				critical: '#FF4400',
			},
			O = {
				fonts: {
					base: [
						'"Nunito Sans"',
						'-apple-system',
						'".SFNSText-Regular"',
						'"San Francisco"',
						'BlinkMacSystemFont',
						'"Segoe UI"',
						'"Helvetica Neue"',
						'Helvetica',
						'Arial',
						'sans-serif',
					].join(', '),
					mono: [
						'ui-monospace',
						'Menlo',
						'Monaco',
						'"Roboto Mono"',
						'"Oxygen Mono"',
						'"Ubuntu Monospace"',
						'"Source Code Pro"',
						'"Droid Sans Mono"',
						'"Courier New"',
						'monospace',
					].join(', '),
				},
				weight: { regular: 400, bold: 700 },
				size: { s1: 12, s2: 14, s3: 16, m1: 20, m2: 24, m3: 28, l1: 32, l2: 40, l3: 48, code: 90 },
			},
			De = {
				base: 'light',
				colorPrimary: '#FF4785',
				colorSecondary: '#029CFD',
				appBg: K.app,
				appContentBg: i.lightest,
				appPreviewBg: i.lightest,
				appBorderColor: i.border,
				appBorderRadius: 4,
				fontBase: O.fonts.base,
				fontCode: O.fonts.mono,
				textColor: i.darkest,
				textInverseColor: i.lightest,
				textMutedColor: i.dark,
				barTextColor: i.mediumdark,
				barHoverColor: i.secondary,
				barSelectedColor: i.secondary,
				barBg: i.lightest,
				buttonBg: K.app,
				buttonBorder: i.medium,
				booleanBg: i.mediumlight,
				booleanSelectedBg: i.lightest,
				inputBg: i.lightest,
				inputBorder: i.border,
				inputTextColor: i.darkest,
				inputBorderRadius: 4,
			},
			W = De,
			Le = {
				base: 'dark',
				colorPrimary: '#FF4785',
				colorSecondary: '#029CFD',
				appBg: '#222425',
				appContentBg: '#1B1C1D',
				appPreviewBg: i.lightest,
				appBorderColor: 'rgba(255,255,255,.1)',
				appBorderRadius: 4,
				fontBase: O.fonts.base,
				fontCode: O.fonts.mono,
				textColor: '#C9CDCF',
				textInverseColor: '#222425',
				textMutedColor: '#798186',
				barTextColor: '#798186',
				barHoverColor: i.secondary,
				barSelectedColor: i.secondary,
				barBg: '#292C2E',
				buttonBg: '#222425',
				buttonBorder: 'rgba(255,255,255,.1)',
				booleanBg: '#222425',
				booleanSelectedBg: '#2E3438',
				inputBg: '#1B1C1D',
				inputBorder: 'rgba(255,255,255,.1)',
				inputTextColor: i.lightest,
				inputBorderRadius: 4,
			},
			Ae = Le,
			{ window: R } = q;
		var He = (e) =>
				typeof e != 'string' ? (Y.warn(`Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`), !1) : !0,
			Ge = (e) => !/(gradient|var|calc)/.test(e),
			$e = (e, t) => (e === 'darken' ? w(`${Ie(1, t)}`, 0.95) : e === 'lighten' ? w(`${Be(1, t)}`, 0.95) : t),
			X = (e) => (t) => {
				if (!He(t) || !Ge(t)) return t;
				try {
					return $e(e, t);
				} catch {
					return t;
				}
			},
			vt = X('lighten'),
			xt = X('darken'),
			Ne = () => (!R || !R.matchMedia ? 'light' : R.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
			P = { light: W, dark: Ae, normal: W },
			E = Ne(),
			G = (e = { base: E }, t) => {
				let r = { ...P[E], ...(P[e.base] || {}), ...e, base: P[e.base] ? e.base : E };
				return { ...t, ...r, barSelectedColor: e.barSelectedColor || r.colorSecondary };
			};
		var Z =
			'data:image/svg+xml,<?xml version="1.0" encoding="utf-8"?>%0A<!-- Generator: Adobe Illustrator 24.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->%0A<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"%0A%09 viewBox="0 0 345.5 66.7" style="enable-background:new 0 0 345.5 66.7;" xml:space="preserve">%0A<style type="text/css">%0A%09.st0{fill:url(%23SVGID_1_);}%0A%09.st1{fill:url(%23SVGID_2_);}%0A%09.st2{fill:%23515151;}%0A</style>%0A<g>%0A%09<g>%0A%09%09<g>%0A%09%09%09<g>%0A%09%09%09%09%0A%09%09%09%09%09<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="13.0514" y1="48.76" x2="52.6002" y2="48.76" gradientTransform="matrix(1 0 0 -1 0 68)">%0A%09%09%09%09%09<stop  offset="0" style="stop-color:%233A23AD"/>%0A%09%09%09%09%09<stop  offset="1" style="stop-color:%234C3CE2"/>%0A%09%09%09%09</linearGradient>%0A%09%09%09%09<path class="st0" d="M21.7,13.8C21.7,13.8,21.7,13.8,21.7,13.8c-0.1,0.1-0.3,0.2-0.5,0.2c-7.9,3.8-10.5,14.8-5.8,24.4L44,24.7%0A%09%09%09%09%09c0,0,0,0,0,0c0.2-0.1,0.3-0.1,0.5-0.2C52.3,20.6,55,9.7,50.3,0L21.7,13.8z"/>%0A%09%09%09</g>%0A%09%09%09<g>%0A%09%09%09%09%0A%09%09%09%09%09<linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="8.8014" y1="20.51" x2="48.3458" y2="20.51" gradientTransform="matrix(1 0 0 -1 0 68)">%0A%09%09%09%09%09<stop  offset="0" style="stop-color:%233A23AD"/>%0A%09%09%09%09%09<stop  offset="1" style="stop-color:%234C3CE2"/>%0A%09%09%09%09</linearGradient>%0A%09%09%09%09<path class="st1" d="M17.4,42.1C17.4,42.1,17.4,42.1,17.4,42.1c-0.1,0.1-0.3,0.1-0.5,0.2c-7.9,3.8-10.5,14.8-5.8,24.4l28.6-13.8%0A%09%09%09%09%09c0,0,0,0,0,0c0.2-0.1,0.3-0.1,0.5-0.2c7.9-3.8,10.5-14.8,5.8-24.4L17.4,42.1z"/>%0A%09%09%09</g>%0A%09%09</g>%0A%09</g>%0A%09<g>%0A%09%09<g>%0A%09%09%09<g>%0A%09%09%09%09<g>%0A%09%09%09%09%09<g>%0A%09%09%09%09%09%09<path class="st2" d="M78,38.2c1.7,1.5,5.2,3,7.9,3c2.1,0,3-0.7,3-1.7c0-1.2-1.5-1.6-3.8-1.9c-3.8-0.7-9.2-1.4-9.2-7.1%0A%09%09%09%09%09%09%09c0-3.9,3.4-7.4,9.6-7.4c3.8,0,6.9,1.2,9.3,3L92,30.8c-1.3-1.3-3.9-2.5-6.6-2.5c-1.7,0-2.8,0.6-2.8,1.5c0,1,1.2,1.4,3.6,1.8%0A%09%09%09%09%09%09%09c3.8,0.7,9.4,1.6,9.4,7.5c0,4.2-3.8,7.4-10.2,7.4c-4,0-8.1-1.3-10.4-3.4L78,38.2z"/>%0A%09%09%09%09%09%09<path class="st2" d="M108.8,23.1c6.6,0,11.4,4.9,11.4,12.4V37h-15.9c0.4,2.1,2.4,4,5.7,4c2,0,4.2-0.8,5.5-1.9l3,4.4%0A%09%09%09%09%09%09%09c-2.2,2-5.9,3-9.3,3c-6.9,0-12.2-4.5-12.2-11.8C96.9,28.3,101.8,23.1,108.8,23.1z M104.2,32.4h9.2c-0.2-1.6-1.3-3.8-4.6-3.8%0A%09%09%09%09%09%09%09C105.7,28.6,104.5,30.8,104.2,32.4z"/>%0A%09%09%09%09%09%09<path class="st2" d="M136,43.7c-1.4,1.7-4.1,2.8-6.9,2.8c-3.4,0-7.7-2.3-7.7-7.3c0-5.4,4.2-7,7.7-7c3,0,5.6,0.9,6.9,2.6v-2.8%0A%09%09%09%09%09%09%09c0-1.9-1.7-3.2-4.5-3.2c-2.2,0-4.5,0.8-6.3,2.4l-2.5-4.5c2.9-2.5,6.7-3.5,10.1-3.5c5.4,0,10.4,2,10.4,8.9v14H136L136,43.7%0A%09%09%09%09%09%09%09L136,43.7z M136,38.2c-0.7-1-2.4-1.6-4-1.6c-1.9,0-3.6,0.8-3.6,2.6s1.7,2.6,3.6,2.6c1.6,0,3.2-0.6,4-1.6V38.2z"/>%0A%09%09%09%09%09%09<path class="st2" d="M147.4,23.6h7.1v2.8c1.5-1.8,4.3-3.4,7-3.4V30c-0.4-0.1-1-0.2-1.8-0.2c-1.9,0-4.3,0.8-5.2,2.1V46h-7.1%0A%09%09%09%09%09%09%09L147.4,23.6L147.4,23.6z"/>%0A%09%09%09%09%09%09<path class="st2" d="M174.5,23.1c4.8,0,7.8,2.1,9.2,4.1l-4.6,4.3c-0.9-1.3-2.3-2.1-4.2-2.1c-3,0-5.2,2-5.2,5.4%0A%09%09%09%09%09%09%09s2.3,5.5,5.2,5.5c1.9,0,3.3-0.9,4.2-2.2l4.6,4.3c-1.3,1.9-4.4,4.1-9.2,4.1c-7,0-12.2-4.7-12.2-11.8%0A%09%09%09%09%09%09%09C162.3,27.8,167.5,23.1,174.5,23.1z"/>%0A%09%09%09%09%09%09<path class="st2" d="M201.1,33c0-2.7-1.4-3.6-3.7-3.6c-2.1,0-3.5,1.2-4.3,2.2V46H186V15l7.1-3.3v14.6c1.3-1.6,4-3.3,7.7-3.3%0A%09%09%09%09%09%09%09c5.1,0,7.4,2.9,7.4,7V46h-7.1V33z"/>%0A%09%09%09%09%09%09<path class="st2" d="M213.6,38.2c1.7,1.5,5.2,3,7.9,3c2.1,0,3-0.7,3-1.7c0-1.2-1.5-1.6-3.8-1.9c-3.8-0.7-9.2-1.4-9.2-7.1%0A%09%09%09%09%09%09%09c0-3.9,3.4-7.4,9.6-7.4c3.8,0,6.9,1.2,9.3,3l-2.7,4.7c-1.3-1.3-3.9-2.5-6.6-2.5c-1.7,0-2.8,0.6-2.8,1.5c0,1,1.2,1.4,3.6,1.8%0A%09%09%09%09%09%09%09c3.8,0.7,9.4,1.6,9.4,7.5c0,4.2-3.8,7.4-10.2,7.4c-4,0-8.1-1.3-10.4-3.4L213.6,38.2z"/>%0A%09%09%09%09%09%09<path class="st2" d="M234,54.5V23.6h7.1v2.6c1.8-2.1,4.1-3.1,6.6-3.1c5.6,0,9.8,4.2,9.8,11.7c0,7.6-4.2,11.8-9.8,11.8%0A%09%09%09%09%09%09%09c-2.5,0-4.8-1-6.6-3.2v11.1L234,54.5L234,54.5z M245.4,29.4c-1.5,0-3.4,0.8-4.2,2v6.8c0.9,1.2,2.7,2,4.2,2%0A%09%09%09%09%09%09%09c2.8,0,4.9-2.1,4.9-5.5C250.3,31.4,248.1,29.4,245.4,29.4z"/>%0A%09%09%09%09%09%09<path class="st2" d="M260.4,23.6h7.1v2.8c1.5-1.8,4.3-3.4,7-3.4V30c-0.4-0.1-1-0.2-1.8-0.2c-1.9,0-4.3,0.8-5.2,2.1V46h-7.1%0A%09%09%09%09%09%09%09L260.4,23.6L260.4,23.6z"/>%0A%09%09%09%09%09%09<path class="st2" d="M276.3,16.7c0-2.3,1.8-4.1,4.1-4.1c2.3,0,4.1,1.8,4.1,4.1s-1.8,4.1-4.1,4.1S276.3,19,276.3,16.7z%0A%09%09%09%09%09%09%09 M276.8,23.6h7.1V46h-7.1V23.6z"/>%0A%09%09%09%09%09%09<path class="st2" d="M303.3,33.1c0-2.7-1.4-3.7-3.6-3.7c-2.1,0-3.5,1.2-4.4,2.2V46h-7.1V23.6h7.1v2.7c1.3-1.6,4-3.3,7.7-3.3%0A%09%09%09%09%09%09%09c5.1,0,7.4,3,7.4,7.1V46h-7.1V33.1z"/>%0A%09%09%09%09%09%09<path class="st2" d="M317.1,46.6c1.7,1.8,4.2,2.6,6.8,2.6c2.4,0,5.7-1,5.7-5.1v-1.7c-1.9,2.2-4.1,3.2-6.6,3.2%0A%09%09%09%09%09%09%09c-5.5,0-9.9-3.8-9.9-11.3c0-7.4,4.2-11.2,9.9-11.2c2.5,0,4.8,1,6.6,3.2v-2.6h7.1V44c0,9.1-7.2,11-12.8,11c-3.8,0-7-1-9.9-3.3%0A%09%09%09%09%09%09%09L317.1,46.6z M329.6,31.3c-0.9-1.2-2.8-2-4.2-2c-2.8,0-4.9,1.7-4.9,4.9c0,3.3,2.1,5,4.9,5c1.5,0,3.4-0.8,4.2-2V31.3z"/>%0A%09%09%09%09%09</g>%0A%09%09%09%09</g>%0A%09%09%09</g>%0A%09%09</g>%0A%09</g>%0A</g>%0A</svg>%0A';
		var ee = G({
			base: 'light',
			colorPrimary: '#3a23ad',
			colorSecondary: '#00cee1',
			appBg: '#fafafa',
			barSelectedColor: '#3a23ad',
			brandTitle: 'Searchspring Snap Preact',
			brandImage: Z,
		});
		N.setConfig({ theme: ee });
	})();
} catch (e) {
	console.error('[Storybook] One of your manager-entries failed: ' + import.meta.url, e);
}
