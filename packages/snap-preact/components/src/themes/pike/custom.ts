import { IconType } from '../../components/Atoms/Icon';

export const customVariables: {
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
} = {
	colors: {
		white: '#ffffff',
		black: '#000000',
		gray01: '#f8f8f8',
		gray02: '#ebebeb',
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
		height: 35, // refers to height for button and dropdown sizes
		icons: 12,
		spacing: 20,
	},
};
