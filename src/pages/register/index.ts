import template from './register.tmpl';
import Handlebars from 'handlebars';
import Block from '../../utils/block';
import LabeledInput from '../../components/labeledinput';
import Input from '../../components/input';
import { registerRules } from '../../utils/validateRules';
import router from '../../utils/router';
import Button from '../../components/button';
import { registrationSubmitHandler } from '../../utils/submitHandlers';

export class RegisterPage extends Block {
  init() {
    this.children.buttonRegister = new Button({
      type: 'submit',
      className: 'button_primary',
      text: 'Register',
      events: {
        click: (event: SubmitEvent) => {
          event.preventDefault();
          registrationSubmitHandler();
        },
      },
    });
    this.children.buttonLogin = new Button({
      type: 'button',
      className: 'button_secondary',
      text: 'Sign in',
      events: {
        click: () => router.go('/'),
      },
    });
    this.children.inputEmail = new LabeledInput({
      input: new Input({
        type: 'text',
        name: 'email',
        rules: registerRules.email,
      }),
      placeholder: 'Email',
    });
    this.children.inputLogin = new LabeledInput({
      input: new Input({
        type: 'text',
        name: 'login',
        rules: registerRules.login,
      }),
      placeholder: 'Login',
    });
    this.children.inputFirstName = new LabeledInput({
      input: new Input({
        type: 'text',
        name: 'first_name',
        rules: registerRules.first_name,
      }),
      placeholder: 'Name',
    });
    this.children.inputSecondName = new LabeledInput({
      input: new Input({
        type: 'text',
        name: 'second_name',
        rules: registerRules.second_name,
      }),
      placeholder: 'Surname',
    });
    this.children.inputPhone = new LabeledInput({
      input: new Input({
        type: 'text',
        name: 'phone',
        rules: registerRules.phone,
      }),
      placeholder: 'Phone number',
    });
    this.children.inputPassword = new LabeledInput({
      input: new Input({
        type: 'password',
        name: 'password',
        rules: registerRules.password,
      }),
      placeholder: 'Password',
    });
    this.children.inputRepeatPassword = new LabeledInput({
      input: new Input({
        type: 'password',
        name: 'password_repeat',
        rules: registerRules.password_repeat,
      }),
      placeholder: 'Password (repeat)',
    });
  }

  render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
