import { css } from '@emotion/react';
import type { SidebarProps } from '../../../../components/Organisms/Sidebar';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Sidebar component
const sidebarStyleScript = ({ theme }: SidebarProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

	return css({});
};

// Sidebar component props
export const sidebar: ThemeComponent<'sidebar', SidebarProps> = {
	default: {
		props: {
			themeStyleScript: sidebarStyleScript,
		},
	},
};
