const params = [
    {
        input: '#title',
        label: '.title_label',
        code: '.code_title',
    },
    {
        input: '#position',
        label: '.position_label',
        code: '.code_position',
    },
    {
        input: '#facebook-label',
        label: '.facebook_label',
        code: '.code_facebook_label'
    },
    {
        input: '#facebook',
        label: '.facebook',
        code: '.code_facebook'
    },
    {
        input: '#whatsapp-label',
        label: '.whatsapp_label',
        code: '.code_whatsapp_label'
    },
    {
        input: '#whatsapp',
        label: '.whatsapp',
        code: '.code_whatsapp'
    },
    {
        input: '#viber-label',
        label: '.viber_label',
        code: '.code_viber_label'
    },
    {
        input: '#viber',
        label: '.viber',
        code: '.code_viber'
    },
    {
        input: '#telegram-label',
        label: '.telegram_label',
        code: '.code_telegram_label'
    },
    {
        input: '#telegram',
        label: '.telegram',
        code: '.code_telegram'
   },
   {
    input: '#call-label',
    label: '.call_label',
    code: '.code_call_label'
    },
    {
        input: '#call',
        label: '.call',
        code: '.code_call'
   },
];


function changeData(destination,value) {
    destination.textContent = value;
}

params.forEach(function (item) {
    let inputElement = document.querySelector(item.input);
    let newElement = document.querySelector(item.label);
    let codeElement = document.querySelector(item.code);

        inputElement.addEventListener('input', function (evt) {
            if(newElement) {
                changeData(newElement, this.value);
            }
            changeData(codeElement, this.value);
        });

});