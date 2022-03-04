import { h } from 'preact';

import { ThemeProvider } from '../../../providers';
import { render, waitFor } from '@testing-library/preact';

import { Image, FALLBACK_IMAGE_URL } from './Image';
import { searchResponse, badSearchResponse } from '../../../mocks/searchResponse';
import userEvent from '@testing-library/user-event';

describe('image Component', () => {
	const result = searchResponse.results[0].mappings.core;
	const badResult = badSearchResponse.results[0].mappings.core;
	const rolloverImage = searchResponse.results[2].mappings.core.thumbnailImageUrl;

	it('renders', () => {
		const rendered = render(<Image alt={result.name} src={result.thumbnailImageUrl} />);
		const imageElement = rendered.container.querySelector('.ss__image img');
		expect(imageElement).toBeInTheDocument();
		expect(imageElement).toHaveAttribute('src', result.thumbnailImageUrl);
		expect(imageElement).toHaveAttribute('alt', result.name);
		expect(imageElement).toHaveAttribute('title', result.name);
	});

	it('renders with classname', () => {
		const className = 'classy';
		const rendered = render(<Image className={className} alt={result.name} src={result.thumbnailImageUrl} />);
		const imageElement = rendered.container.querySelector('.ss__image');

		expect(imageElement).toHaveClass(className);
	});

	it('disables styles', () => {
		const rendered = render(<Image disableStyles alt={result.name} src={result.thumbnailImageUrl} />);
		const imageElement = rendered.container.querySelector('.ss__image');

		expect(imageElement.classList).toHaveLength(1);
	});

	describe('Working Image', () => {
		it('renders image', () => {
			const rendered = render(<Image alt={result.name} src={result.thumbnailImageUrl} />);
			const imageElement = rendered.container.querySelector('.ss__image img');
			expect(imageElement).toBeInTheDocument();
			expect(imageElement).toHaveAttribute('src', result.thumbnailImageUrl);
		});
	});

	describe('Broken Image', () => {
		it('should display default fallback image', () => {
			const rendered = render(<Image alt={badResult.name} src={badResult.thumbnailImageUrl} />);
			const imageElement = rendered.container.querySelector('.ss__image img');
			expect(imageElement).toHaveAttribute('src', FALLBACK_IMAGE_URL);
		});

		it('should display custom fallback image', () => {
			const fallbackImage = 'https://www.telegraph.co.uk/content/dam/Pets/spark/royal-canin/happy-puppy-xlarge.jpg?imwidth=1200';
			const rendered = render(<Image alt={badResult.name} src={badResult.thumbnailImageUrl} fallback={fallbackImage} />);
			const imageElement = rendered.container.querySelector('.ss__image img');
			expect(imageElement).toHaveAttribute('src', fallbackImage);
		});
	});

	describe('hover src', () => {
		it('should change src on hover & run a custom onhoverfunc prop', async () => {
			const onHoverFunc = jest.fn();
			const rendered = render(<Image alt={badResult.name} onMouseOver={onHoverFunc} src={result.thumbnailImageUrl} hoverSrc={rolloverImage} />);
			const imageElement = rendered.container.querySelector('.ss__image img');
			console.log(result.thumbnailImageUrl);
			console.log(rolloverImage);

			expect(imageElement).toHaveAttribute('src', result.thumbnailImageUrl);
			userEvent.hover(imageElement);
			await waitFor(() => expect(onHoverFunc).toHaveBeenCalled());
			expect(imageElement).toHaveAttribute('src', rolloverImage);
		});
	});

	describe('click func', () => {
		it('custom onclick src on hover', () => {
			const clickfunc = jest.fn();

			const rendered = render(<Image alt={badResult.name} src={result.thumbnailImageUrl} onClick={clickfunc} />);
			const imageElement = rendered.container.querySelector('.ss__image img');

			expect(imageElement).toHaveAttribute('src', result.thumbnailImageUrl);
			userEvent.click(imageElement);
			expect(clickfunc).toHaveBeenCalled();
		});
	});

	//this should work, but doesnt, jest doesnt actually load assets,
	//so the img onLoad event never fires.
	it.skip('custom onLoad func', async () => {
		const onLoadFunc = jest.fn();
		expect(onLoadFunc).not.toHaveBeenCalled();

		const rendered = await render(<Image alt={badResult.name} src={result.thumbnailImageUrl} onLoad={onLoadFunc} />);
		const imageElement = rendered.container.querySelector('.ss__image img');

		expect(imageElement).toHaveAttribute('src', result.thumbnailImageUrl);
		await waitFor(() => expect(document.images).toHaveLength(1));
		expect(onLoadFunc).toHaveBeenCalled();
	});
});

describe('Image theming works', () => {
	const result = searchResponse.results[0].mappings.core;

	it('is themeable with ThemeProvider', () => {
		const globalTheme = {
			components: {
				image: {
					disableStyles: true,
				},
			},
		};
		const rendered = render(
			<ThemeProvider theme={globalTheme}>
				<Image alt={result.name} src={result.thumbnailImageUrl} />
			</ThemeProvider>
		);
		const pagination = rendered.container.querySelector('.ss__image');
		expect(pagination).toBeInTheDocument();
		expect(pagination.classList.length).toBe(1);
	});

	it('is themeable with theme prop', () => {
		const propTheme = {
			components: {
				image: {
					disableStyles: true,
				},
			},
		};
		const rendered = render(<Image alt={result.name} src={result.thumbnailImageUrl} theme={propTheme} />);
		const pagination = rendered.container.querySelector('.ss__image');
		expect(pagination).toBeInTheDocument();
		expect(pagination.classList.length).toBe(1);
	});

	it('is theme prop overrides ThemeProvider', () => {
		const globalTheme = {
			components: {
				image: {
					disableStyles: false,
				},
			},
		};
		const propTheme = {
			components: {
				image: {
					disableStyles: true,
				},
			},
		};
		const rendered = render(
			<ThemeProvider theme={globalTheme}>
				<Image alt={result.name} src={result.thumbnailImageUrl} theme={propTheme} />
			</ThemeProvider>
		);

		const pagination = rendered.container.querySelector('.ss__image');
		expect(pagination).toBeInTheDocument();
		expect(pagination.classList.length).toBe(1);
	});
});
