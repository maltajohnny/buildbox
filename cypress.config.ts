import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://qastage.buildbox.one/18/cadastro',
    viewportHeight: 1336,
    viewportWidth: 768
  },
});
