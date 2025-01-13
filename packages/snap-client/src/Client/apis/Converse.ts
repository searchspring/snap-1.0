import { API } from './Abstract';
import { HTTPHeaders } from '../../types';
import { SearchRequestModel, SearchResponseModel } from '@searchspring/snapi-types';

import { ConverseRequestModel, ConverseResponseModel } from '../../types';

import { transformSearchResponse } from '../transforms';

export class ConverseAPI extends API {
	async getConverse(requestParameters: SearchRequestModel): Promise<SearchResponseModel> {
		const headerParameters: HTTPHeaders = {};

		const converseRequestParameters = transformConverseRequest(requestParameters);

		const searchData = await this.request<ConverseResponseModel>(
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
}

function transformConverseRequest(request: SearchRequestModel): ConverseRequestModel {
	return {
		q: request.search?.query?.string || '',
		siteId: request.siteId!,
	};
}
