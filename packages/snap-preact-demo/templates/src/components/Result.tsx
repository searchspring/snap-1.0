import { h, Fragment } from 'preact';
import { Price, Image, OverlayBadge, CalloutBadge, Rating } from '@athoscommerce/snap-preact/components';
import { Product } from '@athoscommerce/snap-store-mobx';
import type { SearchController } from '@athoscommerce/snap-controller';

export const CustomResult = (props: { result: Product; controller: SearchController }) => {
	const { result, controller } = props;
	const core = result.mappings.core;
	// const variants = result.variants;

	// const breadcrumbs = [
	// 	{ url: '/', label: 'Home' },
	// 	{ url: '/', label: 'Collections' },
	// 	{ url: '/', label: 'Appliances' },
	// 	{ label: 'Fridge' }
	// ]

	// const errorObject = {
	// 	code: 429,
	// 	type: ErrorType.ERROR,
	// 	message: 'Too many requests try again later',
	// }

	// const slides = [
	// 	"https://picsum.photos/400/300?random=1",
	// 	"https://picsum.photos/400/300?random=2",
	// 	"https://picsum.photos/400/300?random=3",
	// 	"https://picsum.photos/400/300?random=4",
	// 	"https://picsum.photos/400/300?random=5",
	// 	"https://picsum.photos/400/300?random=6",
	// 	"https://picsum.photos/400/300?random=7",
	// 	"https://picsum.photos/400/300?random=8"
	// ];

	// const gridOptions = [
	// 	{
	// 		value: 'one one one',
	// 		disabled: true,
	// 	},
	// 	{
	// 		value: 'two two two two',
	// 	},
	// 	{
	// 		value: 'three three three three',
	// 	},
	// 	{
	// 		value: 'four four four',
	// 		background: 'red',
	// 		disabled: true,
	// 	},
	// 	{
	// 		value: 'five',
	// 		background: 'yellow',
	// 	},
	// 	{
	// 		value: 'six six six',
	// 		background: 'blue',
	// 	},
	// 	{
	// 		value: 'seven seven',
	// 		disabled: true,
	// 		backgroundImageUrl:
	// 			'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Studio_Legging_-_Charcoal_86731d52-9ef2-4663-802a-8935249c5a7c.png?v=1747685734',
	// 	},
	// 	{
	// 		value: 'eight eight eight',
	// 		backgroundImageUrl:
	// 			'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/Women_s_Apparel_Align_Crewneck_-_Olive_519ac0c5-e067-4ab7-9fe5-5421f364c52a.png?v=1747685123',
	// 	},
	// 	{
	// 		value: 'nine nine',
	// 		backgroundImageUrl: 'https://cdn.shopify.com/s/files/1/0916/6477/7582/files/red-buffalo-plaid-flannel.png?v=1765405015',
	// 	},
	// 	{
	// 		value: 'ten a big fat hen',
	// 		background: 'url(https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_large/rdb_studio_2_3312_large.jpg)',
	// 	},
	// 	{
	// 		value: 'grey',
	// 		background: 'grey',
	// 	},
	// ];

	return (
		<article className="ss__custom-result">
			<div className="ss__custom-result__image-wrapper">
				<a href={core.url}>
					<OverlayBadge controller={controller as SearchController} result={result}>
						<Image src={core.thumbnailImageUrl} alt={core.name} />
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

				<br />
				<br />

				{/* <Swatches options={gridOptions} />

				<Grid options={gridOptions} /> */}

				{/* {variants?.selections
					? variants.selections.map((selection) => {
							return <VariantSelection selection={selection} />;
					  })
					: null} */}

				{/* <Breadcrumbs data={breadcrumbs} /> */}

				{/* <ErrorHandler controller={controller} error={errorObject} /> */}

				{/* <br />
				<br /> */}

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

				<Rating value={4.35} count={70} />

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
