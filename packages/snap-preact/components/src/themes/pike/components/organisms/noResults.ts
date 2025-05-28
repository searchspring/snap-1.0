import { css } from '@emotion/react';
import type { NoResultsProps } from '../../../../components/Organisms/NoResults';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the NoResults component
const noResultsStyleScript = (props: NoResultsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
};

// NoResults component props
export const noResults: ThemeComponent<'noResults', NoResultsProps> = {
	default: {
		noResults: {
			themeStyleScript: noResultsStyleScript,
		},
	},
};
