import { css } from '@emotion/react';
import type { MobileSidebarProps } from '../../../../components/Organisms/MobileSidebar';
import { ThemeComponent } from '../../../../providers';
import { customVariables } from '../../custom';

// CSS in JS style script for the MobileSidebar component
const mobileSidebarStyleScript = (props: MobileSidebarProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
};

// MobileSidebar component props
export const mobileSidebar: ThemeComponent<'mobileSidebar', MobileSidebarProps> = {
	default: {
		props: {
			themeStyleScript: mobileSidebarStyleScript,
			openButtonIcon: customVariables.icons.filter,
		},
		components: {
			'*mobileSidebar button.close': {
				icon: customVariables.icons.close,
			},
			'*mobileSidebar button.slideout icon': {
				size: '16px',
			},
		},
	},
};
