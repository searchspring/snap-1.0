import { Theme } from '..';
import { GLOBAL_THEME_NAME } from '../../../src/Templates/Stores/TargetStore';
import { SelectProps } from '../components/Molecules/Select';
import { sortSelectors, filterSelectors, mergeProps } from './mergeProps';

describe('mergeProps function without theme name', () => {
	it('merges defaultProps', () => {
		const componentType = 'select';
		const globalTheme = {};
		const defaultProps: Partial<SelectProps> = {
			iconOpen: 'angle-down',
			iconClose: 'angle-up',
			separator: ': ',
			startOpen: false,
		};
		const properties: Partial<SelectProps> = {};
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);
		expect(props).toStrictEqual({
			iconOpen: 'angle-down',
			iconClose: 'angle-up',
			separator: ': ',
			startOpen: false,
			treePath: 'select',
		});
	});
	it('merges global theme', () => {
		const componentType = 'select';
		const globalTheme = {
			components: {
				[componentType]: {
					startOpen: true,
					unrelatedProp: 1,
				},
				otherComponent: {
					shouldNotExist: 1,
				},
			},
		};
		const defaultProps: Partial<SelectProps> = {
			iconOpen: 'angle-down',
			iconClose: 'angle-up',
			separator: ': ',
			startOpen: false,
		};
		const properties: Partial<SelectProps> = {};
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);
		expect(props).toStrictEqual({
			iconOpen: 'angle-down',
			iconClose: 'angle-up',
			separator: ': ',
			startOpen: true,
			treePath: 'select',
			unrelatedProp: 1,
		});
	});
	it('merges properties', () => {
		const componentType = 'select';
		const globalTheme = {
			components: {
				[componentType]: {
					startOpen: true,
					unrelatedProp: 1,
				},
				otherComponent: {
					shouldNotExist: 1,
				},
			},
		};
		const defaultProps: Partial<SelectProps> = {
			iconOpen: 'angle-down',
			iconClose: 'angle-up',
			separator: ': ',
			startOpen: false,
		};
		const properties: Partial<SelectProps> = {
			className: 'additonal-className',
			iconClose: 'cog',
		};
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);
		expect(props).toStrictEqual({
			iconOpen: 'angle-down',
			iconClose: 'cog',
			separator: ': ',
			startOpen: true,
			className: 'additonal-className',
			unrelatedProp: 1,
			treePath: 'select',
		});
	});

	it('merges nested theme on properties', () => {
		const componentType = 'select';
		const globalTheme = {
			components: {
				[componentType]: {
					startOpen: true,
					unrelatedProp: 1,
				},
				otherComponent: {
					shouldNotExist: 1,
				},
			},
		};
		const defaultProps: Partial<SelectProps> = {
			iconOpen: 'angle-down',
			iconClose: 'angle-up',
			separator: ': ',
			startOpen: false,
		};
		const properties: Partial<SelectProps> = {
			className: 'additonal-className',
			iconClose: 'cog',
			theme: {
				components: {
					[componentType]: {
						// @ts-ignore - different prop value
						startOpen: '2',
						unrelatedProp: 2,
					},
					otherComponent: {
						shouldNotExist: 2,
					},
				},
			},
		};
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);
		expect(props).toStrictEqual({
			iconOpen: 'angle-down',
			iconClose: 'cog',
			separator: ': ',
			startOpen: true,
			className: 'additonal-className',
			unrelatedProp: 1,
			treePath: 'select',
			theme: properties.theme,
			...properties.theme?.components![componentType],
		});
	});
});

describe('filterSelectors handles names and treepath correctly', () => {
	it('removes selectors not within the treePath', () => {
		const treePath = `recommendationBundle result price.price-msrp`;

		const selectors = {
			//garbage
			pagination: {},
			icon: {},

			//valid
			price: {},
			'price.price-msrp': {},
			'result price.price-msrp': {},
			'recommendationBundle result price.price-msrp': {},
			'recommendationBundle price.price-msrp': {},

			//invalid
			'search price': {},
			'autocomplete price': {},
			'price.bundle-strike-price': {},
			'recommendationBundle carousel result price': {},
			'recommendationBundle price.bundle-strike-price': {},
			'recommendationBundle price.bundle-price': {},
			'recommendation price.price-msrp': {},
			'price.bundle-strike-price-msrp': {},
		};
		const expected = [
			'price',
			'price.price-msrp',
			'result price.price-msrp',
			'recommendationBundle result price.price-msrp',
			'recommendationBundle price.price-msrp',
		];

		expect(filterSelectors(selectors, treePath)).toEqual(expected);
	});
});

describe('mergeProps function with theme name', () => {
	it('has named theme with variables, layoutOptions, and treePath', () => {
		const componentType = 'select';
		const globalTheme: Theme = {
			name: GLOBAL_THEME_NAME,
			variables: {
				breakpoints: { mobile: 540, tablet: 767, desktop: 1200 },
				colors: {
					primary: '#3A23AD',
					secondary: '#00cee1',
					accent: '#4c3ce2',
				},
			},
		};

		const defaultProps: Partial<SelectProps> = {
			iconOpen: 'angle-down',
			iconClose: 'angle-up',
			separator: ': ',
			startOpen: false,
		};
		const properties: Partial<SelectProps> = {};
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);
		expect(props).toStrictEqual({
			...defaultProps,
			theme: {
				name: globalTheme.name,
				variables: globalTheme.variables,
			},
			treePath: componentType,
		});
	});

	it('globalTheme components overrides defaultProps', () => {
		const componentType = 'select';
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
			components: {
				[componentType]: {
					startOpen: true,
					unrelatedProp: 1,
				},
				otherComponent: {
					shouldNotExist: 1,
				},
			},
		};

		const defaultProps: Partial<SelectProps> = {
			iconOpen: 'angle-down',
			iconClose: 'angle-up',
			separator: ': ',
			startOpen: false,
		};
		const properties: Partial<SelectProps> = {};
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);
		expect(props).toStrictEqual({
			...defaultProps,
			startOpen: true,
			unrelatedProp: 1,
			theme: {
				name: globalTheme.name,
			},
			treePath: componentType,
		});
	});

	it('properties overrides defaultProps', () => {
		const componentType = 'select';
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
		};

		const defaultProps: Partial<SelectProps> = {
			iconOpen: 'angle-down',
			iconClose: 'angle-up',
			separator: ': ',
			startOpen: false,
		};
		const properties: Partial<SelectProps> = {
			className: 'additonal-className',
			iconOpen: 'cog',
			startOpen: true,
		};
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);
		expect(props).toStrictEqual({
			...defaultProps,
			...properties,
			theme: {
				name: globalTheme.name,
			},
			treePath: componentType,
		});
	});
	it('globalTheme overrides properties', () => {
		const componentType = 'select';
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
			components: {
				[componentType]: {
					startOpen: '1',
					unrelatedProp: 1,
				},
				otherComponent: {
					shouldNotExist: 1,
				},
			},
		};

		const defaultProps: Partial<SelectProps> = {
			iconOpen: 'angle-down',
			iconClose: 'angle-up',
			separator: ': ',
			startOpen: false,
		};
		const properties: Partial<SelectProps> = {
			className: 'additonal-className',
			iconOpen: 'cog',
			startOpen: true,
		};
		// @ts-ignore - globalTheme.startOpen as a string to make sure it is being used
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);
		expect(props).toStrictEqual({
			...defaultProps,
			...properties,
			startOpen: '1',
			unrelatedProp: 1,
			theme: {
				name: globalTheme.name,
			},
			treePath: componentType,
		});
	});

	it('nested theme on properties', () => {
		const componentType = 'select';
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
			components: {
				[componentType]: {
					startOpen: '1',
					unrelatedProp: 1,
				},
				otherComponent: {
					shouldNotExist: 1,
				},
			},
		};

		const defaultProps: Partial<SelectProps> = {
			iconOpen: 'angle-down',
			iconClose: 'angle-up',
			separator: ': ',
			startOpen: false,
		};
		const properties: Partial<SelectProps> = {
			className: 'additonal-className',
			iconOpen: 'cog',
			startOpen: true,
			theme: {
				components: {
					[componentType]: {
						// @ts-ignore - different prop value
						startOpen: '2',
					},
					otherComponent: {
						shouldNotExist: 2,
					},
				},
			},
		};
		// @ts-ignore - globalTheme.startOpen as a string to make sure it is being used
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);
		expect(props).toStrictEqual({
			...defaultProps,
			...properties,
			startOpen: '2',
			unrelatedProp: 1,
			theme: {
				name: globalTheme.name,
				...properties.theme,
			},
			treePath: componentType,
		});
	});

	it('nested treePath and named component', () => {
		const componentType = 'select';
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
		};

		const defaultProps: Partial<SelectProps> = {};
		const properties: Partial<SelectProps> = {
			treePath: 'button',
			name: 'first',
		};
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);
		expect(props).toStrictEqual({
			...defaultProps,
			...properties,
			theme: {
				name: globalTheme.name,
			},
			treePath: `button ${componentType}.first`,
		});
	});

	it('nested treePath and named component with dash', () => {
		const componentType = 'select';
		const globalTheme = {
			name: GLOBAL_THEME_NAME,
		};

		const defaultProps: Partial<SelectProps> = {};
		const properties: Partial<SelectProps> = {
			treePath: 'button',
			name: 'first-button',
		};
		const props = mergeProps(componentType, globalTheme, defaultProps, properties);
		expect(props).toStrictEqual({
			...defaultProps,
			...properties,
			theme: {
				name: globalTheme.name,
			},
			treePath: `button ${componentType}.first-button`,
		});
	});
});
describe('sortSelectors function', () => {
	it('orders strings by spaces', () => {
		const expected = [
			'search',
			'search toolbar',
			'search toolbar.top',
			'search toolbar.bottom',
			'search toolbar perPage',
			'search toolbar.top perPage',
			'search toolbar.bottom perPage',
			'search toolbar perPage.named',
			'search toolbar.top perPage.named',
		];
		const data = [
			'search toolbar.top perPage',
			'search toolbar perPage',
			'search toolbar.top perPage.named',
			'search toolbar perPage.named',
			'search',
			'search toolbar',
			'search toolbar.top',
			'search toolbar.bottom',
			'search toolbar.bottom perPage',
		];
		expect(data.sort(sortSelectors)).toEqual(expected);
	});
});
describe('filterSelectors function', () => {
	it('removes selectors not within the treePath', () => {
		const treePath = `search toolbar.top pagination icon.next`;

		const selectors = {
			// selectors that are NOT applicable (should be filtered out)
			'*icon.prev': {},
			'*(T)icon.prev': {},
			pagination: {},
			'*(M)pagination': {},
			'search toolbar.top icon thing': {},
			'carousel icon.next': {},
			'facet icon': {},
			'search toolbar.top pagination dne icon.next': {},
			'search dne toolbar.top pagination icon.next': {},
			'*search dne toolbar.top pagination icon.next': {},
			'*search toolbar.top pagination icon.prev': {},
			'(M)search toolbar.top pagination icon.prev': {},

			// applicable selectors
			icon: {},
			'*icon': {},
			'icon.next': {},
			'*icon.next': {},
			'*(M)icon.next': {},
			'*(T)icon.next': {},
			'*(D)icon.next': {},
			'(M)icon.next': {},
			'(T)icon.next': {},
			'(D)icon.next': {},
			'pagination icon': {},
			'pagination icon.next': {},
			'toolbar.top icon.next': {},
			'search toolbar pagination icon': {},
			'search toolbar pagination icon.next': {},
			'search toolbar.top pagination icon': {},
			'search toolbar.top pagination icon.next': {},
			'*search toolbar.top pagination icon.next': {},
			'*(M)search toolbar.top pagination icon.next': {},
			'*(T)search toolbar.top pagination icon.next': {},
			'*(D)search toolbar.top pagination icon.next': {},
			'(M)search toolbar.top pagination icon.next': {},
			'(T)search toolbar.top pagination icon.next': {},
			'(D)search toolbar.top pagination icon.next': {},
		};
		const expected = [
			'icon',
			'*icon',
			'icon.next',
			'*icon.next',
			'*(M)icon.next',
			'*(T)icon.next',
			'*(D)icon.next',
			'(M)icon.next',
			'(T)icon.next',
			'(D)icon.next',
			'pagination icon',
			'pagination icon.next',
			'toolbar.top icon.next',
			'search toolbar pagination icon',
			'search toolbar pagination icon.next',
			'search toolbar.top pagination icon',
			'search toolbar.top pagination icon.next',
			'*search toolbar.top pagination icon.next',
			'*(M)search toolbar.top pagination icon.next',
			'*(T)search toolbar.top pagination icon.next',
			'*(D)search toolbar.top pagination icon.next',
			'(M)search toolbar.top pagination icon.next',
			'(T)search toolbar.top pagination icon.next',
			'(D)search toolbar.top pagination icon.next',
		];

		expect(filterSelectors(selectors, treePath)).toEqual(expected);
	});
});
