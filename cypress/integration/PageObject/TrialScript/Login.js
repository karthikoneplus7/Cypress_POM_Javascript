class Login {

    Navigate() {
    
        cy.visit('http://localhost:4200')
    
    }
    
    Email() {
    
        return cy.get('[id="ap_email"]')
    
    }
    
    Password(){
    
        cy.get('[id="ap_password"]')
    
    
    }
    
    Continue(){
    
        cy.get('[id="continue"]')
    
    }
    
    menu_open(){
    
        cy.get('[data-name="menu-2"]').click()
    }

    menu_close(){

        cy.get('[icon="menu-2-outline"]').click()
    }
    
    }
    
    export default Login