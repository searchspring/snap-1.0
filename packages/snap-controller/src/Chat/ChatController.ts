/*

	Render product results
		* use SearchResultStore
		* should persist on page reload
	
	General UI Improvements
	* reset chat (or start new chat)
	* view history (view previous chats)
	
	Quickview (more info CTA)
		* simple component
		* should use slideout (and will support using modal eventually)
		* should fetch product data using the chat API (productInfo)
		* client should cache these request/response pairs
	
	Chat about product (ask about this CTA)
		* use the attachments feature to add a product (productId is important to the API request)
		* when a product is attached the controller should update the request parameters to include the productId in the MoiRequestModel
		* only makes sense to support 1 at a time here

*/

import deepmerge from 'deepmerge';
import { AbstractController } from '../Abstract/AbstractController';
import { ContextVariables, ControllerServices, ControllerTypes } from '../types';
import { ErrorType, ChatStore } from '@searchspring/snap-store-mobx';
import { ChatRequestModel, MoiRequestModel } from '@searchspring/snap-client';
import type { ChatAttachmentImage, ChatAttachmentProduct } from '@searchspring/snap-store-mobx';

const KEY_ENTER = 13;

type ChatControllerConfig = {
	id: string;
	widgetId: string;
	settings?: any;
};
const defaultConfig: Partial<ChatControllerConfig> = {
	id: 'chat',
	settings: {},
};

export class ChatController extends AbstractController {
	public type = ControllerTypes.chat;
	declare store: ChatStore;
	declare config: ChatControllerConfig;

	constructor(
		config: ChatControllerConfig,
		{ client, store, urlManager, eventManager, profiler, logger, tracker }: ControllerServices,
		context?: ContextVariables
	) {
		super(config, { client, store, urlManager, eventManager, profiler, logger, tracker }, context);

		// deep merge config with defaults
		this.config = deepmerge(defaultConfig, this.config);

		this.store.setConfig(this.config);

		// attach config plugins and event middleware
		this.use(this.config);

		// initialization - check widget status
		this.eventManager.on('init', async () => {
			// TODO: verify status to ensure widget is enabled
			// const { removeAskloBranding, status } = await this.client.chatStatus();
			// removeAskloBranding: false
			// status: "ENABLED"
		});
	}

	get params(): ChatRequestModel {
		const { userId, shopperId, sessionId, pageLoadId } = this.tracker.getContext();

		const attachedImageIds = (this.store.currentChat?.attachments.attached || [])
			.filter((attachment) => attachment.type === 'image')
			.map((attachment) => (attachment as ChatAttachmentImage).imageId);

		const attachedProductId =
			(this.store.currentChat?.attachments.attached || [])
				.filter((attachment) => attachment.type === 'product')
				.map((attachment) => (attachment as ChatAttachmentProduct).id)
				.pop() || '';

		const attachedImageId = attachedImageIds.length > 0 ? attachedImageIds[0] : undefined;
		let chatRequest: MoiRequestModel = {
			requestType: 'general',
			message: this.store.inputValue,
		};

		// imageSearch --- if an image is attached, change request type
		if (attachedImageId) {
			chatRequest = {
				requestType: 'imageSearch',
				message: this.store.inputValue,
				attachedImageId,
			};
		}

		if (attachedProductId) {
			chatRequest = {
				requestType: 'productQuery',
				message: this.store.inputValue,
				productId: attachedProductId,
			};
		}

		const request: ChatRequestModel = {
			context: {
				sessionId: this.store.currentChat?.sessionId,
				widgetId: this.config.widgetId,
			},
			data: chatRequest,
			tracking: {
				userId,
				domain: window.location.href,
				sessionId,
				pageLoadId,
			},
		};

		if (shopperId) {
			request.personalization = {
				shopper: shopperId,
			};
		}

		return request;
	}

	upload = async (files: FileList | null) => {
		if (!files || files.length === 0) return;

		for (let i = 0; i < files.length; i++) {
			const file = files[i];
			const base64Image = await convertToBase64(file);
			const image = await base64ToBlob(base64Image);
			const params = {
				image,
			};

			const attachment = this.store.currentChat?.attachments.add<ChatAttachmentImage>({ type: 'image', base64: base64Image });

			if (attachment) {
				try {
					const response = await this.client.uploadImage(params);
					if (response.success) {
						attachment.update({
							imageId: response.imageId,
							imageUrl: response.imageUrl,
							thumbnailUrl: response.thumbnailUrl,
						});
					} else if (response.error) {
						attachment.update({
							error: {
								message: response.error.errorMessage,
							},
						});
					}
				} catch (err) {
					attachment.update({
						error: {
							message: 'Upload Failed',
						},
					});
				}
			}
		}
	};

	handlers = {
		input: {
			enterKey: async (e: KeyboardEvent): Promise<void> => {
				if (e.keyCode == KEY_ENTER) {
					this.search();
				}
			},
			input: (e: Event) => {
				const value = (e.target as HTMLInputElement).value;

				this.store.inputValue = value;
			},
		},
		button: {
			click: () => {
				this.store.open = !this.store.open;

				if (this.store.open) {
					// if there is no current chat sessionId make a new request to get one
					if (!this.store.currentChat?.sessionId) {
						this.search();
					}
				}
			},
		},
	};

	search = async (): Promise<void> => {
		try {
			if (!this.initialized) {
				await this.init();
			}

			// TODO: add middleware
			const params = this.params;

			try {
				await this.eventManager.fire('beforeSearch', {
					controller: this,
					request: params,
				});
			} catch (err: any) {
				if (err?.message == 'cancelled') {
					this.log.warn(`'beforeSearch' middleware cancelled`);
					return;
				} else {
					this.log.error(`error in 'beforeSearch' middleware`);
					throw err;
				}
			}

			this.store.request(params);
			this.store.loading = true;

			// clear input value
			this.store.inputValue = '';

			const searchProfile = this.profiler.create({ type: 'event', name: 'search', context: params }).start();

			const response = await this.client.chat(params);

			searchProfile.stop();
			this.log.profile(searchProfile);

			const afterSearchProfile = this.profiler.create({ type: 'event', name: 'afterSearch', context: params }).start();

			try {
				await this.eventManager.fire('afterSearch', {
					controller: this,
					request: params,
					response,
				});
			} catch (err: any) {
				if (err?.message == 'cancelled') {
					this.log.warn(`'afterSearch' middleware cancelled`);
					afterSearchProfile.stop();
					return;
				} else {
					this.log.error(`error in 'afterSearch' middleware`);
					throw err;
				}
			}

			afterSearchProfile.stop();
			this.log.profile(afterSearchProfile);

			this.store.update(response);

			const afterStoreProfile = this.profiler.create({ type: 'event', name: 'afterStore', context: params }).start();

			try {
				await this.eventManager.fire('afterStore', {
					controller: this,
					request: params,
					response,
				});
			} catch (err: any) {
				if (err?.message == 'cancelled') {
					this.log.warn(`'afterStore' middleware cancelled`);
					afterStoreProfile.stop();
					return;
				} else {
					this.log.error(`error in 'afterStore' middleware`);
					throw err;
				}
			}

			afterStoreProfile.stop();
			this.log.profile(afterStoreProfile);
		} catch (err: any) {
			if (err) {
				if (err.err && err.fetchDetails) {
					switch (err.fetchDetails.status) {
						case 429: {
							this.store.error = {
								code: 429,
								type: ErrorType.WARNING,
								message: 'Too many requests try again later',
							};
							break;
						}

						case 500: {
							this.store.error = {
								code: 500,
								type: ErrorType.ERROR,
								message: 'Invalid Search Request or Service Unavailable',
							};
							break;
						}

						default: {
							this.store.error = {
								type: ErrorType.ERROR,
								message: err.err.message,
							};
							break;
						}
					}

					this.log.error(this.store.error);
					this.handleError(err.err, err.fetchDetails);
				} else {
					this.store.error = {
						type: ErrorType.ERROR,
						message: `Something went wrong... - ${err}`,
					};
					this.log.error(err);
					this.handleError(err);
				}
			}
		} finally {
			this.store.loading = false;
		}
	};
}

function convertToBase64(file: File): Promise<string> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result as string);
		reader.onerror = (error) => reject(error);
	});
}

async function base64ToBlob(base64Image: string): Promise<Blob> {
	const fetchedImage = await fetch(base64Image);
	const blob = await fetchedImage.blob();
	return blob;
}
