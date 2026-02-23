import { css } from '@emotion/react';
import type { ResultProps } from '../../../../components/Molecules/Result';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const lightGray = custom.utils.lightenColor();

// CSS in JS style script for the Result component
const resultStyleScript = (props: ResultProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const mobileBp = variables?.breakpoints?.mobile || custom.breakpoints.mobile;

	// result styles
	const resultStyles = css({
		...custom.styles.boxSizing('result', props?.treePath, props?.name),
		'&.ss__result--sale': {
			'.ss__result__details': {
				'.ss__result__details__pricing': {
					'.ss__result__price:not(.ss__price--strike)': {
						'&, span': {
							color: variables?.colors?.primary,
						},
					},
				},
			},
		},
		'&.ss__result--grid': {
			gap: `${custom.spacing.x2}px`,
			'&, .ss__result__details': {
				flexFlow: 'column nowrap',
			},
			'.ss__result__image-wrapper': {
				flex: '0 1 auto',
			},
			'.ss__result__details': {
				flex: '1 1 0%',
				'& > *': {
					flex: '0 1 auto',
				},
				'.ss__result__add-to-cart-wrapper .ss__button': {
					width: `100%`,
				},
			},
		},
		'&.ss__result--list': {
			alignItems: 'center',
			gap: `${custom.spacing.x2}px ${custom.spacing.x4}px`,
			'&, .ss__result__details': {
				flexFlow: 'row wrap',
			},
			'.ss__result__image-wrapper': {
				flex: '0 0 33.33%',
			},
			'.ss__result__details': {
				flex: '1 1 0%',
				textAlign: 'left',
				margin: 0,
				'&:after': {
					display: 'none',
				},
				'& > *': {
					flex: '1 1 100%',
				},
				'.ss__callout-badge, .ss__result__details__rating-wrapper': {
					justifyContent: 'flex-start',
				},
				'.ss__result__details__title': {
					flex: '1 1 0%',
					a: {
						fontSize: '18px',
						fontWeight: custom.fonts.weight02,
					},
				},
				'.ss__result__details__pricing': {
					flex: '0 1 auto',
					order: -1,
				},
				'.ss__result__details__variant-selection:not(:empty)': {
					display: 'flex',
					flexFlow: 'row wrap',
					alignItems: 'center',
					gap: `${custom.spacing.x2}px`,
					'.ss__variant-selection': {
						width: `calc((100% - ${custom.spacing.x2 * 2}px) / 2)`,
						margin: 0,
						'.ss__slideshow .ss__slideshow__container .ss__slideshow__track': {
							justifyContent: 'flex-start',
						},
					},
				},
			},
		},
		'& > *': {
			minWidth: '1px',
		},
		'.ss__result__details': {
			display: 'flex',
			gap: `${custom.spacing.x2}px`,
			padding: 0,
			margin: 0,
			'&:after': {
				content: '""',
				display: 'block',
				margin: `auto 0 -${custom.spacing.x2}px 0`,
			},
			'& > *, .ss__result__details__title, .ss__result__details__title, .ss__result__details__pricing': {
				margin: 0,
			},
			'& > *': {
				minWidth: '1px',
				'&:empty': {
					display: 'none',
				},
			},
			'.ss__result__details__title': {
				order: -2,
				a: {
					color: variables?.colors?.text,
				},
			},
			'.ss__result__details__pricing': {
				'.ss__result__price': {
					fontSize: '16px',
					'&:not(.ss__price--strike)': {
						fontWeight: custom.fonts.weight01,
					},
				},
				'.ss__price--strike': {
					fontSize: '14px',
					'&, span': {
						color: lightGray,
					},
				},
			},
			'.ss__result__details__variant-selection, .ss__result__add-to-cart-wrapper': {
				order: 20,
			},
		},
		[`@media (max-width: ${mobileBp - 100}px)`]: {
			'&.ss__result--list': {
				alignItems: 'stretch',
				'&, .ss__result__details': {
					flexFlow: 'column nowrap',
				},
				'.ss__result__image-wrapper': {
					flex: '0 1 auto',
				},
				'.ss__result__details': {
					flex: '1 1 0%',
					textAlign: 'center',
					'&:after': {
						display: 'block',
					},
					'.ss__callout-badge, .ss__result__details__rating-wrapper': {
						justifyContent: 'center',
					},
					'& > *, .ss__result__details__title': {
						flex: '0 1 auto',
					},
					'.ss__result__details__pricing': {
						order: 0,
					},
					'.ss__result__details__variant-selection:not(:empty) .ss__variant-selection .ss__slideshow .ss__slideshow__container .ss__slideshow__track':
						{
							justifyContent: 'center',
						},
					'.ss__result__details__variant-selection:not(:empty) .ss__variant-selection, .ss__result__add-to-cart-wrapper .ss__button': {
						width: `100%`,
					},
				},
			},
		},
	});

	return resultStyles;
};

// Result component props
export const result: ThemeComponent<'result', ResultProps> = {
	default: {
		result: {
			themeStyleScript: resultStyleScript,
		},
	},
};
