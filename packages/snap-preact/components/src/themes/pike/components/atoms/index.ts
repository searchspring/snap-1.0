import { ThemeResponsiveComplete } from '../../../../providers';

// ATOMS Imports
import { breadcrumbs } from './breadcrumbs';
import { button } from './button';
import { icon } from './icon';
import { image } from './image';
import { loadingBar } from './loadingBar';
import { overlay } from './overlay';
import { paginationInfo } from './paginationInfo';
import { price } from './price';
import { searchHeader } from './searchHeader';
import { skeleton } from './skeleton';

export const atoms: ThemeResponsiveComplete = {
	default: {
		...breadcrumbs.default,
		...button.default,
		...icon.default,
		...image.default,
		...loadingBar.default,
		...overlay.default,
		...price.default,
		...searchHeader.default,
		...skeleton.default,
		...paginationInfo.default,
	},
	mobile: {
		...breadcrumbs.mobile,
		...button.mobile,
		...icon.mobile,
		...image.mobile,
		...loadingBar.mobile,
		...overlay.mobile,
		...price.mobile,
		...searchHeader.mobile,
		...skeleton.mobile,
		...paginationInfo.mobile,
	},
	tablet: {
		...breadcrumbs.tablet,
		...icon.tablet,
		...image.tablet,
		...loadingBar.tablet,
		...overlay.tablet,
		...price.tablet,
		...searchHeader.tablet,
		...skeleton.tablet,
		...paginationInfo.tablet,
	},
	desktop: {
		...breadcrumbs.desktop,
		...button.desktop,
		...icon.desktop,
		...image.desktop,
		...loadingBar.desktop,
		...overlay.desktop,
		...price.desktop,
		...searchHeader.desktop,
		...skeleton.desktop,
		...paginationInfo.desktop,
	},
};
