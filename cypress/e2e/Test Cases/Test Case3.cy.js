
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
  
  




