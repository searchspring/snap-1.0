import { makeObservable, observable, computed } from 'mobx';
import { ChatStoreConfig, StoreServices } from '../types';
import { MetaStore } from '../Meta/MetaStore';
import { MetaResponseModel } from '@searchspring/snapi-types';
import { AbstractStore } from '../Abstract/AbstractStore';
import { ChatAttachmentStore } from './Stores/ChatAttachmentStore';
import { v4 as uuidv4 } from 'uuid';

type GenericOption = {
	name: string;
	type: 'message' | 'clearChat';
	chat: string | null;
};

type Chat = ChatMessage[];

type ChatMessage = {
	type: 'user' | 'message';
	payload: {
		value: string;
	};
	attachments?: string[];
};

export class ChatStore extends AbstractStore<ChatStoreConfig> {
	public services: StoreServices;
	public meta?: MetaStore;
	public inputValue: string = '';
	public chat: Chat = [];
	public genericOptions: Array<GenericOption> = [];
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
			genericOptions: observable,
			blocked: computed,
		});
	}

	public reset(): void {
		this.update({ search: {}, meta: {} });
	}

	public handleResponse(response: any): void {
		// if (data.context?.sessionId) {
		// 	this.sessionId = data.context.sessionId;
		// 	// TODO: add check if sessionId is set but different, reset session to new chat (happens after 24hrs)
		// }

		response.forEach((data: any) => {
			if (data.message) {
				this.chat.push({
					type: 'message',
					payload: data.message,
				});
			}
			if (data.genericOptions) {
				this.genericOptions = data.genericOptions.options;
			}
			// if(data.productData) {
			// 	const { note, totalResultsFound, typeOfQuery, facets, products } = data.productData;
			// 	if(products && products.length > 0) {
			// 		this.chat.push({
			// 			type: 'productData',
			// 			payload: data.productData,
			// 		});
			// 	}
			// }
		});
	}

	public handleRequest(request: any): void {
		if (request.message) {
			// check for sent attachments in context
			const attachments: string[] = [];
			if (request.attachedImageId) {
				const attachedImage = this.attachments.attached.find((item) => item.type == 'image' && item.imageId == request.attachedImageId);
				if (attachedImage) {
					attachments.push(attachedImage.id);

					// save the attachment (change state to 'saved');
					attachedImage.save();
				}
			}

			this.chat.push({
				type: 'user',
				attachments,
				payload: {
					value: request.message,
				},
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
