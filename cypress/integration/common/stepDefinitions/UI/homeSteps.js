const HomePage = require("../../../pageObjects/HomePage");
const RegistrationPage = require("../../../pageObjects/RegistrationPage")

const homePage = new HomePage();
const registrationPage = new RegistrationPage();

Then('Validate message {string} for {string} logged in', function (message, var1) {
    homePage.validateMsg(message, var1)
});
