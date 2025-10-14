import { observable, makeObservable } from 'mobx';
import { TemplateTarget, TemplateTypes, type TemplateThemeTypes } from './TemplateStore';

export const GLOBAL_THEME_NAME = 'global';

type TargetStoreConfig = {
	target: TemplateTarget;
};

export class TargetStore {
	public index: number;
	public type: TemplateTypes;
	public selector: string;
	public triggerSelector?: string;
	public component: string;
	public resultComponent: string;
	public theme: {
		location: TemplateThemeTypes;
		name: string;
	};

	constructor(params: TargetStoreConfig) {
		const { target } = params;

		this.index = target.index;
		this.type = target.type;
		this.selector = target.selector || '';
		this.triggerSelector = target.triggerSelector || '';
		this.component = target.component || '';
		this.resultComponent = (target.resultComponent as string) || 'Result';
		this.theme = {
			location: 'local',
			name: GLOBAL_THEME_NAME,
		};

		makeObservable(this, {
			component: observable,
			resultComponent: observable,
			selector: observable,
			triggerSelector: observable,
			theme: observable,
		});
	}

	public setValue(name: string, value: string) {
		if (!['selector', 'triggerSelector', 'component', 'resultComponent'].includes(name)) return;
		this[name as 'selector' | 'triggerSelector' | 'component' | 'resultComponent'] = value;
	}

	public setTheme(themeName: string, location: TemplateThemeTypes) {
		this.theme = {
			location,
			name: themeName,
		};
	}
}
