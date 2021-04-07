let prefix = "contactus";
let core = "https://contactus.nikba.com/";
//let core = "http://127.0.0.1:5500/";
let container = document.querySelector("#contactus");
let position = container.getAttribute('position');
let title = container.getAttribute('title');
let messengers = {
    "facebook": {
        url: 'https://m.me/',
        label: 'Write a message'
    },
    "whatsapp": {
        url: 'https://api.whatsapp.com/send?phone=',
        label: 'Write a message'
    },
    "viber": {
        url: 'viber://contact?number=',
        label: 'Write a message'
    },
    "telegram": {
        url: 'https://t.me/',
        label: 'Write a message'
    },
    "call": {
        url: 'tel:',
        label: 'Call us'
    }
};



//Load CSS
if (document.createStyleSheet) {
    document.createStyleSheet(core + 'assets/css/style.css?v=1.91');
}
else {
    let styles = "@import url('" + core + "assets/css/style.css?v=1.91');";
    let newSS = document.createElement('link');
    newSS.rel = 'stylesheet';
    newSS.href = 'data:text/css,' + escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
}

//Create Main Button
let mainButton = document.createElement("div");
mainButton.classList.add(prefix + "_btn");
container.appendChild(mainButton);

//Create Main Button Icon
let mainButtonIcon = document.createElement("div");
mainButtonIcon.classList.add(prefix + "_btn_icon");
mainButton.appendChild(mainButtonIcon);

//Create Main Button Alert
let mainButtonAlert = document.createElement("div");
mainButtonAlert.classList.add(prefix + "_btn_alert");
mainButtonAlert.textContent = "1";
mainButton.appendChild(mainButtonAlert);

//Create Main Box
let mainBox = document.createElement("div");
mainBox.classList.add(prefix + "_box");
container.appendChild(mainBox);


//Widget Position
if (position == 'left') {
    mainButton.classList.add(prefix + "_btn_left");
    mainBox.classList.add(prefix + "_box_left");
}

//Remove Element
function removeElement() {
    let element = document.querySelector(".contactus_box");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

//Open Close Box
function openCloseBox(elem) {
    let isOpen = elem.classList.contains('opened');
    elem.classList.toggle('opened');
    mainButton.classList.toggle('opened');

    //Create Main Box Header
    let mainBoxHeader = document.createElement("div");
    mainBoxHeader.classList.add(prefix + "_box_header");
    mainBox.appendChild(mainBoxHeader);

    //Add Title
    if (title == null || title === '') {
        title = 'Need help? Contact us!!';
    }
    let mainBoxHeaderTitle = document.createElement("span");
    mainBoxHeaderTitle.classList.add(prefix + "_box_header_title");
    mainBoxHeaderTitle.textContent = title;
    mainBoxHeader.appendChild(mainBoxHeaderTitle);


    //Load Buttons
    for (var key in messengers) {
        // skip loop if the property is from prototype
        if (!messengers.hasOwnProperty(key)) continue;

        let messenger = container.getAttribute(key);
        let messenger_label = container.getAttribute(key + '-label');
        let messenger_key = key;

        let obj = messengers[key];
        let messenger_url = obj['url'];
        let messenger_def_label = obj['label'];

        //If is send atribute generate item
        if (messenger !== null && messenger !== '') {
            let mainBoxMessenger = document.createElement("a");
            mainBoxMessenger.className = prefix + "_box_item";
            mainBoxMessenger.href = messenger_url + messenger;
            mainBoxMessenger.setAttribute("target", "_blank");
            mainBox.appendChild(mainBoxMessenger);
            let mainBoxMessengerBtn = document.createElement("span");
            mainBoxMessengerBtn.classList.add(prefix + "_box_item_btn");
            mainBoxMessengerBtn.classList.add(prefix + "_" + messenger_key);
            mainBoxMessenger.appendChild(mainBoxMessengerBtn);
            let mainBoxMessengerBtnIcon = document.createElement("div");
            mainBoxMessengerBtnIcon.classList.add(prefix + "_item_btn_icon");
            mainBoxMessengerBtn.appendChild(mainBoxMessengerBtnIcon);

            let mainBoxMessengerBtnLabel = document.createElement("span");
            mainBoxMessengerBtnLabel.classList.add(prefix + "_item_label");
            mainBoxMessengerBtnLabel.textContent = messenger_key;
            mainBoxMessenger.appendChild(mainBoxMessengerBtnLabel);

            if (messenger_label == null || messenger_label === '') {
                messenger_label = messenger_def_label;
            }

            let mainBoxMessengerBtnSubLabel = document.createElement("span");
            mainBoxMessengerBtnSubLabel.classList.add(prefix + "_item_sub_label");
            mainBoxMessengerBtnSubLabel.textContent = messenger_label;
            mainBoxMessengerBtnLabel.appendChild(mainBoxMessengerBtnSubLabel);
        }
    }

    //Check if is Box is Open
    if (isOpen) {
        mainButton.removeEventListener('click', () => openCloseBox(mainBox));
        removeElement();
    }

}

//Init
mainButton.addEventListener('click', () => openCloseBox(mainBox));


fetch('https://nikba.com/contactus.php?ref='+window.location.hostname, {
    method: 'GET',
    mode: 'no-cors'
})