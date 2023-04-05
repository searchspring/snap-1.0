import { MetaRequestModel, MetaResponseModel } from '@searchspring/snapi-types';

import { API, HTTPQuery } from '.';
import { HTTPHeaders } from '../../types';

export class LegacyAPI extends API {
	private async getEndpoint(queryParameters: any, path = '/api/search/search.json') {
		queryParameters.resultsFormat = 'native';
		const headerParameters: HTTPHeaders = {};

		//remove pageLoadId from cache key query params
		let cacheParameters = { ...queryParameters };
		delete cacheParameters.pageLoadId;

		const legacyResponse = await this.request(
			{
				path,
				method: 'GET',
				headers: headerParameters,
				query: queryParameters,
			},
			path + JSON.stringify(cacheParameters)
		);

		return legacyResponse;
	}

	async postMeta(requestParameters: MetaRequestModel): Promise<MetaResponseModel> {
		const headerParameters: HTTPHeaders = {};

		headerParameters['Content-Type'] = 'application/json';

		const response = await this.request(
			{
				path: '/api/meta/meta.json',
				method: 'POST',
				headers: headerParameters,
				body: requestParameters,
			},
			'/api/meta/meta.json' + JSON.stringify(requestParameters)
		);

		return response as MetaResponseModel;
	}

	async getMeta(queryParameters: MetaRequestModel): Promise<MetaResponseModel> {
		const headerParameters: HTTPHeaders = {};

		const response = await this.request(
			{
				path: '/api/meta/meta.json',
				method: 'GET',
				headers: headerParameters,
				query: queryParameters as unknown as HTTPQuery,
			},
			'/api/meta/meta.json' + JSON.stringify(queryParameters)
		);

		return response as MetaResponseModel;
	}

	async getSearch(queryParameters: any): Promise<any> {
		queryParameters.ajaxCatalog = 'Snap';
		return this.getEndpoint(queryParameters, '/api/search/search.json');
	}

	async getAutocomplete(queryParameters: any): Promise<any> {
		queryParameters.ajaxCatalog = 'Snap';
		return this.getEndpoint(queryParameters, '/api/search/autocomplete.json');
	}

	async getFinder(queryParameters: any): Promise<any> {
		queryParameters.ajaxCatalog = 'Snap';
		return this.getEndpoint(queryParameters, '/api/search/finder.json');
	}
}
