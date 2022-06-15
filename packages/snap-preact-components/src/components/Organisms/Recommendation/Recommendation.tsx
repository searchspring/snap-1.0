/** @jsx jsx */
import { h, Fragment } from 'preact';
import { useState, useRef } from 'preact/hooks';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import deepmerge from 'deepmerge';
import SwiperCore from 'swiper/core';

import type { RecommendationController } from '@searchspring/snap-controller';
import type { ResultStore } from '@searchspring/snap-store-mobx';

import { Carousel, CarouselProps, defaultCarouselBreakpoints, defaultVerticalCarouselBreakpoints } from '../../Molecules/Carousel';
import { Result, ResultProps } from '../../Molecules/Result';
import { defined } from '../../../utilities';
import { Theme, useTheme, CacheProvider } from '../../../providers';
import { ComponentProps, BreakpointsProps } from '../../../types';
import { useIntersection } from '../../../hooks';
import { useDisplaySettings } from '../../../hooks/useDisplaySettings';

const CSS = {
	recommendation: ({ vertical }: { vertical?: boolean }) =>
		css({
			height: vertical ? '100%' : undefined,
			'.ss__result__image-wrapper': {
				height: vertical ? '85%' : undefined,
			},
		}),
};

export const Recommendation = observer((properties: RecommendationProps): JSX.Element => {
	const globalTheme: Theme = useTheme();

	let props: RecommendationProps = {
		// default props
		breakpoints: properties.vertical
			? JSON.parse(JSON.stringify(defaultVerticalCarouselBreakpoints))
			: JSON.parse(JSON.stringify(defaultCarouselBreakpoints)),
		pagination: false,
		loop: true,
		// global theme
		...globalTheme?.components?.recommendation,
		...properties,
		// props
		...properties.theme?.components?.recommendation,
	};

	const displaySettings = useDisplaySettings(props.breakpoints || defaultCarouselBreakpoints);
	if (displaySettings && Object.keys(displaySettings).length) {
		const theme = deepmerge(props?.theme || {}, displaySettings?.theme || {});
		props = {
			...props,
			...displaySettings,
			theme,
		};
	}

	const {
		title,
		controller,
		children,
		breakpoints,
		loop,
		results,
		pagination,
		nextButton,
		prevButton,
		hideButtons,
		disableStyles,
		style,
		className,
		vertical,
		...additionalProps
	} = props;

	if (!controller || controller.type !== 'recommendation') {
		throw new Error(`<Recommendation> Component requires 'controller' prop with an instance of RecommendationController`);
	}

	const resultsToRender = results || controller.store?.results;

	if (children && children.length !== resultsToRender.length) {
		controller.log.error(
			`<Recommendation> Component received invalid number of children. Must match length of 'results' prop or 'controller.store.results'`
		);
		<Fragment></Fragment>;
	}

	const subProps: RecommendationSubProps = {
		carousel: {
			// default props
			className: 'ss__recommendation__Carousel',
			// global theme
			...globalTheme?.components?.carousel,
			// inherited props
			...defined({
				disableStyles,
				vertical,
			}),
			// component theme overrides
			theme: props.theme,
		},
		result: {
			// default props
			className: 'ss__recommendation__result',
			// global theme
			...globalTheme?.components?.result,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props.theme,
		},
	};

	const rootComponentRef = useRef(null);

	const [initialIndexes, setInitialIndexes] = useState([0, 0]);
	const inViewport = useIntersection(rootComponentRef, '0px', true);

	const sendProductImpression = (index: number, count: number) => {
		if (!inViewport) return;

		let resultLoopCount = [index, index + count];
		let resultLoopOverCount;
		if (index + count > resultsToRender.length - 1) {
			resultLoopCount = [index];
			resultLoopOverCount = [0, index + count - resultsToRender.length];
		}
		let resultsImpressions = resultsToRender.slice(...resultLoopCount);
		if (resultLoopOverCount) {
			resultsImpressions = resultsImpressions.concat(resultsToRender.slice(...resultLoopOverCount));
		}

		resultsImpressions.map((result) => {
			controller.track.product.impression(result);
		});
	};

	if (inViewport) {
		controller.track.impression();
		sendProductImpression(initialIndexes[0], initialIndexes[1]);
	}

	(children || resultsToRender.length) && (controller as RecommendationController)?.track?.render();

	const styling: { css?: any } = {};
	if (!disableStyles) {
		styling.css = [CSS.recommendation({ vertical }), style];
	} else if (style) {
		styling.css = [style];
	}

	return children || resultsToRender?.length ? (
		<CacheProvider>
			<div ref={rootComponentRef as React.RefObject<HTMLDivElement>} {...styling} className={classnames('ss__recommendation', className)}>
				{title && <h3 className="ss__recommendation__title">{title}</h3>}
				<Carousel
					onInit={(swiper) => {
						//@ts-ignore
						setInitialIndexes([swiper.realIndex, swiper.loopedSlides]);
					}}
					onBreakpoint={(swiper: SwiperCore) => {
						//@ts-ignore
						sendProductImpression(swiper.realIndex, swiper.loopedSlides);
					}}
					onSlideChange={(swiper: SwiperCore) => {
						//@ts-ignore
						sendProductImpression(swiper.realIndex, swiper.loopedSlides);
					}}
					prevButton={prevButton}
					nextButton={nextButton}
					hideButtons={hideButtons}
					onNextButtonClick={(e) => controller.track.click(e)}
					onPrevButtonClick={(e) => controller.track.click(e)}
					onClick={(swiper, e) => {
						const clickedIndex = swiper.realIndex + (swiper.clickedIndex - swiper.activeIndex);
						controller.track.click(e);
						if (!Number.isNaN(clickedIndex)) {
							controller.track.product.click(e, resultsToRender[clickedIndex]);
						}
					}}
					loop={loop}
					pagination={pagination}
					breakpoints={breakpoints}
					{...subProps.carousel}
					{...additionalProps}
					{...displaySettings}
				>
					{children
						? children.map((child) => child)
						: resultsToRender.map((result: ResultType) => <Result controller={controller} {...subProps.result} result={result} />)}
				</Carousel>
			</div>
		</CacheProvider>
	) : (
		<Fragment></Fragment>
	);
});

export interface RecommendationProps extends ComponentProps {
	title?: JSX.Element | string;
	breakpoints?: BreakpointsProps;
	prevButton?: JSX.Element | string;
	nextButton?: JSX.Element | string;
	hideButtons?: boolean;
	loop?: boolean;
	results?: ResultStore;
	pagination?: boolean;
	controller: RecommendationController;
	children?: JSX.Element[];
	vertical?: boolean;
}

interface RecommendationSubProps {
	result: ResultProps;
	carousel: CarouselProps;
}
