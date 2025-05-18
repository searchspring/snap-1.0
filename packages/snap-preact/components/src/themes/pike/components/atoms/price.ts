import { css } from '@emotion/react';
import type { PriceProps } from '../../../../components/Atoms/Price';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Price component
const priceStyleScript = (props: PriceProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		color: props?.name == 'price' ? variables?.colors?.primary : variables?.colors?.text,
		'&:not(.ss__price--strike)': {
			fontWeight: custom.fonts.weight01,
		},
		'&.ss__price--strike': {
			color: variables?.colors?.text,
		},
	});
};

// Price component props
export const price: ThemeComponent<'price', PriceProps> = {
	default: {
		props: {
			themeStyleScript: priceStyleScript,
		},
	},
};
