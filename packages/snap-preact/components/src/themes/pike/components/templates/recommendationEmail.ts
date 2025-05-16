import type { RecommendationEmailProps } from '../../../../components/Templates/RecommendationEmail';
import { recommendationEmailThemeComponentProps } from '../../../themeComponents/recommendationEmail';
import { ThemeComponent } from '../../../../providers';

// Facet component props
export const recommendationEmail: ThemeComponent<'recommendationEmail', RecommendationEmailProps> = {
	default: {
		props: {
			...recommendationEmailThemeComponentProps.default?.props,
		},
		components: recommendationEmailThemeComponentProps.default?.components,
	},
	mobile: recommendationEmailThemeComponentProps.mobile,
	desktop: recommendationEmailThemeComponentProps.desktop,
	tablet: recommendationEmailThemeComponentProps.tablet,
};
