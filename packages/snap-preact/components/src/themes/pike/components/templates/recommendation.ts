import { css } from '@emotion/react';
import type { RecommendationProps } from '../../../../components/Templates/Recommendation';
import { recommendationThemeComponentProps } from '../../../themeComponents/recommendation';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Recommendation component
const recommendationStyleScript = (props: RecommendationProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
};

// Recommendation component props come from Template export
export const recommendation: ThemeComponent<'recommendation', RecommendationProps> = {
	default: {
		...recommendationThemeComponentProps.default,
		recommendation: {
			...(recommendationThemeComponentProps.default?.['recommendation'] || {}),
			themeStyleScript: recommendationStyleScript,
		},
	},
	mobile: recommendationThemeComponentProps.mobile,
	desktop: recommendationThemeComponentProps.desktop,
	tablet: recommendationThemeComponentProps.tablet,
};
