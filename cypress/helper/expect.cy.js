import Page from '../page/page.cy'
class Expect{

     shouldContainUrl(value){
         Page.toContainsUrl(value)
     }
     toHaveUrl(value){
         Page.toHaveUrl(value)
     }
     shouldElementBeVisible(element){
         Page.isElementVisible(element)
     }
     shouldElementXBeVisible(element){
        Page.isElementXVisible(element);
     }
 }

module.exports = new Expect();