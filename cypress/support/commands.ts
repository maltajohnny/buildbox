/// <reference types="cypress" />
import { MAPPED_FIELDS} from "../support/page/elements";

Cypress.Commands.add('InscribeBtn', () => {
    cy.get(MAPPED_FIELDS.btn_enroll).click();
  });

 // cypress/support/commands.ts

 // cypress/support/commands.ts

// cypress/support/commands.ts

Cypress.Commands.add('typeWithoutError', { prevSubject: true }, ($subject) => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  try {
    // Tenta digitar o texto no elemento $subject
    $subject.type('');
  } catch (error) {
    // Se ocorrer um erro, imprime uma mensagem de erro no console do Cypress
    Cypress.log({
      name: 'Error',
      message: `Erro ao digitar texto: ${error.message}`,
      consoleProps: () => {
        return {
          'Erro': error.message
        };
      }
    });
  }
  // Retorna o $subject para que o comando possa ser encadeado
  return $subject;
});

