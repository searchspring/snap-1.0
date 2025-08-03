import { css } from '@emotion/react';
import type { AutocompleteProps } from '../../../../components/Organisms/Autocomplete';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the Autocomplete component
const autocompleteStyleScript = (props: AutocompleteProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
};

// Autocomplete component props
export const autocomplete: ThemeComponent<'autocomplete', AutocompleteProps> = {
	default: {
		autocomplete: {
			themeStyleScript: autocompleteStyleScript,
		},
	},
};
