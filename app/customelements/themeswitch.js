const themes = {
    
    default:{
        "--theme-color-default":"#323232",
        "--theme-footer-bg-default":"linear-gradient(90deg, rgba(50,50,50,0.4),rgba(50,50,50,0.6)), url(\"/assets/wallpapers/browser-black-paint.jpg\")"
    },
    primary:{
        "--theme-color-default":"#0577b9",
        "--theme-footer-bg-default":"linear-gradient(90deg,rgba(5, 119, 185,0.4),rgba(5, 119, 185,0.6)),url(\"/assets/wallpapers/browser-black-paint.jpg\")"
    }
}

const tpl = () => `
    <div class="theme-switch">
        <button class="theme-switch__trigger">Open</button>
        <div class="theme-switch__options">
            <button class="theme-switch__option" theme="default">Option</button>
            <button class="theme-switch__option" theme="primary">Option</button>
            <button class="theme-switch__option" theme="secondary">Option</button>
            <button class="theme-switch__option" theme="tertiary">Option</button>
        </div>
    </div>
`

class ThemeSwitch extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        console.log('connected');
        this.shadowRoot.innerHTML = tpl();

        let options = this.shadowRoot.querySelectorAll('.theme-switch__option');
        options.forEach(option => {
            option.addEventListener('click',event => {
                var theme = option.getAttribute('theme');
                if(theme in themes){

                    this.setAttribute('active-theme',theme);
                }
            })
        })
    }

    disconnectedCallback() {}
      
    adoptedCallback() {}
    
    
    switchTheme(value){
        //Change theme on attribute change
        const currentMode = themes[value];
        Object.keys(currentMode).forEach(property => document.body.style.setProperty(property, currentMode[property]));
    }

    attributeChangedCallback(name, oldValue, newValue) {
        //Calls per attr change
        let attrCalls = {
            "active-theme":this.switchTheme
        }

        //if callback is assigned for named attr and it has previous value
        if (name in attrCalls && oldValue && oldValue != newValue){
            console.log('[THEME SWITCH] attributes changed.',{name,oldValue,newValue});
            attrCalls[name].call(this,newValue)
        }
        
        
    }

    static get observedAttributes() { return ['active-theme']; }
}



window.customElements.define('theme-switch', ThemeSwitch);