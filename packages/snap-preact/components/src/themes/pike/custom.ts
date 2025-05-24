import { IconType } from '../../components/Atoms/Icon';
import Color from 'color';

export const custom: {
	colors: {
		[color: string]: string;
	};
	fonts: {
		[font: string]: any;
	};
	icons: {
		[icon: string]: IconType;
	};
	sizes: {
		[size: string]: any;
	};
	slider: {
		[slider: string]: any;
	};
	spacing: {
		[size: string]: number;
	};
} = {
	colors: {
		white: '#ffffff',
		black: '#000000',
		gray01: '#f8f8f8', // lighter gray: bg color under terms, dropdown, checkboxes
		gray02: '#ebebeb', // light gray: borders for autocomplete, dropdown, checkboxes
		gray03: `${new Color('#ebebeb').darken(0.055).hex().toLowerCase()}`, // dark gray: active border for checkboxes, palette, etc.
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
		height: 33, // refers to height for button and dropdown sizes
		icons: 16,
	},
	slider: {
		handles: 20, // handle size
		values: 14, // values size
		bar: 6, // bar size
		ticks: 17, // size of ticks
		valuesPosition: 'top', // position of slider values (top or bottom)
		valuesAlign: 'sides', // alignment of slider values (sides or center)
	},
	spacing: {
		x1: 5,
		x2: 10,
		x3: 15,
		x4: 20,
		x5: 25,
		x6: 30,
	},
};
