import { getContext, cookies, url } from '@athoscommerce/snap-toolbox';
import type { SnapTemplatesConfig } from './SnapTemplates';

// Mock the Snap parent class to avoid its heavy DOM/network constructor
jest.mock('../Snap', () => ({
	Snap: class MockSnap {
		controllers: Record<string, any> = {};
		constructor() {}
	},
}));

// Mock the TemplateEditorStore dynamic import
jest.mock('./Stores/TemplateEditor/TemplateEditorStore', () => ({
	TemplateEditorStore: class MockTemplateEditorStore {
		constructor() {}
		registerController() {}
	},
}));

// Mock snap-toolbox utilities used in the constructor
jest.mock('@athoscommerce/snap-toolbox', () => {
	const actual = jest.requireActual('@athoscommerce/snap-toolbox');
	return {
		...actual,
		getContext: jest.fn().mockReturnValue({}),
		cookies: {
			get: jest.fn().mockReturnValue(''),
			set: jest.fn(),
			unset: jest.fn(),
		},
		url: jest.fn().mockReturnValue({
			base: '',
			params: { query: {}, hash: '' },
			url: () => '',
		}),
	};
});

const mockedGetContext = getContext as jest.MockedFunction<typeof getContext>;
const mockedCookiesGet = cookies.get as jest.MockedFunction<typeof cookies.get>;
const mockedUrl = url as jest.MockedFunction<typeof url>;

// Must import after mocks are set up
import { SnapTemplates, TEMPLATE_EDITOR_COOKIE, TEMPLATE_EDITOR_UI_PARAM } from './SnapTemplates';
import { TemplatesStore } from './Stores/TemplateStore';

const baseConfig: SnapTemplatesConfig = {
	config: {
		platform: 'other',
		siteId: 'test-site',
	},
	theme: {
		extends: 'base',
	},
};

describe('SnapTemplates editor mode', () => {
	beforeEach(() => {
		jest.clearAllMocks();
		jest.useFakeTimers();

		// Mock preLoad to avoid loading the full component library
		jest.spyOn(TemplatesStore.prototype, 'preLoad').mockResolvedValue(undefined as any);

		// defaults: no editor mode
		mockedGetContext.mockReturnValue({});
		mockedCookiesGet.mockReturnValue('');
		mockedUrl.mockReturnValue({
			base: '',
			params: { query: {}, hash: '' },
			url: () => '',
		});
	});

	afterEach(() => {
		jest.useRealTimers();
	});

	describe('when no editor triggers are present', () => {
		it('should not enable editMode', () => {
			const snap = new SnapTemplates(baseConfig);
			expect(snap.templates.settings.editMode).toBe(false);
		});
	});

	describe('context variable (getContext)', () => {
		it('should enable editMode and editUIMode when editor.mode is "ui"', () => {
			mockedGetContext.mockReturnValue({ editor: { mode: 'ui' } });

			const snap = new SnapTemplates(baseConfig);
			expect(snap.templates.settings.editMode).toBe(true);
		});

		it('should enable editMode but not editUIMode when editor.mode is "headless"', () => {
			mockedGetContext.mockReturnValue({ editor: { mode: 'headless' } });

			const snap = new SnapTemplates(baseConfig);
			expect(snap.templates.settings.editMode).toBe(true);
		});

		it('should not enable editMode for unknown editor.mode values', () => {
			mockedGetContext.mockReturnValue({ editor: { mode: 'unknown' } });

			const snap = new SnapTemplates(baseConfig);
			expect(snap.templates.settings.editMode).toBe(false);
		});

		it('should handle getContext throwing gracefully', () => {
			mockedGetContext.mockImplementation(() => {
				throw new Error('No script tag found');
			});

			const snap = new SnapTemplates(baseConfig);
			expect(snap.templates.settings.editMode).toBe(false);
		});
	});

	describe('cookie', () => {
		it('should enable editMode when editor cookie has any truthy value', () => {
			mockedCookiesGet.mockReturnValue('headless');

			const snap = new SnapTemplates(baseConfig);
			expect(snap.templates.settings.editMode).toBe(true);
		});

		it('should enable editMode when editor cookie is "ui"', () => {
			mockedCookiesGet.mockReturnValue('ui');

			const snap = new SnapTemplates(baseConfig);
			expect(snap.templates.settings.editMode).toBe(true);
		});

		it('should read the correct cookie name', () => {
			new SnapTemplates(baseConfig);
			expect(mockedCookiesGet).toHaveBeenCalledWith(TEMPLATE_EDITOR_COOKIE);
		});
	});

	describe('URL query parameter', () => {
		it('should enable editMode when URL contains editor param', () => {
			mockedUrl.mockReturnValue({
				base: '',
				params: { query: { [TEMPLATE_EDITOR_UI_PARAM]: '' }, hash: '' },
				url: () => '',
			});

			const snap = new SnapTemplates(baseConfig);
			expect(snap.templates.settings.editMode).toBe(true);
		});

		it('should not enable editMode when URL has unrelated params', () => {
			mockedUrl.mockReturnValue({
				base: '',
				params: { query: { other: 'value' }, hash: '' },
				url: () => '',
			});

			const snap = new SnapTemplates(baseConfig);
			expect(snap.templates.settings.editMode).toBe(false);
		});
	});

	describe('editUIMode vs headless mode', () => {
		it('context editor.mode="ui" activates editUIMode and sets cookie', async () => {
			mockedGetContext.mockReturnValue({ editor: { mode: 'ui' } });

			const snap = new SnapTemplates(baseConfig);
			expect(snap.templates.settings.editMode).toBe(true);

			await jest.runAllTimersAsync();

			// UI mode sets the editor cookie
			expect(cookies.set).toHaveBeenCalledWith(TEMPLATE_EDITOR_COOKIE, 'ui');
		});

		it('context editor.mode="headless" activates editMode without setting cookie or rendering UI', async () => {
			mockedGetContext.mockReturnValue({ editor: { mode: 'headless' } });

			const snap = new SnapTemplates(baseConfig);
			expect(snap.templates.settings.editMode).toBe(true);

			await jest.runAllTimersAsync();

			// Headless mode does NOT set the editor cookie (that's the UI-only path)
			expect(cookies.set).not.toHaveBeenCalled();
		});

		it('cookie="ui" activates editUIMode and sets cookie', async () => {
			mockedCookiesGet.mockReturnValue('ui');

			const snap = new SnapTemplates(baseConfig);
			expect(snap.templates.settings.editMode).toBe(true);

			await jest.runAllTimersAsync();

			expect(cookies.set).toHaveBeenCalledWith(TEMPLATE_EDITOR_COOKIE, 'ui');
		});

		it('URL param activates editUIMode and sets cookie', async () => {
			mockedUrl.mockReturnValue({
				base: '',
				params: { query: { [TEMPLATE_EDITOR_UI_PARAM]: '' }, hash: '' },
				url: () => '',
			});

			const snap = new SnapTemplates(baseConfig);
			expect(snap.templates.settings.editMode).toBe(true);

			await jest.runAllTimersAsync();

			expect(cookies.set).toHaveBeenCalledWith(TEMPLATE_EDITOR_COOKIE, 'ui');
		});

		it('cookie with non-"ui" value enables headless editMode without setting cookie', async () => {
			mockedCookiesGet.mockReturnValue('headless');

			const snap = new SnapTemplates(baseConfig);
			expect(snap.templates.settings.editMode).toBe(true);

			await jest.runAllTimersAsync();

			// editUIMode is false, so cookies.set should not be called
			expect(cookies.set).not.toHaveBeenCalled();
		});
	});

	describe('combined triggers', () => {
		it('context "headless" + cookie "ui" → UI mode wins (sets cookie)', async () => {
			mockedGetContext.mockReturnValue({ editor: { mode: 'headless' } });
			mockedCookiesGet.mockReturnValue('ui');

			const snap = new SnapTemplates(baseConfig);
			expect(snap.templates.settings.editMode).toBe(true);

			await jest.runAllTimersAsync();

			// cookie='ui' makes editUIMode true, so UI path is taken
			expect(cookies.set).toHaveBeenCalledWith(TEMPLATE_EDITOR_COOKIE, 'ui');
		});

		it('context "headless" + URL param → UI mode wins (sets cookie)', async () => {
			mockedGetContext.mockReturnValue({ editor: { mode: 'headless' } });
			mockedUrl.mockReturnValue({
				base: '',
				params: { query: { [TEMPLATE_EDITOR_UI_PARAM]: '' }, hash: '' },
				url: () => '',
			});

			const snap = new SnapTemplates(baseConfig);
			expect(snap.templates.settings.editMode).toBe(true);

			await jest.runAllTimersAsync();

			// URL param makes editUIMode true, so UI path is taken
			expect(cookies.set).toHaveBeenCalledWith(TEMPLATE_EDITOR_COOKIE, 'ui');
		});

		it('context "ui" + non-"ui" cookie → UI mode (context "ui" is sufficient)', async () => {
			mockedGetContext.mockReturnValue({ editor: { mode: 'ui' } });
			mockedCookiesGet.mockReturnValue('headless');

			const snap = new SnapTemplates(baseConfig);
			expect(snap.templates.settings.editMode).toBe(true);

			await jest.runAllTimersAsync();

			// editor.mode='ui' makes editUIMode true regardless of cookie value
			expect(cookies.set).toHaveBeenCalledWith(TEMPLATE_EDITOR_COOKIE, 'ui');
		});

		it('non-"ui" cookie + no other triggers → headless mode (no UI)', async () => {
			mockedCookiesGet.mockReturnValue('anything');

			const snap = new SnapTemplates(baseConfig);
			expect(snap.templates.settings.editMode).toBe(true);

			await jest.runAllTimersAsync();

			// editUIMode is false, so cookies.set is not called
			expect(cookies.set).not.toHaveBeenCalled();
		});

		it('all three triggers active → UI mode', async () => {
			mockedGetContext.mockReturnValue({ editor: { mode: 'ui' } });
			mockedCookiesGet.mockReturnValue('ui');
			mockedUrl.mockReturnValue({
				base: '',
				params: { query: { [TEMPLATE_EDITOR_UI_PARAM]: '' }, hash: '' },
				url: () => '',
			});

			const snap = new SnapTemplates(baseConfig);
			expect(snap.templates.settings.editMode).toBe(true);

			await jest.runAllTimersAsync();

			expect(cookies.set).toHaveBeenCalledWith(TEMPLATE_EDITOR_COOKIE, 'ui');
		});

		it('getContext throws + cookie "ui" → UI mode still works', async () => {
			mockedGetContext.mockImplementation(() => {
				throw new Error('No script tag');
			});
			mockedCookiesGet.mockReturnValue('ui');

			const snap = new SnapTemplates(baseConfig);
			expect(snap.templates.settings.editMode).toBe(true);

			await jest.runAllTimersAsync();

			expect(cookies.set).toHaveBeenCalledWith(TEMPLATE_EDITOR_COOKIE, 'ui');
		});

		it('getContext throws + non-"ui" cookie → headless mode', async () => {
			mockedGetContext.mockImplementation(() => {
				throw new Error('No script tag');
			});
			mockedCookiesGet.mockReturnValue('headless');

			const snap = new SnapTemplates(baseConfig);
			expect(snap.templates.settings.editMode).toBe(true);

			await jest.runAllTimersAsync();

			expect(cookies.set).not.toHaveBeenCalled();
		});
	});

	describe('constants', () => {
		it('should export correct cookie name', () => {
			expect(TEMPLATE_EDITOR_COOKIE).toBe('athosEditor');
		});

		it('should export correct UI param name', () => {
			expect(TEMPLATE_EDITOR_UI_PARAM).toBe('athos-editor');
		});
	});
});
