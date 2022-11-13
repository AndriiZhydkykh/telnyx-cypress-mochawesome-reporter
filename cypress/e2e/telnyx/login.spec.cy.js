import MainPage from '../../page/main.page.cy'
import Expect from'../../helper/expect.cy'
import LoginPage from '../../page/login.page.cy'

describe('Login page testing', () => {
  before(() => {
    MainPage.open();
    Expect.toHaveUrl('https://telnyx.com/');
    cy.closeModalWindowInManePage();
  })
    it('ID-1 -Sign in with valid email account', () => {
    MainPage.clickOnLoginHeaderBtn();
    cy.login(Cypress.env('USER'),Cypress.env('PASSWORD'));
    Expect.shouldContainUrl('app');
    Expect.shouldElementBeVisible(LoginPage.getDropDownMenuInPortal());
    })
  afterEach(() => {
    cy.screenshot({ overwrite: false })
    })   
  })