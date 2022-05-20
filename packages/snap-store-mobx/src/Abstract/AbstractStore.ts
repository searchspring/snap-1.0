import { makeObservable, observable, toJS, configure } from 'mobx';
import type { StoreConfigs, ErrorType } from '../types';

configure({
	enforceActions: 'never',
});

export abstract class AbstractStore {
	public custom = {};
	public loading = false;
	public loaded = false;
	public error?: {
		code?: number;
		type: ErrorType;
		message: string;
	};
	public config: StoreConfigs;

	constructor(config: StoreConfigs) {
		this.config = config;

		makeObservable(this, {
			custom: observable,
			loading: observable,
			loaded: observable,
		});
	}

	setConfig(newConfig: StoreConfigs): void {
		this.config = newConfig;
	}

	abstract update(data: any): void;

	toJSON(thing = this) {
		// TODO: make this work better
		return toJS(thing);
	}
}
