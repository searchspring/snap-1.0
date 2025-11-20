import { h } from 'preact';
import { Ref } from 'preact/hooks';
import { observer } from 'mobx-react-lite';
import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { defined, mergeProps } from '../../../utilities';
import { ComponentProps, ResultsLayout } from '../../../types';
import type { SearchController, AutocompleteController, RecommendationController } from '@searchspring/snap-controller';
import type { Product } from '@searchspring/snap-store-mobx';
import { VariantSelection } from '../VariantSelection';
import { Result, ResultLang, ResultProps, TruncateTitleProps } from '../Result';

export const VariantResult = observer((properties: VariantResultProps): JSX.Element => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();
	const defaultProps: Partial<VariantResultProps> = {
		layout: ResultsLayout.grid,
		treePath: globalTreePath,
		addToCartButtonText: 'Add To Cart',
		addToCartButtonSuccessText: 'Added!',
		addToCartButtonSuccessTimeout: 2000,
		hideAddToCartButton: true,
		hideRating: true,
	};

	const props = mergeProps('result', globalTheme, defaultProps, properties);

	const subProps: VariantResultSubProps = {
		result: {
			// global theme
			internalClassName: 'ss__result--variant-result',
			result: props.result,
			...defined({
				disableStyles: props.disableStyles,
			}),
			// component theme overrides
			theme: props.theme,
			treePath: props.treePath,
		},
	};

	const variantSelection = !props.hideVariantSelections ? (
		<div className="ss__result__details__variant-selection">
			{props.result.variants?.selections.map((selection) => {
				return <VariantSelection selection={selection} />;
			})}
		</div>
	) : (
		<></>
	);

	return (
		<CacheProvider>
			<Result detailSlot={variantSelection} {...props} {...subProps.result} />
		</CacheProvider>
	);
});

interface VariantResultSubProps {
	result: ResultProps;
}

export interface VariantResultProps extends ComponentProps {
	result: Product;
	hideBadge?: boolean;
	hideTitle?: boolean;
	hideImage?: boolean;
	hidePricing?: boolean;
	hideRating?: boolean;
	hideAddToCartButton?: boolean;
	hideVariantSelections?: boolean;
	addToCartButtonText?: string;
	onAddToCartClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>, result: Product) => void;
	addToCartButtonSuccessText?: string;
	addToCartButtonSuccessTimeout?: number;
	detailSlot?: JSX.Element | JSX.Element[];
	fallback?: string;
	layout?: keyof typeof ResultsLayout | ResultsLayout;
	truncateTitle?: TruncateTitleProps;
	onClick?: (e: React.MouseEvent<HTMLAnchorElement, Event>) => void;
	controller?: SearchController | AutocompleteController | RecommendationController;
	lang?: Partial<ResultLang>;
	trackingRef?: Ref<HTMLElement | null>;
}
