// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-real-events/support';
Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });

  Cypress.Commands.add('searchAndAddToCart', (productName) => {
    // Close the cookie consent banner
    cy.get('#cookiescript_close').click();
  
    // Search for the product
    cy.get('#algo_search').clear().type(productName);
  
    // Add the first product from the search results to the cart
    cy.get(':nth-child(1) > .searchProd-block > .row > .col-7.p-0 > .btn').click();
  
    // Close any modal that appears
    cy.get('.modal-header > .btn').click();
  
    // Proceed to checkout
    cy.get('#basketCheckoutBtn').click();
  });
  
  