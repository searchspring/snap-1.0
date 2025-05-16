import { css } from '@emotion/react';
import type { FacetSliderProps } from '../../../../components/Molecules/FacetSlider';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the FacetSlider component
const facetSliderStyleScript = ({ theme }: FacetSliderProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

	return css({});
};

// FacetSlider component props
export const facetSlider: ThemeComponent<'facetSlider', FacetSliderProps> = {
	default: {
		props: {
			themeStyleScript: facetSliderStyleScript,
		},
	},
};
