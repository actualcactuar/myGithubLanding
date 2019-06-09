import template from './proto.html';

export class Proto extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        console.log(this,template)
    }

    connectedCallback() {
        console.log('connected');
        this.shadowRoot.innerHTML = template;
    }

    disconnectedCallback() {}
      
    adoptedCallback() {}

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('[PROTO] attributes changed.',{name,oldValue,newValue});
    }

    //static get observedAttributes() { return ['active-theme']; }
}

