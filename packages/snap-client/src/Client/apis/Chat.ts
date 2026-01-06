import { API } from './Abstract';
import { HTTPHeaders } from '../../types';
import { ChatRequestModel, FeedbackRequestModel, transformChatResponse } from '../transforms/chatResponse';

export type UploadImageRequestModel = {
	image: Blob;
};

export type UploadImageResponseModel = {
	success: boolean;
	message: string;
	error?: {
		errorCode: string;
		errorMessage: string;
		field: string;
		expectedValue: string;
		actualValue: string;
		httpStatus: number;
	};
	imageId: string;
	imageUrl: string;
	thumbnailUrl: string;
};

// DISCRIMINATOR: "requestType" === general, productQuery, productComparison, productSearch, inspiration, imageSearch, content
export type MoiRequestModel = MoiRequestModelGeneral | MoiRequestModelProductQuery | MoiRequestModelProductComparison | MoiRequestModelImageSearch;

export type MoiRequestModelGeneral = {
	requestType: 'general';
	message: string;
};

export type MoiRequestModelProductQuery = {
	requestType: 'productQuery';
	message: string;
	productId: string;
};

export type MoiRequestModelProductComparison = {
	requestType: 'productComparison';
	message: string;
	productIds: string[];
};

export type MoiRequestModelImageSearch = {
	requestType: 'imageSearch';
	message: string;
	attachedImageId: string;
};

// DISCRIMINATOR: "messageType" === text, productAnswer, productRecommendation, productComparison, productSearchResult, suggestedQuestions, content
export type MoiResponseModel = {
	context: {
		sessionId: string;
	};
	data: (
		| MoiResponseModelText
		| MoiResponseModelContent
		| MoiResponseModelProductSearchResult
		| MoiResponseModelInspirationResult
		| MoiResponseModelProductAnswer
		| MoiResponseModelSuggestedQuestions
		| MoiResponseModelProductComparison
	)[];
};

export type MoiResponseModelText = {
	messageType: 'text';
	id: string;
	collectFeedback: true;
	text: string;
};

export type MoiResponseModelContent = {
	messageType: 'content';
	id: string;
	collectFeedback: true;
	text: string;
};

export type MoiResponseModelProductSearchResult = {
	messageType: 'productSearchResult';
	id: string;
	text: string;
	totalResultsFound: number;
	collectFeedback: boolean;
	facets: {
		key: string;
		label: string;
		options: {
			key: string;
			label: string;
			count: number;
		}[];
	}[];
	products: MoiResponseModelProduct[];
};

export type MoiResponseModelInspirationResult = {
	messageType: 'inspirationResult';
	id: string;
	text: string;
	collectFeedback: boolean;
	products: MoiResponseModelProduct[];
};

export type MoiResponseModelProductAnswer = {
	messageType: 'productAnswer';
	id: string;
	answer: string;
	collectFeedback: boolean;
	product: MoiResponseModelProduct;
};

export type MoiResponseModelSuggestedQuestions = {
	messageType: 'suggestedQuestions';
	questions: string[];
};
export type MoiResponseModelProductComparison = {
	messageType: 'productComparison';
	id: string;
	comparisonText: string;
	collectFeedback: boolean;
	products: MoiResponseModelProduct[];
};

export type MoiResponseModelProduct = {
	id: string;
	itemGroupId: string;
	name: string;
	url: string;
	image: string;
	price: string;
	salePrice: string;
	currency: string;
	shortDesc: string;
	options: {
		name: string;
		values: string[];
	}[];
};

export class ChatAPI extends API {
	async postMessage(requestParameters: ChatRequestModel): Promise<any> {
		const headerParameters: HTTPHeaders = {
			'Content-Type': 'application/json',
			'x-visitor-id': requestParameters.personalization?.shopper || requestParameters.tracking.userId,
			'x-pqa-widget-id': requestParameters.context.widgetId,
		};

		if (requestParameters.context.sessionId) {
			headerParameters['x-session-id'] = requestParameters.context.sessionId;
		}

		const response = await this.request<MoiResponseModel>({
			path: '/chat/v2/send',
			method: 'POST',
			headers: headerParameters,
			body: requestParameters.data,
		});

		// transfrorm respose to Snapi types
		return transformChatResponse(response);
	}

	async postStatus(queryParameters: any): Promise<any> {
		const headerParameters: HTTPHeaders = {};

		headerParameters['Content-Type'] = 'application/json';

		const response = await this.request<any>(
			{
				path: '/chat/status',
				method: 'GET',
				headers: headerParameters,
				query: queryParameters,
			},
			JSON.stringify(queryParameters)
		);

		return response;
	}

	async postFeedback(requestParameters: FeedbackRequestModel): Promise<any> {
		const headerParameters: HTTPHeaders = {
			'Content-Type': 'application/json',
		};

		const response = await this.request<MoiResponseModel>({
			path: '/chat/feedback',
			method: 'POST',
			headers: headerParameters,
			body: requestParameters,
		});
		return response;
	}

	async postUploadImage(requestParameters: UploadImageRequestModel): Promise<UploadImageResponseModel> {
		const headerParameters: HTTPHeaders = {
			'X-Widget-Id': 'test-ss-demo',
		};
		const formData = new FormData();
		formData.append('file', requestParameters.image, 'image.jpg');

		const response = await this.request<UploadImageResponseModel>(
			{
				path: '/visual-search/upload-image',
				method: 'POST',
				headers: headerParameters,
				body: formData,
			}
			// TODO: cache?
		);

		return response;
	}
}
