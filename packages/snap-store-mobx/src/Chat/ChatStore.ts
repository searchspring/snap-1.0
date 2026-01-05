import { makeObservable, observable, computed } from 'mobx';
import { ChatStoreConfig } from '../types';
import { MetaStore } from '../Meta/MetaStore';
import { MetaResponseModel } from '@searchspring/snapi-types';
import { AbstractStore } from '../Abstract/AbstractStore';
import type { ChatResponseModel, ChatRequestModel } from '@searchspring/snap-client';
import { StorageStore } from '../Storage/StorageStore';
import { ChatSessionStore } from './Stores/ChatSessionStore';

export class ChatStore extends AbstractStore<ChatStoreConfig> {
	public meta?: MetaStore = undefined;
	public inputValue: string = '';
	public open: boolean = false;
	public storage: StorageStore;
	public chats: ChatSessionStore[] = [];
	public currentChatId: string;

	constructor(config: ChatStoreConfig) {
		super(config);

		this.storage = new StorageStore({
			type: 'local',
			key: `ss-chat-${this.config.id}`,
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
							id: chatId,
							sessionId: chatData.sessionId,
							chat: chatData.chat,
							attachments: chatData.attachments,
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
			const newChat = this.newChat();

			this.currentChatId = newChat.id;
			this.chats.push(newChat);
		}

		makeObservable(this, {
			meta: observable,
			inputValue: observable,
			open: observable,
			chats: observable,
			currentChatId: observable,
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
		let isBlocked = this.inputValue.length === 0;

		const blockedAttachments = this.currentChat?.attachments.items.some((item) => item.error || item.state === 'loading');
		if (this.loading || blockedAttachments) {
			isBlocked = true;
		}
		return isBlocked;
	}

	public reset(): void {
		this.chats = [];
		this.storage.clear();
		this.newChat();
	}

	public newChat(): ChatSessionStore {
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

	public request(request: ChatRequestModel): void {
		this.currentChat?.request(request);
	}

	public update(data: { chat: ChatResponseModel; meta: MetaResponseModel }): void {
		this.currentChat?.update(data);
	}
}
