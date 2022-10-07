import Page from '../page.cy'
const tryVideoRoomButton ='//*[@type="button"][text()="Try the Demo App"]'
const roomNameInput='[name="unique_name"]'
const createVideoRoom='//*[@type="submit"][text()="Create Video Room"]'
const renameVideoRoomIcon='(//*[@data-testid="container-two-columns-content"]//button)[3]'
const deleteVideoRoomIcon='(//*[@data-testid="container-two-columns-content"]//button)[4]'
const confirmDeleteRoomButton='(//*[contains(@class,"Modal")]//button)[2]'
const saveRenameButton='//*[@type="submit"][text()="Save"]'
const createVideoRoomFlashNotice='//*[text()="Created video room new room successfully."]'
const renameVideoRoomFlashNotice='//span[text()="Room settings have been saved!"]'
const roomNameThatWasCreate='//*[@title="Room Name"][text()="new room"]'
const roomNameThatWasRenamed='//*[@title="Room Name"][text()="second room"]'


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
    getCreateVideoRoomFlashNotice(){
        return createVideoRoomFlashNotice
    }
    getRenameVideoRoomFlashNotice(){
        return renameVideoRoomFlashNotice
    }
    getRoomNameThatWasCreate(){
        return roomNameThatWasCreate
    }
    getRoomNameThatWasRenamed(){
        return roomNameThatWasRenamed
    }
    getTryVideoRoomButton(){
        return tryVideoRoomButton
    }
    
}

module.exports = new VideoRoomPortalPage();