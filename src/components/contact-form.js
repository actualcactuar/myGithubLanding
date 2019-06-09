

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
        console.log(event)

        // If fetch is not supported default to oldschool submission
        if(!('fetch' in window)){return};
        
        event.preventDefault();

        console.log(this)

        this.host.classList.add('sending');

        fetch(this.host.action,{
            method:this.host.method,
            headers: {
                    "Content-Type": this.host.enctype,
                },
            body:JSON.stringify(this.data)
        })
        .then(res => res.json())
        .then(json => {
            this.host.classList.remove('sending');
            this.host.classList.add('completed');
            this.host.reset();

            setTimeout(()=>{
                form.classList.remove('completed');
            },1000)
        })

    }


}
