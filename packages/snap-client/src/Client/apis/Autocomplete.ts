import deepmerge from 'deepmerge';
import { AppMode } from '@searchspring/snap-toolbox';

import { AutocompleteRequestModel, AutocompleteRequestModelSearchRedirectResponseEnum, AutocompleteResponseModel } from '@athoscommerce/snapi-types';

import { API, ApiConfigurationParameters, SearchAPI, SuggestAPI, ApiConfiguration } from '.';
import { transformSuggestResponse } from '../transforms';
import type { SuggestRequestModel, AutocompleteRequesterConfig } from '../../types';

export class AutocompleteAPI extends API {
	private requesters: {
		search: SearchAPI;
		suggest: SuggestAPI;
	};

	constructor(configuration: ApiConfiguration, requesterConfigurations?: AutocompleteRequesterConfig) {
		super(configuration);

		const searchConfig: ApiConfigurationParameters = deepmerge(
			{
				mode: this.configuration.mode,
				initiator: this.configuration.initiator,
				origin: this.configuration.origin,
				cache: this.configuration.cache,
				fetchApi: this.configuration.fetchApi,
			},
			requesterConfigurations?.search || {}
		);

		if (configuration.mode == AppMode.development) {
			searchConfig.headers = { ...searchConfig.headers };
		}

		const suggestConfig: ApiConfigurationParameters = deepmerge(
			{
				mode: this.configuration.mode,
				initiator: this.configuration.initiator,
				origin: this.configuration.origin,
				cache: this.configuration.cache,
				fetchApi: this.configuration.fetchApi,
			},
			requesterConfigurations?.suggest || {}
		);

		const searchConfiguration = new ApiConfiguration(searchConfig);
		const suggestConfiguration = new ApiConfiguration(suggestConfig);

		this.requesters = {
			search: new SearchAPI(searchConfiguration),
			suggest: new SuggestAPI(suggestConfiguration),
		};
	}

	async getAutocomplete(requestParameters: AutocompleteRequestModel): Promise<AutocompleteResponseModel> {
		const suggestParams: SuggestRequestModel = {
			siteId: requestParameters.siteId || '',
			language: 'en',
			query: requestParameters.search?.query?.string || '',
			suggestionCount: (requestParameters.suggestions || {}).count || 5,
		};

		if (!((requestParameters.search || {}).query || {}).spellCorrection) {
			suggestParams.disableSpellCorrect = true;
		}

		const suggestResults = await this.requesters.suggest.getSuggest(suggestParams);
		const transformedSuggestResults = transformSuggestResponse(suggestResults);

		// Determine the query to use for the search request.
		// suggested text → correctedQuery → original query.
		let q: string | undefined =
			(transformedSuggestResults.suggested || {}).text || transformedSuggestResults.correctedQuery || transformedSuggestResults.query;
		if (this.requesters.suggest.configuration?.globals?.integratedSpellCorrection) {
			q = (transformedSuggestResults.suggested || {}).text || transformedSuggestResults.query || transformedSuggestResults.correctedQuery;
		}

		requestParameters.search = requestParameters.search || {};
		requestParameters.search.redirectResponse = 'full' as AutocompleteRequestModelSearchRedirectResponseEnum;

		// set the query to the most relevant suggestion
		// requestParameters.search.query = requestParameters.search.query || {};
		if (requestParameters.search?.query?.string) {
			requestParameters.search.query.string = q;
		}

		const searchResults = await this.requesters.search.getAutocomplete(requestParameters);

		return {
			...searchResults,
			autocomplete: transformedSuggestResults,
		};
	}
}
