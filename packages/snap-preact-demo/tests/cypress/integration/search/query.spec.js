describe('Query', () => {
	it('runs the query', () => {
		cy.visit('https://localhost:2222/?q=dress');

		cy.snapController().then(({ store }) => {
			expect(store).to.haveOwnProperty('pagination');
			expect(store.pagination.totalResults).to.be.greaterThan(0);
			expect(store.pagination.page).to.equal(1);
		});
	});
});
