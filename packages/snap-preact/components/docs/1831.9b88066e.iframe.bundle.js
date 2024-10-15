/*! For license information please see 1831.9b88066e.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[1831],
	{
		'../../node_modules/@babel/runtime/helpers/esm/extends.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
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
			__webpack_require__.d(__webpack_exports__, { A: () => _extends });
		},
		'../../node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { A: () => createCache });
			var StyleSheet = (function () {
					function StyleSheet(options) {
						var _this = this;
						(this._insertTag = function (tag) {
							var before;
							(before =
								0 === _this.tags.length
									? _this.insertionPoint
										? _this.insertionPoint.nextSibling
										: _this.prepend
										? _this.container.firstChild
										: _this.before
									: _this.tags[_this.tags.length - 1].nextSibling),
								_this.container.insertBefore(tag, before),
								_this.tags.push(tag);
						}),
							(this.isSpeedy = void 0 === options.speedy || options.speedy),
							(this.tags = []),
							(this.ctr = 0),
							(this.nonce = options.nonce),
							(this.key = options.key),
							(this.container = options.container),
							(this.prepend = options.prepend),
							(this.insertionPoint = options.insertionPoint),
							(this.before = null);
					}
					var _proto = StyleSheet.prototype;
					return (
						(_proto.hydrate = function hydrate(nodes) {
							nodes.forEach(this._insertTag);
						}),
						(_proto.insert = function insert(rule) {
							this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 &&
								this._insertTag(
									(function createStyleElement(options) {
										var tag = document.createElement('style');
										return (
											tag.setAttribute('data-emotion', options.key),
											void 0 !== options.nonce && tag.setAttribute('nonce', options.nonce),
											tag.appendChild(document.createTextNode('')),
											tag.setAttribute('data-s', ''),
											tag
										);
									})(this)
								);
							var tag = this.tags[this.tags.length - 1];
							if (this.isSpeedy) {
								var sheet = (function sheetForTag(tag) {
									if (tag.sheet) return tag.sheet;
									for (var i = 0; i < document.styleSheets.length; i++) if (document.styleSheets[i].ownerNode === tag) return document.styleSheets[i];
								})(tag);
								try {
									sheet.insertRule(rule, sheet.cssRules.length);
								} catch (e) {}
							} else tag.appendChild(document.createTextNode(rule));
							this.ctr++;
						}),
						(_proto.flush = function flush() {
							this.tags.forEach(function (tag) {
								var _tag$parentNode;
								return null == (_tag$parentNode = tag.parentNode) ? void 0 : _tag$parentNode.removeChild(tag);
							}),
								(this.tags = []),
								(this.ctr = 0);
						}),
						StyleSheet
					);
				})(),
				abs = Math.abs,
				Utility_from = String.fromCharCode,
				Utility_assign = Object.assign;
			function trim(value) {
				return value.trim();
			}
			function Utility_replace(value, pattern, replacement) {
				return value.replace(pattern, replacement);
			}
			function indexof(value, search) {
				return value.indexOf(search);
			}
			function Utility_charat(value, index) {
				return 0 | value.charCodeAt(index);
			}
			function Utility_substr(value, begin, end) {
				return value.slice(begin, end);
			}
			function Utility_strlen(value) {
				return value.length;
			}
			function Utility_sizeof(value) {
				return value.length;
			}
			function Utility_append(value, array) {
				return array.push(value), value;
			}
			var line = 1,
				column = 1,
				Tokenizer_length = 0,
				position = 0,
				character = 0,
				characters = '';
			function node(value, root, parent, type, props, children, length) {
				return { value, root, parent, type, props, children, line, column, length, return: '' };
			}
			function Tokenizer_copy(root, props) {
				return Utility_assign(node('', null, null, '', null, null, 0), root, { length: -root.length }, props);
			}
			function prev() {
				return (
					(character = position > 0 ? Utility_charat(characters, --position) : 0), column--, 10 === character && ((column = 1), line--), character
				);
			}
			function next() {
				return (
					(character = position < Tokenizer_length ? Utility_charat(characters, position++) : 0),
					column++,
					10 === character && ((column = 1), line++),
					character
				);
			}
			function peek() {
				return Utility_charat(characters, position);
			}
			function caret() {
				return position;
			}
			function slice(begin, end) {
				return Utility_substr(characters, begin, end);
			}
			function token(type) {
				switch (type) {
					case 0:
					case 9:
					case 10:
					case 13:
					case 32:
						return 5;
					case 33:
					case 43:
					case 44:
					case 47:
					case 62:
					case 64:
					case 126:
					case 59:
					case 123:
					case 125:
						return 4;
					case 58:
						return 3;
					case 34:
					case 39:
					case 40:
					case 91:
						return 2;
					case 41:
					case 93:
						return 1;
				}
				return 0;
			}
			function alloc(value) {
				return (line = column = 1), (Tokenizer_length = Utility_strlen((characters = value))), (position = 0), [];
			}
			function dealloc(value) {
				return (characters = ''), value;
			}
			function delimit(type) {
				return trim(slice(position - 1, delimiter(91 === type ? type + 2 : 40 === type ? type + 1 : type)));
			}
			function whitespace(type) {
				for (; (character = peek()) && character < 33; ) next();
				return token(type) > 2 || token(character) > 3 ? '' : ' ';
			}
			function escaping(index, count) {
				for (
					;
					--count && next() && !(character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97));

				);
				return slice(index, caret() + (count < 6 && 32 == peek() && 32 == next()));
			}
			function delimiter(type) {
				for (; next(); )
					switch (character) {
						case type:
							return position;
						case 34:
						case 39:
							34 !== type && 39 !== type && delimiter(character);
							break;
						case 40:
							41 === type && delimiter(type);
							break;
						case 92:
							next();
					}
				return position;
			}
			function commenter(type, index) {
				for (; next() && type + character !== 57 && (type + character !== 84 || 47 !== peek()); );
				return '/*' + slice(index, position - 1) + '*' + Utility_from(47 === type ? type : next());
			}
			function identifier(index) {
				for (; !token(peek()); ) next();
				return slice(index, position);
			}
			var COMMENT = 'comm',
				Enum_RULESET = 'rule',
				Enum_DECLARATION = 'decl';
			function Serializer_serialize(children, callback) {
				for (var output = '', length = Utility_sizeof(children), i = 0; i < length; i++) output += callback(children[i], i, children, callback) || '';
				return output;
			}
			function stringify(element, index, children, callback) {
				switch (element.type) {
					case '@layer':
						if (element.children.length) break;
					case '@import':
					case Enum_DECLARATION:
						return (element.return = element.return || element.value);
					case COMMENT:
						return '';
					case '@keyframes':
						return (element.return = element.value + '{' + Serializer_serialize(element.children, callback) + '}');
					case Enum_RULESET:
						element.value = element.props.join(',');
				}
				return Utility_strlen((children = Serializer_serialize(element.children, callback)))
					? (element.return = element.value + '{' + children + '}')
					: '';
			}
			function compile(value) {
				return dealloc(parse('', null, null, null, [''], (value = alloc(value)), 0, [0], value));
			}
			function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
				for (
					var index = 0,
						offset = 0,
						length = pseudo,
						atrule = 0,
						property = 0,
						previous = 0,
						variable = 1,
						scanning = 1,
						ampersand = 1,
						character = 0,
						type = '',
						props = rules,
						children = rulesets,
						reference = rule,
						characters = type;
					scanning;

				)
					switch (((previous = character), (character = next()))) {
						case 40:
							if (108 != previous && 58 == Utility_charat(characters, length - 1)) {
								-1 != indexof((characters += Utility_replace(delimit(character), '&', '&\f')), '&\f') && (ampersand = -1);
								break;
							}
						case 34:
						case 39:
						case 91:
							characters += delimit(character);
							break;
						case 9:
						case 10:
						case 13:
						case 32:
							characters += whitespace(previous);
							break;
						case 92:
							characters += escaping(caret() - 1, 7);
							continue;
						case 47:
							switch (peek()) {
								case 42:
								case 47:
									Utility_append(comment(commenter(next(), caret()), root, parent), declarations);
									break;
								default:
									characters += '/';
							}
							break;
						case 123 * variable:
							points[index++] = Utility_strlen(characters) * ampersand;
						case 125 * variable:
						case 59:
						case 0:
							switch (character) {
								case 0:
								case 125:
									scanning = 0;
								case 59 + offset:
									-1 == ampersand && (characters = Utility_replace(characters, /\f/g, '')),
										property > 0 &&
											Utility_strlen(characters) - length &&
											Utility_append(
												property > 32
													? declaration(characters + ';', rule, parent, length - 1)
													: declaration(Utility_replace(characters, ' ', '') + ';', rule, parent, length - 2),
												declarations
											);
									break;
								case 59:
									characters += ';';
								default:
									if (
										(Utility_append(
											(reference = ruleset(characters, root, parent, index, offset, rules, points, type, (props = []), (children = []), length)),
											rulesets
										),
										123 === character)
									)
										if (0 === offset) parse(characters, root, reference, reference, props, rulesets, length, points, children);
										else
											switch (99 === atrule && 110 === Utility_charat(characters, 3) ? 100 : atrule) {
												case 100:
												case 108:
												case 109:
												case 115:
													parse(
														value,
														reference,
														reference,
														rule &&
															Utility_append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, (props = []), length), children),
														rules,
														children,
														length,
														points,
														rule ? props : children
													);
													break;
												default:
													parse(characters, reference, reference, reference, [''], children, 0, points, children);
											}
							}
							(index = offset = property = 0), (variable = ampersand = 1), (type = characters = ''), (length = pseudo);
							break;
						case 58:
							(length = 1 + Utility_strlen(characters)), (property = previous);
						default:
							if (variable < 1)
								if (123 == character) --variable;
								else if (125 == character && 0 == variable++ && 125 == prev()) continue;
							switch (((characters += Utility_from(character)), character * variable)) {
								case 38:
									ampersand = offset > 0 ? 1 : ((characters += '\f'), -1);
									break;
								case 44:
									(points[index++] = (Utility_strlen(characters) - 1) * ampersand), (ampersand = 1);
									break;
								case 64:
									45 === peek() && (characters += delimit(next())),
										(atrule = peek()),
										(offset = length = Utility_strlen((type = characters += identifier(caret())))),
										character++;
									break;
								case 45:
									45 === previous && 2 == Utility_strlen(characters) && (variable = 0);
							}
					}
				return rulesets;
			}
			function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length) {
				for (var post = offset - 1, rule = 0 === offset ? rules : [''], size = Utility_sizeof(rule), i = 0, j = 0, k = 0; i < index; ++i)
					for (var x = 0, y = Utility_substr(value, post + 1, (post = abs((j = points[i])))), z = value; x < size; ++x)
						(z = trim(j > 0 ? rule[x] + ' ' + y : Utility_replace(y, /&\f/g, rule[x]))) && (props[k++] = z);
				return node(value, root, parent, 0 === offset ? Enum_RULESET : type, props, children, length);
			}
			function comment(value, root, parent) {
				return node(
					value,
					root,
					parent,
					COMMENT,
					Utility_from(
						(function Tokenizer_char() {
							return character;
						})()
					),
					Utility_substr(value, 2, -2),
					0
				);
			}
			function declaration(value, root, parent, length) {
				return node(value, root, parent, Enum_DECLARATION, Utility_substr(value, 0, length), Utility_substr(value, length + 1, -1), length);
			}
			var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
					for (
						var previous = 0, character = 0;
						(previous = character), (character = peek()), 38 === previous && 12 === character && (points[index] = 1), !token(character);

					)
						next();
					return slice(begin, position);
				},
				getRules = function getRules(value, points) {
					return dealloc(
						(function toRules(parsed, points) {
							var index = -1,
								character = 44;
							do {
								switch (token(character)) {
									case 0:
										38 === character && 12 === peek() && (points[index] = 1),
											(parsed[index] += identifierWithPointTracking(position - 1, points, index));
										break;
									case 2:
										parsed[index] += delimit(character);
										break;
									case 4:
										if (44 === character) {
											(parsed[++index] = 58 === peek() ? '&\f' : ''), (points[index] = parsed[index].length);
											break;
										}
									default:
										parsed[index] += Utility_from(character);
								}
							} while ((character = next()));
							return parsed;
						})(alloc(value), points)
					);
				},
				fixedElements = new WeakMap(),
				compat = function compat(element) {
					if ('rule' === element.type && element.parent && !(element.length < 1)) {
						for (
							var value = element.value, parent = element.parent, isImplicitRule = element.column === parent.column && element.line === parent.line;
							'rule' !== parent.type;

						)
							if (!(parent = parent.parent)) return;
						if ((1 !== element.props.length || 58 === value.charCodeAt(0) || fixedElements.get(parent)) && !isImplicitRule) {
							fixedElements.set(element, !0);
							for (var points = [], rules = getRules(value, points), parentRules = parent.props, i = 0, k = 0; i < rules.length; i++)
								for (var j = 0; j < parentRules.length; j++, k++)
									element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + ' ' + rules[i];
						}
					}
				},
				removeLabel = function removeLabel(element) {
					if ('decl' === element.type) {
						var value = element.value;
						108 === value.charCodeAt(0) && 98 === value.charCodeAt(2) && ((element.return = ''), (element.value = ''));
					}
				};
			function emotion_cache_browser_esm_prefix(value, length) {
				switch (
					(function hash(value, length) {
						return 45 ^ Utility_charat(value, 0)
							? (((((((length << 2) ^ Utility_charat(value, 0)) << 2) ^ Utility_charat(value, 1)) << 2) ^ Utility_charat(value, 2)) << 2) ^
									Utility_charat(value, 3)
							: 0;
					})(value, length)
				) {
					case 5103:
						return '-webkit-print-' + value + value;
					case 5737:
					case 4201:
					case 3177:
					case 3433:
					case 1641:
					case 4457:
					case 2921:
					case 5572:
					case 6356:
					case 5844:
					case 3191:
					case 6645:
					case 3005:
					case 6391:
					case 5879:
					case 5623:
					case 6135:
					case 4599:
					case 4855:
					case 4215:
					case 6389:
					case 5109:
					case 5365:
					case 5621:
					case 3829:
						return '-webkit-' + value + value;
					case 5349:
					case 4246:
					case 4810:
					case 6968:
					case 2756:
						return '-webkit-' + value + '-moz-' + value + '-ms-' + value + value;
					case 6828:
					case 4268:
						return '-webkit-' + value + '-ms-' + value + value;
					case 6165:
						return '-webkit-' + value + '-ms-flex-' + value + value;
					case 5187:
						return '-webkit-' + value + Utility_replace(value, /(\w+).+(:[^]+)/, '-webkit-box-$1$2-ms-flex-$1$2') + value;
					case 5443:
						return '-webkit-' + value + '-ms-flex-item-' + Utility_replace(value, /flex-|-self/, '') + value;
					case 4675:
						return '-webkit-' + value + '-ms-flex-line-pack' + Utility_replace(value, /align-content|flex-|-self/, '') + value;
					case 5548:
						return '-webkit-' + value + '-ms-' + Utility_replace(value, 'shrink', 'negative') + value;
					case 5292:
						return '-webkit-' + value + '-ms-' + Utility_replace(value, 'basis', 'preferred-size') + value;
					case 6060:
						return (
							'-webkit-box-' + Utility_replace(value, '-grow', '') + '-webkit-' + value + '-ms-' + Utility_replace(value, 'grow', 'positive') + value
						);
					case 4554:
						return '-webkit-' + Utility_replace(value, /([^-])(transform)/g, '$1-webkit-$2') + value;
					case 6187:
						return (
							Utility_replace(Utility_replace(Utility_replace(value, /(zoom-|grab)/, '-webkit-$1'), /(image-set)/, '-webkit-$1'), value, '') + value
						);
					case 5495:
					case 3959:
						return Utility_replace(value, /(image-set\([^]*)/, '-webkit-$1$`$1');
					case 4968:
						return (
							Utility_replace(Utility_replace(value, /(.+:)(flex-)?(.*)/, '-webkit-box-pack:$3-ms-flex-pack:$3'), /s.+-b[^;]+/, 'justify') +
							'-webkit-' +
							value +
							value
						);
					case 4095:
					case 3583:
					case 4068:
					case 2532:
						return Utility_replace(value, /(.+)-inline(.+)/, '-webkit-$1$2') + value;
					case 8116:
					case 7059:
					case 5753:
					case 5535:
					case 5445:
					case 5701:
					case 4933:
					case 4677:
					case 5533:
					case 5789:
					case 5021:
					case 4765:
						if (Utility_strlen(value) - 1 - length > 6)
							switch (Utility_charat(value, length + 1)) {
								case 109:
									if (45 !== Utility_charat(value, length + 4)) break;
								case 102:
									return (
										Utility_replace(
											value,
											/(.+:)(.+)-([^]+)/,
											'$1-webkit-$2-$3$1-moz-' + (108 == Utility_charat(value, length + 3) ? '$3' : '$2-$3')
										) + value
									);
								case 115:
									return ~indexof(value, 'stretch')
										? emotion_cache_browser_esm_prefix(Utility_replace(value, 'stretch', 'fill-available'), length) + value
										: value;
							}
						break;
					case 4949:
						if (115 !== Utility_charat(value, length + 1)) break;
					case 6444:
						switch (Utility_charat(value, Utility_strlen(value) - 3 - (~indexof(value, '!important') && 10))) {
							case 107:
								return Utility_replace(value, ':', ':-webkit-') + value;
							case 101:
								return (
									Utility_replace(
										value,
										/(.+:)([^;!]+)(;|!.+)?/,
										'$1-webkit-' + (45 === Utility_charat(value, 14) ? 'inline-' : '') + 'box$3$1-webkit-$2$3$1-ms-$2box$3'
									) + value
								);
						}
						break;
					case 5936:
						switch (Utility_charat(value, length + 11)) {
							case 114:
								return '-webkit-' + value + '-ms-' + Utility_replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
							case 108:
								return '-webkit-' + value + '-ms-' + Utility_replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
							case 45:
								return '-webkit-' + value + '-ms-' + Utility_replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
						}
						return '-webkit-' + value + '-ms-' + value + value;
				}
				return value;
			}
			var defaultStylisPlugins = [
					function prefixer(element, index, children, callback) {
						if (element.length > -1 && !element.return)
							switch (element.type) {
								case Enum_DECLARATION:
									element.return = emotion_cache_browser_esm_prefix(element.value, element.length);
									break;
								case '@keyframes':
									return Serializer_serialize([Tokenizer_copy(element, { value: Utility_replace(element.value, '@', '@-webkit-') })], callback);
								case Enum_RULESET:
									if (element.length)
										return (function Utility_combine(array, callback) {
											return array.map(callback).join('');
										})(element.props, function (value) {
											switch (
												(function Utility_match(value, pattern) {
													return (value = pattern.exec(value)) ? value[0] : value;
												})(value, /(::plac\w+|:read-\w+)/)
											) {
												case ':read-only':
												case ':read-write':
													return Serializer_serialize(
														[Tokenizer_copy(element, { props: [Utility_replace(value, /:(read-\w+)/, ':-moz-$1')] })],
														callback
													);
												case '::placeholder':
													return Serializer_serialize(
														[
															Tokenizer_copy(element, { props: [Utility_replace(value, /:(plac\w+)/, ':-webkit-input-$1')] }),
															Tokenizer_copy(element, { props: [Utility_replace(value, /:(plac\w+)/, ':-moz-$1')] }),
															Tokenizer_copy(element, { props: [Utility_replace(value, /:(plac\w+)/, '-ms-input-$1')] }),
														],
														callback
													);
											}
											return '';
										});
							}
					},
				],
				createCache = function createCache(options) {
					var key = options.key;
					if ('css' === key) {
						var ssrStyles = document.querySelectorAll('style[data-emotion]:not([data-s])');
						Array.prototype.forEach.call(ssrStyles, function (node) {
							-1 !== node.getAttribute('data-emotion').indexOf(' ') && (document.head.appendChild(node), node.setAttribute('data-s', ''));
						});
					}
					var container,
						_insert,
						stylisPlugins = options.stylisPlugins || defaultStylisPlugins,
						inserted = {},
						nodesToHydrate = [];
					(container = options.container || document.head),
						Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + key + ' "]'), function (node) {
							for (var attrib = node.getAttribute('data-emotion').split(' '), i = 1; i < attrib.length; i++) inserted[attrib[i]] = !0;
							nodesToHydrate.push(node);
						});
					var currentSheet,
						callback,
						finalizingPlugins = [
							stringify,
							((callback = function (rule) {
								currentSheet.insert(rule);
							}),
							function (element) {
								element.root || ((element = element.return) && callback(element));
							}),
						],
						serializer = (function middleware(collection) {
							var length = Utility_sizeof(collection);
							return function (element, index, children, callback) {
								for (var output = '', i = 0; i < length; i++) output += collection[i](element, index, children, callback) || '';
								return output;
							};
						})([compat, removeLabel].concat(stylisPlugins, finalizingPlugins));
					_insert = function insert(selector, serialized, sheet, shouldCache) {
						(currentSheet = sheet),
							(function stylis(styles) {
								Serializer_serialize(compile(styles), serializer);
							})(selector ? selector + '{' + serialized.styles + '}' : serialized.styles),
							shouldCache && (cache.inserted[serialized.name] = !0);
					};
					var cache = {
						key,
						sheet: new StyleSheet({
							key,
							container,
							nonce: options.nonce,
							speedy: options.speedy,
							prepend: options.prepend,
							insertionPoint: options.insertionPoint,
						}),
						nonce: options.nonce,
						inserted,
						registered: {},
						insert: _insert,
					};
					return cache.sheet.hydrate(nodesToHydrate), cache;
				};
		},
		'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, {
				C: () => CacheProvider,
				E: () => Emotion$1,
				T: () => ThemeContext,
				a: () => ThemeProvider,
				b: () => withTheme,
				c: () => createEmotionProps,
				h: () => hasOwn,
				u: () => useTheme,
				w: () => withEmotionCache,
			});
			var compat_module = __webpack_require__('../../node_modules/preact/compat/dist/compat.module.js'),
				emotion_cache_browser_esm = __webpack_require__('../../node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js'),
				esm_extends = __webpack_require__('../../node_modules/@babel/runtime/helpers/esm/extends.js'),
				weakMemoize = function weakMemoize(func) {
					var cache = new WeakMap();
					return function (arg) {
						if (cache.has(arg)) return cache.get(arg);
						var ret = func(arg);
						return cache.set(arg, ret), ret;
					};
				},
				hoist_non_react_statics_cjs = __webpack_require__('../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js'),
				hoist_non_react_statics_cjs_default = __webpack_require__.n(hoist_non_react_statics_cjs),
				hoistNonReactStatics = function (targetComponent, sourceComponent) {
					return hoist_non_react_statics_cjs_default()(targetComponent, sourceComponent);
				},
				emotion_utils_browser_esm = __webpack_require__('../../node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js'),
				emotion_serialize_esm = __webpack_require__('../../node_modules/@emotion/serialize/dist/emotion-serialize.esm.js'),
				emotion_use_insertion_effect_with_fallbacks_browser_esm = __webpack_require__(
					'../../node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js'
				),
				EmotionCacheContext = compat_module.createContext(
					'undefined' != typeof HTMLElement ? (0, emotion_cache_browser_esm.A)({ key: 'css' }) : null
				),
				CacheProvider = EmotionCacheContext.Provider,
				withEmotionCache = function withEmotionCache(func) {
					return (0, compat_module.forwardRef)(function (props, ref) {
						var cache = (0, compat_module.useContext)(EmotionCacheContext);
						return func(props, cache, ref);
					});
				},
				ThemeContext = compat_module.createContext({}),
				useTheme = function useTheme() {
					return compat_module.useContext(ThemeContext);
				},
				createCacheWithTheme = weakMemoize(function (outerTheme) {
					return weakMemoize(function (theme) {
						return (function getTheme(outerTheme, theme) {
							return 'function' == typeof theme ? theme(outerTheme) : (0, esm_extends.A)({}, outerTheme, theme);
						})(outerTheme, theme);
					});
				}),
				ThemeProvider = function ThemeProvider(props) {
					var theme = compat_module.useContext(ThemeContext);
					return (
						props.theme !== theme && (theme = createCacheWithTheme(theme)(props.theme)),
						compat_module.createElement(ThemeContext.Provider, { value: theme }, props.children)
					);
				};
			function withTheme(Component) {
				var componentName = Component.displayName || Component.name || 'Component',
					render = function render(props, ref) {
						var theme = compat_module.useContext(ThemeContext);
						return compat_module.createElement(Component, (0, esm_extends.A)({ theme, ref }, props));
					},
					WithTheme = compat_module.forwardRef(render);
				return (WithTheme.displayName = 'WithTheme(' + componentName + ')'), hoistNonReactStatics(WithTheme, Component);
			}
			var hasOwn = {}.hasOwnProperty,
				typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
				createEmotionProps = function createEmotionProps(type, props) {
					var newProps = {};
					for (var key in props) hasOwn.call(props, key) && (newProps[key] = props[key]);
					return (newProps[typePropName] = type), newProps;
				},
				Insertion = function Insertion(_ref) {
					var cache = _ref.cache,
						serialized = _ref.serialized,
						isStringTag = _ref.isStringTag;
					return (
						(0, emotion_utils_browser_esm.SF)(cache, serialized, isStringTag),
						(0, emotion_use_insertion_effect_with_fallbacks_browser_esm.s)(function () {
							return (0, emotion_utils_browser_esm.sk)(cache, serialized, isStringTag);
						}),
						null
					);
				},
				Emotion$1 = withEmotionCache(function (props, cache, ref) {
					var cssProp = props.css;
					'string' == typeof cssProp && void 0 !== cache.registered[cssProp] && (cssProp = cache.registered[cssProp]);
					var WrappedComponent = props[typePropName],
						registeredStyles = [cssProp],
						className = '';
					'string' == typeof props.className
						? (className = (0, emotion_utils_browser_esm.Rk)(cache.registered, registeredStyles, props.className))
						: null != props.className && (className = props.className + ' ');
					var serialized = (0, emotion_serialize_esm.J)(registeredStyles, void 0, compat_module.useContext(ThemeContext));
					className += cache.key + '-' + serialized.name;
					var newProps = {};
					for (var key in props) hasOwn.call(props, key) && 'css' !== key && key !== typePropName && (newProps[key] = props[key]);
					return (
						(newProps.className = className),
						ref && (newProps.ref = ref),
						compat_module.createElement(
							compat_module.Fragment,
							null,
							compat_module.createElement(Insertion, { cache, serialized, isStringTag: 'string' == typeof WrappedComponent }),
							compat_module.createElement(WrappedComponent, newProps)
						)
					);
				});
		},
		'../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { AH: () => css, i7: () => keyframes, mL: () => Global, n: () => jsx });
			var _emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'
				),
				react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/compat/dist/compat.module.js'),
				_emotion_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('../../node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js'),
				_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'../../node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js'
				),
				_emotion_serialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('../../node_modules/@emotion/serialize/dist/emotion-serialize.esm.js'),
				jsx =
					(__webpack_require__('../../node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js'),
					__webpack_require__('../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js'),
					function jsx(type, props) {
						var args = arguments;
						if (null == props || !_emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.h.call(props, 'css'))
							return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(void 0, args);
						var argsLength = args.length,
							createElementArgArray = new Array(argsLength);
						(createElementArgArray[0] = _emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.E),
							(createElementArgArray[1] = (0, _emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.c)(type, props));
						for (var i = 2; i < argsLength; i++) createElementArgArray[i] = args[i];
						return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
					}),
				Global = (0, _emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.w)(function (props, cache) {
					var styles = props.styles,
						serialized = (0, _emotion_serialize__WEBPACK_IMPORTED_MODULE_2__.J)(
							[styles],
							void 0,
							react__WEBPACK_IMPORTED_MODULE_0__.useContext(_emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.T)
						),
						sheetRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
					return (
						(0, _emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_1__.i)(
							function () {
								var key = cache.key + '-global',
									sheet = new cache.sheet.constructor({
										key,
										nonce: cache.sheet.nonce,
										container: cache.sheet.container,
										speedy: cache.sheet.isSpeedy,
									}),
									rehydrating = !1,
									node = document.querySelector('style[data-emotion="' + key + ' ' + serialized.name + '"]');
								return (
									cache.sheet.tags.length && (sheet.before = cache.sheet.tags[0]),
									null !== node && ((rehydrating = !0), node.setAttribute('data-emotion', key), sheet.hydrate([node])),
									(sheetRef.current = [sheet, rehydrating]),
									function () {
										sheet.flush();
									}
								);
							},
							[cache]
						),
						(0, _emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_1__.i)(
							function () {
								var sheetRefCurrent = sheetRef.current,
									sheet = sheetRefCurrent[0];
								if (sheetRefCurrent[1]) sheetRefCurrent[1] = !1;
								else {
									if (
										(void 0 !== serialized.next && (0, _emotion_utils__WEBPACK_IMPORTED_MODULE_6__.sk)(cache, serialized.next, !0), sheet.tags.length)
									) {
										var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
										(sheet.before = element), sheet.flush();
									}
									cache.insert('', serialized, sheet, !1);
								}
							},
							[cache, serialized.name]
						),
						null
					);
				});
			function css() {
				for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
				return (0, _emotion_serialize__WEBPACK_IMPORTED_MODULE_2__.J)(args);
			}
			var keyframes = function keyframes() {
				var insertable = css.apply(void 0, arguments),
					name = 'animation-' + insertable.name;
				return {
					name,
					styles: '@keyframes ' + name + '{' + insertable.styles + '}',
					anim: 1,
					toString: function toString() {
						return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
					},
				};
			};
		},
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
		'../../node_modules/@emotion/serialize/dist/emotion-serialize.esm.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { J: () => serializeStyles });
			var unitlessKeys = {
				animationIterationCount: 1,
				aspectRatio: 1,
				borderImageOutset: 1,
				borderImageSlice: 1,
				borderImageWidth: 1,
				boxFlex: 1,
				boxFlexGroup: 1,
				boxOrdinalGroup: 1,
				columnCount: 1,
				columns: 1,
				flex: 1,
				flexGrow: 1,
				flexPositive: 1,
				flexShrink: 1,
				flexNegative: 1,
				flexOrder: 1,
				gridRow: 1,
				gridRowEnd: 1,
				gridRowSpan: 1,
				gridRowStart: 1,
				gridColumn: 1,
				gridColumnEnd: 1,
				gridColumnSpan: 1,
				gridColumnStart: 1,
				msGridRow: 1,
				msGridRowSpan: 1,
				msGridColumn: 1,
				msGridColumnSpan: 1,
				fontWeight: 1,
				lineHeight: 1,
				opacity: 1,
				order: 1,
				orphans: 1,
				scale: 1,
				tabSize: 1,
				widows: 1,
				zIndex: 1,
				zoom: 1,
				WebkitLineClamp: 1,
				fillOpacity: 1,
				floodOpacity: 1,
				stopOpacity: 1,
				strokeDasharray: 1,
				strokeDashoffset: 1,
				strokeMiterlimit: 1,
				strokeOpacity: 1,
				strokeWidth: 1,
			};
			function memoize(fn) {
				var cache = Object.create(null);
				return function (arg) {
					return void 0 === cache[arg] && (cache[arg] = fn(arg)), cache[arg];
				};
			}
			var isDevelopment = !1,
				hyphenateRegex = /[A-Z]|^ms/g,
				animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
				isCustomProperty = function isCustomProperty(property) {
					return 45 === property.charCodeAt(1);
				},
				isProcessableValue = function isProcessableValue(value) {
					return null != value && 'boolean' != typeof value;
				},
				processStyleName = memoize(function (styleName) {
					return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
				}),
				processStyleValue = function processStyleValue(key, value) {
					switch (key) {
						case 'animation':
						case 'animationName':
							if ('string' == typeof value)
								return value.replace(animationRegex, function (match, p1, p2) {
									return (cursor = { name: p1, styles: p2, next: cursor }), p1;
								});
					}
					return 1 === unitlessKeys[key] || isCustomProperty(key) || 'number' != typeof value || 0 === value ? value : value + 'px';
				},
				noComponentSelectorMessage =
					'Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.';
			function handleInterpolation(mergedProps, registered, interpolation) {
				if (null == interpolation) return '';
				var componentSelector = interpolation;
				if (void 0 !== componentSelector.__emotion_styles) return componentSelector;
				switch (typeof interpolation) {
					case 'boolean':
						return '';
					case 'object':
						var keyframes = interpolation;
						if (1 === keyframes.anim) return (cursor = { name: keyframes.name, styles: keyframes.styles, next: cursor }), keyframes.name;
						var serializedStyles = interpolation;
						if (void 0 !== serializedStyles.styles) {
							var next = serializedStyles.next;
							if (void 0 !== next) for (; void 0 !== next; ) (cursor = { name: next.name, styles: next.styles, next: cursor }), (next = next.next);
							return serializedStyles.styles + ';';
						}
						return (function createStringFromObject(mergedProps, registered, obj) {
							var string = '';
							if (Array.isArray(obj)) for (var i = 0; i < obj.length; i++) string += handleInterpolation(mergedProps, registered, obj[i]) + ';';
							else
								for (var key in obj) {
									var value = obj[key];
									if ('object' != typeof value) {
										var asString = value;
										null != registered && void 0 !== registered[asString]
											? (string += key + '{' + registered[asString] + '}')
											: isProcessableValue(asString) && (string += processStyleName(key) + ':' + processStyleValue(key, asString) + ';');
									} else {
										if ('NO_COMPONENT_SELECTOR' === key && isDevelopment) throw new Error(noComponentSelectorMessage);
										if (!Array.isArray(value) || 'string' != typeof value[0] || (null != registered && void 0 !== registered[value[0]])) {
											var interpolated = handleInterpolation(mergedProps, registered, value);
											switch (key) {
												case 'animation':
												case 'animationName':
													string += processStyleName(key) + ':' + interpolated + ';';
													break;
												default:
													string += key + '{' + interpolated + '}';
											}
										} else
											for (var _i = 0; _i < value.length; _i++)
												isProcessableValue(value[_i]) && (string += processStyleName(key) + ':' + processStyleValue(key, value[_i]) + ';');
									}
								}
							return string;
						})(mergedProps, registered, interpolation);
					case 'function':
						if (void 0 !== mergedProps) {
							var previousCursor = cursor,
								result = interpolation(mergedProps);
							return (cursor = previousCursor), handleInterpolation(mergedProps, registered, result);
						}
				}
				var asString = interpolation;
				if (null == registered) return asString;
				var cached = registered[asString];
				return void 0 !== cached ? cached : asString;
			}
			var cursor,
				labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
			function serializeStyles(args, registered, mergedProps) {
				if (1 === args.length && 'object' == typeof args[0] && null !== args[0] && void 0 !== args[0].styles) return args[0];
				var stringMode = !0,
					styles = '';
				cursor = void 0;
				var strings = args[0];
				null == strings || void 0 === strings.raw
					? ((stringMode = !1), (styles += handleInterpolation(mergedProps, registered, strings)))
					: (styles += strings[0]);
				for (var i = 1; i < args.length; i++) {
					if (((styles += handleInterpolation(mergedProps, registered, args[i])), stringMode)) styles += strings[i];
				}
				labelPattern.lastIndex = 0;
				for (var match, identifierName = ''; null !== (match = labelPattern.exec(styles)); ) identifierName += '-' + match[1];
				var name =
					(function murmur2(str) {
						for (var k, h = 0, i = 0, len = str.length; len >= 4; ++i, len -= 4)
							(k =
								1540483477 *
									(65535 &
										(k =
											(255 & str.charCodeAt(i)) |
											((255 & str.charCodeAt(++i)) << 8) |
											((255 & str.charCodeAt(++i)) << 16) |
											((255 & str.charCodeAt(++i)) << 24))) +
								((59797 * (k >>> 16)) << 16)),
								(h =
									(1540483477 * (65535 & (k ^= k >>> 24)) + ((59797 * (k >>> 16)) << 16)) ^
									(1540483477 * (65535 & h) + ((59797 * (h >>> 16)) << 16)));
						switch (len) {
							case 3:
								h ^= (255 & str.charCodeAt(i + 2)) << 16;
							case 2:
								h ^= (255 & str.charCodeAt(i + 1)) << 8;
							case 1:
								h = 1540483477 * (65535 & (h ^= 255 & str.charCodeAt(i))) + ((59797 * (h >>> 16)) << 16);
						}
						return (((h = 1540483477 * (65535 & (h ^= h >>> 13)) + ((59797 * (h >>> 16)) << 16)) ^ (h >>> 15)) >>> 0).toString(36);
					})(styles) + identifierName;
				return { name, styles, next: cursor };
			}
		},
		'../../node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, {
				i: () => useInsertionEffectWithLayoutFallback,
				s: () => useInsertionEffectAlwaysWithSyncFallback,
			});
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/compat/dist/compat.module.js'),
				useInsertionEffect = !!react__WEBPACK_IMPORTED_MODULE_0__.useInsertionEffect && react__WEBPACK_IMPORTED_MODULE_0__.useInsertionEffect,
				useInsertionEffectAlwaysWithSyncFallback =
					useInsertionEffect ||
					function syncFallback(create) {
						return create();
					},
				useInsertionEffectWithLayoutFallback = useInsertionEffect || react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;
		},
		'../../node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { Rk: () => getRegisteredStyles, SF: () => registerStyles, sk: () => insertStyles });
			function getRegisteredStyles(registered, registeredStyles, classNames) {
				var rawClassName = '';
				return (
					classNames.split(' ').forEach(function (className) {
						void 0 !== registered[className] ? registeredStyles.push(registered[className] + ';') : (rawClassName += className + ' ');
					}),
					rawClassName
				);
			}
			var registerStyles = function registerStyles(cache, serialized, isStringTag) {
					var className = cache.key + '-' + serialized.name;
					!1 === isStringTag && void 0 === cache.registered[className] && (cache.registered[className] = serialized.styles);
				},
				insertStyles = function insertStyles(cache, serialized, isStringTag) {
					registerStyles(cache, serialized, isStringTag);
					var className = cache.key + '-' + serialized.name;
					if (void 0 === cache.inserted[serialized.name]) {
						var current = serialized;
						do {
							cache.insert(serialized === current ? '.' + className : '', current, cache.sheet, !0), (current = current.next);
						} while (void 0 !== current);
					}
				};
		},
		'../../node_modules/@storybook/addon-docs/dist/preview.mjs': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { parameters: () => parameters });
			var parameters = {
				docs: {
					renderer: async () => {
						let { DocsRenderer } = await Promise.all([__webpack_require__.e(1874), __webpack_require__.e(6384), __webpack_require__.e(4371)]).then(
							__webpack_require__.bind(__webpack_require__, '../../node_modules/@storybook/addon-docs/dist/DocsRenderer-NNNQARDV.mjs')
						);
						return new DocsRenderer();
					},
				},
			};
		},
		'../../node_modules/@storybook/addon-themes/dist/index.mjs': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { gW: () => withThemeFromJSXProvider });
			var _storybook_preview_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('@storybook/preview-api'),
				react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/compat/dist/compat.module.js'),
				__defProp = Object.defineProperty;
			((target, all) => {
				for (var name in all) __defProp(target, name, { get: all[name], enumerable: !0 });
			})(
				{},
				{
					initializeThemeState: () => initializeThemeState,
					pluckThemeFromContext: () => pluckThemeFromContext,
					useThemeParameters: () => useThemeParameters,
				}
			);
			var PARAM_KEY = 'themes',
				GLOBAL_KEY = 'theme',
				DEFAULT_THEME_PARAMETERS = {},
				THEMING_EVENTS = { REGISTER_THEMES: `${`storybook/${PARAM_KEY}}`}/REGISTER_THEMES` };
			function pluckThemeFromContext({ globals }) {
				return globals[GLOBAL_KEY] || '';
			}
			function useThemeParameters() {
				return (0, _storybook_preview_api__WEBPACK_IMPORTED_MODULE_0__.useParameter)(PARAM_KEY, DEFAULT_THEME_PARAMETERS);
			}
			function initializeThemeState(themeNames, defaultTheme) {
				_storybook_preview_api__WEBPACK_IMPORTED_MODULE_0__.addons
					.getChannel()
					.emit(THEMING_EVENTS.REGISTER_THEMES, { defaultTheme, themes: themeNames });
			}
			var withThemeFromJSXProvider = ({ Provider, GlobalStyles, defaultTheme, themes = {} }) => {
				let themeNames = Object.keys(themes),
					initialTheme = defaultTheme || themeNames[0];
				return (
					initializeThemeState(themeNames, initialTheme),
					(storyFn, context) => {
						let { themeOverride } = useThemeParameters(),
							selected = pluckThemeFromContext(context),
							theme = (0, _storybook_preview_api__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
								let selectedThemeName = themeOverride || selected || initialTheme,
									pairs = Object.entries(themes);
								return 1 === pairs.length ? (([_, themeConfig]) => themeConfig)(pairs[0]) : themes[selectedThemeName];
							}, [themes, selected, themeOverride]);
						return Provider
							? react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(
									Provider,
									{ theme },
									GlobalStyles && react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(GlobalStyles, null),
									storyFn()
							  )
							: react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(
									react__WEBPACK_IMPORTED_MODULE_1__.default.Fragment,
									null,
									GlobalStyles && react__WEBPACK_IMPORTED_MODULE_1__.default.createElement(GlobalStyles, null),
									storyFn()
							  );
					}
				);
			};
		},
		'../../node_modules/@storybook/addon-themes/dist/preview.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { globals: () => globals });
			var GLOBAL_KEY = 'theme',
				globals = { [GLOBAL_KEY]: '' };
		},
		'../../node_modules/@storybook/preact-webpack5/node_modules/@storybook/preact/dist/entry-preview-docs.mjs': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { parameters: () => parameters });
			var parameters = { docs: { story: { inline: !0 } } };
		},
		'../../node_modules/@storybook/preact-webpack5/node_modules/@storybook/preact/dist/entry-preview.mjs': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, { parameters: () => parameters, render: () => render2, renderToCanvas: () => renderToCanvas });
			var renderedStory,
				preact_module = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				esm = __webpack_require__('../../node_modules/ts-dedent/esm/index.js'),
				{ h: h2 } = preact_module,
				render2 = (args, context) => {
					let { id, component: Component } = context;
					if (!Component) throw new Error(`Unable to render story ${id} as the component annotation is missing from the default export`);
					return h2(Component, { ...args });
				};
			function preactRender(story, canvasElement) {
				preact_module.FK ? preact_module.XX(story, canvasElement) : (renderedStory = preact_module.XX(story, canvasElement, renderedStory));
			}
			var StoryHarness = ({ showError, name, title, storyFn, canvasElement }) =>
				preact_module.h(storyFn, null) ||
				(showError({
					title: `Expecting a Preact element from the story: "${name}" of "${title}".`,
					description: esm.T`
        Did you forget to return the Preact element from the story?
        Use "() => (<MyComp/>)" or "() => { return <MyComp/>; }" when defining the story.
      `,
				}),
				null);
			function renderToCanvas({ storyFn, title, name, showMain, showError, forceRemount }, canvasElement) {
				forceRemount && preactRender(null, canvasElement),
					showMain(),
					preactRender(preact_module.h(StoryHarness, { name, title, showError, storyFn, canvasElement }), canvasElement);
			}
			var parameters = { renderer: 'preact' };
		},
		'../../node_modules/color-convert/conversions.js': (module, __unused_webpack_exports, __webpack_require__) => {
			const cssKeywords = __webpack_require__('../../node_modules/color-name/index.js'),
				reverseKeywords = {};
			for (const key of Object.keys(cssKeywords)) reverseKeywords[cssKeywords[key]] = key;
			const convert = {
				rgb: { channels: 3, labels: 'rgb' },
				hsl: { channels: 3, labels: 'hsl' },
				hsv: { channels: 3, labels: 'hsv' },
				hwb: { channels: 3, labels: 'hwb' },
				cmyk: { channels: 4, labels: 'cmyk' },
				xyz: { channels: 3, labels: 'xyz' },
				lab: { channels: 3, labels: 'lab' },
				lch: { channels: 3, labels: 'lch' },
				hex: { channels: 1, labels: ['hex'] },
				keyword: { channels: 1, labels: ['keyword'] },
				ansi16: { channels: 1, labels: ['ansi16'] },
				ansi256: { channels: 1, labels: ['ansi256'] },
				hcg: { channels: 3, labels: ['h', 'c', 'g'] },
				apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
				gray: { channels: 1, labels: ['gray'] },
			};
			module.exports = convert;
			for (const model of Object.keys(convert)) {
				if (!('channels' in convert[model])) throw new Error('missing channels property: ' + model);
				if (!('labels' in convert[model])) throw new Error('missing channel labels property: ' + model);
				if (convert[model].labels.length !== convert[model].channels) throw new Error('channel and label counts mismatch: ' + model);
				const { channels, labels } = convert[model];
				delete convert[model].channels,
					delete convert[model].labels,
					Object.defineProperty(convert[model], 'channels', { value: channels }),
					Object.defineProperty(convert[model], 'labels', { value: labels });
			}
			(convert.rgb.hsl = function (rgb) {
				const r = rgb[0] / 255,
					g = rgb[1] / 255,
					b = rgb[2] / 255,
					min = Math.min(r, g, b),
					max = Math.max(r, g, b),
					delta = max - min;
				let h, s;
				max === min ? (h = 0) : r === max ? (h = (g - b) / delta) : g === max ? (h = 2 + (b - r) / delta) : b === max && (h = 4 + (r - g) / delta),
					(h = Math.min(60 * h, 360)),
					h < 0 && (h += 360);
				const l = (min + max) / 2;
				return (s = max === min ? 0 : l <= 0.5 ? delta / (max + min) : delta / (2 - max - min)), [h, 100 * s, 100 * l];
			}),
				(convert.rgb.hsv = function (rgb) {
					let rdif, gdif, bdif, h, s;
					const r = rgb[0] / 255,
						g = rgb[1] / 255,
						b = rgb[2] / 255,
						v = Math.max(r, g, b),
						diff = v - Math.min(r, g, b),
						diffc = function (c) {
							return (v - c) / 6 / diff + 0.5;
						};
					return (
						0 === diff
							? ((h = 0), (s = 0))
							: ((s = diff / v),
							  (rdif = diffc(r)),
							  (gdif = diffc(g)),
							  (bdif = diffc(b)),
							  r === v ? (h = bdif - gdif) : g === v ? (h = 1 / 3 + rdif - bdif) : b === v && (h = 2 / 3 + gdif - rdif),
							  h < 0 ? (h += 1) : h > 1 && (h -= 1)),
						[360 * h, 100 * s, 100 * v]
					);
				}),
				(convert.rgb.hwb = function (rgb) {
					const r = rgb[0],
						g = rgb[1];
					let b = rgb[2];
					const h = convert.rgb.hsl(rgb)[0],
						w = (1 / 255) * Math.min(r, Math.min(g, b));
					return (b = 1 - (1 / 255) * Math.max(r, Math.max(g, b))), [h, 100 * w, 100 * b];
				}),
				(convert.rgb.cmyk = function (rgb) {
					const r = rgb[0] / 255,
						g = rgb[1] / 255,
						b = rgb[2] / 255,
						k = Math.min(1 - r, 1 - g, 1 - b);
					return [100 * ((1 - r - k) / (1 - k) || 0), 100 * ((1 - g - k) / (1 - k) || 0), 100 * ((1 - b - k) / (1 - k) || 0), 100 * k];
				}),
				(convert.rgb.keyword = function (rgb) {
					const reversed = reverseKeywords[rgb];
					if (reversed) return reversed;
					let currentClosestKeyword,
						currentClosestDistance = 1 / 0;
					for (const keyword of Object.keys(cssKeywords)) {
						const value = cssKeywords[keyword],
							distance = ((y = value), ((x = rgb)[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2);
						distance < currentClosestDistance && ((currentClosestDistance = distance), (currentClosestKeyword = keyword));
					}
					var x, y;
					return currentClosestKeyword;
				}),
				(convert.keyword.rgb = function (keyword) {
					return cssKeywords[keyword];
				}),
				(convert.rgb.xyz = function (rgb) {
					let r = rgb[0] / 255,
						g = rgb[1] / 255,
						b = rgb[2] / 255;
					(r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92),
						(g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92),
						(b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92);
					return [
						100 * (0.4124 * r + 0.3576 * g + 0.1805 * b),
						100 * (0.2126 * r + 0.7152 * g + 0.0722 * b),
						100 * (0.0193 * r + 0.1192 * g + 0.9505 * b),
					];
				}),
				(convert.rgb.lab = function (rgb) {
					const xyz = convert.rgb.xyz(rgb);
					let x = xyz[0],
						y = xyz[1],
						z = xyz[2];
					(x /= 95.047),
						(y /= 100),
						(z /= 108.883),
						(x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116),
						(y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116),
						(z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116);
					return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
				}),
				(convert.hsl.rgb = function (hsl) {
					const h = hsl[0] / 360,
						s = hsl[1] / 100,
						l = hsl[2] / 100;
					let t2, t3, val;
					if (0 === s) return (val = 255 * l), [val, val, val];
					t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
					const t1 = 2 * l - t2,
						rgb = [0, 0, 0];
					for (let i = 0; i < 3; i++)
						(t3 = h + (1 / 3) * -(i - 1)),
							t3 < 0 && t3++,
							t3 > 1 && t3--,
							(val = 6 * t3 < 1 ? t1 + 6 * (t2 - t1) * t3 : 2 * t3 < 1 ? t2 : 3 * t3 < 2 ? t1 + (t2 - t1) * (2 / 3 - t3) * 6 : t1),
							(rgb[i] = 255 * val);
					return rgb;
				}),
				(convert.hsl.hsv = function (hsl) {
					const h = hsl[0];
					let s = hsl[1] / 100,
						l = hsl[2] / 100,
						smin = s;
					const lmin = Math.max(l, 0.01);
					(l *= 2), (s *= l <= 1 ? l : 2 - l), (smin *= lmin <= 1 ? lmin : 2 - lmin);
					return [h, 100 * (0 === l ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s)), 100 * ((l + s) / 2)];
				}),
				(convert.hsv.rgb = function (hsv) {
					const h = hsv[0] / 60,
						s = hsv[1] / 100;
					let v = hsv[2] / 100;
					const hi = Math.floor(h) % 6,
						f = h - Math.floor(h),
						p = 255 * v * (1 - s),
						q = 255 * v * (1 - s * f),
						t = 255 * v * (1 - s * (1 - f));
					switch (((v *= 255), hi)) {
						case 0:
							return [v, t, p];
						case 1:
							return [q, v, p];
						case 2:
							return [p, v, t];
						case 3:
							return [p, q, v];
						case 4:
							return [t, p, v];
						case 5:
							return [v, p, q];
					}
				}),
				(convert.hsv.hsl = function (hsv) {
					const h = hsv[0],
						s = hsv[1] / 100,
						v = hsv[2] / 100,
						vmin = Math.max(v, 0.01);
					let sl, l;
					l = (2 - s) * v;
					const lmin = (2 - s) * vmin;
					return (sl = s * vmin), (sl /= lmin <= 1 ? lmin : 2 - lmin), (sl = sl || 0), (l /= 2), [h, 100 * sl, 100 * l];
				}),
				(convert.hwb.rgb = function (hwb) {
					const h = hwb[0] / 360;
					let wh = hwb[1] / 100,
						bl = hwb[2] / 100;
					const ratio = wh + bl;
					let f;
					ratio > 1 && ((wh /= ratio), (bl /= ratio));
					const i = Math.floor(6 * h),
						v = 1 - bl;
					(f = 6 * h - i), 1 & i && (f = 1 - f);
					const n = wh + f * (v - wh);
					let r, g, b;
					switch (i) {
						default:
						case 6:
						case 0:
							(r = v), (g = n), (b = wh);
							break;
						case 1:
							(r = n), (g = v), (b = wh);
							break;
						case 2:
							(r = wh), (g = v), (b = n);
							break;
						case 3:
							(r = wh), (g = n), (b = v);
							break;
						case 4:
							(r = n), (g = wh), (b = v);
							break;
						case 5:
							(r = v), (g = wh), (b = n);
					}
					return [255 * r, 255 * g, 255 * b];
				}),
				(convert.cmyk.rgb = function (cmyk) {
					const c = cmyk[0] / 100,
						m = cmyk[1] / 100,
						y = cmyk[2] / 100,
						k = cmyk[3] / 100;
					return [255 * (1 - Math.min(1, c * (1 - k) + k)), 255 * (1 - Math.min(1, m * (1 - k) + k)), 255 * (1 - Math.min(1, y * (1 - k) + k))];
				}),
				(convert.xyz.rgb = function (xyz) {
					const x = xyz[0] / 100,
						y = xyz[1] / 100,
						z = xyz[2] / 100;
					let r, g, b;
					return (
						(r = 3.2406 * x + -1.5372 * y + -0.4986 * z),
						(g = -0.9689 * x + 1.8758 * y + 0.0415 * z),
						(b = 0.0557 * x + -0.204 * y + 1.057 * z),
						(r = r > 0.0031308 ? 1.055 * r ** (1 / 2.4) - 0.055 : 12.92 * r),
						(g = g > 0.0031308 ? 1.055 * g ** (1 / 2.4) - 0.055 : 12.92 * g),
						(b = b > 0.0031308 ? 1.055 * b ** (1 / 2.4) - 0.055 : 12.92 * b),
						(r = Math.min(Math.max(0, r), 1)),
						(g = Math.min(Math.max(0, g), 1)),
						(b = Math.min(Math.max(0, b), 1)),
						[255 * r, 255 * g, 255 * b]
					);
				}),
				(convert.xyz.lab = function (xyz) {
					let x = xyz[0],
						y = xyz[1],
						z = xyz[2];
					(x /= 95.047),
						(y /= 100),
						(z /= 108.883),
						(x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116),
						(y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116),
						(z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116);
					return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
				}),
				(convert.lab.xyz = function (lab) {
					let x, y, z;
					(y = (lab[0] + 16) / 116), (x = lab[1] / 500 + y), (z = y - lab[2] / 200);
					const y2 = y ** 3,
						x2 = x ** 3,
						z2 = z ** 3;
					return (
						(y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787),
						(x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787),
						(z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787),
						(x *= 95.047),
						(y *= 100),
						(z *= 108.883),
						[x, y, z]
					);
				}),
				(convert.lab.lch = function (lab) {
					const l = lab[0],
						a = lab[1],
						b = lab[2];
					let h;
					(h = (360 * Math.atan2(b, a)) / 2 / Math.PI), h < 0 && (h += 360);
					return [l, Math.sqrt(a * a + b * b), h];
				}),
				(convert.lch.lab = function (lch) {
					const l = lch[0],
						c = lch[1],
						hr = (lch[2] / 360) * 2 * Math.PI;
					return [l, c * Math.cos(hr), c * Math.sin(hr)];
				}),
				(convert.rgb.ansi16 = function (args, saturation = null) {
					const [r, g, b] = args;
					let value = null === saturation ? convert.rgb.hsv(args)[2] : saturation;
					if (((value = Math.round(value / 50)), 0 === value)) return 30;
					let ansi = 30 + ((Math.round(b / 255) << 2) | (Math.round(g / 255) << 1) | Math.round(r / 255));
					return 2 === value && (ansi += 60), ansi;
				}),
				(convert.hsv.ansi16 = function (args) {
					return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
				}),
				(convert.rgb.ansi256 = function (args) {
					const r = args[0],
						g = args[1],
						b = args[2];
					if (r === g && g === b) return r < 8 ? 16 : r > 248 ? 231 : Math.round(((r - 8) / 247) * 24) + 232;
					return 16 + 36 * Math.round((r / 255) * 5) + 6 * Math.round((g / 255) * 5) + Math.round((b / 255) * 5);
				}),
				(convert.ansi16.rgb = function (args) {
					let color = args % 10;
					if (0 === color || 7 === color) return args > 50 && (color += 3.5), (color = (color / 10.5) * 255), [color, color, color];
					const mult = 0.5 * (1 + ~~(args > 50));
					return [(1 & color) * mult * 255, ((color >> 1) & 1) * mult * 255, ((color >> 2) & 1) * mult * 255];
				}),
				(convert.ansi256.rgb = function (args) {
					if (args >= 232) {
						const c = 10 * (args - 232) + 8;
						return [c, c, c];
					}
					let rem;
					args -= 16;
					return [(Math.floor(args / 36) / 5) * 255, (Math.floor((rem = args % 36) / 6) / 5) * 255, ((rem % 6) / 5) * 255];
				}),
				(convert.rgb.hex = function (args) {
					const string = (((255 & Math.round(args[0])) << 16) + ((255 & Math.round(args[1])) << 8) + (255 & Math.round(args[2])))
						.toString(16)
						.toUpperCase();
					return '000000'.substring(string.length) + string;
				}),
				(convert.hex.rgb = function (args) {
					const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
					if (!match) return [0, 0, 0];
					let colorString = match[0];
					3 === match[0].length &&
						(colorString = colorString
							.split('')
							.map((char) => char + char)
							.join(''));
					const integer = parseInt(colorString, 16);
					return [(integer >> 16) & 255, (integer >> 8) & 255, 255 & integer];
				}),
				(convert.rgb.hcg = function (rgb) {
					const r = rgb[0] / 255,
						g = rgb[1] / 255,
						b = rgb[2] / 255,
						max = Math.max(Math.max(r, g), b),
						min = Math.min(Math.min(r, g), b),
						chroma = max - min;
					let grayscale, hue;
					return (
						(grayscale = chroma < 1 ? min / (1 - chroma) : 0),
						(hue = chroma <= 0 ? 0 : max === r ? ((g - b) / chroma) % 6 : max === g ? 2 + (b - r) / chroma : 4 + (r - g) / chroma),
						(hue /= 6),
						(hue %= 1),
						[360 * hue, 100 * chroma, 100 * grayscale]
					);
				}),
				(convert.hsl.hcg = function (hsl) {
					const s = hsl[1] / 100,
						l = hsl[2] / 100,
						c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
					let f = 0;
					return c < 1 && (f = (l - 0.5 * c) / (1 - c)), [hsl[0], 100 * c, 100 * f];
				}),
				(convert.hsv.hcg = function (hsv) {
					const s = hsv[1] / 100,
						v = hsv[2] / 100,
						c = s * v;
					let f = 0;
					return c < 1 && (f = (v - c) / (1 - c)), [hsv[0], 100 * c, 100 * f];
				}),
				(convert.hcg.rgb = function (hcg) {
					const h = hcg[0] / 360,
						c = hcg[1] / 100,
						g = hcg[2] / 100;
					if (0 === c) return [255 * g, 255 * g, 255 * g];
					const pure = [0, 0, 0],
						hi = (h % 1) * 6,
						v = hi % 1,
						w = 1 - v;
					let mg = 0;
					switch (Math.floor(hi)) {
						case 0:
							(pure[0] = 1), (pure[1] = v), (pure[2] = 0);
							break;
						case 1:
							(pure[0] = w), (pure[1] = 1), (pure[2] = 0);
							break;
						case 2:
							(pure[0] = 0), (pure[1] = 1), (pure[2] = v);
							break;
						case 3:
							(pure[0] = 0), (pure[1] = w), (pure[2] = 1);
							break;
						case 4:
							(pure[0] = v), (pure[1] = 0), (pure[2] = 1);
							break;
						default:
							(pure[0] = 1), (pure[1] = 0), (pure[2] = w);
					}
					return (mg = (1 - c) * g), [255 * (c * pure[0] + mg), 255 * (c * pure[1] + mg), 255 * (c * pure[2] + mg)];
				}),
				(convert.hcg.hsv = function (hcg) {
					const c = hcg[1] / 100,
						v = c + (hcg[2] / 100) * (1 - c);
					let f = 0;
					return v > 0 && (f = c / v), [hcg[0], 100 * f, 100 * v];
				}),
				(convert.hcg.hsl = function (hcg) {
					const c = hcg[1] / 100,
						l = (hcg[2] / 100) * (1 - c) + 0.5 * c;
					let s = 0;
					return l > 0 && l < 0.5 ? (s = c / (2 * l)) : l >= 0.5 && l < 1 && (s = c / (2 * (1 - l))), [hcg[0], 100 * s, 100 * l];
				}),
				(convert.hcg.hwb = function (hcg) {
					const c = hcg[1] / 100,
						v = c + (hcg[2] / 100) * (1 - c);
					return [hcg[0], 100 * (v - c), 100 * (1 - v)];
				}),
				(convert.hwb.hcg = function (hwb) {
					const w = hwb[1] / 100,
						v = 1 - hwb[2] / 100,
						c = v - w;
					let g = 0;
					return c < 1 && (g = (v - c) / (1 - c)), [hwb[0], 100 * c, 100 * g];
				}),
				(convert.apple.rgb = function (apple) {
					return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
				}),
				(convert.rgb.apple = function (rgb) {
					return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
				}),
				(convert.gray.rgb = function (args) {
					return [(args[0] / 100) * 255, (args[0] / 100) * 255, (args[0] / 100) * 255];
				}),
				(convert.gray.hsl = function (args) {
					return [0, 0, args[0]];
				}),
				(convert.gray.hsv = convert.gray.hsl),
				(convert.gray.hwb = function (gray) {
					return [0, 100, gray[0]];
				}),
				(convert.gray.cmyk = function (gray) {
					return [0, 0, 0, gray[0]];
				}),
				(convert.gray.lab = function (gray) {
					return [gray[0], 0, 0];
				}),
				(convert.gray.hex = function (gray) {
					const val = 255 & Math.round((gray[0] / 100) * 255),
						string = ((val << 16) + (val << 8) + val).toString(16).toUpperCase();
					return '000000'.substring(string.length) + string;
				}),
				(convert.rgb.gray = function (rgb) {
					return [((rgb[0] + rgb[1] + rgb[2]) / 3 / 255) * 100];
				});
		},
		'../../node_modules/color-convert/index.js': (module, __unused_webpack_exports, __webpack_require__) => {
			const conversions = __webpack_require__('../../node_modules/color-convert/conversions.js'),
				route = __webpack_require__('../../node_modules/color-convert/route.js'),
				convert = {};
			Object.keys(conversions).forEach((fromModel) => {
				(convert[fromModel] = {}),
					Object.defineProperty(convert[fromModel], 'channels', { value: conversions[fromModel].channels }),
					Object.defineProperty(convert[fromModel], 'labels', { value: conversions[fromModel].labels });
				const routes = route(fromModel);
				Object.keys(routes).forEach((toModel) => {
					const fn = routes[toModel];
					(convert[fromModel][toModel] = (function wrapRounded(fn) {
						const wrappedFn = function (...args) {
							const arg0 = args[0];
							if (null == arg0) return arg0;
							arg0.length > 1 && (args = arg0);
							const result = fn(args);
							if ('object' == typeof result) for (let len = result.length, i = 0; i < len; i++) result[i] = Math.round(result[i]);
							return result;
						};
						return 'conversion' in fn && (wrappedFn.conversion = fn.conversion), wrappedFn;
					})(fn)),
						(convert[fromModel][toModel].raw = (function wrapRaw(fn) {
							const wrappedFn = function (...args) {
								const arg0 = args[0];
								return null == arg0 ? arg0 : (arg0.length > 1 && (args = arg0), fn(args));
							};
							return 'conversion' in fn && (wrappedFn.conversion = fn.conversion), wrappedFn;
						})(fn));
				});
			}),
				(module.exports = convert);
		},
		'../../node_modules/color-convert/route.js': (module, __unused_webpack_exports, __webpack_require__) => {
			const conversions = __webpack_require__('../../node_modules/color-convert/conversions.js');
			function deriveBFS(fromModel) {
				const graph = (function buildGraph() {
						const graph = {},
							models = Object.keys(conversions);
						for (let len = models.length, i = 0; i < len; i++) graph[models[i]] = { distance: -1, parent: null };
						return graph;
					})(),
					queue = [fromModel];
				for (graph[fromModel].distance = 0; queue.length; ) {
					const current = queue.pop(),
						adjacents = Object.keys(conversions[current]);
					for (let len = adjacents.length, i = 0; i < len; i++) {
						const adjacent = adjacents[i],
							node = graph[adjacent];
						-1 === node.distance && ((node.distance = graph[current].distance + 1), (node.parent = current), queue.unshift(adjacent));
					}
				}
				return graph;
			}
			function link(from, to) {
				return function (args) {
					return to(from(args));
				};
			}
			function wrapConversion(toModel, graph) {
				const path = [graph[toModel].parent, toModel];
				let fn = conversions[graph[toModel].parent][toModel],
					cur = graph[toModel].parent;
				for (; graph[cur].parent; ) path.unshift(graph[cur].parent), (fn = link(conversions[graph[cur].parent][cur], fn)), (cur = graph[cur].parent);
				return (fn.conversion = path), fn;
			}
			module.exports = function (fromModel) {
				const graph = deriveBFS(fromModel),
					conversion = {},
					models = Object.keys(graph);
				for (let len = models.length, i = 0; i < len; i++) {
					const toModel = models[i];
					null !== graph[toModel].parent && (conversion[toModel] = wrapConversion(toModel, graph));
				}
				return conversion;
			};
		},
		'../../node_modules/color-name/index.js': (module) => {
			'use strict';
			module.exports = {
				aliceblue: [240, 248, 255],
				antiquewhite: [250, 235, 215],
				aqua: [0, 255, 255],
				aquamarine: [127, 255, 212],
				azure: [240, 255, 255],
				beige: [245, 245, 220],
				bisque: [255, 228, 196],
				black: [0, 0, 0],
				blanchedalmond: [255, 235, 205],
				blue: [0, 0, 255],
				blueviolet: [138, 43, 226],
				brown: [165, 42, 42],
				burlywood: [222, 184, 135],
				cadetblue: [95, 158, 160],
				chartreuse: [127, 255, 0],
				chocolate: [210, 105, 30],
				coral: [255, 127, 80],
				cornflowerblue: [100, 149, 237],
				cornsilk: [255, 248, 220],
				crimson: [220, 20, 60],
				cyan: [0, 255, 255],
				darkblue: [0, 0, 139],
				darkcyan: [0, 139, 139],
				darkgoldenrod: [184, 134, 11],
				darkgray: [169, 169, 169],
				darkgreen: [0, 100, 0],
				darkgrey: [169, 169, 169],
				darkkhaki: [189, 183, 107],
				darkmagenta: [139, 0, 139],
				darkolivegreen: [85, 107, 47],
				darkorange: [255, 140, 0],
				darkorchid: [153, 50, 204],
				darkred: [139, 0, 0],
				darksalmon: [233, 150, 122],
				darkseagreen: [143, 188, 143],
				darkslateblue: [72, 61, 139],
				darkslategray: [47, 79, 79],
				darkslategrey: [47, 79, 79],
				darkturquoise: [0, 206, 209],
				darkviolet: [148, 0, 211],
				deeppink: [255, 20, 147],
				deepskyblue: [0, 191, 255],
				dimgray: [105, 105, 105],
				dimgrey: [105, 105, 105],
				dodgerblue: [30, 144, 255],
				firebrick: [178, 34, 34],
				floralwhite: [255, 250, 240],
				forestgreen: [34, 139, 34],
				fuchsia: [255, 0, 255],
				gainsboro: [220, 220, 220],
				ghostwhite: [248, 248, 255],
				gold: [255, 215, 0],
				goldenrod: [218, 165, 32],
				gray: [128, 128, 128],
				green: [0, 128, 0],
				greenyellow: [173, 255, 47],
				grey: [128, 128, 128],
				honeydew: [240, 255, 240],
				hotpink: [255, 105, 180],
				indianred: [205, 92, 92],
				indigo: [75, 0, 130],
				ivory: [255, 255, 240],
				khaki: [240, 230, 140],
				lavender: [230, 230, 250],
				lavenderblush: [255, 240, 245],
				lawngreen: [124, 252, 0],
				lemonchiffon: [255, 250, 205],
				lightblue: [173, 216, 230],
				lightcoral: [240, 128, 128],
				lightcyan: [224, 255, 255],
				lightgoldenrodyellow: [250, 250, 210],
				lightgray: [211, 211, 211],
				lightgreen: [144, 238, 144],
				lightgrey: [211, 211, 211],
				lightpink: [255, 182, 193],
				lightsalmon: [255, 160, 122],
				lightseagreen: [32, 178, 170],
				lightskyblue: [135, 206, 250],
				lightslategray: [119, 136, 153],
				lightslategrey: [119, 136, 153],
				lightsteelblue: [176, 196, 222],
				lightyellow: [255, 255, 224],
				lime: [0, 255, 0],
				limegreen: [50, 205, 50],
				linen: [250, 240, 230],
				magenta: [255, 0, 255],
				maroon: [128, 0, 0],
				mediumaquamarine: [102, 205, 170],
				mediumblue: [0, 0, 205],
				mediumorchid: [186, 85, 211],
				mediumpurple: [147, 112, 219],
				mediumseagreen: [60, 179, 113],
				mediumslateblue: [123, 104, 238],
				mediumspringgreen: [0, 250, 154],
				mediumturquoise: [72, 209, 204],
				mediumvioletred: [199, 21, 133],
				midnightblue: [25, 25, 112],
				mintcream: [245, 255, 250],
				mistyrose: [255, 228, 225],
				moccasin: [255, 228, 181],
				navajowhite: [255, 222, 173],
				navy: [0, 0, 128],
				oldlace: [253, 245, 230],
				olive: [128, 128, 0],
				olivedrab: [107, 142, 35],
				orange: [255, 165, 0],
				orangered: [255, 69, 0],
				orchid: [218, 112, 214],
				palegoldenrod: [238, 232, 170],
				palegreen: [152, 251, 152],
				paleturquoise: [175, 238, 238],
				palevioletred: [219, 112, 147],
				papayawhip: [255, 239, 213],
				peachpuff: [255, 218, 185],
				peru: [205, 133, 63],
				pink: [255, 192, 203],
				plum: [221, 160, 221],
				powderblue: [176, 224, 230],
				purple: [128, 0, 128],
				rebeccapurple: [102, 51, 153],
				red: [255, 0, 0],
				rosybrown: [188, 143, 143],
				royalblue: [65, 105, 225],
				saddlebrown: [139, 69, 19],
				salmon: [250, 128, 114],
				sandybrown: [244, 164, 96],
				seagreen: [46, 139, 87],
				seashell: [255, 245, 238],
				sienna: [160, 82, 45],
				silver: [192, 192, 192],
				skyblue: [135, 206, 235],
				slateblue: [106, 90, 205],
				slategray: [112, 128, 144],
				slategrey: [112, 128, 144],
				snow: [255, 250, 250],
				springgreen: [0, 255, 127],
				steelblue: [70, 130, 180],
				tan: [210, 180, 140],
				teal: [0, 128, 128],
				thistle: [216, 191, 216],
				tomato: [255, 99, 71],
				turquoise: [64, 224, 208],
				violet: [238, 130, 238],
				wheat: [245, 222, 179],
				white: [255, 255, 255],
				whitesmoke: [245, 245, 245],
				yellow: [255, 255, 0],
				yellowgreen: [154, 205, 50],
			};
		},
		'../../node_modules/color-string/index.js': (module, __unused_webpack_exports, __webpack_require__) => {
			var colorNames = __webpack_require__('../../node_modules/color-name/index.js'),
				swizzle = __webpack_require__('../../node_modules/simple-swizzle/index.js'),
				hasOwnProperty = Object.hasOwnProperty,
				reverseNames = Object.create(null);
			for (var name in colorNames) hasOwnProperty.call(colorNames, name) && (reverseNames[colorNames[name]] = name);
			var cs = (module.exports = { to: {}, get: {} });
			function clamp(num, min, max) {
				return Math.min(Math.max(min, num), max);
			}
			function hexDouble(num) {
				var str = Math.round(num).toString(16).toUpperCase();
				return str.length < 2 ? '0' + str : str;
			}
			(cs.get = function (string) {
				var val, model;
				switch (string.substring(0, 3).toLowerCase()) {
					case 'hsl':
						(val = cs.get.hsl(string)), (model = 'hsl');
						break;
					case 'hwb':
						(val = cs.get.hwb(string)), (model = 'hwb');
						break;
					default:
						(val = cs.get.rgb(string)), (model = 'rgb');
				}
				return val ? { model, value: val } : null;
			}),
				(cs.get.rgb = function (string) {
					if (!string) return null;
					var match,
						i,
						hexAlpha,
						rgb = [0, 0, 0, 1];
					if ((match = string.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i))) {
						for (hexAlpha = match[2], match = match[1], i = 0; i < 3; i++) {
							var i2 = 2 * i;
							rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
						}
						hexAlpha && (rgb[3] = parseInt(hexAlpha, 16) / 255);
					} else if ((match = string.match(/^#([a-f0-9]{3,4})$/i))) {
						for (hexAlpha = (match = match[1])[3], i = 0; i < 3; i++) rgb[i] = parseInt(match[i] + match[i], 16);
						hexAlpha && (rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255);
					} else if (
						(match = string.match(
							/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/
						))
					) {
						for (i = 0; i < 3; i++) rgb[i] = parseInt(match[i + 1], 0);
						match[4] && (match[5] ? (rgb[3] = 0.01 * parseFloat(match[4])) : (rgb[3] = parseFloat(match[4])));
					} else {
						if (
							!(match = string.match(
								/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/
							))
						)
							return (match = string.match(/^(\w+)$/))
								? 'transparent' === match[1]
									? [0, 0, 0, 0]
									: hasOwnProperty.call(colorNames, match[1])
									? (((rgb = colorNames[match[1]])[3] = 1), rgb)
									: null
								: null;
						for (i = 0; i < 3; i++) rgb[i] = Math.round(2.55 * parseFloat(match[i + 1]));
						match[4] && (match[5] ? (rgb[3] = 0.01 * parseFloat(match[4])) : (rgb[3] = parseFloat(match[4])));
					}
					for (i = 0; i < 3; i++) rgb[i] = clamp(rgb[i], 0, 255);
					return (rgb[3] = clamp(rgb[3], 0, 1)), rgb;
				}),
				(cs.get.hsl = function (string) {
					if (!string) return null;
					var match = string.match(
						/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/
					);
					if (match) {
						var alpha = parseFloat(match[4]);
						return [
							((parseFloat(match[1]) % 360) + 360) % 360,
							clamp(parseFloat(match[2]), 0, 100),
							clamp(parseFloat(match[3]), 0, 100),
							clamp(isNaN(alpha) ? 1 : alpha, 0, 1),
						];
					}
					return null;
				}),
				(cs.get.hwb = function (string) {
					if (!string) return null;
					var match = string.match(
						/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/
					);
					if (match) {
						var alpha = parseFloat(match[4]);
						return [
							((parseFloat(match[1]) % 360) + 360) % 360,
							clamp(parseFloat(match[2]), 0, 100),
							clamp(parseFloat(match[3]), 0, 100),
							clamp(isNaN(alpha) ? 1 : alpha, 0, 1),
						];
					}
					return null;
				}),
				(cs.to.hex = function () {
					var rgba = swizzle(arguments);
					return '#' + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(255 * rgba[3])) : '');
				}),
				(cs.to.rgb = function () {
					var rgba = swizzle(arguments);
					return rgba.length < 4 || 1 === rgba[3]
						? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
						: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
				}),
				(cs.to.rgb.percent = function () {
					var rgba = swizzle(arguments),
						r = Math.round((rgba[0] / 255) * 100),
						g = Math.round((rgba[1] / 255) * 100),
						b = Math.round((rgba[2] / 255) * 100);
					return rgba.length < 4 || 1 === rgba[3]
						? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
						: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
				}),
				(cs.to.hsl = function () {
					var hsla = swizzle(arguments);
					return hsla.length < 4 || 1 === hsla[3]
						? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
						: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
				}),
				(cs.to.hwb = function () {
					var hwba = swizzle(arguments),
						a = '';
					return hwba.length >= 4 && 1 !== hwba[3] && (a = ', ' + hwba[3]), 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
				}),
				(cs.to.keyword = function (rgb) {
					return reverseNames[rgb.slice(0, 3)];
				});
		},
		'../../node_modules/color/index.js': (module, __unused_webpack_exports, __webpack_require__) => {
			const colorString = __webpack_require__('../../node_modules/color-string/index.js'),
				convert = __webpack_require__('../../node_modules/color-convert/index.js'),
				skippedModels = ['keyword', 'gray', 'hex'],
				hashedModelKeys = {};
			for (const model of Object.keys(convert)) hashedModelKeys[[...convert[model].labels].sort().join('')] = model;
			const limiters = {};
			function Color(object, model) {
				if (!(this instanceof Color)) return new Color(object, model);
				if ((model && model in skippedModels && (model = null), model && !(model in convert))) throw new Error('Unknown model: ' + model);
				let i, channels;
				if (null == object) (this.model = 'rgb'), (this.color = [0, 0, 0]), (this.valpha = 1);
				else if (object instanceof Color) (this.model = object.model), (this.color = [...object.color]), (this.valpha = object.valpha);
				else if ('string' == typeof object) {
					const result = colorString.get(object);
					if (null === result) throw new Error('Unable to parse color from string: ' + object);
					(this.model = result.model),
						(channels = convert[this.model].channels),
						(this.color = result.value.slice(0, channels)),
						(this.valpha = 'number' == typeof result.value[channels] ? result.value[channels] : 1);
				} else if (object.length > 0) {
					(this.model = model || 'rgb'), (channels = convert[this.model].channels);
					const newArray = Array.prototype.slice.call(object, 0, channels);
					(this.color = zeroArray(newArray, channels)), (this.valpha = 'number' == typeof object[channels] ? object[channels] : 1);
				} else if ('number' == typeof object)
					(this.model = 'rgb'), (this.color = [(object >> 16) & 255, (object >> 8) & 255, 255 & object]), (this.valpha = 1);
				else {
					this.valpha = 1;
					const keys = Object.keys(object);
					'alpha' in object && (keys.splice(keys.indexOf('alpha'), 1), (this.valpha = 'number' == typeof object.alpha ? object.alpha : 0));
					const hashedKeys = keys.sort().join('');
					if (!(hashedKeys in hashedModelKeys)) throw new Error('Unable to parse color from object: ' + JSON.stringify(object));
					this.model = hashedModelKeys[hashedKeys];
					const { labels } = convert[this.model],
						color = [];
					for (i = 0; i < labels.length; i++) color.push(object[labels[i]]);
					this.color = zeroArray(color);
				}
				if (limiters[this.model])
					for (channels = convert[this.model].channels, i = 0; i < channels; i++) {
						const limit = limiters[this.model][i];
						limit && (this.color[i] = limit(this.color[i]));
					}
				(this.valpha = Math.max(0, Math.min(1, this.valpha))), Object.freeze && Object.freeze(this);
			}
			Color.prototype = {
				toString() {
					return this.string();
				},
				toJSON() {
					return this[this.model]();
				},
				string(places) {
					let self = this.model in colorString.to ? this : this.rgb();
					self = self.round('number' == typeof places ? places : 1);
					const args = 1 === self.valpha ? self.color : [...self.color, this.valpha];
					return colorString.to[self.model](args);
				},
				percentString(places) {
					const self = this.rgb().round('number' == typeof places ? places : 1),
						args = 1 === self.valpha ? self.color : [...self.color, this.valpha];
					return colorString.to.rgb.percent(args);
				},
				array() {
					return 1 === this.valpha ? [...this.color] : [...this.color, this.valpha];
				},
				object() {
					const result = {},
						{ channels } = convert[this.model],
						{ labels } = convert[this.model];
					for (let i = 0; i < channels; i++) result[labels[i]] = this.color[i];
					return 1 !== this.valpha && (result.alpha = this.valpha), result;
				},
				unitArray() {
					const rgb = this.rgb().color;
					return (rgb[0] /= 255), (rgb[1] /= 255), (rgb[2] /= 255), 1 !== this.valpha && rgb.push(this.valpha), rgb;
				},
				unitObject() {
					const rgb = this.rgb().object();
					return (rgb.r /= 255), (rgb.g /= 255), (rgb.b /= 255), 1 !== this.valpha && (rgb.alpha = this.valpha), rgb;
				},
				round(places) {
					return (places = Math.max(places || 0, 0)), new Color([...this.color.map(roundToPlace(places)), this.valpha], this.model);
				},
				alpha(value) {
					return void 0 !== value ? new Color([...this.color, Math.max(0, Math.min(1, value))], this.model) : this.valpha;
				},
				red: getset('rgb', 0, maxfn(255)),
				green: getset('rgb', 1, maxfn(255)),
				blue: getset('rgb', 2, maxfn(255)),
				hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, (value) => ((value % 360) + 360) % 360),
				saturationl: getset('hsl', 1, maxfn(100)),
				lightness: getset('hsl', 2, maxfn(100)),
				saturationv: getset('hsv', 1, maxfn(100)),
				value: getset('hsv', 2, maxfn(100)),
				chroma: getset('hcg', 1, maxfn(100)),
				gray: getset('hcg', 2, maxfn(100)),
				white: getset('hwb', 1, maxfn(100)),
				wblack: getset('hwb', 2, maxfn(100)),
				cyan: getset('cmyk', 0, maxfn(100)),
				magenta: getset('cmyk', 1, maxfn(100)),
				yellow: getset('cmyk', 2, maxfn(100)),
				black: getset('cmyk', 3, maxfn(100)),
				x: getset('xyz', 0, maxfn(95.047)),
				y: getset('xyz', 1, maxfn(100)),
				z: getset('xyz', 2, maxfn(108.833)),
				l: getset('lab', 0, maxfn(100)),
				a: getset('lab', 1),
				b: getset('lab', 2),
				keyword(value) {
					return void 0 !== value ? new Color(value) : convert[this.model].keyword(this.color);
				},
				hex(value) {
					return void 0 !== value ? new Color(value) : colorString.to.hex(this.rgb().round().color);
				},
				hexa(value) {
					if (void 0 !== value) return new Color(value);
					const rgbArray = this.rgb().round().color;
					let alphaHex = Math.round(255 * this.valpha)
						.toString(16)
						.toUpperCase();
					return 1 === alphaHex.length && (alphaHex = '0' + alphaHex), colorString.to.hex(rgbArray) + alphaHex;
				},
				rgbNumber() {
					const rgb = this.rgb().color;
					return ((255 & rgb[0]) << 16) | ((255 & rgb[1]) << 8) | (255 & rgb[2]);
				},
				luminosity() {
					const rgb = this.rgb().color,
						lum = [];
					for (const [i, element] of rgb.entries()) {
						const chan = element / 255;
						lum[i] = chan <= 0.04045 ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
					}
					return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
				},
				contrast(color2) {
					const lum1 = this.luminosity(),
						lum2 = color2.luminosity();
					return lum1 > lum2 ? (lum1 + 0.05) / (lum2 + 0.05) : (lum2 + 0.05) / (lum1 + 0.05);
				},
				level(color2) {
					const contrastRatio = this.contrast(color2);
					return contrastRatio >= 7 ? 'AAA' : contrastRatio >= 4.5 ? 'AA' : '';
				},
				isDark() {
					const rgb = this.rgb().color;
					return (2126 * rgb[0] + 7152 * rgb[1] + 722 * rgb[2]) / 1e4 < 128;
				},
				isLight() {
					return !this.isDark();
				},
				negate() {
					const rgb = this.rgb();
					for (let i = 0; i < 3; i++) rgb.color[i] = 255 - rgb.color[i];
					return rgb;
				},
				lighten(ratio) {
					const hsl = this.hsl();
					return (hsl.color[2] += hsl.color[2] * ratio), hsl;
				},
				darken(ratio) {
					const hsl = this.hsl();
					return (hsl.color[2] -= hsl.color[2] * ratio), hsl;
				},
				saturate(ratio) {
					const hsl = this.hsl();
					return (hsl.color[1] += hsl.color[1] * ratio), hsl;
				},
				desaturate(ratio) {
					const hsl = this.hsl();
					return (hsl.color[1] -= hsl.color[1] * ratio), hsl;
				},
				whiten(ratio) {
					const hwb = this.hwb();
					return (hwb.color[1] += hwb.color[1] * ratio), hwb;
				},
				blacken(ratio) {
					const hwb = this.hwb();
					return (hwb.color[2] += hwb.color[2] * ratio), hwb;
				},
				grayscale() {
					const rgb = this.rgb().color,
						value = 0.3 * rgb[0] + 0.59 * rgb[1] + 0.11 * rgb[2];
					return Color.rgb(value, value, value);
				},
				fade(ratio) {
					return this.alpha(this.valpha - this.valpha * ratio);
				},
				opaquer(ratio) {
					return this.alpha(this.valpha + this.valpha * ratio);
				},
				rotate(degrees) {
					const hsl = this.hsl();
					let hue = hsl.color[0];
					return (hue = (hue + degrees) % 360), (hue = hue < 0 ? 360 + hue : hue), (hsl.color[0] = hue), hsl;
				},
				mix(mixinColor, weight) {
					if (!mixinColor || !mixinColor.rgb)
						throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
					const color1 = mixinColor.rgb(),
						color2 = this.rgb(),
						p = void 0 === weight ? 0.5 : weight,
						w = 2 * p - 1,
						a = color1.alpha() - color2.alpha(),
						w1 = ((w * a == -1 ? w : (w + a) / (1 + w * a)) + 1) / 2,
						w2 = 1 - w1;
					return Color.rgb(
						w1 * color1.red() + w2 * color2.red(),
						w1 * color1.green() + w2 * color2.green(),
						w1 * color1.blue() + w2 * color2.blue(),
						color1.alpha() * p + color2.alpha() * (1 - p)
					);
				},
			};
			for (const model of Object.keys(convert)) {
				if (skippedModels.includes(model)) continue;
				const { channels } = convert[model];
				(Color.prototype[model] = function (...args) {
					return this.model === model
						? new Color(this)
						: args.length > 0
						? new Color(args, model)
						: new Color([...((value = convert[this.model][model].raw(this.color)), Array.isArray(value) ? value : [value]), this.valpha], model);
					var value;
				}),
					(Color[model] = function (...args) {
						let color = args[0];
						return 'number' == typeof color && (color = zeroArray(args, channels)), new Color(color, model);
					});
			}
			function roundToPlace(places) {
				return function (number) {
					return (function roundTo(number, places) {
						return Number(number.toFixed(places));
					})(number, places);
				};
			}
			function getset(model, channel, modifier) {
				model = Array.isArray(model) ? model : [model];
				for (const m of model) (limiters[m] || (limiters[m] = []))[channel] = modifier;
				return (
					(model = model[0]),
					function (value) {
						let result;
						return void 0 !== value
							? (modifier && (value = modifier(value)), (result = this[model]()), (result.color[channel] = value), result)
							: ((result = this[model]().color[channel]), modifier && (result = modifier(result)), result);
					}
				);
			}
			function maxfn(max) {
				return function (v) {
					return Math.max(0, Math.min(max, v));
				};
			}
			function zeroArray(array, length) {
				for (let i = 0; i < length; i++) 'number' != typeof array[i] && (array[i] = 0);
				return array;
			}
			module.exports = Color;
		},
		'../../node_modules/css-loader/dist/runtime/api.js': (module) => {
			'use strict';
			module.exports = function (cssWithMappingToString) {
				var list = [];
				return (
					(list.toString = function toString() {
						return this.map(function (item) {
							var content = '',
								needLayer = void 0 !== item[5];
							return (
								item[4] && (content += '@supports ('.concat(item[4], ') {')),
								item[2] && (content += '@media '.concat(item[2], ' {')),
								needLayer && (content += '@layer'.concat(item[5].length > 0 ? ' '.concat(item[5]) : '', ' {')),
								(content += cssWithMappingToString(item)),
								needLayer && (content += '}'),
								item[2] && (content += '}'),
								item[4] && (content += '}'),
								content
							);
						}).join('');
					}),
					(list.i = function i(modules, media, dedupe, supports, layer) {
						'string' == typeof modules && (modules = [[null, modules, void 0]]);
						var alreadyImportedModules = {};
						if (dedupe)
							for (var k = 0; k < this.length; k++) {
								var id = this[k][0];
								null != id && (alreadyImportedModules[id] = !0);
							}
						for (var _k = 0; _k < modules.length; _k++) {
							var item = [].concat(modules[_k]);
							(dedupe && alreadyImportedModules[item[0]]) ||
								(void 0 !== layer &&
									(void 0 === item[5] || (item[1] = '@layer'.concat(item[5].length > 0 ? ' '.concat(item[5]) : '', ' {').concat(item[1], '}')),
									(item[5] = layer)),
								media && (item[2] ? ((item[1] = '@media '.concat(item[2], ' {').concat(item[1], '}')), (item[2] = media)) : (item[2] = media)),
								supports &&
									(item[4]
										? ((item[1] = '@supports ('.concat(item[4], ') {').concat(item[1], '}')), (item[4] = supports))
										: (item[4] = ''.concat(supports))),
								list.push(item));
						}
					}),
					list
				);
			};
		},
		'../../node_modules/css-loader/dist/runtime/sourceMaps.js': (module) => {
			'use strict';
			module.exports = function (item) {
				var content = item[1],
					cssMapping = item[3];
				if (!cssMapping) return content;
				if ('function' == typeof btoa) {
					var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),
						data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(base64),
						sourceMapping = '/*# '.concat(data, ' */');
					return [content].concat([sourceMapping]).join('\n');
				}
				return [content].join('\n');
			};
		},
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
		'../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js': (module, __unused_webpack_exports, __webpack_require__) => {
			'use strict';
			var reactIs = __webpack_require__('../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js'),
				REACT_STATICS = {
					childContextTypes: !0,
					contextType: !0,
					contextTypes: !0,
					defaultProps: !0,
					displayName: !0,
					getDefaultProps: !0,
					getDerivedStateFromError: !0,
					getDerivedStateFromProps: !0,
					mixins: !0,
					propTypes: !0,
					type: !0,
				},
				KNOWN_STATICS = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
				MEMO_STATICS = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
				TYPE_STATICS = {};
			function getStatics(component) {
				return reactIs.isMemo(component) ? MEMO_STATICS : TYPE_STATICS[component.$$typeof] || REACT_STATICS;
			}
			(TYPE_STATICS[reactIs.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }),
				(TYPE_STATICS[reactIs.Memo] = MEMO_STATICS);
			var defineProperty = Object.defineProperty,
				getOwnPropertyNames = Object.getOwnPropertyNames,
				getOwnPropertySymbols = Object.getOwnPropertySymbols,
				getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
				getPrototypeOf = Object.getPrototypeOf,
				objectPrototype = Object.prototype;
			module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
				if ('string' != typeof sourceComponent) {
					if (objectPrototype) {
						var inheritedComponent = getPrototypeOf(sourceComponent);
						inheritedComponent && inheritedComponent !== objectPrototype && hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
					}
					var keys = getOwnPropertyNames(sourceComponent);
					getOwnPropertySymbols && (keys = keys.concat(getOwnPropertySymbols(sourceComponent)));
					for (var targetStatics = getStatics(targetComponent), sourceStatics = getStatics(sourceComponent), i = 0; i < keys.length; ++i) {
						var key = keys[i];
						if (
							!(KNOWN_STATICS[key] || (blacklist && blacklist[key]) || (sourceStatics && sourceStatics[key]) || (targetStatics && targetStatics[key]))
						) {
							var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
							try {
								defineProperty(targetComponent, key, descriptor);
							} catch (e) {}
						}
					}
				}
				return targetComponent;
			};
		},
		'../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js': (__unused_webpack_module, exports) => {
			'use strict';
			var b = 'function' == typeof Symbol && Symbol.for,
				c = b ? Symbol.for('react.element') : 60103,
				d = b ? Symbol.for('react.portal') : 60106,
				e = b ? Symbol.for('react.fragment') : 60107,
				f = b ? Symbol.for('react.strict_mode') : 60108,
				g = b ? Symbol.for('react.profiler') : 60114,
				h = b ? Symbol.for('react.provider') : 60109,
				k = b ? Symbol.for('react.context') : 60110,
				l = b ? Symbol.for('react.async_mode') : 60111,
				m = b ? Symbol.for('react.concurrent_mode') : 60111,
				n = b ? Symbol.for('react.forward_ref') : 60112,
				p = b ? Symbol.for('react.suspense') : 60113,
				q = b ? Symbol.for('react.suspense_list') : 60120,
				r = b ? Symbol.for('react.memo') : 60115,
				t = b ? Symbol.for('react.lazy') : 60116,
				v = b ? Symbol.for('react.block') : 60121,
				w = b ? Symbol.for('react.fundamental') : 60117,
				x = b ? Symbol.for('react.responder') : 60118,
				y = b ? Symbol.for('react.scope') : 60119;
			function z(a) {
				if ('object' == typeof a && null !== a) {
					var u = a.$$typeof;
					switch (u) {
						case c:
							switch ((a = a.type)) {
								case l:
								case m:
								case e:
								case g:
								case f:
								case p:
									return a;
								default:
									switch ((a = a && a.$$typeof)) {
										case k:
										case n:
										case t:
										case r:
										case h:
											return a;
										default:
											return u;
									}
							}
						case d:
							return u;
					}
				}
			}
			function A(a) {
				return z(a) === m;
			}
			(exports.AsyncMode = l),
				(exports.ConcurrentMode = m),
				(exports.ContextConsumer = k),
				(exports.ContextProvider = h),
				(exports.Element = c),
				(exports.ForwardRef = n),
				(exports.Fragment = e),
				(exports.Lazy = t),
				(exports.Memo = r),
				(exports.Portal = d),
				(exports.Profiler = g),
				(exports.StrictMode = f),
				(exports.Suspense = p),
				(exports.isAsyncMode = function (a) {
					return A(a) || z(a) === l;
				}),
				(exports.isConcurrentMode = A),
				(exports.isContextConsumer = function (a) {
					return z(a) === k;
				}),
				(exports.isContextProvider = function (a) {
					return z(a) === h;
				}),
				(exports.isElement = function (a) {
					return 'object' == typeof a && null !== a && a.$$typeof === c;
				}),
				(exports.isForwardRef = function (a) {
					return z(a) === n;
				}),
				(exports.isFragment = function (a) {
					return z(a) === e;
				}),
				(exports.isLazy = function (a) {
					return z(a) === t;
				}),
				(exports.isMemo = function (a) {
					return z(a) === r;
				}),
				(exports.isPortal = function (a) {
					return z(a) === d;
				}),
				(exports.isProfiler = function (a) {
					return z(a) === g;
				}),
				(exports.isStrictMode = function (a) {
					return z(a) === f;
				}),
				(exports.isSuspense = function (a) {
					return z(a) === p;
				}),
				(exports.isValidElementType = function (a) {
					return (
						'string' == typeof a ||
						'function' == typeof a ||
						a === e ||
						a === m ||
						a === g ||
						a === f ||
						a === p ||
						a === q ||
						('object' == typeof a &&
							null !== a &&
							(a.$$typeof === t ||
								a.$$typeof === r ||
								a.$$typeof === h ||
								a.$$typeof === k ||
								a.$$typeof === n ||
								a.$$typeof === w ||
								a.$$typeof === x ||
								a.$$typeof === y ||
								a.$$typeof === v))
					);
				}),
				(exports.typeOf = z);
		},
		'../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js': (module, __unused_webpack_exports, __webpack_require__) => {
			'use strict';
			module.exports = __webpack_require__('../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js');
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
		'../../node_modules/mobx-react/dist/mobxreact.esm.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
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
		'../../node_modules/preact/compat/dist/compat.module.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Children: () => k,
					Component: () => preact__WEBPACK_IMPORTED_MODULE_1__.uA,
					Fragment: () => preact__WEBPACK_IMPORTED_MODULE_1__.FK,
					PureComponent: () => E,
					StrictMode: () => cn,
					Suspense: () => T,
					SuspenseList: () => D,
					__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => X,
					cloneElement: () => rn,
					createContext: () => preact__WEBPACK_IMPORTED_MODULE_1__.q6,
					createElement: () => preact__WEBPACK_IMPORTED_MODULE_1__.n,
					createFactory: () => tn,
					createPortal: () => V,
					createRef: () => preact__WEBPACK_IMPORTED_MODULE_1__._3,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
					findDOMNode: () => on,
					flushSync: () => fn,
					forwardRef: () => R,
					hydrate: () => B,
					isValidElement: () => en,
					lazy: () => U,
					memo: () => g,
					render: () => z,
					startTransition: () => an,
					unmountComponentAtNode: () => un,
					unstable_batchedUpdates: () => ln,
					useCallback: () => preact_hooks__WEBPACK_IMPORTED_MODULE_0__.hb,
					useContext: () => preact_hooks__WEBPACK_IMPORTED_MODULE_0__.NT,
					useDebugValue: () => preact_hooks__WEBPACK_IMPORTED_MODULE_0__.MN,
					useDeferredValue: () => sn,
					useEffect: () => preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ,
					useErrorBoundary: () => preact_hooks__WEBPACK_IMPORTED_MODULE_0__.Md,
					useImperativeHandle: () => preact_hooks__WEBPACK_IMPORTED_MODULE_0__.Yn,
					useInsertionEffect: () => vn,
					useLayoutEffect: () => preact_hooks__WEBPACK_IMPORTED_MODULE_0__.Nf,
					useMemo: () => preact_hooks__WEBPACK_IMPORTED_MODULE_0__.Kr,
					useReducer: () => preact_hooks__WEBPACK_IMPORTED_MODULE_0__.WO,
					useRef: () => preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li,
					useState: () => preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0,
					useSyncExternalStore: () => dn,
					useTransition: () => hn,
					version: () => nn,
				});
			var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/hooks/dist/hooks.module.js'),
				preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js');
			function S(n, t) {
				for (var e in t) n[e] = t[e];
				return n;
			}
			function C(n, t) {
				for (var e in n) if ('__source' !== e && !(e in t)) return !0;
				for (var r in t) if ('__source' !== r && n[r] !== t[r]) return !0;
				return !1;
			}
			function E(n) {
				this.props = n;
			}
			function g(n, t) {
				function e(n) {
					var e = this.props.ref,
						r = e == n.ref;
					return !r && e && (e.call ? e(null) : (e.current = null)), t ? !t(this.props, n) || !r : C(this.props, n);
				}
				function r(t) {
					return (this.shouldComponentUpdate = e), (0, preact__WEBPACK_IMPORTED_MODULE_1__.n)(n, t);
				}
				return (r.displayName = 'Memo(' + (n.displayName || n.name) + ')'), (r.prototype.isReactComponent = !0), (r.__f = !0), r;
			}
			((E.prototype = new preact__WEBPACK_IMPORTED_MODULE_1__.uA()).isPureReactComponent = !0),
				(E.prototype.shouldComponentUpdate = function (n, t) {
					return C(this.props, n) || C(this.state, t);
				});
			var w = preact__WEBPACK_IMPORTED_MODULE_1__.fF.__b;
			preact__WEBPACK_IMPORTED_MODULE_1__.fF.__b = function (n) {
				n.type && n.type.__f && n.ref && ((n.props.ref = n.ref), (n.ref = null)), w && w(n);
			};
			var x = ('undefined' != typeof Symbol && Symbol.for && Symbol.for('react.forward_ref')) || 3911;
			function R(n) {
				function t(t) {
					var e = S({}, t);
					return delete e.ref, n(e, t.ref || null);
				}
				return (
					(t.$$typeof = x),
					(t.render = t),
					(t.prototype.isReactComponent = t.__f = !0),
					(t.displayName = 'ForwardRef(' + (n.displayName || n.name) + ')'),
					t
				);
			}
			var N = function (n, t) {
					return null == n ? null : (0, preact__WEBPACK_IMPORTED_MODULE_1__.v2)((0, preact__WEBPACK_IMPORTED_MODULE_1__.v2)(n).map(t));
				},
				k = {
					map: N,
					forEach: N,
					count: function (n) {
						return n ? (0, preact__WEBPACK_IMPORTED_MODULE_1__.v2)(n).length : 0;
					},
					only: function (n) {
						var t = (0, preact__WEBPACK_IMPORTED_MODULE_1__.v2)(n);
						if (1 !== t.length) throw 'Children.only';
						return t[0];
					},
					toArray: preact__WEBPACK_IMPORTED_MODULE_1__.v2,
				},
				A = preact__WEBPACK_IMPORTED_MODULE_1__.fF.__e;
			preact__WEBPACK_IMPORTED_MODULE_1__.fF.__e = function (n, t, e, r) {
				if (n.then)
					for (var u, o = t; (o = o.__); ) if ((u = o.__c) && u.__c) return null == t.__e && ((t.__e = e.__e), (t.__k = e.__k)), u.__c(n, t);
				A(n, t, e, r);
			};
			var O = preact__WEBPACK_IMPORTED_MODULE_1__.fF.unmount;
			function T() {
				(this.__u = 0), (this.t = null), (this.__b = null);
			}
			function L(n) {
				var t = n.__.__c;
				return t && t.__a && t.__a(n);
			}
			function U(n) {
				var t, e, r;
				function u(u) {
					if (
						(t ||
							(t = n()).then(
								function (n) {
									e = n.default || n;
								},
								function (n) {
									r = n;
								}
							),
						r)
					)
						throw r;
					if (!e) throw t;
					return (0, preact__WEBPACK_IMPORTED_MODULE_1__.n)(e, u);
				}
				return (u.displayName = 'Lazy'), (u.__f = !0), u;
			}
			function D() {
				(this.u = null), (this.o = null);
			}
			(preact__WEBPACK_IMPORTED_MODULE_1__.fF.unmount = function (n) {
				var t = n.__c;
				t && t.__R && t.__R(), t && !0 === n.__h && (n.type = null), O && O(n);
			}),
				((T.prototype = new preact__WEBPACK_IMPORTED_MODULE_1__.uA()).__c = function (n, t) {
					var e = t.__c,
						r = this;
					null == r.t && (r.t = []), r.t.push(e);
					var u = L(r.__v),
						o = !1,
						i = function () {
							o || ((o = !0), (e.__R = null), u ? u(l) : l());
						};
					e.__R = i;
					var l = function () {
							if (!--r.__u) {
								if (r.state.__a) {
									var n = r.state.__a;
									r.__v.__k[0] = (function n(t, e, r) {
										return (
											t &&
												((t.__v = null),
												(t.__k =
													t.__k &&
													t.__k.map(function (t) {
														return n(t, e, r);
													})),
												t.__c && t.__c.__P === e && (t.__e && r.insertBefore(t.__e, t.__d), (t.__c.__e = !0), (t.__c.__P = r))),
											t
										);
									})(n, n.__c.__P, n.__c.__O);
								}
								var t;
								for (r.setState({ __a: (r.__b = null) }); (t = r.t.pop()); ) t.forceUpdate();
							}
						},
						f = !0 === t.__h;
					r.__u++ || f || r.setState({ __a: (r.__b = r.__v.__k[0]) }), n.then(i, i);
				}),
				(T.prototype.componentWillUnmount = function () {
					this.t = [];
				}),
				(T.prototype.render = function (n, t) {
					if (this.__b) {
						if (this.__v.__k) {
							var e = document.createElement('div'),
								r = this.__v.__k[0].__c;
							this.__v.__k[0] = (function n(t, e, r) {
								return (
									t &&
										(t.__c &&
											t.__c.__H &&
											(t.__c.__H.__.forEach(function (n) {
												'function' == typeof n.__c && n.__c();
											}),
											(t.__c.__H = null)),
										null != (t = S({}, t)).__c && (t.__c.__P === r && (t.__c.__P = e), (t.__c = null)),
										(t.__k =
											t.__k &&
											t.__k.map(function (t) {
												return n(t, e, r);
											}))),
									t
								);
							})(this.__b, e, (r.__O = r.__P));
						}
						this.__b = null;
					}
					var u = t.__a && (0, preact__WEBPACK_IMPORTED_MODULE_1__.n)(preact__WEBPACK_IMPORTED_MODULE_1__.FK, null, n.fallback);
					return (
						u && (u.__h = null),
						[(0, preact__WEBPACK_IMPORTED_MODULE_1__.n)(preact__WEBPACK_IMPORTED_MODULE_1__.FK, null, t.__a ? null : n.children), u]
					);
				});
			var F = function (n, t, e) {
				if ((++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ('t' !== n.props.revealOrder[0] || !n.o.size)))
					for (e = n.u; e; ) {
						for (; e.length > 3; ) e.pop()();
						if (e[1] < e[0]) break;
						n.u = e = e[2];
					}
			};
			function I(n) {
				return (
					(this.getChildContext = function () {
						return n.context;
					}),
					n.children
				);
			}
			function M(n) {
				var t = this,
					e = n.i;
				(t.componentWillUnmount = function () {
					(0, preact__WEBPACK_IMPORTED_MODULE_1__.XX)(null, t.l), (t.l = null), (t.i = null);
				}),
					t.i && t.i !== e && t.componentWillUnmount(),
					n.__v
						? (t.l ||
								((t.i = e),
								(t.l = {
									nodeType: 1,
									parentNode: e,
									childNodes: [],
									appendChild: function (n) {
										this.childNodes.push(n), t.i.appendChild(n);
									},
									insertBefore: function (n, e) {
										this.childNodes.push(n), t.i.appendChild(n);
									},
									removeChild: function (n) {
										this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), t.i.removeChild(n);
									},
								})),
						  (0, preact__WEBPACK_IMPORTED_MODULE_1__.XX)((0, preact__WEBPACK_IMPORTED_MODULE_1__.n)(I, { context: t.context }, n.__v), t.l))
						: t.l && t.componentWillUnmount();
			}
			function V(n, t) {
				var e = (0, preact__WEBPACK_IMPORTED_MODULE_1__.n)(M, { __v: n, i: t });
				return (e.containerInfo = t), e;
			}
			((D.prototype = new preact__WEBPACK_IMPORTED_MODULE_1__.uA()).__a = function (n) {
				var t = this,
					e = L(t.__v),
					r = t.o.get(n);
				return (
					r[0]++,
					function (u) {
						var o = function () {
							t.props.revealOrder ? (r.push(u), F(t, n, r)) : u();
						};
						e ? e(o) : o();
					}
				);
			}),
				(D.prototype.render = function (n) {
					(this.u = null), (this.o = new Map());
					var t = (0, preact__WEBPACK_IMPORTED_MODULE_1__.v2)(n.children);
					n.revealOrder && 'b' === n.revealOrder[0] && t.reverse();
					for (var e = t.length; e--; ) this.o.set(t[e], (this.u = [1, 0, this.u]));
					return n.children;
				}),
				(D.prototype.componentDidUpdate = D.prototype.componentDidMount =
					function () {
						var n = this;
						this.o.forEach(function (t, e) {
							F(n, e, t);
						});
					});
			var W = ('undefined' != typeof Symbol && Symbol.for && Symbol.for('react.element')) || 60103,
				P =
					/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|shape|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
				$ = 'undefined' != typeof document,
				j = function (n) {
					return ('undefined' != typeof Symbol && 'symbol' == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(n);
				};
			function z(n, t, e) {
				return (
					null == t.__k && (t.textContent = ''), (0, preact__WEBPACK_IMPORTED_MODULE_1__.XX)(n, t), 'function' == typeof e && e(), n ? n.__c : null
				);
			}
			function B(n, t, e) {
				return (0, preact__WEBPACK_IMPORTED_MODULE_1__.Qv)(n, t), 'function' == typeof e && e(), n ? n.__c : null;
			}
			(preact__WEBPACK_IMPORTED_MODULE_1__.uA.prototype.isReactComponent = {}),
				['componentWillMount', 'componentWillReceiveProps', 'componentWillUpdate'].forEach(function (n) {
					Object.defineProperty(preact__WEBPACK_IMPORTED_MODULE_1__.uA.prototype, n, {
						configurable: !0,
						get: function () {
							return this['UNSAFE_' + n];
						},
						set: function (t) {
							Object.defineProperty(this, n, { configurable: !0, writable: !0, value: t });
						},
					});
				});
			var H = preact__WEBPACK_IMPORTED_MODULE_1__.fF.event;
			function Z() {}
			function Y() {
				return this.cancelBubble;
			}
			function q() {
				return this.defaultPrevented;
			}
			preact__WEBPACK_IMPORTED_MODULE_1__.fF.event = function (n) {
				return H && (n = H(n)), (n.persist = Z), (n.isPropagationStopped = Y), (n.isDefaultPrevented = q), (n.nativeEvent = n);
			};
			var G,
				J = {
					configurable: !0,
					get: function () {
						return this.class;
					},
				},
				K = preact__WEBPACK_IMPORTED_MODULE_1__.fF.vnode;
			preact__WEBPACK_IMPORTED_MODULE_1__.fF.vnode = function (n) {
				var t = n.type,
					e = n.props,
					r = e;
				if ('string' == typeof t) {
					var u = -1 === t.indexOf('-');
					for (var o in ((r = {}), e)) {
						var i = e[o];
						($ && 'children' === o && 'noscript' === t) ||
							('value' === o && 'defaultValue' in e && null == i) ||
							('defaultValue' === o && 'value' in e && null == e.value
								? (o = 'value')
								: 'download' === o && !0 === i
								? (i = '')
								: /ondoubleclick/i.test(o)
								? (o = 'ondblclick')
								: /^onchange(textarea|input)/i.test(o + t) && !j(e.type)
								? (o = 'oninput')
								: /^onfocus$/i.test(o)
								? (o = 'onfocusin')
								: /^onblur$/i.test(o)
								? (o = 'onfocusout')
								: /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)
								? (o = o.toLowerCase())
								: u && P.test(o)
								? (o = o.replace(/[A-Z0-9]/, '-$&').toLowerCase())
								: null === i && (i = void 0),
							/^oninput$/i.test(o) && ((o = o.toLowerCase()), r[o] && (o = 'oninputCapture')),
							(r[o] = i));
					}
					'select' == t &&
						r.multiple &&
						Array.isArray(r.value) &&
						(r.value = (0, preact__WEBPACK_IMPORTED_MODULE_1__.v2)(e.children).forEach(function (n) {
							n.props.selected = -1 != r.value.indexOf(n.props.value);
						})),
						'select' == t &&
							null != r.defaultValue &&
							(r.value = (0, preact__WEBPACK_IMPORTED_MODULE_1__.v2)(e.children).forEach(function (n) {
								n.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(n.props.value) : r.defaultValue == n.props.value;
							})),
						(n.props = r),
						e.class != e.className &&
							((J.enumerable = 'className' in e), null != e.className && (r.class = e.className), Object.defineProperty(r, 'className', J));
				}
				(n.$$typeof = W), K && K(n);
			};
			var Q = preact__WEBPACK_IMPORTED_MODULE_1__.fF.__r;
			preact__WEBPACK_IMPORTED_MODULE_1__.fF.__r = function (n) {
				Q && Q(n), (G = n.__c);
			};
			var X = {
					ReactCurrentDispatcher: {
						current: {
							readContext: function (n) {
								return G.__n[n.__c].props.value;
							},
						},
					},
				},
				nn = '17.0.2';
			function tn(n) {
				return preact__WEBPACK_IMPORTED_MODULE_1__.n.bind(null, n);
			}
			function en(n) {
				return !!n && n.$$typeof === W;
			}
			function rn(n) {
				return en(n) ? preact__WEBPACK_IMPORTED_MODULE_1__.Ob.apply(null, arguments) : n;
			}
			function un(n) {
				return !!n.__k && ((0, preact__WEBPACK_IMPORTED_MODULE_1__.XX)(null, n), !0);
			}
			function on(n) {
				return (n && (n.base || (1 === n.nodeType && n))) || null;
			}
			var ln = function (n, t) {
					return n(t);
				},
				fn = function (n, t) {
					return n(t);
				},
				cn = preact__WEBPACK_IMPORTED_MODULE_1__.FK;
			function an(n) {
				n();
			}
			function sn(n) {
				return n;
			}
			function hn() {
				return [!1, an];
			}
			var vn = preact_hooks__WEBPACK_IMPORTED_MODULE_0__.Nf;
			function dn(t, r) {
				var u = (0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0)(r),
					o = u[0],
					i = u[1];
				return (
					(0, preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ)(
						function () {
							return t(function () {
								i(r());
							});
						},
						[t, r]
					),
					o
				);
			}
			const __WEBPACK_DEFAULT_EXPORT__ = {
				useState: preact_hooks__WEBPACK_IMPORTED_MODULE_0__.J0,
				useReducer: preact_hooks__WEBPACK_IMPORTED_MODULE_0__.WO,
				useEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_0__.vJ,
				useLayoutEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_0__.Nf,
				useInsertionEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_0__.Nf,
				useTransition: hn,
				useDeferredValue: sn,
				useSyncExternalStore: dn,
				startTransition: an,
				useRef: preact_hooks__WEBPACK_IMPORTED_MODULE_0__.li,
				useImperativeHandle: preact_hooks__WEBPACK_IMPORTED_MODULE_0__.Yn,
				useMemo: preact_hooks__WEBPACK_IMPORTED_MODULE_0__.Kr,
				useCallback: preact_hooks__WEBPACK_IMPORTED_MODULE_0__.hb,
				useContext: preact_hooks__WEBPACK_IMPORTED_MODULE_0__.NT,
				useDebugValue: preact_hooks__WEBPACK_IMPORTED_MODULE_0__.MN,
				version: '17.0.2',
				Children: k,
				render: z,
				hydrate: B,
				unmountComponentAtNode: un,
				createPortal: V,
				createElement: preact__WEBPACK_IMPORTED_MODULE_1__.n,
				createContext: preact__WEBPACK_IMPORTED_MODULE_1__.q6,
				createFactory: tn,
				cloneElement: rn,
				createRef: preact__WEBPACK_IMPORTED_MODULE_1__._3,
				Fragment: preact__WEBPACK_IMPORTED_MODULE_1__.FK,
				isValidElement: en,
				findDOMNode: on,
				Component: preact__WEBPACK_IMPORTED_MODULE_1__.uA,
				PureComponent: E,
				memo: g,
				forwardRef: R,
				flushSync: fn,
				unstable_batchedUpdates: ln,
				StrictMode: preact__WEBPACK_IMPORTED_MODULE_1__.FK,
				Suspense: T,
				SuspenseList: D,
				lazy: U,
				__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: X,
			};
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
		'../../node_modules/preact/dist/preact.module.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, {
				FK: () => d,
				Ob: () => B,
				Qv: () => q,
				XX: () => S,
				_3: () => p,
				fF: () => l,
				h: () => v,
				n: () => v,
				q6: () => D,
				uA: () => _,
				v2: () => A,
			});
			var n,
				l,
				u,
				t,
				o,
				r,
				f,
				e = {},
				c = [],
				s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
			function a(n, l) {
				for (var u in l) n[u] = l[u];
				return n;
			}
			function h(n) {
				var l = n.parentNode;
				l && l.removeChild(n);
			}
			function v(l, u, i) {
				var t,
					o,
					r,
					f = {};
				for (r in u) 'key' == r ? (t = u[r]) : 'ref' == r ? (o = u[r]) : (f[r] = u[r]);
				if (
					(arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), 'function' == typeof l && null != l.defaultProps)
				)
					for (r in l.defaultProps) void 0 === f[r] && (f[r] = l.defaultProps[r]);
				return y(l, f, t, o, null);
			}
			function y(n, i, t, o, r) {
				var f = {
					type: n,
					props: i,
					key: t,
					ref: o,
					__k: null,
					__: null,
					__b: 0,
					__e: null,
					__d: void 0,
					__c: null,
					__h: null,
					constructor: void 0,
					__v: null == r ? ++u : r,
				};
				return null == r && null != l.vnode && l.vnode(f), f;
			}
			function p() {
				return { current: null };
			}
			function d(n) {
				return n.children;
			}
			function _(n, l) {
				(this.props = n), (this.context = l);
			}
			function k(n, l) {
				if (null == l) return n.__ ? k(n.__, n.__.__k.indexOf(n) + 1) : null;
				for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
				return 'function' == typeof n.type ? k(n) : null;
			}
			function b(n) {
				var l, u;
				if (null != (n = n.__) && null != n.__c) {
					for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)
						if (null != (u = n.__k[l]) && null != u.__e) {
							n.__e = n.__c.base = u.__e;
							break;
						}
					return b(n);
				}
			}
			function m(n) {
				((!n.__d && (n.__d = !0) && t.push(n) && !g.__r++) || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(g);
			}
			function g() {
				for (var n; (g.__r = t.length); )
					(n = t.sort(function (n, l) {
						return n.__v.__b - l.__v.__b;
					})),
						(t = []),
						n.some(function (n) {
							var l, u, i, t, o, r;
							n.__d &&
								((o = (t = (l = n).__v).__e),
								(r = l.__P) &&
									((u = []),
									((i = a({}, t)).__v = t.__v + 1),
									j(r, t, i, l.__n, void 0 !== r.ownerSVGElement, null != t.__h ? [o] : null, u, null == o ? k(t) : o, t.__h),
									z(u, t),
									t.__e != o && b(t)));
						});
			}
			function w(n, l, u, i, t, o, r, f, s, a) {
				var h,
					v,
					p,
					_,
					b,
					m,
					g,
					w = (i && i.__k) || c,
					A = w.length;
				for (u.__k = [], h = 0; h < l.length; h++)
					if (
						null !=
						(_ = u.__k[h] =
							null == (_ = l[h]) || 'boolean' == typeof _
								? null
								: 'string' == typeof _ || 'number' == typeof _ || 'bigint' == typeof _
								? y(null, _, null, null, _)
								: Array.isArray(_)
								? y(d, { children: _ }, null, null, null)
								: _.__b > 0
								? y(_.type, _.props, _.key, null, _.__v)
								: _)
					) {
						if (((_.__ = u), (_.__b = u.__b + 1), null === (p = w[h]) || (p && _.key == p.key && _.type === p.type))) w[h] = void 0;
						else
							for (v = 0; v < A; v++) {
								if ((p = w[v]) && _.key == p.key && _.type === p.type) {
									w[v] = void 0;
									break;
								}
								p = null;
							}
						j(n, _, (p = p || e), t, o, r, f, s, a),
							(b = _.__e),
							(v = _.ref) && p.ref != v && (g || (g = []), p.ref && g.push(p.ref, null, _), g.push(v, _.__c || b, _)),
							null != b
								? (null == m && (m = b),
								  'function' == typeof _.type && _.__k === p.__k ? (_.__d = s = x(_, s, n)) : (s = P(n, _, p, w, b, s)),
								  'function' == typeof u.type && (u.__d = s))
								: s && p.__e == s && s.parentNode != n && (s = k(p));
					}
				for (u.__e = m, h = A; h--; )
					null != w[h] && ('function' == typeof u.type && null != w[h].__e && w[h].__e == u.__d && (u.__d = k(i, h + 1)), N(w[h], w[h]));
				if (g) for (h = 0; h < g.length; h++) M(g[h], g[++h], g[++h]);
			}
			function x(n, l, u) {
				for (var i, t = n.__k, o = 0; t && o < t.length; o++)
					(i = t[o]) && ((i.__ = n), (l = 'function' == typeof i.type ? x(i, l, u) : P(u, i, i, t, i.__e, l)));
				return l;
			}
			function A(n, l) {
				return (
					(l = l || []),
					null == n ||
						'boolean' == typeof n ||
						(Array.isArray(n)
							? n.some(function (n) {
									A(n, l);
							  })
							: l.push(n)),
					l
				);
			}
			function P(n, l, u, i, t, o) {
				var r, f, e;
				if (void 0 !== l.__d) (r = l.__d), (l.__d = void 0);
				else if (null == u || t != o || null == t.parentNode)
					n: if (null == o || o.parentNode !== n) n.appendChild(t), (r = null);
					else {
						for (f = o, e = 0; (f = f.nextSibling) && e < i.length; e += 2) if (f == t) break n;
						n.insertBefore(t, o), (r = o);
					}
				return void 0 !== r ? r : t.nextSibling;
			}
			function $(n, l, u) {
				'-' === l[0] ? n.setProperty(l, u) : (n[l] = null == u ? '' : 'number' != typeof u || s.test(l) ? u : u + 'px');
			}
			function H(n, l, u, i, t) {
				var o;
				n: if ('style' === l)
					if ('string' == typeof u) n.style.cssText = u;
					else {
						if (('string' == typeof i && (n.style.cssText = i = ''), i)) for (l in i) (u && l in u) || $(n.style, l, '');
						if (u) for (l in u) (i && u[l] === i[l]) || $(n.style, l, u[l]);
					}
				else if ('o' === l[0] && 'n' === l[1])
					(o = l !== (l = l.replace(/Capture$/, ''))),
						(l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2)),
						n.l || (n.l = {}),
						(n.l[l + o] = u),
						u ? i || n.addEventListener(l, o ? T : I, o) : n.removeEventListener(l, o ? T : I, o);
				else if ('dangerouslySetInnerHTML' !== l) {
					if (t) l = l.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
					else if ('href' !== l && 'list' !== l && 'form' !== l && 'tabIndex' !== l && 'download' !== l && l in n)
						try {
							n[l] = null == u ? '' : u;
							break n;
						} catch (n) {}
					'function' == typeof u || (null != u && (!1 !== u || ('a' === l[0] && 'r' === l[1])) ? n.setAttribute(l, u) : n.removeAttribute(l));
				}
			}
			function I(n) {
				this.l[n.type + !1](l.event ? l.event(n) : n);
			}
			function T(n) {
				this.l[n.type + !0](l.event ? l.event(n) : n);
			}
			function j(n, u, i, t, o, r, f, e, c) {
				var s,
					h,
					v,
					y,
					p,
					k,
					b,
					m,
					g,
					x,
					A,
					P,
					C,
					$ = u.type;
				if (void 0 !== u.constructor) return null;
				null != i.__h && ((c = i.__h), (e = u.__e = i.__e), (u.__h = null), (r = [e])), (s = l.__b) && s(u);
				try {
					n: if ('function' == typeof $) {
						if (
							((m = u.props),
							(g = (s = $.contextType) && t[s.__c]),
							(x = s ? (g ? g.props.value : s.__) : t),
							i.__c
								? (b = (h = u.__c = i.__c).__ = h.__E)
								: ('prototype' in $ && $.prototype.render
										? (u.__c = h = new $(m, x))
										: ((u.__c = h = new _(m, x)), (h.constructor = $), (h.render = O)),
								  g && g.sub(h),
								  (h.props = m),
								  h.state || (h.state = {}),
								  (h.context = x),
								  (h.__n = t),
								  (v = h.__d = !0),
								  (h.__h = [])),
							null == h.__s && (h.__s = h.state),
							null != $.getDerivedStateFromProps && (h.__s == h.state && (h.__s = a({}, h.__s)), a(h.__s, $.getDerivedStateFromProps(m, h.__s))),
							(y = h.props),
							(p = h.state),
							v)
						)
							null == $.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(),
								null != h.componentDidMount && h.__h.push(h.componentDidMount);
						else {
							if (
								(null == $.getDerivedStateFromProps && m !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(m, x),
								(!h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(m, h.__s, x)) || u.__v === i.__v)
							) {
								(h.props = m),
									(h.state = h.__s),
									u.__v !== i.__v && (h.__d = !1),
									(h.__v = u),
									(u.__e = i.__e),
									(u.__k = i.__k),
									u.__k.forEach(function (n) {
										n && (n.__ = u);
									}),
									h.__h.length && f.push(h);
								break n;
							}
							null != h.componentWillUpdate && h.componentWillUpdate(m, h.__s, x),
								null != h.componentDidUpdate &&
									h.__h.push(function () {
										h.componentDidUpdate(y, p, k);
									});
						}
						if (((h.context = x), (h.props = m), (h.__v = u), (h.__P = n), (A = l.__r), (P = 0), 'prototype' in $ && $.prototype.render))
							(h.state = h.__s), (h.__d = !1), A && A(u), (s = h.render(h.props, h.state, h.context));
						else
							do {
								(h.__d = !1), A && A(u), (s = h.render(h.props, h.state, h.context)), (h.state = h.__s);
							} while (h.__d && ++P < 25);
						(h.state = h.__s),
							null != h.getChildContext && (t = a(a({}, t), h.getChildContext())),
							v || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, p)),
							(C = null != s && s.type === d && null == s.key ? s.props.children : s),
							w(n, Array.isArray(C) ? C : [C], u, i, t, o, r, f, e, c),
							(h.base = u.__e),
							(u.__h = null),
							h.__h.length && f.push(h),
							b && (h.__E = h.__ = null),
							(h.__e = !1);
					} else null == r && u.__v === i.__v ? ((u.__k = i.__k), (u.__e = i.__e)) : (u.__e = L(i.__e, u, i, t, o, r, f, c));
					(s = l.diffed) && s(u);
				} catch (n) {
					(u.__v = null), (c || null != r) && ((u.__e = e), (u.__h = !!c), (r[r.indexOf(e)] = null)), l.__e(n, u, i);
				}
			}
			function z(n, u) {
				l.__c && l.__c(u, n),
					n.some(function (u) {
						try {
							(n = u.__h),
								(u.__h = []),
								n.some(function (n) {
									n.call(u);
								});
						} catch (n) {
							l.__e(n, u.__v);
						}
					});
			}
			function L(l, u, i, t, o, r, f, c) {
				var s,
					a,
					v,
					y = i.props,
					p = u.props,
					d = u.type,
					_ = 0;
				if (('svg' === d && (o = !0), null != r))
					for (; _ < r.length; _++)
						if ((s = r[_]) && 'setAttribute' in s == !!d && (d ? s.localName === d : 3 === s.nodeType)) {
							(l = s), (r[_] = null);
							break;
						}
				if (null == l) {
					if (null === d) return document.createTextNode(p);
					(l = o ? document.createElementNS('http://www.w3.org/2000/svg', d) : document.createElement(d, p.is && p)), (r = null), (c = !1);
				}
				if (null === d) y === p || (c && l.data === p) || (l.data = p);
				else {
					if (((r = r && n.call(l.childNodes)), (a = (y = i.props || e).dangerouslySetInnerHTML), (v = p.dangerouslySetInnerHTML), !c)) {
						if (null != r) for (y = {}, _ = 0; _ < l.attributes.length; _++) y[l.attributes[_].name] = l.attributes[_].value;
						(v || a) && ((v && ((a && v.__html == a.__html) || v.__html === l.innerHTML)) || (l.innerHTML = (v && v.__html) || ''));
					}
					if (
						((function C(n, l, u, i, t) {
							var o;
							for (o in u) 'children' === o || 'key' === o || o in l || H(n, o, null, u[o], i);
							for (o in l)
								(t && 'function' != typeof l[o]) ||
									'children' === o ||
									'key' === o ||
									'value' === o ||
									'checked' === o ||
									u[o] === l[o] ||
									H(n, o, l[o], u[o], i);
						})(l, p, y, o, c),
						v)
					)
						u.__k = [];
					else if (
						((_ = u.props.children),
						w(l, Array.isArray(_) ? _ : [_], u, i, t, o && 'foreignObject' !== d, r, f, r ? r[0] : i.__k && k(i, 0), c),
						null != r)
					)
						for (_ = r.length; _--; ) null != r[_] && h(r[_]);
					c ||
						('value' in p &&
							void 0 !== (_ = p.value) &&
							(_ !== l.value || ('progress' === d && !_) || ('option' === d && _ !== y.value)) &&
							H(l, 'value', _, y.value, !1),
						'checked' in p && void 0 !== (_ = p.checked) && _ !== l.checked && H(l, 'checked', _, y.checked, !1));
				}
				return l;
			}
			function M(n, u, i) {
				try {
					'function' == typeof n ? n(u) : (n.current = u);
				} catch (n) {
					l.__e(n, i);
				}
			}
			function N(n, u, i) {
				var t, o;
				if ((l.unmount && l.unmount(n), (t = n.ref) && ((t.current && t.current !== n.__e) || M(t, null, u)), null != (t = n.__c))) {
					if (t.componentWillUnmount)
						try {
							t.componentWillUnmount();
						} catch (n) {
							l.__e(n, u);
						}
					t.base = t.__P = null;
				}
				if ((t = n.__k)) for (o = 0; o < t.length; o++) t[o] && N(t[o], u, 'function' != typeof n.type);
				i || null == n.__e || h(n.__e), (n.__e = n.__d = void 0);
			}
			function O(n, l, u) {
				return this.constructor(n, u);
			}
			function S(u, i, t) {
				var o, r, f;
				l.__ && l.__(u, i),
					(r = (o = 'function' == typeof t) ? null : (t && t.__k) || i.__k),
					(f = []),
					j(
						i,
						(u = ((!o && t) || i).__k = v(d, null, [u])),
						r || e,
						e,
						void 0 !== i.ownerSVGElement,
						!o && t ? [t] : r ? null : i.firstChild ? n.call(i.childNodes) : null,
						f,
						!o && t ? t : r ? r.__e : i.firstChild,
						o
					),
					z(f, u);
			}
			function q(n, l) {
				S(n, l, q);
			}
			function B(l, u, i) {
				var t,
					o,
					r,
					f = a({}, l.props);
				for (r in u) 'key' == r ? (t = u[r]) : 'ref' == r ? (o = u[r]) : (f[r] = u[r]);
				return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), y(l.type, f, t || l.key, o || l.ref, null);
			}
			function D(n, l) {
				var u = {
					__c: (l = '__cC' + f++),
					__: n,
					Consumer: function (n, l) {
						return n.children(l);
					},
					Provider: function (n) {
						var u, i;
						return (
							this.getChildContext ||
								((u = []),
								((i = {})[l] = this),
								(this.getChildContext = function () {
									return i;
								}),
								(this.shouldComponentUpdate = function (n) {
									this.props.value !== n.value && u.some(m);
								}),
								(this.sub = function (n) {
									u.push(n);
									var l = n.componentWillUnmount;
									n.componentWillUnmount = function () {
										u.splice(u.indexOf(n), 1), l && l.call(n);
									};
								})),
							n.children
						);
					},
				};
				return (u.Provider.__ = u.Consumer.contextType = u);
			}
			(n = c.slice),
				(l = {
					__e: function (n, l, u, i) {
						for (var t, o, r; (l = l.__); )
							if ((t = l.__c) && !t.__)
								try {
									if (
										((o = t.constructor) && null != o.getDerivedStateFromError && (t.setState(o.getDerivedStateFromError(n)), (r = t.__d)),
										null != t.componentDidCatch && (t.componentDidCatch(n, i || {}), (r = t.__d)),
										r)
									)
										return (t.__E = t);
								} catch (l) {
									n = l;
								}
						throw n;
					},
				}),
				(u = 0),
				(_.prototype.setState = function (n, l) {
					var u;
					(u = null != this.__s && this.__s !== this.state ? this.__s : (this.__s = a({}, this.state))),
						'function' == typeof n && (n = n(a({}, u), this.props)),
						n && a(u, n),
						null != n && this.__v && (l && this.__h.push(l), m(this));
				}),
				(_.prototype.forceUpdate = function (n) {
					this.__v && ((this.__e = !0), n && this.__h.push(n), m(this));
				}),
				(_.prototype.render = d),
				(t = []),
				(o = 'function' == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
				(g.__r = 0),
				(f = 0);
		},
		'../../node_modules/preact/hooks/dist/hooks.module.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, {
				J0: () => y,
				Kr: () => F,
				MN: () => x,
				Md: () => V,
				NT: () => q,
				Nf: () => h,
				WO: () => d,
				Yn: () => A,
				hb: () => T,
				li: () => s,
				vJ: () => _,
			});
			var t,
				u,
				r,
				o,
				preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/preact/dist/preact.module.js'),
				i = 0,
				c = [],
				f = [],
				e = preact__WEBPACK_IMPORTED_MODULE_0__.fF.__b,
				a = preact__WEBPACK_IMPORTED_MODULE_0__.fF.__r,
				v = preact__WEBPACK_IMPORTED_MODULE_0__.fF.diffed,
				l = preact__WEBPACK_IMPORTED_MODULE_0__.fF.__c,
				m = preact__WEBPACK_IMPORTED_MODULE_0__.fF.unmount;
			function p(t, r) {
				preact__WEBPACK_IMPORTED_MODULE_0__.fF.__h && preact__WEBPACK_IMPORTED_MODULE_0__.fF.__h(u, t, i || r), (i = 0);
				var o = u.__H || (u.__H = { __: [], __h: [] });
				return t >= o.__.length && o.__.push({ __V: f }), o.__[t];
			}
			function y(n) {
				return (i = 1), d(z, n);
			}
			function d(n, r, o) {
				var i = p(t++, 2);
				return (
					(i.t = n),
					i.__c ||
						((i.__ = [
							o ? o(r) : z(void 0, r),
							function (n) {
								var t = i.t(i.__[0], n);
								i.__[0] !== t && ((i.__ = [t, i.__[1]]), i.__c.setState({}));
							},
						]),
						(i.__c = u)),
					i.__
				);
			}
			function _(r, o) {
				var i = p(t++, 3);
				!preact__WEBPACK_IMPORTED_MODULE_0__.fF.__s && w(i.__H, o) && ((i.__ = r), (i.u = o), u.__H.__h.push(i));
			}
			function h(r, o) {
				var i = p(t++, 4);
				!preact__WEBPACK_IMPORTED_MODULE_0__.fF.__s && w(i.__H, o) && ((i.__ = r), (i.u = o), u.__h.push(i));
			}
			function s(n) {
				return (
					(i = 5),
					F(function () {
						return { current: n };
					}, [])
				);
			}
			function A(n, t, u) {
				(i = 6),
					h(
						function () {
							return 'function' == typeof n
								? (n(t()),
								  function () {
										return n(null);
								  })
								: n
								? ((n.current = t()),
								  function () {
										return (n.current = null);
								  })
								: void 0;
						},
						null == u ? u : u.concat(n)
					);
			}
			function F(n, u) {
				var r = p(t++, 7);
				return w(r.__H, u) ? ((r.__V = n()), (r.u = u), (r.__h = n), r.__V) : r.__;
			}
			function T(n, t) {
				return (
					(i = 8),
					F(function () {
						return n;
					}, t)
				);
			}
			function q(n) {
				var r = u.context[n.__c],
					o = p(t++, 9);
				return (o.c = n), r ? (null == o.__ && ((o.__ = !0), r.sub(u)), r.props.value) : n.__;
			}
			function x(t, u) {
				preact__WEBPACK_IMPORTED_MODULE_0__.fF.useDebugValue && preact__WEBPACK_IMPORTED_MODULE_0__.fF.useDebugValue(u ? u(t) : t);
			}
			function V(n) {
				var r = p(t++, 10),
					o = y();
				return (
					(r.__ = n),
					u.componentDidCatch ||
						(u.componentDidCatch = function (n) {
							r.__ && r.__(n), o[1](n);
						}),
					[
						o[0],
						function () {
							o[1](void 0);
						},
					]
				);
			}
			function b() {
				for (var t; (t = c.shift()); )
					if (t.__P)
						try {
							t.__H.__h.forEach(j), t.__H.__h.forEach(k), (t.__H.__h = []);
						} catch (u) {
							(t.__H.__h = []), preact__WEBPACK_IMPORTED_MODULE_0__.fF.__e(u, t.__v);
						}
			}
			(preact__WEBPACK_IMPORTED_MODULE_0__.fF.__b = function (n) {
				(u = null), e && e(n);
			}),
				(preact__WEBPACK_IMPORTED_MODULE_0__.fF.__r = function (n) {
					a && a(n), (t = 0);
					var o = (u = n.__c).__H;
					o &&
						(r === u
							? ((o.__h = []),
							  (u.__h = []),
							  o.__.forEach(function (n) {
									(n.__V = f), (n.u = void 0);
							  }))
							: (o.__h.forEach(j), o.__h.forEach(k), (o.__h = []))),
						(r = u);
				}),
				(preact__WEBPACK_IMPORTED_MODULE_0__.fF.diffed = function (t) {
					v && v(t);
					var i = t.__c;
					i &&
						i.__H &&
						(i.__H.__h.length &&
							((1 !== c.push(i) && o === preact__WEBPACK_IMPORTED_MODULE_0__.fF.requestAnimationFrame) ||
								(
									(o = preact__WEBPACK_IMPORTED_MODULE_0__.fF.requestAnimationFrame) ||
									function (n) {
										var t,
											u = function () {
												clearTimeout(r), g && cancelAnimationFrame(t), setTimeout(n);
											},
											r = setTimeout(u, 100);
										g && (t = requestAnimationFrame(u));
									}
								)(b)),
						i.__H.__.forEach(function (n) {
							n.u && (n.__H = n.u), n.__V !== f && (n.__ = n.__V), (n.u = void 0), (n.__V = f);
						})),
						(r = u = null);
				}),
				(preact__WEBPACK_IMPORTED_MODULE_0__.fF.__c = function (t, u) {
					u.some(function (t) {
						try {
							t.__h.forEach(j),
								(t.__h = t.__h.filter(function (n) {
									return !n.__ || k(n);
								}));
						} catch (r) {
							u.some(function (n) {
								n.__h && (n.__h = []);
							}),
								(u = []),
								preact__WEBPACK_IMPORTED_MODULE_0__.fF.__e(r, t.__v);
						}
					}),
						l && l(t, u);
				}),
				(preact__WEBPACK_IMPORTED_MODULE_0__.fF.unmount = function (t) {
					m && m(t);
					var u,
						r = t.__c;
					r &&
						r.__H &&
						(r.__H.__.forEach(function (n) {
							try {
								j(n);
							} catch (n) {
								u = n;
							}
						}),
						u && preact__WEBPACK_IMPORTED_MODULE_0__.fF.__e(u, r.__v));
				});
			var g = 'function' == typeof requestAnimationFrame;
			function j(n) {
				var t = u,
					r = n.__c;
				'function' == typeof r && ((n.__c = void 0), r()), (u = t);
			}
			function k(n) {
				var t = u;
				(n.__c = n.__()), (u = t);
			}
			function w(n, t) {
				return (
					!n ||
					n.length !== t.length ||
					t.some(function (t, u) {
						return t !== n[u];
					})
				);
			}
			function z(n, t) {
				return 'function' == typeof t ? t(n) : t;
			}
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
		'../../node_modules/simple-swizzle/index.js': (module, __unused_webpack_exports, __webpack_require__) => {
			'use strict';
			var isArrayish = __webpack_require__('../../node_modules/simple-swizzle/node_modules/is-arrayish/index.js'),
				concat = Array.prototype.concat,
				slice = Array.prototype.slice,
				swizzle = (module.exports = function swizzle(args) {
					for (var results = [], i = 0, len = args.length; i < len; i++) {
						var arg = args[i];
						isArrayish(arg) ? (results = concat.call(results, slice.call(arg))) : results.push(arg);
					}
					return results;
				});
			swizzle.wrap = function (fn) {
				return function () {
					return fn(swizzle(arguments));
				};
			};
		},
		'../../node_modules/simple-swizzle/node_modules/is-arrayish/index.js': (module) => {
			module.exports = function isArrayish(obj) {
				return (
					!(!obj || 'string' == typeof obj) &&
					(obj instanceof Array ||
						Array.isArray(obj) ||
						(obj.length >= 0 &&
							(obj.splice instanceof Function || (Object.getOwnPropertyDescriptor(obj, obj.length - 1) && 'String' !== obj.constructor.name))))
				);
			};
		},
		'../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js': (module) => {
			'use strict';
			var stylesInDOM = [];
			function getIndexByIdentifier(identifier) {
				for (var result = -1, i = 0; i < stylesInDOM.length; i++)
					if (stylesInDOM[i].identifier === identifier) {
						result = i;
						break;
					}
				return result;
			}
			function modulesToDom(list, options) {
				for (var idCountMap = {}, identifiers = [], i = 0; i < list.length; i++) {
					var item = list[i],
						id = options.base ? item[0] + options.base : item[0],
						count = idCountMap[id] || 0,
						identifier = ''.concat(id, ' ').concat(count);
					idCountMap[id] = count + 1;
					var indexByIdentifier = getIndexByIdentifier(identifier),
						obj = { css: item[1], media: item[2], sourceMap: item[3], supports: item[4], layer: item[5] };
					if (-1 !== indexByIdentifier) stylesInDOM[indexByIdentifier].references++, stylesInDOM[indexByIdentifier].updater(obj);
					else {
						var updater = addElementStyle(obj, options);
						(options.byIndex = i), stylesInDOM.splice(i, 0, { identifier, updater, references: 1 });
					}
					identifiers.push(identifier);
				}
				return identifiers;
			}
			function addElementStyle(obj, options) {
				var api = options.domAPI(options);
				api.update(obj);
				return function updater(newObj) {
					if (newObj) {
						if (
							newObj.css === obj.css &&
							newObj.media === obj.media &&
							newObj.sourceMap === obj.sourceMap &&
							newObj.supports === obj.supports &&
							newObj.layer === obj.layer
						)
							return;
						api.update((obj = newObj));
					} else api.remove();
				};
			}
			module.exports = function (list, options) {
				var lastIdentifiers = modulesToDom((list = list || []), (options = options || {}));
				return function update(newList) {
					newList = newList || [];
					for (var i = 0; i < lastIdentifiers.length; i++) {
						var index = getIndexByIdentifier(lastIdentifiers[i]);
						stylesInDOM[index].references--;
					}
					for (var newLastIdentifiers = modulesToDom(newList, options), _i = 0; _i < lastIdentifiers.length; _i++) {
						var _index = getIndexByIdentifier(lastIdentifiers[_i]);
						0 === stylesInDOM[_index].references && (stylesInDOM[_index].updater(), stylesInDOM.splice(_index, 1));
					}
					lastIdentifiers = newLastIdentifiers;
				};
			};
		},
		'../../node_modules/style-loader/dist/runtime/insertBySelector.js': (module) => {
			'use strict';
			var memo = {};
			module.exports = function insertBySelector(insert, style) {
				var target = (function getTarget(target) {
					if (void 0 === memo[target]) {
						var styleTarget = document.querySelector(target);
						if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement)
							try {
								styleTarget = styleTarget.contentDocument.head;
							} catch (e) {
								styleTarget = null;
							}
						memo[target] = styleTarget;
					}
					return memo[target];
				})(insert);
				if (!target) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
				target.appendChild(style);
			};
		},
		'../../node_modules/style-loader/dist/runtime/insertStyleElement.js': (module) => {
			'use strict';
			module.exports = function insertStyleElement(options) {
				var element = document.createElement('style');
				return options.setAttributes(element, options.attributes), options.insert(element, options.options), element;
			};
		},
		'../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js': (module, __unused_webpack_exports, __webpack_require__) => {
			'use strict';
			module.exports = function setAttributesWithoutAttributes(styleElement) {
				var nonce = __webpack_require__.nc;
				nonce && styleElement.setAttribute('nonce', nonce);
			};
		},
		'../../node_modules/style-loader/dist/runtime/styleDomAPI.js': (module) => {
			'use strict';
			module.exports = function domAPI(options) {
				if ('undefined' == typeof document) return { update: function update() {}, remove: function remove() {} };
				var styleElement = options.insertStyleElement(options);
				return {
					update: function update(obj) {
						!(function apply(styleElement, options, obj) {
							var css = '';
							obj.supports && (css += '@supports ('.concat(obj.supports, ') {')), obj.media && (css += '@media '.concat(obj.media, ' {'));
							var needLayer = void 0 !== obj.layer;
							needLayer && (css += '@layer'.concat(obj.layer.length > 0 ? ' '.concat(obj.layer) : '', ' {')),
								(css += obj.css),
								needLayer && (css += '}'),
								obj.media && (css += '}'),
								obj.supports && (css += '}');
							var sourceMap = obj.sourceMap;
							sourceMap &&
								'undefined' != typeof btoa &&
								(css += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
									btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
									' */'
								)),
								options.styleTagTransform(css, styleElement, options.options);
						})(styleElement, options, obj);
					},
					remove: function remove() {
						!(function removeStyleElement(styleElement) {
							if (null === styleElement.parentNode) return !1;
							styleElement.parentNode.removeChild(styleElement);
						})(styleElement);
					},
				};
			};
		},
		'../../node_modules/style-loader/dist/runtime/styleTagTransform.js': (module) => {
			'use strict';
			module.exports = function styleTagTransform(css, styleElement) {
				if (styleElement.styleSheet) styleElement.styleSheet.cssText = css;
				else {
					for (; styleElement.firstChild; ) styleElement.removeChild(styleElement.firstChild);
					styleElement.appendChild(document.createTextNode(css));
				}
			};
		},
		'../../node_modules/ts-dedent/esm/index.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			function dedent(templ) {
				for (var values = [], _i = 1; _i < arguments.length; _i++) values[_i - 1] = arguments[_i];
				var strings = Array.from('string' == typeof templ ? [templ] : templ);
				strings[strings.length - 1] = strings[strings.length - 1].replace(/\r?\n([\t ]*)$/, '');
				var indentLengths = strings.reduce(function (arr, str) {
					var matches = str.match(/\n([\t ]+|(?!\s).)/g);
					return matches
						? arr.concat(
								matches.map(function (match) {
									var _a, _b;
									return null !== (_b = null === (_a = match.match(/[\t ]/g)) || void 0 === _a ? void 0 : _a.length) && void 0 !== _b ? _b : 0;
								})
						  )
						: arr;
				}, []);
				if (indentLengths.length) {
					var pattern_1 = new RegExp('\n[\t ]{' + Math.min.apply(Math, indentLengths) + '}', 'g');
					strings = strings.map(function (str) {
						return str.replace(pattern_1, '\n');
					});
				}
				strings[0] = strings[0].replace(/^\r?\n/, '');
				var string = strings[0];
				return (
					values.forEach(function (value, i) {
						var endentations = string.match(/(?:^|\n)( *)$/),
							endentation = endentations ? endentations[1] : '',
							indentedValue = value;
						'string' == typeof value &&
							value.includes('\n') &&
							(indentedValue = String(value)
								.split('\n')
								.map(function (str, i) {
									return 0 === i ? str : '' + endentation + str;
								})
								.join('\n')),
							(string += indentedValue + strings[i + 1]);
					}),
					string
				);
			}
			__webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__, T: () => dedent });
			const __WEBPACK_DEFAULT_EXPORT__ = dedent;
		},
		'../../node_modules/uuid/dist/esm-browser/v4.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.d(__webpack_exports__, { A: () => esm_browser_v4 });
			const esm_browser_native = { randomUUID: 'undefined' != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
			let getRandomValues;
			const rnds8 = new Uint8Array(16);
			function rng() {
				if (
					!getRandomValues &&
					((getRandomValues = 'undefined' != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)), !getRandomValues)
				)
					throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
				return getRandomValues(rnds8);
			}
			const byteToHex = [];
			for (let i = 0; i < 256; ++i) byteToHex.push((i + 256).toString(16).slice(1));
			function unsafeStringify(arr, offset = 0) {
				return (
					byteToHex[arr[offset + 0]] +
					byteToHex[arr[offset + 1]] +
					byteToHex[arr[offset + 2]] +
					byteToHex[arr[offset + 3]] +
					'-' +
					byteToHex[arr[offset + 4]] +
					byteToHex[arr[offset + 5]] +
					'-' +
					byteToHex[arr[offset + 6]] +
					byteToHex[arr[offset + 7]] +
					'-' +
					byteToHex[arr[offset + 8]] +
					byteToHex[arr[offset + 9]] +
					'-' +
					byteToHex[arr[offset + 10]] +
					byteToHex[arr[offset + 11]] +
					byteToHex[arr[offset + 12]] +
					byteToHex[arr[offset + 13]] +
					byteToHex[arr[offset + 14]] +
					byteToHex[arr[offset + 15]]
				);
			}
			const esm_browser_v4 = function v4(options, buf, offset) {
				if (esm_browser_native.randomUUID && !buf && !options) return esm_browser_native.randomUUID();
				const rnds = (options = options || {}).random || (options.rng || rng)();
				if (((rnds[6] = (15 & rnds[6]) | 64), (rnds[8] = (63 & rnds[8]) | 128), buf)) {
					offset = offset || 0;
					for (let i = 0; i < 16; ++i) buf[offset + i] = rnds[i];
					return buf;
				}
				return unsafeStringify(rnds);
			};
		},
		'./node_modules/@storybook/addon-actions/dist/preview.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, { argsEnhancers: () => argsEnhancers, loaders: () => loaders });
			var Category2,
				v4 = __webpack_require__('../../node_modules/uuid/dist/esm-browser/v4.js'),
				external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__('@storybook/preview-api'),
				external_STORYBOOK_MODULE_GLOBAL_ = __webpack_require__('@storybook/global'),
				StorybookError = class extends Error {
					constructor() {
						super(...arguments), (this.data = {}), (this.documentation = !1), (this.fromStorybook = !0);
					}
					get fullErrorCode() {
						let paddedCode = String(this.code).padStart(4, '0');
						return `SB_${this.category}_${paddedCode}`;
					}
					get name() {
						let errorName = this.constructor.name;
						return `${this.fullErrorCode} (${errorName})`;
					}
					get message() {
						let page;
						return (
							!0 === this.documentation
								? (page = `https://storybook.js.org/error/${this.fullErrorCode}`)
								: 'string' == typeof this.documentation
								? (page = this.documentation)
								: Array.isArray(this.documentation) && (page = `\n${this.documentation.map((doc) => `\t- ${doc}`).join('\n')}`),
							`${this.template()}${null != page ? `\n\nMore info: ${page}\n` : ''}`
						);
					}
				},
				esm = __webpack_require__('../../node_modules/ts-dedent/esm/index.js'),
				Category =
					(((Category2 = Category || {}).PREVIEW_CLIENT_LOGGER = 'PREVIEW_CLIENT-LOGGER'),
					(Category2.PREVIEW_CHANNELS = 'PREVIEW_CHANNELS'),
					(Category2.PREVIEW_CORE_EVENTS = 'PREVIEW_CORE-EVENTS'),
					(Category2.PREVIEW_INSTRUMENTER = 'PREVIEW_INSTRUMENTER'),
					(Category2.PREVIEW_API = 'PREVIEW_API'),
					(Category2.PREVIEW_REACT_DOM_SHIM = 'PREVIEW_REACT-DOM-SHIM'),
					(Category2.PREVIEW_ROUTER = 'PREVIEW_ROUTER'),
					(Category2.PREVIEW_THEMING = 'PREVIEW_THEMING'),
					(Category2.RENDERER_HTML = 'RENDERER_HTML'),
					(Category2.RENDERER_PREACT = 'RENDERER_PREACT'),
					(Category2.RENDERER_REACT = 'RENDERER_REACT'),
					(Category2.RENDERER_SERVER = 'RENDERER_SERVER'),
					(Category2.RENDERER_SVELTE = 'RENDERER_SVELTE'),
					(Category2.RENDERER_VUE = 'RENDERER_VUE'),
					(Category2.RENDERER_VUE3 = 'RENDERER_VUE3'),
					(Category2.RENDERER_WEB_COMPONENTS = 'RENDERER_WEB-COMPONENTS'),
					Category2),
				ImplicitActionsDuringRendering = class extends StorybookError {
					constructor(data) {
						super(),
							(this.data = data),
							(this.category = 'PREVIEW_API'),
							(this.code = 2),
							(this.documentation =
								'https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#using-implicit-actions-during-rendering-is-deprecated-for-example-in-the-play-function');
					}
					template() {
						return esm.A`
      We detected that you use an implicit action arg during ${this.data.phase} of your story.  
      ${this.data.deprecated ? "\nThis is deprecated and won't work in Storybook 8 anymore.\n" : ''}
      Please provide an explicit spy to your args like this:
        import { fn } from '@storybook/test';
        ... 
        args: {
         ${this.data.name}: fn()
        }
    `;
					}
				},
				config = { depth: 10, clearOnStoryChange: !0, limit: 50 },
				findProto = (obj, callback) => {
					let proto = Object.getPrototypeOf(obj);
					return !proto || callback(proto) ? proto : findProto(proto, callback);
				},
				serializeArg = (a) => {
					if (
						'object' == typeof (e = a) &&
						e &&
						findProto(e, (proto) => /^Synthetic(?:Base)?Event$/.test(proto.constructor.name)) &&
						'function' == typeof e.persist
					) {
						let e = Object.create(a.constructor.prototype, Object.getOwnPropertyDescriptors(a));
						e.persist();
						let viewDescriptor = Object.getOwnPropertyDescriptor(e, 'view'),
							view = viewDescriptor?.value;
						return (
							'object' == typeof view &&
								'Window' === view?.constructor.name &&
								Object.defineProperty(e, 'view', { ...viewDescriptor, value: Object.create(view.constructor.prototype) }),
							e
						);
					}
					var e;
					return a;
				};
			function action(name, options = {}) {
				let actionOptions = { ...config, ...options },
					handler = function (...args) {
						if (options.implicit) {
							let storyRenderer = (
								'__STORYBOOK_PREVIEW__' in external_STORYBOOK_MODULE_GLOBAL_.global
									? external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__
									: void 0
							)?.storyRenders.find((render) => 'playing' === render.phase || 'rendering' === render.phase);
							if (storyRenderer) {
								let deprecated = !window?.FEATURES?.disallowImplicitActionsInRenderV8,
									error = new ImplicitActionsDuringRendering({ phase: storyRenderer.phase, name, deprecated });
								if (!deprecated) throw error;
								console.warn(error);
							}
						}
						let channel = external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),
							id =
								'object' == typeof crypto && 'function' == typeof crypto.getRandomValues
									? (0, v4.A)()
									: Date.now().toString(36) + Math.random().toString(36).substring(2),
							serializedArgs = args.map(serializeArg),
							normalizedArgs = args.length > 1 ? serializedArgs : serializedArgs[0],
							actionDisplayToEmit = {
								id,
								count: 0,
								data: { name, args: normalizedArgs },
								options: { ...actionOptions, maxDepth: 5 + (actionOptions.depth || 3), allowFunction: actionOptions.allowFunction || !1 },
							};
						channel.emit('storybook/actions/action-event', actionDisplayToEmit);
					};
				return (handler.isAction = !0), handler;
			}
			var isInInitialArgs = (name, initialArgs) => typeof initialArgs[name] > 'u' && !(name in initialArgs),
				argsEnhancers = [
					(context) => {
						let {
							initialArgs,
							argTypes,
							parameters: { actions },
						} = context;
						return actions?.disable || !argTypes
							? {}
							: Object.entries(argTypes)
									.filter(([name, argType]) => !!argType.action)
									.reduce(
										(acc, [name, argType]) => (
											isInInitialArgs(name, initialArgs) && (acc[name] = action('string' == typeof argType.action ? argType.action : name)), acc
										),
										{}
									);
					},
					(context) => {
						let {
							initialArgs,
							argTypes,
							id,
							parameters: { actions },
						} = context;
						if (!actions || actions.disable || !actions.argTypesRegex || !argTypes) return {};
						let argTypesRegex = new RegExp(actions.argTypesRegex);
						return Object.entries(argTypes)
							.filter(([name]) => !!argTypesRegex.test(name))
							.reduce((acc, [name, argType]) => (isInInitialArgs(name, initialArgs) && (acc[name] = action(name, { implicit: !0, id })), acc), {});
					},
				],
				loaders = [
					(context) => {
						let {
							args,
							parameters: { actions },
						} = context;
						actions?.disable ||
							Object.entries(args)
								.filter(([, value]) => 'function' == typeof value && '_isMockFunction' in value && value._isMockFunction)
								.forEach(([key, value]) => {
									let previous = value.getMockImplementation();
									if (!0 !== previous?._actionAttached && !0 !== previous?.isAction) {
										let implementation = (...params) => (action(key)(...params), previous?.(...params));
										(implementation._actionAttached = !0), value.mockImplementation(implementation);
									}
								});
					},
				];
		},
		'./node_modules/@storybook/addon-links/dist/preview.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
			__webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { decorators: () => decorators });
			var r,
				e,
				external_STORYBOOK_MODULE_GLOBAL_ = __webpack_require__('@storybook/global'),
				external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__('@storybook/preview-api'),
				external_STORYBOOK_MODULE_CORE_EVENTS_ = __webpack_require__('@storybook/core-events'),
				C = Object.create,
				u = Object.defineProperty,
				B = Object.getOwnPropertyDescriptor,
				F = Object.getOwnPropertyNames,
				h = Object.getPrototypeOf,
				w = Object.prototype.hasOwnProperty,
				x =
					((r = (T) => {
						var r, e, n;
						Object.defineProperty(T, '__esModule', { value: !0 }),
							(T.isEqual =
								((r = Object.prototype.toString),
								(e = Object.getPrototypeOf),
								(n = Object.getOwnPropertySymbols
									? function (t) {
											return Object.keys(t).concat(Object.getOwnPropertySymbols(t));
									  }
									: Object.keys),
								function (t, a) {
									return (function i(o, s, p) {
										var y,
											g,
											d,
											c = r.call(o),
											b = r.call(s);
										if (o === s) return !0;
										if (null == o || null == s) return !1;
										if (p.indexOf(o) > -1 && p.indexOf(s) > -1) return !0;
										if (
											(p.push(o, s),
											c != b ||
												((y = n(o)),
												(g = n(s)),
												y.length != g.length ||
													y.some(function (A) {
														return !i(o[A], s[A], p);
													})))
										)
											return !1;
										switch (c.slice(8, -1)) {
											case 'Symbol':
												return o.valueOf() == s.valueOf();
											case 'Date':
											case 'Number':
												return +o == +s || (+o != +o && +s != +s);
											case 'RegExp':
											case 'Function':
											case 'String':
											case 'Boolean':
												return '' + o == '' + s;
											case 'Set':
											case 'Map':
												(y = o.entries()), (g = s.entries());
												do {
													if (!i((d = y.next()).value, g.next().value, p)) return !1;
												} while (!d.done);
												return !0;
											case 'ArrayBuffer':
												(o = new Uint8Array(o)), (s = new Uint8Array(s));
											case 'DataView':
												(o = new Uint8Array(o.buffer)), (s = new Uint8Array(s.buffer));
											case 'Float32Array':
											case 'Float64Array':
											case 'Int8Array':
											case 'Int16Array':
											case 'Int32Array':
											case 'Uint8Array':
											case 'Uint16Array':
											case 'Uint32Array':
											case 'Uint8ClampedArray':
											case 'Arguments':
											case 'Array':
												if (o.length != s.length) return !1;
												for (d = 0; d < o.length; d++) if ((d in o || d in s) && (d in o != d in s || !i(o[d], s[d], p))) return !1;
												return !0;
											case 'Object':
												return i(e(o), e(s), p);
											default:
												return !1;
										}
									})(t, a, []);
								}));
					}),
					() => (e || r((e = { exports: {} }).exports, e), e.exports));
			((r, e, n) => {
				(n = null != r ? C(h(r)) : {}),
					((r, e, n, t) => {
						if ((e && 'object' == typeof e) || 'function' == typeof e)
							for (let a of F(e)) !w.call(r, a) && a !== n && u(r, a, { get: () => e[a], enumerable: !(t = B(e, a)) || t.enumerable });
					})(!e && r && r.__esModule ? n : u(n, 'default', { value: r, enumerable: !0 }), r);
			})(x());
			var { document: preview_document, HTMLElement } = external_STORYBOOK_MODULE_GLOBAL_.global,
				linksListener = (e) => {
					let { target } = e;
					if (!(target instanceof HTMLElement)) return;
					let element = target,
						{ sbKind: kind, sbStory: story } = element.dataset;
					var params;
					(kind || story) &&
						(e.preventDefault(),
						(params = { kind, story }),
						external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel().emit(external_STORYBOOK_MODULE_CORE_EVENTS_.SELECT_STORY, params));
				},
				hasListener = !1,
				off = () => {
					hasListener && ((hasListener = !1), preview_document.removeEventListener('click', linksListener));
				},
				decorators = [
					(0, external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({
						name: 'withLinks',
						parameterName: 'links',
						wrapper: (getStory, context) => (
							hasListener || ((hasListener = !0), preview_document.addEventListener('click', linksListener)),
							external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel().once(external_STORYBOOK_MODULE_CORE_EVENTS_.STORY_CHANGED, off),
							getStory(context)
						),
					}),
				];
		},
		'./node_modules/mobx-react-lite/es/index.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict';
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
//# sourceMappingURL=1831.9b88066e.iframe.bundle.js.map
