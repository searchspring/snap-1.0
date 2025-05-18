import { css } from '@emotion/react';
import type { FilterSummaryProps } from '../../../../components/Organisms/FilterSummary';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the FilterSummary component
const filterSummaryStyleScript = (props: FilterSummaryProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
};

// FilterSummary component props
export const filterSummary: ThemeComponent<'filterSummary', FilterSummaryProps> = {
	default: {
		props: {
			themeStyleScript: filterSummaryStyleScript,
			clearAllIcon: custom.icons.close,
			filterIcon: custom.icons.close,
		},
	},
};
