import { css } from '@emotion/react';
import type { SearchSnapncoProps } from '../../../../components/Templates/SearchSnapnco';
import { searchSnapncoThemeComponentProps } from '../../../themeComponents/searchSnapnco';
import { ThemeComponent } from '../../../../providers';
import { customVariables } from '../../custom';

// CSS in JS style script for the Search component
const searchSnapncoStyleScript = (props: SearchSnapncoProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		'.ss__button--sidebar-toggle-button-wrapper .ss__button': {
			'.ss__icon': {
				width: '16px',
				height: '16px',
			},
		},
	});
};

// Search component props come from Template export
export const searchSnapnco: ThemeComponent<'searchSnapnco', SearchSnapncoProps> = {
	default: {
		props: {
			...searchSnapncoThemeComponentProps.default?.props,
			themeStyleScript: searchSnapncoStyleScript,
		},
		components: {
			...searchSnapncoThemeComponentProps.default?.components,
			'*searchSnapnco button.sidebar-toggle': {
				icon: customVariables.icons.filter,
			},
		},
	},
	mobile: searchSnapncoThemeComponentProps.mobile,
	desktop: searchSnapncoThemeComponentProps.desktop,
	tablet: searchSnapncoThemeComponentProps.tablet,
};
