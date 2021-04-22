import { PaginationStore } from './PaginationStore';

import { SearchData } from '../../__mocks__/SearchData';
import { mockSearchController } from '../../__mocks__/mockControllers';
import { mockUrlManager } from '../../__mocks__/mockUrlManager';

describe('Pagination Store', () => {
	let searchData;
	beforeEach(() => {
		expect.hasAssertions();

		searchData = new SearchData();
	});

	it('sets properties to undefined given undefined', () => {
		const pagination = new PaginationStore(undefined, undefined);
		expect(pagination.page).toBeUndefined();
		expect(pagination.pageSize).toBeUndefined();
		expect(pagination.totalResults).toBeUndefined();
	});

	it('sets the page', () => {
		const paginationData = searchData.pagination;
		const pagination = new PaginationStore(mockSearchController, paginationData);
		expect(pagination.page).toBe(paginationData.page);
	});

	it('sets the pageSize', () => {
		const paginationData = searchData.pagination;
		const pagination = new PaginationStore(mockSearchController, paginationData);
		expect(pagination.pageSize).toBe(paginationData.pageSize);
	});

	it('sets the totalResults', () => {
		const paginationData = searchData.pagination;
		const pagination = new PaginationStore(mockSearchController, paginationData);
		expect(pagination.totalResults).toBe(paginationData.totalResults);
	});

	it('sets the default pageSizeOptions', () => {
		const paginationData = searchData.pagination;
		const pagination = new PaginationStore(mockSearchController, paginationData);
		expect(pagination.pageSizeOptions).toBeDefined;
		expect(pagination.pageSizeOptions[0].label).toBeDefined;
		expect(pagination.pageSizeOptions[0].value).toBeGreaterThan(0);
	});

	it('knows the begin number', () => {
		const paginationData = searchData.pagination;
		const pagination = new PaginationStore(mockSearchController, paginationData);
		expect(pagination.begin).toBeDefined;
		expect(pagination.begin).toBe(1);
	});

	it('knows the begin number when on a specific page', () => {
		searchData = new SearchData({ search: 'page10' });
		const paginationData = searchData.pagination;
		const pagination = new PaginationStore(mockSearchController, paginationData);
		expect(pagination.begin).toBeDefined;
		expect(pagination.begin).toBe(217);
	});

	it('knows the end number when not on the last page', () => {
		const paginationData = searchData.pagination;
		const pagination = new PaginationStore(mockSearchController, paginationData);
		expect(pagination.end).toBeDefined;

		expect(pagination.end).toEqual(paginationData.pageSize * paginationData.page);
		expect(pagination.end).toEqual(pagination.pageSize * pagination.page);
	});

	it('knows the end number when on the last page', () => {
		const paginationData = searchData.pagination;
		const pagination = new PaginationStore(mockSearchController, paginationData);
		const lastPage = Math.floor(pagination.totalResults / pagination.pageSize) + 1;
		pagination.page = lastPage;

		expect(pagination.end).toBe(pagination.totalResults);
	});

	it('does not have a next page when on the last page', () => {
		const paginationData = searchData.pagination;
		const pagination = new PaginationStore(mockSearchController, paginationData);
		const lastPage = Math.floor(pagination.totalResults / pagination.pageSize) + 1;
		pagination.page = lastPage;

		expect(pagination.next).toBeUndefined();
	});

	it('knows the total pages', () => {
		const paginationData = searchData.pagination;
		const pagination = new PaginationStore(mockSearchController, paginationData);
		expect(pagination.totalPages).toBeDefined;
		expect(pagination.totalPages).toEqual(Math.ceil(paginationData.totalResults / paginationData.pageSize));
	});

	it('can get multiple pages', () => {
		const paginationData = searchData.pagination;
		const pagination = new PaginationStore(mockSearchController, paginationData);
		expect(pagination.multiplePages).toBeDefined;
		expect(pagination.multiplePages).toEqual(Boolean(paginationData.pageSize < paginationData.totalResults));
	});

	it('can get current page', () => {
		const paginationData = searchData.pagination;
		const pagination = new PaginationStore(mockSearchController, paginationData);
		expect(pagination.current).toBeDefined;
		expect(pagination.current.number).toBeGreaterThan(0);
		expect(pagination.current.number).toBeLessThanOrEqual(pagination.last.number);
		expect(pagination.current.active).toBeTruthy;

		expect(pagination.current.url).toBeDefined();
		expect(pagination.current.url.href).not.toMatch('page');
	});

	it('can get first page', () => {
		const paginationData = searchData.pagination;
		const pagination = new PaginationStore(mockSearchController, paginationData);
		expect(pagination.first).toBeDefined;
		expect(pagination.first.number).toEqual(1);
		expect(pagination.first.active).toEqual(Boolean(paginationData.page === 1));
	});

	it('can get last page', () => {
		const paginationData = searchData.pagination;
		const pagination = new PaginationStore(mockSearchController, paginationData);
		expect(pagination.last).toBeDefined;
		expect(pagination.last.number).toEqual(pagination.totalPages);
		expect(pagination.last.active).toEqual(Boolean(pagination.totalPages === paginationData.page));
	});

	it('does not get next page when on last page', () => {
		const paginationData = searchData.pagination;
		paginationData.page = Math.floor(paginationData.totalResults / paginationData.perPage) + 1;

		const pagination = new PaginationStore(mockSearchController, paginationData);
		expect(pagination.next).toBeUndefined();
	});

	it('can get next page', () => {
		const paginationData = searchData.pagination;
		const pagination = new PaginationStore(mockSearchController, paginationData);

		expect(pagination.next).toBeDefined;
		expect(pagination.next.number).toEqual(paginationData.page + 1);
	});

	it('does not get prev page when on first page', () => {
		const paginationData = searchData.pagination;
		const pagination = new PaginationStore(mockSearchController, paginationData);

		expect(pagination.previous).toBeUndefined();
	});

	it('does not get prev page when on first page', () => {
		searchData = new SearchData({ search: 'page10' });
		const paginationData = searchData.pagination;
		const pagination = new PaginationStore(mockSearchController, paginationData);

		expect(pagination.previous).toBeDefined;
		expect(pagination.previous.number).toEqual(paginationData.page - 1);
	});

	it('can get prev page when not on first page', () => {
		const paginationData = searchData.pagination;
		const pagination = new PaginationStore(mockSearchController, paginationData);
		const newPage = 3;
		pagination.page = newPage;
		const page = pagination.previous;
		expect(page.number).toBe(newPage - 1);
	});

	it('creates a page object that uses the urlManager', () => {
		const paginationData = searchData.pagination;

		const mockSearchController = {
			config: {},
			urlManager: mockUrlManager,
		};

		mockSearchController.urlManager.set = jest.fn(() => mockUrlManager);

		const pagination = new PaginationStore(mockSearchController, paginationData);
		pagination.getPages(1);
		expect(mockSearchController.urlManager.set).toHaveBeenCalled();
	});

	it('can set page size', () => {
		const paginationData = searchData.pagination;

		const mockSearchController = {
			config: {},
			urlManager: mockUrlManager,
		};

		mockUrlManager.go = jest.fn();

		const pagination = new PaginationStore(mockSearchController, paginationData);
		pagination.setPageSize(30);

		expect(mockUrlManager.go).toHaveBeenCalled();
	});

	it('returns an empty array if min and max pages arent passed into getPages', () => {
		const paginationData = searchData.pagination;
		const pagination = new PaginationStore(mockSearchController, paginationData);
		expect(pagination.getPages(undefined, undefined)).toEqual([]);
	});

	it('returns an array of pages', () => {
		const paginationData = searchData.pagination;
		const pagination = new PaginationStore(mockSearchController, paginationData);
		expect(pagination.getPages(1, 5)).toHaveLength(6);
		expect(pagination.getPages(-1, 5)).toHaveLength(6);
	});

	it('returns an array of pages of length specified even when on the last page', () => {
		const paginationData = searchData.pagination;
		const pagination = new PaginationStore(mockSearchController, paginationData);
		const lastPage = Math.floor(pagination.totalResults / pagination.pageSize) + 1;
		pagination.page = lastPage;
		const pages = pagination.getPages(5);
		expect(pages).toHaveLength(5);
		expect(pages[0].number).toBe(lastPage - 4);
		expect(pages[pages.length - 1].number).toBe(lastPage);
		expect(pages[pages.length - 1]).toStrictEqual(pagination.last);
	});

	it('pages have proper values', () => {
		const paginationData = searchData.pagination;
		const pagination = new PaginationStore(mockSearchController, paginationData);
		const pages = pagination.getPages(1, 5);

		pages.forEach((page) => {
			expect(page.number).toBeDefined();
			expect(page.active).toBeDefined();
			expect(page.url).toBeDefined();
		});
	});

	it('pages have proper values when max is a float', () => {
		const paginationData = searchData.pagination;
		const pagination = new PaginationStore(mockSearchController, paginationData);
		const min = 3;
		const max = 5.3;
		const pages = pagination.getPages(min, max);
		expect(pages.length).toBe(Math.ceil(max) - min);
	});

	it('pages have proper values when max is a float', () => {
		searchData = new SearchData({ search: 'page10' });
		const paginationData = searchData.pagination;
		const pagination = new PaginationStore(mockSearchController, paginationData);
		const pages = pagination.getPages(5);
		expect(pages.length).toBe(5);
	});
});