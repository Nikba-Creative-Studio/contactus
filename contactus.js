let prefix            = "contactus";
let core              = "http://127.0.0.1:5500/";
let container         = document.querySelector("#contactus");
let position             = container.getAttribute('position');
let viber             = container.getAttribute('viber');
let viberLabel        = container.getAttribute('viber-label');
let call              = container.getAttribute('call');
let callLabel         = container.getAttribute('call-label');
let whatsapp          = container.getAttribute('whatsapp');
let whatsappLabel     = container.getAttribute('whatsapp-label');
let facebook          = container.getAttribute('facebook');
let facebookLabel     = container.getAttribute('facebook-label');
let telegram          = container.getAttribute('telegram');
let telegramLabel     = container.getAttribute('telegram-label');
let title             = container.getAttribute('title');

//Load CSS
if(document.createStyleSheet) {
    document.createStyleSheet(core+'assets/css/style.css');
}
else {
    let styles = "@import url('"+core+"assets/css/style.css');";
    let newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
}

//Create Main Button
let mainButton = document.createElement("div");
    mainButton.classList.add(prefix+"_btn");
    container.appendChild(mainButton);

//Create Main Button Icon
let mainButtonIcon = document.createElement("div");
    mainButtonIcon.classList.add(prefix+"_btn_icon");
    mainButton.appendChild(mainButtonIcon);

//Create Main Box
let mainBox = document.createElement("div");
    mainBox.classList.add(prefix+"_box");
    container.appendChild(mainBox);

//Create Main Box Header
let mainBoxHeader = document.createElement("div");
    mainBoxHeader.classList.add(prefix+"_box_header");
    mainBox.appendChild(mainBoxHeader);

//Add Title
if(title == null || title === '') {
    title = 'Need help? Contact us!!';
}
let mainBoxHeaderTitle = document.createElement("span");
    mainBoxHeaderTitle.classList.add(prefix+"_box_header_title");
    mainBoxHeaderTitle.textContent = title;
    mainBoxHeader.appendChild(mainBoxHeaderTitle);


//Add Facebook
if(facebook !== null && facebook !== '') {
    let mainBoxFacebook = document.createElement("a");
        mainBoxFacebook.className = prefix+"_box_item";
        mainBoxFacebook.href = "https://m.me/"+facebook;
        mainBoxFacebook.setAttribute("target", "_blank");
        mainBox.appendChild(mainBoxFacebook);
        let mainBoxFacebookBtn = document.createElement("span");
            mainBoxFacebookBtn.classList.add(prefix+"_box_item_btn");
            mainBoxFacebookBtn.classList.add(prefix+"_facebook");
            mainBoxFacebook.appendChild(mainBoxFacebookBtn);
            let mainBoxFacebookBtnIcon = document.createElement("div");
                mainBoxFacebookBtnIcon.classList.add(prefix+"_item_btn_icon");
                mainBoxFacebookBtn.appendChild(mainBoxFacebookBtnIcon);
        let mainBoxFacebookBtnLabel = document.createElement("span");
            mainBoxFacebookBtnLabel.classList.add(prefix+"_item_label");
            mainBoxFacebookBtnLabel.textContent = "Facebook Messenger";
            mainBoxFacebook.appendChild(mainBoxFacebookBtnLabel);

            if(facebookLabel == null || facebookLabel === '') {
                facebookLabel = 'Write a message';
            }
            let mainBoxFacebookBtnSubLabel = document.createElement("span");
                mainBoxFacebookBtnSubLabel.classList.add(prefix+"_item_sub_label");
                mainBoxFacebookBtnSubLabel.textContent = facebookLabel;
                mainBoxFacebookBtnLabel.appendChild(mainBoxFacebookBtnSubLabel);
}

//Add Whatsapp
if(whatsapp !== null && whatsapp !== '') {
    let mainBoxWhatsapp = document.createElement("a");
        mainBoxWhatsapp.className = prefix+"_box_item";
        mainBoxWhatsapp.href = "https://api.whatsapp.com/send?phone="+whatsapp;
        mainBoxWhatsapp.setAttribute("target", "_blank");
        mainBox.appendChild(mainBoxWhatsapp);
        let mainBoxWhatsappBtn = document.createElement("span");
            mainBoxWhatsappBtn.classList.add(prefix+"_box_item_btn");
            mainBoxWhatsappBtn.classList.add(prefix+"_whatsapp");
            mainBoxWhatsapp.appendChild(mainBoxWhatsappBtn);
            let mainBoxWhatsappBtnIcon = document.createElement("div");
                mainBoxWhatsappBtnIcon.classList.add(prefix+"_item_btn_icon");
                mainBoxWhatsappBtn.appendChild(mainBoxWhatsappBtnIcon);
        let mainBoxWhatsappBtnLabel = document.createElement("span");
            mainBoxWhatsappBtnLabel.classList.add(prefix+"_item_label");
            mainBoxWhatsappBtnLabel.textContent = "Whatsapp";
            mainBoxWhatsapp.appendChild(mainBoxWhatsappBtnLabel);

            if(whatsappLabel == null || whatsappLabel === '') {
                whatsappLabel = 'Write a message';
            }
            let mainBoxWhatsappBtnSubLabel = document.createElement("span");
                mainBoxWhatsappBtnSubLabel.classList.add(prefix+"_item_sub_label");
                mainBoxWhatsappBtnSubLabel.textContent = whatsappLabel;
                mainBoxWhatsappBtnLabel.appendChild(mainBoxWhatsappBtnSubLabel);
}

//Add Viber
if(viber !== null && viber !== '') {
    let mainBoxViber = document.createElement("a");
        mainBoxViber.className = prefix+"_box_item";
        mainBoxViber.href = "viber://chat?number="+viber;
        mainBoxViber.setAttribute("target", "_blank");
        mainBox.appendChild(mainBoxViber);
        let mainBoxViberBtn = document.createElement("span");
            mainBoxViberBtn.classList.add(prefix+"_box_item_btn");
            mainBoxViberBtn.classList.add(prefix+"_viber");
            mainBoxViber.appendChild(mainBoxViberBtn);
            let mainBoxViberBtnIcon = document.createElement("div");
                mainBoxViberBtnIcon.classList.add(prefix+"_item_btn_icon");
                mainBoxViberBtn.appendChild(mainBoxViberBtnIcon);
        let mainBoxViberBtnLabel = document.createElement("span");
            mainBoxViberBtnLabel.classList.add(prefix+"_item_label");
            mainBoxViberBtnLabel.textContent = "Viber";
            mainBoxViber.appendChild(mainBoxViberBtnLabel);

            if(viberLabel == null || viberLabel === '') {
                viberLabel = 'Write a message';
            }
            let mainBoxViberBtnSubLabel = document.createElement("span");
                mainBoxViberBtnSubLabel.classList.add(prefix+"_item_sub_label");
                mainBoxViberBtnSubLabel.textContent = viberLabel;
                mainBoxViberBtnLabel.appendChild(mainBoxViberBtnSubLabel);
}

//Add Telegram
if(telegram !== null && telegram !== '') {
    let mainBoxTelegram = document.createElement("a");
        mainBoxTelegram.className = prefix+"_box_item";
        mainBoxTelegram.href = "https://t.me/"+telegram;
        mainBoxTelegram.setAttribute("target", "_blank");
        mainBox.appendChild(mainBoxTelegram);
        let mainBoxTelegramBtn = document.createElement("span");
            mainBoxTelegramBtn.classList.add(prefix+"_box_item_btn");
            mainBoxTelegramBtn.classList.add(prefix+"_telegram");
            mainBoxTelegram.appendChild(mainBoxTelegramBtn);
            let mainBoxTelegramBtnIcon = document.createElement("div");
                mainBoxTelegramBtnIcon.classList.add(prefix+"_item_btn_icon");
                mainBoxTelegramBtn.appendChild(mainBoxTelegramBtnIcon);
        let mainBoxTelegramBtnLabel = document.createElement("span");
            mainBoxTelegramBtnLabel.classList.add(prefix+"_item_label");
            mainBoxTelegramBtnLabel.textContent = "Telegram";
            mainBoxTelegram.appendChild(mainBoxTelegramBtnLabel);

            if(telegramLabel == null || telegramLabel === '') {
                telegramLabel = 'Write a message';
            }
            let mainBoxTelegramBtnSubLabel = document.createElement("span");
                mainBoxTelegramBtnSubLabel.classList.add(prefix+"_item_sub_label");
                mainBoxTelegramBtnSubLabel.textContent = telegramLabel;
                mainBoxTelegramBtnLabel.appendChild(mainBoxTelegramBtnSubLabel);
}

//Add call
if(call !== null && call !== '') {
    let mainBoxcall = document.createElement("a");
        mainBoxcall.className = prefix+"_box_item";
        mainBoxcall.href = "tel://"+call;
        mainBox.appendChild(mainBoxcall);
        let mainBoxcallBtn = document.createElement("span");
            mainBoxcallBtn.classList.add(prefix+"_box_item_btn");
            mainBoxcallBtn.classList.add(prefix+"_call");
            mainBoxcall.appendChild(mainBoxcallBtn);
            let mainBoxcallBtnIcon = document.createElement("div");
                mainBoxcallBtnIcon.classList.add(prefix+"_item_btn_icon");
                mainBoxcallBtn.appendChild(mainBoxcallBtnIcon);
        let mainBoxcallBtnLabel = document.createElement("span");
            mainBoxcallBtnLabel.classList.add(prefix+"_item_label");
            mainBoxcallBtnLabel.textContent = "Call Us";
            mainBoxcall.appendChild(mainBoxcallBtnLabel);

            if(callLabel == null || callLabel === '') {
                callLabel = 'Call us anytime';
            }
            let mainBoxcallBtnSubLabel = document.createElement("span");
                mainBoxcallBtnSubLabel.classList.add(prefix+"_item_sub_label");
                mainBoxcallBtnSubLabel.textContent = callLabel;
                mainBoxcallBtnLabel.appendChild(mainBoxcallBtnSubLabel);
}

//Widget Position
if(position == 'left') {
    mainButton.classList.add(prefix+"_btn_left");
    mainBox.classList.add(prefix+"_box_left");
}

//Open CLose Box
function openCloseBox(elem) {
    let isOpen = elem.classList.contains('opened');
    elem.classList.toggle('opened');
    mainButton.classList.toggle('opened');
}

//Init
mainButton.addEventListener('click', () => openCloseBox(mainBox));