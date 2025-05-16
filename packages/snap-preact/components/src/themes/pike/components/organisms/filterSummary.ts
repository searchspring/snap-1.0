import { css } from '@emotion/react';
import type { FilterSummaryProps } from '../../../../components/Organisms/FilterSummary';
import { ThemeComponent } from '../../../../providers';
import { customVariables } from '../../custom';

// CSS in JS style script for the FilterSummary component
const filterSummaryStyleScript = ({ theme }: FilterSummaryProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

	return css({});
};

// FilterSummary component props
export const filterSummary: ThemeComponent<'filterSummary', FilterSummaryProps> = {
	default: {
		props: {
			themeStyleScript: filterSummaryStyleScript,
			clearAllIcon: customVariables.icons.close,
			filterIcon: customVariables.icons.close,
		},
	},
};
