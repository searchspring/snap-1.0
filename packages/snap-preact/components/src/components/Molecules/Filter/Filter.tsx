import { h, Fragment } from 'preact';

import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';

import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { ComponentProps, StyleScript } from '../../../types';
import { Button, ButtonProps } from '../../Atoms/Button';
import { Icon, IconProps, IconType } from '../../Atoms/Icon';
import type { Filter as FilterType } from '@searchspring/snap-store-mobx';
import type { UrlManager } from '@searchspring/snap-url-manager';
import { Lang, useLang } from '../../../hooks';
import deepmerge from 'deepmerge';

const defaultStyles: StyleScript<FilterProps> = ({}) => {
	return css({
		textDecoration: 'none',
		display: 'inline-flex',
		'& .ss__filter__button': {
			alignItems: 'center',
			'& .ss__filter__button__icon': {
				margin: '0 5px 0 0',
			},
		},
		'& .ss__filter__label': {
			marginRight: '5px',
			fontWeight: 'bold',
		},
	});
};

// TODO: look into urlManager and how it connects in this case, left the href out for the time being
export const Filter = observer((properties: FilterProps): JSX.Element => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();
	const defaultProps: Partial<FilterProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('filter', globalTheme, defaultProps, properties);

	const { filter, facetLabel, valueLabel, url, hideFacetLabel, onClick, icon, separator, disableStyles, className, treePath } = props;

	const link = filter?.url?.link || url?.link;
	const value = filter?.value.label || valueLabel;
	const label = filter?.facet.label || facetLabel;

	const subProps: FilterSubProps = {
		button: {
			// default props
			className: 'ss__filter__button',
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props.theme,
			treePath,
		},
		icon: {
			// default props
			icon: 'close-thin',
			className: 'ss__filter__button__icon',
			size: '10px',
			// inherited props
			...defined({
				disableStyles,
				icon,
			}),
			// component theme overrides
			theme: props.theme,
			treePath,
		},
	};

	const styling = mergeStyles<FilterProps>(props, defaultStyles);

	//initialize lang
	const defaultLang = {
		filter: {
			attributes: {
				'aria-label': !label ? value : `remove selected ${label} filter ${value}`,
			},
		},
	};

	//deep merge with props.lang
	const lang = deepmerge(defaultLang, props.lang || {});
	const mergedLang = useLang(lang as any, {
		label,
		value,
	});

	return value ? (
		<CacheProvider>
			<a
				{...styling}
				className={classnames('ss__filter', className)}
				onClick={(e) => {
					link?.onClick && link.onClick(e);
					onClick && onClick(e);
				}}
				href={link?.href}
				{...mergedLang.filter?.all}
			>
				<Button {...subProps.button}>
					<Icon {...subProps.icon} {...(typeof icon == 'string' ? { icon: icon } : (icon as Partial<IconProps>))} />
					{!hideFacetLabel && (
						<span className="ss__filter__label">
							{label}
							{separator && <span className="ss__filter__label__separator">{separator}</span>}
						</span>
					)}
					<span className="ss__filter__value">{value}</span>
				</Button>
			</a>
		</CacheProvider>
	) : (
		<Fragment></Fragment>
	);
});

export interface FilterProps extends ComponentProps {
	filter?: FilterType;
	facetLabel?: string;
	valueLabel?: string;
	url?: UrlManager;
	hideFacetLabel?: boolean;
	onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
	icon?: IconType | Partial<IconProps>;
	separator?: string;
	lang?: Partial<FilterLang>;
}

export interface FilterLang {
	filter: Lang<{
		label?: string;
		value?: string;
	}>;
}

interface FilterSubProps {
	button: ButtonProps;
	icon: IconProps;
}

export type FilterNames = 'clear-all';
