import MainPage from '../../page/telnyx/main.page.cy'
import Expect from'../../helper/expect.cy'
import LoginPage from '../../page/telnyx/login.page.cy'

describe('Login page testing', () => {
  beforeEach(() => {
    MainPage.open();
    Expect.toHaveUrl('https://telnyx.com/');
    cy.closeModalWindowInManePage();
  })
    it('ID-1 -Sign in with valid email account', () => {
    MainPage.clickOnLoginHeaderBtn();
    cy.login(LoginPage.getUser(),LoginPage.getPassword());
    Expect.shouldContainUrl('app');
    Expect.shouldElementBeVisible(LoginPage.getDropDownMenuInPortal());
    })
  afterEach(() => {
    cy.screenshot({ overwrite: false })
    })   
  })