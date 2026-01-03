import { makeObservable, observable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

import type {
	ChatResponseModel,
	ChatRequestModel,
	ChatResponseTextData,
	ChatResponseProductSearchResultData,
	ChatResponseInspirationResultData,
	ChatResponseContentData,
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

export type ChatMessage =
	| ChatResponseTextData
	| ChatResponseContentData
	| ChatResponseProductSearchResultData
	| ChatResponseInspirationResultData
	| UserChatMessage;

type ChatSessionStoreConfig = {
	data: {
		id: string;
		chat?: ChatMessage[];
		attachments?: ChatAttachmentAddAttachment[];
	};
	stores: {
		storage: StorageStore;
	};
};

export class ChatSessionStore {
	public chat: ChatMessage[] = [];
	public id: string;
	public attachments: ChatAttachmentStore = new ChatAttachmentStore();
	public storage: StorageStore;

	constructor(params: ChatSessionStoreConfig) {
		const { id, chat, attachments } = params.data;
		const { stores } = params;

		this.id = id;
		this.storage = stores.storage;

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
		});
	}

	public reset(): void {
		this.attachments.reset();
		this.chat = [];
	}

	public save(): void {
		// TODO: save chat state to storage store (local)
		this.storage.set(`chats.${this.id}`, {
			chat: this.chat,
			attachments: this.attachments.items,
		});
	}

	public request(request: ChatRequestModel): void {
		if (request.data.message) {
			// check for sent attachments in context
			const attachments: string[] = [];
			if (request.data.requestType === 'imageSearch') {
				const imageId = request.data.attachedImageId;
				const attachedImage = this.attachments.attached.find((item) => item.type == 'image' && item.imageId == imageId);
				if (attachedImage) {
					attachments.push(attachedImage.id);

					// save the attachment (change state to 'saved');
					attachedImage.save();
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
		data.chat.data.forEach((data) => {
			this.chat.push(data);
		});

		this.save();
	}
}
