import template from './theme-switch.html';

const themes = {
  default: {
    '--theme-color-default': '#323232',
    '--theme-bg-default':
      'linear-gradient(90deg, rgba(50,50,50,0.4),rgba(50,50,50,0.6)), url("/assets/wallpapers/rawpixel_black_paint.jpg")',
    '--dark-section-bg': 'linear-gradient(90deg,#323232 0% 80%,#515151 80% 100%)',
  },
  primary: {
    '--theme-color-default': '#1e8e97',
    '--theme-bg-default':
      'linear-gradient(90deg, rgba(2, 78, 173, 0.2),rgba(2,78,173,0.2)), url("/assets/wallpapers/rawpixel_vector.jpg")',
    '--dark-section-bg':
      'linear-gradient(45deg, #c76362 0% 5%,#1e8e97 5% 25%,#0b193f 25% 75%, #1e8e97 75% 95%, #C76363 95% 100%)',
  },
  secondary: {
    '--theme-color-default': '#e65266',
    '--theme-bg-default':
      'linear-gradient(90deg,#ad2a3b,rgba(230, 82, 102, .5)),url("/assets/wallpapers/rawpixel_red_smoke.jpg")',
    '--dark-section-bg': 'linear-gradient(90deg,#ad2a3b 0% 25%,#e65266 25%)',
  },
  tertiary: {
    '--theme-color-default': '#323232',
    '--theme-bg-default':
      'linear-gradient(90deg,rgba(0,0,0,0.2) 0% 50%,rgba(0,0,0,0.4) 50% 100%),url("/assets/wallpapers/rawpixel_happy_vacation.jpg")',
    '--dark-section-bg':
      'linear-gradient(25deg,rgba(0,0,0,0.2) 0% 50%,rgba(0,0,0,0.4) 50% 100%),url("/assets/wallpapers/rawpixel_road.jpg")',
  },
};

export class ThemeSwitch extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.id = this.getAttribute('id');
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = template;

    const container = this.shadowRoot.querySelector('.theme-switch');
    const trigger = this.shadowRoot.querySelector('.theme-switch__trigger');

    const extTriggers = document.querySelectorAll(`[trigger-for="${this.id}"]`);
    extTriggers.forEach(tr =>
      tr.addEventListener('click', () => {
        tr.classList.toggle('active');
        container.classList.toggle('active');
      }),
    );

    this.options.forEach((option, index) => {
      // eslint-disable-next-line no-param-reassign
      option.style.transitionDelay = `${25 * index + 100}ms`;

      const theme = option.getAttribute('theme');

      if (this.cachedTheme && theme === this.cachedTheme) {
        option.classList.add('active');
      } else if (!this.cachedTheme && theme === 'default') {
        option.classList.add('active');
      }

      option.addEventListener('click', () => {
        const activeOption = this.shadowRoot.querySelector('.theme-switch__option.active');
        if (activeOption) {
          activeOption.classList.remove('active');
        }
        if (theme in themes) {
          option.classList.add('active');
          this.setAttribute('active-theme', theme);
        }
      });
    });

    if (trigger && container) {
      trigger.addEventListener('click', () => {
        container.classList.toggle('active');
      });
    }
  }

  // eslint-disable-next-line class-methods-use-this
  disconnectedCallback() {}

  // eslint-disable-next-line class-methods-use-this
  adoptedCallback() {}

  get options() {
    return this.shadowRoot.querySelectorAll('.theme-switch__option');
  }

  static setCachedTheme(theme) {
    localStorage.cachedTheme = theme;
  }

  static get cachedTheme() {
    return 'cachedTheme' in localStorage ? localStorage.cachedTheme : null;
  }

  switchTheme(value) {
    // Change theme on attribute change
    const currentMode = themes[value];
    this.constructor.setCachedTheme(value);
    Object.keys(currentMode).forEach(property =>
      document.body.style.setProperty(property, currentMode[property]),
    );
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // Calls per attr change
    const attrCalls = {
      'active-theme': this.switchTheme,
    };

    // if callback is assigned for named attr and it has previous value
    if (name in attrCalls && oldValue && oldValue !== newValue) {
      attrCalls[name].call(this, newValue);
    }
  }

  static get observedAttributes() {
    return ['active-theme'];
  }
}
