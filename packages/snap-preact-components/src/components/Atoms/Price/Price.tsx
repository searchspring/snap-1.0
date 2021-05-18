/** @jsx jsx */
import { h } from 'preact';

import { filters } from '@searchspring/snap-toolbox';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';

import { Theme, useTheme } from '../../../providers/theme';
import { FormattedNumberProps } from '../FormattedNumber/FormattedNumber';

const CSS = {
	price: ({ theme, style }) =>
		css({
			color: theme.colors?.primary,
			'&.ss__price--strike': {
				textDecoration: 'line-through',
				color: 'initial',
			},
			...style,
		}),
};

export function Price(properties: PriceProps): JSX.Element {
	const globalTheme: Theme = useTheme();
	const theme = { ...globalTheme, ...properties.theme };

	const props: PriceProps = {
		// default props
		symbol: '$',
		decimalPlaces: 2,
		padDecimalPlaces: true,
		thousandsSeparator: ',',
		decimalSeparator: '.',
		symbolAfter: false,
		lineThrough: false,
		// global theme
		...globalTheme?.components?.price,
		// props
		...properties,
		...properties.theme?.components?.price,
	};

	const {
		lineThrough,
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

	const formattedPrice = filters.currency(value, {
		symbol,
		decimalPlaces,
		padDecimalPlaces,
		thousandsSeparator,
		decimalSeparator,
		symbolAfter,
	});

	return (
		<span css={!disableStyles && CSS.price({ theme, style })} className={classnames('ss__price', { 'ss__price--strike': lineThrough }, className)}>
			{formattedPrice}
		</span>
	);
}

export interface PriceProps extends FormattedNumberProps {
	lineThrough?: boolean;
}
