import { css } from '@emotion/react';
import type { RatingProps } from '../../../../components/Molecules/Rating';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// set darkGray
const darkGray = custom.utils.darkenColor();

// CSS in JS style script for the Rating component
const ratingStyleScript = (props: RatingProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		flexWrap: 'wrap',
		gap: `${custom.spacing.x1}px`,
		lineHeight: 1,
		...custom.styles.boxSizing('rating', props?.treePath, props?.name),
		'.ss__rating__icons': {
			'.ss__rating__stars': {
				margin: '0 -1px',
				'.ss__rating__stars__star': {
					margin: '0 1px',
				},
			},
		},
		'.ss__rating__count, .ss__rating__text': {
			fontSize: custom.utils.convertPxToEm(12),
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
		'rating icon': {
			size: `${custom.sizes.icon14}px`,
			width: `${custom.sizes.icon14}px`,
			height: `${custom.sizes.icon14}px`,
		},
		'rating icon.star--empty': {
			color: darkGray,
		},
		'rating icon.star--full': {
			color: custom.colors.primary,
		},
	},
};
