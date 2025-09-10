// import { h } from 'preact';

// import { css, Global } from '@emotion/react';
// import classnames from 'classnames';
import { useCallback, useEffect, useState } from 'preact/hooks';

export const DomSelector = (props: any) => {
	const { elementSelector, onSelectHandler, type, currentSelector, setCurrentSelector } = props;

	const [active, setActive] = useState(currentSelector === type);

	const elements = document.querySelectorAll(elementSelector);

	const clickListener = useCallback((e: any) => {
		e.preventDefault();
		e.stopPropagation();
		// get element from event
		const target = e.target.closest(elementSelector);
		if (!target) return;
		if (type == 'component') {
			const ssPath = ElementSelectorHelpers.getSSPath(target);
			if (ssPath) {
				// TODO: open editor with ssPath component
				onSelectHandler(ssPath);
			}
		} else {
			onSelectHandler(ElementSelectorHelpers.getShortestUniqueSelector(target));
		}

		setCurrentSelector('');
		cleanUp();
	}, []);

	// TODO add an onscroll event that repositions the overlay and tooltip

	// TOD remove the dashed border on contentSelector

	const onMouseOverListener = useCallback((e: any) => {
		e.preventDefault();
		e.stopPropagation();
		// add styling and tooltip thing
		const target = e.target.closest(elementSelector) as HTMLElement;
		if (target) {
			const overlay = document.createElement('div');
			overlay.classList.add('ss-overlay');
			overlay.style.width = `${target.getBoundingClientRect().width}px`;
			overlay.style.height = `${target.getBoundingClientRect().height}px`;
			overlay.style.left = `${target.getBoundingClientRect().left}px`;
			overlay.style.top = `${target.getBoundingClientRect().top}px`;

			const tooltip = document.createElement('div');
			tooltip.classList.add('ss-tooltip');
			tooltip.style.left = `${target.getBoundingClientRect().left}px`;
			tooltip.style.top = `${target.getBoundingClientRect().bottom}px`;

			const ssPath = ElementSelectorHelpers.getSSPath(target);
			tooltip.innerHTML += `
				${ssPath ? `<label><b>SS-Path:</b> ${ssPath}</label>` : ''}
				<br />
				<label><b>Shortest Unique Selector:</b> ${ElementSelectorHelpers.getShortestUniqueSelector(target)}</label>
			`;
			document.body.appendChild(tooltip);
			document.body.appendChild(overlay);
		}
	}, []);

	const cleanUp = () => {
		// remove the tooltip overlay
		const tooltipOverlay = document.querySelector('.ss-tooltip');
		if (tooltipOverlay) {
			tooltipOverlay.remove();
		}
		const overlay = document.querySelector('.ss-overlay');
		if (overlay) {
			overlay.remove();
		}
	};

	const onMouseOutListener = useCallback(() => {
		cleanUp();
	}, []);

	const removeEvents = () => {
		elements.forEach((elem) => {
			elem.removeEventListener('click', clickListener);
			elem.removeEventListener('mouseover', onMouseOverListener);
			elem.removeEventListener('mouseout', onMouseOutListener);
			elem.style.outline = 'none';
		});
		cleanUp();
	};

	const addEvents = () => {
		elements.forEach((elem) => {
			elem.addEventListener('click', clickListener);
			elem.addEventListener('mouseover', onMouseOverListener);
			elem.addEventListener('mouseout', onMouseOutListener);
			if (type !== 'content') elem.style.outline = '1px dotted #3a23ad';
		});
	};

	useEffect(() => {
		setActive(currentSelector === type);
	}, [currentSelector]);

	useEffect(() => {
		if (active) {
			// loop through elements and:
			// attach listeners
			// (optional) add overlay/border to element
			console.log('adding events from', type);
			addEvents();
		} else {
			// loop through elements and:
			// remove event listeners
			console.log('removing events from', type);
			removeEvents();
		}
	}, [active]);

	useEffect(() => {
		if (!active) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			console.log('SS: running keydown event listener');
			if (e.key === 'Escape') {
				setCurrentSelector('');
				cleanUp();
			}
		};

		// TODO make sure we only bind once
		console.log('SS: adding keydown event listener');
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			console.log('SS: removing keydown event listener');
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [active]);

	const toggleInspecting = () => {
		if (active) {
			setCurrentSelector('');
		} else {
			setCurrentSelector(type);
		}
	};

	return (
		<div>
			<button
				onClick={() => {
					toggleInspecting();
				}}
			>
				{active ? 'Cancel' : 'Find'}
			</button>
		</div>
	);
};

const ElementSelectorHelpers = {
	getComponent: function (el: EventTarget): HTMLElement | null {
		return (el as HTMLElement).closest('[ss-path]');
	},
	getContent: function (el: EventTarget): HTMLElement | null {
		return (el as HTMLElement).closest('div, section, article, aside');
	},
	getInput: function (el: EventTarget): HTMLInputElement | null {
		return (el as HTMLElement).closest('input[type=text], input[type=searc]');
	},
	markElement: function (type: string | undefined, child: EventTarget | null): HTMLElement | null {
		let element: HTMLElement | null = null;
		if (!child) {
			return null;
		}
		switch (type) {
			case 'component':
				element = this.getComponent(child);
				if (element) {
					element.classList.add('hoverEls');
				}
				break;
			case 'content':
				element = this.getContent(child);
				if (element) {
					element.classList.add('hoverEls');
				}
				break;
			case 'input':
				element = this.getInput(child);
				if (element) {
					element.classList.add('hoverEls');
				}
				break;
			default:
				break;
		}
		return element;
	},
	getShortestUniqueSelector: function (el: Element | null): string | null {
		if (!(el instanceof Element)) return null;

		const parts = [];
		let current: Element | null = el;

		while (current && current.nodeType === 1) {
			let selector = current.tagName.toLowerCase();

			// Use ID if present, but check for uniqueness later
			if (current.id) {
				selector = `#${window.CSS.escape(current.id)}`;
				parts.unshift(selector);
			} else {
				// Add class-based selector
				if (current.classList.length > 0) {
					selector +=
						'.' +
						Array.from(current.classList)
							.map((cls) => window.CSS.escape(cls))
							.join('.');
				}

				// Use :nth-child if needed for uniqueness
				const siblings = Array.from(current.parentNode?.children || []);
				const sameTagSiblings = siblings.filter((sib) => sib.tagName === current?.tagName);
				if (sameTagSiblings.length > 1) {
					const index = siblings.indexOf(current) + 1;
					selector += `:nth-child(${index})`;
				}

				parts.unshift(selector);
			}

			// Try to build the selector
			const combinedSelector = parts.join(' > ');
			const found = document.querySelectorAll(combinedSelector);

			// If it returns exactly the original element, return it
			if (found.length === 1 && found[0] === el) {
				return combinedSelector;
			}

			// Move up
			current = current.parentElement;
			if (current === null) {
				break;
			}
		}

		return null;
	},
	getSSPath: function (elem: HTMLElement) {
		return elem.getAttribute('ss-path') || '';
	},
};
