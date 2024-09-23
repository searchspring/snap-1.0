'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[6664],
	{
		'../../node_modules/dequal/dist/index.mjs': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { j: () => dequal });
			var has = Object.prototype.hasOwnProperty;
			function find(iter, tar, key) {
				for (key of iter.keys()) if (dequal(key, tar)) return key;
			}
			function dequal(foo, bar) {
				var ctor, len, tmp;
				if (foo === bar) return !0;
				if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
					if (ctor === Date) return foo.getTime() === bar.getTime();
					if (ctor === RegExp) return foo.toString() === bar.toString();
					if (ctor === Array) {
						if ((len = foo.length) === bar.length) for (; len-- && dequal(foo[len], bar[len]); );
						return -1 === len;
					}
					if (ctor === Set) {
						if (foo.size !== bar.size) return !1;
						for (len of foo) {
							if ((tmp = len) && 'object' == typeof tmp && !(tmp = find(bar, tmp))) return !1;
							if (!bar.has(tmp)) return !1;
						}
						return !0;
					}
					if (ctor === Map) {
						if (foo.size !== bar.size) return !1;
						for (len of foo) {
							if ((tmp = len[0]) && 'object' == typeof tmp && !(tmp = find(bar, tmp))) return !1;
							if (!dequal(len[1], bar.get(tmp))) return !1;
						}
						return !0;
					}
					if (ctor === ArrayBuffer) (foo = new Uint8Array(foo)), (bar = new Uint8Array(bar));
					else if (ctor === DataView) {
						if ((len = foo.byteLength) === bar.byteLength) for (; len-- && foo.getInt8(len) === bar.getInt8(len); );
						return -1 === len;
					}
					if (ArrayBuffer.isView(foo)) {
						if ((len = foo.byteLength) === bar.byteLength) for (; len-- && foo[len] === bar[len]; );
						return -1 === len;
					}
					if (!ctor || 'object' == typeof foo) {
						for (ctor in ((len = 0), foo)) {
							if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return !1;
							if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return !1;
						}
						return Object.keys(bar).length === len;
					}
				}
				return foo != foo && bar != bar;
			}
		},
		'../../node_modules/swiper/modules/index.mjs': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { Jq: () => A11y, Vx: () => Navigation, dK: () => Pagination });
			__webpack_require__('../../node_modules/swiper/shared/ssr-window.esm.mjs');
			var utils = __webpack_require__('../../node_modules/swiper/shared/utils.mjs');
			function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
				return (
					swiper.params.createElements &&
						Object.keys(checkProps).forEach((key) => {
							if (!params[key] && !0 === params.auto) {
								let element = (0, utils.e)(swiper.el, `.${checkProps[key]}`)[0];
								element || ((element = (0, utils.c)('div', checkProps[key])), (element.className = checkProps[key]), swiper.el.append(element)),
									(params[key] = element),
									(originalParams[key] = element);
							}
						}),
					params
				);
			}
			function Navigation(_ref) {
				let { swiper, extendParams, on, emit } = _ref;
				function getEl(el) {
					let res;
					return el && 'string' == typeof el && swiper.isElement && ((res = swiper.el.querySelector(el)), res)
						? res
						: (el &&
								('string' == typeof el && (res = [...document.querySelectorAll(el)]),
								swiper.params.uniqueNavElements &&
									'string' == typeof el &&
									res.length > 1 &&
									1 === swiper.el.querySelectorAll(el).length &&
									(res = swiper.el.querySelector(el))),
						  el && !res ? el : res);
				}
				function toggleEl(el, disabled) {
					const params = swiper.params.navigation;
					(el = (0, utils.m)(el)).forEach((subEl) => {
						subEl &&
							(subEl.classList[disabled ? 'add' : 'remove'](...params.disabledClass.split(' ')),
							'BUTTON' === subEl.tagName && (subEl.disabled = disabled),
							swiper.params.watchOverflow && swiper.enabled && subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass));
					});
				}
				function update() {
					const { nextEl, prevEl } = swiper.navigation;
					if (swiper.params.loop) return toggleEl(prevEl, !1), void toggleEl(nextEl, !1);
					toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind), toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
				}
				function onPrevClick(e) {
					e.preventDefault(), (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) && (swiper.slidePrev(), emit('navigationPrev'));
				}
				function onNextClick(e) {
					e.preventDefault(), (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) && (swiper.slideNext(), emit('navigationNext'));
				}
				function init() {
					const params = swiper.params.navigation;
					if (
						((swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(
							swiper,
							swiper.originalParams.navigation,
							swiper.params.navigation,
							{ nextEl: 'swiper-button-next', prevEl: 'swiper-button-prev' }
						)),
						!params.nextEl && !params.prevEl)
					)
						return;
					let nextEl = getEl(params.nextEl),
						prevEl = getEl(params.prevEl);
					Object.assign(swiper.navigation, { nextEl, prevEl }), (nextEl = (0, utils.m)(nextEl)), (prevEl = (0, utils.m)(prevEl));
					const initButton = (el, dir) => {
						el && el.addEventListener('click', 'next' === dir ? onNextClick : onPrevClick),
							!swiper.enabled && el && el.classList.add(...params.lockClass.split(' '));
					};
					nextEl.forEach((el) => initButton(el, 'next')), prevEl.forEach((el) => initButton(el, 'prev'));
				}
				function destroy() {
					let { nextEl, prevEl } = swiper.navigation;
					(nextEl = (0, utils.m)(nextEl)), (prevEl = (0, utils.m)(prevEl));
					const destroyButton = (el, dir) => {
						el.removeEventListener('click', 'next' === dir ? onNextClick : onPrevClick),
							el.classList.remove(...swiper.params.navigation.disabledClass.split(' '));
					};
					nextEl.forEach((el) => destroyButton(el, 'next')), prevEl.forEach((el) => destroyButton(el, 'prev'));
				}
				extendParams({
					navigation: {
						nextEl: null,
						prevEl: null,
						hideOnClick: !1,
						disabledClass: 'swiper-button-disabled',
						hiddenClass: 'swiper-button-hidden',
						lockClass: 'swiper-button-lock',
						navigationDisabledClass: 'swiper-navigation-disabled',
					},
				}),
					(swiper.navigation = { nextEl: null, prevEl: null }),
					on('init', () => {
						!1 === swiper.params.navigation.enabled ? disable() : (init(), update());
					}),
					on('toEdge fromEdge lock unlock', () => {
						update();
					}),
					on('destroy', () => {
						destroy();
					}),
					on('enable disable', () => {
						let { nextEl, prevEl } = swiper.navigation;
						(nextEl = (0, utils.m)(nextEl)),
							(prevEl = (0, utils.m)(prevEl)),
							swiper.enabled
								? update()
								: [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.add(swiper.params.navigation.lockClass));
					}),
					on('click', (_s, e) => {
						let { nextEl, prevEl } = swiper.navigation;
						(nextEl = (0, utils.m)(nextEl)), (prevEl = (0, utils.m)(prevEl));
						const targetEl = e.target;
						if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
							if (
								swiper.pagination &&
								swiper.params.pagination &&
								swiper.params.pagination.clickable &&
								(swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))
							)
								return;
							let isHidden;
							nextEl.length
								? (isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass))
								: prevEl.length && (isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass)),
								emit(!0 === isHidden ? 'navigationShow' : 'navigationHide'),
								[...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.toggle(swiper.params.navigation.hiddenClass));
						}
					});
				const disable = () => {
					swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(' ')), destroy();
				};
				Object.assign(swiper.navigation, {
					enable: () => {
						swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(' ')), init(), update();
					},
					disable,
					update,
					init,
					destroy,
				});
			}
			function classes_to_selector_classesToSelector(classes) {
				return (
					void 0 === classes && (classes = ''),
					`.${classes
						.trim()
						.replace(/([\.:!+\/])/g, '\\$1')
						.replace(/ /g, '.')}`
				);
			}
			function Pagination(_ref) {
				let { swiper, extendParams, on, emit } = _ref;
				const pfx = 'swiper-pagination';
				let bulletSize;
				extendParams({
					pagination: {
						el: null,
						bulletElement: 'span',
						clickable: !1,
						hideOnClick: !1,
						renderBullet: null,
						renderProgressbar: null,
						renderFraction: null,
						renderCustom: null,
						progressbarOpposite: !1,
						type: 'bullets',
						dynamicBullets: !1,
						dynamicMainBullets: 1,
						formatFractionCurrent: (number) => number,
						formatFractionTotal: (number) => number,
						bulletClass: `${pfx}-bullet`,
						bulletActiveClass: `${pfx}-bullet-active`,
						modifierClass: `${pfx}-`,
						currentClass: `${pfx}-current`,
						totalClass: `${pfx}-total`,
						hiddenClass: `${pfx}-hidden`,
						progressbarFillClass: `${pfx}-progressbar-fill`,
						progressbarOppositeClass: `${pfx}-progressbar-opposite`,
						clickableClass: `${pfx}-clickable`,
						lockClass: `${pfx}-lock`,
						horizontalClass: `${pfx}-horizontal`,
						verticalClass: `${pfx}-vertical`,
						paginationDisabledClass: `${pfx}-disabled`,
					},
				}),
					(swiper.pagination = { el: null, bullets: [] });
				let dynamicBulletIndex = 0;
				function isPaginationDisabled() {
					return !swiper.params.pagination.el || !swiper.pagination.el || (Array.isArray(swiper.pagination.el) && 0 === swiper.pagination.el.length);
				}
				function setSideBullets(bulletEl, position) {
					const { bulletActiveClass } = swiper.params.pagination;
					bulletEl &&
						(bulletEl = bulletEl[('prev' === position ? 'previous' : 'next') + 'ElementSibling']) &&
						(bulletEl.classList.add(`${bulletActiveClass}-${position}`),
						(bulletEl = bulletEl[('prev' === position ? 'previous' : 'next') + 'ElementSibling']) &&
							bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`));
				}
				function onBulletClick(e) {
					const bulletEl = e.target.closest(classes_to_selector_classesToSelector(swiper.params.pagination.bulletClass));
					if (!bulletEl) return;
					e.preventDefault();
					const index = (0, utils.h)(bulletEl) * swiper.params.slidesPerGroup;
					if (swiper.params.loop) {
						if (swiper.realIndex === index) return;
						swiper.slideToLoop(index);
					} else swiper.slideTo(index);
				}
				function update() {
					const rtl = swiper.rtl,
						params = swiper.params.pagination;
					if (isPaginationDisabled()) return;
					let current,
						previousIndex,
						el = swiper.pagination.el;
					el = (0, utils.m)(el);
					const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length,
						total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
					if (
						(swiper.params.loop
							? ((previousIndex = swiper.previousRealIndex || 0),
							  (current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex))
							: void 0 !== swiper.snapIndex
							? ((current = swiper.snapIndex), (previousIndex = swiper.previousSnapIndex))
							: ((previousIndex = swiper.previousIndex || 0), (current = swiper.activeIndex || 0)),
						'bullets' === params.type && swiper.pagination.bullets && swiper.pagination.bullets.length > 0)
					) {
						const bullets = swiper.pagination.bullets;
						let firstIndex, lastIndex, midIndex;
						if (
							(params.dynamicBullets &&
								((bulletSize = (0, utils.f)(bullets[0], swiper.isHorizontal() ? 'width' : 'height', !0)),
								el.forEach((subEl) => {
									subEl.style[swiper.isHorizontal() ? 'width' : 'height'] = bulletSize * (params.dynamicMainBullets + 4) + 'px';
								}),
								params.dynamicMainBullets > 1 &&
									void 0 !== previousIndex &&
									((dynamicBulletIndex += current - (previousIndex || 0)),
									dynamicBulletIndex > params.dynamicMainBullets - 1
										? (dynamicBulletIndex = params.dynamicMainBullets - 1)
										: dynamicBulletIndex < 0 && (dynamicBulletIndex = 0)),
								(firstIndex = Math.max(current - dynamicBulletIndex, 0)),
								(lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1)),
								(midIndex = (lastIndex + firstIndex) / 2)),
							bullets.forEach((bulletEl) => {
								const classesToRemove = [
									...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map((suffix) => `${params.bulletActiveClass}${suffix}`),
								]
									.map((s) => ('string' == typeof s && s.includes(' ') ? s.split(' ') : s))
									.flat();
								bulletEl.classList.remove(...classesToRemove);
							}),
							el.length > 1)
						)
							bullets.forEach((bullet) => {
								const bulletIndex = (0, utils.h)(bullet);
								bulletIndex === current
									? bullet.classList.add(...params.bulletActiveClass.split(' '))
									: swiper.isElement && bullet.setAttribute('part', 'bullet'),
									params.dynamicBullets &&
										(bulletIndex >= firstIndex && bulletIndex <= lastIndex && bullet.classList.add(...`${params.bulletActiveClass}-main`.split(' ')),
										bulletIndex === firstIndex && setSideBullets(bullet, 'prev'),
										bulletIndex === lastIndex && setSideBullets(bullet, 'next'));
							});
						else {
							const bullet = bullets[current];
							if (
								(bullet && bullet.classList.add(...params.bulletActiveClass.split(' ')),
								swiper.isElement &&
									bullets.forEach((bulletEl, bulletIndex) => {
										bulletEl.setAttribute('part', bulletIndex === current ? 'bullet-active' : 'bullet');
									}),
								params.dynamicBullets)
							) {
								const firstDisplayedBullet = bullets[firstIndex],
									lastDisplayedBullet = bullets[lastIndex];
								for (let i = firstIndex; i <= lastIndex; i += 1)
									bullets[i] && bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(' '));
								setSideBullets(firstDisplayedBullet, 'prev'), setSideBullets(lastDisplayedBullet, 'next');
							}
						}
						if (params.dynamicBullets) {
							const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4),
								bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize,
								offsetProp = rtl ? 'right' : 'left';
							bullets.forEach((bullet) => {
								bullet.style[swiper.isHorizontal() ? offsetProp : 'top'] = `${bulletsOffset}px`;
							});
						}
					}
					el.forEach((subEl, subElIndex) => {
						if (
							('fraction' === params.type &&
								(subEl.querySelectorAll(classes_to_selector_classesToSelector(params.currentClass)).forEach((fractionEl) => {
									fractionEl.textContent = params.formatFractionCurrent(current + 1);
								}),
								subEl.querySelectorAll(classes_to_selector_classesToSelector(params.totalClass)).forEach((totalEl) => {
									totalEl.textContent = params.formatFractionTotal(total);
								})),
							'progressbar' === params.type)
						) {
							let progressbarDirection;
							progressbarDirection = params.progressbarOpposite
								? swiper.isHorizontal()
									? 'vertical'
									: 'horizontal'
								: swiper.isHorizontal()
								? 'horizontal'
								: 'vertical';
							const scale = (current + 1) / total;
							let scaleX = 1,
								scaleY = 1;
							'horizontal' === progressbarDirection ? (scaleX = scale) : (scaleY = scale),
								subEl.querySelectorAll(classes_to_selector_classesToSelector(params.progressbarFillClass)).forEach((progressEl) => {
									(progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`),
										(progressEl.style.transitionDuration = `${swiper.params.speed}ms`);
								});
						}
						'custom' === params.type && params.renderCustom
							? ((subEl.innerHTML = params.renderCustom(swiper, current + 1, total)), 0 === subElIndex && emit('paginationRender', subEl))
							: (0 === subElIndex && emit('paginationRender', subEl), emit('paginationUpdate', subEl)),
							swiper.params.watchOverflow && swiper.enabled && subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
					});
				}
				function render() {
					const params = swiper.params.pagination;
					if (isPaginationDisabled()) return;
					const slidesLength =
						swiper.virtual && swiper.params.virtual.enabled
							? swiper.virtual.slides.length
							: swiper.grid && swiper.params.grid.rows > 1
							? swiper.slides.length / Math.ceil(swiper.params.grid.rows)
							: swiper.slides.length;
					let el = swiper.pagination.el;
					el = (0, utils.m)(el);
					let paginationHTML = '';
					if ('bullets' === params.type) {
						let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
						swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength && (numberOfBullets = slidesLength);
						for (let i = 0; i < numberOfBullets; i += 1)
							params.renderBullet
								? (paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass))
								: (paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ''} class="${params.bulletClass}"></${
										params.bulletElement
								  }>`);
					}
					'fraction' === params.type &&
						(paginationHTML = params.renderFraction
							? params.renderFraction.call(swiper, params.currentClass, params.totalClass)
							: `<span class="${params.currentClass}"></span> / <span class="${params.totalClass}"></span>`),
						'progressbar' === params.type &&
							(paginationHTML = params.renderProgressbar
								? params.renderProgressbar.call(swiper, params.progressbarFillClass)
								: `<span class="${params.progressbarFillClass}"></span>`),
						(swiper.pagination.bullets = []),
						el.forEach((subEl) => {
							'custom' !== params.type && (subEl.innerHTML = paginationHTML || ''),
								'bullets' === params.type &&
									swiper.pagination.bullets.push(...subEl.querySelectorAll(classes_to_selector_classesToSelector(params.bulletClass)));
						}),
						'custom' !== params.type && emit('paginationRender', el[0]);
				}
				function init() {
					swiper.params.pagination = create_element_if_not_defined_createElementIfNotDefined(
						swiper,
						swiper.originalParams.pagination,
						swiper.params.pagination,
						{ el: 'swiper-pagination' }
					);
					const params = swiper.params.pagination;
					if (!params.el) return;
					let el;
					'string' == typeof params.el && swiper.isElement && (el = swiper.el.querySelector(params.el)),
						el || 'string' != typeof params.el || (el = [...document.querySelectorAll(params.el)]),
						el || (el = params.el),
						el &&
							0 !== el.length &&
							(swiper.params.uniqueNavElements &&
								'string' == typeof params.el &&
								Array.isArray(el) &&
								el.length > 1 &&
								((el = [...swiper.el.querySelectorAll(params.el)]),
								el.length > 1 && (el = el.filter((subEl) => (0, utils.a)(subEl, '.swiper')[0] === swiper.el)[0])),
							Array.isArray(el) && 1 === el.length && (el = el[0]),
							Object.assign(swiper.pagination, { el }),
							(el = (0, utils.m)(el)),
							el.forEach((subEl) => {
								'bullets' === params.type && params.clickable && subEl.classList.add(...(params.clickableClass || '').split(' ')),
									subEl.classList.add(params.modifierClass + params.type),
									subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass),
									'bullets' === params.type &&
										params.dynamicBullets &&
										(subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`),
										(dynamicBulletIndex = 0),
										params.dynamicMainBullets < 1 && (params.dynamicMainBullets = 1)),
									'progressbar' === params.type && params.progressbarOpposite && subEl.classList.add(params.progressbarOppositeClass),
									params.clickable && subEl.addEventListener('click', onBulletClick),
									swiper.enabled || subEl.classList.add(params.lockClass);
							}));
				}
				function destroy() {
					const params = swiper.params.pagination;
					if (isPaginationDisabled()) return;
					let el = swiper.pagination.el;
					el &&
						((el = (0, utils.m)(el)),
						el.forEach((subEl) => {
							subEl.classList.remove(params.hiddenClass),
								subEl.classList.remove(params.modifierClass + params.type),
								subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass),
								params.clickable &&
									(subEl.classList.remove(...(params.clickableClass || '').split(' ')), subEl.removeEventListener('click', onBulletClick));
						})),
						swiper.pagination.bullets && swiper.pagination.bullets.forEach((subEl) => subEl.classList.remove(...params.bulletActiveClass.split(' ')));
				}
				on('changeDirection', () => {
					if (!swiper.pagination || !swiper.pagination.el) return;
					const params = swiper.params.pagination;
					let { el } = swiper.pagination;
					(el = (0, utils.m)(el)),
						el.forEach((subEl) => {
							subEl.classList.remove(params.horizontalClass, params.verticalClass),
								subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
						});
				}),
					on('init', () => {
						!1 === swiper.params.pagination.enabled ? disable() : (init(), render(), update());
					}),
					on('activeIndexChange', () => {
						void 0 === swiper.snapIndex && update();
					}),
					on('snapIndexChange', () => {
						update();
					}),
					on('snapGridLengthChange', () => {
						render(), update();
					}),
					on('destroy', () => {
						destroy();
					}),
					on('enable disable', () => {
						let { el } = swiper.pagination;
						el &&
							((el = (0, utils.m)(el)),
							el.forEach((subEl) => subEl.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.pagination.lockClass)));
					}),
					on('lock unlock', () => {
						update();
					}),
					on('click', (_s, e) => {
						const targetEl = e.target,
							el = (0, utils.m)(swiper.pagination.el);
						if (
							swiper.params.pagination.el &&
							swiper.params.pagination.hideOnClick &&
							el &&
							el.length > 0 &&
							!targetEl.classList.contains(swiper.params.pagination.bulletClass)
						) {
							if (
								swiper.navigation &&
								((swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl) ||
									(swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl))
							)
								return;
							const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
							emit(!0 === isHidden ? 'paginationShow' : 'paginationHide'),
								el.forEach((subEl) => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
						}
					});
				const disable = () => {
					swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
					let { el } = swiper.pagination;
					el && ((el = (0, utils.m)(el)), el.forEach((subEl) => subEl.classList.add(swiper.params.pagination.paginationDisabledClass))), destroy();
				};
				Object.assign(swiper.pagination, {
					enable: () => {
						swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
						let { el } = swiper.pagination;
						el && ((el = (0, utils.m)(el)), el.forEach((subEl) => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass))),
							init(),
							render(),
							update();
					},
					disable,
					render,
					update,
					init,
					destroy,
				});
			}
			function A11y(_ref) {
				let { swiper, extendParams, on } = _ref;
				extendParams({
					a11y: {
						enabled: !0,
						notificationClass: 'swiper-notification',
						prevSlideMessage: 'Previous slide',
						nextSlideMessage: 'Next slide',
						firstSlideMessage: 'This is the first slide',
						lastSlideMessage: 'This is the last slide',
						paginationBulletMessage: 'Go to slide {{index}}',
						slideLabelMessage: '{{index}} / {{slidesLength}}',
						containerMessage: null,
						containerRoleDescriptionMessage: null,
						itemRoleDescriptionMessage: null,
						slideRole: 'group',
						id: null,
					},
				}),
					(swiper.a11y = { clicked: !1 });
				let liveRegion = null;
				function notify(message) {
					const notification = liveRegion;
					0 !== notification.length && ((notification.innerHTML = ''), (notification.innerHTML = message));
				}
				function makeElFocusable(el) {
					(el = (0, utils.m)(el)).forEach((subEl) => {
						subEl.setAttribute('tabIndex', '0');
					});
				}
				function makeElNotFocusable(el) {
					(el = (0, utils.m)(el)).forEach((subEl) => {
						subEl.setAttribute('tabIndex', '-1');
					});
				}
				function addElRole(el, role) {
					(el = (0, utils.m)(el)).forEach((subEl) => {
						subEl.setAttribute('role', role);
					});
				}
				function addElRoleDescription(el, description) {
					(el = (0, utils.m)(el)).forEach((subEl) => {
						subEl.setAttribute('aria-roledescription', description);
					});
				}
				function addElLabel(el, label) {
					(el = (0, utils.m)(el)).forEach((subEl) => {
						subEl.setAttribute('aria-label', label);
					});
				}
				function disableEl(el) {
					(el = (0, utils.m)(el)).forEach((subEl) => {
						subEl.setAttribute('aria-disabled', !0);
					});
				}
				function enableEl(el) {
					(el = (0, utils.m)(el)).forEach((subEl) => {
						subEl.setAttribute('aria-disabled', !1);
					});
				}
				function onEnterOrSpaceKey(e) {
					if (13 !== e.keyCode && 32 !== e.keyCode) return;
					const params = swiper.params.a11y,
						targetEl = e.target;
					(swiper.pagination &&
						swiper.pagination.el &&
						(targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target)) &&
						!e.target.matches(classes_to_selector_classesToSelector(swiper.params.pagination.bulletClass))) ||
						(swiper.navigation &&
							swiper.navigation.nextEl &&
							targetEl === swiper.navigation.nextEl &&
							((swiper.isEnd && !swiper.params.loop) || swiper.slideNext(),
							swiper.isEnd ? notify(params.lastSlideMessage) : notify(params.nextSlideMessage)),
						swiper.navigation &&
							swiper.navigation.prevEl &&
							targetEl === swiper.navigation.prevEl &&
							((swiper.isBeginning && !swiper.params.loop) || swiper.slidePrev(),
							swiper.isBeginning ? notify(params.firstSlideMessage) : notify(params.prevSlideMessage)),
						swiper.pagination && targetEl.matches(classes_to_selector_classesToSelector(swiper.params.pagination.bulletClass)) && targetEl.click());
				}
				function hasPagination() {
					return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
				}
				function hasClickablePagination() {
					return hasPagination() && swiper.params.pagination.clickable;
				}
				const initNavEl = (el, wrapperId, message) => {
						makeElFocusable(el),
							'BUTTON' !== el.tagName && (addElRole(el, 'button'), el.addEventListener('keydown', onEnterOrSpaceKey)),
							addElLabel(el, message),
							(function addElControls(el, controls) {
								(el = (0, utils.m)(el)).forEach((subEl) => {
									subEl.setAttribute('aria-controls', controls);
								});
							})(el, wrapperId);
					},
					handlePointerDown = () => {
						swiper.a11y.clicked = !0;
					},
					handlePointerUp = () => {
						requestAnimationFrame(() => {
							requestAnimationFrame(() => {
								swiper.destroyed || (swiper.a11y.clicked = !1);
							});
						});
					},
					handleFocus = (e) => {
						if (swiper.a11y.clicked) return;
						const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
						if (!slideEl || !swiper.slides.includes(slideEl)) return;
						const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex,
							isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
						isActive ||
							isVisible ||
							(e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) ||
							(swiper.isHorizontal() ? (swiper.el.scrollLeft = 0) : (swiper.el.scrollTop = 0), swiper.slideTo(swiper.slides.indexOf(slideEl), 0));
					},
					initSlides = () => {
						const params = swiper.params.a11y;
						params.itemRoleDescriptionMessage && addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage),
							params.slideRole && addElRole(swiper.slides, params.slideRole);
						const slidesLength = swiper.slides.length;
						params.slideLabelMessage &&
							swiper.slides.forEach((slideEl, index) => {
								const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10) : index;
								addElLabel(slideEl, params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength));
							});
					},
					init = () => {
						const params = swiper.params.a11y;
						swiper.el.append(liveRegion);
						const containerEl = swiper.el;
						params.containerRoleDescriptionMessage && addElRoleDescription(containerEl, params.containerRoleDescriptionMessage),
							params.containerMessage && addElLabel(containerEl, params.containerMessage);
						const wrapperEl = swiper.wrapperEl,
							wrapperId =
								params.id ||
								wrapperEl.getAttribute('id') ||
								`swiper-wrapper-${(function getRandomNumber(size) {
									return void 0 === size && (size = 16), 'x'.repeat(size).replace(/x/g, () => Math.round(16 * Math.random()).toString(16));
								})(16)}`,
							live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
						!(function addElId(el, id) {
							(el = (0, utils.m)(el)).forEach((subEl) => {
								subEl.setAttribute('id', id);
							});
						})(wrapperEl, wrapperId),
							(function addElLive(el, live) {
								(el = (0, utils.m)(el)).forEach((subEl) => {
									subEl.setAttribute('aria-live', live);
								});
							})(wrapperEl, live),
							initSlides();
						let { nextEl, prevEl } = swiper.navigation ? swiper.navigation : {};
						if (
							((nextEl = (0, utils.m)(nextEl)),
							(prevEl = (0, utils.m)(prevEl)),
							nextEl && nextEl.forEach((el) => initNavEl(el, wrapperId, params.nextSlideMessage)),
							prevEl && prevEl.forEach((el) => initNavEl(el, wrapperId, params.prevSlideMessage)),
							hasClickablePagination())
						) {
							(0, utils.m)(swiper.pagination.el).forEach((el) => {
								el.addEventListener('keydown', onEnterOrSpaceKey);
							});
						}
						swiper.el.addEventListener('focus', handleFocus, !0),
							swiper.el.addEventListener('pointerdown', handlePointerDown, !0),
							swiper.el.addEventListener('pointerup', handlePointerUp, !0);
					};
				on('beforeInit', () => {
					(liveRegion = (0, utils.c)('span', swiper.params.a11y.notificationClass)),
						liveRegion.setAttribute('aria-live', 'assertive'),
						liveRegion.setAttribute('aria-atomic', 'true');
				}),
					on('afterInit', () => {
						swiper.params.a11y.enabled && init();
					}),
					on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
						swiper.params.a11y.enabled && initSlides();
					}),
					on('fromEdge toEdge afterInit lock unlock', () => {
						swiper.params.a11y.enabled &&
							(function updateNavigation() {
								if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
								const { nextEl, prevEl } = swiper.navigation;
								prevEl && (swiper.isBeginning ? (disableEl(prevEl), makeElNotFocusable(prevEl)) : (enableEl(prevEl), makeElFocusable(prevEl))),
									nextEl && (swiper.isEnd ? (disableEl(nextEl), makeElNotFocusable(nextEl)) : (enableEl(nextEl), makeElFocusable(nextEl)));
							})();
					}),
					on('paginationUpdate', () => {
						swiper.params.a11y.enabled &&
							(function updatePagination() {
								const params = swiper.params.a11y;
								hasPagination() &&
									swiper.pagination.bullets.forEach((bulletEl) => {
										swiper.params.pagination.clickable &&
											(makeElFocusable(bulletEl),
											swiper.params.pagination.renderBullet ||
												(addElRole(bulletEl, 'button'),
												addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, (0, utils.h)(bulletEl) + 1)))),
											bulletEl.matches(classes_to_selector_classesToSelector(swiper.params.pagination.bulletActiveClass))
												? bulletEl.setAttribute('aria-current', 'true')
												: bulletEl.removeAttribute('aria-current');
									});
							})();
					}),
					on('destroy', () => {
						swiper.params.a11y.enabled &&
							(function destroy() {
								liveRegion && liveRegion.remove();
								let { nextEl, prevEl } = swiper.navigation ? swiper.navigation : {};
								(nextEl = (0, utils.m)(nextEl)),
									(prevEl = (0, utils.m)(prevEl)),
									nextEl && nextEl.forEach((el) => el.removeEventListener('keydown', onEnterOrSpaceKey)),
									prevEl && prevEl.forEach((el) => el.removeEventListener('keydown', onEnterOrSpaceKey)),
									hasClickablePagination() &&
										(0, utils.m)(swiper.pagination.el).forEach((el) => {
											el.removeEventListener('keydown', onEnterOrSpaceKey);
										});
								swiper.el.removeEventListener('focus', handleFocus, !0),
									swiper.el.removeEventListener('pointerdown', handlePointerDown, !0),
									swiper.el.removeEventListener('pointerup', handlePointerUp, !0);
							})();
					});
			}
		},
		'../../node_modules/swiper/shared/ssr-window.esm.mjs': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			function isObject(obj) {
				return null !== obj && 'object' == typeof obj && 'constructor' in obj && obj.constructor === Object;
			}
			function extend(target, src) {
				void 0 === target && (target = {}),
					void 0 === src && (src = {}),
					Object.keys(src).forEach((key) => {
						void 0 === target[key]
							? (target[key] = src[key])
							: isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0 && extend(target[key], src[key]);
					});
			}
			__webpack_require__.d(__webpack_exports__, { a: () => getWindow, g: () => getDocument });
			const ssrDocument = {
				body: {},
				addEventListener() {},
				removeEventListener() {},
				activeElement: { blur() {}, nodeName: '' },
				querySelector: () => null,
				querySelectorAll: () => [],
				getElementById: () => null,
				createEvent: () => ({ initEvent() {} }),
				createElement: () => ({ children: [], childNodes: [], style: {}, setAttribute() {}, getElementsByTagName: () => [] }),
				createElementNS: () => ({}),
				importNode: () => null,
				location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
			};
			function getDocument() {
				const doc = 'undefined' != typeof document ? document : {};
				return extend(doc, ssrDocument), doc;
			}
			const ssrWindow = {
				document: ssrDocument,
				navigator: { userAgent: '' },
				location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
				history: { replaceState() {}, pushState() {}, go() {}, back() {} },
				CustomEvent: function CustomEvent() {
					return this;
				},
				addEventListener() {},
				removeEventListener() {},
				getComputedStyle: () => ({ getPropertyValue: () => '' }),
				Image() {},
				Date() {},
				screen: {},
				setTimeout() {},
				clearTimeout() {},
				matchMedia: () => ({}),
				requestAnimationFrame: (callback) => ('undefined' == typeof setTimeout ? (callback(), null) : setTimeout(callback, 0)),
				cancelAnimationFrame(id) {
					'undefined' != typeof setTimeout && clearTimeout(id);
				},
			};
			function getWindow() {
				const win = 'undefined' != typeof window ? window : {};
				return extend(win, ssrWindow), win;
			}
		},
		'../../node_modules/swiper/shared/utils.mjs': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, {
				a: () => elementParents,
				c: () => createElement,
				d: () => now,
				e: () => elementChildren,
				f: () => elementOuterSize,
				h: () => elementIndex,
				j: () => getTranslate,
				m: () => makeElementsArray,
				n: () => nextTick,
				o: () => elementStyle,
				p: () => elementNextAll,
				q: () => elementPrevAll,
				r: () => animateCSSModeScroll,
				s: () => setCSSProperty,
				t: () => showWarning,
				u: () => extend,
				v: () => deleteProps,
			});
			var _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('../../node_modules/swiper/shared/ssr-window.esm.mjs');
			function deleteProps(obj) {
				const object = obj;
				Object.keys(object).forEach((key) => {
					try {
						object[key] = null;
					} catch (e) {}
					try {
						delete object[key];
					} catch (e) {}
				});
			}
			function nextTick(callback, delay) {
				return void 0 === delay && (delay = 0), setTimeout(callback, delay);
			}
			function now() {
				return Date.now();
			}
			function getTranslate(el, axis) {
				void 0 === axis && (axis = 'x');
				const window = (0, _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
				let matrix, curTransform, transformMatrix;
				const curStyle = (function getComputedStyle(el) {
					const window = (0, _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
					let style;
					return (
						window.getComputedStyle && (style = window.getComputedStyle(el, null)),
						!style && el.currentStyle && (style = el.currentStyle),
						style || (style = el.style),
						style
					);
				})(el);
				return (
					window.WebKitCSSMatrix
						? ((curTransform = curStyle.transform || curStyle.webkitTransform),
						  curTransform.split(',').length > 6 &&
								(curTransform = curTransform
									.split(', ')
									.map((a) => a.replace(',', '.'))
									.join(', ')),
						  (transformMatrix = new window.WebKitCSSMatrix('none' === curTransform ? '' : curTransform)))
						: ((transformMatrix =
								curStyle.MozTransform ||
								curStyle.OTransform ||
								curStyle.MsTransform ||
								curStyle.msTransform ||
								curStyle.transform ||
								curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')),
						  (matrix = transformMatrix.toString().split(','))),
					'x' === axis &&
						(curTransform = window.WebKitCSSMatrix ? transformMatrix.m41 : 16 === matrix.length ? parseFloat(matrix[12]) : parseFloat(matrix[4])),
					'y' === axis &&
						(curTransform = window.WebKitCSSMatrix ? transformMatrix.m42 : 16 === matrix.length ? parseFloat(matrix[13]) : parseFloat(matrix[5])),
					curTransform || 0
				);
			}
			function isObject(o) {
				return 'object' == typeof o && null !== o && o.constructor && 'Object' === Object.prototype.toString.call(o).slice(8, -1);
			}
			function extend() {
				const to = Object(arguments.length <= 0 ? void 0 : arguments[0]),
					noExtend = ['__proto__', 'constructor', 'prototype'];
				for (let i = 1; i < arguments.length; i += 1) {
					const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
					if (
						null != nextSource &&
						((node = nextSource),
						!('undefined' != typeof window && void 0 !== window.HTMLElement
							? node instanceof HTMLElement
							: node && (1 === node.nodeType || 11 === node.nodeType)))
					) {
						const keysArray = Object.keys(Object(nextSource)).filter((key) => noExtend.indexOf(key) < 0);
						for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
							const nextKey = keysArray[nextIndex],
								desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
							void 0 !== desc &&
								desc.enumerable &&
								(isObject(to[nextKey]) && isObject(nextSource[nextKey])
									? nextSource[nextKey].__swiper__
										? (to[nextKey] = nextSource[nextKey])
										: extend(to[nextKey], nextSource[nextKey])
									: !isObject(to[nextKey]) && isObject(nextSource[nextKey])
									? ((to[nextKey] = {}),
									  nextSource[nextKey].__swiper__ ? (to[nextKey] = nextSource[nextKey]) : extend(to[nextKey], nextSource[nextKey]))
									: (to[nextKey] = nextSource[nextKey]));
						}
					}
				}
				var node;
				return to;
			}
			function setCSSProperty(el, varName, varValue) {
				el.style.setProperty(varName, varValue);
			}
			function animateCSSModeScroll(_ref) {
				let { swiper, targetPosition, side } = _ref;
				const window = (0, _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(),
					startPosition = -swiper.translate;
				let time,
					startTime = null;
				const duration = swiper.params.speed;
				(swiper.wrapperEl.style.scrollSnapType = 'none'), window.cancelAnimationFrame(swiper.cssModeFrameID);
				const dir = targetPosition > startPosition ? 'next' : 'prev',
					isOutOfBound = (current, target) => ('next' === dir && current >= target) || ('prev' === dir && current <= target),
					animate = () => {
						(time = new Date().getTime()), null === startTime && (startTime = time);
						const progress = Math.max(Math.min((time - startTime) / duration, 1), 0),
							easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
						let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
						if (
							(isOutOfBound(currentPosition, targetPosition) && (currentPosition = targetPosition),
							swiper.wrapperEl.scrollTo({ [side]: currentPosition }),
							isOutOfBound(currentPosition, targetPosition))
						)
							return (
								(swiper.wrapperEl.style.overflow = 'hidden'),
								(swiper.wrapperEl.style.scrollSnapType = ''),
								setTimeout(() => {
									(swiper.wrapperEl.style.overflow = ''), swiper.wrapperEl.scrollTo({ [side]: currentPosition });
								}),
								void window.cancelAnimationFrame(swiper.cssModeFrameID)
							);
						swiper.cssModeFrameID = window.requestAnimationFrame(animate);
					};
				animate();
			}
			function elementChildren(element, selector) {
				return void 0 === selector && (selector = ''), [...element.children].filter((el) => el.matches(selector));
			}
			function showWarning(text) {
				try {
					return void console.warn(text);
				} catch (err) {}
			}
			function createElement(tag, classes) {
				void 0 === classes && (classes = []);
				const el = document.createElement(tag);
				return (
					el.classList.add(
						...(Array.isArray(classes)
							? classes
							: (function classesToTokens(classes) {
									return (
										void 0 === classes && (classes = ''),
										classes
											.trim()
											.split(' ')
											.filter((c) => !!c.trim())
									);
							  })(classes))
					),
					el
				);
			}
			function elementPrevAll(el, selector) {
				const prevEls = [];
				for (; el.previousElementSibling; ) {
					const prev = el.previousElementSibling;
					selector ? prev.matches(selector) && prevEls.push(prev) : prevEls.push(prev), (el = prev);
				}
				return prevEls;
			}
			function elementNextAll(el, selector) {
				const nextEls = [];
				for (; el.nextElementSibling; ) {
					const next = el.nextElementSibling;
					selector ? next.matches(selector) && nextEls.push(next) : nextEls.push(next), (el = next);
				}
				return nextEls;
			}
			function elementStyle(el, prop) {
				return (0, _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)().getComputedStyle(el, null).getPropertyValue(prop);
			}
			function elementIndex(el) {
				let i,
					child = el;
				if (child) {
					for (i = 0; null !== (child = child.previousSibling); ) 1 === child.nodeType && (i += 1);
					return i;
				}
			}
			function elementParents(el, selector) {
				const parents = [];
				let parent = el.parentElement;
				for (; parent; ) selector ? parent.matches(selector) && parents.push(parent) : parents.push(parent), (parent = parent.parentElement);
				return parents;
			}
			function elementOuterSize(el, size, includeMargins) {
				const window = (0, _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
				return includeMargins
					? el['width' === size ? 'offsetWidth' : 'offsetHeight'] +
							parseFloat(window.getComputedStyle(el, null).getPropertyValue('width' === size ? 'margin-right' : 'margin-top')) +
							parseFloat(window.getComputedStyle(el, null).getPropertyValue('width' === size ? 'margin-left' : 'margin-bottom'))
					: el.offsetWidth;
			}
			function makeElementsArray(el) {
				return (Array.isArray(el) ? el : [el]).filter((e) => !!e);
			}
		},
		'../../node_modules/swiper/swiper-react.mjs': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.d(__webpack_exports__, { RC: () => swiper_react_Swiper, qr: () => SwiperSlide });
			var compat_module = __webpack_require__('../../node_modules/preact/compat/dist/compat.module.js'),
				ssr_window_esm = __webpack_require__('../../node_modules/swiper/shared/ssr-window.esm.mjs'),
				utils = __webpack_require__('../../node_modules/swiper/shared/utils.mjs');
			let support, deviceCached, browser;
			function getSupport() {
				return (
					support ||
						(support = (function calcSupport() {
							const window = (0, ssr_window_esm.a)(),
								document = (0, ssr_window_esm.g)();
							return {
								smoothScroll: document.documentElement && document.documentElement.style && 'scrollBehavior' in document.documentElement.style,
								touch: !!('ontouchstart' in window || (window.DocumentTouch && document instanceof window.DocumentTouch)),
							};
						})()),
					support
				);
			}
			function getDevice(overrides) {
				return (
					void 0 === overrides && (overrides = {}),
					deviceCached ||
						(deviceCached = (function calcDevice(_temp) {
							let { userAgent } = void 0 === _temp ? {} : _temp;
							const support = getSupport(),
								window = (0, ssr_window_esm.a)(),
								platform = window.navigator.platform,
								ua = userAgent || window.navigator.userAgent,
								device = { ios: !1, android: !1 },
								screenWidth = window.screen.width,
								screenHeight = window.screen.height,
								android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
							let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
							const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/),
								iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
								windows = 'Win32' === platform;
							let macos = 'MacIntel' === platform;
							return (
								!ipad &&
									macos &&
									support.touch &&
									[
										'1024x1366',
										'1366x1024',
										'834x1194',
										'1194x834',
										'834x1112',
										'1112x834',
										'768x1024',
										'1024x768',
										'820x1180',
										'1180x820',
										'810x1080',
										'1080x810',
									].indexOf(`${screenWidth}x${screenHeight}`) >= 0 &&
									((ipad = ua.match(/(Version)\/([\d.]+)/)), ipad || (ipad = [0, 1, '13_0_0']), (macos = !1)),
								android && !windows && ((device.os = 'android'), (device.android = !0)),
								(ipad || iphone || ipod) && ((device.os = 'ios'), (device.ios = !0)),
								device
							);
						})(overrides)),
					deviceCached
				);
			}
			function getBrowser() {
				return (
					browser ||
						(browser = (function calcBrowser() {
							const window = (0, ssr_window_esm.a)(),
								device = getDevice();
							let needPerspectiveFix = !1;
							function isSafari() {
								const ua = window.navigator.userAgent.toLowerCase();
								return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
							}
							if (isSafari()) {
								const ua = String(window.navigator.userAgent);
								if (ua.includes('Version/')) {
									const [major, minor] = ua
										.split('Version/')[1]
										.split(' ')[0]
										.split('.')
										.map((num) => Number(num));
									needPerspectiveFix = major < 16 || (16 === major && minor < 2);
								}
							}
							const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
								isSafariBrowser = isSafari();
							return {
								isSafari: needPerspectiveFix || isSafariBrowser,
								needPerspectiveFix,
								need3dFix: isSafariBrowser || (isWebView && device.ios),
								isWebView,
							};
						})()),
					browser
				);
			}
			var eventsEmitter = {
				on(events, handler, priority) {
					const self = this;
					if (!self.eventsListeners || self.destroyed) return self;
					if ('function' != typeof handler) return self;
					const method = priority ? 'unshift' : 'push';
					return (
						events.split(' ').forEach((event) => {
							self.eventsListeners[event] || (self.eventsListeners[event] = []), self.eventsListeners[event][method](handler);
						}),
						self
					);
				},
				once(events, handler, priority) {
					const self = this;
					if (!self.eventsListeners || self.destroyed) return self;
					if ('function' != typeof handler) return self;
					function onceHandler() {
						self.off(events, onceHandler), onceHandler.__emitterProxy && delete onceHandler.__emitterProxy;
						for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
						handler.apply(self, args);
					}
					return (onceHandler.__emitterProxy = handler), self.on(events, onceHandler, priority);
				},
				onAny(handler, priority) {
					const self = this;
					if (!self.eventsListeners || self.destroyed) return self;
					if ('function' != typeof handler) return self;
					const method = priority ? 'unshift' : 'push';
					return self.eventsAnyListeners.indexOf(handler) < 0 && self.eventsAnyListeners[method](handler), self;
				},
				offAny(handler) {
					const self = this;
					if (!self.eventsListeners || self.destroyed) return self;
					if (!self.eventsAnyListeners) return self;
					const index = self.eventsAnyListeners.indexOf(handler);
					return index >= 0 && self.eventsAnyListeners.splice(index, 1), self;
				},
				off(events, handler) {
					const self = this;
					return !self.eventsListeners || self.destroyed
						? self
						: self.eventsListeners
						? (events.split(' ').forEach((event) => {
								void 0 === handler
									? (self.eventsListeners[event] = [])
									: self.eventsListeners[event] &&
									  self.eventsListeners[event].forEach((eventHandler, index) => {
											(eventHandler === handler || (eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler)) &&
												self.eventsListeners[event].splice(index, 1);
									  });
						  }),
						  self)
						: self;
				},
				emit() {
					const self = this;
					if (!self.eventsListeners || self.destroyed) return self;
					if (!self.eventsListeners) return self;
					let events, data, context;
					for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
					'string' == typeof args[0] || Array.isArray(args[0])
						? ((events = args[0]), (data = args.slice(1, args.length)), (context = self))
						: ((events = args[0].events), (data = args[0].data), (context = args[0].context || self)),
						data.unshift(context);
					return (
						(Array.isArray(events) ? events : events.split(' ')).forEach((event) => {
							self.eventsAnyListeners &&
								self.eventsAnyListeners.length &&
								self.eventsAnyListeners.forEach((eventHandler) => {
									eventHandler.apply(context, [event, ...data]);
								}),
								self.eventsListeners &&
									self.eventsListeners[event] &&
									self.eventsListeners[event].forEach((eventHandler) => {
										eventHandler.apply(context, data);
									});
						}),
						self
					);
				},
			};
			const processLazyPreloader = (swiper, imageEl) => {
					if (!swiper || swiper.destroyed || !swiper.params) return;
					const slideEl = imageEl.closest(swiper.isElement ? 'swiper-slide' : `.${swiper.params.slideClass}`);
					if (slideEl) {
						let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
						!lazyEl &&
							swiper.isElement &&
							(slideEl.shadowRoot
								? (lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`))
								: requestAnimationFrame(() => {
										slideEl.shadowRoot &&
											((lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`)), lazyEl && lazyEl.remove());
								  })),
							lazyEl && lazyEl.remove();
					}
				},
				unlazy = (swiper, index) => {
					if (!swiper.slides[index]) return;
					const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
					imageEl && imageEl.removeAttribute('loading');
				},
				preload = (swiper) => {
					if (!swiper || swiper.destroyed || !swiper.params) return;
					let amount = swiper.params.lazyPreloadPrevNext;
					const len = swiper.slides.length;
					if (!len || !amount || amount < 0) return;
					amount = Math.min(amount, len);
					const slidesPerView = 'auto' === swiper.params.slidesPerView ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView),
						activeIndex = swiper.activeIndex;
					if (swiper.params.grid && swiper.params.grid.rows > 1) {
						const activeColumn = activeIndex,
							preloadColumns = [activeColumn - amount];
						return (
							preloadColumns.push(...Array.from({ length: amount }).map((_, i) => activeColumn + slidesPerView + i)),
							void swiper.slides.forEach((slideEl, i) => {
								preloadColumns.includes(slideEl.column) && unlazy(swiper, i);
							})
						);
					}
					const slideIndexLastInView = activeIndex + slidesPerView - 1;
					if (swiper.params.rewind || swiper.params.loop)
						for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
							const realIndex = ((i % len) + len) % len;
							(realIndex < activeIndex || realIndex > slideIndexLastInView) && unlazy(swiper, realIndex);
						}
					else
						for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1)
							i !== activeIndex && (i > slideIndexLastInView || i < activeIndex) && unlazy(swiper, i);
				};
			var update = {
				updateSize: function updateSize() {
					const swiper = this;
					let width, height;
					const el = swiper.el;
					(width = void 0 !== swiper.params.width && null !== swiper.params.width ? swiper.params.width : el.clientWidth),
						(height = void 0 !== swiper.params.height && null !== swiper.params.height ? swiper.params.height : el.clientHeight),
						(0 === width && swiper.isHorizontal()) ||
							(0 === height && swiper.isVertical()) ||
							((width = width - parseInt((0, utils.o)(el, 'padding-left') || 0, 10) - parseInt((0, utils.o)(el, 'padding-right') || 0, 10)),
							(height = height - parseInt((0, utils.o)(el, 'padding-top') || 0, 10) - parseInt((0, utils.o)(el, 'padding-bottom') || 0, 10)),
							Number.isNaN(width) && (width = 0),
							Number.isNaN(height) && (height = 0),
							Object.assign(swiper, { width, height, size: swiper.isHorizontal() ? width : height }));
				},
				updateSlides: function updateSlides() {
					const swiper = this;
					function getDirectionPropertyValue(node, label) {
						return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
					}
					const params = swiper.params,
						{ wrapperEl, slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL } = swiper,
						isVirtual = swiper.virtual && params.virtual.enabled,
						previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length,
						slides = (0, utils.e)(slidesEl, `.${swiper.params.slideClass}, swiper-slide`),
						slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
					let snapGrid = [];
					const slidesGrid = [],
						slidesSizesGrid = [];
					let offsetBefore = params.slidesOffsetBefore;
					'function' == typeof offsetBefore && (offsetBefore = params.slidesOffsetBefore.call(swiper));
					let offsetAfter = params.slidesOffsetAfter;
					'function' == typeof offsetAfter && (offsetAfter = params.slidesOffsetAfter.call(swiper));
					const previousSnapGridLength = swiper.snapGrid.length,
						previousSlidesGridLength = swiper.slidesGrid.length;
					let spaceBetween = params.spaceBetween,
						slidePosition = -offsetBefore,
						prevSlideSize = 0,
						index = 0;
					if (void 0 === swiperSize) return;
					'string' == typeof spaceBetween && spaceBetween.indexOf('%') >= 0
						? (spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize)
						: 'string' == typeof spaceBetween && (spaceBetween = parseFloat(spaceBetween)),
						(swiper.virtualSize = -spaceBetween),
						slides.forEach((slideEl) => {
							rtl ? (slideEl.style.marginLeft = '') : (slideEl.style.marginRight = ''),
								(slideEl.style.marginBottom = ''),
								(slideEl.style.marginTop = '');
						}),
						params.centeredSlides &&
							params.cssMode &&
							((0, utils.s)(wrapperEl, '--swiper-centered-offset-before', ''), (0, utils.s)(wrapperEl, '--swiper-centered-offset-after', ''));
					const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
					let slideSize;
					gridEnabled ? swiper.grid.initSlides(slides) : swiper.grid && swiper.grid.unsetSlides();
					const shouldResetSlideSize =
						'auto' === params.slidesPerView &&
						params.breakpoints &&
						Object.keys(params.breakpoints).filter((key) => void 0 !== params.breakpoints[key].slidesPerView).length > 0;
					for (let i = 0; i < slidesLength; i += 1) {
						let slide;
						if (
							((slideSize = 0),
							slides[i] && (slide = slides[i]),
							gridEnabled && swiper.grid.updateSlide(i, slide, slides),
							!slides[i] || 'none' !== (0, utils.o)(slide, 'display'))
						) {
							if ('auto' === params.slidesPerView) {
								shouldResetSlideSize && (slides[i].style[swiper.getDirectionLabel('width')] = '');
								const slideStyles = getComputedStyle(slide),
									currentTransform = slide.style.transform,
									currentWebKitTransform = slide.style.webkitTransform;
								if (
									(currentTransform && (slide.style.transform = 'none'),
									currentWebKitTransform && (slide.style.webkitTransform = 'none'),
									params.roundLengths)
								)
									slideSize = swiper.isHorizontal() ? (0, utils.f)(slide, 'width', !0) : (0, utils.f)(slide, 'height', !0);
								else {
									const width = getDirectionPropertyValue(slideStyles, 'width'),
										paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left'),
										paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right'),
										marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left'),
										marginRight = getDirectionPropertyValue(slideStyles, 'margin-right'),
										boxSizing = slideStyles.getPropertyValue('box-sizing');
									if (boxSizing && 'border-box' === boxSizing) slideSize = width + marginLeft + marginRight;
									else {
										const { clientWidth, offsetWidth } = slide;
										slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
									}
								}
								currentTransform && (slide.style.transform = currentTransform),
									currentWebKitTransform && (slide.style.webkitTransform = currentWebKitTransform),
									params.roundLengths && (slideSize = Math.floor(slideSize));
							} else
								(slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView),
									params.roundLengths && (slideSize = Math.floor(slideSize)),
									slides[i] && (slides[i].style[swiper.getDirectionLabel('width')] = `${slideSize}px`);
							slides[i] && (slides[i].swiperSlideSize = slideSize),
								slidesSizesGrid.push(slideSize),
								params.centeredSlides
									? ((slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween),
									  0 === prevSlideSize && 0 !== i && (slidePosition = slidePosition - swiperSize / 2 - spaceBetween),
									  0 === i && (slidePosition = slidePosition - swiperSize / 2 - spaceBetween),
									  Math.abs(slidePosition) < 0.001 && (slidePosition = 0),
									  params.roundLengths && (slidePosition = Math.floor(slidePosition)),
									  index % params.slidesPerGroup == 0 && snapGrid.push(slidePosition),
									  slidesGrid.push(slidePosition))
									: (params.roundLengths && (slidePosition = Math.floor(slidePosition)),
									  (index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup == 0 && snapGrid.push(slidePosition),
									  slidesGrid.push(slidePosition),
									  (slidePosition = slidePosition + slideSize + spaceBetween)),
								(swiper.virtualSize += slideSize + spaceBetween),
								(prevSlideSize = slideSize),
								(index += 1);
						}
					}
					if (
						((swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter),
						rtl &&
							wrongRTL &&
							('slide' === params.effect || 'coverflow' === params.effect) &&
							(wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`),
						params.setWrapperSize && (wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`),
						gridEnabled && swiper.grid.updateWrapperSize(slideSize, snapGrid),
						!params.centeredSlides)
					) {
						const newSlidesGrid = [];
						for (let i = 0; i < snapGrid.length; i += 1) {
							let slidesGridItem = snapGrid[i];
							params.roundLengths && (slidesGridItem = Math.floor(slidesGridItem)),
								snapGrid[i] <= swiper.virtualSize - swiperSize && newSlidesGrid.push(slidesGridItem);
						}
						(snapGrid = newSlidesGrid),
							Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1 &&
								snapGrid.push(swiper.virtualSize - swiperSize);
					}
					if (isVirtual && params.loop) {
						const size = slidesSizesGrid[0] + spaceBetween;
						if (params.slidesPerGroup > 1) {
							const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup),
								groupSize = size * params.slidesPerGroup;
							for (let i = 0; i < groups; i += 1) snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
						}
						for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1)
							1 === params.slidesPerGroup && snapGrid.push(snapGrid[snapGrid.length - 1] + size),
								slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size),
								(swiper.virtualSize += size);
					}
					if ((0 === snapGrid.length && (snapGrid = [0]), 0 !== spaceBetween)) {
						const key = swiper.isHorizontal() && rtl ? 'marginLeft' : swiper.getDirectionLabel('marginRight');
						slides
							.filter((_, slideIndex) => !(params.cssMode && !params.loop) || slideIndex !== slides.length - 1)
							.forEach((slideEl) => {
								slideEl.style[key] = `${spaceBetween}px`;
							});
					}
					if (params.centeredSlides && params.centeredSlidesBounds) {
						let allSlidesSize = 0;
						slidesSizesGrid.forEach((slideSizeValue) => {
							allSlidesSize += slideSizeValue + (spaceBetween || 0);
						}),
							(allSlidesSize -= spaceBetween);
						const maxSnap = allSlidesSize - swiperSize;
						snapGrid = snapGrid.map((snap) => (snap <= 0 ? -offsetBefore : snap > maxSnap ? maxSnap + offsetAfter : snap));
					}
					if (params.centerInsufficientSlides) {
						let allSlidesSize = 0;
						if (
							(slidesSizesGrid.forEach((slideSizeValue) => {
								allSlidesSize += slideSizeValue + (spaceBetween || 0);
							}),
							(allSlidesSize -= spaceBetween),
							allSlidesSize < swiperSize)
						) {
							const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
							snapGrid.forEach((snap, snapIndex) => {
								snapGrid[snapIndex] = snap - allSlidesOffset;
							}),
								slidesGrid.forEach((snap, snapIndex) => {
									slidesGrid[snapIndex] = snap + allSlidesOffset;
								});
						}
					}
					if (
						(Object.assign(swiper, { slides, snapGrid, slidesGrid, slidesSizesGrid }),
						params.centeredSlides && params.cssMode && !params.centeredSlidesBounds)
					) {
						(0, utils.s)(wrapperEl, '--swiper-centered-offset-before', -snapGrid[0] + 'px'),
							(0, utils.s)(wrapperEl, '--swiper-centered-offset-after', swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2 + 'px');
						const addToSnapGrid = -swiper.snapGrid[0],
							addToSlidesGrid = -swiper.slidesGrid[0];
						(swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid)),
							(swiper.slidesGrid = swiper.slidesGrid.map((v) => v + addToSlidesGrid));
					}
					if (
						(slidesLength !== previousSlidesLength && swiper.emit('slidesLengthChange'),
						snapGrid.length !== previousSnapGridLength &&
							(swiper.params.watchOverflow && swiper.checkOverflow(), swiper.emit('snapGridLengthChange')),
						slidesGrid.length !== previousSlidesGridLength && swiper.emit('slidesGridLengthChange'),
						params.watchSlidesProgress && swiper.updateSlidesOffset(),
						swiper.emit('slidesUpdated'),
						!(isVirtual || params.cssMode || ('slide' !== params.effect && 'fade' !== params.effect)))
					) {
						const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`,
							hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
						slidesLength <= params.maxBackfaceHiddenSlides
							? hasClassBackfaceClassAdded || swiper.el.classList.add(backFaceHiddenClass)
							: hasClassBackfaceClassAdded && swiper.el.classList.remove(backFaceHiddenClass);
					}
				},
				updateAutoHeight: function updateAutoHeight(speed) {
					const swiper = this,
						activeSlides = [],
						isVirtual = swiper.virtual && swiper.params.virtual.enabled;
					let i,
						newHeight = 0;
					'number' == typeof speed ? swiper.setTransition(speed) : !0 === speed && swiper.setTransition(swiper.params.speed);
					const getSlideByIndex = (index) => (isVirtual ? swiper.slides[swiper.getSlideIndexByData(index)] : swiper.slides[index]);
					if ('auto' !== swiper.params.slidesPerView && swiper.params.slidesPerView > 1)
						if (swiper.params.centeredSlides)
							(swiper.visibleSlides || []).forEach((slide) => {
								activeSlides.push(slide);
							});
						else
							for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
								const index = swiper.activeIndex + i;
								if (index > swiper.slides.length && !isVirtual) break;
								activeSlides.push(getSlideByIndex(index));
							}
					else activeSlides.push(getSlideByIndex(swiper.activeIndex));
					for (i = 0; i < activeSlides.length; i += 1)
						if (void 0 !== activeSlides[i]) {
							const height = activeSlides[i].offsetHeight;
							newHeight = height > newHeight ? height : newHeight;
						}
					(newHeight || 0 === newHeight) && (swiper.wrapperEl.style.height = `${newHeight}px`);
				},
				updateSlidesOffset: function updateSlidesOffset() {
					const swiper = this,
						slides = swiper.slides,
						minusOffset = swiper.isElement ? (swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop) : 0;
					for (let i = 0; i < slides.length; i += 1)
						slides[i].swiperSlideOffset =
							(swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
				},
				updateSlidesProgress: function updateSlidesProgress(translate) {
					void 0 === translate && (translate = (this && this.translate) || 0);
					const swiper = this,
						params = swiper.params,
						{ slides, rtlTranslate: rtl, snapGrid } = swiper;
					if (0 === slides.length) return;
					void 0 === slides[0].swiperSlideOffset && swiper.updateSlidesOffset();
					let offsetCenter = -translate;
					rtl && (offsetCenter = translate),
						slides.forEach((slideEl) => {
							slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass);
						}),
						(swiper.visibleSlidesIndexes = []),
						(swiper.visibleSlides = []);
					let spaceBetween = params.spaceBetween;
					'string' == typeof spaceBetween && spaceBetween.indexOf('%') >= 0
						? (spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiper.size)
						: 'string' == typeof spaceBetween && (spaceBetween = parseFloat(spaceBetween));
					for (let i = 0; i < slides.length; i += 1) {
						const slide = slides[i];
						let slideOffset = slide.swiperSlideOffset;
						params.cssMode && params.centeredSlides && (slideOffset -= slides[0].swiperSlideOffset);
						const slideProgress =
								(offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween),
							originalSlideProgress =
								(offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) /
								(slide.swiperSlideSize + spaceBetween),
							slideBefore = -(offsetCenter - slideOffset),
							slideAfter = slideBefore + swiper.slidesSizesGrid[i],
							isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
						((slideBefore >= 0 && slideBefore < swiper.size - 1) ||
							(slideAfter > 1 && slideAfter <= swiper.size) ||
							(slideBefore <= 0 && slideAfter >= swiper.size)) &&
							(swiper.visibleSlides.push(slide), swiper.visibleSlidesIndexes.push(i), slides[i].classList.add(params.slideVisibleClass)),
							isFullyVisible && slides[i].classList.add(params.slideFullyVisibleClass),
							(slide.progress = rtl ? -slideProgress : slideProgress),
							(slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress);
					}
				},
				updateProgress: function updateProgress(translate) {
					const swiper = this;
					if (void 0 === translate) {
						const multiplier = swiper.rtlTranslate ? -1 : 1;
						translate = (swiper && swiper.translate && swiper.translate * multiplier) || 0;
					}
					const params = swiper.params,
						translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
					let { progress, isBeginning, isEnd, progressLoop } = swiper;
					const wasBeginning = isBeginning,
						wasEnd = isEnd;
					if (0 === translatesDiff) (progress = 0), (isBeginning = !0), (isEnd = !0);
					else {
						progress = (translate - swiper.minTranslate()) / translatesDiff;
						const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1,
							isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
						(isBeginning = isBeginningRounded || progress <= 0),
							(isEnd = isEndRounded || progress >= 1),
							isBeginningRounded && (progress = 0),
							isEndRounded && (progress = 1);
					}
					if (params.loop) {
						const firstSlideIndex = swiper.getSlideIndexByData(0),
							lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1),
							firstSlideTranslate = swiper.slidesGrid[firstSlideIndex],
							lastSlideTranslate = swiper.slidesGrid[lastSlideIndex],
							translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1],
							translateAbs = Math.abs(translate);
						(progressLoop =
							translateAbs >= firstSlideTranslate
								? (translateAbs - firstSlideTranslate) / translateMax
								: (translateAbs + translateMax - lastSlideTranslate) / translateMax),
							progressLoop > 1 && (progressLoop -= 1);
					}
					Object.assign(swiper, { progress, progressLoop, isBeginning, isEnd }),
						(params.watchSlidesProgress || (params.centeredSlides && params.autoHeight)) && swiper.updateSlidesProgress(translate),
						isBeginning && !wasBeginning && swiper.emit('reachBeginning toEdge'),
						isEnd && !wasEnd && swiper.emit('reachEnd toEdge'),
						((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) && swiper.emit('fromEdge'),
						swiper.emit('progress', progress);
				},
				updateSlidesClasses: function updateSlidesClasses() {
					const swiper = this,
						{ slides, params, slidesEl, activeIndex } = swiper,
						isVirtual = swiper.virtual && params.virtual.enabled,
						gridEnabled = swiper.grid && params.grid && params.grid.rows > 1,
						getFilteredSlide = (selector) => (0, utils.e)(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
					let activeSlide, prevSlide, nextSlide;
					if (
						(slides.forEach((slideEl) => {
							slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
						}),
						isVirtual)
					)
						if (params.loop) {
							let slideIndex = activeIndex - swiper.virtual.slidesBefore;
							slideIndex < 0 && (slideIndex = swiper.virtual.slides.length + slideIndex),
								slideIndex >= swiper.virtual.slides.length && (slideIndex -= swiper.virtual.slides.length),
								(activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`));
						} else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
					else
						gridEnabled
							? ((activeSlide = slides.filter((slideEl) => slideEl.column === activeIndex)[0]),
							  (nextSlide = slides.filter((slideEl) => slideEl.column === activeIndex + 1)[0]),
							  (prevSlide = slides.filter((slideEl) => slideEl.column === activeIndex - 1)[0]))
							: (activeSlide = slides[activeIndex]);
					activeSlide &&
						(activeSlide.classList.add(params.slideActiveClass),
						gridEnabled
							? (nextSlide && nextSlide.classList.add(params.slideNextClass), prevSlide && prevSlide.classList.add(params.slidePrevClass))
							: ((nextSlide = (0, utils.p)(activeSlide, `.${params.slideClass}, swiper-slide`)[0]),
							  params.loop && !nextSlide && (nextSlide = slides[0]),
							  nextSlide && nextSlide.classList.add(params.slideNextClass),
							  (prevSlide = (0, utils.q)(activeSlide, `.${params.slideClass}, swiper-slide`)[0]),
							  params.loop && 0 === !prevSlide && (prevSlide = slides[slides.length - 1]),
							  prevSlide && prevSlide.classList.add(params.slidePrevClass))),
						swiper.emitSlidesClasses();
				},
				updateActiveIndex: function updateActiveIndex(newActiveIndex) {
					const swiper = this,
						translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate,
						{ snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex } = swiper;
					let snapIndex,
						activeIndex = newActiveIndex;
					const getVirtualRealIndex = (aIndex) => {
						let realIndex = aIndex - swiper.virtual.slidesBefore;
						return (
							realIndex < 0 && (realIndex = swiper.virtual.slides.length + realIndex),
							realIndex >= swiper.virtual.slides.length && (realIndex -= swiper.virtual.slides.length),
							realIndex
						);
					};
					if (
						(void 0 === activeIndex &&
							(activeIndex = (function getActiveIndexByTranslate(swiper) {
								const { slidesGrid, params } = swiper,
									translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
								let activeIndex;
								for (let i = 0; i < slidesGrid.length; i += 1)
									void 0 !== slidesGrid[i + 1]
										? translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2
											? (activeIndex = i)
											: translate >= slidesGrid[i] && translate < slidesGrid[i + 1] && (activeIndex = i + 1)
										: translate >= slidesGrid[i] && (activeIndex = i);
								return params.normalizeSlideIndex && (activeIndex < 0 || void 0 === activeIndex) && (activeIndex = 0), activeIndex;
							})(swiper)),
						snapGrid.indexOf(translate) >= 0)
					)
						snapIndex = snapGrid.indexOf(translate);
					else {
						const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
						snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
					}
					if ((snapIndex >= snapGrid.length && (snapIndex = snapGrid.length - 1), activeIndex === previousIndex && !swiper.params.loop))
						return void (snapIndex !== previousSnapIndex && ((swiper.snapIndex = snapIndex), swiper.emit('snapIndexChange')));
					if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled)
						return void (swiper.realIndex = getVirtualRealIndex(activeIndex));
					const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
					let realIndex;
					if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex);
					else if (gridEnabled) {
						const firstSlideInColumn = swiper.slides.filter((slideEl) => slideEl.column === activeIndex)[0];
						let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute('data-swiper-slide-index'), 10);
						Number.isNaN(activeSlideIndex) && (activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0)),
							(realIndex = Math.floor(activeSlideIndex / params.grid.rows));
					} else if (swiper.slides[activeIndex]) {
						const slideIndex = swiper.slides[activeIndex].getAttribute('data-swiper-slide-index');
						realIndex = slideIndex ? parseInt(slideIndex, 10) : activeIndex;
					} else realIndex = activeIndex;
					Object.assign(swiper, { previousSnapIndex, snapIndex, previousRealIndex, realIndex, previousIndex, activeIndex }),
						swiper.initialized && preload(swiper),
						swiper.emit('activeIndexChange'),
						swiper.emit('snapIndexChange'),
						(swiper.initialized || swiper.params.runCallbacksOnInit) &&
							(previousRealIndex !== realIndex && swiper.emit('realIndexChange'), swiper.emit('slideChange'));
				},
				updateClickedSlide: function updateClickedSlide(el, path) {
					const swiper = this,
						params = swiper.params;
					let slide = el.closest(`.${params.slideClass}, swiper-slide`);
					!slide &&
						swiper.isElement &&
						path &&
						path.length > 1 &&
						path.includes(el) &&
						[...path.slice(path.indexOf(el) + 1, path.length)].forEach((pathEl) => {
							!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`) && (slide = pathEl);
						});
					let slideIndex,
						slideFound = !1;
					if (slide)
						for (let i = 0; i < swiper.slides.length; i += 1)
							if (swiper.slides[i] === slide) {
								(slideFound = !0), (slideIndex = i);
								break;
							}
					if (!slide || !slideFound) return (swiper.clickedSlide = void 0), void (swiper.clickedIndex = void 0);
					(swiper.clickedSlide = slide),
						swiper.virtual && swiper.params.virtual.enabled
							? (swiper.clickedIndex = parseInt(slide.getAttribute('data-swiper-slide-index'), 10))
							: (swiper.clickedIndex = slideIndex),
						params.slideToClickedSlide &&
							void 0 !== swiper.clickedIndex &&
							swiper.clickedIndex !== swiper.activeIndex &&
							swiper.slideToClickedSlide();
				},
			};
			var translate = {
				getTranslate: function getSwiperTranslate(axis) {
					void 0 === axis && (axis = this.isHorizontal() ? 'x' : 'y');
					const { params, rtlTranslate: rtl, translate, wrapperEl } = this;
					if (params.virtualTranslate) return rtl ? -translate : translate;
					if (params.cssMode) return translate;
					let currentTranslate = (0, utils.j)(wrapperEl, axis);
					return (currentTranslate += this.cssOverflowAdjustment()), rtl && (currentTranslate = -currentTranslate), currentTranslate || 0;
				},
				setTranslate: function setTranslate(translate, byController) {
					const swiper = this,
						{ rtlTranslate: rtl, params, wrapperEl, progress } = swiper;
					let newProgress,
						x = 0,
						y = 0;
					swiper.isHorizontal() ? (x = rtl ? -translate : translate) : (y = translate),
						params.roundLengths && ((x = Math.floor(x)), (y = Math.floor(y))),
						(swiper.previousTranslate = swiper.translate),
						(swiper.translate = swiper.isHorizontal() ? x : y),
						params.cssMode
							? (wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y)
							: params.virtualTranslate ||
							  (swiper.isHorizontal() ? (x -= swiper.cssOverflowAdjustment()) : (y -= swiper.cssOverflowAdjustment()),
							  (wrapperEl.style.transform = `translate3d(${x}px, ${y}px, 0px)`));
					const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
					(newProgress = 0 === translatesDiff ? 0 : (translate - swiper.minTranslate()) / translatesDiff),
						newProgress !== progress && swiper.updateProgress(translate),
						swiper.emit('setTranslate', swiper.translate, byController);
				},
				minTranslate: function minTranslate() {
					return -this.snapGrid[0];
				},
				maxTranslate: function maxTranslate() {
					return -this.snapGrid[this.snapGrid.length - 1];
				},
				translateTo: function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
					void 0 === translate && (translate = 0),
						void 0 === speed && (speed = this.params.speed),
						void 0 === runCallbacks && (runCallbacks = !0),
						void 0 === translateBounds && (translateBounds = !0);
					const swiper = this,
						{ params, wrapperEl } = swiper;
					if (swiper.animating && params.preventInteractionOnTransition) return !1;
					const minTranslate = swiper.minTranslate(),
						maxTranslate = swiper.maxTranslate();
					let newTranslate;
					if (
						((newTranslate =
							translateBounds && translate > minTranslate ? minTranslate : translateBounds && translate < maxTranslate ? maxTranslate : translate),
						swiper.updateProgress(newTranslate),
						params.cssMode)
					) {
						const isH = swiper.isHorizontal();
						if (0 === speed) wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
						else {
							if (!swiper.support.smoothScroll) return (0, utils.r)({ swiper, targetPosition: -newTranslate, side: isH ? 'left' : 'top' }), !0;
							wrapperEl.scrollTo({ [isH ? 'left' : 'top']: -newTranslate, behavior: 'smooth' });
						}
						return !0;
					}
					return (
						0 === speed
							? (swiper.setTransition(0),
							  swiper.setTranslate(newTranslate),
							  runCallbacks && (swiper.emit('beforeTransitionStart', speed, internal), swiper.emit('transitionEnd')))
							: (swiper.setTransition(speed),
							  swiper.setTranslate(newTranslate),
							  runCallbacks && (swiper.emit('beforeTransitionStart', speed, internal), swiper.emit('transitionStart')),
							  swiper.animating ||
									((swiper.animating = !0),
									swiper.onTranslateToWrapperTransitionEnd ||
										(swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
											swiper &&
												!swiper.destroyed &&
												e.target === this &&
												(swiper.wrapperEl.removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd),
												(swiper.onTranslateToWrapperTransitionEnd = null),
												delete swiper.onTranslateToWrapperTransitionEnd,
												runCallbacks && swiper.emit('transitionEnd'));
										}),
									swiper.wrapperEl.addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd))),
						!0
					);
				},
			};
			function transitionEmit(_ref) {
				let { swiper, runCallbacks, direction, step } = _ref;
				const { activeIndex, previousIndex } = swiper;
				let dir = direction;
				if (
					(dir || (dir = activeIndex > previousIndex ? 'next' : activeIndex < previousIndex ? 'prev' : 'reset'),
					swiper.emit(`transition${step}`),
					runCallbacks && activeIndex !== previousIndex)
				) {
					if ('reset' === dir) return void swiper.emit(`slideResetTransition${step}`);
					swiper.emit(`slideChangeTransition${step}`),
						'next' === dir ? swiper.emit(`slideNextTransition${step}`) : swiper.emit(`slidePrevTransition${step}`);
				}
			}
			var slide = {
				slideTo: function slideTo(index, speed, runCallbacks, internal, initial) {
					void 0 === index && (index = 0),
						void 0 === speed && (speed = this.params.speed),
						void 0 === runCallbacks && (runCallbacks = !0),
						'string' == typeof index && (index = parseInt(index, 10));
					const swiper = this;
					let slideIndex = index;
					slideIndex < 0 && (slideIndex = 0);
					const { params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled } = swiper;
					if ((swiper.animating && params.preventInteractionOnTransition) || (!enabled && !internal && !initial) || swiper.destroyed) return !1;
					const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
					let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
					snapIndex >= snapGrid.length && (snapIndex = snapGrid.length - 1);
					const translate = -snapGrid[snapIndex];
					if (params.normalizeSlideIndex)
						for (let i = 0; i < slidesGrid.length; i += 1) {
							const normalizedTranslate = -Math.floor(100 * translate),
								normalizedGrid = Math.floor(100 * slidesGrid[i]),
								normalizedGridNext = Math.floor(100 * slidesGrid[i + 1]);
							void 0 !== slidesGrid[i + 1]
								? normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2
									? (slideIndex = i)
									: normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext && (slideIndex = i + 1)
								: normalizedTranslate >= normalizedGrid && (slideIndex = i);
						}
					if (swiper.initialized && slideIndex !== activeIndex) {
						if (
							!swiper.allowSlideNext &&
							(rtl
								? translate > swiper.translate && translate > swiper.minTranslate()
								: translate < swiper.translate && translate < swiper.minTranslate())
						)
							return !1;
						if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate() && (activeIndex || 0) !== slideIndex)
							return !1;
					}
					let direction;
					if (
						(slideIndex !== (previousIndex || 0) && runCallbacks && swiper.emit('beforeSlideChangeStart'),
						swiper.updateProgress(translate),
						(direction = slideIndex > activeIndex ? 'next' : slideIndex < activeIndex ? 'prev' : 'reset'),
						(rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate))
					)
						return (
							swiper.updateActiveIndex(slideIndex),
							params.autoHeight && swiper.updateAutoHeight(),
							swiper.updateSlidesClasses(),
							'slide' !== params.effect && swiper.setTranslate(translate),
							'reset' !== direction && (swiper.transitionStart(runCallbacks, direction), swiper.transitionEnd(runCallbacks, direction)),
							!1
						);
					if (params.cssMode) {
						const isH = swiper.isHorizontal(),
							t = rtl ? translate : -translate;
						if (0 === speed) {
							const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
							isVirtual && ((swiper.wrapperEl.style.scrollSnapType = 'none'), (swiper._immediateVirtual = !0)),
								isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0
									? ((swiper._cssModeVirtualInitialSet = !0),
									  requestAnimationFrame(() => {
											wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
									  }))
									: (wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t),
								isVirtual &&
									requestAnimationFrame(() => {
										(swiper.wrapperEl.style.scrollSnapType = ''), (swiper._immediateVirtual = !1);
									});
						} else {
							if (!swiper.support.smoothScroll) return (0, utils.r)({ swiper, targetPosition: t, side: isH ? 'left' : 'top' }), !0;
							wrapperEl.scrollTo({ [isH ? 'left' : 'top']: t, behavior: 'smooth' });
						}
						return !0;
					}
					return (
						swiper.setTransition(speed),
						swiper.setTranslate(translate),
						swiper.updateActiveIndex(slideIndex),
						swiper.updateSlidesClasses(),
						swiper.emit('beforeTransitionStart', speed, internal),
						swiper.transitionStart(runCallbacks, direction),
						0 === speed
							? swiper.transitionEnd(runCallbacks, direction)
							: swiper.animating ||
							  ((swiper.animating = !0),
							  swiper.onSlideToWrapperTransitionEnd ||
									(swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
										swiper &&
											!swiper.destroyed &&
											e.target === this &&
											(swiper.wrapperEl.removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd),
											(swiper.onSlideToWrapperTransitionEnd = null),
											delete swiper.onSlideToWrapperTransitionEnd,
											swiper.transitionEnd(runCallbacks, direction));
									}),
							  swiper.wrapperEl.addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd)),
						!0
					);
				},
				slideToLoop: function slideToLoop(index, speed, runCallbacks, internal) {
					if (
						(void 0 === index && (index = 0),
						void 0 === speed && (speed = this.params.speed),
						void 0 === runCallbacks && (runCallbacks = !0),
						'string' == typeof index)
					) {
						index = parseInt(index, 10);
					}
					const swiper = this;
					if (swiper.destroyed) return;
					const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
					let newIndex = index;
					if (swiper.params.loop)
						if (swiper.virtual && swiper.params.virtual.enabled) newIndex += swiper.virtual.slidesBefore;
						else {
							let targetSlideIndex;
							if (gridEnabled) {
								const slideIndex = newIndex * swiper.params.grid.rows;
								targetSlideIndex = swiper.slides.filter((slideEl) => 1 * slideEl.getAttribute('data-swiper-slide-index') === slideIndex)[0].column;
							} else targetSlideIndex = swiper.getSlideIndexByData(newIndex);
							const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length,
								{ centeredSlides } = swiper.params;
							let slidesPerView = swiper.params.slidesPerView;
							'auto' === slidesPerView
								? (slidesPerView = swiper.slidesPerViewDynamic())
								: ((slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10))),
								  centeredSlides && slidesPerView % 2 == 0 && (slidesPerView += 1));
							let needLoopFix = cols - targetSlideIndex < slidesPerView;
							if ((centeredSlides && (needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2)), needLoopFix)) {
								const direction = centeredSlides
									? targetSlideIndex < swiper.activeIndex
										? 'prev'
										: 'next'
									: targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView
									? 'next'
									: 'prev';
								swiper.loopFix({
									direction,
									slideTo: !0,
									activeSlideIndex: 'next' === direction ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
									slideRealIndex: 'next' === direction ? swiper.realIndex : void 0,
								});
							}
							if (gridEnabled) {
								const slideIndex = newIndex * swiper.params.grid.rows;
								newIndex = swiper.slides.filter((slideEl) => 1 * slideEl.getAttribute('data-swiper-slide-index') === slideIndex)[0].column;
							} else newIndex = swiper.getSlideIndexByData(newIndex);
						}
					return (
						requestAnimationFrame(() => {
							swiper.slideTo(newIndex, speed, runCallbacks, internal);
						}),
						swiper
					);
				},
				slideNext: function slideNext(speed, runCallbacks, internal) {
					void 0 === speed && (speed = this.params.speed), void 0 === runCallbacks && (runCallbacks = !0);
					const swiper = this,
						{ enabled, params, animating } = swiper;
					if (!enabled || swiper.destroyed) return swiper;
					let perGroup = params.slidesPerGroup;
					'auto' === params.slidesPerView &&
						1 === params.slidesPerGroup &&
						params.slidesPerGroupAuto &&
						(perGroup = Math.max(swiper.slidesPerViewDynamic('current', !0), 1));
					const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup,
						isVirtual = swiper.virtual && params.virtual.enabled;
					if (params.loop) {
						if (animating && !isVirtual && params.loopPreventsSliding) return !1;
						if (
							(swiper.loopFix({ direction: 'next' }),
							(swiper._clientLeft = swiper.wrapperEl.clientLeft),
							swiper.activeIndex === swiper.slides.length - 1 && params.cssMode)
						)
							return (
								requestAnimationFrame(() => {
									swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
								}),
								!0
							);
					}
					return params.rewind && swiper.isEnd
						? swiper.slideTo(0, speed, runCallbacks, internal)
						: swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
				},
				slidePrev: function slidePrev(speed, runCallbacks, internal) {
					void 0 === speed && (speed = this.params.speed), void 0 === runCallbacks && (runCallbacks = !0);
					const swiper = this,
						{ params, snapGrid, slidesGrid, rtlTranslate, enabled, animating } = swiper;
					if (!enabled || swiper.destroyed) return swiper;
					const isVirtual = swiper.virtual && params.virtual.enabled;
					if (params.loop) {
						if (animating && !isVirtual && params.loopPreventsSliding) return !1;
						swiper.loopFix({ direction: 'prev' }), (swiper._clientLeft = swiper.wrapperEl.clientLeft);
					}
					function normalize(val) {
						return val < 0 ? -Math.floor(Math.abs(val)) : Math.floor(val);
					}
					const normalizedTranslate = normalize(rtlTranslate ? swiper.translate : -swiper.translate),
						normalizedSnapGrid = snapGrid.map((val) => normalize(val));
					let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
					if (void 0 === prevSnap && params.cssMode) {
						let prevSnapIndex;
						snapGrid.forEach((snap, snapIndex) => {
							normalizedTranslate >= snap && (prevSnapIndex = snapIndex);
						}),
							void 0 !== prevSnapIndex && (prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex]);
					}
					let prevIndex = 0;
					if (
						(void 0 !== prevSnap &&
							((prevIndex = slidesGrid.indexOf(prevSnap)),
							prevIndex < 0 && (prevIndex = swiper.activeIndex - 1),
							'auto' === params.slidesPerView &&
								1 === params.slidesPerGroup &&
								params.slidesPerGroupAuto &&
								((prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', !0) + 1), (prevIndex = Math.max(prevIndex, 0)))),
						params.rewind && swiper.isBeginning)
					) {
						const lastIndex =
							swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
						return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
					}
					return params.loop && 0 === swiper.activeIndex && params.cssMode
						? (requestAnimationFrame(() => {
								swiper.slideTo(prevIndex, speed, runCallbacks, internal);
						  }),
						  !0)
						: swiper.slideTo(prevIndex, speed, runCallbacks, internal);
				},
				slideReset: function slideReset(speed, runCallbacks, internal) {
					if ((void 0 === speed && (speed = this.params.speed), void 0 === runCallbacks && (runCallbacks = !0), !this.destroyed))
						return this.slideTo(this.activeIndex, speed, runCallbacks, internal);
				},
				slideToClosest: function slideToClosest(speed, runCallbacks, internal, threshold) {
					void 0 === speed && (speed = this.params.speed), void 0 === runCallbacks && (runCallbacks = !0), void 0 === threshold && (threshold = 0.5);
					const swiper = this;
					if (swiper.destroyed) return;
					let index = swiper.activeIndex;
					const skip = Math.min(swiper.params.slidesPerGroupSkip, index),
						snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup),
						translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
					if (translate >= swiper.snapGrid[snapIndex]) {
						const currentSnap = swiper.snapGrid[snapIndex];
						translate - currentSnap > (swiper.snapGrid[snapIndex + 1] - currentSnap) * threshold && (index += swiper.params.slidesPerGroup);
					} else {
						const prevSnap = swiper.snapGrid[snapIndex - 1];
						translate - prevSnap <= (swiper.snapGrid[snapIndex] - prevSnap) * threshold && (index -= swiper.params.slidesPerGroup);
					}
					return (
						(index = Math.max(index, 0)),
						(index = Math.min(index, swiper.slidesGrid.length - 1)),
						swiper.slideTo(index, speed, runCallbacks, internal)
					);
				},
				slideToClickedSlide: function slideToClickedSlide() {
					const swiper = this;
					if (swiper.destroyed) return;
					const { params, slidesEl } = swiper,
						slidesPerView = 'auto' === params.slidesPerView ? swiper.slidesPerViewDynamic() : params.slidesPerView;
					let realIndex,
						slideToIndex = swiper.clickedIndex;
					const slideSelector = swiper.isElement ? 'swiper-slide' : `.${params.slideClass}`;
					if (params.loop) {
						if (swiper.animating) return;
						(realIndex = parseInt(swiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
							params.centeredSlides
								? slideToIndex < swiper.loopedSlides - slidesPerView / 2 ||
								  slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2
									? (swiper.loopFix(),
									  (slideToIndex = swiper.getSlideIndex((0, utils.e)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0])),
									  (0, utils.n)(() => {
											swiper.slideTo(slideToIndex);
									  }))
									: swiper.slideTo(slideToIndex)
								: slideToIndex > swiper.slides.length - slidesPerView
								? (swiper.loopFix(),
								  (slideToIndex = swiper.getSlideIndex((0, utils.e)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0])),
								  (0, utils.n)(() => {
										swiper.slideTo(slideToIndex);
								  }))
								: swiper.slideTo(slideToIndex);
					} else swiper.slideTo(slideToIndex);
				},
			};
			var loop = {
				loopCreate: function loopCreate(slideRealIndex) {
					const swiper = this,
						{ params, slidesEl } = swiper;
					if (!params.loop || (swiper.virtual && swiper.params.virtual.enabled)) return;
					const initSlides = () => {
							(0, utils.e)(slidesEl, `.${params.slideClass}, swiper-slide`).forEach((el, index) => {
								el.setAttribute('data-swiper-slide-index', index);
							});
						},
						gridEnabled = swiper.grid && params.grid && params.grid.rows > 1,
						slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1),
						shouldFillGroup = swiper.slides.length % slidesPerGroup != 0,
						shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows != 0,
						addBlankSlides = (amountOfSlides) => {
							for (let i = 0; i < amountOfSlides; i += 1) {
								const slideEl = swiper.isElement
									? (0, utils.c)('swiper-slide', [params.slideBlankClass])
									: (0, utils.c)('div', [params.slideClass, params.slideBlankClass]);
								swiper.slidesEl.append(slideEl);
							}
						};
					if (shouldFillGroup) {
						if (params.loopAddBlankSlides) {
							addBlankSlides(slidesPerGroup - (swiper.slides.length % slidesPerGroup)), swiper.recalcSlides(), swiper.updateSlides();
						} else
							(0, utils.t)(
								'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
							);
						initSlides();
					} else if (shouldFillGrid) {
						if (params.loopAddBlankSlides) {
							addBlankSlides(params.grid.rows - (swiper.slides.length % params.grid.rows)), swiper.recalcSlides(), swiper.updateSlides();
						} else
							(0, utils.t)(
								'Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
							);
						initSlides();
					} else initSlides();
					swiper.loopFix({ slideRealIndex, direction: params.centeredSlides ? void 0 : 'next' });
				},
				loopFix: function loopFix(_temp) {
					let { slideRealIndex, slideTo = !0, direction, setTranslate, activeSlideIndex, byController, byMousewheel } = void 0 === _temp ? {} : _temp;
					const swiper = this;
					if (!swiper.params.loop) return;
					swiper.emit('beforeLoopFix');
					const { slides, allowSlidePrev, allowSlideNext, slidesEl, params } = swiper,
						{ centeredSlides } = params;
					if (((swiper.allowSlidePrev = !0), (swiper.allowSlideNext = !0), swiper.virtual && params.virtual.enabled))
						return (
							slideTo &&
								(params.centeredSlides || 0 !== swiper.snapIndex
									? params.centeredSlides && swiper.snapIndex < params.slidesPerView
										? swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, !1, !0)
										: swiper.snapIndex === swiper.snapGrid.length - 1 && swiper.slideTo(swiper.virtual.slidesBefore, 0, !1, !0)
									: swiper.slideTo(swiper.virtual.slides.length, 0, !1, !0)),
							(swiper.allowSlidePrev = allowSlidePrev),
							(swiper.allowSlideNext = allowSlideNext),
							void swiper.emit('loopFix')
						);
					let slidesPerView = params.slidesPerView;
					'auto' === slidesPerView
						? (slidesPerView = swiper.slidesPerViewDynamic())
						: ((slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10))), centeredSlides && slidesPerView % 2 == 0 && (slidesPerView += 1));
					const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
					let loopedSlides = slidesPerGroup;
					loopedSlides % slidesPerGroup != 0 && (loopedSlides += slidesPerGroup - (loopedSlides % slidesPerGroup)),
						(loopedSlides += params.loopAdditionalSlides),
						(swiper.loopedSlides = loopedSlides);
					const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
					slides.length < slidesPerView + loopedSlides
						? (0, utils.t)(
								'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters'
						  )
						: gridEnabled && 'row' === params.grid.fill && (0, utils.t)('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`');
					const prependSlidesIndexes = [],
						appendSlidesIndexes = [];
					let activeIndex = swiper.activeIndex;
					void 0 === activeSlideIndex
						? (activeSlideIndex = swiper.getSlideIndex(slides.filter((el) => el.classList.contains(params.slideActiveClass))[0]))
						: (activeIndex = activeSlideIndex);
					const isNext = 'next' === direction || !direction,
						isPrev = 'prev' === direction || !direction;
					let slidesPrepended = 0,
						slidesAppended = 0;
					const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length,
						activeColIndexWithShift =
							(gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex) +
							(centeredSlides && void 0 === setTranslate ? -slidesPerView / 2 + 0.5 : 0);
					if (activeColIndexWithShift < loopedSlides) {
						slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
						for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
							const index = i - Math.floor(i / cols) * cols;
							if (gridEnabled) {
								const colIndexToPrepend = cols - index - 1;
								for (let i = slides.length - 1; i >= 0; i -= 1) slides[i].column === colIndexToPrepend && prependSlidesIndexes.push(i);
							} else prependSlidesIndexes.push(cols - index - 1);
						}
					} else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
						slidesAppended = Math.max(activeColIndexWithShift - (cols - 2 * loopedSlides), slidesPerGroup);
						for (let i = 0; i < slidesAppended; i += 1) {
							const index = i - Math.floor(i / cols) * cols;
							gridEnabled
								? slides.forEach((slide, slideIndex) => {
										slide.column === index && appendSlidesIndexes.push(slideIndex);
								  })
								: appendSlidesIndexes.push(index);
						}
					}
					if (
						((swiper.__preventObserver__ = !0),
						requestAnimationFrame(() => {
							swiper.__preventObserver__ = !1;
						}),
						isPrev &&
							prependSlidesIndexes.forEach((index) => {
								(slides[index].swiperLoopMoveDOM = !0), slidesEl.prepend(slides[index]), (slides[index].swiperLoopMoveDOM = !1);
							}),
						isNext &&
							appendSlidesIndexes.forEach((index) => {
								(slides[index].swiperLoopMoveDOM = !0), slidesEl.append(slides[index]), (slides[index].swiperLoopMoveDOM = !1);
							}),
						swiper.recalcSlides(),
						'auto' === params.slidesPerView
							? swiper.updateSlides()
							: gridEnabled &&
							  ((prependSlidesIndexes.length > 0 && isPrev) || (appendSlidesIndexes.length > 0 && isNext)) &&
							  swiper.slides.forEach((slide, slideIndex) => {
									swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
							  }),
						params.watchSlidesProgress && swiper.updateSlidesOffset(),
						slideTo)
					)
						if (prependSlidesIndexes.length > 0 && isPrev) {
							if (void 0 === slideRealIndex) {
								const currentSlideTranslate = swiper.slidesGrid[activeIndex],
									diff = swiper.slidesGrid[activeIndex + slidesPrepended] - currentSlideTranslate;
								byMousewheel
									? swiper.setTranslate(swiper.translate - diff)
									: (swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, !1, !0),
									  setTranslate &&
											((swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff),
											(swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff)));
							} else if (setTranslate) {
								const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
								swiper.slideTo(swiper.activeIndex + shift, 0, !1, !0), (swiper.touchEventsData.currentTranslate = swiper.translate);
							}
						} else if (appendSlidesIndexes.length > 0 && isNext)
							if (void 0 === slideRealIndex) {
								const currentSlideTranslate = swiper.slidesGrid[activeIndex],
									diff = swiper.slidesGrid[activeIndex - slidesAppended] - currentSlideTranslate;
								byMousewheel
									? swiper.setTranslate(swiper.translate - diff)
									: (swiper.slideTo(activeIndex - slidesAppended, 0, !1, !0),
									  setTranslate &&
											((swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff),
											(swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff)));
							} else {
								const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
								swiper.slideTo(swiper.activeIndex - shift, 0, !1, !0);
							}
					if (
						((swiper.allowSlidePrev = allowSlidePrev),
						(swiper.allowSlideNext = allowSlideNext),
						swiper.controller && swiper.controller.control && !byController)
					) {
						const loopParams = { slideRealIndex, direction, setTranslate, activeSlideIndex, byController: !0 };
						Array.isArray(swiper.controller.control)
							? swiper.controller.control.forEach((c) => {
									!c.destroyed && c.params.loop && c.loopFix({ ...loopParams, slideTo: c.params.slidesPerView === params.slidesPerView && slideTo });
							  })
							: swiper.controller.control instanceof swiper.constructor &&
							  swiper.controller.control.params.loop &&
							  swiper.controller.control.loopFix({
									...loopParams,
									slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView && slideTo,
							  });
					}
					swiper.emit('loopFix');
				},
				loopDestroy: function loopDestroy() {
					const { params, slidesEl } = this;
					if (!params.loop || (this.virtual && this.params.virtual.enabled)) return;
					this.recalcSlides();
					const newSlidesOrder = [];
					this.slides.forEach((slideEl) => {
						const index = void 0 === slideEl.swiperSlideIndex ? 1 * slideEl.getAttribute('data-swiper-slide-index') : slideEl.swiperSlideIndex;
						newSlidesOrder[index] = slideEl;
					}),
						this.slides.forEach((slideEl) => {
							slideEl.removeAttribute('data-swiper-slide-index');
						}),
						newSlidesOrder.forEach((slideEl) => {
							slidesEl.append(slideEl);
						}),
						this.recalcSlides(),
						this.slideTo(this.realIndex, 0);
				},
			};
			function preventEdgeSwipe(swiper, event, startX) {
				const window = (0, ssr_window_esm.a)(),
					{ params } = swiper,
					edgeSwipeDetection = params.edgeSwipeDetection,
					edgeSwipeThreshold = params.edgeSwipeThreshold;
				return (
					!edgeSwipeDetection ||
					!(startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold) ||
					('prevent' === edgeSwipeDetection && (event.preventDefault(), !0))
				);
			}
			function onTouchStart(event) {
				const swiper = this,
					document = (0, ssr_window_esm.g)();
				let e = event;
				e.originalEvent && (e = e.originalEvent);
				const data = swiper.touchEventsData;
				if ('pointerdown' === e.type) {
					if (null !== data.pointerId && data.pointerId !== e.pointerId) return;
					data.pointerId = e.pointerId;
				} else 'touchstart' === e.type && 1 === e.targetTouches.length && (data.touchId = e.targetTouches[0].identifier);
				if ('touchstart' === e.type) return void preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
				const { params, touches, enabled } = swiper;
				if (!enabled) return;
				if (!params.simulateTouch && 'mouse' === e.pointerType) return;
				if (swiper.animating && params.preventInteractionOnTransition) return;
				!swiper.animating && params.cssMode && params.loop && swiper.loopFix();
				let targetEl = e.target;
				if ('wrapper' === params.touchEventsTarget && !swiper.wrapperEl.contains(targetEl)) return;
				if ('which' in e && 3 === e.which) return;
				if ('button' in e && e.button > 0) return;
				if (data.isTouched && data.isMoved) return;
				const swipingClassHasValue = !!params.noSwipingClass && '' !== params.noSwipingClass,
					eventPath = e.composedPath ? e.composedPath() : e.path;
				swipingClassHasValue && e.target && e.target.shadowRoot && eventPath && (targetEl = eventPath[0]);
				const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`,
					isTargetShadow = !(!e.target || !e.target.shadowRoot);
				if (
					params.noSwiping &&
					(isTargetShadow
						? (function closestElement(selector, base) {
								return (
									void 0 === base && (base = this),
									(function __closestFrom(el) {
										if (!el || el === (0, ssr_window_esm.g)() || el === (0, ssr_window_esm.a)()) return null;
										el.assignedSlot && (el = el.assignedSlot);
										const found = el.closest(selector);
										return found || el.getRootNode ? found || __closestFrom(el.getRootNode().host) : null;
									})(base)
								);
						  })(noSwipingSelector, targetEl)
						: targetEl.closest(noSwipingSelector))
				)
					return void (swiper.allowClick = !0);
				if (params.swipeHandler && !targetEl.closest(params.swipeHandler)) return;
				(touches.currentX = e.pageX), (touches.currentY = e.pageY);
				const startX = touches.currentX,
					startY = touches.currentY;
				if (!preventEdgeSwipe(swiper, e, startX)) return;
				Object.assign(data, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
					(touches.startX = startX),
					(touches.startY = startY),
					(data.touchStartTime = (0, utils.d)()),
					(swiper.allowClick = !0),
					swiper.updateSize(),
					(swiper.swipeDirection = void 0),
					params.threshold > 0 && (data.allowThresholdMove = !1);
				let preventDefault = !0;
				targetEl.matches(data.focusableElements) && ((preventDefault = !1), 'SELECT' === targetEl.nodeName && (data.isTouched = !1)),
					document.activeElement &&
						document.activeElement.matches(data.focusableElements) &&
						document.activeElement !== targetEl &&
						document.activeElement.blur();
				const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
				(!params.touchStartForcePreventDefault && !shouldPreventDefault) || targetEl.isContentEditable || e.preventDefault(),
					params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode && swiper.freeMode.onTouchStart(),
					swiper.emit('touchStart', e);
			}
			function onTouchMove(event) {
				const document = (0, ssr_window_esm.g)(),
					swiper = this,
					data = swiper.touchEventsData,
					{ params, touches, rtlTranslate: rtl, enabled } = swiper;
				if (!enabled) return;
				if (!params.simulateTouch && 'mouse' === event.pointerType) return;
				let targetTouch,
					e = event;
				if ((e.originalEvent && (e = e.originalEvent), 'pointermove' === e.type)) {
					if (null !== data.touchId) return;
					if (e.pointerId !== data.pointerId) return;
				}
				if ('touchmove' === e.type) {
					if (
						((targetTouch = [...e.changedTouches].filter((t) => t.identifier === data.touchId)[0]),
						!targetTouch || targetTouch.identifier !== data.touchId)
					)
						return;
				} else targetTouch = e;
				if (!data.isTouched) return void (data.startMoving && data.isScrolling && swiper.emit('touchMoveOpposite', e));
				const pageX = targetTouch.pageX,
					pageY = targetTouch.pageY;
				if (e.preventedByNestedSwiper) return (touches.startX = pageX), void (touches.startY = pageY);
				if (!swiper.allowTouchMove)
					return (
						e.target.matches(data.focusableElements) || (swiper.allowClick = !1),
						void (
							data.isTouched &&
							(Object.assign(touches, { startX: pageX, startY: pageY, currentX: pageX, currentY: pageY }), (data.touchStartTime = (0, utils.d)()))
						)
					);
				if (params.touchReleaseOnEdges && !params.loop)
					if (swiper.isVertical()) {
						if (
							(pageY < touches.startY && swiper.translate <= swiper.maxTranslate()) ||
							(pageY > touches.startY && swiper.translate >= swiper.minTranslate())
						)
							return (data.isTouched = !1), void (data.isMoved = !1);
					} else if (
						(pageX < touches.startX && swiper.translate <= swiper.maxTranslate()) ||
						(pageX > touches.startX && swiper.translate >= swiper.minTranslate())
					)
						return;
				if (document.activeElement && e.target === document.activeElement && e.target.matches(data.focusableElements))
					return (data.isMoved = !0), void (swiper.allowClick = !1);
				data.allowTouchCallbacks && swiper.emit('touchMove', e),
					(touches.previousX = touches.currentX),
					(touches.previousY = touches.currentY),
					(touches.currentX = pageX),
					(touches.currentY = pageY);
				const diffX = touches.currentX - touches.startX,
					diffY = touches.currentY - touches.startY;
				if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
				if (void 0 === data.isScrolling) {
					let touchAngle;
					(swiper.isHorizontal() && touches.currentY === touches.startY) || (swiper.isVertical() && touches.currentX === touches.startX)
						? (data.isScrolling = !1)
						: diffX * diffX + diffY * diffY >= 25 &&
						  ((touchAngle = (180 * Math.atan2(Math.abs(diffY), Math.abs(diffX))) / Math.PI),
						  (data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle));
				}
				if (
					(data.isScrolling && swiper.emit('touchMoveOpposite', e),
					void 0 === data.startMoving && ((touches.currentX === touches.startX && touches.currentY === touches.startY) || (data.startMoving = !0)),
					data.isScrolling)
				)
					return void (data.isTouched = !1);
				if (!data.startMoving) return;
				(swiper.allowClick = !1),
					!params.cssMode && e.cancelable && e.preventDefault(),
					params.touchMoveStopPropagation && !params.nested && e.stopPropagation();
				let diff = swiper.isHorizontal() ? diffX : diffY,
					touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
				params.oneWayMovement && ((diff = Math.abs(diff) * (rtl ? 1 : -1)), (touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1))),
					(touches.diff = diff),
					(diff *= params.touchRatio),
					rtl && ((diff = -diff), (touchesDiff = -touchesDiff));
				const prevTouchesDirection = swiper.touchesDirection;
				(swiper.swipeDirection = diff > 0 ? 'prev' : 'next'), (swiper.touchesDirection = touchesDiff > 0 ? 'prev' : 'next');
				const isLoop = swiper.params.loop && !params.cssMode,
					allowLoopFix =
						('next' === swiper.touchesDirection && swiper.allowSlideNext) || ('prev' === swiper.touchesDirection && swiper.allowSlidePrev);
				if (!data.isMoved) {
					if (
						(isLoop && allowLoopFix && swiper.loopFix({ direction: swiper.swipeDirection }),
						(data.startTranslate = swiper.getTranslate()),
						swiper.setTransition(0),
						swiper.animating)
					) {
						const evt = new window.CustomEvent('transitionend', { bubbles: !0, cancelable: !0 });
						swiper.wrapperEl.dispatchEvent(evt);
					}
					(data.allowMomentumBounce = !1),
						!params.grabCursor || (!0 !== swiper.allowSlideNext && !0 !== swiper.allowSlidePrev) || swiper.setGrabCursor(!0),
						swiper.emit('sliderFirstMove', e);
				}
				if (
					(new Date().getTime(),
					data.isMoved &&
						data.allowThresholdMove &&
						prevTouchesDirection !== swiper.touchesDirection &&
						isLoop &&
						allowLoopFix &&
						Math.abs(diff) >= 1)
				)
					return (
						Object.assign(touches, { startX: pageX, startY: pageY, currentX: pageX, currentY: pageY, startTranslate: data.currentTranslate }),
						(data.loopSwapReset = !0),
						void (data.startTranslate = data.currentTranslate)
					);
				swiper.emit('sliderMove', e), (data.isMoved = !0), (data.currentTranslate = diff + data.startTranslate);
				let disableParentSwiper = !0,
					resistanceRatio = params.resistanceRatio;
				if (
					(params.touchReleaseOnEdges && (resistanceRatio = 0),
					diff > 0
						? (isLoop &&
								allowLoopFix &&
								data.allowThresholdMove &&
								data.currentTranslate >
									(params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] : swiper.minTranslate()) &&
								swiper.loopFix({ direction: 'prev', setTranslate: !0, activeSlideIndex: 0 }),
						  data.currentTranslate > swiper.minTranslate() &&
								((disableParentSwiper = !1),
								params.resistance &&
									(data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio)))
						: diff < 0 &&
						  (isLoop &&
								allowLoopFix &&
								data.allowThresholdMove &&
								data.currentTranslate <
									(params.centeredSlides
										? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1]
										: swiper.maxTranslate()) &&
								swiper.loopFix({
									direction: 'next',
									setTranslate: !0,
									activeSlideIndex:
										swiper.slides.length -
										('auto' === params.slidesPerView ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10))),
								}),
						  data.currentTranslate < swiper.maxTranslate() &&
								((disableParentSwiper = !1),
								params.resistance &&
									(data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio))),
					disableParentSwiper && (e.preventedByNestedSwiper = !0),
					!swiper.allowSlideNext &&
						'next' === swiper.swipeDirection &&
						data.currentTranslate < data.startTranslate &&
						(data.currentTranslate = data.startTranslate),
					!swiper.allowSlidePrev &&
						'prev' === swiper.swipeDirection &&
						data.currentTranslate > data.startTranslate &&
						(data.currentTranslate = data.startTranslate),
					swiper.allowSlidePrev || swiper.allowSlideNext || (data.currentTranslate = data.startTranslate),
					params.threshold > 0)
				) {
					if (!(Math.abs(diff) > params.threshold || data.allowThresholdMove)) return void (data.currentTranslate = data.startTranslate);
					if (!data.allowThresholdMove)
						return (
							(data.allowThresholdMove = !0),
							(touches.startX = touches.currentX),
							(touches.startY = touches.currentY),
							(data.currentTranslate = data.startTranslate),
							void (touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY)
						);
				}
				params.followFinger &&
					!params.cssMode &&
					(((params.freeMode && params.freeMode.enabled && swiper.freeMode) || params.watchSlidesProgress) &&
						(swiper.updateActiveIndex(), swiper.updateSlidesClasses()),
					params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.freeMode.onTouchMove(),
					swiper.updateProgress(data.currentTranslate),
					swiper.setTranslate(data.currentTranslate));
			}
			function onTouchEnd(event) {
				const swiper = this,
					data = swiper.touchEventsData;
				let targetTouch,
					e = event;
				e.originalEvent && (e = e.originalEvent);
				if ('touchend' === e.type || 'touchcancel' === e.type) {
					if (
						((targetTouch = [...e.changedTouches].filter((t) => t.identifier === data.touchId)[0]),
						!targetTouch || targetTouch.identifier !== data.touchId)
					)
						return;
				} else {
					if (null !== data.touchId) return;
					if (e.pointerId !== data.pointerId) return;
					targetTouch = e;
				}
				if (['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(e.type)) {
					if (!(['pointercancel', 'contextmenu'].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView))) return;
				}
				(data.pointerId = null), (data.touchId = null);
				const { params, touches, rtlTranslate: rtl, slidesGrid, enabled } = swiper;
				if (!enabled) return;
				if (!params.simulateTouch && 'mouse' === e.pointerType) return;
				if ((data.allowTouchCallbacks && swiper.emit('touchEnd', e), (data.allowTouchCallbacks = !1), !data.isTouched))
					return data.isMoved && params.grabCursor && swiper.setGrabCursor(!1), (data.isMoved = !1), void (data.startMoving = !1);
				params.grabCursor &&
					data.isMoved &&
					data.isTouched &&
					(!0 === swiper.allowSlideNext || !0 === swiper.allowSlidePrev) &&
					swiper.setGrabCursor(!1);
				const touchEndTime = (0, utils.d)(),
					timeDiff = touchEndTime - data.touchStartTime;
				if (swiper.allowClick) {
					const pathTree = e.path || (e.composedPath && e.composedPath());
					swiper.updateClickedSlide((pathTree && pathTree[0]) || e.target, pathTree),
						swiper.emit('tap click', e),
						timeDiff < 300 && touchEndTime - data.lastClickTime < 300 && swiper.emit('doubleTap doubleClick', e);
				}
				if (
					((data.lastClickTime = (0, utils.d)()),
					(0, utils.n)(() => {
						swiper.destroyed || (swiper.allowClick = !0);
					}),
					!data.isTouched ||
						!data.isMoved ||
						!swiper.swipeDirection ||
						(0 === touches.diff && !data.loopSwapReset) ||
						(data.currentTranslate === data.startTranslate && !data.loopSwapReset))
				)
					return (data.isTouched = !1), (data.isMoved = !1), void (data.startMoving = !1);
				let currentPos;
				if (
					((data.isTouched = !1),
					(data.isMoved = !1),
					(data.startMoving = !1),
					(currentPos = params.followFinger ? (rtl ? swiper.translate : -swiper.translate) : -data.currentTranslate),
					params.cssMode)
				)
					return;
				if (params.freeMode && params.freeMode.enabled) return void swiper.freeMode.onTouchEnd({ currentPos });
				const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
				let stopIndex = 0,
					groupSize = swiper.slidesSizesGrid[0];
				for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
					const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
					void 0 !== slidesGrid[i + increment]
						? (swipeToLast || (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment])) &&
						  ((stopIndex = i), (groupSize = slidesGrid[i + increment] - slidesGrid[i]))
						: (swipeToLast || currentPos >= slidesGrid[i]) &&
						  ((stopIndex = i), (groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2]));
				}
				let rewindFirstIndex = null,
					rewindLastIndex = null;
				params.rewind &&
					(swiper.isBeginning
						? (rewindLastIndex =
								params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1)
						: swiper.isEnd && (rewindFirstIndex = 0));
				const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize,
					increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
				if (timeDiff > params.longSwipesMs) {
					if (!params.longSwipes) return void swiper.slideTo(swiper.activeIndex);
					'next' === swiper.swipeDirection &&
						(ratio >= params.longSwipesRatio
							? swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment)
							: swiper.slideTo(stopIndex)),
						'prev' === swiper.swipeDirection &&
							(ratio > 1 - params.longSwipesRatio
								? swiper.slideTo(stopIndex + increment)
								: null !== rewindLastIndex && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio
								? swiper.slideTo(rewindLastIndex)
								: swiper.slideTo(stopIndex));
				} else {
					if (!params.shortSwipes) return void swiper.slideTo(swiper.activeIndex);
					swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl)
						? e.target === swiper.navigation.nextEl
							? swiper.slideTo(stopIndex + increment)
							: swiper.slideTo(stopIndex)
						: ('next' === swiper.swipeDirection && swiper.slideTo(null !== rewindFirstIndex ? rewindFirstIndex : stopIndex + increment),
						  'prev' === swiper.swipeDirection && swiper.slideTo(null !== rewindLastIndex ? rewindLastIndex : stopIndex));
				}
			}
			function onResize() {
				const swiper = this,
					{ params, el } = swiper;
				if (el && 0 === el.offsetWidth) return;
				params.breakpoints && swiper.setBreakpoint();
				const { allowSlideNext, allowSlidePrev, snapGrid } = swiper,
					isVirtual = swiper.virtual && swiper.params.virtual.enabled;
				(swiper.allowSlideNext = !0), (swiper.allowSlidePrev = !0), swiper.updateSize(), swiper.updateSlides(), swiper.updateSlidesClasses();
				const isVirtualLoop = isVirtual && params.loop;
				!('auto' === params.slidesPerView || params.slidesPerView > 1) ||
				!swiper.isEnd ||
				swiper.isBeginning ||
				swiper.params.centeredSlides ||
				isVirtualLoop
					? swiper.params.loop && !isVirtual
						? swiper.slideToLoop(swiper.realIndex, 0, !1, !0)
						: swiper.slideTo(swiper.activeIndex, 0, !1, !0)
					: swiper.slideTo(swiper.slides.length - 1, 0, !1, !0),
					swiper.autoplay &&
						swiper.autoplay.running &&
						swiper.autoplay.paused &&
						(clearTimeout(swiper.autoplay.resizeTimeout),
						(swiper.autoplay.resizeTimeout = setTimeout(() => {
							swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused && swiper.autoplay.resume();
						}, 500))),
					(swiper.allowSlidePrev = allowSlidePrev),
					(swiper.allowSlideNext = allowSlideNext),
					swiper.params.watchOverflow && snapGrid !== swiper.snapGrid && swiper.checkOverflow();
			}
			function onClick(e) {
				const swiper = this;
				swiper.enabled &&
					(swiper.allowClick ||
						(swiper.params.preventClicks && e.preventDefault(),
						swiper.params.preventClicksPropagation && swiper.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
			}
			function onScroll() {
				const swiper = this,
					{ wrapperEl, rtlTranslate, enabled } = swiper;
				if (!enabled) return;
				let newProgress;
				(swiper.previousTranslate = swiper.translate),
					swiper.isHorizontal() ? (swiper.translate = -wrapperEl.scrollLeft) : (swiper.translate = -wrapperEl.scrollTop),
					0 === swiper.translate && (swiper.translate = 0),
					swiper.updateActiveIndex(),
					swiper.updateSlidesClasses();
				const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
				(newProgress = 0 === translatesDiff ? 0 : (swiper.translate - swiper.minTranslate()) / translatesDiff),
					newProgress !== swiper.progress && swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate),
					swiper.emit('setTranslate', swiper.translate, !1);
			}
			function onLoad(e) {
				processLazyPreloader(this, e.target),
					this.params.cssMode || ('auto' !== this.params.slidesPerView && !this.params.autoHeight) || this.update();
			}
			function onDocumentTouchStart() {
				const swiper = this;
				swiper.documentTouchHandlerProceeded ||
					((swiper.documentTouchHandlerProceeded = !0), swiper.params.touchReleaseOnEdges && (swiper.el.style.touchAction = 'auto'));
			}
			const events = (swiper, method) => {
				const document = (0, ssr_window_esm.g)(),
					{ params, el, wrapperEl, device } = swiper,
					capture = !!params.nested,
					domMethod = 'on' === method ? 'addEventListener' : 'removeEventListener',
					swiperMethod = method;
				document[domMethod]('touchstart', swiper.onDocumentTouchStart, { passive: !1, capture }),
					el[domMethod]('touchstart', swiper.onTouchStart, { passive: !1 }),
					el[domMethod]('pointerdown', swiper.onTouchStart, { passive: !1 }),
					document[domMethod]('touchmove', swiper.onTouchMove, { passive: !1, capture }),
					document[domMethod]('pointermove', swiper.onTouchMove, { passive: !1, capture }),
					document[domMethod]('touchend', swiper.onTouchEnd, { passive: !0 }),
					document[domMethod]('pointerup', swiper.onTouchEnd, { passive: !0 }),
					document[domMethod]('pointercancel', swiper.onTouchEnd, { passive: !0 }),
					document[domMethod]('touchcancel', swiper.onTouchEnd, { passive: !0 }),
					document[domMethod]('pointerout', swiper.onTouchEnd, { passive: !0 }),
					document[domMethod]('pointerleave', swiper.onTouchEnd, { passive: !0 }),
					document[domMethod]('contextmenu', swiper.onTouchEnd, { passive: !0 }),
					(params.preventClicks || params.preventClicksPropagation) && el[domMethod]('click', swiper.onClick, !0),
					params.cssMode && wrapperEl[domMethod]('scroll', swiper.onScroll),
					params.updateOnWindowResize
						? swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, !0)
						: swiper[swiperMethod]('observerUpdate', onResize, !0),
					el[domMethod]('load', swiper.onLoad, { capture: !0 });
			};
			const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
			var defaults = {
				init: !0,
				direction: 'horizontal',
				oneWayMovement: !1,
				swiperElementNodeName: 'SWIPER-CONTAINER',
				touchEventsTarget: 'wrapper',
				initialSlide: 0,
				speed: 300,
				cssMode: !1,
				updateOnWindowResize: !0,
				resizeObserver: !0,
				nested: !1,
				createElements: !1,
				eventsPrefix: 'swiper',
				enabled: !0,
				focusableElements: 'input, select, option, textarea, button, video, label',
				width: null,
				height: null,
				preventInteractionOnTransition: !1,
				userAgent: null,
				url: null,
				edgeSwipeDetection: !1,
				edgeSwipeThreshold: 20,
				autoHeight: !1,
				setWrapperSize: !1,
				virtualTranslate: !1,
				effect: 'slide',
				breakpoints: void 0,
				breakpointsBase: 'window',
				spaceBetween: 0,
				slidesPerView: 1,
				slidesPerGroup: 1,
				slidesPerGroupSkip: 0,
				slidesPerGroupAuto: !1,
				centeredSlides: !1,
				centeredSlidesBounds: !1,
				slidesOffsetBefore: 0,
				slidesOffsetAfter: 0,
				normalizeSlideIndex: !0,
				centerInsufficientSlides: !1,
				watchOverflow: !0,
				roundLengths: !1,
				touchRatio: 1,
				touchAngle: 45,
				simulateTouch: !0,
				shortSwipes: !0,
				longSwipes: !0,
				longSwipesRatio: 0.5,
				longSwipesMs: 300,
				followFinger: !0,
				allowTouchMove: !0,
				threshold: 5,
				touchMoveStopPropagation: !1,
				touchStartPreventDefault: !0,
				touchStartForcePreventDefault: !1,
				touchReleaseOnEdges: !1,
				uniqueNavElements: !0,
				resistance: !0,
				resistanceRatio: 0.85,
				watchSlidesProgress: !1,
				grabCursor: !1,
				preventClicks: !0,
				preventClicksPropagation: !0,
				slideToClickedSlide: !1,
				loop: !1,
				loopAddBlankSlides: !0,
				loopAdditionalSlides: 0,
				loopPreventsSliding: !0,
				rewind: !1,
				allowSlidePrev: !0,
				allowSlideNext: !0,
				swipeHandler: null,
				noSwiping: !0,
				noSwipingClass: 'swiper-no-swiping',
				noSwipingSelector: null,
				passiveListeners: !0,
				maxBackfaceHiddenSlides: 10,
				containerModifierClass: 'swiper-',
				slideClass: 'swiper-slide',
				slideBlankClass: 'swiper-slide-blank',
				slideActiveClass: 'swiper-slide-active',
				slideVisibleClass: 'swiper-slide-visible',
				slideFullyVisibleClass: 'swiper-slide-fully-visible',
				slideNextClass: 'swiper-slide-next',
				slidePrevClass: 'swiper-slide-prev',
				wrapperClass: 'swiper-wrapper',
				lazyPreloaderClass: 'swiper-lazy-preloader',
				lazyPreloadPrevNext: 0,
				runCallbacksOnInit: !0,
				_emitClasses: !1,
			};
			function moduleExtendParams(params, allModulesParams) {
				return function extendParams(obj) {
					void 0 === obj && (obj = {});
					const moduleParamName = Object.keys(obj)[0],
						moduleParams = obj[moduleParamName];
					'object' == typeof moduleParams && null !== moduleParams
						? (!0 === params[moduleParamName] && (params[moduleParamName] = { enabled: !0 }),
						  'navigation' === moduleParamName &&
								params[moduleParamName] &&
								params[moduleParamName].enabled &&
								!params[moduleParamName].prevEl &&
								!params[moduleParamName].nextEl &&
								(params[moduleParamName].auto = !0),
						  ['pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 &&
								params[moduleParamName] &&
								params[moduleParamName].enabled &&
								!params[moduleParamName].el &&
								(params[moduleParamName].auto = !0),
						  moduleParamName in params && 'enabled' in moduleParams
								? ('object' != typeof params[moduleParamName] || 'enabled' in params[moduleParamName] || (params[moduleParamName].enabled = !0),
								  params[moduleParamName] || (params[moduleParamName] = { enabled: !1 }),
								  (0, utils.u)(allModulesParams, obj))
								: (0, utils.u)(allModulesParams, obj))
						: (0, utils.u)(allModulesParams, obj);
				};
			}
			const prototypes = {
					eventsEmitter,
					update,
					translate,
					transition: {
						setTransition: function setTransition(duration, byController) {
							const swiper = this;
							swiper.params.cssMode ||
								((swiper.wrapperEl.style.transitionDuration = `${duration}ms`),
								(swiper.wrapperEl.style.transitionDelay = 0 === duration ? '0ms' : '')),
								swiper.emit('setTransition', duration, byController);
						},
						transitionStart: function transitionStart(runCallbacks, direction) {
							void 0 === runCallbacks && (runCallbacks = !0);
							const swiper = this,
								{ params } = swiper;
							params.cssMode || (params.autoHeight && swiper.updateAutoHeight(), transitionEmit({ swiper, runCallbacks, direction, step: 'Start' }));
						},
						transitionEnd: function transitionEnd(runCallbacks, direction) {
							void 0 === runCallbacks && (runCallbacks = !0);
							const { params } = this;
							(this.animating = !1),
								params.cssMode || (this.setTransition(0), transitionEmit({ swiper: this, runCallbacks, direction, step: 'End' }));
						},
					},
					slide,
					loop,
					grabCursor: {
						setGrabCursor: function setGrabCursor(moving) {
							const swiper = this;
							if (!swiper.params.simulateTouch || (swiper.params.watchOverflow && swiper.isLocked) || swiper.params.cssMode) return;
							const el = 'container' === swiper.params.touchEventsTarget ? swiper.el : swiper.wrapperEl;
							swiper.isElement && (swiper.__preventObserver__ = !0),
								(el.style.cursor = 'move'),
								(el.style.cursor = moving ? 'grabbing' : 'grab'),
								swiper.isElement &&
									requestAnimationFrame(() => {
										swiper.__preventObserver__ = !1;
									});
						},
						unsetGrabCursor: function unsetGrabCursor() {
							const swiper = this;
							(swiper.params.watchOverflow && swiper.isLocked) ||
								swiper.params.cssMode ||
								(swiper.isElement && (swiper.__preventObserver__ = !0),
								(swiper['container' === swiper.params.touchEventsTarget ? 'el' : 'wrapperEl'].style.cursor = ''),
								swiper.isElement &&
									requestAnimationFrame(() => {
										swiper.__preventObserver__ = !1;
									}));
						},
					},
					events: {
						attachEvents: function attachEvents() {
							const swiper = this,
								{ params } = swiper;
							(swiper.onTouchStart = onTouchStart.bind(swiper)),
								(swiper.onTouchMove = onTouchMove.bind(swiper)),
								(swiper.onTouchEnd = onTouchEnd.bind(swiper)),
								(swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper)),
								params.cssMode && (swiper.onScroll = onScroll.bind(swiper)),
								(swiper.onClick = onClick.bind(swiper)),
								(swiper.onLoad = onLoad.bind(swiper)),
								events(swiper, 'on');
						},
						detachEvents: function detachEvents() {
							events(this, 'off');
						},
					},
					breakpoints: {
						setBreakpoint: function setBreakpoint() {
							const swiper = this,
								{ realIndex, initialized, params, el } = swiper,
								breakpoints = params.breakpoints;
							if (!breakpoints || (breakpoints && 0 === Object.keys(breakpoints).length)) return;
							const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
							if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
							const breakpointParams = (breakpoint in breakpoints ? breakpoints[breakpoint] : void 0) || swiper.originalParams,
								wasMultiRow = isGridEnabled(swiper, params),
								isMultiRow = isGridEnabled(swiper, breakpointParams),
								wasEnabled = params.enabled;
							wasMultiRow && !isMultiRow
								? (el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`),
								  swiper.emitContainerClasses())
								: !wasMultiRow &&
								  isMultiRow &&
								  (el.classList.add(`${params.containerModifierClass}grid`),
								  ((breakpointParams.grid.fill && 'column' === breakpointParams.grid.fill) ||
										(!breakpointParams.grid.fill && 'column' === params.grid.fill)) &&
										el.classList.add(`${params.containerModifierClass}grid-column`),
								  swiper.emitContainerClasses()),
								['navigation', 'pagination', 'scrollbar'].forEach((prop) => {
									if (void 0 === breakpointParams[prop]) return;
									const wasModuleEnabled = params[prop] && params[prop].enabled,
										isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
									wasModuleEnabled && !isModuleEnabled && swiper[prop].disable(), !wasModuleEnabled && isModuleEnabled && swiper[prop].enable();
								});
							const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction,
								needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged),
								wasLoop = params.loop;
							directionChanged && initialized && swiper.changeDirection(), (0, utils.u)(swiper.params, breakpointParams);
							const isEnabled = swiper.params.enabled,
								hasLoop = swiper.params.loop;
							Object.assign(swiper, {
								allowTouchMove: swiper.params.allowTouchMove,
								allowSlideNext: swiper.params.allowSlideNext,
								allowSlidePrev: swiper.params.allowSlidePrev,
							}),
								wasEnabled && !isEnabled ? swiper.disable() : !wasEnabled && isEnabled && swiper.enable(),
								(swiper.currentBreakpoint = breakpoint),
								swiper.emit('_beforeBreakpoint', breakpointParams),
								initialized &&
									(needsReLoop
										? (swiper.loopDestroy(), swiper.loopCreate(realIndex), swiper.updateSlides())
										: !wasLoop && hasLoop
										? (swiper.loopCreate(realIndex), swiper.updateSlides())
										: wasLoop && !hasLoop && swiper.loopDestroy()),
								swiper.emit('breakpoint', breakpointParams);
						},
						getBreakpoint: function getBreakpoint(breakpoints, base, containerEl) {
							if ((void 0 === base && (base = 'window'), !breakpoints || ('container' === base && !containerEl))) return;
							let breakpoint = !1;
							const window = (0, ssr_window_esm.a)(),
								currentHeight = 'window' === base ? window.innerHeight : containerEl.clientHeight,
								points = Object.keys(breakpoints).map((point) => {
									if ('string' == typeof point && 0 === point.indexOf('@')) {
										const minRatio = parseFloat(point.substr(1));
										return { value: currentHeight * minRatio, point };
									}
									return { value: point, point };
								});
							points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
							for (let i = 0; i < points.length; i += 1) {
								const { point, value } = points[i];
								'window' === base
									? window.matchMedia(`(min-width: ${value}px)`).matches && (breakpoint = point)
									: value <= containerEl.clientWidth && (breakpoint = point);
							}
							return breakpoint || 'max';
						},
					},
					checkOverflow: {
						checkOverflow: function checkOverflow() {
							const swiper = this,
								{ isLocked: wasLocked, params } = swiper,
								{ slidesOffsetBefore } = params;
							if (slidesOffsetBefore) {
								const lastSlideIndex = swiper.slides.length - 1,
									lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + 2 * slidesOffsetBefore;
								swiper.isLocked = swiper.size > lastSlideRightEdge;
							} else swiper.isLocked = 1 === swiper.snapGrid.length;
							!0 === params.allowSlideNext && (swiper.allowSlideNext = !swiper.isLocked),
								!0 === params.allowSlidePrev && (swiper.allowSlidePrev = !swiper.isLocked),
								wasLocked && wasLocked !== swiper.isLocked && (swiper.isEnd = !1),
								wasLocked !== swiper.isLocked && swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
						},
					},
					classes: {
						addClasses: function addClasses() {
							const { classNames, params, rtl, el, device } = this,
								suffixes = (function prepareClasses(entries, prefix) {
									const resultClasses = [];
									return (
										entries.forEach((item) => {
											'object' == typeof item
												? Object.keys(item).forEach((classNames) => {
														item[classNames] && resultClasses.push(prefix + classNames);
												  })
												: 'string' == typeof item && resultClasses.push(prefix + item);
										}),
										resultClasses
									);
								})(
									[
										'initialized',
										params.direction,
										{ 'free-mode': this.params.freeMode && params.freeMode.enabled },
										{ autoheight: params.autoHeight },
										{ rtl },
										{ grid: params.grid && params.grid.rows > 1 },
										{ 'grid-column': params.grid && params.grid.rows > 1 && 'column' === params.grid.fill },
										{ android: device.android },
										{ ios: device.ios },
										{ 'css-mode': params.cssMode },
										{ centered: params.cssMode && params.centeredSlides },
										{ 'watch-progress': params.watchSlidesProgress },
									],
									params.containerModifierClass
								);
							classNames.push(...suffixes), el.classList.add(...classNames), this.emitContainerClasses();
						},
						removeClasses: function removeClasses() {
							const { el, classNames } = this;
							el.classList.remove(...classNames), this.emitContainerClasses();
						},
					},
				},
				extendedDefaults = {};
			class Swiper {
				constructor() {
					let el, params;
					for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
					1 === args.length && args[0].constructor && 'Object' === Object.prototype.toString.call(args[0]).slice(8, -1)
						? (params = args[0])
						: ([el, params] = args),
						params || (params = {}),
						(params = (0, utils.u)({}, params)),
						el && !params.el && (params.el = el);
					const document = (0, ssr_window_esm.g)();
					if (params.el && 'string' == typeof params.el && document.querySelectorAll(params.el).length > 1) {
						const swipers = [];
						return (
							document.querySelectorAll(params.el).forEach((containerEl) => {
								const newParams = (0, utils.u)({}, params, { el: containerEl });
								swipers.push(new Swiper(newParams));
							}),
							swipers
						);
					}
					const swiper = this;
					(swiper.__swiper__ = !0),
						(swiper.support = getSupport()),
						(swiper.device = getDevice({ userAgent: params.userAgent })),
						(swiper.browser = getBrowser()),
						(swiper.eventsListeners = {}),
						(swiper.eventsAnyListeners = []),
						(swiper.modules = [...swiper.__modules__]),
						params.modules && Array.isArray(params.modules) && swiper.modules.push(...params.modules);
					const allModulesParams = {};
					swiper.modules.forEach((mod) => {
						mod({
							params,
							swiper,
							extendParams: moduleExtendParams(params, allModulesParams),
							on: swiper.on.bind(swiper),
							once: swiper.once.bind(swiper),
							off: swiper.off.bind(swiper),
							emit: swiper.emit.bind(swiper),
						});
					});
					const swiperParams = (0, utils.u)({}, defaults, allModulesParams);
					return (
						(swiper.params = (0, utils.u)({}, swiperParams, extendedDefaults, params)),
						(swiper.originalParams = (0, utils.u)({}, swiper.params)),
						(swiper.passedParams = (0, utils.u)({}, params)),
						swiper.params &&
							swiper.params.on &&
							Object.keys(swiper.params.on).forEach((eventName) => {
								swiper.on(eventName, swiper.params.on[eventName]);
							}),
						swiper.params && swiper.params.onAny && swiper.onAny(swiper.params.onAny),
						Object.assign(swiper, {
							enabled: swiper.params.enabled,
							el,
							classNames: [],
							slides: [],
							slidesGrid: [],
							snapGrid: [],
							slidesSizesGrid: [],
							isHorizontal: () => 'horizontal' === swiper.params.direction,
							isVertical: () => 'vertical' === swiper.params.direction,
							activeIndex: 0,
							realIndex: 0,
							isBeginning: !0,
							isEnd: !1,
							translate: 0,
							previousTranslate: 0,
							progress: 0,
							velocity: 0,
							animating: !1,
							cssOverflowAdjustment() {
								return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
							},
							allowSlideNext: swiper.params.allowSlideNext,
							allowSlidePrev: swiper.params.allowSlidePrev,
							touchEventsData: {
								isTouched: void 0,
								isMoved: void 0,
								allowTouchCallbacks: void 0,
								touchStartTime: void 0,
								isScrolling: void 0,
								currentTranslate: void 0,
								startTranslate: void 0,
								allowThresholdMove: void 0,
								focusableElements: swiper.params.focusableElements,
								lastClickTime: 0,
								clickTimeout: void 0,
								velocities: [],
								allowMomentumBounce: void 0,
								startMoving: void 0,
								pointerId: null,
								touchId: null,
							},
							allowClick: !0,
							allowTouchMove: swiper.params.allowTouchMove,
							touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
							imagesToLoad: [],
							imagesLoaded: 0,
						}),
						swiper.emit('_swiper'),
						swiper.params.init && swiper.init(),
						swiper
					);
				}
				getDirectionLabel(property) {
					return this.isHorizontal()
						? property
						: {
								width: 'height',
								'margin-top': 'margin-left',
								'margin-bottom ': 'margin-right',
								'margin-left': 'margin-top',
								'margin-right': 'margin-bottom',
								'padding-left': 'padding-top',
								'padding-right': 'padding-bottom',
								marginRight: 'marginBottom',
						  }[property];
				}
				getSlideIndex(slideEl) {
					const { slidesEl, params } = this,
						slides = (0, utils.e)(slidesEl, `.${params.slideClass}, swiper-slide`),
						firstSlideIndex = (0, utils.h)(slides[0]);
					return (0, utils.h)(slideEl) - firstSlideIndex;
				}
				getSlideIndexByData(index) {
					return this.getSlideIndex(this.slides.filter((slideEl) => 1 * slideEl.getAttribute('data-swiper-slide-index') === index)[0]);
				}
				recalcSlides() {
					const { slidesEl, params } = this;
					this.slides = (0, utils.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
				}
				enable() {
					const swiper = this;
					swiper.enabled || ((swiper.enabled = !0), swiper.params.grabCursor && swiper.setGrabCursor(), swiper.emit('enable'));
				}
				disable() {
					const swiper = this;
					swiper.enabled && ((swiper.enabled = !1), swiper.params.grabCursor && swiper.unsetGrabCursor(), swiper.emit('disable'));
				}
				setProgress(progress, speed) {
					progress = Math.min(Math.max(progress, 0), 1);
					const min = this.minTranslate(),
						current = (this.maxTranslate() - min) * progress + min;
					this.translateTo(current, void 0 === speed ? 0 : speed), this.updateActiveIndex(), this.updateSlidesClasses();
				}
				emitContainerClasses() {
					const swiper = this;
					if (!swiper.params._emitClasses || !swiper.el) return;
					const cls = swiper.el.className
						.split(' ')
						.filter((className) => 0 === className.indexOf('swiper') || 0 === className.indexOf(swiper.params.containerModifierClass));
					swiper.emit('_containerClasses', cls.join(' '));
				}
				getSlideClasses(slideEl) {
					const swiper = this;
					return swiper.destroyed
						? ''
						: slideEl.className
								.split(' ')
								.filter((className) => 0 === className.indexOf('swiper-slide') || 0 === className.indexOf(swiper.params.slideClass))
								.join(' ');
				}
				emitSlidesClasses() {
					const swiper = this;
					if (!swiper.params._emitClasses || !swiper.el) return;
					const updates = [];
					swiper.slides.forEach((slideEl) => {
						const classNames = swiper.getSlideClasses(slideEl);
						updates.push({ slideEl, classNames }), swiper.emit('_slideClass', slideEl, classNames);
					}),
						swiper.emit('_slideClasses', updates);
				}
				slidesPerViewDynamic(view, exact) {
					void 0 === view && (view = 'current'), void 0 === exact && (exact = !1);
					const { params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex } = this;
					let spv = 1;
					if ('number' == typeof params.slidesPerView) return params.slidesPerView;
					if (params.centeredSlides) {
						let breakLoop,
							slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
						for (let i = activeIndex + 1; i < slides.length; i += 1)
							slides[i] &&
								!breakLoop &&
								((slideSize += Math.ceil(slides[i].swiperSlideSize)), (spv += 1), slideSize > swiperSize && (breakLoop = !0));
						for (let i = activeIndex - 1; i >= 0; i -= 1)
							slides[i] && !breakLoop && ((slideSize += slides[i].swiperSlideSize), (spv += 1), slideSize > swiperSize && (breakLoop = !0));
					} else if ('current' === view)
						for (let i = activeIndex + 1; i < slides.length; i += 1) {
							(exact
								? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize
								: slidesGrid[i] - slidesGrid[activeIndex] < swiperSize) && (spv += 1);
						}
					else
						for (let i = activeIndex - 1; i >= 0; i -= 1) {
							slidesGrid[activeIndex] - slidesGrid[i] < swiperSize && (spv += 1);
						}
					return spv;
				}
				update() {
					const swiper = this;
					if (!swiper || swiper.destroyed) return;
					const { snapGrid, params } = swiper;
					function setTranslate() {
						const translateValue = swiper.rtlTranslate ? -1 * swiper.translate : swiper.translate,
							newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
						swiper.setTranslate(newTranslate), swiper.updateActiveIndex(), swiper.updateSlidesClasses();
					}
					let translated;
					if (
						(params.breakpoints && swiper.setBreakpoint(),
						[...swiper.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl) => {
							imageEl.complete && processLazyPreloader(swiper, imageEl);
						}),
						swiper.updateSize(),
						swiper.updateSlides(),
						swiper.updateProgress(),
						swiper.updateSlidesClasses(),
						params.freeMode && params.freeMode.enabled && !params.cssMode)
					)
						setTranslate(), params.autoHeight && swiper.updateAutoHeight();
					else {
						if (('auto' === params.slidesPerView || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
							const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
							translated = swiper.slideTo(slides.length - 1, 0, !1, !0);
						} else translated = swiper.slideTo(swiper.activeIndex, 0, !1, !0);
						translated || setTranslate();
					}
					params.watchOverflow && snapGrid !== swiper.snapGrid && swiper.checkOverflow(), swiper.emit('update');
				}
				changeDirection(newDirection, needUpdate) {
					void 0 === needUpdate && (needUpdate = !0);
					const swiper = this,
						currentDirection = swiper.params.direction;
					return (
						newDirection || (newDirection = 'horizontal' === currentDirection ? 'vertical' : 'horizontal'),
						newDirection === currentDirection ||
							('horizontal' !== newDirection && 'vertical' !== newDirection) ||
							(swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`),
							swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`),
							swiper.emitContainerClasses(),
							(swiper.params.direction = newDirection),
							swiper.slides.forEach((slideEl) => {
								'vertical' === newDirection ? (slideEl.style.width = '') : (slideEl.style.height = '');
							}),
							swiper.emit('changeDirection'),
							needUpdate && swiper.update()),
						swiper
					);
				}
				changeLanguageDirection(direction) {
					const swiper = this;
					(swiper.rtl && 'rtl' === direction) ||
						(!swiper.rtl && 'ltr' === direction) ||
						((swiper.rtl = 'rtl' === direction),
						(swiper.rtlTranslate = 'horizontal' === swiper.params.direction && swiper.rtl),
						swiper.rtl
							? (swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`), (swiper.el.dir = 'rtl'))
							: (swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`), (swiper.el.dir = 'ltr')),
						swiper.update());
				}
				mount(element) {
					const swiper = this;
					if (swiper.mounted) return !0;
					let el = element || swiper.params.el;
					if (('string' == typeof el && (el = document.querySelector(el)), !el)) return !1;
					(el.swiper = swiper),
						el.parentNode &&
							el.parentNode.host &&
							el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase() &&
							(swiper.isElement = !0);
					const getWrapperSelector = () => `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
					let wrapperEl = (() => {
						if (el && el.shadowRoot && el.shadowRoot.querySelector) {
							return el.shadowRoot.querySelector(getWrapperSelector());
						}
						return (0, utils.e)(el, getWrapperSelector())[0];
					})();
					return (
						!wrapperEl &&
							swiper.params.createElements &&
							((wrapperEl = (0, utils.c)('div', swiper.params.wrapperClass)),
							el.append(wrapperEl),
							(0, utils.e)(el, `.${swiper.params.slideClass}`).forEach((slideEl) => {
								wrapperEl.append(slideEl);
							})),
						Object.assign(swiper, {
							el,
							wrapperEl,
							slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
							hostEl: swiper.isElement ? el.parentNode.host : el,
							mounted: !0,
							rtl: 'rtl' === el.dir.toLowerCase() || 'rtl' === (0, utils.o)(el, 'direction'),
							rtlTranslate: 'horizontal' === swiper.params.direction && ('rtl' === el.dir.toLowerCase() || 'rtl' === (0, utils.o)(el, 'direction')),
							wrongRTL: '-webkit-box' === (0, utils.o)(wrapperEl, 'display'),
						}),
						!0
					);
				}
				init(el) {
					const swiper = this;
					if (swiper.initialized) return swiper;
					if (!1 === swiper.mount(el)) return swiper;
					swiper.emit('beforeInit'),
						swiper.params.breakpoints && swiper.setBreakpoint(),
						swiper.addClasses(),
						swiper.updateSize(),
						swiper.updateSlides(),
						swiper.params.watchOverflow && swiper.checkOverflow(),
						swiper.params.grabCursor && swiper.enabled && swiper.setGrabCursor(),
						swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled
							? swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, !1, !0)
							: swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, !1, !0),
						swiper.params.loop && swiper.loopCreate(),
						swiper.attachEvents();
					const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
					return (
						swiper.isElement && lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]')),
						lazyElements.forEach((imageEl) => {
							imageEl.complete
								? processLazyPreloader(swiper, imageEl)
								: imageEl.addEventListener('load', (e) => {
										processLazyPreloader(swiper, e.target);
								  });
						}),
						preload(swiper),
						(swiper.initialized = !0),
						preload(swiper),
						swiper.emit('init'),
						swiper.emit('afterInit'),
						swiper
					);
				}
				destroy(deleteInstance, cleanStyles) {
					void 0 === deleteInstance && (deleteInstance = !0), void 0 === cleanStyles && (cleanStyles = !0);
					const swiper = this,
						{ params, el, wrapperEl, slides } = swiper;
					return (
						void 0 === swiper.params ||
							swiper.destroyed ||
							(swiper.emit('beforeDestroy'),
							(swiper.initialized = !1),
							swiper.detachEvents(),
							params.loop && swiper.loopDestroy(),
							cleanStyles &&
								(swiper.removeClasses(),
								el.removeAttribute('style'),
								wrapperEl.removeAttribute('style'),
								slides &&
									slides.length &&
									slides.forEach((slideEl) => {
										slideEl.classList.remove(
											params.slideVisibleClass,
											params.slideFullyVisibleClass,
											params.slideActiveClass,
											params.slideNextClass,
											params.slidePrevClass
										),
											slideEl.removeAttribute('style'),
											slideEl.removeAttribute('data-swiper-slide-index');
									})),
							swiper.emit('destroy'),
							Object.keys(swiper.eventsListeners).forEach((eventName) => {
								swiper.off(eventName);
							}),
							!1 !== deleteInstance && ((swiper.el.swiper = null), (0, utils.v)(swiper)),
							(swiper.destroyed = !0)),
						null
					);
				}
				static extendDefaults(newDefaults) {
					(0, utils.u)(extendedDefaults, newDefaults);
				}
				static get extendedDefaults() {
					return extendedDefaults;
				}
				static get defaults() {
					return defaults;
				}
				static installModule(mod) {
					Swiper.prototype.__modules__ || (Swiper.prototype.__modules__ = []);
					const modules = Swiper.prototype.__modules__;
					'function' == typeof mod && modules.indexOf(mod) < 0 && modules.push(mod);
				}
				static use(module) {
					return Array.isArray(module) ? (module.forEach((m) => Swiper.installModule(m)), Swiper) : (Swiper.installModule(module), Swiper);
				}
			}
			Object.keys(prototypes).forEach((prototypeGroup) => {
				Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
					Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
				});
			}),
				Swiper.use([
					function Resize(_ref) {
						let { swiper, on, emit } = _ref;
						const window = (0, ssr_window_esm.a)();
						let observer = null,
							animationFrame = null;
						const resizeHandler = () => {
								swiper && !swiper.destroyed && swiper.initialized && (emit('beforeResize'), emit('resize'));
							},
							orientationChangeHandler = () => {
								swiper && !swiper.destroyed && swiper.initialized && emit('orientationchange');
							};
						on('init', () => {
							swiper.params.resizeObserver && void 0 !== window.ResizeObserver
								? swiper &&
								  !swiper.destroyed &&
								  swiper.initialized &&
								  ((observer = new ResizeObserver((entries) => {
										animationFrame = window.requestAnimationFrame(() => {
											const { width, height } = swiper;
											let newWidth = width,
												newHeight = height;
											entries.forEach((_ref2) => {
												let { contentBoxSize, contentRect, target } = _ref2;
												(target && target !== swiper.el) ||
													((newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize),
													(newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize));
											}),
												(newWidth === width && newHeight === height) || resizeHandler();
										});
								  })),
								  observer.observe(swiper.el))
								: (window.addEventListener('resize', resizeHandler), window.addEventListener('orientationchange', orientationChangeHandler));
						}),
							on('destroy', () => {
								animationFrame && window.cancelAnimationFrame(animationFrame),
									observer && observer.unobserve && swiper.el && (observer.unobserve(swiper.el), (observer = null)),
									window.removeEventListener('resize', resizeHandler),
									window.removeEventListener('orientationchange', orientationChangeHandler);
							});
					},
					function Observer(_ref) {
						let { swiper, extendParams, on, emit } = _ref;
						const observers = [],
							window = (0, ssr_window_esm.a)(),
							attach = function (target, options) {
								void 0 === options && (options = {});
								const observer = new (window.MutationObserver || window.WebkitMutationObserver)((mutations) => {
									if (swiper.__preventObserver__) return;
									if (1 === mutations.length) return void emit('observerUpdate', mutations[0]);
									const observerUpdate = function observerUpdate() {
										emit('observerUpdate', mutations[0]);
									};
									window.requestAnimationFrame ? window.requestAnimationFrame(observerUpdate) : window.setTimeout(observerUpdate, 0);
								});
								observer.observe(target, {
									attributes: void 0 === options.attributes || options.attributes,
									childList: void 0 === options.childList || options.childList,
									characterData: void 0 === options.characterData || options.characterData,
								}),
									observers.push(observer);
							};
						extendParams({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
							on('init', () => {
								if (swiper.params.observer) {
									if (swiper.params.observeParents) {
										const containerParents = (0, utils.a)(swiper.hostEl);
										for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
									}
									attach(swiper.hostEl, { childList: swiper.params.observeSlideChildren }), attach(swiper.wrapperEl, { attributes: !1 });
								}
							}),
							on('destroy', () => {
								observers.forEach((observer) => {
									observer.disconnect();
								}),
									observers.splice(0, observers.length);
							});
					},
				]);
			const paramsList = [
				'eventsPrefix',
				'injectStyles',
				'injectStylesUrls',
				'modules',
				'init',
				'_direction',
				'oneWayMovement',
				'swiperElementNodeName',
				'touchEventsTarget',
				'initialSlide',
				'_speed',
				'cssMode',
				'updateOnWindowResize',
				'resizeObserver',
				'nested',
				'focusableElements',
				'_enabled',
				'_width',
				'_height',
				'preventInteractionOnTransition',
				'userAgent',
				'url',
				'_edgeSwipeDetection',
				'_edgeSwipeThreshold',
				'_freeMode',
				'_autoHeight',
				'setWrapperSize',
				'virtualTranslate',
				'_effect',
				'breakpoints',
				'breakpointsBase',
				'_spaceBetween',
				'_slidesPerView',
				'maxBackfaceHiddenSlides',
				'_grid',
				'_slidesPerGroup',
				'_slidesPerGroupSkip',
				'_slidesPerGroupAuto',
				'_centeredSlides',
				'_centeredSlidesBounds',
				'_slidesOffsetBefore',
				'_slidesOffsetAfter',
				'normalizeSlideIndex',
				'_centerInsufficientSlides',
				'_watchOverflow',
				'roundLengths',
				'touchRatio',
				'touchAngle',
				'simulateTouch',
				'_shortSwipes',
				'_longSwipes',
				'longSwipesRatio',
				'longSwipesMs',
				'_followFinger',
				'allowTouchMove',
				'_threshold',
				'touchMoveStopPropagation',
				'touchStartPreventDefault',
				'touchStartForcePreventDefault',
				'touchReleaseOnEdges',
				'uniqueNavElements',
				'_resistance',
				'_resistanceRatio',
				'_watchSlidesProgress',
				'_grabCursor',
				'preventClicks',
				'preventClicksPropagation',
				'_slideToClickedSlide',
				'_loop',
				'loopAdditionalSlides',
				'loopAddBlankSlides',
				'loopPreventsSliding',
				'_rewind',
				'_allowSlidePrev',
				'_allowSlideNext',
				'_swipeHandler',
				'_noSwiping',
				'noSwipingClass',
				'noSwipingSelector',
				'passiveListeners',
				'containerModifierClass',
				'slideClass',
				'slideActiveClass',
				'slideVisibleClass',
				'slideFullyVisibleClass',
				'slideNextClass',
				'slidePrevClass',
				'slideBlankClass',
				'wrapperClass',
				'lazyPreloaderClass',
				'lazyPreloadPrevNext',
				'runCallbacksOnInit',
				'observer',
				'observeParents',
				'observeSlideChildren',
				'a11y',
				'_autoplay',
				'_controller',
				'coverflowEffect',
				'cubeEffect',
				'fadeEffect',
				'flipEffect',
				'creativeEffect',
				'cardsEffect',
				'hashNavigation',
				'history',
				'keyboard',
				'mousewheel',
				'_navigation',
				'_pagination',
				'parallax',
				'_scrollbar',
				'_thumbs',
				'virtual',
				'zoom',
				'control',
			];
			function isObject(o) {
				return 'object' == typeof o && null !== o && o.constructor && 'Object' === Object.prototype.toString.call(o).slice(8, -1) && !o.__swiper__;
			}
			function extend(target, src) {
				const noExtend = ['__proto__', 'constructor', 'prototype'];
				Object.keys(src)
					.filter((key) => noExtend.indexOf(key) < 0)
					.forEach((key) => {
						void 0 === target[key]
							? (target[key] = src[key])
							: isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0
							? src[key].__swiper__
								? (target[key] = src[key])
								: extend(target[key], src[key])
							: (target[key] = src[key]);
					});
			}
			function needsNavigation(params) {
				return void 0 === params && (params = {}), params.navigation && void 0 === params.navigation.nextEl && void 0 === params.navigation.prevEl;
			}
			function needsPagination(params) {
				return void 0 === params && (params = {}), params.pagination && void 0 === params.pagination.el;
			}
			function needsScrollbar(params) {
				return void 0 === params && (params = {}), params.scrollbar && void 0 === params.scrollbar.el;
			}
			function uniqueClasses(classNames) {
				void 0 === classNames && (classNames = '');
				const classes = classNames
						.split(' ')
						.map((c) => c.trim())
						.filter((c) => !!c),
					unique = [];
				return (
					classes.forEach((c) => {
						unique.indexOf(c) < 0 && unique.push(c);
					}),
					unique.join(' ')
				);
			}
			function wrapperClass(className) {
				return (
					void 0 === className && (className = ''),
					className ? (className.includes('swiper-wrapper') ? className : `swiper-wrapper ${className}`) : 'swiper-wrapper'
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
			function isChildSwiperSlide(child) {
				return child.type && child.type.displayName && child.type.displayName.includes('SwiperSlide');
			}
			function processChildren(c) {
				const slides = [];
				return (
					compat_module.default.Children.toArray(c).forEach((child) => {
						isChildSwiperSlide(child)
							? slides.push(child)
							: child.props && child.props.children && processChildren(child.props.children).forEach((slide) => slides.push(slide));
					}),
					slides
				);
			}
			function getChildren(c) {
				const slides = [],
					slots = { 'container-start': [], 'container-end': [], 'wrapper-start': [], 'wrapper-end': [] };
				return (
					compat_module.default.Children.toArray(c).forEach((child) => {
						if (isChildSwiperSlide(child)) slides.push(child);
						else if (child.props && child.props.slot && slots[child.props.slot]) slots[child.props.slot].push(child);
						else if (child.props && child.props.children) {
							const foundSlides = processChildren(child.props.children);
							foundSlides.length > 0 ? foundSlides.forEach((slide) => slides.push(slide)) : slots['container-end'].push(child);
						} else slots['container-end'].push(child);
					}),
					{ slides, slots }
				);
			}
			function useIsomorphicLayoutEffect(callback, deps) {
				return 'undefined' == typeof window ? (0, compat_module.useEffect)(callback, deps) : (0, compat_module.useLayoutEffect)(callback, deps);
			}
			const SwiperSlideContext = (0, compat_module.createContext)(null),
				SwiperContext = (0, compat_module.createContext)(null),
				swiper_react_Swiper = (0, compat_module.forwardRef)(function (_temp, externalElRef) {
					let { className, tag: Tag = 'div', wrapperTag: WrapperTag = 'div', children, onSwiper, ...rest } = void 0 === _temp ? {} : _temp,
						eventsAssigned = !1;
					const [containerClasses, setContainerClasses] = (0, compat_module.useState)('swiper'),
						[virtualData, setVirtualData] = (0, compat_module.useState)(null),
						[breakpointChanged, setBreakpointChanged] = (0, compat_module.useState)(!1),
						initializedRef = (0, compat_module.useRef)(!1),
						swiperElRef = (0, compat_module.useRef)(null),
						swiperRef = (0, compat_module.useRef)(null),
						oldPassedParamsRef = (0, compat_module.useRef)(null),
						oldSlides = (0, compat_module.useRef)(null),
						nextElRef = (0, compat_module.useRef)(null),
						prevElRef = (0, compat_module.useRef)(null),
						paginationElRef = (0, compat_module.useRef)(null),
						scrollbarElRef = (0, compat_module.useRef)(null),
						{
							params: swiperParams,
							passedParams,
							rest: restProps,
							events,
						} = (function getParams(obj, splitEvents) {
							void 0 === obj && (obj = {}), void 0 === splitEvents && (splitEvents = !0);
							const params = { on: {} },
								events = {},
								passedParams = {};
							extend(params, defaults), (params._emitClasses = !0), (params.init = !1);
							const rest = {},
								allowedParams = paramsList.map((key) => key.replace(/_/, '')),
								plainObj = Object.assign({}, obj);
							return (
								Object.keys(plainObj).forEach((key) => {
									void 0 !== obj[key] &&
										(allowedParams.indexOf(key) >= 0
											? isObject(obj[key])
												? ((params[key] = {}), (passedParams[key] = {}), extend(params[key], obj[key]), extend(passedParams[key], obj[key]))
												: ((params[key] = obj[key]), (passedParams[key] = obj[key]))
											: 0 === key.search(/on[A-Z]/) && 'function' == typeof obj[key]
											? splitEvents
												? (events[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key])
												: (params.on[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key])
											: (rest[key] = obj[key]));
								}),
								['navigation', 'pagination', 'scrollbar'].forEach((key) => {
									!0 === params[key] && (params[key] = {}), !1 === params[key] && delete params[key];
								}),
								{ params, passedParams, rest, events }
							);
						})(rest),
						{ slides, slots } = getChildren(children),
						onBeforeBreakpoint = () => {
							setBreakpointChanged(!breakpointChanged);
						};
					Object.assign(swiperParams.on, {
						_containerClasses(swiper, classes) {
							setContainerClasses(classes);
						},
					});
					const initSwiper = () => {
						Object.assign(swiperParams.on, events), (eventsAssigned = !0);
						const passParams = { ...swiperParams };
						if (
							(delete passParams.wrapperClass,
							(swiperRef.current = new Swiper(passParams)),
							swiperRef.current.virtual && swiperRef.current.params.virtual.enabled)
						) {
							swiperRef.current.virtual.slides = slides;
							const extendWith = { cache: !1, slides, renderExternal: setVirtualData, renderExternalUpdate: !1 };
							extend(swiperRef.current.params.virtual, extendWith), extend(swiperRef.current.originalParams.virtual, extendWith);
						}
					};
					swiperElRef.current || initSwiper(), swiperRef.current && swiperRef.current.on('_beforeBreakpoint', onBeforeBreakpoint);
					return (
						(0, compat_module.useEffect)(() => () => {
							swiperRef.current && swiperRef.current.off('_beforeBreakpoint', onBeforeBreakpoint);
						}),
						(0, compat_module.useEffect)(() => {
							!initializedRef.current && swiperRef.current && (swiperRef.current.emitSlidesClasses(), (initializedRef.current = !0));
						}),
						useIsomorphicLayoutEffect(() => {
							if ((externalElRef && (externalElRef.current = swiperElRef.current), swiperElRef.current))
								return (
									swiperRef.current.destroyed && initSwiper(),
									(function mountSwiper(_ref, swiperParams) {
										let { el, nextEl, prevEl, paginationEl, scrollbarEl, swiper } = _ref;
										needsNavigation(swiperParams) &&
											nextEl &&
											prevEl &&
											((swiper.params.navigation.nextEl = nextEl),
											(swiper.originalParams.navigation.nextEl = nextEl),
											(swiper.params.navigation.prevEl = prevEl),
											(swiper.originalParams.navigation.prevEl = prevEl)),
											needsPagination(swiperParams) &&
												paginationEl &&
												((swiper.params.pagination.el = paginationEl), (swiper.originalParams.pagination.el = paginationEl)),
											needsScrollbar(swiperParams) &&
												scrollbarEl &&
												((swiper.params.scrollbar.el = scrollbarEl), (swiper.originalParams.scrollbar.el = scrollbarEl)),
											swiper.init(el);
									})(
										{
											el: swiperElRef.current,
											nextEl: nextElRef.current,
											prevEl: prevElRef.current,
											paginationEl: paginationElRef.current,
											scrollbarEl: scrollbarElRef.current,
											swiper: swiperRef.current,
										},
										swiperParams
									),
									onSwiper && !swiperRef.current.destroyed && onSwiper(swiperRef.current),
									() => {
										swiperRef.current && !swiperRef.current.destroyed && swiperRef.current.destroy(!0, !1);
									}
								);
						}, []),
						useIsomorphicLayoutEffect(() => {
							!eventsAssigned &&
								events &&
								swiperRef.current &&
								Object.keys(events).forEach((eventName) => {
									swiperRef.current.on(eventName, events[eventName]);
								});
							const changedParams = (function getChangedParams(swiperParams, oldParams, children, oldChildren, getKey) {
								const keys = [];
								if (!oldParams) return keys;
								const addKey = (key) => {
									keys.indexOf(key) < 0 && keys.push(key);
								};
								if (children && oldChildren) {
									const oldChildrenKeys = oldChildren.map(getKey),
										childrenKeys = children.map(getKey);
									oldChildrenKeys.join('') !== childrenKeys.join('') && addKey('children'),
										oldChildren.length !== children.length && addKey('children');
								}
								return (
									paramsList
										.filter((key) => '_' === key[0])
										.map((key) => key.replace(/_/, ''))
										.forEach((key) => {
											if (key in swiperParams && key in oldParams)
												if (isObject(swiperParams[key]) && isObject(oldParams[key])) {
													const newKeys = Object.keys(swiperParams[key]),
														oldKeys = Object.keys(oldParams[key]);
													newKeys.length !== oldKeys.length
														? addKey(key)
														: (newKeys.forEach((newKey) => {
																swiperParams[key][newKey] !== oldParams[key][newKey] && addKey(key);
														  }),
														  oldKeys.forEach((oldKey) => {
																swiperParams[key][oldKey] !== oldParams[key][oldKey] && addKey(key);
														  }));
												} else swiperParams[key] !== oldParams[key] && addKey(key);
										}),
									keys
								);
							})(passedParams, oldPassedParamsRef.current, slides, oldSlides.current, (c) => c.key);
							return (
								(oldPassedParamsRef.current = passedParams),
								(oldSlides.current = slides),
								changedParams.length &&
									swiperRef.current &&
									!swiperRef.current.destroyed &&
									(function updateSwiper(_ref) {
										let { swiper, slides, passedParams, changedParams, nextEl, prevEl, scrollbarEl, paginationEl } = _ref;
										const updateParams = changedParams.filter((key) => 'children' !== key && 'direction' !== key && 'wrapperClass' !== key),
											{ params: currentParams, pagination, navigation, scrollbar, virtual, thumbs } = swiper;
										let needThumbsInit,
											needControllerInit,
											needPaginationInit,
											needScrollbarInit,
											needNavigationInit,
											loopNeedDestroy,
											loopNeedEnable,
											loopNeedReloop;
										changedParams.includes('thumbs') &&
											passedParams.thumbs &&
											passedParams.thumbs.swiper &&
											currentParams.thumbs &&
											!currentParams.thumbs.swiper &&
											(needThumbsInit = !0),
											changedParams.includes('controller') &&
												passedParams.controller &&
												passedParams.controller.control &&
												currentParams.controller &&
												!currentParams.controller.control &&
												(needControllerInit = !0),
											changedParams.includes('pagination') &&
												passedParams.pagination &&
												(passedParams.pagination.el || paginationEl) &&
												(currentParams.pagination || !1 === currentParams.pagination) &&
												pagination &&
												!pagination.el &&
												(needPaginationInit = !0),
											changedParams.includes('scrollbar') &&
												passedParams.scrollbar &&
												(passedParams.scrollbar.el || scrollbarEl) &&
												(currentParams.scrollbar || !1 === currentParams.scrollbar) &&
												scrollbar &&
												!scrollbar.el &&
												(needScrollbarInit = !0),
											changedParams.includes('navigation') &&
												passedParams.navigation &&
												(passedParams.navigation.prevEl || prevEl) &&
												(passedParams.navigation.nextEl || nextEl) &&
												(currentParams.navigation || !1 === currentParams.navigation) &&
												navigation &&
												!navigation.prevEl &&
												!navigation.nextEl &&
												(needNavigationInit = !0);
										const destroyModule = (mod) => {
											swiper[mod] &&
												(swiper[mod].destroy(),
												'navigation' === mod
													? (swiper.isElement && (swiper[mod].prevEl.remove(), swiper[mod].nextEl.remove()),
													  (currentParams[mod].prevEl = void 0),
													  (currentParams[mod].nextEl = void 0),
													  (swiper[mod].prevEl = void 0),
													  (swiper[mod].nextEl = void 0))
													: (swiper.isElement && swiper[mod].el.remove(), (currentParams[mod].el = void 0), (swiper[mod].el = void 0)));
										};
										changedParams.includes('loop') &&
											swiper.isElement &&
											(currentParams.loop && !passedParams.loop
												? (loopNeedDestroy = !0)
												: !currentParams.loop && passedParams.loop
												? (loopNeedEnable = !0)
												: (loopNeedReloop = !0)),
											updateParams.forEach((key) => {
												if (isObject(currentParams[key]) && isObject(passedParams[key]))
													Object.assign(currentParams[key], passedParams[key]),
														('navigation' !== key && 'pagination' !== key && 'scrollbar' !== key) ||
															!('enabled' in passedParams[key]) ||
															passedParams[key].enabled ||
															destroyModule(key);
												else {
													const newValue = passedParams[key];
													(!0 !== newValue && !1 !== newValue) || ('navigation' !== key && 'pagination' !== key && 'scrollbar' !== key)
														? (currentParams[key] = passedParams[key])
														: !1 === newValue && destroyModule(key);
												}
											}),
											updateParams.includes('controller') &&
												!needControllerInit &&
												swiper.controller &&
												swiper.controller.control &&
												currentParams.controller &&
												currentParams.controller.control &&
												(swiper.controller.control = currentParams.controller.control),
											changedParams.includes('children') && slides && virtual && currentParams.virtual.enabled
												? ((virtual.slides = slides), virtual.update(!0))
												: changedParams.includes('virtual') &&
												  virtual &&
												  currentParams.virtual.enabled &&
												  (slides && (virtual.slides = slides), virtual.update(!0)),
											changedParams.includes('children') && slides && currentParams.loop && (loopNeedReloop = !0),
											needThumbsInit && thumbs.init() && thumbs.update(!0);
										needControllerInit && (swiper.controller.control = currentParams.controller.control),
											needPaginationInit &&
												(!swiper.isElement ||
													(paginationEl && 'string' != typeof paginationEl) ||
													((paginationEl = document.createElement('div')),
													paginationEl.classList.add('swiper-pagination'),
													paginationEl.part.add('pagination'),
													swiper.el.appendChild(paginationEl)),
												paginationEl && (currentParams.pagination.el = paginationEl),
												pagination.init(),
												pagination.render(),
												pagination.update()),
											needScrollbarInit &&
												(!swiper.isElement ||
													(scrollbarEl && 'string' != typeof scrollbarEl) ||
													((scrollbarEl = document.createElement('div')),
													scrollbarEl.classList.add('swiper-scrollbar'),
													scrollbarEl.part.add('scrollbar'),
													swiper.el.appendChild(scrollbarEl)),
												scrollbarEl && (currentParams.scrollbar.el = scrollbarEl),
												scrollbar.init(),
												scrollbar.updateSize(),
												scrollbar.setTranslate()),
											needNavigationInit &&
												(swiper.isElement &&
													((nextEl && 'string' != typeof nextEl) ||
														((nextEl = document.createElement('div')),
														nextEl.classList.add('swiper-button-next'),
														(nextEl.innerHTML = swiper.hostEl.constructor.nextButtonSvg),
														nextEl.part.add('button-next'),
														swiper.el.appendChild(nextEl)),
													(prevEl && 'string' != typeof prevEl) ||
														((prevEl = document.createElement('div')),
														prevEl.classList.add('swiper-button-prev'),
														(prevEl.innerHTML = swiper.hostEl.constructor.prevButtonSvg),
														prevEl.part.add('button-prev'),
														swiper.el.appendChild(prevEl))),
												nextEl && (currentParams.navigation.nextEl = nextEl),
												prevEl && (currentParams.navigation.prevEl = prevEl),
												navigation.init(),
												navigation.update()),
											changedParams.includes('allowSlideNext') && (swiper.allowSlideNext = passedParams.allowSlideNext),
											changedParams.includes('allowSlidePrev') && (swiper.allowSlidePrev = passedParams.allowSlidePrev),
											changedParams.includes('direction') && swiper.changeDirection(passedParams.direction, !1),
											(loopNeedDestroy || loopNeedReloop) && swiper.loopDestroy(),
											(loopNeedEnable || loopNeedReloop) && swiper.loopCreate(),
											swiper.update();
									})({
										swiper: swiperRef.current,
										slides,
										passedParams,
										changedParams,
										nextEl: nextElRef.current,
										prevEl: prevElRef.current,
										scrollbarEl: scrollbarElRef.current,
										paginationEl: paginationElRef.current,
									}),
								() => {
									events &&
										swiperRef.current &&
										Object.keys(events).forEach((eventName) => {
											swiperRef.current.off(eventName, events[eventName]);
										});
								}
							);
						}),
						useIsomorphicLayoutEffect(() => {
							var swiper;
							!(swiper = swiperRef.current) ||
								swiper.destroyed ||
								!swiper.params.virtual ||
								(swiper.params.virtual && !swiper.params.virtual.enabled) ||
								(swiper.updateSlides(),
								swiper.updateProgress(),
								swiper.updateSlidesClasses(),
								swiper.parallax && swiper.params.parallax && swiper.params.parallax.enabled && swiper.parallax.setTranslate());
						}, [virtualData]),
						compat_module.default.createElement(
							Tag,
							_extends({ ref: swiperElRef, className: uniqueClasses(`${containerClasses}${className ? ` ${className}` : ''}`) }, restProps),
							compat_module.default.createElement(
								SwiperContext.Provider,
								{ value: swiperRef.current },
								slots['container-start'],
								compat_module.default.createElement(
									WrapperTag,
									{ className: wrapperClass(swiperParams.wrapperClass) },
									slots['wrapper-start'],
									(function renderSlides() {
										return swiperParams.virtual
											? (function renderVirtual(swiper, slides, virtualData) {
													if (!virtualData) return null;
													const getSlideIndex = (index) => {
															let slideIndex = index;
															return (
																index < 0 ? (slideIndex = slides.length + index) : slideIndex >= slides.length && (slideIndex -= slides.length),
																slideIndex
															);
														},
														style = swiper.isHorizontal()
															? { [swiper.rtlTranslate ? 'right' : 'left']: `${virtualData.offset}px` }
															: { top: `${virtualData.offset}px` },
														{ from, to } = virtualData,
														loopFrom = swiper.params.loop ? -slides.length : 0,
														loopTo = swiper.params.loop ? 2 * slides.length : slides.length,
														slidesToRender = [];
													for (let i = loopFrom; i < loopTo; i += 1) i >= from && i <= to && slidesToRender.push(slides[getSlideIndex(i)]);
													return slidesToRender.map((child, index) =>
														compat_module.default.cloneElement(child, {
															swiper,
															style,
															key: child.props.virtualIndex || child.key || `slide-${index}`,
														})
													);
											  })(swiperRef.current, slides, virtualData)
											: slides.map((child, index) =>
													compat_module.default.cloneElement(child, { swiper: swiperRef.current, swiperSlideIndex: index })
											  );
									})(),
									slots['wrapper-end']
								),
								needsNavigation(swiperParams) &&
									compat_module.default.createElement(
										compat_module.default.Fragment,
										null,
										compat_module.default.createElement('div', { ref: prevElRef, className: 'swiper-button-prev' }),
										compat_module.default.createElement('div', { ref: nextElRef, className: 'swiper-button-next' })
									),
								needsScrollbar(swiperParams) && compat_module.default.createElement('div', { ref: scrollbarElRef, className: 'swiper-scrollbar' }),
								needsPagination(swiperParams) && compat_module.default.createElement('div', { ref: paginationElRef, className: 'swiper-pagination' }),
								slots['container-end']
							)
						)
					);
				});
			swiper_react_Swiper.displayName = 'Swiper';
			const SwiperSlide = (0, compat_module.forwardRef)(function (_temp, externalRef) {
				let {
					tag: Tag = 'div',
					children,
					className = '',
					swiper,
					zoom,
					lazy,
					virtualIndex,
					swiperSlideIndex,
					...rest
				} = void 0 === _temp ? {} : _temp;
				const slideElRef = (0, compat_module.useRef)(null),
					[slideClasses, setSlideClasses] = (0, compat_module.useState)('swiper-slide'),
					[lazyLoaded, setLazyLoaded] = (0, compat_module.useState)(!1);
				function updateClasses(_s, el, classNames) {
					el === slideElRef.current && setSlideClasses(classNames);
				}
				useIsomorphicLayoutEffect(() => {
					if (
						(void 0 !== swiperSlideIndex && (slideElRef.current.swiperSlideIndex = swiperSlideIndex),
						externalRef && (externalRef.current = slideElRef.current),
						slideElRef.current && swiper)
					) {
						if (!swiper.destroyed)
							return (
								swiper.on('_slideClass', updateClasses),
								() => {
									swiper && swiper.off('_slideClass', updateClasses);
								}
							);
						'swiper-slide' !== slideClasses && setSlideClasses('swiper-slide');
					}
				}),
					useIsomorphicLayoutEffect(() => {
						swiper && slideElRef.current && !swiper.destroyed && setSlideClasses(swiper.getSlideClasses(slideElRef.current));
					}, [swiper]);
				const slideData = {
						isActive: slideClasses.indexOf('swiper-slide-active') >= 0,
						isVisible: slideClasses.indexOf('swiper-slide-visible') >= 0,
						isPrev: slideClasses.indexOf('swiper-slide-prev') >= 0,
						isNext: slideClasses.indexOf('swiper-slide-next') >= 0,
					},
					renderChildren = () => ('function' == typeof children ? children(slideData) : children);
				return compat_module.default.createElement(
					Tag,
					_extends(
						{
							ref: slideElRef,
							className: uniqueClasses(`${slideClasses}${className ? ` ${className}` : ''}`),
							'data-swiper-slide-index': virtualIndex,
							onLoad: () => {
								setLazyLoaded(!0);
							},
						},
						rest
					),
					zoom &&
						compat_module.default.createElement(
							SwiperSlideContext.Provider,
							{ value: slideData },
							compat_module.default.createElement(
								'div',
								{ className: 'swiper-zoom-container', 'data-swiper-zoom': 'number' == typeof zoom ? zoom : void 0 },
								renderChildren(),
								lazy && !lazyLoaded && compat_module.default.createElement('div', { className: 'swiper-lazy-preloader' })
							)
						),
					!zoom &&
						compat_module.default.createElement(
							SwiperSlideContext.Provider,
							{ value: slideData },
							renderChildren(),
							lazy && !lazyLoaded && compat_module.default.createElement('div', { className: 'swiper-lazy-preloader' })
						)
				);
			});
			SwiperSlide.displayName = 'SwiperSlide';
		},
	},
]);
