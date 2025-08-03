import { ThemeResponsiveComplete } from '../../../../providers';

// ORGANISMS Imports
import { facet } from './facet';
import { facets } from './facets';
import { facetsHorizontal } from './facetsHorizontal';
import { filterSummary } from './filterSummary';
import { mobileSidebar } from './mobileSidebar';
import { noResults } from './noResults';
import { sidebar } from './sidebar';
import { termsList } from './termsList';
import { toolbar } from './toolbar';

export const organisms: ThemeResponsiveComplete = {
	default: {
		...facet.default,
		...facets.default,
		...facetsHorizontal.default,
		...filterSummary.default,
		...mobileSidebar.default,
		...noResults.default,
		...sidebar.default,
		...toolbar.default,
		...termsList.default,
	},
	mobile: {
		...facet.mobile,
		...facets.mobile,
		...facetsHorizontal.mobile,
		...filterSummary.mobile,
		...mobileSidebar.mobile,
		...noResults.mobile,
		...sidebar.mobile,
		...toolbar.mobile,
		...termsList.mobile,
	},
	tablet: {
		...facet.tablet,
		...facets.tablet,
		...facetsHorizontal.tablet,
		...filterSummary.tablet,
		...mobileSidebar.tablet,
		...noResults.tablet,
		...sidebar.tablet,
		...toolbar.tablet,
		...termsList.tablet,
	},
	desktop: {
		...facet.desktop,
		...facets.desktop,
		...facetsHorizontal.desktop,
		...filterSummary.desktop,
		...mobileSidebar.desktop,
		...noResults.desktop,
		...sidebar.desktop,
		...toolbar.desktop,
		...termsList.desktop,
	},
};
