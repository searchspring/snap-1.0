import { observer } from 'mobx-react-lite';
import { useState, useEffect, useCallback, useRef } from 'preact/hooks';
import { css, Global } from '@emotion/react';
import { ControlDisplayState, ControlOptions, ControlValues, ControlValueTypes } from '../../../../../../src/types';
import { Reset, DomSelectorIcon } from '../Assets';
import { RootNodeProperties } from '../../../../types';
import { DomSelectorNavigator, getShortestUniqueSelector } from './DomSelectorNavigator';

// dom selector constants
const HOVER_DEBOUNCE_MS = 600; // time to wait before showing navigator on hover
const VALIDATION_DEBOUNCE_MS = 300; // time to wait before validating selector input
const OVERLAY_Z_INDEX = 10001; // z-index for selector overlay
const TOOLTIP_Z_INDEX = 10002; // z-index for selector tooltip

// css-in-js styles using emotion's object syntax
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
					'&.invalid': {
						borderColor: '#cc0000',
						outline: '1px solid #cc0000',
					},
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

// stores pending hover data for debounced navigator display
interface PendingHoverData {
	x: number;
	y: number;
	target: HTMLElement;
	matchedElement: Element;
}

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

	// dom selector specific props
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
	const [isSelectorValid, setIsSelectorValid] = useState(true);
	const [navigatorState, setNavigatorState] = useState<{
		show: boolean;
		x: number;
		y: number;
		targetElement: HTMLElement | null;
	}>({ show: false, x: 0, y: 0, targetElement: null });
	const lastMatchedElementRef = useRef<Element | null>(null);
	const hoverTimeoutRef = useRef<number | null>(null);
	const pendingHoverDataRef = useRef<PendingHoverData | null>(null);
	const validationTimeoutRef = useRef<number | null>(null);

	const styling: RootNodeProperties = {
		css: [CSS.Controls({ ...props })],
	};

	useEffect(() => {
		setInputValue(value);
	}, [value]);

	// sync isSelecting state with activeDomSelector changes
	useEffect(() => {
		if (type === 'dom-selector' && selectorId) {
			setIsSelecting(activeDomSelector === selectorId);
		}
	}, [type, activeDomSelector, selectorId]);

	// validate dom-selector input value with debounce to avoid performance issues during rapid typing
	useEffect(() => {
		// clear any pending validation timeout
		if (validationTimeoutRef.current) {
			clearTimeout(validationTimeoutRef.current);
			validationTimeoutRef.current = null;
		}

		if (type !== 'dom-selector') {
			setIsSelectorValid(true);
			return;
		}

		// debounce all validation to avoid blocking input during rapid typing
		validationTimeoutRef.current = window.setTimeout(() => {
			if (!inputValue || typeof inputValue !== 'string') {
				setIsSelectorValid(true);
				validationTimeoutRef.current = null;
				return;
			}

			// empty selector is valid
			if (inputValue.trim() === '') {
				setIsSelectorValid(true);
				validationTimeoutRef.current = null;
				return;
			}

			try {
				// check if selector matches any elements on the page
				const matches = document.querySelectorAll(inputValue);
				setIsSelectorValid(matches.length > 0);
			} catch (e) {
				// invalid selector syntax
				setIsSelectorValid(false);
			}
			validationTimeoutRef.current = null;
		}, VALIDATION_DEBOUNCE_MS);

		return () => {
			if (validationTimeoutRef.current) {
				clearTimeout(validationTimeoutRef.current);
				validationTimeoutRef.current = null;
			}
		};
	}, [type, inputValue]);

	// element selection handlers for dom-selector type
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

	// refs excluded from dependency array - they don't trigger re-renders
	// early returns prevent unnecessary dom operations
	const handleElementMouseOver = useCallback(
		(e: MouseEvent) => {
			if (type !== 'dom-selector' || activeDomSelector !== selectorId) return;

			const target = e.target as HTMLElement;

			// don't update if hovering over the navigator itself
			if (target.closest('.ss-dom-navigator')) {
				return;
			}

			// prevent hovering over elements within the template editor
			if (target.closest('#searchspring-template-editor')) {
				return;
			}

			const matchedElement = target.closest(elementSelector || '*');

			if (!matchedElement) {
				return;
			}

			// ignore if already hovering the same matched element
			if (lastMatchedElementRef.current === matchedElement) {
				return;
			}

			// At this point we know we'll process the event, prevent default behavior
			e.preventDefault();
			e.stopPropagation();

			// clear any pending hover timeout
			if (hoverTimeoutRef.current) {
				clearTimeout(hoverTimeoutRef.current);
				hoverTimeoutRef.current = null;
			}

			// show overlay immediately for visual feedback
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

			// store hover data for debounced show
			pendingHoverDataRef.current = {
				x: e.clientX,
				y: e.clientY,
				target,
				matchedElement,
			};

			// debounce - wait for mouse to rest before showing navigator
			hoverTimeoutRef.current = window.setTimeout(() => {
				const hoverData = pendingHoverDataRef.current;
				if (!hoverData) return;

				// update the last matched element
				lastMatchedElementRef.current = hoverData.matchedElement;

				// pass exact mouse position to navigator
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

	// refs excluded from dependency array - they don't trigger re-renders
	const handleElementMouseOut = useCallback(
		(e: MouseEvent) => {
			if (type !== 'dom-selector' || activeDomSelector !== selectorId) return;

			const target = e.target as HTMLElement;
			const relatedTarget = e.relatedTarget as HTMLElement;

			// cancel any pending hover timeout
			if (hoverTimeoutRef.current) {
				clearTimeout(hoverTimeoutRef.current);
				hoverTimeoutRef.current = null;
				pendingHoverDataRef.current = null;
			}

			// don't close if moving to the navigator
			if (relatedTarget?.closest('.ss-dom-navigator')) {
				return;
			}

			// don't close if moving to the template editor
			if (relatedTarget?.closest('#searchspring-template-editor')) {
				return;
			}

			// don't close if moving to another element within the same matched element
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

	// setup/cleanup selection mode for dom-selector type
	// only attach event listeners when this specific selector is active
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
							// TODO: Juan - move dom selector to its own component
							case 'dom-selector': {
								// These props are required for dom-selector type
								if (!elementSelector || !selectorId) {
									console.warn('Missing required props for dom-selector type');
									// Fallback to text input
									return <input type="text" value={value as string} onChange={(e) => onChange(e.target.value)} disabled={display === 'disabled'} />;
								}
								return (
									<>
										<div className="dom-selector-container">
											<input
												type="text"
												className={!isSelectorValid ? 'invalid' : ''}
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
										{navigatorState.show && navigatorState.targetElement && (
											<DomSelectorNavigator
												elementSelector={elementSelector}
												onChange={handleNavigatorSelect}
												onClose={handleNavigatorClose}
												x={navigatorState.x}
												y={navigatorState.y}
												targetElement={navigatorState.targetElement}
											/>
										)}
									</>
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
