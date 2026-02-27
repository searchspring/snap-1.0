import {
	AutocompleteRequestModel,
	AutocompleteResponseModel,
	MetaRequestModel,
	MetaResponseModel,
	SearchRequestModel,
	SearchResponseModel,
} from '@athoscommerce/snapi-types';

import { API, HTTPQuery } from '.';
import { HTTPHeaders } from '../../types';
import { AppMode } from '@athoscommerce/snap-toolbox';
import { SearchResponseType, transformSearchResponse } from '../transforms/searchResponse';
import { transformSearchRequest } from '../transforms';

export const DEVELOPMENT_MODE_PARAM = 'test';

export class SearchAPI extends API {
	private async getEndpoint(requestParameters: SearchRequestModel | AutocompleteRequestModel, path: string) {
		const searchRequestParameters = transformSearchRequest(requestParameters);
		searchRequestParameters.ajaxCatalog = this.configuration.initiator;
		searchRequestParameters.resultsFormat = 'native';

		if (this.configuration.mode == AppMode.development) {
			searchRequestParameters[DEVELOPMENT_MODE_PARAM] = true;
		}

		// remove pageLoadId from cache key query params
		const cacheParameters = { ...searchRequestParameters };
		delete cacheParameters.pageLoadId;
		delete cacheParameters.domain;
		// autocomplete only params
		delete cacheParameters.input;
		delete cacheParameters.redirectResponse;

		const searchResponse = await this.request<SearchResponseType>(
			{
				path,
				method: 'GET',
				headers: {},
				query: searchRequestParameters,
			},
			JSON.stringify(cacheParameters)
		);

		return transformSearchResponse(searchResponse, requestParameters);
	}

	public async postMeta(requestParameters: MetaRequestModel): Promise<MetaResponseModel> {
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

	public async getMeta(queryParameters: MetaRequestModel): Promise<MetaResponseModel> {
		const response = await this.request<MetaResponseModel>(
			{
				path: '/v1/meta',
				method: 'GET',
				headers: {},
				query: queryParameters as unknown as HTTPQuery,
			},
			JSON.stringify(queryParameters)
		);

		return response;
	}

	public async getAutocomplete(queryParameters: AutocompleteRequestModel): Promise<AutocompleteResponseModel> {
		return this.getEndpoint(queryParameters, '/v1/autocomplete');
	}

	public async getSearch(queryParameters: SearchRequestModel): Promise<SearchResponseModel> {
		return this.getEndpoint(queryParameters, '/v1/search');
	}

	public async getCategory(queryParameters: SearchRequestModel): Promise<SearchResponseModel> {
		return this.getEndpoint(queryParameters, '/v1/category');
	}

	public async getFinder(queryParameters: SearchRequestModel): Promise<SearchResponseModel> {
		return this.getEndpoint(queryParameters, '/v1/finder');
	}
}
