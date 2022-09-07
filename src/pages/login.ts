import Button from '../components/button';
import Login from '../components/login';
import Input from '../components/input';
import LabeledInput from '../components/labeledinput';
import { loginSubmitHandler } from '../utils/submitHandlers';

const fragment = new Login({
  buttonLogin: new Button({
    type: 'submit',
    className: 'button_primary',
    text: 'Sign in',
    events: {
      click: () => loginSubmitHandler(),
    },
  }),
  buttonRegister: new Button({
    type: 'button',
    className: 'button_secondary',
    text: 'Register',
  }),
  inputLogin: new LabeledInput({
    input: new Input({
      type: 'text',
      name: 'login',
    }),
    placeholder: 'Login',
  }),
  inputPassword: new LabeledInput({
    input: new Input({
      type: 'password',
      name: 'password',
    }),
    placeholder: 'Password',
  }),
});

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
document.getElementById('root')?.append(fragment.getContent());
