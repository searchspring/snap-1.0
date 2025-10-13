import { observer } from 'mobx-react-lite';
import { useState, useEffect, useCallback, useRef } from 'preact/hooks';
import { css } from '@emotion/react';
import { ControlDisplayState, ControlValues } from '../../../../../../src/types';
import { DomSelectorIcon } from '../Assets';
import { DomSelectorNavigator, getShortestUniqueSelector } from './DomSelectorNavigator';

// dom selector constants
const HOVER_DEBOUNCE_MS = 600; // time to wait before showing navigator on hover
const OVERLAY_Z_INDEX = 10001; // z-index for selector overlay

// css-in-js styles using emotion's object syntax
const CSS = {
	DomSelectorControl: () =>
		css({
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
		}),
};

// stores pending hover data for debounced navigator display
interface PendingHoverData {
	x: number;
	y: number;
	target: HTMLElement;
	matchedElement: Element;
}

export interface DomSelectorControlProps {
	value: ControlValues;
	onChange: (value: ControlValues) => void;
	display: ControlDisplayState;

	// dom selector specific props
	activeDomSelector?: string;
	setActiveDomSelector?: (selector: string) => void;
	selectorId?: string;
	elementSelector?: string;

	// control object and data for validation
	control?: any;
	data?: any;
}

export const DomSelectorControl = observer((props: DomSelectorControlProps) => {
	const { value, onChange, display, activeDomSelector, setActiveDomSelector, selectorId, elementSelector, control, data } = props;

	const [inputValue, setInputValue] = useState(value);
	const [isSelecting, setIsSelecting] = useState(false);
	const [navigatorState, setNavigatorState] = useState<{
		show: boolean;
		x: number;
		y: number;
		targetElement: HTMLElement | null;
	}>({ show: false, x: 0, y: 0, targetElement: null });
	const lastMatchedElementRef = useRef<Element | null>(null);
	const hoverTimeoutRef = useRef<number | null>(null);
	const pendingHoverDataRef = useRef<PendingHoverData | null>(null);

	useEffect(() => {
		setInputValue(value);
	}, [value]);

	// sync isSelecting state with activeDomSelector changes
	useEffect(() => {
		if (selectorId) {
			setIsSelecting(activeDomSelector === selectorId);
		}
	}, [activeDomSelector, selectorId]);

	// compute validation state directly from control.isValid
	const isSelectorValid = control?.isValid ? Boolean(control.isValid(data)) : true;

	// element selection handlers for dom-selector type
	const handleElementClick = useCallback(
		(e: MouseEvent) => {
			if (activeDomSelector !== selectorId) return;

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
		[activeDomSelector, selectorId, elementSelector, onChange, setActiveDomSelector]
	);

	// refs excluded from dependency array - they don't trigger re-renders
	// early returns prevent unnecessary dom operations
	const handleElementMouseOver = useCallback(
		(e: MouseEvent) => {
			if (activeDomSelector !== selectorId) return;

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
		[activeDomSelector, selectorId, elementSelector]
	);

	// refs excluded from dependency array - they don't trigger re-renders
	const handleElementMouseOut = useCallback(
		(e: MouseEvent) => {
			if (activeDomSelector !== selectorId) return;

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
		[activeDomSelector, selectorId, elementSelector]
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
			if (e.key === 'Escape' && isSelecting) {
				e.preventDefault();
				e.stopPropagation();
				if (setActiveDomSelector) {
					setActiveDomSelector('');
				}
				setIsSelecting(false);
				cleanupSelection();
			}
		},
		[isSelecting, setActiveDomSelector]
	);

	// setup/cleanup selection mode for dom-selector type
	// only attach event listeners when this specific selector is active
	useEffect(() => {
		if (isSelecting && activeDomSelector === selectorId) {
			document.addEventListener('click', handleElementClick, true);
			document.addEventListener('mouseover', handleElementMouseOver, true);
			document.addEventListener('mouseout', handleElementMouseOut, true);
			document.addEventListener('keydown', handleEscape, true);

			return () => {
				cleanupSelection();
				document.removeEventListener('keydown', handleEscape, true);
			};
		} else {
			cleanupSelection();
		}
	}, [isSelecting, activeDomSelector, selectorId, handleElementClick, handleElementMouseOver, handleElementMouseOut, handleEscape]);

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

	return (
		<>
			<div className="dom-selector-container" css={CSS.DomSelectorControl()}>
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
});
