import template from './proto.html';

export class Proto extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = template;
  }

  // eslint-disable-next-line class-methods-use-this
  disconnectedCallback() {}

  // eslint-disable-next-line class-methods-use-this
  adoptedCallback() {}

  // eslint-disable-next-line class-methods-use-this
  attributeChangedCallback(name, oldValue, newValue) {
    console.log('[PROTO] attributes changed.', { name, oldValue, newValue });
  }

  static get observedAttributes() {
    return ['state'];
  }
}
