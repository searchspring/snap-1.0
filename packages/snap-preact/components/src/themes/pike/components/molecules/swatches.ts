import { css } from '@emotion/react';
import type { SwatchesProps } from '../../../../components/Molecules/Swatches';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Swatches component
const swatchesStyleScript = ({ theme }: SwatchesProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

	return css({});
};

// Swatches component props
export const swatches: ThemeComponent<'swatches', SwatchesProps> = {
	default: {
		props: {
			themeStyleScript: swatchesStyleScript,
		},
	},
};
