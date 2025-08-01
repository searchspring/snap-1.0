import { IconType } from '../../components/Atoms/Icon';
import Color from 'color';

export const custom: {
	colors: {
		[key: string]: string;
	};
	fonts: {
		[key: string]: any;
	};
	icons: {
		[key: string]: IconType;
	};
	sizes: {
		[key: string]: number;
	};
	spacing: {
		[key: string]: number;
	};
	utils: {
		convertPxToEm: (value: number) => string;
		lightenColor: (color: string | undefined, amount: number) => string;
		darkenColor: (color: string | undefined, amount: number) => string;
	};
} = {
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
		sort: 'sort',
	},
	sizes: {
		font: 16, // base font size
		height: 33, // refers to height for button and dropdown sizes
		icon08: 8,
		icon10: 10,
		icon12: 12,
		icon14: 14,
		icon16: 16,
	},
	spacing: {
		x1: 5,
		x2: 10,
		x3: 15,
		x4: 20,
		x5: 25,
		x6: 30,
	},
	utils: {
		convertPxToEm: (value: number) => {
			// translates px to rem
			return `${value / custom.sizes.font}rem`;
		},
		lightenColor: (color: string | undefined, amount: number) => {
			const lightColor = new Color(color || '#515151').lighten(amount).hex().toLowerCase();
			return lightColor;
		},
		darkenColor: (color: string | undefined, amount: number) => {
			const darkColor = new Color(color || '#515151').darken(amount).hex().toLowerCase();
			return darkColor;
		},
	},
};
