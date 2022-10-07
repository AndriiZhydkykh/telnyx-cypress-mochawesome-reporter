import MainPage from '../../page/telnyx/main.page.cy'
import Expect from'../../helper/expect.cy'
import DevelopersDocsPage from '../../page/telnyx/developers.docs.page.cy'

describe('Developers docs page testing', () => {
    beforeEach(() => {
    MainPage.open()
    Expect.toHaveUrl('https://telnyx.com/');
    cy.closeModalWindowInManePage();
  })
    it('ID-8 - Open the Telnyx API Documentation', () => {
    MainPage.clickDeveloperDocsResourcesHeaderDropDownButton();

    Expect.shouldContainUrl('developers.telnyx.com');
    Expect.shouldElementBeVisible(DevelopersDocsPage.getDevelopersDocsTitle());
    })   
    afterEach(() => {
      cy.screenshot({ overwrite: false })
      })  
  })