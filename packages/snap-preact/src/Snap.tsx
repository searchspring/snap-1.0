import deepmerge from 'deepmerge';
import { h, render } from 'preact';
import { Client } from '@searchspring/snap-client';
import { Logger, LogMode } from '@searchspring/snap-logger';
import { Tracker } from '@searchspring/snap-tracker';
import { version, DomTargeter, url, cookies, featureFlags } from '@searchspring/snap-toolbox';

import type { ClientConfig, ClientGlobals } from '@searchspring/snap-client';
import type {
	AbstractController,
	SearchController,
	AutocompleteController,
	FinderController,
	RecommendationController,
	SearchControllerConfig,
	AutocompleteControllerConfig,
	FinderControllerConfig,
	RecommendationControllerConfig,
	ControllerConfigs,
} from '@searchspring/snap-controller';
import type { Product } from '@searchspring/snap-tracker';
import type { Target, OnTarget } from '@searchspring/snap-toolbox';
import type { UrlTranslatorConfig } from '@searchspring/snap-url-manager';

import { default as createSearchController } from './create/createSearchController';
import { RecommendationInstantiator, RecommendationInstantiatorConfig } from './Instantiators/RecommendationInstantiator';
import type { SnapControllerServices, RootComponent } from './types';

const BRANCH_COOKIE = 'ssBranch';
const SS_DEV_COOKIE = 'ssDev';

type ExtendedTarget = Target & {
	name?: string;
	controller?: AbstractController;
	component?: () => Promise<RootComponent> | RootComponent;
	skeleton?: () => Promise<any>;
	props?: unknown;
	onTarget?: OnTarget;
	prefetch?: boolean;
};

type ContextVariables = {
	shopper?: {
		id: string;
		cart?: Product[];
		[variable: string]: any;
	};
	[variable: string]: any;
};

export type SnapConfig = {
	context?: ContextVariables;
	url?: UrlTranslatorConfig;
	client: {
		globals: ClientGlobals;
		config?: ClientConfig;
	};
	instantiators?: {
		recommendation?: RecommendationInstantiatorConfig;
	};
	controllers?: {
		search?: {
			config: SearchControllerConfig;
			targeters?: ExtendedTarget[];
			services?: SnapControllerServices;
			url?: UrlTranslatorConfig;
			context?: ContextVariables;
		}[];
		autocomplete?: {
			config: AutocompleteControllerConfig;
			targeters: ExtendedTarget[];
			services?: SnapControllerServices;
			url?: UrlTranslatorConfig;
			context?: ContextVariables;
		}[];
		finder?: {
			config: FinderControllerConfig;
			targeters?: ExtendedTarget[];
			services?: SnapControllerServices;
			url?: UrlTranslatorConfig;
			context?: ContextVariables;
		}[];
		recommendation?: {
			config: RecommendationControllerConfig;
			targeters?: ExtendedTarget[];
			services?: SnapControllerServices;
			url?: UrlTranslatorConfig;
			context?: ContextVariables;
		}[];
	};
};

type ControllerTypes = SearchController | AutocompleteController | FinderController | RecommendationController;
enum DynamicImportNames {
	SEARCH = 'searchController',
	AUTOCOMPLETE = 'autocompleteController',
	FINDER = 'finderController',
	RECOMMENDATION = 'recommendationController',
}

export class Snap {
	config: SnapConfig;
	logger: Logger;
	client: Client;
	tracker: Tracker;
	_controllerPromises: {
		[controllerConfigId: string]: Promise<ControllerTypes>;
	};

	controllers: {
		[controllerConfigId: string]: ControllerTypes;
	};

	_instantiatorPromises: {
		[instantiatorId: string]: Promise<RecommendationInstantiator>;
	};

	public getInstantiator = (id: string): Promise<RecommendationInstantiator> => {
		return this._instantiatorPromises[id] || Promise.reject(`getInstantiator could not find instantiator with id: ${id}`);
	};

	public getController = (id: string): Promise<ControllerTypes> => {
		return this._controllerPromises[id] || Promise.reject(`getController could not find controller with id: ${id}`);
	};

	public getControllers = (...controllerIds: string[]): Promise<ControllerTypes[]> => {
		const getControllerPromises = [];
		controllerIds.forEach((id) => getControllerPromises.push(this.getController(id)));
		return Promise.all(getControllerPromises);
	};

	public createController = (
		type: DynamicImportNames,
		config: ControllerConfigs,
		services: SnapControllerServices,
		urlConfig: UrlTranslatorConfig,
		resolve: (value?: ControllerTypes | PromiseLike<ControllerTypes>) => void,
		context?: ContextVariables
	): Promise<ControllerTypes> => {
		let importPromise;
		switch (type) {
			case DynamicImportNames.SEARCH:
				importPromise = import('./create/createSearchController');
				break;
			case DynamicImportNames.AUTOCOMPLETE:
				importPromise = import('./create/createAutocompleteController');
				break;
			case DynamicImportNames.FINDER:
				importPromise = import('./create/createFinderController');
				break;
			case DynamicImportNames.RECOMMENDATION:
				importPromise = import('./create/createRecommendationController');
				break;
		}

		return importPromise.then((_) => {
			if (!this.controllers[config.id]) {
				this.controllers[config.id] = _.default(
					{
						url: deepmerge(this.config.url || {}, urlConfig || {}),
						controller: config,
					},
					{ client: services?.client || this.client, tracker: services?.tracker || this.tracker },
					context || this.config.context
				);
				resolve(this.controllers[config.id]);
			}

			return this.controllers[config.id];
		});
	};

	constructor(config: SnapConfig) {
		this.config = config;
		this.logger = new Logger('Snap Preact ');
		if (!this.config?.client?.globals?.siteId) {
			throw new Error(`Snap: config provided must contain a valid config.client.globals.siteId value`);
		}
		this.client = new Client(this.config.client.globals, this.config.client.config);
		this.tracker = new Tracker(this.config.client.globals);
		this._controllerPromises = {};
		this._instantiatorPromises = {};
		this.controllers = {};

		// TODO environment switch using URL?
		this.logger.setMode(process.env.NODE_ENV as LogMode);

		// log version
		this.logger.imageText({
			url: 'https://snapui.searchspring.io/favicon.svg',
			text: `[${version}]`,
			style: `color: ${this.logger.colors.indigo}; font-weight: bold;`,
		});

		try {
			const urlParams = url(window.location.href);
			const branchParam = urlParams.params?.query?.branch || cookies.get(BRANCH_COOKIE);

			if (branchParam && !document.querySelector(`script[${BRANCH_COOKIE}]`)) {
				// set a cookie or localstorage with branch
				if (featureFlags.cookies) {
					cookies.set(BRANCH_COOKIE, branchParam, 'Lax', 3600000); // 1 hour
					cookies.set(SS_DEV_COOKIE, '1', 'Lax', 0);
				} else {
					this.logger.warn('Cookies are not supported/enabled by this browser, branch overrides will not persist!');
				}

				this.logger.setMode(LogMode.DEVELOPMENT);
				this.logger.warn(`...loading build... '${branchParam}'`);

				// append script with new branch in path
				const script = document.createElement('script');
				const src = `https://snapui.searchspring.io/${this.config.client.globals.siteId}/${branchParam}/bundle.js`;
				script.src = src;
				script.setAttribute(BRANCH_COOKIE, '');
				document.head.appendChild(script);

				new DomTargeter(
					[
						{
							selector: 'body',
							inject: {
								action: 'append', // before, after, append, prepend
								element: () => {
									const branchContainer = document.createElement('div');
									branchContainer.className = 'ss__branch--target';
									return branchContainer;
								},
							},
						},
					],
					async (target, elem) => {
						const BranchOverride = (await import('./components/BranchOverride')).BranchOverride;
						render(<BranchOverride branch={branchParam} cookieName={BRANCH_COOKIE} bundleUrl={src} />, elem);
					}
				);

				// prevent further instantiation of config
				return;
			}
		} catch (e) {}

		if (window.searchspring) {
			if (this.config.context) window.searchspring.context = this.config.context;
			if (this.client) window.searchspring.client = this.client;
		}

		// autotrack shopper id from the context
		if (this.config.context?.shopper?.id) {
			this.tracker.track.shopper.login({
				id: this.config.context.shopper.id,
			});
		}

		// auto populate cart cookie from the context
		if (this.config.context?.shopper?.cart) {
			const cart = this.config.context.shopper.cart;
			if (Array.isArray(cart)) {
				const cartItems = cart.filter((item) => item?.sku || item?.childSku).map((item) => (item?.sku || item?.childSku).trim());
				this.tracker.cookies.cart.set(cartItems);
			}
		}

		Object.keys(this.config?.controllers || {}).forEach((type) => {
			switch (type) {
				case 'search': {
					this.config.controllers[type].forEach((controller, index) => {
						try {
							const cntrlr = createSearchController(
								{
									url: deepmerge(this.config.url || {}, controller.url || {}),
									controller: controller.config,
								},
								{ client: controller.services?.client || this.client, tracker: controller.services?.tracker || this.tracker },
								controller.context || this.config.context
							);

							this.controllers[cntrlr.config.id] = cntrlr;
							this._controllerPromises[cntrlr.config.id] = new Promise((resolve) => resolve(cntrlr));

							let searched = false;
							const runSearch = () => {
								if (!searched) {
									searched = true;
									this.controllers[controller.config.id].search();
								}
							};

							const targetFunction = async (target, elem, originalElem) => {
								runSearch();
								const onTarget = target.onTarget as OnTarget;
								onTarget && onTarget(target, elem, originalElem);

								try {
									const Component = await (target as ExtendedTarget).component();
									setTimeout(() => {
										render(<Component controller={this.controllers[controller.config.id]} {...target.props} />, elem);
									});
								} catch (err) {
									this.logger.error(
										`Uncaught Error - Invalid value passed as the component.
	This usually happens when you pass a JSX Element, and not a function that returns the component, in the snap config. 
			
				instead of - 

			targeters: [
				{
					selector: '#searchspring-content',
					hideTarget: true,
					component: <Content/>,
				},
			]

				or - 

			targeters: [
				{
					selector: '#searchspring-content',
					hideTarget: true,
					component: Content,
				},
			]

				please try - 

			targeters: [
				{
					selector: '#searchspring-content',
					hideTarget: true,
					component: () => Content
				},
			]

			
The error above happened in the following targeter in the Snap Config`,
										target
									);
								}
							};

							controller?.targeters?.forEach(async (target, target_index) => {
								if (!target.selector) {
									throw new Error(`Targets at index ${target_index} missing selector value (string).`);
								}
								if (!target.component) {
									throw new Error(`Targets at index ${target_index} missing component value (Component).`);
								}

								if (target.prefetch) {
									runSearch();
								}

								cntrlr.createTargeter({ controller: cntrlr, ...target }, async (target, elem, originalElem) => {
									if (target.skeleton) {
										const Skeleton = await (target as ExtendedTarget).skeleton();
										setTimeout(() => {
											render(<Skeleton />, elem);
										});
									}
									targetFunction(target, elem, originalElem);
								});
							});
						} catch (err) {
							this.logger.error(`Failed to instantiate ${type} controller at index ${index}.`, err);
						}
					});
					break;
				}

				case 'autocomplete': {
					this.config.controllers[type].forEach((controller, index) => {
						this._controllerPromises[controller.config.id] = new Promise((resolve) => {
							try {
								let bound = false;
								const runBind = () => {
									if (!bound) {
										bound = true;
										setTimeout(() => {
											(this.controllers[controller.config.id] as AutocompleteController).bind();
										});
									}
								};

								const targetFunction = async (target, elem, originalElem) => {
									const onTarget = target.onTarget as OnTarget;
									onTarget && onTarget(target, elem, originalElem);

									const Component = (await (target as ExtendedTarget).component()) as React.ElementType<{
										controller: AutocompleteController;
										input: HTMLInputElement | string | Element;
									}>;

									setTimeout(() => {
										render(<Component controller={this.controllers[controller.config.id]} input={originalElem} {...target.props} />, elem);
									});
								};

								if (!controller?.targeters || controller?.targeters.length === 0) {
									this.createController(
										DynamicImportNames.AUTOCOMPLETE,
										controller.config,
										controller.services,
										controller.url,
										resolve,
										controller.context
									);
								}

								controller?.targeters?.forEach(async (target, target_index) => {
									if (!target.selector) {
										throw new Error(`Targets at index ${target_index} missing selector value (string).`);
									}
									if (!target.component) {
										throw new Error(`Targets at index ${target_index} missing component value (Component).`);
									}
									const targeter = new DomTargeter(
										[
											{
												inject: {
													action: 'after', // before, after, append, prepend
													element: () => {
														const acContainer = document.createElement('div');
														acContainer.className = 'ss__autocomplete--target';
														acContainer.addEventListener('click', (e) => {
															e.stopPropagation();
														});
														return acContainer;
													},
												},
												...target,
											},
										],
										async (target, elem, originalElem) => {
											const cntrlr = await this.createController(
												DynamicImportNames.AUTOCOMPLETE,
												controller.config,
												controller.services,
												controller.url,
												resolve,
												controller.context
											);
											runBind();
											targetFunction({ controller: cntrlr, ...target }, elem, originalElem);
											cntrlr.addTargeter(targeter);
										}
									);
								});
							} catch (err) {
								this.logger.error(`Failed to instantiate ${type} controller at index ${index}.`, err);
							}
						});
					});
					break;
				}

				case 'finder': {
					this.config.controllers[type].forEach((controller, index) => {
						this._controllerPromises[controller.config.id] = new Promise((resolve) => {
							try {
								let searched = false;
								const runSearch = () => {
									if (!searched) {
										this.controllers[controller.config.id].search();
										searched = true;
									}
								};
								const targetFunction = async (target, elem, originalElem) => {
									const onTarget = target.onTarget as OnTarget;
									onTarget && onTarget(target, elem, originalElem);

									const Component = await (target as ExtendedTarget).component();

									setTimeout(() => {
										render(<Component controller={this.controllers[controller.config.id]} {...target.props} />, elem);
									});
								};

								if (!controller?.targeters || controller?.targeters.length === 0) {
									this.createController(
										DynamicImportNames.FINDER,
										controller.config,
										controller.services,
										controller.url,
										resolve,
										controller.context
									);
								}

								controller?.targeters?.forEach(async (target, target_index) => {
									if (!target.selector) {
										throw new Error(`Targets at index ${target_index} missing selector value (string).`);
									}
									if (!target.component) {
										throw new Error(`Targets at index ${target_index} missing component value (Component).`);
									}
									const targeter = new DomTargeter([{ ...target }], async (target, elem, originalElem) => {
										const cntrlr = await this.createController(
											DynamicImportNames.FINDER,
											controller.config,
											controller.services,
											controller.url,
											resolve,
											controller.context
										);
										runSearch();
										targetFunction({ controller: cntrlr, ...target }, elem, originalElem);
										cntrlr.addTargeter(targeter);
									});
								});
							} catch (err) {
								this.logger.error(`Failed to instantiate ${type} controller at index ${index}.`, err);
							}
						});
					});
					break;
				}

				case 'recommendation': {
					this.config.controllers[type].forEach((controller, index) => {
						this._controllerPromises[controller.config.id] = new Promise((resolve) => {
							try {
								let searched = false;
								const runSearch = () => {
									if (!searched) {
										this.controllers[controller.config.id].search();
										searched = true;
									}
								};
								const targetFunction = async (target, elem, originalElem) => {
									const onTarget = target.onTarget as OnTarget;
									onTarget && onTarget(target, elem, originalElem);

									const Component = await (target as ExtendedTarget).component();

									setTimeout(() => {
										render(<Component controller={this.controllers[controller.config.id]} {...target.props} />, elem);
									});
								};

								if (!controller?.targeters || controller?.targeters.length === 0) {
									this.createController(
										DynamicImportNames.RECOMMENDATION,
										controller.config,
										controller.services,
										controller.url,
										resolve,
										controller.context
									);
								}

								controller?.targeters?.forEach(async (target, target_index) => {
									if (!target.selector) {
										throw new Error(`Targets at index ${target_index} missing selector value (string).`);
									}
									if (!target.component) {
										throw new Error(`Targets at index ${target_index} missing component value (Component).`);
									}
									const targeter = new DomTargeter([{ ...target }], async (target, elem, originalElem) => {
										const cntrlr = await this.createController(
											DynamicImportNames.RECOMMENDATION,
											controller.config,
											controller.services,
											controller.url,
											resolve,
											controller.context
										);
										runSearch();
										targetFunction({ controller: cntrlr, ...target }, elem, originalElem);
										cntrlr.addTargeter(targeter);
									});
								});
							} catch (err) {
								this.logger.error(`Failed to instantiate ${type} controller at index ${index}.`, err);
							}
						});
					});
					break;
				}
			}
		});

		if (config?.instantiators?.recommendation) {
			try {
				this._instantiatorPromises.recommendations = import('./Instantiators/RecommendationInstantiator').then(({ RecommendationInstantiator }) => {
					return new RecommendationInstantiator(config.instantiators.recommendation, {
						client: config.instantiators.recommendation?.services?.client || this.client,
						tracker: config.instantiators.recommendation?.services?.tracker || this.tracker,
						logger: config.instantiators.recommendation?.services?.logger || this.logger,
					});
				});
			} catch (err) {
				this.logger.error(`Failed to create Recommendations Instantiator.`, err);
			}
		}
	}
}
