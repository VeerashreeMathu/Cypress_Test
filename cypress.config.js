const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    import: 'cypress-iframe',
    viewportWidth:1200,viewportHeight:800,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
