import MainPortalPage from '../../page/portal.telnyx/portal.main.page.cy'
import Expect from'../../helper/expect.cy'
const url=Cypress.env('URLS')
const login=Cypress.env('USER')
const password=Cypress.env('PASSWORD')
const loginForm='[data-testid="login.signin"]'
const PricingPortalPage='//div [@aria-selected="true"] [text()="Voice"]'


describe('Portal telnyx drop-down menu testing', () => {
  beforeEach(() => {
    cy.visit(url['portal']);
    cy.login(login,password);

  })

  it('ID-2 Sign out user from portal.telnyx.com', () => {
    MainPortalPage.moveToUserDropDownMenu();
    MainPortalPage.clickSignOutButton();
    Expect.shouldContainUrl('sign-in');
    Expect.shouldElementBeVisible(loginForm);
    })   
    
  it('ID-3 Open voice pricing at portal.telnyx.com', () => {
    MainPortalPage.moveToUserDropDownMenu();
    MainPortalPage.clickPricingButtonInDropDown();
    Expect.shouldContainUrl('app/pricing');
    Expect.shouldElementXBeVisible(PricingPortalPage);

    })
    afterEach(() => {
      cy.screenshot({ overwrite: false })
      })  
  })