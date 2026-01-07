/*
	Feedback UI
		* state not updating after feedback given

	Quickview (more info CTA)
		* add more display
		* add "add to cart" button
		* clean up

	Attachments General Improvements
		* in chat history show which attachments were sent with which messages (add images to product attachments)
		* for suggested questions, these need to store the productIds associated with them so when clicked the productQuery can be made with the correct product
	
	Future (after demo)
		*	Render product results
			+ use SearchResultStore
			+ should persist on page reload
		* Image Attachment Improvements
			+ ability to re-attach a previously attached image via '+' button (or similar)

*/

import deepmerge from 'deepmerge';
import { AbstractController } from '../Abstract/AbstractController';
import { ChatControllerConfig, ContextVariables, ControllerServices, ControllerTypes } from '../types';
import { ErrorType, ChatStore } from '@searchspring/snap-store-mobx';
import { ChatRequestModel, MoiRequestModel } from '@searchspring/snap-client';
import type { ChatAttachmentImage, ChatAttachmentProduct, ChatAttachmentFacet, Product } from '@searchspring/snap-store-mobx';
import { ChatMessage } from '@searchspring/snap-store-mobx/dist/cjs/Chat/Stores/ChatSessionStore';
import { type Product as BeaconProduct } from '@searchspring/beacon';

const KEY_ENTER = 13;

const defaultConfig: Partial<ChatControllerConfig> = {
	id: 'chat',
};

type chatTrackMethods = {
	product: {
		clickThrough: (e: MouseEvent, result: Product) => void;
		click: (e: MouseEvent, result: Product) => void;
		render: (result: Product) => void;
		impression: (result: Product) => void;
		addToCart: (result: Product) => void;
	};
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

		const attachedProductIds = (this.store.currentChat?.attachments.attached || [])
			.filter((attachment) => attachment.type === 'product')
			.map((attachment) => (attachment as ChatAttachmentProduct).productId);

		const searchFilters = (this.store.currentChat?.attachments.attached || [])
			.filter((attachment) => attachment.type === 'facet')
			.reduce((filters: any[], attachment) => {
				const facetAttachment = attachment as ChatAttachmentFacet;

				const exisitingFacet = filters.find((filter) => filter.key === facetAttachment.key);
				if (exisitingFacet) {
					exisitingFacet.options.push({
						key: facetAttachment.value,
						label: facetAttachment.label,
						count: facetAttachment.count,
					});
				} else {
					filters.push({
						key: facetAttachment.key,
						options: [
							{
								key: facetAttachment.value,
								label: facetAttachment.label,
								count: facetAttachment.count,
							},
						],
					});
				}
				return filters;
			}, []);

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

		if (attachedProductIds.length == 1) {
			chatRequest = {
				requestType: 'productQuery',
				message: this.store.inputValue,
				productId: attachedProductIds[0],
			};
		} else if (attachedProductIds.length > 1) {
			chatRequest = {
				requestType: 'productComparison',
				message: this.store.inputValue,
				productIds: attachedProductIds,
			};
		}

		if (searchFilters.length > 0) {
			chatRequest = {
				requestType: 'productSearch',
				message: this.store.inputValue,
				searchFilters,
			};
		}

		const request: ChatRequestModel = {
			context: {
				sessionId: this.store.currentChat?.sessionId,
				widgetId: this.config.settings.widgetId,
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

	feedback = async (chatItem: ChatMessage, thumbs: 'UP' | 'DOWN', reason?: string) => {
		try {
			const { userId, shopperId } = this.tracker.getContext();
			const params = {
				context: {
					pqaWidgetId: this.config.settings.widgetId,
					sessionId: this.store.currentChat?.sessionId,
					visitorId: shopperId || userId,
				},
				feedback: {
					messageId: chatItem.id,
					thumbs,
					reason,
				},
			};
			const response = await this.client.chatFeedback(params);
			this.store.feedback({ response, request: params });
		} catch (err) {
			this.log.error('Feedback Error:', err);
		}
	};

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

	startNewChat = (): void => {
		this.store.createChat();
		this.search();
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

	track: chatTrackMethods = {
		product: {
			addToCart: (result: Product): any | undefined => {
				const data = getChatAddtocartSchemaData({ store: this.store, results: [result] });
				// this.tracker.events.chat.addToCart({ data, siteId: this.config.globals?.siteId });
				this.eventManager.fire('track.product.addToCart', { controller: this, product: result, trackEvent: data });
				return data;
			},
			clickThrough: (e: MouseEvent, result: Product) => {
				console.log(e, result);
			},
			click: (e: MouseEvent, result: Product) => {
				console.log(e, result);
			},
			render: (result: Product) => {
				console.log(result);
			},
			impression: (result: Product) => {
				console.log(result);
			},
		},
	};

	addToCart = async (_products: Product[] | Product): Promise<void> => {
		const products = typeof (_products as Product[]).slice == 'function' ? (_products as Product[]).slice() : [_products];

		//todo add tracking
		// (products as Product[]).forEach((product) => {
		// 	this.track.product.addToCart(product);
		// });
		if (products.length > 0) {
			this.eventManager.fire('addToCart', { controller: this, products });
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

function getChatAddtocartSchemaData({ store, results }: { store: ChatStore; results?: Product[] }): any {
	console.log(store);
	// const base = getChatSchemaData({ params, store, results });
	return {
		// ...base,
		results:
			results?.map((result: Product): BeaconProduct => {
				const core = (result as Product).mappings.core!;
				return {
					uid: core.uid || '',
					sku: core.sku,
					price: Number(core.price),
					qty: result.quantity || 1,
				};
			}) || [],
	};
}
