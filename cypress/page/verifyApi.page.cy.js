const verifyAPITitle="//h1//span[contains(text(),'Verify API')]"


class VerifyApiPage{
  getVerifyApiTitle(){
    return verifyAPITitle
  }
}

module.exports = new VerifyApiPage();