import { ThemeComponents } from './themeComponents';

export { css, useTheme, withTheme, ThemeProvider } from '@emotion/react';

export const defaultTheme: Theme = {
	variables: {
		breakpoints: [0, 540, 767, 1200],
		color: {
			primary: '#3A23AD',
			secondary: '#00cee1',
			accent: '#4c3ce2',
			active: {
				foreground: '#333333',
				background: '#f8f6fd',
				accent: '#3A23AD',
			},
			hover: {
				foreground: '#333333',
				background: '#f8f6fd',
				accent: '#3A23AD',
			},
		},
	},
	components: {},
};

export type Theme = {
	name?: string;
	variables?: ThemeVariables;
	responsive?: [Partial<Theme>, Partial<Theme>, Partial<Theme>, Partial<Theme>];
	components?: ThemeComponents;
	// [other: string]: unknown; // legacy theme support
};

export type ThemeVariables = {
	breakpoints: [number, number, number, number];
	color: {
		primary: string; // (search header text, regular text, result title)
		secondary: string; // (headings, dropdown button text)
		accent: string; // (icons, borders)
		active: {
			foreground: string; // (active state text)
			background: string; // (active state)
			accent: string; // (icons, borders)
		};
		hover: {
			foreground: string; // (active state text)
			background: string; // (active state)
			accent: string; // (icons, borders)
		};
	};
};
