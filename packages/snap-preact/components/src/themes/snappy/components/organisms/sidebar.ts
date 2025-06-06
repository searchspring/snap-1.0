import { css } from '@emotion/react';
import type { SidebarProps } from '../../../../components/Organisms/Sidebar';
import { ThemeComponent } from '../../../../providers';
// CSS in JS style script for the Sidebar component
const sidebarStyleScript = ({ theme }: SidebarProps) => {
	const variables = theme?.variables;

	return css({
		boxSizing: 'border-box',
		width: '100%',
		margin: '0 40px 0 0',

		'& .ss__sidebar__title': {
			color: variables?.colors?.primary,
		},
	});
};

// Sidebar component props
export const sidebar: ThemeComponent<'sidebar', SidebarProps> = {
	default: {
		sidebar: {
			themeStyleScript: sidebarStyleScript,
			hideTitleText: true,
		},
	},
};
