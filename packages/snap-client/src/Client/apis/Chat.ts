import { API } from './Abstract';
import { HTTPHeaders } from '../../types';
import { transformChatResponse } from '../transforms/chatResponse';

export type VisualRequestModel = {
	image: Blob;
};

export type VisualResponseModel = {
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
export class ChatAPI extends API {
	async postMessage(requestParameters: any): Promise<any> {
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

	async postUploadImage(requestParameters: VisualRequestModel): Promise<VisualResponseModel> {
		const headerParameters: HTTPHeaders = {
			'X-Widget-Id': 'test-ss-demo',
		};
		const formData = new FormData();
		formData.append('file', requestParameters.image, 'image.jpg');

		const response = await this.request<VisualResponseModel>(
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
