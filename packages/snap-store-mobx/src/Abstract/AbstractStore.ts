import { makeObservable, observable, toJS, configure } from 'mobx';
import type { ControllerConfigs } from '../types';

configure({
	// useProxies: "never",  // for IE 11 (es5) support
	enforceActions: 'never',
});

export abstract class AbstractStore {
	protected controller;
	public custom = {};
	public loading = false;
	public loaded = false;
	public config: ControllerConfigs;

	constructor(config: ControllerConfigs) {
		this.config = config;

		makeObservable(this, {
			custom: observable,
			loading: observable,
			loaded: observable,
		});
	}

	setConfig(newConfig: ControllerConfigs): void {
		this.config = newConfig;
	}

	abstract update(data): void;

	toJSON(thing = this) {
		// TODO: make this work better
		return toJS(thing);
	}
}
