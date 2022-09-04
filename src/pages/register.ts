import Button from '../components/button';
import Register from '../components/register';
import Input from '../components/input';

const template: string = [
  new Register({
    buttonLogin: new Button({
      type: 'button',
      style: 'secondary',
      text: 'Sign in',
    }).render(),
    buttonRegister: new Button({
      type: 'submit',
      style: 'primary',
      text: 'Register',
    }).render(),
    inputEmail: new Input({
      type: 'text',
      name: 'email',
      placeholder: 'Email',
      disabled: '',
      value: '',
    }).render(),
    inputLogin: new Input({
      type: 'text',
      name: 'login',
      placeholder: 'Login',
      disabled: '',
      value: '',
    }).render(),
    inputFirstName: new Input({
      type: 'text',
      name: 'first_name',
      placeholder: 'Name',
      disabled: '',
      value: '',
    }).render(),
    inputSecondName: new Input({
      type: 'text',
      name: 'second_name',
      placeholder: 'Surname',
      disabled: '',
      value: '',
    }).render(),
    inputPhone: new Input({
      type: 'text',
      name: 'phone',
      placeholder: 'Phone number',
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
    inputRepeatPassword: new Input({
      type: 'password',
      name: 'password-repeat',
      placeholder: 'Password (repeat)',
      disabled: '',
      value: '',
    }).render(),
  }).render(),
].join('');

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
document.getElementById('root')!.innerHTML = template;
