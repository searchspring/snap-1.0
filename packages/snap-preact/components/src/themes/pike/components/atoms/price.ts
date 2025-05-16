import { css } from '@emotion/react';
import type { PriceProps } from '../../../../components/Atoms/Price';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Price component
const priceStyleScript = ({ theme }: PriceProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

	return css({});
};

// Price component props
export const price: ThemeComponent<'price', PriceProps> = {
	default: {
		props: {
			themeStyleScript: priceStyleScript,
		},
	},
};
