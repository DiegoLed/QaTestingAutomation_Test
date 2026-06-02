describe('SauceDemo - Carrito de compras', () => {

  beforeEach(() => {
    //Utilizo los comandos personalizados para evitar repetir código en cada test
    cy.login(standard_user, secret_sauce)
    })
    
    it('Agregar un producto al carrito', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')
        cy.get('[data-test="shopping-cart-badge"]').should('contain', '1')
    })

    it('Agregar multiples productos al carrito', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="remove-sauce-labs-bike-light"]').should('be.visible')
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
        cy.get('[data-test="remove-sauce-labs-onesie"]').should('be.visible')
        cy.get('[data-test="shopping-cart-badge"]').should('contain', '3')
    })

    it('Eliminar un producto del carrito', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="remove-sauce-labs-bike-light"]').should('be.visible')
        cy.get('[data-test="shopping-cart-badge"]').should('contain', '2')
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.url().should('include','/cart.html')
        cy.get('[data-test="checkout"]').should('be.visible')
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('not.exist')
        cy.get('[data-test="remove-sauce-labs-bike-light"]').should('be.visible')
        cy.get('[data-test="shopping-cart-badge"]').should('contain', '1')
    })

})