import { h } from 'preact';
import { useLayoutOptions } from './useLayoutOptions';
import * as useControllerStorageModule from './useControllerStorage';

jest.mock('./useControllerStorage');
const mockUseControllerStorage = useControllerStorageModule.useControllerStorage as jest.Mock;

const mockController = {
	log: jest.fn(),
	storage: { get: jest.fn(), set: jest.fn() },
};

const optionGrid = { label: 'grid', value: 1, default: true, overrides: { components: { results: { columns: 4 } } } };
const optionList = { label: 'list', value: 2, overrides: { components: { results: { columns: 1 } } } };
const layoutOptions = [optionGrid, optionList];

const makeProps = (overrides: any = {}) => ({
	controller: mockController,
	layoutOptions,
	...overrides,
});

/** Run the hook with a pre-set selectedLayout value returned by useControllerStorage */
const runHook = (props: any, globalTheme: any, selectedLayout: any) => {
	const setSelectedLayout = jest.fn();
	mockUseControllerStorage.mockReturnValue([selectedLayout, setSelectedLayout]);
	useLayoutOptions(props, globalTheme);
	return { setSelectedLayout };
};

describe('useLayoutOptions', () => {
	beforeEach(() => jest.clearAllMocks());

	describe('selection validation', () => {
		it('does not reset when no layout is stored yet', () => {
			const props = makeProps();
			const { setSelectedLayout } = runHook(props, {}, undefined);
			expect(setSelectedLayout).not.toHaveBeenCalled();
		});

		it('does not reset when stored layout matches an option by value', () => {
			const props = makeProps();
			const { setSelectedLayout } = runHook(props, {}, optionGrid);
			expect(setSelectedLayout).not.toHaveBeenCalled();
		});

		it('resets to default when stored layout value is not in current options', () => {
			const props = makeProps();
			const staleOption = { label: 'stale', value: 99 };
			const { setSelectedLayout } = runHook(props, {}, staleOption);
			expect(setSelectedLayout).toHaveBeenCalledWith(optionGrid);
		});

		it('falls back to label comparison when options have no value field', () => {
			const labelOnlyGrid = { label: 'grid', default: true };
			const labelOnlyList = { label: 'list' };
			const props = makeProps({ layoutOptions: [labelOnlyGrid, labelOnlyList] });
			const { setSelectedLayout } = runHook(props, {}, labelOnlyGrid);
			expect(setSelectedLayout).not.toHaveBeenCalled();
		});

		it('resets when label-only option is not found', () => {
			const labelOnlyGrid = { label: 'grid', default: true };
			const props = makeProps({ layoutOptions: [labelOnlyGrid] });
			const stale = { label: 'stale' };
			const { setSelectedLayout } = runHook(props, {}, stale);
			expect(setSelectedLayout).toHaveBeenCalledWith(labelOnlyGrid);
		});

		it('does not throw when options contain JSX values', () => {
			const jsxOptionGrid = {
				label: 'grid',
				value: 1,
				default: true,
				icon: { children: <span>grid</span> },
				overrides: { components: { results: { columns: 4 } } },
			};
			const jsxOptionList = {
				label: 'list',
				value: 2,
				icon: { children: <span>list</span> },
				overrides: { components: { results: { columns: 1 } } },
			};
			const props = makeProps({ layoutOptions: [jsxOptionGrid, jsxOptionList] });
			expect(() => runHook(props, {}, jsxOptionGrid)).not.toThrow();
		});

		it('correctly identifies matching option when icon contains JSX', () => {
			const jsxOption = {
				label: 'grid',
				value: 1,
				default: true,
				icon: { children: <span>hi</span> },
			};
			const props = makeProps({ layoutOptions: [jsxOption] });
			const { setSelectedLayout } = runHook(props, {}, jsxOption);
			expect(setSelectedLayout).not.toHaveBeenCalled();
		});
	});

	describe('props.theme.components.layoutSelector', () => {
		it('populates layoutSelector with options, selected, and onSelect', () => {
			const props = makeProps();
			runHook(props, {}, optionGrid);
			const ls = props.theme.components.layoutSelector;
			expect(ls.options).toBe(layoutOptions);
			expect(ls.selected).toBe(optionGrid);
			expect(typeof ls.onSelect).toBe('function');
		});

		it('onSelect calls setSelectedLayout with the option', () => {
			const props = makeProps();
			const { setSelectedLayout } = runHook(props, {}, optionGrid);
			props.theme.components.layoutSelector.onSelect({}, optionList);
			expect(setSelectedLayout).toHaveBeenCalledWith(optionList);
		});

		it('onSelect does not call setSelectedLayout when option is falsy', () => {
			const props = makeProps();
			const { setSelectedLayout } = runHook(props, {}, optionGrid);
			props.theme.components.layoutSelector.onSelect({}, null);
			expect(setSelectedLayout).not.toHaveBeenCalled();
		});

		it('preserves existing props.theme.components entries', () => {
			const props = makeProps({ theme: { components: { results: { columns: 3 } } } });
			runHook(props, {}, optionGrid);
			expect(props.theme.components.results).toEqual({ columns: 3 });
			expect(props.theme.components.layoutSelector).toBeDefined();
		});
	});

	describe('overrides merging', () => {
		const globalThemeWithToolbar = (templateComponent: string) => ({
			components: {
				[`${templateComponent} toolbar`]: {
					layout: ['layoutSelector'],
				},
			},
		});

		it('merges selected layout overrides when toolbar renders layoutSelector', () => {
			const props = makeProps({ treePath: 'search results result' });
			const globalTheme = globalThemeWithToolbar('search');
			runHook(props, globalTheme, optionGrid);
			expect(props.theme.components.results).toEqual({ columns: 4 });
		});

		it('does not merge overrides when toolbar does not render layoutSelector', () => {
			const props = makeProps({ treePath: 'search results result' });
			const globalTheme = {
				components: {
					'search toolbar': { layout: ['sortBy'] },
				},
			};
			runHook(props, globalTheme, optionGrid);
			expect(props.theme.components.results).toBeUndefined();
		});

		it('does not merge overrides when treePath is not set', () => {
			const props = makeProps(); // no treePath
			const globalTheme = globalThemeWithToolbar('search');
			runHook(props, globalTheme, optionGrid);
			expect(props.theme.components.results).toBeUndefined();
		});

		it('merges overrides when toolbar key uses wildcard prefix', () => {
			const props = makeProps({ treePath: 'search results result' });
			const globalTheme = {
				components: {
					'*search toolbar': { layout: ['layoutSelector'] },
				},
			};
			runHook(props, globalTheme, optionGrid);
			expect(props.theme.components.results).toEqual({ columns: 4 });
		});

		it('merges overrides when toolbar key has no template prefix (global toolbar)', () => {
			const props = makeProps({ treePath: 'search results result' });
			const globalTheme = {
				components: {
					toolbar: { layout: ['layoutSelector'] },
				},
			};
			runHook(props, globalTheme, optionGrid);
			expect(props.theme.components.results).toEqual({ columns: 4 });
		});
	});
});
