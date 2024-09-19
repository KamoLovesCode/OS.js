import { EventEmitter } from '@osjs/event-emitter';
import createUI from './adapters/ui/login';
// Import the logo image so Webpack processes it
import logoPath from './styles/logo-blue-32x32.png'; // Adjust based on actual file location
 // Adjust the path as per your folder structure

/**
 * OS.js Login UI
 */
export default class Login extends EventEmitter {
  constructor(core, options) {
    super('Login');
    this.$container = null;
    this.core = core;
    this.options = {
      id: 'osjs-login',
      title: 'AISOM',
      stamp: core.config('version'),
      logo: {
        position: 'top',
        src: logoPath // Use the imported logo path here
      },
      fields: [{
        tagName: 'input',
        attributes: {
          name: 'username',
          type: 'text',
          placeholder: 'Enter your name'
        }
      }],
      ...options
    };
  }

  init(startHidden) {
    this.$container = document.createElement('div');
    this.$container.id = this.options.id;
    this.$container.className = 'osjs-login-base';
    this.core.$root.classList.add('login');
    this.core.$root.appendChild(this.$container);
    this.render(startHidden);
  }

  destroy() {
    this.core.$root.classList.remove('login');
    if (this.$container) {
      this.$container.remove();
      this.$container = null;
    }
    super.destroy();
  }

  render(startHidden) {
    const login = this.core.config('auth.login', {});
    const ui = createUI(this.options, login, startHidden, this.$container);

    // Create logo element
    const logo = document.createElement('img');
    logo.src = this.options.logo.src;
    logo.className = 'login-logo';
    this.$container.appendChild(logo);

    // Create username input field
    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.placeholder = 'Enter your name';
    usernameInput.name = 'username';
    this.$container.appendChild(usernameInput);

    // Create next button with an inline SVG right arrow
    const nextButton = document.createElement('button');
    nextButton.className = 'next-button'; // Custom style class
    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.setAttribute("viewBox", "0 0 24 24");
    icon.setAttribute("width", "24");
    icon.setAttribute("height", "24");
    icon.innerHTML = `<path d="M12 2l10 10-10 10L2 12z"/>`;
    nextButton.appendChild(icon);
    this.$container.appendChild(nextButton);

    // Add event listener for "next" action
    nextButton.addEventListener('click', () => {
      const username = usernameInput.value;
      if (username) {
        this.emit('login:post', { username });
      }
    });

    ui.on('register:post', values => this.emit('register:post', values));
    ui.on('login:post', values => this.emit('login:post', values));
    this.on('login:start', () => ui.emit('login:start'));
    this.on('login:stop', () => ui.emit('login:stop'));
    this.on('login:error', (msg, err) => ui.emit('login:error', msg, err));
  }
}
