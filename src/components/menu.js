
export class Menu {

    constructor(element){
        this.host = element;
        this._identifier = element.getAttribute('id');
        this.triggers = document.querySelectorAll(`[trigger-for="#${this._identifier}"]`);
        this.opened = false;
        this.items = this.host.querySelectorAll('a');

        // close on item click
        this.items.forEach(item => item.addEventListener('click', () => {
            this.close();
        }));

        // open on trigger click
        this.triggers.forEach(trigger => trigger.addEventListener('click', () => {
            this.toggle()
        }));
        
    }

    open () {
        this.triggers.forEach(trigger => trigger.classList.add('active'));
        this.host.classList.add('active');
        this.opened = true;
    }

    close () {
        this.triggers.forEach(trigger => trigger.classList.remove('active'));
        this.host.classList.remove('active');
        this.opened = false;
    }

    toggle () {
        if(this.opened){
            this.close();
        } else {
            this.open();
        }

    }


}
