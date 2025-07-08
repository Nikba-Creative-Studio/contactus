const params = [
    { input: '#title', label: '.title_label' },
    { input: '#position', label: '.position_label' },
    { input: '#facebook-label', label: '.facebook_label' },
    { input: '#facebook', label: '.facebook', validate: validateFacebook },
    { input: '#whatsapp-label', label: '.whatsapp_label' },
    { input: '#whatsapp', label: '.whatsapp', validate: validatePhone },
    { input: '#viber-label', label: '.viber_label' },
    { input: '#viber', label: '.viber', validate: validatePhone },
    { input: '#telegram-label', label: '.telegram_label' },
    { input: '#telegram', label: '.telegram', validate: validateTelegram },
    { input: '#call-label', label: '.call_label' },
    { input: '#call', label: '.phone_label', validate: validatePhone },
];

const changeData = (destination, value) => {
    destination.textContent = value;
};

const formatPhoneNumber = number => {
    const cleaned = number.replace(/[^\d+]/g, '');
    const match = cleaned.match(/^(\+\d{3})(\d{2})(\d{3})(\d{3})$/);
    if (match) {
        return `${match[1]} ${match[2]} ${match[3]} ${match[4]}`;
    }
    if (cleaned.startsWith('+')) {
        return cleaned.replace(/(\+\d{3})(\d{3})(\d{3})(\d{3})?/, (m, c, a, b, d) => [c, a, b, d].filter(Boolean).join(' '));
    }
    return number;
};

function validateFacebook(value) {
    return /^[a-zA-Z0-9.]{5,}$/.test(value);
}

function validatePhone(value) {
    return /^\+\d{8,15}$/.test(value);
}

function validateTelegram(value) {
    return /^[a-zA-Z][a-zA-Z0-9_]{4,31}$/.test(value) || validatePhone(value);
}

const showError = (inputElement, message) => {
    let error = inputElement.parentNode.querySelector('.input-error');
    if (!error) {
        error = document.createElement('div');
        error.className = 'input-error';
        error.style.color = 'red';
        error.style.fontSize = '0.9em';
        error.style.marginTop = '0.25em';
        inputElement.parentNode.appendChild(error);
    }
    error.textContent = message;
};

const clearError = inputElement => {
    const error = inputElement.parentNode.querySelector('.input-error');
    if (error) error.remove();
};

function getFormValues() {
    return {
        title: document.querySelector('#title').value,
        position: document.querySelector('#position').value,
        facebook: document.querySelector('#facebook').value,
        facebookLabel: document.querySelector('#facebook-label').value,
        whatsapp: document.querySelector('#whatsapp').value,
        whatsappLabel: document.querySelector('#whatsapp-label').value,
        viber: document.querySelector('#viber').value,
        viberLabel: document.querySelector('#viber-label').value,
        telegram: document.querySelector('#telegram').value,
        telegramLabel: document.querySelector('#telegram-label').value,
        call: document.querySelector('#call').value,
        callLabel: document.querySelector('#call-label').value,
    };
}

function generateCodeSnippet(values) {
    return `<script src="https://contactus.nikba.com/contactus.min.js"></script>\n` +
        `<div id="contactus"` +
        (values.call ? ` call="${values.call}"` : '') +
        (values['callLabel'] ? ` call-label="${values.callLabel}"` : '') +
        (values.viber ? ` viber="${values.viber}"` : '') +
        (values['viberLabel'] ? ` viber-label="${values.viberLabel}"` : '') +
        (values.whatsapp ? ` whatsapp="${values.whatsapp}"` : '') +
        (values['whatsappLabel'] ? ` whatsapp-label="${values.whatsappLabel}"` : '') +
        (values.facebook ? ` facebook="${values.facebook}"` : '') +
        (values['facebookLabel'] ? ` facebook-label="${values.facebookLabel}"` : '') +
        (values.telegram ? ` telegram="${values.telegram}"` : '') +
        (values['telegramLabel'] ? ` telegram-label="${values.telegramLabel}"` : '') +
        (values.title ? ` title="${values.title}"` : '') +
        (values.position ? ` position="${values.position}"` : '') +
        `></div>`;
}

function updateCodeBlock() {
    const values = getFormValues();
    document.querySelector('#code').textContent = generateCodeSnippet(values);
}

params.forEach(item => {
    const inputElement = document.querySelector(item.input);
    const newElement = document.querySelector(item.label);
    const validate = item.validate;

    inputElement.addEventListener('input', function () {
        let isValid = true;
        if (validate) {
            isValid = validate(this.value);
            if (!isValid) {
                let msg = '';
                if (item.input === '#facebook') msg = 'Invalid Facebook username (min 5 chars, letters, numbers, periods, no spaces)';
                if (item.input === '#whatsapp' || item.input === '#viber' || item.input === '#call') msg = 'Invalid phone number (use international format, e.g. +37369820825)';
                if (item.input === '#telegram') msg = 'Invalid Telegram username or phone (username: 5-32 chars, letters, numbers, underscores, starts with a letter)';
                showError(inputElement, msg);
            } else {
                clearError(inputElement);
            }
        } else {
            clearError(inputElement);
        }
        if (isValid) {
            if (newElement) {
                if (item.input === '#call') {
                    const phoneNumberSpan = newElement.querySelector('.phone_number');
                    if (phoneNumberSpan) {
                        phoneNumberSpan.textContent = formatPhoneNumber(this.value);
                    }
                } else {
                    changeData(newElement, this.value);
                }
            }
            updateCodeBlock();
        }
    });
});

// Initial code block render
updateCodeBlock();