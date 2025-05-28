import { css } from '@emotion/react';
import type { FilterSummaryProps } from '../../../../components/Organisms/FilterSummary';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the FilterSummary component
const filterSummaryStyleScript = (props: FilterSummaryProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		display: 'flex',
		flexFlow: 'row wrap',
		alignItems: 'center',
		'.ss__filter-summary__title': {
			padding: `0 ${custom.spacing.x1}px 0 0`,
			fontSize: '14px',
			fontWeight: custom.fonts.weight02,
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
