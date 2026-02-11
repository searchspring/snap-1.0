import { ThemeResponsiveComplete } from '../../../../providers';

// ATOMS Imports
import { badgeImage } from './badgeImage';
import { badgePill } from './badgePill';
import { badgeRectangle } from './badgeRectangle';
import { badgeText } from './badgeText';
import { breadcrumbs } from './breadcrumbs';
import { button } from './button';
import { dropdown } from './dropdown';
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
		...badgeImage.default,
		...badgePill.default,
		...badgeRectangle.default,
		...badgeText.default,
		...breadcrumbs.default,
		...button.default,
		...dropdown.default,
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
		...badgeImage.mobile,
		...badgePill.mobile,
		...badgeRectangle.mobile,
		...badgeText.mobile,
		...breadcrumbs.mobile,
		...button.mobile,
		...dropdown.mobile,
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
		...badgeImage.tablet,
		...badgePill.tablet,
		...badgeRectangle.tablet,
		...badgeText.tablet,
		...breadcrumbs.tablet,
		...button.tablet,
		...dropdown.tablet,
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
		...badgeImage.desktop,
		...badgePill.desktop,
		...badgeRectangle.desktop,
		...badgeText.desktop,
		...breadcrumbs.desktop,
		...button.desktop,
		...dropdown.desktop,
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
