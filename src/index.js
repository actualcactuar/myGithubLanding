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


// Sharing the page
let sharer = document.querySelector('#share');
if(sharer){

    let shareCase = navigator.share ? 'sheet' : 'prompt';

    let shareOptions = {
        'sheet':() => {
            navigator.share({
                title: 'Actualcactuar',
                text: 'Homepage / showcase of my favourite technologies',
                url: window.location.href
              }).catch(err => {
                prompt("Erroc occured while sharing, here is a snippet!", window.location.href);
                  
              })
        },
        'prompt': () => {
            prompt("Your browser doesn't support share API, but here is a snippet!", window.location.href);
        }
    }

    sharer.addEventListener('click', () => {
        shareOptions[shareCase].call();
    });

}