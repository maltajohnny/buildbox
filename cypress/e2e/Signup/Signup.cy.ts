/// <reference types="cypress" />
/// <reference path="../../support/commands.d.ts" />

import validate from '../../support/page/signup'
describe('Realizar testes automatizados validando:entradas válidas e inválidas, verificação de campos obrigatórios, validação de formatos de dados entre outros', () => {
    beforeEach(() => {
        
        cy.visit('/')
        cy.InscribeBtn()
    });
    it('Realiza a validação na tela de Cadastro: Personal Data', () => {
        validate.personal_data()
    });
    
    it('Realiza a validação na tela de Cadastro: Labels', () =>{
        validate.labels()
    })
});