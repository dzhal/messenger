import template from './login.tmpl';
import Handlebars from 'handlebars';
import Block from '../../utils/block';
import Button from '../../components/button';
import { loginSubmitHandler } from '../../utils/submitHandlers';
import router from '../../utils/router';
import LabeledInput from '../../components/labeledinput';
import Input from '../../components/input';
import { loginRules } from '../../utils/validateRules';

export class LoginPage extends Block {
  init() {
    this.children.buttonLogin = new Button({
      type: 'submit',
      className: 'button_primary',
      text: 'Sign in',
      events: {
        click: () => loginSubmitHandler(),
      },
    });
    this.children.buttonRegister = new Button({
      type: 'button',
      className: 'button_secondary',
      text: 'Register',
      events: {
        click: () => router.go('/sign-up'),
      },
    });
    this.children.inputLogin = new LabeledInput({
      input: new Input({
        type: 'text',
        name: 'login',
        rules: loginRules.login,
      }),
      placeholder: 'Login',
    });
    this.children.inputPassword = new LabeledInput({
      input: new Input({
        type: 'password',
        name: 'password',
        rules: loginRules.password,
      }),
      placeholder: 'Password',
    });
  }

  render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
