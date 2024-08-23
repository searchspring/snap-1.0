import { observable, makeObservable } from 'mobx';
import { StorageStore, StorageType } from '@searchspring/snap-store-mobx';
import { SnapTemplatesConfig } from '../SnapTemplate';
import { ThemeStore } from './ThemeStore';
import { TargetStore } from './TargetStore';
import { LibraryStore } from './LibraryStore';
import { debounce } from '@searchspring/snap-toolbox';

import type { ResultComponent } from '../../../components/src';
import type { DeepPartial, GlobalThemeStyleScript } from '../../types';
import type { Theme, ThemeVariables } from '../../../components/src';
export type TemplateThemeTypes = 'library' | 'local';
export type TemplateTypes = 'search' | 'autocomplete' | `recommendation/${RecsTemplateTypes}`;
export type TemplateCustomComponentTypes = 'result' | 'badge';
export type RecsTemplateTypes = 'bundle' | 'default' | 'email';

type TargetMap = { [targetId: string]: TargetStore };

export type TemplateTarget = {
	selector?: string;
	theme?: string;
	component: string;
	resultComponent?: string;
};

export type TemplatesStoreSettings = {
	editMode: boolean;
};

export type TemplatesStoreDependencies = {
	storage: StorageStore;
};

type WindowProperties = {
	innerWidth: number;
};

type TemplateStoreThemeConfig = {
	extends: 'pike' | 'bocachica'; // various themes available
	style?: GlobalThemeStyleScript;
	variables?: DeepPartial<ThemeVariables>;
	overrides?: Theme;
};

export type TemplateStoreComponentConfig = {
	[key in TemplateCustomComponentTypes]: {
		[componentName: string]: (args?: any) => Promise<ResultComponent> | ResultComponent;
	};
};

export type TemplateStoreConfig = {
	components?: TemplateStoreComponentConfig;
	config?: {
		siteId?: string;
		currency?: string;
		language?: string;
	};
	themes: {
		global: TemplateStoreThemeConfig;
	} & { [themeName: string]: TemplateStoreThemeConfig };
};

const RESIZE_DEBOUNCE = 100;
export class TemplatesStore {
	loading = false;
	config: SnapTemplatesConfig;
	storage: StorageStore;
	language: string;
	currency: string;
	settings: TemplatesStoreSettings;
	dependencies: TemplatesStoreDependencies;

	targets: {
		search: TargetMap;
		autocomplete: TargetMap;
		recommendation: {
			[key in RecsTemplateTypes]: TargetMap;
		};
	};

	themes: {
		local: {
			[themeName: 'global' | string]: ThemeStore;
		};
		library: {
			[themeName: string]: ThemeStore;
		};
	};

	library: LibraryStore;

	window: WindowProperties = { innerWidth: 0 };

	constructor(config: TemplateStoreConfig, settings?: TemplatesStoreSettings) {
		this.config = config;
		this.storage = new StorageStore({ type: StorageType.local, key: 'ss-templates' });

		this.dependencies = {
			storage: this.storage,
		};
		this.settings = settings || { editMode: false };

		this.targets = {
			search: {},
			autocomplete: {},
			recommendation: {
				bundle: {},
				default: {},
				email: {},
			},
		};

		this.themes = {
			local: {},
			library: {},
		};

		this.library = new LibraryStore(config.components);

		this.language =
			(this.settings.editMode && this.storage.get('language')) ||
			(this.config.config?.language && this.config.config.language in this.library.import.language && this.config.config.language) ||
			'en';
		this.currency =
			(this.settings.editMode && this.storage.get('currency')) ||
			(this.config.config?.currency && this.config.config.currency in this.library.import.currency && this.config.config.currency) ||
			'usd';

		// import locale selections
		const importCurrency = this.library.import.currency[this.currency as keyof typeof this.library.import.currency]();
		const importLanguage = this.library.import.language[this.language as keyof typeof this.library.import.language]();

		// configure window properties and add event listeners
		if (window) {
			this.setInnerWidth(window.innerWidth);
			const debouncedHandleResize = debounce(() => {
				this.setInnerWidth(window.innerWidth);
			}, RESIZE_DEBOUNCE);

			window.addEventListener('resize', debouncedHandleResize);
		}

		// setup local themes
		Object.keys(config.themes).map((themeKey) => {
			const themeConfig = config.themes[themeKey];
			const imports = [importCurrency, importLanguage, this.library.import.theme[themeConfig.extends]()];

			Promise.all(imports).then(() => {
				const base = this.library.themes[themeConfig.extends];
				const overrides = themeConfig.overrides || {};
				const variables = themeConfig.variables || {};
				const currency = this.library.locales.currencies[this.currency];
				const language = this.library.locales.languages[this.language];

				this.addTheme({
					name: themeKey,
					style: themeConfig.style,
					type: 'local',
					base,
					overrides,
					variables,
					currency,
					language,
					innerWidth: this.window.innerWidth,
				});
			});
		});

		makeObservable(this, {
			loading: observable,
			targets: observable,
			themes: observable,
		});
	}

	public addTarget(type: TemplateTypes, target: TemplateTarget): string | undefined {
		const targetId = target.selector || target.component;
		if (targetId) {
			const path = type.split('/');
			let targetPath: any = this.targets;
			for (let index = 0; index < path.length; index++) {
				if (!targetPath[path[index]]) {
					return;
				}
				targetPath = targetPath[path[index]];
			}
			(targetPath as TargetMap)[targetId] = new TargetStore(target, this.dependencies, this.settings);

			if (this.settings.editMode) {
				// triggers a rerender for TemplateEditor
				this.targets = { ...this.targets };
			}
			return targetId;
		}
	}

	public getTarget(type: TemplateTypes, targetId: string): TargetStore | undefined {
		const path = type.split('/');
		path.push(targetId);
		let targetPath: any = this.targets;
		for (let index = 0; index < path.length; index++) {
			if (!targetPath[path[index]]) {
				return;
			}
			targetPath = targetPath[path[index]];
		}

		return targetPath;
	}

	public addTheme(config: {
		name: string;
		type: TemplateThemeTypes;
		base: Theme;
		overrides?: Theme;
		variables?: DeepPartial<ThemeVariables>;
		currency: Partial<Theme>;
		language: Partial<Theme>;
		innerWidth?: number;
		style?: GlobalThemeStyleScript;
	}) {
		const theme = new ThemeStore(config, this.dependencies, this.settings);
		const themeLocation = this.themes[config.type as keyof typeof this.themes] || {};
		themeLocation[config.name] = theme;
	}

	private setInnerWidth(innerWidth: number) {
		if (this.window.innerWidth === innerWidth) return;

		this.window.innerWidth = innerWidth;
		for (const themeName in this.themes.local) {
			const theme = this.themes.local[themeName];
			theme.setInnerWidth(this.window.innerWidth);
		}
		for (const themeName in this.themes.library) {
			const theme = this.themes.library[themeName];
			theme.setInnerWidth(this.window.innerWidth);
		}
	}

	public getThemeStore(themeName?: string): ThemeStore | undefined {
		if (themeName) {
			return this.themes.local[themeName] || this.themes.library[themeName];
		}
	}

	public async setCurrency(currencyCode: string) {
		if (currencyCode in this.library.import.currency) {
			await this.library.import.currency[currencyCode as keyof typeof this.library.import.currency]();
			const currency = this.library.locales.currencies[currencyCode];

			if (currency) {
				this.currency = currencyCode;
				this.storage.set('currency', this.currency);
				for (const themeName in this.themes.local) {
					const theme = this.themes.local[themeName];
					theme.setCurrency(currency);
				}
				for (const themeName in this.themes.library) {
					const theme = this.themes.library[themeName];
					theme.setCurrency(currency);
				}
			}
		}
	}

	public async setLanguage(languageCode: string) {
		if (languageCode in this.library.import.language) {
			await this.library.import.language[languageCode as keyof typeof this.library.import.language]();
			const language = this.library.locales.currencies[languageCode];

			if (language) {
				this.language = languageCode;
				this.storage.set('language', this.language);
				for (const themeName in this.themes.local) {
					const theme = this.themes.local[themeName];
					theme.setLanguage(language);
				}
				for (const themeName in this.themes.library) {
					const theme = this.themes.library[themeName];
					theme.setLanguage(language);
				}
			}
		}
	}

	public async preLoad() {
		// preload the library
		this.loading = true;
		await this.library.preLoad();

		// build out the library themes
		this.themes.library = {};
		for (const themeName in this.library.themes) {
			const theme = this.library.themes[themeName];
			this.addTheme({
				name: themeName,
				type: 'library',
				base: theme,
				language: this.library.locales.languages[this.language],
				currency: this.library.locales.currencies[this.currency],
				innerWidth: this.window.innerWidth,
			});
		}
		this.loading = false;
	}
}