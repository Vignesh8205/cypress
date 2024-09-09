
/// <reference types="cypress" />

describe('Handle tabs', () => {

    it.skip('aproach1', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')  //parent window 
        // cy.get('.example>a').click()

        //target attribute -- it is navigating another tab  
        // target attribute remove reloding in current tabs


        // how to remove target attribute after elements click ---invoke('removeAttr','target')
        cy.get("a[href='/windows/new']").invoke('removeAttr','target').click() //clicking on link

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new') // open the window check the url

        cy.wait(5000)  // hold 5 sec in webpages
         //operations
         cy.go('back') // back to parent tap


    });

    it('aproach2', () => {

        // this method working in same domains 
        //
        cy.visit('https://the-internet.herokuapp.com/windows')  //parent window 


        cy.get("a[href='/windows/new']").then((e)=>{
           let url= e.prop('href')   // prop is properties it is represents return attribute value
           cy.visit(url)
        })

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new') // open the window check the url

        cy.wait(5000)  // hold 5 sec in webpages
         //operations
         cy.go('back') // back to parent tap

    });
  
})
