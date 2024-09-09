
describe('my first test', () => {
  it('test1 title test',()=>{
    cy.visit('http://127.0.0.1:5500/movie.html')
    cy.title().should('eq','TicketBooking')
  })
  
})