import { IconType } from '../../components/Atoms/Icon';

export const customVariables: {
	colors: {
		[color: string]: string;
	};
	icons: {
		[icon: string]: IconType;
	};
} = {
	colors: {
		white: '#ffffff',
		black: '#000000',
		gray: '#f8f8f8',
		gray02: '#ebebeb',
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
};
