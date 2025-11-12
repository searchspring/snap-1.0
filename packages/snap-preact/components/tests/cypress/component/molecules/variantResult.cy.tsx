import { h } from 'preact';
import { VariantResult } from '../../../../src/components/Molecules/VariantResult';
import { FALLBACK_IMAGE_URL } from '../../../../src/components/Atoms/Image';
import { ThemeProvider } from '../../../../src/providers';
import { ResultsLayout } from '../../../../src/types';
import { RecommendationStore } from '@searchspring/snap-store-mobx';
import type { RecommendationStoreConfig } from '@searchspring/snap-store-mobx';
import { mount } from '@cypress/react';
import { QueryStringTranslator, reactLinker, UrlManager } from '@searchspring/snap-url-manager';
import { Client } from '@searchspring/snap-client';
import { RecommendationController } from '@searchspring/snap-controller';
import { EventManager } from '@searchspring/snap-event-manager';
import { Profiler } from '@searchspring/snap-profiler';
import { Logger } from '@searchspring/snap-logger';
import { Tracker } from '@searchspring/snap-tracker';
import meta from '../../fixtures/meta.json';
import json from '../../fixtures/results-bundle.json';
import profile from '../../fixtures/profile-bundle.json';

const globals = { siteId: '8uyt2m' };

const recommendConfig: RecommendationStoreConfig = {
	id: 'search',
	tag: 'bundle',
	globals: {
		products: ['C-AD-W1-1869P'],
	},
	settings: {
		variants: {
			field: 'ss_variants',
		},
	},
};

const urlManager = new UrlManager(new QueryStringTranslator(), reactLinker);
const services = {
	urlManager,
};

const client = new Client(globals, {});

let controller: RecommendationController;

describe('Result Component E2E', () => {
	before(() => {
		cy.intercept('*recommend*', json);
		cy.intercept('*profile*', profile);
		cy.intercept('*meta*', meta);
	});

	beforeEach(async () => {
		controller = new RecommendationController(recommendConfig, {
			client: client,
			store: new RecommendationStore(recommendConfig, services),
			urlManager,
			eventManager: new EventManager(),
			profiler: new Profiler(),
			logger: new Logger(),
			tracker: new Tracker(globals, { mode: 'development' }),
		});
		await controller.search();
	});

	it('renders', () => {
		mount(<VariantResult controller={controller} result={controller.store.results[0]} />);
		cy.get('.ss__result').should('exist');
	});

	it('renders with "sale" classname when on sale', () => {
		const product = controller.store.results[0];
		// force product to NOT be on sale
		product.mappings.core!.price = 1.99;
		product.mappings.core!.msrp = 1.99;

		mount(<VariantResult result={product} />);
		cy.get('.ss__result').should('exist').and('not.have.class', 'ss__result--sale');
	});

	it('renders with "sale" classname when on sale', () => {
		const product = controller.store.results[0];

		// force product to be on sale
		product.mappings.core!.price = 0.99;
		product.mappings.core!.msrp = 1.99;

		mount(<VariantResult result={product} />);
		cy.get('.ss__result').should('exist').and('have.class', 'ss__result--sale');
	});

	it('renders image', () => {
		mount(<VariantResult controller={controller} result={controller.store.results[0]} />);
		cy.get('.ss__result .ss__result__image-wrapper .ss__image img').should('exist');
	});

	it('renders title', () => {
		mount(<VariantResult controller={controller} result={controller.store.results[0]} />);
		cy.get('.ss__result .ss__result__details .ss__result__details__title')
			.should('exist')
			.and('contain.text', controller.store.results[0].mappings?.core?.name);
	});

	it('renders pricing', () => {
		const product = controller.store.results[0];

		// force product to be on sale
		product.mappings.core!.price = 0.99;
		product.mappings.core!.msrp = 1.99;

		mount(<VariantResult controller={controller} result={product} />);
		cy.get('.ss__result .ss__result__details__pricing .ss__price').should('exist').and('have.length', 2);
	});

	it('renders details', () => {
		const args = {
			result: controller.store.results[0],
			detailSlot: <div className="details">Add to cart</div>,
		};
		mount(<VariantResult {...args} />);
		cy.get('.ss__result .ss__result__details .details').should('exist').and('contain.text', 'Add to cart');
	});

	it('hides various sections', () => {
		const args = {
			result: controller.store.results[0],
			hideBadge: true,
			hideTitle: true,
			hidePricing: true,
		};
		mount(<VariantResult {...args} />);

		cy.get('.ss__result .ss__result__image-wrapper .ss__badge').should('not.exist');
		cy.get('.ss__result .ss__result__image-wrapper .ss__overlay-badge').should('not.exist');
		cy.get('.ss__result .ss__result__image-wrapper .ss__callout-badge').should('not.exist');
		cy.get('.ss__result .ss__result__details .ss__result__wrapper__details__title').should('not.exist');
		cy.get('.ss__result .ss__result__details__pricing .ss__price').should('not.exist');
	});

	it('hides image section', () => {
		const args = {
			result: controller.store.results[0],
			hideImage: true,
		};
		mount(<VariantResult {...args} />);
		cy.get('.ss__result .ss__result__image-wrapper .ss__image').should('not.exist');
	});

	it('should display a fallback image', () => {
		controller.store.results[0].mappings!.core!.imageUrl = '';
		mount(<VariantResult result={controller.store.results[0]} />);
		cy.get('.ss__result .ss__result__image-wrapper .ss__image img').should('have.attr', 'src', FALLBACK_IMAGE_URL);
	});

	it('can change the layout', () => {
		mount(<VariantResult controller={controller} result={controller.store.results[0]} layout={ResultsLayout.list} />);
		cy.get('.ss__result').should('have.class', `ss__result--${ResultsLayout.list}`);
	});

	it('can truncate the title', () => {
		const args = {
			result: controller.store.results[0],
			truncateTitle: {
				limit: 3,
				append: '...',
			},
		};
		mount(<VariantResult {...args} />);
		cy.get('.ss__result__details__title a').should('exist').and('contain.text', '...').invoke('text').should('have.length.at.most', 6);
	});

	it('does not render ratings or add to cart buttons by default', () => {
		mount(<VariantResult result={controller.store.results[0]} />);

		cy.get('.ss__result').should('exist');
		cy.get('.ss__result__rating').should('not.exist');
		cy.get('.ss__result__button--addToCart').should('not.exist');
	});

	it('can render ratings', () => {
		mount(<VariantResult result={controller.store.results[0]} hideRating={false} />);

		cy.get('.ss__result').should('exist');
		cy.get('.ss__result__rating').should('exist');
	});

	it('can render addToCart button', () => {
		const _controller = {
			addToCart: cy.spy().as('addToCartSpy'),
		};

		mount(<VariantResult controller={_controller as any} result={controller.store.results[0]} hideAddToCartButton={false} />);

		cy.get('.ss__result').should('exist');
		cy.get('.ss__result__button--addToCart').should('exist').and('contain.text', 'Add To Cart').click();

		cy.get('@addToCartSpy').should('have.been.calledWith', [controller.store.results[0]]);
		cy.get('.ss__result__button--addToCart').should('contain.text', 'Added!');

		// Wait for timeout and check text changes back
		cy.wait(2000);
		cy.get('.ss__result__button--addToCart').should('contain.text', 'Add To Cart');
	});

	it('can render addToCart button with custom text and timeout', () => {
		const normalText = 'normal atc';
		const successText = 'success atc';
		const timeout = 1000; // Reduced for faster test
		const _controller = {
			addToCart: cy.spy().as('addToCartSpy'),
		};

		mount(
			<VariantResult
				controller={_controller as any}
				result={controller.store.results[0]}
				hideAddToCartButton={false}
				addToCartButtonText={normalText}
				addToCartButtonSuccessText={successText}
				addToCartButtonSuccessTimeout={timeout}
			/>
		);

		cy.get('.ss__result').should('exist');
		cy.get('.ss__result__button--addToCart').should('exist').and('contain.text', normalText).click();

		cy.get('@addToCartSpy').should('have.been.calledWith', [controller.store.results[0]]);
		cy.get('.ss__result__button--addToCart').should('contain.text', successText);

		cy.wait(timeout);
		cy.get('.ss__result__button--addToCart').should('contain.text', normalText);
	});

	it('can pass additional function to call on addToCart button click', () => {
		const customFuncSpy = cy.spy().as('customFuncSpy');
		const _controller = {
			addToCart: cy.spy().as('addToCartSpy'),
		};

		mount(
			<VariantResult
				onAddToCartClick={customFuncSpy}
				controller={_controller as any}
				result={controller.store.results[0]}
				hideAddToCartButton={false}
			/>
		);

		cy.get('.ss__result').should('exist');
		cy.get('.ss__result__button--addToCart').should('exist').click();

		cy.get('@addToCartSpy').should('have.been.calledWith', [controller.store.results[0]]);
		cy.get('@customFuncSpy').should('have.been.called');
	});

	it('can show variant selections with hideVariantSelections false', () => {
		// First, let's add variant data to a result
		const resultWithVariants = controller.store.results[0];

		// Mock variant data similar to your other variant tests
		const mockVariantData = [
			{
				id: 'variant1',
				attributes: {
					available: true,
					name: 'Blue Variant',
					imageUrl: 'https://example.com/blue.jpg',
				},
				mappings: {
					core: {
						available: true,
						name: 'Blue Variant',
						imageUrl: 'https://example.com/blue.jpg',
					},
				},
				badges: [],
				options: {
					color: {
						value: 'blue',
					},
					size: {
						value: 'large',
					},
				},
			},
			{
				id: 'variant2',
				attributes: {
					available: true,
					name: 'Red Variant',
					imageUrl: 'https://example.com/red.jpg',
				},
				mappings: {
					core: {
						available: true,
						name: 'Red Variant',
						imageUrl: 'https://example.com/red.jpg',
					},
				},
				badges: [],
				options: {
					color: {
						value: 'red',
					},
					size: {
						value: 'medium',
					},
				},
			},
		];

		resultWithVariants.variants?.update(mockVariantData);

		mount(<VariantResult controller={controller} result={controller.store.results[0]} hideVariantSelections={false} />);

		cy.get('.ss__result').should('exist');
		cy.get('.ss__result__details__variant-selection .ss__variant-selection').should('exist');
	});

	it('hides variant selections by default', () => {
		// First, let's add variant data to a result
		const resultWithVariants = controller.store.results[0];

		// Mock variant data similar to your other variant tests
		const mockVariantData = [
			{
				id: 'variant1',
				attributes: {
					available: true,
					name: 'Blue Variant',
					imageUrl: 'https://example.com/blue.jpg',
				},
				mappings: {
					core: {
						available: true,
						name: 'Blue Variant',
						imageUrl: 'https://example.com/blue.jpg',
					},
				},
				badges: [],
				options: {
					color: {
						value: 'blue',
					},
					size: {
						value: 'large',
					},
				},
			},
			{
				id: 'variant2',
				attributes: {
					available: true,
					name: 'Red Variant',
					imageUrl: 'https://example.com/red.jpg',
				},
				mappings: {
					core: {
						available: true,
						name: 'Red Variant',
						imageUrl: 'https://example.com/red.jpg',
					},
				},
				badges: [],
				options: {
					color: {
						value: 'red',
					},
					size: {
						value: 'medium',
					},
				},
			},
		];

		resultWithVariants.variants?.update(mockVariantData);

		mount(<VariantResult controller={controller} result={resultWithVariants} />);

		cy.get('.ss__result').should('exist');
		cy.get('.ss__result__details__variant-selection').should('not.exist');
	});

	it('hides variant selections when hideVariantSelections is true', () => {
		// First, let's add variant data to a result
		const resultWithVariants = controller.store.results[0];

		// Mock variant data similar to your other variant tests
		const mockVariantData = [
			{
				id: 'variant1',
				attributes: {
					available: true,
					name: 'Blue Variant',
					imageUrl: 'https://example.com/blue.jpg',
				},
				mappings: {
					core: {
						available: true,
						name: 'Blue Variant',
						imageUrl: 'https://example.com/blue.jpg',
					},
				},
				badges: [],
				options: {
					color: {
						value: 'blue',
					},
					size: {
						value: 'large',
					},
				},
			},
			{
				id: 'variant2',
				attributes: {
					available: true,
					name: 'Red Variant',
					imageUrl: 'https://example.com/red.jpg',
				},
				mappings: {
					core: {
						available: true,
						name: 'Red Variant',
						imageUrl: 'https://example.com/red.jpg',
					},
				},
				badges: [],
				options: {
					color: {
						value: 'red',
					},
					size: {
						value: 'medium',
					},
				},
			},
		];

		resultWithVariants.variants?.update(mockVariantData);

		mount(<VariantResult controller={controller} result={resultWithVariants} hideVariantSelections={true} />);

		cy.get('.ss__result').should('exist');
		// Variant container might still exist but selections should be hidden
		cy.get('.ss__result__details__variant-selection .ss__variant-selection__dropdown').should('not.exist');
	});

	it('renders with classname', () => {
		const className = 'classy';
		mount(<VariantResult result={controller.store.results[0]} className={className} />);

		cy.get('.ss__result').should('exist').and('have.class', className);
	});

	it('can disable styles', () => {
		mount(<VariantResult result={controller.store.results[0]} disableStyles={true} />);

		cy.get('.ss__result')
			.should('exist')
			.then(($el) => {
				expect($el[0].classList.length).to.equal(2);
			});
	});
});

describe('Result Lang E2E', () => {
	beforeEach(() => {
		// Mock matchMedia for consistent testing
		cy.window().then((win) => {
			Object.defineProperty(win, 'matchMedia', {
				writable: true,
				value: cy.stub().returns({
					matches: false,
					media: '',
					onchange: null,
					addListener: cy.stub(),
					removeListener: cy.stub(),
					addEventListener: cy.stub(),
					removeEventListener: cy.stub(),
					dispatchEvent: cy.stub(),
				}),
			});
		});
	});

	it('immediately available lang options', () => {
		const value = 'custom value';
		const altText = 'custom alt';
		const ariaLabel = 'custom label';
		const ariaValueText = 'custom value text';
		const title = 'custom title';

		const lang = {
			addToCartButtonText: {
				value: value,
				attributes: {
					alt: altText,
					'aria-label': ariaLabel,
					'aria-valuetext': ariaValueText,
					title: title,
				},
			},
		};

		mount(<VariantResult result={controller.store.results[0]} lang={lang} hideAddToCartButton={false} />);

		cy.get('.ss__result').should('exist');
		cy.get('[ss-lang=addToCartButtonText]')
			.should('exist')
			.and('contain.html', value)
			.and('have.attr', 'alt', altText)
			.and('have.attr', 'aria-label', ariaLabel)
			.and('have.attr', 'aria-valuetext', ariaValueText)
			.and('have.attr', 'title', title);
	});

	it('handles function values in lang options', () => {
		const value = 'custom value';
		const valueMock = cy.stub().returns(value);

		const lang = {
			addToCartButtonText: {
				value: valueMock,
				attributes: {},
			},
		};

		mount(<VariantResult result={controller.store.results[0]} lang={lang} hideAddToCartButton={false} />);

		cy.get('.ss__result').should('exist');
		cy.get('[ss-lang=addToCartButtonText]').should('exist').and('contain.html', value);

		cy.then(() => {
			expect(valueMock).to.have.been.calledWith({ result: controller.store.results[0], controller: undefined });
		});
	});
});

describe('Result Theming E2E', () => {
	it('is themeable with ThemeProvider', () => {
		const globalTheme = {
			components: {
				result: {
					hideTitle: true,
				},
			},
		};

		mount(
			<ThemeProvider theme={globalTheme}>
				<VariantResult result={controller.store.results[0]} />
			</ThemeProvider>
		);

		cy.get('.ss__result').should('exist');
		cy.get('.ss__result__details__title').should('not.exist');
	});

	it('is themeable with theme prop', () => {
		const propTheme = {
			components: {
				result: {
					hideTitle: true,
				},
			},
		};

		mount(<VariantResult result={controller.store.results[0]} theme={propTheme} />);

		cy.get('.ss__result').should('exist');
		cy.get('.ss__result__details__title').should('not.exist');
	});

	it('is themeable and theme prop overrides ThemeProvider', () => {
		const globalTheme = {
			components: {
				result: {
					hideTitle: true,
					hideBadge: true,
				},
			},
		};
		const propTheme = {
			components: {
				result: {
					hideTitle: false,
				},
			},
		};

		mount(
			<ThemeProvider theme={globalTheme}>
				<VariantResult result={controller.store.results[0]} theme={propTheme} />
			</ThemeProvider>
		);

		cy.get('.ss__result').should('exist');
		cy.get('.ss__result__details__title').should('exist');
		cy.get('.ss__badge').should('not.exist');
	});
});
