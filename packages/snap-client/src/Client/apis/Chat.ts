import { API } from './Abstract';
import { HTTPHeaders } from '../../types';
import { transformChatResponse } from '../transforms/chatResponse';

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

export type MoiRequestModel = MoiRequestModelGeneral | MoiRequestModelProductQuery | MoiRequestModelProductComparison | MoiRequestModelImageSearch;

export type MoiRequestModelGeneral = {
	requestType: 'general';
	message: string;
};
// general, productQuery, productComparison, productSearch, inspiration, imageSearch, content
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

export class ChatAPI extends API {
	async postMessage(requestParameters: MoiRequestModel): Promise<any> {
		const headerParameters: HTTPHeaders = {};

		headerParameters['Content-Type'] = 'application/json';

		const response = await this.request<any>(
			{
				path: '/chat/send',
				method: 'POST',
				headers: headerParameters,
				body: requestParameters,
			},
			JSON.stringify(requestParameters)
		);

		// transfrorm respose to Snapi types
		return transformChatResponse(response, requestParameters);
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
