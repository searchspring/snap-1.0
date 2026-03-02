import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import type { SearchController } from '@athoscommerce/snap-controller';
import { ComponentProps } from '../../../types';
import { CacheProvider } from '../../../providers';
import { Search, SearchProps } from '../Search/Search';

export const SearchCollapsible = observer((properties: SearchCollapsibleProps): JSX.Element => {
	return (
		<CacheProvider>
			<Search {...properties} alias="searchCollapsible" />
		</CacheProvider>
	);
});

//todo improve the controller spreading here..
export interface SearchCollapsibleProps extends SearchProps, ComponentProps {
	controller: SearchController;
}
