describe('Infinite Setting Test', () => {
	it('has infinite functionality', () => {
		cy.on('window:before:load', (win) => {
			win.mergeSnapConfig = {
				controllers: {
					search: [
						{
							config: {
								settings: {
									infinite: {},
								},
							},
						},
					],
				},
			};
		});
		cy.visit('http://localhost:4444/');

		cy.snapStore().then((store) => {
			expect(store.config.settings.infinite).to.deep.equal({});

			// initial page
			const resultsPerPage = store.results.length;
			cy.get('.ss__result').should('have.length', resultsPerPage);

			// click next page, results should be appended
			cy.get('.ss__pagination__page--next').first().click();
			cy.snapStore().then((store) => {
				expect(store.results.length).to.equal(resultsPerPage * 2);
				expect(store.pagination.begin).to.equal(1);
				cy.get('.ss__result').should('have.length', resultsPerPage * 2);
			});

			//refresh page, should not backfill
			cy.reload().then(() => {
				cy.snapStore().then((store) => {
					expect(store.results.length).to.equal(resultsPerPage);
				});
			});
		});
	});

	it('has backfill results upon reload', () => {
		const backfill = 2;
		cy.on('window:before:load', (win) => {
			win.mergeSnapConfig = {
				controllers: {
					search: [
						{
							config: {
								settings: {
									infinite: {
										backfill,
									},
								},
							},
						},
					],
				},
			};
		});
		cy.visit('http://localhost:4444/');
		cy.snapStore().then((store) => {
			expect(store.config.settings.infinite).to.deep.equal({ backfill });

			// initial page
			const resultsPerPage = store.results.length;
			cy.get('.ss__result').should('have.length', resultsPerPage);

			// click next page, results should be appended
			cy.get('.ss__pagination__page--next').first().click();
			cy.snapStore().then((store) => {
				expect(store.results.length).to.equal(resultsPerPage * 2);
				expect(store.pagination.begin).to.equal(1);
				cy.get('.ss__result').should('have.length', resultsPerPage * 2);
			});

			//refresh page, should backfill
			cy.reload().then(() => {
				cy.snapStore().then((store) => {
					expect(store.results.length).to.equal(resultsPerPage * 2);
				});
			});

			// click next page again, expect 3 pages of results
			cy.get('.ss__pagination__page--next').first().click();
			cy.snapStore().then((store) => {
				expect(store.results.length).to.equal(resultsPerPage * 3);
				expect(store.pagination.begin).to.equal(1);
				cy.get('.ss__result').should('have.length', resultsPerPage * 3);
			});

			//refresh page, should NOT backfill again due to page > backfill and is at page 1
			cy.reload().then(() => {
				cy.snapStore().then((store) => {
					expect(store.results.length).to.equal(resultsPerPage);
					expect(store.pagination.current.number).to.equal(1);
				});
			});
		});
	});
});