import { ThemeComplete, ThemeVariables } from '../../providers';
import { components } from './components';
import { responsive } from './responsive';
import { custom } from './custom';

const pikeVariables: ThemeVariables = {
	breakpoints: {
		mobile: custom.breakpoints.mobile,
		tablet: custom.breakpoints.tablet,
		desktop: custom.breakpoints.desktop,
	},
	colors: {
		text: custom.colors.text,
		primary: custom.colors.primary,
		secondary: custom.colors.secondary,
		accent: custom.colors.accent,
	},
};

export const pike: ThemeComplete = {
	name: 'pike',
	variables: pikeVariables,
	components,
	responsive,
};
