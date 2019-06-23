import { Proto } from './custom-elements/proto/proto';
import { ThemeSwitch } from './custom-elements/theme-switch/theme-switch';

if('customElements' in window ) {

    window.customElements.define('c-proto', Proto);
    window.customElements.define('c-theme-switch', ThemeSwitch);
}