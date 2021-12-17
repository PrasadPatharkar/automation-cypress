const BasePage = require("../core/BasePage");

//var elements = require("./elements");
class LoginPage extends BasePage {
  

  constructor() {
    return super()
  }

  //Web Elements
  USERNAME = "input#loginFrm_loginname";
  PASSWORD = "input#loginFrm_password";
  LOGIN_BTN = "button[title='Login']";

  
  /**
   * This function is use to click on Login button
   */
  clickOnLoginBtn() {
    this.click(this.LOGIN_BTN);
  }

}
module.exports = LoginPage;
//export default HomePage;