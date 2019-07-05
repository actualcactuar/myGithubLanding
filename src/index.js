// import styles here
import './styles/styles.scss';


// modules here -->
import * as axios from 'axios' ;

// js here -->
import { DynamicForm } from './components/contact-form';
import { Menu } from './components/menu';
import { TemplateRendererEngine } from './lib/renderer';

// Target specific browser if needed
document.body.setAttribute('user-agent',navigator.userAgent);
const canWebComponents = 'customElements' in window ? true :false;
document.body.setAttribute('can-webComponents',canWebComponents);


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

    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => res.data).then(json => {
        let topPosts = json.slice(0,4)
        let renderedPosts = engine.render(tpl,{posts:topPosts});
        postsTarget.innerHTML = renderedPosts;
    }).then(() => 
        createObserver()
    );
    
}

function createObserver () {

    const cols = document.querySelectorAll('[class^="col-"]');

    if(!('IntersectionObserver' in window)){

        cols.forEach(col => col.classList.add('visible'));

    } else {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              if (entry.intersectionRatio > 0) {
                entry.target.classList.add('visible');
              } 
            });
          });
          
          cols.forEach(col => {
            observer.observe(col);
          });
    }

    
}
