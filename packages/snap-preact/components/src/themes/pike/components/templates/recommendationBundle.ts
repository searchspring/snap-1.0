import { css } from '@emotion/react';
import type { RecommendationBundleProps } from '../../../../components/Templates/RecommendationBundle';
import { recommendationBundleThemeComponentProps } from '../../../themeComponents/recommendationBundle';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the RecommendationBundle component
const recommendationBundleStyleScript = (props: RecommendationBundleProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
};

// RecommendationBundle component props come from Template export
export const recommendationBundle: ThemeComponent<'recommendationBundle', RecommendationBundleProps> = {
	default: {
		...recommendationBundleThemeComponentProps.default,
		recommendationBundle: {
			...(recommendationBundleThemeComponentProps.default?.['recommendationBundle'] || {}),
			separatorIcon: custom.icons.plus,
			ctaIcon: custom.icons.bag,
			themeStyleScript: recommendationBundleStyleScript,
		},
	},
	mobile: recommendationBundleThemeComponentProps.mobile,
	desktop: recommendationBundleThemeComponentProps.desktop,
	tablet: recommendationBundleThemeComponentProps.tablet,
};
