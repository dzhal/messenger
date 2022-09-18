import Input from '../components/input';
import Profile from '../components/profile';
import back from '../assets/images/back.svg';
import Avatar from '../components/avatar';
import Button from '../components/button';
import Image from '../components/image';
import Backblock from '../components/backblock';
import router from '../utils/router';
import AuthController from '../controllers/auth-controller';

const fragment = new Profile({
  backblock: new Backblock({
    imageBack: new Image({
      src: back,
      alt: 'back',
    }),
    events: {
      click: () => router.go('/messenger'),
    },
  }),
  avatar: new Avatar({}),
  name: 'Ivan',
  inputEmail: new Input({
    type: 'text',
    placeholder: 'Email',
    disabled: 'disabled',
    value: 'ivan@gmail.com',
  }),
  inputLogin: new Input({
    type: 'text',
    name: 'login',
    placeholder: 'Login',
    disabled: 'disabled',
    value: 'ivanivanov',
  }),
  inputFirstName: new Input({
    type: 'text',
    name: 'first_name',
    placeholder: 'Name',
    disabled: 'disabled',
    value: 'ivan',
  }),
  inputSecondName: new Input({
    type: 'text',
    name: 'second_name',
    placeholder: 'Surname',
    disabled: 'disabled',
    value: 'ivanov',
  }),
  inputPhone: new Input({
    type: 'text',
    name: 'phone',
    placeholder: 'Phone number',
    disabled: 'disabled',
    value: '+7 (909) 967 30 30',
  }),
  inputChatName: new Input({
    type: 'text',
    name: 'chat_name',
    placeholder: 'Chatname',
    disabled: 'disabled',
    value: 'ivanishe',
  }),
  buttonChangeData: new Button({
    type: 'button',
    className: 'button_secondary',
    text: 'Change data',
  }),
  buttonPassword: new Button({
    type: 'button',
    className: 'button_secondary',
    text: 'Change password',
  }),
  buttonQuit: new Button({
    type: 'button',
    className: 'button_secondary',
    text: 'Quit',
    events: {
      click: () => {
        AuthController.logout();
        router.go('/');
      },
    },
  }),
});

export default fragment.getContent();
