import { h } from 'preact';

import { css, Global } from '@emotion/react';
import classnames from 'classnames';
import { useCallback, useEffect, useState } from 'preact/hooks';
import { ComponentProps, RootNodeProperties } from '../../../types';
import { ChromePicker } from 'react-color';
import { Icon } from '../../Atoms/Icon/Icon';
import { Button } from '../../Atoms/Button';
import { observer } from 'mobx-react-lite';
import { debounce } from '@searchspring/snap-toolbox';
import { CacheProvider } from '../../../providers';
import { GLOBAL_THEME_NAME } from '../../../../../src/Templates/Stores/TargetStore';

const CSS = {
	ColorDisplay: ({ color, isColorPickerVisible }: any) =>
		css({
			backgroundColor: color,
			border: isColorPickerVisible ? '1px solid black' : '',
		}),
	TemplatesEditor: ({}: Partial<TemplatesEditorProps>) =>
		css({
			display: 'flex',
			flexDirection: 'column',
			width: '420px',
			overflow: 'hidden',
			fontSize: '14px',
			position: 'fixed',
			zIndex: '10003',
			cursor: 'auto',
			top: '10px',
			right: 0,
			background: 'white',
			padding: '10px',
			color: '#333',
			border: '1px solid #ccc',
			borderRight: 0,
			borderTopLeftRadius: '5px',
			borderBottomLeftRadius: '5px',
			boxShadow: 'rgba(81, 81, 81, 0.5) 1px 1px 3px 0px',
			transition: 'height ease 0.2s, right ease 0.5s 0.2s',

			'&.collapsed': {
				right: '-400px',
				transition: 'height ease 0.5s 0.5s, right ease 0.5s',
				height: '33px',
				cursor: 'pointer',
			},

			'& .logo': {
				'& img': {
					display: 'inline-block',
					height: '30px',
					maxHeight: '30px',
					verticalAlign: 'middle',
				},
			},

			'& input, select, option, optgroup, button, h1, h2, h3, h4, h5, h6, i': {
				all: 'revert',
			},

			'& h1': { fontSize: '20px' },
			'& h2': { fontSize: '18px' },
			'& h3': { fontSize: '16px' },
			'& h4': { fontSize: '14px' },
			'& h5': { fontSize: '12px' },
			'& h6': { fontSize: '10px' },

			'& .header-actions': {
				cursor: 'pointer',
				position: 'absolute',
				right: 15,
				top: 15,

				'& .ss__button': {
					margin: '0 10px',
				},
			},

			'& .section': {
				marginBottom: '10px',
				fontSize: '14px',

				'& input + span': {
					marginLeft: '10px',
				},

				'& label': {
					width: '215px',
					display: 'inline-flex',
					marginRight: '5px',
				},

				'& .indent': {
					marginLeft: '15px',
					'& label': {
						width: '200px',
					},
				},

				'& .theme-editor': {
					padding: '5px 0',
					position: 'relative',

					'& .chrome-picker': {
						position: 'absolute',
						zIndex: 2,
						left: 'calc(225px / 2)',
						bottom: '35px',
					},
					'& .color-preview': {
						display: 'inline-flex',
						width: '40px',
						height: '20px',
						borderRadius: '3px',
						cursor: 'pointer',
						boxShadow: 'rgba(81, 81, 81, 0.5) 1px 1px 3px 0px',
						verticalAlign: 'middle',
					},
					'& .color-value': {
						display: 'inline-flex',
						padding: '0 10px',
					},
				},
			},
		}),
};

export const TemplatesEditor = observer((properties: TemplatesEditorProps): JSX.Element => {
	const { onRemoveClick, templatesStore } = properties;
	const searchTargets = Object.keys(templatesStore.targets.search || {}).map((target) => ({
		type: 'search',
		target,
		template: templatesStore.targets.search[target],
		selector: templatesStore.targets.search[target].selector,
	}));
	const autocompleteTargets = Object.keys(templatesStore.targets.autocomplete || {}).map((target) => ({
		type: 'autocomplete',
		target,
		template: templatesStore.targets.autocomplete[target],
		selector: templatesStore.targets.autocomplete[target].selector,
	}));
	const recommendationBundleTargets = Object.keys(templatesStore.targets.recommendation.bundle || {}).map((target) => ({
		type: 'recommendation/bundle',
		target,
		template: templatesStore.targets.recommendation.bundle[target],
		selector: templatesStore.targets.recommendation.bundle[target].selector,
	}));
	const recommendationDefaultTargets = Object.keys(templatesStore.targets.recommendation.default || {}).map((target) => ({
		type: 'recommendation/default',
		target,
		template: templatesStore.targets.recommendation.default[target],
		selector: templatesStore.targets.recommendation.default[target].selector,
	}));
	const recommendationEmailTargets = Object.keys(templatesStore.targets.recommendation.email || {}).map((target) => ({
		type: 'recommendation/email',
		target,
		template: templatesStore.targets.recommendation.email[target],
		selector: templatesStore.targets.recommendation.email[target].selector,
	}));
	const targets = [
		...searchTargets,
		...autocompleteTargets,
		...recommendationBundleTargets,
		...recommendationDefaultTargets,
		...recommendationEmailTargets,
	];

	const [collapsed, setCollapsed] = useState(false);
	const [selectedTarget, changeTargetSelection] = useState(targets[0]);
	const [selectedLanguage, changeLanguage] = useState(templatesStore.language);
	const [selectedCurrency, changeCurrency] = useState(templatesStore.currency);

	const styling: RootNodeProperties = {
		css: [CSS.TemplatesEditor({ ...properties })],
	};

	const { library } = templatesStore;
	const { languages, currencies } = library.locales;
	const languageKeys = Object.keys(languages);
	const currencyKeys = Object.keys(currencies);
	const libraryThemes = Object.keys(templatesStore.themes.library || {});
	const lcoalThemes = Object.keys(templatesStore.themes.local || {}).sort((a, b) => {
		if (a === GLOBAL_THEME_NAME) return -1;
		if (b === GLOBAL_THEME_NAME) return 1;
		return 0;
	});
	const selectedTargetConfig = templatesStore.getTarget(selectedTarget.type, selectedTarget.target);

	const themeRef = templatesStore.themes[selectedTarget.template.theme.location][selectedTarget.template.theme.name];
	const theme = themeRef.theme;

	const setOverride = debounce((obj: { themeName: string; path: string[]; rootEditingKey: string; value: string }) => {
		themeRef.setOverride(obj);
	}, 10);

	const [isColorPickerVisible, setColorPickerVisible] = useState(false);

	const [currentSelector, setCurrentSelector] = useState(''); // three possible selectors
	const [contentSelector, setContentSelector] = useState('');
	const [componentSelector, setComponentSelector] = useState('');
	const [autocompleteSelector, setAutocompleteSelector] = useState('');

	return (
		<CacheProvider>
			<div
				className={classnames('ss__template-editor', { collapsed: collapsed })}
				{...styling}
				onClick={(e) => {
					e.preventDefault();
					e.stopPropagation();
					setCollapsed(false);

					if (isColorPickerVisible && !(e.target as HTMLDivElement).className.includes('color-preview')) {
						setColorPickerVisible(false);
					}
				}}
			>
				<div className={'logo'}>
					<img src="https://snapui.searchspring.io/searchspring.svg" />
				</div>

				<div
					className={'header-actions'}
					onClick={(e) => {
						e.preventDefault();
						e.stopPropagation();
						setCollapsed(true);
					}}
				>
					<Button
						onClick={() => {
							onRemoveClick();
						}}
					>
						Stop Editing
					</Button>
					<span
						onClick={() => {
							setCollapsed(true);
						}}
					>
						<Icon icon="close-thin" />
					</span>
				</div>

				{!collapsed ? (
					<Global
						styles={css`
							.ss-overlay {
								position: fixed;
								top: 0;
								left: 0;
								background-color: rgba(58, 35, 173, 0.5);
								pointer-events: none;
								z-index: 1000;
							}
							.ss-tooltip {
								position: fixed;
								background-color: white;
								border: 2px solid #3a23ad;
								padding: 10px 15px;
								max-width: 300px;
								min-width: 200px;
								max-height: 500px;
								overflow: auto;
								pointer-events: none;
								box-sizing: border-box;
								z-index: 1000;
								opacity: 1;
								box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
								label {
									display: block;
									margin-bottom: 5px;
								}
								br {
									margin: 5px 0;
								}
							}
						`}
					/>
				) : (
					''
				)}

				<h2>Global</h2>
				<div className="section">
					<label htmlFor="language-select">Language: </label>
					<select
						id="language-select"
						onChange={(e) => {
							const { selectedIndex, options } = e.currentTarget;
							const selectedOption = options[selectedIndex];
							const language = selectedOption.value;

							changeLanguage(language);
							templatesStore.setLanguage(language);
						}}
					>
						{languageKeys.map((language: string) => {
							return <option selected={language === selectedLanguage}>{language}</option>;
						})}
					</select>
				</div>

				<div className="section">
					<label htmlFor="currency-select">Currency: </label>
					<select
						id="currency-select"
						onChange={(e) => {
							const { selectedIndex, options } = e.currentTarget;
							const selectedOption = options[selectedIndex];
							const currency = selectedOption.value;

							changeCurrency(currency);
							templatesStore.setCurrency(currency);
						}}
					>
						{currencyKeys.map((currency: string) => {
							return <option selected={currency === selectedCurrency}>{currency}</option>;
						})}
					</select>
				</div>

				<h2>Template</h2>
				<div className="section">
					<label htmlFor="target-select">Template Target: </label>
					<select
						id="target-select"
						onChange={(e) => {
							const { selectedIndex, options } = e.currentTarget;
							const selectedOption = options[selectedIndex];
							const targetId = selectedOption.value;
							const optgroup = selectedOption.closest('optgroup');
							const controller = optgroup?.label;
							const newTarget = targets.find((target) => target.target === targetId && target.type === controller);
							if (newTarget) {
								changeTargetSelection(newTarget);
							}
						}}
					>
						{searchTargets && (
							<optgroup label="search">
								{searchTargets.map((target) => (
									<option>{target.target}</option>
								))}
							</optgroup>
						)}
						{autocompleteTargets && (
							<optgroup label="autocomplete">
								{autocompleteTargets.map((target) => (
									<option>{target.target}</option>
								))}
							</optgroup>
						)}
						{recommendationBundleTargets && (
							<optgroup label="recommendation/bundle">
								{recommendationBundleTargets.map((target) => (
									<option>{target.target}</option>
								))}
							</optgroup>
						)}
						{recommendationDefaultTargets && (
							<optgroup label="recommendation/default">
								{recommendationDefaultTargets.map((target) => (
									<option>{target.target}</option>
								))}
							</optgroup>
						)}
						{recommendationEmailTargets && (
							<optgroup label="recommendation/email">
								{recommendationEmailTargets.map((target) => (
									<option>{target.target}</option>
								))}
							</optgroup>
						)}
					</select>
				</div>

				<div className="section">
					<label htmlFor="template-select">Template Component: </label>
					<select
						id="template-select"
						onChange={(e) => {
							const { selectedIndex, options } = e.currentTarget;
							const selectedOption = options[selectedIndex];
							const selectedTemplate = selectedOption.value;
							const target = templatesStore.getTarget(selectedTarget.type, selectedTarget.target);
							target?.setComponent(selectedTemplate);
						}}
					>
						{Object.keys({
							...(selectedTarget.type.startsWith('recommendation/')
								? { ...library.components.recommendation[selectedTarget.type.split('/')[1]] }
								: { ...library.components[selectedTarget.type] }),
						}).map((componentName: string) => {
							return <option selected={componentName === selectedTarget.template.component}>{componentName}</option>;
						})}
					</select>
				</div>

				<div className="section">
					<label htmlFor="result-select">Result Component: </label>
					<select
						id="result-select"
						onChange={(e) => {
							const { selectedIndex, options } = e.currentTarget;
							const selectedOption = options[selectedIndex];
							const selectedTemplate = selectedOption.value;
							const target = templatesStore.getTarget(selectedTarget.type, selectedTarget.target);
							target?.setResultComponent(selectedTemplate);
						}}
					>
						{Object.keys(library.components.result || {}).map((componentName: string) => {
							return <option selected={componentName === selectedTarget.template.resultComponent}>{componentName}</option>;
						})}
					</select>
				</div>

				<div className="section">
					<label htmlFor="theme-select">Theme: </label>
					<select
						id="theme-select"
						onChange={(e) => {
							const { selectedIndex, options } = e.currentTarget;
							const selectedOption = options[selectedIndex];
							const selectedTheme = selectedOption.value;
							const type = selectedOption.closest('optgroup')?.label;
							const target = templatesStore.getTarget(selectedTarget.type, selectedTarget.target);
							target?.setTheme(selectedTheme, type);
						}}
					>
						<optgroup label="library">
							{libraryThemes.map((libraryTheme) => (
								<option selected={selectedTargetConfig.theme.location === 'library' && selectedTargetConfig.theme.name === libraryTheme}>
									{libraryTheme}
								</option>
							))}
						</optgroup>
						<optgroup label="local">
							{lcoalThemes.map((localTheme) => (
								<option selected={selectedTargetConfig.theme.location === 'local' && selectedTargetConfig.theme.name === localTheme}>
									{localTheme}
								</option>
							))}
						</optgroup>
					</select>
				</div>

				<h2>Theme variables ({selectedTargetConfig.theme.name})</h2>
				<div className="section">
					{theme?.variables && (
						<ThemeEditor
							property={theme?.variables}
							rootEditingKey={'variables'}
							themeName={selectedTarget.template.theme.name}
							setOverride={setOverride}
							isColorPickerVisible={isColorPickerVisible}
							setColorPickerVisible={setColorPickerVisible}
						/>
					)}
				</div>

				<h2>Find SS-Path Element: </h2>
				<div className="section">
					<span>Current autocompleteSelector: {autocompleteSelector}</span>
					<DomSelector
						elementSelector={'input[type="text"]'}
						onSelectHandler={(elemSelector: any) => setAutocompleteSelector(elemSelector)}
						type="autocomplete"
						currentSelector={currentSelector}
						setCurrentSelector={setCurrentSelector}
					/>
					<span>Current contentSelector: {contentSelector}</span>
					<DomSelector
						elementSelector={'div, section, article, aside'}
						onSelectHandler={(elemSelector: any) => setContentSelector(elemSelector)}
						type="content"
						currentSelector={currentSelector}
						setCurrentSelector={setCurrentSelector}
					/>
					<span>Current componentSelector: {componentSelector}</span>
					<DomSelector
						elementSelector={'[ss-path]'}
						onSelectHandler={(elemSelector: any) => setComponentSelector(elemSelector)}
						type="component"
						currentSelector={currentSelector}
						setCurrentSelector={setCurrentSelector}
					/>
				</div>
			</div>
		</CacheProvider>
	);
});

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

export interface TemplatesEditorProps extends ComponentProps {
	onRemoveClick: () => void;
	templatesStore: any;
}

const DomSelector = (props: any) => {
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

const ThemeEditor = (props: any): any => {
	const pathPrefix: any = props.pathPrefix || [];
	const path = [...pathPrefix, props?.propertyName].filter((a) => a);
	const themeName = props.themeName;
	const setOverride = props.setOverride;
	const rootEditingKey = props.rootEditingKey;

	const setColorPickerVisible = props.setColorPickerVisible;
	const isColorPickerVisible = props.isColorPickerVisible;
	const [colorBeingEdited, setColorBeingEdited] = useState('');

	if (!props?.property || Array.isArray(props.property) || typeof props.property === 'number' || typeof props.property === 'boolean') {
		// ignore arrays, numbers, and booleans
		return null;
	}

	if (typeof props.property === 'object') {
		// object means we need to recurse until we get to the primitives
		return Object.values(props.property).map((property, index) => {
			return (
				<ThemeEditor
					key={index}
					property={property}
					rootEditingKey={rootEditingKey}
					themeName={themeName}
					setOverride={setOverride}
					propertyName={Object.getOwnPropertyNames(props.property)[index]}
					pathPrefix={[...pathPrefix, props.propertyName]}
					isColorPickerVisible={isColorPickerVisible}
					setColorPickerVisible={setColorPickerVisible}
				/>
			);
		});
	} else if (typeof props.property === 'string') {
		const value = props.property.toString();
		const key = path.join('.');
		if (path.includes('colors')) {
			return (
				<div className={classnames('theme-editor')}>
					<label>{key}: </label>
					<div
						className={'color-preview'}
						css={CSS.ColorDisplay({ color: value, isColorPickerVisible })}
						onClick={() => {
							setColorPickerVisible('');
							if (isColorPickerVisible !== key) {
								setColorPickerVisible(key);
								setColorBeingEdited(value);
							}
						}}
					></div>
					<div className={'color-value'}>{value}</div>
					{isColorPickerVisible == key && (
						<ChromePicker
							color={colorBeingEdited}
							onChange={(color) => {
								setColorBeingEdited(color.hex);
								setOverride({
									themeName,
									path,
									rootEditingKey,
									value: color.hex,
								});
							}}
						/>
					)}
				</div>
			);
		}
	}
};
