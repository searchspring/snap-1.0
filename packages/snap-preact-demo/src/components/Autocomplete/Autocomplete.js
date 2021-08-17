import { h, Component } from 'preact';
import { observer } from 'mobx-react';
import { Autocomplete as LibraryAutocomplete } from '@searchspring/snap-preact-components';

@observer
export class Autocomplete extends Component {
	render() {
		const controller = this.props.controller;

		const theme = {
			components: {
				facet: {
					limit: 5,
				},
				results: {
					theme: {
						components: {
							result: {
								hideBadge: true,
							},
						},
					},
				},
			},
		};

		const responsive = {
			0: {
				columns: 1,
				rows: 1,
			},
			320: {
				columns: 2,
				rows: 1,
			},
			768: {
				columns: 3,
				rows: 1,
			},
			1200: {
				columns: 2,
				rows: 2,
			},
		};

		return <LibraryAutocomplete controller={controller} input={controller.config.selector} theme={theme} responsive={responsive} />;
	}
}
