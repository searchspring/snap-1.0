import { css } from '@emotion/react';
import type { RecommendationBundleListProps } from '../../../../components/Templates/RecommendationBundleList';
import { recommendationBundleListThemeComponentProps } from '../../../themeComponents/recommendationBundleList';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the RecommendationBundleEasyAdd component
const recommendationBundleListStyleScript = (props: RecommendationBundleListProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const lightGray = custom.utils.lightenColor(variables?.colors?.text, 0.65);
	const mobileBp = variables?.breakpoints?.mobile || 767;

	return css({
		margin: `${custom.spacing.x4}px 0`,
		'.ss__recommendation-profile-tracker': {
			'& > *': {
				margin: `0 0 ${custom.spacing.x4}px 0`,
				'&:last-child': {
					marginBottom: 0,
				},
			},
		},
		'.ss__recommendation-bundle-list__title': {
			fontSize: custom.utils.convertPxToEm(18),
			fontWeight: custom.fonts.weight02,
			color: variables?.colors?.secondary,
		},
		'.ss__recommendation-bundle-list__wrapper': {
			flexFlow: 'row wrap',
			margin: `0 -${custom.spacing.x1}px`,
			'&, & > div': {
				boxSizing: 'border-box',
			},
			'& > div': {
				width: '50%',
				minWidth: '1px',
				flex: '0 1 auto',
				padding: `0 ${custom.spacing.x1}px`,
				margin: `0 0 ${custom.spacing.x2}px 0`,
			},
			'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper': {
				margin: 0,
				gap: `${custom.spacing.x2}px`,
				'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper__checkbox, .ss__result': {
					minWidth: '1px',
				},
				'.ss__recommendation-bundle-list__wrapper__selector__result-wrapper__checkbox': {
					flex: '0 1 auto',
				},
				'.ss__result': {
					flex: '1 1 0%',
					'.ss__result__image-wrapper': {
						display: 'none',
					},
					'.ss__result__details': {
						gap: 0,
					},
				},
			},
		},
		'.ss__recommendation-bundle-list__wrapper__cta': {
			'.cta': {
				'.cta__inner': {
					'& > *': {
						margin: `0 0 ${custom.spacing.x2}px 0`,
						lineHeight: 1,
						'&:last-child': {
							marginBottom: 0,
						},
					},
					'.cta__inner_images': {
						flexFlow: 'row nowrap',
						gap: `${custom.spacing.x2 + custom.sizes.icon12}px`,
						marginBottom: `${custom.spacing.x4}px`,
						'.cta__inner__image-wrapper': {
							flex: '1 1 0%',
							minWidth: '1px',
							padding: 0,
							'.ss__icon': {
								width: `${custom.sizes.icon12}px`,
								height: `${custom.sizes.icon12}px`,
								top: 0,
								bottom: 0,
								right: `-${custom.spacing.x2 / 2 + custom.sizes.icon12}px`,
								margin: 'auto 0',
								fill: variables?.colors?.secondary,
								stroke: variables?.colors?.secondary,
							},
						},
					},
					'.cta__inner__subtotal__title, .cta__inner__price': {
						color: variables?.colors?.text,
					},
					'.cta__inner__price': {
						'.cta__inner__price__title, .cta__inner__price__wrapper': {
							display: 'inline-block',
							verticalAlign: 'middle',
						},
						'.cta__inner__price__title': {
							padding: `0 ${custom.spacing.x1}px 0 0`,
							fontWeight: custom.fonts.weight02,
							'&:after': {
								content: '":"',
							},
						},
						'.cta__inner__price__wrapper': {
							'& > span ~ span': {
								padding: `0 0 0 ${custom.spacing.x1}px`,
							},
							'.cta__inner__price__msrp': {
								fontSize: custom.utils.convertPxToEm(16),
								fontWeight: custom.fonts.weight01,
								color: variables?.colors?.primary,
								'*': {
									color: 'inherit',
								},
								s: {
									fontSize: custom.utils.convertPxToEm(14),
									fontWeight: 'normal',
									color: lightGray,
									'*': {
										color: 'inherit',
									},
								},
							},
						},
					},
				},
				'.cta__add-button': {
					margin: `${custom.spacing.x4}px 0`,
					borderWidth: 0,
				},
			},
		},
		[`@media (max-width: ${mobileBp}px)`]: {
			'.ss__recommendation-bundle-list__wrapper': {
				'& > div': {
					width: 'auto',
					flex: '1 1 100%',
				},
			},
		},
	});
};

// RecommendationBundleList component props come from Template export
export const recommendationBundleList: ThemeComponent<'recommendationBundleList', RecommendationBundleListProps> = {
	default: {
		...recommendationBundleListThemeComponentProps.default,
		recommendationBundleList: {
			...(recommendationBundleListThemeComponentProps.default?.['recommendationBundleList'] || {}),
			themeStyleScript: recommendationBundleListStyleScript,
			separatorIconSeedOnly: false,
		},
		'recommendationBundleList icon.bundle-cart': {
			icon: custom.icons.bag,
			size: `${custom.sizes.icon16 * 2}px`,
		},
		'recommendationBundleList result': {
			hideImage: true,
			hideBadge: true,
		},
	},
	mobile: {
		...recommendationBundleListThemeComponentProps.mobile,
	},
	tablet: {
		...recommendationBundleListThemeComponentProps.tablet,
	},
	desktop: {
		...recommendationBundleListThemeComponentProps.desktop,
	},
};
