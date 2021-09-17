class Loginpage {

Navigate() {

    cy.visit('https://www.amazon.com')

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

}

export default Loginpage