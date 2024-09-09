
/// <reference types="cypress" />
describe("check ui Elements",()=>{
    it('checking radio buttons', () => {
        cy.visit('http://localhost:5500/example.html')
        // visibility of radio buttons
        cy.get('#html').should('be.visible')
        cy.get('#css').should('be.visible')
        // selecting radio buttons

        cy.get('#html').check().should('be.checked')
        cy.get('#css').should('not.be.checked')

        cy.get('#css').check().should('be.checked')
        cy.get('#html').should('not.be.checked')

    });

    it('checking checkbox',()=>{
        cy.visit('http://localhost:5500/example.html')

//      visibility of the element

//         cy.get('#mon').should('be.visible')
// // selecting the single checkbox in monday
//        cy.get('#mon').check().should('be.checked')
//        cy.get('#mon').uncheck().should('not.be.checked')

// selecting all the check boxes 

    cy.get("input.form-input[type='checkbox']").check().should('be.checked')
    cy.get("input.form-input[type='checkbox']").uncheck().should('not.be.checked')

    // select first check box

    cy.get("input.form-input[type='checkbox']").first().check()
    cy.get("input.form-input[type='checkbox']").last().check()


    


    })
})