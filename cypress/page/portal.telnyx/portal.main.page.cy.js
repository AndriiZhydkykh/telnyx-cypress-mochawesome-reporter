import Page from '../page.cy'
const url=Cypress.env('URLS')
const signOutButton='[class="text-uppercase my-2"] button';
const dropDownMenu='react-title-bar svg[data-icon="angle-down"]';
const pricingButtonInDropDown='[href="/#/app/pricing"]';
const videoRoomButton='(//*[@href="/#/app/video/video-rooms"])[2]';
const loginForm='[data-testid="login.signin"]'
const pricingPortalPage='//div [@aria-selected="true"] [text()="Voice"]'

class MainPortalPage{
    clickDropDownMenu(){
        Page.click(dropDownMenu);
    }
    clickSignOutButton(){
        Page.click(signOutButton);
    }
     moveToUserDropDownMenu(){
        Page.moveTo(dropDownMenu);
    } 
    
    clickPricingButtonInDropDown(){
        Page.clickForceTrue(pricingButtonInDropDown);
    }
    clickVideoRoomButton(){
        Page.clickXForceTrue(videoRoomButton);
    } 
    getLoginForm(){
        return loginForm
    }
    getPricingPortalPage(){
        return pricingPortalPage
    }
    open(){
        cy.visit(url['portal']); 
      }
}
require('cypress-xpath')
module.exports = new MainPortalPage();