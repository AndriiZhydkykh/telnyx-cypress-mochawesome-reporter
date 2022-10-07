import Page from '../page.cy'
const loginHeaderBtn='header a.blLdCs[href*="https://portal.telnyx.com/"]';
const networkHeaderMenuButton='(//*[@href="/solutions/global-ip-network"])[1]';
const developerDocsResourcesHeaderDropDownButton='header [href*="https://developers.telnyx.com/docs/"]'
const aboutTelnyxCompanyHeaderDropdownButton='//*[text()="About Telnyx"]'
const smsApiPricingHeaderDropDownButton='(//span[text()="SMS API"])[2]'

class MainPage{
    clickOnLoginHeaderBtn(){
        Page.click(loginHeaderBtn)
    }
    clickNetworkHeaderMenuButton(){
        Page.clickX(networkHeaderMenuButton)
    }

    clickDeveloperDocsResourcesHeaderDropDownButton(){
        Page.clickForceTrue(developerDocsResourcesHeaderDropDownButton)
    }
    clickAboutTelnyxCompanyHeaderDropdownButton(){
        Page.clickXForceTrue(aboutTelnyxCompanyHeaderDropdownButton)
    }
     clickSmsApiPricingDropDownHeaderMenu(){
        Page.clickXForceTrue(smsApiPricingHeaderDropDownButton)
    }

   open(){
    cy.visit('/')
   }

}

module.exports = new MainPage();