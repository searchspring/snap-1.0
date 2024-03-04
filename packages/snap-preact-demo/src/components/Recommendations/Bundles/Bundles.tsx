import { h } from 'preact';
import { observer } from 'mobx-react';

import { BundledRecommendation, Icon, Price, Button, Checkbox, Result as ResultComponent, useMediaQuery } from '@searchspring/snap-preact-components';
import { useEffect } from 'preact/hooks';

import './Bundles.scss';

const CTASlot = observer((props) => {
	const { cartStore } = props;
	return (
		<div>
			<div className="cta__title">
				<label className="mobile-only">{cartStore.count} items added</label>
			</div>

			<div className="cta__pricing">
				<p className="bundle-price-title">Total Bundle Price</p>

				{cartStore.msrp > cartStore.price && (
					<span class="strike">
						<s>
							<Price value={cartStore.msrp} />
						</s>
					</span>
				)}
				<span class={`price ${cartStore.msrp > cartStore.price ? 'sale' : ''}`}>
					<Price value={cartStore.price} />
				</span>
			</div>
			<div>
				<Button disabled={cartStore.count == 0} onClick={() => props.onAddToCartClick()}>
					Add All {cartStore.count} To Cart
				</Button>
			</div>
		</div>
	);
});

const Result = observer((props) => {
	const { result, selected, onProductSelect, layout } = props;

	const quantity = result.quantity;

	const onInputChange = (qty) => {
		//numify
		const quantity = Number(qty || 1);

		//update the store
		result.setQuantity(quantity);
	};

	const DetailSlot = () => {
		return (
			<>
				<div className="ss__result__qty-wrapper">
					<Button onClick={() => result.setQuantity(quantity - 1)}>
						<Icon icon={'minus'} />
					</Button>

					<input
						className="ss__bundled-recommendations__wrapper__selector__qty__input"
						onChange={(e) => onInputChange((e.target as HTMLInputElement).value)}
						aria-label="Product Quantity"
						type="number"
						min="0"
						placeholder="QTY #"
						value={quantity}
					/>

					<Button onClick={() => result.setQuantity(quantity + 1)}>
						<Icon icon={'plus'} />
					</Button>
				</div>
			</>
		);
	};

	const isMobile = useMediaQuery('(max-width: 991px)');

	const checkboxProps = {
		className: '',
		checked: selected,
		onClick: onProductSelect,
		size: '25px',
	};
	return (
		<article key={result.mappings.core.uid} className={`ss__result ss__result--item`}>
			{isMobile && <Checkbox {...checkboxProps} />}

			<ResultComponent result={result} layout={layout} detailSlot={<DetailSlot />} />
		</article>
	);
});

export const Bundles = observer((props) => {
	const { controller } = props;

	useEffect(() => {
		// useEffect here is used to load recommendations on no results
		if (!controller.store.loaded) {
			controller.search();
		}
	}, []);

	const bundleRecsProps = {
		controller: controller,
		separatorIconSeedOnly: false,
		ctaSlot: <CTASlot />,
		title: 'Frequently Bought Together',
		resultComponent: <Result />,
		onAddToCart: (data) => controller.log.debug('ADDING TO CART', data),
		breakpoints: {
			0: {
				ctaInline: true,
				carousel: {
					enabled: false,
				},
				separatorIconSeedOnly: true,
				resultComponent: <Result layout={'list'} />,
				limit: 3,
				vertical: true,
				hideCheckboxes: true,
			},
			1024: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 10,
			},
			1600: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 10,
			},
		},
	};

	const theme = {
		components: {
			checkbox: {
				color: '#196F90',
				iconColor: '#196F90',
				size: 25,
			},
			result: {
				hideSelections: false,
			},
		},
	};

	return (
		<div>
			<hr style={{ margin: '20px 0' }} />
			<BundledRecommendation {...bundleRecsProps} theme={theme} />
		</div>
	);
});
