import template from './theme-switch.html';

const themes = {
    
    default:{
        "--theme-color-default":"#323232",
        "--theme-bg-default":"linear-gradient(90deg, rgba(50,50,50,0.4),rgba(50,50,50,0.6)), url(\"/assets/wallpapers/rawpixel_black_paint.jpg\")",
        "--dark-section-bg":"linear-gradient(90deg,#232c2f 0% 20%,#5e7272 20% 40%,#515151 40% 60%,#a49e9c 60% 80%,#e1d6d3 80% 100%)"
    },
    primary:{
        "--theme-color-default":"#1e8e97",
        "--theme-bg-default":"linear-gradient(90deg, rgba(2, 78, 173, 0.2),rgba(2,78,173,0.2)), url(\"/assets/wallpapers/rawpixel_vector.jpg\")",
        "--dark-section-bg":"linear-gradient(45deg, #c76362 0% 5%,#1e8e97 5% 25%,#0b193f 25% 75%, #1e8e97 75% 95%, #C76363 95% 100%)"
    },
    secondary:{
        "--theme-color-default":"#e65266",
        "--theme-bg-default":"linear-gradient(90deg,rgba(173, 42, 59, .4),rgba(230, 82, 102, .6)),url(\"/assets/wallpapers/rawpixel_red_smoke.jpg\")",
        "--dark-section-bg":"linear-gradient(90deg,#ad2a3b 0% 25%,#e65266 25%)"
    },
    tertiary:{
        "--theme-color-default":"#ffb716",
        "--theme-bg-default":"url(\"/assets/wallpapers/rawpixel_yellow.jpg\")",
        "--dark-section-bg":"#ffb716"
    }
}

export class ThemeSwitch extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.id = this.getAttribute('id');
        console.log(this.id)
    }

    connectedCallback() {
        console.log('connected');
        this.shadowRoot.innerHTML = template;

        let container = this.shadowRoot.querySelector('.theme-switch');
        let trigger = this.shadowRoot.querySelector('.theme-switch__trigger');

        let extTriggers = document.querySelectorAll(`[trigger-for="${this.id}"]`);
        extTriggers.forEach(trigger => trigger.addEventListener('click',() => {
            trigger.classList.toggle('active')
            container.classList.toggle('active')
        }));

        let options = this.shadowRoot.querySelectorAll('.theme-switch__option');
        options.forEach((option,index) => {
            option.style.transitionDelay = `${(25 * index) + 100}ms`;
            option.addEventListener('click',event => {
                var theme = option.getAttribute('theme');
                var activeOption = this.shadowRoot.querySelector('.theme-switch__option.active');
                if(activeOption){
                    activeOption.classList.remove('active');
                }
                if(theme in themes){
                    option.classList.add('active');
                    this.setAttribute('active-theme',theme);
                }
            })
        })

        if(trigger && container){
            trigger.addEventListener('click',event => {
                container.classList.toggle('active');
            })
        }
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
