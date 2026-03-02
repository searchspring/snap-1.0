import { MetaRequestModel, MetaResponseModel } from '@athoscommerce/snapi-types';

import { API, HTTPQuery } from '.';
import { HTTPHeaders, MetaRequesterPaths } from '../../types';

export class MetaAPI extends API<MetaRequesterPaths> {
	public async postMeta(requestParameters: MetaRequestModel): Promise<MetaResponseModel> {
		const headerParameters: HTTPHeaders = {};

		headerParameters['Content-Type'] = 'application/json';

		const response = await this.request<MetaResponseModel>(
			{
				path: this.configuration.paths.meta || '/v1/meta',
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
				path: this.configuration.paths.meta || '/v1/meta',
				method: 'GET',
				headers: {},
				query: queryParameters as unknown as HTTPQuery,
			},
			JSON.stringify(queryParameters)
		);

		return response;
	}
}
