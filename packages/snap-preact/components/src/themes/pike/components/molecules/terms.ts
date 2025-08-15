import { css } from '@emotion/react';
import type { TermsProps } from '../../../../components/Molecules/Terms';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Terms component
const termsStyleScript = (props: TermsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		'.ss__terms__title': {
			padding: 0,
			h5: {
				margin: `0 0 ${custom.spacing.x4}px 0`,
				fontWeight: custom.fonts.weight02,
				fontSize: custom.utils.convertPxToEm(14),
				textTransform: custom.fonts.transform ? custom.fonts.transform : 'none',
				color: variables?.colors?.secondary,
			},
		},
		'.ss__terms__options': {
			margin: `0 -${custom.spacing.x2}px -${custom.spacing.x1}px -${custom.spacing.x2}px`,
			flexFlow: 'row wrap',
			justifyContent: 'flex-start',
			'&, .ss__terms__option': {
				listStyle: 'none',
				padding: 0,
			},
			'.ss__terms__option': {
				flex: '0 1 auto',
				a: {
					padding: `0 ${custom.spacing.x2}px ${custom.spacing.x1}px ${custom.spacing.x2}px`,
					fontSize: custom.utils.convertPxToEm(12),
					'&.ss__terms__option--active': {
						color: variables?.colors?.primary,
						em: {
							color: variables?.colors?.text,
							fontStyle: 'normal',
							fontSize: 'inherit',
						},
					},
					//color: variables?.colors?.text,
				},
			},
			'.ss__terms__option--active': {
				a: {
					color: variables?.colors?.primary,
				},
			},
		},
	});
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
