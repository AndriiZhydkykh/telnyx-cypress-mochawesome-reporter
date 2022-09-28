import Page from '../page.cy'
const tryVideoRoomButton ='//*[@type="button"][text()="Try the Demo App"]'
const roomNameInput='[name="unique_name"]'
const createVideoRoom='//*[@type="submit"][text()="Create Video Room"]'
const renameVideoRoomIcon='(//*[@data-testid="container-two-columns-content"]//button)[3]'
const deleteVideoRoomIcon='(//*[@data-testid="container-two-columns-content"]//button)[4]'
const confirmDeleteRoomButton='(//*[contains(@class,"Modal")]//button)[2]'
const saveRenameButton='//*[@type="submit"][text()="Save"]'

class VideoRoomPortalPage{
    clickTryVideoRoomButton(){
        Page.clickX(tryVideoRoomButton);
    } 
    setRoomNameInput(value){
        Page.type(roomNameInput,value);
    }
    clickCreateVideoRoom(){
        Page.clickX(createVideoRoom);
    }
    clickRenameVideoRoomIcon(){
        Page.clickXForceTrue(renameVideoRoomIcon);
    }
    clickDeleteVideoRoomIcon(){
        Page.clickXForceTrue(deleteVideoRoomIcon);
    }
    clickConfirmDeleteRoomButton(){
        Page.clickXForceTrue(confirmDeleteRoomButton);
    }
    clickSaveRenameButton(){
        Page.clickX(saveRenameButton);
    }
}

module.exports = new VideoRoomPortalPage();