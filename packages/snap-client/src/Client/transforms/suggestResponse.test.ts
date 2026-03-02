import { transformSuggestResponse } from './suggestResponse';

const mockQuery = 'yellw';

const mockCorrectedQuery = 'yellow';

const mockSuggested: {
	text: string;
	type: string;
	completed?: [];
	source: string;
} = {
	text: 'yellow',
	type: 'exact',
	completed: [],
	source: 'popular-query',
};

const mockAlternatives = [
	{
		popularity: 430,
		text: 'yellow top',
	},
	{
		popularity: 143,
		text: 'yellow tops',
	},
	{
		popularity: 79,
		text: 'yellow maxi',
	},
];

const mockResponse = {
	query: mockQuery,
	'corrected-query': mockCorrectedQuery,
	suggested: mockSuggested,
	alternatives: mockAlternatives,
};

beforeAll(() => {
	// mock performance to prevent warning in test
	Object.defineProperty(window, 'performance', {
		value: {
			getEntriesByType: jest.fn().mockReturnValue([{ type: 'navigate' }]),
		},
	});
});

describe('suggest response transformer', () => {
	it('calls all relevant transforms', () => {
		const suggested = jest.spyOn(transformSuggestResponse, 'suggested');
		const alternatives = jest.spyOn(transformSuggestResponse, 'alternatives');

		transformSuggestResponse(mockResponse);

		expect(suggested).toHaveBeenCalled();
		expect(alternatives).toHaveBeenCalled();

		expect(suggested.mock.calls[0][0]).toEqual(mockResponse);
		expect(alternatives.mock.calls[0][0]).toEqual(mockResponse);

		expect(typeof suggested.mock.results[0].value).toEqual('object');
		expect(typeof alternatives.mock.results[0].value).toEqual('object');

		suggested.mockRestore();
		alternatives.mockRestore();
	});

	it('inlines query and correctedQuery into output', () => {
		const result = transformSuggestResponse(mockResponse);

		expect(result.query).toEqual(mockQuery);
		expect(result.correctedQuery).toEqual(mockCorrectedQuery);
	});
});

describe('suggest response transformer suggested', () => {
	it("returns only text, type, and source (omits 'completed')", () => {
		const mockSuggestedResponse = {
			query: mockQuery,
			suggested: mockSuggested,
		};

		const response = transformSuggestResponse.suggested(mockSuggestedResponse);

		expect(response).toEqual({
			text: mockSuggested.text,
			type: mockSuggested.type,
			source: mockSuggested.source,
		});
		expect(response).not.toHaveProperty('completed');
	});

	it('returns empty object if passed undefined or missing suggested', () => {
		// @ts-ignore
		expect(transformSuggestResponse.suggested()).toEqual({});
		// @ts-ignore
		expect(transformSuggestResponse.suggested({})).toEqual({});
	});
});

describe('suggest response transformer alternatives', () => {
	it("removes the 'popularity' property", () => {
		const mockAlternativesResponse = {
			query: mockQuery,
			alternatives: mockAlternatives,
		};

		const response = transformSuggestResponse.alternatives(mockAlternativesResponse);

		const transformedResponse = mockAlternatives.map((alternative) => {
			return {
				text: alternative.text,
			};
		});

		expect(response).toEqual(transformedResponse);
	});

	it('returns empty array if passed undefined', () => {
		// @ts-ignore
		expect(transformSuggestResponse.alternatives()).toEqual([]);
		// @ts-ignore
		expect(transformSuggestResponse.alternatives({})).toEqual([]);
	});
});
