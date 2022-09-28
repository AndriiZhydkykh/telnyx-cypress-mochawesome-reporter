import Page from '../page.cy'
const signOutButton='[class="text-uppercase my-2"] button';
const dropDownMenu='react-title-bar svg[data-icon="angle-down"]';
const pricingButtonInDropDown='[href="/#/app/pricing"]';
const videoRoomButton='(//*[@href="/#/app/video/video-rooms"])[2]';

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
}
require('cypress-xpath')
module.exports = new MainPortalPage();