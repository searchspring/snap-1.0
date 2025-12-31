// import {
// 	SearchResponseModelResult,
// } from '@searchspring/snapi-types';

type ChatResponse = {
	data: (ChatContextResponseObject | ChatMessageObject | ChatFilterObject | ChatGenericOptionsObject)[];
};

type ChatContextResponseObject = {
	context: {
		sessionId?: string;
		klevuApiKey: string;
		visitorId: string;
	};
};

type ChatMessageObject = {
	message: {
		collectFeedback: boolean;
		explain: string | null;
		id: string;
		note: string | null;
		type: string;
		value: string;
	};
};

type ChatFilterObject = {
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

type ChatGenericOptionsObject = {
	genericOptions: {
		options: Array<{
			name: string;
			type: 'message' | 'clearChat';
			chat: string | null;
		}>;
	};
};

export type ChatRequest = {
	message: string;
};

export function transformChatResponse(response: ChatResponse, request: ChatRequest) {
	console.log('request, response', request, response);
	return response.data
		.map((data) => {
			if ((data as any).message !== undefined) {
				return transformChatResponse.message(data as ChatMessageObject);
			} else if ((data as any).context !== undefined) {
				return transformChatResponse.context(data as ChatContextResponseObject);
			} else if ((data as any).filter !== undefined) {
				return transformChatResponse.filter(data as ChatFilterObject);
			} else if ((data as any).genericOptions !== undefined) {
				return transformChatResponse.genericOptions(data as ChatGenericOptionsObject);
			}
			return;
		})
		.filter((a) => a);
}

transformChatResponse.context = (data: ChatContextResponseObject) => {
	// nothing to transform here yet
	return data;
};

transformChatResponse.message = (data: ChatMessageObject) => {
	// nothing to transform here yet
	return data;
};

transformChatResponse.filter = (data: ChatFilterObject) => {
	// nothing to transform here yet
	return data;
};

transformChatResponse.genericOptions = (data: ChatGenericOptionsObject) => {
	// nothing to transform here yet
	return data;
};
