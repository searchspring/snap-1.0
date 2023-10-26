import { h } from 'preact';
import { render } from '@testing-library/preact';
import { Sidebar } from './Sidebar';
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

let controller: any;

describe('Sidebar Component', () => {
	const mockClient = new MockClient(globals, {});
	mockClient.mockData.updateConfig({ search: 'filteredRangeBucket' });

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
		const rendered = render(<Sidebar controller={controller} />);
		const element = rendered.container.querySelector('.ss__sidebar');
		expect(element).toBeInTheDocument();
	});

	it('renders expected subComponents', () => {
		const rendered = render(<Sidebar controller={controller} />);
		const title = rendered.container.querySelector('.ss__sidebar__title');
		const summary = rendered.container.querySelector('.ss__filter-summary');
		const sortby = rendered.container.querySelector('.ss__sortby__select');
		const perpage = rendered.container.querySelector('.ss__perpage__select');
		const facets = rendered.container.querySelector('.ss__facets');

		expect(title).toBeInTheDocument();
		expect(summary).toBeInTheDocument();
		expect(sortby).toBeInTheDocument();
		expect(perpage).toBeInTheDocument();
		expect(facets).toBeInTheDocument();
	});

	it('can hideTitle', () => {
		const rendered = render(<Sidebar controller={controller} hideTitle={true} />);
		const element = rendered.container.querySelector('.ss__sidebar');
		const title = rendered.container.querySelector('.ss__sidebar__title');
		expect(element).toBeInTheDocument();
		expect(title).not.toBeInTheDocument();
	});

	it('has expected default titleText', () => {
		const text = 'Filters';
		const rendered = render(<Sidebar controller={controller} />);
		const title = rendered.container.querySelector('.ss__sidebar__title');
		expect(title?.innerHTML).toBe(text);
	});

	it('can change titleText', () => {
		const text = 'title text';
		const rendered = render(<Sidebar controller={controller} titleText={text} />);
		const title = rendered.container.querySelector('.ss__sidebar__title');
		expect(title?.innerHTML).toBe(text);
	});

	it('can hide hideFacets', () => {
		const rendered = render(<Sidebar controller={controller} hideFacets={true} />);
		const facets = rendered.container.querySelector('.ss__facets');
		expect(facets).not.toBeInTheDocument();
	});

	it('can hide perpage', () => {
		const rendered = render(<Sidebar controller={controller} hidePerPage={true} />);
		const perpage = rendered.container.querySelector('.ss__perpage__select');
		expect(perpage).not.toBeInTheDocument();
	});

	it('can hide hideSortBy', () => {
		const rendered = render(<Sidebar controller={controller} hideSortBy={true} />);
		const sortby = rendered.container.querySelector('.ss__sortby__select');
		expect(sortby).not.toBeInTheDocument();
	});

	it('can hide FilterSummary', () => {
		const rendered = render(<Sidebar controller={controller} hideFilterSummary={true} />);
		const summary = rendered.container.querySelector('.ss__filter-summary');
		expect(summary).not.toBeInTheDocument();
	});

	it('renders with classname', () => {
		const className = 'classy';
		const rendered = render(<Sidebar controller={controller} className={className} />);
		const element = rendered.container.querySelector('.ss__sidebar');
		expect(element).toHaveClass(className);
	});

	it('disables styles', () => {
		const rendered = render(<Sidebar controller={controller} disableStyles />);
		const element = rendered.container.querySelector('.ss__sidebar');
		expect(element?.classList).toHaveLength(1);
	});

	describe('Sidebar theming works', () => {
		it('is themeable with ThemeProvider', () => {
			const globalTheme = {
				components: {
					sidebar: {
						className: 'classy',
					},
				},
			};
			const rendered = render(
				<ThemeProvider theme={globalTheme}>
					<Sidebar controller={controller} />
				</ThemeProvider>
			);
			const element = rendered.container.querySelector('.ss__sidebar');
			expect(element).toBeInTheDocument();
			expect(element).toHaveClass(globalTheme.components.sidebar.className);
		});

		it('is themeable with theme prop', () => {
			const propTheme = {
				components: {
					sidebar: {
						className: 'classy',
					},
				},
			};
			const rendered = render(<Sidebar controller={controller} theme={propTheme} />);
			const element = rendered.container.querySelector('.ss__sidebar');
			expect(element).toBeInTheDocument();
			expect(element).toHaveClass(propTheme.components.sidebar.className);
		});

		it('is theme prop overrides ThemeProvider', () => {
			const globalTheme = {
				components: {
					sidebar: {
						className: 'not classy',
					},
				},
			};
			const propTheme = {
				components: {
					sidebar: {
						className: 'classy',
					},
				},
			};
			const rendered = render(
				<ThemeProvider theme={globalTheme}>
					<Sidebar controller={controller} theme={propTheme} />
				</ThemeProvider>
			);

			const element = rendered.container.querySelector('.ss__sidebar');
			expect(element).toBeInTheDocument();
			expect(element).toHaveClass(propTheme.components.sidebar.className);
			expect(element).not.toHaveClass(globalTheme.components.sidebar.className);
		});
	});
});