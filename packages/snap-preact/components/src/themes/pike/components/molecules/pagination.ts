import { css } from '@emotion/react';
import type { PaginationProps } from '../../../../components/Molecules/Pagination';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Pagination component
const paginationStyleScript = (props: PaginationProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const mobileBp = variables?.breakpoints?.mobile || custom.breakpoints.mobile;

	const paginationStyles = css({
		...custom.styles.boxSizing('pagination', props?.treePath, props?.name),
		nav: {
			display: 'flex',
			flexFlow: 'row wrap',
			alignItems: 'center',
			justifyContent: 'center',
			gap: `${custom.spacing.x2}px`,
			'.ss__pagination__page, span': {
				padding: 0,
				fontSize: '14px',
				color: variables?.colors?.text,
			},
			'.ss__pagination__page': {
				minWidth: '1px',
				minHeight: '1px',
				'&.ss__pagination__page--active': {
					...custom.styles.activeText(variables?.colors?.primary),
				},
			},
			'.ss__pagination__page--previous, .ss__pagination__page--next': {
				lineHeight: `10px`,
			},
		},
		[`@media (max-width: ${mobileBp}px)`]: {
			nav: {
				gap: `${custom.spacing.x4}px`,
				'.ss__pagination__page, span': {
					fontSize: '16px',
				},
			},
		},
	});

	return paginationStyles;
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
