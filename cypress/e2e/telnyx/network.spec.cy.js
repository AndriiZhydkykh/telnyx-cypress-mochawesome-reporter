import MainPage from '../../page/main.page.cy'
import NetworkPage from '../../page/network.page.cy'
import PricingPage from '../../page/pricing.page.cy'

import Expect from'../../helper/expect.cy'
describe('Network page testing', () => {
    before(() => {
    MainPage.open();
    Expect.toHaveUrl('https://telnyx.com/');
    cy.closeModalWindowInManePage();
  })
    it('ID-3 - Open prices of network in the network page', () => {
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