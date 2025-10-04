import { useEffect, useState, useCallback, useRef } from 'preact/hooks';
import { css, Global } from '@emotion/react';

// Navigation dialog styling matching template editor theme
const navigatorStyles = css`
	.ss-dom-navigator {
		position: fixed;
		background: #f2f6fc;
		border: 1px solid #d0e0f3;
		border-radius: 8px;
		padding: 12px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		z-index: 10003;
		min-width: 280px;
		max-width: 400px;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		font-size: 13px;
		transition: opacity 0.15s ease-in-out;

		.nav-breadcrumb {
			padding: 6px 8px;
			background: #e8f0fc;
			border-radius: 4px;
			margin-bottom: 8px;
			font-size: 11px;
			color: #666;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.nav-tree {
			.nav-section {
				margin: 6px 0;

				.nav-section-label {
					font-size: 10px;
					text-transform: uppercase;
					color: #999;
					margin-bottom: 4px;
					font-weight: 600;
					letter-spacing: 0.5px;
				}

				.nav-items {
					display: flex;
					flex-direction: column;
					gap: 2px;
				}

				.nav-items-scrollable {
					max-height: 150px;
					overflow-y: auto;
					padding-right: 4px;

					/* Custom scrollbar styling */
					&::-webkit-scrollbar {
						width: 6px;
					}

					&::-webkit-scrollbar-track {
						background: #f0f4f8;
						border-radius: 3px;
					}

					&::-webkit-scrollbar-thumb {
						background: #d0e0f3;
						border-radius: 3px;

						&:hover {
							background: #b0d0e8;
						}
					}
				}

				.nav-item {
					padding: 6px 8px;
					background: #fff;
					border: 1px solid #e0e8f3;
					border-radius: 4px;
					cursor: pointer;
					transition: all 0.15s ease-in-out;
					display: flex;
					align-items: center;
					gap: 8px;

					&:hover {
						background: #e8f0fc;
						border-color: #1d4990;
					}

					&.current {
						background: #d8e8fc;
						border-color: #1d4990;
						font-weight: 500;
					}

					&.previewing {
						background: #c8d8ec;
						border-color: #0d3970;
					}

					.nav-item-tag {
						font-weight: 600;
						color: #1d4990;
						font-family: 'Monaco', 'Menlo', monospace;
						font-size: 11px;
					}

					.nav-item-info {
						display: flex;
						gap: 4px;
						flex-wrap: wrap;
						flex: 1;
						min-width: 0;

						.nav-item-id {
							color: #0a7d0a;
							font-family: 'Monaco', 'Menlo', monospace;
							font-size: 11px;
						}

						.nav-item-class {
							color: #a030a0;
							font-family: 'Monaco', 'Menlo', monospace;
							font-size: 11px;
							max-width: 150px;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}

						.nav-item-index {
							color: #999;
							font-size: 10px;
						}
					}
				}
			}
		}

		.nav-footer {
			margin-top: 8px;
			padding-top: 8px;
			border-top: 1px solid #e0e8f3;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 11px;
			color: #666;

			.nav-shortcut {
				display: flex;
				align-items: center;
				gap: 4px;

				kbd {
					padding: 2px 4px;
					background: #fff;
					border: 1px solid #d0e0f3;
					border-radius: 3px;
					font-family: 'Monaco', 'Menlo', monospace;
					font-size: 10px;
				}
			}
		}
	}

	.ss-selector-overlay {
		position: fixed;
		pointer-events: none;
		z-index: 10001;
		transition: all 0.1s ease-in-out;

		&.parent {
			background: rgba(29, 73, 144, 0.15);
			border: 2px solid #5080c0;
		}

		&.current {
			background: rgba(29, 144, 73, 0.2);
			border: 2px solid #1d9044;
		}

		&.child {
			background: rgba(255, 140, 0, 0.15);
			border: 2px solid #ff8c00;
		}

		&.preview {
			background: rgba(144, 29, 73, 0.15);
			border: 2px dashed #901d49;
		}
	}
`;

interface DomSelectorNavigatorProps {
	elementSelector?: string;
	onChange: (selector: string) => void;
	onClose: () => void;
	x: number;
	y: number;
	targetElement: HTMLElement;
}

interface ElementNode {
	element: HTMLElement;
	tag: string;
	id: string;
	classes: string[];
	selector: string;
	index?: number;
	type?: 'parent' | 'current' | 'child';
}

export const DomSelectorNavigator: React.FC<DomSelectorNavigatorProps> = ({ elementSelector, onChange, onClose, x, y, targetElement }) => {
	const [position, setPosition] = useState({ x, y });
	const [hierarchy, setHierarchy] = useState<{
		parents: ElementNode[];
		current: ElementNode | null;
		children: ElementNode[];
	}>({ parents: [], current: null, children: [] });
	const [previewElement, setPreviewElement] = useState<HTMLElement | null>(null);
	const [breadcrumb, setBreadcrumb] = useState<string>('');
	const [selectedIndex, setSelectedIndex] = useState<number>(-1);
	const navigatorRef = useRef<HTMLDivElement>(null);

	// Build element hierarchy
	useEffect(() => {
		if (!targetElement) return;

		const matchedElement = targetElement.closest(elementSelector || '*');
		if (!matchedElement || !(matchedElement instanceof HTMLElement)) return;

		// Get parents (up to 6 levels) - only parents that match elementSelector
		const parents: ElementNode[] = [];
		let searchElement = matchedElement.parentElement;
		let level = 0;
		while (searchElement && level < 6 && searchElement.id !== 'searchspring-template-editor') {
			// Find next parent that matches the selector
			const nextParent = searchElement.closest(elementSelector || '*');
			if (nextParent && nextParent !== matchedElement && nextParent instanceof HTMLElement) {
				const selector = getShortestUniqueSelector(nextParent);
				if (selector) {
					parents.unshift({
						element: nextParent,
						tag: nextParent.tagName.toLowerCase(),
						id: nextParent.id,
						classes: Array.from(nextParent.classList),
						selector,
						type: 'parent',
					});
				}
				// Move to the parent of this matched element to continue searching
				searchElement = nextParent.parentElement;
				level++;
			} else {
				// No more matching parents found
				break;
			}
		}

		// Current element
		const currentSelector = getShortestUniqueSelector(matchedElement);
		const current: ElementNode = {
			element: matchedElement,
			tag: matchedElement.tagName.toLowerCase(),
			id: matchedElement.id,
			classes: Array.from(matchedElement.classList),
			selector: currentSelector || '',
			type: 'current',
		};

		// Get children (up to 6) - only children that match elementSelector
		const children: ElementNode[] = [];
		const matchingChildren = Array.from(matchedElement.querySelectorAll(elementSelector || '*'))
			.filter((child) => child.parentElement === matchedElement) // Only direct children
			.slice(0, 6) as HTMLElement[];

		matchingChildren.forEach((child, index) => {
			const selector = getShortestUniqueSelector(child);
			if (selector) {
				children.push({
					element: child,
					tag: child.tagName.toLowerCase(),
					id: child.id,
					classes: Array.from(child.classList),
					selector,
					index: index + 1,
					type: 'child',
				});
			}
		});

		setHierarchy({ parents, current, children });

		// Build breadcrumb from all found parents
		const breadcrumbParts = [...parents.map((p) => p.tag), current.tag];
		setBreadcrumb(breadcrumbParts.join(' > '));

		// Show overlay for current element when navigator first appears
		if (current) {
			// Clean existing overlays
			const existingOverlays = document.querySelectorAll('.ss-selector-overlay');
			existingOverlays.forEach((el) => el.remove());

			// Create overlay for current element
			const overlay = document.createElement('div');
			overlay.classList.add('ss-selector-overlay', 'current');
			overlay.setAttribute('data-overlay-source', 'navigator-init');
			const rect = current.element.getBoundingClientRect();
			overlay.style.cssText = `
				position: fixed;
				pointer-events: none;
				z-index: 10001;
				background: rgba(29, 144, 73, 0.2);
				border: 2px solid #1d9044;
				width: ${rect.width}px;
				height: ${rect.height}px;
				left: ${rect.left}px;
				top: ${rect.top}px;
				transition: all 0.1s ease-in-out;
			`;
			document.body.appendChild(overlay);
		}
	}, [targetElement, elementSelector]);

	// Smart positioning: place navigator so mouse is directly at one of its corners
	useEffect(() => {
		if (!navigatorRef.current) return;

		const rect = navigatorRef.current.getBoundingClientRect();
		const viewport = {
			width: window.innerWidth,
			height: window.innerHeight,
		};

		// Determine which quadrant the mouse is in
		const isRightHalf = x > viewport.width / 2;
		const isBottomHalf = y > viewport.height / 2;

		// Position navigator so the mouse pointer (x, y) is at the appropriate corner
		// with 10px overlap for better mouse coverage
		let newX = x;
		let newY = y;

		const margin = 20;
		const overlap = 10; // Extra overlap to ensure mouse is well within navigator

		// Horizontal positioning
		if (isRightHalf) {
			// Mouse on right side - place navigator to the LEFT of mouse
			// Mouse will be at the top-right or bottom-right corner
			newX = x - rect.width + overlap;
		} else {
			// Mouse on left side - navigator to the RIGHT of mouse
			// Add overlap to the left
			newX = x - overlap;
		}

		// Vertical positioning
		if (isBottomHalf) {
			// Mouse on bottom half - place navigator ABOVE mouse
			// Mouse will be at the bottom-left or bottom-right corner
			newY = y - rect.height + overlap;
		} else {
			// Mouse on top half - navigator BELOW mouse
			// Add overlap to the top
			newY = y - overlap;
		}

		// Ensure navigator stays within viewport with margins
		if (newX < margin) {
			newX = margin;
		}
		if (newX + rect.width > viewport.width - margin) {
			newX = viewport.width - rect.width - margin;
		}

		if (newY < margin) {
			newY = margin;
		}
		if (newY + rect.height > viewport.height - margin) {
			newY = viewport.height - rect.height - margin;
		}

		setPosition({ x: newX, y: newY });
	}, [x, y]);

	// Handle element preview on hover
	const handleItemHover = useCallback((node: ElementNode | null) => {
		// Remove existing overlays
		const existingOverlays = document.querySelectorAll('.ss-selector-overlay');

		existingOverlays.forEach((el) => {
			el.remove();
		});

		if (!node) {
			setPreviewElement(null);
			return;
		}

		setPreviewElement(node.element);

		// Create overlay for the hovered element with proper styling
		const overlay = document.createElement('div');
		overlay.classList.add('ss-selector-overlay', node.type || 'preview');
		const rect = node.element.getBoundingClientRect();

		// Get color based on type
		let backgroundColor, borderColor;
		if (node.type === 'parent') {
			backgroundColor = 'rgba(29, 73, 144, 0.15)';
			borderColor = '#5080c0';
		} else if (node.type === 'current') {
			backgroundColor = 'rgba(29, 144, 73, 0.2)';
			borderColor = '#1d9044';
		} else if (node.type === 'child') {
			backgroundColor = 'rgba(255, 140, 0, 0.15)';
			borderColor = '#ff8c00';
		} else {
			backgroundColor = 'rgba(144, 29, 73, 0.15)';
			borderColor = '#901d49';
		}

		overlay.style.cssText = `
			position: fixed;
			pointer-events: none;
			z-index: 10001;
			background: ${backgroundColor};
			border: 2px solid ${borderColor};
			width: ${rect.width}px;
			height: ${rect.height}px;
			left: ${rect.left}px;
			top: ${rect.top}px;
			transition: all 0.1s ease-in-out;
		`;
		overlay.setAttribute('data-overlay-source', 'navigator-hover');
		document.body.appendChild(overlay);
	}, []);

	// Handle element selection
	const handleItemSelect = useCallback(
		(node: ElementNode) => {
			if (node.selector) {
				onChange(node.selector);
				onClose();
			}
		},
		[onChange, onClose]
	);

	// Create flattened list of all nodes for keyboard navigation
	const allNodes = [...hierarchy.parents, ...(hierarchy.current ? [hierarchy.current] : []), ...hierarchy.children];

	// Handle keyboard navigation
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				e.preventDefault();
				e.stopPropagation();
				onClose();
			} else if (e.key === 'ArrowDown') {
				e.preventDefault();
				e.stopPropagation();
				setSelectedIndex((prev) => {
					const newIndex = Math.min(prev + 1, allNodes.length - 1);
					if (newIndex >= 0 && allNodes[newIndex]) {
						handleItemHover(allNodes[newIndex]);
					}
					return newIndex;
				});
			} else if (e.key === 'ArrowUp') {
				e.preventDefault();
				e.stopPropagation();
				setSelectedIndex((prev) => {
					const newIndex = Math.max(prev - 1, -1);
					if (newIndex >= 0 && allNodes[newIndex]) {
						handleItemHover(allNodes[newIndex]);
					} else {
						handleItemHover(null);
					}
					return newIndex;
				});
			} else if (e.key === 'Enter' && selectedIndex >= 0 && allNodes[selectedIndex]) {
				e.preventDefault();
				e.stopPropagation();
				handleItemSelect(allNodes[selectedIndex]);
			}
		};

		document.addEventListener('keydown', handleKeyDown, true);
		return () => {
			document.removeEventListener('keydown', handleKeyDown, true);
		};
	}, [onClose, selectedIndex, allNodes, handleItemHover, handleItemSelect]);

	// Cleanup overlays ONLY when component unmounts (not on every re-render)
	useEffect(() => {
		return () => {
			document.querySelectorAll('.ss-selector-overlay').forEach((el) => el.remove());
		};
	}, []);

	const renderElementNode = (node: ElementNode, index: number) => {
		const isPreview = previewElement === node.element;
		const isKeyboardSelected = selectedIndex === index;
		return (
			<div
				className={`nav-item ${node.type === 'current' ? 'current' : ''} ${isPreview || isKeyboardSelected ? 'previewing' : ''}`}
				onMouseEnter={() => {
					handleItemHover(node);
					setSelectedIndex(index);
				}}
				onMouseLeave={(e) => {
					// Only clear if we're truly leaving the nav-item (not moving to child element)
					const relatedTarget = e.relatedTarget as HTMLElement;
					if (!relatedTarget || !e.currentTarget.contains(relatedTarget)) {
						handleItemHover(null);
						setSelectedIndex(-1);
					}
				}}
				onClick={() => handleItemSelect(node)}
			>
				<span className="nav-item-tag">&lt;{node.tag}&gt;</span>
				<span className="nav-item-info">
					{node.id && <span className="nav-item-id">#{node.id}</span>}
					{node.classes.length > 0 && <span className="nav-item-class">.{node.classes[0]}</span>}
					{node.index && <span className="nav-item-index">({node.index})</span>}
				</span>
			</div>
		);
	};

	return (
		<>
			<Global styles={navigatorStyles} />
			<div
				ref={navigatorRef}
				className="ss-dom-navigator"
				style={{
					left: `${position.x}px`,
					top: `${position.y}px`,
				}}
			>
				<div className="nav-breadcrumb" title={breadcrumb}>
					{breadcrumb}
				</div>

				<div className="nav-tree">
					{hierarchy.parents.length > 0 && (
						<div className="nav-section">
							<div className="nav-section-label">Parent Elements</div>
							<div className="nav-items nav-items-scrollable">{hierarchy.parents.map((node, i) => renderElementNode(node, i))}</div>
						</div>
					)}

					{hierarchy.current && (
						<div className="nav-section">
							<div className="nav-section-label">Current Element</div>
							<div className="nav-items">{renderElementNode(hierarchy.current, hierarchy.parents.length)}</div>
						</div>
					)}

					{hierarchy.children.length > 0 && (
						<div className="nav-section">
							<div className="nav-section-label">Child Elements</div>
							<div className="nav-items nav-items-scrollable">
								{hierarchy.children.map((node, i) => renderElementNode(node, hierarchy.parents.length + (hierarchy.current ? 1 : 0) + i))}
							</div>
						</div>
					)}
				</div>

				<div className="nav-footer">
					<div className="nav-shortcut">
						<kbd>↑↓</kbd>
						<span>navigate</span>
					</div>
					<div className="nav-shortcut">
						<kbd>Enter</kbd>
						<span>select</span>
					</div>
					<div className="nav-shortcut">
						<kbd>ESC</kbd>
						<span>cancel</span>
					</div>
				</div>
			</div>
		</>
	);
};

// Helper function to get the shortest unique selector for an element
export function getShortestUniqueSelector(el: Element | null): string | null {
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
