

describe('css selectors',()=>{
    it('css selectors', () => {
        cy.visit('http://localhost:5173/')
        // Pke_EE 
        cy.get('#user_id').type('8205')  //tag is optional use correct id 
        
        // // _2iLD__
        // cy.get('._2iLD__').click()
        // css-1rynq56 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-1iln25a r-1vgyyaa r-1b43r93 r-1rsjblm r-op4f77
        // cy.get('.css-1rynq56 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-1iln25a r-1vgyyaa r-1b43r93 r-1rsjblm r-op4f77').contains('TECHNOSPORT')
    });
})