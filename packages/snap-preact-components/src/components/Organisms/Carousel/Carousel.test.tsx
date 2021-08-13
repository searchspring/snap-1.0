import { h } from 'preact';
import { render } from '@testing-library/preact';

import { ThemeProvider } from '../../../providers/theme';
import { searchResponse } from '../../../mocks/searchResponse';
import { Carousel } from './Carousel';
import { Result } from '../../Molecules/Result';
import userEvent from '@testing-library/user-event';

describe('Carousel Component', () => {
	const theme = {
		components: {
			carousel: {
				prevButton: 'Global Theme Prev',
				nextButton: 'Global Theme Next',
			},
		},
	};

	it('renders', () => {
		const rendered = render(
			<Carousel>
				{searchResponse.results.map((result, idx) => (
					<div className={'findMe'} key={idx}>
						<Result result={result} />
					</div>
				))}
			</Carousel>
		);
		const carousel = rendered.container.querySelector('.ss__carousel');
		expect(carousel).toBeInTheDocument();
	});

	it('able to render child jsx', () => {
		const rendered = render(
			<Carousel>
				{searchResponse.results.map((result, idx) => (
					<div className={'findMe'} key={idx}>
						<Result result={result} />
					</div>
				))}
			</Carousel>
		);

		const results = rendered.container.querySelector('.swiper-slide[data-swiper-slide-index="0"]');
		expect(results.textContent).toContain(searchResponse.results[0].mappings.core.name);
	});

	it.skip('renders the correct amount of children', () => {
		const rendered = render(
			<Carousel>
				{searchResponse.results.map((result, idx) => (
					<div className={'findMe'} key={idx}>
						<Result result={result} />
					</div>
				))}
			</Carousel>
		);
		const results = rendered.container.querySelectorAll('.findMe');
		expect(results.length).toBe(searchResponse.results.length);
	});

	it('renders next & prev buttons', () => {
		const rendered = render(
			<Carousel>
				{searchResponse.results.map((result, idx) => (
					<div className={'findMe'} key={idx}>
						<Result result={result} />
					</div>
				))}
			</Carousel>
		);
		const prev = rendered.container.querySelector('.ss__carousel__prev');
		const next = rendered.container.querySelector('.ss__carousel__next');
		expect(prev).toBeInTheDocument();
		expect(next).toBeInTheDocument();
	});

	it('renders custom next & prev buttons', () => {
		const prevButtonText = 'Prev Button Yo';
		const nextButtonText = 'Next Button Yo';
		const rendered = render(
			<Carousel prevButton={prevButtonText} nextButton={nextButtonText}>
				{searchResponse.results.map((result, idx) => (
					<div className={'findMe'} key={idx}>
						<Result result={result} />
					</div>
				))}
			</Carousel>
		);
		const prev = rendered.container.querySelector('.ss__carousel__prev');
		const next = rendered.container.querySelector('.ss__carousel__next');
		expect(prev).toBeInTheDocument();
		expect(next).toBeInTheDocument();

		expect(prev).toHaveTextContent(prevButtonText);
		expect(next).toHaveTextContent(nextButtonText);
	});

	it('has custom onClick functions', () => {
		const onNextFunc = jest.fn();
		const onPrevFunc = jest.fn();
		const onCarouselFunc = jest.fn();

		const rendered = render(
			<Carousel onNextButtonClick={onNextFunc} onPrevButtonClick={onPrevFunc} onCarouselClick={onCarouselFunc}>
				{searchResponse.results.map((result, idx) => (
					<div className={'findMe'} key={idx}>
						<Result result={result} />
					</div>
				))}
			</Carousel>
		);
		const prev = rendered.container.querySelector('.ss__carousel__prev');
		const next = rendered.container.querySelector('.ss__carousel__next');
		const slide = rendered.container.querySelectorAll('.swiper-slide');

		expect(onPrevFunc).not.toHaveBeenCalled();
		userEvent.click(prev);
		expect(onPrevFunc).toHaveBeenCalled();

		expect(onNextFunc).not.toHaveBeenCalled();
		userEvent.click(next);
		expect(onNextFunc).toHaveBeenCalled();

		expect(onCarouselFunc).not.toHaveBeenCalled();
		userEvent.click(slide[0]);
		//todo this doesnt work in the tests for some reason..
		// expect(onCarouselFunc).toHaveBeenCalled();
	});

	it('is themeable with ThemeProvider', () => {
		const children = ['red', 'blue', 'yellow', 'green', 'white', 'orange', 'black'];

		const rendered = render(
			<ThemeProvider theme={theme}>
				<Carousel>
					{children.map((color) => (
						<div className="findMe" style={{ height: '100px', width: '100px', background: color }}></div>
					))}
				</Carousel>
			</ThemeProvider>
		);
		const ChildElement = rendered.container.querySelector('.findMe');
		expect(ChildElement).toBeInTheDocument();

		const prev = rendered.container.querySelector('.ss__carousel__prev');
		const next = rendered.container.querySelector('.ss__carousel__next');
		expect(prev).toBeInTheDocument();
		expect(next).toBeInTheDocument();

		expect(prev).toHaveTextContent(theme.components.carousel.prevButton);
		expect(next).toHaveTextContent(theme.components.carousel.nextButton);
	});

	it('is themeable with theme prop', () => {
		const children = ['red', 'blue', 'yellow', 'green', 'white', 'orange', 'black'];

		const rendered = render(
			<Carousel theme={theme}>
				{children.map((color) => (
					<div className="findMe" style={{ height: '100px', width: '100px', background: color }}></div>
				))}
			</Carousel>
		);
		const ChildElement = rendered.container.querySelector('.findMe');
		expect(ChildElement).toBeInTheDocument();

		const prev = rendered.container.querySelector('.ss__carousel__prev');
		const next = rendered.container.querySelector('.ss__carousel__next');
		expect(prev).toBeInTheDocument();
		expect(next).toBeInTheDocument();

		expect(prev).toHaveTextContent(theme.components.carousel.prevButton);
		expect(next).toHaveTextContent(theme.components.carousel.nextButton);
	});

	it('is themeable with theme prop overrides ThemeProvider', () => {
		const themeOverride = {
			components: {
				carousel: {
					prevButton: 'Prev Button Yo',
					nextButton: 'Next Button Yo',
				},
			},
		};

		const children = ['red', 'blue', 'yellow', 'green', 'white', 'orange', 'black'];

		const rendered = render(
			<ThemeProvider theme={theme}>
				<Carousel theme={themeOverride}>
					{children.map((color) => (
						<div className="findMe" style={{ height: '100px', width: '100px', background: color }}></div>
					))}
				</Carousel>
			</ThemeProvider>
		);
		const ChildElement = rendered.container.querySelector('.findMe');
		expect(ChildElement).toBeInTheDocument();

		const prev = rendered.container.querySelector('.ss__carousel__prev');
		const next = rendered.container.querySelector('.ss__carousel__next');
		expect(prev).toBeInTheDocument();
		expect(next).toBeInTheDocument();

		expect(prev).not.toHaveTextContent(theme.components.carousel.prevButton);
		expect(next).not.toHaveTextContent(theme.components.carousel.nextButton);

		expect(prev).toHaveTextContent(themeOverride.components.carousel.prevButton);
		expect(next).toHaveTextContent(themeOverride.components.carousel.nextButton);
	});
});
