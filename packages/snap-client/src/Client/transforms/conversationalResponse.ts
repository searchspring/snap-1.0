// import {
// 	SearchResponseModelResult,
// } from '@searchspring/snapi-types';

type ConversationalResponse = {
	data: (ConversationalContextResponseObject | ConversationalMessageObject | ConversationalFilterObject | ConversationalGenericOptionsObject)[];
};

type ConversationalContextResponseObject = {
	context: {
		sessionId?: string;
		klevuApiKey: string;
		visitorId: string;
	};
};

type ConversationalMessageObject = {
	message: {
		collectFeedback: boolean;
		explain: string | null;
		id: string;
		note: string | null;
		type: string;
		value: string;
	};
};

type ConversationalFilterObject = {
	filter: {
		note: string;
		options: Array<{
			name: string;
			value: string;
			selected: boolean;
			count: string;
		}>;
	};
};

type ConversationalGenericOptionsObject = {
	genericOptions: {
		options: Array<{
			name: string;
			type: 'message' | 'clearChat';
			chat: string | null;
		}>;
	};
};

export type ConversationalRequest = {
	message: string;
};

export function transformConversationalResponse(response: ConversationalResponse, request: ConversationalRequest) {
	console.log('request, response', request, response);
	return response.data
		.map((data) => {
			if ((data as any).message !== undefined) {
				return transformConversationalResponse.message(data as ConversationalMessageObject);
			} else if ((data as any).context !== undefined) {
				return transformConversationalResponse.context(data as ConversationalContextResponseObject);
			} else if ((data as any).filter !== undefined) {
				return transformConversationalResponse.filter(data as ConversationalFilterObject);
			} else if ((data as any).genericOptions !== undefined) {
				return transformConversationalResponse.genericOptions(data as ConversationalGenericOptionsObject);
			}
			return;
		})
		.filter((a) => a);
}

transformConversationalResponse.context = (data: ConversationalContextResponseObject) => {
	// nothing to transform here yet
	return data;
};

transformConversationalResponse.message = (data: ConversationalMessageObject) => {
	// nothing to transform here yet
	return data;
};

transformConversationalResponse.filter = (data: ConversationalFilterObject) => {
	// nothing to transform here yet
	return data;
};

transformConversationalResponse.genericOptions = (data: ConversationalGenericOptionsObject) => {
	// nothing to transform here yet
	return data;
};
