import { css } from '@emotion/react';
import type { ResultProps } from '../../../../components/Molecules/Result';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Result component
const resultStyleScript = (props: ResultProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const lightGray = custom.utils.lightenColor(variables?.colors?.text, 0.65);

	return css({
		'&.ss__result--sale': {
			'.ss__result__details': {
				'.ss__result__details__pricing': {
					'.ss__result__price:not(.ss__price--strike)': {
						'&, span': {
							color: variables?.colors?.primary,
						},
					},
				},
			},
		},
		'&.ss__result--grid': {
			display: 'block',
			height: 'auto',
			width: 'auto',
		},
		'.ss__result__image-wrapper': {
			margin: `0 0 ${custom.spacing.x2}px 0`,
		},
		'.ss__result__details': {
			padding: 0,
			display: 'flex',
			flexFlow: 'column nowrap',
			gap: `${custom.spacing.x2}px`,
			'& > *, .ss__result__details__title': {
				margin: 0,
			},
			'.ss__result__details__title': {
				order: -1,
			},
			'.ss__result__details__pricing': {
				'.ss__result__price': {
					fontSize: custom.utils.convertPxToEm(16),
					'&:not(.ss__price--strike)': {
						fontWeight: custom.fonts.weight01,
					},
				},
				'.ss__price--strike': {
					fontSize: custom.utils.convertPxToEm(14),
					'&, span': {
						color: lightGray,
					},
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
			hideRating: false,
			hideAddToCartButton: false,
		},
	},
};
