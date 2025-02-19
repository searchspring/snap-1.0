import { API } from './Abstract';
import { HTTPHeaders, VisualRequestModel } from '../../types';
import { SearchRequestModel, SearchResponseModel } from '@searchspring/snapi-types';

import { ConverseRequestModel, AiResponseModel } from '../../types';

import { transformSearchResponse } from '../transforms';

export class aiAPI extends API {
	async getConverse(requestParameters: SearchRequestModel): Promise<SearchResponseModel> {
		const headerParameters: HTTPHeaders = {};

		const converseRequestParameters = transformConverseRequest(requestParameters);

		const searchData = await this.request<AiResponseModel>(
			{
				path: '/api/search/search',
				method: 'GET',
				headers: headerParameters,
				query: converseRequestParameters,
			},
			JSON.stringify(requestParameters)
		);

		return transformSearchResponse(searchData as any, requestParameters);
	}

	async postVisual(requestParameters: SearchRequestModel & VisualRequestModel): Promise<SearchResponseModel> {
		const headerParameters: HTTPHeaders = {};

		const formData = new FormData();
		formData.append('image', requestParameters.image, 'image.jpg');

		const searchData = await this.request<AiResponseModel>(
			{
				path: '/api/search/visual',
				method: 'POST',
				headers: headerParameters,
				body: formData,
			},
			JSON.stringify(requestParameters)
		);

		searchData.userMessage = searchData.pagination.totalResults
			? 'Found products that matched the uploaded image.'
			: 'No matches were found for the uploaded image.';

		return transformSearchResponse(searchData as any, requestParameters);
	}
}

function transformConverseRequest(request: SearchRequestModel): ConverseRequestModel {
	return {
		q: request.search?.query?.string || '',
		siteId: request.siteId!,
	};
}
