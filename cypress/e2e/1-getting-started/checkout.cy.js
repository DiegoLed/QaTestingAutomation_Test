describe('Chekout - Sauce Demo', () => {

  beforeEach(() => {
    cy.login("standard_user", "secret_sauce")
    cy.get('.app_logo').should('have.text','Swag Labs')
    cy.get('[data-test="shopping-cart-badge"]').should('not.exist')
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('not.exist')
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')
    cy.get('[data-test="shopping-cart-badge"]').should('be.visible')
    cy.get('[data-test="shopping-cart-badge"]').should('have.text','1')
    cy.get('[data-test="cart-contents-container"]').should('not.exist')
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="cart-contents-container"]').should('be.visible')
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')
    cy.get('[data-test="checkout"]').click()  
  })
    
    it('Completar checkout con datos válidos', () => {
        cy.get('[data-test="firstName"]').type('Juan')
        cy.get('[data-test="lastName"]').type('Pérez')
        cy.get('[data-test="postalCode"]').type('5000')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="checkout-complete-container"]')
        .should('be.visible')
        .and('contain','Thank you for your order!')
    })

    it('Completar checkout sin completar campos obligatorios', () => {
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="error"]').should('be.visible')
        .and('have.text','Error: First Name is required')
    })
})