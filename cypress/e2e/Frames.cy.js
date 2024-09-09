

import 'cypress-iframe'


/// <reference types="cypress" />

describe('handling frames', () => {

    it('approach1', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
      const  iframe= cy.get('#mce_0_ifr') // get frame path
                            .its('0.contentDocument.body') // document part
                            .should('be.visible') //verify the visible
                            .then(cy.wrap) // this one is wrap the frame and reurn the frame

                            
            
            
                            iframe.clear().type('welcome').type('{ctrl+a}') // type some words in
                            cy.get('[aria-label="Bold"]').click()
                            

                    
                        });

     it('approach 2 using custom commands', () => {
         cy.visit('https://the-internet.herokuapp.com/iframe')
             
       let iframe= cy.getIframe('#mce_0_ifr')     // this is custom commands                             
                                    
            iframe.clear().type('welcome').type('{ctrl+a}') // type some words in
            cy.get('[aria-label="Bold"]').click() 
            
        });


    it('approach 3 -- using cypress-iframe plugin ', () => {

       
        


        cy.visit('https://the-internet.herokuapp.com/iframe')

//
    cy.frameLoaded('#mce_0_ifr')  //load the frame 


    //we interact the frame 

    cy.iframe('#mce_0_ifr').clear().type('welcome  {ctrl+a}')


        // cypress  
        
   
        
    });
  
})
