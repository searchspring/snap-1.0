import { css } from '@emotion/react';
import type { RadioListProps } from '../../../../components/Molecules/RadioList';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the RadioList component
const radioListStyleScript = (props: RadioListProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
};

// RadioList component props
export const radioList: ThemeComponent<'radioList', RadioListProps> = {
	default: {
		props: {
			themeStyleScript: radioListStyleScript,
		},
	},
};
