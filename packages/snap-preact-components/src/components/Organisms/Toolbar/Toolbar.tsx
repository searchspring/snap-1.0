/** @jsx jsx */
import { Fragment, h } from 'preact';

import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';

import { Theme, useTheme, CacheProvider } from '../../../providers';
import { ComponentProps, StylingCSS } from '../../../types';
import { FilterSummary, FilterSummaryProps } from '../FilterSummary';
import { Facets, FacetsProps } from '../Facets';
import { Slideout, SlideoutProps } from '../../Molecules/Slideout';
import { defined } from '../../../utilities';
import { Pagination, PaginationProps } from '../../Molecules/Pagination';
import { LoadingBarProps } from '../../Atoms/Loading';
import { SearchController } from '@searchspring/snap-controller';
import { SortBy, SortByProps } from '../../Molecules/SortBy';
import { PerPage, PerPageProps } from '../../Molecules/PerPage';

const CSS = {
	toolbar: () => css({}),
};

export const Toolbar = observer((properties: ToolbarProps): JSX.Element => {
	const globalTheme: Theme = useTheme();

	let props: ToolbarProps = {
		// default props

		// global theme
		...globalTheme?.components?.toolbar,
		// props
		...properties,
		...properties.theme?.components?.toolbar,
	};

	if (properties.theme?.namedComponents && properties.name) {
		props = {
			...props,
			...properties.theme?.namedComponents[properties.name as any],
		};
	}

	const {
		controller,
		slideOutToggleWidth,
		hideSlideout,
		hideFacets,
		hidefilterSummary,
		hidePerPage,
		hideSortBy,
		hidePagination,
		disableStyles,
		className,
		style,
	} = props;

	const styling: { css?: StylingCSS } = {};

	if (!disableStyles) {
		styling.css = [CSS.toolbar(), style];
	} else if (style) {
		styling.css = [style];
	}

	const subProps: ToolbarSubProps = {
		FilterSummary: {
			// default props
			controller,
			// global theme
			...globalTheme?.components?.filterSummary,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
		},
		Facets: {
			// default props
			controller,
			// global theme
			...globalTheme?.components?.facets,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
		},
		LoadingBar: {
			// default props
			controller,
			// global theme
			...globalTheme?.components?.loadingBar,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
		},
		Pagination: {
			// default props
			controller,
			// global theme
			...globalTheme?.components?.pagination,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
		},
		Slideout: {
			// default props
			controller,
			// global theme
			...globalTheme?.components?.slideout,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
		},
		SortBy: {
			// default props
			controller,
			// global theme
			...globalTheme?.components?.sortby,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
		},
		PerPage: {
			// default props
			controller,
			// global theme
			...globalTheme?.components?.perpage,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
		},
	};

	const mobileMediaQuery = `(max-width: ${slideOutToggleWidth})`;

	return (
		<CacheProvider>
			<div {...styling} className={classnames('ss__toolbar', className)}>
				{!hidefilterSummary && <FilterSummary {...subProps.FilterSummary} />}

				{!hideFacets && <Facets {...subProps.Facets} />}

				{!hideSlideout && (
					<Slideout displayAt={mobileMediaQuery} buttonContent={<div>slideoutButton</div>} {...subProps.Slideout}>
						{/* {slideoutSlot ? (
							cloneWithProps(slideoutSlot, { controller })
						) : ( */}
						<Fragment>
							<h3>Filters</h3>
							{/* <SidebarContents /> */}
						</Fragment>
						{/* )} */}
					</Slideout>
				)}

				{!hideSortBy && <SortBy {...subProps.SortBy} />}

				{!hidePerPage && <PerPage {...subProps.PerPage} />}

				{!hidePagination && <Pagination {...subProps.Pagination} />}
			</div>
		</CacheProvider>
	);
});

export interface ToolbarProps extends ComponentProps {
	controller: SearchController;
	hideFacets?: boolean;
	hidefilterSummary?: boolean;
	hidePerPage?: boolean;
	hideSortBy?: boolean;
	hidePagination?: boolean;
	hideSlideout?: boolean;
	slideOutToggleWidth?: string;
}

interface ToolbarSubProps {
	FilterSummary: FilterSummaryProps;
	Facets: FacetsProps;
	LoadingBar: LoadingBarProps;
	Pagination: PaginationProps;
	Slideout: SlideoutProps;
	SortBy: SortByProps;
	PerPage: PerPageProps;
}
