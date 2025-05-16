import { css } from '@emotion/react';
import type { RecommendationBundleListProps } from '../../../../components/Templates/RecommendationBundleList';
import { recommendationBundleListThemeComponentProps } from '../../../themeComponents/recommendationBundleList';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the RecommendationBundle component
const recommendationBundleListStyleScript = (props: RecommendationBundleListProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
};

// RecommendationBundleList component props come from Template export
export const recommendationBundleList: ThemeComponent<'recommendationBundleList', RecommendationBundleListProps> = {
	default: {
		props: {
			...recommendationBundleListThemeComponentProps.default?.props,
			themeStyleScript: recommendationBundleListStyleScript,
		},
		components: recommendationBundleListThemeComponentProps.default?.components,
	},
	mobile: recommendationBundleListThemeComponentProps.mobile,
	desktop: recommendationBundleListThemeComponentProps.desktop,
	tablet: recommendationBundleListThemeComponentProps.tablet,
};
