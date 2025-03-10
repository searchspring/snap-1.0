import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import type { SearchController } from '@searchspring/snap-controller';
import { Results, ResultsProps } from '../../Organisms/Results';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, ResultComponent, StyleScript } from '../../../types';
import { Theme, useTheme, CacheProvider } from '../../../providers';
import { Toolbar, ToolbarProps } from '../../Organisms/Toolbar';
import { SearchHeader, SearchHeaderProps } from '../../Atoms/SearchHeader';
import { NoResults, NoResultsProps } from '../../Organisms/NoResults';
import { Banner, BannerProps } from '../../Atoms/Merchandising';
import { ContentType } from '@searchspring/snap-store-mobx';
import { FacetsHorizontal, FacetsHorizontalProps } from '../../Organisms/FacetsHorizontal';

const defaultStyles: StyleScript<SearchHorizontalProps> = ({}) => {
	return css({});
};

export const SearchHorizontal = observer((properties: SearchHorizontalProps): JSX.Element => {
	const globalTheme: Theme = useTheme();

	const defaultProps: Partial<SearchHorizontalProps> = {
		hideMiddleToolbar: true,
	};

	const props = mergeProps('searchHorizontal', globalTheme, defaultProps, properties);

	const {
		disableStyles,
		className,
		controller,
		hideSearchHeader,
		hideMerchandisingBanners,
		hideTopToolbar,
		hideMiddleToolbar,
		resultComponent,
		hideFacetsHorizontal,
		hideBottomToolBar,
		treePath,
	} = props;
	const store = controller.store;

	const subProps: SearchHorizontalSubProps = {
		FacetsHorizontal: {
			// default props
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props.theme,
			treePath,
		},
		Banner: {
			// default props
			// inherited props
			...defined({
				disableStyles,
			}),
			theme: props.theme,
			treePath,
		},
		TopToolbar: {
			name: 'top',
			// default props
			modules: ['FilterSummary', 'LayoutSelector', 'SortBy', 'PerPage'],
			// inherited props
			...defined({
				disableStyles,
			}),
			theme: props.theme,
			treePath,
		},
		MiddleToolbar: {
			name: 'middle',
			// default props
			modules: ['PerPage', 'SortBy'],
			// inherited props
			...defined({
				disableStyles,
			}),
			theme: props.theme,
			treePath,
		},
		BottomToolbar: {
			name: 'bottom',
			// default props
			modules: ['Pagination'],
			// inherited props
			...defined({
				disableStyles,
			}),
			theme: props.theme,
			treePath,
		},
		SearchHeader: {
			// default props
			// inherited props
			...defined({
				disableStyles,
			}),
			theme: props.theme,
			treePath,
		},
		Results: {
			name: 'search',
			// default props
			resultComponent: resultComponent,
			// inherited props
			...defined({
				disableStyles,
			}),
			theme: props.theme,
			treePath,
		},
		NoResults: {
			// default props
			// inherited props
			...defined({
				disableStyles,
			}),
			theme: props.theme,
			treePath,
		},
	};

	const styling = mergeStyles<SearchHorizontalProps>(props, defaultStyles);

	const merchandising = controller.store.merchandising;

	let hideHeaderBanner;
	let hideBannerBanner;
	let hideFooterBanner;

	if (hideMerchandisingBanners) {
		if (typeof hideMerchandisingBanners == 'boolean') {
			//hide all
			hideHeaderBanner = true;
			hideBannerBanner = true;
			hideFooterBanner = true;
		} else if (typeof hideMerchandisingBanners == 'object') {
			hideMerchandisingBanners.map((type) => {
				if (type.toLowerCase() == 'banner') {
					hideBannerBanner = true;
				}
				if (type.toLowerCase() == 'header') {
					hideHeaderBanner = true;
				}
				if (type.toLowerCase() == 'footer') {
					hideFooterBanner = true;
				}
			});
		}
	}

	return (
		<CacheProvider>
			<div {...styling} className={classnames('ss__search-horizontal', className)}>
				{!hideSearchHeader && <SearchHeader {...subProps.SearchHeader} controller={controller} />}

				{!hideTopToolbar && store.pagination.totalResults > 0 && (
					<Toolbar {...subProps.TopToolbar} className="ss__search-horizontal__content__toolbar--top-toolbar" controller={controller} />
				)}

				{!hideFacetsHorizontal && <FacetsHorizontal {...subProps.FacetsHorizontal} facets={store.facets} controller={controller} />}

				<div className={classnames('ss__search-horizontal__content')}>
					{!hideHeaderBanner && <Banner {...subProps.Banner} content={merchandising.content} type={ContentType.HEADER} name={'header'} />}
					{!hideBannerBanner && <Banner {...subProps.Banner} content={merchandising.content} type={ContentType.BANNER} name={'banner'} />}

					{!hideMiddleToolbar && store.pagination.totalResults > 0 && (
						<Toolbar {...subProps.MiddleToolbar} className="ss__search-horizontal__content__toolbar--middle-toolbar" controller={controller} />
					)}

					{store.pagination.totalResults ? (
						<Results {...subProps.Results} controller={controller} />
					) : (
						store.pagination.totalResults === 0 && <NoResults {...subProps.NoResults} controller={controller} />
					)}

					{!hideFooterBanner && <Banner {...subProps.Banner} content={merchandising.content} type={ContentType.FOOTER} name={'footer'} />}

					{!hideBottomToolBar && store.pagination.totalResults > 0 && (
						<Toolbar {...subProps.BottomToolbar} className="ss__search-horizontal__content__toolbar--bottom-toolbar" controller={controller} />
					)}
				</div>
			</div>
		</CacheProvider>
	);
});

//todo improve the controller spreading here..
export interface SearchHorizontalProps extends ComponentProps {
	controller: SearchController;
	resultComponent?: ResultComponent;
	hideSearchHeader?: boolean;
	hideTopToolbar?: boolean;
	hideMiddleToolbar?: boolean;
	hideBottomToolBar?: boolean;
	hideMerchandisingBanners?: boolean | string[];
	hideFacetsHorizontal?: boolean;
}

interface SearchHorizontalSubProps {
	FacetsHorizontal: Partial<FacetsHorizontalProps>;
	Banner: Partial<BannerProps>;
	TopToolbar: Partial<ToolbarProps>;
	MiddleToolbar: Partial<ToolbarProps>;
	BottomToolbar: Partial<ToolbarProps>;
	SearchHeader: Partial<SearchHeaderProps>;
	Results: Partial<ResultsProps>;
	NoResults: Partial<NoResultsProps>;
}
