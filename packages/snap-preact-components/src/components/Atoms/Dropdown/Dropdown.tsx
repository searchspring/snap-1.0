/** @jsx jsx */
import { h } from 'preact';
import { useState } from 'preact/hooks';

import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';

import { ComponentProps } from '../../../types';
import { Theme, useTheme } from '../../../providers/theme';
import { useClickOutside } from '../../../hooks';

const CSS = {
	dropdown: ({ style }) =>
		css({
			position: 'relative',
			'&.ss-open': {
				'& > .ss-dropdown__content': {
					visibility: 'visible !important',
					opacity: 1,
				},
			},
			'.ss-dropdown__button': {
				cursor: 'pointer',
			},
			'.ss-dropdown__content': {
				minWidth: '100%',
				visibility: 'hidden',
				opacity: 0,
				position: 'absolute',
				top: 'auto',
				left: 0,
			},
			...style,
		}),
};

export const Dropdown = observer(
	(properties: DropdownProps): JSX.Element => {
		const globalTheme: Theme = useTheme();

		const props: DropdownProps = {
			// default props
			disableStyles: false,
			disableClickOutside: false,
			startOpen: false,
			// global theme
			...globalTheme?.components?.dropdown,
			// props
			...properties,
			...properties.theme?.components?.dropdown,
		};

		const { button, content, children, disabled, open, onClick, onToggle, startOpen, disableClickOutside, disableStyles, className, style } = props;

		let showContent, setShowContent;

		const stateful = open === undefined;
		if (stateful) {
			[showContent, setShowContent] = useState(startOpen);
		} else {
			showContent = open;
		}

		const innerRef =
			!disableClickOutside &&
			useClickOutside<HTMLDivElement>((e) => {
				if (showContent) {
					if (!disabled) {
						stateful && setShowContent(false);
						onToggle && onToggle(e, false);
					}
				}
			});

		const toggleShowContent = (e) => {
			if (stateful) {
				setShowContent((prev) => {
					onToggle && onToggle(e, !prev);
					return !prev;
				});
			}
		};

		return (
			<div
				css={!disableStyles && CSS.dropdown({ style })}
				className={classnames('ss-dropdown', { 'ss-open': showContent }, className)}
				ref={innerRef}
			>
				<div
					className="ss-dropdown__button"
					onClick={(e) => {
						if (!disabled) {
							toggleShowContent(e);
							onClick && onClick(e as any);
						}
					}}
				>
					{button}
				</div>

				<div className="ss-dropdown__content">
					{content}
					{children}
				</div>
			</div>
		);
	}
);

export interface DropdownProps extends ComponentProps {
	button: string | JSX.Element;
	content?: string | JSX.Element;
	disabled?: boolean;
	open?: boolean;
	onClick?: (event: Event) => void;
	onToggle?: (event: Event, showContent: boolean) => void;
	startOpen?: boolean;
	disableClickOutside?: boolean;
}