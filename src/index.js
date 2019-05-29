// import styles here
import './styles/styles.scss';

// js here -->

console.log(navigator.userAgent)
//target specific browser if needed
document.body.setAttribute('user-agent',navigator.userAgent);

class myClass {
    constructor({name}){
        this.name = name;
    }

    name () {
        return this.name;
    }

}

var app = new myClass('test');

const promise = new Promise((resolve,reject) => {
    resolve(true)
})

promise.then(res => console.log(res))