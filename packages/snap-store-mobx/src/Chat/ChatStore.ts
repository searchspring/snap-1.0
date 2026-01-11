import { makeObservable, observable, computed } from 'mobx';
import { ChatStoreConfig } from '../types';
import { MetaStore } from '../Meta/MetaStore';
import { MetaResponseModel } from '@searchspring/snapi-types';
import { AbstractStore } from '../Abstract/AbstractStore';
import type { ChatResponseModel, ChatRequestModel, FeedbackRequestModel } from '@searchspring/snap-client';
import { StorageStore } from '../Storage/StorageStore';
import { ChatSessionStore } from './Stores/ChatSessionStore';
import { ChatAttachmentFacet, ChatAttachmentProduct } from './Stores/ChatAttachmentStore';

export class ChatStore extends AbstractStore<ChatStoreConfig> {
	public meta?: MetaStore = undefined;
	public inputValue: string = '';
	public open: boolean = false;
	public storage: StorageStore;
	public chats: ChatSessionStore[] = [];
	public currentChatId: string;
	public quickViewResult: any = {};

	constructor(config: ChatStoreConfig) {
		super(config);

		this.storage = new StorageStore({
			type: 'local',
			key: `ss-${this.config.id}-${this.config.widgetId}`,
		});

		// check for entries in storage
		let latestChatId = '';
		const storedChats = this.storage.get('chats');
		storedChats &&
			Object.keys(storedChats || {}).forEach((chatId) => {
				const chatData = storedChats[chatId];
				if (chatData) {
					const restoredChat = new ChatSessionStore({
						data: {
							...chatData,
							id: chatId,
						},
						stores: {
							storage: this.storage,
						},
					});
					this.chats.push(restoredChat);
					latestChatId = chatId;
				}
			});

		this.currentChatId = latestChatId;

		if (!this.currentChatId) {
			// create initial chat session
			const newChat = this.createChat();

			this.currentChatId = newChat.id;
		}

		makeObservable(this, {
			meta: observable,
			inputValue: observable,
			open: observable,
			chats: observable,
			currentChatId: observable,
			quickViewResult: observable,
			blocked: computed,
			currentChat: computed,
			chatsIds: computed,
		});
	}

	get currentChat(): ChatSessionStore | undefined {
		return this.chats.find((chat) => chat.id === this.currentChatId);
	}

	get chatsIds(): string[] {
		return this.chats.map((chat) => chat.id);
	}

	get blocked(): boolean {
		let isBlocked = false;

		const blockedAttachments = this.currentChat?.attachments.items.some((item) => item.type === 'image' && (item.error || item.state === 'loading'));
		if (this.loading || blockedAttachments) {
			isBlocked = true;
		}
		return isBlocked;
	}

	public feedback(data: { response: any; request: FeedbackRequestModel }): void {
		this.currentChat?.feedback(data);
	}

	public reset(): void {
		this.chats = [];
		this.storage.clear();
		this.createChat();
	}

	public createChat(): ChatSessionStore {
		const newChat = new ChatSessionStore({
			stores: {
				storage: this.storage,
			},
		});

		this.currentChatId = newChat.id;
		this.chats.push(newChat);
		return newChat;
	}

	public switchChat(id: string): void {
		const chatExists = this.chats.find((chat) => chat.id === id);
		if (chatExists) {
			this.currentChatId = id;
		}
	}

	public setQuickViewResult(result: any): void {
		this.quickViewResult = result;
	}

	public sendProductQuery(result: any): void {
		this.currentChat && (this.currentChat.actions = []);
		this.currentChat?.attachments.add<ChatAttachmentProduct>({
			type: 'product',
			productId: result.id,
			name: result.mappings.core?.name,
			thumbnailUrl: result.mappings.core?.thumbnailImageUrl || result.mappings.core?.imageUrl,
		});
	}

	public addFacet(facet: any): void {
		this.currentChat?.attachments.add<ChatAttachmentFacet>({
			type: 'facet',
			key: facet.key,
			facetLabel: facet.facetLabel,
			value: facet.value,
			label: facet.label,
			count: facet.count,
		});
	}

	public request(request: ChatRequestModel): void {
		this.currentChat?.request(request);

		// remove any facet attachments after request
		const facetAttachments = this.currentChat?.attachments.attached.filter((item) => item.type === 'facet') || [];
		facetAttachments.forEach((item) => {
			this.currentChat?.attachments.remove(item.id);
		});
	}

	public update(data: { chat: ChatResponseModel; meta: MetaResponseModel }): void {
		this.currentChat?.update(data);
	}
}
