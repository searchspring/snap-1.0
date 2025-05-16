import { css } from '@emotion/react';
import type { SortByProps } from '../../../../components/Molecules/SortBy';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the SortBy component
const sortByStyleScript = (props: SortByProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
};

// SortBy component props
export const sortBy: ThemeComponent<'sortBy', SortByProps> = {
	default: {
		props: {
			themeStyleScript: sortByStyleScript,
		},
	},
};
