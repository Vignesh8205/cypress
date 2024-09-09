

describe('form validation',()=>{
    it('form-validation', () => {
        cy.visit('http://localhost:5173/')
        cy.get('#user_id').type('8857')
        cy.get('#first_name').type('vignesh')
        cy.get('#last_name').type('sugumar')
        cy.get('#email').type('vigneshphr2002@gmail.com')
        cy.get('#password').type('123456')
        cy.get('#conpassword').type('123456')
        cy.get('#sub-btn').click()
        cy.get('.text2').contains('You have succesfully singed up!')
    });
})