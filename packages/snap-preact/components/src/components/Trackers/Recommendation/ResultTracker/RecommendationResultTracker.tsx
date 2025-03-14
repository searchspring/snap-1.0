import { h } from 'preact';
import { jsx, css } from '@emotion/react';
import { useRef } from 'preact/hooks';
import { observer } from 'mobx-react-lite';
import { useIntersection } from '../../../../hooks';
import type { RecommendationController } from '@searchspring/snap-controller';
import { ComponentProps, StyleScript } from '../../../../types';
import type { Product } from '@searchspring/snap-store-mobx';
import classnames from 'classnames';
import { mergeStyles } from '../../../../utilities';

const defaultStyles: StyleScript<RecommendationResultTrackerProps> = () => {
	return css({});
};

export const RecommendationResultTracker = observer((properties: RecommendationResultTrackerProps): JSX.Element => {
	const defaultTrack = {
		impression: true,
		click: true,
	};

	const { children, result, track, controller, className } = properties;

	const mergedTrack = {
		...defaultTrack,
		...track,
	};
	const resultRef = useRef(null);
	const resultInViewport = useIntersection(resultRef, '0px');

	controller.track.product.render(result);
	if (resultInViewport && mergedTrack.impression) {
		controller.track.product.impression(result);
	}

	const styling = mergeStyles<RecommendationResultTrackerProps>(properties, defaultStyles);

	return (
		<div
			className={classnames('ss__recommendation-result-tracker', className)}
			onClick={(e: any) => mergedTrack.click && controller.track.product.click(e, result)}
			ref={resultRef}
			{...styling}
		>
			{children}
		</div>
	);
});

export interface RecommendationResultTrackerProps extends ComponentProps {
	children: any;
	result: Product;
	controller: RecommendationController;
	track?: {
		impression?: boolean;
		click?: boolean;
	};
}
