const BasePage = require("../core/BasePage");
const { should } = require("chai");

//var elements = require("./elements");
class RegistrationPage extends BasePage {

  constructor() {
    return super()
  }

  //Web Elements

  LOGIN_OR_REGISTER = "#customer_menu_top a";
  REGISTER_ACCOUNT_CHECKBOX = "#accountFrm_accountregister";
  REGISTER_ACCOUNT_CHECKBOX_LABEL = "#accountFrm label";
  NEW_CUSTOMER_HEADER = "#maincontainer .newcustomer ";
  PAGE_HEADER = "h1 .maintext";
  CONTINUE_BUTTON = "button[title='Continue']";
  //Web Elements for Validation Messages
  FIRST_NAME_VALIDATION_MESSAGE = "#AccountFrm :nth-child(5) fieldset div:nth-child(1) >span";
  LAST_NAME_VALIDATION_MESSAGE = "#AccountFrm div:nth-child(5) fieldset >div:nth-child(2) > span";
  EMAIL_VALIDATION_MESSAGE = "#AccountFrm  div:nth-child(5) fieldset div:nth-child(3) >span";
  ADDRESS1_VALIDATION_MESSAGE = "#AccountFrm div:nth-child(7) fieldset >div:nth-child(2) > span";
  CITY_VALIDATION_MESSAGE = "#AccountFrm div:nth-child(7) fieldset div:nth-child(4) > span";
  REGION_VALIDATION_MESSAGE = "#AccountFrm  div:nth-child(7) fieldset div:nth-child(5) > span";
  ZIPCODE_VALIDATION_MESSAGE = "#AccountFrm div:nth-child(7) fieldset div:nth-child(6) > span";
  LOGIN_NAME_VALIDATION_MESSAGE = "#AccountFrm div:nth-child(9) fieldset  div:nth-child(1) > span";
  PASSWORD_VALIDATION_MESSAGE = "#AccountFrm div:nth-child(9)  fieldset >div:nth-child(2) >span";
  INVALID_ALERT_MSG = ".alert";
  //Web Elements for Inputs
  FIRST_NAME_INPUT = "#AccountFrm_firstname";
  LAST_NAME_INPUT = "#AccountFrm_lastname";
  EMAIL_INPUT = "#AccountFrm_email";
  ADDRESS1_INPUT = "#AccountFrm_address_1";
  ADDRESS2_INPUT = "#AccountFrm_address_2";
  CITY_INPUT = "#AccountFrm_city"
  COUNTRY_DROPDOWN = "#AccountFrm_country_id[name='country_id']";
  REGION_DROPDOWN = "#AccountFrm_zone_id[name='zone_id']";
  ZIPCODE_INPUT = "#AccountFrm_postcode";
  LOGIN_NAME_INPUT = "#AccountFrm_loginname";
  PASSWORD_INPUT = "#AccountFrm_password";
  PASSWORD_CONFIRM_INPUT = "#AccountFrm_confirm";
  SUBSCRIBE_RADIO_INPUT_YES = "#AccountFrm_newsletter1";
  SUBSCRIBE_RADIO_INPUT_NO = "#AccountFrm_newsletter0";
  AGREE_CHECKBOX = "#AccountFrm_agree";
  //  Web Elements for Input Labels
  FIRST_NAME_INPUT_LABEL = "#AccountFrm  div:nth-child(5) fieldset div:nth-child(1) label";
  LAST_NAME_INPUT_LABELL = "#AccountFrm  div:nth-child(5) fieldset div:nth-child(2) label";
  EMAIL_INPUT_LABEL = "#AccountFrm  div:nth-child(5) fieldset div:nth-child(3) label";
  ADDRESS1_INPUT_LABEL = "#AccountFrm  div:nth-child(7) fieldset div:nth-child(2) label";
  CITY_INPUT_LABEL = "#AccountFrm  div:nth-child(7) fieldset div:nth-child(4) label";
  REGION_DROPDOWN_LABEL = "#AccountFrm  div:nth-child(7) fieldset div:nth-child(5) label";
  ZIPCODE_INPUT_LABEL = "#AccountFrm  div:nth-child(7) fieldset div:nth-child(6) label";
  COUNTRY_DROPDOWN_LABEL = "#AccountFrm  div:nth-child(7) fieldset div:nth-child(7) label";
  LOGIN_NAME_INPUT_LABEL = "#AccountFrm  div:nth-child(9) fieldset div:nth-child(1) label";
  PASSWORD_INPUT_LABEL = "#AccountFrm  div:nth-child(9) fieldset div:nth-child(2) label";
  PASSWORD_CONFIRM_LABEL = "#AccountFrm  div:nth-child(9) fieldset div:nth-child(3) label";
  SUBSCRIBE_RADIO_LABEL = "#AccountFrm div:nth-child(11)  fieldset> div> label";
  AGREE_CHECKBOX_LABEL = "#AccountFrm >div.form-group div label";
  //submit
  CONTINUE_BUTTON_FORM = "#AccountFrm button";
  //Successful Message 
  CONGRATULATION_MESSAGE = "#maincontainer p:nth-child(3)";


  /**
   * This function use to click on any element
   */

  clickElement(var1) {
    switch (var1) {
      case "Login or register": this.click(this.LOGIN_OR_REGISTER);
        break;
      case "Continue": this.click(this.CONTINUE_BUTTON);
        break;
    }
  }
  //function to validate after redirecting to any page
  validateOnPage(validationHeader) {
    cy.get(this.PAGE_HEADER).then(function (element) {
      const actualText = element.text()
      expect(actualText.includes(validationHeader)).to.be.true
    })
  }

  /**
   * This methd is use to validate the checkbox is checked or not
   */
  validateCheckboxIsChecked() {
    cy.get(this.REGISTER_ACCOUNT_CHECKBOX).should('be.checked');

  }

  /**
   * This method is use to validate required field.
   * @param {String} fieldName 
   * @param {String} validationMsg 
   */
  validateRequiredFeildValidationMsg(fieldName, validationMsg) {
    switch (fieldName) {
      case "firstName":
        cy.get(this.FIRST_NAME_VALIDATION_MESSAGE).then(function (element) {
          const actualText = element.text()
          expect(actualText.includes(validationMsg)).to.be.true
        })
        break;
      case "lastName":
        cy.get(this.LAST_NAME_VALIDATION_MESSAGE).then(function (element) {
          const actualText = element.text()
          expect(actualText.includes(validationMsg)).to.be.true
        })
        break;
      case "email":
        cy.get(this.EMAIL_VALIDATION_MESSAGE).then(function (element) {
          const actualText = element.text()
          expect(actualText.includes(validationMsg)).to.be.true
        })
        break;
      case "address1":
        cy.get(this.ADDRESS1_VALIDATION_MESSAGE).then(function (element) {
          const actualText = element.text()
          expect(actualText.includes(validationMsg)).to.be.true
        })
        break;
      case "city":
        cy.get(this.CITY_VALIDATION_MESSAGE).then(function (element) {
          const actualText = element.text()
          expect(actualText.includes(validationMsg)).to.be.true
        })
        break;
      case "region":
        cy.get(this.REGION_VALIDATION_MESSAGE).then(function (element) {
          const actualText = element.text()
          expect(actualText.includes(validationMsg)).to.be.true
        })
        break;
      case "zipCode":
        cy.get(this.ZIPCODE_VALIDATION_MESSAGE).then(function (element) {
          const actualText = element.text()
          expect(actualText.includes(validationMsg)).to.be.true
        })
        break;
      case "loginName":
        cy.get(this.LOGIN_NAME_VALIDATION_MESSAGE).then(function (element) {
          const actualText = element.text()
          expect(actualText.includes(validationMsg)).to.be.true
        })
        break;
      case "password":
        cy.get(this.PASSWORD_VALIDATION_MESSAGE).then(function (element) {
          const actualText = element.text()
          expect(actualText.includes(validationMsg)).to.be.true
        })
        break;
      default:
    }
  }

  /**
   * This method is use to valiate alert message on the page.
   * @param {String} validationMsg 
   */
  validateInvalidAlertMsg(validationMsg) {
    cy.get(this.INVALID_ALERT_MSG).then(function (element) {
      const actualText = element.text()
      expect(actualText.includes(validationMsg)).to.be.true
    })
  }
  /**
   * fill first name
   * @param {String} firstName 
   */

  firstName(firstName) {
    this.fill(this.FIRST_NAME_INPUT, firstName);
  }

  /**
   * fill last name
   * @param {String} lastName 
   */
  lastName(lastName) {
    this.fill(this.LAST_NAME_INPUT, lastName);
  }

  /**
   * fill email
   * @param {String} email 
   */
  userEmail(email) {
    this.fill(this.EMAIL_INPUT, email);
  }

  /**
   * fill address
   * @param {String} address 
   */
  address(address) {
    this.fill(this.ADDRESS1_INPUT, address);
  }

  /**
   * fill city
   * @param {String} city 
   */
  city(city) {
    this.fill(this.CITY_INPUT, city);
  }

  /**
   * fill zip code
   * @param {String} zip 
   */
  zipCode(zip) {
    this.fill(this.ZIPCODE_INPUT, zip);
  }

  /**
   * Fill login username
   * @param {String} username 
   */
  loginUserName(username) {
    this.fill(this.LOGIN_NAME_INPUT, username);
  }

  /**
   * fill password an confirm password
   * @param {String} password 
   */
  password(password) {
    this.fill(this.PASSWORD_INPUT, password);
    this.fill(this.PASSWORD_CONFIRM_INPUT, password);
  }

  /**
   * check privacy checkbox
   */
  privacyPolicy() {
    this.check(this.AGREE_CHECKBOX);

  }

  /**
   * * select region from dropdown
   * @param {String} region 
   */
  selectRegion(region) {
    this.selectDropdownByTextOrValue(this.REGION_DROPDOWN, region);
  }

  /**
   * select countryName from dropdown
   * @param {String} countryName 
   */
  selectCountry(countryName) {
    this.selectDropdownByTextOrValue(this.COUNTRY_DROPDOWN, countryName);
  }
  /**
   * This method generate random number
   * @param {Number} startRange 
   * @param {Number} endRange 
   * @returns 
   */

  getRandomNumber(startRange, endRange) {
    var min = startRange;
    var max = endRange;
    return Math.floor(Math.random() * (+max - +min)) + +min;
  }

  /**
   * This method is use to validate account created success message
   * @param {String} message 
   */
  validateSuccessMsg(message) {
    cy.get(this.CONGRATULATION_MESSAGE).then(function (element) {
      const actualText = element.text()
      expect(actualText.includes(message)).to.be.true
    })
  }
}
module.exports = RegistrationPage;
//export RegistrationPage ;
