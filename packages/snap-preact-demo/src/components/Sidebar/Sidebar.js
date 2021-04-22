import { h, Fragment, Component } from 'preact';
import { observer } from 'mobx-react';

import { withStore } from '../../services/providers';
import { Facets } from '../Facets/Facets';
import { ThemeProvider, FilterSummary, Select } from '@searchspring/snap-preact-components';
import { customTheme } from '../../theme.js';

import { StoreProvider } from '../../services/providers';

@observer
export class Sidebar extends Component {
	render() {
		const store = this.props.store;

		return (
			<ThemeProvider theme={customTheme}>
				<StoreProvider store={store}>
					<SidebarContents />
				</StoreProvider>
			</ThemeProvider>
		);
	}
}

@withStore
@observer
export class SidebarContents extends Component {
	render() {
		const {
			filters,
			custom: { onSaleFacet },
		} = this.props.store;

		return (
			<div class="ss-sidebar-container">
				<FilterSummary hideClearAll filters={filters} />

				{onSaleFacet && (
					<Select
						className="ss-facet-onsale"
						disableClickOutside
						style={{ width: '100%', margin: '10px 0' }}
						label={`${onSaleFacet.label}`}
						options={onSaleFacet?.values.map((value) => {
							value.label = `${value.label} (${value.count})`;
							return value;
						})}
						selected={onSaleFacet?.values?.filter((value) => value.filtered)}
						clearSelection="clear"
						onSelect={(e, option) => {
							if (option) {
								option.url.go();
							} else {
								onSaleFacet?.controller.urlManager.remove('page').remove('filter.on_sale').go();
							}
						}}
					/>
				)}

				<Facets />
			</div>
		);
	}
}