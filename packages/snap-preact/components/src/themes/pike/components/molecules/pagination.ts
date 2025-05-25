import { css } from '@emotion/react';
import type { PaginationProps } from '../../../../components/Molecules/Pagination';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Pagination component
const paginationStyleScript = (props: PaginationProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		nav: {
			display: 'flex',
			flexFlow: 'row wrap',
			alignItems: 'center',
			justifyContent: 'center',
			'.ss__pagination__page, span': {
				padding: `0 ${custom.spacing.x2}px`,
				fontSize: '16px',
				color: variables?.colors?.text,
			},
			'.ss__pagination__page': {},
		},
		[`@media (min-width: ${variables?.breakpoints?.mobile}px)`]: {
			nav: {
				'.ss__pagination__page, span': {
					padding: `0 ${custom.spacing.x1}px`,
					fontSize: '14px',
				},
				'.ss__icon': {
					width: `${custom.sizes.icon12}px`,
					height: `${custom.sizes.icon12}px`,
				},
			},
		},
	});
};

// Pagination component props
export const pagination: ThemeComponent<'pagination', PaginationProps> = {
	default: {
		props: {
			themeStyleScript: paginationStyleScript,
		},
		components: {
			'*pagination icon': {
				size: `${custom.sizes.icon14}px`,
			},
			'*pagination icon.prev': {
				icon: custom.icons.arrowLeft,
			},
			'*pagination icon.next': {
				icon: custom.icons.arrowRight,
			},
		},
	},
};
