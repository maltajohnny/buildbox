const MAPPED_FIELDS = {
    already_account:'.font-normal > .text-current-500',
    btn_enroll: '[data-cy="button-btn-enroll"]',
    personal_data: 'div:nth-child(2) > div:nth-child(1) > div'
};

const LABELS = {
    first_name: '.gap-y-4 > :nth-child(1) > :nth-child(1) > .form-container > .form-label',
    last_name: '.gap-y-4 > :nth-child(1) > :nth-child(2) > .form-container > .form-label',
    birthDate: '.gap-y-4 > :nth-child(2) > :nth-child(1) > .form-container > .form-label',
    cpf: '.gap-y-4 > :nth-child(2) > :nth-child(2) > .form-container > .form-label',
    email: '.gap-y-4 > :nth-child(3) > :nth-child(1) > .form-container > .form-label',
    confirm_email: '.gap-y-4 > :nth-child(3) > :nth-child(2) > .form-container > .form-label',
    password: '.gap-y-4 > :nth-child(4) > :nth-child(1) > .form-container > .form-label',
    confirm_password: '.gap-y-4 > :nth-child(4) > :nth-child(2) > .form-container > .form-label',
    proficiency_level: '.form-container > .form-label'
}

const INPUTS = {
    input_first_name: '[data-cy="input-signup-personal-data-firstName"]',
    input_last_name: '[data-cy="input-signup-personal-data-lastName"]',
    input_birthDate: '[data-cy="input-signup-personal-data-birthDate"]',
    input_cpf: '[data-cy="input-signup-personal-data-cpf"]',
    input_email: '[data-cy="input-signup-personal-data-email"]',
    input_confirm_email: '[data-cy="input-signup-personal-data-email-confirm"]',
    input_password: '[data-cy="input-signup-personal-data-password"]',
    input_confirm_password: '[data-cy="input-signup-personal-data-password-confirm"]',
    input_proficiency_level: '.form-container > .form-label',
    input_error: '.input-error',
    input_address_cep:'[data-cy="input-signup-address-cep"]',
    input_address_country: '[data-cy="input-signup-address-country”]',
    input_address_state: '[data-cy="input-signup-address-state”]',
    input_address_city: '[data-cy="input-signup-address-city]',
    input_address_neighborhood: '[data-cy="input-signup-address-neighborhood]',
    input_address_street: '[data-cy="input-signup-address-street]',
    input_address_number: '[data-cy="input-signup-address-number', //
    input_address_complement: '[data-cy="input-signup-address-complement"]'
}

const CHECKBOX_AND_BUTTONS = {
    checkbox_terms_lgpd: '[data-cy="input-signup-personal-data-lgpd"]',
    fazer_nivelamento_button: '.btn', 
    proximo_button: '[data-cy="button-signup_submit_button_1"',
    submit_form_button: '[data-cy="button-signup_submit_button_3"]',
    login_page_redirect_button: '[data-cy="button-wide_window_button"]',
    login_button: '#wp-submit'
}

const LOGIN_FORM = {
    username: '#user_login',
    password: '#user_pass'

}

const DASHBOARD ={
    username_label: '.hidden > .flex > .text-sm'
}

const ICON = {
     head_icon_rodape:'.h-7'
}



export { MAPPED_FIELDS, LABELS, INPUTS, CHECKBOX_AND_BUTTONS , LOGIN_FORM, DASHBOARD, ICON}