import { css } from '@emotion/react';
import type { SearchHeaderProps } from '../../../../components/Atoms/SearchHeader';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the SearchHeader component
const searchHeaderStyleScript = (props: SearchHeaderProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({
		h3: {
			margin: 0,
			fontWeight: custom.fonts.weight02,
			color: variables?.colors?.secondary,
		},
		h5: {
			margin: `${custom.spacing.x2}px 0 0 0`,
			fontSize: '16px',
			fontWeight: 400,
			color: variables?.colors?.text,
		},
		em: {
			fontStyle: 'normal',
		},
		'.ss__query': {
			color: variables?.colors?.primary,
		},
	});
};

// SearchHeader component props
export const searchHeader: ThemeComponent<'searchHeader', SearchHeaderProps> = {
	default: {
		props: {
			themeStyleScript: searchHeaderStyleScript,
			titleText: (data) => {
				const search = data?.search;
				const query = search?.query?.string ? ` for "<span class="ss__query">${search.query.string}</span>"` : ``;
				return search?.matchType == 'expanded' ? `We couldn't find an exact match${query}, but here's something similar:` : `Search Results${query}`;
			},
		},
	},
};
