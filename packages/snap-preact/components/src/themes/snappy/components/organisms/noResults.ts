import { css } from '@emotion/react';
import type { NoResultsProps } from '../../../../components/Organisms/NoResults';
import { ThemeComponent } from '../../../../providers';
// CSS in JS style script for the NoResults component
const noResultsStyleScript = ({ theme }: NoResultsProps) => {
	const variables = theme?.variables;

	return css({
		color: variables?.colors?.secondary,
		' .ss__title': {
			color: variables?.colors?.secondary,
		},
	});
};

// NoResults component props
export const noResults: ThemeComponent<'noResults', NoResultsProps> = {
	default: {
		noResults: {
			themeStyleScript: noResultsStyleScript,
		},
	},
};
