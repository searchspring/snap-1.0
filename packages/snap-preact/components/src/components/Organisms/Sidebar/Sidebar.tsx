import { Fragment, h } from 'preact';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { ComponentProps, StyleScript } from '../../../types';
import { FilterSummary, FilterSummaryProps } from '../FilterSummary';
import { SortBy, SortByProps } from '../../Molecules/SortBy';
import { PerPage, PerPageProps } from '../../Molecules/PerPage';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { Facets, FacetsProps } from '../Facets';
import { SearchController } from '@searchspring/snap-controller';
import { Lang, useLang } from '../../../hooks';
import deepmerge from 'deepmerge';
import { Button, ButtonProps } from '../../Atoms/Button';
import { useState } from 'react';

const defaultStyles: StyleScript<SidebarProps> = () => {
	return css({});
};

export const Sidebar = observer((properties: SidebarProps): JSX.Element => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();
	const defaultProps: Partial<SidebarProps> = {
		titleText: 'Filters',
		startOpen: true,
		hideToggleButton: true,
		treePath: globalTreePath,
	};

	const props = mergeProps('sidebar', globalTheme, defaultProps, properties);

	const {
		controller,
		hideTitle,
		startOpen,
		titleText,
		hideFacets,
		hidePerPage,
		hideToggleButton,
		hideSortBy,
		hideFilterSummary,
		disableStyles,
		className,
		treePath,
	} = props;

	const styling = mergeStyles<SidebarProps>(props, defaultStyles);

	const subProps: SidebarSubProps = {
		filterSummary: {
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
			treePath,
		},
		facets: {
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
			treePath,
		},
		sortBy: {
			// default props
			controller,
			// global theme
			...globalTheme?.components?.sortBy,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
		perPage: {
			// default props
			controller,
			// global theme
			...globalTheme?.components?.perPage,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
		button: {
			// default props
			className: 'ss__sidebar__toggle',
			controller,
			// global theme
			...globalTheme?.components?.button,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
	};

	const [sidebarOpenState, setSidebarOpenState] = useState(startOpen);

	//initialize lang
	const defaultLang: Partial<SidebarLang> = {
		titleText: {
			value: titleText,
		},
		toggleSidebarButtonText: {
			value: sidebarOpenState ? `Filters <` : 'Filters >',
		},
	};

	//deep merge with props.lang
	const lang = deepmerge(defaultLang, props.lang || {});
	const mergedLang = useLang(lang as any, { controller: controller });

	return controller?.store?.loaded && controller?.store?.pagination?.totalResults > 0 ? (
		<CacheProvider>
			<div {...styling} className={classnames('ss__sidebar', className)}>
				{!hideToggleButton && (
					<Button
						content={'hi'}
						onClick={() => setSidebarOpenState(!sidebarOpenState)}
						{...subProps.button}
						lang={{ button: lang.toggleSidebarButtonText }}
					/>
				)}
				{sidebarOpenState && (
					<div className={classnames('ss__sidebar__inner')}>
						{!hideTitle && <h4 className="ss__sidebar__title" {...mergedLang.titleText?.all}></h4>}

						{!hideFilterSummary && <FilterSummary {...subProps.filterSummary} />}

						{!hideSortBy && <SortBy {...subProps.sortBy} />}

						{!hidePerPage && <PerPage {...subProps.perPage} />}

						{!hideFacets && <Facets {...subProps.facets} />}
					</div>
				)}
			</div>
		</CacheProvider>
	) : (
		<Fragment></Fragment>
	);
});

export interface SidebarProps extends ComponentProps {
	controller: SearchController;
	hideToggleButton?: boolean;
	startOpen?: boolean;
	hideTitle?: boolean;
	titleText?: string;
	hideFacets?: boolean;
	hidePerPage?: boolean;
	hideSortBy?: boolean;
	hideFilterSummary?: boolean;
	lang?: Partial<SidebarLang>;
}

export interface SidebarLang {
	titleText: Lang<{
		controller: SearchController;
	}>;
	toggleSidebarButtonText: Lang<{
		controller: SearchController;
	}>;
}

interface SidebarSubProps {
	filterSummary: Partial<FilterSummaryProps>;
	facets: Partial<FacetsProps>;
	sortBy: Partial<SortByProps>;
	perPage: Partial<PerPageProps>;
	button: Partial<ButtonProps>;
}
