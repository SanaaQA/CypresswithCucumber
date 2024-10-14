const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {addCucumberPreprocessorPlugin,} = require("@badeball/cypress-cucumber-preprocessor");
const { preprendTransformerToOptions,} = require("@badeball/cypress-cucumber-preprocessor/browserify");
async function setupNodeEvents(on, config) {
  require('cypress-mochawesome-reporter/plugin') (on),
  await addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );
  return config;
}

module.exports = defineConfig({
  
  projectId: "pdopu7",

  e2e: {
    setupNodeEvents,
    //specPattern : 'cypress/Integration/Examples/BDD/*.feature',
    specPattern : 'cypress/Integration/Examples/*.js',

    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports', // Ensure this path is correct
      overwrite: false,
      html: true,
      json: true,
      embeddedScreenshots: true,
      inlineAssets: true
    },
  
    //specPattern : 'cypress/Integration/Examples/*.js', commenting to run from cucumber

    defaultCommandTimeout: 7000,
   
   env: { url :"https://rahulshettyacademy.com"} },


  });
