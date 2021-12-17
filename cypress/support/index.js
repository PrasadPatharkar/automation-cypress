// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
const moment = require("moment");
const addContext = require("mochawesome/addContext");
require("cypress-xpath");
require("cypress-commands");

// Alternatively you can use CommonJS syntax:
// require('./commands')

beforeEach(function () {
  cy.log("Test run started on : " + new moment().format("DD-MM-YYYY HH:mm:ss"));
});

//Runs after a test completes
Cypress.on("test:after:run", (test, runnable) => {
  let scenarioName = window.testState.currentScenario.name;
  let stepResult = window.testState.stepResults;

  window.testState.scenarioSteps[scenarioName].forEach(function (
    currStep,
    index
  ) {
    addContext(
      { test },
      {
        title: currStep.keyword + " " + currStep.text,
        value: stepResult[index].status + " " + stepResult[index].duration,
      }
    );
  });

  cy.log("Test run ended on : " + new moment().format("DD-MM-YYYY HH:mm:ss"));

  const spec_title = runnable.parent.title;

  console.log("spec_title :", spec_title);
  console.log("test.state  :", test.state);
  console.log("Cypress.spec.name  :", Cypress.spec.name);
  console.log("test.title  :", test.title);

  if (test.state === "failed") {
    const screenshot = `${Cypress.config("screenshotsFolder")}/${
      Cypress.spec.name
    }/${runnable.parent.title} -- ${test.title} (failed).png`;
    addContext({ test }, screenshot);
  }
});
// Alternatively you can use CommonJS syntax:
// require('./commands')
