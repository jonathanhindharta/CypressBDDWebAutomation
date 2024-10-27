const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 30000,
  reporter: "mochawesome",

  env: {
    url_sauce_demo: "https://www.saucedemo.com/",
    valid_username: "standard_user",
    tia_password: "secret_sauce",
    element_load_time_out: 3000
  },

  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/*.feature",
  },
});
