import { AutocompleteRequestModel, AutocompleteResponseModel, SearchRequestModel, SearchResponseModel } from '@searchspring/snapi-types';

import { API, HTTPHeaders, LegacyAPI, SuggestAPI, ApiConfiguration, SuggestRequestModel, SuggestResponseModel } from '../apis';
import { transformSearchRequest, transformSearchResponse, transformSuggestResponse } from '../transforms';

export class HybridAPI extends API {
	async getSearch(requestParameters: SearchRequestModel): Promise<SearchResponseModel> {
		const legacyRequestParameters = transformSearchRequest(requestParameters);

		const apiHost = `https://${legacyRequestParameters.siteId}.a.searchspring.io`;
		const legacyRequester = new LegacyAPI(new ApiConfiguration({ basePath: apiHost }));

		const legacyData = await legacyRequester.getSearch(legacyRequestParameters);

		return transformSearchResponse(legacyData, requestParameters);
	}

	async getAutocomplete(requestParameters: AutocompleteRequestModel): Promise<AutocompleteResponseModel> {
		const legacyRequestParameters = transformSearchRequest(requestParameters);

		const suggestParams: SuggestRequestModel = {
			siteId: legacyRequestParameters.siteId,
			language: 'en',
			query: legacyRequestParameters.q,
			suggestionCount: (requestParameters.suggestions || {}).count || 5,
		};

		if (!((requestParameters.search || {}).query || {}).spellCorrection) {
			suggestParams.disableSpellCorrect = true;
		}

		const apiHost = `https://${legacyRequestParameters.siteId}.a.searchspring.io`;
		const suggestRequester = new SuggestAPI(new ApiConfiguration({ basePath: apiHost }));
		const legacyRequester = new LegacyAPI(new ApiConfiguration({ basePath: apiHost }));

		const suggestResults = await suggestRequester.getSuggest(suggestParams);
		const transformedSuggestResults = transformSuggestResponse(suggestResults);

		const q = transformedSuggestResults.correctedQuery || (suggestResults.suggested || {}).text || suggestResults.query;

		const queryParameters = {
			...legacyRequestParameters,
			redirectResponse: 'full',
			q,
		};

		const legacyResults = await legacyRequester.getAutocomplete(queryParameters);
		const searchResults = transformSearchResponse(legacyResults, requestParameters);

		return {
			...searchResults,
			search: {
				query: q,
			},
			autocomplete: transformedSuggestResults,
		};
	}
}
