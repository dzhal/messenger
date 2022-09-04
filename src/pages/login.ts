import Button from '../components/button';
import Login from '../components/login';
import Input from '../components/input';

const template: string = [
  new Login({
    buttonLogin: new Button({
      type: 'submit',
      style: 'primary',
      text: 'Sign in',
    }).render(),
    buttonRegister: new Button({
      type: 'button',
      style: 'secondary',
      text: 'Register',
    }).render(),
    inputLogin: new Input({
      type: 'text',
      name: 'login',
      placeholder: 'Username',
      disabled: '',
      value: '',
    }).render(),
    inputPassword: new Input({
      type: 'password',
      name: 'password',
      placeholder: 'Password',
      disabled: '',
      value: '',
    }).render(),
  }).render(),
].join('');

document.getElementById('root')!.innerHTML = template;
