import { css } from '@emotion/react';
import type { SlideoutProps } from '../../../../components/Molecules/Slideout';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Slideout component
const slideoutStyleScript = (props: SlideoutProps & { isActive: boolean }) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
};

// Slideout component props
export const slideout: ThemeComponent<'slideout', SlideoutProps> = {
	default: {
		slideout: {
			themeStyleScript: slideoutStyleScript,
		},
	},
};
