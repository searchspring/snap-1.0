import { css } from '@emotion/react';
import type { ErrorHandlerProps } from '../../../../components/Molecules/ErrorHandler';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the ErrorHandler component
const errorHandlerStyleScript = (props: ErrorHandlerProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
};

// ErrorHandler component props
export const errorHandler: ThemeComponent<'errorHandler', ErrorHandlerProps> = {
	default: {
		props: {
			themeStyleScript: errorHandlerStyleScript,
		},
	},
};
