import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { observer } from 'mobx-react-lite';
import { css } from '@emotion/react';
import classnames from 'classnames';

import type { SearchController, AutocompleteController, RecommendationController, ChatController } from '@athoscommerce/snap-controller';
import type { Product, ProductQuickViewStore, VariantSelection } from '@athoscommerce/snap-store-mobx';

import { Overlay } from '../../Atoms/Overlay';
import { Image } from '../../Atoms/Image';
import { Button } from '../../Atoms/Button';
import { Price } from '../../Atoms/Price';
import { Icon } from '../../Atoms/Icon';
import { ComponentProps, StyleScript } from '../../../types';
import { useTheme, useTreePath, Theme } from '../../../providers';
import { mergeProps, mergeStyles } from '../../../utilities';

// Fields that have dedicated rendering on the product card; skip them in the info table.
const CARD_FIELDS = new Set([
	'name',
	'brand',
	'price',
	'msrp',
	'imageUrl',
	'thumbnailImageUrl',
	'secureImageUrl',
	'secureThumbnailImageUrl',
	'url',
	'addToCartUrl',
	'uid',
	'sku',
	'parentId',
	'parentImageUrl',
	'description',
	'caption',
	'popularity',
	'stockMessage',
]);

// Preferred ordering for the structured info table — anything else is appended after.
const PREFERRED_INFO_ORDER = ['material', 'fit', 'color', 'sizes', 'size', 'category', 'rating', 'availability'];

const FEATURE_KEYS = ['features', 'feature_list', 'productFeatures', 'product_features', 'highlights'];

const formatLabel = (key: string): string => {
	return key
		.replace(/[_-]+/g, ' ')
		.replace(/([a-z])([A-Z])/g, '$1 $2')
		.trim();
};

const stripHtml = (str: string): string => str.replace(/<[^>]*>/g, '');

const formatValue = (value: unknown): string => {
	if (Array.isArray(value)) {
		return stripHtml(value.filter((v) => v != null && v !== '').join(', '));
	}
	if (value == null) return '';
	// Upstream sometimes ships array fields as JSON-encoded strings (e.g. `'["VersaWearCo"]'`).
	// Detect and unwrap before stringifying so the raw brackets/quotes don't leak into the UI.
	if (typeof value === 'string') {
		const trimmed = value.trim();
		if ((trimmed.startsWith('[') && trimmed.endsWith(']')) || (trimmed.startsWith('{') && trimmed.endsWith('}'))) {
			try {
				const parsed = JSON.parse(trimmed);
				if (Array.isArray(parsed)) {
					return stripHtml(parsed.filter((v) => v != null && v !== '').join(', '));
				}
			} catch {
				// fall through — value wasn't valid JSON, just treat it as a string
			}
		}
	}
	return stripHtml(String(value));
};

const collectFeatures = (display: any): string[] => {
	const attributes = display?.attributes || {};
	for (const key of FEATURE_KEYS) {
		const raw = attributes[key];
		if (Array.isArray(raw) && raw.length > 0) {
			return raw.map((v) => String(v)).filter(Boolean);
		}
		if (typeof raw === 'string' && raw.trim()) {
			return raw
				.split(/\r?\n|,/)
				.map((v) => v.trim())
				.filter(Boolean);
		}
	}
	return [];
};

const collectInfoRows = (display: any, displayFields?: string[]): { key: string; label: string; value: string; rawKey: string }[] => {
	const core = display?.mappings?.core || {};
	const attributes = display?.attributes || {};
	const filterByDisplayFields = displayFields && displayFields.length > 0;
	const displayFieldsLower = filterByDisplayFields ? displayFields!.map((f) => f.toLowerCase()) : [];

	const merged: Record<string, unknown> = {};

	// When displayFields is specified, include matching core fields that are normally skipped.
	if (filterByDisplayFields) {
		Object.entries(core).forEach(([key, value]) => {
			if (displayFieldsLower.includes(key.toLowerCase()) && value != null) {
				merged[key] = value;
			}
		});
	}

	// Pull selected core fields (rating + availability) regardless.
	if (core.rating != null) {
		const rating = core.rating;
		const ratingCount = core.ratingCount;
		merged.rating = ratingCount ? `${rating}/5.0 (${ratingCount} reviews)` : `${rating}/5.0`;
	}
	if (core.available != null) {
		merged.availability = core.available ? 'In Stock' : 'Out of Stock';
	}

	// Merge product attributes, skipping ones already shown on the card and the feature lists.
	Object.entries(attributes).forEach(([key, value]) => {
		if (!filterByDisplayFields && CARD_FIELDS.has(key)) return;
		if (FEATURE_KEYS.includes(key)) return;
		const formatted = formatValue(value);
		if (!formatted) return;
		merged[key] = formatted;
	});

	const seen = new Set<string>();
	const ordered: { key: string; label: string; value: string; rawKey: string }[] = [];

	PREFERRED_INFO_ORDER.forEach((preferred) => {
		const match = Object.keys(merged).find((k) => k.toLowerCase() === preferred);
		if (match && !seen.has(match)) {
			seen.add(match);
			ordered.push({ key: match, rawKey: match, label: formatLabel(match), value: formatValue(merged[match]) });
		}
	});

	Object.keys(merged).forEach((key) => {
		if (seen.has(key)) return;
		seen.add(key);
		ordered.push({ key, rawKey: key, label: formatLabel(key), value: formatValue(merged[key]) });
	});

	if (filterByDisplayFields) {
		const filtered = ordered.filter((row) => displayFieldsLower.includes(row.rawKey.toLowerCase()));
		filtered.sort((a, b) => displayFieldsLower.indexOf(a.rawKey.toLowerCase()) - displayFieldsLower.indexOf(b.rawKey.toLowerCase()));
		return filtered;
	}

	return ordered;
};

const defaultStyles: StyleScript<ProductQuickViewProps> = () => {
	return css({
		// Fixed viewport-level wrapper that hosts both the backdrop and the centered panel.
		position: 'fixed',
		inset: 0,
		zIndex: 10004,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',

		'.ss__product-quick-view__panel': {
			background: '#fff',
			borderRadius: '8px',
			padding: '1.5em',
			maxWidth: '760px',
			width: '90vw',
			maxHeight: '85vh',
			overflowY: 'auto',
			position: 'relative',
			boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
			zIndex: 10004,
			display: 'flex',
			flexDirection: 'column',
			gap: '1em',
		},
		'.ss__product-quick-view__close': {
			position: 'absolute',
			top: '0.75em',
			right: '0.75em',
			cursor: 'pointer',
			padding: '4px',
			zIndex: 1,
		},
		'.ss__product-quick-view__error': {
			padding: '0.75em 1em',
			background: '#fee',
			color: '#a00',
			borderRadius: '4px',
		},
		'.ss__product-quick-view__loading': {
			padding: '2em',
			textAlign: 'center',
			color: '#6A7282',
		},

		'.ss__product-quick-view__body': {
			display: 'flex',
			gap: '1.5em',
			alignItems: 'flex-start',
			flexWrap: 'wrap',
		},

		'.ss__product-quick-view__left': {
			flex: '0 0 auto',
			width: '40%',
			maxWidth: '280px',
			minWidth: '180px',
			display: 'flex',
			flexDirection: 'column',
			gap: '0.75em',
			// On narrow viewports the body wraps to stack vertically — let the image column
			// stretch full-width so the image doesn't sit awkwardly at a fixed 40%/280px.
			// The flex wraps once the panel can't fit the 280px left + gap + 320px right basis,
			// which lands around a 680px viewport given the 90vw panel and 1.5em padding.
			'@media (max-width: 700px)': {
				width: '100%',
				maxWidth: 'none',
				minWidth: 0,
			},
			'.ss__product-quick-view__left__image': {
				width: '100%',
				objectFit: 'contain',
				borderRadius: '0.33em',
				overflow: 'hidden',
			},
			'.ss__product-quick-view__left__actions': {
				display: 'flex',
				flexDirection: 'column',
				gap: '0.5em',
				'.ss__product-quick-view__left__actions__go-to-product': {
					textAlign: 'center',
					a: {
						fontSize: '1em',
						textDecoration: 'underline',
						cursor: 'pointer',
						color: '#374151',
					},
				},
				'.ss__product-quick-view__left__actions__add-to-cart .ss__button': {
					width: '100%',
					// Center the button text — the Button atom defaults to inline-flex with
					// alignItems:center only, so longer labels would otherwise stay left-aligned.
					justifyContent: 'center',
					textAlign: 'center',
					background: '#253B80',
					color: '#fff',
					border: '1px solid #253B80',
					fontWeight: 'bold',
					padding: '0.6em 0.75em',
					'&:not(.ss__button--disabled):hover': {
						background: '#1e3068',
					},
				},
			},
		},

		'.ss__product-quick-view__right': {
			flex: '1 1 320px',
			minWidth: 0,
			display: 'flex',
			flexDirection: 'column',
			gap: '1em',
			'.ss__product-quick-view__title': {
				display: 'flex',
				flexDirection: 'column',
				gap: '0.25em',
				'.ss__product-quick-view__title__name': {
					fontWeight: 'bold',
					fontSize: '1.25em',
					lineHeight: 1.3,
					a: { color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } },
				},
				'.ss__product-quick-view__title__brand': {
					fontSize: '0.9em',
					color: '#6A7282',
				},
				'.ss__product-quick-view__title__price': {
					fontWeight: 'bold',
					fontSize: '1.15em',
					display: 'flex',
					gap: '0.5em',
					alignItems: 'center',
					marginTop: '0.25em',
				},
			},
		},

		'.ss__product-quick-view__variants': {
			'.ss__product-quick-view__variants__label': {
				fontWeight: 600,
				fontSize: '0.9em',
				color: '#374151',
				textTransform: 'uppercase',
				marginBottom: '0.5em',
			},
			'.ss__product-quick-view__variants__swatches': {
				display: 'flex',
				flexWrap: 'wrap',
				gap: '0.5em',
				'.ss__product-quick-view__variants__swatch': {
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '0.25em',
					cursor: 'pointer',
					padding: '0.25em',
					borderRadius: '0.5em',
					border: '2px solid transparent',
					transition: 'border-color 0.15s ease',
					'&:hover': { borderColor: '#253B80' },
					'&.ss__product-quick-view__variants__swatch--selected': {
						borderColor: '#253B80',
						borderWidth: '3px',
						padding: '0.15em',
					},
					'&.ss__product-quick-view__variants__swatch--unavailable': {
						opacity: 0.4,
					},
					'.ss__product-quick-view__variants__swatch__image': {
						width: '48px',
						height: '48px',
						objectFit: 'cover',
						borderRadius: '50%',
						border: '1px solid #E5E7EB',
					},
					'.ss__product-quick-view__variants__swatch__value': {
						fontSize: '0.75em',
						color: '#374151',
						textAlign: 'center',
						maxWidth: '60px',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap',
					},
				},
			},
		},

		'.ss__product-quick-view__section': {
			'.ss__product-quick-view__section__title': {
				fontWeight: 600,
				fontSize: '0.9em',
				color: '#374151',
				marginBottom: '0.4em',
			},
			'.ss__product-quick-view__section__table': {
				width: '100%',
				borderCollapse: 'collapse',
				fontSize: '0.9em',
				tr: {
					borderBottom: '1px solid #E5E7EB',
				},
				td: {
					padding: '0.4em 0',
					verticalAlign: 'top',
					wordBreak: 'break-word',
					overflowWrap: 'anywhere',
				},
				'td:first-of-type': {
					color: '#6A7282',
					width: '40%',
				},
				'td:last-of-type': {
					textAlign: 'right',
					color: '#374151',
				},
				'.ss__product-quick-view__section__table__availability--in-stock': {
					color: '#10B981',
				},
				'.ss__product-quick-view__section__table__availability--out-of-stock': {
					color: '#DC2626',
				},
			},
			'.ss__product-quick-view__section__description': {
				fontSize: '0.9em',
				color: '#374151',
				lineHeight: 1.5,
			},
			'.ss__product-quick-view__section__features': {
				margin: 0,
				padding: '0 0 0 1.25em',
				fontSize: '0.9em',
				listStyle: 'disc',
				li: {
					padding: '0.2em 0',
					color: '#374151',
				},
			},
		},
	});
};

export const ProductQuickView = observer((properties: ProductQuickViewProps): h.JSX.Element | null => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ProductQuickViewProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('productQuickView', globalTheme, defaultProps, properties);
	const { controller, displayFields, className, internalClassName } = props;

	const store = (controller?.store as any)?.productQuickView as ProductQuickViewStore | undefined;
	if (!store) return null;

	const product: Product | null = store.product;
	const error: string | null = store.error;
	const loading: boolean = store.loading;
	const open = product !== null;

	const close = () => store.clear();
	const styling = mergeStyles<ProductQuickViewProps>(props, defaultStyles);

	// Lock body scroll while the quickview is open.
	useEffect(() => {
		if (!open) return;
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = previousOverflow;
		};
	}, [open]);

	if (!open) return null;

	return (
		<div className={classnames('ss__product-quick-view', className, internalClassName)} {...styling}>
			<Overlay active={true} color="rgba(0,0,0,0.7)" onClick={close} />
			<div className="ss__product-quick-view__panel">
				<div className="ss__product-quick-view__close" onClick={close} role="button" aria-label="Close">
					<Icon icon="close-thin" size="16px" />
				</div>

				{product ? (
					<ProductQuickViewBody product={product} loading={loading} error={error} controller={controller} displayFields={displayFields} />
				) : (
					<div className="ss__product-quick-view__loading">Loading...</div>
				)}
			</div>
		</div>
	);
});

type ProductQuickViewBodyProps = {
	product: Product;
	loading: boolean;
	error: string | null;
	controller: ProductQuickViewProps['controller'];
	displayFields?: string[];
};

const ProductQuickViewBody = observer((props: ProductQuickViewBodyProps): h.JSX.Element => {
	const { product, loading, error, controller, displayFields } = props;
	const displayed = product.display;
	const displayedCore = displayed.mappings?.core || {};

	const variants = product.variants;
	const selections: VariantSelection[] = variants?.selections || [];

	const displayedData = {
		mappings: displayed.mappings,
		attributes: displayed.attributes || {},
	};

	const allInfoRows = collectInfoRows(displayedData, displayFields);
	const descriptionRow = allInfoRows.find((row) => row.rawKey.toLowerCase() === 'description');
	const infoRows = allInfoRows.filter((row) => row.rawKey.toLowerCase() !== 'description');
	const features = collectFeatures(displayedData);

	// `addToCart` exists on Recommendation/Chat controllers but not on Search/Autocomplete.
	const supportsAddToCart = typeof (controller as any)?.addToCart === 'function';

	return (
		<div>
			{error && <div className="ss__product-quick-view__error">{error}</div>}

			<div className="ss__product-quick-view__body">
				<div className="ss__product-quick-view__left">
					{displayedCore.imageUrl ? (
						<Image
							className="ss__product-quick-view__left__image"
							src={displayedCore.imageUrl as string}
							alt={(displayedCore.name as string) || ''}
						/>
					) : null}
					<div className="ss__product-quick-view__left__actions">
						{supportsAddToCart && (
							<div className="ss__product-quick-view__left__actions__add-to-cart">
								<Button
									content={'Add to Cart'}
									onClick={() => {
										(controller as any)?.track?.product?.addToCart?.(product);
										(controller as any).addToCart(product);
									}}
								/>
							</div>
						)}
						{displayedCore.url && (
							<div className="ss__product-quick-view__left__actions__go-to-product">
								<a
									href={displayedCore.url as string}
									onClick={(e) => (controller as any)?.track?.product?.click?.(e as any, product)}
									target="_blank"
									rel="noopener noreferrer"
								>
									Go to product
								</a>
							</div>
						)}
					</div>
				</div>

				<div className="ss__product-quick-view__right">
					<div className="ss__product-quick-view__title">
						{displayedCore.name && (
							<div className="ss__product-quick-view__title__name">
								{displayedCore.url ? (
									<a
										href={displayedCore.url as string}
										onClick={(e) => (controller as any)?.track?.product?.click?.(e as any, product)}
										target="_blank"
										rel="noopener noreferrer"
									>
										{formatValue(displayedCore.name)}
									</a>
								) : (
									formatValue(displayedCore.name)
								)}
							</div>
						)}
						{displayedCore.brand != null && formatValue(displayedCore.brand) && (
							<div className="ss__product-quick-view__title__brand">{formatValue(displayedCore.brand)}</div>
						)}
						{displayedCore.price != null && (
							<div className="ss__product-quick-view__title__price">
								{displayedCore.msrp != null && Number(displayedCore.msrp) > Number(displayedCore.price) && (
									<Price value={displayedCore.msrp} lineThrough={true} />
								)}
								<Price value={displayedCore.price} />
							</div>
						)}
					</div>

					{selections.length > 0 && (
						<div className="ss__product-quick-view__variants">
							{selections.map((selection: VariantSelection) => (
								<div key={selection.field}>
									<div className="ss__product-quick-view__variants__label">
										{formatLabel(selection.field)} ({selection.values.length})
									</div>
									<div className="ss__product-quick-view__variants__swatches">
										{selection.values.map((selectionValue: any) => {
											const isUnavailable = !selectionValue.available;
											const isSelected = selection.selected?.value === selectionValue.value;
											return (
												<div
													key={selectionValue.value}
													className={classnames('ss__product-quick-view__variants__swatch', {
														'ss__product-quick-view__variants__swatch--selected': isSelected,
														'ss__product-quick-view__variants__swatch--unavailable': isUnavailable,
													})}
													title={selectionValue.value}
													onClick={() => selection.select(selectionValue.value)}
												>
													{selectionValue.thumbnailImageUrl ? (
														<Image
															className="ss__product-quick-view__variants__swatch__image"
															src={selectionValue.thumbnailImageUrl}
															alt={selectionValue.value}
														/>
													) : null}
													<span className="ss__product-quick-view__variants__swatch__value">{selectionValue.value}</span>
												</div>
											);
										})}
									</div>
								</div>
							))}
						</div>
					)}

					{infoRows.length > 0 && (
						<div className="ss__product-quick-view__section">
							<div className="ss__product-quick-view__section__title">Product Information</div>
							<table className="ss__product-quick-view__section__table">
								<tbody>
									{infoRows.map((row) => (
										<tr key={row.key}>
											<td>{row.label}</td>
											<td>
												{row.rawKey === 'availability' ? (
													<span
														className={classnames({
															'ss__product-quick-view__section__table__availability--in-stock': row.value === 'In Stock',
															'ss__product-quick-view__section__table__availability--out-of-stock': row.value === 'Out of Stock',
														})}
													>
														{row.value === 'In Stock' ? `✓ ${row.value}` : row.value}
													</span>
												) : row.rawKey.toLowerCase() === 'price' ? (
													<span style={{ display: 'flex', gap: '0.5em', alignItems: 'center', justifyContent: 'flex-end' }}>
														{displayedCore.msrp != null && Number(displayedCore.msrp) > Number(row.value) && (
															<Price value={Number(displayedCore.msrp)} lineThrough={true} />
														)}
														<Price value={Number(row.value)} />
													</span>
												) : (
													row.value
												)}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					)}

					{descriptionRow && (
						<div className="ss__product-quick-view__section">
							<div className="ss__product-quick-view__section__title">Description</div>
							<div className="ss__product-quick-view__section__description">{descriptionRow.value}</div>
						</div>
					)}

					{features.length > 0 && (
						<div className="ss__product-quick-view__section">
							<div className="ss__product-quick-view__section__title">Features</div>
							<ul className="ss__product-quick-view__section__features">
								{features.map((feature, idx) => (
									<li key={idx}>{feature}</li>
								))}
							</ul>
						</div>
					)}

					{loading && selections.length === 0 && infoRows.length === 0 && !descriptionRow && features.length === 0 && (
						<div className="ss__product-quick-view__loading">Loading product details...</div>
					)}
				</div>
			</div>
		</div>
	);
});

export type ProductQuickViewProps = ComponentProps & {
	controller: SearchController | AutocompleteController | RecommendationController | ChatController;
	displayFields?: string[];
};
