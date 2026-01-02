import { makeObservable, observable, computed } from 'mobx';
import { ChatStoreConfig, StoreServices } from '../types';
import { MetaStore } from '../Meta/MetaStore';
import { MetaResponseModel } from '@searchspring/snapi-types';
import { AbstractStore } from '../Abstract/AbstractStore';
import { ChatAttachmentStore } from './Stores/ChatAttachmentStore';
import { v4 as uuidv4 } from 'uuid';
import type { ChatResponseModel, ChatRequestModel, ChatResponseTextData, ChatResponseProductSearchResultData } from '@searchspring/snap-client';

type UserChatMessage = {
	id: string;
	messageType: 'user';
	text: string;
	attachments?: string[];
};
type ChatMessage = ChatResponseTextData | ChatResponseProductSearchResultData | UserChatMessage;
type Chat = ChatMessage[];
export class ChatStore extends AbstractStore<ChatStoreConfig> {
	public services: StoreServices;
	public meta?: MetaStore;
	public inputValue: string = '';
	public chat: Chat = [];
	public chatId: string = uuidv4();
	public attachments: ChatAttachmentStore = new ChatAttachmentStore();

	get blocked(): boolean {
		let isBlocked = false;

		const blockedAttachments = this.attachments.items.some((item) => item.error || item.state === 'loading');
		if (this.loading || blockedAttachments) {
			isBlocked = true;
		}
		return isBlocked;
	}

	// genericOptions
	// options
	// :
	// [{name: "Filters", type: "message", chat: "show filters"},…]
	// 0
	// :
	// {name: "Filters", type: "message", chat: "show filters"}
	// 1
	// :
	// {name: "Reset", type: "message", chat: "reset search"}
	// 2
	// :
	// {name: "Clear", type: "clearChat", chat: null}
	// 3
	// :
	// {name: "Products", type: "message", chat: "show products"}

	constructor(config: ChatStoreConfig, services: StoreServices) {
		super(config);

		if (typeof services != 'object' || typeof services.urlManager?.subscribe != 'function') {
			throw new Error(`Invalid service 'urlManager' passed to SearchStore. Missing "subscribe" function.`);
		}

		this.services = services;

		this.update({ search: {}, meta: {} });

		makeObservable(this, {
			meta: observable,
			inputValue: observable,
			chat: observable,
			blocked: computed,
		});
	}

	public reset(): void {
		this.update({ search: {}, meta: {} });
	}

	public handleResponse(response: ChatResponseModel): void {
		// if (data.context?.sessionId) {
		// 	this.sessionId = data.context.sessionId;
		// 	// TODO: add check if sessionId is set but different, reset session to new chat (happens after 24hrs)
		// }

		response.data.forEach((data) => {
			this.chat.push(data);
		});
	}

	public handleRequest(request: ChatRequestModel): void {
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
				attachments,
				text: request.data.message,
			});
		}
	}

	public update(data: { search: any; meta: MetaResponseModel }): void {
		const { search, meta } = data || {};
		this.meta = new MetaStore({
			data: {
				meta,
			},
		});

		this.error = undefined;
		this.loaded = Boolean(search?.pagination);
	}
}
