



describe('assertions',()=>{
//     it('implicit assertions', () => {

//         // should method
//         cy.visit('http://127.0.0.1:5500/movie.html')
//         // cy.url().should('include','movie') // include  this is one keyword cheking in url
//         // cy.url().should('eq','http://127.0.0.1:5500/movie.html') // eq is equality cheking in current url
//         // cy.url().should('contain','movie.html') // contain is the cheking in keyword inclde and contain is same


// // another way writting assertion

//         // cy.url().should('include','movie') // include  this is one keyword cheking in url
//         //         .should('eq','http://127.0.0.1:5500/movie.html') // eq is equality cheking in current url
//         //         .should('contain','movie.html')     

//     // and method

//     cy.url().and('eq','http://127.0.0.1:5500/movie.html')
//             .and('contain','http://127.0.0.1:5500/')
//             .and('not.contain','movies') // not.contain means key word not matching

//     cy.title().should('eq','TicketBooking')     // title() method is return website title 
//               .and('include','Ticket')
//               .and('contain','Booking')

//               cy.get(':nth-child(1) > img').should('be.visible') //be.visible this key word is image or more elements visible cheking keyword
//                                           .and('exist')  // exist keyword :the logo is exist or not not only logo any kind of elements
//             cy.xpath('//a').should('have.length',3) // no of links in a tag elements

//             cy.get('#user_name').type('vignesh')   //provide value into inputbox

//             cy.get('#user_name').should('have.value','vignesh')   //check the value 

//             cy.get('#password').type('123456')   //provide password

//             cy.get('#password').should('have.value','123456')

//     });
   it('explicit assertions',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
       

        let expname='mandaVgggVV'

       cy.get('.oxd-userdropdown-name').then( (x)=>{
           let actname= x.text()
          
        //  BDD method
           expect(actname).to.equal(actname)
           expect(actname).to.not.equal(expname)
        // TDD method

        assert.equal(actname,actname)
        assert.notEqual(actname,expname)
       } )

   })

    
})



