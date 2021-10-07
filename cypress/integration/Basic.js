/// <reference types='cypress'/>

import Loginpage from "./PageObject/Loginpage"
import Login from "./PageObject/TrialScript/Login"


describe('Amazon login',() => {

   
        
  
    it('Credent',function () {

        const login1 = new Loginpage();
        const L1 = new Login();
        
       
       login1.Navigate()
        cy.get('[id="nav-link-accountList"]').click()
        login1.Email().type('Karthik')


    })
})