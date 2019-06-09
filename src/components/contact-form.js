

export class DynamicForm {
    
    constructor(element){
        this.host = element;
        this.inputs = this.host.querySelectorAll('input,textarea,select');
        this.host.addEventListener('submit', event => {
            this.send(event);
        }); 
    }

    get data () {
        let data = {};
        this.inputs.forEach(input => data[input.getAttribute('name')] = input.value);
        return data;
    }

    send (event) {

        // If fetch is not supported default to oldschool submission
        if(!('fetch' in window)){return};
        
        event.preventDefault();

        this.host.classList.add('sending');

        fetch(this.host.action,{
            method:this.host.getAttribute('method'),
            headers: {
                    "Content-Type": this.host.getAttribute('enctype'),
                },
            body:JSON.stringify(this.data)
        })
        .then(res => res.json())
        .then(json => {
            this.host.classList.remove('sending');
            this.host.classList.add('completed');
            this.host.reset();

            setTimeout(()=>{
                this.host.classList.remove('completed');
            },1000)
        })

    }

}
