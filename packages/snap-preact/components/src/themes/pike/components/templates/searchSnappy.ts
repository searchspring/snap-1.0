import { css } from '@emotion/react';
import type { SearchSnappyProps } from '../../../../components/Templates/SearchSnappy';
import { searchSnappyThemeComponentProps } from '../../../themeComponents/searchSnappy';
import { ThemeComponent } from '../../../../providers';
import { customVariables } from '../../custom';

// CSS in JS style script for the Search component
const searchSnappyStyleScript = (props: SearchSnappyProps) => {
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
export const searchSnappy: ThemeComponent<'searchSnappy', SearchSnappyProps> = {
	default: {
		props: {
			...searchSnappyThemeComponentProps.default?.props,
			themeStyleScript: searchSnappyStyleScript,
		},
		components: {
			...searchSnappyThemeComponentProps.default?.components,
			'*searchSnappy button.sidebar-toggle': {
				icon: customVariables.icons.filter,
			},
		},
	},
	mobile: searchSnappyThemeComponentProps.mobile,
	desktop: searchSnappyThemeComponentProps.desktop,
	tablet: searchSnappyThemeComponentProps.tablet,
};
