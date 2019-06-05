// import styles here
import './styles/styles.scss';

// js here -->

//target specific browser if needed
document.body.setAttribute('user-agent',navigator.userAgent);

let menuTrigger = document.querySelector('#menu-trigger');
let navigation = document.querySelector('.navigation');
if(menuTrigger && navigation) {

    navigation.toggle = () => {
        
        navigation.classList.toggle('active');
        menuTrigger.classList.toggle('active');

    }
    console.log(menuTrigger)
    menuTrigger.addEventListener('click',event => {
        navigation.toggle();
    })

    let navItems = navigation.querySelectorAll('a');
    navItems.forEach(item => {
        item.addEventListener('click', event => {
            setTimeout(() => {

                navigation.toggle();
            },200)
        })
    })
}

//handle form submission
let form = document.querySelector('#contactForm');
form.addEventListener('submit', (event) => {

    event.preventDefault();

    let form = event.target;
    
    let button = form.querySelector('button');
    button.classList.add('active');

    let formJSON = {};

    let inputs = form.querySelectorAll('input,textarea');
    inputs.forEach(input => {
        let key = input.getAttribute('name');
        let value = input.value;
        formJSON[key] = value;
    })

    form.classList.add('sending');

    fetch(form.getAttribute('action'),{
        method:form.getAttribute('method'),
        headers: {
                "Content-Type": form.getAttribute('enctype'),
            },
        body:JSON.stringify(formJSON)
    })
    .then(res => res.json())
    .then(json => {
        form.classList.remove('sending');
        form.classList.add('completed');
        button.classList.remove('active');
        form.reset();

        setTimeout(()=>{
            form.classList.remove('completed');
        },1000)
    })


})
