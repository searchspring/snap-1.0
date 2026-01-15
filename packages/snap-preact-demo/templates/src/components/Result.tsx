import { h, Fragment } from 'preact';
import { Price, Image, OverlayBadge, CalloutBadge, Icon } from '@searchspring/snap-preact/components';
import { Product } from '@searchspring/snap-store-mobx';
import type { SearchController } from '@searchspring/snap-controller';

const openChatProductQuery = (result, controller) => {
	const options = { requestType: 'productQuery' };
	window.searchspring.fire('chat/open/discussProduct', { result, options });
	if (controller.type === 'autocomplete') {
		controller.setFocused();
	}
};
const openChatProductSimilar = (result, controller) => {
	const options = { requestType: 'productSimilar' };
	window.searchspring.fire('chat/open/discussProduct', { result, options });
	if (controller.type === 'autocomplete') {
		controller.setFocused();
	}
};
export const CustomResult = (props: { result: Product; controller: SearchController }) => {
	const { result, controller } = props;
	const core = result.mappings.core;
	const isChatEnabled = !!window?.searchspring?.controller?.chat;

	return (
		<article className="ss__custom-result">
			<div className="ss__custom-result__image-wrapper" style={{ position: 'relative' }}>
				<a href={core.url}>
					<OverlayBadge controller={controller as SearchController} result={result}>
						<Image src={core.thumbnailImageUrl} alt={core.name} />
						{isChatEnabled && (
							<Fragment>
								<span
									onClick={(e) => {
										e.preventDefault();
										e.stopPropagation();
										openChatProductQuery(result, controller);
									}}
									style={{ position: 'absolute', bottom: '0px', left: '0px', cursor: 'pointer' }}
								>
									<Icon icon={'chat'} title={'Ask about this product'} />
								</span>
								<span
									onClick={(e) => {
										e.preventDefault();
										e.stopPropagation();
										openChatProductSimilar(result, controller);
									}}
									style={{ position: 'absolute', bottom: '0px', left: '20px', cursor: 'pointer' }}
								>
									<Icon icon={'similar'} title={'Find similar products'} />
								</span>
							</Fragment>
						)}
					</OverlayBadge>
				</a>
			</div>
			<div className="ss__custom-result__details">
				<div className="ss__custom-result__details__title">
					<a
						href={core.url}
						dangerouslySetInnerHTML={{
							__html: core.name,
						}}
					/>
				</div>

				<div className="ss__custom-result__details__pricing">
					{core.price < core.msrp ? (
						<Fragment>
							<Price value={core.msrp} lineThrough={true} />
							<Price value={core.price} />
						</Fragment>
					) : (
						<Price value={core.price} />
					)}
				</div>

				<CalloutBadge result={result}></CalloutBadge>
			</div>
		</article>
	);
};

export const CustomResultSecondary = (props) => {
	const { result, controller } = props;
	const core = result.mappings.core;

	return (
		<article className="ss__custom-result-secondary">
			<div className="ss__custom-result-secondary__details">
				<div className="ss__custom-result-secondary__details__title">
					<a
						href={core.url}
						dangerouslySetInnerHTML={{
							__html: core.name,
						}}
					/>
				</div>

				<div className="ss__custom-result-secondary__details__pricing">
					{core.price < core.msrp ? (
						<Fragment>
							<Price value={core.msrp} lineThrough={true} />
							<Price value={core.price} />
						</Fragment>
					) : (
						<Price value={core.price} />
					)}
				</div>
				<CalloutBadge result={result}></CalloutBadge>
			</div>
			<div className="ss__custom-result-secondary__image-wrapper">
				<a href={core.url}>
					<OverlayBadge controller={controller as SearchController} result={result}>
						<Image src={core.thumbnailImageUrl} alt={core.name} />
					</OverlayBadge>
				</a>
			</div>
		</article>
	);
};
