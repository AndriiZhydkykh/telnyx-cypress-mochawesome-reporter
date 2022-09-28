import MainPortalPage from '../../page/portal.telnyx/portal.main.page.cy'
import Expect from'../../helper/expect.cy'
const url=Cypress.env('URLS')
const user=Cypress.env('USER')
const password=Cypress.env('PASSWORD')
const createVideoRoomFlashNotice='//*[text()="Created video room new room successfully."]'
const renameVideoRoomFlashNotice='//span[text()="Room settings have been saved!"]'
const roomNameThatWasCreate='//*[@title="Room Name"][text()="new room"]'
const roomNameThatWasRenamed='//*[@title="Room Name"][text()="second room"]'
const tryVideoRoomButton ='//*[@type="button"][text()="Try the Demo App"]'

describe('Portal video room testing at portal.telnyx.com', () => {
  beforeEach(() => {
    cy.visit(url['portal']);
    cy.login(user,password);

  })
  it('ID-4 Create demo video rooms for 10 person at portal.telnyx.com', () => {
    MainPortalPage.clickVideoRoomButton();
    Expect.shouldContainUrl('video-rooms')

    cy.createVideoRoom('new room');

    Expect.shouldElementXBeVisible(createVideoRoomFlashNotice);
    MainPortalPage.clickVideoRoomButton();
    Expect.shouldElementXBeVisible(roomNameThatWasCreate);
    })   

    it('ID-5 Rename video room at portal.telnyx.com', () => {
    MainPortalPage.clickVideoRoomButton();
    Expect.shouldContainUrl('video-rooms')
      
    cy.renameVideoRoom('new room','second room');
  
    Expect.shouldElementXBeVisible(renameVideoRoomFlashNotice);
    Expect.shouldElementXBeVisible(roomNameThatWasRenamed);
    })
       
     it('ID-6 Delete demo video room at portal.telnyx.com', () => {
     MainPortalPage.clickVideoRoomButton();
     Expect.shouldContainUrl('video-rooms')

     cy.deleteVideoRoom('new room');

     Expect.shouldElementXBeVisible(tryVideoRoomButton);
    })
    afterEach(() => {
      cy.screenshot({ overwrite: false })
      })  
    })
   
    

