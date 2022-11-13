import Page from './page.cy'
const pricingButton='(//*[@href="/pricing"])[2]';
const networkingTitle='//h1//span[text()="Networking pricing"]'

class NetworkPage{
    clickPricingButton(){
        Page.clickX(pricingButton)
    }
    getNetworkingTitle(){
     return networkingTitle
    }
}
module.exports = new NetworkPage();