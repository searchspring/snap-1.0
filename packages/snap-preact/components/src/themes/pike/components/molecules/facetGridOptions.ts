import { css } from '@emotion/react';
import type { FacetGridOptionsProps } from '../../../../components/Molecules/FacetGridOptions';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the FacetGridOptions component
const facetGridOptionsStyleScript = ({ theme }: FacetGridOptionsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

	return css({});
};

// FacetGridOptions component props
export const facetGridOptions: ThemeComponent<'facetGridOptions', FacetGridOptionsProps> = {
	default: {
		props: {
			themeStyleScript: facetGridOptionsStyleScript,
			columns: 5,
		},
	},
};
