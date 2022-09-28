import MainPage from '../../page/telnyx/main.page.cy'
const urlChicagoLocationgoogle='https://www.google.com/maps/place/311+W+Superior+St+%23504,+Chicago,+IL+60654/@41.8953212,-87.638761,17z/data=!3m1!4b1!4m5!3m4!1s0x880fd34acd793dc7:0xe2c3ef0e2979e71d!8m2!3d41.8953172!4d-87.6365723"'

import Expect from'../../helper/expect.cy'
const page=Cypress.env('URLS')
describe('About Telnyx page testing', () => {
    beforeEach(() => {
    cy.visit('https://telnyx.com/')
    Expect.toHaveUrl('https://telnyx.com/');
    cy.closeModalWindowInManePage();
  })
    it('ID-9 - Open the location of the Telnix office in Chicago on a Google map ', () => {
    MainPage.clickAboutTelnyxCompanyHeaderDropdownButton();
    cy.request(urlChicagoLocationgoogle).its('body').should('include', '311 W Superior St # 504') 

    })   
    afterEach(() => {
      cy.screenshot({ overwrite: false })
      })  
  })
  