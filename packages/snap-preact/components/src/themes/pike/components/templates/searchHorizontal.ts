import { css } from '@emotion/react';
import type { SearchHorizontalProps } from '../../../../components/Templates/SearchHorizontal';
import { searchHorizontalThemeComponentProps } from '../../../themeComponents/searchHorizontal';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Search component
const searchsecondaryStylescript = (props: SearchHorizontalProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		'.ss__search-boca__header-section, .ss__search-boca__main-section': {
			margin: `0 0 ${custom.spacing.x6}px 0`,
		},
		'.ss__search-boca__main-section': {
			gap: `${custom.spacing.x6}px`,
			'.ss__search-boca__sidebar, .ss__search-boca__content': {
				minWidth: '1px',
			},
			'.ss__search-boca__sidebar': {
				flex: '0 1 auto',
			},
			'.ss__search-boca__content': {
				flex: '1 1 0%',
				gap: `${custom.spacing.x4}px`,
			},
			'.ss__results': {
				margin: `0 0 ${custom.spacing.x2}px 0`,
			},
		},
	});
};

export const searchHorizontal: ThemeComponent<'searchHorizontal', SearchHorizontalProps> = {
	default: {
		...searchHorizontalThemeComponentProps.default,
		searchHorizontal: {
			...(searchHorizontalThemeComponentProps.default?.['searchHorizontal'] || {}),
			themeStyleScript: searchsecondaryStylescript,
		},
		'searchHorizontal button.sidebar-toggle': {
			icon: custom.icons.filter,
		},
	},
	mobile: searchHorizontalThemeComponentProps.mobile,
	desktop: searchHorizontalThemeComponentProps.desktop,
	tablet: searchHorizontalThemeComponentProps.tablet,
};
