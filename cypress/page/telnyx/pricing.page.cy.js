import Page from '../page.cy'
const seeNetworkingPricingButton='[href="/pricing/networking"]';
const pricingMassagingPoPUp='(//*[@aria-haspopup="listbox"])[1]'
const ukrainePriceMassagingInSelect='[href="/pricing/messaging/ua"]'

class PricingPage{
    clickSeeNetworkingPricingButton(){
        Page.click(seeNetworkingPricingButton)
    }
    clickPricingMassagingPoPUp(){
        Page.clickX(pricingMassagingPoPUp)
    }
    clickUkrainePriceMassagingInSelect(){
        Page.clickForceTrue(ukrainePriceMassagingInSelect)
    }
}
module.exports = new PricingPage();