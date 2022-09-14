import Button from '../components/button';
import Register from '../components/register';
import Input from '../components/input';
import { registrationSubmitHandler } from '../utils/submitHandlers';
import LabeledInput from '../components/labeledinput';
import { registerRules } from '../utils/validateRules';
import Router from '../utils/router';

const router = new Router('#root');

const fragment = new Register({
  buttonRegister: new Button({
    type: 'submit',
    className: 'button_primary',
    text: 'Register',
    events: {
      click: (event: SubmitEvent) => {
        event.preventDefault();
        registrationSubmitHandler();
      },
    },
  }),
  buttonLogin: new Button({
    type: 'button',
    className: 'button_secondary',
    text: 'Sign in',
    events: {
      click: () => router.go('/'),
    },
  }),
  inputEmail: new LabeledInput({
    input: new Input({
      type: 'text',
      name: 'email',
      rules: registerRules.email,
    }),
    placeholder: 'Email',
  }),
  inputLogin: new LabeledInput({
    input: new Input({
      type: 'text',
      name: 'login',
      rules: registerRules.login,
    }),
    placeholder: 'Login',
  }),
  inputFirstName: new LabeledInput({
    input: new Input({
      type: 'text',
      name: 'first_name',
      rules: registerRules.first_name,
    }),
    placeholder: 'Name',
  }),
  inputSecondName: new LabeledInput({
    input: new Input({
      type: 'text',
      name: 'second_name',
      rules: registerRules.second_name,
    }),
    placeholder: 'Surname',
  }),
  inputPhone: new LabeledInput({
    input: new Input({
      type: 'text',
      name: 'phone',
      rules: registerRules.phone,
    }),
    placeholder: 'Phone number',
  }),
  inputPassword: new LabeledInput({
    input: new Input({
      type: 'password',
      name: 'password',
      rules: registerRules.password,
    }),
    placeholder: 'Password',
  }),
  inputRepeatPassword: new LabeledInput({
    input: new Input({
      type: 'password',
      name: 'password_repeat',
      rules: registerRules.password_repeat,
    }),
    placeholder: 'Password (repeat)',
  }),
});

export default fragment.getContent();
