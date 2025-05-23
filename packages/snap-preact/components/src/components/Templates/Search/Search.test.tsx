import { h } from 'preact';
import { render, waitFor } from '@testing-library/preact';
import { ThemeProvider } from '../../../providers';
import { v4 as uuidv4 } from 'uuid';
import { SearchStore, SearchStoreConfig } from '@searchspring/snap-store-mobx';
import { SearchController, SearchControllerConfig } from '@searchspring/snap-controller';
import { EventManager } from '@searchspring/snap-event-manager';
import { Profiler } from '@searchspring/snap-profiler';
import { Logger } from '@searchspring/snap-logger';
import { Tracker } from '@searchspring/snap-tracker';
import { MockClient } from '@searchspring/snap-shared';
import { QueryStringTranslator, UrlManager, reactLinker } from '@searchspring/snap-url-manager';
import { Search } from './Search';
import userEvent from '@testing-library/user-event';

const globals = { siteId: '8uyt2m' };

const searchConfigDefault: SearchControllerConfig = {
	id: 'search',
	globals: {
		filters: [],
	},
	settings: {},
};

let searchConfig: SearchStoreConfig;
const urlManager = new UrlManager(new QueryStringTranslator(), reactLinker);
const services = { urlManager };
let controller: SearchController;

const mockClient = new MockClient(globals, {});

describe('Search Template Component', () => {
	beforeEach(async () => {
		searchConfig = { ...searchConfigDefault };
		searchConfig.id = uuidv4().split('-').join('');

		controller = new SearchController(searchConfig, {
			client: mockClient,
			store: new SearchStore(searchConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});

		await controller.search();
	});

	it('renders', () => {
		const rendered = render(<Search controller={controller} />);
		const element = rendered.container.querySelector('.ss__search')!;
		expect(element).toBeInTheDocument();
	});

	it('renders expected sub components', () => {
		const rendered = render(<Search controller={controller} />);
		const element = rendered.container.querySelector('.ss__search')!;
		const sidebarWrapper = rendered.container.querySelector('.ss__search__sidebar');
		const results = rendered.container.querySelector('.ss__results');
		const noResults = rendered.container.querySelector('.ss__no-results');
		const sidebar = rendered.container.querySelector('.ss__sidebar');
		const topToolBar = rendered.container.querySelector('.ss__search__header-section__toolbar--top-toolbar');
		const middleToolBar = rendered.container.querySelector('.ss__search__content__toolbar--middle-toolbar');
		const bottomToolBar = rendered.container.querySelector('.ss__search__content__toolbar--bottom-toolbar');
		const toggleFiltersButton = rendered.container.querySelector('.ss__button[ss-name="sidebar-toggle"]');
		const searchHeader = rendered.container.querySelector('.ss__search-header');
		const mobileSidebar = rendered.container.querySelector('.ss__mobile-sidebar__slideout');

		expect(element).toBeInTheDocument();
		expect(sidebarWrapper).toBeInTheDocument();
		expect(results).toBeInTheDocument();
		expect(noResults).not.toBeInTheDocument();
		expect(sidebar).toBeInTheDocument();
		expect(topToolBar).toBeInTheDocument();
		expect(middleToolBar).toBeInTheDocument();
		expect(bottomToolBar).toBeInTheDocument();
		expect(searchHeader).toBeInTheDocument();
		expect(mobileSidebar).not.toBeInTheDocument();
		expect(toggleFiltersButton).not.toBeInTheDocument();
	});

	it('renders with merchandising banners', async () => {
		mockClient.mockData.updateConfig({ search: 'merchandising' });

		searchConfig = { ...searchConfigDefault };
		searchConfig.id = uuidv4().split('-').join('');

		controller = new SearchController(searchConfig, {
			client: mockClient,
			store: new SearchStore(searchConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals),
		});

		await controller.search();

		const rendered = render(<Search controller={controller} />);

		const element = rendered.container.querySelector('.ss__search');
		const banners = rendered.container.querySelectorAll('.ss__banner');
		const headerBanner = rendered.container.querySelector('.ss__banner--header');
		const leftBanner = rendered.container.querySelector('.ss__banner--left');
		const bannerBanner = rendered.container.querySelector('.ss__banner--banner');
		const footerBanner = rendered.container.querySelector('.ss__banner--footer');

		expect(element).toBeInTheDocument();
		expect(banners).toHaveLength(4);
		expect(headerBanner).toBeInTheDocument();
		expect(bannerBanner).toBeInTheDocument();
		expect(footerBanner).toBeInTheDocument();
		expect(leftBanner).toBeInTheDocument();

		mockClient.mockData.updateConfig({ search: 'default' });
	});

	it('can hide sidebar', () => {
		const rendered = render(<Search controller={controller} hideSidebar />);
		const element = rendered.container.querySelector('.ss__search')!;
		const sidebar = rendered.container.querySelector('.ss__sidebar');

		expect(element).toBeInTheDocument();
		expect(sidebar).not.toBeInTheDocument();
	});

	it('can hide toptoolbar', () => {
		const rendered = render(<Search controller={controller} hideTopToolbar />);
		const element = rendered.container.querySelector('.ss__search')!;
		const topToolBar = rendered.container.querySelector('.ss__search__content__toolbar--topToolBar');

		expect(element).toBeInTheDocument();
		expect(topToolBar).not.toBeInTheDocument();
	});

	it('can hide middleToolbar', () => {
		const rendered = render(<Search controller={controller} hideMiddleToolbar />);
		const element = rendered.container.querySelector('.ss__search')!;
		const middleToolBar = rendered.container.querySelector('.ss__search__content__toolbar--middleToolBar');

		expect(element).toBeInTheDocument();
		expect(middleToolBar).not.toBeInTheDocument();
	});

	it('can hide bottomToolbar', () => {
		const rendered = render(<Search controller={controller} hideBottomToolBar />);
		const element = rendered.container.querySelector('.ss__search')!;
		const bottomToolBar = rendered.container.querySelector('.ss__search__content__toolbar--bottomToolBar');

		expect(element).toBeInTheDocument();
		expect(bottomToolBar).not.toBeInTheDocument();
	});

	it('renders no results when needed', async () => {
		mockClient.mockData.updateConfig({ search: 'noResults' });

		await controller.search();

		const rendered = render(<Search controller={controller} />);
		const element = rendered.container.querySelector('.ss__search')!;
		const noResults = rendered.container.querySelector('.ss__no-results');
		const results = rendered.container.querySelector('.ss__results');

		expect(element).toBeInTheDocument();
		expect(results).not.toBeInTheDocument();
		expect(noResults).toBeInTheDocument();

		mockClient.mockData.updateConfig({ search: 'default' });
	});

	it('can set custom toggle filters button text', async () => {
		const buttonText = 'click me to open sidebar';

		const rendered = render(<Search controller={controller} toggleSidebarButtonText={buttonText} hideToggleSidebarButton={false} />);
		const element = rendered.container.querySelector('.ss__search')!;
		let button = rendered.container.querySelector('.ss__button[ss-name="sidebar-toggle"]');
		const sidebar = rendered.container.querySelector('.ss__sidebar');

		expect(element).toBeInTheDocument();
		expect(button).toBeInTheDocument();
		expect(sidebar).toBeInTheDocument();
		expect(button).toHaveTextContent(buttonText);

		await userEvent.click(button!);

		await waitFor(() => {
			const sidebar = rendered.container.querySelector('.ss__sidebar');
			expect(sidebar).not.toBeInTheDocument();
		});

		button = rendered.container.querySelector('.ss__button[ss-name="sidebar-toggle"]');
		expect(button).toBeInTheDocument();
		await userEvent.click(button!);

		await waitFor(() => {
			const sidebar = rendered.container.querySelector('.ss__sidebar');
			expect(sidebar).toBeInTheDocument();
		});
	});

	it('can hide the toggle sidebar button', async () => {
		const buttonText = 'click me to open sidebar';

		const rendered = render(<Search controller={controller} hideToggleSidebarButton={true} toggleSidebarButtonText={buttonText} />);
		const element = rendered.container.querySelector('.ss__search')!;
		const button = rendered.container.querySelector('.ss__button[ss-name="sidebar-toggle"]');
		const sidebar = rendered.container.querySelector('.ss__sidebar');

		expect(element).toBeInTheDocument();
		expect(button).not.toBeInTheDocument();
		expect(sidebar).toBeInTheDocument();
	});

	it('hides the sidebar on mobile', () => {
		//override matchmedia to always return true
		Object.defineProperty(window, 'matchMedia', {
			writable: true,
			value: jest.fn().mockImplementation((query) => ({
				matches: true, // always set as true
				media: query,
				onchange: null,
				addListener: jest.fn(), // Deprecated
				removeListener: jest.fn(), // Deprecated
				addEventListener: jest.fn(),
				removeEventListener: jest.fn(),
				dispatchEvent: jest.fn(),
			})),
		});

		const rendered = render(<Search controller={controller} />);
		const element = rendered.container.querySelector('.ss__search')!;
		const sidebar = rendered.container.querySelector('.ss__sidebar');

		expect(element).toBeInTheDocument();
		expect(sidebar).not.toBeInTheDocument();
	});

	it('renders with classname', () => {
		const className = 'classy';
		const rendered = render(<Search controller={controller} className={className} />);

		const element = rendered.container.querySelector('.ss__search');
		expect(element).toBeInTheDocument();
		expect(element).toHaveClass(className);
	});

	it('can disable styles', () => {
		const rendered = render(<Search controller={controller} disableStyles />);

		const element = rendered.container.querySelector('.ss__search');

		expect(element?.classList).toHaveLength(2);
	});

	describe('Search lang works', () => {
		// need to mock `matchMedia` to ensure we are not using "mobile" experience
		beforeAll(() => {
			Object.defineProperty(window, 'matchMedia', {
				writable: true,
				value: jest.fn().mockImplementation((query) => ({
					matches: false, // return false
					media: query,
					onchange: null,
					addListener: jest.fn(), // Deprecated
					removeListener: jest.fn(), // Deprecated
					addEventListener: jest.fn(),
					removeEventListener: jest.fn(),
					dispatchEvent: jest.fn(),
				})),
			});
		});

		const selector = '.ss__search';

		it('immediately available lang options', async () => {
			const langOptions = ['toggleSidebarButtonText'];

			//text attributes/values
			const value = 'custom value';
			const altText = 'custom alt';
			const ariaLabel = 'custom label';
			const ariaValueText = 'custom value text';
			const title = 'custom title';

			const valueMock = jest.fn(() => value);
			const altMock = jest.fn(() => altText);
			const labelMock = jest.fn(() => ariaLabel);
			const valueTextMock = jest.fn(() => ariaValueText);
			const titleMock = jest.fn(() => title);

			const langObjs = [
				{
					value: value,
					attributes: {
						alt: altText,
						'aria-label': ariaLabel,
						'aria-valuetext': ariaValueText,
						title: title,
					},
				},
				{
					value: valueMock,
					attributes: {
						alt: altMock,
						'aria-label': labelMock,
						'aria-valuetext': valueTextMock,
						title: titleMock,
					},
				},
				{
					value: `<div>${value}</div>`,
					attributes: {
						alt: altText,
						'aria-label': ariaLabel,
						'aria-valuetext': ariaValueText,
						title: title,
					},
				},
			];

			langOptions.forEach((option) => {
				langObjs.forEach((langObj) => {
					const lang = {
						[`${option}`]: langObj,
					};

					// @ts-ignore
					const rendered = render(<Search controller={controller} lang={lang} hideToggleSidebarButton={false} />);
					const element = rendered.container.querySelector(selector);
					expect(element).toBeInTheDocument();
					let langElem;
					if (option == 'toggleSidebarButtonText') {
						langElem = rendered.container.querySelector(`.ss__button[ss-name="sidebar-toggle"] [ss-lang=${option}]`);
					} else {
						langElem = rendered.container.querySelector(`[ss-lang=${option}]`);
					}
					expect(langElem).toBeInTheDocument();
					if (typeof langObj.value == 'function') {
						expect(langElem?.innerHTML).toBe(value);
						expect(valueMock).toHaveBeenCalledWith({ filters: controller.store.filters, sidebarOpenState: true });
					} else {
						expect(langElem?.innerHTML).toBe(langObj.value);
					}

					expect(langElem).toHaveAttribute('alt', altText);
					expect(langElem).toHaveAttribute('aria-label', ariaLabel);
					expect(langElem).toHaveAttribute('aria-valuetext', ariaValueText);
					expect(langElem).toHaveAttribute('title', title);

					jest.restoreAllMocks();
				});
			});
		});
	});

	it('is themeable with ThemeProvider', () => {
		const theme = {
			components: {
				search: {
					className: 'classy',
				},
			},
		};
		const rendered = render(
			<ThemeProvider theme={theme}>
				<Search controller={controller} />
			</ThemeProvider>
		);
		const element = rendered.container.querySelector('.ss__search')!;
		expect(element).toHaveClass(theme.components.search.className);
	});

	it('is themeable with theme prop', () => {
		const theme = {
			components: {
				search: {
					className: 'classy',
				},
			},
		};
		const rendered = render(<Search controller={controller} theme={theme} />);
		const element = rendered.container.querySelector('.ss__search')!;
		expect(element).toHaveClass(theme.components.search.className);
	});

	it('is themeable with theme prop overrides ThemeProvider', () => {
		const theme = {
			components: {
				search: {
					className: 'notClassy',
				},
			},
		};

		const componentTheme = {
			components: {
				search: {
					className: 'classy',
				},
			},
		};

		const rendered = render(
			<ThemeProvider theme={theme}>
				<Search controller={controller} theme={componentTheme} />
			</ThemeProvider>
		);

		const element = rendered.container.querySelector('.ss__search')!;
		expect(element).toHaveClass(componentTheme.components.search.className);
		expect(element).not.toHaveClass(theme.components.search.className);
	});
});
