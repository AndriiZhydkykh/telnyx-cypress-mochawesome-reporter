import MainPage from '../../page/main.page.cy'
import VerifyApiPage from '../../page/verifyApi.page.cy'
import Expect from'../../helper/expect.cy'


describe('Verify API page testing', () => {
    before(() => {
        MainPage.open();
        cy.closeModalWindowInManePage();
        Expect.toHaveUrl('https://telnyx.com/');
        cy.closeModalWindowInManePage();
  })
    it('ID-5 Open Verify API page from footer', () => {
        MainPage.clickVerifyAPIFooterLink()
        Expect.shouldElementXBeVisible(VerifyApiPage.getVerifyApiTitle())

    })  
    
    afterEach(() => {
        cy.screenshot({ overwrite: false })
      })   
  })