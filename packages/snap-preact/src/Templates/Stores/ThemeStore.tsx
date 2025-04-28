import { h, render } from 'preact';
import { observable, makeObservable, toJS, computed } from 'mobx';
import { observer } from 'mobx-react-lite';
import deepmerge from 'deepmerge';
import { isPlainObject } from 'is-plain-object';
import { StorageStore } from '@searchspring/snap-store-mobx';
import { TemplateThemeTypes, type TemplatesStoreConfigSettings, type TemplatesStoreDependencies } from './TemplateStore';
import { Global, css } from '@emotion/react';

import { ThemeMinimal, ThemeVariablesPartial, type Theme, ThemePartial, ThemeOverrides } from '../../../components/src';
import { CacheProvider } from '../../../components/src/providers/cache';
import { sortSelectors, filterSelectors } from '../../../components/src/utilities/mergeProps';
import type { GlobalThemeStyleScript } from '../../types';
import type { ListOption } from '../../../components/src/types';

export type ThemeStoreThemeConfig = {
	name: string;
	type: TemplateThemeTypes;
	base: Theme;
	overrides?: ThemeOverrides;
	variables?: ThemeVariablesPartial;
	currency: ThemeMinimal;
	language: ThemeMinimal;
	languageOverrides: ThemeMinimal;
	innerWidth?: number;
	style?: GlobalThemeStyleScript;
};

export class SelectedLayout {
	public selected?: ListOption;
	private storage: StorageStore;
	private name: string;
	private type: string;

	public select(layout: ListOption) {
		this.selected = layout;
		this.storage.set(`themes.${this.type}.${this.name}.layout`, this.selected);
	}

	constructor(storageStore: StorageStore, name: string, type: string) {
		this.storage = storageStore;
		this.name = name;
		this.type = type;
		this.selected = this.storage.get(`themes.${this.type}.${this.name}.layout`);

		makeObservable(this, {
			selected: observable,
		});
	}
}

type ThemeStoreConfig = {
	config: ThemeStoreThemeConfig;
	dependencies: TemplatesStoreDependencies;
	settings: TemplatesStoreConfigSettings;
};

export class ThemeStore {
	public name: string;
	public type: string;
	public layout: SelectedLayout;

	private dependencies: TemplatesStoreDependencies;
	private base: Theme;
	private overrides: ThemeOverrides;
	variables: ThemeVariablesPartial;
	currency: ThemeMinimal;
	language: ThemeMinimal;
	languageOverrides: ThemeMinimal;
	stored: ThemePartial;
	innerWidth?: number;

	constructor(params: ThemeStoreConfig) {
		const { config, dependencies, settings } = params;
		this.dependencies = dependencies;

		const { name, style, type, base, overrides, variables, currency, language, languageOverrides, innerWidth } = config;
		this.name = name;
		this.type = type;
		this.base = base;
		this.layout = new SelectedLayout(this.dependencies.storage, this.name, this.type);
		this.overrides = overrides || {};
		this.variables = variables || {};
		this.currency = currency;
		this.language = language;
		this.languageOverrides = languageOverrides;
		this.stored = (settings.editMode && this.dependencies.storage.get(`themes.${this.type}.${this.name}.variables`)) || {};
		this.innerWidth = innerWidth;

		makeObservable(this, {
			name: observable,
			variables: observable,
			currency: observable,
			language: observable,
			stored: observable,
			innerWidth: observable,
			theme: computed, // make theme getter a computed property (memoized)
		});

		// handle adding the style to the document (should only happen once per theme)
		if (style) {
			const GlobalStyle = observer((props: any) => {
				const { self } = props;
				const theme = self.theme;
				const styles = css({
					[`.ss__theme__${theme.name}`]: style({ name: theme.name, variables: theme.variables }),
				});
				return (
					<CacheProvider>
						<Global styles={styles} />
					</CacheProvider>
				);
			});
			const styleElem = document.createElement('style');
			styleElem.innerHTML = `<!-- searchspring style injection point for "${this.name}" theme -->`;
			document.head.appendChild(styleElem);
			render(<GlobalStyle theme={this.theme} self={this} themeName={this.name} />, styleElem);
		}
	}

	public get theme(): Theme {
		/*
			Themes consist of layers which are deep merged together in order (last merge has highest priority)
				1. base theme styles ONLY
				2. base theme responsive breakpoints
				3. currency overrides
				4. language overrides
				5. language translation overrides
				6. theme overrides
				7. theme overrides at responsive breakpoints
				8. altered theme variables
				10. stored theme editor overrides



			Merge order from Search Template Components
				1. Default Template Props (handles responsive itself)
				2. Theme (from this getter)
				3. Default Layout Options (if none specified in theme)
		*/

		const breakpoints = (this.variables.breakpoints || this.base.variables?.breakpoints) as number[];

		const baseBreakpoint = getOverridesAtWidth(this.innerWidth, breakpoints, this.base);
		const overrideBreakpoint = getOverridesAtWidth(this.innerWidth, breakpoints, this.overrides);

		const base = { ...this.base };
		const overrides = { ...this.overrides };

		if (this.overrides.layoutOptions?.length) {
			base.layoutOptions = [];
		}

		if (overrideBreakpoint.layoutOptions?.length) {
			base.layoutOptions = [];
			overrides.layoutOptions = [];
		}

		let themeOverrides = mergeThemeLayers(overrides, overrideBreakpoint, overrides, overrideBreakpoint, {
			variables: toJS(this.variables),
		} as ThemePartial) as Theme;

		let theme: Theme = mergeThemeLayers(base, baseBreakpoint, this.currency, this.language, this.languageOverrides, themeOverrides) as Theme;

		// find layout option overrides
		const layoutOptions = theme.layoutOptions;
		const selectedOption: ListOption | undefined =
			layoutOptions?.find((option) => option?.value === this.layout.selected?.value) ||
			layoutOptions?.find((option) => option?.default) ||
			(Array.isArray(layoutOptions) ? layoutOptions[0] : undefined);

		// apply selected overrides if they exist
		if (selectedOption?.overrides) {
			if (selectedOption?.overrides) {
				theme = mergeThemeLayers(theme, selectedOption.overrides) as Theme;
				themeOverrides = mergeThemeLayers(themeOverrides, selectedOption.overrides) as Theme;
			}

			// if the the selectedOption differs from this.layout.selected, then select the layout (can happen at breakpoint recalculations)
			if (
				!this?.layout?.selected ||
				(this?.layout?.selected && selectedOption.value !== this.layout.selected.value && selectedOption.label !== this.layout.selected.label)
			) {
				this.layout.select(selectedOption);
			}
		}

		/*
			Ensure 'theme' prop has overrides applied to it
			- separate the "base" theme from "overrides"
			- inspect the "base" theme object for keys that have a 'theme' property
			- if the 'theme' property exists, merge overrides for matching keys in overrides
		*/

		// loop through all components
		for (const componentName in theme.components) {
			const component = theme.components[componentName as keyof typeof theme.components];
			const themeComponents = component?.theme?.components;
			// if a component has a theme property with components
			if (themeComponents) {
				for (const themeComponentName in themeComponents) {
					const themeComponentsApplicableSelectors = filterSelectors(themeOverrides.components || {}, `${componentName} ${themeComponentName}`).sort(
						sortSelectors
					);
					themeComponentsApplicableSelectors.forEach((selector) => {
						const themeComponentPropsOverrides = themeOverrides.components![selector as keyof typeof themeOverrides.components];
						if (themeComponentPropsOverrides) {
							const themeComponentProps = themeComponents[themeComponentName as keyof typeof themeComponents];
							// @ts-ignore - hard to type this
							themeComponents[themeComponentName as keyof typeof themeComponents] = { ...themeComponentProps, ...themeComponentPropsOverrides };
						}
					});
				}
			}
		}

		// TemplateEditor overrides
		if (this.stored) {
			theme = mergeThemeLayers(theme, this.stored) as Theme;
		}

		// change the theme name to match the ThemeStore theme name
		theme.name = this.name;
		return theme;
	}

	public setInnerWidth(innerWidth: number) {
		this.innerWidth = innerWidth;
	}

	public setCurrency(currency: ThemeMinimal) {
		this.currency = currency;
	}

	public setLanguage(language: ThemeMinimal) {
		this.language = language;
	}

	// removing a key from custom theme
	// public removeOverride(obj: { path: string[]; rootEditingKey: string; }) {
	// 	// TODO: remove key from stored
	// }

	// alternative to setOverride below...
	// public setOverrides(overrides: ThemeOverrides) {
	// 	this.stored = mergeThemeLayers(this.stored, overrides);
	// 	this.dependencies.storage.set(`themes.${this.type}.${this.name}.variables`, this.stored);
	// }

	// setting a key custom theme
	// TODO: any reason the rootEditingKey cannot be in the path?
	// maybe interface could be: setOverride(path, value);
	public setOverride(obj: { path: string[]; rootEditingKey: string; value: unknown }) {
		const { path, rootEditingKey, value } = obj;
		const overrides: ThemeOverrides = {
			[rootEditingKey]: path.reverse().reduce((res, key) => {
				if (path.indexOf(key) === 0) {
					return {
						[key]: value,
					};
				}
				return {
					[key]: res,
				};
			}, {}),
		};
		this.stored = mergeThemeLayers(this.stored, overrides);
		this.dependencies.storage.set(`themes.${this.type}.${this.name}.variables`, this.stored);
	}
}

export function mergeThemeLayers(...layers: ThemePartial[]): ThemePartial {
	return deepmerge.all(layers, { arrayMerge: arrayMerge });
}

export function getOverridesAtWidth(width: number | undefined, breakpoints: number[], theme: ThemePartial): ThemePartial {
	let overrides: ThemePartial = {};
	if (width && Number.isInteger(width) && theme.responsive) {
		const breakpoint = breakpoints.find((breakpoint) => width! <= breakpoint);

		if (breakpoint) {
			const breakpointIndex = breakpoints.indexOf(breakpoint);
			overrides = (theme.responsive && (theme.responsive as any)[breakpointIndex]) || {};
		} else if (width > breakpoints[breakpoints.length - 1]) {
			// if innerWidth is greater than the last breakpoint, don't apply any responsive overrides
			overrides = {};
		}
	}

	return overrides;
}

const arrayMerge = (target: any, source: any, options: any) => {
	// trim off any excess array entries
	const destination = target.slice(0, source.length);

	source.forEach((item: any, index: any) => {
		if (typeof destination[index] === 'undefined') {
			destination[index] = options.cloneUnlessOtherwiseSpecified(item, options);
		} else if (isPlainObject(item)) {
			destination[index] = deepmerge(target[index], item, options);
		} else {
			destination[index] = item;
		}
	});

	return destination;
};
