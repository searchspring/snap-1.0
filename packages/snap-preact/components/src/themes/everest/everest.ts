import { ThemeComplete, ThemeVariables } from '../../providers';
import { components } from './components';
import { responsive } from './responsive';

const everestVariables: ThemeVariables = {
	breakpoints: {
		mobile: 767,
		tablet: 991,
		desktop: 1199,
	},
	colors: {
		text: '#515151',
		primary: '#d15120',
		secondary: '#94280b',
		accent: '#a8391c',
	},
};

export const everest: ThemeComplete = {
	name: 'everest',
	variables: everestVariables,
	components,
	responsive,
};
