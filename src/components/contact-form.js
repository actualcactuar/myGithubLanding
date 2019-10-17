import * as axios from 'axios';

export class DynamicForm {
  constructor(element) {
    this.host = element;
    this.inputs = this.host.querySelectorAll('input,textarea,select');
    this.host.addEventListener('submit', event => {
      this.send(event);
    });
    this.submitButton = this.host.querySelector('button[type="submit"]');
  }

  get data() {
    let data = {};
    this.inputs.forEach(input => {
      const key = input.getAttribute('name');
      const { value } = input;
      data = { ...data, [key]: value };
    });
    return data;
  }

  async send(event) {
    this.submitButton.classList.add('active');

    event.preventDefault();
    await axios.post(this.host.action, this.data, {
      headers: {
        'Content-Type': this.host.getAttribute('enctype'),
      },
    });
    this.host.reset();
    this.submitButton.classList.remove('active');
    this.submitButton.classList.add('completed');

    setTimeout(() => {
      this.submitButton.classList.remove('completed');
    }, 1000);
  }
}
