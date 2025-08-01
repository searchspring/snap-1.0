import { css } from '@emotion/react';
import type { PriceProps } from '../../../../components/Atoms/Price';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Price component
const priceStyleScript = (props: PriceProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		'&, span, &.ss__price, &.ss__price--strike': {
			color: variables?.colors?.text,
		},
	});
};

// Price component props
export const price: ThemeComponent<'price', PriceProps> = {
	default: {
		price: {
			themeStyleScript: priceStyleScript,
		},
	},
};
