import { css } from '@emotion/react';
import type { RecommendationProps } from '../../../../components/Templates/Recommendation';
import { recommendationThemeComponentProps } from '../../../themeComponents/recommendation';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const arrowSizes = {
	default: 32,
	tablet: 28,
	mobile: 24,
};

// CSS in JS style script for the Recommendation component
const recommendationStyleScript = (props: RecommendationProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const desktopBp = variables?.breakpoints?.desktop || custom.breakpoints.desktop;
	const tabletBp = variables?.breakpoints?.tablet || custom.breakpoints.tablet;
	const mobileBp = variables?.breakpoints?.mobile || custom.breakpoints.mobile;

	// recommendation styles
	const recommendationStyles = css({
		margin: `${custom.spacing.x8}px 0`,
		...custom.styles.boxSizing('recommendation', props?.treePath, props?.name),
		'.ss__recommendation__title': {
			margin: `0 0 ${custom.spacing.x4}px 0`,
			...custom.styles.headerText(variables?.colors?.secondary, '22px'),
			textAlign: 'center',
		},
		'.ss__carousel': {
			padding: `0 ${custom.spacing.x4 + arrowSizes.default}px`,
			'.ss__carousel__prev-wrapper, .ss__carousel__next-wrapper': {
				bottom: `calc(10.5rem - ${custom.spacing.x4}px)`,
			},
		},
		[`@media (max-width: ${desktopBp}px)`]: {
			'.ss__carousel': {
				'.ss__carousel__prev-wrapper, .ss__carousel__next-wrapper': {
					bottom: `calc(11rem - ${custom.spacing.x4}px)`,
				},
			},
		},
		[`@media (max-width: ${tabletBp}px)`]: {
			position: 'relative',
			'.ss__recommendation__title': {
				textAlign: 'left',
				...custom.styles.textOverflow(),
				paddingRight: `${arrowSizes.tablet * 2 + custom.spacing.x1 + custom.spacing.x4}px`,
			},
			'.ss__carousel': {
				padding: 0,
				position: 'static',
				'.ss__carousel__prev-wrapper, .ss__carousel__next-wrapper': {
					top: '2.5px',
					bottom: 'auto',
					left: 'auto',
					width: `${arrowSizes.tablet}px`,
					height: `${arrowSizes.tablet}px`,
				},
				'.ss__carousel__prev-wrapper': {
					right: `${arrowSizes.tablet + custom.spacing.x1}px`,
				},
				'.ss__carousel__next-wrapper': {
					right: 0,
				},
			},
		},
		[`@media (max-width: ${mobileBp}px)`]: {
			'.ss__recommendation__title': {
				paddingRight: `${arrowSizes.mobile * 2 + custom.spacing.x1 + custom.spacing.x2}px`,
			},
			'.ss__carousel': {
				'.ss__carousel__prev-wrapper, .ss__carousel__next-wrapper': {
					top: '4.5px',
					width: `${arrowSizes.mobile}px`,
					height: `${arrowSizes.mobile}px`,
				},
				'.ss__carousel__prev-wrapper': {
					right: `${arrowSizes.mobile + custom.spacing.x1}px`,
				},
			},
		},
		[`@media (max-width: ${custom.breakpoints.small}px)`]: {
			'.ss__recommendation__title': {
				fontSize: '18px',
			},
			'.ss__carousel': {
				'.ss__carousel__prev-wrapper, .ss__carousel__next-wrapper': {
					top: '1.5px',
				},
			},
		},
	});

	return recommendationStyles;
};

// Recommendation component props come from Template export
export const recommendation: ThemeComponent<'recommendation', RecommendationProps> = {
	default: {
		...recommendationThemeComponentProps.default,
		recommendation: {
			...(recommendationThemeComponentProps.default?.['recommendation'] || {}),
			themeStyleScript: recommendationStyleScript,
		},
		'recommendation carousel': {
			spaceBetween: custom.spacing.x4,
		},
		'recommendation carousel icon.prev': {
			size: `${custom.sizes.icon12}px`,
			width: `${custom.sizes.icon12}px`,
			height: `${custom.sizes.icon12}px`,
		},
		'recommendation carousel icon.next': {
			size: `${custom.sizes.icon12}px`,
			width: `${custom.sizes.icon12}px`,
			height: `${custom.sizes.icon12}px`,
		},
	},
	mobile: {
		...recommendationThemeComponentProps.mobile,
		recommendation: {
			...(recommendationThemeComponentProps.mobile?.['recommendation'] || {}),
		},
		'recommendation carousel': {
			spaceBetween: custom.spacing.x2,
		},
		'recommendation carousel icon.prev': {
			size: `${custom.sizes.icon08}px`,
			width: `${custom.sizes.icon08}px`,
			height: `${custom.sizes.icon08}px`,
		},
		'recommendation carousel icon.next': {
			size: `${custom.sizes.icon08}px`,
			width: `${custom.sizes.icon08}px`,
			height: `${custom.sizes.icon08}px`,
		},
	},
	tablet: {
		...recommendationThemeComponentProps.tablet,
		recommendation: {
			...(recommendationThemeComponentProps.tablet?.['recommendation'] || {}),
		},
		'recommendation carousel': {
			spaceBetween: custom.spacing.x4,
		},
		'recommendation carousel icon.prev': {
			size: `${custom.sizes.icon10}px`,
			width: `${custom.sizes.icon10}px`,
			height: `${custom.sizes.icon10}px`,
		},
		'recommendation carousel icon.next': {
			size: `${custom.sizes.icon10}px`,
			width: `${custom.sizes.icon10}px`,
			height: `${custom.sizes.icon10}px`,
		},
	},
	desktop: {
		...recommendationThemeComponentProps.desktop,
		recommendation: {
			...(recommendationThemeComponentProps.desktop?.['recommendation'] || {}),
		},
		'recommendation carousel': {
			spaceBetween: custom.spacing.x4,
		},
	},
};
