import { css } from '@emotion/react';
import type { FilterSummaryProps } from '../../../../components/Organisms/FilterSummary';

// CSS in JS style script for the FilterSummary component
const filterSummaryStyleScript = ({ theme }: FilterSummaryProps) => {
	const variables = theme?.variables;
	return css({
		display: 'flex',
		gap: '0.5em',
		'& .ss__filter-summary__title': {
			fontWeight: 'bold',
			color: variables?.colors?.secondary,
		},
	});
};

// FilterSummary component props
export const filterSummary: Partial<FilterSummaryProps> = {
	themeStyleScript: filterSummaryStyleScript,
	title: 'Applied Filters',
};
