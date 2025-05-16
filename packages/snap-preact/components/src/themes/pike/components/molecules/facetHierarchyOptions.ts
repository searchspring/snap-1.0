import { css } from '@emotion/react';
import type { FacetHierarchyOptionsProps } from '../../../../components/Molecules/FacetHierarchyOptions';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the FacetHierarchyOptions component
const facetHierarchyOptionsStyleScript = ({ theme }: FacetHierarchyOptionsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

	return css({});
};

// FacetHierarchyOptions component props
export const facetHierarchyOptions: ThemeComponent<'facetHierarchyOptions', FacetHierarchyOptionsProps> = {
	default: {
		props: {
			themeStyleScript: facetHierarchyOptionsStyleScript,
		},
	},
};
