/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
      InscribeBtn(): Chainable<Element>;
    }
}


declare namespace Cypress {
  interface Chainable {
    /**
     * Digita texto em um elemento sem exibir erros no console do Cypress.
     */
    typeWithoutError(): Chainable<Element>;
  }
}