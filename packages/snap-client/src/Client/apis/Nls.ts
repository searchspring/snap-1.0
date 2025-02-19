import { API } from './Abstract';
import { HTTPHeaders } from '../../types';
import { SearchRequestModel, SearchResponseModel } from '@searchspring/snapi-types';

import { ConverseRequestModel, AiResponseModel } from '../../types';

import { transformSearchResponse } from '../transforms';

export class nlsAPI extends API {
	async getConverse(requestParameters: SearchRequestModel): Promise<SearchResponseModel> {
		const headerParameters: HTTPHeaders = {};

		const converseRequestParameters = transformConverseRequest(requestParameters);

		const searchData = await this.request<AiResponseModel>(
			{
				path: '/api/search/nls',
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
