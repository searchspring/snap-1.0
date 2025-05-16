import { css } from '@emotion/react';
import type { SearchHorizontalProps } from '../../../../components/Templates/SearchHorizontal';
import { searchHorizontalThemeComponentProps } from '../../../themeComponents/searchHorizontal';
import { ThemeComponent } from '../../../../providers';
import { customVariables } from '../../custom';

// CSS in JS style script for the Search component
const searchHorizontalStyleScript = (props: SearchHorizontalProps) => {
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
export const searchHorizontal: ThemeComponent<'searchHorizontal', SearchHorizontalProps> = {
	default: {
		props: {
			...searchHorizontalThemeComponentProps.default?.props,
			themeStyleScript: searchHorizontalStyleScript,
		},
		components: {
			...searchHorizontalThemeComponentProps.default?.components,
			'*searchHorizontal button.sidebar-toggle': {
				icon: customVariables.icons.filter,
			},
		},
	},
	mobile: searchHorizontalThemeComponentProps.mobile,
	desktop: searchHorizontalThemeComponentProps.desktop,
	tablet: searchHorizontalThemeComponentProps.tablet,
};
