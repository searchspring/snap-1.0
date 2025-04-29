import type { ComponentProps } from '../types';
import type { Theme, ThemeComponentOverrides } from '../providers';
import deepmerge from 'deepmerge';
import { isPlainObject } from 'is-plain-object';

export function mergeProps<GenericComponentProps = ComponentProps>(
	componentType: string,
	globalTheme: Theme,
	defaultProps: Partial<GenericComponentProps>,
	props: GenericComponentProps,
	defaultComponentTheme?: Theme,
	responsiveComponentTheme?: Theme
): GenericComponentProps {
	/*

		production behaviour:
		
		1. start with default props
		2. spreads global theme props of component
		3. spreads standard props (directly passed via JSX) - these may be provided by the integration or sub-props
		4. spreads component theme props of component

		templates behaviour:
		
		1. start with default props
		2. spreads standard props (directly passed via JSX) - these may be provided by the integration or sub-props
		NEW - merge defaultComponentTheme onto theme and also merge layoutOptions overrides onto theme
		3. spreads global theme (response of ThemeStore getter) props of component and named component
		4. spreads component theme props of component and named component
			
		5. ensure templates theme variables pass on in `theme`
		6. if treepath contains 'custom' do #2 again

	*/

	/*


	const generateOverrideTheme = <Props extends ComponentProps,>(props: Props & { layoutOptions?: any }, globalTheme: Theme, defaultTheme: Theme, responsiveTheme: Theme, snap?: Snap | SnapTemplates): Props => {
	let themeDefaults: ThemePartial = {};

	if (props.theme?.name) {
		const themeStore = snap?.templates?.themes.local[props.theme?.name] || snap?.templates?.themes.library[props.theme?.name];
		const innerWidth = themeStore?.innerWidth;
		const breakpoints = themeStore?.variables.breakpoints || themeStore?.['base']?.variables?.breakpoints || [];
		themeDefaults = deepmerge(defaultTheme, getOverridesAtWidth(innerWidth, breakpoints!, responsiveTheme), { arrayMerge: arrayMerge });
	}

	if (props.controller && props.layoutOptions) {
		// handle layoutOptions and selected option
		const [selectedLayout, setSelectedLayout] = useControllerStorage(
			props.controller,
			'layoutOptions',
			props.layoutOptions.filter((option: any) => option.default)
		);

		if (themeDefaults.components) {
			themeDefaults.components.layoutSelector = {
				options: props.layoutOptions,
				onSelect: (e, option) => {
					if (option) {
						setSelectedLayout(option);
					}
				},
				selected: selectedLayout,
			}
		}
		
		// grab overrides out of the "selected" or default layoutOptions and merge it in
		if (selectedLayout?.overrides) {
			themeDefaults = deepmerge(themeDefaults, { components: selectedLayout.overrides.components });
		}
	}

	// all the props!
	return {
		...props,
		theme: { components: themeDefaults.components, name: globalTheme.name },
	};
}


	*/

	console.log(responsiveComponentTheme);

	const theme = (props as ComponentProps).theme;
	const componentName = (props as any)?.name;

	let treePath = (props as ComponentProps).treePath || (defaultProps as ComponentProps).treePath || '';

	if (componentType !== 'layout') {
		treePath += `${treePath ? ' ' : ''}${componentType}`;
	}

	// start with defaultProps
	let mergedProps = {
		...defaultProps,
	};

	if (!globalTheme?.name) {
		// non-snap templates usage

		// add globalTheme props if they exist
		const globalComponent = globalTheme?.components && globalTheme.components[componentType as keyof typeof globalTheme.components];

		if (globalComponent) {
			mergedProps = mergeThemeProps(globalComponent, mergedProps) as Partial<GenericComponentProps>;
		}

		// normal props
		mergedProps = {
			...mergedProps,
			...props,
			treePath,
		};

		// add theme props if they exist
		const themeComponent = theme?.components && theme.components[componentType as keyof typeof theme.components];
		if (themeComponent) {
			mergedProps = mergeThemeProps(themeComponent, mergedProps) as Partial<GenericComponentProps>;
		}
	} else {
		// snap templates usage

		// normal props
		mergedProps = {
			...mergedProps,
			...props,
		};

		treePath += componentName?.match(/^[A-Z,a-z,-]+$/) ? `.${componentName}` : '';
		// template component theme defaults (responsive)
		// add layer to globalTheme by deepmerging defaultComponentTheme and applicable responsiveComponentTheme into globalTheme
		if (defaultComponentTheme) {
			(mergedProps as ComponentProps).theme = deepmerge((mergedProps as ComponentProps).theme || {}, defaultComponentTheme, {
				arrayMerge: arrayMerge,
			});
		}

		// if (props.theme?.name) {
		// 	const themeStore = snap?.templates?.themes.local[props.theme?.name] || snap?.templates?.themes.library[props.theme?.name];
		// 	const innerWidth = themeStore?.innerWidth;
		// 	const breakpoints = themeStore?.variables.breakpoints || themeStore?.['base']?.variables?.breakpoints || [];
		// 	themeDefaults = deepmerge(defaultTheme, getOverridesAtWidth(innerWidth, breakpoints!, responsiveTheme), { arrayMerge: arrayMerge });
		// }

		// add globalTheme props for components with selector matches if they exist
		const globalApplicableSelectors = filterSelectors(globalTheme?.components || {}, treePath).sort(sortSelectors);
		globalApplicableSelectors.forEach((selector) => {
			const componentProps = globalTheme.components?.[selector as keyof typeof globalTheme.components];
			if (componentProps) {
				mergedProps = mergeThemeProps(componentProps, mergedProps) as Partial<GenericComponentProps>;
			}
		});

		// add theme props for components with selector matches if they exist
		const themeApplicableSelectors = filterSelectors(theme?.components || {}, treePath).sort(sortSelectors);
		themeApplicableSelectors.forEach((selector) => {
			const componentProps = theme?.components?.[selector as keyof typeof globalTheme.components];
			if (componentProps) {
				mergedProps = mergeThemeProps(componentProps, mergedProps) as Partial<GenericComponentProps>;
			}
		});

		// tacking on name, variables and layoutOptions to `theme`
		mergedProps = {
			...mergedProps,
			theme: {
				...(mergedProps as ComponentProps).theme,
				name: globalTheme.name,
			},
			treePath,
		};

		if ((props as any).lang) {
			(mergedProps as any).lang = (props as any).lang;
		}

		if (globalTheme.variables) {
			(mergedProps as ComponentProps).theme!.variables = globalTheme.variables;
		}
		// if (globalTheme.layoutOptions) {
		// 	(mergedProps as ComponentProps).theme!.layoutOptions = globalTheme.layoutOptions;
		// }

		//if custom component, re-spread props again
		if (treePath && treePath.indexOf('customComponent') > -1) {
			mergedProps = {
				...mergedProps,
				...props,
			};
		}
	}

	return mergedProps as GenericComponentProps;
}

function mergeThemeProps(componentThemeProps: Partial<ComponentProps>, mergedProps: Partial<ComponentProps>): Partial<ComponentProps> {
	// add theme props if they exist
	if (componentThemeProps) {
		mergedProps = {
			...mergedProps,
			...componentThemeProps,
		};
	}

	return mergedProps;
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

export function sortSelectors(a: string, b: string): number {
	const aWeight = a
		.split(' ')
		.map((selector, i) => (i * 2) ** (selector.includes('.') ? 2 : 1))
		.reduce((acc, val) => acc + val, 0);
	const bWeight = b
		.split(' ')
		.map((selector, i) => (i * 2) ** (selector.includes('.') ? 2 : 1))
		.reduce((acc, val) => acc + val, 0);

	return aWeight - bWeight;
}

export function filterSelectors(themeComponents: ThemeComponentOverrides, treePath: string): string[] {
	let selectors = Object.keys(themeComponents);
	const paths = treePath.split(' ');
	const componentTypeAndName = paths.splice(-1).pop() ?? '';
	const [componentType, componentName] = componentTypeAndName.split('.');

	const mappedSplitTreePath = paths.map((path) => {
		const [type, name] = path.split('.');
		return {
			type,
			name,
			path,
		};
	});

	if (componentName) {
		selectors = selectors.filter((key) => {
			const keys = key.split(' ');
			const lastkey = keys[keys.length - 1];
			if (lastkey == componentType || lastkey == `${componentType}.${componentName}`) {
				return true;
			}
		});
	} else {
		selectors = selectors.filter((key) => key.endsWith(componentType));
	}
	return selectors.filter((selector) => {
		const split = selector.split(' ').slice(0, -1);

		if (split.length == 0) return true;

		for (let s = 0; s < split.length; s++) {
			let prevIndex = -1;
			const value = split[s];

			for (let i = prevIndex == -1 ? 0 : prevIndex; i < mappedSplitTreePath.length; i++) {
				const pathValue = mappedSplitTreePath[i];

				if (value === pathValue.path || value === pathValue.type) {
					prevIndex = s;
					break;
				}
			}

			if (prevIndex == -1) {
				// selector path not found at all - selector is invalid
				return false;
			}
		}

		return true;
	});
}
