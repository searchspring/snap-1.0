import { h } from 'preact';
import { css } from '@emotion/react';
import { observer } from 'mobx-react-lite';

import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { Theme, useTheme } from '../../../providers';
import { ComponentProps, StyleScript } from '../../../types';
import { RecommendationBundle, RecommendationBundleProps } from '../RecommendationBundle';

const defaultStyles: StyleScript<RecommendationBundleVerticalProps> = () => {
	return css({
		'.ss__recommendation-bundle__wrapper': {
			flexDirection: 'column',
		},
		'.ss__recommendation-bundle__wrapper__cta': {
			textAlign: 'center',
		},
	});
};

export const RecommendationBundleVertical = observer((properties: RecommendationBundleVerticalProps): JSX.Element => {
	const globalTheme: Theme = useTheme();
	const defaultProps: Partial<RecommendationBundleVerticalProps> = {};

	const props = mergeProps('recommendationBundleVertical', globalTheme, defaultProps, properties);

	const { treePath, disableStyles, controller, style: _, styleScript: __, themeStyleScript: ___, ...additionalProps } = props;

	const subProps: RecommendationBundleVerticalSubProps = {
		recommendationBundle: {
			// default props
			className: 'ss__recommendation-bundle-vertical',
			ctaInline: false,
			carousel: {
				enabled: false,
			},
			separatorIcon: false,

			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
	};

	const styling = mergeStyles<RecommendationBundleVerticalProps>(props, defaultStyles);

	return <RecommendationBundle controller={controller} {...styling} {...subProps.recommendationBundle} {...additionalProps} />;
});

export type RecommendationBundleVerticalProps = Omit<RecommendationBundleProps, 'vertical' | 'ctaInline'> & ComponentProps;

interface RecommendationBundleVerticalSubProps {
	recommendationBundle: Partial<RecommendationBundleProps>;
}
