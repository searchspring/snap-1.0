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
		...searchSnappyThemeComponentProps.default,
		searchSnappy: {
			...(searchSnappyThemeComponentProps.default?.['searchSnappy'] || {}),
			themeStyleScript: searchSnappyStyleScript,
		},
		'searchSnappy button.sidebar-toggle': {
			icon: custom.icons.filter,
		},
		'searchSnappy filterSummary': {
			hideTitle: false,
		},
	},
	mobile: searchSnappyThemeComponentProps.mobile,
	desktop: searchSnappyThemeComponentProps.desktop,
	tablet: searchSnappyThemeComponentProps.tablet,
};
