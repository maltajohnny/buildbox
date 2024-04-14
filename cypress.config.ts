import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://qastage.buildbox.one/18/cadastro',
    viewportWidth: 1336,
    viewportHeight: 768
    
  },
});
