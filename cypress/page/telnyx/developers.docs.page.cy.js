import Page from '../page.cy'

class DevelopersDocsPage{
    clickPricingButton(){
        Page.clickX(pricingButton)
    }
}
module.exports = new DevelopersDocsPage();