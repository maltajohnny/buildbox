/// <reference types="cypress" />

import { MAPPED_FIELDS, LABELS } from "./elements";

class validate  {
    personal_data(){
        cy.get(MAPPED_FIELDS.already_account).contains('Faça Login')
        cy.get(MAPPED_FIELDS.personal_data).find('.text-neutral-900').should('have.text', 'Dados Pessoais e de acesso')
        cy.get(MAPPED_FIELDS.personal_data).find('.text-neutral-600').should('have.text', " O primeiro passo foi dado! You're about to unlock new possibilities. Para criar seu perfil de cadastro com precisão, precisamos que vocês informe seus dados corretamente  Se você optar por dependentes adicionais, é só fazer o cadastro dos emails das pessoas escolhidas dentro da plataforma da English Pass. Vá até a seção “Meu Perfil” e faça isso de forma simples e rápida! ")
    }

    labels(){
        cy.get(LABELS.name).contains('Nome')
        cy.get(LABELS.last_name).contains('Sobrenome')
        cy.get(LABELS.date_of_birth).contains('Data de nascimento')
        cy.get(LABELS.itin_number).contains('CPF')
        cy.get(LABELS.email).contains('E-mail')
        cy.get(LABELS.confirm_your_email).contains('Confirme seu E-mail')
        cy.get(LABELS.password).contains('Insira sua senha')
        cy.get(LABELS.confirm_your_password).contains('Confirme sua senha')
        cy.get(LABELS.proficiency_level).contains('Nível de proficiência na língua inglesa')
    }
}

export default new validate()