import { MetaRequestModel, MetaResponseModel } from '@athoscommerce/snapi-types';

import { API, HTTPQuery } from '.';
import { HTTPHeaders } from '../../types';

export class LegacyAPI extends API {
	private async getEndpoint(queryParameters: any, path = '/v1/search') {
		queryParameters.resultsFormat = 'native';
		const headerParameters: HTTPHeaders = {};

		// remove pageLoadId from cache key query params
		const cacheParameters = { ...queryParameters };
		delete cacheParameters.pageLoadId;
		delete cacheParameters.domain;
		// autocomplete only params
		delete cacheParameters.input;

		const legacyResponse = await this.request(
			{
				path,
				method: 'GET',
				headers: headerParameters,
				query: queryParameters,
			},
			JSON.stringify(cacheParameters)
		);

		return legacyResponse;
	}

	async postMeta(requestParameters: MetaRequestModel): Promise<MetaResponseModel> {
		const headerParameters: HTTPHeaders = {};

		headerParameters['Content-Type'] = 'application/json';

		const response = await this.request<MetaResponseModel>(
			{
				path: '/v1/meta',
				method: 'POST',
				headers: headerParameters,
				body: requestParameters,
			},
			JSON.stringify(requestParameters)
		);

		return response;
	}

	async getMeta(queryParameters: MetaRequestModel): Promise<MetaResponseModel> {
		const headerParameters: HTTPHeaders = {};

		const response = await this.request<MetaResponseModel>(
			{
				path: '/v1/meta',
				method: 'GET',
				headers: headerParameters,
				query: queryParameters as unknown as HTTPQuery,
			},
			JSON.stringify(queryParameters)
		);

		return response;
	}

	async getSearch(queryParameters: any): Promise<any> {
		queryParameters.ajaxCatalog = this.configuration.initiator;
		return this.getEndpoint(queryParameters, '/v1/search');
	}

	async getCategory(queryParameters: any): Promise<any> {
		queryParameters.ajaxCatalog = 'Snap';
		return this.getEndpoint(queryParameters, '/v1/category');
	}

	async getAutocomplete(queryParameters: any): Promise<any> {
		queryParameters.ajaxCatalog = this.configuration.initiator;
		return this.getEndpoint(queryParameters, '/v1/autocomplete');
	}

	async getFinder(queryParameters: any): Promise<any> {
		queryParameters.ajaxCatalog = this.configuration.initiator;
		return this.getEndpoint(queryParameters, '/v1/finder');
	}
}
