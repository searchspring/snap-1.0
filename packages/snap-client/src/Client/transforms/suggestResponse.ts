import { AutocompleteResponseModelAllOfAutocomplete } from '@athoscommerce/snapi-types';
import { SuggestResponseModel } from '../../types';
export function transformSuggestResponse(response: SuggestResponseModel): AutocompleteResponseModelAllOfAutocomplete {
	return {
		query: response?.query,
		correctedQuery: response?.['corrected-query'],
		suggested: transformSuggestResponse.suggested(response),
		alternatives: transformSuggestResponse.alternatives(response),
	};
}

transformSuggestResponse.suggested = (response: SuggestResponseModel) => {
	if (typeof response != 'object' || !response.suggested || typeof response.suggested != 'object') {
		return {};
	}

	return {
		text: response.suggested?.text,
		type: response.suggested?.type,
		source: response.suggested?.source,
	};
};

transformSuggestResponse.alternatives = (response: SuggestResponseModel) => {
	const alternatives = response?.alternatives || [];

	return alternatives.map((alternative) => {
		return {
			text: alternative.text,
		};
	});
};
