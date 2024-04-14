const MAPPED_FIELDS = {
    already_account:'.font-normal > .text-current-500',
    btn_enroll: '[data-cy="button-btn-enroll"]',
    personal_data: 'div:nth-child(2) > div:nth-child(1) > div'
};

const LABELS = {
    name: '.gap-y-4 > :nth-child(1) > :nth-child(1) > .form-container > .form-label',
    last_name: '.gap-y-4 > :nth-child(1) > :nth-child(2) > .form-container > .form-label',
    date_of_birth: '.gap-y-4 > :nth-child(2) > :nth-child(1) > .form-container > .form-label',
    itin_number: '.gap-y-4 > :nth-child(2) > :nth-child(2) > .form-container > .form-label',
    email: '.gap-y-4 > :nth-child(3) > :nth-child(1) > .form-container > .form-label',
    confirm_your_email: '.gap-y-4 > :nth-child(3) > :nth-child(2) > .form-container > .form-label',
    password: '.gap-y-4 > :nth-child(4) > :nth-child(1) > .form-container > .form-label',
    confirm_your_password: '.gap-y-4 > :nth-child(4) > :nth-child(2) > .form-container > .form-label',
    proficiency_level: '.form-container > .form-label'
}

export { MAPPED_FIELDS, LABELS}