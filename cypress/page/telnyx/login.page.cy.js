import Page from '../page.cy'
const emailInputLoginPage="[aria-label='loginForm']>div>div input[name='email']"
const passwordInputLoginPage="[name='password']"
const loginButtonLoginPage="[aria-label='loginForm'] button[type='submit']"
const dropDownMenu='react-title-bar svg[data-icon="angle-down"]';
const user=Cypress.env('USER')
const password=Cypress.env('PASSWORD')

class LoginPage{
    clickEmailInputLoginPage(value){
        Page.type(emailInputLoginPage,value)
    }
    clickPasswordInputLoginPage(value){
        Page.type(passwordInputLoginPage,value)
    }
    clickLoginButtonLoginPage(){
        Page.click(loginButtonLoginPage)
    }
    getDropDownMenuInPortal(){
        return dropDownMenu
    }
    getUser(){
        return user
    }
    getPassword(){
        return password
    }

}

module.exports = new LoginPage();