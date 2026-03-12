import { RecommendationProps, RecommendationTemplatesLegalProps } from '../../components/Templates/Recommendation';
import { ThemeComponent } from '../../providers';

export const recommendationThemeComponentProps: ThemeComponent<'recommendation', RecommendationProps, RecommendationTemplatesLegalProps> = {
	default: {
		'recommendation carousel': {
			slidesPerView: 5,
			slidesPerGroup: 5,
		},
	},
	mobile: {
		'recommendation carousel': {
			slidesPerView: 2,
			slidesPerGroup: 2,
		},
	},
	tablet: {
		'recommendation carousel': {
			slidesPerView: 3,
			slidesPerGroup: 3,
		},
	},
	desktop: {
		'recommendation carousel': {
			slidesPerView: 4,
			slidesPerGroup: 4,
		},
	},
};
