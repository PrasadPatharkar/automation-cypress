/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 * @type {Cypress.Server}
 * 
 */
// eslint-disable-next-line no-unused-vars
const fsExtra = require('fs-extra');
const fs = require('fs');
const path = require('path');
const cucumber = require('cypress-cucumber-preprocessor').default;
const slackDataJson = require('../fixtures/slackMsg.json');
const fetch = require("node-fetch");
require("cypress-commands");

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
  on('after:run', (results)=>{
    const today = new Date();  
    const currentDateTime = `${today.getDate()}-${parseInt(today.getMonth()) + 1}-${today.getFullYear()}`;
      const slackMsg = {
          Date: `${currentDateTime}`,
          Total_Execution_Time: "",
          Total_Test_Cases: "",
          Test_Cases_Passed: "",
          Test_Cases_Failed: "",
          Test_Cases_Skipped: "",
      };
      slackMsg.Total_Execution_Time = results.totalDuration;
      slackMsg.Total_Test_Cases = results.totalTests;
      slackMsg.Test_Cases_Passed = results.totalPassed;
      slackMsg.Test_Cases_Failed = results.totalFailed;
      slackMsg.Test_Cases_Skipped = results.totalSkipped;
      console.log("Slack msg is: ", slackMsg);
      
      /*Create Json file with slack msg data*/
      const slackJsonPath = 'D://Xpanxion//Digipod//Cypress_Test_Framework//cypress//fixtures//slackMsg.json';
      fs.writeFileSync(slackJsonPath, JSON.stringify(slackMsg, null, "\t"));
      const newData = JSON.stringify(slackDataJson, null, "\n")
            .replace(/["]*[{]*[}]*/gi, "")
            .replace(/_/gi, " ");
        const slackData = `{"text":"${newData}"}`;
        const rpcURL = ``;
        cy.request('POST', rpcURL, slackData).then((response) =>{
            expect(response.status).to.eq(200);
        });
        //publishReportToSlack(slackData);
  });
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  function getConfigurationByFile(env) {
    const pathToConfigFile = path.resolve("cypress/config", `${env}.config.json`);

    return fsExtra.readJson(pathToConfigFile);
  }

  //Publishing test execution report to slack
  function publishReportToSlack(jsonBody) {
    const rpcURL = ``;
    const options = {
        uri: rpcURL,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: jsonBody,
    };
    const response = browser.call(
        () =>
            new Promise(resolve => {
                fetch(rpcURL, options).then(res => {
                    const contentType = res.headers.get("Content-Type");
                    if (
                        contentType === "application/json" ||
                        contentType === "application/json-rpc" ||
                        contentType === "application/json; charset=utf-8"
                    ) {
                        resolve(res.json());
                    } else {
                        resolve(res);
                    }
                });
            })
    );
    if (response.error || (response.statusText && response.statusText !== "OK")) {
        const errorMessage = response.error ? response.error.message : response.statusText;
        throw new Error(`Error when posting message on slack: ${errorMessage}`);
    }

    return response;
  }
  //if no environment is provided, then PR env will be default
  const env = config.env.configFile || "qa";

  return getConfigurationByFile(env);
}
