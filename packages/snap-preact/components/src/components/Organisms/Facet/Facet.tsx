import { h, Fragment } from 'preact';

import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';

import { FacetListOptions, FacetListOptionsProps } from '../../Molecules/FacetListOptions';
import { FacetGridOptions, FacetGridOptionsProps } from '../../Molecules/FacetGridOptions';
import { FacetPaletteOptions, FacetPaletteOptionsProps } from '../../Molecules/FacetPaletteOptions';
import { FacetHierarchyOptions, FacetHierarchyOptionsProps } from '../../Molecules/FacetHierarchyOptions';
import { FacetSlider, FacetSliderProps } from '../../Molecules/FacetSlider';
import { SearchInput, SearchInputProps } from '../../Molecules/SearchInput';
import { Icon, IconProps, IconType } from '../../Atoms/Icon';
import { Dropdown, DropdownProps } from '../../Atoms/Dropdown';
import { ComponentProps, FacetDisplay, StyleScript } from '../../../types';
import type { ValueFacet, RangeFacet, FacetHierarchyValue, FacetValue, FacetRangeValue } from '@searchspring/snap-store-mobx';

import { defined, cloneWithProps, mergeProps, mergeStyles } from '../../../utilities';
import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { useA11y } from '../../../hooks/useA11y';
// import { FacetToggle, FacetToggleProps } from '../../Molecules/FacetToggle';
import { Lang, useLang } from '../../../hooks';
import deepmerge from 'deepmerge';
import { Button, ButtonProps } from '../../Atoms/Button';
import { useState } from 'preact/hooks';
import { useEffect } from 'react';

const defaultStyles: StyleScript<FacetProps> = ({ disableCollapse, color, theme }) => {
	return css({
		width: '100%',
		margin: '0 0 20px 0',
		'& .ss__facet__header': {
			cursor: disableCollapse ? undefined : 'pointer',
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			color: color || theme?.variables?.colors?.primary,
			border: 'none',
			borderBottom: `2px solid ${theme?.variables?.colors?.secondary || '#ccc'}`,
			padding: '6px 0',

			'& .ss__facet__header__inner': {
				display: 'flex',
			},
		},

		'& .ss__facet__header__clear-all': {
			cursor: 'pointer',
			display: 'flex',
			alignItems: 'center',
			marginLeft: '10px',
			border: 'none',
			padding: '0',
			color: color || theme?.variables?.colors?.primary,
			'&:hover': {
				textDecoration: 'underline',
			},
			'& .ss__icon': {
				marginLeft: '5px',
			},
		},

		'& .ss__facet__options': {
			marginTop: '8px',
			maxHeight: '300px',
			overflowY: 'auto',
			overflowX: 'hidden',
		},
		'& .ss__facet__show-more-less': {
			display: 'block',
			margin: '8px',
			cursor: 'pointer',
			'& .ss__icon': {
				marginRight: '8px',
			},
		},
		'& .ss__search-input': {
			margin: '16px 0 0 0',
		},
		'& .ss__facet__header__selected-count': {
			margin: '0px 5px',
		},
	});
};

export const Facet = observer((properties: FacetProps): JSX.Element => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();
	const defaultProps: Partial<FacetProps> = {
		limit: 12,
		disableOverflow: false,
		iconCollapse: 'angle-up',
		iconExpand: 'angle-down',
		showMoreText: 'Show More',
		showLessText: 'Show Less',
		iconOverflowMore: 'plus',
		iconOverflowLess: 'minus',
		clearAllText: 'Clear All',
		searchable: false,
		treePath: globalTreePath,
	};

	let props = mergeProps('facet', globalTheme, defaultProps, properties);

	//manual props override on a per facet display type level using the display prop
	if (props.display && props.display[props.facet?.display]) {
		props = {
			...props,
			...props.display[props.facet?.display],
		};
	}

	//manual props override on a per facet field type level using the fields prop
	if (props.fields && props.fields[props.facet?.field]) {
		props = {
			...props,
			...props.fields[props.facet?.field],
		};
	}

	const {
		disableCollapse,
		facet,
		iconCollapse,
		iconExpand,
		limit,
		statefulOverflow,
		disableOverflow,
		iconColor,
		color,
		previewOnFocus,
		valueProps,
		showSelectedCount,
		hideSelectedCountParenthesis,
		clearAllIcon,
		showClearAllText,
		justContent,
		horizontal,
		disableStyles,
		className,
		internalClassName,
		treePath,
	} = props;

	const subProps: FacetSubProps = {
		dropdown: {
			// default props
			internalClassName: 'ss__facet__dropdown',
			disableClickOutside: true,
			disableOverlay: true,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
		icon: {
			// default props
			internalClassName: 'ss__facet__dropdown__icon',
			size: '12px',
			color: iconColor || color,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
		button: {
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
		showMoreLessIcon: {
			// default props
			internalClassName: 'ss__facet__show-more-less__icon',
			size: '10px',
			color: iconColor || color,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
		facetHierarchyOptions: {
			// default props
			internalClassName: 'ss__facet__facet-hierarchy-options',
			// inherited props
			...defined({
				disableStyles,
				previewOnFocus,
				valueProps,
				horizontal,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
		facetListOptions: {
			// default props
			internalClassName: 'ss__facet__facet-list-options',
			// inherited props
			...defined({
				disableStyles,
				previewOnFocus,
				valueProps,
				horizontal,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
		facetGridOptions: {
			// default props
			internalClassName: 'ss__facet__facet-grid-options',
			// inherited props
			...defined({
				disableStyles,
				previewOnFocus,
				valueProps,
				horizontal,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
		facetPaletteOptions: {
			// default props
			internalClassName: 'ss__facet__facet-palette-options',
			// inherited props
			...defined({
				disableStyles,
				previewOnFocus,
				valueProps,
				horizontal,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
		// facetToggle: {
		// 	// default props
		// 	className: 'ss__facet__facet-toggle',
		// 	// inherited props
		// 	...defined({
		// 		disableStyles,
		// 	}),
		// 	// component theme overrides
		// 	theme: props?.theme,
		// 	treePath,
		// },
		facetSlider: {
			// default props
			internalClassName: 'ss__facet__facet-slider',
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
		searchInput: {
			// default props
			internalClassName: 'ss__facet__search-input',
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
	};

	let limitedValues: Array<FacetHierarchyValue | FacetValue | FacetRangeValue | undefined>;

	type overflowStateType = {
		enabled: boolean;
		limited: boolean;
		limit: number;
		remaining: number | undefined;
		setLimit: (limit: number) => void;
		toggle: (val?: boolean) => void;
		calculate: () => void;
	};

	function escapeRegExp(string: string) {
		return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
	}

	const [overflowState, setOverflowState] = useState<overflowStateType | undefined>();

	useEffect(() => {
		if (statefulOverflow) {
			const interalOverflow: {
				enabled: boolean;
				limited: boolean;
				limit: number;
				remaining: number | undefined;
				setLimit: (limit: number) => void;
				toggle: (val?: boolean) => void;
				calculate: () => void;
			} = {
				enabled: false,
				limited: true,
				limit: 0,
				remaining: undefined,
				setLimit: function (limit: number) {
					if (limit != this.limit) {
						this.enabled = true;
						this.limit = limit;
						this.calculate();
					}
				},
				toggle: function (val?: boolean) {
					if (typeof val != 'undefined') {
						this.limited = val;
					} else {
						this.limited = !this.limited;
					}

					this.calculate();
				},
				calculate: function () {
					if (this.limit > 0) {
						const remaining = (facet as ValueFacet)?.values?.length - this.limit;

						if (remaining > 0 && !(facet as ValueFacet)?.search?.input) {
							this.enabled = true;

							if (this.limited) {
								this.remaining = remaining;
							} else {
								this.remaining = 0;
							}
						} else {
							this.enabled = false;
						}
					}

					setOverflowState({ ...this });
				},
			};

			setOverflowState(interalOverflow);
		} else {
			setOverflowState((facet as ValueFacet).overflow || undefined);
		}
	}, []);

	if (overflowState && limit && Number.isInteger(limit) && !disableOverflow) {
		overflowState?.setLimit(limit);

		if (statefulOverflow) {
			let values = (facet as ValueFacet)?.values || [];

			if ((facet as ValueFacet)?.search?.input) {
				const search = new RegExp(escapeRegExp((facet as ValueFacet)?.search?.input), 'i');
				values = (facet as ValueFacet)?.values.filter((value) => String(value?.label || '').match(search));
			}

			if (overflowState.enabled && overflowState.limited) {
				values = values.slice(0, overflowState.limit);
			}

			limitedValues = values;
		} else {
			limitedValues = (facet as ValueFacet)?.refinedValues;
		}
	} else if (overflowState && Number.isInteger(limit)) {
		limitedValues = (facet as ValueFacet)?.values.slice(0, limit);
	} else {
		limitedValues = (facet as ValueFacet)?.values;
	}

	const styling = mergeStyles<FacetProps>(props, defaultStyles);

	// Search within facet
	const searchableFacet = {
		allowableTypes: properties.treePath?.includes('autocomplete') ? [] : ['list', 'grid', 'palette'],
		searchFilter: (e: React.ChangeEvent<HTMLInputElement>) => {
			if ((facet as ValueFacet)?.search) {
				(facet as ValueFacet).search.input = e.target.value;
			}
		},
	};

	let renderFacet = true;
	if (facet.display == FacetDisplay.TOGGLE && facet && (facet as ValueFacet)?.values.length !== 1) {
		renderFacet = false;
	}

	const facetContentProps = {
		limitedValues,
		overflowState,
		searchableFacet,
		subProps,
		className,
		internalClassName,
		...props,
	};

	//initialize lang
	const defaultLang = {
		showMoreText: {
			value: facetContentProps.showMoreText,
		},
		showLessText: {
			value: facetContentProps.showLessText,
		},
		dropdownButton: {
			attributes: {
				'aria-label': `currently ${facet?.collapsed ? 'collapsed' : 'open'} ${facet.label} facet dropdown ${
					(facet as ValueFacet).values?.length ? (facet as ValueFacet).values?.length + ' options' : ''
				}`,
			},
		},
		clearAllText: {
			value: facetContentProps.clearAllText,
		},
	};

	//deep merge with props.lang
	const lang = deepmerge(defaultLang, props.lang || {});
	const mergedLang = useLang(lang as any, {
		facet,
	});
	facetContentProps.lang = mergedLang;

	const selectedCount = (facet as ValueFacet)?.values?.filter((value) => value?.filtered).length;

	return facet && renderFacet ? (
		<CacheProvider>
			<div
				{...styling}
				className={classnames(
					'ss__facet',
					`ss__facet--${facet.field}`,
					`${facet.collapsed ? 'ss__facet--collapsed' : ''}`,
					className,
					internalClassName,
					`${facet.display ? `ss__facet--${facet.display}` : ''}`,
					overflowState && overflowState?.enabled && !overflowState?.remaining ? 'ss__facet--showing-all' : ''
				)}
			>
				{justContent ? (
					<FacetContent {...facetContentProps}></FacetContent>
				) : (
					<Dropdown
						{...subProps.dropdown}
						open={disableCollapse || !facet?.collapsed}
						onClick={() => !disableCollapse && facet.toggleCollapse && facet?.toggleCollapse()}
						disableA11y={true}
						button={
							<div
								className="ss__facet__header"
								ref={(e) => useA11y(e, disableCollapse ? -1 : 0)}
								role="heading"
								aria-level={3}
								{...mergedLang.dropdownButton.attributes}
							>
								<div className="ss__facet__header__inner">
									<span {...mergedLang.dropdownButton.value}>{facet?.label}</span>
									{showSelectedCount && selectedCount ? (
										<span className="ss__facet__header__selected-count">{hideSelectedCountParenthesis ? selectedCount : `(${selectedCount})`}</span>
									) : null}
									{(mergedLang.clearAllText.value || clearAllIcon) && selectedCount ? (
										<Button
											{...subProps.button}
											internalClassName="ss__facet__header__clear-all"
											name={'reset-facet'}
											onClick={(e) => {
												e.stopPropagation();
												facet?.clear.url.link.onClick();
											}}
											icon={clearAllIcon ? clearAllIcon : undefined}
										>
											{mergedLang.clearAllText.value && showClearAllText ? <label {...mergedLang.clearAllText.all}></label> : null}
										</Button>
									) : (
										<></>
									)}
								</div>
								{!disableCollapse && (
									<Icon
										{...subProps.icon}
										{...(facet?.collapsed
											? { ...(typeof iconExpand == 'string' ? { icon: iconExpand } : (iconExpand as Partial<IconProps>)) }
											: { ...(typeof iconCollapse == 'string' ? { icon: iconCollapse } : (iconCollapse as Partial<IconProps>)) })}
										name={facet?.collapsed ? 'expand' : 'collapse'}
										treePath={props.treePath}
									/>
								)}
							</div>
						}
					>
						<FacetContent {...facetContentProps}></FacetContent>
					</Dropdown>
				)}
			</div>
		</CacheProvider>
	) : (
		<Fragment></Fragment>
	);
});

const FacetContent = (props: any) => {
	const {
		searchableFacet,
		subProps,
		className,
		internalClassName,
		limitedValues,
		facet,
		limit,
		overflowSlot,
		overflowState,
		optionsSlot,
		searchable,
		iconOverflowMore,
		iconOverflowLess,
		disableOverflow,
		previewOnFocus,
		justContent,
		valueProps,
		hideShowMoreLessText,
		treePath,
		lang,
	} = props;

	return (
		<Fragment>
			{searchable && searchableFacet.allowableTypes.includes(facet.display) && (
				<SearchInput
					{...subProps.searchInput}
					onChange={searchableFacet.searchFilter}
					placeholderText={`Search ${facet.label}`}
					treePath={treePath}
				/>
			)}
			<div className={classnames('ss__facet__options', justContent ? className : '', justContent ? internalClassName : '')}>
				{(() => {
					//manual options component
					if (optionsSlot) {
						return cloneWithProps(optionsSlot, { facet, valueProps, limit, previewOnFocus, treePath });
					} else {
						switch (facet?.display) {
							// case FacetDisplay.TOGGLE:
							// 	return <FacetToggle {...subProps.facetToggle} facet={facet as ValueFacet} />;
							case FacetDisplay.SLIDER:
								return <FacetSlider {...subProps.facetSlider} facet={facet as RangeFacet} treePath={treePath} />;
							case FacetDisplay.GRID:
								return (
									<FacetGridOptions
										{...subProps.facetGridOptions}
										values={limitedValues as FacetValue[]}
										facet={facet as ValueFacet}
										treePath={treePath}
									/>
								);
							case FacetDisplay.PALETTE:
								return (
									<FacetPaletteOptions
										{...subProps.facetPaletteOptions}
										values={limitedValues as FacetValue[]}
										facet={facet as ValueFacet}
										treePath={treePath}
									/>
								);
							case FacetDisplay.HIERARCHY:
								return (
									<FacetHierarchyOptions
										{...subProps.facetHierarchyOptions}
										values={limitedValues as FacetHierarchyValue[]}
										facet={facet as ValueFacet}
										treePath={treePath}
									/>
								);
							default:
								return (
									<FacetListOptions
										{...subProps.facetListOptions}
										values={limitedValues as FacetValue[]}
										facet={facet as ValueFacet}
										treePath={treePath}
									/>
								);
						}
					}
				})()}
			</div>

			{!disableOverflow && overflowState?.enabled && (
				<div className="ss__facet__show-more-less" aria-live="polite" onClick={() => overflowState?.toggle()} ref={(e) => useA11y(e)}>
					{overflowSlot ? (
						cloneWithProps(overflowSlot, { facet, treePath })
					) : (
						<Fragment>
							<Icon
								{...subProps.showMoreLessIcon}
								treePath={treePath}
								{...((overflowState?.remaining || 0) > 0
									? { ...(typeof iconOverflowMore == 'string' ? { icon: iconOverflowMore } : (iconOverflowMore as Partial<IconProps>)) }
									: { ...(typeof iconOverflowLess == 'string' ? { icon: iconOverflowLess } : (iconOverflowLess as Partial<IconProps>)) })}
							/>
							{!hideShowMoreLessText && <span {...((overflowState?.remaining || 0) > 0 ? lang.showMoreText?.all : lang.showLessText?.all)}></span>}
						</Fragment>
					)}
				</div>
			)}
		</Fragment>
	);
};

interface FacetSubProps {
	dropdown: Partial<DropdownProps>;
	facetListOptions: Partial<FacetListOptionsProps>;
	facetGridOptions: Partial<FacetGridOptionsProps>;
	facetPaletteOptions: Partial<FacetPaletteOptionsProps>;
	facetHierarchyOptions: Partial<FacetHierarchyOptionsProps>;
	// facetToggle: Partial<FacetToggleProps>;
	facetSlider: Partial<FacetSliderProps>;
	searchInput: Partial<SearchInputProps>;
	icon: Partial<IconProps>;
	button: Partial<ButtonProps>;
	showMoreLessIcon: Partial<IconProps>;
}

export interface FacetProps extends OptionalFacetProps {
	facet: ValueFacet | RangeFacet;
}

interface OptionalFacetProps extends ComponentProps {
	disableCollapse?: boolean;
	color?: string;
	iconCollapse?: IconType | Partial<IconProps>;
	iconColor?: string;
	iconExpand?: IconType | Partial<IconProps>;
	limit?: number;
	statefulOverflow?: boolean;
	overflowSlot?: JSX.Element | JSX.Element[];
	optionsSlot?: JSX.Element | JSX.Element[];
	disableOverflow?: boolean;
	previewOnFocus?: boolean;
	valueProps?: any;
	showSelectedCount?: boolean;
	hideSelectedCountParenthesis?: boolean;
	showClearAllText?: boolean;
	clearAllText?: string;
	clearAllIcon?: IconType | Partial<IconProps>;
	hideShowMoreLessText?: boolean;
	showMoreText?: string;
	showLessText?: string;
	iconOverflowMore?: IconType | Partial<IconProps>;
	iconOverflowLess?: IconType | Partial<IconProps>;
	fields?: FieldProps;
	display?: FieldProps;
	searchable?: boolean;
	justContent?: boolean;
	horizontal?: boolean;
	lang?: Partial<FacetLang>;
}

export interface FacetLang {
	showMoreText: Lang<{
		facet: ValueFacet | RangeFacet;
	}>;
	showLessText: Lang<{
		facet: ValueFacet | RangeFacet;
	}>;
	dropdownButton: Lang<{
		facet: ValueFacet | RangeFacet;
	}>;
	clearAllText: Lang<{
		facet: ValueFacet | RangeFacet;
	}>;
}

type FieldProps = {
	[variable: string]: Omit<FacetProps, 'facet'>;
};
