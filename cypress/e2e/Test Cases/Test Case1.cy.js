describe('Add Product to Cart and Redirect to Payment Page', () => {
  it('Search for a product and add the first result to cart', () => {
    // Visit the website
    cy.visit('https://www.weightworld.uk/');

    // Call the custom command
    cy.searchAndAddToCart('vita');
  });
});
