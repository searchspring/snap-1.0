import { css } from '@emotion/react';
import type { LoadMoreProps } from '../../../../components/Molecules/LoadMore';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the LoadMore component
const loadMoreStyleScript = (props: LoadMoreProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	return css({});
};

// LoadMore component props
export const loadMore: ThemeComponent<'loadMore', LoadMoreProps> = {
	default: {
		loadMore: {
			themeStyleScript: loadMoreStyleScript,
		},
	},
};
