const Login = require("./smalltestest/login.cy");

describe("login",()=>{

    it('login1', () => {
        cy.visit('https://www.tcftechnologys.com/wp-login.php')
    var  loginobj=new Login('#user_login','#user_pass','hiiii','12345678')
        loginobj.first()
        
    });

})

