import MainPage from '../../page/telnyx/main.page.cy'
import NetworkPage from '../../page/telnyx/network.page.cy'
import PricingPage from '../../page/telnyx/pricing.page.cy'

import Expect from'../../helper/expect.cy'
describe('Network page testing', () => {
    beforeEach(() => {
    MainPage.open();
    Expect.toHaveUrl('https://telnyx.com/');
    cy.closeModalWindowInManePage();
  })
    it('ID-7 - Open prices of network in the network page', () => {
    MainPage.clickNetworkHeaderMenuButton();
    NetworkPage.clickPricingButton();

    PricingPage.clickSeeNetworkingPricingButton();

    Expect.shouldContainUrl('pricing/networking');
    Expect.shouldElementXBeVisible(NetworkPage.getNetworkingTitle());
    })  
    afterEach(() => {
      cy.screenshot({ overwrite: false })
      })   
  })