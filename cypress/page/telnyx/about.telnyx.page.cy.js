import Page from '../page.cy'
const chicagoOfficelocationLink='[href*="Chicago"]'

class AboutTelnixPage{
    clickChicagoOfficelocationLink(){
    Page.clickWithDeleteTarget(chicagoOfficelocationLink)
    cy.request(url).its('body').should('include', '</html>') 
   
    }
}

module.exports = new AboutTelnixPage();