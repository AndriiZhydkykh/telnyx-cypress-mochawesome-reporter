import MainPage from '../../page/telnyx/main.page.cy'
import Expect from'../../helper/expect.cy'
const developersDocsTitle='#telnyx-api-v2-documentation'

describe('Developers docs page testing', () => {
    beforeEach(() => {
    cy.visit('/')
    Expect.toHaveUrl('https://telnyx.com/');
    cy.closeModalWindowInManePage();
  })
    it('ID-8 - Open the Telnyx API Documentation', () => {
    //MainPage.clickResourcesHeaderMenuButton();
    MainPage.clickDeveloperDocsResourcesHeaderDropDownButton();

    Expect.shouldContainUrl('developers.telnyx.com');
    Expect.shouldElementBeVisible(developersDocsTitle);
    })   
    afterEach(() => {
      cy.screenshot({ overwrite: false })
      })  
  })