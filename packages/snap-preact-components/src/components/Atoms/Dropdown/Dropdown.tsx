/** @jsx jsx */
import { h } from 'preact';
import { useState, StateUpdater } from 'preact/hooks';

import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';

import { ComponentProps, StylingCSS } from '../../../types';
import { Theme, useTheme, CacheProvider } from '../../../providers';
import { useClickOutside } from '../../../hooks';
import { cloneWithProps } from '../../../utilities';
import React from 'react';

const CSS = {
	dropdown: ({ disableOverlay }: Partial<DropdownProps>) =>
		css({
			position: 'relative',
			'&.ss__dropdown--open': {
				'& .ss__dropdown__content': {
					position: disableOverlay ? 'relative' : undefined,
					visibility: 'visible',
					opacity: 1,
				},
			},
			'.ss__dropdown__button': {
				cursor: `${disableOverlay ? 'default' : 'pointer'}`,
			},
			'.ss__dropdown__content': {
				position: 'absolute',
				minWidth: '100%',
				visibility: 'hidden',
				opacity: 0,
				top: 'auto',
				left: 0,
			},
		}),
};

export const Dropdown = observer((properties: DropdownProps): JSX.Element => {
	const globalTheme: Theme = useTheme();

	const props: DropdownProps = {
		// default props
		startOpen: false,
		// global theme
		...globalTheme?.components?.dropdown,
		// props
		...properties,
		...properties.theme?.components?.dropdown,
	};

	const {
		button,
		content,
		children,
		disabled,
		open,
		disableOverlay,
		onClick,
		onToggle,
		startOpen,
		disableClickOutside,
		disableStyles,
		className,
		style,
	} = props;

	let showContent: boolean | undefined, setShowContent: undefined | StateUpdater<boolean | undefined>;

	const stateful = open === undefined;
	if (stateful) {
		[showContent, setShowContent] = useState<boolean | undefined>(startOpen);
	} else {
		showContent = open;
	}

	let innerRef: React.RefObject<HTMLElement> | undefined;
	if (!disableClickOutside) {
		innerRef = useClickOutside<HTMLElement>((e) => {
			if (showContent) {
				if (!disabled) {
					stateful && setShowContent && setShowContent(false);
					onToggle && onToggle(e, false);
				}
			}
		});
	}

	const toggleShowContent = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (stateful) {
			setShowContent &&
				setShowContent((prev?: boolean) => {
					onToggle && onToggle(e, !prev);
					return !prev;
				});
		}
	};

	const styling: { css?: StylingCSS } = {};
	if (!disableStyles) {
		styling.css = [CSS.dropdown({ disableOverlay }), style];
	} else if (style) {
		styling.css = [style];
	}
	return (
		<CacheProvider>
			<div
				{...styling}
				className={classnames('ss__dropdown', { 'ss__dropdown--open': showContent }, className)}
				ref={innerRef as React.LegacyRef<HTMLDivElement>}
			>
				<div
					className="ss__dropdown__button"
					onClick={(e) => {
						if (!disabled) {
							toggleShowContent(e);
							onClick && onClick(e);
						}
					}}
				>
					{cloneWithProps(button, { open: showContent, toggleOpen: toggleShowContent })}
				</div>

				<div className="ss__dropdown__content">
					{cloneWithProps(content, { open: showContent, toggleOpen: toggleShowContent })}
					{cloneWithProps(children, { open: showContent, toggleOpen: toggleShowContent })}
				</div>
			</div>
		</CacheProvider>
	);
});

export interface DropdownProps extends ComponentProps {
	button: string | JSX.Element;
	content?: string | JSX.Element;
	children?: any;
	disabled?: boolean;
	open?: boolean;
	disableOverlay?: boolean;
	onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	onToggle?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, showContent: boolean) => void;
	startOpen?: boolean;
	disableClickOutside?: boolean;
}
