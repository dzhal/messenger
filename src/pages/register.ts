import Button from '../components/button';
import Register from '../components/register';
import Input from '../components/input';
import { submitHandler } from '../utils/submitHandler';
import LabeledInput from '../components/labeledinput';

const fragment = new Register({
  buttonRegister: new Button({
    type: 'submit',
    className: 'button_primary',
    text: 'Register',
    events: {
      click: (event: SubmitEvent) => {
        event.preventDefault();
        submitHandler();
      },
    },
  }),
  buttonLogin: new Button({
    type: 'button',
    className: 'button_secondary',
    text: 'Sign in',
  }),
  inputEmail: new LabeledInput({
    input: new Input({
      type: 'text',
      name: 'email',
    }),
    placeholder: 'Email',
  }),
  inputLogin: new LabeledInput({
    input: new Input({
      type: 'text',
      name: 'login',
    }),
    placeholder: 'Login',
  }),
  inputFirstName: new LabeledInput({
    input: new Input({
      type: 'text',
      name: 'first_name',
    }),
    placeholder: 'Name',
  }),
  inputSecondName: new LabeledInput({
    input: new Input({
      type: 'text',
      name: 'second_name',
    }),
    placeholder: 'Surname',
  }),
  inputPhone: new LabeledInput({
    input: new Input({
      type: 'text',
      name: 'phone',
    }),
    placeholder: 'Phone number',
  }),
  inputPassword: new LabeledInput({
    input: new Input({
      type: 'password',
      name: 'password',
    }),
    placeholder: 'Password',
  }),
  inputRepeatPassword: new LabeledInput({
    input: new Input({
      type: 'password',
      name: 'password-repeat',
    }),
    placeholder: 'Password (repeat)',
  }),
});

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
document.getElementById('root')?.append(fragment.getContent());
