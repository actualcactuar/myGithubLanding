

export class DynamicForm {
    
    constructor(element){
        this.host = element;
        this.inputs = this.host.querySelectorAll('input,textarea,select');
        this.host.addEventListener('submit', event => {
            this.send(event);
        });
        this.submitButton = this.host.querySelector('button[type="submit"]');
    }

    get data () {
        let data = {};
        this.inputs.forEach(input => data[input.getAttribute('name')] = input.value);
        return data;
    }

    send (event) {

        this.submitButton.classList.add('active');

        // If fetch is not supported default to oldschool submission
        if(!('fetch' in window)){return};
        
        event.preventDefault();

        fetch(this.host.action,{
            method:this.host.getAttribute('method'),
            headers: {
                    "Content-Type": this.host.getAttribute('enctype'),
                },
            body:JSON.stringify(this.data)
        })
        .then(res => res.json())
        .then(json => {
            this.host.reset();
            this.submitButton.classList.remove('active');
            this.submitButton.classList.add('completed');

            setTimeout(()=>{;
                this.submitButton.classList.remove('completed');
            },1000)
        })

    }

}
