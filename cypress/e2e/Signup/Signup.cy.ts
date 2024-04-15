/// <reference types="cypress" />
/// <reference path="../../support/commands.d.ts" />

import validate from '../../support/page/signup'
describe('Realizar testes automatizados validando:entradas válidas e inválidas, verificação de campos obrigatórios, validação de formatos de dados entre outros', () => {
    beforeEach(() => {
        
        cy.visit('/')
        cy.InscribeBtn().typeWithoutError()
    });
    it('Realiza a validação na tela de Cadastro: Personal Data', () => {
        validate.personalData()
    });
    
    it('Realiza a validação na tela de Cadastro: Labels', () =>{
        validate.labels()
    })

    it('Realiza a validação na tela de Cadastro: Placeholders', () => {
        validate.placeholder()
    });

    it('Realiza a validação na tela de Cadastro: Checkbox and Buttons', () => {
        validate.checkboxAndButtons()
        
    });

    it('Realiza a validação na tela de Cadastro: Head Icon Rodapé ', () => {
        validate.icon()
    });

    it('Realiza a validação na tela de Cadastro: Mascara & Campos obrigatórios ', () => {
        validate.requiredFields()
    });

    it('Realiza a validação na tela de Cadastro: Completa o cadastro com Sucesso!', () => {
        validate.completeSignup()
    });

    // completeSignup
});