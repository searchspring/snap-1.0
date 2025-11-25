import { ThemeResponsiveComplete } from '../../../../providers';

// TEMPLATES
import { autocompleteFixed } from './autocompleteFixed';
import { autocompleteModal } from './autocompleteModal';
import { autocompleteSlideout } from './autocompleteSlideout';
import { recommendation } from './recommendation';
import { recommendationBundle } from './recommendationBundle';
import { recommendationBundleEasyAdd } from './recommendationBundleEasyAdd';
import { recommendationBundleList } from './recommendationBundleList';
import { recommendationBundleVertical } from './recommendationBundleVertical';
import { recommendationGrid } from './recommendationGrid';
import { recommendationEmail } from './recommendationEmail';
import { search } from './search';
import { searchHorizontal } from './searchHorizontal';
import { searchBoca } from './searchBoca';
import { searchSnapnco } from './searchSnapnco';
import { searchSnappy } from './searchSnappy';

export const templates: ThemeResponsiveComplete = {
	default: {
		...autocompleteFixed.default,
		...autocompleteModal.default,
		...autocompleteSlideout.default,
		...recommendation.default,
		...recommendationBundle.default,
		...recommendationBundleEasyAdd.default,
		...recommendationBundleList.default,
		...recommendationBundleVertical.default,
		...recommendationGrid.default,
		...recommendationEmail.default,
		...search.default,
		...searchBoca.default,
		...searchSnapnco.default,
		...searchSnappy.default,
		...searchHorizontal.default,
	},
	mobile: {
		...autocompleteFixed.mobile,
		...autocompleteModal.mobile,
		...autocompleteSlideout.mobile,
		...recommendation.mobile,
		...recommendationBundle.mobile,
		...recommendationBundleEasyAdd.mobile,
		...recommendationBundleList.mobile,
		...recommendationBundleVertical.mobile,
		...recommendationGrid.mobile,
		...recommendationEmail.mobile,
		...search.mobile,
		...searchBoca.mobile,
		...searchSnapnco.mobile,
		...searchSnappy.mobile,
		...searchHorizontal.mobile,
	},
	tablet: {
		...autocompleteFixed.tablet,
		...autocompleteModal.tablet,
		...autocompleteSlideout.tablet,
		...recommendation.tablet,
		...recommendationBundle.tablet,
		...recommendationBundleEasyAdd.tablet,
		...recommendationBundleList.tablet,
		...recommendationBundleVertical.tablet,
		...recommendationGrid.tablet,
		...recommendationEmail.tablet,
		...search.tablet,
		...searchBoca.tablet,
		...searchSnapnco.tablet,
		...searchSnappy.tablet,
		...searchHorizontal.tablet,
	},
	desktop: {
		...autocompleteFixed.desktop,
		...autocompleteModal.desktop,
		...autocompleteSlideout.desktop,
		...recommendation.desktop,
		...recommendationBundle.desktop,
		...recommendationBundleEasyAdd.desktop,
		...recommendationBundleList.desktop,
		...recommendationBundleVertical.desktop,
		...recommendationGrid.desktop,
		...recommendationEmail.desktop,
		...search.desktop,
		...searchBoca.desktop,
		...searchSnapnco.desktop,
		...searchSnappy.desktop,
		...searchHorizontal.desktop,
	},
};
