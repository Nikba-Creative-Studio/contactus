# contactus
Allows users to chat with their customers through mobile and desktop messaging apps

You want your website visitors to have an intuitive and convenient option to contact you?

A contact widget removes hurdles and facilitates communication for both sides. It thus supports customer acquisition and customer retention in equal measure.

You can integrate Contactus that lead your visitors directly to the apps you’re offering as contact options: Facebook Messenger, WhatsApp, Telegram, and Viber.

You can add your individual values for Widget Title and Button Text. This is very useful for multilingual sites!

### Install this code on every page of the website before the closing body tag:

```
<script>
    (function(doc, scr, id) {
        var js, fjs = doc.getElementsByTagName(scr)[0];
        if (doc.getElementById(id)) return;
            js = doc.createElement(scr); 
            js.id = id;
            js.src = 'https://contactus.nikba.com/contactus.min.js';
            fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'contactus-sdk'));
</script>
<div  id="contactus" 
      viber="+37369820825" 
      viber-label="Write a message" 
      whatsapp="+37369820825" 
      whatsapp-label="Write a message" 
      facebook="Nikba.Creative.Studio" 
      facebook-label="Write a message" 
      telegram="nikba_com" 
      telegram-label="Write a message" 
      title="Need help? Contact us!"
      position="left"
></div>
```

### Vire demo https://contactus.nikba.com/
