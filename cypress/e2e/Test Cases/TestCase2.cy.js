describe('Select the product from the menu', () => {
    it('Get the product list', () => {
  const productNames = [];
        cy.visit('https://www.weightworld.it/');
        cy.contains('Superfoods')
            .should('be.visible')
            .realHover();
        cy.contains('Ashwagandha')
            .should('be.visible')
            .click();
        cy.get('[data-rel="CatProdList"]')
            .should('be.visible');
        cy.get('[data-prod_name]').each(($el) => {
            // Get the value of the data-prod_name attribute
            const productName = $el.attr('data-prod_name');
 
            // Push the value to the array
            productNames.push(productName);
        }).then(() => {
            // Log the array to verify
            productNames.forEach($product => {
                cy.log('Product Name:', $product);
            })
            // You can also perform assertions or further actions with the array
            expect(productNames).to.include('Ashwagandha in Capsule');
        });
    })
})

