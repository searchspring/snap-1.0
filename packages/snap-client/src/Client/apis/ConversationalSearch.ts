import { API } from './Abstract';
import { HTTPHeaders } from '../../types';
import { transformConversationalResponse } from '../transforms/conversationalResponse';

export class ConversationalSearchAPI extends API {
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
		return transformConversationalResponse(response, requestParameters);
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
}
