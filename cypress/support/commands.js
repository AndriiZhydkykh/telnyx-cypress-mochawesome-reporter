
require('cypress-xpath')
import VideoRoomPortalPage from '../page/portal.telnyx/portal.videoroom.page.cy'
import MainPortalPage from '../page/portal.telnyx/portal.main.page.cy'
import LoginPage from '../page/telnyx/login.page.cy'
import Expect from'../helper/expect.cy'

const emailInputLoginPage="[aria-label='loginForm']>div>div input[name='email']"

Cypress.Commands.add('login', (username,password) => { 
    cy.get('body').then((body) => {
    if (body.find(emailInputLoginPage).length > 0) {
        LoginPage.clickEmailInputLoginPage(username);
        LoginPage.clickPasswordInputLoginPage(password);
        LoginPage.clickLoginButtonLoginPage()
        }    
    }) 
})
const closeModalWindowMainPage='[aria-label*="close"]'
Cypress.Commands.add('closeModalWindowInManePage', () => { 
        cy.get('body').then((body) => {
        if (body.find(closeModalWindowMainPage).length > 0) {
        cy.get(closeModalWindowMainPage).click()
        }    
    }) 
})

const textInVideoRoom='(//react-video-room//*[@data-testid="flex"])[2]'
const productPageButton='[href*="product_page"]'
Cypress.Commands.add('createVideoRoom', (roomName) => { 
    Expect.shouldElementXBeVisible(textInVideoRoom)
    cy.get('body').then((body) => {
    if (body.find(productPageButton).length > 0) {
        VideoRoomPortalPage.clickTryVideoRoomButton();
        VideoRoomPortalPage.setRoomNameInput(roomName);
        VideoRoomPortalPage.clickCreateVideoRoom();
    }    
    else{
        VideoRoomPortalPage.clickDeleteVideoRoomIcon();
        VideoRoomPortalPage.clickConfirmDeleteRoomButton();   
        VideoRoomPortalPage.clickTryVideoRoomButton();
        VideoRoomPortalPage.setRoomNameInput(roomName);
        VideoRoomPortalPage.clickCreateVideoRoom();
    }
}) 

})
Cypress.Commands.add('renameVideoRoom', (roomName,newRoomName) => { 
    Expect.shouldElementXBeVisible(textInVideoRoom)
    cy.get('body').then((body) => {
    if (body.find(productPageButton).length > 0) {
        VideoRoomPortalPage.clickTryVideoRoomButton();
        VideoRoomPortalPage.setRoomNameInput(roomName);
        VideoRoomPortalPage.clickCreateVideoRoom();
        MainPortalPage.clickVideoRoomButton();
        VideoRoomPortalPage.clickRenameVideoRoomIcon();
        VideoRoomPortalPage.setRoomNameInput(newRoomName);
        VideoRoomPortalPage.clickSaveRenameButton();  
    }    
    else{
      VideoRoomPortalPage.clickRenameVideoRoomIcon();
      VideoRoomPortalPage.setRoomNameInput(newRoomName);
      VideoRoomPortalPage.clickSaveRenameButton();
    }
}) 

})
Cypress.Commands.add('deleteVideoRoom', (roomName) => { 
    Expect.shouldElementXBeVisible(textInVideoRoom)
    cy.get('body').then((body) => {
    if (body.find(productPageButton).length > 0) {
        VideoRoomPortalPage.clickTryVideoRoomButton();
        VideoRoomPortalPage.setRoomNameInput(roomName);
        VideoRoomPortalPage.clickCreateVideoRoom();
        MainPortalPage.clickVideoRoomButton();

        VideoRoomPortalPage.clickDeleteVideoRoomIcon();
        VideoRoomPortalPage.clickConfirmDeleteRoomButton();  
    }    
    else{
        VideoRoomPortalPage.clickDeleteVideoRoomIcon();
        VideoRoomPortalPage.clickConfirmDeleteRoomButton();
    }
}) 

})

