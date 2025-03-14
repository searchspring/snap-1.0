import { Fragment, h, toChildArray } from 'preact';
import { jsx, css } from '@emotion/react';
import { observer } from 'mobx-react-lite';
import type { RecommendationController } from '@searchspring/snap-controller';
import { ComponentProps, StyleScript } from '../../../../types';
import classnames from 'classnames';
import { mergeStyles } from '../../../../utilities';

const defaultStyles: StyleScript<RecommendationProfileTrackerProps> = () => {
	return css({});
};

/** @deprecated RecommendationProfileTracker is deprecated */
export const RecommendationProfileTracker = observer((properties: RecommendationProfileTrackerProps): JSX.Element => {
	const { children, className } = properties;

	const childs = toChildArray(children);
	const styling = mergeStyles<RecommendationProfileTrackerProps>(properties, defaultStyles);

	return childs.length ? (
		<div className={classnames('ss__recommendation-profile-tracker', className)} {...styling}>
			{children}
		</div>
	) : (
		<Fragment></Fragment>
	);
});

export interface RecommendationProfileTrackerProps extends ComponentProps {
	children: any;
	controller: RecommendationController;
}
