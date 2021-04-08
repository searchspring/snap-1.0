import { h } from 'preact';
import { render } from '@testing-library/preact';
import { Result } from './Result';
import { searchResponse } from '../../../mocks/searchResponse';
import { FALLBACK_IMAGE_URL } from '../../Atoms/Image';
import { ThemeProvider } from '../../../providers/theme';

describe('Result Component', () => {
	it('renders', () => {
		const rendered = render(<Result result={searchResponse.results[0]} />);
		const resultElement = rendered.container.querySelector('.ss-result');
		expect(resultElement).toBeInTheDocument();
	});

	it('renders image', () => {
		const rendered = render(<Result result={searchResponse.results[0]} />);
		const imageElement = rendered.container.querySelector('.ss-result .ss-result__image-wrapper .ss-image');
		expect(imageElement).toBeInTheDocument();
	});

	it('renders badge', () => {
		const rendered = render(<Result result={searchResponse.results[0]} />);
		const badgeElement = rendered.container.querySelector('.ss-result .ss-result__image-wrapper .ss-badge');
		expect(badgeElement).toBeInTheDocument();
	});

	it('renders title', () => {
		const rendered = render(<Result result={searchResponse.results[0]} />);
		const title = rendered.container.querySelector('.ss-result .ss-result__details-wrapper .ss-result__details-wrapper-name').textContent;
		expect(title).toBe(searchResponse.results[0].mappings.core.name);
	});

	it('renders pricing', () => {
		const rendered = render(<Result result={searchResponse.results[0]} />);
		const priceElement = rendered.container.querySelectorAll('.ss-result .ss-result__details-wrapper-price .ss-price');
		expect(priceElement[0]).toBeInTheDocument();
		expect(priceElement.length).toBe(2);
	});

	it('renders button', () => {
		const args = {
			result: searchResponse.results[0],
			buttonSlot: <div>Add to cart'</div>,
		};
		const rendered = render(<Result {...args} />);
		const buttonBlement = rendered.container.querySelector('.ss-result .ss-result__details-wrapper .ss-result__button-wrapper');
		expect(buttonBlement).toBeInTheDocument();
		expect(buttonBlement).toHaveTextContent('Add to cart');
	});

	it('hides various sections', () => {
		const args = {
			result: searchResponse.results[0],
			hideBadge: true,
			hideTitle: true,
			hidePricing: true,
		};
		const rendered = render(<Result {...args} />);
		const badgeElement = rendered.container.querySelector('.ss-result .ss-result__image-wrapper .ss-badge');
		const titleElement = rendered.container.querySelector('.ss-result .ss-result__details-wrapper .ss-result__details-wrapper-name');
		const priceElement = rendered.container.querySelector('.ss-result .ss-result__details-wrapper-price .ss-price');
		expect(badgeElement).not.toBeInTheDocument();
		expect(titleElement).not.toBeInTheDocument();
		expect(priceElement).not.toBeInTheDocument();
	});

	it('should display a fallback image', () => {
		const rendered = render(<Result result={searchResponse.results[1]} />);
		const imageElement = rendered.container.querySelector('.ss-result .ss-result__image-wrapper .ss-image');
		expect(imageElement).toHaveAttribute('src', FALLBACK_IMAGE_URL);
	});
});

describe('Result theming works', () => {
	it('is themeable with ThemeProvider', () => {
		const globalTheme = {
			components: {
				result: {
					hideTitle: true,
				},
			},
		};
		const rendered = render(
			<ThemeProvider theme={globalTheme}>
				<Result result={searchResponse.results[0]} />
			</ThemeProvider>
		);
		const result = rendered.container.querySelector('.ss-result');
		const title = rendered.container.querySelector('.ss-result__details-wrapper-name');
		expect(result).toBeInTheDocument();
		expect(title).not.toBeInTheDocument();
	});

	it('is themeable with theme prop', () => {
		const propTheme = {
			components: {
				result: {
					hideTitle: true,
				},
			},
		};
		const rendered = render(<Result result={searchResponse.results[0]} theme={propTheme} />);
		const result = rendered.container.querySelector('.ss-result');
		const title = rendered.container.querySelector('.ss-result__details-wrapper-name');
		expect(result).toBeInTheDocument();
		expect(title).not.toBeInTheDocument();
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
		const rendered = render(
			<ThemeProvider theme={globalTheme}>
				<Result result={searchResponse.results[0]} theme={propTheme} />
			</ThemeProvider>
		);

		const badge = rendered.container.querySelector('.ss-badge');
		const result = rendered.container.querySelector('.ss-result');
		const title = rendered.container.querySelector('.ss-result__details-wrapper-name');
		expect(result).toBeInTheDocument();
		expect(title).toBeInTheDocument();
		expect(badge).not.toBeInTheDocument();
	});
});
