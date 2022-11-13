import Handlebars from 'handlebars';
import Button from '../../components/button';
import Block from '../../core/block';
import router from '../../core/router';
import { withStore } from '../../core/store';
import template from './password-edit.tmpl';
import { ROUTES } from '../../constants/constant-routes';
import UserController from '../../controllers/user-controller';
import LabeledInput from '../../components/labeledinput';
import Input from '../../components/input';
import { editProfileRules } from '../../utils/validateRules';

class ChangePasswordBase extends Block {
  constructor() {
    super({
      events: {
        submit: (e: Event) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const oldPassword = (
            form.querySelector('input[name ="oldPassword"') as HTMLInputElement
          ).value;
          const newPassword = (
            form.querySelector('input[name ="newPassword"') as HTMLInputElement
          ).value;
          UserController.changePassword({ oldPassword, newPassword });
        },
      },
    });
  }

  init() {
    this.children.oldPassword = new LabeledInput({
      input: new Input({
        type: 'text',
        name: 'oldPassword',
        rules: editProfileRules.password,
      }),
      placeholder: 'Old password',
    });
    this.children.newPassword = new LabeledInput({
      input: new Input({
        type: 'text',
        name: 'newPassword',
        rules: editProfileRules.password,
      }),
      placeholder: 'New password',
    });
    this.children.buttonSave = new Button({
      type: 'submit',
      className: 'button_secondary',
      text: 'Save',
    });
    this.children.buttonCancel = new Button({
      type: 'button',
      className: 'button_secondary',
      text: 'Cancel',
      events: {
        click: () => {
          router.go(ROUTES.profileEdit);
        },
      },
    });
  }

  render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}

const withUser = withStore((state) => ({ ...state.user }));

export const ChangePasswordPage = withUser(ChangePasswordBase);
