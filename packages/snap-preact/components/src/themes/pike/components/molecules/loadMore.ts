import { css } from '@emotion/react';
import type { LoadMoreProps } from '../../../../components/Molecules/LoadMore';
import { ThemeComponent } from '../../../../providers';

// CSS in JS style script for the LoadMore component
const loadMoreStyleScript = ({ theme }: LoadMoreProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = theme?.variables;

	return css({});
};

// LoadMore component props
export const loadMore: ThemeComponent<'loadMore', LoadMoreProps> = {
	default: {
		props: {
			themeStyleScript: loadMoreStyleScript,
		},
	},
};
