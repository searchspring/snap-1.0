// ***********************************************
// Custom Snap Cypress Configuration
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************

// Import commands.js using ES2015 syntax:
import './commands';
import './custom';
import { ignoredErrors } from './custom';

import { BeaconType } from '@searchspring/snap-tracker';

// ignore 3rd party uncaught exceptions - but not bundle exceptions
Cypress.on('uncaught:exception', (err) => {
	if (ignoredErrors?.length) {
		for (let i = 0; i < ignoredErrors.length; i++) {
			const checkFor = new RegExp(ignoredErrors[i].replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
			if (err.stack.match(checkFor)) {
				return false;
			}
		}
	}

	if (err.stack.match(/\/\/localhost:\d+\/bundle\./)) {
		return true;
	}

	return false;
});

beforeEach(() => {
	cy.intercept('GET', /.*athoscommerce.net\/v1\/autocomplete/).as('autocomplete');
	cy.intercept('GET', /.*athoscommerce.net\/v1\/search/).as('search');
	cy.intercept('GET', /.*athoscommerce.net\/v1\/category/).as('category');

	cy.intercept('POST', /analytics.athoscommerce.net\/beacon\/v2\/.*\/shopper\/login/, { success: true }).as('beacon/shopper/login');
	cy.intercept('POST', /analytics.athoscommerce.net\/beacon\/v2\/.*\/autocomplete\/render/, { success: true }).as('beacon/autocomplete/render');
	cy.intercept('POST', /analytics.athoscommerce.net\/beacon\/v2\/.*\/autocomplete\/impression/, { success: true }).as(
		'beacon/autocomplete/impression'
	);
	cy.intercept('POST', /analytics.athoscommerce.net\/beacon\/v2\/.*\/autocomplete\/addtocart/, { success: true }).as('beacon/autocomplete/addtocart');
	cy.intercept('POST', /analytics.athoscommerce.net\/beacon\/v2\/.*\/autocomplete\/clickthrough/, { success: true }).as(
		'beacon/autocomplete/clickthrough'
	);
	cy.intercept('POST', /analytics.athoscommerce.net\/beacon\/v2\/.*\/autocomplete\/redirect/, { success: true }).as('beacon/autocomplete/redirect');
	cy.intercept('POST', /analytics.athoscommerce.net\/beacon\/v2\/.*\/search\/render/, { success: true }).as('beacon/search/render');
	cy.intercept('POST', /analytics.athoscommerce.net\/beacon\/v2\/.*\/search\/impression/, { success: true }).as('beacon/search/impression');
	cy.intercept('POST', /analytics.athoscommerce.net\/beacon\/v2\/.*\/search\/addtocart/, { success: true }).as('beacon/search/addtocart');
	cy.intercept('POST', /analytics.athoscommerce.net\/beacon\/v2\/.*\/search\/clickthrough/, { success: true }).as('beacon/search/clickthrough');
	cy.intercept('POST', /analytics.athoscommerce.net\/beacon\/v2\/.*\/search\/redirect/, { success: true }).as('beacon/search/redirect');
	cy.intercept('POST', /analytics.athoscommerce.net\/beacon\/v2\/.*\/category\/render/, { success: true }).as('beacon/category/render');
	cy.intercept('POST', /analytics.athoscommerce.net\/beacon\/v2\/.*\/category\/impression/, { success: true }).as('beacon/category/impression');
	cy.intercept('POST', /analytics.athoscommerce.net\/beacon\/v2\/.*\/category\/addtocart/, { success: true }).as('beacon/category/addtocart');
	cy.intercept('POST', /analytics.athoscommerce.net\/beacon\/v2\/.*\/category\/clickthrough/, { success: true }).as('beacon/category/clickthrough');
	cy.intercept('POST', /analytics.athoscommerce.net\/beacon\/v2\/.*\/recommendations\/render/, { success: true }).as('beacon/recommendations/render');
	cy.intercept('POST', /analytics.athoscommerce.net\/beacon\/v2\/.*\/recommendations\/impression/, { success: true }).as(
		'beacon/recommendations/impression'
	);
	cy.intercept('POST', /analytics.athoscommerce.net\/beacon\/v2\/.*\/recommendations\/addtocart/, { success: true }).as(
		'beacon/recommendations/addtocart'
	);
	cy.intercept('POST', /analytics.athoscommerce.net\/beacon\/v2\/.*\/recommendations\/clickthrough/, { success: true }).as(
		'beacon/recommendations/clickthrough'
	);
	cy.intercept('POST', /analytics.athoscommerce.net\/beacon\/v2\/.*\/product\/pageview/, { success: true }).as('beacon/product/pageview');
	cy.intercept('POST', /analytics.athoscommerce.net\/beacon\/v2\/.*\/cart\/add/, { success: true }).as('beacon/cart/add');
	cy.intercept('POST', /analytics.athoscommerce.net\/beacon\/v2\/.*\/cart\/remove/, { success: true }).as('beacon/cart/remove');
	cy.intercept('POST', /analytics.athoscommerce.net\/beacon\/v2\/.*\/order\/transaction/, { success: true }).as('beacon/order/transaction');
	cy.intercept('POST', /analytics.athoscommerce.net\/beacon\/v2\/.*\/log\/snap/, { success: true }).as('beacon/log/snap');
});
