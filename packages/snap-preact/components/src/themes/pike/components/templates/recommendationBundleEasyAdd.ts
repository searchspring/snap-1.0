import { css } from '@emotion/react';
import type { RecommendationBundleEasyAddProps } from '../../../../components/Templates/RecommendationBundleEasyAdd';
import { recommendationBundleEasyAddThemeComponentProps } from '../../../themeComponents/recommendationBundleEasyAdd';
import { ThemeComponent } from '../../../../providers';
import { recommendationCTAStyleScript } from './recommendationCTA';
import { custom } from '../../custom';

// CSS in JS style script for the RecommendationBundleEasyAdd component
const recommendationBundleEasyAddStyleScript = (props: RecommendationBundleEasyAddProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// bundle easy add shared styles
	const sharedStyles = css({
		'.ss__recommendation-bundle-easy-add__wrapper__cta': {
			...recommendationCTAStyleScript(props, 'bundle-easy-add', `${custom.spacing.x2}px`),
		},
	});

	// bundle easy add styles
	const bundleEasyAddStyles = css({
		margin: `${custom.spacing.x4}px 0`,
		...custom.styles.boxSizing('recommendationBundleEasyAdd', props?.treePath, props?.name),
		'.ss__recommendation-profile-tracker': {
			'& > *': {
				margin: `0 0 ${custom.spacing.x2}px 0`,
				'&:last-child': {
					marginBottom: 0,
				},
			},
		},
		'.ss__recommendation-bundle-easy-add__title': {
			...custom.styles.headerText(variables?.colors?.secondary, '16px'),
		},
		'.ss__recommendation-bundle-easy-add__wrapper': {
			display: 'block',
			'.ss__recommendation-bundle-easy-add__wrapper__selector': {
				'.ss__recommendation-bundle-easy-add__wrapper__selector__result-wrapper': {
					margin: 0,
					'.ss__result.ss__result--list': {
						gap: `${custom.spacing.x2}px`,
						'.ss__result__details': {
							'.ss__result__details__title, .ss__result__details__pricing': {
								flex: '1 1 100%',
							},
							'.ss__result__details__title a, .ss__result__details__pricing .ss__result__price': {
								fontSize: '14px',
							},
							'.ss__result__details__title a': {
								display: '-webkit-box',
								'-webkit-box-orient': 'vertical',
								overflow: 'hidden',
								'-webkit-line-clamp': '2',
							},
							'.ss__result__details__variant-selection:not(:empty) .ss__variant-selection': {
								width: '100%',
							},
						},
					},
				},
			},
		},
		'.ss__recommendation-bundle-easy-add__wrapper__cta__subtotal': {
			'.ss__recommendation-bundle-easy-add__wrapper__cta__subtotal__icon__wrapper': {
				display: 'none',
			},
		},
	});

	// recommendation bundle easy add styles
	const recommendationBundleEasyAddStyles = css([sharedStyles, bundleEasyAddStyles]);

	return recommendationBundleEasyAddStyles;
};

// RecommendationBundleEasyAdd component props come from Template export
export const recommendationBundleEasyAdd: ThemeComponent<'recommendationBundleEasyAdd', RecommendationBundleEasyAddProps> = {
	default: {
		...recommendationBundleEasyAddThemeComponentProps.default,
		recommendationBundleEasyAdd: {
			...(recommendationBundleEasyAddThemeComponentProps.default?.['recommendationBundleEasyAdd'] || {}),
			themeStyleScript: recommendationBundleEasyAddStyleScript,
			ctaButtonText: 'Add Both to Cart',
			ctaButtonSuccessText: 'Added!',
		},
		'recommendationBundleEasyAdd icon.bundle-cart': {
			size: `${custom.sizes.icon16 * 2}px`,
			width: `${custom.sizes.icon16 * 2}px`,
			height: `${custom.sizes.icon16 * 2}px`,
			icon: custom.icons.bag,
			fill: custom.colors.secondary,
		},
		'recommendationBundleEasyAdd result': {
			layout: 'list',
		},
	},
	mobile: {
		...recommendationBundleEasyAddThemeComponentProps.mobile,
		recommendationBundleEasyAdd: {
			...(recommendationBundleEasyAddThemeComponentProps.mobile?.['recommendationBundleEasyAdd'] || {}),
		},
	},
	tablet: {
		...recommendationBundleEasyAddThemeComponentProps.tablet,
		recommendationBundleEasyAdd: {
			...(recommendationBundleEasyAddThemeComponentProps.tablet?.['recommendationBundleEasyAdd'] || {}),
		},
	},
	desktop: {
		...recommendationBundleEasyAddThemeComponentProps.desktop,
		recommendationBundleEasyAdd: {
			...(recommendationBundleEasyAddThemeComponentProps.desktop?.['recommendationBundleEasyAdd'] || {}),
		},
	},
};
