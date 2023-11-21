/** @jsx jsx */
import { Fragment, h } from 'preact';

import { jsx, css } from '@emotion/react';
import classnames from 'classnames';

import { Theme, useTheme, CacheProvider } from '../../../providers';
import { ComponentProps, StylingCSS, ListOption } from '../../../types';
import { defined, mergeProps } from '../../../utilities';
import { useState } from 'react';
import { Radio, RadioProps } from '../Radio/Radio';
import { useA11y } from '../../../hooks';

const CSS = {
	radioList: ({}: Partial<RadioListProps>) =>
		css({
			'& .ss__radio-list__options-wrapper': {
				border: 'none',
				listStyle: 'none',
				padding: '0px',
				margin: '0px',
			},

			'.ss__radio-list__title': {
				margin: '0px',
				padding: '5px',
			},

			'.ss__radio-list__option': {
				cursor: 'pointer',
				display: 'flex',
				alignItems: 'center',
				padding: '5px',

				'& .ss__radio-list__option__label': {
					padding: '0px 0px 0px 5px',
				},
			},

			'&.ss__radio-list--disabled, .ss__radio-list__option--disabled': {
				cursor: 'none',
				pointerEvents: 'none',
				opacity: 0.5,
			},

			'.ss__radio-list__option--selected': {
				fontWeight: 'bold',
			},
		}),
};

export function RadioList(properties: RadioListProps): JSX.Element {
	const globalTheme: Theme = useTheme();
	const defaultProps: Partial<RadioListProps> = {};

	const props = mergeProps('radioList', globalTheme, defaultProps, properties);

	const { titleText, onSelect, hideRadios, native, disabled, selected, options, disableStyles, className, style, styleScript } = props;

	const subProps: RadioListSubProps = {
		Radio: {
			className: 'ss__radio-list__option__radio',
			native: native,
			disableA11y: true,
			disabled: disabled,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
		},
	};

	const styling: { css?: StylingCSS } = {};
	const stylingProps = { ...props };

	if (styleScript && !disableStyles) {
		styling.css = [styleScript(stylingProps), style];
	} else if (!disableStyles) {
		styling.css = [CSS.radioList(stylingProps), style];
	} else if (style) {
		styling.css = [style];
	}

	// selection state
	const [selection, setSelection] = useState<string | number | undefined>(selected);

	const makeSelection = (e: React.MouseEvent<HTMLElement>, option: ListOption) => {
		if (onSelect) {
			onSelect(e, option!);
		}

		setSelection(option?.value);
	};

	return typeof options == 'object' && options?.length ? (
		<CacheProvider>
			<div {...styling} className={classnames('ss__radio-list', disabled ? 'ss__radio-list--disabled' : '', className)}>
				{titleText && <h5 className="ss__radio-list__title">{titleText}</h5>}

				<ul className={`ss__radio-list__options-wrapper`}>
					{options.map((option: ListOption) => {
						return (
							<li
								className={`ss__radio-list__option ${selection == option.value ? 'ss__radio-list__option--selected' : ''} ${
									option.disabled ? 'ss__radio-list__option--disabled' : ''
								}`}
								ref={(e) => useA11y(e)}
								onClick={(e) => !disabled && makeSelection(e as any, option)}
							>
								{!hideRadios && <Radio {...subProps.Radio} checked={option.value == selection} disableA11y={true} />}
								<label className="ss__radio-list__option__label">{option.label || option.value}</label>
							</li>
						);
					})}
				</ul>
			</div>
		</CacheProvider>
	) : (
		<Fragment></Fragment>
	);
}

export interface RadioListProps extends ComponentProps {
	options: ListOption[];
	native?: boolean;
	hideRadios?: boolean;
	onSelect?: (e: React.MouseEvent<HTMLElement>, option: ListOption) => void;
	titleText?: string;
	disabled?: boolean;
	selected?: string | number;
}

interface RadioListSubProps {
	Radio: Partial<RadioProps>;
}
