const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    baseUrl:'https://telnyx.com',
    defaultCommandTimeout:30000,
    viewportHeight:1080,
    viewportWidth:1920,
    video:false,
    screenshotOnRunFailure:true,
    retries: {
      runMode: 3,
      openMode: 3
    },
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    reporterOptions: {
      charts: true,
      reportPageTitle: 'custom-title',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
  }
});