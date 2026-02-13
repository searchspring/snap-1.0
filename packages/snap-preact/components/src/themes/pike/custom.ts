import { IconType } from '../../components/Atoms/Icon';
import Color from 'color';

// calculate spacing
const spacing = 5;
const spacingCalc = (value: number) => {
	return spacing * value;
};

// custom theme object
// contains defaults, colors, utils, global styles, etc.
export const custom: CustomThemeType = {
	breakpoints: {
		small: 540,
		mobile: 767,
		tablet: 1024,
		desktop: 1280,
	},
	colors: {
		white: '#ffffff',
		black: '#000000',
		gray01: '#f8f8f8', // lighter gray: bg color under terms, dropdown, checkboxes
		gray02: '#ebebeb', // light gray: borders for autocomplete, dropdown, checkboxes
		brown: '#845329', // for color palette
		purple: '#7c368e', // for color palette
		rainbow:
			'linear-gradient(rgb(40, 87, 218) 20%, rgb(40, 218, 70) 20%, rgb(40, 218, 70) 40%, rgb(245, 228, 24) 40%, rgb(245, 228, 24) 60%, rgb(242, 133, 0) 60%, rgb(242, 133, 0) 80%, rgb(218, 40, 72) 80%, rgb(218, 40, 72))', // for color palette
	},
	fonts: {
		weight01: 700, // main font weight
		weight02: 700, // header font weight
		style: false,
		transform: false,
	},
	icons: {
		arrowLeft: 'chevron-left',
		arrowRight: 'chevron-right',
		arrowDown: 'chevron-down',
		arrowUp: 'chevron-up',
		bag: 'bag',
		check: 'square',
		close: 'close',
		minus: 'minus',
		plus: 'plus',
		filter: 'filter',
		filters: 'filters',
		search: 'search',
		sort: 'sort',
	},
	sizes: {
		font: 16, // base font size
		height: 35, // refers to height for button and dropdown sizes
		icon08: 8,
		icon10: 10,
		icon12: 12,
		icon14: 14,
		icon16: 16,
		radius: 0, // global border radius value
	},
	spacing: {
		x1: spacing,
		x2: spacingCalc(2),
		x3: spacingCalc(3),
		x4: spacingCalc(4),
		x5: spacingCalc(5),
		x6: spacingCalc(6),
		x7: spacingCalc(7),
		x8: spacingCalc(8),
	},
	styles: {
		activeText: (value?: string) => {
			return {
				'&, &:hover': {
					fontWeight: custom?.fonts?.weight01,
					color: value ? value : '',
				},
			};
		},
		badgeText: (value: number) => {
			return {
				display: 'block',
				...custom.styles.fontSize(value),
				lineHeight: 1,
			};
		},
		box: (text?: string, value?: number) => {
			return {
				border: `1px solid ${custom.colors.gray02}`,
				backgroundColor: custom.colors.gray01,
				color: text ? text : '',
				padding: `${value ? value : custom.spacing.x2}px`,
			};
		},
		boxSizing: () => {
			return {
				'&, *, *:before, *:after': {
					boxSizing: 'border-box',
				},
			};
		},
		disabled: () => {
			return {
				opacity: 0.65,
				cursor: 'not-allowed !important',
			};
		},
		fontSize: (value: number) => {
			return {
				fontSize: `${value / custom.sizes.font}rem`,
			};
		},
		headerText: (value?: string) => {
			return {
				fontWeight: custom?.fonts?.weight02,
				color: value ? value : '',
			};
		},
		textOverflow: () => {
			return {
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				whiteSpace: 'nowrap',
			};
		},
	},
	utils: {
		convertPxToEm: (value: number) => {
			// translates px to rem
			return `${value / custom.sizes.font}rem`;
		},
		lightenColor: (color: string | undefined, amount: number) => {
			// lighten a color
			const lightColor = new Color(color || '#515151').lighten(amount).hex().toLowerCase();
			return lightColor;
		},
		darkenColor: (color: string | undefined, amount: number) => {
			// darken a color
			const darkColor = new Color(color || '#515151').darken(amount).hex().toLowerCase();
			return darkColor;
		},
	},
};

// types for custom theme object
type FunctionColorType = (color: string | undefined, amount: number) => string;

type FunctionStringType = (value: number) => string;

type ObjectAnyType = {
	[key: string]: any;
};

type ObjectIconType = {
	[key: string]: IconType;
};

type ObjectNestedType = {
	[key: string]: ObjectNumberOrStringType;
};

type ObjectNumberType = {
	[key: string]: number;
};

type ObjectNumberOrStringType = {
	[key: string]: number | string;
};

type ObjectStringType = {
	[key: string]: string;
};

type CustomThemeType = {
	breakpoints: ObjectNumberType;
	colors: ObjectStringType;
	fonts: ObjectAnyType;
	icons: ObjectIconType;
	sizes: ObjectNumberType;
	spacing: ObjectNumberType;
	styles: {
		activeText: (value?: string) => ObjectNestedType;
		badgeText: (value: number) => ObjectNumberOrStringType;
		box: (text?: string, value?: number) => ObjectNumberOrStringType;
		boxSizing: () => ObjectNestedType;
		disabled: () => ObjectNumberOrStringType;
		fontSize: (value: number) => ObjectStringType;
		headerText: (value?: string) => ObjectNumberOrStringType;
		textOverflow: () => ObjectNumberOrStringType;
	};
	utils: {
		convertPxToEm: FunctionStringType;
		lightenColor: FunctionColorType;
		darkenColor: FunctionColorType;
	};
};
