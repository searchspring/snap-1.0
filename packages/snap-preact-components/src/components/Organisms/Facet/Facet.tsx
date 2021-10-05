/** @jsx jsx */
import { h } from 'preact';

import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';

import { FacetListOptions, FacetListOptionsProps } from '../../Molecules/FacetListOptions';
import { FacetGridOptions, FacetGridOptionsProps } from '../../Molecules/FacetGridOptions';
import { FacetPaletteOptions, FacetPaletteOptionsProps } from '../../Molecules/FacetPaletteOptions';
import { FacetHierarchyOptions, FacetHierarchyOptionsProps } from '../../Molecules/FacetHierarchyOptions';
import { FacetSlider, FacetSliderProps } from '../../Molecules/FacetSlider';
import { Icon, IconProps, IconType } from '../../Atoms/Icon';
import { Dropdown, DropdownProps } from '../../Atoms/Dropdown';
import { ComponentProps, FacetDisplay, ValueFacet, RangeFacet, RangeBucketFacet, BaseFacet, HierarchyFacet } from '../../../types';
import { defined } from '../../../utilities';
import { Theme, useTheme, CacheProvider } from '../../../providers';

const CSS = {
	facet: ({ color, theme }) =>
		css({
			width: '100%',
			margin: '0 0 20px 0',
			'& .ss__facet__header': {
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				color: color,
				border: 'none',
				borderBottom: `2px solid ${theme.colors?.primary || '#ccc'}`,
				padding: '6px 0',
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
		}),
};

export const Facet = observer((properties: FacetProps): JSX.Element => {
	const globalTheme: Theme = useTheme();
	const theme = { ...globalTheme, ...properties.theme };

	const props: FacetProps = {
		// default props
		limit: 12,
		disableOverflow: false,
		iconCollapse: 'angle-up',
		iconExpand: 'angle-down',
		showMoreText: 'Show More',
		showLessText: 'Show Less',
		iconOverflowMore: 'plus',
		iconOverflowLess: 'minus',
		// global theme
		...globalTheme?.components?.facet,
		// props
		...properties,
		...properties.theme?.components?.facet,
	};

	const {
		disableCollapse,
		facet,
		iconCollapse,
		iconExpand,
		limit,
		disableOverflow,
		iconColor,
		color,
		previewOnFocus,
		valueProps,
		showMoreText,
		showLessText,
		iconOverflowMore,
		iconOverflowLess,
		disableStyles,
		className,
		style,
	} = props;

	const subProps: FacetSubProps = {
		dropdown: {
			// default props
			className: 'ss__facet__dropdown',
			disableClickOutside: true,
			disableOverlay: true,
			// global theme
			...globalTheme?.components?.dropdown,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props.theme,
		},
		icon: {
			// default props
			className: 'ss__facet__dropdown__icon',
			size: '12px',
			color: iconColor || color,
			// global theme
			...globalTheme?.components?.icon,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props.theme,
		},
		showMoreLessIcon: {
			// default props
			className: 'ss__facet__show-more-less__icon',
			size: '10px',
			color: iconColor || color,
			// global theme
			...globalTheme?.components?.icon,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props.theme,
		},
		facetHierarchyOptions: {
			// default props
			className: 'ss__facet__facet-hierarchy-options',
			// global theme
			...globalTheme?.components?.facetHierarchyOptions,
			// inherited props
			...defined({
				disableStyles,
				previewOnFocus,
				valueProps,
			}),
			// component theme overrides
			theme: props.theme,
		},
		facetListOptions: {
			// default props
			className: 'ss__facet__facet-list-options',
			// global theme
			...globalTheme?.components?.facetListOptions,
			// inherited props
			...defined({
				disableStyles,
				previewOnFocus,
				valueProps,
			}),
			// component theme overrides
			theme: props.theme,
		},
		facetGridOptions: {
			// default props
			className: 'ss__facet__facet-grid-options',
			// global theme
			...globalTheme?.components?.facetGridOptions,
			// inherited props
			...defined({
				disableStyles,
				previewOnFocus,
				valueProps,
			}),
			// component theme overrides
			theme: props.theme,
		},
		facetPaletteOptions: {
			// default props
			className: 'ss__facet__facet-palette-options',
			// global theme
			...globalTheme?.components?.facetPaletteOptions,
			// inherited props
			...defined({
				disableStyles,
				previewOnFocus,
				valueProps,
			}),
			// component theme overrides
			theme: props.theme,
		},
		facetSlider: {
			// default props
			className: 'ss__facet__facet-slider',
			// global theme
			...globalTheme?.components?.facetSlider,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props.theme,
		},
	};

	let limitedValues;
	if ((facet as ValueFacet)?.overflow && limit && !disableOverflow) {
		(facet as ValueFacet).overflow.setLimit(limit);
		limitedValues = (facet as ValueFacet)?.refinedValues;
	} else if ((facet as ValueFacet)?.overflow && limit) {
		limitedValues = (facet as ValueFacet)?.values.slice(0, limit);
	} else {
		limitedValues = (facet as ValueFacet)?.values;
	}

	const styling: { css?: any } = {};
	if (!disableStyles) {
		styling.css = [CSS.facet({ color, theme }), style];
	} else if (style) {
		styling.css = [style];
	}

	return (
		<CacheProvider>
			<div {...styling} className={classnames('ss__facet', `ss__facet--${facet.display}`, `ss__facet--${facet.field}`, className)}>
				<Dropdown
					{...subProps.dropdown}
					open={disableCollapse || !facet?.collapsed}
					onClick={(e) => !disableCollapse && facet?.toggleCollapse()}
					button={
						<div className="ss__facet__header">
							{facet?.label}
							{!disableCollapse && <Icon {...subProps.icon} icon={facet?.collapsed ? iconExpand : iconCollapse} />}
						</div>
					}
				>
					<div className={classnames('ss__facet__options', className)}>
						{(() => {
							switch (facet?.display) {
								case FacetDisplay.SLIDER:
									return <FacetSlider {...subProps.facetSlider} facet={facet as RangeFacet} />;
								case FacetDisplay.GRID:
									return <FacetGridOptions {...subProps.facetGridOptions} values={limitedValues} />;
								case FacetDisplay.PALETTE:
									return <FacetPaletteOptions {...subProps.facetPaletteOptions} values={limitedValues} />;
								case FacetDisplay.HIERARCHY:
									return <FacetHierarchyOptions {...subProps.facetHierarchyOptions} values={limitedValues} />;
								default:
									return <FacetListOptions {...subProps.facetListOptions} values={limitedValues} />;
							}
						})()}
					</div>

					{!disableOverflow && (facet as ValueFacet)?.overflow && (facet as ValueFacet).overflow.enabled && (
						<div className="ss__facet__show-more-less" onClick={() => (facet as ValueFacet).overflow.toggle()}>
							<Icon {...subProps.showMoreLessIcon} icon={(facet as ValueFacet).overflow.remaining > 0 ? iconOverflowMore : iconOverflowLess} />
							<span>{(facet as ValueFacet).overflow.remaining > 0 ? showMoreText : showLessText}</span>
						</div>
					)}
				</Dropdown>
			</div>
		</CacheProvider>
	);
});

interface FacetSubProps {
	dropdown: DropdownProps;
	facetListOptions: FacetListOptionsProps;
	facetGridOptions: FacetGridOptionsProps;
	facetPaletteOptions: FacetPaletteOptionsProps;
	facetHierarchyOptions: FacetHierarchyOptionsProps;
	facetSlider: FacetSliderProps;
	icon: IconProps;
	showMoreLessIcon: IconProps;
}

export interface FacetProps extends ComponentProps {
	disableCollapse?: boolean;
	facet: ValueFacet | RangeFacet | RangeBucketFacet | BaseFacet | HierarchyFacet;
	color?: string;
	iconCollapse?: IconType | string;
	iconColor?: string;
	iconExpand?: IconType | string;
	limit?: number;
	disableOverflow?: boolean;
	previewOnFocus?: boolean;
	valueProps?: any;
	showMoreText?: string;
	showLessText?: string;
	iconOverflowMore?: string;
	iconOverflowLess?: string;
}
