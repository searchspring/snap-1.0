import { Fragment, h } from 'preact';
import { jsx, css } from '@emotion/react';
import { useEffect, useRef } from 'preact/hooks';
import { observer } from 'mobx-react-lite';
import { useIntersection } from '../../../hooks';
import { ComponentProps, StyleScript } from '../../../types';
import type { Product } from '@searchspring/snap-store-mobx';
import classnames from 'classnames';
import { SearchController } from '@searchspring/snap-controller';
import { mergeStyles } from '../../../utilities';

const defaultStyles: StyleScript<SearchResultTrackerProps> = () => {
	return css({});
};

export const SearchResultTracker = observer((properties: SearchResultTrackerProps): JSX.Element => {
	const { children, result, controller, className } = properties;

	const resultRef = useRef(null);

	// FUTURE
	const resultInViewport = useIntersection(resultRef, '0px');

	const styling = mergeStyles<SearchResultTrackerProps>(properties, defaultStyles);

	if (!controller) {
		console.error('No SearchController was passed to SearchResultTracker.');
		return <Fragment>{children}</Fragment>;
	}

	useEffect(() => {
		controller.track.product.render(result);
	}, []);

	if (resultInViewport) {
		controller.track.product.impression(result);
	}

	return (
		<div className={classnames('ss__result-tracker', className)} ref={resultRef} {...styling}>
			{children}
		</div>
	);
});

export interface SearchResultTrackerProps extends ComponentProps {
	children?: any;
	result: Product;
	controller: SearchController;
}
