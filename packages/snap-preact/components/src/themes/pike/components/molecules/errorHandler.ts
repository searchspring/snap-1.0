import { css } from '@emotion/react';
import type { ErrorHandlerProps } from '../../../../components/Molecules/ErrorHandler';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the ErrorHandler component
const errorHandlerStyleScript = ({ theme }: ErrorHandlerProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

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
