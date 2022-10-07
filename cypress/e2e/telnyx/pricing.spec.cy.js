import MainPage from '../../page/telnyx/main.page.cy'
import PricingPage from '../../page/telnyx/pricing.page.cy'
import Expect from'../../helper/expect.cy'

describe('Pricing page testing', () => {
    beforeEach(() => {
    MainPage.open();
    Expect.toHaveUrl('https://telnyx.com/');
    cy.closeModalWindowInManePage();
  })
    it('ID-10 Open pricing of SMS API for Ukraine in the pricing page', () => {
    MainPage.clickSmsApiPricingDropDownHeaderMenu();
    PricingPage.clickPricingMassagingPoPUp();
    PricingPage.clickUkrainePriceMassagingInSelect();

    Expect.shouldContainUrl('messaging/ua');
    Expect.shouldElementXBeVisible(PricingPage.getMessagingPricingUkraineTitleTitle());
    })  
    
    afterEach(() => {
      cy.screenshot({ overwrite: false })
      })   
  })