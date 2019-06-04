// import styles here
import './styles/styles.scss';

// js here -->

//target specific browser if needed
document.body.setAttribute('user-agent',navigator.userAgent);

//handle form submission
var form = document.querySelector('#contactForm');
form.addEventListener('submit', event => {

    event.preventDefault();

    let form = event.target;
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
        form.reset();
    })


})
