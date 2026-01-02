import deepmerge from 'deepmerge';
import { AbstractController } from '../Abstract/AbstractController';
import { ContextVariables, ControllerServices, ControllerTypes } from '../types';
import { ErrorType, ChatStore, ImageAttachment } from '@searchspring/snap-store-mobx';
import { ChatRequestModel, MoiRequestModel } from '@searchspring/snap-client';

const KEY_ENTER = 13;

type ChatControllerConfig = {
	id: string;
	settings?: any;
};
const defaultConfig: ChatControllerConfig = {
	id: 'search',
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

		const attachedImageIds = this.store.attachments.attached
			.filter((attachment) => attachment.type === 'image')
			.map((attachment) => attachment.imageId);

		const attachedImageId = attachedImageIds.length > 0 ? attachedImageIds[0] : undefined;
		let chatRequest: MoiRequestModel = {
			requestType: 'general',
			message: this.store.inputValue,
		};

		if (attachedImageId) {
			chatRequest = {
				requestType: 'imageSearch',
				message: this.store.inputValue,
				attachedImageId,
			};
		}

		const request: ChatRequestModel = {
			chat: {
				id: this.store.chatId,
				widgetId: 'test-ss-demo',
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

			const attachment = this.store.attachments.add<ImageAttachment>({ type: 'image', base64: base64Image });

			try {
				const response = await this.client.uploadImage(params);
				if (response.success) {
					attachment.attach({
						imageId: response.imageId,
						imageUrl: response.imageUrl,
						thumbnailUrl: response.thumbnailUrl,
					});
				} else if (response.error) {
					attachment.setError({
						message: response.error.errorMessage,
					});
				}
			} catch (err) {
				attachment.setError({
					message: 'Upload failed',
				});
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
	};

	search = async (): Promise<void> => {
		try {
			if (!this.initialized) {
				await this.init();
			}
			// TODO: add middleware
			const params = this.params;
			this.store.handleRequest(params);
			this.store.loading = true;

			// clear input value
			this.store.inputValue = '';

			const { chat } = await this.client.chat(params);
			this.store.handleResponse(chat);
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
