import LoginPage from '../page/login.page.cy'
const closeModalWindowMainPage='[aria-label*="close"]'
const emailInputLoginPage="[aria-label='loginForm']>div>div input[name='email']"

Cypress.Commands.add('login', (username,password) => { 
    cy.get('body').then((body) => {
    if (body.find(emailInputLoginPage).length > 0) {
        LoginPage.clickEmailInputLoginPage(username);
        LoginPage.clickPasswordInputLoginPage(password);
        LoginPage.clickLoginButtonLoginPage()
        }    
    }) 
})

Cypress.Commands.add('closeModalWindowInManePage', () => { 
        cy.get('body').then((body) => {
        if (body.find(closeModalWindowMainPage).length > 0) {
        cy.get(closeModalWindowMainPage).click()
        }    
    }) 
})



