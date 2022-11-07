import Handlebars from 'handlebars';
import Avatar from '../../components/avatar';
import Backblock from '../../components/backblock';
import Image from '../../components/image';
import Button from '../../components/button';
import Input from '../../components/input';
import Block from '../../utils/block';
import router from '../../utils/router';
import { withStore } from '../../utils/store';
import template from './profile.tmpl';
import back from '../../assets/images/back.svg';
import LabeledInput from '../../components/labeledinput';
import { ROUTES } from '../../constants/constant-routes';
import UserController from '../../controllers/user-controller';
import { TUserData } from '../../utils/types';
import { editProfileRules } from '../../utils/validateRules';

class EditProfileBase extends Block {
  init() {
    this.children.avatar = new Avatar({
      avatar: this.props.avatar,
      events: {
        click: () => router.go(ROUTES.changeAvatar),
      },
    });

    this.children.backblock = new Backblock({
      imageBack: new Image({
        src: back,
        alt: 'back',
      }),
      events: {
        click: () => router.go(ROUTES.chat),
      },
    });
    this.children.inputEmail = new LabeledInput({
      input: new Input({
        type: 'text',
        name: 'email',
        value: this.props.email,
        rules: editProfileRules.email,
      }),
      placeholder: 'Email',
    });
    this.children.inputLogin = new LabeledInput({
      input: new Input({
        type: 'text',
        name: 'login',
        value: this.props.login,
        rules: editProfileRules.login,
      }),
      placeholder: 'Login',
    });
    this.children.inputFirstName = new LabeledInput({
      input: new Input({
        type: 'text',
        name: 'first_name',
        value: this.props.first_name,
        rules: editProfileRules.first_name,
      }),
      placeholder: 'First name',
    });
    this.children.inputSecondName = new LabeledInput({
      input: new Input({
        type: 'text',
        name: 'second_name',
        value: this.props.second_name,
        rules: editProfileRules.second_name,
      }),
      placeholder: 'Second name',
    });
    this.children.inputPhone = new LabeledInput({
      input: new Input({
        type: 'text',
        name: 'phone',
        value: this.props.phone,
        rules: editProfileRules.phone,
      }),
      placeholder: 'Phone',
    });
    this.children.inputChatName = new LabeledInput({
      input: new Input({
        type: 'text',
        name: 'display_name',
        value: this.props.display_name || '',
        rules: editProfileRules.display_name,
      }),
      placeholder: 'Display name',
    });

    this.children.buttonSave = new Button({
      type: 'button',
      className: 'button_secondary',
      text: 'Save',
      events: {
        click: () => {
          const profileData = {} as TUserData;
          const inputs = document.querySelectorAll('input');

          inputs.forEach((input) => {
            profileData[input.name as keyof TUserData] = input.value;
          });

          UserController.edit(profileData);
        },
      },
    });
    this.children.buttonCancel = new Button({
      type: 'button',
      className: 'button_secondary',
      text: 'Cancel',
      events: {
        click: () => {
          router.go(ROUTES.profile);
        },
      },
    });
  }

  render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}

const withUser = withStore((state) => ({ ...state.user }));

export const EditProfilePage = withUser(EditProfileBase);
