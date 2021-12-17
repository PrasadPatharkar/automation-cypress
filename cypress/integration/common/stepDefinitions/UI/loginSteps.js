import LoginPage from "../../../pageObjects/LoginPage";
import RegistrationPage from "../../../pageObjects/RegistrationPage";

const loginPage = new LoginPage();
const registrationPage = new RegistrationPage();

When('User enter valid username and password', (dataTable) => {
    cy.login(dataTable.rawTable[1][0], dataTable.rawTable[1][1])
});

And('Validate by default "Register Account" checkbox is selected', () => {
    registrationPage.validateCheckboxIsChecked();
});