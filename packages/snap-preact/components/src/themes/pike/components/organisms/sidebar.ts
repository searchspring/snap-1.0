import { css } from '@emotion/react';
import type { SidebarProps } from '../../../../components/Organisms/Sidebar';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Sidebar component
const sidebarStyleScript = (props: SidebarProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		'.ss__filter-summary .ss__filter-summary__title, .ss__facets .ss__facet .ss__facet__header': {
			margin: ` 0 0 ${custom.spacing.x4}px 0`,
			padding: ` 0 0 ${custom.spacing.x2}px 0`,
			borderBottom: `2px solid ${variables?.colors?.primary}`,
			fontSize: '16px',
			fontWeight: custom.fonts.weight02,
			color: variables?.colors?.secondary,
		},
		'.ss__filter-summary, .ss__facet': {
			margin: ` 0 0 ${custom.spacing.x6}px 0`,
		},
		'.ss__filter-summary': {
			display: 'block',
			'.ss__filter-summary__title': {
				'&:after': {
					display: 'none',
				},
			},
		},
	});
};

// Sidebar component props
export const sidebar: ThemeComponent<'sidebar', SidebarProps> = {
	default: {
		sidebar: {
			themeStyleScript: sidebarStyleScript,
		},
	},
};
