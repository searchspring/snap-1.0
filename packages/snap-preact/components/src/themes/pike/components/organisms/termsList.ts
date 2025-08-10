import { css } from '@emotion/react';
import type { TermsListProps } from '../../../../components/Organisms/TermsList';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the TermsList component
const termsListStyleScript = (props: TermsListProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const tabletBp = variables?.breakpoints?.tablet || 1024;

	return css({
		backgroundColor: 'transparent',
		'ul, ul li': {
			padding: 0,
			margin: 0,
			listStyle: 'none',
		},
		'.ss__terms': {
			width: '100%',
			textAlign: 'left',
			'.ss__terms__title': {
				h5: {
					padding: 0,
					margin: `0 0 ${custom.spacing.x4}px 0`,
					fontSize: custom.utils.convertPxToEm(16),
					fontWeight: custom.fonts.weight02,
					lineHeight: 1.2,
					color: variables?.colors?.secondary,
				},
			},
			'.ss__terms__options': {
				gap: `${custom.spacing.x1}px ${custom.spacing.x4}px`,
				display: 'flex',
				flexFlow: 'row wrap',
				margin: 0,
				'.ss__terms__option': {
					flex: '0 1 auto',
					minWidth: '1px',
					'&.ss__terms__option--active': {
						a: {
							fontWeight: custom.fonts.weight01,
							color: variables?.colors?.primary,
						},
					},
					a: {
						padding: 0,
						fontSize: custom.utils.convertPxToEm(14),
						color: variables?.colors?.text,
						em: {
							fontStyle: 'normal',
							fontSize: 'inherit',
						},
					},
				},
			},
		},
		[`@media (max-width: ${tabletBp}px)`]: {
			'.ss__terms': {
				'.ss__terms__title': {
					h5: {
						fontSize: custom.utils.convertPxToEm(14),
					},
				},
				'.ss__terms__options': {
					'.ss__terms__option': {
						a: {
							fontSize: custom.utils.convertPxToEm(12),
						},
					},
				},
			},
		},
	});
};

// TermsList component props
export const termsList: ThemeComponent<'termsList', TermsListProps> = {
	default: {
		termsList: {
			themeStyleScript: termsListStyleScript,
		},
	},
};
