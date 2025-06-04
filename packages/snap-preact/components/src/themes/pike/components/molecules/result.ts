import { css } from '@emotion/react';
import type { ResultProps } from '../../../../components/Molecules/Result';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Result component
const resultStyleScript = (props: ResultProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		'&.ss__result--sale': {
			'.ss__result__details': {
				'.ss__result__details__pricing': {
					'.ss__result__price:not(.ss__price--strike)': {
						color: variables?.colors?.primary,
					},
				},
			},
		},
		'.ss__result__details': {
			'.ss__result__details__pricing': {
				fontSize: '16px',
				'.ss__result__price': {
					fontSize: 'inherit',
					'&:not(.ss__price--strike)': {
						fontWeight: custom.fonts.weight01,
					},
				},
				'.ss__price--strike': {
					fontSize: '0.875rem',
					opacity: 0.805,
				},
			},
		},
	});
};

// Result component props
export const result: ThemeComponent<'result', ResultProps> = {
	default: {
		result: {
			themeStyleScript: resultStyleScript,
		},
	},
};
