/** @jsx jsx */
import { h } from 'preact';

import { jsx, css } from '@emotion/react';
import classnames from 'classnames';

import { Theme, useTheme } from '../../../providers/theme';
import { ComponentProps } from '../../../types';

const CSS = {
	overlay: ({ color, transitionSpeed, style }) =>
		css({
			transition: `background ${transitionSpeed} ease 0s, left 0s ease ${transitionSpeed}`,
			position: 'fixed',
			zIndex: 999998,
			height: '100%',
			width: '100%',
			top: '0',
			left: '-100%',

			'&.ss-overlay-active': {
				transition: `background ${transitionSpeed} ease, left 0s ease`,
				background: color,
				left: '0',
			},

			...style,
		}),
};

export function Overlay(properties: OverlayProps): JSX.Element {
	const globalTheme: Theme = useTheme();

	const props: OverlayProps = {
		// default props
		disableStyles: false,
		active: false,
		color: 'rgba(0,0,0,0.8)',
		transitionSpeed: '0.25s',
		// global theme
		...globalTheme?.components?.overlay,
		// props
		...properties,
		...properties.theme?.components?.overlay,
	};

	const { active, color, transitionSpeed, onClick, disableStyles, className, style } = props;

	return (
		<div
			onClick={(e: React.MouseEvent<HTMLDivElement, Event>) => onClick && active && onClick(e)}
			className={classnames('ss-overlay', { 'ss-overlay-active': active }, className)}
			css={!disableStyles && CSS.overlay({ color, transitionSpeed, style })}
		/>
	);
}

export interface OverlayProps extends ComponentProps {
	active: boolean;
	color?: string;
	transitionSpeed?: string;
	onClick?: (e: React.MouseEvent<HTMLDivElement, Event>) => void;
}