
/// <reference types="cypress" />



describe('handle dropdowns',()=>{
 it.skip('dropdown with select tag', () => {
  cy.visit('https://www.zoho.com/commerce/free-demo.html')

  cy.get('#zcf_address_country')
           .select('Italy')
           .should('have.value','Italy')

    
 });

 it.skip('dropdown  without select', () => {
    cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
    cy.get('#select2-billing_country-container').click()
    cy.get('.select2-search__field').type('Italy')
                                    .type('{enter}')

   cy.get('#select2-billing_country-container').should('have.text','Italy')
   
   
 });

 it('auto suggest dropdown' , () => {
   cy.visit('https://www.wikipedia.org/')
   cy.screenshot()
   cy.get('#searchInput').type('delhi')
   cy.get('.suggestion-title').contains('Delhi University').click()
   
 });

 it.skip('dynamic dropdown', () => {

   cy.visit('https://www.google.com/')
   cy.get('.gLFyf').type('cypres automation')
                  
  //  cy.get('#jZ2SBf > .wM6W7d > span').contains('cypres automation tool').click()
   cy.get('#jZ2SBf > .wM6W7d > span').each(($el,$index,$list)=>{

      if($el.text()=='cypres automation tool'){

         cy.wrap($el).click()

         
      }

   })
  
  //  cy.get('#jZ2SBf > .wM6W7d > span')
  //  cy.get('.gLFyf').should('have.value','cypres automation tool')

   
 });





})