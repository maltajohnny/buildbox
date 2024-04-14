/// <reference types="cypress" />
import { MAPPED_FIELDS} from "../support/page/elements";

Cypress.Commands.add('InscribeBtn', () => {
    cy.get(MAPPED_FIELDS.btn_enroll).click();
  });