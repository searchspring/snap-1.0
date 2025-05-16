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
		primary: '#1d4990',
		secondary: '#00aeef',
		accent: '#2154a5',
	},
};

export const pike: Partial<ThemeComplete> = {
	name: 'pike',
	variables: pikeVariables,
	components,
	responsive,
};
