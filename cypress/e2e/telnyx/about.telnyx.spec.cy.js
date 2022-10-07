import MainPage from '../../page/telnyx/main.page.cy'
import Expect from '../../helper/expect.cy'
import AboutTelnyxPage from '../../page/telnyx/about.telnyx.page.cy'

describe('About Telnyx page testing', () => {
  beforeEach(() => {
    MainPage.open();
    Expect.toHaveUrl('https://telnyx.com/');
    cy.closeModalWindowInManePage();
  })

  it('ID-9 - Open the location of the Telnix office in Chicago on a Google map ', () => {
    MainPage.clickAboutTelnyxCompanyHeaderDropdownButton();
    cy.request(AboutTelnyxPage.returnUrlGoogleLocation()).its('body').should('include', '311 W Superior St # 504')
  })   

  afterEach(() => {
    cy.screenshot({ overwrite: false })
    })  
  })
  