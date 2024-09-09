// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

//Iframe  cmt 
Cypress.Commands.add('getIframe', (iframepath) => { 

    return cy.get(iframepath) // get frame path
                    .its('0.contentDocument.body') // document part
                    .should('be.visible') //verify the visible
                    .then(cy.wrap) // this one is wrap the frame and reurn the frame

                    
})










/// <reference types="cypress" />
 
