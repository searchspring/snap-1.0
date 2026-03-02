describe('Injection', () => {
	beforeEach(() => {
		cy.visit('https://localhost:2222/snap/');
	});

	it('injects into main containers', () => {
		cy.get('#athos-sidebar').should('not.be.empty');
		cy.get('#athos-content').should('not.be.empty');
	});
});
