
/*describe('Add Product to Cart and Redirect to Payment Page', () => {
    it('Search for a product and add the first result to cart', () => {
        
        cy.visit(' https://www.weightworld.uk/');
        cy.get('#cookiescript_close').click();
        cy.get('#algo_search').clear('v');
        cy.get('#algo_search').type('vita');
        cy.get(':nth-child(1) > .searchProd-block > .row > :nth-child(2) > .searchProdName').click();
        cy.get('.quantityOffer > .active').click();
      //  cy.get('[onclick="if (!window.__cfRLUnblockHandlers) return false; addToBasket('p',49936,'single_product', '', 1, 'Product Pages')"]').click();
      cy.get('.text-uppercase').scrollIntoView().should('be.visible');
 
      cy.get('.desktopBasket > .container > .row > .col-12')
  .should('be.visible') // Wait until the element is visible
  .click(); // Perform the click action
 
  cy.get('.col-12 > .stickyBasket-button > .btn').click();
  cy.get('#addToBasket > .modal-dialog > .modal-content > .modal-header').should('be.visible')
  cy.get('.modal-header > .btn').click();
 
  cy.get('.new-cart-main-wrapper > .customers-also-bought-wrapper > .your-basket-wrapper').scrollIntoView().should('be.visible')
  cy.get('#basketCheckoutBtn').click();
  cy.get('#email').click().type('veerashreemathu@gmail.com');
  cy.get('input[name="username"]').type('MyUsername');
   })
}) 

   describe('Place an Order', () => {
    it('Adds a product to the cart and places an order with test credentials', () => {
      // Visit the site
      cy.visit('https://www.weightworld.dk/');
      
      // Close the cookie consent popup if it appears
      cy.get('#cookiescript_close', { timeout: 10000 })
        .should('be.visible')
        .click();
      //search a product
      cy.get('#algo_search').type('gummies') 
      cy.get(':nth-child(1) > .searchProd-block').click()
  
      // Wait for the products to load and add the first product to the cart
      cy.get('.product-item', { timeout: 15000 })
        .should('be.visible')
        .first()
        .within(() => {
          cy.contains('Læg i Kurv').click(); // Adjust the button text if necessary
        });
  
      // Navigate to the cart and proceed to checkout
      cy.get('.cart-icon', { timeout: 10000 }).should('be.visible').click();
      cy.contains('Gå til Checkout', { timeout: 10000 }).should('be.visible').click();
  
      // Fill in the checkout form
      cy.get('#firstName').type('Test');
      cy.get('#lastName').type('User');
      cy.get('#email').type('testuser@example.com');
      cy.get('#phone').type('1234567890');
      cy.get('#postalCode').type('2000');
      cy.get('#address').type('Test Address');
  
      // Select the card payment option (Betalingskort)
      cy.contains('Betalingskort', { timeout: 10000 }).click();
  
      // Enter card details
      cy.get('#cardNumber').type('4242424242424242');
      cy.get('#expiryDate').type('12/25'); // Adjust format if needed
      cy.get('#cvv').type('123');
  
      // Place the order
      cy.contains('Bekræft Bestilling', { timeout: 10000 }).should('be.visible').click();
  
      // Verify successful redirection or confirmation message
      cy.url().should('include', '/confirmation');
    });
  });*/
  
  describe('Add Product to Cart and Redirect to Payment Page', () => {
    it('Search for a product and add the first result to cart', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit(' https://www.weightworld.uk/');
        cy.get('#cookiescript_close').click();
        cy.get('#algo_search').clear('v');
        cy.get('#algo_search').type('vita');
        cy.get(':nth-child(1) > .searchProd-block > .row > .col-7.p-0 > .btn').click();
        cy.get('.modal-header > .btn').click();
        cy.get('#basketCheckoutBtn').click();
        cy.get('#email').type('mveera8@gmail.com');
        cy.get('#del_firstname').type('Veerashree');
        cy.get('#del_lastname').type('Mathu');
        cy.get('#del_add1').type('dummy address');
        cy.get('#del_city').type('chennai');
        cy.get('#del_zipcode').type('2000');
        cy.get('#del_mobile').type('1234567890');
        cy.get('#paymentMethod_2 > .method-select > .offers-radios-list > .checkmark').click();
        cy.frameLoaded('iframe[class="payment-form  iframe-checkout"]'); // Load iframe if necessary
        cy.iframe().find('#cardNumber').type('4242424242424242'); // Test card number
        cy.iframe().find('#expiryDate').type('1234'); // MM/YY
        cy.iframe().find('#cvv').type('123'); // CVC    
      /* ==== End Cypress Studio ==== */
    })
  })
  
  




