describe('find products', () => {
    it('find a products',()=>{
      cy.visit('http://127.0.0.1:5500/movie.html')
      cy.xpath("//div[@class='full']/div").should('have.length',3)
    })
    it('chained xpath',()=>{
        cy.visit('http://127.0.0.1:5500/movie.html')
        cy.xpath("//div[@class='full']").xpath('./div').should('have.length',3)
      })
  })

  