import { css } from '@emotion/react';
import { ThemeComponent } from '../../../../providers';
import { ToolbarProps } from '../../../../components/Organisms/Toolbar';

// CSS in JS style script for the Toolbar component
const toolbarStyleScript = (props: ToolbarProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
};

// Toolbar component props
export const toolbar: ThemeComponent<'toolbar', ToolbarProps> = {
	default: {
		toolbar: {
			themeStyleScript: toolbarStyleScript,
		},
	},
};
