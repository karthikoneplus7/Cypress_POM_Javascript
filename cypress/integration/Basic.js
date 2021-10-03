/// <reference types='cypress'/>

import Loginpage from "./PageObject/Loginpage"
import Login from "./PageObject/TrialScript/Login"


describe('Amazon login',() => {

    before ('try',() => {

        cy.fixture('Cred').then(function (test1) {

            this.testdata = test1
    
        })
        
    })
    it('Credent',function () {

        const login = new Loginpage();
        const L1 = new Login();
        L1.

        login.Navigate()
        cy.get('[id="nav-link-accountList"]').click()
        login.Email().type(this.testdata.email_id)


    })
})