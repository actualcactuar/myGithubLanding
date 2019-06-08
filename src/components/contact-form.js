
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
