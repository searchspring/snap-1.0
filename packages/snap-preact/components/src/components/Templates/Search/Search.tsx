import { Fragment, h } from 'preact';
import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import type { SearchController } from '@searchspring/snap-controller';
import { Results, ResultsProps } from '../../Organisms/Results';
import { defined, mergeProps } from '../../../utilities';
import { ComponentProps, ListOption, ResultComponent, StylingCSS } from '../../../types';
import { Theme, useTheme, CacheProvider } from '../../../providers';
import { Sidebar, SidebarProps } from '../../Organisms/Sidebar';
import { Toolbar, ToolbarProps } from '../../Organisms/Toolbar';
import { SearchHeader, SearchHeaderProps } from '../../Atoms/SearchHeader';
import { NoResults, NoResultsProps } from '../../Atoms/NoResults';
import { lang, useMediaQuery } from '../../../hooks';
import { MobileSidebar, MobileSidebarProps } from '../../Organisms/MobileSidebar';
import { Button, ButtonProps } from '../../Atoms/Button';
import { Banner, BannerProps } from '../../Atoms/Merchandising';
import { ContentType } from '@searchspring/snap-store-mobx';
import { useState } from 'preact/hooks';
import deepmerge from 'deepmerge';

const CSS = {
	Search: ({ mobileSidebarDisplayAt }: Partial<SearchProps>) =>
		css({
			display: 'flex',
			minHeight: '600px',

			'.ss__search__sidebar': {
				flex: '0 1 auto',
				width: '250px',
				margin: '0 40px 0 0',
			},

			'.ss_desktop': {
				[`@media only screen and (max-width: ${mobileSidebarDisplayAt})`]: {
					display: 'none',
				},
			},

			'.ss__search__content': {
				flex: '1 1 0%',
				padding: '0px 10px',
				width: '100%',
				boxSizing: 'border-box',
			},

			[`@media only screen and (max-width: ${mobileSidebarDisplayAt})`]: {
				flexDirection: 'column',
			},

			'.ss__search__content__toolbar--top-toolbar': {
				display: 'flex',
				justifyContent: 'flex-end',
				margin: '10px 0px',
			},

			'.ss__layout__select': {
				float: 'left',
			},
		}),
};

export const Search = observer((properties: SearchProps): JSX.Element => {
	const globalTheme: Theme = useTheme();

	const defaultProps: Partial<SearchProps> = {
		mobileSidebarDisplayAt: '991px',
	};

	const props = mergeProps('search', globalTheme, defaultProps, properties);

	const {
		disableStyles,
		className,
		controller,
		style,
		styleScript,
		hideSidebar,
		hideSearchHeader,
		hideMobileSidebar,
		hideMerchandisingBanners,
		toggleSidebarButtonText,
		hideTopToolbar,
		resultComponent,
		hideBottomToolBar,
		mobileSidebarDisplayAt,
	} = props;
	const store = controller.store;

	const subProps: SearchSubProps = {
		MobileSidebar: {
			// default props
			hidePerPage: true,
			hideSortBy: true,
			displayAt: mobileSidebarDisplayAt,
			// inherited props
			...defined({
				disableStyles,
			}),
			theme: props.theme,
		},
		Button: {
			// default props
			// inherited props
			...defined({
				disableStyles,
			}),
			theme: props.theme,
		},
		TopToolbar: {
			// default props
			hidePagination: Boolean(controller.config.settings?.infinite),
			hideFilterSummary: true,
			// inherited props
			...defined({
				disableStyles,
			}),
			theme: props.theme,
		},
		BottomToolbar: {
			// default props
			hideFilterSummary: true,
			hidePerPage: true,
			hideSortBy: true,
			hideLayoutSelector: true,
			// inherited props
			...defined({
				disableStyles,
			}),
			theme: props.theme,
		},
		Sidebar: {
			// default props
			hidePerPage: true,
			hideSortBy: true,
			// inherited props
			...defined({
				disableStyles,
			}),
			theme: props.theme,
		},
		SearchHeader: {
			// default props
			// inherited props
			...defined({
				disableStyles,
			}),
			theme: props.theme,
		},
		Results: {
			// default props
			name: 'searchResults',
			resultComponent: resultComponent,
			// inherited props
			...defined({
				disableStyles,
			}),
			theme: props.theme,
		},
		NoResults: {
			// default props
			// inherited props
			...defined({
				disableStyles,
			}),
			theme: props.theme,
		},
		Banner: {
			// default props
			// inherited props
			...defined({
				disableStyles,
			}),
			theme: props.theme,
		},
	};

	const styling: { css?: StylingCSS } = {};
	const stylingProps = props;

	if (styleScript && !disableStyles) {
		styling.css = [styleScript(stylingProps), style];
	} else if (!disableStyles) {
		styling.css = [CSS.Search(stylingProps), style];
	} else if (style) {
		styling.css = [style];
	}

	const mobileMediaQuery = `(max-width: ${mobileSidebarDisplayAt})`;
	const isMobile = useMediaQuery(mobileMediaQuery);
	const merchandising = controller.store.merchandising;

	let hideLeftBanner;
	let hideHeaderBanner;
	let hideBannerBanner;
	let hideFooterBanner;

	if (hideMerchandisingBanners) {
		if (typeof hideMerchandisingBanners == 'boolean') {
			//hide all
			hideLeftBanner = true;
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
				if (type.toLowerCase() == 'left') {
					hideLeftBanner = true;
				}
			});
		}
	}

	const [sidebarOpenState, setSidebarOpenState] = useState(true);

	//initialize lang
	const defaultLang: Partial<SearchLang> = {
		toggleSidebarButtonText: {
			value: toggleSidebarButtonText,
		},
	};

	//deep merge with props.lang
	const lang = deepmerge(defaultLang, props.lang || {});

	return (
		<CacheProvider>
			<div {...styling} className={classnames('ss__search', className)}>
				{!hideSidebar && !isMobile && (
					<div className="ss__search__sidebar-wrapper">
						{toggleSidebarButtonText ? (
							sidebarOpenState && (
								<Fragment>
									<Sidebar {...subProps.Sidebar} controller={controller} />
									{!hideLeftBanner && <Banner content={merchandising.content} type={ContentType.LEFT} />}
								</Fragment>
							)
						) : (
							<Fragment>
								<Sidebar {...subProps.Sidebar} controller={controller} />
								{!hideLeftBanner && <Banner content={merchandising.content} type={ContentType.LEFT} />}
							</Fragment>
						)}
					</div>
				)}
				<div className={classnames('ss__search__content')}>
					{!hideSearchHeader && <SearchHeader {...subProps.SearchHeader} controller={controller} />}
					{!hideHeaderBanner && <Banner content={merchandising.content} type={ContentType.HEADER} />}
					{!hideBannerBanner && <Banner content={merchandising.content} type={ContentType.BANNER} />}

					{toggleSidebarButtonText && (
						<Button
							onClick={() => setSidebarOpenState(!sidebarOpenState)}
							className="ss__search__sidebar-wrapper-toggle"
							name={'search__sidebar-wrapper-toggle-button'}
							{...subProps.Button}
							lang={{
								button: lang.toggleSidebarButtonText,
							}}
						></Button>
					)}

					{!hideTopToolbar && store.pagination.totalResults > 0 && (
						<Toolbar {...subProps.TopToolbar} className="ss__search__content__toolbar--top-toolbar" name={'topToolBar'} controller={controller} />
					)}

					{!hideMobileSidebar && store.pagination.totalResults > 0 && <MobileSidebar controller={controller} {...subProps.MobileSidebar} />}

					<div className="clear"></div>

					{store.pagination.totalResults ? (
						<Results {...subProps.Results} controller={controller} />
					) : (
						store.pagination.totalResults === 0 && <NoResults {...subProps.NoResults} controller={controller} />
					)}

					{!hideFooterBanner && <Banner content={merchandising.content} type={ContentType.FOOTER} />}

					<div className="clear"></div>

					{!hideBottomToolBar && store.pagination.totalResults > 0 && (
						<Toolbar
							{...subProps.BottomToolbar}
							name={'bottomToolBar'}
							className="ss__search__content__toolbar--bottom-toolbar"
							controller={controller}
						/>
					)}
				</div>
			</div>
		</CacheProvider>
	);
});

//todo improve the controller spreading here..
export interface SearchProps extends ComponentProps {
	controller: SearchController;
	mobileSidebarDisplayAt?: string;
	resultComponent?: ResultComponent;
	hideSidebar?: boolean;
	hideMobileSidebar?: boolean;
	hideSearchHeader?: boolean;
	hideTopToolbar?: boolean;
	hideBottomToolBar?: boolean;
	hideMerchandisingBanners?: boolean | string[];
	toggleSidebarButtonText?: string;
	lang?: Partial<SearchLang>;
}

export interface SearchLang {
	toggleSidebarButtonText?: lang<Record<string, never>>;
}

export type layoutConfig = {
	options: ListOption[];
	default?: ListOption | string;
};

interface SearchSubProps {
	Results: Partial<ResultsProps>;
	NoResults: Partial<NoResultsProps>;
	Sidebar: Partial<SidebarProps>;
	TopToolbar: Partial<ToolbarProps>;
	BottomToolbar: Partial<ToolbarProps>;
	SearchHeader: Partial<SearchHeaderProps>;
	MobileSidebar: Partial<MobileSidebarProps>;
	Button: Partial<ButtonProps>;
	Banner: Partial<BannerProps>;
}
