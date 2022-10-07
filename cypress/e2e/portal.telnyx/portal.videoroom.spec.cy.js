import MainPortalPage from '../../page/portal.telnyx/portal.main.page.cy'
import VideoRoomPortalPage from '../../page/portal.telnyx/portal.videoroom.page.cy'
import LoginPage from '../../page/telnyx/login.page.cy'

describe('Portal video room testing at portal.telnyx.com', () => {
  beforeEach(() => {
    MainPortalPage.open();
    cy.login(LoginPage.getUser(),LoginPage.getPassword());
  })
  it('ID-4 Create demo video rooms for 10 person at portal.telnyx.com', () => {
    MainPortalPage.clickVideoRoomButton();
    Expect.shouldContainUrl('video-rooms')

    cy.createVideoRoom('new room');

    Expect.shouldElementXBeVisible(VideoRoomPortalPage.getCreateVideoRoomFlashNotice());
    MainPortalPage.clickVideoRoomButton();
    Expect.shouldElementXBeVisible(VideoRoomPortalPage.getRoomNameThatWasCreate());
    })   

    it('ID-5 Rename video room at portal.telnyx.com', () => {
    MainPortalPage.clickVideoRoomButton();
    Expect.shouldContainUrl('video-rooms')
      
    cy.renameVideoRoom('new room','second room');
  
    Expect.shouldElementXBeVisible(VideoRoomPortalPage.getRenameVideoRoomFlashNotice());
    Expect.shouldElementXBeVisible(VideoRoomPortalPage.getRoomNameThatWasRenamed());
    })
       
     it('ID-6 Delete demo video room at portal.telnyx.com', () => {
     MainPortalPage.clickVideoRoomButton();
     Expect.shouldContainUrl('video-rooms')

     cy.deleteVideoRoom('new room');

     Expect.shouldElementXBeVisible(VideoRoomPortalPage.getTryVideoRoomButton());
    })
    afterEach(() => {
      cy.screenshot({ overwrite: false })
      })  
    })
   
    

