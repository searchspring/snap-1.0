import { SearchResponseModelResult } from '@searchspring/snapi-types';
import type { MoiRequestModel, MoiResponseModel, MoiResponseModelProductSearchResult, MoiResponseModelText } from '../apis/Chat';

export type ChatResponseModel = {
	data: (ChatResponseTextData | ChatResponseProductSearchResultData)[];
};

export type ChatResponseTextData = {
	messageType: 'text';
	id: string;
	collectFeedback: true;
	text: string;
};

export type ChatResponseProductSearchResultData = {
	messageType: 'productSearchResult';
	id: string;
	results: SearchResponseModelResult[];
	facets: MoiResponseModelProductSearchResult['facets'];
	collectFeedback: boolean;
	text: string;
};

export type ChatRequestModel = {
	chat: {
		id: string;
		widgetId: string;
	};
	data: MoiRequestModel;
	tracking: {
		userId: string;
		domain: string;
		sessionId?: string;
		pageLoadId?: string;
	};
	personalization?: {
		shopper: string;
	};
};

export function transformChatResponse(response: MoiResponseModel): ChatResponseModel {
	const transformedData = response.data
		.map((data) => {
			if (data.messageType === 'text') {
				return transformChatResponse.text(data);
			} else if (data.messageType === 'productSearchResult') {
				return transformChatResponse.productData(data);
			}
		})
		.filter((data) => data !== undefined);

	return {
		data: (transformedData || []) as ChatResponseModel['data'],
	};
}

transformChatResponse.text = (data: MoiResponseModelText): ChatResponseTextData => {
	// nothing to transform here yet
	return data;
};

transformChatResponse.productData = (data: MoiResponseModelProductSearchResult): ChatResponseProductSearchResultData => {
	return {
		messageType: data.messageType,
		id: data.id,
		collectFeedback: data.collectFeedback,
		text: data.text,
		facets: data.facets,
		results: data.products.map((product) => ({
			id: product.id,
			mappings: {
				core: {
					uid: product.id,
					name: product.name,
					url: product.url,
					imageUrl: product.image,
					price: typeof product.price !== 'undefined' ? +product.price : undefined,
					msrp: typeof product.salePrice !== 'undefined' ? +product.salePrice : undefined,
					description: product.shortDesc,
				},
			},
			attributes: {
				currency: product.currency as any,
			},
		})),
	};
};
