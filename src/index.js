// import styles here
import './styles/styles.scss';

// js here -->
import { DynamicForm } from './components/contact-form';
import { Menu } from './components/menu';

// Target specific browser if needed
document.body.setAttribute('user-agent',navigator.userAgent);


// Initialize menu
let navigation = document.querySelector('.navigation');
if(navigation){
    new Menu(navigation);
}

// Initialize contact form
let form = document.querySelector('.dynamic-form');
if (form) {
    new DynamicForm(form);
}
