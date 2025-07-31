import { css } from '@emotion/react';
import type { RatingProps } from '../../../../components/Molecules/Rating';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Rating component
const ratingStyleScript = (props: RatingProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		flexWrap: 'wrap',
		gap: `${custom.spacing.x1}px`,
		lineHeight: 1,
		'.ss__rating__icons': {
			'.ss__rating__stars': {
				margin: '0 -1px',
				'.ss__rating__stars__star': {
					margin: '0 1px',
				},
			},
			'.ss__rating__stars--empty': {
				'.ss__rating__stars__star .ss__icon': {
					fill: custom.colors.gray03,
					stroke: custom.colors.gray03,
				},
			},
			'.ss__rating__stars--full': {
				'.ss__rating__stars__star .ss__icon': {
					fill: variables?.colors?.primary,
					stroke: variables?.colors?.primary,
				},
			},
		},
		'.ss__rating__count, .ss__rating__text': {
			color: variables?.colors?.text,
		},
	});
};

// Rating component props
export const rating: ThemeComponent<'rating', RatingProps> = {
	default: {
		rating: {
			themeStyleScript: ratingStyleScript,
			emptyIcon: 'star',
			fullIcon: 'star',
		},
	},
};
