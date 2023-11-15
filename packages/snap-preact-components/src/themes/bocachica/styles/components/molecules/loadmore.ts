import { keyframes } from '@emotion/react';

import { css, LoadMoreProps } from '../../../../../index';
import { BocachicaVariables } from '../../../index';

// CSS in JS style script for the LoadMore component
const loadMoreStyleScript = ({
	pagination,
	hideProgressIndicator,
	hideProgressText,
	progressIndicatorWidth,
	progressIndicatorSize,
	color,
	backgroundColor,
	theme,
}: LoadMoreProps) => {
	const variables = theme?.variables as BocachicaVariables;

	const radialAngle = ((360 / 100) * Math.floor((pagination!.end / pagination!.totalResults) * 100)) / 2;
	const radialAnimation = keyframes({
		'0%': { transform: `rotate(0deg)` },
		'100%': { transform: `rotate(${radialAngle}deg)` },
	});

	const iconRotateAnimation = keyframes({
		'0%': { transform: `rotate(0deg)` },
		'100%': { transform: `rotate(360deg)` },
	});

	return css({
		'& .ss__load-more__button--hidden': {
			display: 'none',
		},
		'& .ss__button': {
			alignItems: 'center',
		},
		'& .ss__icon--spinner': {
			marginLeft: '5px',
			animation: `${iconRotateAnimation} linear 1s infinite`,
		},
		'&.ss__loadMore--bar': {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			gap: '20px',
			'& .ss__loadMore__progress': {
				display: 'flex',
				flexDirection: 'column',
				gap: '5px',
				'& .ss__loadMore__progress__indicator': {
					width: progressIndicatorWidth,
					background: backgroundColor || variables?.color?.secondary || '#f8f8f8',
					borderRadius: progressIndicatorSize,
					'& .ss__loadMore__progress__indicator__bar': {
						width: pagination ? `${(pagination.end / pagination.totalResults) * 100}%` : '',
						background: color || variables?.color?.primary || '#ccc',
						borderRadius: progressIndicatorSize,
						height: progressIndicatorSize,
					},
				},
				'& .ss__loadMore__progress__text': {
					textAlign: 'center',
				},
			},
		},
		'&.ss__loadMore--radial': {
			display: 'flex',
			alignItems: 'center',
			gap: '10px',
			'& .ss__load-more__button': {
				height: 'fit-content',
			},
			'& .ss__loadMore__progress': {
				// remove height if progress indicator is hidden but hideProgressText is not
				height: !hideProgressText && hideProgressIndicator ? undefined : progressIndicatorWidth,

				'& .ss__loadMore__progress__indicator': {
					'& .ss__loadMore__progress__indicator__radial': {
						'& .ss__loadMore__progress__indicator__radial__circle': {
							background: backgroundColor || variables?.color?.secondary || '#f8f8f8',
							height: progressIndicatorWidth,
							width: progressIndicatorWidth,
							borderRadius: '50%',

							'& .ss__loadMore__progress__indicator__radial__circle__mask, .ss__loadMore__progress__indicator__radial__circle__mask__fill': {
								width: progressIndicatorWidth,
								height: progressIndicatorWidth,
								position: 'absolute',
								borderRadius: '50%',
							},
							'& .ss__loadMore__progress__indicator__radial__circle__mask': {
								clipPath: `inset(0px 0px 0px calc(${progressIndicatorWidth}/2))`,
							},
							'& .ss__loadMore__progress__indicator__radial__circle__mask__fill': {
								animation: `${radialAnimation} ease-in-out 1s`,
								transform: `rotate(${radialAngle}deg)`,
							},
						},
						'& .ss__loadMore__progress__text': {
							width: `calc(${progressIndicatorWidth} - ${progressIndicatorSize})`,
							height: `calc(${progressIndicatorWidth} - ${progressIndicatorSize})`,
							borderRadius: '50%',
							background: '#fff',
							lineHeight: `calc(${progressIndicatorWidth} - ${progressIndicatorSize})`,
							textAlign: 'center',
							marginTop: `calc(${progressIndicatorSize} / 2)`,
							marginLeft: `calc(${progressIndicatorSize} / 2)`,
							position: 'absolute',
							fontSize: `calc(${progressIndicatorWidth} / ${Math.max(1, `${pagination!.end}`.length + `${pagination!.totalResults}`.length)})`,
						},
						'& .ss__loadMore__progress__indicator__radial__circle__mask': {
							'& .ss__loadMore__progress__indicator__radial__circle__mask__fill': {
								clipPath: `inset(0px calc((${progressIndicatorWidth} / 2) - 0.5px) 0px 0px)`,
								backgroundColor: color || variables?.color?.primary || '#ccc',
							},
							'&.ss__loadMore__progress__indicator__radial__circle__mask--full': {
								animation: `${radialAnimation} ease-in-out 1s`,
								transform: `rotate(${radialAngle}deg)`,
							},
						},
					},
				},
			},
		},
	});
};

// LoadMore component props
export const loadMore: Partial<LoadMoreProps> = {
	styleScript: loadMoreStyleScript,
	progressIndicator: 'radial',
};
