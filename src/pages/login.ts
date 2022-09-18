import Button from '../components/button';
import Login from '../components/login';
import Input from '../components/input';
import LabeledInput from '../components/labeledinput';
import { loginSubmitHandler } from '../utils/submitHandlers';
import { loginRules } from '../utils/validateRules';
import router from '../utils/router';

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
    events: {
      click: () => router.go('/sign-up'),
    },
  }),
  inputLogin: new LabeledInput({
    input: new Input({
      type: 'text',
      name: 'login',
      rules: loginRules.login,
    }),
    placeholder: 'Login',
  }),
  inputPassword: new LabeledInput({
    input: new Input({
      type: 'password',
      name: 'password',
      rules: loginRules.password,
    }),
    placeholder: 'Password',
  }),
});

export default fragment.getContent();
