import { observer } from 'mobx-react-lite';
import { useState, useEffect, useCallback } from 'preact/hooks';
import { css, Global } from '@emotion/react';
import { ControlDisplayState, ControlOptions, ControlValues, ControlValueTypes } from '../../../../../../src/types';
import { Reset, DomSelectorIcon } from '../Assets';
import { RootNodeProperties } from '../../../../types';

// CSS styles for DOM selector overlay and tooltip
const overlayStyles = css`
	.ss-selector-overlay {
		position: fixed;
		pointer-events: none;
		background: rgba(29, 73, 144, 0.2);
		border: 2px solid #1d4990;
		z-index: 10001;
		transition: all 0.1s ease-in-out;
	}

	.ss-selector-tooltip {
		position: fixed;
		background: #333;
		color: #fff;
		padding: 4px 8px;
		border-radius: 3px;
		font-size: 12px;
		z-index: 10002;
		pointer-events: none;
		max-width: 300px;
		word-break: break-all;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	}
`;

const CSSStyles = {
	Controls: ({}: Partial<ControlProps>) =>
		css({
			'.dom-selector-container': {
				display: 'flex',
				gap: '8px',
				alignItems: 'center',
				width: '100%',
				input: {
					flex: 1,
				},
				'.dom-selector-button': {
					padding: '4px',
					cursor: 'pointer',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					opacity: 1,
					width: '24px',
					height: '24px',
					backgroundColor: '#fff',
					'&.active': {
						backgroundColor: '#283e57',
						color: '#fff',
						cursor: 'not-allowed',
					},
					'&:disabled': {
						cursor: 'not-allowed',
						opacity: 0.5,
					},
					'& > span': {
						width: '16px',
						height: '16px',
						fill: '#333',
						'&.active': {
							fill: '#fff',
						},
					},
				},
			},
		}),
};

type ControlProps = {
	type: ControlValueTypes;
	label: string;
	description?: string;
	onReset: () => void;
	display: ControlDisplayState;
	showReset: boolean;
	value: ControlValues;
	options?: ControlOptions;
	onChange: (value: ControlValues) => void;
	// DOM Selector specific props
	activeDomSelector?: string;
	setActiveDomSelector?: (selector: string) => void;
	selectorId?: string;
	elementSelector?: string;
};

export const Control = observer((props: ControlProps) => {
	const {
		type,
		label,
		description,
		onReset,
		display,
		showReset,
		value,
		options,
		onChange,
		activeDomSelector,
		setActiveDomSelector,
		selectorId,
		elementSelector,
	} = props;

	const [inputValue, setInputValue] = useState(value);
	const [isSelecting, setIsSelecting] = useState(false);

	const styling: RootNodeProperties = {
		css: [CSSStyles.Controls({ ...props })],
	};

	useEffect(() => {
		setInputValue(value);
	}, [value]);

	// DOM Selector specific state and handlers
	useEffect(() => {
		if (type === 'dom-selector' && activeDomSelector && selectorId) {
			setIsSelecting(activeDomSelector === selectorId);
		}
	}, [type, activeDomSelector, selectorId]);

	// Element selection handlers for dom-selector type
	const handleElementClick = useCallback(
		(e: MouseEvent) => {
			if (type !== 'dom-selector' || activeDomSelector !== selectorId) return;

			const target = e.target as HTMLElement;

			// Check if clicking the DOM selector button - if so, deactivate selection mode
			if (target.closest('.dom-selector-button')) {
				e.preventDefault();
				e.stopPropagation();
				// Deactivate selection mode
				if (setActiveDomSelector) {
					setActiveDomSelector('');
				}
				setIsSelecting(false);
				cleanupSelection();
				return;
			}

			// Don't process clicks on anything in the template editor
			if (target.closest('#searchspring-template-editor')) {
				return;
			}

			e.preventDefault();
			e.stopPropagation();

			const matchedElement = target.closest(elementSelector || '*');

			if (!matchedElement) return;

			const selector = getShortestUniqueSelector(matchedElement);

			if (selector) {
				onChange(selector);
				setInputValue(selector);
			}

			// Deactivate selection mode
			if (setActiveDomSelector) {
				setActiveDomSelector('');
			}
			cleanupSelection();
		},
		[type, activeDomSelector, selectorId, elementSelector, onChange, setActiveDomSelector]
	);

	const handleElementMouseOver = useCallback(
		(e: MouseEvent) => {
			if (type !== 'dom-selector' || activeDomSelector !== selectorId) return;

			const target = e.target as HTMLElement;

			// Prevent hovering over elements within the template editor itself
			if (target.closest('#searchspring-template-editor')) {
				cleanupOverlay(); // Remove overlay if we're hovering over the editor
				return;
			}

			e.preventDefault();
			e.stopPropagation();

			const matchedElement = target.closest(elementSelector || '*');

			if (!matchedElement) return;

			// Remove any existing overlay
			cleanupOverlay();

			// Add visual overlay
			const overlay = document.createElement('div');
			overlay.classList.add('ss-selector-overlay');
			const rect = matchedElement.getBoundingClientRect();
			overlay.style.width = `${rect.width}px`;
			overlay.style.height = `${rect.height}px`;
			overlay.style.left = `${rect.left}px`;
			overlay.style.top = `${rect.top}px`;

			// Add tooltip
			const tooltip = document.createElement('div');
			tooltip.classList.add('ss-selector-tooltip');
			tooltip.style.left = `${rect.left}px`;
			tooltip.style.top = `${rect.bottom + 5}px`;
			tooltip.textContent = getShortestUniqueSelector(matchedElement) || 'Element';

			document.body.appendChild(overlay);
			document.body.appendChild(tooltip);
		},
		[type, activeDomSelector, selectorId, elementSelector]
	);

	const handleElementMouseOut = useCallback(
		(e: MouseEvent) => {
			if (type !== 'dom-selector' || activeDomSelector !== selectorId) return;

			const target = e.target as HTMLElement;
			// Don't process events on the template editor
			if (target.closest('#searchspring-template-editor')) {
				return;
			}

			cleanupOverlay();
		},
		[type, activeDomSelector, selectorId]
	);

	const cleanupOverlay = () => {
		document.querySelectorAll('.ss-selector-overlay, .ss-selector-tooltip').forEach((el) => el.remove());
	};

	const cleanupSelection = () => {
		cleanupOverlay();
		document.removeEventListener('click', handleElementClick, true);
		document.removeEventListener('mouseover', handleElementMouseOver, true);
		document.removeEventListener('mouseout', handleElementMouseOut, true);
	};

	// ESC key handler for dom-selector
	const handleEscape = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape' && type === 'dom-selector' && isSelecting) {
				e.preventDefault();
				e.stopPropagation();
				if (setActiveDomSelector) {
					setActiveDomSelector('');
				}
				setIsSelecting(false);
				cleanupSelection();
			}
		},
		[type, isSelecting, setActiveDomSelector]
	);

	// Setup/cleanup selection mode for dom-selector type
	useEffect(() => {
		if (type === 'dom-selector' && isSelecting) {
			document.addEventListener('click', handleElementClick, true);
			document.addEventListener('mouseover', handleElementMouseOver, true);
			document.addEventListener('mouseout', handleElementMouseOut, true);
			document.addEventListener('keydown', handleEscape, true);

			return () => {
				cleanupSelection();
				document.removeEventListener('keydown', handleEscape, true);
			};
		} else if (type === 'dom-selector') {
			cleanupSelection();
		}
	}, [type, isSelecting, handleElementClick, handleElementMouseOver, handleElementMouseOut, handleEscape]);

	const toggleDomSelection = () => {
		if (display === 'disabled' || !setActiveDomSelector || !selectorId) return;

		if (isSelecting) {
			// Deactivate
			setActiveDomSelector('');
		} else {
			// Activate (will deactivate any other active selector)
			setActiveDomSelector(selectorId);
		}
	};

	return display === 'hidden' ? null : (
		<div className={`control ${type} ${display}`} {...styling}>
			<Global styles={overlayStyles} />
			<div className="option checkbox">
				<label>{label}</label>
				<div className="reset">
					{showReset ? (
						<button
							title="Reset"
							onClick={() => {
								onReset();
							}}
						>
							<Reset />
						</button>
					) : null}
				</div>
				<div className="value" title={description}>
					{(() => {
						switch (type) {
							case 'text': {
								return <input type="text" value={value as string} onChange={(e) => onChange(e.target.value)} disabled={display === 'disabled'} />;
							}
							case 'number': {
								return (
									<input type="number" value={value as number} onChange={(e) => onChange(Number(e.target.value))} disabled={display === 'disabled'} />
								);
							}
							case 'checkbox': {
								return (
									<input type="checkbox" checked={value as boolean} onChange={(e) => onChange(e.target.checked)} disabled={display === 'disabled'} />
								);
							}
							case 'dropdown': {
								return (
									<select onChange={(e) => onChange(e.target.value)} disabled={display === 'disabled'} value={value as string | number}>
										{options?.map((group, groupIndex) =>
											group.group ? (
												<optgroup label={group.group} key={groupIndex}>
													{group.options.map((option, optionIndex) => (
														<option value={option.value as string | number} key={`${groupIndex}-${optionIndex}`}>
															{option.label || option.value}
														</option>
													))}
												</optgroup>
											) : (
												group.options.map((option, optionIndex) => (
													<option value={option.value as string | number} key={`${groupIndex}-${optionIndex}`}>
														{option.label || option.value}
													</option>
												))
											)
										)}
									</select>
								);
							}
							case 'color': {
								return (
									<>
										<input
											type="color"
											value={value as string}
											onChange={(e) => {
												setInputValue(e.target.value);
												onChange(e.target.value);
											}}
											disabled={display === 'disabled'}
										/>
										{/* <span className="color-value">{ value as string }</span> */}
										<input
											type="text"
											className={isValidHexColor(inputValue as string) ? '' : 'invalid'}
											value={inputValue as string}
											onChange={(e) => {
												setInputValue(e.target.value);
												isValidHexColor(e.target.value) && onChange(e.target.value);
											}}
											disabled={display === 'disabled'}
										/>
									</>
								);
							}
							case 'dom-selector': {
								// These props are required for dom-selector type
								if (!elementSelector || !selectorId) {
									console.warn('Missing required props for dom-selector type');
									// Fallback to text input
									return <input type="text" value={value as string} onChange={(e) => onChange(e.target.value)} disabled={display === 'disabled'} />;
								}
								return (
									<div
										className="dom-selector-container"
										// style={{ display: 'flex', gap: '8px', alignItems: 'center', width: '100%' }}
									>
										<input
											type="text"
											value={inputValue as string}
											onChange={(e) => {
												const newValue = e.target.value;
												setInputValue(newValue);
												onChange(newValue);
											}}
											disabled={display === 'disabled' || isSelecting}
											placeholder="Enter CSS selector"
											// style={{ flex: 1 }}
										/>
										<button
											className={'dom-selector-button' + (isSelecting ? ' active' : '')}
											style={
												{
													// padding: '4px',
													// border: '1px solid #ccc',
													// borderRadius: '3px',
													// backgroundColor: isSelecting ? '#1D4990' : '#fff',
													// color: isSelecting ? '#fff' : '#333',
													// cursor: display === 'disabled' ? 'not-allowed' : 'pointer',
													// display: 'flex',
													// alignItems: 'center',
													// justifyContent: 'center',
													// transition: 'all 0.2s',
													// opacity: display === 'disabled' ? 0.5 : 1,
													// width: '24px',
													// height: '24px',
												}
											}
											onClick={toggleDomSelection}
											disabled={display === 'disabled'}
											title={isSelecting ? 'Cancel selection' : 'Select element'}
											type="button"
										>
											<span
												style={{
													width: '16px',
													height: '16px',
													// fill: isSelecting ? '#fff' : '#333'
												}}
												className={isSelecting ? 'active' : ''}
											>
												<DomSelectorIcon />
											</span>
										</button>
									</div>
								);
							}

							default: {
								return null;
							}
						}
					})()}
				</div>
			</div>
		</div>
	);
});

// function to validate hex color values of the type: #333333
const isValidHexColor = (color: string): boolean => {
	if (!/^#[0-9A-F]{6}$/i.test(color)) {
		return false;
	}
	return true;
};

// Helper function to get the shortest unique selector for an element
function getShortestUniqueSelector(el: Element | null): string | null {
	if (!(el instanceof Element)) return null;

	const parts: string[] = [];
	let current: Element | null = el;

	while (current && current.nodeType === 1) {
		let selector = current.tagName.toLowerCase();

		// Use ID if present
		if (current.id) {
			selector = `#${CSS.escape(current.id)}`;
			parts.unshift(selector);
		} else {
			// Add class-based selector
			if (current.classList.length > 0) {
				selector +=
					'.' +
					Array.from(current.classList)
						.map((cls) => CSS.escape(cls))
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
}
