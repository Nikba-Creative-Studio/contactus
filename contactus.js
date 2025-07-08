class ContactWidget {
    constructor(containerId = '#contactus') {
      this.config = {
        prefix: 'contactus',
        version: '2.0.0',
        core: 'https://contactus.nikba.com/',
        defaultTitle: 'Need help? Contact us!!'
      };
  
      this.messengers = {
        facebook: {
          url: 'https://m.me/',
          label: 'Write a message',
          icon: 'fab fa-facebook-messenger'
        },
        whatsapp: {
          url: 'https://wa.me/',
          label: 'Write a message',
          icon: 'fab fa-whatsapp'
        },
        viber: {
          url: 'viber://chat?number=',
          label: 'Write a message',
          icon: 'fab fa-viber'
        },
        telegram: {
          url: 'https://t.me/',
          label: 'Write a message',
          icon: 'fab fa-telegram'
        },
        call: {
          url: 'tel:',
          label: 'Call us',
          icon: 'fas fa-phone'
        }
      };
  
      this.container = document.querySelector(containerId);
      this.isOpen = false;
      
      if (!this.container) {
        console.error(`ContactWidget: Container ${containerId} not found`);
        return;
      }
  
      this.init();
    }
  
    async init() {
      await this.loadStyles();
      this.createElements();
      this.bindEvents();
      this.trackUsage();
    }
  
    async loadStyles() {
      return new Promise((resolve) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `${this.config.core}assets/css/style.css?v=${this.config.version}`;
        link.onload = resolve;
        document.head.appendChild(link);
      });
    }
  
    createElements() {
      this.createMainButton();
      this.createMainBox();
      this.applyPosition();
    }
  
    createMainButton() {
      this.mainButton = this.createElement('div', {
        className: `${this.config.prefix}_btn`,
        innerHTML: `
          <div class="${this.config.prefix}_btn_icon"></div>
          <div class="${this.config.prefix}_btn_alert">1</div>
        `
      });
      this.container.appendChild(this.mainButton);
    }
  
    createMainBox() {
      this.mainBox = this.createElement('div', {
        className: `${this.config.prefix}_box`
      });
      this.container.appendChild(this.mainBox);
    }
  
    applyPosition() {
      const position = this.container.getAttribute('position');
      if (position === 'left') {
        this.mainButton.classList.add(`${this.config.prefix}_btn_left`);
        this.mainBox.classList.add(`${this.config.prefix}_box_left`);
      }
    }
  
    createElement(tag, options = {}) {
      const element = document.createElement(tag);
      
      Object.entries(options).forEach(([key, value]) => {
        if (key === 'className') {
          element.className = value;
        } else if (key === 'innerHTML') {
          element.innerHTML = value;
        } else if (key === 'textContent') {
          element.textContent = value;
        } else {
          element.setAttribute(key, value);
        }
      });
  
      return element;
    }
  
    bindEvents() {
      this.mainButton.addEventListener('click', () => this.toggleBox());
      
      // Close on outside click
      document.addEventListener('click', (e) => {
        if (this.isOpen && !this.container.contains(e.target)) {
          this.closeBox();
        }
      });
  
      // Close on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          this.closeBox();
        }
      });
    }
  
    toggleBox() {
      this.isOpen ? this.closeBox() : this.openBox();
    }
  
    openBox() {
      this.isOpen = true;
      this.mainButton.classList.add('opened');
      this.mainBox.classList.add('opened');
      
      this.clearBox();
      this.renderBoxContent();
    }
  
    closeBox() {
      this.isOpen = false;
      this.mainButton.classList.remove('opened');
      this.mainBox.classList.remove('opened');
      
      setTimeout(() => this.clearBox(), 300); // Wait for animation
    }
  
    clearBox() {
      this.mainBox.innerHTML = '';
    }
  
    renderBoxContent() {
      this.renderHeader();
      this.renderMessengers();
    }
  
    renderHeader() {
      const title = this.container.getAttribute('title') || this.config.defaultTitle;
      
      const header = this.createElement('div', {
        className: `${this.config.prefix}_box_header`,
        innerHTML: `
          <span class="${this.config.prefix}_box_header_title">${title}</span>
          <a href="https://contactus.nikba.com/" 
             target="_blank" 
             class="${this.config.prefix}_box_header_logo"
             aria-label="Powered by ContactUs">
          </a>
        `
      });
      
      this.mainBox.appendChild(header);
    }
  
    renderMessengers() {
      Object.entries(this.messengers).forEach(([key, messenger]) => {
        const messengerValue = this.container.getAttribute(key);
        
        if (messengerValue) {
          const messengerElement = this.createMessengerElement(key, messengerValue, messenger);
          this.mainBox.appendChild(messengerElement);
        }
      });
    }
  
    createMessengerElement(key, value, messenger) {
      const customLabel = this.container.getAttribute(`${key}-label`) || messenger.label;
      let mainLabel = this.capitalize(key);
      if (key === 'call') {
        mainLabel = this.formatPhoneNumber(value); // Show formatted phone number as main label for call
      }
      const element = this.createElement('a', {
        className: `${this.config.prefix}_box_item`,
        href: messenger.url + value,
        target: '_blank',
        'aria-label': `${customLabel} via ${key}`,
        innerHTML: `
          <span class="${this.config.prefix}_box_item_btn ${this.config.prefix}_${key}">
            <div class="${this.config.prefix}_item_btn_icon"></div>
          </span>
          <span class="${this.config.prefix}_item_label">
            ${mainLabel}
            <span class="${this.config.prefix}_item_sub_label">${customLabel}</span>
          </span>
        `
      });
  
      // Add click tracking
      element.addEventListener('click', () => {
        this.trackClick(key);
      });
  
      return element;
    }
  
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  
    trackClick(platform) {
      // Analytics tracking
      if (typeof gtag !== 'undefined') {
        gtag('event', 'contact_click', {
          platform: platform,
          widget_version: this.config.version
        });
      }
    }
  
    async trackUsage() {
      try {
        await fetch(`https://nikba.com/contactus.php?ref=${window.location.hostname}`, {
          method: 'GET',
          mode: 'no-cors'
        });
      } catch (error) {
        console.warn('ContactWidget: Analytics tracking failed', error);
      }
    }
  
    // Public API methods
    show() {
      this.container.style.display = 'block';
    }
  
    hide() {
      this.container.style.display = 'none';
    }
  
    updateTitle(newTitle) {
      this.container.setAttribute('title', newTitle);
      if (this.isOpen) {
        const titleElement = this.mainBox.querySelector(`.${this.config.prefix}_box_header_title`);
        if (titleElement) {
          titleElement.textContent = newTitle;
        }
      }
    }
  
    addMessenger(key, config) {
      this.messengers[key] = config;
    }
  
    removeMessenger(key) {
      delete this.messengers[key];
    }
  
    destroy() {
      this.container.innerHTML = '';
      document.removeEventListener('click', this.handleOutsideClick);
      document.removeEventListener('keydown', this.handleEscapeKey);
    }
  
    updatePhoneNumber(newNumber) {
      this.container.setAttribute('call', newNumber);
      this.messengers.call.label = newNumber; // For consistency if needed elsewhere
      if (this.isOpen) {
        this.clearBox();
        this.renderBoxContent();
      }
    }
  
    formatPhoneNumber(number) {
      // Basic formatting: +XXX XX XXX XXX or similar
      // Remove non-digit except +
      const cleaned = number.replace(/[^\d+]/g, '');
      // Example: +37369820825 => +373 698 208 25
      const match = cleaned.match(/^(\+\d{3})(\d{2})(\d{3})(\d{3})$/);
      if (match) {
        return `${match[1]} ${match[2]} ${match[3]} ${match[4]}`;
      }
      // Fallback: insert spaces every 3 digits after country code
      if (cleaned.startsWith('+')) {
        return cleaned.replace(/(\+\d{3})(\d{3})(\d{3})(\d{3})?/, (m, c, a, b, d) => [c, a, b, d].filter(Boolean).join(' '));
      }
      return number;
    }
  }
  
  // Auto-initialize if container exists
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#contactus');
    if (container) {
      window.contactWidget = new ContactWidget();
    }
  });