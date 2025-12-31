import { makeObservable, observable, computed } from 'mobx';
import { ChatStoreConfig, StoreServices } from '../types';
import { MetaStore } from '../Meta/MetaStore';
import { MetaResponseModel } from '@searchspring/snapi-types';
import { AbstractStore } from '../Abstract/AbstractStore';
import { ChatAttachmentStore } from './Stores/ChatAttachmentStore';

type GenericOption = {
	name: string;
	type: 'message' | 'clearChat';
	chat: string | null;
};

type Chat = any[];

export class ChatStore extends AbstractStore<ChatStoreConfig> {
	public services: StoreServices;
	public meta?: MetaStore;
	public inputValue: string = '';
	public chat: Chat = [];
	public genericOptions: Array<GenericOption> = [];
	public sessionId: string | undefined;
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

	public handleResponse(data: any): void {
		if (data.context?.sessionId) {
			this.sessionId = data.context.sessionId;
			// TODO: add check if sessionId is set but different, reset session to new chat (happens after 24hrs)
		}
		if (data.message) {
			data.message.forEach((msg: any) => {
				this.chat.push({
					type: 'bot',
					payload: msg,
				});
			});
		}
		if (data.genericOptions) {
			this.genericOptions = data.genericOptions.options;
		}
	}

	public handleRequest(request: any): void {
		if (request.message) {
			this.chat.push({
				type: 'user',
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

		if (search?.sessionId) {
			this.sessionId = search.sessionId;
		}
		this.error = undefined;
		this.loaded = Boolean(search?.pagination);
	}
}
