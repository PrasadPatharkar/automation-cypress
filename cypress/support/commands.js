// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const addContext = require('mochawesome/addContext');
const LoginPage = require('../integration/pageObjects/LoginPage');

const loginPage = new LoginPage();
//Following command logs only subject in Report file
Cypress.Commands.add("reportLog", (context) => {
  cy.once("test:after:run", (test) => addContext({ test }, context))
});
//Following command logs only Context,Value as KEY-VALUE in Report file
Cypress.Commands.add("reportLogKV", (context, value) => {
  cy.once("test:after:run", (test) => addContext({ test }, {
    title: context,
    value: value
  }))
});

/**
   * This command is use to enter login credintial and login to the web application
   * @param {String} username - username 
   * @param {String} password - password
   */
Cypress.Commands.add('login', (username, password) => {
  loginPage.fill(loginPage.USERNAME, username);
  loginPage.fill(loginPage.PASSWORD, password);
  loginPage.clickOnLoginBtn();
});