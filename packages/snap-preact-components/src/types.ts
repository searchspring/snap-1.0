import type { SerializedStyles } from '@emotion/react';
import type { Theme } from './providers/theme';
import type { AbstractController } from '@searchspring/snap-controller';
import type { Product } from '@searchspring/snap-store-mobx';
import { IconProps } from './components/Atoms/Icon';
import { MutableRef } from 'preact/hooks';

export interface ComponentProps {
	name?: string;
	className?: string;
	disableStyles?: boolean;
	style?: string | Record<string, any>;
	styleScript?: (props: any) => SerializedStyles;
	theme?: Theme;
	controller?: AbstractController;
	snap?: any;
	ref?: MutableRef<any> | React.RefObject<any> | ((e: any) => void);
}

export type ListOption = {
	value: string | number;
	label?: string;
	disabled?: boolean;
	icon?: string | Partial<IconProps>;
	columns?: number;
	component?: ResultComponent;
	[otherOptions: string]: any;
};

export type ResultComponent = React.FunctionComponent<{
	controller: AbstractController;
	result: Product;
	theme?: Theme;
}>;

export enum ResultsLayout {
	GRID = 'grid',
	LIST = 'list',
}

export type ResultsLayoutType = ResultsLayout.GRID | ResultsLayout.LIST;

// TODO: move to store or use store or snapi types
export enum FacetType {
	VALUE = 'value',
	RANGE = 'range',
	RANGE_BUCKETS = 'range-buckets',
}

// TODO: should be added to the Facet type
export enum FacetDisplay {
	GRID = 'grid',
	PALETTE = 'palette',
	LIST = 'list',
	SLIDER = 'slider',
	HIERARCHY = 'hierarchy',
	TOGGLE = 'toggle',
}

export type BreakpointsProps = {
	[key: number]: BreakpointsEntry | any;
};

export type BreakpointsEntry = {
	[property: string]: any;
};

export type StylingCSS = Array<SerializedStyles | string | Record<string, string> | undefined>;
