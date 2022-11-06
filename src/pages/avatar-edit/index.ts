import Handlebars from 'handlebars';
import Button from '../../components/button';
import Block from '../../utils/block';
import router from '../../utils/router';
import { withStore } from '../../utils/store';
import template from './avatar-edit.tmpl';
import { ROUTES } from '../../constants/constant-routes';
import UserController from '../../controllers/user-controller';

class ChangeAvatarBase extends Block {
  constructor() {
    super({
      events: {
        submit: (e: Event) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          const avatarInput: HTMLInputElement = form.querySelector('#avatar')!;
          console.log('upload', form, avatarInput);
          if (avatarInput.value) {
            UserController.changeAvatar(new FormData(form));
          }
        },
      },
    });
  }

  init() {
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

export const ChangeAvatarPage = withUser(ChangeAvatarBase);
