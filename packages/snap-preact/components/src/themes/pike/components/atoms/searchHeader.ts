import { css } from '@emotion/react';
import type { SearchHeaderProps } from '../../../../components/Atoms/SearchHeader';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the SearchHeader component
const searchHeaderStyleScript = (props: SearchHeaderProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
};

// SearchHeader component props
export const searchHeader: ThemeComponent<'searchHeader', SearchHeaderProps> = {
	default: {
		props: {
			themeStyleScript: searchHeaderStyleScript,
			titleText: (data) => `Search Results${data.search?.query?.string ? ` for "${data.search.query.string}"` : ''}`,
		},
	},
};
