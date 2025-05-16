import { css } from '@emotion/react';
import type { RadioListProps } from '../../../../components/Molecules/RadioList';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the RadioList component
const radioListStyleScript = ({ theme }: RadioListProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

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
