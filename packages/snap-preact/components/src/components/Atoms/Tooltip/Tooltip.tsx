import { h, ComponentChildren } from 'preact';
import { useState, useRef } from 'preact/hooks';
import { createPortal } from 'preact/compat';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { ComponentProps, StyleScript } from '../../../types';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { Icon, IconProps, IconType } from '../Icon';

const sharedContentStyles = {
	backgroundColor: '#333',
	color: '#fff',
	textAlign: 'center',
	borderRadius: '6px',
	padding: '5px 10px',
	fontSize: '12px',
	display: 'flex',
	alignContent: 'center',
	justifyContent: 'center',
	alignItems: 'center',
	whiteSpace: 'nowrap',
	'.ss__icon': {
		padding: '0px 5px',
	},
} as const;

const arrowStyles = (position: string | undefined, children?: ComponentChildren) => ({
	content: children ? '""' : undefined,
	position: 'absolute' as const,
	borderWidth: '5px',
	borderStyle: 'solid',
	// Arrow specific styles
	...(position === 'top' && {
		top: '100%',
		left: '50%',
		marginLeft: '-5px',
		borderColor: '#333 transparent transparent transparent',
	}),
	...(position === 'bottom' && {
		bottom: '100%',
		left: '50%',
		marginLeft: '-5px',
		borderColor: 'transparent transparent #333 transparent',
	}),
	...(position === 'left' && {
		top: '50%',
		left: '100%',
		marginTop: '-5px',
		borderColor: 'transparent transparent transparent #333',
	}),
	...(position === 'right' && {
		top: '50%',
		right: '100%',
		marginTop: '-5px',
		borderColor: 'transparent #333 transparent transparent',
	}),
});

const defaultStyles: StyleScript<TooltipProps> = ({ children, position }) => {
	return css({
		position: 'relative',
		display: 'inline-flex',
		'.ss__tooltip__content': {
			//dont hide the content if theres no children to hover to active it.
			visibility: children ? 'hidden' : 'visible',
			opacity: children ? 0 : 1,
			...sharedContentStyles,
			position: 'absolute',
			zIndex: 1,
			transition: 'opacity 0.3s',

			// Position specific styles
			...(position === 'top' && {
				bottom: '125%',
				left: '50%',
				transform: 'translateX(-50%)',
			}),
			...(position === 'bottom' && {
				top: '125%',
				left: '50%',
				transform: 'translateX(-50%)',
			}),
			...(position === 'left' && {
				top: '50%',
				right: '125%',
				transform: 'translateY(-50%)',
			}),
			...(position === 'right' && {
				top: '50%',
				left: '125%',
				transform: 'translateY(-50%)',
			}),

			'&::after': arrowStyles(position, children),
		},
		'&:hover .ss__tooltip__content': {
			visibility: 'visible',
			opacity: 1,
		},
	});
};

const defaultPortalContentStyles: StyleScript<TooltipProps & { top: number; left: number }> = ({ position, top, left }) => {
	return css({
		position: 'absolute',
		top: `${top}px`,
		left: `${left}px`,
		zIndex: 9999,
		...sharedContentStyles,
		// Transform based on position to center/align
		...(position === 'top' && { transform: 'translate(-50%, -100%)' }),
		...(position === 'bottom' && { transform: 'translate(-50%, 0)' }),
		...(position === 'left' && { transform: 'translate(-100%, -50%)' }),
		...(position === 'right' && { transform: 'translate(0, -50%)' }),

		'&::after': arrowStyles(position, true),
	});
};

export function Tooltip(properties: TooltipProps): JSX.Element {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<TooltipProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('tooltip', globalTheme, defaultProps, properties);

	const { children, content, icon, className, disableStyles, treePath, usePortal } = props;

	//set default position
	if (!props.position && props.children) {
		props.position = 'top';
	}

	const subProps: TooltipSubProps = {
		icon: {
			internalClassName: 'ss__tooltip__icon',
			// default props
			color: 'white',
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
	};

	const [visible, setVisible] = useState(false);
	const [coords, setCoords] = useState({ top: 0, left: 0 });
	const triggerRef = useRef<HTMLDivElement>(null);

	const handleMouseEnter = () => {
		if (usePortal && triggerRef.current) {
			const rect = triggerRef.current.getBoundingClientRect();
			const scrollX = window.scrollX || window.pageXOffset;
			const scrollY = window.scrollY || window.pageYOffset;
			const gap = 10; // Gap between trigger and tooltip
			let top = 0;
			let left = 0;

			switch (props.position) {
				case 'top':
					top = rect.top + scrollY - gap;
					left = rect.left + scrollX + rect.width / 2;
					break;
				case 'bottom':
					top = rect.bottom + scrollY + gap;
					left = rect.left + scrollX + rect.width / 2;
					break;
				case 'left':
					top = rect.top + scrollY + rect.height / 2;
					left = rect.left + scrollX - gap;
					break;
				case 'right':
					top = rect.top + scrollY + rect.height / 2;
					left = rect.right + scrollX + gap;
					break;
			}
			setCoords({ top, left });
			setVisible(true);
		}
	};

	const handleMouseLeave = () => {
		if (usePortal) {
			setVisible(false);
		}
	};

	const styling = mergeStyles<TooltipProps>(props, defaultStyles);
	const portalStyling = mergeStyles<TooltipProps & { top: number; left: number }>(
		{ ...props, top: coords.top, left: coords.left },
		defaultPortalContentStyles
	);

	const tooltipContent = (
		<span className="ss__tooltip__content">
			{icon ? <Icon {...subProps.icon} {...(typeof icon == 'string' ? { icon: icon } : (icon as Partial<IconProps>))} /> : null} {content}
		</span>
	);

	if (usePortal) {
		return (
			<CacheProvider>
				<div
					className={classnames('ss__tooltip', className)}
					ref={triggerRef}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					{...styling}
				>
					{children}
					{visible &&
						createPortal(
							<div {...portalStyling}>
								{icon ? <Icon {...subProps.icon} {...(typeof icon == 'string' ? { icon: icon } : (icon as Partial<IconProps>))} /> : null} {content}
							</div>,
							document.body
						)}
				</div>
			</CacheProvider>
		);
	}

	return (
		<CacheProvider>
			<div {...styling} className={classnames('ss__tooltip', className)}>
				{children}
				{tooltipContent}
			</div>
		</CacheProvider>
	);
}

export interface TooltipProps extends ComponentProps {
	content: string;
	children?: ComponentChildren;
	icon?: IconType | Partial<IconProps>;
	position?: 'top' | 'bottom' | 'left' | 'right';
	usePortal?: boolean;
}

interface TooltipSubProps {
	icon: Partial<IconProps>;
}
