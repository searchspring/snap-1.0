/** @jsx jsx */
import { h } from 'preact';

import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';

import { Theme, useTheme, CacheProvider } from '../../../providers';
import { ComponentProps, ValueFacetValue } from '../../../types';

const CSS = {
	grid: ({ columns, gapSize, theme }) =>
		css({
			display: 'flex',
			flexFlow: 'row wrap',
			gridTemplateColumns: `repeat(${columns}, 1fr)`,
			gap: gapSize,
			gridAutoRows: `1fr`,

			'& .ss__facet-grid-options__option': {
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flex: '0 1 auto',
				border: `1px solid ${theme.colors?.primary || '#333'}`,
				textAlign: 'center',
				wordBreak: 'break-all',
				boxSizing: 'border-box',
				padding: '1em 0',
				width: `calc(100% / ${columns} - ${2 * Math.round((columns + 2) / 2)}px)`,
				margin: `0 ${gapSize} ${gapSize} 0`,

				[`:nth-of-type(${columns}n)`]: {
					marginRight: '0',
				},
				'&.ss__facet-grid-options__option--filtered': {
					background: theme.colors?.primary || '#ccc',
					color: theme.colors?.text?.secondary,
				},
				'&:hover:not(.ss__facet-grid-options__option--filtered)': {
					cursor: 'pointer',
					background: theme.colors?.hover || '#f8f8f8',
				},
				'& .ss__facet-grid-options__option__value': {
					'&.ss__facet-grid-options__option__value--smaller': {
						fontSize: '70%',
					},
				},
			},

			'@supports (display: grid)': {
				display: 'grid',

				'& .ss__facet-grid-options__option': {
					padding: '0',
					margin: '0',
					width: 'initial',
				},
				'&::before': {
					content: '""',
					width: 0,
					paddingBottom: '100%',
					gridRow: '1 / 1',
					gridColumn: '1 / 1',
				},
				'&> *:first-of-type': {
					gridRow: '1 / 1',
					gridColumn: '1 / 1',
				},
			},
		}),
};

export const FacetGridOptions = observer((properties: FacetGridOptionsProps): JSX.Element => {
	const globalTheme: Theme = useTheme();
	const theme = { ...globalTheme, ...properties.theme };

	const props: FacetGridOptionsProps = {
		// default props
		columns: 4,
		gapSize: '8px',
		// global theme
		...globalTheme?.components?.facetGridOptions,
		// props
		...properties,
		...properties.theme?.components?.facetGridOptions,
	};

	const { values, columns, gapSize, onClick, previewOnFocus, valueProps, disableStyles, className, style } = props;

	const styling: { css?: any } = {};
	if (!disableStyles) {
		styling.css = [CSS.grid({ columns, gapSize, theme }), style];
	} else if (style) {
		styling.css = [style];
	}

	return (
		values?.length && (
			<CacheProvider>
				<div {...styling} className={classnames('ss__facet-grid-options', className)}>
					{values.map((value) => (
						<a
							className={classnames('ss__facet-grid-options__option', { 'ss__facet-grid-options__option--filtered': value.filtered })}
							onClick={onClick}
							onFocus={() => previewOnFocus && value.preview && value.preview()}
							{...valueProps}
							{...value.url?.link}
						>
							<span
								className={classnames('ss__facet-grid-options__option__value', {
									'ss__facet-grid-options__option__value--smaller': value.label.length > 3,
								})}
							>
								{value.label}
							</span>
						</a>
					))}
				</div>
			</CacheProvider>
		)
	);
});

export interface FacetGridOptionsProps extends ComponentProps {
	values: ValueFacetValue[];
	columns?: number;
	gapSize?: string;
	onClick?: (e: Event) => void;
	previewOnFocus?: boolean;
	valueProps?: any;
}
