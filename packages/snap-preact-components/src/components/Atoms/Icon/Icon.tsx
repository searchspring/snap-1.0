/** @jsx jsx */
import { h } from 'preact';

import { jsx, css } from '@emotion/react';
import classnames from 'classnames';

import { Theme, useTheme } from '../../../providers/theme';
import { ComponentProps } from '../../../types';
import { iconPaths, IconType } from './paths';

const CSS = {
	icon: ({ color, height, width, size, style }) =>
		css({
			fill: color,
			width: width || size,
			height: height || size,
			...style,
		}),
};

export function Icon(properties: IconProps): JSX.Element {
	const globalTheme: Theme = useTheme();

	const props: IconProps = {
		// default props
		disableStyles: false,
		size: '16px',
		color: '#000',
		viewBox: '0 0 56 56',
		// global theme
		...globalTheme?.components?.icon,
		// props
		...properties,
		...properties.theme?.components?.icon,
	};

	const { color, icon, path, size, width, height, viewBox, disableStyles, className, style } = props;

	const iconPath = iconPaths[icon] || path;

	return (
		iconPath && (
			<svg
				css={
					!disableStyles &&
					CSS.icon({
						color,
						width,
						height,
						size,
						style,
					})
				}
				className={classnames('ss-icon', `ss-icon-${icon}`, className)}
				viewBox={viewBox}
				xmlns="http://www.w3.org/2000/svg"
				width={disableStyles && (width || size)}
				height={disableStyles && (height || size)}
			>
				<path fill={disableStyles && color} d={iconPath} />
			</svg>
		)
	);
}

export interface IconProps extends ComponentProps {
	color?: string;
	icon?: IconType | string;
	path?: string;
	size?: string;
	width?: string;
	height?: string;
	viewBox?: string;
}