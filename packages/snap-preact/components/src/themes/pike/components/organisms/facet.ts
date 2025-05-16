import { css } from '@emotion/react';
import type { FacetProps } from '../../../../components/Organisms/Facet';
import { ThemeComponent } from '../../../../providers';
import { customVariables } from '../../custom';

// CSS in JS style script for the Facet component
const facetStyleScript = ({ theme }: FacetProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

	return css({});
};

// Facet component props
export const facet: ThemeComponent<'facet', FacetProps> = {
	default: {
		props: {
			themeStyleScript: facetStyleScript,
			iconCollapse: customVariables.icons.arrowUp,
			iconExpand: customVariables.icons.arrowDown,
			iconOverflowMore: customVariables.icons.plus,
			iconOverflowLess: customVariables.icons.minus,
		},
	},
};
