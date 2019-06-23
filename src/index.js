// import styles here
import './styles/styles.scss';

// js here -->
import { DynamicForm } from './components/contact-form';
import { Menu } from './components/menu';
import { TemplateRendererEngine } from './lib/renderer';

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
                prompt("Error occured while sharing, here is a snippet!", window.location.href);
                  
              })
        },
        'prompt': () => {
            prompt("Your browser doesn't support the share API, but here is a snippet!", window.location.href);
        }
    }

    sharer.addEventListener('click', () => {
        shareOptions[shareCase].call();
    });

}


const engine = new TemplateRendererEngine();
const postsTarget = document.querySelector('#posts');
const tpl = postsTarget ? postsTarget.innerHTML : null;

if(tpl){

    fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(json => {
        let topPosts = json.slice(0,4)
        let renderedPosts = engine.render(tpl,{posts:topPosts});
        postsTarget.innerHTML = renderedPosts;
    
    });
    
}

