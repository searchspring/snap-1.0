import { ThemeComplete, ThemeVariables } from '../../providers';
import { components } from './components';
import { responsive } from './responsive';

const pikeVariables: ThemeVariables = {
	breakpoints: {
		mobile: 767,
		tablet: 991,
		desktop: 1199,
	},
	colors: {
		text: '#515151',
		primary: '#00aeef',
		secondary: '#1d4990',
		accent: '#2154a5',
	},
};

export const pike: ThemeComplete = {
	name: 'pike',
	variables: pikeVariables,
	components,
	responsive,
};
