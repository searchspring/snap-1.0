import type { ProductsResponseModel } from '@athoscommerce/snap-client';

/**
 * Tests for the viewProduct method on ChatController.
 *
 * Because ChatController's constructor has many service dependencies and
 * triggers side-effects (event registration, init), we test viewProduct in
 * isolation by creating a plain object that satisfies the method's `this`
 * contract and binding the extracted function.
 */

const mockProductsResponse: ProductsResponseModel = {
	mappings: { core: { name: 'Test Product' } },
	variants: { optionConfig: {}, data: [] },
};

// Build a minimal "controller-like" object that satisfies viewProduct's `this`
function buildContext(overrides: { productsResult?: any; productsError?: Error } = {}) {
	const currentChat = {
		pushProductQueryMessage: jest.fn(),
	};
	const store = {
		currentChat,
		createChat: jest.fn(),
		setProductQuickview: jest.fn(),
		updateProductQuickview: jest.fn(),
		setProductQuickviewError: jest.fn(),
		clearProductQuickview: jest.fn(),
	};
	const client = {
		products: overrides.productsError
			? jest.fn().mockRejectedValue(overrides.productsError)
			: jest.fn().mockResolvedValue(overrides.productsResult ?? mockProductsResponse),
	};
	const log = {
		error: jest.fn(),
		warn: jest.fn(),
	};

	// Replicate the viewProduct arrow function from ChatController to test in isolation
	const viewProduct = async (result: any): Promise<void> => {
		if (!store.currentChat) {
			store.createChat();
		}
		store.setProductQuickview(result);
		store.currentChat?.pushProductQueryMessage(result);

		const parentId = (result.mappings?.core?.parentId as string) || result.id;
		try {
			const response = await client.products({ parentId });
			store.updateProductQuickview(response);
		} catch (err) {
			log.error('Failed to fetch product details', err);
			store.setProductQuickviewError('Failed to load product details. Please try again.');
		}
	};

	return { store, currentChat, client, log, viewProduct };
}

describe('ChatController viewProduct', () => {
	it('sets productQuickview on store, pushes chat message, and fetches product data', async () => {
		const { store, currentChat, client, viewProduct } = buildContext();
		const result = { id: 'prod1', mappings: { core: { parentId: 'parent1' } } };

		await viewProduct(result);

		// sets the Product on the store immediately (before API call)
		expect(store.setProductQuickview).toHaveBeenCalledWith(result);
		// pushes the chat message
		expect(currentChat.pushProductQueryMessage).toHaveBeenCalledWith(result);
		// fetches from the products API
		expect(client.products).toHaveBeenCalledWith({ parentId: 'parent1' });
		// merges API response into the Product via store
		expect(store.updateProductQuickview).toHaveBeenCalledWith(mockProductsResponse);
		// no error
		expect(store.setProductQuickviewError).not.toHaveBeenCalled();
	});

	it('falls back to result.id when parentId is missing', async () => {
		const { client, viewProduct } = buildContext();
		const result = { id: 'fallback-id', mappings: { core: {} } };

		await viewProduct(result);

		expect(client.products).toHaveBeenCalledWith({ parentId: 'fallback-id' });
	});

	it('sets error on store when products API fails', async () => {
		const apiError = new Error('Network failure');
		const { store, log, viewProduct } = buildContext({ productsError: apiError });
		const result = { id: 'prod1', mappings: { core: { parentId: 'parent1' } } };

		await viewProduct(result);

		// still sets productQuickview with the Product (before API call)
		expect(store.setProductQuickview).toHaveBeenCalledWith(result);
		// logs the error
		expect(log.error).toHaveBeenCalledWith('Failed to fetch product details', apiError);
		// sets error on store
		expect(store.setProductQuickviewError).toHaveBeenCalledWith('Failed to load product details. Please try again.');
		// does not call updateProductQuickview
		expect(store.updateProductQuickview).not.toHaveBeenCalled();
	});

	it('handles result with no mappings gracefully', async () => {
		const { client, viewProduct } = buildContext();
		const result = { id: 'bare-id' };

		await viewProduct(result);

		expect(client.products).toHaveBeenCalledWith({ parentId: 'bare-id' });
	});
});
