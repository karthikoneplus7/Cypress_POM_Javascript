/// <reference types='cypress'/>

import Log from "./Login"


describe('ToolTip Automation',() =>{

 const  L1 = new Log();
   
it('Script for ToolTip close',()=>{

cy.visit('http://localhost:4200')
cy.contains('Modal & Overlays').click()
cy.contains('Tooltip').click()
cy.get('[icon="menu-2-outline"]').click()
cy.contains('Show Tooltip').click()
cy.get('nb-tooltip').should('contain',"This is a tooltip")
console.log('print')

})

it('Dialog',()=>{

    cy.get('[data-name="menu-2"]').click()
  //  cy.contains('Modal & Overlays').click()
    cy.contains('Dialog').click()
    cy.get('[icon="menu-2-outline"]').click()
    cy.contains('Open Dialog with component').click()
    cy.wait(2000)
    cy.contains('Dismiss Dialog').click()
})

it.only('Google Pop-Up',function() {
    L1.Navigate()
  // L1.menu_open()
    cy.contains('Tables & Data').click()
    cy.contains('Smart Table').click()
    L1.menu_close()
    cy.get('tbody tr').eq(2).find('.nb-trash').click()
    cy.get('tbody tr').eq(2).contains('Jacob')
})

})
