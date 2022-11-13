import Page from './page.cy'
const seeNetworkingPricingButton='[href="/pricing/networking"]';
const pricingMassagingPoPUp='(//*[@aria-haspopup="listbox"])[1]'
const ukrainePriceMassagingInSelect='[href="/pricing/messaging/ua"]'
const messagingPricingUkraineTitleTitle='//h1//span[text()="Messaging pricing for Ukraine"]'


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
    getMessagingPricingUkraineTitleTitle(){
        return messagingPricingUkraineTitleTitle
    }
}
module.exports = new PricingPage();