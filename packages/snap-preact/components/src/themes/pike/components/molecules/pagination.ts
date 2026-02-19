import { css } from '@emotion/react';
import type { PaginationProps } from '../../../../components/Molecules/Pagination';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Pagination component
const paginationStyleScript = (props: PaginationProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const mobileBp = variables?.breakpoints?.mobile || custom.breakpoints.mobile;

	return css({
		...custom.styles.boxSizing('pagination', props?.treePath, props?.name),
		nav: {
			display: 'flex',
			flexFlow: 'row wrap',
			alignItems: 'center',
			justifyContent: 'center',
			'.ss__pagination__page, span': {
				padding: `0 ${custom.spacing.x1}px`,
				fontSize: custom.utils.convertPxToEm(14),
				color: variables?.colors?.text,
			},
			'.ss__pagination__page': {
				minWidth: '1px',
				minHeight: '1px',
			},
			'.ss__pagination__page--active': {
				color: variables?.colors?.primary,
			},
			'.ss__pagination__page--previous, .ss__pagination__page--next': {
				lineHeight: `${custom.sizes.icon12}px`,
			},
		},
		[`@media (max-width: ${mobileBp}px)`]: {
			nav: {
				'.ss__pagination__page, span': {
					padding: `0 ${custom.spacing.x2}px`,
					fontSize: custom.utils.convertPxToEm(16),
				},
				'.ss__pagination__page--previous, .ss__pagination__page--next': {
					lineHeight: `${custom.sizes.icon14}px`,
				},
			},
		},
	});
};

// Pagination component props
export const pagination: ThemeComponent<'pagination', PaginationProps> = {
	default: {
		pagination: {
			themeStyleScript: paginationStyleScript,
		},
		'pagination icon': {
			size: `${custom.sizes.icon12}px`,
			width: `${custom.sizes.icon12}px`,
			height: `${custom.sizes.icon12}px`,
		},
		'pagination icon.prev': {
			icon: custom.icons.arrowLeft,
			fill: custom.colors.primary,
		},
		'pagination icon.next': {
			icon: custom.icons.arrowRight,
			fill: custom.colors.primary,
		},
	},
	mobile: {
		'pagination icon': {
			size: `${custom.sizes.icon14}px`,
			width: `${custom.sizes.icon14}px`,
			height: `${custom.sizes.icon14}px`,
		},
	},
};
