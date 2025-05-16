import { css } from '@emotion/react';
import type { RadioProps } from '../../../../components/Molecules/Radio';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Radio component
const radioStyleScript = (props: RadioProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
};

// Radio component props
export const radio: ThemeComponent<'radio', RadioProps> = {
	default: {
		props: {
			themeStyleScript: radioStyleScript,
		},
	},
};
