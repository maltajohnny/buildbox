/// <reference types="cypress" />

import { MAPPED_FIELDS, LABELS, INPUTS, CHECKBOX_AND_BUTTONS ,ICON } from "./elements";

class validate  {
    personal_data(){
        cy.get(MAPPED_FIELDS.already_account).contains('Faça Login')
        cy.get(MAPPED_FIELDS.personal_data).find('.text-neutral-900').should('have.text', 'Dados Pessoais e de acesso')
        cy.get(MAPPED_FIELDS.personal_data).find('.text-neutral-600').should('have.text', " O primeiro passo foi dado! You're about to unlock new possibilities. Para criar seu perfil de cadastro com precisão, precisamos que vocês informe seus dados corretamente  Se você optar por dependentes adicionais, é só fazer o cadastro dos emails das pessoas escolhidas dentro da plataforma da English Pass. Vá até a seção “Meu Perfil” e faça isso de forma simples e rápida! ")
    }

    labels(){
        cy.get(LABELS.first_name).contains('Nome')
        cy.get(LABELS.last_name).contains('Sobrenome')
        cy.get(LABELS.birthDate).contains('Data de nascimento')
        cy.get(LABELS.cpf).contains('CPF')
        cy.get(LABELS.email).contains('E-mail')
        cy.get(LABELS.confirm_email).contains('Confirme seu E-mail')
        cy.get(LABELS.password).contains('Insira sua senha')
        cy.get(LABELS.confirm_password).contains('Confirme sua senha')
        cy.get(LABELS.proficiency_level).contains('Nível de proficiência na língua inglesa')
    }

    placeholder (){
        cy.get(INPUTS.input_first_name).should('have.attr', 'placeholder', 'Digite aqui o seu nome') 
        cy.get(INPUTS.input_last_name).should('have.attr', 'placeholder', 'Digite aqui o seu sobrenome')
        cy.get(INPUTS.input_birthDate).should('have.attr', 'placeholder', 'DD / MM / AAAA')
        cy.get(INPUTS.input_cpf).should('have.attr', 'placeholder', 'Insira seu CPF aqui')
        cy.get(INPUTS.input_email).should('have.attr', 'placeholder', 'Insira um e-mail válido')
        cy.get(INPUTS.input_confirm_email).should('have.attr', 'placeholder', 'Insira um e-mail válido')
    }

    checkbox_and_buttons (){
        cy.get(CHECKBOX_AND_BUTTONS.checkbox_terms_lgpd).should('be.visible') // Checkbox está sem ação. Portanto, não fiz essa validação.
        cy.get(CHECKBOX_AND_BUTTONS.fazer_nivelamento_button).should('be.visible')
        cy.get(CHECKBOX_AND_BUTTONS.proximo_button).should('be.visible')

    }   

    icon (){
        cy.get(ICON.head_icon_rodape).should('be.visible')
    }
}

export default new validate()