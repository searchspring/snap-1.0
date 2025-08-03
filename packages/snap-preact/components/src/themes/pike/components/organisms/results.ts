import { css } from '@emotion/react';
import type { ResultsProps } from '../../../../components/Organisms/Results';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Results component
const resultsStyleScript = (props: ResultsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const mobileBp = variables?.breakpoints?.mobile || 767;

	return css({
		gap: `${custom.spacing.x6}px ${custom.spacing.x4}px`,
		[`@media (max-width: ${mobileBp}px)`]: {
			gap: `${custom.spacing.x6}px ${custom.spacing.x2}px`,
		},
	});
};

// Results component props
export const results: ThemeComponent<'results', ResultsProps> = {
	default: {
		results: {
			themeStyleScript: resultsStyleScript,
		},
	},
};
