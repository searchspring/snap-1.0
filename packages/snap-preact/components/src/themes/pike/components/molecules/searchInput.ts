import { css } from '@emotion/react';
import type { SearchInputProps } from '../../../../components/Molecules/SearchInput';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the SearchInput component
const searchInputStyleScript = (props: SearchInputProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
};

// SearchInput component props
export const searchInput: ThemeComponent<'searchInput', SearchInputProps> = {
	default: {
		props: {
			themeStyleScript: searchInputStyleScript,
		},
	},
};
