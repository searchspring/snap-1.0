import { css } from '@emotion/react';
import type { TermsListProps } from '../../../../components/Organisms/TermsList';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the TermsList component
const termsListStyleScript = (props: TermsListProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// terms list styles
	const termsListStyles = css({
		backgroundColor: 'transparent',
		flexFlow: 'row nowrap',
		gap: `${custom.spacing.x4}px`,
		...custom.styles.boxSizing('termsList', props?.treePath, props?.name),
		'.ss__terms-list__row': {
			flex: '1 1 0%',
			minWidth: '1px',
		},
	});

	return termsListStyles;
};

// TermsList component props
export const termsList: ThemeComponent<'termsList', TermsListProps> = {
	default: {
		termsList: {
			themeStyleScript: termsListStyleScript,
			suggestionTitle: 'Search Suggestions',
		},
	},
};
