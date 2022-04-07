import type { FinderStoreConfig, FinderFieldConfig, StoreServices, SelectedSelection, FinderStoreState } from '../../types';
import type { StorageStore } from '../../Storage/StorageStore';
import type { MetaResponseModel, SearchResponseModelFacet, SearchResponseModelFacetValueAllOfValues } from '@searchspring/snapi-types';

type SelectionStoreData = {
	state: FinderStoreState;
	facets: SearchResponseModelFacet[];
	meta: MetaResponseModel;
	loading: boolean;
	storage: StorageStore;
	selections: SelectedSelection[];
};
export class SelectionStore extends Array {
	static get [Symbol.species](): ArrayConstructor {
		return Array;
	}

	constructor(config: FinderStoreConfig, services: StoreServices, { state, facets, meta, loading, storage, selections }: SelectionStoreData) {
		const selectedSelections = [];

		if (selections?.length) {
			config.fields.forEach((fieldObj) => {
				const storedData: SelectedSelection = selections.find((selection) => selection.facet.field === fieldObj.field);

				if (storedData) {
					const { facet, selected } = storedData;
					if (facet?.hierarchyDelimiter) {
						// hierarchy
						selections.forEach((selection, index) => {
							const levels = fieldObj?.levels || facet?.values[facet?.values.length - 1]?.value.split(facet.hierarchyDelimiter);
							const levelConfig: LevelConfig = { index, label: fieldObj.levels ? levels[index] : '', key: `ss-${index}` };

							const storageKey = generateStorageKey(config.id, facet.field);
							storage.set(`${storageKey}.${levelConfig.key}.values`, selection.data);

							const selectionHierarchy = new SelectionHierarchy(services, config.id, state, facet, levelConfig, loading, storage);

							selectionHierarchy.selected = selection.selected;
							selectionHierarchy.data = selection.data;

							if (config.persist?.lockSelections) {
								selectionHierarchy.disabled = true;
							}

							if (selection.selected) {
								services.urlManager = services.urlManager.set(`filter.${selection.facet.field}`, selection.selected);
							}

							selectedSelections.push(selectionHierarchy);
						});
					} else {
						const selection = new Selection(services, config.id, state, facet, fieldObj, loading, storage);

						selection.selected = selected;
						selection.storage.set('selected', selected);

						selection.data = facet.values;
						if (selected) {
							services.urlManager = services.urlManager.set(`filter.${facet.field}`, selected);
						}

						if (config.persist?.lockSelections) {
							selection.disabled = true;
						}

						selectedSelections.push(selection);
					}
				}
			});
		} else if (facets && meta) {
			// re-order facets to match our config
			config?.fields &&
				facets.sort((a, b) => {
					const fields = config.fields.map((fieldConfig) => fieldConfig.field);
					return fields.indexOf(a.field) - fields.indexOf(b.field);
				});

			config?.fields?.forEach((fieldObj) => {
				let facet: any = facets?.filter((facet) => facet.field == fieldObj.field).pop();

				facet = {
					...meta?.facets[fieldObj.field],
					...facet,
				};

				const isHierarchy = facet.display === 'hierarchy';
				if (isHierarchy) {
					// filter out history/current hierarchy values
					const filtered = facet.filtered && facet.values.filter((value) => value.filtered).pop();

					if (filtered) {
						const filteredLevel = filtered.value.split(facet.hierarchyDelimiter).length;

						facet.values = facet.values.filter((value, index) => {
							return (value.value && value.value.split(facet.hierarchyDelimiter).length > filteredLevel) || index == facet.values.length - 1;
						});
					}

					const levels = fieldObj?.levels || facet?.values[facet?.values.length - 1]?.value.split(facet.hierarchyDelimiter);

					levels?.map((level, index) => {
						const levelConfig: LevelConfig = { index, label: fieldObj.levels ? level : '', key: `ss-${index}` };
						selectedSelections.push(new SelectionHierarchy(services, config.id, state, facet, levelConfig, loading, storage));
					});
				} else {
					selectedSelections.push(new Selection(services, config.id, state, facet, fieldObj, loading, storage));
				}
			});
		}

		super(...selectedSelections);
	}
}

class SelectionBase {
	state: FinderStoreState;
	type: string;
	field: string;
	filtered = false;
	collapsed = false;
	display = '';
	label: string;
	multiple: string;
	id: string;
	disabled = false;
	selected = '';
	custom = {};
	facet: any; //TODO: add typing

	services: StoreServices;
	loading: boolean;
	config: FinderFieldConfig | LevelConfig;
	data: SearchResponseModelFacetValueAllOfValues[];
	storage;

	constructor(
		services: StoreServices,
		id: string,
		state: FinderStoreState,
		facet,
		selectionConfig: FinderFieldConfig | LevelConfig,
		loading: boolean,
		storageStore: StorageStore
	) {
		this.services = services;
		this.loading = loading;
		this.state = state;
		this.id = id;
		this.config = selectionConfig;

		// inherit all standard facet properties
		this.facet = facet;
		this.type = facet.type;
		this.field = facet.field;
		this.filtered = facet.filtered;
		this.collapsed = facet.collapsed;
		this.display = facet.display;
		this.label = facet.label;
		this.multiple = facet.multiple;

		// abstracted StorageStore
		this.storage = {
			key: generateStorageKey(this.id, this.field),
			get: function (key) {
				const path = this.key + (key ? `.${key}` : '');
				return storageStore.get(path);
			},
			set: function (key, value) {
				const path = this.key + (key ? `.${key}` : '');
				return storageStore.set(path, value);
			},
		};
	}

	get values() {
		const values = [...(this.data || [])];

		values.unshift({
			filtered: false,
			value: '',
			label: this.config.label || this.label,
		});

		return values;
	}
}

class Selection extends SelectionBase {
	config: {
		label?: string;
		field: string;
	};

	constructor(services: StoreServices, id: string, state, facet, config: FinderFieldConfig, loading: boolean, storageStore: StorageStore) {
		super(services, id, state, facet, config, loading, storageStore);

		this.loading = loading;
		this.storage.set('values', facet.values);

		const storageData = this.storage.get();
		this.data = storageData.values;

		// check if any dropdowns have been selected
		this.disabled = !this.values.length;
		this.selected = this.disabled ? '' : storageData.selected || '';
	}

	select(value = '') {
		if (this.loading) return;

		this.selected = value;
		this.storage.set('selected', value);
		this.state.persisted = false;

		if (!value) {
			this.services.urlManager = this.services.urlManager.remove(`filter.${this.field}`);
			this.services.urlManager.go();
		} else {
			this.services.urlManager = this.services.urlManager.set(`filter.${this.field}`, value);
			this.services.urlManager.go();
		}
	}
}

class SelectionHierarchy extends SelectionBase {
	hierarchyDelimiter: string;
	config: LevelConfig;

	constructor(services: StoreServices, id: string, state, facet, config: LevelConfig, loading: boolean, storageStore: StorageStore) {
		super(services, id, state, facet, config, loading, storageStore);

		// inherit additional facet properties
		this.hierarchyDelimiter = facet.hierarchyDelimiter;

		let storageData = this.storage.get();

		if (!storageData) {
			// nothing in storage - initial state for first dropdown
			this.storage.set(`${this.config.key}.values`, facet.values);
			storageData = this.storage.get();
		} else if (storageData[this.config.key]?.values) {
			// set selected from storage
			this.selected = storageData[this.config.key]?.selected || '';
		} else {
			// value does not exist in storage
			const storedLevels = this.storage.get();
			const levels = Object.keys(storedLevels).map((a, index) => `ss-${index}`);
			!levels.includes(this.config.key) && levels.push(this.config.key);

			const selectedLevels = Object.keys(storedLevels).filter((key) => storedLevels[key].selected);
			const lastSelected = selectedLevels[selectedLevels.length - 1];

			const labelIndex = levels.indexOf(this.config.key);
			const lastSelectedIndex = levels.indexOf(lastSelected);

			if (lastSelectedIndex != -1 && labelIndex == lastSelectedIndex + 1) {
				this.storage.set(`${this.config.key}.values`, facet.values);
			} else {
				this.disabled = true;
			}
		}

		this.data = storageData[this.config.key]?.values || [];
	}

	select(value = '') {
		if (this.loading) return;

		this.selected = value;
		this.state.persisted = false;

		const selectedLevel = this.config.index;

		const storedLevels = this.storage.get();
		const keysToRemove = Object.keys(storedLevels).slice(selectedLevel);

		Object.keys(storedLevels)
			.reverse()
			.forEach((key) => {
				if (key == this.config.key) {
					this.storage.set(`${key}.selected`, value);
				} else if (keysToRemove.includes(key)) {
					this.storage.set(`${key}`, {});
				}

				value = value || this.storage.get(`${key}.selected`);
			});

		if (!value) {
			this.services.urlManager = this.services.urlManager.remove(`filter.${this.field}`);
			this.services.urlManager.go();
		} else {
			this.services.urlManager = this.services.urlManager.set(`filter.${this.field}`, value);
			this.services.urlManager.go();
		}
	}
}

type LevelConfig = {
	index: number;
	label?: string;
	key: string;
};

function generateStorageKey(id: string, field: string): string {
	return `ss-finder-${id}.${field}`;
}
