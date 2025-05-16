import { css } from '@emotion/react';
import type { ListProps } from '../../../../components/Molecules/List';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the List component
const listStyleScript = (props: ListProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
};

// List component props
export const list: ThemeComponent<'list', ListProps> = {
	default: {
		props: {
			themeStyleScript: listStyleScript,
		},
	},
};
