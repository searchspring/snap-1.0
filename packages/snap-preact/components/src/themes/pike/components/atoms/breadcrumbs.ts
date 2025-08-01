import { css } from '@emotion/react';
import type { BreadcrumbsProps } from '../../../../components/Atoms/Breadcrumbs';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Breadcrumbs component
const breadcrumbsStyleScript = (props: BreadcrumbsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		'.ss__breadcrumbs__crumbs': {
			margin: `0 -${custom.spacing.x1}px`,
			'&, .ss__breadcrumbs__crumbs__crumb': {
				listStyle: 'none',
			},
			'.ss__breadcrumbs__crumbs__crumb': {
				padding: `0 ${custom.spacing.x1}px`,
				'&:last-child': {
					color: variables?.colors?.primary,
					fontWeight: custom?.fonts?.weight01,
				},
			},
		},
	});
};

// Breadcrumbs component props
export const breadcrumbs: ThemeComponent<'breadcrumbs', BreadcrumbsProps> = {
	default: {
		breadcrumbs: {
			themeStyleScript: breadcrumbsStyleScript,
		},
	},
};
