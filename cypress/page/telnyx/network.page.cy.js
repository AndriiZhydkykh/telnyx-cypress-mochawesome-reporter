import Page from '../page.cy'
const pricingButton='(//*[@href="/pricing"])[2]';

class NetworkPage{
    clickPricingButton(){
        Page.clickX(pricingButton)
    }
}
module.exports = new NetworkPage();