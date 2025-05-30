import { css } from '@emotion/react';
import type { TermsListProps } from '../../../../components/Organisms/TermsList';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Terms component
const termsListStyleScript = (props: TermsListProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
};

// TermsList component props
export const termsList: ThemeComponent<'termsList', TermsListProps> = {
	default: {
		termsList: {
			themeStyleScript: termsListStyleScript,
		},
	},
};
