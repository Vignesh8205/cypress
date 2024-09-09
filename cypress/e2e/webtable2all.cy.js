describe('webtable ',()=>{
    it('check all data in tables ', () => {
        cy.visit('https://webscraper.io/test-sites/tables')
        cy.get("table[class='table table-bordered']>tbody>tr").each(($row,index,$rows)=>{
            cy.wrap($row).within(()=>{   // within method is a rou inside data accessing
    
                cy.get('td').each(($col,index,$cols)=>{
                    cy.log($col.text())
    
                })
    
            })
    
        })
    });


    it('pagination', () => {
        // find total number of pages

        
    });
})