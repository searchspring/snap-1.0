import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import type { SearchController } from '@searchspring/snap-controller';
import { ComponentProps } from '../../../types';
import { CacheProvider } from '../../../providers';
import { Search, SearchProps, SearchTemplatesLegalProps } from '../Search/Search';

export const SearchHorizontal = observer((properties: SearchHorizontalProps): JSX.Element => {
	return (
		<CacheProvider>
			<Search {...properties} alias="searchHorizontal" />
		</CacheProvider>
	);
});

export type SearchHorizontalProps = {
	controller: SearchController;
} & SearchProps &
	SearchHorizontalTemplatesLegalProps &
	ComponentProps<SearchHorizontalProps>;

export type SearchHorizontalTemplatesLegalProps = SearchTemplatesLegalProps;
