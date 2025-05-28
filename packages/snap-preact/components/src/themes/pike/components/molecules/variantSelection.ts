import { css } from '@emotion/react';
import type { VariantSelectionProps } from '../../../../components/Molecules/VariantSelection';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Swatches component
const variantSelectionStyleScript = (props: VariantSelectionProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
};

// VariantSelection component props
export const variantSelection: ThemeComponent<'variantSelection', VariantSelectionProps> = {
	default: {
		variantSelection: {
			themeStyleScript: variantSelectionStyleScript,
		},
	},
};
