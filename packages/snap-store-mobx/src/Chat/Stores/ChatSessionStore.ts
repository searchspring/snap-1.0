import { makeObservable, observable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

import type {
	ChatResponseModel,
	ChatRequestModel,
	ChatResponseTextData,
	ChatResponseProductSearchResultData,
	ChatResponseInspirationResultData,
	ChatResponseContentData,
	ChatResponseProductAnswerData,
	FeedbackRequestModel,
	ChatResponseActionsData,
} from '@searchspring/snap-client';
import { ChatAttachmentAddAttachment, ChatAttachmentStore } from '../Stores/ChatAttachmentStore';
import type { StorageStore } from '../../Storage/StorageStore';
import { MetaResponseModel } from '@searchspring/snapi-types';

type UserChatMessage = {
	id: string;
	messageType: 'user';
	text: string;
	attachments?: string[];
};

export type ChatFeedbacks = { [messageId: string]: 'UP' | 'DOWN' };

export type ChatMessage =
	| ChatResponseTextData
	| ChatResponseContentData
	| ChatResponseProductSearchResultData
	| ChatResponseInspirationResultData
	| ChatResponseProductAnswerData
	| UserChatMessage;

type ChatSessionStoreConfig = {
	data?: {
		id?: string;
		sessionId?: string;
		chat?: ChatMessage[];
		attachments?: ChatAttachmentAddAttachment[];
		actions?: ChatResponseActionsData['actions'];
		feedbacks?: ChatFeedbacks;
		createdAt?: Date;
	};
	stores: {
		storage: StorageStore;
	};
};

export class ChatSessionStore {
	public chat: ChatMessage[] = [];
	public actions: ChatResponseActionsData['actions'] = [];
	public id: string;
	public sessionId?: string;
	public attachments: ChatAttachmentStore = new ChatAttachmentStore();
	public storage: StorageStore;
	public feedbacks: ChatFeedbacks = {};
	public createdAt: Date = new Date();

	constructor(params: ChatSessionStoreConfig) {
		const { id, sessionId, chat, attachments, actions, feedbacks, createdAt } = params.data || {};
		const { stores } = params;

		this.id = id || uuidv4();
		this.sessionId = sessionId;
		this.storage = stores.storage;
		this.actions = actions || [];
		this.createdAt = createdAt ? new Date(createdAt) : new Date();
		this.feedbacks = feedbacks || {};

		// if chat and attachments are passed, load them
		if (chat && chat.length > 0) {
			this.chat = chat;
		}
		if (attachments && attachments.length > 0) {
			attachments.forEach((attachment) => {
				this.attachments.add(attachment);
			});
		}

		makeObservable(this, {
			chat: observable,
			actions: observable,
			attachments: observable,
			feedbacks: observable,
		});
	}

	get isExpired(): boolean {
		const ONE_DAY = 24 * 60 * 60 * 1000;
		const now = new Date();
		const diff = now.getTime() - this.createdAt.getTime();
		return diff > ONE_DAY;
	}

	public reset(): void {
		this.attachments.reset();
		this.chat = [];
	}

	public save(): void {
		// TODO: save chat state to storage store (local)
		this.storage.set(`chats.${this.id}`, {
			sessionId: this.sessionId,
			chat: this.chat,
			attachments: this.attachments.items,
			actions: this.actions,
			feedbacks: this.feedbacks,
			createdAt: this.createdAt,
		});
	}

	public feedback(data: { request: FeedbackRequestModel; response: unknown }): void {
		const messageId = data.request.feedback.messageId;
		this.feedbacks[messageId] = data.request.feedback.thumbs;
		this.save();
	}

	public request(request: ChatRequestModel): void {
		// clear the questions on new request
		this.actions = [];

		if (request.data?.requestType !== 'initChat' && request.data.message) {
			// check for sent attachments in context
			const attachments: string[] = [];
			if (request.data.requestType === 'imageSearch') {
				const imageId = request.data.attachedImageId;
				const attachedImage = this.attachments.attached.find((item) => item.type == 'image' && item.imageId == imageId);
				if (attachedImage) {
					attachments.push(attachedImage.id);

					// save the attachment (change state to 'saved');
					attachedImage.activate();
				}
			}

			if (request.data.requestType === 'productQuery') {
				const productId = request.data.productId;
				const attachedImage = this.attachments.attached.find((item) => item.type == 'product' && item.productId == productId);
				if (attachedImage) {
					attachments.push(attachedImage.id);
					attachedImage.activate();
				}
			}

			if (request.data.requestType === 'productSearch') {
				const searchFilters = request.data.searchFilters;
				if (searchFilters.length > 0) {
					searchFilters.forEach((filter) => {
						const attachedFacet = this.attachments.attached.find((item) => item.type == 'facet' && (item as any).key == filter.key);
						if (attachedFacet) {
							attachments.push(attachedFacet.id);
							attachedFacet.activate();
						}
					});
				}
			}

			this.chat.push({
				id: uuidv4(),
				messageType: 'user',
				attachments: attachments.length > 0 ? attachments : undefined,
				text: request.data.message,
			});

			this.save();
		}
	}

	public update(data: { chat: ChatResponseModel; meta: MetaResponseModel }): void {
		this.sessionId = data.chat.context.sessionId;
		data.chat.data.forEach((data) => {
			// check if the data has questions?
			if (data.messageType === 'actions') {
				this.actions = data.actions;
				return;
			}

			this.chat.push(data);
		});

		this.save();
	}
}
