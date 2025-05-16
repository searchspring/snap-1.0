import { css } from '@emotion/react';
import type { FacetHierarchyOptionsProps } from '../../../../components/Molecules/FacetHierarchyOptions';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the FacetHierarchyOptions component
const facetHierarchyOptionsStyleScript = (props: FacetHierarchyOptionsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

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
