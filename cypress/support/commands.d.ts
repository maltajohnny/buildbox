/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
      InscribeBtn(): Chainable<Element>;
    }
}
  