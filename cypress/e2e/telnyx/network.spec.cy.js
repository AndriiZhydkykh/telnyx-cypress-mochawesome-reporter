import MainPage from '../../page/telnyx/main.page.cy'
import NetworkPage from '../../page/telnyx/network.page.cy'
import PricingPage from '../../page/telnyx/pricing.page.cy'
const networkingTitle='//h1//span[text()="Networking pricing"]'
import Expect from'../../helper/expect.cy'
describe('Network page testing', () => {
    beforeEach(() => {
    cy.visit('/')
    Expect.toHaveUrl('https://telnyx.com/');
    cy.closeModalWindowInManePage();
  })
    it('ID-7 - Open prices of network in the network page', () => {
    MainPage.clickNetworkHeaderMenuButton();
    NetworkPage.clickPricingButton();

    PricingPage.clickSeeNetworkingPricingButton();

    Expect.shouldContainUrl('pricing/networking');
    Expect.shouldElementXBeVisible(networkingTitle);
    })  
    afterEach(() => {
      cy.screenshot({ overwrite: false })
      })   
  })