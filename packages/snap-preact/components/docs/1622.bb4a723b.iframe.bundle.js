'use strict';
(self.webpackChunk_searchspring_snap_preact = self.webpackChunk_searchspring_snap_preact || []).push([
	[1622],
	{
		'./src/Templates/Stores/library/languages/fr.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			__webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { fr: () => fr });
			const fr = {
				recommendation: {},
				button: {},
				search: {},
				list: {},
				radioList: {},
				layoutSelector: { label: {} },
				autocomplete: {
					trendingTitle: { value: 'Recherches populaires' },
					termsTitle: { value: '' },
					contentTitle: { value: '' },
					facetsTitle: { value: 'Filtres' },
					historyTitle: { value: 'Recherche précédente' },
					closeButton: { value: 'Fermer la saisie semi-automatique', attributes: { 'aria-label': 'Fermer la saisie semi-automatique' } },
					noResultsText: {
						value: (data) =>
							`<p>Aucun résultat trouvé pour "${
								data?.controller?.store?.search.originalQuery?.string || data?.controller?.store?.search.query?.string
							}".</p><p>Veuillez essayer une autre recherche.</p>`,
					},
					contentInfo: {
						value: (data) =>
							`voir ${data?.controller?.store?.pagination.totalResults} ${
								data?.controller?.store?.filters.length && data?.controller?.store?.filters.length > 0 ? 'filtré' : ''
							} résultat${1 == data?.controller?.store?.pagination.totalResults ? '' : 's'} for "${data?.controller?.store?.search.query?.string}"`,
					},
					historyTerm: {
						attributes: { 'aria-label': (data) => `article ${data?.index + 1} de ${data?.controller?.store?.history.length}, ${data?.term?.value}` },
					},
					trendingTerm: {
						attributes: { 'aria-label': (data) => `article ${data?.index + 1} de ${data?.controller?.store?.trending.length}, ${data?.term?.value}` },
					},
					suggestionsTerm: {
						attributes: { 'aria-label': (data) => `article ${data?.index + 1} de ${data?.controller?.store?.terms.length}, ${data?.term?.value}` },
					},
				},
				sidebar: { titleText: { value: 'Filtres' } },
				recommendationBundle: {
					seedText: { value: 'Ce produit' },
					ctaButtonText: { value: 'Ajouter tout au panier' },
					ctaButtonSuccessText: { value: 'Offre groupée ajoutée!' },
				},
				mobileSidebar: {
					openButtonText: { value: 'Filtres' },
					clearButtonText: { value: 'Tout Effacer' },
					applyButtonText: { value: 'Appliquer' },
					titleText: { value: 'Options de Filtrage' },
					closeButtonText: { attributes: { 'aria-label': 'fermer le bouton Filtres' } },
				},
				sortBy: { label: { value: 'Trier Par' } },
				perPage: { label: { value: 'par page' } },
				facetsHorizontal: {
					dropdownButton: {
						attributes: {
							'aria-label': (data) =>
								`actuellement ${data?.selectedFacet?.field === data?.facet?.field ? 'effondré' : 'ouvrir'} ${
									data?.facet?.field
								} liste déroulante des facettes ${data?.facet?.values?.length ? data?.facet?.values?.length + ' choix' : ''}`,
						},
					},
				},
				filterSummary: { title: { value: 'Filtres Actuels' }, clearAllLabel: { value: 'Tout effacer' } },
				facet: {
					showMoreText: { value: 'Afficher Plus' },
					showLessText: { value: 'Montrer Moins' },
					dropdownButton: {
						attributes: {
							'aria-label': (data) =>
								`actuellement ${data?.facet?.collapsed ? 'effondré' : 'ouvrir'} ${data?.facet?.label} liste déroulante des facettes ${
									data?.facet?.values?.length ? data?.facet?.values?.length + ' choix' : ''
								}`,
						},
					},
				},
				select: {
					buttonLabel: {
						attributes: {
							'aria-label': (data) =>
								`${data?.label} dérouler, ${data?.options?.length} choix ${
									data?.selectedOptions?.length ? `, L'option actuellement sélectionnée est ${data?.selectedOptions[0].label}` : ''
								}`,
						},
					},
				},
				radio: {
					radio: {
						attributes: {
							'aria-label': (data) => `${data?.disabled ? 'désactivé' : ''} ${data?.checkedState ? 'à carreaux' : 'décoché'} bouton radio`,
						},
					},
				},
				pagination: {
					previous: { attributes: { 'aria-label': 'aller à la page précédente' } },
					next: { attributes: { 'aria-label': 'aller à la page suivante' } },
					first: { attributes: { 'aria-label': 'aller à la première page' } },
					last: { attributes: { 'aria-label': (data) => `aller à la dernière page ${data?.pagination?.last?.number}` } },
					page: { attributes: { 'aria-label': (data) => `aller à la page ${data?.page?.number}` } },
				},
				paginationInfo: { infoText: { value: ({ pagination }) => `${pagination?.totalResults} produits` } },
				loadMore: {
					loadMoreButton: { attributes: { 'aria-label': 'Charger plus' } },
					progressText: { value: (data) => `Vous avez consulté ${data?.pagination?.end} de ${data?.pagination?.totalResults} produits` },
				},
				grid: { showMoreText: { value: (data) => `+ ${data?.remainder}` }, showLessText: { value: 'Moins' } },
				filter: {
					filter: {
						attributes: {
							'aria-label': (data) => `${data?.label ? `supprimer la sélection ${data?.label} filtre ${data?.value}` : data?.value || ''}`,
						},
					},
				},
				facetSlider: {
					sliderHandle: {
						attributes: {
							'aria-label': (data) => `${data?.facet?.label} bouton curseur`,
							'aria-valuetext': (data) =>
								`${data?.facet?.label} bouton curseur, valeur actuelle ${data?.value}, ${
									data?.facet?.range?.low ? `valeur minimale ${data?.facet?.range?.low},` : ''
								} ${data?.facet?.range?.high ? `valeur maximale ${data?.facet?.range?.high}` : ''}`,
						},
					},
				},
				facetPaletteOptions: {
					paletteOption: {
						attributes: {
							'aria-label': (data) =>
								'' +
								(data?.value?.filtered
									? `supprimer le filtre sélectionné ${data?.facet?.label || ''} - ${data?.value?.label}`
									: data?.facet?.label
									? `filtrer par ${data?.facet?.label} - ${data?.value?.label}`
									: `filtrer par ${data?.value?.label}`),
						},
					},
				},
				facetListOptions: {
					listOption: {
						attributes: {
							'aria-label': (data) =>
								'' +
								(data?.value?.filtered
									? `supprimer le filtre sélectionné ${data?.facet?.label || ''} - ${data?.value?.label}`
									: data?.facet?.label
									? `filtrer par ${data?.facet?.label} - ${data?.value?.label}`
									: `filtrer par ${data?.value?.label}`),
						},
					},
				},
				facetHierarchyOptions: {
					hierarchyOption: {
						attributes: {
							'aria-label': (data) =>
								'' +
								(data?.value?.filtered
									? `supprimer le filtre sélectionné ${data?.facet?.label || ''} - ${data?.value?.label}`
									: data?.facet?.label
									? `filtrer par ${data?.facet?.label} - ${data?.value?.label}`
									: `filtrer par ${data?.value?.label}`),
						},
					},
				},
				facetGridOptions: {
					gridOption: {
						attributes: {
							'aria-label': (data) =>
								'' +
								(data?.value?.filtered
									? `supprimer le filtre sélectionné ${data?.facet?.label || ''} - ${data?.value?.label}`
									: data?.facet?.label
									? `filtrer par ${data?.facet?.label} - ${data?.value?.label}`
									: `filtrer par ${data?.value?.label}`),
						},
					},
				},
				errorHandler: {
					warningText: { value: '<b>Avertissement:&nbsp;</b>' },
					infoText: { value: '<b>Informations:&nbsp;</b>' },
					errorText: { value: '<b>Erreur:&nbsp;</b>' },
					reloadText: { value: 'Recharger' },
				},
				checkbox: {
					checkbox: {
						attributes: {
							'aria-label': (data) => `${data?.disabled ? 'désactivé' : ''} ${data?.checkedState ? 'à carreaux' : 'décoché'} case à cocher`,
						},
					},
				},
				searchHeader: {
					titleText: {
						value: (data) =>
							`Montrant ${
								data?.pagination?.multiplePages
									? `<span class="ss__search-header__results-count-range"> ${data.pagination?.begin} - ${data.pagination?.end} de </span>`
									: ''
							} \n                <span class="ss__search-header__results-count-total">${
								data?.pagination?.totalResults
							}</span> \n                résultat${1 == data?.pagination?.totalResults ? '' : 's'} \n                ${
								data?.search?.query ? `pour <span class="ss__search-header__results-query">"${data?.search?.query.string}"</span>` : ''
							}\n            `,
						attributes: { 'aria-label': (data) => `Affichage maintenant de ${data?.pagination?.totalResults} éléments dans la grille de produits` },
					},
					correctedQueryText: {
						value: (data) =>
							`Aucun résultat trouvé pour <em>"${data?.search?.originalQuery?.string}"</em>, montrant les résultats pour <em>"${data?.search?.query?.string}"</em> plutôt.`,
						attributes: {
							'aria-label': (data) =>
								`Aucun résultat trouvé pour ${data?.search?.originalQuery?.string}, safficher les résultats pour ${data?.search?.query?.string} à la place`,
						},
					},
					noResultsText: {
						value: (data) =>
							'' +
							(data?.search?.query
								? `<span>\n                    Aucun résultat pour <span class="ss__search-header__results-query">"${data?.search?.query?.string}"</span> trouvée.\n                </span>`
								: '<span>Aucun résultat trouvé.</span>'),
						attributes: { 'aria-label': (data) => `Aucun résultat trouvé pour ${data?.search?.query?.string}` },
					},
					didYouMeanText: {
						value: (data) => `Vouliez-vous dire <a href=${data?.search?.didYouMean?.url.href}>${data?.search?.didYouMean?.string}</a>?`,
					},
				},
				noResults: {
					suggestionsTitleText: { value: 'Suggestions' },
					suggestionsList: {
						value:
							'<ul className="ss__no-results__suggestions__list"><li className="ss__no-results__suggestions__list__option">Vérifiez les fautes d’orthographe.</li><li className="ss__no-results__suggestions__list__option">Supprimez les éventuels mots-clés redondants (ie: "produits").</li><li className="ss__no-results__suggestions__list__option">Utilisez d\'autres mots pour décrire ce que vous recherchez.</li></ul>',
					},
				},
			};
		},
	},
]);
