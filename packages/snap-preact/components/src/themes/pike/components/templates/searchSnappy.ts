import { css } from '@emotion/react';
import type { SearchSnappyProps } from '../../../../components/Templates/SearchSnappy';
import { searchSnappyThemeComponentProps } from '../../../themeComponents/searchSnappy';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Search component
const searchSnappyStyleScript = (props: SearchSnappyProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
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
				icon: custom.icons.filter,
			},
			'*searchSnappy button.sidebar-toggle icon': {
				size: '16px',
			},
		},
	},
	mobile: searchSnappyThemeComponentProps.mobile,
	desktop: searchSnappyThemeComponentProps.desktop,
	tablet: searchSnappyThemeComponentProps.tablet,
};
