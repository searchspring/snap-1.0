import { observer } from 'mobx-react-lite';
import { useState, useEffect, useCallback, useRef } from 'preact/hooks';
import { css, Global } from '@emotion/react';
import { ControlDisplayState, ControlOptions, ControlValues, ControlValueTypes } from '../../../../../../src/types';
import { Reset, DomSelectorIcon } from '../Assets';
import { RootNodeProperties } from '../../../../types';
import { DomSelectorNavigator, getShortestUniqueSelector } from './DomSelectorNavigator';

// DOM Selector constants
const HOVER_DEBOUNCE_MS = 600; // Time to wait before showing navigator on hover
const OVERLAY_Z_INDEX = 10001; // Z-index for selector overlay
const TOOLTIP_Z_INDEX = 10002; // Z-index for selector tooltip

// CSS-in-JS styles using Emotion's object syntax (matches TemplatesEditor.tsx pattern)
const CSS = {
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
	// Global styles for DOM selector overlay and tooltip
	GlobalOverlayStyles: () =>
		css({
			'.ss-selector-overlay': {
				position: 'fixed',
				pointerEvents: 'none',
				background: 'rgba(29, 73, 144, 0.2)',
				border: '2px solid #1d4990',
				zIndex: OVERLAY_Z_INDEX,
				transition: 'all 0.1s ease-in-out',
			},
			'.ss-selector-tooltip': {
				position: 'fixed',
				background: '#333',
				color: '#fff',
				padding: '4px 8px',
				borderRadius: '3px',
				fontSize: '12px',
				zIndex: TOOLTIP_Z_INDEX,
				pointerEvents: 'none',
				maxWidth: '300px',
				wordBreak: 'break-all',
				boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
			},
		}),
};

/**
 * Stores pending hover data for debounced navigator display
 * Used to track mouse position and target element during hover timeout
 */
interface PendingHoverData {
	x: number;
	y: number;
	target: HTMLElement;
	matchedElement: Element;
}

/**
 * Props for the Control component
 * Supports multiple control types including text, number, checkbox, dropdown, color, and dom-selector
 */
type ControlProps = {
	/** Type of control to render */
	type: ControlValueTypes;
	/** Label text displayed for the control */
	label: string;
	/** Optional description shown as title tooltip */
	description?: string;
	/** Callback when reset button is clicked */
	onReset: () => void;
	/** Display state: normal, disabled, or hidden */
	display: ControlDisplayState;
	/** Whether to show the reset button */
	showReset: boolean;
	/** Current value of the control */
	value: ControlValues;
	/** Options for dropdown type controls */
	options?: ControlOptions;
	/** Callback when control value changes */
	onChange: (value: ControlValues) => void;

	// DOM Selector specific props (required when type is 'dom-selector')
	/** Currently active DOM selector ID (for mutual exclusivity) */
	activeDomSelector?: string;
	/** Callback to set the active DOM selector ID */
	setActiveDomSelector?: (selector: string) => void;
	/** Unique ID for this DOM selector control */
	selectorId?: string;
	/** CSS selector to filter which elements can be selected (e.g., 'input' for autocomplete) */
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
	const [navigatorState, setNavigatorState] = useState<{
		show: boolean;
		x: number;
		y: number;
		targetElement: HTMLElement | null;
	}>({ show: false, x: 0, y: 0, targetElement: null });
	const lastMatchedElementRef = useRef<Element | null>(null);
	// Browser setTimeout returns a numeric timer ID
	const hoverTimeoutRef = useRef<number | null>(null);
	const pendingHoverDataRef = useRef<PendingHoverData | null>(null);

	const styling: RootNodeProperties = {
		css: [CSS.Controls({ ...props })],
	};

	useEffect(() => {
		setInputValue(value);
	}, [value]);

	// DOM Selector specific state and handlers
	// Sync isSelecting state with activeDomSelector changes
	useEffect(() => {
		if (type === 'dom-selector' && selectorId) {
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

	// PERFORMANCE: Refs (hoverTimeoutRef, pendingHoverDataRef, lastMatchedElementRef) are intentionally
	// excluded from dependency array as they don't trigger re-renders and are stable across renders
	// PERFORMANCE: Early returns prevent unnecessary DOM operations and ref updates
	const handleElementMouseOver = useCallback(
		(e: MouseEvent) => {
			if (type !== 'dom-selector' || activeDomSelector !== selectorId) return;

			const target = e.target as HTMLElement;

			// Don't update if hovering over the navigator itself (check this FIRST)
			if (target.closest('.ss-dom-navigator')) {
				return;
			}

			// Prevent hovering over elements within the template editor itself
			if (target.closest('#searchspring-template-editor')) {
				return;
			}

			const matchedElement = target.closest(elementSelector || '*');

			if (!matchedElement) {
				return;
			}

			// Ignore if we're already hovering the same matched element
			if (lastMatchedElementRef.current === matchedElement) {
				return;
			}

			// At this point we know we'll process the event, prevent default behavior
			e.preventDefault();
			e.stopPropagation();

			// Clear any pending hover timeout
			if (hoverTimeoutRef.current) {
				clearTimeout(hoverTimeoutRef.current);
				hoverTimeoutRef.current = null;
			}

			// Show overlay immediately for visual feedback
			cleanupOverlay();
			const overlay = document.createElement('div');
			overlay.classList.add('ss-selector-overlay', 'current');
			overlay.setAttribute('data-overlay-source', 'control-mouseover');
			const rect = matchedElement.getBoundingClientRect();
			overlay.style.cssText = `
				position: fixed;
				pointer-events: none;
				z-index: ${OVERLAY_Z_INDEX};
				background: rgba(29, 144, 73, 0.2);
				border: 2px solid #1d9044;
				width: ${rect.width}px;
				height: ${rect.height}px;
				left: ${rect.left}px;
				top: ${rect.top}px;
				transition: all 0.1s ease-in-out;
			`;
			document.body.appendChild(overlay);

			// Store hover data for debounced show
			pendingHoverDataRef.current = {
				x: e.clientX,
				y: e.clientY,
				target,
				matchedElement,
			};

			// Debounce: wait for mouse to rest before showing navigator
			hoverTimeoutRef.current = window.setTimeout(() => {
				const hoverData = pendingHoverDataRef.current;
				if (!hoverData) return;

				// Update the last matched element
				lastMatchedElementRef.current = hoverData.matchedElement;

				// Pass EXACT mouse position to navigator
				// Navigator will position itself so mouse is at the appropriate corner
				setNavigatorState({
					show: true,
					x: hoverData.x,
					y: hoverData.y,
					targetElement: hoverData.target,
				});

				hoverTimeoutRef.current = null;
			}, HOVER_DEBOUNCE_MS);
		},
		[type, activeDomSelector, selectorId, elementSelector]
	);

	// PERFORMANCE: Refs (hoverTimeoutRef, pendingHoverDataRef, lastMatchedElementRef) are intentionally
	// excluded from dependency array as they don't trigger re-renders and are stable across renders
	const handleElementMouseOut = useCallback(
		(e: MouseEvent) => {
			if (type !== 'dom-selector' || activeDomSelector !== selectorId) return;

			const target = e.target as HTMLElement;
			const relatedTarget = e.relatedTarget as HTMLElement;

			// Cancel any pending hover timeout
			if (hoverTimeoutRef.current) {
				clearTimeout(hoverTimeoutRef.current);
				hoverTimeoutRef.current = null;
				pendingHoverDataRef.current = null;
			}

			// Don't close if moving to the navigator
			if (relatedTarget?.closest('.ss-dom-navigator')) {
				return;
			}

			// Don't close if moving to the template editor
			if (relatedTarget?.closest('#searchspring-template-editor')) {
				return;
			}

			// Don't close if moving to another element within the same matched element
			const matchedElement = target.closest(elementSelector || '*');
			if (matchedElement && relatedTarget) {
				const relatedMatchedElement = relatedTarget.closest(elementSelector || '*');
				if (relatedMatchedElement === matchedElement) {
					return;
				}
			}

			setNavigatorState({ show: false, x: 0, y: 0, targetElement: null });
			lastMatchedElementRef.current = null;
		},
		[type, activeDomSelector, selectorId, elementSelector]
	);

	const cleanupOverlay = () => {
		const overlays = document.querySelectorAll('.ss-selector-overlay');
		overlays.forEach((el) => {
			el.remove();
		});
	};

	const cleanupSelection = () => {
		cleanupOverlay();
		setNavigatorState({ show: false, x: 0, y: 0, targetElement: null });
		lastMatchedElementRef.current = null;

		// Clear any pending hover timeout
		if (hoverTimeoutRef.current) {
			clearTimeout(hoverTimeoutRef.current);
			hoverTimeoutRef.current = null;
		}
		pendingHoverDataRef.current = null;

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
	// PERFORMANCE: Only attach event listeners when THIS specific selector is active
	// This prevents inactive selectors from executing handler checks on every mouse event
	useEffect(() => {
		if (type === 'dom-selector' && isSelecting && activeDomSelector === selectorId) {
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
	}, [type, isSelecting, activeDomSelector, selectorId, handleElementClick, handleElementMouseOver, handleElementMouseOut, handleEscape]);

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

	const handleNavigatorClose = useCallback(() => {
		setNavigatorState({ show: false, x: 0, y: 0, targetElement: null });
	}, []);

	const handleNavigatorSelect = useCallback(
		(selector: string) => {
			onChange(selector);
			setInputValue(selector);
			if (setActiveDomSelector) {
				setActiveDomSelector('');
			}
			cleanupSelection();
		},
		[onChange, setActiveDomSelector]
	);

	return display === 'hidden' ? null : (
		<div className={`control ${type} ${display}`} {...styling}>
			<Global styles={CSS.GlobalOverlayStyles()} />
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
									<div className="dom-selector-container">
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
										/>
										<button
											className={'dom-selector-button' + (isSelecting ? ' active' : '')}
											onClick={toggleDomSelection}
											disabled={display === 'disabled'}
											title={isSelecting ? 'Cancel selection' : 'Select element'}
											type="button"
										>
											<span className={isSelecting ? 'active' : ''}>
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
			{type === 'dom-selector' && navigatorState.show && navigatorState.targetElement && (
				<DomSelectorNavigator
					elementSelector={elementSelector}
					onChange={handleNavigatorSelect}
					onClose={handleNavigatorClose}
					x={navigatorState.x}
					y={navigatorState.y}
					targetElement={navigatorState.targetElement}
				/>
			)}
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
