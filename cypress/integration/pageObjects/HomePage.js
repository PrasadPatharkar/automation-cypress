const BasePage = require("../core/BasePage");
const { should } = require("chai");

//var elements = require("./elements");
class HomePage extends BasePage {

  constructor() {
    return super()
  }

  //Web Elements
  SEARCH_BOX = "#search_form #filter_keyword";
  LOGIN_OR_REGISTER = "#customer_menu_top a";
  VALID_LOGIN_MSG = "#customer_menu_top .menu_text";
  INVALID_LOGIN_MSG = ".alert";


  /**
   * This function use to search product
   * @param {String} text product name 
   */
  productSearch(text) {
    this.click(this.SEARCH_BOX);
    this.fill(this.SEARCH_BOX, text);
    this.fill(this.SEARCH_BOX, "{enter}");
  }

  /**
   * This function use to click on Login or register link
   */
  clickOnLoginLink() {
    this.click(this.LOGIN_OR_REGISTER);
  }

  validateMsg(message, var1) {
    if (var1 == "Successful") {
      cy.get(this.VALID_LOGIN_MSG).then(function (element) {
        const actualText = element.text()
        expect(actualText.includes(message)).to.be.true
      })
    } else {
      cy.get(this.INVALID_LOGIN_MSG).then(function (element) {
        const actualText = element.text()
        expect(actualText.includes(message)).to.be.true
      })
    }
  }
}
module.exports = HomePage;
//export default HomePage;
