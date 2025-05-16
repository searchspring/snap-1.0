import { css } from '@emotion/react';
import type { VariantSelectionProps } from '../../../../components/Molecules/VariantSelection';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Swatches component
const variantSelectionStyleScript = ({ theme }: VariantSelectionProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

	return css({});
};

// VariantSelection component props
export const variantSelection: ThemeComponent<'variantSelection', VariantSelectionProps> = {
	default: {
		props: {
			themeStyleScript: variantSelectionStyleScript,
		},
	},
};
