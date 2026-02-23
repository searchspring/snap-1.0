import { css } from '@emotion/react';
import type { TermsProps } from '../../../../components/Molecules/Terms';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Terms component
const termsStyleScript = (props: TermsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const tabletBp = variables?.breakpoints?.tablet || custom.breakpoints.tablet;

	// terms styles
	const termsStyles = css({
		...custom.styles.boxSizing('terms', props?.treePath, props?.name),
		'.ss__terms__title': {
			'&, h5': {
				padding: 0,
			},
			h5: {
				margin: `0 0 ${custom.spacing.x4}px 0`,
				...custom.styles.headerText(variables?.colors?.secondary, '16px'),
			},
		},
		'.ss__terms__options': {
			flexFlow: 'row wrap',
			justifyContent: 'flex-start',
			gap: `${custom.spacing.x1}px ${custom.spacing.x4}px`,
			'&, .ss__terms__option': {
				listStyle: 'none',
				padding: 0,
				margin: 0,
			},
			'.ss__terms__option': {
				flex: '0 1 auto',
				minWidth: '1px',
				'&, a': {
					color: variables?.colors?.primary,
				},
				a: {
					padding: 0,
					fontSize: '16px',
					em: {
						color: variables?.colors?.text,
						fontStyle: 'normal',
						fontSize: 'inherit',
						fontWeight: 'inherit',
					},
				},
			},
			'.ss__terms__option--active': {
				'a, a em': {
					...custom.styles.activeText(variables?.colors?.primary),
				},
			},
		},
		[`@media (max-width: ${tabletBp}px)`]: {
			'.ss__terms__title h5, .ss__terms__options .ss__terms__option a': {
				fontSize: '14px',
			},
		},
	});

	return termsStyles;
};

// Terms component props
export const terms: ThemeComponent<'terms', TermsProps> = {
	default: {
		terms: {
			themeStyleScript: termsStyleScript,
			emIfy: true,
		},
	},
};
