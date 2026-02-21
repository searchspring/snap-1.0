import { css } from '@emotion/react';
import type { SlideoutProps } from '../../../../components/Molecules/Slideout';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Slideout component
const slideoutStyleScript = (props: SlideoutProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// slideout styles
	const slideoutStyles = css({
		...custom.styles.boxSizing('slideout', props?.treePath, props?.name),
	});

	return slideoutStyles;
};

// Slideout component props
export const slideout: ThemeComponent<'slideout', SlideoutProps> = {
	default: {
		slideout: {
			themeStyleScript: slideoutStyleScript,
		},
	},
};
