import { css } from '@emotion/react';
import type { ResultProps } from '../../../../components/Molecules/Result';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Result component
const resultStyleScript = (props: ResultProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
};

// Result component props
export const result: ThemeComponent<'result', ResultProps> = {
	default: {
		props: {
			themeStyleScript: resultStyleScript,
		},
	},
};
