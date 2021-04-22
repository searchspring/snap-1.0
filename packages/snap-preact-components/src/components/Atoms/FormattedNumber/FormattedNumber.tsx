import { h } from 'preact';

import { filters } from '@searchspring/snap-toolbox';
import classnames from 'classnames';

import { Theme, useTheme } from '../../../providers/theme';
import { ComponentProps } from '../../../types';

export function FormattedNumber(properties: FormattedNumberProps): JSX.Element {
	const globalTheme: Theme = useTheme();

	const props: FormattedNumberProps = {
		// default props
		symbol: '',
		decimalPlaces: 3,
		padDecimalPlaces: true,
		thousandsSeparator: '',
		decimalSeparator: '.',
		symbolAfter: true,
		// global theme
		...globalTheme?.components?.formattedNumber,
		// props
		...properties,
		...properties.theme?.components?.formattedNumber,
	};

	const {
		value,
		symbol,
		decimalPlaces,
		padDecimalPlaces,
		thousandsSeparator,
		decimalSeparator,
		symbolAfter,
		disableStyles,
		className,
		style,
	} = props;

	return (
		<span className={classnames('ss-formattednumber', className)} style={!disableStyles && style}>
			{filters.formatNumber(value, {
				symbol,
				decimalPlaces,
				padDecimalPlaces,
				thousandsSeparator,
				decimalSeparator,
				symbolAfter,
			})}
		</span>
	);
}
export interface FormattedNumberProps extends ComponentProps {
	value: number;
	symbol?: string;
	decimalPlaces?: number;
	padDecimalPlaces?: boolean;
	thousandsSeparator?: string;
	decimalSeparator?: string;
	symbolAfter?: boolean;
}