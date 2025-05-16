import { css } from '@emotion/react';
import type { FilterProps } from '../../../../components/Molecules/Filter';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Filter component
const filterStyleScript = (props: FilterProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
};

// Filter component props
export const filter: ThemeComponent<'filter', FilterProps> = {
	default: {
		props: {
			themeStyleScript: filterStyleScript,
		},
	},
};
