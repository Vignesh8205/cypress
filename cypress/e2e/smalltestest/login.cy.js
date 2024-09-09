class Login {
    constructor(userpath,passwordpath,user,pass){

        this.userpath=userpath;
        this.passwordpath=passwordpath;
        this.user=user;
        this.pass=pass;
    
    }

    captcha(){
        cy.frameLoaded("iframe[title='Widget containing checkbox for hCaptcha security challenge']") 
        
    }



    first(){
  
        cy.get(this.userpath).type(this.pass);
        cy.get(this.passwordpath).type(this.user);

        cy.get('form').submit()
         
    }


}

module.exports=Login;