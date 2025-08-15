import { css } from '@emotion/react';
import type { SearchHeaderProps } from '../../../../components/Atoms/SearchHeader';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the SearchHeader component
const searchHeaderStyleScript = (props: SearchHeaderProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		em: {
			fontStyle: 'normal',
		},
		'.ss__search-header__title': {
			margin: 0,
			fontSize: custom.utils.convertPxToEm(22),
			fontWeight: custom.fonts.weight02,
			color: variables?.colors?.secondary,
		},
		'.ss__search-header__subtitle': {
			margin: `${custom.spacing.x2}px 0 0 0`,
			fontSize: custom.utils.convertPxToEm(16),
			fontWeight: 400,
			color: variables?.colors?.text,
		},
		'.ss__search-header__results-query': {
			color: variables?.colors?.primary,
		},
	});
};

// SearchHeader component props
export const searchHeader: ThemeComponent<'searchHeader', SearchHeaderProps> = {
	default: {
		searchHeader: {
			themeStyleScript: searchHeaderStyleScript,
		},
	},
};
