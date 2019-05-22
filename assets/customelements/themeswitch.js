const themes = {
    
    default:{
        "--theme-color-default":"#323232",
        "--theme-footer-bg-default":"linear-gradient(90deg, rgba(50,50,50,0.4),rgba(50,50,50,0.6)), url(\"/assets/wallpapers/browser-black-paint.jpg\")"
    },
    primary:{
        "--theme-color-default":"#1097e6",
        "--theme-footer-bg-default":"linear-gradient(90deg,rgba(16, 151, 230,0.6),rgba(16, 151, 230,0.8)),url(\"/assets/wallpapers/browser-black-paint.jpg\")"
    },
    secondary:{
        "--theme-color-default":"#fa3678",
        "--theme-footer-bg-default":"linear-gradient(90deg,rgba(250, 54, 120,0.6),rgba(250, 54, 120,0.8)),url(\"/assets/wallpapers/browser-black-paint.jpg\")"
    },
    tertiary:{
        "--theme-color-default":"#23c077",
        "--theme-footer-bg-default":"linear-gradient(90deg,rgba(35, 192, 119,0.6),rgba(35, 192, 119,0.8)),url(\"/assets/wallpapers/browser-black-paint.jpg\")"
    }
}

const tpl = () => `
    <style>
    .theme-switch{
        position:relative;   
       }
       .theme-switch__trigger svg {
           width: 24px;
           height: 24px;
       }
       
       .theme-switch__trigger {
           width:36px;
           height: 36px;
           margin:0;
           border:0;
           outline:0;
           display:flex;
           justify-content:center;
           align-items:center;
           border-radius:50%;
           background-color: #fefefe;
           box-shadow: 0px 2px 5px -3px #323232;
           cursor:pointer;
       }
       
       .theme-switch__trigger:hover{
           background-color:#eeeeee;
       }
       
       .theme-switch__trigger:active{
           background-color:#dadada;
       }
       .theme-switch__options {
           position: absolute;
           top: 40px;
           left: -40px;
           padding: 8px;
           background-color: #fefefe;
           display: flex;
           flex-wrap: wrap;
           width: 120px;
           margin-top: 16px;
           box-sizing:border-box;
           border-radius:2px;
           box-shadow: 0 2px 7px -4px #323232;
           transition: transform 0ms ease 200ms, opacity 200ms ease;
           transform: scale(0);
           transform-origin: top center;
           opacity: 0;
       }

      
       
       .theme-switch__option {
           width: 36px;
           height: 36px;
           margin: 8px;
           border-radius:50%;
           overflow:hidden;    
           transition: transform 200ms ease 100ms, opacity 200ms ease 100ms;
           opacity: 0;
           transform: translateY(1rem);
           border:none;
           outline:none;
           cursor:pointer;    
           box-shadow: 0px 2px 5px -3px #323232;
       }

       .theme-switch__option[theme="default"]{
            background-color: #323232;
        }

       .theme-switch__option[theme="primary"]{
            background-color: #0577b9;
        }
        .theme-switch__option[theme="secondary"]{
            background-color: #fa3678;
        }
        .theme-switch__option[theme="tertiary"]{
            background-color: #23c077;
        }
       .theme-switch__options:before {
           content: "";
           top: -16px;
           left: 50%;
           border: 16px solid #fefefe;
           position: absolute;
           border-right-color: transparent;
           border-top-width: 0;
           border-left-color: transparent;
           transform:translateX(-50%);
       }

       .theme-switch.active .theme-switch__options{
           opacity: 1;
           transform: scale(1);
           transition: transform 200ms ease, opacity 200ms ease;
       }
       .theme-switch.active .theme-switch__option{
           opacity: 1;
           transform: translateY(0);
       }
    </style>
    <div class="theme-switch">
        <button class="theme-switch__trigger"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M112 264c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm32-112c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM256 0c-16.9 0-34.2 1.6-51.7 5C104.9 24.4 24.8 104.3 5.2 203.4-29.4 378.5 116.4 512 239.5 512c8.3 0 16.5-.6 24.6-1.9 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.6 113.9 397.1 0 256 0zm191.1 288h-79.7c-35.3 0-67.4 17.9-85.7 47.8-18.2 29.7-19.6 66-3.7 97.2 4.9 9.6 4.8 21.6-.1 31.3-2.4 4.6-7.9 12.6-18.7 14.3-6.3 1-12.9 1.5-19.7 1.5-54.6 0-114.1-31.3-155.5-81.6-44-53.6-60.9-120.6-47.4-188.7 17.1-86.6 87-156.2 173.9-173.2 15.2-3 30.5-4.5 45.5-4.5 123.1 0 223.6 99.9 224 222.6 0 18.3-14.8 33.3-32.9 33.3zM368 136c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM240 88c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z"/></svg></button>
        <div class="theme-switch__options">
            <button class="theme-switch__option" theme="default"></button>
            <button class="theme-switch__option" theme="primary"></button>
            <button class="theme-switch__option" theme="secondary"></button>
            <button class="theme-switch__option" theme="tertiary"></button>
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

        let container = this.shadowRoot.querySelector('.theme-switch');
        let trigger = this.shadowRoot.querySelector('.theme-switch__trigger');

        let options = this.shadowRoot.querySelectorAll('.theme-switch__option');
        options.forEach((option,index) => {
            option.style.transitionDelay = `${(25 * index) + 100}ms`;
            option.addEventListener('click',event => {
                var theme = option.getAttribute('theme');
                if(theme in themes){

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



window.customElements.define('theme-switch', ThemeSwitch);