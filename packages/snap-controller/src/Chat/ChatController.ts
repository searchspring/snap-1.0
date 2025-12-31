import deepmerge from 'deepmerge';
import { AbstractController } from '../Abstract/AbstractController';
import { ContextVariables, ControllerServices, ControllerTypes } from '../types';
import { ErrorType, ChatStore, ImageAttachment } from '@searchspring/snap-store-mobx';

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

	get params(): any {
		const { userId, shopperId } = this.tracker.getContext();

		const params = {
			context: {
				dataProtection: false,
				sessionId: this.store.sessionId,
				klevuApiKey: 'klevu-164270249063714699',
				visitorId: shopperId || userId,
			},
			message: this.store.inputValue,

			// TODO: add attachedImageId: this.store.attachments.items
		};
		return params;
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

			const attachment = this.store.attachments.add<ImageAttachment>({ type: 'image', data: { base64: base64Image } });

			try {
				console.log('attachment', attachment);
				const response = await this.client.uploadImage(params);
				console.log('response');

				if (response.success) {
					attachment.state = 'attached';
					attachment.imageId = response.imageId;
					attachment.imageUrl = response.imageUrl;
					attachment.thumbnailUrl = response.thumbnailUrl;
				} else if (response.error) {
					attachment.state = 'error';
					attachment.error = {
						message: response.error.errorMessage,
					};
				}
			} catch (err) {
				console.log(err);
				attachment.state = 'error';
				attachment.error = {
					message: 'Upload failed',
				};
			}
		}
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
			const { search } = await this.client.chat(params);
			this.store.handleResponse(search);
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
	// const file = new File([blob], `searchableimage.jpg`, { type: blob.type });
	console.log('blob', blob);
	return blob;
}
