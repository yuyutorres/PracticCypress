const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'a67mhk',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
