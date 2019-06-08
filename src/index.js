// import styles here
import './styles/styles.scss';

// js here -->
import './components/contact-form';
import { Menu } from './components/menu';

//target specific browser if needed
document.body.setAttribute('user-agent',navigator.userAgent);


//Initialize menu
let navigation = document.querySelector('.navigation');
if(navigation){
    new Menu(navigation)
}
