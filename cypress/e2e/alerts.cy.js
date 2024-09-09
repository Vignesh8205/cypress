
/// <reference types="cypress" />


describe('Alerts',()=>{
    //1) javascript alert : it will have some text and "ok" button


    it.skip('js alerts', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()
       cy.on('window:alert',(t)=>{
         expect(t).to.contain('I am a JS Alert')
       })
       // alert window automatically closed by window
       cy.get('#result').should('have.text','You successfully clicked an alert')
       

    });


    //2) javascript confirm alert: it will hava some text  'ok ' and 'cancel' button
     it('javascript confirm alert - ok', () => {

      cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
      cy.get("button[onclick='jsConfirm()']").click()
       cy.on('window:confirm',(t)=>{
        expect(t).to.contain('I am a JS Confirm')
       })

       // cypress automatically closed alert window by using ok button


      cy.get('#result').should('have.text','You clicked: Ok')

  
     });


     it('javascript confirm alert - cancel', () => {

      cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
      cy.get("button[onclick='jsConfirm()']").click()
       cy.on('window:confirm',(t)=>{
        expect(t).to.contain('I am a JS Confirm')
       })

       cy.on('window:confirm',()=>false)  // cypress alert close using cancel button

       


      cy.get('#result').should('have.text','You clicked: Cancel')

  
     });





    //3)javascript prompt alert:it will have some text with a text box for user input along with ok



     it.skip('javascript prompt - ok buutton', () => {

      cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
     cy.window().then((win)=>{

      cy.stub(win,'prompt').returns('welcome to our testing')

     })

     cy.get("button[onclick='jsPrompt()']").click()
     // cypress will automattically close prompted alert -- it will use ok button -- by default
     cy.get('#result').should('have.text','You entered: welcome to our testing')
 
     });

     it.only('javascript prompt - cancel buutton', () => {

      cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
     cy.window().then((win)=>{

      cy.stub(win,'prompt').returns('welcome to our testing')

     })

     cy.get("button[onclick='jsPrompt()']").click()
    //  cy.on('window:prompt',()=>false)  -- see this later is not working particular window
     // cypress will automattically close prompted alert -- it will use ok button -- by default
     cy.get('#result').should('have.text','You entered: welcome to our testing')
 
     });




    //4)Authenticate alert  

    it.only('Authenticate alert', () => {
    //only is this function only running

    //1 aproach 
    // cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:{
    // username:'admin',
    // password:'admin'
    // }})

    // // it is prompt authentication 

    // cy.get("div[class='example'] p").should('have.contain','Congratulations')

      
    // });

    // another way prompt authentication


//https://admin:admin@the-internet.herokuapp.com/basic_auth
//username and password merge in url 
    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
    cy.get("div[class='example'] p").should('have.contain','Congratulations')


})
    
    //1) javascript alert : it will have some text and "ok" button

})