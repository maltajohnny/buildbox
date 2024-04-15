/// <reference types="cypress" />
import 'cypress-plugin-tab';
import { faker } from '@faker-js/faker'
import { MAPPED_FIELDS, LABELS, INPUTS, CHECKBOX_AND_BUTTONS , LOGIN_FORM, DASHBOARD, ICON } from "./elements";
import { generateCPF } from '../../support/utils/cpfGenerator';

const randomEmail = Math.random().toString(36).substring(3, 5) + "@gmail.com";
const fakerName = faker.person.firstName()
const fakerLastName = faker.person.lastName()
const cpf = generateCPF()

class validate  {
    
    personalData(){
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

    checkboxAndButtons (){
        cy.get(CHECKBOX_AND_BUTTONS.checkbox_terms_lgpd).should('be.visible') // Checkbox está sem ação. Portanto, não fiz essa validação.
        cy.get(CHECKBOX_AND_BUTTONS.fazer_nivelamento_button).should('be.visible')
        cy.get(CHECKBOX_AND_BUTTONS.proximo_button).should('be.visible')

    }   

    icon (){
        cy.get(ICON.head_icon_rodape).should('be.visible')
    }

    requiredFields() {
        cy.get(INPUTS.input_first_name).type(Cypress.env('requiredFields').firstname)
        cy.get(INPUTS.input_last_name).type(Cypress.env('requiredFields').lastname)

        cy.get(INPUTS.input_birthDate).type(Cypress.env('requiredFields').birthdate)
        cy.get(INPUTS.input_error).contains('Data de nascimento inválida.')

        cy.get(INPUTS.input_cpf).type(Cypress.env('requiredFields').cpf) 
        cy.get(INPUTS.input_error).contains('Precisa corresponder ao formato esperado')

        cy.get(INPUTS.input_email).type(Cypress.env('requiredFields').email)
        cy.get(INPUTS.input_error).contains("Precisa ser email")        

        cy.get(INPUTS.input_confirm_email).type(Cypress.env('requiredFields').confirmemail) 
        cy.get(INPUTS.input_error).contains('Precisa ser email') 

        cy.get(INPUTS.input_password).type(Cypress.env('requiredFields').password)
        // cy.get(INPUTS.input_error).contains('Insira uma senha válida') 
    }

    completeSignup(){
        // Primeira etapa
        cy.get(INPUTS.input_first_name).type(fakerName)
        cy.get(INPUTS.input_last_name).type(fakerLastName)
        cy.get(INPUTS.input_birthDate).type(Cypress.env('completeSignup').birthdate)
        cy.get(INPUTS.input_cpf).type(cpf)
        cy.get(INPUTS.input_email).type(randomEmail)
        cy.get(INPUTS.input_confirm_email).type(randomEmail) 
        cy.get(INPUTS.input_password).type(Cypress.env('completeSignup').password)
        cy.get(INPUTS.input_confirm_password).type(Cypress.env('completeSignup').password)
        cy.get('#dropdown-button-1 > div > span:nth-child(4)').click({force: true});
        cy.get(CHECKBOX_AND_BUTTONS.checkbox_terms_lgpd).click()
        cy.get(CHECKBOX_AND_BUTTONS.proximo_button).click()
        

        // Segunda etapa
        cy.get(INPUTS.input_address_cep).type(Cypress.env('completeSignup').input_address_cep).blur()
        cy.get(INPUTS.input_address_number).type(Cypress.env('completeSignup').input_address_number)
        cy.get(INPUTS.input_address_complement).type(Cypress.env('completeSignup').input_address_complement)
        cy.get(CHECKBOX_AND_BUTTONS.submit_form_button).click()

        // Efetua o login com usuário cadastrado 
        cy.get(CHECKBOX_AND_BUTTONS.login_page_redirect_button).click()
        cy.wait(2000)
        cy.get(LOGIN_FORM.username).type(randomEmail, {force: true})
        cy.get(LOGIN_FORM.password).type(Cypress.env('completeSignup').password)
        cy.get(CHECKBOX_AND_BUTTONS.login_button).click()

        // Valida nome de usuário Logado na plataforma
        cy.get(DASHBOARD.username_label).invoke('text').then((text) => {
            // Remover espaços em branco extras e caracteres de escape HTML
            const textoFormatado = text.trim().replace(/&nbsp;/g, ' ');
          
        // Comparar o texto formatado com o texto esperado
            expect(textoFormatado).to.equal(fakerName + " " + fakerLastName);
          });
        // should('have.text', "&nbsp;"+fakerName +" "+fakerLastName+ "&nbsp;")


    }
}

export default new validate()