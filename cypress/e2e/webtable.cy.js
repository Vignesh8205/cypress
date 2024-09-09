// how we can handle web Table 
describe('handle tables',()=>{
    // beforeEach it is hook
    // will be excuted multiple time 
    // this blocky excuted 
    beforeEach('login',()=>{
     cy.visit('https://demo.opencart.com/admin/index.php')
     cy.get('#input-username').type('demo')
     cy.get('#input-password').type('demo')
     cy.get("button[type='submit']").click();

     cy.get('.btn-close').click(); // close the alert page 

     // customers main menu==> customers

     cy.get('#menu-customer>a').click(); // customers main menu
     cy.get("#menu-customer>ul>li:first-child").click(); //select the menu customers in sub item



    })

    it('check the number of rows & columns', () => {
        
    cy.get("table[class$='table table-bordered table-hover']>tbody>tr").should('have.length',10) // number of rows in table
    cy.get("table[class$='table table-bordered table-hover']>thead>tr>td").should('have.length',7)// number of columns in table
    
    
    });


    it('check cell data from specific row and column', () => {

        cy.get("table[class$='table table-bordered table-hover']>tbody>tr:nth-child(4)>td:nth-child(3)").should('have.text','gorankreziccc90@gmail.com')
    
    
        
    });
    it('read all the rows & columns data in the first page', () => {
    cy.get("table[class$='table table-bordered table-hover']>tbody>tr").each(($row,index,$rows)=>{
        cy.wrap($row).within(()=>{

            cy.get('td').each(($col,index,$cols)=>{
                cy.log($col.text())

            })

        })

    })

    });

    it('pagination', () => {


        // find total number of pages
    //  let totalPages;
        // cy.get('.col-sm-6.text-end').then((e)=>{

        //   let mytext= e.text();  //Showing 1 to 10 of 19874 (1988 Pages)

        // totalPages= mytext.substring(  mytext.indexOf("(")+1 , mytext.indexOf("Pages")-1 )

        //   cy.log("total number of pages "+totalPages)


        // })

        let totalPages=5;

        for(let p=1;p<totalPages;p++){

            if (totalPages>1) {
                cy.log("Active Page is ==="+p)
                cy.get("ul[class='pagination']>li:nth-child("+p+")").click()
                cy.wait(3000)
            } 

            cy.get("table[class$='table table-bordered table-hover']>tbody>tr").each(($row,index,$rows)=>{
                cy.wrap($row).within(()=>{
        
                    cy.get('td:nth-child(3)').each(($col,index,$cols)=>{
                        
                        cy.log($col.text()) //email
         
                    })
        
                })
        
            })

        }

       







        
    });


})