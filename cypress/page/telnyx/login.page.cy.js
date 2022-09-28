import Page from '../page.cy'
const emailInputLoginPage="[aria-label='loginForm']>div>div input[name='email']"
const passwordInputLoginPage="[name='password']"
const loginButtonLoginPage="[aria-label='loginForm'] button[type='submit']"

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

}

module.exports = new LoginPage();