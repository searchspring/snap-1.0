import { h } from 'preact';

import { render } from '@testing-library/preact';
import { ThemeProvider } from '../../../providers/theme';

import { FacetGridOptions } from './FacetGridOptions';
import { gridFacetMock } from '../../../mocks/searchResponse';

describe('FacetGridOptions Component', () => {
	let gridComponent;
	let gridElement;
	beforeEach(() => {
		gridComponent = render(<FacetGridOptions values={gridFacetMock.values} />);
	});

	it('renders', () => {
		gridElement = gridComponent.container.querySelector('.ss-grid');

		expect(gridElement).toBeInTheDocument();
		expect(gridElement).toHaveTextContent(gridFacetMock.values[0].label);
	});

	it('has the correct number of options', () => {
		const gridOptions = gridComponent.container.querySelectorAll('.ss-grid-option');
		expect(gridOptions).toHaveLength(gridFacetMock.values.length);
	});

	it('has the correct label', () => {
		const gridOptions = gridComponent.container.querySelectorAll('.ss-grid-optionWrapper');
		for (let i = 0; i < gridOptions.length; i++) {
			expect(gridOptions[i]).toHaveTextContent(gridFacetMock.values[i].label);
		}
	});

	it('Grid container element has correct number of classes', () => {
		gridElement = gridComponent.container.querySelector('.ss-grid');

		expect(gridElement.classList.length).toBe(2);
		expect(gridElement).toHaveClass('ss-grid');
	});

	it('Grid option elements have correct classes', () => {
		const gridOptionsElement = gridComponent.container.querySelectorAll('.ss-grid-option');
		const inactiveGridOption = gridOptionsElement[0];
		const activeGridOption = gridOptionsElement[2];
		expect(inactiveGridOption).toHaveClass('ss-grid-option');
		expect(activeGridOption.className).toMatch(/filtered/);
	});
});

describe('FacetGridOptions theming works', () => {
	it('is themeable with ThemeProvider', () => {
		const globalTheme = {
			components: {
				facetGridOptions: {
					gapSize: '10px',
				},
			},
		};
		const rendered = render(
			<ThemeProvider theme={globalTheme}>
				<FacetGridOptions values={gridFacetMock.values} />
			</ThemeProvider>
		);
		const gridElement = rendered.container.querySelector('.ss-grid');
		const styles = getComputedStyle(gridElement);
		expect(styles.gap).toBe(globalTheme.components.facetGridOptions.gapSize);
		expect(gridElement).toBeInTheDocument();
	});

	it('is themeable with theme prop', () => {
		const propTheme = {
			components: {
				facetGridOptions: {
					gapSize: '10px',
				},
			},
		};
		const rendered = render(<FacetGridOptions values={gridFacetMock.values} theme={propTheme} />);
		const gridElement = rendered.container.querySelector('.ss-grid');
		const styles = getComputedStyle(gridElement);
		expect(styles.gap).toBe(propTheme.components.facetGridOptions.gapSize);
		expect(gridElement).toBeInTheDocument();
	});

	it('is theme prop overrides ThemeProvider', () => {
		const globalTheme = {
			components: {
				facetGridOptions: {
					gapSize: '10px',
				},
			},
		};
		const propTheme = {
			components: {
				facetGridOptions: {
					gapSize: '15px',
				},
			},
		};
		const rendered = render(
			<ThemeProvider theme={globalTheme}>
				<FacetGridOptions values={gridFacetMock.values} theme={propTheme} />
			</ThemeProvider>
		);
		const gridElement = rendered.container.querySelector('.ss-grid');
		const styles = getComputedStyle(gridElement);
		expect(styles.gap).toBe(propTheme.components.facetGridOptions.gapSize);
		expect(gridElement).toBeInTheDocument();
	});
});
