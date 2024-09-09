import 'cypress-iframe'

describe('MouseOperations', () => {



    it('MouseHover', () => {

     cy.visit("https://demo.opencart.com/")

     cy.get('body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)')
     .should('not.be.visible') 

     cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()  // triger is mouse function 
                                                                                    //mouseover is event using arguments

    cy.get('body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)')
                                       .should('be.visible')                                                                   

    });


    it('Right Click', () => {

      cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

      
     // Aproach 1
    //   cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu')// contextmenu is right click event
    //   cy.get('.context-menu-icon-copy > span').should('be.visible')

      // aproach 2
      cy.get(".context-menu-one.btn.btn-neutral").rightclick()// right is right click event
      cy.get('.context-menu-icon-copy > span').should('be.visible')






    });



    it.only('Double click', () => {
        cy.visit("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick")
        cy.frameLoaded("#iframeResult")  // load the frame

        // cy.get("[ondblclick='myFunction()']")
        // Approach 1 - triger()

        cy.iframe("#iframeResult").find()


    });


    it('drag and drop using plugin', () => {
        
    });



    it('scrolling page', () => {
        
    });



})
