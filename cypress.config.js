const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.uniara.com.br/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
