import { css } from '@emotion/react';
import type { FacetPaletteOptionsProps } from '../../../../components/Molecules/FacetPaletteOptions';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the FacetPaletteOptions component
const facetPaletteStyleScript = ({ theme }: FacetPaletteOptionsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

	return css({});
};

// FacetPaletteOptions component props
export const facetPaletteOptions: ThemeComponent<'facetPaletteOptions', FacetPaletteOptionsProps> = {
	default: {
		props: {
			themeStyleScript: facetPaletteStyleScript,
			columns: 5,
		},
	},
};
