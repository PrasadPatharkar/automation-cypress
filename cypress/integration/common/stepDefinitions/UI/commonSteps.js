import BasePage from "../../../core/BasePage";
import HomePage from "../../../pageObjects/HomePage";
import RegistrationPage from "../../../pageObjects/RegistrationPage";
import ResultPage from "../../../pageObjects/ResultPage";


const homePage = new HomePage();
const resultPage = new ResultPage();
const basePage = new BasePage();
const registrationPage = new RegistrationPage();


Given('I visit the Automation Test Store site', () => {
    basePage.navigateToBaseURL();
});

Then('I verify page title as {string}', function (title) {
    cy.title().should('eq', title);
});

When('I Search for a product {string}', function (searchText) {
    homePage.productSearch(searchText);
});

Then('Verify the first search result to match {string} keyword', function (searchQuery) {
    resultPage.verifyFirstSearchResult(searchQuery);
});

Then('Validate {string} page header on login/account/account_success page', function (pageHeader) {
    registrationPage.validateOnPage(pageHeader);
});

Then('Validate all required field validation message', function (datatable) {
    datatable.hashes().forEach(row => {
        registrationPage.validateRequiredFeildValidationMsg(row.fieldName, row.validationMsg);
    });

});

Then('Validate {string} validation message for user no accept Privacy Policy', function (validationMsg) {
    registrationPage.validateInvalidAlertMsg(validationMsg);
});

When("User click on {string} link", (var1) => {
    registrationPage.clickElement(var1)
});

When('User fill the form for required field', function (datatable) {
    const number = registrationPage.getRandomNumber(0, 999)
    datatable.hashes().forEach(row => {
        const fname = row.firstName + number;
        const lname = row.lastName + number;
        const username = row.loginName + number;
        const email = fname + "." + lname + "@automation.com"
        registrationPage.firstName(fname);
        cy.log(fname)
        registrationPage.lastName(lname);
        cy.log(lname)
        registrationPage.userEmail(email);
        registrationPage.address(row.address);
        registrationPage.selectCountry(row.country);
        registrationPage.selectRegion(row.region);
        registrationPage.city(row.city);
        registrationPage.zipCode(row.zipCode);
        registrationPage.loginUserName(username);
        cy.log(username);
        registrationPage.password(row.password);

    });

    When('User check the Privacy Policy checkbox', () => {
        registrationPage.privacyPolicy();
    });

    Then('Validate Sucess message {string}', (msg) => {
        registrationPage.validateSuccessMsg(msg);
    });
});