import Handlebars from 'handlebars';
import Avatar from '../../components/avatar';
import Backblock from '../../components/backblock';
import Image from '../../components/image';
import Button from '../../components/button';
import Input from '../../components/input';
import AuthController from '../../controllers/auth-controller';
import Block from '../../utils/block';
import router from '../../utils/router';
import store, { withStore } from '../../utils/store';
import template from './profile.tmpl';
import back from '../../assets/images/back.svg';
import LabeledInput from '../../components/labeledinput';
import { ROUTES } from '../../constants/constant-routes';

class ProfileBase extends Block {
  init() {
    console.log(this.props);
    console.log(store);
    this.children.avatar = new Avatar({
      avatar: this.props.avatar,
    });

    this.children.backblock = new Backblock({
      imageBack: new Image({
        src: back,
        alt: 'back',
      }),
      events: {
        click: () => router.go('/messenger'),
      },
    });
    this.children.inputEmail = new LabeledInput({
      input: new Input({
        type: 'text',
        name: 'email',
        disabled: 'disabled',
        value: this.props.email,
      }),
      placeholder: 'Email',
    });
    this.children.inputLogin = new LabeledInput({
      input: new Input({
        type: 'text',
        name: 'login',
        disabled: 'disabled',
        value: this.props.login,
      }),
      placeholder: 'Login',
    });
    this.children.inputFirstName = new LabeledInput({
      input: new Input({
        type: 'text',
        name: 'login',
        disabled: 'disabled',
        value: this.props.first_name,
      }),
      placeholder: 'First name',
    });
    this.children.inputSecondName = new LabeledInput({
      input: new Input({
        type: 'text',
        name: 'second_name',
        disabled: 'disabled',
        value: this.props.second_name,
      }),
      placeholder: 'Second name',
    });
    this.children.inputPhone = new LabeledInput({
      input: new Input({
        type: 'text',
        name: 'phone',
        disabled: 'disabled',
        value: this.props.phone,
      }),
      placeholder: 'Phone',
    });
    new Input({
      type: 'text',
      name: 'phone',
      placeholder: 'Phone number',
      disabled: 'disabled',
      value: '+7 (909) 967 30 30',
    });
    this.children.inputChatName = new LabeledInput({
      input: new Input({
        type: 'text',
        name: 'display_name',
        disabled: 'disabled',
        value: this.props.display_name || '',
      }),
      placeholder: 'Display name',
    });

    this.children.buttonChangeData = new Button({
      type: 'button',
      className: 'button_secondary',
      text: 'Change data',
      events: {
        click: () => {
          router.go(ROUTES.profileEdit);
        },
      },
    });
    this.children.buttonPassword = new Button({
      type: 'button',
      className: 'button_secondary',
      text: 'Change password',
      events: {
        click: () => {
          router.go(ROUTES.changePassword);
        },
      },
    });
    this.children.buttonQuit = new Button({
      type: 'button',
      className: 'button_secondary',
      text: 'Quit',
      events: {
        click: () => {
          AuthController.logout();
          router.go(ROUTES.login);
        },
      },
    });
  }

  render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}

const withUser = withStore((state) => ({ ...state.user }));

export const ProfilePage = withUser(ProfileBase);
