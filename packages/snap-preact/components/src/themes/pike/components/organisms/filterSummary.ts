import { css } from '@emotion/react';
import type { FilterSummaryProps } from '../../../../components/Organisms/FilterSummary';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the FilterSummary component
const filterSummaryStyleScript = (props: FilterSummaryProps) => {
	const variables = props?.theme?.variables;
	const darkGray = custom.utils.darkenColor(custom.colors.gray02, 0.075);

	return css({
		display: 'flex',
		flexFlow: 'row wrap',
		alignItems: 'center',
		'&.ss__filter-summary--list': {
			'.ss__filter-summary__title:after': {
				display: 'none',
			},
			'.ss__filter-summary__filters': {
				'.ss__filter': {
					margin: `0 0 ${custom.spacing.x1}px 0`,
					'&:last-of-type': {
						marginBottom: 0,
					},
					'.ss__filter__button': {
						'.ss__button__content': {
							'.ss__filter__button__icon': {
								backgroundColor: custom.colors.gray01,
								border: `1px solid ${darkGray}`,
							},
							'.ss__icon': {
								width: `${custom.sizes.icon08}px`,
								height: `${custom.sizes.icon08}px`,
							},
						},
					},
				},
			},
		},
		'.ss__filter-summary__title': {
			padding: `0 ${custom.spacing.x1}px 0 0`,
			fontSize: custom.utils.convertPxToEm(14),
			fontWeight: custom.fonts.weight02,
			color: variables?.colors?.secondary,
			'&:after': {
				content: '":"',
			},
		},
		'.ss__filter-summary__filters': {
			gap: `${custom.spacing.x1}px`,
			margin: 0,
		},
	});
};

// FilterSummary component props
export const filterSummary: ThemeComponent<'filterSummary', FilterSummaryProps> = {
	default: {
		filterSummary: {
			themeStyleScript: filterSummaryStyleScript,
			clearAllIcon: custom.icons.close,
			filterIcon: custom.icons.close,
			hideTitle: false,
		},
	},
};
