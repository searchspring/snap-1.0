import deepmerge from 'deepmerge';
import { AbstractController } from '../Abstract/AbstractController';
import { ContextVariables, ControllerServices, ControllerTypes } from '../types';
import { ErrorType, ConversationalSearchStore } from '@searchspring/snap-store-mobx';

type ConversationalSearchControllerConfig = {
	id: string;
	settings?: any;
};
const defaultConfig: ConversationalSearchControllerConfig = {
	id: 'search',
	settings: {},
};

export class ConversationalSearchController extends AbstractController {
	public type = ControllerTypes.conversationalSearch;
	declare store: ConversationalSearchStore;
	declare config: ConversationalSearchControllerConfig;

	constructor(
		config: ConversationalSearchControllerConfig,
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
			// const { removeAskloBranding, status } = await this.client.conversationalStatus();
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
		};
		return params;
	}

	search = async (): Promise<void> => {
		try {
			if (!this.initialized) {
				await this.init();
			}
			// TODO: add middleware
			const params = this.params;
			this.store.handleRequest(params);
			this.store.loading = true;
			const { search } = await this.client.conversationalSearch(params);
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
