/** @jsx jsx */
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';

import type { SearchController, AutocompleteController, RecommendationController } from '@searchspring/snap-controller';

import { InlineBanner, InlineBannerProps } from '../../Atoms/Merchandising/InlineBanner';
import { Result, ResultProps } from '../../Molecules/Result';
import { ComponentProps, Layout, Result as ResultType, LayoutType, InlineBannerContent, BannerType } from '../../../types';
import { defined } from '../../../utilities';
import { Theme, useTheme, CacheProvider, cache } from '../../../providers';
import { useDisplaySettings } from '../../../hooks/useDisplaySettings';

const CSS = {
	results: ({ columns, gapSize, style }) =>
		css({
			display: 'grid',
			gridTemplateColumns: `repeat(${columns}, 1fr)`,
			gridAutoRows: `1fr`,
			gap: gapSize,
			...style,
		}),
};

const defaultResponsiveProps = {
	0: {
		columns: 1,
	},
	540: {
		columns: 2,
	},
	768: {
		columns: 3,
	},
	991: {
		columns: 4,
	},
};

export const Results = observer((properties: ResultsProp): JSX.Element => {
	const globalTheme: Theme = useTheme();

	let props: ResultsProp = {
		// default props
		results: [],
		columns: 4,
		gapSize: '10px',
		layout: Layout.GRID,
		responsive: defaultResponsiveProps,
		// global theme
		...globalTheme?.components?.results,
		// props
		...properties,
		...properties.theme?.components?.results,
	};

	const { disableStyles, className, responsive, layout, style, controller } = props;

	const displaySettings = useDisplaySettings(responsive);
	if (displaySettings && Object.keys(displaySettings).length) {
		props = {
			...props,
			...displaySettings,
		};
	}

	const subProps: ResultsSubProps = {
		result: {
			// default props
			className: 'ss__results__result',
			// global theme
			...globalTheme?.components?.result,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			...props.theme?.components?.result,
		},
		inlineBanner: {
			// default props
			className: 'ss__results__inline-banner',
			// global theme
			...globalTheme?.components?.inlineBanner,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			...props.theme?.components?.inlineBanner,
		},
	};

	let results;
	if (props?.columns > 0 && props?.rows > 0) {
		results = props.results.slice(0, props.columns * props.rows);
	} else {
		results = props.results;
	}

	return results?.length ? (
		<CacheProvider value={cache}>
			<div
				css={!disableStyles && CSS.results({ columns: layout == Layout.LIST ? 1 : props.columns, gapSize: props.gapSize, style })}
				className={classnames('ss__results', className)}
			>
				{results.map((result) =>
					(() => {
						switch (result.type) {
							case BannerType.BANNER:
								return <InlineBanner key={result.uid} {...subProps.inlineBanner} banner={result} layout={props.layout} />;
							default:
								return <Result key={result.uid} {...subProps.result} result={result} layout={props.layout} controller={controller} />;
						}
					})()
				)}
			</div>
		</CacheProvider>
	) : null;
});

export interface ResultsProp extends ComponentProps {
	results: ResultType[] | InlineBannerContent[];
	columns?: number;
	rows?: number;
	gapSize?: string;
	layout?: LayoutType;
	responsive?: ResponsiveProps;
	controller?: SearchController | AutocompleteController | RecommendationController;
}

export type ResponsiveProps = {
	[key: number]: ResponsiveEntry;
};

export type ResponsiveEntry = {
	[property: string]: any;
};

interface ResultsSubProps {
	result: ResultProps;
	inlineBanner: InlineBannerProps;
}
