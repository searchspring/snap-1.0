import { h } from 'preact';

import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';

const CSS = {
	toggle: ({ activeColor, inactiveColor, buttonColor, size }: Partial<ToggleProps>) =>
		css({
			display: 'flex',
			alignItems: 'center',

			svg: {
				position: 'absolute',
				path: {
					fill: '#3A23AD',
				},
			},

			'&.ss__toggle--off': {
				svg: {
					path: {
						stroke: '#ddd !important',
						fill: 'none',
					},
				},
			},

			'&.ss__toggle--disabled': {
				opacity: '.5',
				cursor: 'none',
				pointerEvents: 'none',
			},

			/* The switch - the box around the slider */
			'& .ss__toggle__switch': {
				position: 'relative',
				display: 'inline-block',
				width: size,
				height: `calc(${size} / 2 + 4px)`,
				margin: '10px',
			},

			/* Hide default HTML checkbox */
			'& .ss__toggle__switch input': {
				opacity: '0',
				width: '0',
				height: '0',
			},

			/* The slider */
			'& .ss__toggle__slider-box': {
				position: 'absolute',
				cursor: 'pointer',
				top: '0',
				left: '0',
				right: '0',
				bottom: '0',
				backgroundColor: inactiveColor || '#ccc',
				transition: '.4s',
			},

			'.ss__toggle__slider': {
				position: 'absolute',
				content: "''",
				height: `calc(${size} / 2 - 4px)`,
				width: `calc(${size} / 2 - 4px)`,
				left: '4px',
				bottom: '4px',
				backgroundColor: buttonColor || '#fff',
				transition: '.4s',
				zIndex: 1,
			},

			'& .ss__toggle__switch--filtered .ss__toggle__slider-box': {
				backgroundColor: activeColor || '#382f5a',
			},

			'& .ss__toggle__switch--filtered .ss__toggle__slider-box .ss__toggle__slider': {
				transform: `translateX(calc(${size} / 2 - 4px))`,
			},

			/* Rounded sliders */
			'& .ss__toggle__slider-box.ss__toggle__slider-box--round': {
				borderRadius: `calc(${size} * 2)`,
			},

			'& .ss__toggle__slider.ss__toggle__slider--round': {
				borderRadius: `calc(${size} / 2)`,
			},
		}),
};

export const Toggle = observer((props: ToggleProps): JSX.Element => {
	const { toggled, round, onClick, label, disabled, style } = props;

	const styling = {
		css: [CSS.toggle(props), style],
	};
	// const stylingProps = props;

	// if (styleScript && !disableStyles) {
	// 	styling.css = [styleScript(stylingProps), style];
	// } else if (!disableStyles) {
	// 	styling.css = ;
	// } else if (style) {
	// 	styling.css = [style];
	// }
	const [toggledState, setToggleState] = useState(toggled || false);

	const clickFunc = (e: React.MouseEvent<Element, MouseEvent>) => {
		onClick && onClick(e, !toggledState);
		setToggleState(!toggledState);
	};

	return (
		<div
			{...styling}
			className={classnames('ss__toggle', disabled ? 'ss__toggle--disabled' : '', toggledState ? 'ss__toggle--enabled' : 'ss__toggle--off')}
		>
			{label && <label className="ss__toggle__label">{label}</label>}

			<div
				className={`ss__toggle__switch ${!disabled && toggledState ? 'ss__toggle__switch--filtered' : ''}`}
				onClick={(e) => {
					clickFunc(e);
				}}
				aria-label={`currently ${toggledState ? 'selected' : 'not selected'} toggle switch ${label ? `for ${label}` : ''} `}
				aria-checked={toggledState}
			>
				<div className={`ss__toggle__slider-box ${round ? 'ss__toggle__slider-box--round' : ''}`}>
					<div className={`ss__toggle__slider ${round ? 'ss__toggle__slider--round' : ''}`}>
						<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none">
							<g clip-path="url(#clip0_576_8456)">
								<path
									d="M16 18C16.5304 18 17.0391 18.2107 17.4142 18.5858C17.7893 18.9609 18 19.4696 18 20C18 19.4696 18.2107 18.9609 18.5858 18.5858C18.9609 18.2107 19.4696 18 20 18C19.4696 18 18.9609 17.7893 18.5858 17.4142C18.2107 17.0391 18 16.5304 18 16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18ZM9 18C9 16.4087 9.63214 14.8826 10.7574 13.7574C11.8826 12.6321 13.4087 12 15 12C13.4087 12 11.8826 11.3679 10.7574 10.2426C9.63214 9.11742 9 7.5913 9 6C9 7.5913 8.36786 9.11742 7.24264 10.2426C6.11742 11.3679 4.5913 12 3 12C4.5913 12 6.11742 12.6321 7.24264 13.7574C8.36786 14.8826 9 16.4087 9 18Z"
									stroke="#3A23AD"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M17.4142 6.58579C17.0391 6.21071 16.5304 6 16 6C16.5304 6 17.0391 5.78929 17.4142 5.41421C17.7893 5.03914 18 4.53043 18 4C18 4.53043 18.2107 5.03914 18.5858 5.41421C18.9609 5.78929 19.4696 6 20 6C19.4696 6 18.9609 6.21071 18.5858 6.58579C18.2107 6.96086 18 7.46957 18 8C18 7.46957 17.7893 6.96086 17.4142 6.58579Z"
									stroke="#00CEE1"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</g>
							<defs>
								<clipPath id="clip0_576_8456">
									<rect width="24" height="24" fill="white" />
								</clipPath>
							</defs>
							<script id="snapfu-scraper" />
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
});

export interface ToggleProps {
	size: string;
	toggled?: boolean;
	label?: string;
	round?: boolean;
	onClick?: (e: React.MouseEvent, toggled: boolean) => void;
	activeColor?: string;
	inactiveColor?: string;
	buttonColor?: string;
	disabled?: boolean;
	style?: any;
}
