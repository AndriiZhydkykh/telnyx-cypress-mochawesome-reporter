import Page from '../page.cy'
const developersDocsTitle='#telnyx-api-v2-documentation'
class DevelopersDocsPage{
    clickPricingButton(){
        Page.clickX(pricingButton)
    }
    getDevelopersDocsTitle(){
        return developersDocsTitle 
    }
}
module.exports = new DevelopersDocsPage();