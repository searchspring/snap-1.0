import { css } from '@emotion/react';
import type { FacetListOptionsProps } from '../../../../components/Molecules/FacetListOptions';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the FacetListOptions component
const facetListOptionsStyleScript = (props: FacetListOptionsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
};

// FacetListOptions component props
export const facetListOptions: ThemeComponent<'facetListOptions', FacetListOptionsProps> = {
	default: {
		props: {
			themeStyleScript: facetListOptionsStyleScript,
		},
	},
};
