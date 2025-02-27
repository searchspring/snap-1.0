'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[8274],
	{
		'./src/Templates/Stores/library/languages/es.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { es: () => es });
			const es = {
				recommendation: {},
				button: {},
				search: {},
				list: {},
				radioList: {},
				layoutSelector: { label: { value: 'Disposición' } },
				perPage: { label: { value: 'Por Página' } },
				autocomplete: {
					trendingTitle: { value: 'Búsquedas populares' },
					termsTitle: { value: '' },
					contentTitle: { value: '' },
					facetsTitle: { value: '' },
					historyTitle: { value: 'Búsquedas anteriores' },
					closeButton: { value: 'Cerrar autocompletar', attributes: { 'aria-label': 'cerrar autocompletar' } },
					noResultsText: {
						value: (data) =>
							`<p>No se encontraron resultados para "${
								data?.controller.store.search.originalQuery?.string || data?.controller.store.search.query?.string
							}".</p><p>Intenta con otra búsqueda.</p>`,
					},
					contentInfo: {
						value: (data) =>
							`Ver ${data?.controller.store.pagination.totalResults} ${
								data?.controller.store.filters.length && data?.controller.store.filters.length > 0 ? 'resultado(s) filtrado(s)' : 'resultado(s)'
							} para "${data?.controller.store.search.query?.string}"`,
					},
					historyTerm: {
						attributes: { 'aria-label': (data) => `ítem ${data?.index + 1} de ${data?.controller.store.history.length}, ${data?.term.value}` },
					},
					trendingTerm: {
						attributes: { 'aria-label': (data) => `ítem ${data?.index + 1} de ${data?.controller.store.trending.length}, ${data?.term.value}` },
					},
					suggestionsTerm: {
						attributes: { 'aria-label': (data) => `ítem ${data?.index + 1} de ${data?.controller.store.terms.length}, ${data?.term.value}` },
					},
				},
				sidebar: { titleText: { value: 'Filtros' } },
				recommendationBundle: {
					seedText: { value: 'Este producto' },
					ctaButtonText: { value: 'Agregar todo al carrito' },
					ctaButtonSuccessText: { value: '¡Paquete agregado!' },
				},
				mobileSidebar: {
					openButtonText: { value: 'Filtros' },
					clearButtonText: { value: 'Limpiar todo' },
					applyButtonText: { value: 'Aplicar' },
					titleText: { value: 'Opciones de filtro' },
					closeButtonText: { attributes: { 'aria-label': 'cerrar botón de filtros' } },
				},
				sortBy: { label: { value: (data) => `${data}` } },
				facetsHorizontal: {
					dropdownButton: {
						attributes: {
							'aria-label': (data) =>
								`actualmente ${data?.selectedFacet?.field === data?.facet.field ? 'colapsado' : 'abierto'} el menú desplegable del filtro ${
									data?.facet.field
								} ${(data?.facet).values?.length ? (data?.facet).values?.length + ' opciones' : ''}`,
						},
					},
				},
				filterSummary: { title: { value: 'Filtros actuales' }, clearAllLabel: { value: 'Borrar Todo' } },
				facet: {
					showMoreText: { value: 'ver más' },
					showLessText: { value: 'ver menos' },
					dropdownButton: {
						attributes: {
							'aria-label': (data) =>
								`actualmente ${data?.facet?.collapsed ? 'colapsado' : 'abierto'} el menú desplegable del filtro ${data?.facet.label} ${
									(data?.facet).values?.length ? (data?.facet).values.length + ' opciones' : ''
								}`,
						},
					},
				},
				select: {
					buttonLabel: {
						attributes: {
							'aria-label': (data) =>
								`${data?.label} menú desplegable, ${data?.options.length} opciones ${
									data?.selectedOptions.length ? `, opción actualmente seleccionada: ${data?.selectedOptions[0].label}` : ''
								}`,
						},
					},
				},
				radio: {
					radio: {
						attributes: {
							'aria-label': (data) =>
								`${data?.disabled ? 'deshabilitado' : ''} ${data?.checkedState ? 'seleccionado' : 'no seleccionado'} botón de radio`,
						},
					},
				},
				pagination: {
					previous: { attributes: { 'aria-label': 'Página anterior' } },
					next: { attributes: { 'aria-label': 'Siguiente página' } },
					first: { attributes: { 'aria-label': 'Primera página' } },
					last: { attributes: { 'aria-label': (data) => `Ir a la página anterior ${data?.pagination.last.number}` } },
					page: { attributes: { 'aria-label': (data) => `ir a la página ${data?.page.number}` } },
				},
				paginationInfo: {
					infoText: {
						value: (data) =>
							`${data?.pagination?.multiplePages ? `${data?.pagination?.begin} - ${data?.pagination?.end} de` : ''} ${
								data?.pagination?.totalResults
							} resultado${1 == data?.pagination?.totalResults ? '' : 's'}`,
						attributes: {
							'aria-label': (data) =>
								`mostrando ${data?.pagination?.multiplePages ? `${data?.pagination?.begin} - ${data?.pagination?.end} de` : ''} ${
									data?.pagination?.totalResults
								} resultado${1 == data?.pagination?.totalResults ? '' : 's'}`,
						},
					},
				},
				loadMore: {
					loadMoreButton: { attributes: { 'aria-label': 'Cargar más' } },
					progressText: { value: (data) => `Has visto ${data?.pagination?.end} de ${data?.pagination?.totalResults} productos` },
				},
				grid: { showMoreText: { value: (data) => `+ ${data?.remainder}` }, showLessText: { value: 'Menos' } },
				filter: {
					filter: {
						attributes: {
							'aria-label': (data) => `${data?.label ? `eliminar filtro seleccionado ${data?.label} ${data?.value}` : data?.value || ''}`,
						},
					},
				},
				facetSlider: {
					sliderHandle: {
						attributes: {
							'aria-label': (data) => `Deslizador de ${data?.facet.label}`,
							'aria-valuetext': (data) =>
								`Deslizador de ${data?.facet.label}, valor actual ${data?.value}, ${
									data?.facet.range?.low ? `valor mínimo ${data?.facet.range?.low},` : ''
								} ${data?.facet.range?.high ? `valor máximo ${data?.facet.range?.high}` : ''}`,
						},
					},
				},
				facetPaletteOptions: {
					paletteOption: {
						attributes: {
							'aria-label': (data) =>
								'' +
								(data?.value.filtered
									? `eliminar filtro seleccionado ${data?.facet?.label || ''} - ${data?.value.label}`
									: data?.facet?.label
									? `filtrar por ${data?.facet?.label} - ${data?.value.label}`
									: `filtrar por ${data?.value.label}`),
						},
					},
				},
				facetListOptions: {
					listOption: {
						attributes: {
							'aria-label': (data) =>
								'' +
								(data?.value.filtered
									? `eliminar filtro seleccionado ${data?.facet?.label || ''} - ${data?.value.label}`
									: data?.facet?.label
									? `filtrar por ${data?.facet?.label} - ${data?.value.label}`
									: `filtrar por ${data?.value.label}`),
						},
					},
				},
				facetHierarchyOptions: {
					hierarchyOption: {
						attributes: {
							'aria-label': (data) =>
								'' +
								(data?.value.filtered
									? `eliminar filtro seleccionado ${data?.facet?.label || ''} - ${data?.value.label}`
									: data?.facet?.label
									? `filtrar por ${data?.facet?.label} - ${data?.value.label}`
									: `filtrar por ${data?.value.label}`),
						},
					},
				},
				facetGridOptions: {
					gridOption: {
						attributes: {
							'aria-label': (data) =>
								'' +
								(data?.value.filtered
									? `eliminar filtro seleccionado ${data?.facet?.label || ''} - ${data?.value.label}`
									: data?.facet?.label
									? `filtrar por ${data?.facet?.label} - ${data?.value.label}`
									: `filtrar por ${data?.value.label}`),
						},
					},
				},
				errorHandler: {
					warningText: { value: '<b>Advertencia:&nbsp;</b>' },
					infoText: { value: '<b>Información:&nbsp;</b>' },
					errorText: { value: '<b>Error:&nbsp;</b>' },
					reloadText: { value: 'Recargar' },
				},
				checkbox: {
					checkbox: {
						attributes: {
							'aria-label': (data) =>
								`${data?.disabled ? 'deshabilitado' : ''} ${data?.checkedState ? 'seleccionado' : 'no seleccionado'} casilla de verificación`,
						},
					},
				},
				searchHeader: {
					titleText: {
						value: (data) =>
							`Mostrando ${
								data?.pagination?.multiplePages
									? `<span class="ss__search-header__results-count-range"> ${data.pagination?.begin} - ${data.pagination?.end} de </span>`
									: ''
							} \n                <span class="ss__search-header__results-count-total">${
								data?.pagination?.totalResults
							}</span> \n                resultado${1 == data?.pagination?.totalResults ? '' : 's'} \n                ${
								data?.search?.query ? `para <span class="ss__search-header__results-query">"${data?.search?.query?.string}"</span>` : ''
							}\n            `,
						attributes: { 'aria-label': (data) => `Mostrando ahora ${data?.pagination?.totalResults} artículos en la cuadrícula de productos` },
					},
					correctedQueryText: {
						value: (data) =>
							`No se encontraron resultados para <em>"${data?.search?.originalQuery?.string}"</em>, mostrando resultados para <em>"${data?.search?.query?.string}"</em> en su lugar.`,
						attributes: {
							'aria-label': (data) =>
								`No se encontraron resultados para ${data?.search?.originalQuery?.string}, mostrando resultados para ${data?.search?.query?.string} en su lugar`,
						},
					},
					noResultsText: {
						value: (data) =>
							'' +
							(data?.search?.query
								? `<span>\n                    No se encontraron resultados para <span class="ss__search-header__results-query">"${data?.search?.query?.string}"</span>.\n                </span>`
								: '<span>No se encontraron resultados.</span>'),
						attributes: { 'aria-label': (data) => `No se encontraron resultados para ${data?.search?.query?.string}` },
					},
					didYouMeanText: { value: (data) => `¿Quiso decir <a href=${data?.search?.didYouMean?.url.href}>${data?.search?.didYouMean?.string}</a>?` },
				},
				noResults: {
					suggestionsTitleText: { value: 'Sugerencias' },
					suggestionsList: {
						value:
							'<ul className="ss__no-results__suggestions__list"><li className="ss__no-results__suggestions__list__option">Verifica si hay errores de ortografía.</li><li className="ss__no-results__suggestions__list__option">Elimina palabras clave redundantes (ej. "productos").</li><li className="ss__no-results__suggestions__list__option">Usa otros términos para describir lo que estás buscando.</li></ul>',
					},
					contactsTitleText: { value: '¿Aún no encuentras lo que buscas? <a href="/contact-us">Contáctanos</a>.' },
					contactsList: {
						value:
							'<div className=\'ss__no-results__contact__detail\'>\n                        <h4 className="ss__no-results__contact__detail__title">Dirección</h4>\n                        <p className="ss__no-results__contact__detail__content">123 Calle Dirección, Ciudad, Estado, Código Postal</p>\n                    </div>\n                    <div className=\'ss__no-results__contact__detail\'>\n                        <h4 className="ss__no-results__contact__detail__title">Horario</h4>\n                        <p className="ss__no-results__contact__detail__content">Lunes a Sábado, 00:00am - 00:00pm Domingo, 00:00am - 00:00pm</p>\n                    </div>\n                    <div className=\'ss__no-results__contact__detail\'>\n                        <h4 className="ss__no-results__contact__detail__title">Teléfono</h4>\n                        <p className="ss__no-results__contact__detail__content"><a href="tel:1234567890">123-456-7890</a></p>\n                    </div>\n                    <div className=\'ss__no-results__contact__detail\'>\n                        <h4 className="ss__no-results__contact__detail__title">Correo Electrónico</h4>\n                        <p className="ss__no-results__contact__detail__content"><a href="mailto:email@site.com">email@site.com</a></p>\n                    </div>',
					},
				},
			};
		},
	},
]);
