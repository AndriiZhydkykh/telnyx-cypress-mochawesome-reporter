import MainPortalPage from '../../page/portal.telnyx/portal.main.page.cy'
import Expect from'../../helper/expect.cy'
import LoginPage from '../../page/telnyx/login.page.cy'

describe('Portal telnyx drop-down menu testing', () => {
  beforeEach(() => {
    MainPortalPage.open();
    cy.login(LoginPage.getUser(),LoginPage.getPassword());

  })

  it('ID-2 Sign out user from portal.telnyx.com', () => {
    MainPortalPage.moveToUserDropDownMenu();
    MainPortalPage.clickSignOutButton();
    Expect.shouldContainUrl('sign-in');
    Expect.shouldElementBeVisible(MainPortalPage.getLoginForm());
    })   
    
  it('ID-3 Open voice pricing at portal.telnyx.com', () => {
    MainPortalPage.moveToUserDropDownMenu();
    MainPortalPage.clickPricingButtonInDropDown();
    Expect.shouldContainUrl('app/pricing');
    Expect.shouldElementXBeVisible(MainPortalPage.pricingPortalPage());

    })
    afterEach(() => {
      cy.screenshot({ overwrite: false })
      })  
  })