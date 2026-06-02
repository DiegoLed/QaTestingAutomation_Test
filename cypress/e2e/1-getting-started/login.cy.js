describe ('Login Sauce Demo',()=>{

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })

    it('Login exitoso',()=>{
        // cy.log('test 1') 
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.url().should('include','/inventory.html')
        cy.get('.app_logo').should('have.text','Swag Labs')
    })

    it('Login con contrasenia incorrecta',()=>{
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('wrong_password')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('have.text','Epic sadface: Username and password do not match any user in this service'
        )
    })

    it('Login con usuario bloqueado',()=>{
        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('have.text','Epic sadface: Sorry, this user has been locked out.')
    })

    it('Logout desde ek menú hamburguesa',()=>{
        // Login
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')   

        cy.get('[data-test="login-button"]').click()
        cy.url().should('include','/inventory.html')   

        cy.get('.app_logo').should('have.text','Swag Labs')

        // Abrir menú hamburguesa
        cy.get('#react-burger-menu-btn').click()
        // Hacer click en logout
        cy.get('#logout_sidebar_link').should('be.visible').click()
        // Verificar que se redirige a la página de login
        cy.url().should('include','/index.html')

        // Al redirigirse al login, verificar que el formulario se haya reseteado
        cy.get('[data-test="login-button"]').should('be.visible')
        cy.get('[data-test="username"]').should('be.empty')
        cy.get('[data-test="password"]').should('be.empty')
    })
})