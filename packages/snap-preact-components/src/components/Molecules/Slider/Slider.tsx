/** @jsx jsx */
import { h } from 'preact';
import { useState } from 'preact/hooks';

import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import { useRanger } from 'react-ranger';

import { Theme, useTheme, CacheProvider } from '../../../providers';
import { ComponentProps, RangeFacet } from '../../../types';
import { sprintf } from '../../../utilities';

const CSS = {
	slider: ({ railColor, trackColor, handleColor, handleTextColor, handleDraggingColor, tickTextColor, theme }) =>
		css({
			display: 'inline-block',
			height: '8px',
			width: 'calc(100% - 2.5rem)',
			margin: '1rem',
			top: '10px',

			'& .ss__slider__tick': {
				'&:before': {
					content: "''",
					position: 'absolute',
					left: '0',
					background: 'rgba(0, 0, 0, 0.2)',
					height: '5px',
					width: '2px',
					transform: 'translate(-50%, 0.7rem)',
				},
				'& .ss__slider__tick__label': {
					position: 'absolute',
					fontSize: '0.6rem',
					color: tickTextColor,
					top: '100%',
					transform: 'translate(-50%, 1.2rem)',
					whiteSpace: 'nowrap',
				},
			},
			'& .ss__slider__rail': {
				background: railColor || theme.colors?.primary || '#333',
				height: '100%',
			},
			'& .ss__slider__segment': {
				background: trackColor || theme.colors?.secondary || '#ccc',
				height: '100%',
			},
			'& .ss__slider__handle': {
				background: handleColor || theme.colors?.primary || '#333',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				width: '1.6rem',
				height: '1.6rem',
				borderRadius: '100%',
				fontSize: '0.7rem',
				whiteSpace: 'nowrap',
				color: handleTextColor || 'initial',
				fontWeight: 'normal',
				transform: 'translateY(0) scale(0.9)',
				transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				position: 'relative',
				cursor: 'pointer',

				'&:after': {
					backgroundColor: '#ffffff',
					width: '30%',
					height: '30%',
					top: '0',
					bottom: '0',
					left: '0',
					content: '""',
					position: 'absolute',
					right: '0',
					borderRadius: '12px',
					margin: 'auto',
					cursor: 'pointer',
				},

				'& label': {
					position: 'absolute',
					top: '-20px',
					fontFamily: 'Roboto, Helvetica, Arial',
					fontSize: '14px',
				},

				'&.ss__slider__handle--active': {
					background: handleDraggingColor || handleColor || theme.colors?.primary || '#000',
				},
			},
		}),
};

export const Slider = observer((properties: SliderProps): JSX.Element => {
	const globalTheme: Theme = useTheme();
	const theme = { ...globalTheme, ...properties.theme };

	const props: SliderProps = {
		// default props
		tickSize: properties.facet?.step * 10 || 20,
		// global theme
		...globalTheme?.components?.slider,
		// props
		...properties,
		...properties.theme?.components?.slider,
	};

	const {
		tickTextColor,
		trackColor,
		handleTextColor,
		railColor,
		handleColor,
		handleDraggingColor,
		showTicks,
		tickSize,
		facet,
		onChange,
		onDrag,
		disableStyles,
		className,
		style,
	} = props;

	const [values, setValues] = useState([facet.active.low, facet.active.high]);

	const [active, setActive] = useState([facet.active.low, facet.active.high]);
	if (values[0] != facet.active.low || values[1] != facet.active.high) {
		setActive([facet.active.low, facet.active.high]);
		setValues([facet.active.low, facet.active.high]);
	}

	const { getTrackProps, ticks, segments, handles } = useRanger({
		values: active,
		onChange: (val) => {
			setActive(val);
			if (facet?.services?.urlManager) {
				facet.services.urlManager.remove('page').set(`filter.${facet.field}`, { low: val[0], high: val[1] }).go();
			}
			onChange && onChange(val);
		},
		onDrag: (val) => {
			setActive(val);
			onDrag && onDrag(val);
		},
		min: facet.range.low,
		max: facet.range.high,
		stepSize: facet.step,
		tickSize: tickSize,
	});

	const styling: { css?: any } = {};
	if (!disableStyles) {
		styling.css = [CSS.slider({ railColor, trackColor, handleColor, handleTextColor, handleDraggingColor, tickTextColor, theme }), style];
	} else if (style) {
		styling.css = [style];
	}

	return (
		facet.range &&
		facet.active &&
		facet.step && (
			<CacheProvider>
				<div className={classnames('ss__slider', className)} {...getTrackProps()} {...styling}>
					{showTicks &&
						ticks.map(({ value, getTickProps }) => (
							<div className="ss__slider__tick" {...getTickProps()}>
								<div className="ss__slider__tick__label">{value}</div>
							</div>
						))}

					{segments.map(({ getSegmentProps }, index) => (
						<div className={`${index === 1 ? 'ss__slider__rail' : 'ss__slider__segment'}`} {...getSegmentProps()} index={index} />
					))}

					{handles.map(({ value, active, getHandleProps }) => (
						<button
							{...getHandleProps({
								style: {
									appearance: 'none',
									border: 'none',
									background: 'transparent',
									outline: 'none',
								},
							})}
							aria-label={'slider__handle'}
						>
							<div className={classnames('ss__slider__handle', { 'ss__slider__handle--active': active })}>
								<label>{sprintf(facet.formatValue, value)}</label>
							</div>
						</button>
					))}
				</div>
			</CacheProvider>
		)
	);
});

export interface SliderProps extends ComponentProps {
	trackColor?: string;
	railColor?: string;
	handleColor?: string;
	handleDraggingColor?: string;
	handleTextColor?: string;
	showTicks?: boolean;
	tickSize?: number;
	tickTextColor?: string;
	facet: RangeFacet;
	onChange?: (values: number[]) => void;
	onDrag?: (values: number[]) => void;
}
