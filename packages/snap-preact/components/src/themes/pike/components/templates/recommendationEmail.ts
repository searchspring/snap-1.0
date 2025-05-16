import { css } from '@emotion/react';
import type { RecommendationEmailProps } from '../../../../components/Templates/RecommendationEmail';
import { recommendationEmailThemeComponentProps } from '../../../themeComponents/recommendationEmail';
import { ThemeComponent } from '../../../../providers';

console.log(recommendationEmailThemeComponentProps);

// CSS in JS style script for the Email component
const emailStyleScripts = ({ theme }: RecommendationEmailProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

	return css({});
};

// Facet component props
export const recommendationEmail: ThemeComponent<'recommendationEmail', RecommendationEmailProps> = {
	default: {
		props: {
			...recommendationEmailThemeComponentProps.default?.props,
			themeStyleScript: emailStyleScripts,
		},
		components: recommendationEmailThemeComponentProps.default?.components,
	},
	mobile: recommendationEmailThemeComponentProps.mobile,
	desktop: recommendationEmailThemeComponentProps.desktop,
	tablet: recommendationEmailThemeComponentProps.tablet,
};
