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
		tablet: 991,
		desktop: 1199,
	},
	colors: {
		text: '#515151', // theme color
		primary: '#00aeef', // theme color
		secondary: '#1d4990', // theme color
		accent: '#2154a5', // theme color
		white: '#ffffff',
		black: '#000000',
		gray01: '#f8f8f8', // lighter gray: bg color under terms, dropdown, checkboxes
		gray02: '#ebebeb', // light gray: borders for autocomplete, dropdown, checkboxes
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
			// active text styles
			return {
				'&, &:hover': {
					fontWeight: custom?.fonts?.weight01,
					color: value ? value : '',
				},
			};
		},
		badgeText: (value: number) => {
			// badge text styles
			return {
				display: 'block',
				...custom.styles.fontSize(value),
				lineHeight: 1,
			};
		},
		box: (text?: string, value?: number | string) => {
			// styles for box designs

			// define padding value
			let padding = `${custom.spacing.x2}px` as number | string;
			if (value) {
				padding = value;
			} else if (value === 0) {
				padding = '';
			}

			return {
				border: `1px solid ${custom.colors.gray02}`,
				backgroundColor: custom.colors.gray01,
				color: text ? text : '',
				padding: padding,
			};
		},
		boxSizing: (component: string, treePath?: string, name?: string) => {
			treePath = treePath ? treePath : component;
			component = name ? `${component}.${name}` : component; // if name is present, add to component

			// box-sizing rules for uniform sizing
			// if path and component are same, apply box-sizing
			// if they are not the same, this means some parent component will have the box sizing rules
			if (treePath == component) {
				return {
					'&, *, *:before, *:after': {
						boxSizing: 'border-box',
					},
				};
			} else {
				return null;
			}
		},
		disabled: () => {
			// disabled styles
			return {
				opacity: 0.65,
				cursor: 'not-allowed !important',
			};
		},
		fontSize: (value: number) => {
			// translates px to rem
			return {
				fontSize: `${value / custom.sizes.font}rem`,
			};
		},
		headerText: (value?: string) => {
			// header text styles
			return {
				fontWeight: custom?.fonts?.weight02,
				color: value ? value : '',
			};
		},
		textOverflow: () => {
			// text overflow styles
			return {
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				whiteSpace: 'nowrap',
			};
		},
	},
	utils: {
		activeColors: (color?: string) => {
			// get active color and related font color
			color = color ? color : custom.colors.primary;
			const whiteColor = new Color(custom.colors.white);
			const blackColor = new Color(custom.colors.black);
			const activeColor = new Color(color);
			const fontColor = activeColor.isDark() || activeColor.hex().toLowerCase() == custom.colors.primary ? whiteColor : blackColor;
			return [activeColor.hex().toLowerCase(), fontColor.hex().toLowerCase()];
		},
		convertPxToEm: (value: number) => {
			// translates px to rem
			return `${value / custom.sizes.font}rem`;
		},
		lightenColor: (color?: string, amount?: number) => {
			// lighten a color
			amount = amount ? amount : 0.65;
			color = color ? color : custom.colors.text;
			const lightColor = new Color(color).lighten(amount).hex().toLowerCase();
			return lightColor;
		},
		darkenColor: (color?: string, amount?: number) => {
			// darken a color
			amount = amount ? amount : 0.075;
			color = color ? color : custom.colors.gray02;
			const darkColor = new Color(color).darken(amount).hex().toLowerCase();
			return darkColor;
		},
	},
};

// types for custom theme object
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
		activeText: (valu?: string) => ObjectNestedType;
		badgeText: (value: number) => ObjectNumberOrStringType;
		box: (text?: string, value?: number | string) => ObjectNumberOrStringType;
		boxSizing: (component: string, treePath?: string, name?: string) => ObjectNestedType | null;
		disabled: () => ObjectNumberOrStringType;
		fontSize: (value: number) => ObjectStringType;
		headerText: (value?: string) => ObjectNumberOrStringType;
		textOverflow: () => ObjectNumberOrStringType;
	};
	utils: {
		activeColors: (color?: string) => string[];
		convertPxToEm: (value: number) => string;
		lightenColor: (color?: string, amount?: number) => string;
		darkenColor: (color?: string, amount?: number) => string;
	};
};
